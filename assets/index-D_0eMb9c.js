(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Qp={exports:{}},xu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function GR(){if(i0)return xu;i0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return xu.Fragment=e,xu.jsx=t,xu.jsxs=t,xu}var s0;function QR(){return s0||(s0=1,Qp.exports=GR()),Qp.exports}var k=QR(),Yp={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function YR(){if(r0)return Ce;r0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function w(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,G={};function K(x,J,se){this.props=x,this.context=J,this.refs=G,this.updater=se||M}K.prototype.isReactComponent={},K.prototype.setState=function(x,J){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,J,"setState")},K.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function he(){}he.prototype=K.prototype;function le(x,J,se){this.props=x,this.context=J,this.refs=G,this.updater=se||M}var ae=le.prototype=new he;ae.constructor=le,z(ae,K.prototype),ae.isPureReactComponent=!0;var Re=Array.isArray,ye={H:null,A:null,T:null,S:null,V:null},ze=Object.prototype.hasOwnProperty;function V(x,J,se,ee,pe,De){return se=De.ref,{$$typeof:n,type:x,key:J,ref:se!==void 0?se:null,props:De}}function A(x,J){return V(x.type,J,void 0,void 0,void 0,x.props)}function I(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function N(x){var J={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(se){return J[se]})}var D=/\/+/g;function P(x,J){return typeof x=="object"&&x!==null&&x.key!=null?N(""+x.key):J.toString(36)}function R(){}function Vt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(R,R):(x.status="pending",x.then(function(J){x.status==="pending"&&(x.status="fulfilled",x.value=J)},function(J){x.status==="pending"&&(x.status="rejected",x.reason=J)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function ct(x,J,se,ee,pe){var De=typeof x;(De==="undefined"||De==="boolean")&&(x=null);var we=!1;if(x===null)we=!0;else switch(De){case"bigint":case"string":case"number":we=!0;break;case"object":switch(x.$$typeof){case n:case e:we=!0;break;case v:return we=x._init,ct(we(x._payload),J,se,ee,pe)}}if(we)return pe=pe(x),we=ee===""?"."+P(x,0):ee,Re(pe)?(se="",we!=null&&(se=we.replace(D,"$&/")+"/"),ct(pe,J,se,"",function(yi){return yi})):pe!=null&&(I(pe)&&(pe=A(pe,se+(pe.key==null||x&&x.key===pe.key?"":(""+pe.key).replace(D,"$&/")+"/")+we)),J.push(pe)),1;we=0;var Ft=ee===""?".":ee+":";if(Re(x))for(var at=0;at<x.length;at++)ee=x[at],De=Ft+P(ee,at),we+=ct(ee,J,se,De,pe);else if(at=w(x),typeof at=="function")for(x=at.call(x),at=0;!(ee=x.next()).done;)ee=ee.value,De=Ft+P(ee,at++),we+=ct(ee,J,se,De,pe);else if(De==="object"){if(typeof x.then=="function")return ct(Vt(x),J,se,ee,pe);throw J=String(x),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return we}function Q(x,J,se){if(x==null)return x;var ee=[],pe=0;return ct(x,ee,"","",function(De){return J.call(se,De,pe++)}),ee}function ie(x){if(x._status===-1){var J=x._result;J=J(),J.then(function(se){(x._status===0||x._status===-1)&&(x._status=1,x._result=se)},function(se){(x._status===0||x._status===-1)&&(x._status=2,x._result=se)}),x._status===-1&&(x._status=0,x._result=J)}if(x._status===1)return x._result.default;throw x._result}var de=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Ge(){}return Ce.Children={map:Q,forEach:function(x,J,se){Q(x,function(){J.apply(this,arguments)},se)},count:function(x){var J=0;return Q(x,function(){J++}),J},toArray:function(x){return Q(x,function(J){return J})||[]},only:function(x){if(!I(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ce.Component=K,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=le,Ce.StrictMode=s,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ye,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(x){return ye.H.useMemoCache(x)}},Ce.cache=function(x){return function(){return x.apply(null,arguments)}},Ce.cloneElement=function(x,J,se){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var ee=z({},x.props),pe=x.key,De=void 0;if(J!=null)for(we in J.ref!==void 0&&(De=void 0),J.key!==void 0&&(pe=""+J.key),J)!ze.call(J,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&J.ref===void 0||(ee[we]=J[we]);var we=arguments.length-2;if(we===1)ee.children=se;else if(1<we){for(var Ft=Array(we),at=0;at<we;at++)Ft[at]=arguments[at+2];ee.children=Ft}return V(x.type,pe,void 0,void 0,De,ee)},Ce.createContext=function(x){return x={$$typeof:c,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:l,_context:x},x},Ce.createElement=function(x,J,se){var ee,pe={},De=null;if(J!=null)for(ee in J.key!==void 0&&(De=""+J.key),J)ze.call(J,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(pe[ee]=J[ee]);var we=arguments.length-2;if(we===1)pe.children=se;else if(1<we){for(var Ft=Array(we),at=0;at<we;at++)Ft[at]=arguments[at+2];pe.children=Ft}if(x&&x.defaultProps)for(ee in we=x.defaultProps,we)pe[ee]===void 0&&(pe[ee]=we[ee]);return V(x,De,void 0,void 0,null,pe)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(x){return{$$typeof:d,render:x}},Ce.isValidElement=I,Ce.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:ie}},Ce.memo=function(x,J){return{$$typeof:g,type:x,compare:J===void 0?null:J}},Ce.startTransition=function(x){var J=ye.T,se={};ye.T=se;try{var ee=x(),pe=ye.S;pe!==null&&pe(se,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Ge,de)}catch(De){de(De)}finally{ye.T=J}},Ce.unstable_useCacheRefresh=function(){return ye.H.useCacheRefresh()},Ce.use=function(x){return ye.H.use(x)},Ce.useActionState=function(x,J,se){return ye.H.useActionState(x,J,se)},Ce.useCallback=function(x,J){return ye.H.useCallback(x,J)},Ce.useContext=function(x){return ye.H.useContext(x)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(x,J){return ye.H.useDeferredValue(x,J)},Ce.useEffect=function(x,J,se){var ee=ye.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(x,J)},Ce.useId=function(){return ye.H.useId()},Ce.useImperativeHandle=function(x,J,se){return ye.H.useImperativeHandle(x,J,se)},Ce.useInsertionEffect=function(x,J){return ye.H.useInsertionEffect(x,J)},Ce.useLayoutEffect=function(x,J){return ye.H.useLayoutEffect(x,J)},Ce.useMemo=function(x,J){return ye.H.useMemo(x,J)},Ce.useOptimistic=function(x,J){return ye.H.useOptimistic(x,J)},Ce.useReducer=function(x,J,se){return ye.H.useReducer(x,J,se)},Ce.useRef=function(x){return ye.H.useRef(x)},Ce.useState=function(x){return ye.H.useState(x)},Ce.useSyncExternalStore=function(x,J,se){return ye.H.useSyncExternalStore(x,J,se)},Ce.useTransition=function(){return ye.H.useTransition()},Ce.version="19.1.1",Ce}var a0;function o_(){return a0||(a0=1,Yp.exports=YR()),Yp.exports}var ce=o_(),Kp={exports:{}},Ou={},Xp={exports:{}},Wp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function KR(){return o0||(o0=1,(function(n){function e(Q,ie){var de=Q.length;Q.push(ie);e:for(;0<de;){var Ge=de-1>>>1,x=Q[Ge];if(0<a(x,ie))Q[Ge]=ie,Q[de]=x,de=Ge;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var ie=Q[0],de=Q.pop();if(de!==ie){Q[0]=de;e:for(var Ge=0,x=Q.length,J=x>>>1;Ge<J;){var se=2*(Ge+1)-1,ee=Q[se],pe=se+1,De=Q[pe];if(0>a(ee,de))pe<x&&0>a(De,ee)?(Q[Ge]=De,Q[pe]=de,Ge=pe):(Q[Ge]=ee,Q[se]=de,Ge=se);else if(pe<x&&0>a(De,de))Q[Ge]=De,Q[pe]=de,Ge=pe;else break e}}return ie}function a(Q,ie){var de=Q.sortIndex-ie.sortIndex;return de!==0?de:Q.id-ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,T=null,w=3,M=!1,z=!1,G=!1,K=!1,he=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function Re(Q){for(var ie=t(g);ie!==null;){if(ie.callback===null)s(g);else if(ie.startTime<=Q)s(g),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=t(g)}}function ye(Q){if(G=!1,Re(Q),!z)if(t(p)!==null)z=!0,ze||(ze=!0,P());else{var ie=t(g);ie!==null&&ct(ye,ie.startTime-Q)}}var ze=!1,V=-1,A=5,I=-1;function N(){return K?!0:!(n.unstable_now()-I<A)}function D(){if(K=!1,ze){var Q=n.unstable_now();I=Q;var ie=!0;try{e:{z=!1,G&&(G=!1,le(V),V=-1),M=!0;var de=w;try{t:{for(Re(Q),T=t(p);T!==null&&!(T.expirationTime>Q&&N());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,w=T.priorityLevel;var x=Ge(T.expirationTime<=Q);if(Q=n.unstable_now(),typeof x=="function"){T.callback=x,Re(Q),ie=!0;break t}T===t(p)&&s(p),Re(Q)}else s(p);T=t(p)}if(T!==null)ie=!0;else{var J=t(g);J!==null&&ct(ye,J.startTime-Q),ie=!1}}break e}finally{T=null,w=de,M=!1}ie=void 0}}finally{ie?P():ze=!1}}}var P;if(typeof ae=="function")P=function(){ae(D)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Vt=R.port2;R.port1.onmessage=D,P=function(){Vt.postMessage(null)}}else P=function(){he(D,0)};function ct(Q,ie){V=he(function(){Q(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Q){Q.callback=null},n.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Q){switch(w){case 1:case 2:case 3:var ie=3;break;default:ie=w}var de=w;w=ie;try{return Q()}finally{w=de}},n.unstable_requestPaint=function(){K=!0},n.unstable_runWithPriority=function(Q,ie){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var de=w;w=Q;try{return ie()}finally{w=de}},n.unstable_scheduleCallback=function(Q,ie,de){var Ge=n.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Ge+de:Ge):de=Ge,Q){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=de+x,Q={id:v++,callback:ie,priorityLevel:Q,startTime:de,expirationTime:x,sortIndex:-1},de>Ge?(Q.sortIndex=de,e(g,Q),t(p)===null&&Q===t(g)&&(G?(le(V),V=-1):G=!0,ct(ye,de-Ge))):(Q.sortIndex=x,e(p,Q),z||M||(z=!0,ze||(ze=!0,P()))),Q},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(Q){var ie=w;return function(){var de=w;w=ie;try{return Q.apply(this,arguments)}finally{w=de}}}})(Wp)),Wp}var l0;function XR(){return l0||(l0=1,Xp.exports=KR()),Xp.exports}var $p={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function WR(){if(u0)return cn;u0=1;var n=o_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,cn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},cn.flushSync=function(p){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=v,s.d.f()}},cn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},cn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},cn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,M=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:M}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:M,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},cn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},cn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},cn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},cn.requestFormReset=function(p){s.d.r(p)},cn.unstable_batchedUpdates=function(p,g){return p(g)},cn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},cn.useFormStatus=function(){return c.H.useHostTransitionStatus()},cn.version="19.1.1",cn}var c0;function $R(){if(c0)return $p.exports;c0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),$p.exports=WR(),$p.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function ZR(){if(h0)return Ou;h0=1;var n=XR(),e=o_(),t=$R();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),le=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function P(i){return i===null||typeof i!="object"?null:(i=D&&i[D]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function Vt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case z:return"Fragment";case K:return"Profiler";case G:return"StrictMode";case ye:return"Suspense";case ze:return"SuspenseList";case I:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case M:return"Portal";case ae:return(i.displayName||"Context")+".Provider";case le:return(i._context.displayName||"Context")+".Consumer";case Re:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case V:return r=i.displayName||null,r!==null?r:Vt(i.type)||"Memo";case A:r=i._payload,i=i._init;try{return Vt(i(r))}catch{}}return null}var ct=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Ge=[],x=-1;function J(i){return{current:i}}function se(i){0>x||(i.current=Ge[x],Ge[x]=null,x--)}function ee(i,r){x++,Ge[x]=i.current,i.current=r}var pe=J(null),De=J(null),we=J(null),Ft=J(null);function at(i,r){switch(ee(we,r),ee(De,i),ee(pe,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?xT(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=xT(r),i=OT(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}se(pe),ee(pe,i)}function yi(){se(pe),se(De),se(we)}function Ps(i){i.memoizedState!==null&&ee(Ft,i);var r=pe.current,o=OT(r,i.type);r!==o&&(ee(De,i),ee(pe,o))}function Gi(i){De.current===i&&(se(pe),se(De)),Ft.current===i&&(se(Ft),Cu._currentValue=de)}var Lr=Object.prototype.hasOwnProperty,Ur=n.unstable_scheduleCallback,zr=n.unstable_cancelCallback,wl=n.unstable_shouldYield,Pc=n.unstable_requestPaint,Hn=n.unstable_now,Qd=n.unstable_getCurrentPriorityLevel,bl=n.unstable_ImmediatePriority,Ha=n.unstable_UserBlockingPriority,jr=n.unstable_NormalPriority,Yd=n.unstable_LowPriority,Ga=n.unstable_IdlePriority,Al=n.log,Vc=n.unstable_setDisableYieldValue,yt=null,We=null;function On(i){if(typeof Al=="function"&&Vc(i),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(yt,i)}catch{}}var ln=Math.clz32?Math.clz32:qr,Lc=Math.log,Kd=Math.LN2;function qr(i){return i>>>=0,i===0?32:31-(Lc(i)/Kd|0)|0}var Br=256,Fr=4194304;function ri(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Qa(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=ri(u):(E&=S,E!==0?f=ri(E):o||(o=S&~i,o!==0&&(f=ri(o))))):(S=u&~m,S!==0?f=ri(S):E!==0?f=ri(E):o||(o=u&~i,o!==0&&(f=ri(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Hr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Cl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rl(){var i=Br;return Br<<=1,(Br&4194048)===0&&(Br=256),i}function Il(){var i=Fr;return Fr<<=1,(Fr&62914560)===0&&(Fr=4194304),i}function Qi(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Yi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Nl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,C=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var Y=31-ln(o),$=1<<Y;S[Y]=0,C[Y]=-1;var B=q[Y];if(B!==null)for(q[Y]=null,Y=0;Y<B.length;Y++){var F=B[Y];F!==null&&(F.lane&=-536870913)}o&=~$}u!==0&&vi(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function vi(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-ln(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Dl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-ln(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Vs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ya(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ls(){var i=ie.p;return i!==0?i:(i=window.event,i===void 0?32:$T(i.type))}function Uc(i,r){var o=ie.p;try{return ie.p=i,r()}finally{ie.p=o}}var dt=Math.random().toString(36).slice(2),Lt="__reactFiber$"+dt,Rt="__reactProps$"+dt,Gn="__reactContainer$"+dt,xl="__reactEvents$"+dt,Xd="__reactListeners$"+dt,Us="__reactHandles$"+dt,zc="__reactResources$"+dt,Gr="__reactMarker$"+dt;function zs(i){delete i[Lt],delete i[Rt],delete i[xl],delete i[Xd],delete i[Us]}function Ki(i){var r=i[Lt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Gn]||o[Lt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=VT(i);i!==null;){if(o=i[Lt])return o;i=VT(i)}return r}i=o,o=i.parentNode}return null}function Ei(i){if(i=i[Lt]||i[Gn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Ti(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function yn(i){var r=i[zc];return r||(r=i[zc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function St(i){i[Gr]=!0}var Ol=new Set,Ka={};function ai(i,r){Xi(i,r),Xi(i+"Capture",r)}function Xi(i,r){for(Ka[i]=r,i=0;i<r.length;i++)Ol.add(r[i])}var jc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},Qr={};function Bc(i){return Lr.call(Qr,i)?!0:Lr.call(qc,i)?!1:jc.test(i)?Qr[i]=!0:(qc[i]=!0,!1)}function js(i,r,o){if(Bc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Si(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Jt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Yr,Fc;function Wi(i){if(Yr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Yr=r&&r[1]||"",Fc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yr+i+Fc}var Xa=!1;function Wa(i,r){if(!i||Xa)return"";Xa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(F){var B=F}Reflect.construct(i,[],$)}else{try{$.call()}catch(F){B=F}i.call($.prototype)}}else{try{throw Error()}catch(F){B=F}($=i())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var C=E.split(`
`),q=S.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===q.length)for(u=C.length-1,f=q.length-1;1<=u&&0<=f&&C[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==q[f]){var Y=`
`+C[u].replace(" at new "," at ");return i.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",i.displayName)),Y}while(1<=u&&0<=f);break}}}finally{Xa=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Wi(o):""}function Ml(i){switch(i.tag){case 26:case 27:case 5:return Wi(i.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 15:return Wa(i.type,!1);case 11:return Wa(i.type.render,!1);case 1:return Wa(i.type,!0);case 31:return Wi("Activity");default:return""}}function $a(i){try{var r="";do r+=Ml(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function vn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function kl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Wd(i){var r=kl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Za(i){i._valueTracker||(i._valueTracker=Wd(i))}function Pl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=kl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Kr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var $d=/[\n"\\]/g;function It(i){return i.replace($d,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mn(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+vn(r)):i.value!==""+vn(r)&&(i.value=""+vn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?qs(i,E,vn(r)):o!=null?qs(i,E,vn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+vn(S):i.removeAttribute("name")}function Xr(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+vn(o):"",r=r!=null?""+vn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function qs(i,r,o){r==="number"&&Kr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function $i(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+vn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function et(i,r,o){if(r!=null&&(r=""+vn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+vn(o):""}function Wr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ct(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=vn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Qn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var $r=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||$r.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Vl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Hc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Hc(i,m,r[m])}function Ll(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ja(i){return Jd.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Zi=null;function Yn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ji=null,es=null;function Ul(i){var r=Ei(i);if(r&&(i=r.stateNode)){var o=i[Rt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Mn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+It(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Rt]||null;if(!f)throw Error(s(90));Mn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Pl(u)}break e;case"textarea":et(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&$i(i,!!o.multiple,r,!1)}}}var wi=!1;function Gc(i,r,o){if(wi)return i(r,o);wi=!0;try{var u=i(r);return u}finally{if(wi=!1,(Ji!==null||es!==null)&&(Uh(),Ji&&(r=Ji,i=es,es=Ji=null,Ul(r),i)))for(r=0;r<i.length;r++)Ul(i[r])}}function Zr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Rt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kn=!1;if(oi)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Kn=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Kn=!1}var bi=null,Bs=null,ts=null;function zl(){if(ts)return ts;var i,r=Bs,o=r.length,u,f="value"in bi?bi.value:bi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return ts=f.slice(i,1<u?1-u:void 0)}function Ai(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ci(){return!0}function jl(){return!1}function Ht(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ci:jl,this.isPropagationStopped=jl,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),r}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Ht(Ke),ea=v({},Ke,{view:0,detail:0}),Qc=Ht(ea),to,no,Ri,ta=v({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ri&&(Ri&&i.type==="mousemove"?(to=i.screenX-Ri.screenX,no=i.screenY-Ri.screenY):no=to=0,Ri=i),to)},movementY:function(i){return"movementY"in i?i.movementY:no}}),Xn=Ht(ta),Yc=v({},ta,{dataTransfer:0}),em=Ht(Yc),na=v({},ea,{relatedTarget:0}),io=Ht(na),ql=v({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),so=Ht(ql),Kc=v({},Ke,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ro=Ht(Kc),tm=v({},Ke,{data:0}),Bl=Ht(tm),ia={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Wc[i])?!!r[i]:!1}function sa(){return Fl}var $c=v({},ea,{key:function(i){if(i.key){var r=ia[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ai(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Xc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(i){return i.type==="keypress"?Ai(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ai(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ao=Ht($c),Zc=v({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=Ht(Zc),ns=v({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),Jc=Ht(ns),eh=v({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=Ht(eh),nh=v({},ta,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),oo=Ht(nh),En=v({},Ke,{newState:0,oldState:0}),ih=Ht(En),sh=[9,13,27,32],Ii=oi&&"CompositionEvent"in window,h=null;oi&&"documentMode"in document&&(h=document.documentMode);var _=oi&&"TextEvent"in window&&!h,y=oi&&(!Ii||h&&8<h&&11>=h),b=" ",U=!1;function H(i,r){switch(i){case"keyup":return sh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var je=!1;function Ut(i,r){switch(i){case"compositionend":return te(r);case"keypress":return r.which!==32?null:(U=!0,b);case"textInput":return i=r.data,i===b&&U?null:i;default:return null}}function qe(i,r){if(je)return i==="compositionend"||!Ii&&H(i,r)?(i=zl(),ts=Bs=bi=null,je=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Gt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Gt[i.type]:r==="textarea"}function is(i,r,o,u){Ji?es?es.push(u):es=[u]:Ji=u,r=Hh(r,"onChange"),0<r.length&&(o=new eo("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var en=null,Ni=null;function Gl(i){CT(i,0)}function rh(i){var r=Ti(i);if(Pl(r))return i}function Yy(i,r){if(i==="change")return r}var Ky=!1;if(oi){var nm;if(oi){var im="oninput"in document;if(!im){var Xy=document.createElement("div");Xy.setAttribute("oninput","return;"),im=typeof Xy.oninput=="function"}nm=im}else nm=!1;Ky=nm&&(!document.documentMode||9<document.documentMode)}function Wy(){en&&(en.detachEvent("onpropertychange",$y),Ni=en=null)}function $y(i){if(i.propertyName==="value"&&rh(Ni)){var r=[];is(r,Ni,i,Yn(i)),Gc(Gl,r)}}function TC(i,r,o){i==="focusin"?(Wy(),en=r,Ni=o,en.attachEvent("onpropertychange",$y)):i==="focusout"&&Wy()}function SC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return rh(Ni)}function wC(i,r){if(i==="click")return rh(r)}function bC(i,r){if(i==="input"||i==="change")return rh(r)}function AC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var kn=typeof Object.is=="function"?Object.is:AC;function Ql(i,r){if(kn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Lr.call(r,f)||!kn(i[f],r[f]))return!1}return!0}function Zy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Jy(i,r){var o=Zy(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Zy(o)}}function ev(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?ev(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function tv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Kr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Kr(i.document)}return r}function sm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var CC=oi&&"documentMode"in document&&11>=document.documentMode,lo=null,rm=null,Yl=null,am=!1;function nv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;am||lo==null||lo!==Kr(u)||(u=lo,"selectionStart"in u&&sm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Yl&&Ql(Yl,u)||(Yl=u,u=Hh(rm,"onSelect"),0<u.length&&(r=new eo("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=lo)))}function ra(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var uo={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},om={},iv={};oi&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function aa(i){if(om[i])return om[i];if(!uo[i])return i;var r=uo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in iv)return om[i]=r[o];return i}var sv=aa("animationend"),rv=aa("animationiteration"),av=aa("animationstart"),RC=aa("transitionrun"),IC=aa("transitionstart"),NC=aa("transitioncancel"),ov=aa("transitionend"),lv=new Map,lm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lm.push("scrollEnd");function li(i,r){lv.set(i,r),ai(r,[i])}var uv=new WeakMap;function Wn(i,r){if(typeof i=="object"&&i!==null){var o=uv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:$a(r)},uv.set(i,r),r)}return{value:i,source:r,stack:$a(r)}}var $n=[],co=0,um=0;function ah(){for(var i=co,r=um=co=0;r<i;){var o=$n[r];$n[r++]=null;var u=$n[r];$n[r++]=null;var f=$n[r];$n[r++]=null;var m=$n[r];if($n[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&cv(o,f,m)}}function oh(i,r,o,u){$n[co++]=i,$n[co++]=r,$n[co++]=o,$n[co++]=u,um|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function cm(i,r,o,u){return oh(i,r,o,u),lh(i)}function ho(i,r){return oh(i,null,null,r),lh(i)}function cv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-ln(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function lh(i){if(50<yu)throw yu=0,gp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var fo={};function DC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(i,r,o,u){return new DC(i,r,o,u)}function hm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ss(i,r){var o=i.alternate;return o===null?(o=Pn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function hv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function uh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")hm(i)&&(E=1);else if(typeof i=="string")E=OR(i,o,pe.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case I:return i=Pn(31,o,r,f),i.elementType=I,i.lanes=m,i;case z:return oa(o.children,f,m,r);case G:E=8,f|=24;break;case K:return i=Pn(12,o,r,f|2),i.elementType=K,i.lanes=m,i;case ye:return i=Pn(13,o,r,f),i.elementType=ye,i.lanes=m,i;case ze:return i=Pn(19,o,r,f),i.elementType=ze,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case he:case ae:E=10;break e;case le:E=9;break e;case Re:E=11;break e;case V:E=14;break e;case A:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Pn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function oa(i,r,o,u){return i=Pn(7,i,u,r),i.lanes=o,i}function fm(i,r,o){return i=Pn(6,i,null,r),i.lanes=o,i}function dm(i,r,o){return r=Pn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var mo=[],po=0,ch=null,hh=0,Zn=[],Jn=0,la=null,rs=1,as="";function ua(i,r){mo[po++]=hh,mo[po++]=ch,ch=i,hh=r}function fv(i,r,o){Zn[Jn++]=rs,Zn[Jn++]=as,Zn[Jn++]=la,la=i;var u=rs;i=as;var f=32-ln(u)-1;u&=~(1<<f),o+=1;var m=32-ln(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,rs=1<<32-ln(r)+f|o<<f|u,as=m+i}else rs=1<<m|o<<f|u,as=i}function mm(i){i.return!==null&&(ua(i,1),fv(i,1,0))}function pm(i){for(;i===ch;)ch=mo[--po],mo[po]=null,hh=mo[--po],mo[po]=null;for(;i===la;)la=Zn[--Jn],Zn[Jn]=null,as=Zn[--Jn],Zn[Jn]=null,rs=Zn[--Jn],Zn[Jn]=null}var Tn=null,vt=null,Qe=!1,ca=null,Di=!1,gm=Error(s(519));function ha(i){var r=Error(s(418,""));throw Wl(Wn(r,i)),gm}function dv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Lt]=i,r[Rt]=u,o){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(o=0;o<Eu.length;o++)Pe(Eu[o],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Pe("invalid",r),Xr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Za(r);break;case"select":Pe("invalid",r);break;case"textarea":Pe("invalid",r),Wr(r,u.value,u.defaultValue,u.children),Za(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||DT(r.textContent,o)?(u.popover!=null&&(Pe("beforetoggle",r),Pe("toggle",r)),u.onScroll!=null&&Pe("scroll",r),u.onScrollEnd!=null&&Pe("scrollend",r),u.onClick!=null&&(r.onclick=Gh),r=!0):r=!1,r||ha(i)}function mv(i){for(Tn=i.return;Tn;)switch(Tn.tag){case 5:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Tn=Tn.return}}function Kl(i){if(i!==Tn)return!1;if(!Qe)return mv(i),Qe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Op(i.type,i.memoizedProps)),o=!o),o&&vt&&ha(i),mv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){vt=ci(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}vt=null}}else r===27?(r=vt,sr(i.type)?(i=Vp,Vp=null,vt=i):vt=r):vt=Tn?ci(i.stateNode.nextSibling):null;return!0}function Xl(){vt=Tn=null,Qe=!1}function pv(){var i=ca;return i!==null&&(bn===null?bn=i:bn.push.apply(bn,i),ca=null),i}function Wl(i){ca===null?ca=[i]:ca.push(i)}var _m=J(null),fa=null,os=null;function Fs(i,r,o){ee(_m,r._currentValue),r._currentValue=o}function ls(i){i._currentValue=_m.current,se(_m)}function ym(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function vm(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var C=0;C<r.length;C++)if(S.context===r[C]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),ym(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),ym(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function $l(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;kn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===Ft.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Cu):i=[Cu])}f=f.return}i!==null&&vm(r,i,o,u),r.flags|=262144}function fh(i){for(i=i.firstContext;i!==null;){if(!kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function da(i){fa=i,os=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function un(i){return gv(fa,i)}function dh(i,r){return fa===null&&da(i),gv(i,r)}function gv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},os===null){if(i===null)throw Error(s(308));os=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else os=os.next=r;return o}var xC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},OC=n.unstable_scheduleCallback,MC=n.unstable_NormalPriority,jt={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Em(){return{controller:new xC,data:new Map,refCount:0}}function Zl(i){i.refCount--,i.refCount===0&&OC(MC,function(){i.controller.abort()})}var Jl=null,Tm=0,go=0,_o=null;function kC(i,r){if(Jl===null){var o=Jl=[];Tm=0,go=wp(),_o={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Tm++,r.then(_v,_v),r}function _v(){if(--Tm===0&&Jl!==null){_o!==null&&(_o.status="fulfilled");var i=Jl;Jl=null,go=0,_o=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function PC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var yv=Q.S;Q.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&kC(i,r),yv!==null&&yv(i,r)};var ma=J(null);function Sm(){var i=ma.current;return i!==null?i:ot.pooledCache}function mh(i,r){r===null?ee(ma,ma.current):ee(ma,r.pool)}function vv(){var i=Sm();return i===null?null:{parent:jt._currentValue,pool:i}}var eu=Error(s(460)),Ev=Error(s(474)),ph=Error(s(542)),wm={then:function(){}};function Tv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function gh(){}function Sv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(gh,gh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,bv(i),i;default:if(typeof r.status=="string")r.then(gh,gh);else{if(i=ot,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,bv(i),i}throw tu=r,eu}}var tu=null;function wv(){if(tu===null)throw Error(s(459));var i=tu;return tu=null,i}function bv(i){if(i===eu||i===ph)throw Error(s(483))}var Hs=!1;function bm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Am(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Gs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Qs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=lh(i),cv(i,null,o),r}return oh(i,u,r,o),lh(i)}function nu(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Dl(i,o)}}function Cm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Rm=!1;function iu(){if(Rm){var i=_o;if(i!==null)throw i}}function su(i,r,o,u){Rm=!1;var f=i.updateQueue;Hs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,q=C.next;C.next=null,E===null?m=q:E.next=q,E=C;var Y=i.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==E&&(S===null?Y.firstBaseUpdate=q:S.next=q,Y.lastBaseUpdate=C))}if(m!==null){var $=f.baseState;E=0,Y=q=C=null,S=m;do{var B=S.lane&-536870913,F=B!==S.lane;if(F?(Be&B)===B:(u&B)===B){B!==0&&B===go&&(Rm=!0),Y!==null&&(Y=Y.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ee=i,ge=S;B=r;var it=o;switch(ge.tag){case 1:if(Ee=ge.payload,typeof Ee=="function"){$=Ee.call(it,$,B);break e}$=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=ge.payload,B=typeof Ee=="function"?Ee.call(it,$,B):Ee,B==null)break e;$=v({},$,B);break e;case 2:Hs=!0}}B=S.callback,B!==null&&(i.flags|=64,F&&(i.flags|=8192),F=f.callbacks,F===null?f.callbacks=[B]:F.push(B))}else F={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(q=Y=F,C=$):Y=Y.next=F,E|=B;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;F=S,S=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);Y===null&&(C=$),f.baseState=C,f.firstBaseUpdate=q,f.lastBaseUpdate=Y,m===null&&(f.shared.lanes=0),er|=E,i.lanes=E,i.memoizedState=$}}function Av(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Cv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Av(o[i],r)}var yo=J(null),_h=J(0);function Rv(i,r){i=ps,ee(_h,i),ee(yo,r),ps=i|r.baseLanes}function Im(){ee(_h,ps),ee(yo,yo.current)}function Nm(){ps=_h.current,se(yo),se(_h)}var Ys=0,Ie=null,tt=null,Nt=null,yh=!1,vo=!1,pa=!1,vh=0,ru=0,Eo=null,VC=0;function wt(){throw Error(s(321))}function Dm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!kn(i[o],r[o]))return!1;return!0}function xm(i,r,o,u,f,m){return Ys=m,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Q.H=i===null||i.memoizedState===null?cE:hE,pa=!1,m=o(u,f),pa=!1,vo&&(m=Nv(r,o,u,f)),Iv(i),m}function Iv(i){Q.H=Ah;var r=tt!==null&&tt.next!==null;if(Ys=0,Nt=tt=Ie=null,yh=!1,ru=0,Eo=null,r)throw Error(s(300));i===null||Qt||(i=i.dependencies,i!==null&&fh(i)&&(Qt=!0))}function Nv(i,r,o,u){Ie=i;var f=0;do{if(vo&&(Eo=null),ru=0,vo=!1,25<=f)throw Error(s(301));if(f+=1,Nt=tt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Q.H=FC,m=r(o,u)}while(vo);return m}function LC(){var i=Q.H,r=i.useState()[0];return r=typeof r.then=="function"?au(r):r,i=i.useState()[0],(tt!==null?tt.memoizedState:null)!==i&&(Ie.flags|=1024),r}function Om(){var i=vh!==0;return vh=0,i}function Mm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function km(i){if(yh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yh=!1}Ys=0,Nt=tt=Ie=null,vo=!1,ru=vh=0,Eo=null}function Sn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Ie.memoizedState=Nt=i:Nt=Nt.next=i,Nt}function Dt(){if(tt===null){var i=Ie.alternate;i=i!==null?i.memoizedState:null}else i=tt.next;var r=Nt===null?Ie.memoizedState:Nt.next;if(r!==null)Nt=r,tt=i;else{if(i===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));tt=i,i={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},Nt===null?Ie.memoizedState=Nt=i:Nt=Nt.next=i}return Nt}function Pm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function au(i){var r=ru;return ru+=1,Eo===null&&(Eo=[]),i=Sv(Eo,i,r),r=Ie,(Nt===null?r.memoizedState:Nt.next)===null&&(r=r.alternate,Q.H=r===null||r.memoizedState===null?cE:hE),i}function Eh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return au(i);if(i.$$typeof===ae)return un(i)}throw Error(s(438,String(i)))}function Vm(i){var r=null,o=Ie.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Pm(),Ie.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=N;return r.index++,o}function us(i,r){return typeof r=="function"?r(i):r}function Th(i){var r=Dt();return Lm(r,tt,i)}function Lm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,C=null,q=r,Y=!1;do{var $=q.lane&-536870913;if($!==q.lane?(Be&$)===$:(Ys&$)===$){var B=q.revertLane;if(B===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),$===go&&(Y=!0);else if((Ys&B)===B){q=q.next,B===go&&(Y=!0);continue}else $={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(S=C=$,E=m):C=C.next=$,Ie.lanes|=B,er|=B;$=q.action,pa&&o(m,$),m=q.hasEagerState?q.eagerState:o(m,$)}else B={lane:$,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(S=C=B,E=m):C=C.next=B,Ie.lanes|=$,er|=$;q=q.next}while(q!==null&&q!==r);if(C===null?E=m:C.next=S,!kn(m,i.memoizedState)&&(Qt=!0,Y&&(o=_o,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=C,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Um(i){var r=Dt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);kn(m,r.memoizedState)||(Qt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Dv(i,r,o){var u=Ie,f=Dt(),m=Qe;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!kn((tt||f).memoizedState,o);E&&(f.memoizedState=o,Qt=!0),f=f.queue;var S=Mv.bind(null,u,f,i);if(ou(2048,8,S,[i]),f.getSnapshot!==r||E||Nt!==null&&Nt.memoizedState.tag&1){if(u.flags|=2048,To(9,Sh(),Ov.bind(null,u,f,o,r),null),ot===null)throw Error(s(349));m||(Ys&124)!==0||xv(u,r,o)}return o}function xv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ie.updateQueue,r===null?(r=Pm(),Ie.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Ov(i,r,o,u){r.value=o,r.getSnapshot=u,kv(r)&&Pv(i)}function Mv(i,r,o){return o(function(){kv(r)&&Pv(i)})}function kv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!kn(i,o)}catch{return!0}}function Pv(i){var r=ho(i,2);r!==null&&jn(r,i,2)}function zm(i){var r=Sn();if(typeof i=="function"){var o=i;if(i=o(),pa){On(!0);try{o()}finally{On(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:i},r}function Vv(i,r,o,u){return i.baseState=o,Lm(i,tt,typeof u=="function"?u:us)}function UC(i,r,o,u,f){if(bh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Q.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Lv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Lv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Q.T,E={};Q.T=E;try{var S=o(f,u),C=Q.S;C!==null&&C(E,S),Uv(i,r,S)}catch(q){jm(i,r,q)}finally{Q.T=m}}else try{m=o(f,u),Uv(i,r,m)}catch(q){jm(i,r,q)}}function Uv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){zv(i,r,u)},function(u){return jm(i,r,u)}):zv(i,r,o)}function zv(i,r,o){r.status="fulfilled",r.value=o,jv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Lv(i,o)))}function jm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,jv(r),r=r.next;while(r!==u)}i.action=null}function jv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function qv(i,r){return r}function Bv(i,r){if(Qe){var o=ot.formState;if(o!==null){e:{var u=Ie;if(Qe){if(vt){t:{for(var f=vt,m=Di;f.nodeType!==8;){if(!m){f=null;break t}if(f=ci(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){vt=ci(f.nextSibling),u=f.data==="F!";break e}}ha(u)}u=!1}u&&(r=o[0])}}return o=Sn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qv,lastRenderedState:r},o.queue=u,o=oE.bind(null,Ie,u),u.dispatch=o,u=zm(!1),m=Gm.bind(null,Ie,!1,u.queue),u=Sn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=UC.bind(null,Ie,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function Fv(i){var r=Dt();return Hv(r,tt,i)}function Hv(i,r,o){if(r=Lm(i,r,qv)[0],i=Th(us)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=au(r)}catch(E){throw E===eu?ph:E}else u=r;r=Dt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ie.flags|=2048,To(9,Sh(),zC.bind(null,f,o),null)),[u,m,i]}function zC(i,r){i.action=r}function Gv(i){var r=Dt(),o=tt;if(o!==null)return Hv(r,o,i);Dt(),r=r.memoizedState,o=Dt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function To(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=Pm(),Ie.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Sh(){return{destroy:void 0,resource:void 0}}function Qv(){return Dt().memoizedState}function wh(i,r,o,u){var f=Sn();u=u===void 0?null:u,Ie.flags|=i,f.memoizedState=To(1|r,Sh(),o,u)}function ou(i,r,o,u){var f=Dt();u=u===void 0?null:u;var m=f.memoizedState.inst;tt!==null&&u!==null&&Dm(u,tt.memoizedState.deps)?f.memoizedState=To(r,m,o,u):(Ie.flags|=i,f.memoizedState=To(1|r,m,o,u))}function Yv(i,r){wh(8390656,8,i,r)}function Kv(i,r){ou(2048,8,i,r)}function Xv(i,r){return ou(4,2,i,r)}function Wv(i,r){return ou(4,4,i,r)}function $v(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Zv(i,r,o){o=o!=null?o.concat([i]):null,ou(4,4,$v.bind(null,r,i),o)}function qm(){}function Jv(i,r){var o=Dt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Dm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function eE(i,r){var o=Dt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Dm(r,u[1]))return u[0];if(u=i(),pa){On(!0);try{i()}finally{On(!1)}}return o.memoizedState=[u,r],u}function Bm(i,r,o){return o===void 0||(Ys&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=iT(),Ie.lanes|=i,er|=i,o)}function tE(i,r,o,u){return kn(o,r)?o:yo.current!==null?(i=Bm(i,o,u),kn(i,r)||(Qt=!0),i):(Ys&42)===0?(Qt=!0,i.memoizedState=o):(i=iT(),Ie.lanes|=i,er|=i,r)}function nE(i,r,o,u,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var E=Q.T,S={};Q.T=S,Gm(i,!1,r,o);try{var C=f(),q=Q.S;if(q!==null&&q(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Y=PC(C,u);lu(i,r,Y,zn(i))}else lu(i,r,u,zn(i))}catch($){lu(i,r,{then:function(){},status:"rejected",reason:$},zn())}finally{ie.p=m,Q.T=E}}function jC(){}function Fm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=iE(i).queue;nE(i,f,r,de,o===null?jC:function(){return sE(i),o(u)})}function iE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:de},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function sE(i){var r=iE(i).next.queue;lu(i,r,{},zn())}function Hm(){return un(Cu)}function rE(){return Dt().memoizedState}function aE(){return Dt().memoizedState}function qC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=zn();i=Gs(o);var u=Qs(r,i,o);u!==null&&(jn(u,r,o),nu(u,r,o)),r={cache:Em()},i.payload=r;return}r=r.return}}function BC(i,r,o){var u=zn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},bh(i)?lE(r,o):(o=cm(i,r,o,u),o!==null&&(jn(o,i,u),uE(o,r,u)))}function oE(i,r,o){var u=zn();lu(i,r,o,u)}function lu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(bh(i))lE(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,kn(S,E))return oh(i,r,f,0),ot===null&&ah(),!1}catch{}finally{}if(o=cm(i,r,f,u),o!==null)return jn(o,i,u),uE(o,r,u),!0}return!1}function Gm(i,r,o,u){if(u={lane:2,revertLane:wp(),action:u,hasEagerState:!1,eagerState:null,next:null},bh(i)){if(r)throw Error(s(479))}else r=cm(i,o,u,2),r!==null&&jn(r,i,2)}function bh(i){var r=i.alternate;return i===Ie||r!==null&&r===Ie}function lE(i,r){vo=yh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function uE(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Dl(i,o)}}var Ah={readContext:un,use:Eh,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},cE={readContext:un,use:Eh,useCallback:function(i,r){return Sn().memoizedState=[i,r===void 0?null:r],i},useContext:un,useEffect:Yv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,wh(4194308,4,$v.bind(null,r,i),o)},useLayoutEffect:function(i,r){return wh(4194308,4,i,r)},useInsertionEffect:function(i,r){wh(4,2,i,r)},useMemo:function(i,r){var o=Sn();r=r===void 0?null:r;var u=i();if(pa){On(!0);try{i()}finally{On(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Sn();if(o!==void 0){var f=o(r);if(pa){On(!0);try{o(r)}finally{On(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=BC.bind(null,Ie,i),[u.memoizedState,i]},useRef:function(i){var r=Sn();return i={current:i},r.memoizedState=i},useState:function(i){i=zm(i);var r=i.queue,o=oE.bind(null,Ie,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:qm,useDeferredValue:function(i,r){var o=Sn();return Bm(o,i,r)},useTransition:function(){var i=zm(!1);return i=nE.bind(null,Ie,i.queue,!0,!1),Sn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ie,f=Sn();if(Qe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ot===null)throw Error(s(349));(Be&124)!==0||xv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Yv(Mv.bind(null,u,m,i),[i]),u.flags|=2048,To(9,Sh(),Ov.bind(null,u,m,o,r),null),o},useId:function(){var i=Sn(),r=ot.identifierPrefix;if(Qe){var o=as,u=rs;o=(u&~(1<<32-ln(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=vh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=VC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Hm,useFormState:Bv,useActionState:Bv,useOptimistic:function(i){var r=Sn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Gm.bind(null,Ie,!0,o),o.dispatch=r,[i,r]},useMemoCache:Vm,useCacheRefresh:function(){return Sn().memoizedState=qC.bind(null,Ie)}},hE={readContext:un,use:Eh,useCallback:Jv,useContext:un,useEffect:Kv,useImperativeHandle:Zv,useInsertionEffect:Xv,useLayoutEffect:Wv,useMemo:eE,useReducer:Th,useRef:Qv,useState:function(){return Th(us)},useDebugValue:qm,useDeferredValue:function(i,r){var o=Dt();return tE(o,tt.memoizedState,i,r)},useTransition:function(){var i=Th(us)[0],r=Dt().memoizedState;return[typeof i=="boolean"?i:au(i),r]},useSyncExternalStore:Dv,useId:rE,useHostTransitionStatus:Hm,useFormState:Fv,useActionState:Fv,useOptimistic:function(i,r){var o=Dt();return Vv(o,tt,i,r)},useMemoCache:Vm,useCacheRefresh:aE},FC={readContext:un,use:Eh,useCallback:Jv,useContext:un,useEffect:Kv,useImperativeHandle:Zv,useInsertionEffect:Xv,useLayoutEffect:Wv,useMemo:eE,useReducer:Um,useRef:Qv,useState:function(){return Um(us)},useDebugValue:qm,useDeferredValue:function(i,r){var o=Dt();return tt===null?Bm(o,i,r):tE(o,tt.memoizedState,i,r)},useTransition:function(){var i=Um(us)[0],r=Dt().memoizedState;return[typeof i=="boolean"?i:au(i),r]},useSyncExternalStore:Dv,useId:rE,useHostTransitionStatus:Hm,useFormState:Gv,useActionState:Gv,useOptimistic:function(i,r){var o=Dt();return tt!==null?Vv(o,tt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Vm,useCacheRefresh:aE},So=null,uu=0;function Ch(i){var r=uu;return uu+=1,So===null&&(So=[]),Sv(So,i,r)}function cu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Rh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function fE(i){var r=i._init;return r(i._payload)}function dE(i){function r(L,O){if(i){var j=L.deletions;j===null?(L.deletions=[O],L.flags|=16):j.push(O)}}function o(L,O){if(!i)return null;for(;O!==null;)r(L,O),O=O.sibling;return null}function u(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function f(L,O){return L=ss(L,O),L.index=0,L.sibling=null,L}function m(L,O,j){return L.index=j,i?(j=L.alternate,j!==null?(j=j.index,j<O?(L.flags|=67108866,O):j):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function E(L){return i&&L.alternate===null&&(L.flags|=67108866),L}function S(L,O,j,W){return O===null||O.tag!==6?(O=fm(j,L.mode,W),O.return=L,O):(O=f(O,j),O.return=L,O)}function C(L,O,j,W){var ue=j.type;return ue===z?Y(L,O,j.props.children,W,j.key):O!==null&&(O.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===A&&fE(ue)===O.type)?(O=f(O,j.props),cu(O,j),O.return=L,O):(O=uh(j.type,j.key,j.props,null,L.mode,W),cu(O,j),O.return=L,O)}function q(L,O,j,W){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=dm(j,L.mode,W),O.return=L,O):(O=f(O,j.children||[]),O.return=L,O)}function Y(L,O,j,W,ue){return O===null||O.tag!==7?(O=oa(j,L.mode,W,ue),O.return=L,O):(O=f(O,j),O.return=L,O)}function $(L,O,j){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=fm(""+O,L.mode,j),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return j=uh(O.type,O.key,O.props,null,L.mode,j),cu(j,O),j.return=L,j;case M:return O=dm(O,L.mode,j),O.return=L,O;case A:var W=O._init;return O=W(O._payload),$(L,O,j)}if(ct(O)||P(O))return O=oa(O,L.mode,j,null),O.return=L,O;if(typeof O.then=="function")return $(L,Ch(O),j);if(O.$$typeof===ae)return $(L,dh(L,O),j);Rh(L,O)}return null}function B(L,O,j,W){var ue=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ue!==null?null:S(L,O,""+j,W);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return j.key===ue?C(L,O,j,W):null;case M:return j.key===ue?q(L,O,j,W):null;case A:return ue=j._init,j=ue(j._payload),B(L,O,j,W)}if(ct(j)||P(j))return ue!==null?null:Y(L,O,j,W,null);if(typeof j.then=="function")return B(L,O,Ch(j),W);if(j.$$typeof===ae)return B(L,O,dh(L,j),W);Rh(L,j)}return null}function F(L,O,j,W,ue){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(j)||null,S(O,L,""+W,ue);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return L=L.get(W.key===null?j:W.key)||null,C(O,L,W,ue);case M:return L=L.get(W.key===null?j:W.key)||null,q(O,L,W,ue);case A:var xe=W._init;return W=xe(W._payload),F(L,O,j,W,ue)}if(ct(W)||P(W))return L=L.get(j)||null,Y(O,L,W,ue,null);if(typeof W.then=="function")return F(L,O,j,Ch(W),ue);if(W.$$typeof===ae)return F(L,O,j,dh(O,W),ue);Rh(O,W)}return null}function Ee(L,O,j,W){for(var ue=null,xe=null,fe=O,_e=O=0,Kt=null;fe!==null&&_e<j.length;_e++){fe.index>_e?(Kt=fe,fe=null):Kt=fe.sibling;var He=B(L,fe,j[_e],W);if(He===null){fe===null&&(fe=Kt);break}i&&fe&&He.alternate===null&&r(L,fe),O=m(He,O,_e),xe===null?ue=He:xe.sibling=He,xe=He,fe=Kt}if(_e===j.length)return o(L,fe),Qe&&ua(L,_e),ue;if(fe===null){for(;_e<j.length;_e++)fe=$(L,j[_e],W),fe!==null&&(O=m(fe,O,_e),xe===null?ue=fe:xe.sibling=fe,xe=fe);return Qe&&ua(L,_e),ue}for(fe=u(fe);_e<j.length;_e++)Kt=F(fe,L,_e,j[_e],W),Kt!==null&&(i&&Kt.alternate!==null&&fe.delete(Kt.key===null?_e:Kt.key),O=m(Kt,O,_e),xe===null?ue=Kt:xe.sibling=Kt,xe=Kt);return i&&fe.forEach(function(ur){return r(L,ur)}),Qe&&ua(L,_e),ue}function ge(L,O,j,W){if(j==null)throw Error(s(151));for(var ue=null,xe=null,fe=O,_e=O=0,Kt=null,He=j.next();fe!==null&&!He.done;_e++,He=j.next()){fe.index>_e?(Kt=fe,fe=null):Kt=fe.sibling;var ur=B(L,fe,He.value,W);if(ur===null){fe===null&&(fe=Kt);break}i&&fe&&ur.alternate===null&&r(L,fe),O=m(ur,O,_e),xe===null?ue=ur:xe.sibling=ur,xe=ur,fe=Kt}if(He.done)return o(L,fe),Qe&&ua(L,_e),ue;if(fe===null){for(;!He.done;_e++,He=j.next())He=$(L,He.value,W),He!==null&&(O=m(He,O,_e),xe===null?ue=He:xe.sibling=He,xe=He);return Qe&&ua(L,_e),ue}for(fe=u(fe);!He.done;_e++,He=j.next())He=F(fe,L,_e,He.value,W),He!==null&&(i&&He.alternate!==null&&fe.delete(He.key===null?_e:He.key),O=m(He,O,_e),xe===null?ue=He:xe.sibling=He,xe=He);return i&&fe.forEach(function(HR){return r(L,HR)}),Qe&&ua(L,_e),ue}function it(L,O,j,W){if(typeof j=="object"&&j!==null&&j.type===z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case w:e:{for(var ue=j.key;O!==null;){if(O.key===ue){if(ue=j.type,ue===z){if(O.tag===7){o(L,O.sibling),W=f(O,j.props.children),W.return=L,L=W;break e}}else if(O.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===A&&fE(ue)===O.type){o(L,O.sibling),W=f(O,j.props),cu(W,j),W.return=L,L=W;break e}o(L,O);break}else r(L,O);O=O.sibling}j.type===z?(W=oa(j.props.children,L.mode,W,j.key),W.return=L,L=W):(W=uh(j.type,j.key,j.props,null,L.mode,W),cu(W,j),W.return=L,L=W)}return E(L);case M:e:{for(ue=j.key;O!==null;){if(O.key===ue)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){o(L,O.sibling),W=f(O,j.children||[]),W.return=L,L=W;break e}else{o(L,O);break}else r(L,O);O=O.sibling}W=dm(j,L.mode,W),W.return=L,L=W}return E(L);case A:return ue=j._init,j=ue(j._payload),it(L,O,j,W)}if(ct(j))return Ee(L,O,j,W);if(P(j)){if(ue=P(j),typeof ue!="function")throw Error(s(150));return j=ue.call(j),ge(L,O,j,W)}if(typeof j.then=="function")return it(L,O,Ch(j),W);if(j.$$typeof===ae)return it(L,O,dh(L,j),W);Rh(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,O!==null&&O.tag===6?(o(L,O.sibling),W=f(O,j),W.return=L,L=W):(o(L,O),W=fm(j,L.mode,W),W.return=L,L=W),E(L)):o(L,O)}return function(L,O,j,W){try{uu=0;var ue=it(L,O,j,W);return So=null,ue}catch(fe){if(fe===eu||fe===ph)throw fe;var xe=Pn(29,fe,null,L.mode);return xe.lanes=W,xe.return=L,xe}finally{}}}var wo=dE(!0),mE=dE(!1),ei=J(null),xi=null;function Ks(i){var r=i.alternate;ee(qt,qt.current&1),ee(ei,i),xi===null&&(r===null||yo.current!==null||r.memoizedState!==null)&&(xi=i)}function pE(i){if(i.tag===22){if(ee(qt,qt.current),ee(ei,i),xi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(xi=i)}}else Xs()}function Xs(){ee(qt,qt.current),ee(ei,ei.current)}function cs(i){se(ei),xi===i&&(xi=null),se(qt)}var qt=J(0);function Ih(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Pp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Qm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Ym={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=zn(),f=Gs(u);f.payload=r,o!=null&&(f.callback=o),r=Qs(i,f,u),r!==null&&(jn(r,i,u),nu(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=zn(),f=Gs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Qs(i,f,u),r!==null&&(jn(r,i,u),nu(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=zn(),u=Gs(o);u.tag=2,r!=null&&(u.callback=r),r=Qs(i,u,o),r!==null&&(jn(r,i,o),nu(r,i,o))}};function gE(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Ql(o,u)||!Ql(f,m):!0}function _E(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Ym.enqueueReplaceState(r,r.state,null)}function ga(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=v({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Nh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function yE(i){Nh(i)}function vE(i){console.error(i)}function EE(i){Nh(i)}function Dh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function TE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Km(i,r,o){return o=Gs(o),o.tag=3,o.payload={element:null},o.callback=function(){Dh(i,r)},o}function SE(i){return i=Gs(i),i.tag=3,i}function wE(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){TE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){TE(r,o,u),typeof f!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function HC(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&$l(r,o,f,!0),o=ei.current,o!==null){switch(o.tag){case 13:return xi===null?yp():o.alternate===null&&Et===0&&(Et=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===wm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Ep(i,u,f)),!1;case 22:return o.flags|=65536,u===wm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Ep(i,u,f)),!1}throw Error(s(435,o.tag))}return Ep(i,u,f),yp(),!1}if(Qe)return r=ei.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==gm&&(i=Error(s(422),{cause:u}),Wl(Wn(i,o)))):(u!==gm&&(r=Error(s(423),{cause:u}),Wl(Wn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Wn(u,o),f=Km(i.stateNode,u,f),Cm(i,f),Et!==4&&(Et=2)),!1;var m=Error(s(520),{cause:u});if(m=Wn(m,o),_u===null?_u=[m]:_u.push(m),Et!==4&&(Et=2),r===null)return!0;u=Wn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Km(o.stateNode,u,i),Cm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tr===null||!tr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=SE(f),wE(f,i,o,u),Cm(o,f),!1}o=o.return}while(o!==null);return!1}var bE=Error(s(461)),Qt=!1;function tn(i,r,o,u){r.child=i===null?mE(r,null,o,u):wo(r,i.child,o,u)}function AE(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return da(r),u=xm(i,r,o,E,m,f),S=Om(),i!==null&&!Qt?(Mm(i,r,f),hs(i,r,f)):(Qe&&S&&mm(r),r.flags|=1,tn(i,r,u,f),r.child)}function CE(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!hm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,RE(i,r,m,u,f)):(i=uh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!np(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ql,o(E,u)&&i.ref===r.ref)return hs(i,r,f)}return r.flags|=1,i=ss(m,u),i.ref=r.ref,i.return=r,r.child=i}function RE(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Ql(m,u)&&i.ref===r.ref)if(Qt=!1,r.pendingProps=u=m,np(i,f))(i.flags&131072)!==0&&(Qt=!0);else return r.lanes=i.lanes,hs(i,r,f)}return Xm(i,r,o,u,f)}function IE(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return NE(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&mh(r,m!==null?m.cachePool:null),m!==null?Rv(r,m):Im(),pE(r);else return r.lanes=r.childLanes=536870912,NE(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(mh(r,m.cachePool),Rv(r,m),Xs(),r.memoizedState=null):(i!==null&&mh(r,null),Im(),Xs());return tn(i,r,f,o),r.child}function NE(i,r,o,u){var f=Sm();return f=f===null?null:{parent:jt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&mh(r,null),Im(),pE(r),i!==null&&$l(i,r,u,!0),null}function xh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Xm(i,r,o,u,f){return da(r),o=xm(i,r,o,u,void 0,f),u=Om(),i!==null&&!Qt?(Mm(i,r,f),hs(i,r,f)):(Qe&&u&&mm(r),r.flags|=1,tn(i,r,o,f),r.child)}function DE(i,r,o,u,f,m){return da(r),r.updateQueue=null,o=Nv(r,u,o,f),Iv(i),u=Om(),i!==null&&!Qt?(Mm(i,r,m),hs(i,r,m)):(Qe&&u&&mm(r),r.flags|=1,tn(i,r,o,m),r.child)}function xE(i,r,o,u,f){if(da(r),r.stateNode===null){var m=fo,E=o.contextType;typeof E=="object"&&E!==null&&(m=un(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ym,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},bm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?un(E):fo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Qm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Ym.enqueueReplaceState(m,m.state,null),su(r,u,m,f),iu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,C=ga(o,S);m.props=C;var q=m.context,Y=o.contextType;E=fo,typeof Y=="object"&&Y!==null&&(E=un(Y));var $=o.getDerivedStateFromProps;Y=typeof $=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,Y||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||q!==E)&&_E(r,m,u,E),Hs=!1;var B=r.memoizedState;m.state=B,su(r,u,m,f),iu(),q=r.memoizedState,S||B!==q||Hs?(typeof $=="function"&&(Qm(r,o,$,u),q=r.memoizedState),(C=Hs||gE(r,o,C,u,B,q,E))?(Y||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=C):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Am(i,r),E=r.memoizedProps,Y=ga(o,E),m.props=Y,$=r.pendingProps,B=m.context,q=o.contextType,C=fo,typeof q=="object"&&q!==null&&(C=un(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==$||B!==C)&&_E(r,m,u,C),Hs=!1,B=r.memoizedState,m.state=B,su(r,u,m,f),iu();var F=r.memoizedState;E!==$||B!==F||Hs||i!==null&&i.dependencies!==null&&fh(i.dependencies)?(typeof S=="function"&&(Qm(r,o,S,u),F=r.memoizedState),(Y=Hs||gE(r,o,Y,u,B,F,C)||i!==null&&i.dependencies!==null&&fh(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,F,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,F,C)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=F),m.props=u,m.state=F,m.context=C,u=Y):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,xh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=wo(r,i.child,null,f),r.child=wo(r,null,o,f)):tn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=hs(i,r,f),i}function OE(i,r,o,u){return Xl(),r.flags|=256,tn(i,r,o,u),r.child}var Wm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $m(i){return{baseLanes:i,cachePool:vv()}}function Zm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ti),i}function ME(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(qt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Qe){if(f?Ks(r):Xs(),Qe){var S=vt,C;if(C=S){e:{for(C=S,S=Di;C.nodeType!==8;){if(!S){S=null;break e}if(C=ci(C.nextSibling),C===null){S=null;break e}}S=C}S!==null?(r.memoizedState={dehydrated:S,treeContext:la!==null?{id:rs,overflow:as}:null,retryLane:536870912,hydrationErrors:null},C=Pn(18,null,null,0),C.stateNode=S,C.return=r,r.child=C,Tn=r,vt=null,C=!0):C=!1}C||ha(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Pp(S)?r.lanes=32:r.lanes=536870912,null;cs(r)}return S=u.children,u=u.fallback,f?(Xs(),f=r.mode,S=Oh({mode:"hidden",children:S},f),u=oa(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=$m(o),f.childLanes=Zm(i,E,o),r.memoizedState=Wm,u):(Ks(r),Jm(r,S))}if(C=i.memoizedState,C!==null&&(S=C.dehydrated,S!==null)){if(m)r.flags&256?(Ks(r),r.flags&=-257,r=ep(i,r,o)):r.memoizedState!==null?(Xs(),r.child=i.child,r.flags|=128,r=null):(Xs(),f=u.fallback,S=r.mode,u=Oh({mode:"visible",children:u.children},S),f=oa(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,wo(r,i.child,null,o),u=r.child,u.memoizedState=$m(o),u.childLanes=Zm(i,E,o),r.memoizedState=Wm,r=f);else if(Ks(r),Pp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,Wl({value:u,source:null,stack:null}),r=ep(i,r,o)}else if(Qt||$l(i,r,o,!1),E=(o&i.childLanes)!==0,Qt||E){if(E=ot,E!==null&&(u=o&-o,u=(u&42)!==0?1:Vs(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,ho(i,u),jn(E,i,u),bE;S.data==="$?"||yp(),r=ep(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=C.treeContext,vt=ci(S.nextSibling),Tn=r,Qe=!0,ca=null,Di=!1,i!==null&&(Zn[Jn++]=rs,Zn[Jn++]=as,Zn[Jn++]=la,rs=i.id,as=i.overflow,la=r),r=Jm(r,u.children),r.flags|=4096);return r}return f?(Xs(),f=u.fallback,S=r.mode,C=i.child,q=C.sibling,u=ss(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,q!==null?f=ss(q,f):(f=oa(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=$m(o):(C=S.cachePool,C!==null?(q=jt._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=vv(),S={baseLanes:S.baseLanes|o,cachePool:C}),f.memoizedState=S,f.childLanes=Zm(i,E,o),r.memoizedState=Wm,u):(Ks(r),o=i.child,i=o.sibling,o=ss(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function Jm(i,r){return r=Oh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Oh(i,r){return i=Pn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function ep(i,r,o){return wo(r,i.child,null,o),i=Jm(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function kE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),ym(i.return,r,o)}function tp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function PE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(tn(i,r,u.children,o),u=qt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&kE(i,o,r);else if(i.tag===19)kE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ee(qt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Ih(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),tp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Ih(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}tp(r,!0,o,null,m);break;case"together":tp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),er|=r.lanes,(o&r.childLanes)===0)if(i!==null){if($l(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ss(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ss(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function np(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&fh(i)))}function GC(i,r,o){switch(r.tag){case 3:at(r,r.stateNode.containerInfo),Fs(r,jt,i.memoizedState.cache),Xl();break;case 27:case 5:Ps(r);break;case 4:at(r,r.stateNode.containerInfo);break;case 10:Fs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Ks(r),r.flags|=128,null):(o&r.child.childLanes)!==0?ME(i,r,o):(Ks(r),i=hs(i,r,o),i!==null?i.sibling:null);Ks(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||($l(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return PE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(qt,qt.current),u)break;return null;case 22:case 23:return r.lanes=0,IE(i,r,o);case 24:Fs(r,jt,i.memoizedState.cache)}return hs(i,r,o)}function VE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Qt=!0;else{if(!np(i,o)&&(r.flags&128)===0)return Qt=!1,GC(i,r,o);Qt=(i.flags&131072)!==0}else Qt=!1,Qe&&(r.flags&1048576)!==0&&fv(r,hh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")hm(u)?(i=ga(u,i),r.tag=1,r=xE(null,r,u,i,o)):(r.tag=0,r=Xm(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===Re){r.tag=11,r=AE(null,r,u,i,o);break e}else if(f===V){r.tag=14,r=CE(null,r,u,i,o);break e}}throw r=Vt(u)||u,Error(s(306,r,""))}}return r;case 0:return Xm(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=ga(u,r.pendingProps),xE(i,r,u,f,o);case 3:e:{if(at(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Am(i,r),su(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Fs(r,jt,u),u!==m.cache&&vm(r,[jt],o,!0),iu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=OE(i,r,u,o);break e}else if(u!==f){f=Wn(Error(s(424)),r),Wl(f),r=OE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(vt=ci(i.firstChild),Tn=r,Qe=!0,ca=null,Di=!0,o=mE(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Xl(),u===f){r=hs(i,r,o);break e}tn(i,r,u,o)}r=r.child}return r;case 26:return xh(i,r),i===null?(o=jT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Qe||(o=r.type,i=r.pendingProps,u=Qh(we.current).createElement(o),u[Lt]=r,u[Rt]=i,sn(u,o,i),St(u),r.stateNode=u):r.memoizedState=jT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ps(r),i===null&&Qe&&(u=r.stateNode=LT(r.type,r.pendingProps,we.current),Tn=r,Di=!0,f=vt,sr(r.type)?(Vp=f,vt=ci(u.firstChild)):vt=f),tn(i,r,r.pendingProps.children,o),xh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Qe&&((f=u=vt)&&(u=vR(u,r.type,r.pendingProps,Di),u!==null?(r.stateNode=u,Tn=r,vt=ci(u.firstChild),Di=!1,f=!0):f=!1),f||ha(r)),Ps(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Op(f,m)?u=null:E!==null&&Op(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=xm(i,r,LC,null,null,o),Cu._currentValue=f),xh(i,r),tn(i,r,u,o),r.child;case 6:return i===null&&Qe&&((i=o=vt)&&(o=ER(o,r.pendingProps,Di),o!==null?(r.stateNode=o,Tn=r,vt=null,i=!0):i=!1),i||ha(r)),null;case 13:return ME(i,r,o);case 4:return at(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=wo(r,null,u,o):tn(i,r,u,o),r.child;case 11:return AE(i,r,r.type,r.pendingProps,o);case 7:return tn(i,r,r.pendingProps,o),r.child;case 8:return tn(i,r,r.pendingProps.children,o),r.child;case 12:return tn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Fs(r,r.type,u.value),tn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,da(r),f=un(f),u=u(f),r.flags|=1,tn(i,r,u,o),r.child;case 14:return CE(i,r,r.type,r.pendingProps,o);case 15:return RE(i,r,r.type,r.pendingProps,o);case 19:return PE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Oh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ss(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return IE(i,r,o);case 24:return da(r),u=un(jt),i===null?(f=Sm(),f===null&&(f=ot,m=Em(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},bm(r),Fs(r,jt,f)):((i.lanes&o)!==0&&(Am(i,r),su(r,null,null,o),iu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Fs(r,jt,u)):(u=m.cache,Fs(r,jt,u),u!==f.cache&&vm(r,[jt],o,!0))),tn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function fs(i){i.flags|=4}function LE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!GT(r)){if(r=ei.current,r!==null&&((Be&4194048)===Be?xi!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==xi))throw tu=wm,Ev;i.flags|=8192}}function Mh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Il():536870912,i.lanes|=r,Ro|=r)}function hu(i,r){if(!Qe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function pt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function QC(i,r,o){var u=r.pendingProps;switch(pm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(r),null;case 1:return pt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ls(jt),yi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Kl(r)?fs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,pv())),pt(r),null;case 26:return o=r.memoizedState,i===null?(fs(r),o!==null?(pt(r),LE(r,o)):(pt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(fs(r),pt(r),LE(r,o)):(pt(r),r.flags&=-16777217):(i.memoizedProps!==u&&fs(r),pt(r),r.flags&=-16777217),null;case 27:Gi(r),o=we.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return pt(r),null}i=pe.current,Kl(r)?dv(r):(i=LT(f,u,o),r.stateNode=i,fs(r))}return pt(r),null;case 5:if(Gi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return pt(r),null}if(i=pe.current,Kl(r))dv(r);else{switch(f=Qh(we.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Lt]=r,i[Rt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(sn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&fs(r)}}return pt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=we.current,Kl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=Tn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Lt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||DT(i.nodeValue,o)),i||ha(r)}else i=Qh(i).createTextNode(u),i[Lt]=r,r.stateNode=i}return pt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Kl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Lt]=r}else Xl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pt(r),f=!1}else f=pv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(cs(r),r):(cs(r),null)}if(cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Mh(r,r.updateQueue),pt(r),null;case 4:return yi(),i===null&&Rp(r.stateNode.containerInfo),pt(r),null;case 10:return ls(r.type),pt(r),null;case 19:if(se(qt),f=r.memoizedState,f===null)return pt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)hu(f,!1);else{if(Et!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Ih(i),m!==null){for(r.flags|=128,hu(f,!1),i=m.updateQueue,r.updateQueue=i,Mh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)hv(o,i),o=o.sibling;return ee(qt,qt.current&1|2),r.child}i=i.sibling}f.tail!==null&&Hn()>Vh&&(r.flags|=128,u=!0,hu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Ih(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Mh(r,i),hu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Qe)return pt(r),null}else 2*Hn()-f.renderingStartTime>Vh&&o!==536870912&&(r.flags|=128,u=!0,hu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Hn(),r.sibling=null,i=qt.current,ee(qt,u?i&1|2:i&1),r):(pt(r),null);case 22:case 23:return cs(r),Nm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(pt(r),r.subtreeFlags&6&&(r.flags|=8192)):pt(r),o=r.updateQueue,o!==null&&Mh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&se(ma),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ls(jt),pt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function YC(i,r){switch(pm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ls(jt),yi(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Gi(r),null;case 13:if(cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Xl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return se(qt),null;case 4:return yi(),null;case 10:return ls(r.type),null;case 22:case 23:return cs(r),Nm(),i!==null&&se(ma),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return ls(jt),null;case 25:return null;default:return null}}function UE(i,r){switch(pm(r),r.tag){case 3:ls(jt),yi();break;case 26:case 27:case 5:Gi(r);break;case 4:yi();break;case 13:cs(r);break;case 19:se(qt);break;case 10:ls(r.type);break;case 22:case 23:cs(r),Nm(),i!==null&&se(ma);break;case 24:ls(jt)}}function fu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){st(r,r.return,S)}}function Ws(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var C=o,q=S;try{q()}catch(Y){st(f,C,Y)}}}u=u.next}while(u!==m)}}catch(Y){st(r,r.return,Y)}}function zE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Cv(r,o)}catch(u){st(i,i.return,u)}}}function jE(i,r,o){o.props=ga(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){st(i,r,u)}}function du(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){st(i,r,f)}}function Oi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(i,r,f)}else o.current=null}function qE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(i,i.return,f)}}function ip(i,r,o){try{var u=i.stateNode;mR(u,i.type,o,r),u[Rt]=r}catch(f){st(i,i.return,f)}}function BE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&sr(i.type)||i.tag===4}function sp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||BE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&sr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function rp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Gh));else if(u!==4&&(u===27&&sr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(rp(i,r,o),i=i.sibling;i!==null;)rp(i,r,o),i=i.sibling}function kh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&sr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(kh(i,r,o),i=i.sibling;i!==null;)kh(i,r,o),i=i.sibling}function FE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);sn(r,u,o),r[Lt]=i,r[Rt]=o}catch(m){st(i,i.return,m)}}var ds=!1,bt=!1,ap=!1,HE=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function KC(i,r){if(i=i.containerInfo,Dp=Zh,i=tv(i),sm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,C=-1,q=0,Y=0,$=i,B=null;t:for(;;){for(var F;$!==o||f!==0&&$.nodeType!==3||(S=E+f),$!==m||u!==0&&$.nodeType!==3||(C=E+u),$.nodeType===3&&(E+=$.nodeValue.length),(F=$.firstChild)!==null;)B=$,$=F;for(;;){if($===i)break t;if(B===o&&++q===f&&(S=E),B===m&&++Y===u&&(C=E),(F=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=F}o=S===-1||C===-1?null:{start:S,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(xp={focusedElem:i,selectionRange:o},Zh=!1,Yt=r;Yt!==null;)if(r=Yt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Yt=i;else for(;Yt!==null;){switch(r=Yt,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ee=ga(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Ee,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ge){st(o,o.return,ge)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)kp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":kp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Yt=i;break}Yt=r.return}}function GE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:$s(i,o),u&4&&fu(5,o);break;case 1:if($s(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=ga(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&zE(o),u&512&&du(o,o.return);break;case 3:if($s(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Cv(i,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&FE(o);case 26:case 5:$s(i,o),r===null&&u&4&&qE(o),u&512&&du(o,o.return);break;case 12:$s(i,o);break;case 13:$s(i,o),u&4&&KE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=iR.bind(null,o),TR(i,o))));break;case 22:if(u=o.memoizedState!==null||ds,!u){r=r!==null&&r.memoizedState!==null||bt,f=ds;var m=bt;ds=u,(bt=r)&&!m?Zs(i,o,(o.subtreeFlags&8772)!==0):$s(i,o),ds=f,bt=m}break;case 30:break;default:$s(i,o)}}function QE(i){var r=i.alternate;r!==null&&(i.alternate=null,QE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&zs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var mt=null,wn=!1;function ms(i,r,o){for(o=o.child;o!==null;)YE(i,r,o),o=o.sibling}function YE(i,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(yt,o)}catch{}switch(o.tag){case 26:bt||Oi(o,r),ms(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:bt||Oi(o,r);var u=mt,f=wn;sr(o.type)&&(mt=o.stateNode,wn=!1),ms(i,r,o),Su(o.stateNode),mt=u,wn=f;break;case 5:bt||Oi(o,r);case 6:if(u=mt,f=wn,mt=null,ms(i,r,o),mt=u,wn=f,mt!==null)if(wn)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{mt.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:mt!==null&&(wn?(i=mt,PT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Du(i)):PT(mt,o.stateNode));break;case 4:u=mt,f=wn,mt=o.stateNode.containerInfo,wn=!0,ms(i,r,o),mt=u,wn=f;break;case 0:case 11:case 14:case 15:bt||Ws(2,o,r),bt||Ws(4,o,r),ms(i,r,o);break;case 1:bt||(Oi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&jE(o,r,u)),ms(i,r,o);break;case 21:ms(i,r,o);break;case 22:bt=(u=bt)||o.memoizedState!==null,ms(i,r,o),bt=u;break;default:ms(i,r,o)}}function KE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Du(i)}catch(o){st(r,r.return,o)}}function XC(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new HE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new HE),r;default:throw Error(s(435,i.tag))}}function op(i,r){var o=XC(i);r.forEach(function(u){var f=sR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Vn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(sr(S.type)){mt=S.stateNode,wn=!1;break e}break;case 5:mt=S.stateNode,wn=!1;break e;case 3:case 4:mt=S.stateNode.containerInfo,wn=!0;break e}S=S.return}if(mt===null)throw Error(s(160));YE(m,E,f),mt=null,wn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)XE(r,i),r=r.sibling}var ui=null;function XE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Vn(r,i),Ln(i),u&4&&(Ws(3,i,i.return),fu(3,i),Ws(5,i,i.return));break;case 1:Vn(r,i),Ln(i),u&512&&(bt||o===null||Oi(o,o.return)),u&64&&ds&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ui;if(Vn(r,i),Ln(i),u&512&&(bt||o===null||Oi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Gr]||m[Lt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),sn(m,u,o),m[Lt]=i,St(m),u=m;break e;case"link":var E=FT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),sn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=FT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),sn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Lt]=i,St(m),u=m}i.stateNode=u}else HT(f,i.type,i.stateNode);else i.stateNode=BT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?HT(f,i.type,i.stateNode):BT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&ip(i,i.memoizedProps,o.memoizedProps)}break;case 27:Vn(r,i),Ln(i),u&512&&(bt||o===null||Oi(o,o.return)),o!==null&&u&4&&ip(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Vn(r,i),Ln(i),u&512&&(bt||o===null||Oi(o,o.return)),i.flags&32){f=i.stateNode;try{Qn(f,"")}catch(F){st(i,i.return,F)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,ip(i,f,o!==null?o.memoizedProps:f)),u&1024&&(ap=!0);break;case 6:if(Vn(r,i),Ln(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(F){st(i,i.return,F)}}break;case 3:if(Xh=null,f=ui,ui=Yh(r.containerInfo),Vn(r,i),ui=f,Ln(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Du(r.containerInfo)}catch(F){st(i,i.return,F)}ap&&(ap=!1,WE(i));break;case 4:u=ui,ui=Yh(i.stateNode.containerInfo),Vn(r,i),Ln(i),ui=u;break;case 12:Vn(r,i),Ln(i);break;case 13:Vn(r,i),Ln(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(dp=Hn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,op(i,u)));break;case 22:f=i.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,q=ds,Y=bt;if(ds=q||f,bt=Y||C,Vn(r,i),bt=Y,ds=q,Ln(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||ds||bt||_a(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(m=C.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=C.stateNode;var $=C.memoizedProps.style,B=$!=null&&$.hasOwnProperty("display")?$.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(F){st(C,C.return,F)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(F){st(C,C.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,op(i,o))));break;case 19:Vn(r,i),Ln(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,op(i,u)));break;case 30:break;case 21:break;default:Vn(r,i),Ln(i)}}function Ln(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(BE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=sp(i);kh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(Qn(E,""),o.flags&=-33);var S=sp(i);kh(i,S,E);break;case 3:case 4:var C=o.stateNode.containerInfo,q=sp(i);rp(i,q,C);break;default:throw Error(s(161))}}catch(Y){st(i,i.return,Y)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function WE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;WE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function $s(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)GE(i,r.alternate,r),r=r.sibling}function _a(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Ws(4,r,r.return),_a(r);break;case 1:Oi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&jE(r,r.return,o),_a(r);break;case 27:Su(r.stateNode);case 26:case 5:Oi(r,r.return),_a(r);break;case 22:r.memoizedState===null&&_a(r);break;case 30:_a(r);break;default:_a(r)}i=i.sibling}}function Zs(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:Zs(f,m,o),fu(4,m);break;case 1:if(Zs(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){st(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)Av(C[f],S)}catch(q){st(u,u.return,q)}}o&&E&64&&zE(m),du(m,m.return);break;case 27:FE(m);case 26:case 5:Zs(f,m,o),o&&u===null&&E&4&&qE(m),du(m,m.return);break;case 12:Zs(f,m,o);break;case 13:Zs(f,m,o),o&&E&4&&KE(f,m);break;case 22:m.memoizedState===null&&Zs(f,m,o),du(m,m.return);break;case 30:break;default:Zs(f,m,o)}r=r.sibling}}function lp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Zl(o))}function up(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Zl(i))}function Mi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)$E(i,r,o,u),r=r.sibling}function $E(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Mi(i,r,o,u),f&2048&&fu(9,r);break;case 1:Mi(i,r,o,u);break;case 3:Mi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Zl(i)));break;case 12:if(f&2048){Mi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(r,r.return,C)}}else Mi(i,r,o,u);break;case 13:Mi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Mi(i,r,o,u):mu(i,r):m._visibility&2?Mi(i,r,o,u):(m._visibility|=2,bo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&lp(E,r);break;case 24:Mi(i,r,o,u),f&2048&&up(r.alternate,r);break;default:Mi(i,r,o,u)}}function bo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,C=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:bo(m,E,S,C,f),fu(8,E);break;case 23:break;case 22:var Y=E.stateNode;E.memoizedState!==null?Y._visibility&2?bo(m,E,S,C,f):mu(m,E):(Y._visibility|=2,bo(m,E,S,C,f)),f&&q&2048&&lp(E.alternate,E);break;case 24:bo(m,E,S,C,f),f&&q&2048&&up(E.alternate,E);break;default:bo(m,E,S,C,f)}r=r.sibling}}function mu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:mu(o,u),f&2048&&lp(u.alternate,u);break;case 24:mu(o,u),f&2048&&up(u.alternate,u);break;default:mu(o,u)}r=r.sibling}}var pu=8192;function Ao(i){if(i.subtreeFlags&pu)for(i=i.child;i!==null;)ZE(i),i=i.sibling}function ZE(i){switch(i.tag){case 26:Ao(i),i.flags&pu&&i.memoizedState!==null&&kR(ui,i.memoizedState,i.memoizedProps);break;case 5:Ao(i);break;case 3:case 4:var r=ui;ui=Yh(i.stateNode.containerInfo),Ao(i),ui=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=pu,pu=16777216,Ao(i),pu=r):Ao(i));break;default:Ao(i)}}function JE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function gu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Yt=u,tT(u,i)}JE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)eT(i),i=i.sibling}function eT(i){switch(i.tag){case 0:case 11:case 15:gu(i),i.flags&2048&&Ws(9,i,i.return);break;case 3:gu(i);break;case 12:gu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Ph(i)):gu(i);break;default:gu(i)}}function Ph(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Yt=u,tT(u,i)}JE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Ws(8,r,r.return),Ph(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Ph(r));break;default:Ph(r)}i=i.sibling}}function tT(i,r){for(;Yt!==null;){var o=Yt;switch(o.tag){case 0:case 11:case 15:Ws(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Zl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Yt=u;else e:for(o=i;Yt!==null;){u=Yt;var f=u.sibling,m=u.return;if(QE(u),u===o){Yt=null;break e}if(f!==null){f.return=m,Yt=f;break e}Yt=m}}}var WC={getCacheForType:function(i){var r=un(jt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},$C=typeof WeakMap=="function"?WeakMap:Map,$e=0,ot=null,ke=null,Be=0,Ze=0,Un=null,Js=!1,Co=!1,cp=!1,ps=0,Et=0,er=0,ya=0,hp=0,ti=0,Ro=0,_u=null,bn=null,fp=!1,dp=0,Vh=1/0,Lh=null,tr=null,nn=0,nr=null,Io=null,No=0,mp=0,pp=null,nT=null,yu=0,gp=null;function zn(){if(($e&2)!==0&&Be!==0)return Be&-Be;if(Q.T!==null){var i=go;return i!==0?i:wp()}return Ls()}function iT(){ti===0&&(ti=(Be&536870912)===0||Qe?Rl():536870912);var i=ei.current;return i!==null&&(i.flags|=32),ti}function jn(i,r,o){(i===ot&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(Do(i,0),ir(i,Be,ti,!1)),Yi(i,o),(($e&2)===0||i!==ot)&&(i===ot&&(($e&2)===0&&(ya|=o),Et===4&&ir(i,Be,ti,!1)),ki(i))}function sT(i,r,o){if(($e&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Hr(i,r),f=u?eR(i,r):vp(i,r,!0),m=u;do{if(f===0){Co&&!u&&ir(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!ZC(o)){f=vp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=_u;var C=S.current.memoizedState.isDehydrated;if(C&&(Do(S,E).flags|=256),E=vp(S,E,!1),E!==2){if(cp&&!C){S.errorRecoveryDisabledLanes|=m,ya|=m,f=4;break e}m=bn,bn=f,m!==null&&(bn===null?bn=m:bn.push.apply(bn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Do(i,0),ir(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:ir(u,r,ti,!Js);break e;case 2:bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=dp+300-Hn(),10<f)){if(ir(u,r,ti,!Js),Qa(u,0,!0)!==0)break e;u.timeoutHandle=MT(rT.bind(null,u,o,bn,Lh,fp,r,ti,ya,Ro,Js,m,2,-0,0),f);break e}rT(u,o,bn,Lh,fp,r,ti,ya,Ro,Js,m,0,-0,0)}}break}while(!0);ki(i)}function rT(i,r,o,u,f,m,E,S,C,q,Y,$,B,F){if(i.timeoutHandle=-1,$=r.subtreeFlags,($&8192||($&16785408)===16785408)&&(Au={stylesheets:null,count:0,unsuspend:MR},ZE(r),$=PR(),$!==null)){i.cancelPendingCommit=$(fT.bind(null,i,r,m,o,u,f,E,S,C,Y,1,B,F)),ir(i,m,E,!q);return}fT(i,r,m,o,u,f,E,S,C)}function ZC(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!kn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ir(i,r,o,u){r&=~hp,r&=~ya,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-ln(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&vi(i,o,r)}function Uh(){return($e&6)===0?(vu(0),!1):!0}function _p(){if(ke!==null){if(Ze===0)var i=ke.return;else i=ke,os=fa=null,km(i),So=null,uu=0,i=ke;for(;i!==null;)UE(i.alternate,i),i=i.return;ke=null}}function Do(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,gR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),_p(),ot=i,ke=o=ss(i.current,null),Be=r,Ze=0,Un=null,Js=!1,Co=Hr(i,r),cp=!1,Ro=ti=hp=ya=er=Et=0,bn=_u=null,fp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-ln(u),m=1<<f;r|=i[f],u&=~m}return ps=r,ah(),o}function aT(i,r){Ie=null,Q.H=Ah,r===eu||r===ph?(r=wv(),Ze=3):r===Ev?(r=wv(),Ze=4):Ze=r===bE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Un=r,ke===null&&(Et=1,Dh(i,Wn(r,i.current)))}function oT(){var i=Q.H;return Q.H=Ah,i===null?Ah:i}function lT(){var i=Q.A;return Q.A=WC,i}function yp(){Et=4,Js||(Be&4194048)!==Be&&ei.current!==null||(Co=!0),(er&134217727)===0&&(ya&134217727)===0||ot===null||ir(ot,Be,ti,!1)}function vp(i,r,o){var u=$e;$e|=2;var f=oT(),m=lT();(ot!==i||Be!==r)&&(Lh=null,Do(i,r)),r=!1;var E=Et;e:do try{if(Ze!==0&&ke!==null){var S=ke,C=Un;switch(Ze){case 8:_p(),E=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(r=!0);var q=Ze;if(Ze=0,Un=null,xo(i,S,C,q),o&&Co){E=0;break e}break;default:q=Ze,Ze=0,Un=null,xo(i,S,C,q)}}JC(),E=Et;break}catch(Y){aT(i,Y)}while(!0);return r&&i.shellSuspendCounter++,os=fa=null,$e=u,Q.H=f,Q.A=m,ke===null&&(ot=null,Be=0,ah()),E}function JC(){for(;ke!==null;)uT(ke)}function eR(i,r){var o=$e;$e|=2;var u=oT(),f=lT();ot!==i||Be!==r?(Lh=null,Vh=Hn()+500,Do(i,r)):Co=Hr(i,r);e:do try{if(Ze!==0&&ke!==null){r=ke;var m=Un;t:switch(Ze){case 1:Ze=0,Un=null,xo(i,r,m,1);break;case 2:case 9:if(Tv(m)){Ze=0,Un=null,cT(r);break}r=function(){Ze!==2&&Ze!==9||ot!==i||(Ze=7),ki(i)},m.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:Tv(m)?(Ze=0,Un=null,cT(r)):(Ze=0,Un=null,xo(i,r,m,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var S=ke;if(!E||GT(E)){Ze=0,Un=null;var C=S.sibling;if(C!==null)ke=C;else{var q=S.return;q!==null?(ke=q,zh(q)):ke=null}break t}}Ze=0,Un=null,xo(i,r,m,5);break;case 6:Ze=0,Un=null,xo(i,r,m,6);break;case 8:_p(),Et=6;break e;default:throw Error(s(462))}}tR();break}catch(Y){aT(i,Y)}while(!0);return os=fa=null,Q.H=u,Q.A=f,$e=o,ke!==null?0:(ot=null,Be=0,ah(),Et)}function tR(){for(;ke!==null&&!wl();)uT(ke)}function uT(i){var r=VE(i.alternate,i,ps);i.memoizedProps=i.pendingProps,r===null?zh(i):ke=r}function cT(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=DE(o,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=DE(o,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:km(r);default:UE(o,r),r=ke=hv(r,ps),r=VE(o,r,ps)}i.memoizedProps=i.pendingProps,r===null?zh(i):ke=r}function xo(i,r,o,u){os=fa=null,km(r),So=null,uu=0;var f=r.return;try{if(HC(i,f,r,o,Be)){Et=1,Dh(i,Wn(o,i.current)),ke=null;return}}catch(m){if(f!==null)throw ke=f,m;Et=1,Dh(i,Wn(o,i.current)),ke=null;return}r.flags&32768?(Qe||u===1?i=!0:Co||(Be&536870912)!==0?i=!1:(Js=i=!0,(u===2||u===9||u===3||u===6)&&(u=ei.current,u!==null&&u.tag===13&&(u.flags|=16384))),hT(r,i)):zh(r)}function zh(i){var r=i;do{if((r.flags&32768)!==0){hT(r,Js);return}i=r.return;var o=QC(r.alternate,r,ps);if(o!==null){ke=o;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=i}while(r!==null);Et===0&&(Et=5)}function hT(i,r){do{var o=YC(i.alternate,i);if(o!==null){o.flags&=32767,ke=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){ke=i;return}ke=i=o}while(i!==null);Et=6,ke=null}function fT(i,r,o,u,f,m,E,S,C){i.cancelPendingCommit=null;do jh();while(nn!==0);if(($e&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=um,Nl(i,o,m,E,S,C),i===ot&&(ke=ot=null,Be=0),Io=r,nr=i,No=o,mp=m,pp=f,nT=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,rR(jr,function(){return _T(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Q.T,Q.T=null,f=ie.p,ie.p=2,E=$e,$e|=4;try{KC(i,r,o)}finally{$e=E,ie.p=f,Q.T=u}}nn=1,dT(),mT(),pT()}}function dT(){if(nn===1){nn=0;var i=nr,r=Io,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null;var u=ie.p;ie.p=2;var f=$e;$e|=4;try{XE(r,i);var m=xp,E=tv(i.containerInfo),S=m.focusedElem,C=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&ev(S.ownerDocument.documentElement,S)){if(C!==null&&sm(S)){var q=C.start,Y=C.end;if(Y===void 0&&(Y=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(Y,S.value.length);else{var $=S.ownerDocument||document,B=$&&$.defaultView||window;if(B.getSelection){var F=B.getSelection(),Ee=S.textContent.length,ge=Math.min(C.start,Ee),it=C.end===void 0?ge:Math.min(C.end,Ee);!F.extend&&ge>it&&(E=it,it=ge,ge=E);var L=Jy(S,ge),O=Jy(S,it);if(L&&O&&(F.rangeCount!==1||F.anchorNode!==L.node||F.anchorOffset!==L.offset||F.focusNode!==O.node||F.focusOffset!==O.offset)){var j=$.createRange();j.setStart(L.node,L.offset),F.removeAllRanges(),ge>it?(F.addRange(j),F.extend(O.node,O.offset)):(j.setEnd(O.node,O.offset),F.addRange(j))}}}}for($=[],F=S;F=F.parentNode;)F.nodeType===1&&$.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<$.length;S++){var W=$[S];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Zh=!!Dp,xp=Dp=null}finally{$e=f,ie.p=u,Q.T=o}}i.current=r,nn=2}}function mT(){if(nn===2){nn=0;var i=nr,r=Io,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Q.T,Q.T=null;var u=ie.p;ie.p=2;var f=$e;$e|=4;try{GE(i,r.alternate,r)}finally{$e=f,ie.p=u,Q.T=o}}nn=3}}function pT(){if(nn===4||nn===3){nn=0,Pc();var i=nr,r=Io,o=No,u=nT;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?nn=5:(nn=0,Io=nr=null,gT(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(tr=null),Ya(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(yt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Q.T,f=ie.p,ie.p=2,Q.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{Q.T=r,ie.p=f}}(No&3)!==0&&jh(),ki(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===gp?yu++:(yu=0,gp=i):yu=0,vu(0)}}function gT(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Zl(r)))}function jh(i){return dT(),mT(),pT(),_T()}function _T(){if(nn!==5)return!1;var i=nr,r=mp;mp=0;var o=Ya(No),u=Q.T,f=ie.p;try{ie.p=32>o?32:o,Q.T=null,o=pp,pp=null;var m=nr,E=No;if(nn=0,Io=nr=null,No=0,($e&6)!==0)throw Error(s(331));var S=$e;if($e|=4,eT(m.current),$E(m,m.current,E,o),$e=S,vu(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(yt,m)}catch{}return!0}finally{ie.p=f,Q.T=u,gT(i,r)}}function yT(i,r,o){r=Wn(o,r),r=Km(i.stateNode,r,2),i=Qs(i,r,2),i!==null&&(Yi(i,2),ki(i))}function st(i,r,o){if(i.tag===3)yT(i,i,o);else for(;r!==null;){if(r.tag===3){yT(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(tr===null||!tr.has(u))){i=Wn(o,i),o=SE(2),u=Qs(r,o,2),u!==null&&(wE(o,u,r,i),Yi(u,2),ki(u));break}}r=r.return}}function Ep(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new $C;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(cp=!0,f.add(o),i=nR.bind(null,i,r,o),r.then(i,i))}function nR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ot===i&&(Be&o)===o&&(Et===4||Et===3&&(Be&62914560)===Be&&300>Hn()-dp?($e&2)===0&&Do(i,0):hp|=o,Ro===Be&&(Ro=0)),ki(i)}function vT(i,r){r===0&&(r=Il()),i=ho(i,r),i!==null&&(Yi(i,r),ki(i))}function iR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),vT(i,o)}function sR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),vT(i,o)}function rR(i,r){return Ur(i,r)}var qh=null,Oo=null,Tp=!1,Bh=!1,Sp=!1,va=0;function ki(i){i!==Oo&&i.next===null&&(Oo===null?qh=Oo=i:Oo=Oo.next=i),Bh=!0,Tp||(Tp=!0,oR())}function vu(i,r){if(!Sp&&Bh){Sp=!0;do for(var o=!1,u=qh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-ln(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,wT(u,m))}else m=Be,m=Qa(u,u===ot?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Hr(u,m)||(o=!0,wT(u,m));u=u.next}while(o);Sp=!1}}function aR(){ET()}function ET(){Bh=Tp=!1;var i=0;va!==0&&(pR()&&(i=va),va=0);for(var r=Hn(),o=null,u=qh;u!==null;){var f=u.next,m=TT(u,r);m===0?(u.next=null,o===null?qh=f:o.next=f,f===null&&(Oo=o)):(o=u,(i!==0||(m&3)!==0)&&(Bh=!0)),u=f}vu(i)}function TT(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-ln(m),S=1<<E,C=f[E];C===-1?((S&o)===0||(S&u)!==0)&&(f[E]=Cl(S,r)):C<=r&&(i.expiredLanes|=S),m&=~S}if(r=ot,o=Be,o=Qa(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&zr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Hr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&zr(u),Ya(o)){case 2:case 8:o=Ha;break;case 32:o=jr;break;case 268435456:o=Ga;break;default:o=jr}return u=ST.bind(null,i),o=Ur(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&zr(u),i.callbackPriority=2,i.callbackNode=null,2}function ST(i,r){if(nn!==0&&nn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(jh()&&i.callbackNode!==o)return null;var u=Be;return u=Qa(i,i===ot?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(sT(i,u,r),TT(i,Hn()),i.callbackNode!=null&&i.callbackNode===o?ST.bind(null,i):null)}function wT(i,r){if(jh())return null;sT(i,r,!0)}function oR(){_R(function(){($e&6)!==0?Ur(bl,aR):ET()})}function wp(){return va===0&&(va=Rl()),va}function bT(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Ja(""+i)}function AT(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function lR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=bT((f[Rt]||null).action),E=u.submitter;E&&(r=(r=E[Rt]||null)?bT(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new eo("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(va!==0){var C=E?AT(f,E):new FormData(f);Fm(o,{pending:!0,data:C,method:f.method,action:m},null,C)}}else typeof m=="function"&&(S.preventDefault(),C=E?AT(f,E):new FormData(f),Fm(o,{pending:!0,data:C,method:f.method,action:m},m,C))},currentTarget:f}]})}}for(var bp=0;bp<lm.length;bp++){var Ap=lm[bp],uR=Ap.toLowerCase(),cR=Ap[0].toUpperCase()+Ap.slice(1);li(uR,"on"+cR)}li(sv,"onAnimationEnd"),li(rv,"onAnimationIteration"),li(av,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(RC,"onTransitionRun"),li(IC,"onTransitionStart"),li(NC,"onTransitionCancel"),li(ov,"onTransitionEnd"),Xi("onMouseEnter",["mouseout","mouseover"]),Xi("onMouseLeave",["mouseout","mouseover"]),Xi("onPointerEnter",["pointerout","pointerover"]),Xi("onPointerLeave",["pointerout","pointerover"]),ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eu));function CT(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],C=S.instance,q=S.currentTarget;if(S=S.listener,C!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(Y){Nh(Y)}f.currentTarget=null,m=C}else for(E=0;E<u.length;E++){if(S=u[E],C=S.instance,q=S.currentTarget,S=S.listener,C!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(Y){Nh(Y)}f.currentTarget=null,m=C}}}}function Pe(i,r){var o=r[xl];o===void 0&&(o=r[xl]=new Set);var u=i+"__bubble";o.has(u)||(RT(r,i,2,!1),o.add(u))}function Cp(i,r,o){var u=0;r&&(u|=4),RT(o,i,u,r)}var Fh="_reactListening"+Math.random().toString(36).slice(2);function Rp(i){if(!i[Fh]){i[Fh]=!0,Ol.forEach(function(o){o!=="selectionchange"&&(hR.has(o)||Cp(o,!1,i),Cp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Fh]||(r[Fh]=!0,Cp("selectionchange",!1,r))}}function RT(i,r,o,u){switch($T(r)){case 2:var f=UR;break;case 8:f=zR;break;default:f=qp}o=f.bind(null,r,o,i),f=void 0,!Kn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Ip(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=Ki(S),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Gc(function(){var q=m,Y=Yn(o),$=[];e:{var B=lv.get(i);if(B!==void 0){var F=eo,Ee=i;switch(i){case"keypress":if(Ai(o)===0)break e;case"keydown":case"keyup":F=ao;break;case"focusin":Ee="focus",F=io;break;case"focusout":Ee="blur",F=io;break;case"beforeblur":case"afterblur":F=io;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Xn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Jc;break;case sv:case rv:case av:F=so;break;case ov:F=th;break;case"scroll":case"scrollend":F=Qc;break;case"wheel":F=oo;break;case"copy":case"cut":case"paste":F=ro;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Hl;break;case"toggle":case"beforetoggle":F=ih}var ge=(r&4)!==0,it=!ge&&(i==="scroll"||i==="scrollend"),L=ge?B!==null?B+"Capture":null:B;ge=[];for(var O=q,j;O!==null;){var W=O;if(j=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||j===null||L===null||(W=Zr(O,L),W!=null&&ge.push(Tu(O,W,j))),it)break;O=O.return}0<ge.length&&(B=new F(B,Ee,null,o,Y),$.push({event:B,listeners:ge}))}}if((r&7)===0){e:{if(B=i==="mouseover"||i==="pointerover",F=i==="mouseout"||i==="pointerout",B&&o!==Zi&&(Ee=o.relatedTarget||o.fromElement)&&(Ki(Ee)||Ee[Gn]))break e;if((F||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,F?(Ee=o.relatedTarget||o.toElement,F=q,Ee=Ee?Ki(Ee):null,Ee!==null&&(it=l(Ee),ge=Ee.tag,Ee!==it||ge!==5&&ge!==27&&ge!==6)&&(Ee=null)):(F=null,Ee=q),F!==Ee)){if(ge=Xn,W="onMouseLeave",L="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ge=Hl,W="onPointerLeave",L="onPointerEnter",O="pointer"),it=F==null?B:Ti(F),j=Ee==null?B:Ti(Ee),B=new ge(W,O+"leave",F,o,Y),B.target=it,B.relatedTarget=j,W=null,Ki(Y)===q&&(ge=new ge(L,O+"enter",Ee,o,Y),ge.target=j,ge.relatedTarget=it,W=ge),it=W,F&&Ee)t:{for(ge=F,L=Ee,O=0,j=ge;j;j=Mo(j))O++;for(j=0,W=L;W;W=Mo(W))j++;for(;0<O-j;)ge=Mo(ge),O--;for(;0<j-O;)L=Mo(L),j--;for(;O--;){if(ge===L||L!==null&&ge===L.alternate)break t;ge=Mo(ge),L=Mo(L)}ge=null}else ge=null;F!==null&&IT($,B,F,ge,!1),Ee!==null&&it!==null&&IT($,it,Ee,ge,!0)}}e:{if(B=q?Ti(q):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var ue=Yy;else if(zt(B))if(Ky)ue=bC;else{ue=SC;var xe=TC}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?q&&Ll(q.elementType)&&(ue=Yy):ue=wC;if(ue&&(ue=ue(i,q))){is($,ue,o,Y);break e}xe&&xe(i,B,q),i==="focusout"&&q&&B.type==="number"&&q.memoizedProps.value!=null&&qs(B,"number",B.value)}switch(xe=q?Ti(q):window,i){case"focusin":(zt(xe)||xe.contentEditable==="true")&&(lo=xe,rm=q,Yl=null);break;case"focusout":Yl=rm=lo=null;break;case"mousedown":am=!0;break;case"contextmenu":case"mouseup":case"dragend":am=!1,nv($,o,Y);break;case"selectionchange":if(CC)break;case"keydown":case"keyup":nv($,o,Y)}var fe;if(Ii)e:{switch(i){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else je?H(i,o)&&(_e="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(y&&o.locale!=="ko"&&(je||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&je&&(fe=zl()):(bi=Y,Bs="value"in bi?bi.value:bi.textContent,je=!0)),xe=Hh(q,_e),0<xe.length&&(_e=new Bl(_e,i,null,o,Y),$.push({event:_e,listeners:xe}),fe?_e.data=fe:(fe=te(o),fe!==null&&(_e.data=fe)))),(fe=_?Ut(i,o):qe(i,o))&&(_e=Hh(q,"onBeforeInput"),0<_e.length&&(xe=new Bl("onBeforeInput","beforeinput",null,o,Y),$.push({event:xe,listeners:_e}),xe.data=fe)),lR($,i,q,o,Y)}CT($,r)})}function Tu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Hh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Zr(i,o),f!=null&&u.unshift(Tu(i,f,m)),f=Zr(i,r),f!=null&&u.push(Tu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Mo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function IT(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,C=S.alternate,q=S.stateNode;if(S=S.tag,C!==null&&C===u)break;S!==5&&S!==26&&S!==27||q===null||(C=q,f?(q=Zr(o,m),q!=null&&E.unshift(Tu(o,q,C))):f||(q=Zr(o,m),q!=null&&E.push(Tu(o,q,C)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var fR=/\r\n?/g,dR=/\u0000|\uFFFD/g;function NT(i){return(typeof i=="string"?i:""+i).replace(fR,`
`).replace(dR,"")}function DT(i,r){return r=NT(r),NT(i)===r}function Gh(){}function nt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Qn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Qn(i,""+u);break;case"className":Si(i,"class",u);break;case"tabIndex":Si(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(i,o,u);break;case"style":Vl(i,u,m);break;case"data":if(r!=="object"){Si(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Ja(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&nt(i,r,"name",f.name,f,null),nt(i,r,"formEncType",f.formEncType,f,null),nt(i,r,"formMethod",f.formMethod,f,null),nt(i,r,"formTarget",f.formTarget,f,null)):(nt(i,r,"encType",f.encType,f,null),nt(i,r,"method",f.method,f,null),nt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Ja(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Gh);break;case"onScroll":u!=null&&Pe("scroll",i);break;case"onScrollEnd":u!=null&&Pe("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Ja(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Pe("beforetoggle",i),Pe("toggle",i),js(i,"popover",u);break;case"xlinkActuate":Jt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Jt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Jt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Jt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Jt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Jt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Jt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Jt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Jt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":js(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Zd.get(o)||o,js(i,o,u))}}function Np(i,r,o,u,f,m){switch(o){case"style":Vl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Qn(i,u):(typeof u=="number"||typeof u=="bigint")&&Qn(i,""+u);break;case"onScroll":u!=null&&Pe("scroll",i);break;case"onScrollEnd":u!=null&&Pe("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Gh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ka.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Rt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):js(i,o,u)}}}function sn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",i),Pe("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,m,E,o,null)}}f&&nt(i,r,"srcSet",o.srcSet,o,null),u&&nt(i,r,"src",o.src,o,null);return;case"input":Pe("invalid",i);var S=m=E=f=null,C=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":f=Y;break;case"type":E=Y;break;case"checked":C=Y;break;case"defaultChecked":q=Y;break;case"value":m=Y;break;case"defaultValue":S=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:nt(i,r,u,Y,o,null)}}Xr(i,m,S,C,q,E,f,!1),Za(i);return;case"select":Pe("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:nt(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?$i(i,!!u,r,!1):o!=null&&$i(i,!!u,o,!0);return;case"textarea":Pe("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:nt(i,r,E,S,o,null)}Wr(i,u,f,m),Za(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(i,r,C,u,o,null)}return;case"dialog":Pe("beforetoggle",i),Pe("toggle",i),Pe("cancel",i),Pe("close",i);break;case"iframe":case"object":Pe("load",i);break;case"video":case"audio":for(u=0;u<Eu.length;u++)Pe(Eu[u],i);break;case"image":Pe("error",i),Pe("load",i);break;case"details":Pe("toggle",i);break;case"embed":case"source":case"link":Pe("error",i),Pe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,q,u,o,null)}return;default:if(Ll(r)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&Np(i,r,Y,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&nt(i,r,S,u,o,null))}function mR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,C=null,q=null,Y=null;for(F in o){var $=o[F];if(o.hasOwnProperty(F)&&$!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=$;default:u.hasOwnProperty(F)||nt(i,r,F,null,u,$)}}for(var B in u){var F=u[B];if($=o[B],u.hasOwnProperty(B)&&(F!=null||$!=null))switch(B){case"type":m=F;break;case"name":f=F;break;case"checked":q=F;break;case"defaultChecked":Y=F;break;case"value":E=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==$&&nt(i,r,B,F,u,$)}}Mn(i,E,S,C,q,Y,m,f);return;case"select":F=E=S=B=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":F=C;default:u.hasOwnProperty(m)||nt(i,r,m,null,u,C)}for(f in u)if(m=u[f],C=o[f],u.hasOwnProperty(f)&&(m!=null||C!=null))switch(f){case"value":B=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==C&&nt(i,r,f,m,u,C)}r=S,o=E,u=F,B!=null?$i(i,!!o,B,!1):!!u!=!!o&&(r!=null?$i(i,!!o,r,!0):$i(i,!!o,o?[]:"",!1));return;case"textarea":F=B=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:nt(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":B=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&nt(i,r,E,f,u,m)}et(i,B,F);return;case"option":for(var Ee in o)if(B=o[Ee],o.hasOwnProperty(Ee)&&B!=null&&!u.hasOwnProperty(Ee))switch(Ee){case"selected":i.selected=!1;break;default:nt(i,r,Ee,null,u,B)}for(C in u)if(B=u[C],F=o[C],u.hasOwnProperty(C)&&B!==F&&(B!=null||F!=null))switch(C){case"selected":i.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:nt(i,r,C,B,u,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in o)B=o[ge],o.hasOwnProperty(ge)&&B!=null&&!u.hasOwnProperty(ge)&&nt(i,r,ge,null,u,B);for(q in u)if(B=u[q],F=o[q],u.hasOwnProperty(q)&&B!==F&&(B!=null||F!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:nt(i,r,q,B,u,F)}return;default:if(Ll(r)){for(var it in o)B=o[it],o.hasOwnProperty(it)&&B!==void 0&&!u.hasOwnProperty(it)&&Np(i,r,it,void 0,u,B);for(Y in u)B=u[Y],F=o[Y],!u.hasOwnProperty(Y)||B===F||B===void 0&&F===void 0||Np(i,r,Y,B,u,F);return}}for(var L in o)B=o[L],o.hasOwnProperty(L)&&B!=null&&!u.hasOwnProperty(L)&&nt(i,r,L,null,u,B);for($ in u)B=u[$],F=o[$],!u.hasOwnProperty($)||B===F||B==null&&F==null||nt(i,r,$,B,u,F)}var Dp=null,xp=null;function Qh(i){return i.nodeType===9?i:i.ownerDocument}function xT(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function OT(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Op(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Mp=null;function pR(){var i=window.event;return i&&i.type==="popstate"?i===Mp?!1:(Mp=i,!0):(Mp=null,!1)}var MT=typeof setTimeout=="function"?setTimeout:void 0,gR=typeof clearTimeout=="function"?clearTimeout:void 0,kT=typeof Promise=="function"?Promise:void 0,_R=typeof queueMicrotask=="function"?queueMicrotask:typeof kT<"u"?function(i){return kT.resolve(null).then(i).catch(yR)}:MT;function yR(i){setTimeout(function(){throw i})}function sr(i){return i==="head"}function PT(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Su(E.documentElement),o&2&&Su(E.body),o&4)for(o=E.head,Su(o),E=o.firstChild;E;){var S=E.nextSibling,C=E.nodeName;E[Gr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),Du(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Du(r)}function kp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":kp(o),zs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function vR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Gr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=ci(i.nextSibling),i===null)break}return null}function ER(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ci(i.nextSibling),i===null))return null;return i}function Pp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function TR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function ci(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Vp=null;function VT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function LT(i,r,o){switch(r=Qh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Su(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);zs(i)}var ni=new Map,UT=new Set;function Yh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var gs=ie.d;ie.d={f:SR,r:wR,D:bR,C:AR,L:CR,m:RR,X:NR,S:IR,M:DR};function SR(){var i=gs.f(),r=Uh();return i||r}function wR(i){var r=Ei(i);r!==null&&r.tag===5&&r.type==="form"?sE(r):gs.r(i)}var ko=typeof document>"u"?null:document;function zT(i,r,o){var u=ko;if(u&&typeof r=="string"&&r){var f=It(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),UT.has(f)||(UT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),sn(r,"link",i),St(r),u.head.appendChild(r)))}}function bR(i){gs.D(i),zT("dns-prefetch",i,null)}function AR(i,r){gs.C(i,r),zT("preconnect",i,r)}function CR(i,r,o){gs.L(i,r,o);var u=ko;if(u&&i&&r){var f='link[rel="preload"][as="'+It(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+It(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+It(o.imageSizes)+'"]')):f+='[href="'+It(i)+'"]';var m=f;switch(r){case"style":m=Po(i);break;case"script":m=Vo(i)}ni.has(m)||(i=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ni.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(wu(m))||r==="script"&&u.querySelector(bu(m))||(r=u.createElement("link"),sn(r,"link",i),St(r),u.head.appendChild(r)))}}function RR(i,r){gs.m(i,r);var o=ko;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+It(u)+'"][href="'+It(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Vo(i)}if(!ni.has(m)&&(i=v({rel:"modulepreload",href:i},r),ni.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(bu(m)))return}u=o.createElement("link"),sn(u,"link",i),St(u),o.head.appendChild(u)}}}function IR(i,r,o){gs.S(i,r,o);var u=ko;if(u&&i){var f=yn(u).hoistableStyles,m=Po(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(wu(m)))S.loading=5;else{i=v({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ni.get(m))&&Lp(i,o);var C=E=u.createElement("link");St(C),sn(C,"link",i),C._p=new Promise(function(q,Y){C.onload=q,C.onerror=Y}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Kh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function NR(i,r){gs.X(i,r);var o=ko;if(o&&i){var u=yn(o).hoistableScripts,f=Vo(i),m=u.get(f);m||(m=o.querySelector(bu(f)),m||(i=v({src:i,async:!0},r),(r=ni.get(f))&&Up(i,r),m=o.createElement("script"),St(m),sn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function DR(i,r){gs.M(i,r);var o=ko;if(o&&i){var u=yn(o).hoistableScripts,f=Vo(i),m=u.get(f);m||(m=o.querySelector(bu(f)),m||(i=v({src:i,async:!0,type:"module"},r),(r=ni.get(f))&&Up(i,r),m=o.createElement("script"),St(m),sn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function jT(i,r,o,u){var f=(f=we.current)?Yh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Po(o.href),o=yn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Po(o.href);var m=yn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(wu(i)))&&!m._p&&(E.instance=m,E.state.loading=5),ni.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ni.set(i,o),m||xR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Vo(o),o=yn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Po(i){return'href="'+It(i)+'"'}function wu(i){return'link[rel="stylesheet"]['+i+"]"}function qT(i){return v({},i,{"data-precedence":i.precedence,precedence:null})}function xR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),sn(r,"link",o),St(r),i.head.appendChild(r))}function Vo(i){return'[src="'+It(i)+'"]'}function bu(i){return"script[async]"+i}function BT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+It(o.href)+'"]');if(u)return r.instance=u,St(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),St(u),sn(u,"style",f),Kh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Po(o.href);var m=i.querySelector(wu(f));if(m)return r.state.loading|=4,r.instance=m,St(m),m;u=qT(o),(f=ni.get(f))&&Lp(u,f),m=(i.ownerDocument||i).createElement("link"),St(m);var E=m;return E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),sn(m,"link",u),r.state.loading|=4,Kh(m,o.precedence,i),r.instance=m;case"script":return m=Vo(o.src),(f=i.querySelector(bu(m)))?(r.instance=f,St(f),f):(u=o,(f=ni.get(m))&&(u=v({},o),Up(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),St(f),sn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Kh(u,o.precedence,i));return r.instance}function Kh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Lp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Up(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Xh=null;function FT(i,r,o){if(Xh===null){var u=new Map,f=Xh=new Map;f.set(o,u)}else f=Xh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Gr]||m[Lt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function HT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function OR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function GT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Au=null;function MR(){}function kR(i,r,o){if(Au===null)throw Error(s(475));var u=Au;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Po(o.href),m=i.querySelector(wu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Wh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,St(m);return}m=i.ownerDocument||i,o=qT(o),(f=ni.get(f))&&Lp(o,f),m=m.createElement("link"),St(m);var E=m;E._p=new Promise(function(S,C){E.onload=S,E.onerror=C}),sn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Wh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function PR(){if(Au===null)throw Error(s(475));var i=Au;return i.stylesheets&&i.count===0&&zp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&zp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Wh(){if(this.count--,this.count===0){if(this.stylesheets)zp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var $h=null;function zp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,$h=new Map,r.forEach(VR,i),$h=null,Wh.call(i))}function VR(i,r){if(!(r.state.loading&4)){var o=$h.get(i);if(o)var u=o.get(null);else{o=new Map,$h.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Wh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Cu={$$typeof:ae,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function LR(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.hiddenUpdates=Qi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function QT(i,r,o,u,f,m,E,S,C,q,Y,$){return i=new LR(i,r,o,E,S,C,q,$),r=1,m===!0&&(r|=24),m=Pn(3,null,null,r),i.current=m,m.stateNode=i,r=Em(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},bm(m),i}function YT(i){return i?(i=fo,i):fo}function KT(i,r,o,u,f,m){f=YT(f),u.context===null?u.context=f:u.pendingContext=f,u=Gs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Qs(i,u,r),o!==null&&(jn(o,i,r),nu(o,i,r))}function XT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function jp(i,r){XT(i,r),(i=i.alternate)&&XT(i,r)}function WT(i){if(i.tag===13){var r=ho(i,67108864);r!==null&&jn(r,i,67108864),jp(i,67108864)}}var Zh=!0;function UR(i,r,o,u){var f=Q.T;Q.T=null;var m=ie.p;try{ie.p=2,qp(i,r,o,u)}finally{ie.p=m,Q.T=f}}function zR(i,r,o,u){var f=Q.T;Q.T=null;var m=ie.p;try{ie.p=8,qp(i,r,o,u)}finally{ie.p=m,Q.T=f}}function qp(i,r,o,u){if(Zh){var f=Bp(u);if(f===null)Ip(i,r,u,Jh,o),ZT(i,u);else if(qR(f,i,r,o,u))u.stopPropagation();else if(ZT(i,u),r&4&&-1<jR.indexOf(i)){for(;f!==null;){var m=Ei(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ri(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var C=1<<31-ln(E);S.entanglements[1]|=C,E&=~C}ki(m),($e&6)===0&&(Vh=Hn()+500,vu(0))}}break;case 13:S=ho(m,2),S!==null&&jn(S,m,2),Uh(),jp(m,2)}if(m=Bp(u),m===null&&Ip(i,r,u,Jh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Ip(i,r,u,null,o)}}function Bp(i){return i=Yn(i),Fp(i)}var Jh=null;function Fp(i){if(Jh=null,i=Ki(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return Jh=i,null}function $T(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qd()){case bl:return 2;case Ha:return 8;case jr:case Yd:return 32;case Ga:return 268435456;default:return 32}default:return 32}}var Hp=!1,rr=null,ar=null,or=null,Ru=new Map,Iu=new Map,lr=[],jR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ZT(i,r){switch(i){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Ru.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Iu.delete(r.pointerId)}}function Nu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ei(r),r!==null&&WT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function qR(i,r,o,u,f){switch(r){case"focusin":return rr=Nu(rr,i,r,o,u,f),!0;case"dragenter":return ar=Nu(ar,i,r,o,u,f),!0;case"mouseover":return or=Nu(or,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Ru.set(m,Nu(Ru.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Iu.set(m,Nu(Iu.get(m)||null,i,r,o,u,f)),!0}return!1}function JT(i){var r=Ki(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Uc(i.priority,function(){if(o.tag===13){var u=zn();u=Vs(u);var f=ho(o,u);f!==null&&jn(f,o,u),jp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ef(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Bp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);Zi=u,o.target.dispatchEvent(u),Zi=null}else return r=Ei(o),r!==null&&WT(r),i.blockedOn=o,!1;r.shift()}return!0}function e0(i,r,o){ef(i)&&o.delete(r)}function BR(){Hp=!1,rr!==null&&ef(rr)&&(rr=null),ar!==null&&ef(ar)&&(ar=null),or!==null&&ef(or)&&(or=null),Ru.forEach(e0),Iu.forEach(e0)}function tf(i,r){i.blockedOn===r&&(i.blockedOn=null,Hp||(Hp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,BR)))}var nf=null;function t0(i){nf!==i&&(nf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){nf===i&&(nf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Fp(u||o)===null)continue;break}var m=Ei(o);m!==null&&(i.splice(r,3),r-=3,Fm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Du(i){function r(C){return tf(C,i)}rr!==null&&tf(rr,i),ar!==null&&tf(ar,i),or!==null&&tf(or,i),Ru.forEach(r),Iu.forEach(r);for(var o=0;o<lr.length;o++){var u=lr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<lr.length&&(o=lr[0],o.blockedOn===null);)JT(o),o.blockedOn===null&&lr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Rt]||null;if(typeof m=="function")E||t0(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Rt]||null)S=E.formAction;else if(Fp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),t0(o)}}}function Gp(i){this._internalRoot=i}sf.prototype.render=Gp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=zn();KT(o,u,i,r,null,null)},sf.prototype.unmount=Gp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;KT(i.current,2,null,i,null,null),Uh(),r[Gn]=null}};function sf(i){this._internalRoot=i}sf.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ls();i={blockedOn:null,target:i,priority:r};for(var o=0;o<lr.length&&r!==0&&r<lr[o].priority;o++);lr.splice(o,0,i),o===0&&JT(i)}};var n0=e.version;if(n0!=="19.1.1")throw Error(s(527,n0,"19.1.1"));ie.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var FR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rf.isDisabled&&rf.supportsFiber)try{yt=rf.inject(FR),We=rf}catch{}}return Ou.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=yE,m=vE,E=EE,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=QT(i,1,!1,null,null,o,u,f,m,E,S,null),i[Gn]=r.current,Rp(i),new Gp(r)},Ou.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=yE,E=vE,S=EE,C=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=QT(i,1,!0,r,o??null,u,f,m,E,S,C,q),r.context=YT(null),o=r.current,u=zn(),u=Vs(u),f=Gs(u),f.callback=null,Qs(o,f,u),o=u,r.current.lanes=o,Yi(r,o),ki(r),i[Gn]=r.current,Rp(i),new sf(r)},Ou.version="19.1.1",Ou}var f0;function JR(){if(f0)return Kp.exports;f0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kp.exports=ZR(),Kp.exports}var eI=JR();const tI=()=>{};var d0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw hl(e)},hl=function(n){return new Error("Firebase Database ("+Pw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},nI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},l_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,M=g&63;p||(M=64,c||(w=64)),s.push(t[v],t[T],t[w],t[M])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new iI;const w=l<<2|d>>4;if(s.push(w),g!==64){const M=d<<4&240|g>>2;if(s.push(M),T!==64){const z=g<<6&192|T;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lw=function(n){const e=Vw(n);return l_.encodeByteArray(e,!0)},Cf=function(n){return Lw(n).replace(/\./g,"")},Rf=function(n){try{return l_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(n){return Uw(void 0,n)}function Uw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!rI(t)||(n[t]=Uw(n[t],e[t]));return n}function rI(n){return n!=="__proto__"}/**
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
 */function aI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oI=()=>aI().__FIREBASE_DEFAULTS__,lI=()=>{if(typeof process>"u"||typeof d0>"u")return;const n=d0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rf(n[1]);return e&&JSON.parse(e)},ud=()=>{try{return tI()||oI()||lI()||uI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zw=n=>ud()?.emulatorHosts?.[n],jw=n=>{const e=zw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},qw=()=>ud()?.config,Bw=n=>ud()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Mr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function u_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Fw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Cf(JSON.stringify(t)),Cf(JSON.stringify(c)),""].join(".")}const qu={};function cI(){const n={prod:[],emulator:[]};for(const e of Object.keys(qu))qu[e]?n.emulator.push(e):n.prod.push(e);return n}function hI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let m0=!1;function c_(n,e){if(typeof window>"u"||typeof document>"u"||!Mr(window.location.host)||qu[n]===e||qu[n]||m0)return;qu[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=cI().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,M){w.setAttribute("width","24"),w.setAttribute("id",M),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{m0=!0,c()},w}function v(w,M){w.setAttribute("id",M),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=hI(s),M=t("text"),z=document.getElementById(M)||document.createElement("span"),G=t("learnmore"),K=document.getElementById(G)||document.createElement("a"),he=t("preprendIcon"),le=document.getElementById(he)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ae=w.element;d(ae),v(K,G);const Re=g();p(le,he),ae.append(le,z,K,Re),document.body.appendChild(ae)}l?(z.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function h_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pn())}function fI(){const n=ud()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pI(){const n=pn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gI(){return Pw.NODE_ADMIN===!0}function _I(){return!fI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yI(){try{return typeof indexedDB=="object"}catch{return!1}}function vI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="FirebaseError";class Ms extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=EI,Object.setPrototypeOf(this,Ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gc.prototype.create)}}class gc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?TI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ms(a,d,s)}}function TI(n,e){return n.replace(SI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const SI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){return JSON.parse(n)}function Zt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Zu(Rf(l[0])||""),t=Zu(Rf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},wI=function(n){const e=Gw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},bI=function(n){const e=Gw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $o(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function If(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function As(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(p0(l)&&p0(c)){if(!As(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function p0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),v=1518500249):(g=l^c^d,v=1859775393):T<60?(g=l&c|d&(l|c),v=2400959708):(g=l^c^d,v=3395469782);const w=(a<<5|a>>>27)+g+p+v+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function CI(n,e){const t=new RI(n,e);return t.subscribe.bind(t)}class RI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");II(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Zp),a.error===void 0&&(a.error=Zp),a.complete===void 0&&(a.complete=Zp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function II(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zp(){}function Zo(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ne(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},cd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Ea="[DEFAULT]";/**
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
 */class DI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ys;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OI(e))try{this.getOrInitializeService({instanceIdentifier:Ea})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Ea){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ea){return this.instances.has(e)}getOptions(e=Ea){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ea){return this.component?this.component.multipleInstances?e:Ea:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xI(n){return n===Ea?void 0:n}function OI(n){return n.instantiationMode==="EAGER"}/**
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
 */class MI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new DI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const kI={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},PI=Ve.INFO,VI={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},LI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=VI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hd{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=LI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const UI=(n,e)=>e.some(t=>n instanceof t);let g0,_0;function zI(){return g0||(g0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jI(){return _0||(_0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qw=new WeakMap,Eg=new WeakMap,Yw=new WeakMap,Jp=new WeakMap,f_=new WeakMap;function qI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(pr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Qw.set(t,n)}).catch(()=>{}),f_.set(e,n),e}function BI(n){if(Eg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Eg.set(n,e)}let Tg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Eg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function FI(n){Tg=n(Tg)}function HI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(eg(this),e,...t);return Yw.set(s,e.sort?e.sort():[e]),pr(s)}:jI().includes(n)?function(...e){return n.apply(eg(this),e),pr(Qw.get(this))}:function(...e){return pr(n.apply(eg(this),e))}}function GI(n){return typeof n=="function"?HI(n):(n instanceof IDBTransaction&&BI(n),UI(n,zI())?new Proxy(n,Tg):n)}function pr(n){if(n instanceof IDBRequest)return qI(n);if(Jp.has(n))return Jp.get(n);const e=GI(n);return e!==n&&(Jp.set(n,e),f_.set(e,n)),e}const eg=n=>f_.get(n);function QI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=pr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(pr(c.result),p.oldVersion,p.newVersion,pr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const YI=["get","getKey","getAll","getAllKeys","count"],KI=["put","add","delete","clear"],tg=new Map;function y0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tg.get(e))return tg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=KI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||YI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return tg.set(e,l),l}FI(n=>({...n,get:(e,t,s)=>y0(e,t)||n.get(e,t,s),has:(e,t)=>!!y0(e,t)||n.has(e,t)}));/**
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
 */class XI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function WI(n){return n.getComponent()?.type==="VERSION"}const Sg="@firebase/app",v0="0.14.1";/**
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
 */const Cs=new hd("@firebase/app"),$I="@firebase/app-compat",ZI="@firebase/analytics-compat",JI="@firebase/analytics",eN="@firebase/app-check-compat",tN="@firebase/app-check",nN="@firebase/auth",iN="@firebase/auth-compat",sN="@firebase/database",rN="@firebase/data-connect",aN="@firebase/database-compat",oN="@firebase/functions",lN="@firebase/functions-compat",uN="@firebase/installations",cN="@firebase/installations-compat",hN="@firebase/messaging",fN="@firebase/messaging-compat",dN="@firebase/performance",mN="@firebase/performance-compat",pN="@firebase/remote-config",gN="@firebase/remote-config-compat",_N="@firebase/storage",yN="@firebase/storage-compat",vN="@firebase/firestore",EN="@firebase/ai",TN="@firebase/firestore-compat",SN="firebase",wN="12.1.0";/**
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
 */const wg="[DEFAULT]",bN={[Sg]:"fire-core",[$I]:"fire-core-compat",[JI]:"fire-analytics",[ZI]:"fire-analytics-compat",[tN]:"fire-app-check",[eN]:"fire-app-check-compat",[nN]:"fire-auth",[iN]:"fire-auth-compat",[sN]:"fire-rtdb",[rN]:"fire-data-connect",[aN]:"fire-rtdb-compat",[oN]:"fire-fn",[lN]:"fire-fn-compat",[uN]:"fire-iid",[cN]:"fire-iid-compat",[hN]:"fire-fcm",[fN]:"fire-fcm-compat",[dN]:"fire-perf",[mN]:"fire-perf-compat",[pN]:"fire-rc",[gN]:"fire-rc-compat",[_N]:"fire-gcs",[yN]:"fire-gcs-compat",[vN]:"fire-fst",[TN]:"fire-fst-compat",[EN]:"fire-vertex","fire-js":"fire-js",[SN]:"fire-js-all"};/**
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
 */const Df=new Map,AN=new Map,bg=new Map;function E0(n,e){try{n.container.addComponent(e)}catch(t){Cs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Da(n){const e=n.name;if(bg.has(e))return Cs.debug(`There were multiple attempts to register component ${e}.`),!1;bg.set(e,n);for(const t of Df.values())E0(t,n);for(const t of AN.values())E0(t,n);return!0}function fd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const CN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new gc("app","Firebase",CN);/**
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
 */class RN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const za=wN;function Kw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:wg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw gr.create("bad-app-name",{appName:String(a)});if(t||(t=qw()),!t)throw gr.create("no-options");const l=Df.get(a);if(l){if(As(t,l.options)&&As(s,l.config))return l;throw gr.create("duplicate-app",{appName:a})}const c=new MI(a);for(const p of bg.values())c.addComponent(p);const d=new RN(t,s,c);return Df.set(a,d),d}function d_(n=wg){const e=Df.get(n);if(!e&&n===wg&&qw())return Kw();if(!e)throw gr.create("no-app",{appName:n});return e}function Vi(n,e,t){let s=bN[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cs.warn(c.join(" "));return}Da(new Sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const IN="firebase-heartbeat-database",NN=1,Ju="firebase-heartbeat-store";let ng=null;function Xw(){return ng||(ng=QI(IN,NN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ju)}catch(t){console.warn(t)}}}}).catch(n=>{throw gr.create("idb-open",{originalErrorMessage:n.message})})),ng}async function DN(n){try{const t=(await Xw()).transaction(Ju),s=await t.objectStore(Ju).get(Ww(n));return await t.done,s}catch(e){if(e instanceof Ms)Cs.warn(e.message);else{const t=gr.create("idb-get",{originalErrorMessage:e?.message});Cs.warn(t.message)}}}async function T0(n,e){try{const s=(await Xw()).transaction(Ju,"readwrite");await s.objectStore(Ju).put(e,Ww(n)),await s.done}catch(t){if(t instanceof Ms)Cs.warn(t.message);else{const s=gr.create("idb-set",{originalErrorMessage:t?.message});Cs.warn(s.message)}}}function Ww(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xN=1024,ON=30;class MN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new PN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=S0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>ON){const a=VN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Cs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=S0(),{heartbeatsToSend:t,unsentEntries:s}=kN(this._heartbeatsCache.heartbeats),a=Cf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Cs.warn(e),""}}}function S0(){return new Date().toISOString().substring(0,10)}function kN(n,e=xN){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),w0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),w0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class PN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yI()?vI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await DN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return T0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return T0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function w0(n){return Cf(JSON.stringify({version:2,heartbeats:n})).length}function VN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function LN(n){Da(new Sr("platform-logger",e=>new XI(e),"PRIVATE")),Da(new Sr("heartbeat",e=>new MN(e),"PRIVATE")),Vi(Sg,v0,n),Vi(Sg,v0,"esm2020"),Vi("fire-js","")}LN("");var UN="firebase",zN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi(UN,zN,"app");function $w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jN=$w,Zw=new gc("auth","Firebase",$w());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=new hd("@firebase/auth");function qN(n,...e){xf.logLevel<=Ve.WARN&&xf.warn(`Auth (${za}): ${n}`,...e)}function mf(n,...e){xf.logLevel<=Ve.ERROR&&xf.error(`Auth (${za}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,...e){throw p_(n,...e)}function mi(n,...e){return p_(n,...e)}function m_(n,e,t){const s={...jN(),[e]:t};return new gc("auth","Firebase",s).create(e,{appName:n.name})}function _r(n){return m_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function BN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Bi(n,"argument-error"),m_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function p_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Zw.create(n,...e)}function Se(n,e,...t){if(!n)throw p_(e,...t)}function Es(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mf(e),new Error(e)}function Rs(n,e){n||Es(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){return typeof self<"u"&&self.location?.href||""}function FN(){return b0()==="http:"||b0()==="https:"}function b0(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FN()||mI()||"connection"in navigator)?navigator.onLine:!0}function GN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rs(t>e,"Short delay should be less than long delay!"),this.isMobile=h_()||Hw()}get(){return HN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n,e){Rs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KN=new _c(3e4,6e4);function dd(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function dl(n,e,t,s,a={}){return eb(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=fl({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return dI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Mr(n.emulatorConfig.host)&&(g.credentials="include"),Jw.fetch()(await nb(n,n.config.apiHost,t,d),g)})}async function eb(n,e,t){n._canInitEmulator=!1;const s={...QN,...e};try{const a=new XN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw af(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw af(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw af(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw af(n,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw m_(n,v,g);Bi(n,v)}}catch(a){if(a instanceof Ms)throw a;Bi(n,"network-request-failed",{message:String(a)})}}async function tb(n,e,t,s,a={}){const l=await dl(n,e,t,s,a);return"mfaPendingCredential"in l&&Bi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function nb(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?g_(n.config,a):`${n.config.apiScheme}://${a}`;return YN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class XN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(mi(this.auth,"network-request-failed")),KN.get())})}}function af(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=mi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(n,e){return dl(n,"POST","/v1/accounts:delete",e)}async function Of(n,e){return dl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $N(n,e=!1){const t=ut(n),s=await t.getIdToken(e),a=__(s);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Bu(ig(a.auth_time)),issuedAtTime:Bu(ig(a.iat)),expirationTime:Bu(ig(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ig(n){return Number(n)*1e3}function __(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return mf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Rf(t);return a?JSON.parse(a):(mf("Failed to decode base64 JWT payload"),null)}catch(a){return mf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function A0(n){const e=__(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ms&&ZN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ZN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bu(this.lastLoginAt),this.creationTime=Bu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mf(n){const e=n.auth,t=await n.getIdToken(),s=await ec(n,Of(e,{idToken:t}));Se(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?ib(a.providerUserInfo):[],c=t2(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Cg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,v)}async function e2(n){const e=ut(n);await Mf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t2(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function ib(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(n,e){const t=await eb(n,{},async()=>{const s=fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await nb(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Mr(n.emulatorConfig.host)&&(p.credentials="include"),Jw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function i2(n,e){return dl(n,"POST","/v2/accounts:revokeToken",dd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):A0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=A0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await n2(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Ho;return s&&(Se(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Se(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return Es("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new JN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ec(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $N(this,e)}reload(){return e2(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await ec(this,WN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:w,isAnonymous:M,providerData:z,stsTokenManager:G}=t;Se(T&&G,e,"internal-error");const K=Ho.fromJSON(this.name,G);Se(typeof T=="string",e,"internal-error"),cr(s,e.name),cr(a,e.name),Se(typeof w=="boolean",e,"internal-error"),Se(typeof M=="boolean",e,"internal-error"),cr(l,e.name),cr(c,e.name),cr(d,e.name),cr(p,e.name),cr(g,e.name),cr(v,e.name);const he=new fi({uid:T,auth:e,email:a,emailVerified:w,displayName:s,isAnonymous:M,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:K,createdAt:g,lastLoginAt:v});return z&&Array.isArray(z)&&(he.providerData=z.map(le=>({...le}))),p&&(he._redirectEventId=p),he}static async _fromIdTokenResponse(e,t,s=!1){const a=new Ho;a.updateFromServerResponse(t);const l=new fi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Mf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?ib(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Ho;d.updateFromIdToken(s);const p=new fi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Cg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Map;function Ts(n){Rs(n instanceof Function,"Expected a class definition");let e=C0.get(n);return e?(Rs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,C0.set(n,e),e)}/**
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
 */class sb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sb.type="NONE";const R0=sb;/**
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
 */function pf(n,e,t){return`firebase:${n}:${e}:${t}`}class Go{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=pf(this.userKey,a.apiKey,l),this.fullPersistenceKey=pf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Of(this.auth,{idToken:e}).catch(()=>{});return t?fi._fromGetAccountInfoResponse(this.auth,t,e):null}return fi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Go(Ts(R0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ts(R0);const c=pf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const w=await Of(e,{idToken:v}).catch(()=>{});if(!w)break;T=await fi._fromGetAccountInfoResponse(e,w,v)}else T=fi._fromJSON(e,v);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Go(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Go(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cb(e))return"Blackberry";if(hb(e))return"Webos";if(ab(e))return"Safari";if((e.includes("chrome/")||ob(e))&&!e.includes("edge/"))return"Chrome";if(ub(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function rb(n=pn()){return/firefox\//i.test(n)}function ab(n=pn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ob(n=pn()){return/crios\//i.test(n)}function lb(n=pn()){return/iemobile/i.test(n)}function ub(n=pn()){return/android/i.test(n)}function cb(n=pn()){return/blackberry/i.test(n)}function hb(n=pn()){return/webos/i.test(n)}function y_(n=pn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function s2(n=pn()){return y_(n)&&!!window.navigator?.standalone}function r2(){return pI()&&document.documentMode===10}function fb(n=pn()){return y_(n)||ub(n)||hb(n)||cb(n)||/windows phone/i.test(n)||lb(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n,e=[]){let t;switch(n){case"Browser":t=I0(pn());break;case"Worker":t=`${I0(pn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${za}/${s}`}/**
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
 */class a2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function o2(n,e={}){return dl(n,"GET","/v2/passwordPolicy",dd(n,e))}/**
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
 */const l2=6;class u2{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??l2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N0(this),this.idTokenSubscription=new N0(this),this.beforeStateQueue=new a2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ts(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Go.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Of(this,{idToken:e}),s=await fi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(_r(this));const t=e?ut(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ts(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await o2(this),t=new u2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await i2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ts(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Go.create(this,[Ts(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=db(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&qN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function yc(n){return ut(n)}class N0{constructor(e){this.auth=e,this.observer=null,this.addObserver=CI(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function h2(n){v_=n}function f2(n){return v_.loadJS(n)}function d2(){return v_.gapiScript}function m2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(n,e){const t=fd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(As(l,e??{}))return a;Bi(a,"already-initialized")}return t.initialize({options:e})}function g2(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ts);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function _2(n,e,t){const s=yc(n);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=mb(e),{host:c,port:d}=y2(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(As(g,s.config.emulator)&&As(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Mr(c)?(u_(`${l}//${c}${p}`),c_("Auth",!0)):v2()}function mb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function y2(n){const e=mb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:D0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:D0(c)}}}function D0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function v2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Es("not implemented")}_getIdTokenResponse(e){return Es("not implemented")}_linkToIdToken(e,t){return Es("not implemented")}_getReauthenticationResolver(e){return Es("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(n,e){return tb(n,"POST","/v1/accounts:signInWithIdp",dd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="http://localhost";class xa extends pb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new xa(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Qo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Qo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qo(e,t)}buildRequest(){const e={requestUri:E2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vc extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends vc{constructor(){super("facebook.com")}static credential(e){return xa._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends vc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xa._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return vs.credential(t,s)}catch{return null}}}vs.GOOGLE_SIGN_IN_METHOD="google.com";vs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends vc{constructor(){super("github.com")}static credential(e){return xa._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends vc{constructor(){super("twitter.com")}static credential(e,t){return xa._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return dr.credential(t,s)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await fi._fromIdTokenResponse(e,s,a),c=x0(s);return new Oa({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=x0(s);return new Oa({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function x0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends Ms{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,kf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new kf(e,t,s,a)}}function gb(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?kf._fromErrorAndOperation(n,l,e,s):l})}async function T2(n,e,t=!1){const s=await ec(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Oa._forOperation(n,"link",s)}/**
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
 */async function S2(n,e,t=!1){const{auth:s}=n;if(qn(s.app))return Promise.reject(_r(s));const a="reauthenticate";try{const l=await ec(n,gb(s,a,e,n),t);Se(l.idToken,s,"internal-error");const c=__(l.idToken);Se(c,s,"internal-error");const{sub:d}=c;return Se(n.uid===d,s,"user-mismatch"),Oa._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Bi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(n,e,t=!1){if(qn(n.app))return Promise.reject(_r(n));const s="signIn",a=await gb(n,s,e),l=await Oa._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(n,e){return tb(n,"POST","/v1/accounts:signInWithCustomToken",dd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(n,e){if(qn(n.app))return Promise.reject(_r(n));const t=yc(n),s=await b2(t,{token:e,returnSecureToken:!0}),a=await Oa._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function C2(n,e,t,s){return ut(n).onIdTokenChanged(e,t,s)}function R2(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}function I2(n,e,t,s){return ut(n).onAuthStateChanged(e,t,s)}function N2(n){return ut(n).signOut()}const Pf="__sak";/**
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
 */class _b{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pf,"1"),this.storage.removeItem(Pf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=1e3,x2=10;class yb extends _b{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);r2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,x2):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},D2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yb.type="LOCAL";const O2=yb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb extends _b{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vb.type="SESSION";const Eb=vb;/**
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
 */function M2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new md(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await M2(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class k2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=T_("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return window}function P2(n){Li().location.href=n}/**
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
 */function Tb(){return typeof Li().WorkerGlobalScope<"u"&&typeof Li().importScripts=="function"}async function V2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L2(){return navigator?.serviceWorker?.controller||null}function U2(){return Tb()?self:null}/**
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
 */const Sb="firebaseLocalStorageDb",z2=1,Vf="firebaseLocalStorage",wb="fbase_key";class Ec{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pd(n,e){return n.transaction([Vf],e?"readwrite":"readonly").objectStore(Vf)}function j2(){const n=indexedDB.deleteDatabase(Sb);return new Ec(n).toPromise()}function Rg(){const n=indexedDB.open(Sb,z2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Vf,{keyPath:wb})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Vf)?e(s):(s.close(),await j2(),e(await Rg()))})})}async function O0(n,e,t){const s=pd(n,!0).put({[wb]:e,value:t});return new Ec(s).toPromise()}async function q2(n,e){const t=pd(n,!1).get(e),s=await new Ec(t).toPromise();return s===void 0?null:s.value}function M0(n,e){const t=pd(n,!0).delete(e);return new Ec(t).toPromise()}const B2=800,F2=3;class bb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>F2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(U2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await V2(),!this.activeServiceWorker)return;this.sender=new k2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rg();return await O0(e,Pf,"1"),await M0(e,Pf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>O0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>q2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>M0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=pd(a,!1).getAll();return new Ec(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),B2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bb.type="LOCAL";const H2=bb;new _c(3e4,6e4);/**
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
 */function Ab(n,e){return e?Ts(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class S_ extends pb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function G2(n){return w2(n.auth,new S_(n),n.bypassAuthState)}function Q2(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),S2(t,new S_(n),n.bypassAuthState)}async function Y2(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),T2(t,new S_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G2;case"linkViaPopup":case"linkViaRedirect":return Y2;case"reauthViaPopup":case"reauthViaRedirect":return Q2;default:Bi(this.auth,"internal-error")}}resolve(e){Rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=new _c(2e3,1e4);async function X2(n,e,t){if(qn(n.app))return Promise.reject(mi(n,"operation-not-supported-in-this-environment"));const s=yc(n);BN(n,e,E_);const a=Ab(s,t);return new Sa(s,"signInViaPopup",e,a).executeNotNull()}class Sa extends Cb{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Sa.currentPopupAction&&Sa.currentPopupAction.cancel(),Sa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Rs(this.filter.length===1,"Popup operations only handle one event");const e=T_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sa.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,K2.get())};e()}}Sa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2="pendingRedirect",gf=new Map;class $2 extends Cb{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=gf.get(this.auth._key());if(!e){try{const s=await Z2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}gf.set(this.auth._key(),e)}return this.bypassAuthState||gf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z2(n,e){const t=tD(e),s=eD(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function J2(n,e){gf.set(n._key(),e)}function eD(n){return Ts(n._redirectPersistence)}function tD(n){return pf(W2,n.config.apiKey,n.name)}async function nD(n,e,t=!1){if(qn(n.app))return Promise.reject(_r(n));const s=yc(n),a=Ab(s,e),c=await new $2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=600*1e3;class sD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Rb(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(mi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iD&&this.cachedEventUids.clear(),this.cachedEventUids.has(k0(e))}saveEventToCache(e){this.cachedEventUids.add(k0(e)),this.lastProcessedEventTime=Date.now()}}function k0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rb({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function rD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(n,e={}){return dl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lD=/^https?/;async function uD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await aD(n);for(const t of e)try{if(cD(t))return}catch{}Bi(n,"unauthorized-domain")}function cD(n){const e=Ag(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!lD.test(t))return!1;if(oD.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const hD=new _c(3e4,6e4);function P0(){const n=Li().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fD(n){return new Promise((e,t)=>{function s(){P0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{P0(),t(mi(n,"network-request-failed"))},timeout:hD.get()})}if(Li().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Li().gapi?.load)s();else{const a=m2("iframefcb");return Li()[a]=()=>{gapi.load?s():t(mi(n,"network-request-failed"))},f2(`${d2()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw _f=null,e})}let _f=null;function dD(n){return _f=_f||fD(n),_f}/**
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
 */const mD=new _c(5e3,15e3),pD="__/auth/iframe",gD="emulator/auth/iframe",_D={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vD(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?g_(e,gD):`https://${n.config.authDomain}/${pD}`,s={apiKey:e.apiKey,appName:n.name,v:za},a=yD.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${fl(s).slice(1)}`}async function ED(n){const e=await dD(n),t=Li().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:vD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_D,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=mi(n,"network-request-failed"),d=Li().setTimeout(()=>{l(c)},mD.get());function p(){Li().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const TD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SD=500,wD=600,bD="_blank",AD="http://localhost";class V0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CD(n,e,t,s=SD,a=wD){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...TD,width:s.toString(),height:a.toString(),top:l,left:c},g=pn().toLowerCase();t&&(d=ob(g)?bD:t),rb(g)&&(e=e||AD,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[M,z])=>`${w}${M}=${z},`,"");if(s2(g)&&d!=="_self")return RD(e||"",d),new V0(null);const T=window.open(e||"",d,v);Se(T,n,"popup-blocked");try{T.focus()}catch{}return new V0(T)}function RD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const ID="__/auth/handler",ND="emulator/auth/handler",DD=encodeURIComponent("fac");async function L0(n,e,t,s,a,l){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:za,eventId:a};if(e instanceof E_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",If(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof vc){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),g=p?`#${DD}=${encodeURIComponent(p)}`:"";return`${xD(n)}?${fl(d).slice(1)}${g}`}function xD({config:n}){return n.emulator?g_(n,ND):`https://${n.authDomain}/${ID}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="webStorageSupport";class OD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eb,this._completeRedirectFn=nD,this._overrideRedirectResult=J2}async _openPopup(e,t,s,a){Rs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await L0(e,t,s,Ag(),a);return CD(e,l,T_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await L0(e,t,s,Ag(),a);return P2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Rs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ED(e),s=new sD(e);return t.register("authEvent",a=>(Se(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sg,{type:sg},a=>{const l=a?.[0]?.[sg];l!==void 0&&t(!!l),Bi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fb()||ab()||y_()}}const MD=OD;var U0="@firebase/auth",z0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VD(n){Da(new Sr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Se(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:db(n)},g=new c2(s,a,l,p);return g2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Da(new Sr("auth-internal",e=>{const t=yc(e.getProvider("auth").getImmediate());return(s=>new kD(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vi(U0,z0,PD(n)),Vi(U0,z0,"esm2020")}/**
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
 */const LD=300,UD=Bw("authIdTokenMaxAge")||LD;let j0=null;const zD=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>UD)return;const a=t?.token;j0!==a&&(j0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function jD(n=d_()){const e=fd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=p2(n,{popupRedirectResolver:MD,persistence:[H2,O2,Eb]}),s=Bw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=zD(l.toString());R2(t,c,()=>c(t.currentUser)),C2(t,d=>c(d))}}const a=zw("auth");return a&&_2(t,`http://${a}`),t}function qD(){return document.getElementsByTagName("head")?.[0]??document}h2({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=mi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",qD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VD("Browser");var q0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,Ib;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,A){function I(){}I.prototype=A.prototype,V.D=A.prototype,V.prototype=new I,V.prototype.constructor=V,V.C=function(N,D,P){for(var R=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)R[Vt-2]=arguments[Vt];return A.prototype[D].apply(N,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(V,A,I){I||(I=0);var N=Array(16);if(typeof A=="string")for(var D=0;16>D;++D)N[D]=A.charCodeAt(I++)|A.charCodeAt(I++)<<8|A.charCodeAt(I++)<<16|A.charCodeAt(I++)<<24;else for(D=0;16>D;++D)N[D]=A[I++]|A[I++]<<8|A[I++]<<16|A[I++]<<24;A=V.g[0],I=V.g[1],D=V.g[2];var P=V.g[3],R=A+(P^I&(D^P))+N[0]+3614090360&4294967295;A=I+(R<<7&4294967295|R>>>25),R=P+(D^A&(I^D))+N[1]+3905402710&4294967295,P=A+(R<<12&4294967295|R>>>20),R=D+(I^P&(A^I))+N[2]+606105819&4294967295,D=P+(R<<17&4294967295|R>>>15),R=I+(A^D&(P^A))+N[3]+3250441966&4294967295,I=D+(R<<22&4294967295|R>>>10),R=A+(P^I&(D^P))+N[4]+4118548399&4294967295,A=I+(R<<7&4294967295|R>>>25),R=P+(D^A&(I^D))+N[5]+1200080426&4294967295,P=A+(R<<12&4294967295|R>>>20),R=D+(I^P&(A^I))+N[6]+2821735955&4294967295,D=P+(R<<17&4294967295|R>>>15),R=I+(A^D&(P^A))+N[7]+4249261313&4294967295,I=D+(R<<22&4294967295|R>>>10),R=A+(P^I&(D^P))+N[8]+1770035416&4294967295,A=I+(R<<7&4294967295|R>>>25),R=P+(D^A&(I^D))+N[9]+2336552879&4294967295,P=A+(R<<12&4294967295|R>>>20),R=D+(I^P&(A^I))+N[10]+4294925233&4294967295,D=P+(R<<17&4294967295|R>>>15),R=I+(A^D&(P^A))+N[11]+2304563134&4294967295,I=D+(R<<22&4294967295|R>>>10),R=A+(P^I&(D^P))+N[12]+1804603682&4294967295,A=I+(R<<7&4294967295|R>>>25),R=P+(D^A&(I^D))+N[13]+4254626195&4294967295,P=A+(R<<12&4294967295|R>>>20),R=D+(I^P&(A^I))+N[14]+2792965006&4294967295,D=P+(R<<17&4294967295|R>>>15),R=I+(A^D&(P^A))+N[15]+1236535329&4294967295,I=D+(R<<22&4294967295|R>>>10),R=A+(D^P&(I^D))+N[1]+4129170786&4294967295,A=I+(R<<5&4294967295|R>>>27),R=P+(I^D&(A^I))+N[6]+3225465664&4294967295,P=A+(R<<9&4294967295|R>>>23),R=D+(A^I&(P^A))+N[11]+643717713&4294967295,D=P+(R<<14&4294967295|R>>>18),R=I+(P^A&(D^P))+N[0]+3921069994&4294967295,I=D+(R<<20&4294967295|R>>>12),R=A+(D^P&(I^D))+N[5]+3593408605&4294967295,A=I+(R<<5&4294967295|R>>>27),R=P+(I^D&(A^I))+N[10]+38016083&4294967295,P=A+(R<<9&4294967295|R>>>23),R=D+(A^I&(P^A))+N[15]+3634488961&4294967295,D=P+(R<<14&4294967295|R>>>18),R=I+(P^A&(D^P))+N[4]+3889429448&4294967295,I=D+(R<<20&4294967295|R>>>12),R=A+(D^P&(I^D))+N[9]+568446438&4294967295,A=I+(R<<5&4294967295|R>>>27),R=P+(I^D&(A^I))+N[14]+3275163606&4294967295,P=A+(R<<9&4294967295|R>>>23),R=D+(A^I&(P^A))+N[3]+4107603335&4294967295,D=P+(R<<14&4294967295|R>>>18),R=I+(P^A&(D^P))+N[8]+1163531501&4294967295,I=D+(R<<20&4294967295|R>>>12),R=A+(D^P&(I^D))+N[13]+2850285829&4294967295,A=I+(R<<5&4294967295|R>>>27),R=P+(I^D&(A^I))+N[2]+4243563512&4294967295,P=A+(R<<9&4294967295|R>>>23),R=D+(A^I&(P^A))+N[7]+1735328473&4294967295,D=P+(R<<14&4294967295|R>>>18),R=I+(P^A&(D^P))+N[12]+2368359562&4294967295,I=D+(R<<20&4294967295|R>>>12),R=A+(I^D^P)+N[5]+4294588738&4294967295,A=I+(R<<4&4294967295|R>>>28),R=P+(A^I^D)+N[8]+2272392833&4294967295,P=A+(R<<11&4294967295|R>>>21),R=D+(P^A^I)+N[11]+1839030562&4294967295,D=P+(R<<16&4294967295|R>>>16),R=I+(D^P^A)+N[14]+4259657740&4294967295,I=D+(R<<23&4294967295|R>>>9),R=A+(I^D^P)+N[1]+2763975236&4294967295,A=I+(R<<4&4294967295|R>>>28),R=P+(A^I^D)+N[4]+1272893353&4294967295,P=A+(R<<11&4294967295|R>>>21),R=D+(P^A^I)+N[7]+4139469664&4294967295,D=P+(R<<16&4294967295|R>>>16),R=I+(D^P^A)+N[10]+3200236656&4294967295,I=D+(R<<23&4294967295|R>>>9),R=A+(I^D^P)+N[13]+681279174&4294967295,A=I+(R<<4&4294967295|R>>>28),R=P+(A^I^D)+N[0]+3936430074&4294967295,P=A+(R<<11&4294967295|R>>>21),R=D+(P^A^I)+N[3]+3572445317&4294967295,D=P+(R<<16&4294967295|R>>>16),R=I+(D^P^A)+N[6]+76029189&4294967295,I=D+(R<<23&4294967295|R>>>9),R=A+(I^D^P)+N[9]+3654602809&4294967295,A=I+(R<<4&4294967295|R>>>28),R=P+(A^I^D)+N[12]+3873151461&4294967295,P=A+(R<<11&4294967295|R>>>21),R=D+(P^A^I)+N[15]+530742520&4294967295,D=P+(R<<16&4294967295|R>>>16),R=I+(D^P^A)+N[2]+3299628645&4294967295,I=D+(R<<23&4294967295|R>>>9),R=A+(D^(I|~P))+N[0]+4096336452&4294967295,A=I+(R<<6&4294967295|R>>>26),R=P+(I^(A|~D))+N[7]+1126891415&4294967295,P=A+(R<<10&4294967295|R>>>22),R=D+(A^(P|~I))+N[14]+2878612391&4294967295,D=P+(R<<15&4294967295|R>>>17),R=I+(P^(D|~A))+N[5]+4237533241&4294967295,I=D+(R<<21&4294967295|R>>>11),R=A+(D^(I|~P))+N[12]+1700485571&4294967295,A=I+(R<<6&4294967295|R>>>26),R=P+(I^(A|~D))+N[3]+2399980690&4294967295,P=A+(R<<10&4294967295|R>>>22),R=D+(A^(P|~I))+N[10]+4293915773&4294967295,D=P+(R<<15&4294967295|R>>>17),R=I+(P^(D|~A))+N[1]+2240044497&4294967295,I=D+(R<<21&4294967295|R>>>11),R=A+(D^(I|~P))+N[8]+1873313359&4294967295,A=I+(R<<6&4294967295|R>>>26),R=P+(I^(A|~D))+N[15]+4264355552&4294967295,P=A+(R<<10&4294967295|R>>>22),R=D+(A^(P|~I))+N[6]+2734768916&4294967295,D=P+(R<<15&4294967295|R>>>17),R=I+(P^(D|~A))+N[13]+1309151649&4294967295,I=D+(R<<21&4294967295|R>>>11),R=A+(D^(I|~P))+N[4]+4149444226&4294967295,A=I+(R<<6&4294967295|R>>>26),R=P+(I^(A|~D))+N[11]+3174756917&4294967295,P=A+(R<<10&4294967295|R>>>22),R=D+(A^(P|~I))+N[2]+718787259&4294967295,D=P+(R<<15&4294967295|R>>>17),R=I+(P^(D|~A))+N[9]+3951481745&4294967295,V.g[0]=V.g[0]+A&4294967295,V.g[1]=V.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,V.g[2]=V.g[2]+D&4294967295,V.g[3]=V.g[3]+P&4294967295}s.prototype.u=function(V,A){A===void 0&&(A=V.length);for(var I=A-this.blockSize,N=this.B,D=this.h,P=0;P<A;){if(D==0)for(;P<=I;)a(this,V,P),P+=this.blockSize;if(typeof V=="string"){for(;P<A;)if(N[D++]=V.charCodeAt(P++),D==this.blockSize){a(this,N),D=0;break}}else for(;P<A;)if(N[D++]=V[P++],D==this.blockSize){a(this,N),D=0;break}}this.h=D,this.o+=A},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var A=1;A<V.length-8;++A)V[A]=0;var I=8*this.o;for(A=V.length-8;A<V.length;++A)V[A]=I&255,I/=256;for(this.u(V),V=Array(16),A=I=0;4>A;++A)for(var N=0;32>N;N+=8)V[I++]=this.g[A]>>>N&255;return V};function l(V,A){var I=d;return Object.prototype.hasOwnProperty.call(I,V)?I[V]:I[V]=A(V)}function c(V,A){this.h=A;for(var I=[],N=!0,D=V.length-1;0<=D;D--){var P=V[D]|0;N&&P==A||(I[D]=P,N=!1)}this.g=I}var d={};function p(V){return-128<=V&&128>V?l(V,function(A){return new c([A|0],0>A?-1:0)}):new c([V|0],0>V?-1:0)}function g(V){if(isNaN(V)||!isFinite(V))return T;if(0>V)return K(g(-V));for(var A=[],I=1,N=0;V>=I;N++)A[N]=V/I|0,I*=4294967296;return new c(A,0)}function v(V,A){if(V.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V.charAt(0)=="-")return K(v(V.substring(1),A));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(A,8)),N=T,D=0;D<V.length;D+=8){var P=Math.min(8,V.length-D),R=parseInt(V.substring(D,D+P),A);8>P?(P=g(Math.pow(A,P)),N=N.j(P).add(g(R))):(N=N.j(I),N=N.add(g(R)))}return N}var T=p(0),w=p(1),M=p(16777216);n=c.prototype,n.m=function(){if(G(this))return-K(this).m();for(var V=0,A=1,I=0;I<this.g.length;I++){var N=this.i(I);V+=(0<=N?N:4294967296+N)*A,A*=4294967296}return V},n.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(z(this))return"0";if(G(this))return"-"+K(this).toString(V);for(var A=g(Math.pow(V,6)),I=this,N="";;){var D=Re(I,A).g;I=he(I,D.j(A));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(V);if(I=D,z(I))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},n.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function z(V){if(V.h!=0)return!1;for(var A=0;A<V.g.length;A++)if(V.g[A]!=0)return!1;return!0}function G(V){return V.h==-1}n.l=function(V){return V=he(this,V),G(V)?-1:z(V)?0:1};function K(V){for(var A=V.g.length,I=[],N=0;N<A;N++)I[N]=~V.g[N];return new c(I,~V.h).add(w)}n.abs=function(){return G(this)?K(this):this},n.add=function(V){for(var A=Math.max(this.g.length,V.g.length),I=[],N=0,D=0;D<=A;D++){var P=N+(this.i(D)&65535)+(V.i(D)&65535),R=(P>>>16)+(this.i(D)>>>16)+(V.i(D)>>>16);N=R>>>16,P&=65535,R&=65535,I[D]=R<<16|P}return new c(I,I[I.length-1]&-2147483648?-1:0)};function he(V,A){return V.add(K(A))}n.j=function(V){if(z(this)||z(V))return T;if(G(this))return G(V)?K(this).j(K(V)):K(K(this).j(V));if(G(V))return K(this.j(K(V)));if(0>this.l(M)&&0>V.l(M))return g(this.m()*V.m());for(var A=this.g.length+V.g.length,I=[],N=0;N<2*A;N++)I[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<V.g.length;D++){var P=this.i(N)>>>16,R=this.i(N)&65535,Vt=V.i(D)>>>16,ct=V.i(D)&65535;I[2*N+2*D]+=R*ct,le(I,2*N+2*D),I[2*N+2*D+1]+=P*ct,le(I,2*N+2*D+1),I[2*N+2*D+1]+=R*Vt,le(I,2*N+2*D+1),I[2*N+2*D+2]+=P*Vt,le(I,2*N+2*D+2)}for(N=0;N<A;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=A;N<2*A;N++)I[N]=0;return new c(I,0)};function le(V,A){for(;(V[A]&65535)!=V[A];)V[A+1]+=V[A]>>>16,V[A]&=65535,A++}function ae(V,A){this.g=V,this.h=A}function Re(V,A){if(z(A))throw Error("division by zero");if(z(V))return new ae(T,T);if(G(V))return A=Re(K(V),A),new ae(K(A.g),K(A.h));if(G(A))return A=Re(V,K(A)),new ae(K(A.g),A.h);if(30<V.g.length){if(G(V)||G(A))throw Error("slowDivide_ only works with positive integers.");for(var I=w,N=A;0>=N.l(V);)I=ye(I),N=ye(N);var D=ze(I,1),P=ze(N,1);for(N=ze(N,2),I=ze(I,2);!z(N);){var R=P.add(N);0>=R.l(V)&&(D=D.add(I),P=R),N=ze(N,1),I=ze(I,1)}return A=he(V,D.j(A)),new ae(D,A)}for(D=T;0<=V.l(A);){for(I=Math.max(1,Math.floor(V.m()/A.m())),N=Math.ceil(Math.log(I)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=g(I),R=P.j(A);G(R)||0<R.l(V);)I-=N,P=g(I),R=P.j(A);z(P)&&(P=w),D=D.add(P),V=he(V,R)}return new ae(D,V)}n.A=function(V){return Re(this,V).h},n.and=function(V){for(var A=Math.max(this.g.length,V.g.length),I=[],N=0;N<A;N++)I[N]=this.i(N)&V.i(N);return new c(I,this.h&V.h)},n.or=function(V){for(var A=Math.max(this.g.length,V.g.length),I=[],N=0;N<A;N++)I[N]=this.i(N)|V.i(N);return new c(I,this.h|V.h)},n.xor=function(V){for(var A=Math.max(this.g.length,V.g.length),I=[],N=0;N<A;N++)I[N]=this.i(N)^V.i(N);return new c(I,this.h^V.h)};function ye(V){for(var A=V.g.length+1,I=[],N=0;N<A;N++)I[N]=V.i(N)<<1|V.i(N-1)>>>31;return new c(I,V.h)}function ze(V,A){var I=A>>5;A%=32;for(var N=V.g.length-I,D=[],P=0;P<N;P++)D[P]=0<A?V.i(P+I)>>>A|V.i(P+I+1)<<32-A:V.i(P+I);return new c(D,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ib=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,yr=c}).apply(typeof q0<"u"?q0:typeof self<"u"?self:typeof window<"u"?window:{});var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nb,Lu,Db,yf,Ig,xb,Ob,Mb;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof of=="object"&&of];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var b=0;b<h.length-1;b++){var U=h[b];if(!(U in y))break e;y=y[U]}h=h[h.length-1],b=y[h],_=_(b),_!=b&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,b=!1,U={next:function(){if(!b&&y<h.length){var H=y++;return{value:_(H,h[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function w(h,_,y){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,w.apply(null,arguments)}function M(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var b=y.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function z(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(b,U,H){for(var te=Array(arguments.length-2),je=2;je<arguments.length;je++)te[je-2]=arguments[je];return _.prototype[U].apply(b,te)}}function G(h){const _=h.length;if(0<_){const y=Array(_);for(let b=0;b<_;b++)y[b]=h[b];return y}return[]}function K(h,_){for(let y=1;y<arguments.length;y++){const b=arguments[y];if(p(b)){const U=h.length||0,H=b.length||0;h.length=U+H;for(let te=0;te<H;te++)h[U+te]=b[te]}else h.push(b)}}class he{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function le(h){return/^[\s\xa0]*$/.test(h)}function ae(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Re(h){return Re[" "](h),h}Re[" "]=function(){};var ye=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function ze(h,_,y){for(const b in h)_.call(y,h[b],b,h)}function V(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function A(h){const _={};for(const y in h)_[y]=h[y];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let y,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(y in b)h[y]=b[y];for(let H=0;H<I.length;H++)y=I[H],Object.prototype.hasOwnProperty.call(b,y)&&(h[y]=b[y])}}function D(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function P(h){d.setTimeout(()=>{throw h},0)}function R(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Vt{constructor(){this.h=this.g=null}add(_,y){const b=ct.get();b.set(_,y),this.h?this.h.next=b:this.g=b,this.h=b}}var ct=new he(()=>new Q,h=>h.reset());class Q{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,de=!1,Ge=new Vt,x=()=>{const h=d.Promise.resolve(void 0);ie=()=>{h.then(J)}};var J=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(y){P(y)}var _=ct;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}de=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var pe=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h})();function De(h,_){if(ee.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ye){e:{try{Re(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}z(De,ee);var we={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),at=0;function yi(h,_,y,b,U){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!b,this.ha=U,this.key=++at,this.da=this.fa=!1}function Ps(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Gi(h){this.src=h,this.g={},this.h=0}Gi.prototype.add=function(h,_,y,b,U){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var te=Ur(h,_,b,U);return-1<te?(_=h[te],y||(_.fa=!1)):(_=new yi(_,this.src,H,!!b,U),_.fa=y,h.push(_)),_};function Lr(h,_){var y=_.type;if(y in h.g){var b=h.g[y],U=Array.prototype.indexOf.call(b,_,void 0),H;(H=0<=U)&&Array.prototype.splice.call(b,U,1),H&&(Ps(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Ur(h,_,y,b){for(var U=0;U<h.length;++U){var H=h[U];if(!H.da&&H.listener==_&&H.capture==!!y&&H.ha==b)return U}return-1}var zr="closure_lm_"+(1e6*Math.random()|0),wl={};function Pc(h,_,y,b,U){if(Array.isArray(_)){for(var H=0;H<_.length;H++)Pc(h,_[H],y,b,U);return null}return y=Vc(y),h&&h[Ft]?h.K(_,y,g(b)?!!b.capture:!1,U):Hn(h,_,y,!1,b,U)}function Hn(h,_,y,b,U,H){if(!_)throw Error("Invalid event type");var te=g(U)?!!U.capture:!!U,je=Ga(h);if(je||(h[zr]=je=new Gi(h)),y=je.add(_,y,b,te,H),y.proxy)return y;if(b=Qd(),y.proxy=b,b.src=h,b.listener=y,h.addEventListener)pe||(U=te),U===void 0&&(U=!1),h.addEventListener(_.toString(),b,U);else if(h.attachEvent)h.attachEvent(jr(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Qd(){function h(y){return _.call(h.src,h.listener,y)}const _=Yd;return h}function bl(h,_,y,b,U){if(Array.isArray(_))for(var H=0;H<_.length;H++)bl(h,_[H],y,b,U);else b=g(b)?!!b.capture:!!b,y=Vc(y),h&&h[Ft]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],y=Ur(H,y,b,U),-1<y&&(Ps(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ga(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Ur(_,y,b,U)),(y=-1<h?_[h]:null)&&Ha(y))}function Ha(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Ft])Lr(_.i,h);else{var y=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(y,b,h.capture):_.detachEvent?_.detachEvent(jr(y),b):_.addListener&&_.removeListener&&_.removeListener(b),(y=Ga(_))?(Lr(y,h),y.h==0&&(y.src=null,_[zr]=null)):Ps(h)}}}function jr(h){return h in wl?wl[h]:wl[h]="on"+h}function Yd(h,_){if(h.da)h=!0;else{_=new De(_,this);var y=h.listener,b=h.ha||h.src;h.fa&&Ha(h),h=y.call(b,_)}return h}function Ga(h){return h=h[zr],h instanceof Gi?h:null}var Al="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vc(h){return typeof h=="function"?h:(h[Al]||(h[Al]=function(_){return h.handleEvent(_)}),h[Al])}function yt(){se.call(this),this.i=new Gi(this),this.M=this,this.F=null}z(yt,se),yt.prototype[Ft]=!0,yt.prototype.removeEventListener=function(h,_,y,b){bl(this,h,_,y,b)};function We(h,_){var y,b=h.F;if(b)for(y=[];b;b=b.F)y.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new ee(_,h);else if(_ instanceof ee)_.target=_.target||h;else{var U=_;_=new ee(b,h),N(_,U)}if(U=!0,y)for(var H=y.length-1;0<=H;H--){var te=_.g=y[H];U=On(te,b,!0,_)&&U}if(te=_.g=h,U=On(te,b,!0,_)&&U,U=On(te,b,!1,_)&&U,y)for(H=0;H<y.length;H++)te=_.g=y[H],U=On(te,b,!1,_)&&U}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],b=0;b<y.length;b++)Ps(y[b]);delete h.g[_],h.h--}}this.F=null},yt.prototype.K=function(h,_,y,b){return this.i.add(String(h),_,!1,y,b)},yt.prototype.L=function(h,_,y,b){return this.i.add(String(h),_,!0,y,b)};function On(h,_,y,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,H=0;H<_.length;++H){var te=_[H];if(te&&!te.da&&te.capture==y){var je=te.listener,Ut=te.ha||te.src;te.fa&&Lr(h.i,te),U=je.call(Ut,b)!==!1&&U}}return U&&!b.defaultPrevented}function ln(h,_,y){if(typeof h=="function")y&&(h=w(h,y));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Lc(h){h.g=ln(()=>{h.g=null,h.i&&(h.i=!1,Lc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Kd extends se{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Lc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(h){se.call(this),this.h=h,this.g={}}z(qr,se);var Br=[];function Fr(h){ze(h.g,function(_,y){this.g.hasOwnProperty(y)&&Ha(_)},h),h.g={}}qr.prototype.N=function(){qr.aa.N.call(this),Fr(this)},qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ri=d.JSON.stringify,Qa=d.JSON.parse,Hr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Cl(){}Cl.prototype.h=null;function Rl(h){return h.h||(h.h=h.i())}function Il(){}var Qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yi(){ee.call(this,"d")}z(Yi,ee);function Nl(){ee.call(this,"c")}z(Nl,ee);var vi={},Dl=null;function Vs(){return Dl=Dl||new yt}vi.La="serverreachability";function Ya(h){ee.call(this,vi.La,h)}z(Ya,ee);function Ls(h){const _=Vs();We(_,new Ya(_))}vi.STAT_EVENT="statevent";function Uc(h,_){ee.call(this,vi.STAT_EVENT,h),this.stat=_}z(Uc,ee);function dt(h){const _=Vs();We(_,new Uc(_,h))}vi.Ma="timingevent";function Lt(h,_){ee.call(this,vi.Ma,h),this.size=_}z(Lt,ee);function Rt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function xl(h,_,y,b,U,H){h.info(function(){if(h.g)if(H)for(var te="",je=H.split("&"),Ut=0;Ut<je.length;Ut++){var qe=je[Ut].split("=");if(1<qe.length){var Gt=qe[0];qe=qe[1];var zt=Gt.split("_");te=2<=zt.length&&zt[1]=="type"?te+(Gt+"="+qe+"&"):te+(Gt+"=redacted&")}}else te=null;else te=H;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+_+`
`+y+`
`+te})}function Xd(h,_,y,b,U,H,te){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+_+`
`+y+`
`+H+" "+te})}function Us(h,_,y,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Gr(h,y)+(b?" "+b:"")})}function zc(h,_){h.info(function(){return"TIMEOUT: "+_})}Gn.prototype.info=function(){};function Gr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var b=y[h];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return ri(y)}catch{return _}}var zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ei;function Ti(){}z(Ti,Cl),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},Ei=new Ti;function yn(h,_,y,b){this.j=h,this.i=_,this.l=y,this.R=b||1,this.U=new qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}var Ol={},Ka={};function ai(h,_,y){h.L=1,h.v=Wr(Mn(_)),h.m=y,h.P=!0,Xi(h,null)}function Xi(h,_){h.F=Date.now(),Qr(h),h.A=Mn(h.v);var y=h.A,b=h.R;Array.isArray(b)||(b=[String(b)]),Ul(y.i,"t",b),h.C=0,y=h.j.J,h.h=new St,h.g=th(h.j,y?_:null,!h.m),0<h.O&&(h.M=new Kd(w(h.Y,h,h.g),h.O)),_=h.U,y=h.g,b=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Br[0]=U.toString()),U=Br);for(var H=0;H<U.length;H++){var te=Pc(y,U[H],b||_.handleEvent,!1,_.h||_);if(!te)break;_.g[te.key]=te}_=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ls(),xl(h.i,h.u,h.A,h.l,h.R,h.m)}yn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Xn(h)==3?_.j():this.Y(h)},yn.prototype.Y=function(h){try{if(h==this.g)e:{const zt=Xn(this.g);var _=this.g.Ba();const is=this.g.Z();if(!(3>zt)&&(zt!=3||this.g&&(this.h.h||this.g.oa()||Yc(this.g)))){this.J||zt!=4||_==7||(_==8||0>=is?Ls(3):Ls(2)),js(this);var y=this.g.Z();this.X=y;t:if(jc(this)){var b=Yc(this.g);h="";var U=b.length,H=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),Si(this);var te="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(b[_],{stream:!(H&&_==U-1)});b.length=0,this.h.g+=h,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Xd(this.i,this.u,this.A,this.l,this.R,zt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Ut=this.g;if((je=Ut.g?Ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!le(je)){var qe=je;break t}}qe=null}if(y=qe)Us(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yr(this,y);else{this.o=!1,this.s=3,dt(12),Jt(this),Si(this);break e}}if(this.P){y=!0;let en;for(;!this.J&&this.C<te.length;)if(en=qc(this,te),en==Ka){zt==4&&(this.s=4,dt(14),y=!1),Us(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Ol){this.s=4,dt(15),Us(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Us(this.i,this.l,en,null),Yr(this,en);if(jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),zt!=4||te.length!=0||this.h.h||(this.s=1,dt(16),y=!1),this.o=this.o&&y,!y)Us(this.i,this.l,te,"[Invalid Chunked Response]"),Jt(this),Si(this);else if(0<te.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),sa(Gt),Gt.M=!0,dt(11))}}else Us(this.i,this.l,te,null),Yr(this,te);zt==4&&Jt(this),this.o&&!this.J&&(zt==4?Zc(this.j,this):(this.o=!1,Qr(this)))}else em(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Jt(this),Si(this)}}}catch{}finally{}};function jc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function qc(h,_){var y=h.C,b=_.indexOf(`
`,y);return b==-1?Ka:(y=Number(_.substring(y,b)),isNaN(y)?Ol:(b+=1,b+y>_.length?Ka:(_=_.slice(b,b+y),h.C=b+y,_)))}yn.prototype.cancel=function(){this.J=!0,Jt(this)};function Qr(h){h.S=Date.now()+h.I,Bc(h,h.I)}function Bc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Rt(w(h.ba,h),_)}function js(h){h.B&&(d.clearTimeout(h.B),h.B=null)}yn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(zc(this.i,this.A),this.L!=2&&(Ls(),dt(17)),Jt(this),this.s=2,Si(this)):Bc(this,this.S-h)};function Si(h){h.j.G==0||h.J||Zc(h.j,h)}function Jt(h){js(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Fr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Yr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||Ml(y.h,h))){if(!h.K&&Ml(y.h,h)&&y.G==3){try{var b=y.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)ao(y),so(y);else break e;Fl(y),dt(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=Rt(w(y.Za,y),6e3));if(1>=Wa(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ns(y,11)}else if((h.K||y.g==h)&&ao(y),!le(_))for(U=y.Da.g.parse(_),_=0;_<U.length;_++){let qe=U[_];if(y.T=qe[0],qe=qe[1],y.G==2)if(qe[0]=="c"){y.K=qe[1],y.ia=qe[2];const Gt=qe[3];Gt!=null&&(y.la=Gt,y.j.info("VER="+y.la));const zt=qe[4];zt!=null&&(y.Aa=zt,y.j.info("SVER="+y.Aa));const is=qe[5];is!=null&&typeof is=="number"&&0<is&&(b=1.5*is,y.L=b,y.j.info("backChannelRequestTimeoutMs_="+b)),b=y;const en=h.g;if(en){const Ni=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var H=b.h;H.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&($a(H,H.h),H.h=null))}if(b.D){const Gl=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Gl&&(b.ya=Gl,et(b.I,b.D,Gl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),b=y;var te=h;if(b.qa=eh(b,b.J?b.ia:null,b.W),te.K){vn(b.h,te);var je=te,Ut=b.L;Ut&&(je.I=Ut),je.B&&(js(je),Qr(je)),b.g=te}else Wc(b);0<y.i.length&&ro(y)}else qe[0]!="stop"&&qe[0]!="close"||ns(y,7);else y.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?ns(y,7):ql(y):qe[0]!="noop"&&y.l&&y.l.ta(qe),y.v=0)}}Ls(4)}catch{}}var Fc=class{constructor(h,_){this.g=h,this.map=_}};function Wi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Wa(h){return h.h?1:h.g?h.g.size:0}function Ml(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function $a(h,_){h.g?h.g.add(_):h.h=_}function vn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Wi.prototype.cancel=function(){if(this.i=kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function kl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return G(h.i)}function Wd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],y=h.length,b=0;b<y;b++)_.push(h[b]);return _}_=[],y=0;for(b in h)_[y++]=h[b];return _}function Za(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const b in h)_[y++]=b;return _}}}function Pl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=Za(h),b=Wd(h),U=b.length,H=0;H<U;H++)_.call(void 0,b[H],y&&y[H],h)}var Kr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $d(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var b=h[y].indexOf("="),U=null;if(0<=b){var H=h[y].substring(0,b);U=h[y].substring(b+1)}else H=h[y];_(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function It(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof It){this.h=h.h,Xr(this,h.j),this.o=h.o,this.g=h.g,qs(this,h.s),this.l=h.l;var _=h.i,y=new Zi;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),$i(this,y),this.m=h.m}else h&&(_=String(h).match(Kr))?(this.h=!1,Xr(this,_[1]||"",!0),this.o=Qn(_[2]||""),this.g=Qn(_[3]||"",!0),qs(this,_[4]),this.l=Qn(_[5]||"",!0),$i(this,_[6]||"",!0),this.m=Qn(_[7]||"")):(this.h=!1,this.i=new Zi(null,this.h))}It.prototype.toString=function(){var h=[],_=this.j;_&&h.push($r(_,Vl,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push($r(_,Vl,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push($r(y,y.charAt(0)=="/"?Zd:Ll,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",$r(y,Ja)),h.join("")};function Mn(h){return new It(h)}function Xr(h,_,y){h.j=y?Qn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function qs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function $i(h,_,y){_ instanceof Zi?(h.i=_,Gc(h.i,h.h)):(y||(_=$r(_,Jd)),h.i=new Zi(_,h.h))}function et(h,_,y){h.i.set(_,y)}function Wr(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Qn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function $r(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Hc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Hc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Vl=/[#\/\?@]/g,Ll=/[#\?:]/g,Zd=/[#\?]/g,Jd=/[#\?@]/g,Ja=/#/g;function Zi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Yn(h){h.g||(h.g=new Map,h.h=0,h.i&&$d(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}n=Zi.prototype,n.add=function(h,_){Yn(this),this.i=null,h=wi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function Ji(h,_){Yn(h),_=wi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function es(h,_){return Yn(h),_=wi(h,_),h.g.has(_)}n.forEach=function(h,_){Yn(this),this.g.forEach(function(y,b){y.forEach(function(U){h.call(_,U,b,this)},this)},this)},n.na=function(){Yn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let b=0;b<_.length;b++){const U=h[b];for(let H=0;H<U.length;H++)y.push(_[b])}return y},n.V=function(h){Yn(this);let _=[];if(typeof h=="string")es(this,h)&&(_=_.concat(this.g.get(wi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},n.set=function(h,_){return Yn(this),this.i=null,h=wi(this,h),es(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ul(h,_,y){Ji(h,_),0<y.length&&(h.i=null,h.g.set(wi(h,_),G(y)),h.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var b=_[y];const H=encodeURIComponent(String(b)),te=this.V(b);for(b=0;b<te.length;b++){var U=H;te[b]!==""&&(U+="="+encodeURIComponent(String(te[b]))),h.push(U)}}return this.i=h.join("&")};function wi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Gc(h,_){_&&!h.j&&(Yn(h),h.i=null,h.g.forEach(function(y,b){var U=b.toLowerCase();b!=U&&(Ji(this,b),Ul(this,U,y))},h)),h.j=_}function Zr(h,_){const y=new Gn;if(d.Image){const b=new Image;b.onload=M(Kn,y,"TestLoadImage: loaded",!0,_,b),b.onerror=M(Kn,y,"TestLoadImage: error",!1,_,b),b.onabort=M(Kn,y,"TestLoadImage: abort",!1,_,b),b.ontimeout=M(Kn,y,"TestLoadImage: timeout",!1,_,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function oi(h,_){const y=new Gn,b=new AbortController,U=setTimeout(()=>{b.abort(),Kn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(H=>{clearTimeout(U),H.ok?Kn(y,"TestPingServer: ok",!0,_):Kn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Kn(y,"TestPingServer: error",!1,_)})}function Kn(h,_,y,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(y)}catch{}}function Jr(){this.g=new Hr}function bi(h,_,y){const b=y||"";try{Pl(h,function(U,H){let te=U;g(U)&&(te=ri(U)),_.push(b+H+"="+encodeURIComponent(te))})}catch(U){throw _.push(b+"type="+encodeURIComponent("_badmap")),U}}function Bs(h){this.l=h.Ub||null,this.j=h.eb||!1}z(Bs,Cl),Bs.prototype.g=function(){return new ts(this.l,this.j)},Bs.prototype.i=(function(h){return function(){return h}})({});function ts(h,_){yt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(ts,yt),n=ts.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ci(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function zl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ai(this):Ci(this),this.readyState==3&&zl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ai(this))},n.Qa=function(h){this.g&&(this.response=h,Ai(this))},n.ga=function(){this.g&&Ai(this)};function Ai(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ci(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Ci(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function jl(h){let _="";return ze(h,function(y,b){_+=b,_+=":",_+=y,_+=`\r
`}),_}function Ht(h,_,y){e:{for(b in y){var b=!1;break e}b=!0}b||(y=jl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):et(h,_,y))}function Ke(h){yt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Ke,yt);var eo=/^https?$/i,ea=["POST","PUT"];n=Ke.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,y,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ei.g(),this.v=this.o?Rl(this.o):Rl(Ei),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){Qc(this,H);return}if(h=y||"",y=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)y.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())y.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ea,_,void 0))||b||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of y)this.g.setRequestHeader(H,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ta(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){Qc(this,H)}};function Qc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,to(h),Ri(h)}function to(h){h.A||(h.A=!0,We(h,"complete"),We(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,We(this,"complete"),We(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),Ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?no(this):this.bb())},n.bb=function(){no(this)};function no(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Xn(h)!=4||h.Z()!=2)){if(h.u&&Xn(h)==4)ln(h.Ea,0,h);else if(We(h,"readystatechange"),Xn(h)==4){h.h=!1;try{const te=h.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var b;if(b=te===0){var U=String(h.D).match(Kr)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),b=!eo.test(U?U.toLowerCase():"")}y=b}if(y)We(h,"complete"),We(h,"success");else{h.m=6;try{var H=2<Xn(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",to(h)}}finally{Ri(h)}}}}function Ri(h,_){if(h.g){ta(h);const y=h.g,b=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||We(h,"ready");try{y.onreadystatechange=b}catch{}}}function ta(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Xn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Qa(_)}};function Yc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function em(h){const _={};h=(h.g&&2<=Xn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(le(h[b]))continue;var y=D(h[b]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=_[U]||[];_[U]=H,H.push(y)}V(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function na(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function io(h){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=na("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=na("baseRetryDelayMs",5e3,h),this.cb=na("retryDelaySeedMs",1e4,h),this.Wa=na("forwardChannelMaxRetries",2,h),this.wa=na("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(h&&h.concurrentRequestLimit),this.Da=new Jr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=io.prototype,n.la=8,n.G=1,n.connect=function(h,_,y,b){dt(0),this.W=h,this.H=_||{},y&&b!==void 0&&(this.H.OSID=y,this.H.OAID=b),this.F=this.X,this.I=eh(this,null,this.W),ro(this)};function ql(h){if(Kc(h),h.G==3){var _=h.U++,y=Mn(h.I);if(et(y,"SID",h.K),et(y,"RID",_),et(y,"TYPE","terminate"),ia(h,y),_=new yn(h,h.j,_),_.L=2,_.v=Wr(Mn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=th(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Qr(_)}Jc(h)}function so(h){h.g&&(sa(h),h.g.cancel(),h.g=null)}function Kc(h){so(h),h.u&&(d.clearTimeout(h.u),h.u=null),ao(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function ro(h){if(!Xa(h.h)&&!h.s){h.s=!0;var _=h.Ga;ie||x(),de||(ie(),de=!0),Ge.add(_,h),h.B=0}}function tm(h,_){return Wa(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Rt(w(h.Ga,h,_),Hl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new yn(this,this.j,h);let H=this.o;if(this.S&&(H?(H=A(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var b=this.i[y];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Xc(this,U,_),y=Mn(this.I),et(y,"RID",h),et(y,"CVER",22),this.D&&et(y,"X-HTTP-Session-Id",this.D),ia(this,y),H&&(this.O?_="headers="+encodeURIComponent(String(jl(H)))+"&"+_:this.m&&Ht(y,this.m,H)),$a(this.h,U),this.Ua&&et(y,"TYPE","init"),this.P?(et(y,"$req",_),et(y,"SID","null"),U.T=!0,ai(U,y,null)):ai(U,y,_),this.G=2}}else this.G==3&&(h?Bl(this,h):this.i.length==0||Xa(this.h)||Bl(this))};function Bl(h,_){var y;_?y=_.l:y=h.U++;const b=Mn(h.I);et(b,"SID",h.K),et(b,"RID",y),et(b,"AID",h.T),ia(h,b),h.m&&h.o&&Ht(b,h.m,h.o),y=new yn(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Xc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),$a(h.h,y),ai(y,b,_)}function ia(h,_){h.H&&ze(h.H,function(y,b){et(_,b,y)}),h.l&&Pl({},function(y,b){et(_,b,y)})}function Xc(h,_,y){y=Math.min(h.i.length,y);var b=h.l?w(h.l.Na,h.l,h):null;e:{var U=h.i;let H=-1;for(;;){const te=["count="+y];H==-1?0<y?(H=U[0].g,te.push("ofs="+H)):H=0:te.push("ofs="+H);let je=!0;for(let Ut=0;Ut<y;Ut++){let qe=U[Ut].g;const Gt=U[Ut].map;if(qe-=H,0>qe)H=Math.max(0,U[Ut].g-100),je=!1;else try{bi(Gt,te,"req"+qe+"_")}catch{b&&b(Gt)}}if(je){b=te.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,b}function Wc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ie||x(),de||(ie(),de=!0),Ge.add(_,h),h.v=0}}function Fl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Rt(w(h.Fa,h),Hl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,$c(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Rt(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),so(this),$c(this))};function sa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function $c(h){h.g=new yn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Mn(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),ia(h,_),h.m&&h.o&&Ht(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Wr(Mn(_)),y.m=null,y.P=!0,Xi(y,h)}n.Za=function(){this.C!=null&&(this.C=null,so(this),Fl(this),dt(19))};function ao(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Zc(h,_){var y=null;if(h.g==_){ao(h),sa(h),h.g=null;var b=2}else if(Ml(h.h,_))y=_.D,vn(h.h,_),b=1;else return;if(h.G!=0){if(_.o)if(b==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;b=Vs(),We(b,new Lt(b,y)),ro(h)}else Wc(h);else if(U=_.s,U==3||U==0&&0<_.X||!(b==1&&tm(h,_)||b==2&&Fl(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),U){case 1:ns(h,5);break;case 4:ns(h,10);break;case 3:ns(h,6);break;default:ns(h,2)}}}function Hl(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function ns(h,_){if(h.j.info("Error code "+_),_==2){var y=w(h.fb,h),b=h.Xa;const U=!b;b=new It(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Xr(b,"https"),Wr(b),U?Zr(b.toString(),y):oi(b.toString(),y)}else dt(2);h.G=0,h.l&&h.l.sa(_),Jc(h),Kc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Jc(h){if(h.G=0,h.ka=[],h.l){const _=kl(h.h);(_.length!=0||h.i.length!=0)&&(K(h.ka,_),K(h.ka,h.i),h.h.i.length=0,G(h.i),h.i.length=0),h.l.ra()}}function eh(h,_,y){var b=y instanceof It?Mn(y):new It(y);if(b.g!="")_&&(b.g=_+"."+b.g),qs(b,b.s);else{var U=d.location;b=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var H=new It(null);b&&Xr(H,b),_&&(H.g=_),U&&qs(H,U),y&&(H.l=y),b=H}return y=h.D,_=h.ya,y&&_&&et(b,y,_),et(b,"VER",h.la),ia(h,b),b}function th(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Bs({eb:y})):new Ke(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}n=nh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oo(){}oo.prototype.g=function(h,_){return new En(h,_)};function En(h,_){yt.call(this),this.g=new io(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!le(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!le(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ii(this)}z(En,yt),En.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},En.prototype.close=function(){ql(this.g)},En.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=ri(h),h=y);_.i.push(new Fc(_.Ya++,h)),_.G==3&&ro(_)},En.prototype.N=function(){this.g.l=null,delete this.j,ql(this.g),delete this.g,En.aa.N.call(this)};function ih(h){Yi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}z(ih,Yi);function sh(){Nl.call(this),this.status=1}z(sh,Nl);function Ii(h){this.g=h}z(Ii,nh),Ii.prototype.ua=function(){We(this.g,"a")},Ii.prototype.ta=function(h){We(this.g,new ih(h))},Ii.prototype.sa=function(h){We(this.g,new sh)},Ii.prototype.ra=function(){We(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,En.prototype.send=En.prototype.o,En.prototype.open=En.prototype.m,En.prototype.close=En.prototype.close,Mb=function(){return new oo},Ob=function(){return Vs()},xb=vi,Ig={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,yf=zs,Ki.COMPLETE="complete",Db=Ki,Il.EventType=Qi,Qi.OPEN="a",Qi.CLOSE="b",Qi.ERROR="c",Qi.MESSAGE="d",yt.prototype.listen=yt.prototype.K,Lu=Il,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Nb=Ke}).apply(typeof of<"u"?of:typeof self<"u"?self:typeof window<"u"?window:{});const B0="@firebase/firestore",F0="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ml="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new hd("@firebase/firestore");function Uo(){return Ma.logLevel}function oe(n,...e){if(Ma.logLevel<=Ve.DEBUG){const t=e.map(w_);Ma.debug(`Firestore (${ml}): ${n}`,...t)}}function Is(n,...e){if(Ma.logLevel<=Ve.ERROR){const t=e.map(w_);Ma.error(`Firestore (${ml}): ${n}`,...t)}}function Jo(n,...e){if(Ma.logLevel<=Ve.WARN){const t=e.map(w_);Ma.warn(`Firestore (${ml}): ${n}`,...t)}}function w_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,kb(n,s,t)}function kb(n,e,t){let s=`FIRESTORE (${ml}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Is(s),new Error(s)}function Xe(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||kb(e,a,s)}function Ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Ms{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(fn.UNAUTHENTICATED)))}shutdown(){}}class FD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class HD{constructor(e){this.t=e,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ws,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ws)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string",31837,{l:s}),new Pb(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new fn(e)}}class GD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class QD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new GD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(fn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class H0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const s=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new H0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new H0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=KD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Le(n,e){return n<e?-1:n>e?1:0}function Ng(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return rg(a)===rg(l)?Le(a,l):rg(a)?1:-1}return Le(n.length,e.length)}const XD=55296,WD=57343;function rg(n){const e=n.charCodeAt(0);return e>=XD&&e<=WD}function el(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="__name__";class Pi{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Pi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Le(e.length,t.length)}static compareSegments(e,t){const s=Pi.isNumericId(e),a=Pi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Pi.extractNumericId(e).compare(Pi.extractNumericId(t)):Ng(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yr.fromString(e.substring(4,e.length-2))}}class lt extends Pi{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new lt(t)}static emptyPath(){return new lt([])}}const $D=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends Pi{construct(e,t,s){return new an(e,t,s)}static isValidIdentifier(e){return $D.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===G0}static keyField(){return new an([G0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new re(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new re(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new re(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new re(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new an(t)}static emptyPath(){return new an([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(lt.fromString(e))}static fromName(e){return new me(lt.fromString(e).popFirst(5))}static empty(){return new me(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n,e,t){if(!t)throw new re(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ZD(n,e,t,s){if(e===!0&&s===!0)throw new re(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Q0(n){if(!me.isDocumentKey(n))throw new re(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Y0(n){if(me.isDocumentKey(n))throw new re(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function gd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve(12329,{type:typeof n})}function Nn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gd(n);throw new re(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function kt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Tc(n,e){if(!Lb(n))throw new re(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new re(X.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=-62135596800,X0=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*X0);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<K0)throw new re(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/X0}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Tc(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-K0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:kt("string",ft._jsonSchemaVersion),seconds:kt("number"),nanoseconds:kt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new ft(0,0))}static max(){return new be(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tc=-1;function JD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=be.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new wr(a,me.empty(),e)}function ex(n){return new wr(n.readTime,n.key,tc)}class wr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new wr(be.min(),me.empty(),tc)}static max(){return new wr(be.max(),me.empty(),tc)}}function tx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ix{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==nx)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.reject(t)}static resolve(e){return new Z(((t,s)=>{t(e)}))}static reject(e){return new Z(((t,s)=>{s(e)}))}static waitFor(e){return new Z(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next((a=>a?Z.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new Z(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++d,d===l&&s(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new Z(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function sx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class _d{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}_d.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=-1;function yd(n){return n==null}function Lf(n){return n===0&&1/n==-1/0}function rx(n){return typeof n=="number"&&Number.isInteger(n)&&!Lf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="";function ax(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=W0(e)),e=ox(n.get(t),e);return W0(e)}function ox(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Ub:t+="";break;default:t+=l}}return t}function W0(n){return n+Ub+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function kr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function zb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt=class Dg{constructor(e,t){this.comparator=e,this.root=t||vr.EMPTY}insert(e,t){return new Dg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,vr.BLACK,null,null))}remove(e){return new Dg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lf(this.root,e,this.comparator,!1)}getReverseIterator(){return new lf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lf(this.root,e,this.comparator,!0)}},lf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},vr=class _s{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??_s.RED,this.left=a??_s.EMPTY,this.right=l??_s.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new _s(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return _s.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return _s.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_s.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_s.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}};vr.EMPTY=null,vr.RED=!0,vr.BLACK=!1;vr.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new vr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Z0(this.data.getIterator())}getIteratorFrom(e){return new Z0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class Z0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.fields=e,e.sort(an.comparator)}static empty(){return new Bn([])}unionWith(e){let t=new Bt(an.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return el(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class jb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new jb("Invalid base64 string: "+l):l}})(e);return new on(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new on(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const lx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(n){if(Xe(!!n,39018),typeof n=="string"){let e=0;const t=lx.exec(n);if(Xe(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ar(n){return typeof n=="string"?on.fromBase64String(n):on.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="server_timestamp",Bb="__type__",Fb="__previous_value__",Hb="__local_write_time__";function C_(n){return(n?.mapValue?.fields||{})[Bb]?.stringValue===qb}function vd(n){const e=n.mapValue.fields[Fb];return C_(e)?vd(e):e}function nc(n){const e=br(n.mapValue.fields[Hb].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,t,s,a,l,c,d,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const Uf="(default)";class ic{constructor(e,t){this.projectId=e,this.database=t||Uf}static empty(){return new ic("","")}get isDefaultDatabase(){return this.database===Uf}isEqual(e){return e instanceof ic&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="__type__",cx="__max__",uf={mapValue:{}},Qb="__vector__",zf="value";function Cr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?C_(n)?4:fx(n)?9007199254740991:hx(n)?10:11:ve(28295,{value:n})}function Fi(n,e){if(n===e)return!0;const t=Cr(n);if(t!==Cr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return nc(n).isEqual(nc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=br(a.timestampValue),d=br(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Ar(a.bytesValue).isEqual(Ar(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return At(a.geoPointValue.latitude)===At(l.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return At(a.integerValue)===At(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=At(a.doubleValue),d=At(l.doubleValue);return c===d?Lf(c)===Lf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return el(n.arrayValue.values||[],e.arrayValue.values||[],Fi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if($0(c)!==$0(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Fi(c[p],d[p])))return!1;return!0})(n,e);default:return ve(52216,{left:n})}}function sc(n,e){return(n.values||[]).find((t=>Fi(t,e)))!==void 0}function tl(n,e){if(n===e)return 0;const t=Cr(n),s=Cr(e);if(t!==s)return Le(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=At(l.integerValue||l.doubleValue),p=At(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return J0(n.timestampValue,e.timestampValue);case 4:return J0(nc(n),nc(e));case 5:return Ng(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Ar(l),p=Ar(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=Le(d[g],p[g]);if(v!==0)return v}return Le(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Le(At(l.latitude),At(c.latitude));return d!==0?d:Le(At(l.longitude),At(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return eS(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[zf]?.arrayValue,v=p[zf]?.arrayValue,T=Le(g?.values?.length||0,v?.values?.length||0);return T!==0?T:eS(g,v)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===uf.mapValue&&c===uf.mapValue)return 0;if(l===uf.mapValue)return 1;if(c===uf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const w=Ng(p[T],v[T]);if(w!==0)return w;const M=tl(d[p[T]],g[v[T]]);if(M!==0)return M}return Le(p.length,v.length)})(n.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function J0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=br(n),s=br(e),a=Le(t.seconds,s.seconds);return a!==0?a:Le(t.nanos,s.nanos)}function eS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=tl(t[a],s[a]);if(l)return l}return Le(t.length,s.length)}function nl(n){return xg(n)}function xg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=br(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ar(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return me.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=xg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${xg(t.fields[c])}`;return a+"}"})(n.mapValue):ve(61005,{value:n})}function vf(n){switch(Cr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vd(n);return e?16+vf(e):16;case 5:return 2*n.stringValue.length;case 6:return Ar(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+vf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return kr(s.fields,((l,c)=>{a+=l.length+vf(c)})),a})(n.mapValue);default:throw ve(13486,{value:n})}}function tS(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Og(n){return!!n&&"integerValue"in n}function R_(n){return!!n&&"arrayValue"in n}function nS(n){return!!n&&"nullValue"in n}function iS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ef(n){return!!n&&"mapValue"in n}function hx(n){return(n?.mapValue?.fields||{})[Gb]?.stringValue===Qb}function Fu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return kr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Fu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fu(n.arrayValue.values[t]);return e}return{...n}}function fx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===cx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ef(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fu(t)}setAll(e){let t=an.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Fu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Ef(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Ef(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){kr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Cn(Fu(this.value))}}function Yb(n){const e=[];return kr(n.fields,((t,s)=>{const a=new an([t]);if(Ef(s)){const l=Yb(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new dn(e,0,be.min(),be.min(),be.min(),Cn.empty(),0)}static newFoundDocument(e,t,s,a){return new dn(e,1,t,be.min(),s,a,0)}static newNoDocument(e,t){return new dn(e,2,t,be.min(),be.min(),Cn.empty(),0)}static newUnknownDocument(e,t){return new dn(e,3,t,be.min(),be.min(),Cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jf{constructor(e,t){this.position=e,this.inclusive=t}}function sS(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=me.comparator(me.fromName(c.referenceValue),t.key):s=tl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function rS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class rc{constructor(e,t="asc"){this.field=e,this.dir=t}}function dx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Kb{}class Mt extends Kb{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new px(e,t,s):t==="array-contains"?new yx(e,s):t==="in"?new vx(e,s):t==="not-in"?new Ex(e,s):t==="array-contains-any"?new Tx(e,s):new Mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new gx(e,s):new _x(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(tl(t,this.value)):t!==null&&Cr(this.value)===Cr(t)&&this.matchesComparison(tl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _i extends Kb{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new _i(e,t)}matches(e){return Xb(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xb(n){return n.op==="and"}function Wb(n){return mx(n)&&Xb(n)}function mx(n){for(const e of n.filters)if(e instanceof _i)return!1;return!0}function Mg(n){if(n instanceof Mt)return n.field.canonicalString()+n.op.toString()+nl(n.value);if(Wb(n))return n.filters.map((e=>Mg(e))).join(",");{const e=n.filters.map((t=>Mg(t))).join(",");return`${n.op}(${e})`}}function $b(n,e){return n instanceof Mt?(function(s,a){return a instanceof Mt&&s.op===a.op&&s.field.isEqual(a.field)&&Fi(s.value,a.value)})(n,e):n instanceof _i?(function(s,a){return a instanceof _i&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&$b(c,a.filters[d])),!0):!1})(n,e):void ve(19439)}function Zb(n){return n instanceof Mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${nl(t.value)}`})(n):n instanceof _i?(function(t){return t.op.toString()+" {"+t.getFilters().map(Zb).join(" ,")+"}"})(n):"Filter"}class px extends Mt{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class gx extends Mt{constructor(e,t){super(e,"in",t),this.keys=Jb("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class _x extends Mt{constructor(e,t){super(e,"not-in",t),this.keys=Jb("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Jb(n,e){return(e.arrayValue?.values||[]).map((t=>me.fromName(t.referenceValue)))}class yx extends Mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return R_(t)&&sc(t.arrayValue,this.value)}}class vx extends Mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sc(this.value.arrayValue,t)}}class Ex extends Mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(sc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!sc(this.value.arrayValue,t)}}class Tx extends Mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!R_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>sc(this.value.arrayValue,s)))}}/**
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
 */class Sx{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function aS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new Sx(n,e,t,s,a,l,c)}function I_(n){const e=Ae(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Mg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),yd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>nl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>nl(s))).join(",")),e.Te=t}return e.Te}function N_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!dx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$b(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rS(n.startAt,e.startAt)&&rS(n.endAt,e.endAt)}function kg(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function wx(n,e,t,s,a,l,c,d){return new _l(n,e,t,s,a,l,c,d)}function Ed(n){return new _l(n)}function oS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eA(n){return n.collectionGroup!==null}function Hu(n){const e=Ae(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Bt(an.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new rc(l,s))})),t.has(an.keyField().canonicalString())||e.Ie.push(new rc(an.keyField(),s))}return e.Ie}function Ui(n){const e=Ae(n);return e.Ee||(e.Ee=bx(e,Hu(n))),e.Ee}function bx(n,e){if(n.limitType==="F")return aS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new rc(a.field,l)}));const t=n.endAt?new jf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new jf(n.startAt.position,n.startAt.inclusive):null;return aS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Pg(n,e){const t=n.filters.concat([e]);return new _l(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qf(n,e,t){return new _l(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Td(n,e){return N_(Ui(n),Ui(e))&&n.limitType===e.limitType}function tA(n){return`${I_(Ui(n))}|lt:${n.limitType}`}function zo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>Zb(a))).join(", ")}]`),yd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>nl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>nl(a))).join(",")),`Target(${s})`})(Ui(n))}; limitType=${n.limitType})`}function Sd(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):me.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of Hu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=sS(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,Hu(s),a)||s.endAt&&!(function(c,d,p){const g=sS(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,Hu(s),a))})(n,e)}function Ax(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nA(n){return(e,t)=>{let s=!1;for(const a of Hu(n)){const l=Cx(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function Cx(n,e,t){const s=n.field.isKeyField()?me.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?tl(p,g):ve(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return zb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=new Pt(me.comparator);function Ns(){return Rx}const iA=new Pt(me.comparator);function Uu(...n){let e=iA;for(const t of n)e=e.insert(t.key,t);return e}function sA(n){let e=iA;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function wa(){return Gu()}function rA(){return Gu()}function Gu(){return new ja((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Ix=new Pt(me.comparator),Nx=new Bt(me.comparator);function Ue(...n){let e=Nx;for(const t of n)e=e.add(t);return e}const Dx=new Bt(Le);function xx(){return Dx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lf(e)?"-0":e}}function aA(n){return{integerValue:""+n}}function Ox(n,e){return rx(e)?aA(e):D_(n,e)}/**
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
 */class wd{constructor(){this._=void 0}}function Mx(n,e,t){return n instanceof ac?(function(a,l){const c={fields:{[Bb]:{stringValue:qb},[Hb]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&C_(l)&&(l=vd(l)),l&&(c.fields[Fb]=l),{mapValue:c}})(t,e):n instanceof il?lA(n,e):n instanceof oc?uA(n,e):(function(a,l){const c=oA(a,l),d=lS(c)+lS(a.Ae);return Og(c)&&Og(a.Ae)?aA(d):D_(a.serializer,d)})(n,e)}function kx(n,e,t){return n instanceof il?lA(n,e):n instanceof oc?uA(n,e):t}function oA(n,e){return n instanceof Bf?(function(s){return Og(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class ac extends wd{}class il extends wd{constructor(e){super(),this.elements=e}}function lA(n,e){const t=cA(e);for(const s of n.elements)t.some((a=>Fi(a,s)))||t.push(s);return{arrayValue:{values:t}}}class oc extends wd{constructor(e){super(),this.elements=e}}function uA(n,e){let t=cA(e);for(const s of n.elements)t=t.filter((a=>!Fi(a,s)));return{arrayValue:{values:t}}}class Bf extends wd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function lS(n){return At(n.integerValue||n.doubleValue)}function cA(n){return R_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,t){this.field=e,this.transform=t}}function Px(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof il&&a instanceof il||s instanceof oc&&a instanceof oc?el(s.elements,a.elements,Fi):s instanceof Bf&&a instanceof Bf?Fi(s.Ae,a.Ae):s instanceof ac&&a instanceof ac})(n.transform,e.transform)}class Vx{constructor(e,t){this.version=e,this.transformResults=t}}class Dn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bd{}function fA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new x_(n.key,Dn.none()):new Sc(n.key,n.data,Dn.none());{const t=n.data,s=Cn.empty();let a=new Bt(an.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Pr(n.key,s,new Bn(a.toArray()),Dn.none())}}function Lx(n,e,t){n instanceof Sc?(function(a,l,c){const d=a.value.clone(),p=cS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Pr?(function(a,l,c){if(!Tf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=cS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(dA(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Qu(n,e,t,s){return n instanceof Sc?(function(l,c,d,p){if(!Tf(l.precondition,c))return d;const g=l.value.clone(),v=hS(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Pr?(function(l,c,d,p){if(!Tf(l.precondition,c))return d;const g=hS(l.fieldTransforms,p,c),v=c.data;return v.setAll(dA(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return Tf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function Ux(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=oA(s.transform,a||null);l!=null&&(t===null&&(t=Cn.empty()),t.set(s.field,l))}return t||null}function uS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&el(s,a,((l,c)=>Px(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Sc extends bd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Pr extends bd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function dA(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function cS(n,e,t){const s=new Map;Xe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,kx(c,d,t[a]))}return s}function hS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,Mx(l,c,e))}return s}class x_ extends bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zx extends bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&Lx(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Qu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Qu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=rA();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=fA(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(be.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ue())}isEqual(e){return this.batchId===e.batchId&&el(this.mutations,e.mutations,((t,s)=>uS(t,s)))&&el(this.baseMutations,e.baseMutations,((t,s)=>uS(t,s)))}}class O_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Xe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return Ix})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new O_(e,t,s,a)}}/**
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
 */class qx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Bx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,Fe;function Fx(n){switch(n){case X.OK:return ve(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ve(15467,{code:n})}}function mA(n){if(n===void 0)return Is("GRPC error has no .code"),X.UNKNOWN;switch(n){case xt.OK:return X.OK;case xt.CANCELLED:return X.CANCELLED;case xt.UNKNOWN:return X.UNKNOWN;case xt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case xt.INTERNAL:return X.INTERNAL;case xt.UNAVAILABLE:return X.UNAVAILABLE;case xt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case xt.NOT_FOUND:return X.NOT_FOUND;case xt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case xt.ABORTED:return X.ABORTED;case xt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case xt.DATA_LOSS:return X.DATA_LOSS;default:return ve(39323,{code:n})}}(Fe=xt||(xt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Hx(){return new TextEncoder}/**
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
 */const Gx=new yr([4294967295,4294967295],0);function fS(n){const e=Hx().encode(n),t=new Ib;return t.update(e),new Uint8Array(t.digest())}function dS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new yr([t,s],0),new yr([a,l],0)]}class M_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new zu(`Invalid padding: ${t}`);if(s<0)throw new zu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new zu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new zu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(yr.fromNumber(s)));return a.compare(Gx)===1&&(a=new yr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=fS(e),[s,a]=dS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new M_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=fS(e),[s,a]=dS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class zu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,wc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ad(be.min(),a,new Pt(Le),Ns(),Ue())}}class wc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new wc(s,t,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class pA{constructor(e,t){this.targetId=e,this.Ce=t}}class gA{constructor(e,t,s=on.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class mS{constructor(){this.ve=0,this.Fe=pS(),this.Me=on.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ue(),t=Ue(),s=Ue();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:ve(38017,{changeType:l})}})),new wc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=pS()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Qx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ns(),this.Je=cf(),this.He=cf(),this.Ye=new Pt(Le)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(kg(l))if(s===0){const c=new me(l.path);this.et(t,c,dn.newNoDocument(c,be.min()))}else Xe(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Ar(s).toUint8Array()}catch(p){if(p instanceof jb)return Jo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new M_(c,a,l)}catch(p){return Jo(p instanceof zu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&kg(d.target)){const p=new me(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,dn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Ue();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Ad(e,t,this.Ye,this.je,s);return this.je=Ns(),this.Je=cf(),this.He=cf(),this.Ye=new Pt(Le),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new mS,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Bt(Le),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Bt(Le),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mS),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function cf(){return new Pt(me.comparator)}function pS(){return new Pt(me.comparator)}const Yx={asc:"ASCENDING",desc:"DESCENDING"},Kx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xx={and:"AND",or:"OR"};class Wx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vg(n,e){return n.useProto3Json||yd(e)?e:{value:e}}function Ff(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _A(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $x(n,e){return Ff(n,e.toTimestamp())}function zi(n){return Xe(!!n,49232),be.fromTimestamp((function(t){const s=br(t);return new ft(s.seconds,s.nanos)})(n))}function k_(n,e){return Lg(n,e).canonicalString()}function Lg(n,e){const t=(function(a){return new lt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function yA(n){const e=lt.fromString(n);return Xe(wA(e),10190,{key:e.toString()}),e}function Ug(n,e){return k_(n.databaseId,e.path)}function ag(n,e){const t=yA(e);if(t.get(1)!==n.databaseId.projectId)throw new re(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(EA(t))}function vA(n,e){return k_(n.databaseId,e)}function Zx(n){const e=yA(n);return e.length===4?lt.emptyPath():EA(e)}function zg(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function EA(n){return Xe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function gS(n,e,t){return{name:Ug(n,e),fields:t.value.mapValue.fields}}function Jx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ve(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(Xe(v===void 0||typeof v=="string",58123),on.fromBase64String(v||"")):(Xe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),on.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const v=g.code===void 0?X.UNKNOWN:mA(g.code);return new re(v,g.message||"")})(c);t=new gA(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=ag(n,s.document.name),l=zi(s.document.updateTime),c=s.document.createTime?zi(s.document.createTime):be.min(),d=new Cn({mapValue:{fields:s.document.fields}}),p=dn.newFoundDocument(a,l,c,d),g=s.targetIds||[],v=s.removedTargetIds||[];t=new Sf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=ag(n,s.document),l=s.readTime?zi(s.readTime):be.min(),c=dn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Sf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=ag(n,s.document),l=s.removedTargetIds||[];t=new Sf([],l,a,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new Bx(a,l),d=s.targetId;t=new pA(d,c)}}return t}function eO(n,e){let t;if(e instanceof Sc)t={update:gS(n,e.key,e.value)};else if(e instanceof x_)t={delete:Ug(n,e.key)};else if(e instanceof Pr)t={update:gS(n,e.key,e.data),updateMask:uO(e.fieldMask)};else{if(!(e instanceof zx))return ve(16599,{Vt:e.type});t={verify:Ug(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof ac)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof il)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof oc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Bf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw ve(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:$x(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(n,e.precondition)),t}function tO(n,e){return n&&n.length>0?(Xe(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?zi(a.updateTime):zi(l);return c.isEqual(be.min())&&(c=zi(l)),new Vx(c,a.transformResults||[])})(t,e)))):[]}function nO(n,e){return{documents:[vA(n,e.path)]}}function iO(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=vA(n,a);const l=(function(g){if(g.length!==0)return SA(_i.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(w){return{field:jo(w.field),direction:aO(w.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Vg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function sO(n){let e=Zx(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Xe(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const w=TA(T);return w instanceof _i&&Wb(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((w=>(function(z){return new rc(qo(z.field),(function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let w;return w=typeof T=="object"?T.value:T,yd(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(T){const w=!!T.before,M=T.values||[];return new jf(M,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const w=!T.before,M=T.values||[];return new jf(M,w)})(t.endAt)),wx(e,a,c,l,d,"F",p,g)}function rO(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function TA(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=qo(t.unaryFilter.field);return Mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=qo(t.unaryFilter.field);return Mt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=qo(t.unaryFilter.field);return Mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=qo(t.unaryFilter.field);return Mt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Mt.create(qo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return _i.create(t.compositeFilter.filters.map((s=>TA(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(n):ve(30097,{filter:n})}function aO(n){return Yx[n]}function oO(n){return Kx[n]}function lO(n){return Xx[n]}function jo(n){return{fieldPath:n.canonicalString()}}function qo(n){return an.fromServerFormat(n.fieldPath)}function SA(n){return n instanceof Mt?(function(t){if(t.op==="=="){if(iS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NAN"}};if(nS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(iS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NAN"}};if(nS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jo(t.field),op:oO(t.op),value:t.value}}})(n):n instanceof _i?(function(t){const s=t.getFilters().map((a=>SA(a)));return s.length===1?s[0]:{compositeFilter:{op:lO(t.op),filters:s}}})(n):ve(54877,{filter:n})}function uO(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function wA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,s,a,l=be.min(),c=be.min(),d=on.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.yt=e}}function hO(n){const e=sO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qf(e,e.limit,"L"):e}/**
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
 */class fO{constructor(){this.Cn=new dO}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(wr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class dO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Bt(lt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Bt(lt.comparator)).toArray()}}/**
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
 */const _S={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bA=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(bA,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new sl(0)}static cr(){return new sl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="LruGarbageCollector",mO=1048576;function vS([n,e],[t,s]){const a=Le(n,t);return a===0?Le(e,s):a}class pO{constructor(e){this.Ir=e,this.buffer=new Bt(vS),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();vS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class gO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(yS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gl(t)?oe(yS,"Ignoring IndexedDB error during garbage collection: ",t):await pl(t)}await this.Vr(3e5)}))}}class _O{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(_d.ce);const s=new pO(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(_S)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_S):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),Uo()<=Ve.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function yO(n,e){return new _O(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.changes=new ja((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class EO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Qu(s.mutation,a,Bn.empty(),ft.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ue()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ue()){const a=wa();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=Uu();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=wa();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ue())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Ns();const c=Gu(),d=(function(){return Gu()})();return t.forEach(((p,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Pr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Qu(v.mutation,g,v.mutation.getFieldMask(),ft.now())):c.set(g.key,Bn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>d.set(g,new EO(v,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=Gu();let a=new Pt(((c,d)=>c-d)),l=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=s.get(p)||Bn.empty();v=d.applyToLocalView(g,v),s.set(p,v);const T=(a.get(d.batchId)||Ue()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,T=rA();v.forEach((w=>{if(!l.has(w)){const M=fA(t.get(w),s.get(w));M!==null&&T.set(w,M),l=l.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Z.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return me.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(wa());let d=tc,p=l;return c.next((g=>Z.forEach(g,((v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next((w=>{p=p.insert(v,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ue()))).next((v=>({batchId:d,changes:sA(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next((s=>{let a=Uu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Uu();return this.indexManager.getCollectionParents(e,l).next((d=>Z.forEach(d,(p=>{const g=(function(T,w){return new _l(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((v=>{v.forEach(((T,w)=>{c=c.insert(T,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,dn.newInvalidDocument(v)))}));let d=Uu();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&Qu(v.mutation,g,Bn.empty(),ft.now()),Sd(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:zi(a.createTime)}})(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:hO(a.bundledQuery),readTime:zi(a.readTime)}})(t)),Z.resolve()}}/**
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
 */class wO{constructor(){this.overlays=new Pt(me.comparator),this.qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=wa();return Z.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=wa(),l=t.length+1,c=new me(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Pt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=wa(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=wa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=a)););return Z.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new qx(t,s));let l=this.qr.get(t);l===void 0&&(l=Ue(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class bO{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.Qr=new Bt(Wt.$r),this.Ur=new Bt(Wt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Wt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Wt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new me(new lt([])),s=new Wt(t,e),a=new Wt(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new me(new lt([])),s=new Wt(t,e),a=new Wt(t,e+1);let l=Ue();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Wt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Wt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return me.comparator(e.key,t.key)||Le(e.Yr,t.Yr)}static Kr(e,t){return Le(e.Yr,t.Yr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Bt(Wt.$r)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new jx(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new Wt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?A_:this.tr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Wt(t,0),a=new Wt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Bt(Le);return t.forEach((a=>{const l=new Wt(a,0),c=new Wt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),Z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;me.isDocumentKey(l)||(l=l.child(""));const c=new Wt(new me(l),0);let d=new Bt(Le);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),Z.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Xe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Z.forEach(t.mutations,(a=>{const l=new Wt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Wt(t,0),a=this.Zr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.ri=e,this.docs=(function(){return new Pt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():dn.newInvalidDocument(t))}getEntries(e,t){let s=Ns();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():dn.newInvalidDocument(a))})),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ns();const c=t.path,d=new me(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||tx(ex(v),s)<=0||(a.has(v.key)||Sd(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){ve(9500)}ii(e,t){return Z.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new RO(this)}getSize(e){return Z.resolve(this.size)}}class RO extends vO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),Z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.persistence=e,this.si=new ja((t=>I_(t)),N_),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.oi=0,this._i=new P_,this.targetCount=0,this.ai=sl.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),Z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new sl(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Pr(t),Z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),Z.waitFor(l).next((()=>a))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,t){this.ui={},this.overlays={},this.ci=new _d(0),this.li=!1,this.li=!0,this.hi=new bO,this.referenceDelegate=e(this),this.Pi=new IO(this),this.indexManager=new fO,this.remoteDocumentCache=(function(a){return new CO(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new cO(t),this.Ii=new SO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new AO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const a=new NO(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return Z.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class NO extends ix{constructor(e){super(),this.currentSequenceNumber=e}}class V_{constructor(e){this.persistence=e,this.Ri=new P_,this.Vi=null}static mi(e){return new V_(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.fi,(s=>{const a=me.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,be.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return Z.or([()=>Z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Hf{constructor(e,t){this.persistence=e,this.pi=new ja((s=>ax(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=yO(this,t)}static mi(e,t){return new Hf(e,t)}Ei(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return Z.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?Z.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,be.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vf(e.data.value)),t}br(e,t,s){return Z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Ue(),a=Ue();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new L_(e,t.fromCache,s,a)}}/**
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
 */class DO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return _I()?8:sx(pn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new DO;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Uo()<=Ve.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",zo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Z.resolve()):(Uo()<=Ve.DEBUG&&oe("QueryEngine","Query:",zo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Uo()<=Ve.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",zo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ui(t))):Z.resolve())}ys(e,t){if(oS(t))return Z.resolve(null);let s=Ui(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=qf(t,null,"F"),s=Ui(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Ue(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,qf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return oS(t)||a.isEqual(be.min())?Z.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?Z.resolve(null):(Uo()<=Ve.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),zo(t)),this.vs(e,c,t,JD(a,tc)).next((d=>d)))}))}Ds(e,t){let s=new Bt(nA(e));return t.forEach(((a,l)=>{Sd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Uo()<=Ve.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",zo(t)),this.ps.getDocumentsMatchingQuery(e,t,wr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="LocalStore",OO=3e8;class MO{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Pt(Le),this.xs=new ja((l=>I_(l)),N_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function kO(n,e,t,s){return new MO(n,e,t,s)}async function CA(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Ue();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function PO(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,v){const T=g.batch,w=T.keys();let M=Z.resolve();return w.forEach((z=>{M=M.next((()=>v.getEntry(p,z))).next((G=>{const K=g.docVersions.get(z);Xe(K!==null,48541),G.version.compareTo(K)<0&&(T.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),v.addEntry(G)))}))})),M.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Ue();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function RA(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function VO(n,e){const t=Ae(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((v,T)=>{const w=a.get(T);if(!w)return;d.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,T))));let M=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?M=M.withResumeToken(on.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):v.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(v.resumeToken,s)),a=a.insert(T,M),(function(G,K,he){return G.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=OO?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0})(w,M,v)&&d.push(t.Pi.updateTargetData(l,M))}));let p=Ns(),g=Ue();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),d.push(LO(l,c,e.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!s.isEqual(be.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(v)}return Z.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function LO(n,e,t){let s=Ue(),a=Ue();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Ns();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(be.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):oe(U_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function UO(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=A_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function zO(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,Z.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new mr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function jg(n,e,t){const s=Ae(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!gl(c))throw c;oe(U_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function ES(n,e,t){const s=Ae(n);let a=be.min(),l=Ue();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=Ae(p),w=T.xs.get(v);return w!==void 0?Z.resolve(T.Ms.get(w)):T.Pi.getTargetData(g,v)})(s,c,Ui(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:be.min(),t?l:Ue()))).next((d=>(jO(s,Ax(e),d),{documents:d,Qs:l})))))}function jO(n,e,t){let s=n.Os.get(e)||be.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class TS{constructor(){this.activeTargetIds=xx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qO{constructor(){this.Mo=new TS,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new TS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BO{Oo(e){}shutdown(){}}/**
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
 */const SS="ConnectivityMonitor";class wS{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){oe(SS,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){oe(SS,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hf=null;function qg(){return hf===null?hf=(function(){return 268435456+Math.round(2147483648*Math.random())})():hf++,"0x"+hf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="RestConnection",FO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class HO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Uf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=qg(),d=this.zo(e,t.toUriEncodedString());oe(og,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=Mr(g);return this.Jo(e,d,p,s,v).then((T=>(oe(og,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw Jo(og,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ml})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=FO[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="WebChannelConnection";class QO extends HO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=qg();return new Promise(((d,p)=>{const g=new Nb;g.setWithCredentials(!0),g.listenOnce(Db.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case yf.NO_ERROR:const T=g.getResponseJson();oe(hn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case yf.TIMEOUT:oe(hn,`RPC '${e}' ${c} timed out`),p(new re(X.DEADLINE_EXCEEDED,"Request time out"));break;case yf.HTTP_ERROR:const w=g.getStatus();if(oe(hn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let M=g.getResponseJson();Array.isArray(M)&&(M=M[0]);const z=M?.error;if(z&&z.status&&z.message){const G=(function(he){const le=he.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(le)>=0?le:X.UNKNOWN})(z.status);p(new re(G,z.message))}else p(new re(X.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new re(X.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{oe(hn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);oe(hn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)}))}T_(e,t,s){const a=qg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Mb(),d=Ob(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");oe(hn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let w=!1,M=!1;const z=new GO({Yo:K=>{M?oe(hn,`Not sending because RPC '${e}' stream ${a} is closed:`,K):(w||(oe(hn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),oe(hn,`RPC '${e}' stream ${a} sending:`,K),T.send(K))},Zo:()=>T.close()}),G=(K,he,le)=>{K.listen(he,(ae=>{try{le(ae)}catch(Re){setTimeout((()=>{throw Re}),0)}}))};return G(T,Lu.EventType.OPEN,(()=>{M||(oe(hn,`RPC '${e}' stream ${a} transport opened.`),z.o_())})),G(T,Lu.EventType.CLOSE,(()=>{M||(M=!0,oe(hn,`RPC '${e}' stream ${a} transport closed`),z.a_(),this.E_(T))})),G(T,Lu.EventType.ERROR,(K=>{M||(M=!0,Jo(hn,`RPC '${e}' stream ${a} transport errored. Name:`,K.name,"Message:",K.message),z.a_(new re(X.UNAVAILABLE,"The operation could not be completed")))})),G(T,Lu.EventType.MESSAGE,(K=>{if(!M){const he=K.data[0];Xe(!!he,16349);const le=he,ae=le?.error||le[0]?.error;if(ae){oe(hn,`RPC '${e}' stream ${a} received error:`,ae);const Re=ae.status;let ye=(function(A){const I=xt[A];if(I!==void 0)return mA(I)})(Re),ze=ae.message;ye===void 0&&(ye=X.INTERNAL,ze="Unknown error status: "+Re+" with message "+ae.message),M=!0,z.a_(new re(ye,ze)),T.close()}else oe(hn,`RPC '${e}' stream ${a} received:`,he),z.u_(he)}})),G(d,xb.STAT_EVENT,(K=>{K.stat===Ig.PROXY?oe(hn,`RPC '${e}' stream ${a} detected buffering proxy`):K.stat===Ig.NOPROXY&&oe(hn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{z.__()}),0),z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function lg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n){return new Wx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&oe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="PersistentStream";class NA{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new IA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Is(t.toString()),Is("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new re(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(bS,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(oe(bS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class YO extends NA{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Jx(this.serializer,e),s=(function(l){if(!("targetChange"in l))return be.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?be.min():c.readTime?zi(c.readTime):be.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=zg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=kg(p)?{documents:nO(l,p)}:{query:iO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=_A(l,c.resumeToken);const g=Vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(be.min())>0){d.readTime=Ff(l,c.snapshotVersion.toTimestamp());const g=Vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=rO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=zg(this.serializer),t.removeTarget=e,this.q_(t)}}class KO extends NA{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=tO(e.writeResults,e.commitTime),s=zi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=zg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>eO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{}class WO extends XO{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new re(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Lg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(X.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Lg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new re(X.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $O{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Is(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="RemoteStore";class ZO{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{qa(this)&&(oe(ka,"Restarting streams for network reachability change."),await(async function(p){const g=Ae(p);g.Ea.add(4),await bc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Rd(g)})(this))}))})),this.Ra=new $O(s,a)}}async function Rd(n){if(qa(n))for(const e of n.da)await e(!0)}async function bc(n){for(const e of n.da)await e(!1)}function DA(n,e){const t=Ae(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),B_(t)?q_(t):yl(t).O_()&&j_(t,e))}function z_(n,e){const t=Ae(n),s=yl(t);t.Ia.delete(e),s.O_()&&xA(t,e),t.Ia.size===0&&(s.O_()?s.L_():qa(t)&&t.Ra.set("Unknown"))}function j_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yl(n).Y_(e)}function xA(n,e){n.Va.Ue(e),yl(n).Z_(e)}function q_(n){n.Va=new Qx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),yl(n).start(),n.Ra.ua()}function B_(n){return qa(n)&&!yl(n).x_()&&n.Ia.size>0}function qa(n){return Ae(n).Ea.size===0}function OA(n){n.Va=void 0}async function JO(n){n.Ra.set("Online")}async function eM(n){n.Ia.forEach(((e,t)=>{j_(n,e)}))}async function tM(n,e){OA(n),B_(n)?(n.Ra.ha(e),q_(n)):n.Ra.set("Unknown")}async function nM(n,e,t){if(n.Ra.set("Online"),e instanceof gA&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){oe(ka,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Gf(n,s)}else if(e instanceof Sf?n.Va.Ze(e):e instanceof pA?n.Va.st(e):n.Va.tt(e),!t.isEqual(be.min()))try{const s=await RA(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(on.EMPTY_BYTE_STRING,v.snapshotVersion)),xA(l,p);const T=new mr(v.target,p,g,v.sequenceNumber);j_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){oe(ka,"Failed to raise snapshot:",s),await Gf(n,s)}}async function Gf(n,e,t){if(!gl(e))throw e;n.Ea.add(1),await bc(n),n.Ra.set("Offline"),t||(t=()=>RA(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{oe(ka,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Rd(n)}))}function MA(n,e){return e().catch((t=>Gf(n,t,e)))}async function Id(n){const e=Ae(n),t=Rr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:A_;for(;iM(e);)try{const a=await UO(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,sM(e,a)}catch(a){await Gf(e,a)}kA(e)&&PA(e)}function iM(n){return qa(n)&&n.Ta.length<10}function sM(n,e){n.Ta.push(e);const t=Rr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function kA(n){return qa(n)&&!Rr(n).x_()&&n.Ta.length>0}function PA(n){Rr(n).start()}async function rM(n){Rr(n).ra()}async function aM(n){const e=Rr(n);for(const t of n.Ta)e.ea(t.mutations)}async function oM(n,e,t){const s=n.Ta.shift(),a=O_.from(s,e,t);await MA(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Id(n)}async function lM(n,e){e&&Rr(n).X_&&await(async function(s,a){if((function(c){return Fx(c)&&c!==X.ABORTED})(a.code)){const l=s.Ta.shift();Rr(s).B_(),await MA(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Id(s)}})(n,e),kA(n)&&PA(n)}async function AS(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),oe(ka,"RemoteStore received new credentials");const s=qa(t);t.Ea.add(3),await bc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Rd(t)}async function uM(n,e){const t=Ae(n);e?(t.Ea.delete(2),await Rd(t)):e||(t.Ea.add(2),await bc(t),t.Ra.set("Unknown"))}function yl(n){return n.ma||(n.ma=(function(t,s,a){const l=Ae(t);return l.sa(),new YO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:JO.bind(null,n),t_:eM.bind(null,n),r_:tM.bind(null,n),H_:nM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),B_(n)?q_(n):n.Ra.set("Unknown")):(await n.ma.stop(),OA(n))}))),n.ma}function Rr(n){return n.fa||(n.fa=(function(t,s,a){const l=Ae(t);return l.sa(),new KO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:rM.bind(null,n),r_:lM.bind(null,n),ta:aM.bind(null,n),na:oM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Id(n)):(await n.fa.stop(),n.Ta.length>0&&(oe(ka,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new F_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function H_(n,e){if(Is("AsyncQueue",`${e}: ${n}`),gl(n))return new re(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=Uu(),this.sortedSet=new Pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class CS{constructor(){this.ga=new Pt(me.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class rl{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new rl(e,t,Yo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class hM{constructor(){this.queries=RS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Ae(t),l=a.queries;a.queries=RS(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new re(X.ABORTED,"Firestore shutting down"))}}function RS(){return new ja((n=>tA(n)),Td)}async function G_(n,e){const t=Ae(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new cM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=H_(c,`Initialization of query '${zo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Y_(t)}async function Q_(n,e){const t=Ae(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function fM(n,e){const t=Ae(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&Y_(t)}function dM(n,e,t){const s=Ae(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function Y_(n){n.Ca.forEach((e=>{e.next()}))}var Bg,IS;(IS=Bg||(Bg={})).Ma="default",IS.Cache="cache";class K_{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new rl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=rl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.key=e}}class LA{constructor(e){this.key=e}}class mM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ue(),this.mutatedKeys=Ue(),this.eu=nA(e),this.tu=new Yo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new CS,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const w=a.get(v),M=Sd(this.query,T)?T:null,z=!!w&&this.mutatedKeys.has(w.key),G=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let K=!1;w&&M?w.data.isEqual(M.data)?z!==G&&(s.track({type:3,doc:M}),K=!0):this.su(w,M)||(s.track({type:2,doc:M}),K=!0,(p&&this.eu(M,p)>0||g&&this.eu(M,g)<0)&&(d=!0)):!w&&M?(s.track({type:0,doc:M}),K=!0):w&&!M&&(s.track({type:1,doc:w}),K=!0,(p||g)&&(d=!0)),K&&(M?(c=c.add(M),l=G?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(M,z){const G=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:K})}};return G(M)-G(z)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new rl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new CS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ue(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new LA(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new VA(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ue();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return rl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const X_="SyncEngine";class pM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class gM{constructor(e){this.key=e,this.hu=!1}}class _M{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new ja((d=>tA(d)),Td),this.Iu=new Map,this.Eu=new Set,this.du=new Pt(me.comparator),this.Au=new Map,this.Ru=new P_,this.Vu={},this.mu=new Map,this.fu=sl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function yM(n,e,t=!0){const s=FA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await UA(s,e,t,!0),a}async function vM(n,e){const t=FA(n);await UA(t,e,!0,!1)}async function UA(n,e,t,s){const a=await zO(n.localStore,Ui(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await EM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&DA(n.remoteStore,a),d}async function EM(n,e,t,s,a){n.pu=(T,w,M)=>(async function(G,K,he,le){let ae=K.view.ru(he);ae.Cs&&(ae=await ES(G.localStore,K.query,!1).then((({documents:V})=>K.view.ru(V,ae))));const Re=le&&le.targetChanges.get(K.targetId),ye=le&&le.targetMismatches.get(K.targetId)!=null,ze=K.view.applyChanges(ae,G.isPrimaryClient,Re,ye);return DS(G,K.targetId,ze.au),ze.snapshot})(n,T,w,M);const l=await ES(n.localStore,e,!0),c=new mM(e,l.Qs),d=c.ru(l.documents),p=wc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);DS(n,t,g.au);const v=new pM(e,t,c);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function TM(n,e,t){const s=Ae(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Td(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await jg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&z_(s.remoteStore,a.targetId),Fg(s,a.targetId)})).catch(pl)):(Fg(s,a.targetId),await jg(s.localStore,a.targetId,!0))}async function SM(n,e){const t=Ae(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),z_(t.remoteStore,s.targetId))}async function wM(n,e,t){const s=DM(n);try{const a=await(function(c,d){const p=Ae(c),g=ft.now(),v=d.reduce(((M,z)=>M.add(z.key)),Ue());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(M=>{let z=Ns(),G=Ue();return p.Ns.getEntries(M,v).next((K=>{z=K,z.forEach(((he,le)=>{le.isValidDocument()||(G=G.add(he))}))})).next((()=>p.localDocuments.getOverlayedDocuments(M,z))).next((K=>{T=K;const he=[];for(const le of d){const ae=Ux(le,T.get(le.key).overlayedDocument);ae!=null&&he.push(new Pr(le.key,ae,Yb(ae.value.mapValue),Dn.exists(!0)))}return p.mutationQueue.addMutationBatch(M,g,he,d)})).next((K=>{w=K;const he=K.applyToLocalDocumentSet(T,G);return p.documentOverlayCache.saveOverlays(M,K.batchId,he)}))})).then((()=>({batchId:w.batchId,changes:sA(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Pt(Le)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Ac(s,a.changes),await Id(s.remoteStore)}catch(a){const l=H_(a,"Failed to persist write");t.reject(l)}}async function zA(n,e){const t=Ae(n);try{const s=await VO(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?Xe(c.hu,14607):a.removedDocuments.size>0&&(Xe(c.hu,42227),c.hu=!1))})),await Ac(t,s,e)}catch(s){await pl(s)}}function NS(n,e,t){const s=Ae(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=Ae(c);p.onlineState=d;let g=!1;p.queries.forEach(((v,T)=>{for(const w of T.Sa)w.va(d)&&(g=!0)})),g&&Y_(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bM(n,e,t){const s=Ae(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Pt(me.comparator);c=c.insert(l,dn.newNoDocument(l,be.min()));const d=Ue().add(l),p=new Ad(be.min(),new Map,new Pt(Le),c,d);await zA(s,p),s.du=s.du.remove(l),s.Au.delete(e),W_(s)}else await jg(s.localStore,e,!1).then((()=>Fg(s,e,t))).catch(pl)}async function AM(n,e){const t=Ae(n),s=e.batch.batchId;try{const a=await PO(t.localStore,e);qA(t,s,null),jA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ac(t,a)}catch(a){await pl(a)}}async function CM(n,e,t){const s=Ae(n);try{const a=await(function(c,d){const p=Ae(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(Xe(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(s.localStore,e);qA(s,e,t),jA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ac(s,a)}catch(a){await pl(a)}}function jA(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function qA(n,e,t){const s=Ae(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Fg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||BA(n,s)}))}function BA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(z_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),W_(n))}function DS(n,e,t){for(const s of t)s instanceof VA?(n.Ru.addReference(s.key,e),RM(n,s)):s instanceof LA?(oe(X_,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||BA(n,s.key)):ve(19791,{wu:s})}function RM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(oe(X_,"New document in limbo: "+t),n.Eu.add(s),W_(n))}function W_(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new me(lt.fromString(e)),s=n.fu.next();n.Au.set(s,new gM(t)),n.du=n.du.insert(t,s),DA(n.remoteStore,new mr(Ui(Ed(t.path)),s,"TargetPurposeLimboResolution",_d.ce))}}async function Ac(n,e,t){const s=Ae(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const v=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=L_.As(p.targetId,g);l.push(v)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const v=Ae(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Z.forEach(g,(w=>Z.forEach(w.Es,(M=>v.persistence.referenceDelegate.addReference(T,w.targetId,M))).next((()=>Z.forEach(w.ds,(M=>v.persistence.referenceDelegate.removeReference(T,w.targetId,M)))))))))}catch(T){if(!gl(T))throw T;oe(U_,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const M=v.Ms.get(w),z=M.snapshotVersion,G=M.withLastLimboFreeSnapshotVersion(z);v.Ms=v.Ms.insert(w,G)}}})(s.localStore,l))}async function IM(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){oe(X_,"User change. New user:",e.toKey());const s=await CA(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new re(X.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ac(t,s.Ls)}}function NM(n,e){const t=Ae(n),s=t.Au.get(e);if(s&&s.hu)return Ue().add(s.key);{let a=Ue();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function FA(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bM.bind(null,e),e.Pu.H_=fM.bind(null,e.eventManager),e.Pu.yu=dM.bind(null,e.eventManager),e}function DM(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CM.bind(null,e),e}class Qf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return kO(this.persistence,new xO,e.initialUser,this.serializer)}Cu(e){return new AA(V_.mi,this.serializer)}Du(e){return new qO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qf.provider={build:()=>new Qf};class xM extends Qf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Xe(this.persistence.referenceDelegate instanceof Hf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new gO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new AA((s=>Hf.mi(s,t)),this.serializer)}}class Hg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>NS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=IM.bind(null,this.syncEngine),await uM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new hM})()}createDatastore(e){const t=Cd(e.databaseInfo.databaseId),s=(function(l){return new QO(l)})(e.databaseInfo);return(function(l,c,d,p){return new WO(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new ZO(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>NS(this.syncEngine,t,0)),(function(){return wS.v()?new wS:new BO})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,v){const T=new _M(a,l,c,d,p,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ae(t);oe(ka,"RemoteStore shutting down."),s.Ea.add(5),await bc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Hg.provider={build:()=>new Hg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Is("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirestoreClient";class OM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=fn.UNAUTHENTICATED,this.clientId=b_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{oe(Ir,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(oe(Ir,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=H_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ug(n,e){n.asyncQueue.verifyOperationInProgress(),oe(Ir,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await CA(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function xS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await MM(n);oe(Ir,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>AS(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>AS(e.remoteStore,a))),n._onlineComponents=e}async function MM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(Ir,"Using user provided OfflineComponentProvider");try{await ug(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===X.FAILED_PRECONDITION||a.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;Jo("Error using user provided cache. Falling back to memory cache: "+t),await ug(n,new Qf)}}else oe(Ir,"Using default OfflineComponentProvider"),await ug(n,new xM(void 0));return n._offlineComponents}async function HA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(Ir,"Using user provided OnlineComponentProvider"),await xS(n,n._uninitializedComponentsProvider._online)):(oe(Ir,"Using default OnlineComponentProvider"),await xS(n,new Hg))),n._onlineComponents}function kM(n){return HA(n).then((e=>e.syncEngine))}async function Yf(n){const e=await HA(n),t=e.eventManager;return t.onListen=yM.bind(null,e.syncEngine),t.onUnlisten=TM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=vM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=SM.bind(null,e.syncEngine),t}function PM(n,e,t={}){const s=new ws;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new $_({next:w=>{v.Nu(),c.enqueueAndForget((()=>Q_(l,T)));const M=w.docs.has(d);!M&&w.fromCache?g.reject(new re(X.UNAVAILABLE,"Failed to get document because the client is offline.")):M&&w.fromCache&&p&&p.source==="server"?g.reject(new re(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new K_(Ed(d.path),v,{includeMetadataChanges:!0,qa:!0});return G_(l,T)})(await Yf(n),n.asyncQueue,e,t,s))),s.promise}function VM(n,e,t={}){const s=new ws;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new $_({next:w=>{v.Nu(),c.enqueueAndForget((()=>Q_(l,T))),w.fromCache&&p.source==="server"?g.reject(new re(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new K_(d,v,{includeMetadataChanges:!0,qa:!0});return G_(l,T)})(await Yf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function GA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="firestore.googleapis.com",MS=!0;class kS{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=QA,this.ssl=MS}else this.host=e.host,this.ssl=e.ssl??MS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mO)throw new re(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new BD;switch(s.type){case"firstParty":return new QD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=OS.get(t);s&&(oe("ComponentProvider","Removing Datastore"),OS.delete(t),s.terminate())})(this),Promise.resolve()}}function LM(n,e,t,s={}){n=Nn(n,Nd);const a=Mr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(u_(`https://${d}`),c_("Firestore",!0)),l.host!==QA&&l.host!==d&&Jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!As(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,v;if(typeof s.mockUserToken=="string")g=s.mockUserToken,v=fn.MOCK_USER;else{g=Fw(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new re(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new fn(T)}n._authCredentials=new FD(new Pb(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ks(this.firestore,e,this._query)}}class Tt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Tc(t,Tt._jsonSchema))return new Tt(e,s||null,new me(lt.fromString(t.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:kt("string",Tt._jsonSchemaVersion),referencePath:kt("string")};class Er extends ks{constructor(e,t,s){super(e,t,Ed(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new me(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function Fn(n,e,...t){if(n=ut(n),Vb("collection","path",e),n instanceof Nd){const s=lt.fromString(e,...t);return Y0(s),new Er(n,null,s)}{if(!(n instanceof Tt||n instanceof Er))throw new re(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(lt.fromString(e,...t));return Y0(s),new Er(n.firestore,null,s)}}function Nr(n,e,...t){if(n=ut(n),arguments.length===1&&(e=b_.newId()),Vb("doc","path",e),n instanceof Nd){const s=lt.fromString(e,...t);return Q0(s),new Tt(n,null,new me(s))}{if(!(n instanceof Tt||n instanceof Er))throw new re(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(lt.fromString(e,...t));return Q0(s),new Tt(n.firestore,n instanceof Er?n.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="AsyncQueue";class VS{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new IA(this,"async_queue_retry"),this._c=()=>{const s=lg();s&&oe(PS,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=lg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=lg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ws;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gl(e))throw e;oe(PS,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Is("INTERNAL UNHANDLED ERROR: ",LS(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=F_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&ve(47125,{Pc:LS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function LS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function US(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Ds extends Nd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new VS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new VS(e),this._firestoreClient=void 0,await e}}}function UM(n,e){const t=typeof n=="object"?n:d_(),s=typeof n=="string"?n:Uf,a=fd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=jw("firestore");l&&LM(a,...l)}return a}function Cc(n){if(n._terminated)throw new re(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zM(n),n._firestoreClient}function zM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new ux(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,GA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new OM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(on.fromBase64String(e))}catch(t){throw new re(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ii(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ii._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Tc(e,ii._jsonSchema))return ii.fromBase64String(e.bytes)}}ii._jsonSchemaVersion="firestore/bytes/1.0",ii._jsonSchema={type:kt("string",ii._jsonSchemaVersion),bytes:kt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ji._jsonSchemaVersion}}static fromJSON(e){if(Tc(e,ji._jsonSchema))return new ji(e.latitude,e.longitude)}}ji._jsonSchemaVersion="firestore/geoPoint/1.0",ji._jsonSchema={type:kt("string",ji._jsonSchemaVersion),latitude:kt("number"),longitude:kt("number")};/**
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
 */class qi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:qi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Tc(e,qi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new qi(e.vectorValues);throw new re(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qi._jsonSchemaVersion="firestore/vectorValue/1.0",qi._jsonSchema={type:kt("string",qi._jsonSchemaVersion),vectorValues:kt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=/^__.*__$/;class qM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sc(e,this.data,t,this.fieldTransforms)}}class YA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Pr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function KA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:n})}}class Dd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Dd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Kf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(KA(this.Ac)&&jM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class BM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Cd(e)}Cc(e,t,s,a=!1){return new Dd({Ac:e,methodName:t,Dc:s,path:an.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nc(n){const e=n._freezeSettings(),t=Cd(n._databaseId);return new BM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Z_(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);ty("Data must be an object, but it was:",c,s);const d=$A(s,c);let p,g;if(l.merge)p=new Bn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const w=Gg(e,T,t);if(!c.contains(w))throw new re(X.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);JA(v,w)||v.push(w)}p=new Bn(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new qM(new Cn(d),p,g)}class xd extends Ic{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xd}}function FM(n,e,t){return new Dd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class J_ extends Ic{_toFieldTransform(e){return new hA(e.path,new ac)}isEqual(e){return e instanceof J_}}class ey extends Ic{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=FM(this,e,!0),s=this.vc.map((l=>vl(l,t))),a=new il(s);return new hA(e.path,a)}isEqual(e){return e instanceof ey&&As(this.vc,e.vc)}}function XA(n,e,t,s){const a=n.Cc(1,e,t);ty("Data must be an object, but it was:",a,s);const l=[],c=Cn.empty();kr(s,((p,g)=>{const v=ny(e,p,t);g=ut(g);const T=a.yc(v);if(g instanceof xd)l.push(v);else{const w=vl(g,T);w!=null&&(l.push(v),c.set(v,w))}}));const d=new Bn(l);return new YA(c,d,a.fieldTransforms)}function WA(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Gg(e,s,t)],p=[a];if(l.length%2!=0)throw new re(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(Gg(e,l[w])),p.push(l[w+1]);const g=[],v=Cn.empty();for(let w=d.length-1;w>=0;--w)if(!JA(g,d[w])){const M=d[w];let z=p[w];z=ut(z);const G=c.yc(M);if(z instanceof xd)g.push(M);else{const K=vl(z,G);K!=null&&(g.push(M),v.set(M,K))}}const T=new Bn(g);return new YA(v,T,c.fieldTransforms)}function HM(n,e,t,s=!1){return vl(t,n.Cc(s?4:3,e))}function vl(n,e){if(ZA(n=ut(n)))return ty("Unsupported field value:",e,n),$A(n,e);if(n instanceof Ic)return(function(s,a){if(!KA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=vl(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=ut(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ox(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ft.fromDate(s);return{timestampValue:Ff(a.serializer,l)}}if(s instanceof ft){const l=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ff(a.serializer,l)}}if(s instanceof ji)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ii)return{bytesValue:_A(a.serializer,s._byteString)};if(s instanceof Tt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:k_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof qi)return(function(c,d){return{mapValue:{fields:{[Gb]:{stringValue:Qb},[zf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return D_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${gd(s)}`)})(n,e)}function $A(n,e){const t={};return zb(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(n,((s,a)=>{const l=vl(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function ZA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ft||n instanceof ji||n instanceof ii||n instanceof Tt||n instanceof Ic||n instanceof qi)}function ty(n,e,t){if(!ZA(t)||!Lb(t)){const s=gd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Gg(n,e,t){if((e=ut(e))instanceof Rc)return e._internalPath;if(typeof e=="string")return ny(n,e);throw Kf("Field path arguments must be of type string or ",n,!1,void 0,t)}const GM=new RegExp("[~\\*/\\[\\]]");function ny(n,e,t){if(e.search(GM)>=0)throw Kf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rc(...e.split("."))._internalPath}catch{throw Kf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Kf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new re(X.INVALID_ARGUMENT,d+n+p)}function JA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Od("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QM extends e1{data(){return super.data()}}function Od(n,e){return typeof e=="string"?ny(n,e):e instanceof Rc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iy{}class sy extends iy{}function pi(n,e,...t){let s=[];e instanceof iy&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof ry)).length,d=l.filter((p=>p instanceof Md)).length;if(c>1||c>0&&d>0)throw new re(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Md extends sy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Md(e,t,s)}_apply(e){const t=this._parse(e);return n1(e._query,t),new ks(e.firestore,e.converter,Pg(e._query,t))}_parse(e){const t=Nc(e.firestore);return(function(l,c,d,p,g,v,T){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new re(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){jS(T,v);const z=[];for(const G of T)z.push(zS(p,l,G));w={arrayValue:{values:z}}}else w=zS(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||jS(T,v),w=HM(d,c,T,v==="in"||v==="not-in");return Mt.create(g,v,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mn(n,e,t){const s=e,a=Od("where",n);return Md._create(a,s,t)}class ry extends iy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ry(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:_i.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)n1(c,p),c=Pg(c,p)})(e._query,t),new ks(e.firestore,e.converter,Pg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ay extends sy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ay(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new re(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new re(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rc(l,c)})(e._query,this._field,this._direction);return new ks(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new _l(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function YM(n,e="asc"){const t=e,s=Od("orderBy",n);return ay._create(s,t)}class oy extends sy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new oy(e,t,s)}_apply(e){return new ks(e.firestore,e.converter,qf(e._query,this._limit,this._limitType))}}function KM(n){return oy._create("limit",n,"F")}function zS(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new re(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eA(e)&&t.indexOf("/")!==-1)throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(lt.fromString(t));if(!me.isDocumentKey(s))throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return tS(n,new me(s))}if(t instanceof Tt)return tS(n,t._key);throw new re(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gd(t)}.`)}function jS(n,e){if(!Array.isArray(n)||n.length===0)throw new re(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function n1(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class XM{convertValue(e,t="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return kr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[zf].arrayValue?.values?.map((s=>At(s.doubleValue)));return new qi(t)}convertGeoPoint(e){return new ji(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=vd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(nc(e));default:return null}}convertTimestamp(e){const t=br(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);Xe(wA(s),9688,{name:e});const a=new ic(s.get(1),s.get(3)),l=new me(s.popFirst(5));return a.isEqual(t)||Is(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class ju{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ca extends e1{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Od("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ca._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ca._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ca._jsonSchema={type:kt("string",Ca._jsonSchemaVersion),bundleSource:kt("string","DocumentSnapshot"),bundleName:kt("string"),bundle:kt("string")};class wf extends Ca{data(e={}){return super.data(e)}}class Ra{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new ju(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new wf(this._firestore,this._userDataWriter,s.key,s,new ju(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ju(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new ju(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:WM(d.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ra._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=b_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(n){n=Nn(n,Tt);const e=Nn(n.firestore,Ds);return PM(Cc(e),n._key).then((t=>r1(e,n,t)))}Ra._jsonSchemaVersion="firestore/querySnapshot/1.0",Ra._jsonSchema={type:kt("string",Ra._jsonSchemaVersion),bundleSource:kt("string","QuerySnapshot"),bundleName:kt("string"),bundle:kt("string")};class uy extends XM{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function Xf(n){n=Nn(n,ks);const e=Nn(n.firestore,Ds),t=Cc(e),s=new uy(e);return t1(n._query),VM(t,n._query).then((a=>new Ra(e,s,n,a)))}function $M(n,e,t){n=Nn(n,Tt);const s=Nn(n.firestore,Ds),a=ly(n.converter,e,t);return kd(s,[Z_(Nc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Dn.none())])}function al(n,e,t,...s){n=Nn(n,Tt);const a=Nn(n.firestore,Ds),l=Nc(a);let c;return c=typeof(e=ut(e))=="string"||e instanceof Rc?WA(l,"updateDoc",n._key,e,t,s):XA(l,"updateDoc",n._key,e),kd(a,[c.toMutation(n._key,Dn.exists(!0))])}function s1(n,e){const t=Nn(n.firestore,Ds),s=Nr(n),a=ly(n.converter,e);return kd(t,[Z_(Nc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,Dn.exists(!1))]).then((()=>s))}function Dr(n,...e){n=ut(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||US(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(US(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof Tt)c=Nn(n.firestore,Ds),d=Ed(n._key.path),l={next:p=>{e[s]&&e[s](r1(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Nn(n,ks);c=Nn(p.firestore,Ds),d=p._query;const g=new uy(c);l={next:v=>{e[s]&&e[s](new Ra(c,g,p,v))},error:e[s+1],complete:e[s+2]},t1(n._query)}return(function(g,v,T,w){const M=new $_(w),z=new K_(v,M,T);return g.asyncQueue.enqueueAndForget((async()=>G_(await Yf(g),z))),()=>{M.Nu(),g.asyncQueue.enqueueAndForget((async()=>Q_(await Yf(g),z)))}})(Cc(c),d,a,l)}function kd(n,e){return(function(s,a){const l=new ws;return s.asyncQueue.enqueueAndForget((async()=>wM(await kM(s),a,l))),l.promise})(Cc(n),e)}function r1(n,e,t){const s=t.docs.get(e._key),a=new uy(n);return new Ca(n,a,e._key,s,new ju(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Nc(e)}set(e,t,s){this._verifyNotCommitted();const a=cg(e,this._firestore),l=ly(a.converter,t,s),c=Z_(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,Dn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=cg(e,this._firestore);let c;return c=typeof(t=ut(t))=="string"||t instanceof Rc?WA(this._dataReader,"WriteBatch.update",l._key,t,s,a):XA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,Dn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=cg(e,this._firestore);return this._mutations=this._mutations.concat(new x_(t._key,Dn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new re(X.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function cg(n,e){if((n=ut(n)).firestore!==e)throw new re(X.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function lc(){return new J_("serverTimestamp")}function qS(...n){return new ey("arrayUnion",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(n){return Cc(n=Nn(n,Ds)),new ZM(n,(e=>kd(n,e)))}(function(e,t=!0){(function(a){ml=a})(za),Da(new Sr("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Ds(new HD(s.getProvider("auth-internal")),new YD(c,s.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new re(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ic(g.options.projectId,v)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Vi(B0,F0,e),Vi(B0,F0,"esm2020")})();var BS={};const FS="@firebase/database",HS="1.1.0";/**
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
 */let a1="";function JM(n){a1=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Zt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Zu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Hi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ek(e)}}catch{}return new tk},ba=o1("localStorage"),nk=o1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new hd("@firebase/database"),ik=(function(){let n=1;return function(){return n++}})(),l1=function(n){const e=NI(n),t=new AI;t.update(e);const s=t.digest();return l_.encodeByteArray(s)},Dc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Dc.apply(null,s):typeof s=="object"?e+=Zt(s):e+=s,e+=" "}return e};let Yu=null,GS=!0;const sk=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),Ko.logLevel=Ve.VERBOSE,Yu=Ko.log.bind(Ko)},rn=function(...n){if(GS===!0&&(GS=!1,Yu===null&&nk.get("logging_enabled")===!0&&sk()),Yu){const e=Dc.apply(null,n);Yu(e)}},xc=function(n){return function(...e){rn(n,...e)}},Qg=function(...n){const e="FIREBASE INTERNAL ERROR: "+Dc(...n);Ko.error(e)},xs=function(...n){const e=`FIREBASE FATAL ERROR: ${Dc(...n)}`;throw Ko.error(e),new Error(e)},xn=function(...n){const e="FIREBASE WARNING: "+Dc(...n);Ko.warn(e)},rk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ak=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ol="[MIN_NAME]",Pa="[MAX_NAME]",Ba=function(n,e){if(n===e)return 0;if(n===ol||e===Pa)return-1;if(e===ol||n===Pa)return 1;{const t=QS(n),s=QS(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},ok=function(n,e){return n===e?0:n<e?-1:1},Mu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Zt(e))},cy=function(n){if(typeof n!="object"||n===null)return Zt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Zt(e[s]),t+=":",t+=cy(n[e[s]]);return t+="}",t},u1=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function gn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const c1=function(n){ne(!Pd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(p=0;p<64;p+=8){let w=parseInt(v.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},lk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ck(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const hk=new RegExp("^-?(0*)\\d{1,10}$"),fk=-2147483648,dk=2147483647,QS=function(n){if(hk.test(n)){const e=Number(n);if(e>=fk&&e<=dk)return e}return null},El=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xn("Exception was thrown by user callback.",t),e},Math.floor(0))}},mk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ku=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class pk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,qn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){xn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xn(e)}}class bf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="5",h1="v",f1="s",d1="r",m1="f",p1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,g1="ls",_1="p",Yg="ac",y1="websocket",v1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ba.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ba.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function _k(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function T1(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let s;if(e===y1)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===v1)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_k(n)&&(t.ns=n.namespace);const a=[];return gn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.counters_={}}incrementCounter(e,t=1){Hi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={},dg={};function fy(n){const e=n.toString();return fg[e]||(fg[e]=new yk),fg[e]}function vk(n,e){const t=n.toString();return dg[t]||(dg[t]=e()),dg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&El(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="start",Tk="close",Sk="pLPCommand",wk="pRTLPCB",S1="id",w1="pw",b1="ser",bk="cb",Ak="seg",Ck="ts",Rk="d",Ik="dframe",A1=1870,C1=30,Nk=A1-C1,Dk=25e3,xk=3e4;class Bo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xc(e),this.stats_=fy(t),this.urlFn=p=>(this.appCheckToken&&(p[Yg]=this.appCheckToken),T1(t,v1,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ek(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xk)),ak(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dy((...l)=>{const[c,d,p,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===YS)this.id=d,this.password=p;else if(c===Tk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[YS]="t",s[b1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[bk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[h1]=hy,this.transportSessionId&&(s[f1]=this.transportSessionId),this.lastSessionId&&(s[g1]=this.lastSessionId),this.applicationId&&(s[_1]=this.applicationId),this.appCheckToken&&(s[Yg]=this.appCheckToken),typeof location<"u"&&location.hostname&&p1.test(location.hostname)&&(s[d1]=m1);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bo.forceAllow_=!0}static forceDisallow(){Bo.forceDisallow_=!0}static isAvailable(){return Bo.forceAllow_?!0:!Bo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lk()&&!uk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Lw(t),a=u1(s,Nk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ik]="t",s[S1]=e,s[w1]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Zt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class dy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ik(),window[Sk+this.uniqueCallbackIdentifier]=e,window[wk+this.uniqueCallbackIdentifier]=t,this.myIFrame=dy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){rn("frame writing exception"),d.stack&&rn(d.stack),rn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[S1]=this.myID,e[w1]=this.myPW,e[b1]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+C1+s.length<=A1;){const c=this.pendingSegs.shift();s=s+"&"+Ak+a+"="+c.seg+"&"+Ck+a+"="+c.ts+"&"+Rk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(Dk)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{rn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=16384,Mk=45e3;let Wf=null;typeof MozWebSocket<"u"?Wf=MozWebSocket:typeof WebSocket<"u"&&(Wf=WebSocket);class hi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xc(this.connId),this.stats_=fy(t),this.connURL=hi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[h1]=hy,typeof location<"u"&&location.hostname&&p1.test(location.hostname)&&(c[d1]=m1),t&&(c[f1]=t),s&&(c[g1]=s),a&&(c[Yg]=a),l&&(c[_1]=l),T1(e,y1,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ba.set("previous_websocket_failure",!0);try{let s;gI(),this.mySock=new Wf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Wf!==null&&!hi.forceDisallow_}static previouslyFailed(){return ba.isInMemoryStorage||ba.get("previous_websocket_failure")===!0}markConnectionHealthy(){ba.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Zu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=u1(t,Ok);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Mk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hi.responsesRequiredToBeHealthy=2;hi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{static get ALL_TRANSPORTS(){return[Bo,hi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=hi&&hi.isAvailable();let s=t&&!hi.previouslyFailed();if(e.webSocketOnly&&(t||xn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hi];else{const a=this.transports_=[];for(const l of uc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);uc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}uc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=6e4,Pk=5e3,Vk=10*1024,Lk=100*1024,mg="t",KS="d",Uk="s",XS="r",zk="e",WS="o",$S="a",ZS="n",JS="p",jk="h";class qk{constructor(e,t,s,a,l,c,d,p,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xc("c:"+this.id+":"),this.transportManager_=new uc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ku(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mg in e){const t=e[mg];t===$S?this.upgradeIfSecondaryHealthy_():t===XS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===WS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Mu("t",e),s=Mu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:JS,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$S,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ZS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Mu("t",e),s=Mu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Mu(mg,e);if(KS in e){const s=e[KS];if(t===jk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===ZS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Uk?this.onConnectionShutdown_(s):t===XS?this.onReset_(s):t===zk?Qg("Server Error: "+s):t===WS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),hy!==s&&xn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ku(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ku(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:JS,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ba.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends I1{static getInstance(){return new $f}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!h_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=32,tw=768;class Je{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new Je("")}function Ne(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xr(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Je(n.pieces_,e)}function my(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Bk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function cc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function N1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Je(e,0)}function Ct(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Je)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Je(t,0)}function Oe(n){return n.pieceNum_>=n.pieces_.length}function Rn(n,e){const t=Ne(n),s=Ne(e);if(t===null)return e;if(t===s)return Rn(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Fk(n,e){const t=cc(n,0),s=cc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Ba(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function py(n,e){if(xr(n)!==xr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function si(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(xr(n)>xr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Hk{constructor(e,t){this.errorPrefix_=t,this.parts_=cc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=cd(this.parts_[s]);D1(this)}}function Gk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=cd(e),D1(n)}function Qk(n){const e=n.parts_.pop();n.byteLength_-=cd(e),n.parts_.length>0&&(n.byteLength_-=1)}function D1(n){if(n.byteLength_>tw)throw new Error(n.errorPrefix_+"has a key path longer than "+tw+" bytes ("+n.byteLength_+").");if(n.parts_.length>ew)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ew+") or object contains a cycle "+Ta(n))}function Ta(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends I1{static getInstance(){return new gy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=1e3,Yk=300*1e3,nw=30*1e3,Kk=1.3,Xk=3e4,Wk="server_kill",iw=3;class bs extends R1{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=bs.nextPersistentConnectionId_++,this.log_=xc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ku,this.maxReconnectDelay_=Yk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$f.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Zt(l)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ys,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;bs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Hi(e,"w")){const s=$o(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();xn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=wI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Zt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qg("Unrecognized action received from server: "+Zt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ku,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ku,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xk&&(this.reconnectDelay_=ku),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+bs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,d=new qk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,M=>{xn(M+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wk)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&xn(T),p())}}}interrupt(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],If(this.interruptReasons_)&&(this.reconnectDelay_=ku,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>cy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Je(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){rn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=iw&&(this.reconnectDelay_=nw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=iw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+a1.replace(/\./g,"-")]=1,h_()?e["framework.cordova"]=1:Hw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$f.getInstance().currentlyOnline();return If(this.interruptReasons_)&&e}}bs.nextPersistentConnectionId_=0;bs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Me(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Me(ol,e),a=new Me(ol,t);return this.compare(s,a)!==0}minPost(){return Me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;class x1 extends Vd{static get __EMPTY_NODE(){return ff}static set __EMPTY_NODE(e){ff=e}compare(e,t){return Ba(e.name,t.name)}isDefinedOn(e){throw hl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Me.MIN}maxPost(){return new Me(Pa,ff)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Me(e,ff)}toString(){return".key"}}const Xo=new x1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $t{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??$t.RED,this.left=a??In.EMPTY_NODE,this.right=l??In.EMPTY_NODE}copy(e,t,s,a,l){return new $t(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return In.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$t.RED=!0;$t.BLACK=!1;class $k{copy(e,t,s,a,l){return this}insert(e,t,s){return new $t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class In{constructor(e,t=In.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new In(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new In(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new df(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new df(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new df(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new df(this.root_,null,this.comparator_,!0,e)}}In.EMPTY_NODE=new $k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n,e){return Ba(n.name,e.name)}function _y(n,e){return Ba(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kg;function Jk(n){Kg=n}const O1=function(n){return typeof n=="number"?"number:"+c1(n):"string:"+n},M1=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hi(e,".sv"),"Priority must be a string or number.")}else ne(n===Kg||n.isEmpty(),"priority of unexpected type.");ne(n===Kg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sw;class Xt{static set __childrenNodeConstructor(e){sw=e}static get __childrenNodeConstructor(){return sw}constructor(e,t=Xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),M1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Oe(e)?this:Ne(e)===".priority"?this.priorityNode_:Xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ne(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ne(s!==".priority"||xr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+O1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=c1(this.value_):e+=this.value_,this.lazyHash_=l1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Xt.VALUE_TYPE_ORDER.indexOf(t),l=Xt.VALUE_TYPE_ORDER.indexOf(s);return ne(a>=0,"Unknown leaf type: "+t),ne(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k1,P1;function eP(n){k1=n}function tP(n){P1=n}class nP extends Vd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ba(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(Pa,new Xt("[PRIORITY-POST]",P1))}makePost(e,t){const s=k1(e);return new Me(t,new Xt("[PRIORITY-POST]",s))}toString(){return".priority"}}const _t=new nP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=Math.log(2);class sP{constructor(e){const t=l=>parseInt(Math.log(l)/iP,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zf=function(n,e,t,s){n.sort(e);const a=function(p,g){const v=g-p;let T,w;if(v===0)return null;if(v===1)return T=n[p],w=t?t(T):T,new $t(w,T.node,$t.BLACK,null,null);{const M=parseInt(v/2,10)+p,z=a(p,M),G=a(M+1,g);return T=n[M],w=t?t(T):T,new $t(w,T.node,$t.BLACK,z,G)}},l=function(p){let g=null,v=null,T=n.length;const w=function(z,G){const K=T-z,he=T;T-=z;const le=a(K+1,he),ae=n[K],Re=t?t(ae):ae;M(new $t(Re,ae.node,G,null,le))},M=function(z){g?(g.left=z,g=z):(v=z,g=z)};for(let z=0;z<p.count;++z){const G=p.nextBitIsOne(),K=Math.pow(2,p.count-(z+1));G?w(K,$t.BLACK):(w(K,$t.BLACK),w(K,$t.RED))}return v},c=new sP(n.length),d=l(c);return new In(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pg;const Lo={};class Ss{static get Default(){return ne(Lo&&_t,"ChildrenNode.ts has not been loaded"),pg=pg||new Ss({".priority":Lo},{".priority":_t}),pg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$o(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof In?t:null}hasIndex(e){return Hi(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==Xo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Me.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Zf(s,e.getCompare()):d=Lo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const v={...this.indexes_};return v[p]=d,new Ss(v,g)}addToIndexes(e,t){const s=Nf(this.indexes_,(a,l)=>{const c=$o(this.indexSet_,l);if(ne(c,"Missing index implementation for "+l),a===Lo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Me.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),Zf(d,c.getCompare())}else return Lo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Me(e.name,d))),p.insert(e,e.node)}});return new Ss(s,this.indexSet_)}removeFromIndexes(e,t){const s=Nf(this.indexes_,a=>{if(a===Lo)return a;{const l=t.get(e.name);return l?a.remove(new Me(e.name,l)):a}});return new Ss(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;class Te{static get EMPTY_NODE(){return Pu||(Pu=new Te(new In(_y),null,Ss.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&M1(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pu}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Pu:t}}getChild(e){const t=Ne(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Me(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Pu:this.priorityNode_;return new Te(a,c,l)}}updateChild(e,t){const s=Ne(e);if(s===null)return t;{ne(Ne(e)!==".priority"||xr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(rt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(_t,(c,d)=>{t[c]=d.val(e),s++,l&&Te.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+O1(this.getPriority().val())+":"),this.forEachChild(_t,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":l1(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Me(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Me(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Me.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oc?-1:0}withIndex(e){if(e===Xo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(_t),a=t.getIterator(_t);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Xo?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rP extends Te{constructor(){super(new In(_y),Te.EMPTY_NODE,Ss.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const Oc=new rP;Object.defineProperties(Me,{MIN:{value:new Me(ol,Te.EMPTY_NODE)},MAX:{value:new Me(Pa,Oc)}});x1.__EMPTY_NODE=Te.EMPTY_NODE;Xt.__childrenNodeConstructor=Te;Jk(Oc);tP(Oc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=!0;function Ot(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Xt(t,Ot(e))}if(!(n instanceof Array)&&aP){const t=[];let s=!1;if(gn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=Ot(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Me(c,p)))}}),t.length===0)return Te.EMPTY_NODE;const l=Zf(t,Zk,c=>c.name,_y);if(s){const c=Zf(t,_t.getCompare());return new Te(l,Ot(e),new Ss({".priority":c},{".priority":_t}))}else return new Te(l,Ot(e),Ss.Default)}else{let t=Te.EMPTY_NODE;return gn(n,(s,a)=>{if(Hi(n,s)&&s.substring(0,1)!=="."){const l=Ot(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Ot(e))}}eP(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP extends Vd{constructor(e){super(),this.indexPath_=e,ne(!Oe(e)&&Ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ba(e.name,t.name):l}makePost(e,t){const s=Ot(e),a=Te.EMPTY_NODE.updateChild(this.indexPath_,s);return new Me(t,a)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,Oc);return new Me(Pa,e)}toString(){return cc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP extends Vd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ba(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,t){const s=Ot(e);return new Me(t,s)}toString(){return".value"}}const uP=new lP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(n){return{type:"value",snapshotNode:n}}function ll(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function hc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function fc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function cP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(hc(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(ll(t,s)):c.trackChildChange(fc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_t,(a,l)=>{t.hasChild(a)||s.trackChildChange(hc(a,l))}),t.isLeafNode()||t.forEachChild(_t,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(fc(a,l,c))}else s.trackChildChange(ll(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.indexedFilter_=new yy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dc.getStartPost_(e),this.endPost_=dc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Me(t,s))||(s=Te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Te.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Te.EMPTY_NODE);const l=this;return t.forEachChild(_t,(c,d)=>{l.matches(new Me(c,d))||(a=a.updateImmediateChild(c,Te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new dc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Me(t,s))||(s=Te.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Te.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Te.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(w,M)=>T(M,w)}else c=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const p=new Me(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const M=w==null?1:c(w,p);if(v&&!s.isEmpty()&&M>=0)return l?.trackChildChange(fc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(hc(t,T));const G=d.updateImmediateChild(t,Te.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l?.trackChildChange(ll(w.name,w.node)),G.updateImmediateChild(w.name,w.node)):G}}else return s.isEmpty()?e:v&&c(g,p)>=0?(l!=null&&(l.trackChildChange(hc(g.name,g.node)),l.trackChildChange(ll(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,Te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ol}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new vy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fP(n){return n.loadsAllData()?new yy(n.getIndex()):n.hasLimit()?new hP(n):new dc(n)}function rw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===_t?t="$priority":n.index_===uP?t="$value":n.index_===Xo?t="$key":(ne(n.index_ instanceof oP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Zt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Zt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Zt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Zt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Zt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function aw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==_t&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends R1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=xc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Jf.getListenId_(e,s),d={};this.listens_[c]=d;const p=rw(e._queryParams);this.restRequest_(l+".json",p,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),$o(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=Jf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=rw(e._queryParams),s=e._path.toString(),a=new ys;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Zu(d.responseText)}catch{xn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&xn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){return{value:null,children:new Map}}function Tl(n,e,t){if(Oe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ne(e);n.children.has(s)||n.children.set(s,ed());const a=n.children.get(s);e=rt(e),Tl(a,e,t)}}function Xg(n,e){if(Oe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(_t,(s,a)=>{Tl(n,new Je(s),a)}),Xg(n,e)}}else if(n.children.size>0){const t=Ne(e);return e=rt(e),n.children.has(t)&&Xg(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Wg(n,e,t){n.value!==null?t(e,n.value):mP(n,(s,a)=>{const l=new Je(e.toString()+"/"+s);Wg(a,l,t)})}function mP(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&gn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=10*1e3,gP=30*1e3,_P=300*1e3;class yP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pP(e);const s=ow+(gP-ow)*Math.random();Ku(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;gn(e,(a,l)=>{l>0&&Hi(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Ku(this.reportStats_.bind(this),Math.floor(Math.random()*2*_P))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(di||(di={}));function L1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ey(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ty(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=di.ACK_USER_WRITE,this.source=L1()}operationForChild(e){if(Oe(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Je(e));return new td(Ye(),t,this.revert)}}else return ne(Ne(this.path)===e,"operationForChild called for unrelated child."),new td(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.source=e,this.path=t,this.type=di.LISTEN_COMPLETE}operationForChild(e){return Oe(this.path)?new mc(this.source,Ye()):new mc(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=di.OVERWRITE}operationForChild(e){return Oe(this.path)?new Va(this.source,Ye(),this.snap.getImmediateChild(e)):new Va(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=di.MERGE}operationForChild(e){if(Oe(this.path)){const t=this.children.subtree(new Je(e));return t.isEmpty()?null:t.value?new Va(this.source,Ye(),t.value):new pc(this.source,Ye(),t)}else return ne(Ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pc(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Oe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ne(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function EP(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(cP(c.childName,c.snapshotNode))}),Vu(n,a,"child_removed",e,s,t),Vu(n,a,"child_added",e,s,t),Vu(n,a,"child_moved",l,s,t),Vu(n,a,"child_changed",e,s,t),Vu(n,a,"value",e,s,t),a}function Vu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>SP(n,d,p)),c.forEach(d=>{const p=TP(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function TP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function SP(n,e,t){if(e.childName==null||t.childName==null)throw hl("Should only compare child_ events.");const s=new Me(e.childName,e.snapshotNode),a=new Me(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n,e){return{eventCache:n,serverCache:e}}function Xu(n,e,t,s){return Ld(new La(e,t,s),n.serverCache)}function U1(n,e,t,s){return Ld(n.eventCache,new La(e,t,s))}function $g(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ua(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gg;const wP=()=>(gg||(gg=new In(ok)),gg);class ht{static fromObject(e){let t=new ht(null);return gn(e,(s,a)=>{t=t.set(new Je(s),a)}),t}constructor(e,t=wP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Oe(e))return null;{const s=Ne(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(rt(e),t);return l!=null?{path:Ct(new Je(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Oe(e))return this;{const t=Ne(e),s=this.children.get(t);return s!==null?s.subtree(rt(e)):new ht(null)}}set(e,t){if(Oe(e))return new ht(t,this.children);{const s=Ne(e),l=(this.children.get(s)||new ht(null)).set(rt(e),t),c=this.children.insert(s,l);return new ht(this.value,c)}}remove(e){if(Oe(e))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const t=Ne(e),s=this.children.get(t);if(s){const a=s.remove(rt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(e){if(Oe(e))return this.value;{const t=Ne(e),s=this.children.get(t);return s?s.get(rt(e)):null}}setTree(e,t){if(Oe(e))return t;{const s=Ne(e),l=(this.children.get(s)||new ht(null)).setTree(rt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ht(this.value,c)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Ct(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Oe(e))return null;{const l=Ne(e),c=this.children.get(l);return c?c.findOnPath_(rt(e),Ct(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,s){if(Oe(e))return this;{this.value&&s(t,this.value);const a=Ne(e),l=this.children.get(a);return l?l.foreachOnPath_(rt(e),Ct(t,a),s):new ht(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Ct(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.writeTree_=e}static empty(){return new gi(new ht(null))}}function Wu(n,e,t){if(Oe(e))return new gi(new ht(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Rn(a,e);return l=l.updateChild(c,t),new gi(n.writeTree_.set(a,l))}else{const a=new ht(t),l=n.writeTree_.setTree(e,a);return new gi(l)}}}function lw(n,e,t){let s=n;return gn(t,(a,l)=>{s=Wu(s,Ct(e,a),l)}),s}function uw(n,e){if(Oe(e))return gi.empty();{const t=n.writeTree_.setTree(e,new ht(null));return new gi(t)}}function Zg(n,e){return Fa(n,e)!=null}function Fa(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Rn(t.path,e)):null}function cw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(_t,(s,a)=>{e.push(new Me(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Me(s,a.value))}),e}function Tr(n,e){if(Oe(e))return n;{const t=Fa(n,e);return t!=null?new gi(new ht(t)):new gi(n.writeTree_.subtree(e))}}function Jg(n){return n.writeTree_.isEmpty()}function ul(n,e){return z1(Ye(),n.writeTree_,e)}function z1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ne(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=z1(Ct(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ct(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n,e){return F1(e,n)}function bP(n,e,t,s,a){ne(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Wu(n.visibleWrites,e,t)),n.lastWriteId=s}function AP(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function CP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&RP(d,s.path)?a=!1:si(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return IP(n),!0;if(s.snap)n.visibleWrites=uw(n.visibleWrites,s.path);else{const d=s.children;gn(d,p=>{n.visibleWrites=uw(n.visibleWrites,Ct(s.path,p))})}return!0}else return!1}function RP(n,e){if(n.snap)return si(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&si(Ct(n.path,t),e))return!0;return!1}function IP(n){n.visibleWrites=j1(n.allWrites,NP,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function NP(n){return n.visible}function j1(n,e,t){let s=gi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)si(t,c)?(d=Rn(t,c),s=Wu(s,d,l.snap)):si(c,t)&&(d=Rn(c,t),s=Wu(s,Ye(),l.snap.getChild(d)));else if(l.children){if(si(t,c))d=Rn(t,c),s=lw(s,d,l.children);else if(si(c,t))if(d=Rn(c,t),Oe(d))s=lw(s,Ye(),l.children);else{const p=$o(l.children,Ne(d));if(p){const g=p.getChild(rt(d));s=Wu(s,Ye(),g)}}}else throw hl("WriteRecord should have .snap or .children")}}return s}function q1(n,e,t,s,a){if(!s&&!a){const l=Fa(n.visibleWrites,e);if(l!=null)return l;{const c=Tr(n.visibleWrites,e);if(Jg(c))return t;if(t==null&&!Zg(c,Ye()))return null;{const d=t||Te.EMPTY_NODE;return ul(c,d)}}}else{const l=Tr(n.visibleWrites,e);if(!a&&Jg(l))return t;if(!a&&t==null&&!Zg(l,Ye()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(si(g.path,e)||si(e,g.path))},d=j1(n.allWrites,c,e),p=t||Te.EMPTY_NODE;return ul(d,p)}}}function DP(n,e,t){let s=Te.EMPTY_NODE;const a=Fa(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(_t,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Tr(n.visibleWrites,e);return t.forEachChild(_t,(c,d)=>{const p=ul(Tr(l,new Je(c)),d);s=s.updateImmediateChild(c,p)}),cw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Tr(n.visibleWrites,e);return cw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function xP(n,e,t,s,a){ne(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Ct(e,t);if(Zg(n.visibleWrites,l))return null;{const c=Tr(n.visibleWrites,l);return Jg(c)?a.getChild(t):ul(c,a.getChild(t))}}function OP(n,e,t,s){const a=Ct(e,t),l=Fa(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Tr(n.visibleWrites,a);return ul(c,s.getNode().getImmediateChild(t))}else return null}function MP(n,e){return Fa(n.visibleWrites,e)}function kP(n,e,t,s,a,l,c){let d;const p=Tr(n.visibleWrites,e),g=Fa(p,Ye());if(g!=null)d=g;else if(t!=null)d=ul(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const v=[],T=c.getCompare(),w=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let M=w.getNext();for(;M&&v.length<a;)T(M,s)!==0&&v.push(M),M=w.getNext();return v}else return[]}function PP(){return{visibleWrites:gi.empty(),allWrites:[],lastWriteId:-1}}function nd(n,e,t,s){return q1(n.writeTree,n.treePath,e,t,s)}function wy(n,e){return DP(n.writeTree,n.treePath,e)}function hw(n,e,t,s){return xP(n.writeTree,n.treePath,e,t,s)}function id(n,e){return MP(n.writeTree,Ct(n.treePath,e))}function VP(n,e,t,s,a,l){return kP(n.writeTree,n.treePath,e,t,s,a,l)}function by(n,e,t){return OP(n.writeTree,n.treePath,e,t)}function B1(n,e){return F1(Ct(n.treePath,e),n.writeTree)}function F1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,fc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,hc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,ll(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,fc(s,e.snapshotNode,a.oldSnap));else throw hl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const H1=new UP;class Ay{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new La(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return by(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ua(this.viewCache_),l=VP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(n){return{filter:n}}function jP(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function qP(n,e,t,s,a){const l=new LP;let c,d;if(t.type===di.OVERWRITE){const g=t;g.source.fromUser?c=e_(n,e,g.path,g.snap,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Oe(g.path),c=sd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===di.MERGE){const g=t;g.source.fromUser?c=FP(n,e,g.path,g.children,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=t_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===di.ACK_USER_WRITE){const g=t;g.revert?c=QP(n,e,g.path,s,a,l):c=HP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===di.LISTEN_COMPLETE)c=GP(n,e,t.path,s,l);else throw hl("Unknown operation type: "+t.type);const p=l.getChanges();return BP(e,c,p),{viewCache:c,changes:p}}function BP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=$g(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(V1($g(e)))}}function G1(n,e,t,s,a,l){const c=e.eventCache;if(id(s,t)!=null)return e;{let d,p;if(Oe(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ua(e),v=g instanceof Te?g:Te.EMPTY_NODE,T=wy(s,v);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=nd(s,Ua(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Ne(t);if(g===".priority"){ne(xr(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const T=hw(s,t,v,p);T!=null?d=n.filter.updatePriority(v,T):d=c.getNode()}else{const v=rt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=hw(s,t,c.getNode(),p);w!=null?T=c.getNode().getImmediateChild(g).updateChild(v,w):T=c.getNode().getImmediateChild(g)}else T=by(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,v,a,l):d=c.getNode()}}return Xu(e,d,c.isFullyInitialized()||Oe(t),n.filter.filtersNodes())}}function sd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const v=c?n.filter:n.filter.getIndexedFilter();if(Oe(t))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const M=p.getNode().updateChild(t,s);g=v.updateFullNode(p.getNode(),M,null)}else{const M=Ne(t);if(!p.isCompleteForPath(t)&&xr(t)>1)return e;const z=rt(t),K=p.getNode().getImmediateChild(M).updateChild(z,s);M===".priority"?g=v.updatePriority(p.getNode(),K):g=v.updateChild(p.getNode(),M,K,z,H1,null)}const T=U1(e,g,p.isFullyInitialized()||Oe(t),v.filtersNodes()),w=new Ay(a,T,l);return G1(n,T,t,a,w,d)}function e_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const v=new Ay(a,e,l);if(Oe(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Xu(e,g,!0,n.filter.filtersNodes());else{const T=Ne(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Xu(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=rt(t),M=d.getNode().getImmediateChild(T);let z;if(Oe(w))z=s;else{const G=v.getCompleteChild(T);G!=null?my(w)===".priority"&&G.getChild(N1(w)).isEmpty()?z=G:z=G.updateChild(w,s):z=Te.EMPTY_NODE}if(M.equals(z))p=e;else{const G=n.filter.updateChild(d.getNode(),T,z,w,v,c);p=Xu(e,G,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function fw(n,e){return n.eventCache.isCompleteForChild(e)}function FP(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const v=Ct(t,p);fw(e,Ne(v))&&(d=e_(n,d,v,g,a,l,c))}),s.foreach((p,g)=>{const v=Ct(t,p);fw(e,Ne(v))||(d=e_(n,d,v,g,a,l,c))}),d}function dw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function t_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Oe(t)?g=s:g=new ht(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(v.hasChild(T)){const M=e.serverCache.getNode().getImmediateChild(T),z=dw(n,M,w);p=sd(n,p,new Je(T),z,a,l,c,d)}}),g.children.inorderTraversal((T,w)=>{const M=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!v.hasChild(T)&&!M){const z=e.serverCache.getNode().getImmediateChild(T),G=dw(n,z,w);p=sd(n,p,new Je(T),G,a,l,c,d)}}),p}function HP(n,e,t,s,a,l,c){if(id(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Oe(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return sd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Oe(t)){let g=new ht(null);return p.getNode().forEachChild(Xo,(v,T)=>{g=g.set(new Je(v),T)}),t_(n,e,t,g,a,l,d,c)}else return e}else{let g=new ht(null);return s.foreach((v,T)=>{const w=Ct(t,v);p.isCompleteForPath(w)&&(g=g.set(v,p.getNode().getChild(w)))}),t_(n,e,t,g,a,l,d,c)}}function GP(n,e,t,s,a){const l=e.serverCache,c=U1(e,l.getNode(),l.isFullyInitialized()||Oe(t),l.isFiltered());return G1(n,c,t,s,H1,a)}function QP(n,e,t,s,a,l){let c;if(id(s,t)!=null)return e;{const d=new Ay(s,e,a),p=e.eventCache.getNode();let g;if(Oe(t)||Ne(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=nd(s,Ua(e));else{const T=e.serverCache.getNode();ne(T instanceof Te,"serverChildren would be complete if leaf node"),v=wy(s,T)}v=v,g=n.filter.updateFullNode(p,v,l)}else{const v=Ne(t);let T=by(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=p.getImmediateChild(v)),T!=null?g=n.filter.updateChild(p,v,T,rt(t),d,l):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(p,v,Te.EMPTY_NODE,rt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=nd(s,Ua(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||id(s,Ye())!=null,Xu(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new yy(s.getIndex()),l=fP(s);this.processor_=zP(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(Te.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Te.EMPTY_NODE,d.getNode(),null),v=new La(p,c.isFullyInitialized(),a.filtersNodes()),T=new La(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Ld(T,v),this.eventGenerator_=new vP(this.query_)}get query(){return this.query_}}function KP(n){return n.viewCache_.serverCache.getNode()}function XP(n,e){const t=Ua(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Oe(e)&&!t.getImmediateChild(Ne(e)).isEmpty())?t.getChild(e):null}function mw(n){return n.eventRegistrations_.length===0}function WP(n,e){n.eventRegistrations_.push(e)}function pw(n,e,t){const s=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function gw(n,e,t,s){e.type===di.MERGE&&e.source.queryId!==null&&(ne(Ua(n.viewCache_),"We should always have a full cache before handling merges"),ne($g(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=qP(n.processor_,a,e,t,s);return jP(n.processor_,l.viewCache),ne(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,Q1(n,l.changes,l.viewCache.eventCache.getNode(),null)}function $P(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(_t,(l,c)=>{s.push(ll(l,c))}),t.isFullyInitialized()&&s.push(V1(t.getNode())),Q1(n,s,t.getNode(),e)}function Q1(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return EP(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd;class ZP{constructor(){this.views=new Map}}function JP(n){ne(!rd,"__referenceConstructor has already been defined"),rd=n}function e4(){return ne(rd,"Reference.ts has not been loaded"),rd}function t4(n){return n.views.size===0}function Cy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ne(l!=null,"SyncTree gave us an op for an invalid query."),gw(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(gw(c,e,t,s));return l}}function n4(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=nd(t,a?s:null),p=!1;d?p=!0:s instanceof Te?(d=wy(t,s),p=!1):(d=Te.EMPTY_NODE,p=!1);const g=Ld(new La(d,p,!1),new La(s,a,!1));return new YP(e,g)}return c}function i4(n,e,t,s,a,l){const c=n4(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),WP(c,t),$P(c,t)}function s4(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Or(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(pw(g,t,s)),mw(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(pw(p,t,s)),mw(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Or(n)&&l.push(new(e4())(e._repo,e._path)),{removed:l,events:c}}function Y1(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Wo(n,e){let t=null;for(const s of n.views.values())t=t||XP(s,e);return t}function K1(n,e){if(e._queryParams.loadsAllData())return Ud(n);{const s=e._queryIdentifier;return n.views.get(s)}}function X1(n,e){return K1(n,e)!=null}function Or(n){return Ud(n)!=null}function Ud(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad;function r4(n){ne(!ad,"__referenceConstructor has already been defined"),ad=n}function a4(){return ne(ad,"Reference.ts has not been loaded"),ad}let o4=1;class _w{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ht(null),this.pendingWriteTree_=PP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function W1(n,e,t,s,a){return bP(n.pendingWriteTree_,e,t,s,a),a?Mc(n,new Va(L1(),e,t)):[]}function Aa(n,e,t=!1){const s=AP(n.pendingWriteTree_,e);if(CP(n.pendingWriteTree_,e)){let l=new ht(null);return s.snap!=null?l=l.set(Ye(),!0):gn(s.children,c=>{l=l.set(new Je(c),!0)}),Mc(n,new td(s.path,l,t))}else return[]}function zd(n,e,t){return Mc(n,new Va(Ey(),e,t))}function l4(n,e,t){const s=ht.fromObject(t);return Mc(n,new pc(Ey(),e,s))}function u4(n,e){return Mc(n,new mc(Ey(),e))}function c4(n,e,t){const s=Iy(n,t);if(s){const a=Ny(s),l=a.path,c=a.queryId,d=Rn(l,e),p=new mc(Ty(c),d);return Dy(n,l,p)}else return[]}function n_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||X1(c,e))){const p=s4(c,e,t,s);t4(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const v=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(w,M)=>Or(M));if(v&&!T){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const M=d4(w);for(let z=0;z<M.length;++z){const G=M[z],K=G.query,he=J1(n,G);n.listenProvider_.startListening($u(K),od(n,K),he.hashFn,he.onComplete)}}}!T&&g.length>0&&!s&&(v?n.listenProvider_.stopListening($u(e),null):g.forEach(w=>{const M=n.queryToTagMap.get(jd(w));n.listenProvider_.stopListening($u(w),M)}))}m4(n,g)}return d}function h4(n,e,t,s){const a=Iy(n,s);if(a!=null){const l=Ny(a),c=l.path,d=l.queryId,p=Rn(c,e),g=new Va(Ty(d),p,t);return Dy(n,c,g)}else return[]}function f4(n,e,t,s){const a=Iy(n,s);if(a){const l=Ny(a),c=l.path,d=l.queryId,p=Rn(c,e),g=ht.fromObject(t),v=new pc(Ty(d),p,g);return Dy(n,c,v)}else return[]}function yw(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(w,M)=>{const z=Rn(w,a);l=l||Wo(M,z),c=c||Or(M)});let d=n.syncPointTree_.get(a);d?(c=c||Or(d),l=l||Wo(d,Ye())):(d=new ZP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=Te.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((M,z)=>{const G=Wo(z,Ye());G&&(l=l.updateImmediateChild(M,G))}));const g=X1(d,e);if(!g&&!e._queryParams.loadsAllData()){const w=jd(e);ne(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const M=p4();n.queryToTagMap.set(w,M),n.tagToQueryMap.set(M,w)}const v=Sy(n.pendingWriteTree_,a);let T=i4(d,e,t,v,l,p);if(!g&&!c&&!s){const w=K1(d,e);T=T.concat(g4(n,e,w))}return T}function Ry(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Rn(c,e),g=Wo(d,p);if(g)return g});return q1(a,e,l,t,!0)}function Mc(n,e){return $1(e,n.syncPointTree_,null,Sy(n.pendingWriteTree_,Ye()))}function $1(n,e,t,s){if(Oe(n.path))return Z1(n,e,t,s);{const a=e.get(Ye());t==null&&a!=null&&(t=Wo(a,Ye()));let l=[];const c=Ne(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,v=B1(s,c);l=l.concat($1(d,p,g,v))}return a&&(l=l.concat(Cy(a,n,s,t))),l}}function Z1(n,e,t,s){const a=e.get(Ye());t==null&&a!=null&&(t=Wo(a,Ye()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=B1(s,c),v=n.operationForChild(c);v&&(l=l.concat(Z1(v,d,p,g)))}),a&&(l=l.concat(Cy(a,n,s,t))),l}function J1(n,e){const t=e.query,s=od(n,t);return{hashFn:()=>(KP(e)||Te.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?c4(n,t._path,s):u4(n,t._path);{const l=ck(a,t);return n_(n,t,null,l)}}}}function od(n,e){const t=jd(e);return n.queryToTagMap.get(t)}function jd(n){return n._path.toString()+"$"+n._queryIdentifier}function Iy(n,e){return n.tagToQueryMap.get(e)}function Ny(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Je(n.substr(0,e))}}function Dy(n,e,t){const s=n.syncPointTree_.get(e);ne(s,"Missing sync point for query tag that we're tracking");const a=Sy(n.pendingWriteTree_,e);return Cy(s,t,a,null)}function d4(n){return n.fold((e,t,s)=>{if(t&&Or(t))return[Ud(t)];{let a=[];return t&&(a=Y1(t)),gn(s,(l,c)=>{a=a.concat(c)}),a}})}function $u(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(a4())(n._repo,n._path):n}function m4(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=jd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function p4(){return o4++}function g4(n,e,t){const s=e._path,a=od(n,e),l=J1(n,t),c=n.listenProvider_.startListening($u(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)ne(!Or(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,v,T)=>{if(!Oe(g)&&v&&Or(v))return[Ud(v).query];{let w=[];return v&&(w=w.concat(Y1(v).map(M=>M.query))),gn(T,(M,z)=>{w=w.concat(z)}),w}});for(let g=0;g<p.length;++g){const v=p[g];n.listenProvider_.stopListening($u(v),od(n,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xy(t)}node(){return this.node_}}class Oy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ct(this.path_,e);return new Oy(this.syncTree_,t)}node(){return Ry(this.syncTree_,this.path_)}}const _4=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},vw=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return y4(n[".sv"],e,t);if(typeof n[".sv"]=="object")return v4(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},y4=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},v4=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ne(!1,"Unexpected increment value: "+s);const a=e.node();if(ne(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},E4=function(n,e,t,s){return My(e,new Oy(t,n),s)},eC=function(n,e,t){return My(n,new xy(e),t)};function My(n,e,t){const s=n.getPriority().val(),a=vw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=vw(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Xt(d,Ot(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Xt(a))),c.forEachChild(_t,(d,p)=>{const g=My(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Py(n,e){let t=e instanceof Je?e:new Je(e),s=n,a=Ne(t);for(;a!==null;){const l=$o(s.node.children,a)||{children:{},childCount:0};s=new ky(a,s,l),t=rt(t),a=Ne(t)}return s}function Sl(n){return n.node.value}function tC(n,e){n.node.value=e,i_(n)}function nC(n){return n.node.childCount>0}function T4(n){return Sl(n)===void 0&&!nC(n)}function qd(n,e){gn(n.node.children,(t,s)=>{e(new ky(t,n,s))})}function iC(n,e,t,s){t&&e(n),qd(n,a=>{iC(a,e,!0)})}function S4(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function kc(n){return new Je(n.parent===null?n.name:kc(n.parent)+"/"+n.name)}function i_(n){n.parent!==null&&w4(n.parent,n.name,n)}function w4(n,e,t){const s=T4(t),a=Hi(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,i_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,i_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=/[\[\].#$\/\u0000-\u001F\u007F]/,A4=/[\[\].#$\u0000-\u001F\u007F]/,_g=10*1024*1024,Vy=function(n){return typeof n=="string"&&n.length!==0&&!b4.test(n)},sC=function(n){return typeof n=="string"&&n.length!==0&&!A4.test(n)},C4=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sC(n)},rC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Pd(n)||n&&typeof n=="object"&&Hi(n,".sv")},s_=function(n,e,t,s){Bd(Zo(n,"value"),e,t)},Bd=function(n,e,t){const s=t instanceof Je?new Hk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ta(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ta(s)+" with contents = "+e.toString());if(Pd(e))throw new Error(n+"contains "+e.toString()+" "+Ta(s));if(typeof e=="string"&&e.length>_g/3&&cd(e)>_g)throw new Error(n+"contains a string greater than "+_g+" utf8 bytes "+Ta(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(gn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Vy(c)))throw new Error(n+" contains an invalid key ("+c+") "+Ta(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gk(s,c),Bd(n,d,s),Qk(s)}),a&&l)throw new Error(n+' contains ".value" child '+Ta(s)+" in addition to actual children.")}},R4=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=cc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Vy(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Fk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&si(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},I4=function(n,e,t,s){const a=Zo(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];gn(e,(c,d)=>{const p=new Je(c);if(Bd(a,d,Ct(t,p)),my(p)===".priority"&&!rC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),R4(a,l)},N4=function(n,e,t){if(Pd(e))throw new Error(Zo(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!rC(e))throw new Error(Zo(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},aC=function(n,e,t,s){if(!sC(t))throw new Error(Zo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},D4=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),aC(n,e,t)},Fo=function(n,e){if(Ne(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},x4=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!C4(t))throw new Error(Zo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ly(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!py(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function oC(n,e,t){Ly(n,t),lC(n,s=>py(s,e))}function Os(n,e,t){Ly(n,t),lC(n,s=>si(s,e)||si(e,s))}function lC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(M4(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function M4(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Yu&&rn("event: "+t.toString()),El(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4="repo_interrupt",P4=25;class V4{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new O4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ed(),this.transactionQueueTree_=new ky,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function L4(n,e,t){if(n.stats_=fy(n.repoInfo_),n.forceRestClient_||mk())n.server_=new Jf(n.repoInfo_,(s,a,l,c)=>{Ew(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Tw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Zt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new bs(n.repoInfo_,e,(s,a,l,c)=>{Ew(n,s,a,l,c)},s=>{Tw(n,s)},s=>{z4(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=vk(n.repoInfo_,()=>new yP(n.stats_,n.server_)),n.infoData_=new dP,n.infoSyncTree_=new _w({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=zd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),zy(n,"connected",!1),n.serverSyncTree_=new _w({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Os(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function U4(n){const t=n.infoData_.getNode(new Je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Uy(n){return _4({timestamp:U4(n)})}function Ew(n,e,t,s,a){n.dataUpdateCount++;const l=new Je(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Nf(t,g=>Ot(g));c=f4(n.serverSyncTree_,l,p,a)}else{const p=Ot(t);c=h4(n.serverSyncTree_,l,p,a)}else if(s){const p=Nf(t,g=>Ot(g));c=l4(n.serverSyncTree_,l,p)}else{const p=Ot(t);c=zd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Fd(n,l)),Os(n.eventQueue_,d,c)}function Tw(n,e){zy(n,"connected",e),e===!1&&q4(n)}function z4(n,e){gn(e,(t,s)=>{zy(n,t,s)})}function zy(n,e,t){const s=new Je("/.info/"+e),a=Ot(t);n.infoData_.updateSnapshot(s,a);const l=zd(n.infoSyncTree_,s,a);Os(n.eventQueue_,s,l)}function uC(n){return n.nextWriteId_++}function j4(n,e,t,s,a){jy(n,"set",{path:e.toString(),value:t,priority:s});const l=Uy(n),c=Ot(t,s),d=Ry(n.serverSyncTree_,e),p=eC(c,d,l),g=uC(n),v=W1(n.serverSyncTree_,e,p,g,!0);Ly(n.eventQueue_,v),n.server_.put(e.toString(),c.val(!0),(w,M)=>{const z=w==="ok";z||xn("set at "+e+" failed: "+w);const G=Aa(n.serverSyncTree_,g,!z);Os(n.eventQueue_,e,G),cl(n,a,w,M)});const T=mC(n,e);Fd(n,T),Os(n.eventQueue_,T,[])}function q4(n){jy(n,"onDisconnectEvents");const e=Uy(n),t=ed();Wg(n.onDisconnect_,Ye(),(a,l)=>{const c=E4(a,l,n.serverSyncTree_,e);Tl(t,a,c)});let s=[];Wg(t,Ye(),(a,l)=>{s=s.concat(zd(n.serverSyncTree_,a,l));const c=mC(n,a);Fd(n,c)}),n.onDisconnect_=ed(),Os(n.eventQueue_,Ye(),s)}function B4(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&Xg(n.onDisconnect_,e),cl(n,t,s,a)})}function Sw(n,e,t,s){const a=Ot(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&Tl(n.onDisconnect_,e,a),cl(n,s,l,c)})}function F4(n,e,t,s,a){const l=Ot(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&Tl(n.onDisconnect_,e,l),cl(n,a,c,d)})}function H4(n,e,t,s){if(If(t)){rn("onDisconnect().update() called with empty data.  Don't do anything."),cl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&gn(t,(c,d)=>{const p=Ot(d);Tl(n.onDisconnect_,Ct(e,c),p)}),cl(n,s,a,l)})}function G4(n,e,t){let s;Ne(e._path)===".info"?s=yw(n.infoSyncTree_,e,t):s=yw(n.serverSyncTree_,e,t),oC(n.eventQueue_,e._path,s)}function Q4(n,e,t){let s;Ne(e._path)===".info"?s=n_(n.infoSyncTree_,e,t):s=n_(n.serverSyncTree_,e,t),oC(n.eventQueue_,e._path,s)}function Y4(n){n.persistentConnection_&&n.persistentConnection_.interrupt(k4)}function jy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),rn(t,...e)}function cl(n,e,t,s){e&&El(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function cC(n,e,t){return Ry(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function qy(n,e=n.transactionQueueTree_){if(e||Hd(n,e),Sl(e)){const t=fC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&K4(n,kc(e),t)}else nC(e)&&qd(e,t=>{qy(n,t)})}function K4(n,e,t){const s=t.map(g=>g.currentWriteId),a=cC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];ne(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=Rn(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{jy(n,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,v=v.concat(Aa(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Hd(n,Py(n.transactionQueueTree_,e)),qy(n,n.transactionQueueTree_),Os(n.eventQueue_,e,v);for(let w=0;w<T.length;w++)El(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{xn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Fd(n,e)}},c)}function Fd(n,e){const t=hC(n,e),s=kc(t),a=fC(n,t);return X4(n,a,s),s}function X4(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Rn(t,p.path);let v=!1,T;if(ne(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,T=p.abortReason,a=a.concat(Aa(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=P4)v=!0,T="maxretry",a=a.concat(Aa(n.serverSyncTree_,p.currentWriteId,!0));else{const w=cC(n,p.path,c);p.currentInputSnapshot=w;const M=e[d].update(w.val());if(M!==void 0){Bd("transaction failed: Data returned ",M,p.path);let z=Ot(M);typeof M=="object"&&M!=null&&Hi(M,".priority")||(z=z.updatePriority(w.getPriority()));const K=p.currentWriteId,he=Uy(n),le=eC(z,w,he);p.currentOutputSnapshotRaw=z,p.currentOutputSnapshotResolved=le,p.currentWriteId=uC(n),c.splice(c.indexOf(K),1),a=a.concat(W1(n.serverSyncTree_,p.path,le,p.currentWriteId,p.applyLocally)),a=a.concat(Aa(n.serverSyncTree_,K,!0))}else v=!0,T="nodata",a=a.concat(Aa(n.serverSyncTree_,p.currentWriteId,!0))}Os(n.eventQueue_,t,a),a=[],v&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Hd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)El(s[d]);qy(n,n.transactionQueueTree_)}function hC(n,e){let t,s=n.transactionQueueTree_;for(t=Ne(e);t!==null&&Sl(s)===void 0;)s=Py(s,t),e=rt(e),t=Ne(e);return s}function fC(n,e){const t=[];return dC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function dC(n,e,t){const s=Sl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);qd(e,a=>{dC(n,a,t)})}function Hd(n,e){const t=Sl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,tC(e,t.length>0?t:void 0)}qd(e,s=>{Hd(n,s)})}function mC(n,e){const t=kc(hC(n,e)),s=Py(n.transactionQueueTree_,e);return S4(s,a=>{yg(n,a)}),yg(n,s),iC(s,a=>{yg(n,a)}),t}function yg(n,e){const t=Sl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ne(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ne(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Aa(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?tC(e,void 0):t.length=l+1,Os(n.eventQueue_,kc(e),a);for(let c=0;c<s.length;c++)El(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W4(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function $4(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xn(`Invalid query segment '${t}' in query '${n}'`)}return e}const ww=function(n,e){const t=Z4(n),s=t.namespace;t.domain==="firebase.com"&&xs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&xs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||rk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new E1(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Je(t.pathString)}},Z4=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(v,T)),v<T&&(a=W4(n.substring(v,T)));const w=$4(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const M=e.slice(0,g);if(M.toLowerCase()==="localhost")t="localhost";else if(M.split(".").length<=2)t=M;else{const z=e.indexOf(".");s=e.substring(0,z).toLowerCase(),t=e.substring(z+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Zt(this.snapshot.exportVal())}}class eV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class nV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ys;return B4(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Fo("OnDisconnect.remove",this._path);const e=new ys;return Sw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Fo("OnDisconnect.set",this._path),s_("OnDisconnect.set",e,this._path);const t=new ys;return Sw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Fo("OnDisconnect.setWithPriority",this._path),s_("OnDisconnect.setWithPriority",e,this._path),N4("OnDisconnect.setWithPriority",t);const s=new ys;return F4(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Fo("OnDisconnect.update",this._path),I4("OnDisconnect.update",e,this._path);const t=new ys;return H4(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Oe(this._path)?null:my(this._path)}get ref(){return new Vr(this._repo,this._path)}get _queryIdentifier(){const e=aw(this._queryParams),t=cy(e);return t==="{}"?"default":t}get _queryObject(){return aw(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof By))return!1;const t=this._repo===e._repo,s=py(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Bk(this._path)}}class Vr extends By{constructor(e,t){super(e,t,new vy,!1)}get parent(){const e=N1(this._path);return e===null?null:new Vr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ld{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Je(e),s=r_(this.ref,e);return new ld(this._node.getChild(t),s,_t)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new ld(a,r_(this.ref,s),_t)))}hasChild(e){const t=new Je(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ia(n,e){return n=ut(n),n._checkNotDeleted("ref"),e!==void 0?r_(n._root,e):n._root}function r_(n,e){return n=ut(n),Ne(n._path)===null?D4("child","path",e):aC("child","path",e),new Vr(n._repo,Ct(n._path,e))}function iV(n){return n=ut(n),new nV(n._repo,n._path)}function vg(n){return Fo("remove",n._path),Gd(n,null)}function Gd(n,e){n=ut(n),Fo("set",n._path),s_("set",e,n._path);const t=new ys;return j4(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Fy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new J4("value",this,new ld(e.snapshotNode,new Vr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new eV(this,e,t):null}matches(e){return e instanceof Fy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function sV(n,e,t,s,a){const l=new tV(t,void 0),c=new Fy(l);return G4(n._repo,n,c),()=>Q4(n._repo,n,c)}function Hy(n,e,t,s){return sV(n,"value",e)}JP(Vr);r4(Vr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV="FIREBASE_DATABASE_EMULATOR_HOST",a_={};let aV=!1;function oV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Mr(l);n.repoInfo_=new E1(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function lV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||xs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=ww(l,a),d=c.repoInfo,p;typeof process<"u"&&BS&&(p=BS[rV]),p?(l=`http://${p}?ns=${d.namespace}`,c=ww(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new gk(n.name,n.options,e);x4("Invalid Firebase Database URL",c),Oe(c.path)||xs("Database URL must point to the root of a Firebase Database (not including a child path).");const v=cV(d,n,g,new pk(n,t));return new hV(v,n)}function uV(n,e){const t=a_[e];(!t||t[n.key]!==n)&&xs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Y4(n),delete t[n.key]}function cV(n,e,t,s){let a=a_[e.name];a||(a={},a_[e.name]=a);let l=a[n.toURLString()];return l&&xs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new V4(n,aV,t,s),a[n.toURLString()]=l,l}class hV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(L4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vr(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xs("Cannot call "+e+" on a deleted database.")}}function fV(n=d_(),e){const t=fd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=jw("database");s&&dV(t,...s)}return t}function dV(n,e,t,s={}){n=ut(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&As(s,l.repoInfo_.emulatorOptions))return;xs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&xs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new bf(bf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Fw(s.mockUserToken,n.app.options.projectId);c=new bf(d)}Mr(e)&&(u_(e),c_("Database",!0)),oV(l,a,s,c)}/**
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
 */function mV(n){JM(za),Da(new Sr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return lV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Vi(FS,HS,n),Vi(FS,HS,"esm2020")}bs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};bs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};mV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),bw=n=>{const e=gV(n);return e.charAt(0).toUpperCase()+e.slice(1)},pC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),_V=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=ce.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>ce.createElement("svg",{ref:p,...yV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:pC("lucide",a),...!l&&!_V(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,v])=>ce.createElement(g,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=(n,e)=>{const t=ce.forwardRef(({className:s,...a},l)=>ce.createElement(vV,{ref:l,iconNode:e,className:pC(`lucide-${pV(bw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=bw(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],TV=_n("arrow-left",EV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Aw=_n("bell",SV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],Cw=_n("check-check",wV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],gC=_n("check",bV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],CV=_n("corner-up-left",AV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],_C=_n("ellipsis-vertical",RV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],NV=_n("eraser",IV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],yC=_n("loader-circle",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Rw=_n("log-out",xV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Gy=_n("message-square",OV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],kV=_n("send",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],VV=_n("smile",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Iw=_n("trash-2",LV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Nw=_n("user-plus",UV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Dw=_n("users",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vC=_n("x",jV),qV={apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},Qy=Kw(qV),Af=jD(Qy),gt=UM(Qy),Na=fV(Qy),BV=n=>{ce.useEffect(()=>{if(!n)return;const e=Ia(Na,`/status/${n.uid}`),t=Nr(gt,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Ia(Na,".info/connected"),c=Hy(l,d=>{if(d.val()===!1){al(t,{state:"offline",last_changed:lc()});return}iV(e).set(s).then(()=>{Gd(e,a),al(t,{state:"online",last_changed:lc()})})});return()=>c()},[n])},EC=n=>{const[e,t]=ce.useState(null);return ce.useEffect(()=>{if(!n){t(null);return}const s=Dr(Nr(gt,"users",n),c=>{c.exists()?t(d=>({...d,...c.data()})):t(null)}),a=Ia(Na,`/status/${n}`),l=Hy(a,c=>{const d=c.val();t(p=>({...p,presence:d?.state}))});return()=>{s(),l()}},[n]),e},FV=n=>{const[e,t]=ce.useState(0);return ce.useEffect(()=>{if(!n?.uid)return;const s=pi(Fn(gt,"friendships"),mn("users","array-contains",n.uid),mn("status","==","pending")),a=Dr(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},HV=n=>{const[e,t]=ce.useState(0),[s,a]=ce.useState([]);return ce.useEffect(()=>{if(!n?.uid)return;const l=pi(Fn(gt,"friendships"),mn("users","array-contains",n.uid),mn("status","==","accepted")),c=Dr(l,d=>{const p=d.docs.map(g=>g.data().users.find(v=>v!==n.uid));a(p)});return()=>c()},[n]),ce.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=pi(Fn(gt,`conversations/${p}/messages`),mn("receiverId","==",n.uid),mn("status","in",["sent","delivered"]));return Dr(g,v=>{l[p]=v.size;const T=Object.values(l).reduce((w,M)=>w+M,0);t(T)})});return()=>c.forEach(d=>d())},[s,n]),e},GV=n=>{const e=ce.useRef(n);ce.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),ce.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=SI"}),e.current=n},[n])},QV=({text:n="Preparando seu bate-papo..."})=>k.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:k.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[k.jsx(Gy,{size:80,className:"text-blue-400 mb-6 mx-auto"}),k.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),k.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[k.jsx(yC,{className:"animate-spin h-10 w-10 text-blue-400"}),k.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),YV=()=>{const n=async()=>{const e=new vs;try{const s=(await X2(Af,e)).user,a=Nr(gt,"users",s.uid);(await i1(a)).exists()||await $M(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return k.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:k.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[k.jsx(Gy,{size:80,className:"text-blue-400 mb-6 mx-auto"}),k.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),k.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),k.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[k.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},KV=({user:n,onClose:e})=>n?k.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:k.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[k.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),k.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),k.jsx("p",{className:"text-gray-400",children:n.email}),k.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,xw=({currentUser:n})=>{const[e,t]=ce.useState(""),[s,a]=ce.useState([]),[l,c]=ce.useState({}),[d,p]=ce.useState(!1),[g,v]=ce.useState(""),[T,w]=ce.useState(""),M=async G=>{if(G.preventDefault(),e.trim()!==""){p(!0),v(""),w(""),a([]);try{const K=pi(Fn(gt,"users"),mn("email","==",e.trim()),KM(1)),le=(await Xf(K)).docs.map(ae=>ae.data())[0];if(le&&le.uid!==n.uid){a([le]);const ae=pi(Fn(gt,"friendships"),mn("users","array-contains",n.uid)),ye=(await Xf(ae)).docs.find(ze=>ze.data().users.includes(le.uid));c({[le.uid]:ye?ye.data().status:"not_friends"})}else le&&le.uid===n.uid?w("Você não pode adicionar a si mesmo."):w("Nenhum usuário encontrado com este e-mail.")}catch(K){v("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(K)}finally{p(!1)}}},z=async G=>{try{await s1(Fn(gt,"friendships"),{users:[n.uid,G.uid],status:"pending",requestedBy:n.uid,createdAt:lc()}),c(K=>({...K,[G.uid]:"pending"}))}catch(K){v("Falha ao enviar pedido."),console.error(K)}};return k.jsxs("div",{className:"p-4",children:[k.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),k.jsxs("form",{onSubmit:M,className:"flex gap-2",children:[k.jsx("input",{type:"email",value:e,onChange:G=>t(G.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),k.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?k.jsx(yC,{className:"animate-spin"}):"Buscar"})]}),k.jsxs("div",{className:"mt-4 h-24",children:[g&&k.jsx("p",{className:"text-red-400",children:g}),T&&k.jsx("p",{className:"text-yellow-400",children:T}),s.map(G=>k.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("img",{src:G.photoURL,alt:G.displayName,className:"w-10 h-10 rounded-full"}),k.jsx("span",{className:"text-white",children:G.displayName})]}),k.jsxs("div",{children:[l[G.uid]==="not_friends"&&k.jsx("button",{onClick:()=>z(G),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[G.uid]==="pending"&&k.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[G.uid]==="accepted"&&k.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[G.uid]==="declined"&&k.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},G.uid))]})]})},Ow=({currentUser:n})=>{const[e,t]=ce.useState([]);ce.useEffect(()=>{if(!n?.uid)return;const a=pi(Fn(gt,"friendships"),mn("users","array-contains",n.uid),mn("status","==","pending")),l=Dr(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const v=g.users.find(w=>w!==n.uid),T=await i1(Nr(gt,"users",v));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await al(Nr(gt,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return k.jsxs("div",{className:"p-4",children:[k.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?k.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):k.jsx("ul",{className:"space-y-2",children:e.map(a=>k.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),k.jsx("span",{className:"text-white",children:a.displayName})]}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:k.jsx(gC,{size:16})}),k.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:k.jsx(vC,{size:16})})]})]},a.id))})]})},Mw=({currentUser:n,onSelectUser:e})=>{const[t,s]=ce.useState([]);return ce.useEffect(()=>{if(!n?.uid)return;const a=pi(Fn(gt,"friendships"),mn("users","array-contains",n.uid),mn("status","==","accepted")),l=Dr(a,c=>{const d=c.docs.map(p=>p.data().users.find(g=>g!==n.uid));s(d)});return()=>l()},[n.uid]),k.jsxs("div",{className:"flex-grow overflow-y-auto",children:[k.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Contatos"}),t.length===0?k.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):k.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(a=>k.jsx(XV,{friendId:a,currentUser:n,onSelectUser:e},a))})]})},XV=({friendId:n,currentUser:e,onSelectUser:t})=>{const s=EC(n),[a,l]=ce.useState(0);if(ce.useEffect(()=>{if(!n||!e)return;const d=[e.uid,n].sort().join("_"),p=pi(Fn(gt,`conversations/${d}/messages`),mn("receiverId","==",e.uid),mn("status","in",["sent","delivered"])),g=Dr(p,v=>l(v.size));return()=>g()},[n,e]),!s||!s.uid)return k.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const c=d=>{if(!d||typeof d.seconds!="number")return"Offline";const p=new Date(d.seconds*1e3),g=new Date,v=new Date(g.getFullYear(),g.getMonth(),g.getDate()),T=new Date(g.getFullYear(),g.getMonth(),g.getDate()-1),w={hour:"2-digit",minute:"2-digit"},M=p.toLocaleTimeString("pt-BR",w);if(p>=v)return`Visto por último hoje às ${M}`;if(p>=T)return`Visto por último ontem às ${M}`;{const z={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${p.toLocaleDateString("pt-BR",z)}`}};return k.jsxs("li",{onClick:()=>t(s),className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200",children:[k.jsxs("div",{className:"flex items-center gap-4 relative",children:[k.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),k.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${s.presence==="online"?"bg-green-500":"bg-gray-500"}`}),k.jsxs("div",{children:[k.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName}),k.jsx("p",{className:"text-sm text-gray-400",children:s.presence==="online"?"Online":c(s.last_changed)})]})]}),a>0&&k.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:a})]})},WV=({msg:n,isCurrentUser:e,onReply:t,onDelete:s})=>{const[a,l]=ce.useState(0),[c,d]=ce.useState(!1),p=ce.useRef(0),g=ce.useRef(!1),v=ce.useRef(null);ce.useEffect(()=>{const G=K=>{v.current&&!v.current.contains(K.target)&&d(!1)};return document.addEventListener("mousedown",G),()=>document.removeEventListener("mousedown",G)},[]);const T=G=>{p.current=G.touches[0].clientX,g.current=!0},w=G=>{if(!g.current)return;const he=G.touches[0].clientX-p.current;he>0&&!e?l(Math.min(he,70)):he<0&&e&&l(Math.max(he,-70))},M=()=>{Math.abs(a)>50&&t(),l(0),g.current=!1},z=({msg:G})=>{if(!e||!G.status)return null;switch(G.status){case"read":return k.jsx(Cw,{size:16,className:"text-sky-400"});case"delivered":return k.jsx(Cw,{size:16,className:"opacity-60"});case"sent":return k.jsx(gC,{size:16,className:"opacity-60"});default:return null}};return k.jsx("div",{className:`w-full flex items-center gap-2 ${e?"justify-end":"justify-start"}`,children:k.jsxs("div",{className:"relative group",onTouchStart:T,onTouchMove:w,onTouchEnd:M,ref:v,children:[k.jsxs("div",{className:`absolute top-1/2 -translate-y-1/2 ${e?"left-0 -translate-x-full":"right-0 translate-x-full"} transition-opacity duration-200 opacity-0 group-hover:opacity-100 flex items-center`,children:[e&&k.jsxs("div",{className:"relative",children:[k.jsx("button",{onClick:()=>d(G=>!G),className:"p-1.5 rounded-full hover:bg-gray-600",children:k.jsx(_C,{size:16})}),c&&k.jsxs("div",{className:"absolute bottom-full right-0 mb-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[k.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[k.jsx(Iw,{size:14})," Apagar para mim"]}),k.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[k.jsx(Iw,{size:14})," Apagar para todos"]})]})]}),k.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600",children:k.jsx(CV,{size:16})})]}),k.jsx("div",{className:"transition-transform duration-200 ease-out",style:{transform:`translateX(${a}px)`},children:k.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-none":"rounded-bl-none"}`,children:[n.replyTo&&!n.isDeleted&&k.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[k.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),k.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),k.jsx("p",{className:"break-words",children:n.isDeleted?"Esta mensagem foi apagada":n.text}),!n.isDeleted&&k.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[k.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),k.jsx(z,{msg:n})]})]})})]})})},$V=({onEmojiSelect:n,onClose:e})=>{const t=ce.useRef(null);ce.useEffect(()=>{const c=d=>{t.current&&!t.current.contains(d.target)&&e()};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[e]);const s={"Smileys & People":["😀","😂","❤️","👍","🙏","😢","🎉","🤔","🔥","💀","✨","😊","😍","🥰","😎","🤩","🥳","😭","😡","😱","😇","🤠","🤡","🥺","🥴","🤯","🙌","👋","🤝","💪","👀","🧠","🧑‍💻"],"Animals & Nature":["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🙈","🙉","🙊","🐔","🐧","🐦","🐤","🦆","🦅","�","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🦟","🦗","🕷️","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🐊","🐅","🐆","🦓","🦍","🦧","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🐕","🐩","🦮","🐕‍🦺","🐈","🐈‍⬛","🐓","🦃","🦤","🦚","🦜","🦢","🦩","🕊️","🐇","🦝","🦨","🦡","🦦","🦥","🐁","🐀","🐿️","🦔"],"Food & Drink":["🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🥒","🌶️","🌽","🥕","🧄","🧅","🥔","🍠","🥐","🥯","🍞","🥖","🥨","🧀","🥚","🍳","🧈","🥞","🧇","🥓","🥩","🍗","🍖","🦴","핫도그","🍔","🍟","🍕","🥪","🥙","🧆","🌮","🌯","🥗","🥘","🥫","🍝","🍜","🍲","🍛","🍣","🍱","🥟","🦪","🍤","🍙","🍚","🍘","🍥","🥠","🥮","🍢","🍡","🍧","🍨","🍦","🥧","🧁","🍰","🎂","🍮","🍭","🍬","🍫","🍿","🍩","🍪","🌰","🥜","🍯","🥛","🍼","☕","🍵","🧃","🥤","🍶","🍺","🍻","🥂","🍷","🥃","🍸","🍹","🧉","🍾","🧊","🥄","🍴","🍽️","🥣","🥡","🥢","🧂"]},[a,l]=ce.useState(Object.keys(s)[0]);return k.jsxs("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-80 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col",children:[k.jsx("div",{className:"p-1 border-b border-gray-700 flex-shrink-0",children:k.jsx("div",{className:"flex items-center gap-2 overflow-x-auto",children:Object.keys(s).map(c=>k.jsx("button",{onClick:()=>l(c),className:`px-2 py-1 text-xs rounded-md ${a===c?"bg-blue-600":"hover:bg-gray-700"}`,children:s[c][0]},c))})}),k.jsxs("div",{className:"p-2 overflow-y-auto",children:[k.jsx("h4",{className:"text-xs font-bold text-gray-400 mb-2",children:a}),k.jsx("div",{className:"grid grid-cols-8 gap-1",children:s[a].map(c=>k.jsx("button",{onClick:()=>n(c),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:c},c))})]})]})},kw=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=ce.useState([]),[l,c]=ce.useState(""),[d,p]=ce.useState(!1),[g,v]=ce.useState(!1),[T,w]=ce.useState(null),[M,z]=ce.useState(!1),[G,K]=ce.useState(!1),he=ce.useRef(null),le=ce.useRef(null),ae=[n.uid,e.uid].sort().join("_"),Re=EC(e.uid),ye=ce.useRef();ce.useEffect(()=>{ye.current=Re?.presence},[Re?.presence]),ce.useEffect(()=>{if(ye.current!=="online"&&Re?.presence==="online"){const N=pi(Fn(gt,`conversations/${ae}/messages`),mn("senderId","==",n.uid),mn("status","==","sent"));Xf(N).then(D=>{const P=hg(gt);D.docs.forEach(R=>P.update(R.ref,{status:"delivered"})),P.commit()})}},[Re?.presence,ae,n.uid]),ce.useEffect(()=>{const N=`conversations/${ae}/messages`,D=pi(Fn(gt,N),YM("createdAt","asc")),P=Dr(D,R=>{const Vt=R.docs.map(Q=>({id:Q.id,...Q.data()})).filter(Q=>!Q.deletedFor?.includes(n.uid));a(Vt);const ct=hg(gt);R.docs.forEach(Q=>{Q.data().receiverId===n.uid&&Q.data().status!=="read"&&ct.update(Q.ref,{status:"read"})}),ct.commit()});return()=>P()},[ae,n.uid]),ce.useEffect(()=>{const N=Ia(Na,`typing/${ae}/${e.uid}`),D=Hy(N,P=>p(P.exists()));return()=>D()},[ae,e.uid]),ce.useEffect(()=>{he.current?.scrollIntoView({behavior:"smooth"})},[s]);const ze=N=>{c(N.target.value);const D=Ia(Na,`typing/${ae}/${n.uid}`);N.target.value.trim().length>0?(Gd(D,!0),le.current&&clearTimeout(le.current),le.current=setTimeout(()=>vg(D),3e3)):vg(D)},V=async N=>{if(N.preventDefault(),l.trim()==="")return;const D=l;c(""),vg(Ia(Na,`typing/${ae}/${n.uid}`)),le.current&&clearTimeout(le.current);const P={text:D,createdAt:lc(),senderId:n.uid,receiverId:e.uid,status:Re?.presence==="online"?"delivered":"sent"};T&&(P.replyTo={id:T.id,text:T.text,senderName:T.senderId===n.uid?"Você":e.displayName});try{await s1(Fn(gt,`conversations/${ae}/messages`),P),w(null)}catch(R){console.error("Falha ao enviar mensagem:",R),c(D)}},A=async(N,D)=>{const P=Nr(gt,`conversations/${ae}/messages`,N);D==="self"?await al(P,{deletedFor:qS(n.uid)}):D==="all"&&await al(P,{text:"",isDeleted:!0,replyTo:null})},I=async()=>{const N=pi(Fn(gt,`conversations/${ae}/messages`)),D=await Xf(N),P=hg(gt);D.docs.forEach(R=>{P.update(R.ref,{deletedFor:qS(n.uid)})}),await P.commit(),K(!1)};return k.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[k.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[k.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:k.jsx(TV,{size:24})}),k.jsxs("div",{className:"flex items-center cursor-pointer flex-grow",onClick:()=>v(!0),children:[k.jsx("img",{src:e.photoURL,alt:e.displayName,className:"w-10 h-10 rounded-full mr-4"}),k.jsxs("div",{children:[k.jsx("h2",{className:"text-xl font-bold text-white",children:e.displayName}),k.jsx("p",{className:"text-sm text-blue-300 h-4",children:d?"Digitando...":Re?.presence==="online"?"Online":""})]})]}),k.jsxs("div",{className:"relative",children:[k.jsx("button",{onClick:()=>K(N=>!N),className:"p-2 text-gray-400 hover:text-white",children:k.jsx(_C,{})}),G&&k.jsx("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:k.jsxs("button",{onClick:I,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[k.jsx(NV,{size:14})," Limpar conversa"]})})]})]}),k.jsxs("main",{className:"flex-grow p-4 overflow-y-auto",children:[k.jsx("div",{className:"space-y-1",children:s.map(N=>k.jsx(WV,{msg:N,isCurrentUser:N.senderId===n.uid,onReply:()=>w(N),onDelete:D=>A(N.id,D)},N.id))}),k.jsx("div",{ref:he})]}),k.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[T&&k.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[k.jsxs("div",{className:"flex justify-between items-center text-sm",children:[k.jsxs("p",{className:"font-bold",children:["Respondendo a ",T.senderId===n.uid?"Você":e.displayName]}),k.jsx("button",{onClick:()=>w(null),className:"p-1",children:k.jsx(vC,{size:16})})]}),k.jsx("p",{className:"text-xs text-gray-400 truncate",children:T.text})]}),k.jsxs("div",{className:"relative flex items-center gap-2",children:[M&&k.jsx($V,{onEmojiSelect:N=>c(D=>D+N),onClose:()=>z(!1)}),k.jsx("button",{type:"button",onClick:()=>z(N=>!N),className:"p-2 text-gray-400 hover:text-white",children:k.jsx(VV,{})}),k.jsxs("form",{onSubmit:V,className:"flex-grow flex items-center gap-2",children:[k.jsx("input",{type:"text",value:l,onChange:ze,placeholder:"Digite sua mensagem...",className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),k.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim(),children:k.jsx(kV,{size:20})})]})]})]}),g&&k.jsx(KV,{user:e,onClose:()=>v(!1)})]})},ZV=({user:n,onLogout:e})=>{const[t,s]=ce.useState(null),[a,l]=ce.useState("contacts"),[c,d]=ce.useState("list"),p=FV(n),g=HV(n);GV(g),ce.useEffect(()=>{d(t?"chat":"list")},[t]);const v=z=>{s(z)},T=()=>{s(null)},w=({count:z})=>z===0?null:k.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:z}),M=({count:z})=>z===0?null:k.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[k.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),k.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]});return k.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[k.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[k.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),k.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),k.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:k.jsx(Rw,{size:20})})]}),k.jsxs("div",{className:"flex border-b border-gray-700/50",children:[k.jsxs("button",{onClick:()=>l("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[k.jsx(Dw,{className:"mx-auto"}),k.jsx(M,{count:g})]}),k.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:k.jsx(Nw,{className:"mx-auto"})}),k.jsxs("button",{onClick:()=>l("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[k.jsx(Aw,{className:"mx-auto"}),k.jsx(w,{count:p})]})]}),k.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&k.jsx(Mw,{currentUser:n,onSelectUser:v}),a==="add"&&k.jsx(xw,{currentUser:n}),a==="requests"&&k.jsx(Ow,{currentUser:n})]})]}),k.jsx("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:c==="list"?k.jsxs(k.Fragment,{children:[k.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),k.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),k.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:k.jsx(Rw,{size:20})})]}),k.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&k.jsx(Mw,{currentUser:n,onSelectUser:v}),a==="add"&&k.jsx(xw,{currentUser:n}),a==="requests"&&k.jsx(Ow,{currentUser:n})]}),k.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[k.jsxs("button",{onClick:()=>l("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:[k.jsx(Dw,{}),k.jsx(M,{count:g})]}),k.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:k.jsx(Nw,{})}),k.jsxs("button",{onClick:()=>l("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[k.jsx(Aw,{}),k.jsx(w,{count:p})]})]})]}):k.jsx(kw,{currentUser:n,otherUser:t,onLeave:T})}),k.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?k.jsx(kw,{currentUser:n,otherUser:t,onLeave:T}):k.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[k.jsx(Gy,{size:60,className:"mb-4"}),k.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione um contato"}),k.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function JV(){const[n,e]=ce.useState(null),[t,s]=ce.useState(!0);BV(n),ce.useEffect(()=>{const l=I2(Af,async c=>{if(c)e(c);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await A2(Af,__initial_auth_token):e(null)}catch(d){console.error("Falha na autenticação automática, mostrando tela de login.",d),e(null)}s(!1)});return()=>l()},[]);const a=async()=>{if(n)try{const l=Ia(Na,`/status/${n.uid}`);await Gd(l,{state:"offline",last_changed:Date.now()}),await al(Nr(gt,`/users/${n.uid}`),{state:"offline",last_changed:lc()}),await N2(Af),e(null)}catch(l){console.error("Erro ao fazer logout:",l)}};return k.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:t?k.jsx(QV,{}):n?k.jsx(ZV,{user:n,onLogout:a}):k.jsx(YV,{})})}eI.createRoot(document.getElementById("root")).render(k.jsx(ce.StrictMode,{children:k.jsx(JV,{})}));
