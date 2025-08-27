(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Qp={exports:{}},Mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function YR(){if(a0)return Mu;a0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Mu.Fragment=e,Mu.jsx=t,Mu.jsxs=t,Mu}var o0;function KR(){return o0||(o0=1,Qp.exports=YR()),Qp.exports}var D=KR(),Yp={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function XR(){if(l0)return Ie;l0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=T&&I[T]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,Q={};function K(I,X,te){this.props=I,this.context=X,this.refs=Q,this.updater=te||x}K.prototype.isReactComponent={},K.prototype.setState=function(I,X){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,X,"setState")},K.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function ge(){}ge.prototype=K.prototype;function ue(I,X,te){this.props=I,this.context=X,this.refs=Q,this.updater=te||x}var ce=ue.prototype=new ge;ce.constructor=ue,U(ce,K.prototype),ce.isPureReactComponent=!0;var Le=Array.isArray,_e={H:null,A:null,T:null,S:null,V:null},Ue=Object.prototype.hasOwnProperty;function P(I,X,te,ee,me,we){return te=we.ref,{$$typeof:n,type:I,key:X,ref:te!==void 0?te:null,props:we}}function A(I,X){return P(I.type,X,void 0,void 0,void 0,I.props)}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function M(I){var X={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(te){return X[te]})}var k=/\/+/g;function L(I,X){return typeof I=="object"&&I!==null&&I.key!=null?M(""+I.key):X.toString(36)}function N(){}function Vt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(X){I.status==="pending"&&(I.status="fulfilled",I.value=X)},function(X){I.status==="pending"&&(I.status="rejected",I.reason=X)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function dt(I,X,te,ee,me){var we=typeof I;(we==="undefined"||we==="boolean")&&(I=null);var Ae=!1;if(I===null)Ae=!0;else switch(we){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(I.$$typeof){case n:case e:Ae=!0;break;case v:return Ae=I._init,dt(Ae(I._payload),X,te,ee,me)}}if(Ae)return me=me(I),Ae=ee===""?"."+L(I,0):ee,Le(me)?(te="",Ae!=null&&(te=Ae.replace(k,"$&/")+"/"),dt(me,X,te,"",function(yi){return yi})):me!=null&&(C(me)&&(me=A(me,te+(me.key==null||I&&I.key===me.key?"":(""+me.key).replace(k,"$&/")+"/")+Ae)),X.push(me)),1;Ae=0;var Ht=ee===""?".":ee+":";if(Le(I))for(var at=0;at<I.length;at++)ee=I[at],we=Ht+L(ee,at),Ae+=dt(ee,X,te,we,me);else if(at=S(I),typeof at=="function")for(I=at.call(I),at=0;!(ee=I.next()).done;)ee=ee.value,we=Ht+L(ee,at++),Ae+=dt(ee,X,te,we,me);else if(we==="object"){if(typeof I.then=="function")return dt(Vt(I),X,te,ee,me);throw X=String(I),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function G(I,X,te){if(I==null)return I;var ee=[],me=0;return dt(I,ee,"","",function(we){return X.call(te,we,me++)}),ee}function se(I){if(I._status===-1){var X=I._result;X=X(),X.then(function(te){(I._status===0||I._status===-1)&&(I._status=1,I._result=te)},function(te){(I._status===0||I._status===-1)&&(I._status=2,I._result=te)}),I._status===-1&&(I._status=0,I._result=X)}if(I._status===1)return I._result.default;throw I._result}var fe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function oe(){}return Ie.Children={map:G,forEach:function(I,X,te){G(I,function(){X.apply(this,arguments)},te)},count:function(I){var X=0;return G(I,function(){X++}),X},toArray:function(I){return G(I,function(X){return X})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ie.Component=K,Ie.Fragment=t,Ie.Profiler=a,Ie.PureComponent=ue,Ie.StrictMode=s,Ie.Suspense=p,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e,Ie.__COMPILER_RUNTIME={__proto__:null,c:function(I){return _e.H.useMemoCache(I)}},Ie.cache=function(I){return function(){return I.apply(null,arguments)}},Ie.cloneElement=function(I,X,te){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var ee=U({},I.props),me=I.key,we=void 0;if(X!=null)for(Ae in X.ref!==void 0&&(we=void 0),X.key!==void 0&&(me=""+X.key),X)!Ue.call(X,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&X.ref===void 0||(ee[Ae]=X[Ae]);var Ae=arguments.length-2;if(Ae===1)ee.children=te;else if(1<Ae){for(var Ht=Array(Ae),at=0;at<Ae;at++)Ht[at]=arguments[at+2];ee.children=Ht}return P(I.type,me,void 0,void 0,we,ee)},Ie.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},Ie.createElement=function(I,X,te){var ee,me={},we=null;if(X!=null)for(ee in X.key!==void 0&&(we=""+X.key),X)Ue.call(X,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(me[ee]=X[ee]);var Ae=arguments.length-2;if(Ae===1)me.children=te;else if(1<Ae){for(var Ht=Array(Ae),at=0;at<Ae;at++)Ht[at]=arguments[at+2];me.children=Ht}if(I&&I.defaultProps)for(ee in Ae=I.defaultProps,Ae)me[ee]===void 0&&(me[ee]=Ae[ee]);return P(I,we,void 0,void 0,null,me)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(I){return{$$typeof:d,render:I}},Ie.isValidElement=C,Ie.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:se}},Ie.memo=function(I,X){return{$$typeof:g,type:I,compare:X===void 0?null:X}},Ie.startTransition=function(I){var X=_e.T,te={};_e.T=te;try{var ee=I(),me=_e.S;me!==null&&me(te,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(oe,fe)}catch(we){fe(we)}finally{_e.T=X}},Ie.unstable_useCacheRefresh=function(){return _e.H.useCacheRefresh()},Ie.use=function(I){return _e.H.use(I)},Ie.useActionState=function(I,X,te){return _e.H.useActionState(I,X,te)},Ie.useCallback=function(I,X){return _e.H.useCallback(I,X)},Ie.useContext=function(I){return _e.H.useContext(I)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(I,X){return _e.H.useDeferredValue(I,X)},Ie.useEffect=function(I,X,te){var ee=_e.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(I,X)},Ie.useId=function(){return _e.H.useId()},Ie.useImperativeHandle=function(I,X,te){return _e.H.useImperativeHandle(I,X,te)},Ie.useInsertionEffect=function(I,X){return _e.H.useInsertionEffect(I,X)},Ie.useLayoutEffect=function(I,X){return _e.H.useLayoutEffect(I,X)},Ie.useMemo=function(I,X){return _e.H.useMemo(I,X)},Ie.useOptimistic=function(I,X){return _e.H.useOptimistic(I,X)},Ie.useReducer=function(I,X,te){return _e.H.useReducer(I,X,te)},Ie.useRef=function(I){return _e.H.useRef(I)},Ie.useState=function(I){return _e.H.useState(I)},Ie.useSyncExternalStore=function(I,X,te){return _e.H.useSyncExternalStore(I,X,te)},Ie.useTransition=function(){return _e.H.useTransition()},Ie.version="19.1.1",Ie}var u0;function l_(){return u0||(u0=1,Yp.exports=XR()),Yp.exports}var he=l_(),Kp={exports:{}},ku={},Xp={exports:{}},Wp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function WR(){return c0||(c0=1,(function(n){function e(G,se){var fe=G.length;G.push(se);e:for(;0<fe;){var oe=fe-1>>>1,I=G[oe];if(0<a(I,se))G[oe]=se,G[fe]=I,fe=oe;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var se=G[0],fe=G.pop();if(fe!==se){G[0]=fe;e:for(var oe=0,I=G.length,X=I>>>1;oe<X;){var te=2*(oe+1)-1,ee=G[te],me=te+1,we=G[me];if(0>a(ee,fe))me<I&&0>a(we,ee)?(G[oe]=we,G[me]=fe,oe=me):(G[oe]=ee,G[te]=fe,oe=te);else if(me<I&&0>a(we,fe))G[oe]=we,G[me]=fe,oe=me;else break e}}return se}function a(G,se){var fe=G.sortIndex-se.sortIndex;return fe!==0?fe:G.id-se.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],v=1,T=null,S=3,x=!1,U=!1,Q=!1,K=!1,ge=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function Le(G){for(var se=t(g);se!==null;){if(se.callback===null)s(g);else if(se.startTime<=G)s(g),se.sortIndex=se.expirationTime,e(p,se);else break;se=t(g)}}function _e(G){if(Q=!1,Le(G),!U)if(t(p)!==null)U=!0,Ue||(Ue=!0,L());else{var se=t(g);se!==null&&dt(_e,se.startTime-G)}}var Ue=!1,P=-1,A=5,C=-1;function M(){return K?!0:!(n.unstable_now()-C<A)}function k(){if(K=!1,Ue){var G=n.unstable_now();C=G;var se=!0;try{e:{U=!1,Q&&(Q=!1,ue(P),P=-1),x=!0;var fe=S;try{t:{for(Le(G),T=t(p);T!==null&&!(T.expirationTime>G&&M());){var oe=T.callback;if(typeof oe=="function"){T.callback=null,S=T.priorityLevel;var I=oe(T.expirationTime<=G);if(G=n.unstable_now(),typeof I=="function"){T.callback=I,Le(G),se=!0;break t}T===t(p)&&s(p),Le(G)}else s(p);T=t(p)}if(T!==null)se=!0;else{var X=t(g);X!==null&&dt(_e,X.startTime-G),se=!1}}break e}finally{T=null,S=fe,x=!1}se=void 0}}finally{se?L():Ue=!1}}}var L;if(typeof ce=="function")L=function(){ce(k)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Vt=N.port2;N.port1.onmessage=k,L=function(){Vt.postMessage(null)}}else L=function(){ge(k,0)};function dt(G,se){P=ge(function(){G(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(G){switch(S){case 1:case 2:case 3:var se=3;break;default:se=S}var fe=S;S=se;try{return G()}finally{S=fe}},n.unstable_requestPaint=function(){K=!0},n.unstable_runWithPriority=function(G,se){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var fe=S;S=G;try{return se()}finally{S=fe}},n.unstable_scheduleCallback=function(G,se,fe){var oe=n.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?oe+fe:oe):fe=oe,G){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=fe+I,G={id:v++,callback:se,priorityLevel:G,startTime:fe,expirationTime:I,sortIndex:-1},fe>oe?(G.sortIndex=fe,e(g,G),t(p)===null&&G===t(g)&&(Q?(ue(P),P=-1):Q=!0,dt(_e,fe-oe))):(G.sortIndex=I,e(p,G),U||x||(U=!0,Ue||(Ue=!0,L()))),G},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(G){var se=S;return function(){var fe=S;S=se;try{return G.apply(this,arguments)}finally{S=fe}}}})(Wp)),Wp}var h0;function $R(){return h0||(h0=1,Xp.exports=WR()),Xp.exports}var $p={exports:{}},hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function ZR(){if(f0)return hn;f0=1;var n=l_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,hn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},hn.flushSync=function(p){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=v,s.d.f()}},hn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},hn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},hn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:x}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},hn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},hn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=d(v,g.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},hn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},hn.requestFormReset=function(p){s.d.r(p)},hn.unstable_batchedUpdates=function(p,g){return p(g)},hn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},hn.useFormStatus=function(){return c.H.useHostTransitionStatus()},hn.version="19.1.1",hn}var d0;function JR(){if(d0)return $p.exports;d0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),$p.exports=ZR(),$p.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function eI(){if(m0)return ku;m0=1;var n=$R(),e=l_(),t=JR();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,w=f.child;w;){if(w===o){E=!0,o=f,u=m;break}if(w===u){E=!0,u=f,o=m;break}w=w.sibling}if(!E){for(w=m.child;w;){if(w===o){E=!0,o=m,u=f;break}if(w===u){E=!0,u=m,o=f;break}w=w.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var N=Symbol.for("react.client.reference");function Vt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===N?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case K:return"Profiler";case Q:return"StrictMode";case _e:return"Suspense";case Ue:return"SuspenseList";case C:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case x:return"Portal";case ce:return(i.displayName||"Context")+".Provider";case ue:return(i._context.displayName||"Context")+".Consumer";case Le:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:Vt(i.type)||"Memo";case A:r=i._payload,i=i._init;try{return Vt(i(r))}catch{}}return null}var dt=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},oe=[],I=-1;function X(i){return{current:i}}function te(i){0>I||(i.current=oe[I],oe[I]=null,I--)}function ee(i,r){I++,oe[I]=i.current,i.current=r}var me=X(null),we=X(null),Ae=X(null),Ht=X(null);function at(i,r){switch(ee(Ae,r),ee(we,i),ee(me,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?kT(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=kT(r),i=PT(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}te(me),ee(me,i)}function yi(){te(me),te(we),te(Ae)}function Ls(i){i.memoizedState!==null&&ee(Ht,i);var r=me.current,o=PT(r,i.type);r!==o&&(ee(we,i),ee(me,o))}function Yi(i){we.current===i&&(te(me),te(we)),Ht.current===i&&(te(Ht),Iu._currentValue=fe)}var Ur=Object.prototype.hasOwnProperty,zr=n.unstable_scheduleCallback,jr=n.unstable_cancelCallback,Al=n.unstable_shouldYield,Pc=n.unstable_requestPaint,Hn=n.unstable_now,Qd=n.unstable_getCurrentPriorityLevel,Cl=n.unstable_ImmediatePriority,Qa=n.unstable_UserBlockingPriority,qr=n.unstable_NormalPriority,Yd=n.unstable_LowPriority,Ya=n.unstable_IdlePriority,Rl=n.log,Vc=n.unstable_setDisableYieldValue,yt=null,We=null;function On(i){if(typeof Rl=="function"&&Vc(i),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(yt,i)}catch{}}var un=Math.clz32?Math.clz32:Br,Lc=Math.log,Kd=Math.LN2;function Br(i){return i>>>=0,i===0?32:31-(Lc(i)/Kd|0)|0}var Fr=256,Hr=4194304;function ri(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Ka(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var w=u&134217727;return w!==0?(u=w&~m,u!==0?f=ri(u):(E&=w,E!==0?f=ri(E):o||(o=w&~i,o!==0&&(f=ri(o))))):(w=u&~m,w!==0?f=ri(w):E!==0?f=ri(E):o||(o=u&~i,o!==0&&(f=ri(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Gr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Il(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nl(){var i=Fr;return Fr<<=1,(Fr&4194048)===0&&(Fr=256),i}function xl(){var i=Hr;return Hr<<=1,(Hr&62914560)===0&&(Hr=4194304),i}function Ki(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Xi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Dl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,R=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var Y=31-un(o),Z=1<<Y;w[Y]=0,R[Y]=-1;var B=q[Y];if(B!==null)for(q[Y]=null,Y=0;Y<B.length;Y++){var F=B[Y];F!==null&&(F.lane&=-536870913)}o&=~Z}u!==0&&vi(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function vi(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-un(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Ol(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-un(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Us(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Xa(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function zs(){var i=se.p;return i!==0?i:(i=window.event,i===void 0?32:e0(i.type))}function Uc(i,r){var o=se.p;try{return se.p=i,r()}finally{se.p=o}}var mt=Math.random().toString(36).slice(2),Lt="__reactFiber$"+mt,Rt="__reactProps$"+mt,Gn="__reactContainer$"+mt,Ml="__reactEvents$"+mt,Xd="__reactListeners$"+mt,js="__reactHandles$"+mt,zc="__reactResources$"+mt,Qr="__reactMarker$"+mt;function qs(i){delete i[Lt],delete i[Rt],delete i[Ml],delete i[Xd],delete i[js]}function Wi(i){var r=i[Lt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Gn]||o[Lt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=zT(i);i!==null;){if(o=i[Lt])return o;i=zT(i)}return r}i=o,o=i.parentNode}return null}function Ei(i){if(i=i[Lt]||i[Gn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Ti(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function yn(i){var r=i[zc];return r||(r=i[zc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function St(i){i[Qr]=!0}var kl=new Set,Wa={};function ai(i,r){$i(i,r),$i(i+"Capture",r)}function $i(i,r){for(Wa[i]=r,i=0;i<r.length;i++)kl.add(r[i])}var jc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},Yr={};function Bc(i){return Ur.call(Yr,i)?!0:Ur.call(qc,i)?!1:jc.test(i)?Yr[i]=!0:(qc[i]=!0,!1)}function Bs(i,r,o){if(Bc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Si(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function en(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Kr,Fc;function Zi(i){if(Kr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Kr=r&&r[1]||"",Fc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kr+i+Fc}var $a=!1;function Za(i,r){if(!i||$a)return"";$a=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(F){var B=F}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(F){B=F}i.call(Z.prototype)}}else{try{throw Error()}catch(F){B=F}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],w=m[1];if(E&&w){var R=E.split(`
`),q=w.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===q.length)for(u=R.length-1,f=q.length-1;1<=u&&0<=f&&R[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==q[f]){var Y=`
`+R[u].replace(" at new "," at ");return i.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",i.displayName)),Y}while(1<=u&&0<=f);break}}}finally{$a=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Zi(o):""}function Pl(i){switch(i.tag){case 26:case 27:case 5:return Zi(i.type);case 16:return Zi("Lazy");case 13:return Zi("Suspense");case 19:return Zi("SuspenseList");case 0:case 15:return Za(i.type,!1);case 11:return Za(i.type.render,!1);case 1:return Za(i.type,!0);case 31:return Zi("Activity");default:return""}}function Ja(i){try{var r="";do r+=Pl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function vn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Vl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Wd(i){var r=Vl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function eo(i){i._valueTracker||(i._valueTracker=Wd(i))}function Ll(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Vl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Xr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var $d=/[\n"\\]/g;function It(i){return i.replace($d,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mn(i,r,o,u,f,m,E,w){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+vn(r)):i.value!==""+vn(r)&&(i.value=""+vn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Fs(i,E,vn(r)):o!=null?Fs(i,E,vn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+vn(w):i.removeAttribute("name")}function Wr(i,r,o,u,f,m,E,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+vn(o):"",r=r!=null?""+vn(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=w?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Fs(i,r,o){r==="number"&&Xr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Ji(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+vn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function et(i,r,o){if(r!=null&&(r=""+vn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+vn(o):""}function $r(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(dt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=vn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Qn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var Zr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||Zr.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Ul(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Hc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Hc(i,m,r[m])}function zl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function to(i){return Jd.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var es=null;function Yn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ts=null,ns=null;function jl(i){var r=Ei(i);if(r&&(i=r.stateNode)){var o=i[Rt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Mn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+It(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Rt]||null;if(!f)throw Error(s(90));Mn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Ll(u)}break e;case"textarea":et(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Ji(i,!!o.multiple,r,!1)}}}var wi=!1;function Gc(i,r,o){if(wi)return i(r,o);wi=!0;try{var u=i(r);return u}finally{if(wi=!1,(ts!==null||ns!==null)&&(Uh(),ts&&(r=ts,i=ns,ns=ts=null,jl(r),i)))for(r=0;r<i.length;r++)jl(i[r])}}function Jr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Rt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kn=!1;if(oi)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Kn=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Kn=!1}var bi=null,Hs=null,is=null;function ql(){if(is)return is;var i,r=Hs,o=r.length,u,f="value"in bi?bi.value:bi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return is=f.slice(i,1<u?1-u:void 0)}function Ai(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ci(){return!0}function Bl(){return!1}function Gt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ci:Bl,this.isPropagationStopped=Bl,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),r}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=Gt(Ke),ta=v({},Ke,{view:0,detail:0}),Qc=Gt(ta),io,so,Ri,na=v({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ri&&(Ri&&i.type==="mousemove"?(io=i.screenX-Ri.screenX,so=i.screenY-Ri.screenY):so=io=0,Ri=i),io)},movementY:function(i){return"movementY"in i?i.movementY:so}}),Xn=Gt(na),Yc=v({},na,{dataTransfer:0}),em=Gt(Yc),ia=v({},ta,{relatedTarget:0}),ro=Gt(ia),Fl=v({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),ao=Gt(Fl),Kc=v({},Ke,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),oo=Gt(Kc),tm=v({},Ke,{data:0}),Hl=Gt(tm),sa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Wc[i])?!!r[i]:!1}function ra(){return Gl}var $c=v({},ta,{key:function(i){if(i.key){var r=sa[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ai(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Xc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(i){return i.type==="keypress"?Ai(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ai(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),lo=Gt($c),Zc=v({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ql=Gt(Zc),ss=v({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),Jc=Gt(ss),eh=v({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=Gt(eh),nh=v({},na,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),uo=Gt(nh),En=v({},Ke,{newState:0,oldState:0}),ih=Gt(En),sh=[9,13,27,32],Ii=oi&&"CompositionEvent"in window,h=null;oi&&"documentMode"in document&&(h=document.documentMode);var _=oi&&"TextEvent"in window&&!h,y=oi&&(!Ii||h&&8<h&&11>=h),b=" ",z=!1;function H(i,r){switch(i){case"keyup":return sh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ne(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qe=!1;function Ut(i,r){switch(i){case"compositionend":return ne(r);case"keypress":return r.which!==32?null:(z=!0,b);case"textInput":return i=r.data,i===b&&z?null:i;default:return null}}function Be(i,r){if(qe)return i==="compositionend"||!Ii&&H(i,r)?(i=ql(),is=Hs=bi=null,qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Qt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Qt[i.type]:r==="textarea"}function rs(i,r,o,u){ts?ns?ns.push(u):ns=[u]:ts=u,r=Hh(r,"onChange"),0<r.length&&(o=new no("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var tn=null,Ni=null;function Yl(i){NT(i,0)}function rh(i){var r=Ti(i);if(Ll(r))return i}function Wy(i,r){if(i==="change")return r}var $y=!1;if(oi){var nm;if(oi){var im="oninput"in document;if(!im){var Zy=document.createElement("div");Zy.setAttribute("oninput","return;"),im=typeof Zy.oninput=="function"}nm=im}else nm=!1;$y=nm&&(!document.documentMode||9<document.documentMode)}function Jy(){tn&&(tn.detachEvent("onpropertychange",ev),Ni=tn=null)}function ev(i){if(i.propertyName==="value"&&rh(Ni)){var r=[];rs(r,Ni,i,Yn(i)),Gc(Yl,r)}}function wC(i,r,o){i==="focusin"?(Jy(),tn=r,Ni=o,tn.attachEvent("onpropertychange",ev)):i==="focusout"&&Jy()}function bC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return rh(Ni)}function AC(i,r){if(i==="click")return rh(r)}function CC(i,r){if(i==="input"||i==="change")return rh(r)}function RC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var kn=typeof Object.is=="function"?Object.is:RC;function Kl(i,r){if(kn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Ur.call(r,f)||!kn(i[f],r[f]))return!1}return!0}function tv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function nv(i,r){var o=tv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tv(o)}}function iv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?iv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function sv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Xr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Xr(i.document)}return r}function sm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var IC=oi&&"documentMode"in document&&11>=document.documentMode,co=null,rm=null,Xl=null,am=!1;function rv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;am||co==null||co!==Xr(u)||(u=co,"selectionStart"in u&&sm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xl&&Kl(Xl,u)||(Xl=u,u=Hh(rm,"onSelect"),0<u.length&&(r=new no("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=co)))}function aa(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var ho={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},om={},av={};oi&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function oa(i){if(om[i])return om[i];if(!ho[i])return i;var r=ho[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in av)return om[i]=r[o];return i}var ov=oa("animationend"),lv=oa("animationiteration"),uv=oa("animationstart"),NC=oa("transitionrun"),xC=oa("transitionstart"),DC=oa("transitioncancel"),cv=oa("transitionend"),hv=new Map,lm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lm.push("scrollEnd");function li(i,r){hv.set(i,r),ai(r,[i])}var fv=new WeakMap;function Wn(i,r){if(typeof i=="object"&&i!==null){var o=fv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Ja(r)},fv.set(i,r),r)}return{value:i,source:r,stack:Ja(r)}}var $n=[],fo=0,um=0;function ah(){for(var i=fo,r=um=fo=0;r<i;){var o=$n[r];$n[r++]=null;var u=$n[r];$n[r++]=null;var f=$n[r];$n[r++]=null;var m=$n[r];if($n[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&dv(o,f,m)}}function oh(i,r,o,u){$n[fo++]=i,$n[fo++]=r,$n[fo++]=o,$n[fo++]=u,um|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function cm(i,r,o,u){return oh(i,r,o,u),lh(i)}function mo(i,r){return oh(i,null,null,r),lh(i)}function dv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-un(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function lh(i){if(50<Eu)throw Eu=0,gp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var po={};function OC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(i,r,o,u){return new OC(i,r,o,u)}function hm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function as(i,r){var o=i.alternate;return o===null?(o=Pn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function mv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function uh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")hm(i)&&(E=1);else if(typeof i=="string")E=kR(i,o,me.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case C:return i=Pn(31,o,r,f),i.elementType=C,i.lanes=m,i;case U:return la(o.children,f,m,r);case Q:E=8,f|=24;break;case K:return i=Pn(12,o,r,f|2),i.elementType=K,i.lanes=m,i;case _e:return i=Pn(13,o,r,f),i.elementType=_e,i.lanes=m,i;case Ue:return i=Pn(19,o,r,f),i.elementType=Ue,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ge:case ce:E=10;break e;case ue:E=9;break e;case Le:E=11;break e;case P:E=14;break e;case A:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Pn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function la(i,r,o,u){return i=Pn(7,i,u,r),i.lanes=o,i}function fm(i,r,o){return i=Pn(6,i,null,r),i.lanes=o,i}function dm(i,r,o){return r=Pn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var go=[],_o=0,ch=null,hh=0,Zn=[],Jn=0,ua=null,os=1,ls="";function ca(i,r){go[_o++]=hh,go[_o++]=ch,ch=i,hh=r}function pv(i,r,o){Zn[Jn++]=os,Zn[Jn++]=ls,Zn[Jn++]=ua,ua=i;var u=os;i=ls;var f=32-un(u)-1;u&=~(1<<f),o+=1;var m=32-un(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,os=1<<32-un(r)+f|o<<f|u,ls=m+i}else os=1<<m|o<<f|u,ls=i}function mm(i){i.return!==null&&(ca(i,1),pv(i,1,0))}function pm(i){for(;i===ch;)ch=go[--_o],go[_o]=null,hh=go[--_o],go[_o]=null;for(;i===ua;)ua=Zn[--Jn],Zn[Jn]=null,ls=Zn[--Jn],Zn[Jn]=null,os=Zn[--Jn],Zn[Jn]=null}var Tn=null,vt=null,Qe=!1,ha=null,xi=!1,gm=Error(s(519));function fa(i){var r=Error(s(418,""));throw Zl(Wn(r,i)),gm}function gv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Lt]=i,r[Rt]=u,o){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(o=0;o<Su.length;o++)Pe(Su[o],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Pe("invalid",r),Wr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),eo(r);break;case"select":Pe("invalid",r);break;case"textarea":Pe("invalid",r),$r(r,u.value,u.defaultValue,u.children),eo(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||MT(r.textContent,o)?(u.popover!=null&&(Pe("beforetoggle",r),Pe("toggle",r)),u.onScroll!=null&&Pe("scroll",r),u.onScrollEnd!=null&&Pe("scrollend",r),u.onClick!=null&&(r.onclick=Gh),r=!0):r=!1,r||fa(i)}function _v(i){for(Tn=i.return;Tn;)switch(Tn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Tn=Tn.return}}function Wl(i){if(i!==Tn)return!1;if(!Qe)return _v(i),Qe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Op(i.type,i.memoizedProps)),o=!o),o&&vt&&fa(i),_v(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){vt=ci(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}vt=null}}else r===27?(r=vt,ar(i.type)?(i=Vp,Vp=null,vt=i):vt=r):vt=Tn?ci(i.stateNode.nextSibling):null;return!0}function $l(){vt=Tn=null,Qe=!1}function yv(){var i=ha;return i!==null&&(bn===null?bn=i:bn.push.apply(bn,i),ha=null),i}function Zl(i){ha===null?ha=[i]:ha.push(i)}var _m=X(null),da=null,us=null;function Gs(i,r,o){ee(_m,r._currentValue),r._currentValue=o}function cs(i){i._currentValue=_m.current,te(_m)}function ym(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function vm(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var R=0;R<r.length;R++)if(w.context===r[R]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),ym(m.return,o,i),u||(E=null);break e}m=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),ym(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Jl(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=f.type;kn(f.pendingProps.value,E.value)||(i!==null?i.push(w):i=[w])}}else if(f===Ht.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Iu):i=[Iu])}f=f.return}i!==null&&vm(r,i,o,u),r.flags|=262144}function fh(i){for(i=i.firstContext;i!==null;){if(!kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ma(i){da=i,us=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function cn(i){return vv(da,i)}function dh(i,r){return da===null&&ma(i),vv(i,r)}function vv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},us===null){if(i===null)throw Error(s(308));us=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else us=us.next=r;return o}var MC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},kC=n.unstable_scheduleCallback,PC=n.unstable_NormalPriority,jt={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Em(){return{controller:new MC,data:new Map,refCount:0}}function eu(i){i.refCount--,i.refCount===0&&kC(PC,function(){i.controller.abort()})}var tu=null,Tm=0,yo=0,vo=null;function VC(i,r){if(tu===null){var o=tu=[];Tm=0,yo=wp(),vo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Tm++,r.then(Ev,Ev),r}function Ev(){if(--Tm===0&&tu!==null){vo!==null&&(vo.status="fulfilled");var i=tu;tu=null,yo=0,vo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function LC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Tv=G.S;G.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&VC(i,r),Tv!==null&&Tv(i,r)};var pa=X(null);function Sm(){var i=pa.current;return i!==null?i:ot.pooledCache}function mh(i,r){r===null?ee(pa,pa.current):ee(pa,r.pool)}function Sv(){var i=Sm();return i===null?null:{parent:jt._currentValue,pool:i}}var nu=Error(s(460)),wv=Error(s(474)),ph=Error(s(542)),wm={then:function(){}};function bv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function gh(){}function Av(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(gh,gh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Rv(i),i;default:if(typeof r.status=="string")r.then(gh,gh);else{if(i=ot,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Rv(i),i}throw iu=r,nu}}var iu=null;function Cv(){if(iu===null)throw Error(s(459));var i=iu;return iu=null,i}function Rv(i){if(i===nu||i===ph)throw Error(s(483))}var Qs=!1;function bm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Am(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ys(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ks(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=lh(i),dv(i,null,o),r}return oh(i,u,r,o),lh(i)}function su(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ol(i,o)}}function Cm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Rm=!1;function ru(){if(Rm){var i=vo;if(i!==null)throw i}}function au(i,r,o,u){Rm=!1;var f=i.updateQueue;Qs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var R=w,q=R.next;R.next=null,E===null?m=q:E.next=q,E=R;var Y=i.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==E&&(w===null?Y.firstBaseUpdate=q:w.next=q,Y.lastBaseUpdate=R))}if(m!==null){var Z=f.baseState;E=0,Y=q=R=null,w=m;do{var B=w.lane&-536870913,F=B!==w.lane;if(F?(Fe&B)===B:(u&B)===B){B!==0&&B===yo&&(Rm=!0),Y!==null&&(Y=Y.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Te=i,ye=w;B=r;var it=o;switch(ye.tag){case 1:if(Te=ye.payload,typeof Te=="function"){Z=Te.call(it,Z,B);break e}Z=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=ye.payload,B=typeof Te=="function"?Te.call(it,Z,B):Te,B==null)break e;Z=v({},Z,B);break e;case 2:Qs=!0}}B=w.callback,B!==null&&(i.flags|=64,F&&(i.flags|=8192),F=f.callbacks,F===null?f.callbacks=[B]:F.push(B))}else F={lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(q=Y=F,R=Z):Y=Y.next=F,E|=B;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;F=w,w=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);Y===null&&(R=Z),f.baseState=R,f.firstBaseUpdate=q,f.lastBaseUpdate=Y,m===null&&(f.shared.lanes=0),nr|=E,i.lanes=E,i.memoizedState=Z}}function Iv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Nv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Iv(o[i],r)}var Eo=X(null),_h=X(0);function xv(i,r){i=_s,ee(_h,i),ee(Eo,r),_s=i|r.baseLanes}function Im(){ee(_h,_s),ee(Eo,Eo.current)}function Nm(){_s=_h.current,te(Eo),te(_h)}var Xs=0,Ne=null,tt=null,Nt=null,yh=!1,To=!1,ga=!1,vh=0,ou=0,So=null,UC=0;function wt(){throw Error(s(321))}function xm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!kn(i[o],r[o]))return!1;return!0}function Dm(i,r,o,u,f,m){return Xs=m,Ne=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,G.H=i===null||i.memoizedState===null?dE:mE,ga=!1,m=o(u,f),ga=!1,To&&(m=Ov(r,o,u,f)),Dv(i),m}function Dv(i){G.H=Ah;var r=tt!==null&&tt.next!==null;if(Xs=0,Nt=tt=Ne=null,yh=!1,ou=0,So=null,r)throw Error(s(300));i===null||Yt||(i=i.dependencies,i!==null&&fh(i)&&(Yt=!0))}function Ov(i,r,o,u){Ne=i;var f=0;do{if(To&&(So=null),ou=0,To=!1,25<=f)throw Error(s(301));if(f+=1,Nt=tt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}G.H=GC,m=r(o,u)}while(To);return m}function zC(){var i=G.H,r=i.useState()[0];return r=typeof r.then=="function"?lu(r):r,i=i.useState()[0],(tt!==null?tt.memoizedState:null)!==i&&(Ne.flags|=1024),r}function Om(){var i=vh!==0;return vh=0,i}function Mm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function km(i){if(yh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yh=!1}Xs=0,Nt=tt=Ne=null,To=!1,ou=vh=0,So=null}function Sn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Ne.memoizedState=Nt=i:Nt=Nt.next=i,Nt}function xt(){if(tt===null){var i=Ne.alternate;i=i!==null?i.memoizedState:null}else i=tt.next;var r=Nt===null?Ne.memoizedState:Nt.next;if(r!==null)Nt=r,tt=i;else{if(i===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));tt=i,i={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},Nt===null?Ne.memoizedState=Nt=i:Nt=Nt.next=i}return Nt}function Pm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lu(i){var r=ou;return ou+=1,So===null&&(So=[]),i=Av(So,i,r),r=Ne,(Nt===null?r.memoizedState:Nt.next)===null&&(r=r.alternate,G.H=r===null||r.memoizedState===null?dE:mE),i}function Eh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return lu(i);if(i.$$typeof===ce)return cn(i)}throw Error(s(438,String(i)))}function Vm(i){var r=null,o=Ne.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Pm(),Ne.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=M;return r.index++,o}function hs(i,r){return typeof r=="function"?r(i):r}function Th(i){var r=xt();return Lm(r,tt,i)}function Lm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var w=E=null,R=null,q=r,Y=!1;do{var Z=q.lane&-536870913;if(Z!==q.lane?(Fe&Z)===Z:(Xs&Z)===Z){var B=q.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Z===yo&&(Y=!0);else if((Xs&B)===B){q=q.next,B===yo&&(Y=!0);continue}else Z={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},R===null?(w=R=Z,E=m):R=R.next=Z,Ne.lanes|=B,nr|=B;Z=q.action,ga&&o(m,Z),m=q.hasEagerState?q.eagerState:o(m,Z)}else B={lane:Z,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},R===null?(w=R=B,E=m):R=R.next=B,Ne.lanes|=Z,nr|=Z;q=q.next}while(q!==null&&q!==r);if(R===null?E=m:R.next=w,!kn(m,i.memoizedState)&&(Yt=!0,Y&&(o=vo,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=R,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Um(i){var r=xt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);kn(m,r.memoizedState)||(Yt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Mv(i,r,o){var u=Ne,f=xt(),m=Qe;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!kn((tt||f).memoizedState,o);E&&(f.memoizedState=o,Yt=!0),f=f.queue;var w=Vv.bind(null,u,f,i);if(uu(2048,8,w,[i]),f.getSnapshot!==r||E||Nt!==null&&Nt.memoizedState.tag&1){if(u.flags|=2048,wo(9,Sh(),Pv.bind(null,u,f,o,r),null),ot===null)throw Error(s(349));m||(Xs&124)!==0||kv(u,r,o)}return o}function kv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ne.updateQueue,r===null?(r=Pm(),Ne.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Pv(i,r,o,u){r.value=o,r.getSnapshot=u,Lv(r)&&Uv(i)}function Vv(i,r,o){return o(function(){Lv(r)&&Uv(i)})}function Lv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!kn(i,o)}catch{return!0}}function Uv(i){var r=mo(i,2);r!==null&&jn(r,i,2)}function zm(i){var r=Sn();if(typeof i=="function"){var o=i;if(i=o(),ga){On(!0);try{o()}finally{On(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:i},r}function zv(i,r,o,u){return i.baseState=o,Lm(i,tt,typeof u=="function"?u:hs)}function jC(i,r,o,u,f){if(bh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};G.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,jv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function jv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=G.T,E={};G.T=E;try{var w=o(f,u),R=G.S;R!==null&&R(E,w),qv(i,r,w)}catch(q){jm(i,r,q)}finally{G.T=m}}else try{m=o(f,u),qv(i,r,m)}catch(q){jm(i,r,q)}}function qv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Bv(i,r,u)},function(u){return jm(i,r,u)}):Bv(i,r,o)}function Bv(i,r,o){r.status="fulfilled",r.value=o,Fv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,jv(i,o)))}function jm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Fv(r),r=r.next;while(r!==u)}i.action=null}function Fv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Hv(i,r){return r}function Gv(i,r){if(Qe){var o=ot.formState;if(o!==null){e:{var u=Ne;if(Qe){if(vt){t:{for(var f=vt,m=xi;f.nodeType!==8;){if(!m){f=null;break t}if(f=ci(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){vt=ci(f.nextSibling),u=f.data==="F!";break e}}fa(u)}u=!1}u&&(r=o[0])}}return o=Sn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hv,lastRenderedState:r},o.queue=u,o=cE.bind(null,Ne,u),u.dispatch=o,u=zm(!1),m=Gm.bind(null,Ne,!1,u.queue),u=Sn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=jC.bind(null,Ne,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function Qv(i){var r=xt();return Yv(r,tt,i)}function Yv(i,r,o){if(r=Lm(i,r,Hv)[0],i=Th(hs)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=lu(r)}catch(E){throw E===nu?ph:E}else u=r;r=xt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ne.flags|=2048,wo(9,Sh(),qC.bind(null,f,o),null)),[u,m,i]}function qC(i,r){i.action=r}function Kv(i){var r=xt(),o=tt;if(o!==null)return Yv(r,o,i);xt(),r=r.memoizedState,o=xt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function wo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ne.updateQueue,r===null&&(r=Pm(),Ne.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Sh(){return{destroy:void 0,resource:void 0}}function Xv(){return xt().memoizedState}function wh(i,r,o,u){var f=Sn();u=u===void 0?null:u,Ne.flags|=i,f.memoizedState=wo(1|r,Sh(),o,u)}function uu(i,r,o,u){var f=xt();u=u===void 0?null:u;var m=f.memoizedState.inst;tt!==null&&u!==null&&xm(u,tt.memoizedState.deps)?f.memoizedState=wo(r,m,o,u):(Ne.flags|=i,f.memoizedState=wo(1|r,m,o,u))}function Wv(i,r){wh(8390656,8,i,r)}function $v(i,r){uu(2048,8,i,r)}function Zv(i,r){return uu(4,2,i,r)}function Jv(i,r){return uu(4,4,i,r)}function eE(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function tE(i,r,o){o=o!=null?o.concat([i]):null,uu(4,4,eE.bind(null,r,i),o)}function qm(){}function nE(i,r){var o=xt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&xm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function iE(i,r){var o=xt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&xm(r,u[1]))return u[0];if(u=i(),ga){On(!0);try{i()}finally{On(!1)}}return o.memoizedState=[u,r],u}function Bm(i,r,o){return o===void 0||(Xs&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=aT(),Ne.lanes|=i,nr|=i,o)}function sE(i,r,o,u){return kn(o,r)?o:Eo.current!==null?(i=Bm(i,o,u),kn(i,r)||(Yt=!0),i):(Xs&42)===0?(Yt=!0,i.memoizedState=o):(i=aT(),Ne.lanes|=i,nr|=i,r)}function rE(i,r,o,u,f){var m=se.p;se.p=m!==0&&8>m?m:8;var E=G.T,w={};G.T=w,Gm(i,!1,r,o);try{var R=f(),q=G.S;if(q!==null&&q(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var Y=LC(R,u);cu(i,r,Y,zn(i))}else cu(i,r,u,zn(i))}catch(Z){cu(i,r,{then:function(){},status:"rejected",reason:Z},zn())}finally{se.p=m,G.T=E}}function BC(){}function Fm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=aE(i).queue;rE(i,f,r,fe,o===null?BC:function(){return oE(i),o(u)})}function aE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:fe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function oE(i){var r=aE(i).next.queue;cu(i,r,{},zn())}function Hm(){return cn(Iu)}function lE(){return xt().memoizedState}function uE(){return xt().memoizedState}function FC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=zn();i=Ys(o);var u=Ks(r,i,o);u!==null&&(jn(u,r,o),su(u,r,o)),r={cache:Em()},i.payload=r;return}r=r.return}}function HC(i,r,o){var u=zn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},bh(i)?hE(r,o):(o=cm(i,r,o,u),o!==null&&(jn(o,i,u),fE(o,r,u)))}function cE(i,r,o){var u=zn();cu(i,r,o,u)}function cu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(bh(i))hE(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,w=m(E,o);if(f.hasEagerState=!0,f.eagerState=w,kn(w,E))return oh(i,r,f,0),ot===null&&ah(),!1}catch{}finally{}if(o=cm(i,r,f,u),o!==null)return jn(o,i,u),fE(o,r,u),!0}return!1}function Gm(i,r,o,u){if(u={lane:2,revertLane:wp(),action:u,hasEagerState:!1,eagerState:null,next:null},bh(i)){if(r)throw Error(s(479))}else r=cm(i,o,u,2),r!==null&&jn(r,i,2)}function bh(i){var r=i.alternate;return i===Ne||r!==null&&r===Ne}function hE(i,r){To=yh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function fE(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ol(i,o)}}var Ah={readContext:cn,use:Eh,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},dE={readContext:cn,use:Eh,useCallback:function(i,r){return Sn().memoizedState=[i,r===void 0?null:r],i},useContext:cn,useEffect:Wv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,wh(4194308,4,eE.bind(null,r,i),o)},useLayoutEffect:function(i,r){return wh(4194308,4,i,r)},useInsertionEffect:function(i,r){wh(4,2,i,r)},useMemo:function(i,r){var o=Sn();r=r===void 0?null:r;var u=i();if(ga){On(!0);try{i()}finally{On(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Sn();if(o!==void 0){var f=o(r);if(ga){On(!0);try{o(r)}finally{On(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=HC.bind(null,Ne,i),[u.memoizedState,i]},useRef:function(i){var r=Sn();return i={current:i},r.memoizedState=i},useState:function(i){i=zm(i);var r=i.queue,o=cE.bind(null,Ne,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:qm,useDeferredValue:function(i,r){var o=Sn();return Bm(o,i,r)},useTransition:function(){var i=zm(!1);return i=rE.bind(null,Ne,i.queue,!0,!1),Sn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ne,f=Sn();if(Qe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ot===null)throw Error(s(349));(Fe&124)!==0||kv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Wv(Vv.bind(null,u,m,i),[i]),u.flags|=2048,wo(9,Sh(),Pv.bind(null,u,m,o,r),null),o},useId:function(){var i=Sn(),r=ot.identifierPrefix;if(Qe){var o=ls,u=os;o=(u&~(1<<32-un(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=vh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=UC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Hm,useFormState:Gv,useActionState:Gv,useOptimistic:function(i){var r=Sn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Gm.bind(null,Ne,!0,o),o.dispatch=r,[i,r]},useMemoCache:Vm,useCacheRefresh:function(){return Sn().memoizedState=FC.bind(null,Ne)}},mE={readContext:cn,use:Eh,useCallback:nE,useContext:cn,useEffect:$v,useImperativeHandle:tE,useInsertionEffect:Zv,useLayoutEffect:Jv,useMemo:iE,useReducer:Th,useRef:Xv,useState:function(){return Th(hs)},useDebugValue:qm,useDeferredValue:function(i,r){var o=xt();return sE(o,tt.memoizedState,i,r)},useTransition:function(){var i=Th(hs)[0],r=xt().memoizedState;return[typeof i=="boolean"?i:lu(i),r]},useSyncExternalStore:Mv,useId:lE,useHostTransitionStatus:Hm,useFormState:Qv,useActionState:Qv,useOptimistic:function(i,r){var o=xt();return zv(o,tt,i,r)},useMemoCache:Vm,useCacheRefresh:uE},GC={readContext:cn,use:Eh,useCallback:nE,useContext:cn,useEffect:$v,useImperativeHandle:tE,useInsertionEffect:Zv,useLayoutEffect:Jv,useMemo:iE,useReducer:Um,useRef:Xv,useState:function(){return Um(hs)},useDebugValue:qm,useDeferredValue:function(i,r){var o=xt();return tt===null?Bm(o,i,r):sE(o,tt.memoizedState,i,r)},useTransition:function(){var i=Um(hs)[0],r=xt().memoizedState;return[typeof i=="boolean"?i:lu(i),r]},useSyncExternalStore:Mv,useId:lE,useHostTransitionStatus:Hm,useFormState:Kv,useActionState:Kv,useOptimistic:function(i,r){var o=xt();return tt!==null?zv(o,tt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Vm,useCacheRefresh:uE},bo=null,hu=0;function Ch(i){var r=hu;return hu+=1,bo===null&&(bo=[]),Av(bo,i,r)}function fu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Rh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function pE(i){var r=i._init;return r(i._payload)}function gE(i){function r(V,O){if(i){var j=V.deletions;j===null?(V.deletions=[O],V.flags|=16):j.push(O)}}function o(V,O){if(!i)return null;for(;O!==null;)r(V,O),O=O.sibling;return null}function u(V){for(var O=new Map;V!==null;)V.key!==null?O.set(V.key,V):O.set(V.index,V),V=V.sibling;return O}function f(V,O){return V=as(V,O),V.index=0,V.sibling=null,V}function m(V,O,j){return V.index=j,i?(j=V.alternate,j!==null?(j=j.index,j<O?(V.flags|=67108866,O):j):(V.flags|=67108866,O)):(V.flags|=1048576,O)}function E(V){return i&&V.alternate===null&&(V.flags|=67108866),V}function w(V,O,j,$){return O===null||O.tag!==6?(O=fm(j,V.mode,$),O.return=V,O):(O=f(O,j),O.return=V,O)}function R(V,O,j,$){var le=j.type;return le===U?Y(V,O,j.props.children,$,j.key):O!==null&&(O.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===A&&pE(le)===O.type)?(O=f(O,j.props),fu(O,j),O.return=V,O):(O=uh(j.type,j.key,j.props,null,V.mode,$),fu(O,j),O.return=V,O)}function q(V,O,j,$){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=dm(j,V.mode,$),O.return=V,O):(O=f(O,j.children||[]),O.return=V,O)}function Y(V,O,j,$,le){return O===null||O.tag!==7?(O=la(j,V.mode,$,le),O.return=V,O):(O=f(O,j),O.return=V,O)}function Z(V,O,j){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=fm(""+O,V.mode,j),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return j=uh(O.type,O.key,O.props,null,V.mode,j),fu(j,O),j.return=V,j;case x:return O=dm(O,V.mode,j),O.return=V,O;case A:var $=O._init;return O=$(O._payload),Z(V,O,j)}if(dt(O)||L(O))return O=la(O,V.mode,j,null),O.return=V,O;if(typeof O.then=="function")return Z(V,Ch(O),j);if(O.$$typeof===ce)return Z(V,dh(V,O),j);Rh(V,O)}return null}function B(V,O,j,$){var le=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return le!==null?null:w(V,O,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return j.key===le?R(V,O,j,$):null;case x:return j.key===le?q(V,O,j,$):null;case A:return le=j._init,j=le(j._payload),B(V,O,j,$)}if(dt(j)||L(j))return le!==null?null:Y(V,O,j,$,null);if(typeof j.then=="function")return B(V,O,Ch(j),$);if(j.$$typeof===ce)return B(V,O,dh(V,j),$);Rh(V,j)}return null}function F(V,O,j,$,le){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return V=V.get(j)||null,w(O,V,""+$,le);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return V=V.get($.key===null?j:$.key)||null,R(O,V,$,le);case x:return V=V.get($.key===null?j:$.key)||null,q(O,V,$,le);case A:var De=$._init;return $=De($._payload),F(V,O,j,$,le)}if(dt($)||L($))return V=V.get(j)||null,Y(O,V,$,le,null);if(typeof $.then=="function")return F(V,O,j,Ch($),le);if($.$$typeof===ce)return F(V,O,j,dh(O,$),le);Rh(O,$)}return null}function Te(V,O,j,$){for(var le=null,De=null,de=O,ve=O=0,Xt=null;de!==null&&ve<j.length;ve++){de.index>ve?(Xt=de,de=null):Xt=de.sibling;var Ge=B(V,de,j[ve],$);if(Ge===null){de===null&&(de=Xt);break}i&&de&&Ge.alternate===null&&r(V,de),O=m(Ge,O,ve),De===null?le=Ge:De.sibling=Ge,De=Ge,de=Xt}if(ve===j.length)return o(V,de),Qe&&ca(V,ve),le;if(de===null){for(;ve<j.length;ve++)de=Z(V,j[ve],$),de!==null&&(O=m(de,O,ve),De===null?le=de:De.sibling=de,De=de);return Qe&&ca(V,ve),le}for(de=u(de);ve<j.length;ve++)Xt=F(de,V,ve,j[ve],$),Xt!==null&&(i&&Xt.alternate!==null&&de.delete(Xt.key===null?ve:Xt.key),O=m(Xt,O,ve),De===null?le=Xt:De.sibling=Xt,De=Xt);return i&&de.forEach(function(hr){return r(V,hr)}),Qe&&ca(V,ve),le}function ye(V,O,j,$){if(j==null)throw Error(s(151));for(var le=null,De=null,de=O,ve=O=0,Xt=null,Ge=j.next();de!==null&&!Ge.done;ve++,Ge=j.next()){de.index>ve?(Xt=de,de=null):Xt=de.sibling;var hr=B(V,de,Ge.value,$);if(hr===null){de===null&&(de=Xt);break}i&&de&&hr.alternate===null&&r(V,de),O=m(hr,O,ve),De===null?le=hr:De.sibling=hr,De=hr,de=Xt}if(Ge.done)return o(V,de),Qe&&ca(V,ve),le;if(de===null){for(;!Ge.done;ve++,Ge=j.next())Ge=Z(V,Ge.value,$),Ge!==null&&(O=m(Ge,O,ve),De===null?le=Ge:De.sibling=Ge,De=Ge);return Qe&&ca(V,ve),le}for(de=u(de);!Ge.done;ve++,Ge=j.next())Ge=F(de,V,ve,Ge.value,$),Ge!==null&&(i&&Ge.alternate!==null&&de.delete(Ge.key===null?ve:Ge.key),O=m(Ge,O,ve),De===null?le=Ge:De.sibling=Ge,De=Ge);return i&&de.forEach(function(QR){return r(V,QR)}),Qe&&ca(V,ve),le}function it(V,O,j,$){if(typeof j=="object"&&j!==null&&j.type===U&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case S:e:{for(var le=j.key;O!==null;){if(O.key===le){if(le=j.type,le===U){if(O.tag===7){o(V,O.sibling),$=f(O,j.props.children),$.return=V,V=$;break e}}else if(O.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===A&&pE(le)===O.type){o(V,O.sibling),$=f(O,j.props),fu($,j),$.return=V,V=$;break e}o(V,O);break}else r(V,O);O=O.sibling}j.type===U?($=la(j.props.children,V.mode,$,j.key),$.return=V,V=$):($=uh(j.type,j.key,j.props,null,V.mode,$),fu($,j),$.return=V,V=$)}return E(V);case x:e:{for(le=j.key;O!==null;){if(O.key===le)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){o(V,O.sibling),$=f(O,j.children||[]),$.return=V,V=$;break e}else{o(V,O);break}else r(V,O);O=O.sibling}$=dm(j,V.mode,$),$.return=V,V=$}return E(V);case A:return le=j._init,j=le(j._payload),it(V,O,j,$)}if(dt(j))return Te(V,O,j,$);if(L(j)){if(le=L(j),typeof le!="function")throw Error(s(150));return j=le.call(j),ye(V,O,j,$)}if(typeof j.then=="function")return it(V,O,Ch(j),$);if(j.$$typeof===ce)return it(V,O,dh(V,j),$);Rh(V,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,O!==null&&O.tag===6?(o(V,O.sibling),$=f(O,j),$.return=V,V=$):(o(V,O),$=fm(j,V.mode,$),$.return=V,V=$),E(V)):o(V,O)}return function(V,O,j,$){try{hu=0;var le=it(V,O,j,$);return bo=null,le}catch(de){if(de===nu||de===ph)throw de;var De=Pn(29,de,null,V.mode);return De.lanes=$,De.return=V,De}finally{}}}var Ao=gE(!0),_E=gE(!1),ei=X(null),Di=null;function Ws(i){var r=i.alternate;ee(qt,qt.current&1),ee(ei,i),Di===null&&(r===null||Eo.current!==null||r.memoizedState!==null)&&(Di=i)}function yE(i){if(i.tag===22){if(ee(qt,qt.current),ee(ei,i),Di===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Di=i)}}else $s()}function $s(){ee(qt,qt.current),ee(ei,ei.current)}function fs(i){te(ei),Di===i&&(Di=null),te(qt)}var qt=X(0);function Ih(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Pp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Qm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Ym={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=zn(),f=Ys(u);f.payload=r,o!=null&&(f.callback=o),r=Ks(i,f,u),r!==null&&(jn(r,i,u),su(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=zn(),f=Ys(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Ks(i,f,u),r!==null&&(jn(r,i,u),su(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=zn(),u=Ys(o);u.tag=2,r!=null&&(u.callback=r),r=Ks(i,u,o),r!==null&&(jn(r,i,o),su(r,i,o))}};function vE(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Kl(o,u)||!Kl(f,m):!0}function EE(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Ym.enqueueReplaceState(r,r.state,null)}function _a(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=v({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Nh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function TE(i){Nh(i)}function SE(i){console.error(i)}function wE(i){Nh(i)}function xh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function bE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Km(i,r,o){return o=Ys(o),o.tag=3,o.payload={element:null},o.callback=function(){xh(i,r)},o}function AE(i){return i=Ys(i),i.tag=3,i}function CE(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){bE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){bE(r,o,u),typeof f!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function QC(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Jl(r,o,f,!0),o=ei.current,o!==null){switch(o.tag){case 13:return Di===null?yp():o.alternate===null&&Et===0&&(Et=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===wm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Ep(i,u,f)),!1;case 22:return o.flags|=65536,u===wm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Ep(i,u,f)),!1}throw Error(s(435,o.tag))}return Ep(i,u,f),yp(),!1}if(Qe)return r=ei.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==gm&&(i=Error(s(422),{cause:u}),Zl(Wn(i,o)))):(u!==gm&&(r=Error(s(423),{cause:u}),Zl(Wn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Wn(u,o),f=Km(i.stateNode,u,f),Cm(i,f),Et!==4&&(Et=2)),!1;var m=Error(s(520),{cause:u});if(m=Wn(m,o),vu===null?vu=[m]:vu.push(m),Et!==4&&(Et=2),r===null)return!0;u=Wn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Km(o.stateNode,u,i),Cm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ir===null||!ir.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=AE(f),CE(f,i,o,u),Cm(o,f),!1}o=o.return}while(o!==null);return!1}var RE=Error(s(461)),Yt=!1;function nn(i,r,o,u){r.child=i===null?_E(r,null,o,u):Ao(r,i.child,o,u)}function IE(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return ma(r),u=Dm(i,r,o,E,m,f),w=Om(),i!==null&&!Yt?(Mm(i,r,f),ds(i,r,f)):(Qe&&w&&mm(r),r.flags|=1,nn(i,r,u,f),r.child)}function NE(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!hm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,xE(i,r,m,u,f)):(i=uh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!np(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Kl,o(E,u)&&i.ref===r.ref)return ds(i,r,f)}return r.flags|=1,i=as(m,u),i.ref=r.ref,i.return=r,r.child=i}function xE(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Kl(m,u)&&i.ref===r.ref)if(Yt=!1,r.pendingProps=u=m,np(i,f))(i.flags&131072)!==0&&(Yt=!0);else return r.lanes=i.lanes,ds(i,r,f)}return Xm(i,r,o,u,f)}function DE(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return OE(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&mh(r,m!==null?m.cachePool:null),m!==null?xv(r,m):Im(),yE(r);else return r.lanes=r.childLanes=536870912,OE(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(mh(r,m.cachePool),xv(r,m),$s(),r.memoizedState=null):(i!==null&&mh(r,null),Im(),$s());return nn(i,r,f,o),r.child}function OE(i,r,o,u){var f=Sm();return f=f===null?null:{parent:jt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&mh(r,null),Im(),yE(r),i!==null&&Jl(i,r,u,!0),null}function Dh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Xm(i,r,o,u,f){return ma(r),o=Dm(i,r,o,u,void 0,f),u=Om(),i!==null&&!Yt?(Mm(i,r,f),ds(i,r,f)):(Qe&&u&&mm(r),r.flags|=1,nn(i,r,o,f),r.child)}function ME(i,r,o,u,f,m){return ma(r),r.updateQueue=null,o=Ov(r,u,o,f),Dv(i),u=Om(),i!==null&&!Yt?(Mm(i,r,m),ds(i,r,m)):(Qe&&u&&mm(r),r.flags|=1,nn(i,r,o,m),r.child)}function kE(i,r,o,u,f){if(ma(r),r.stateNode===null){var m=po,E=o.contextType;typeof E=="object"&&E!==null&&(m=cn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ym,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},bm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?cn(E):po,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Qm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Ym.enqueueReplaceState(m,m.state,null),au(r,u,m,f),ru(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var w=r.memoizedProps,R=_a(o,w);m.props=R;var q=m.context,Y=o.contextType;E=po,typeof Y=="object"&&Y!==null&&(E=cn(Y));var Z=o.getDerivedStateFromProps;Y=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,Y||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||q!==E)&&EE(r,m,u,E),Qs=!1;var B=r.memoizedState;m.state=B,au(r,u,m,f),ru(),q=r.memoizedState,w||B!==q||Qs?(typeof Z=="function"&&(Qm(r,o,Z,u),q=r.memoizedState),(R=Qs||vE(r,o,R,u,B,q,E))?(Y||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=R):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Am(i,r),E=r.memoizedProps,Y=_a(o,E),m.props=Y,Z=r.pendingProps,B=m.context,q=o.contextType,R=po,typeof q=="object"&&q!==null&&(R=cn(q)),w=o.getDerivedStateFromProps,(q=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||B!==R)&&EE(r,m,u,R),Qs=!1,B=r.memoizedState,m.state=B,au(r,u,m,f),ru();var F=r.memoizedState;E!==Z||B!==F||Qs||i!==null&&i.dependencies!==null&&fh(i.dependencies)?(typeof w=="function"&&(Qm(r,o,w,u),F=r.memoizedState),(Y=Qs||vE(r,o,Y,u,B,F,R)||i!==null&&i.dependencies!==null&&fh(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,F,R),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,F,R)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=F),m.props=u,m.state=F,m.context=R,u=Y):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Dh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Ao(r,i.child,null,f),r.child=Ao(r,null,o,f)):nn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=ds(i,r,f),i}function PE(i,r,o,u){return $l(),r.flags|=256,nn(i,r,o,u),r.child}var Wm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $m(i){return{baseLanes:i,cachePool:Sv()}}function Zm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ti),i}function VE(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(qt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Qe){if(f?Ws(r):$s(),Qe){var w=vt,R;if(R=w){e:{for(R=w,w=xi;R.nodeType!==8;){if(!w){w=null;break e}if(R=ci(R.nextSibling),R===null){w=null;break e}}w=R}w!==null?(r.memoizedState={dehydrated:w,treeContext:ua!==null?{id:os,overflow:ls}:null,retryLane:536870912,hydrationErrors:null},R=Pn(18,null,null,0),R.stateNode=w,R.return=r,r.child=R,Tn=r,vt=null,R=!0):R=!1}R||fa(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Pp(w)?r.lanes=32:r.lanes=536870912,null;fs(r)}return w=u.children,u=u.fallback,f?($s(),f=r.mode,w=Oh({mode:"hidden",children:w},f),u=la(u,f,o,null),w.return=r,u.return=r,w.sibling=u,r.child=w,f=r.child,f.memoizedState=$m(o),f.childLanes=Zm(i,E,o),r.memoizedState=Wm,u):(Ws(r),Jm(r,w))}if(R=i.memoizedState,R!==null&&(w=R.dehydrated,w!==null)){if(m)r.flags&256?(Ws(r),r.flags&=-257,r=ep(i,r,o)):r.memoizedState!==null?($s(),r.child=i.child,r.flags|=128,r=null):($s(),f=u.fallback,w=r.mode,u=Oh({mode:"visible",children:u.children},w),f=la(f,w,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Ao(r,i.child,null,o),u=r.child,u.memoizedState=$m(o),u.childLanes=Zm(i,E,o),r.memoizedState=Wm,r=f);else if(Ws(r),Pp(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,Zl({value:u,source:null,stack:null}),r=ep(i,r,o)}else if(Yt||Jl(i,r,o,!1),E=(o&i.childLanes)!==0,Yt||E){if(E=ot,E!==null&&(u=o&-o,u=(u&42)!==0?1:Us(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,mo(i,u),jn(E,i,u),RE;w.data==="$?"||yp(),r=ep(i,r,o)}else w.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=R.treeContext,vt=ci(w.nextSibling),Tn=r,Qe=!0,ha=null,xi=!1,i!==null&&(Zn[Jn++]=os,Zn[Jn++]=ls,Zn[Jn++]=ua,os=i.id,ls=i.overflow,ua=r),r=Jm(r,u.children),r.flags|=4096);return r}return f?($s(),f=u.fallback,w=r.mode,R=i.child,q=R.sibling,u=as(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,q!==null?f=as(q,f):(f=la(f,w,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,w=i.child.memoizedState,w===null?w=$m(o):(R=w.cachePool,R!==null?(q=jt._currentValue,R=R.parent!==q?{parent:q,pool:q}:R):R=Sv(),w={baseLanes:w.baseLanes|o,cachePool:R}),f.memoizedState=w,f.childLanes=Zm(i,E,o),r.memoizedState=Wm,u):(Ws(r),o=i.child,i=o.sibling,o=as(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function Jm(i,r){return r=Oh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Oh(i,r){return i=Pn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function ep(i,r,o){return Ao(r,i.child,null,o),i=Jm(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function LE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),ym(i.return,r,o)}function tp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function UE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(nn(i,r,u.children,o),u=qt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&LE(i,o,r);else if(i.tag===19)LE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ee(qt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Ih(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),tp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Ih(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}tp(r,!0,o,null,m);break;case"together":tp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ds(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),nr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Jl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=as(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=as(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function np(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&fh(i)))}function YC(i,r,o){switch(r.tag){case 3:at(r,r.stateNode.containerInfo),Gs(r,jt,i.memoizedState.cache),$l();break;case 27:case 5:Ls(r);break;case 4:at(r,r.stateNode.containerInfo);break;case 10:Gs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Ws(r),r.flags|=128,null):(o&r.child.childLanes)!==0?VE(i,r,o):(Ws(r),i=ds(i,r,o),i!==null?i.sibling:null);Ws(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Jl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return UE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(qt,qt.current),u)break;return null;case 22:case 23:return r.lanes=0,DE(i,r,o);case 24:Gs(r,jt,i.memoizedState.cache)}return ds(i,r,o)}function zE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Yt=!0;else{if(!np(i,o)&&(r.flags&128)===0)return Yt=!1,YC(i,r,o);Yt=(i.flags&131072)!==0}else Yt=!1,Qe&&(r.flags&1048576)!==0&&pv(r,hh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")hm(u)?(i=_a(u,i),r.tag=1,r=kE(null,r,u,i,o)):(r.tag=0,r=Xm(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===Le){r.tag=11,r=IE(null,r,u,i,o);break e}else if(f===P){r.tag=14,r=NE(null,r,u,i,o);break e}}throw r=Vt(u)||u,Error(s(306,r,""))}}return r;case 0:return Xm(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=_a(u,r.pendingProps),kE(i,r,u,f,o);case 3:e:{if(at(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Am(i,r),au(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Gs(r,jt,u),u!==m.cache&&vm(r,[jt],o,!0),ru(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=PE(i,r,u,o);break e}else if(u!==f){f=Wn(Error(s(424)),r),Zl(f),r=PE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(vt=ci(i.firstChild),Tn=r,Qe=!0,ha=null,xi=!0,o=_E(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if($l(),u===f){r=ds(i,r,o);break e}nn(i,r,u,o)}r=r.child}return r;case 26:return Dh(i,r),i===null?(o=FT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Qe||(o=r.type,i=r.pendingProps,u=Qh(Ae.current).createElement(o),u[Lt]=r,u[Rt]=i,rn(u,o,i),St(u),r.stateNode=u):r.memoizedState=FT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ls(r),i===null&&Qe&&(u=r.stateNode=jT(r.type,r.pendingProps,Ae.current),Tn=r,xi=!0,f=vt,ar(r.type)?(Vp=f,vt=ci(u.firstChild)):vt=f),nn(i,r,r.pendingProps.children,o),Dh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Qe&&((f=u=vt)&&(u=TR(u,r.type,r.pendingProps,xi),u!==null?(r.stateNode=u,Tn=r,vt=ci(u.firstChild),xi=!1,f=!0):f=!1),f||fa(r)),Ls(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Op(f,m)?u=null:E!==null&&Op(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Dm(i,r,zC,null,null,o),Iu._currentValue=f),Dh(i,r),nn(i,r,u,o),r.child;case 6:return i===null&&Qe&&((i=o=vt)&&(o=SR(o,r.pendingProps,xi),o!==null?(r.stateNode=o,Tn=r,vt=null,i=!0):i=!1),i||fa(r)),null;case 13:return VE(i,r,o);case 4:return at(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Ao(r,null,u,o):nn(i,r,u,o),r.child;case 11:return IE(i,r,r.type,r.pendingProps,o);case 7:return nn(i,r,r.pendingProps,o),r.child;case 8:return nn(i,r,r.pendingProps.children,o),r.child;case 12:return nn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Gs(r,r.type,u.value),nn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ma(r),f=cn(f),u=u(f),r.flags|=1,nn(i,r,u,o),r.child;case 14:return NE(i,r,r.type,r.pendingProps,o);case 15:return xE(i,r,r.type,r.pendingProps,o);case 19:return UE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Oh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=as(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return DE(i,r,o);case 24:return ma(r),u=cn(jt),i===null?(f=Sm(),f===null&&(f=ot,m=Em(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},bm(r),Gs(r,jt,f)):((i.lanes&o)!==0&&(Am(i,r),au(r,null,null,o),ru()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Gs(r,jt,u)):(u=m.cache,Gs(r,jt,u),u!==f.cache&&vm(r,[jt],o,!0))),nn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function ms(i){i.flags|=4}function jE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!KT(r)){if(r=ei.current,r!==null&&((Fe&4194048)===Fe?Di!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||r!==Di))throw iu=wm,wv;i.flags|=8192}}function Mh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?xl():536870912,i.lanes|=r,No|=r)}function du(i,r){if(!Qe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function gt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function KC(i,r,o){var u=r.pendingProps;switch(pm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(r),null;case 1:return gt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),cs(jt),yi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Wl(r)?ms(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,yv())),gt(r),null;case 26:return o=r.memoizedState,i===null?(ms(r),o!==null?(gt(r),jE(r,o)):(gt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(ms(r),gt(r),jE(r,o)):(gt(r),r.flags&=-16777217):(i.memoizedProps!==u&&ms(r),gt(r),r.flags&=-16777217),null;case 27:Yi(r),o=Ae.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&ms(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return gt(r),null}i=me.current,Wl(r)?gv(r):(i=jT(f,u,o),r.stateNode=i,ms(r))}return gt(r),null;case 5:if(Yi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&ms(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return gt(r),null}if(i=me.current,Wl(r))gv(r);else{switch(f=Qh(Ae.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Lt]=r,i[Rt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(rn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ms(r)}}return gt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&ms(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=Ae.current,Wl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=Tn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Lt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||MT(i.nodeValue,o)),i||fa(r)}else i=Qh(i).createTextNode(u),i[Lt]=r,r.stateNode=i}return gt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Wl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Lt]=r}else $l(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gt(r),f=!1}else f=yv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(fs(r),r):(fs(r),null)}if(fs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Mh(r,r.updateQueue),gt(r),null;case 4:return yi(),i===null&&Rp(r.stateNode.containerInfo),gt(r),null;case 10:return cs(r.type),gt(r),null;case 19:if(te(qt),f=r.memoizedState,f===null)return gt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)du(f,!1);else{if(Et!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Ih(i),m!==null){for(r.flags|=128,du(f,!1),i=m.updateQueue,r.updateQueue=i,Mh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)mv(o,i),o=o.sibling;return ee(qt,qt.current&1|2),r.child}i=i.sibling}f.tail!==null&&Hn()>Vh&&(r.flags|=128,u=!0,du(f,!1),r.lanes=4194304)}else{if(!u)if(i=Ih(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Mh(r,i),du(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Qe)return gt(r),null}else 2*Hn()-f.renderingStartTime>Vh&&o!==536870912&&(r.flags|=128,u=!0,du(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Hn(),r.sibling=null,i=qt.current,ee(qt,u?i&1|2:i&1),r):(gt(r),null);case 22:case 23:return fs(r),Nm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(gt(r),r.subtreeFlags&6&&(r.flags|=8192)):gt(r),o=r.updateQueue,o!==null&&Mh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&te(pa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),cs(jt),gt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function XC(i,r){switch(pm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return cs(jt),yi(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Yi(r),null;case 13:if(fs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));$l()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return te(qt),null;case 4:return yi(),null;case 10:return cs(r.type),null;case 22:case 23:return fs(r),Nm(),i!==null&&te(pa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return cs(jt),null;case 25:return null;default:return null}}function qE(i,r){switch(pm(r),r.tag){case 3:cs(jt),yi();break;case 26:case 27:case 5:Yi(r);break;case 4:yi();break;case 13:fs(r);break;case 19:te(qt);break;case 10:cs(r.type);break;case 22:case 23:fs(r),Nm(),i!==null&&te(pa);break;case 24:cs(jt)}}function mu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(w){st(r,r.return,w)}}function Zs(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=r;var R=o,q=w;try{q()}catch(Y){st(f,R,Y)}}}u=u.next}while(u!==m)}}catch(Y){st(r,r.return,Y)}}function BE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Nv(r,o)}catch(u){st(i,i.return,u)}}}function FE(i,r,o){o.props=_a(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){st(i,r,u)}}function pu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){st(i,r,f)}}function Oi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(i,r,f)}else o.current=null}function HE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(i,i.return,f)}}function ip(i,r,o){try{var u=i.stateNode;gR(u,i.type,o,r),u[Rt]=r}catch(f){st(i,i.return,f)}}function GE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&ar(i.type)||i.tag===4}function sp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||GE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&ar(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function rp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Gh));else if(u!==4&&(u===27&&ar(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(rp(i,r,o),i=i.sibling;i!==null;)rp(i,r,o),i=i.sibling}function kh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&ar(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(kh(i,r,o),i=i.sibling;i!==null;)kh(i,r,o),i=i.sibling}function QE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);rn(r,u,o),r[Lt]=i,r[Rt]=o}catch(m){st(i,i.return,m)}}var ps=!1,bt=!1,ap=!1,YE=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function WC(i,r){if(i=i.containerInfo,xp=Zh,i=sv(i),sm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,w=-1,R=-1,q=0,Y=0,Z=i,B=null;t:for(;;){for(var F;Z!==o||f!==0&&Z.nodeType!==3||(w=E+f),Z!==m||u!==0&&Z.nodeType!==3||(R=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(F=Z.firstChild)!==null;)B=Z,Z=F;for(;;){if(Z===i)break t;if(B===o&&++q===f&&(w=E),B===m&&++Y===u&&(R=E),(F=Z.nextSibling)!==null)break;Z=B,B=Z.parentNode}Z=F}o=w===-1||R===-1?null:{start:w,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(Dp={focusedElem:i,selectionRange:o},Zh=!1,Kt=r;Kt!==null;)if(r=Kt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Kt=i;else for(;Kt!==null;){switch(r=Kt,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Te=_a(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Te,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ye){st(o,o.return,ye)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)kp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":kp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Kt=i;break}Kt=r.return}}function KE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Js(i,o),u&4&&mu(5,o);break;case 1:if(Js(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=_a(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&BE(o),u&512&&pu(o,o.return);break;case 3:if(Js(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Nv(i,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&QE(o);case 26:case 5:Js(i,o),r===null&&u&4&&HE(o),u&512&&pu(o,o.return);break;case 12:Js(i,o);break;case 13:Js(i,o),u&4&&$E(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=rR.bind(null,o),wR(i,o))));break;case 22:if(u=o.memoizedState!==null||ps,!u){r=r!==null&&r.memoizedState!==null||bt,f=ps;var m=bt;ps=u,(bt=r)&&!m?er(i,o,(o.subtreeFlags&8772)!==0):Js(i,o),ps=f,bt=m}break;case 30:break;default:Js(i,o)}}function XE(i){var r=i.alternate;r!==null&&(i.alternate=null,XE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&qs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var pt=null,wn=!1;function gs(i,r,o){for(o=o.child;o!==null;)WE(i,r,o),o=o.sibling}function WE(i,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(yt,o)}catch{}switch(o.tag){case 26:bt||Oi(o,r),gs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:bt||Oi(o,r);var u=pt,f=wn;ar(o.type)&&(pt=o.stateNode,wn=!1),gs(i,r,o),bu(o.stateNode),pt=u,wn=f;break;case 5:bt||Oi(o,r);case 6:if(u=pt,f=wn,pt=null,gs(i,r,o),pt=u,wn=f,pt!==null)if(wn)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{pt.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:pt!==null&&(wn?(i=pt,UT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Ou(i)):UT(pt,o.stateNode));break;case 4:u=pt,f=wn,pt=o.stateNode.containerInfo,wn=!0,gs(i,r,o),pt=u,wn=f;break;case 0:case 11:case 14:case 15:bt||Zs(2,o,r),bt||Zs(4,o,r),gs(i,r,o);break;case 1:bt||(Oi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&FE(o,r,u)),gs(i,r,o);break;case 21:gs(i,r,o);break;case 22:bt=(u=bt)||o.memoizedState!==null,gs(i,r,o),bt=u;break;default:gs(i,r,o)}}function $E(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Ou(i)}catch(o){st(r,r.return,o)}}function $C(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new YE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new YE),r;default:throw Error(s(435,i.tag))}}function op(i,r){var o=$C(i);r.forEach(function(u){var f=aR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Vn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(ar(w.type)){pt=w.stateNode,wn=!1;break e}break;case 5:pt=w.stateNode,wn=!1;break e;case 3:case 4:pt=w.stateNode.containerInfo,wn=!0;break e}w=w.return}if(pt===null)throw Error(s(160));WE(m,E,f),pt=null,wn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)ZE(r,i),r=r.sibling}var ui=null;function ZE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Vn(r,i),Ln(i),u&4&&(Zs(3,i,i.return),mu(3,i),Zs(5,i,i.return));break;case 1:Vn(r,i),Ln(i),u&512&&(bt||o===null||Oi(o,o.return)),u&64&&ps&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ui;if(Vn(r,i),Ln(i),u&512&&(bt||o===null||Oi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Qr]||m[Lt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),rn(m,u,o),m[Lt]=i,St(m),u=m;break e;case"link":var E=QT("link","href",f).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(m=E[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}m=f.createElement(u),rn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=QT("meta","content",f).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(m=E[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}m=f.createElement(u),rn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Lt]=i,St(m),u=m}i.stateNode=u}else YT(f,i.type,i.stateNode);else i.stateNode=GT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?YT(f,i.type,i.stateNode):GT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&ip(i,i.memoizedProps,o.memoizedProps)}break;case 27:Vn(r,i),Ln(i),u&512&&(bt||o===null||Oi(o,o.return)),o!==null&&u&4&&ip(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Vn(r,i),Ln(i),u&512&&(bt||o===null||Oi(o,o.return)),i.flags&32){f=i.stateNode;try{Qn(f,"")}catch(F){st(i,i.return,F)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,ip(i,f,o!==null?o.memoizedProps:f)),u&1024&&(ap=!0);break;case 6:if(Vn(r,i),Ln(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(F){st(i,i.return,F)}}break;case 3:if(Xh=null,f=ui,ui=Yh(r.containerInfo),Vn(r,i),ui=f,Ln(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ou(r.containerInfo)}catch(F){st(i,i.return,F)}ap&&(ap=!1,JE(i));break;case 4:u=ui,ui=Yh(i.stateNode.containerInfo),Vn(r,i),Ln(i),ui=u;break;case 12:Vn(r,i),Ln(i);break;case 13:Vn(r,i),Ln(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(dp=Hn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,op(i,u)));break;case 22:f=i.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,q=ps,Y=bt;if(ps=q||f,bt=Y||R,Vn(r,i),bt=Y,ps=q,Ln(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||R||ps||bt||ya(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){R=o=r;try{if(m=R.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=R.stateNode;var Z=R.memoizedProps.style,B=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;w.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(F){st(R,R.return,F)}}}else if(r.tag===6){if(o===null){R=r;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(F){st(R,R.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,op(i,o))));break;case 19:Vn(r,i),Ln(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,op(i,u)));break;case 30:break;case 21:break;default:Vn(r,i),Ln(i)}}function Ln(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(GE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=sp(i);kh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(Qn(E,""),o.flags&=-33);var w=sp(i);kh(i,w,E);break;case 3:case 4:var R=o.stateNode.containerInfo,q=sp(i);rp(i,q,R);break;default:throw Error(s(161))}}catch(Y){st(i,i.return,Y)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function JE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;JE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Js(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)KE(i,r.alternate,r),r=r.sibling}function ya(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Zs(4,r,r.return),ya(r);break;case 1:Oi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&FE(r,r.return,o),ya(r);break;case 27:bu(r.stateNode);case 26:case 5:Oi(r,r.return),ya(r);break;case 22:r.memoizedState===null&&ya(r);break;case 30:ya(r);break;default:ya(r)}i=i.sibling}}function er(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:er(f,m,o),mu(4,m);break;case 1:if(er(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){st(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var w=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)Iv(R[f],w)}catch(q){st(u,u.return,q)}}o&&E&64&&BE(m),pu(m,m.return);break;case 27:QE(m);case 26:case 5:er(f,m,o),o&&u===null&&E&4&&HE(m),pu(m,m.return);break;case 12:er(f,m,o);break;case 13:er(f,m,o),o&&E&4&&$E(f,m);break;case 22:m.memoizedState===null&&er(f,m,o),pu(m,m.return);break;case 30:break;default:er(f,m,o)}r=r.sibling}}function lp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&eu(o))}function up(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&eu(i))}function Mi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)eT(i,r,o,u),r=r.sibling}function eT(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Mi(i,r,o,u),f&2048&&mu(9,r);break;case 1:Mi(i,r,o,u);break;case 3:Mi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&eu(i)));break;case 12:if(f&2048){Mi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,w=m.onPostCommit;typeof w=="function"&&w(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(R){st(r,r.return,R)}}else Mi(i,r,o,u);break;case 13:Mi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Mi(i,r,o,u):gu(i,r):m._visibility&2?Mi(i,r,o,u):(m._visibility|=2,Co(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&lp(E,r);break;case 24:Mi(i,r,o,u),f&2048&&up(r.alternate,r);break;default:Mi(i,r,o,u)}}function Co(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,w=o,R=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Co(m,E,w,R,f),mu(8,E);break;case 23:break;case 22:var Y=E.stateNode;E.memoizedState!==null?Y._visibility&2?Co(m,E,w,R,f):gu(m,E):(Y._visibility|=2,Co(m,E,w,R,f)),f&&q&2048&&lp(E.alternate,E);break;case 24:Co(m,E,w,R,f),f&&q&2048&&up(E.alternate,E);break;default:Co(m,E,w,R,f)}r=r.sibling}}function gu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:gu(o,u),f&2048&&lp(u.alternate,u);break;case 24:gu(o,u),f&2048&&up(u.alternate,u);break;default:gu(o,u)}r=r.sibling}}var _u=8192;function Ro(i){if(i.subtreeFlags&_u)for(i=i.child;i!==null;)tT(i),i=i.sibling}function tT(i){switch(i.tag){case 26:Ro(i),i.flags&_u&&i.memoizedState!==null&&VR(ui,i.memoizedState,i.memoizedProps);break;case 5:Ro(i);break;case 3:case 4:var r=ui;ui=Yh(i.stateNode.containerInfo),Ro(i),ui=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=_u,_u=16777216,Ro(i),_u=r):Ro(i));break;default:Ro(i)}}function nT(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function yu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Kt=u,sT(u,i)}nT(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)iT(i),i=i.sibling}function iT(i){switch(i.tag){case 0:case 11:case 15:yu(i),i.flags&2048&&Zs(9,i,i.return);break;case 3:yu(i);break;case 12:yu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Ph(i)):yu(i);break;default:yu(i)}}function Ph(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Kt=u,sT(u,i)}nT(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Zs(8,r,r.return),Ph(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Ph(r));break;default:Ph(r)}i=i.sibling}}function sT(i,r){for(;Kt!==null;){var o=Kt;switch(o.tag){case 0:case 11:case 15:Zs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:eu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Kt=u;else e:for(o=i;Kt!==null;){u=Kt;var f=u.sibling,m=u.return;if(XE(u),u===o){Kt=null;break e}if(f!==null){f.return=m,Kt=f;break e}Kt=m}}}var ZC={getCacheForType:function(i){var r=cn(jt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},JC=typeof WeakMap=="function"?WeakMap:Map,$e=0,ot=null,ke=null,Fe=0,Ze=0,Un=null,tr=!1,Io=!1,cp=!1,_s=0,Et=0,nr=0,va=0,hp=0,ti=0,No=0,vu=null,bn=null,fp=!1,dp=0,Vh=1/0,Lh=null,ir=null,sn=0,sr=null,xo=null,Do=0,mp=0,pp=null,rT=null,Eu=0,gp=null;function zn(){if(($e&2)!==0&&Fe!==0)return Fe&-Fe;if(G.T!==null){var i=yo;return i!==0?i:wp()}return zs()}function aT(){ti===0&&(ti=(Fe&536870912)===0||Qe?Nl():536870912);var i=ei.current;return i!==null&&(i.flags|=32),ti}function jn(i,r,o){(i===ot&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(Oo(i,0),rr(i,Fe,ti,!1)),Xi(i,o),(($e&2)===0||i!==ot)&&(i===ot&&(($e&2)===0&&(va|=o),Et===4&&rr(i,Fe,ti,!1)),ki(i))}function oT(i,r,o){if(($e&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Gr(i,r),f=u?nR(i,r):vp(i,r,!0),m=u;do{if(f===0){Io&&!u&&rr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!eR(o)){f=vp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var w=i;f=vu;var R=w.current.memoizedState.isDehydrated;if(R&&(Oo(w,E).flags|=256),E=vp(w,E,!1),E!==2){if(cp&&!R){w.errorRecoveryDisabledLanes|=m,va|=m,f=4;break e}m=bn,bn=f,m!==null&&(bn===null?bn=m:bn.push.apply(bn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Oo(i,0),rr(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:rr(u,r,ti,!tr);break e;case 2:bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=dp+300-Hn(),10<f)){if(rr(u,r,ti,!tr),Ka(u,0,!0)!==0)break e;u.timeoutHandle=VT(lT.bind(null,u,o,bn,Lh,fp,r,ti,va,No,tr,m,2,-0,0),f);break e}lT(u,o,bn,Lh,fp,r,ti,va,No,tr,m,0,-0,0)}}break}while(!0);ki(i)}function lT(i,r,o,u,f,m,E,w,R,q,Y,Z,B,F){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Ru={stylesheets:null,count:0,unsuspend:PR},tT(r),Z=LR(),Z!==null)){i.cancelPendingCommit=Z(pT.bind(null,i,r,m,o,u,f,E,w,R,Y,1,B,F)),rr(i,m,E,!q);return}pT(i,r,m,o,u,f,E,w,R)}function eR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!kn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function rr(i,r,o,u){r&=~hp,r&=~va,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-un(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&vi(i,o,r)}function Uh(){return($e&6)===0?(Tu(0),!1):!0}function _p(){if(ke!==null){if(Ze===0)var i=ke.return;else i=ke,us=da=null,km(i),bo=null,hu=0,i=ke;for(;i!==null;)qE(i.alternate,i),i=i.return;ke=null}}function Oo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,yR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),_p(),ot=i,ke=o=as(i.current,null),Fe=r,Ze=0,Un=null,tr=!1,Io=Gr(i,r),cp=!1,No=ti=hp=va=nr=Et=0,bn=vu=null,fp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-un(u),m=1<<f;r|=i[f],u&=~m}return _s=r,ah(),o}function uT(i,r){Ne=null,G.H=Ah,r===nu||r===ph?(r=Cv(),Ze=3):r===wv?(r=Cv(),Ze=4):Ze=r===RE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Un=r,ke===null&&(Et=1,xh(i,Wn(r,i.current)))}function cT(){var i=G.H;return G.H=Ah,i===null?Ah:i}function hT(){var i=G.A;return G.A=ZC,i}function yp(){Et=4,tr||(Fe&4194048)!==Fe&&ei.current!==null||(Io=!0),(nr&134217727)===0&&(va&134217727)===0||ot===null||rr(ot,Fe,ti,!1)}function vp(i,r,o){var u=$e;$e|=2;var f=cT(),m=hT();(ot!==i||Fe!==r)&&(Lh=null,Oo(i,r)),r=!1;var E=Et;e:do try{if(Ze!==0&&ke!==null){var w=ke,R=Un;switch(Ze){case 8:_p(),E=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(r=!0);var q=Ze;if(Ze=0,Un=null,Mo(i,w,R,q),o&&Io){E=0;break e}break;default:q=Ze,Ze=0,Un=null,Mo(i,w,R,q)}}tR(),E=Et;break}catch(Y){uT(i,Y)}while(!0);return r&&i.shellSuspendCounter++,us=da=null,$e=u,G.H=f,G.A=m,ke===null&&(ot=null,Fe=0,ah()),E}function tR(){for(;ke!==null;)fT(ke)}function nR(i,r){var o=$e;$e|=2;var u=cT(),f=hT();ot!==i||Fe!==r?(Lh=null,Vh=Hn()+500,Oo(i,r)):Io=Gr(i,r);e:do try{if(Ze!==0&&ke!==null){r=ke;var m=Un;t:switch(Ze){case 1:Ze=0,Un=null,Mo(i,r,m,1);break;case 2:case 9:if(bv(m)){Ze=0,Un=null,dT(r);break}r=function(){Ze!==2&&Ze!==9||ot!==i||(Ze=7),ki(i)},m.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:bv(m)?(Ze=0,Un=null,dT(r)):(Ze=0,Un=null,Mo(i,r,m,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var w=ke;if(!E||KT(E)){Ze=0,Un=null;var R=w.sibling;if(R!==null)ke=R;else{var q=w.return;q!==null?(ke=q,zh(q)):ke=null}break t}}Ze=0,Un=null,Mo(i,r,m,5);break;case 6:Ze=0,Un=null,Mo(i,r,m,6);break;case 8:_p(),Et=6;break e;default:throw Error(s(462))}}iR();break}catch(Y){uT(i,Y)}while(!0);return us=da=null,G.H=u,G.A=f,$e=o,ke!==null?0:(ot=null,Fe=0,ah(),Et)}function iR(){for(;ke!==null&&!Al();)fT(ke)}function fT(i){var r=zE(i.alternate,i,_s);i.memoizedProps=i.pendingProps,r===null?zh(i):ke=r}function dT(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=ME(o,r,r.pendingProps,r.type,void 0,Fe);break;case 11:r=ME(o,r,r.pendingProps,r.type.render,r.ref,Fe);break;case 5:km(r);default:qE(o,r),r=ke=mv(r,_s),r=zE(o,r,_s)}i.memoizedProps=i.pendingProps,r===null?zh(i):ke=r}function Mo(i,r,o,u){us=da=null,km(r),bo=null,hu=0;var f=r.return;try{if(QC(i,f,r,o,Fe)){Et=1,xh(i,Wn(o,i.current)),ke=null;return}}catch(m){if(f!==null)throw ke=f,m;Et=1,xh(i,Wn(o,i.current)),ke=null;return}r.flags&32768?(Qe||u===1?i=!0:Io||(Fe&536870912)!==0?i=!1:(tr=i=!0,(u===2||u===9||u===3||u===6)&&(u=ei.current,u!==null&&u.tag===13&&(u.flags|=16384))),mT(r,i)):zh(r)}function zh(i){var r=i;do{if((r.flags&32768)!==0){mT(r,tr);return}i=r.return;var o=KC(r.alternate,r,_s);if(o!==null){ke=o;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=i}while(r!==null);Et===0&&(Et=5)}function mT(i,r){do{var o=XC(i.alternate,i);if(o!==null){o.flags&=32767,ke=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){ke=i;return}ke=i=o}while(i!==null);Et=6,ke=null}function pT(i,r,o,u,f,m,E,w,R){i.cancelPendingCommit=null;do jh();while(sn!==0);if(($e&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=um,Dl(i,o,m,E,w,R),i===ot&&(ke=ot=null,Fe=0),xo=r,sr=i,Do=o,mp=m,pp=f,rT=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,oR(qr,function(){return ET(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=G.T,G.T=null,f=se.p,se.p=2,E=$e,$e|=4;try{WC(i,r,o)}finally{$e=E,se.p=f,G.T=u}}sn=1,gT(),_T(),yT()}}function gT(){if(sn===1){sn=0;var i=sr,r=xo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=G.T,G.T=null;var u=se.p;se.p=2;var f=$e;$e|=4;try{ZE(r,i);var m=Dp,E=sv(i.containerInfo),w=m.focusedElem,R=m.selectionRange;if(E!==w&&w&&w.ownerDocument&&iv(w.ownerDocument.documentElement,w)){if(R!==null&&sm(w)){var q=R.start,Y=R.end;if(Y===void 0&&(Y=q),"selectionStart"in w)w.selectionStart=q,w.selectionEnd=Math.min(Y,w.value.length);else{var Z=w.ownerDocument||document,B=Z&&Z.defaultView||window;if(B.getSelection){var F=B.getSelection(),Te=w.textContent.length,ye=Math.min(R.start,Te),it=R.end===void 0?ye:Math.min(R.end,Te);!F.extend&&ye>it&&(E=it,it=ye,ye=E);var V=nv(w,ye),O=nv(w,it);if(V&&O&&(F.rangeCount!==1||F.anchorNode!==V.node||F.anchorOffset!==V.offset||F.focusNode!==O.node||F.focusOffset!==O.offset)){var j=Z.createRange();j.setStart(V.node,V.offset),F.removeAllRanges(),ye>it?(F.addRange(j),F.extend(O.node,O.offset)):(j.setEnd(O.node,O.offset),F.addRange(j))}}}}for(Z=[],F=w;F=F.parentNode;)F.nodeType===1&&Z.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Z.length;w++){var $=Z[w];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Zh=!!xp,Dp=xp=null}finally{$e=f,se.p=u,G.T=o}}i.current=r,sn=2}}function _T(){if(sn===2){sn=0;var i=sr,r=xo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=G.T,G.T=null;var u=se.p;se.p=2;var f=$e;$e|=4;try{KE(i,r.alternate,r)}finally{$e=f,se.p=u,G.T=o}}sn=3}}function yT(){if(sn===4||sn===3){sn=0,Pc();var i=sr,r=xo,o=Do,u=rT;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?sn=5:(sn=0,xo=sr=null,vT(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(ir=null),Xa(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(yt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=G.T,f=se.p,se.p=2,G.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var w=u[E];m(w.value,{componentStack:w.stack})}}finally{G.T=r,se.p=f}}(Do&3)!==0&&jh(),ki(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===gp?Eu++:(Eu=0,gp=i):Eu=0,Tu(0)}}function vT(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,eu(r)))}function jh(i){return gT(),_T(),yT(),ET()}function ET(){if(sn!==5)return!1;var i=sr,r=mp;mp=0;var o=Xa(Do),u=G.T,f=se.p;try{se.p=32>o?32:o,G.T=null,o=pp,pp=null;var m=sr,E=Do;if(sn=0,xo=sr=null,Do=0,($e&6)!==0)throw Error(s(331));var w=$e;if($e|=4,iT(m.current),eT(m,m.current,E,o),$e=w,Tu(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(yt,m)}catch{}return!0}finally{se.p=f,G.T=u,vT(i,r)}}function TT(i,r,o){r=Wn(o,r),r=Km(i.stateNode,r,2),i=Ks(i,r,2),i!==null&&(Xi(i,2),ki(i))}function st(i,r,o){if(i.tag===3)TT(i,i,o);else for(;r!==null;){if(r.tag===3){TT(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ir===null||!ir.has(u))){i=Wn(o,i),o=AE(2),u=Ks(r,o,2),u!==null&&(CE(o,u,r,i),Xi(u,2),ki(u));break}}r=r.return}}function Ep(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new JC;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(cp=!0,f.add(o),i=sR.bind(null,i,r,o),r.then(i,i))}function sR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ot===i&&(Fe&o)===o&&(Et===4||Et===3&&(Fe&62914560)===Fe&&300>Hn()-dp?($e&2)===0&&Oo(i,0):hp|=o,No===Fe&&(No=0)),ki(i)}function ST(i,r){r===0&&(r=xl()),i=mo(i,r),i!==null&&(Xi(i,r),ki(i))}function rR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),ST(i,o)}function aR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),ST(i,o)}function oR(i,r){return zr(i,r)}var qh=null,ko=null,Tp=!1,Bh=!1,Sp=!1,Ea=0;function ki(i){i!==ko&&i.next===null&&(ko===null?qh=ko=i:ko=ko.next=i),Bh=!0,Tp||(Tp=!0,uR())}function Tu(i,r){if(!Sp&&Bh){Sp=!0;do for(var o=!1,u=qh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,w=u.pingedLanes;m=(1<<31-un(42|i)+1)-1,m&=f&~(E&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,CT(u,m))}else m=Fe,m=Ka(u,u===ot?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Gr(u,m)||(o=!0,CT(u,m));u=u.next}while(o);Sp=!1}}function lR(){wT()}function wT(){Bh=Tp=!1;var i=0;Ea!==0&&(_R()&&(i=Ea),Ea=0);for(var r=Hn(),o=null,u=qh;u!==null;){var f=u.next,m=bT(u,r);m===0?(u.next=null,o===null?qh=f:o.next=f,f===null&&(ko=o)):(o=u,(i!==0||(m&3)!==0)&&(Bh=!0)),u=f}Tu(i)}function bT(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-un(m),w=1<<E,R=f[E];R===-1?((w&o)===0||(w&u)!==0)&&(f[E]=Il(w,r)):R<=r&&(i.expiredLanes|=w),m&=~w}if(r=ot,o=Fe,o=Ka(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&jr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Gr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&jr(u),Xa(o)){case 2:case 8:o=Qa;break;case 32:o=qr;break;case 268435456:o=Ya;break;default:o=qr}return u=AT.bind(null,i),o=zr(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&jr(u),i.callbackPriority=2,i.callbackNode=null,2}function AT(i,r){if(sn!==0&&sn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(jh()&&i.callbackNode!==o)return null;var u=Fe;return u=Ka(i,i===ot?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(oT(i,u,r),bT(i,Hn()),i.callbackNode!=null&&i.callbackNode===o?AT.bind(null,i):null)}function CT(i,r){if(jh())return null;oT(i,r,!0)}function uR(){vR(function(){($e&6)!==0?zr(Cl,lR):wT()})}function wp(){return Ea===0&&(Ea=Nl()),Ea}function RT(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:to(""+i)}function IT(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function cR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=RT((f[Rt]||null).action),E=u.submitter;E&&(r=(r=E[Rt]||null)?RT(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var w=new no("action","action",null,u,f);i.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ea!==0){var R=E?IT(f,E):new FormData(f);Fm(o,{pending:!0,data:R,method:f.method,action:m},null,R)}}else typeof m=="function"&&(w.preventDefault(),R=E?IT(f,E):new FormData(f),Fm(o,{pending:!0,data:R,method:f.method,action:m},m,R))},currentTarget:f}]})}}for(var bp=0;bp<lm.length;bp++){var Ap=lm[bp],hR=Ap.toLowerCase(),fR=Ap[0].toUpperCase()+Ap.slice(1);li(hR,"on"+fR)}li(ov,"onAnimationEnd"),li(lv,"onAnimationIteration"),li(uv,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(NC,"onTransitionRun"),li(xC,"onTransitionStart"),li(DC,"onTransitionCancel"),li(cv,"onTransitionEnd"),$i("onMouseEnter",["mouseout","mouseover"]),$i("onMouseLeave",["mouseout","mouseover"]),$i("onPointerEnter",["pointerout","pointerover"]),$i("onPointerLeave",["pointerout","pointerover"]),ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Su));function NT(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var w=u[E],R=w.instance,q=w.currentTarget;if(w=w.listener,R!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=q;try{m(f)}catch(Y){Nh(Y)}f.currentTarget=null,m=R}else for(E=0;E<u.length;E++){if(w=u[E],R=w.instance,q=w.currentTarget,w=w.listener,R!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=q;try{m(f)}catch(Y){Nh(Y)}f.currentTarget=null,m=R}}}}function Pe(i,r){var o=r[Ml];o===void 0&&(o=r[Ml]=new Set);var u=i+"__bubble";o.has(u)||(xT(r,i,2,!1),o.add(u))}function Cp(i,r,o){var u=0;r&&(u|=4),xT(o,i,u,r)}var Fh="_reactListening"+Math.random().toString(36).slice(2);function Rp(i){if(!i[Fh]){i[Fh]=!0,kl.forEach(function(o){o!=="selectionchange"&&(dR.has(o)||Cp(o,!1,i),Cp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Fh]||(r[Fh]=!0,Cp("selectionchange",!1,r))}}function xT(i,r,o,u){switch(e0(r)){case 2:var f=jR;break;case 8:f=qR;break;default:f=qp}o=f.bind(null,r,o,i),f=void 0,!Kn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Ip(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=u.return;E!==null;){var R=E.tag;if((R===3||R===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=Wi(w),E===null)return;if(R=E.tag,R===5||R===6||R===26||R===27){u=m=E;continue e}w=w.parentNode}}u=u.return}Gc(function(){var q=m,Y=Yn(o),Z=[];e:{var B=hv.get(i);if(B!==void 0){var F=no,Te=i;switch(i){case"keypress":if(Ai(o)===0)break e;case"keydown":case"keyup":F=lo;break;case"focusin":Te="focus",F=ro;break;case"focusout":Te="blur",F=ro;break;case"beforeblur":case"afterblur":F=ro;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Xn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Jc;break;case ov:case lv:case uv:F=ao;break;case cv:F=th;break;case"scroll":case"scrollend":F=Qc;break;case"wheel":F=uo;break;case"copy":case"cut":case"paste":F=oo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Ql;break;case"toggle":case"beforetoggle":F=ih}var ye=(r&4)!==0,it=!ye&&(i==="scroll"||i==="scrollend"),V=ye?B!==null?B+"Capture":null:B;ye=[];for(var O=q,j;O!==null;){var $=O;if(j=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||j===null||V===null||($=Jr(O,V),$!=null&&ye.push(wu(O,$,j))),it)break;O=O.return}0<ye.length&&(B=new F(B,Te,null,o,Y),Z.push({event:B,listeners:ye}))}}if((r&7)===0){e:{if(B=i==="mouseover"||i==="pointerover",F=i==="mouseout"||i==="pointerout",B&&o!==es&&(Te=o.relatedTarget||o.fromElement)&&(Wi(Te)||Te[Gn]))break e;if((F||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,F?(Te=o.relatedTarget||o.toElement,F=q,Te=Te?Wi(Te):null,Te!==null&&(it=l(Te),ye=Te.tag,Te!==it||ye!==5&&ye!==27&&ye!==6)&&(Te=null)):(F=null,Te=q),F!==Te)){if(ye=Xn,$="onMouseLeave",V="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ye=Ql,$="onPointerLeave",V="onPointerEnter",O="pointer"),it=F==null?B:Ti(F),j=Te==null?B:Ti(Te),B=new ye($,O+"leave",F,o,Y),B.target=it,B.relatedTarget=j,$=null,Wi(Y)===q&&(ye=new ye(V,O+"enter",Te,o,Y),ye.target=j,ye.relatedTarget=it,$=ye),it=$,F&&Te)t:{for(ye=F,V=Te,O=0,j=ye;j;j=Po(j))O++;for(j=0,$=V;$;$=Po($))j++;for(;0<O-j;)ye=Po(ye),O--;for(;0<j-O;)V=Po(V),j--;for(;O--;){if(ye===V||V!==null&&ye===V.alternate)break t;ye=Po(ye),V=Po(V)}ye=null}else ye=null;F!==null&&DT(Z,B,F,ye,!1),Te!==null&&it!==null&&DT(Z,it,Te,ye,!0)}}e:{if(B=q?Ti(q):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var le=Wy;else if(zt(B))if($y)le=CC;else{le=bC;var De=wC}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?q&&zl(q.elementType)&&(le=Wy):le=AC;if(le&&(le=le(i,q))){rs(Z,le,o,Y);break e}De&&De(i,B,q),i==="focusout"&&q&&B.type==="number"&&q.memoizedProps.value!=null&&Fs(B,"number",B.value)}switch(De=q?Ti(q):window,i){case"focusin":(zt(De)||De.contentEditable==="true")&&(co=De,rm=q,Xl=null);break;case"focusout":Xl=rm=co=null;break;case"mousedown":am=!0;break;case"contextmenu":case"mouseup":case"dragend":am=!1,rv(Z,o,Y);break;case"selectionchange":if(IC)break;case"keydown":case"keyup":rv(Z,o,Y)}var de;if(Ii)e:{switch(i){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else qe?H(i,o)&&(ve="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(y&&o.locale!=="ko"&&(qe||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&qe&&(de=ql()):(bi=Y,Hs="value"in bi?bi.value:bi.textContent,qe=!0)),De=Hh(q,ve),0<De.length&&(ve=new Hl(ve,i,null,o,Y),Z.push({event:ve,listeners:De}),de?ve.data=de:(de=ne(o),de!==null&&(ve.data=de)))),(de=_?Ut(i,o):Be(i,o))&&(ve=Hh(q,"onBeforeInput"),0<ve.length&&(De=new Hl("onBeforeInput","beforeinput",null,o,Y),Z.push({event:De,listeners:ve}),De.data=de)),cR(Z,i,q,o,Y)}NT(Z,r)})}function wu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Hh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Jr(i,o),f!=null&&u.unshift(wu(i,f,m)),f=Jr(i,r),f!=null&&u.push(wu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Po(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function DT(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var w=o,R=w.alternate,q=w.stateNode;if(w=w.tag,R!==null&&R===u)break;w!==5&&w!==26&&w!==27||q===null||(R=q,f?(q=Jr(o,m),q!=null&&E.unshift(wu(o,q,R))):f||(q=Jr(o,m),q!=null&&E.push(wu(o,q,R)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var mR=/\r\n?/g,pR=/\u0000|\uFFFD/g;function OT(i){return(typeof i=="string"?i:""+i).replace(mR,`
`).replace(pR,"")}function MT(i,r){return r=OT(r),OT(i)===r}function Gh(){}function nt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Qn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Qn(i,""+u);break;case"className":Si(i,"class",u);break;case"tabIndex":Si(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(i,o,u);break;case"style":Ul(i,u,m);break;case"data":if(r!=="object"){Si(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=to(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&nt(i,r,"name",f.name,f,null),nt(i,r,"formEncType",f.formEncType,f,null),nt(i,r,"formMethod",f.formMethod,f,null),nt(i,r,"formTarget",f.formTarget,f,null)):(nt(i,r,"encType",f.encType,f,null),nt(i,r,"method",f.method,f,null),nt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=to(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Gh);break;case"onScroll":u!=null&&Pe("scroll",i);break;case"onScrollEnd":u!=null&&Pe("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=to(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Pe("beforetoggle",i),Pe("toggle",i),Bs(i,"popover",u);break;case"xlinkActuate":en(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":en(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":en(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":en(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":en(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":en(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":en(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":en(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":en(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Bs(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Zd.get(o)||o,Bs(i,o,u))}}function Np(i,r,o,u,f,m){switch(o){case"style":Ul(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Qn(i,u):(typeof u=="number"||typeof u=="bigint")&&Qn(i,""+u);break;case"onScroll":u!=null&&Pe("scroll",i);break;case"onScrollEnd":u!=null&&Pe("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Gh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Rt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Bs(i,o,u)}}}function rn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",i),Pe("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,m,E,o,null)}}f&&nt(i,r,"srcSet",o.srcSet,o,null),u&&nt(i,r,"src",o.src,o,null);return;case"input":Pe("invalid",i);var w=m=E=f=null,R=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":f=Y;break;case"type":E=Y;break;case"checked":R=Y;break;case"defaultChecked":q=Y;break;case"value":m=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:nt(i,r,u,Y,o,null)}}Wr(i,m,w,R,q,E,f,!1),eo(i);return;case"select":Pe("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:nt(i,r,f,w,o,null)}r=m,o=E,i.multiple=!!u,r!=null?Ji(i,!!u,r,!1):o!=null&&Ji(i,!!u,o,!0);return;case"textarea":Pe("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:nt(i,r,E,w,o,null)}$r(i,u,f,m),eo(i);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(i,r,R,u,o,null)}return;case"dialog":Pe("beforetoggle",i),Pe("toggle",i),Pe("cancel",i),Pe("close",i);break;case"iframe":case"object":Pe("load",i);break;case"video":case"audio":for(u=0;u<Su.length;u++)Pe(Su[u],i);break;case"image":Pe("error",i),Pe("load",i);break;case"details":Pe("toggle",i);break;case"embed":case"source":case"link":Pe("error",i),Pe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,q,u,o,null)}return;default:if(zl(r)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&Np(i,r,Y,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&nt(i,r,w,u,o,null))}function gR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,w=null,R=null,q=null,Y=null;for(F in o){var Z=o[F];if(o.hasOwnProperty(F)&&Z!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":R=Z;default:u.hasOwnProperty(F)||nt(i,r,F,null,u,Z)}}for(var B in u){var F=u[B];if(Z=o[B],u.hasOwnProperty(B)&&(F!=null||Z!=null))switch(B){case"type":m=F;break;case"name":f=F;break;case"checked":q=F;break;case"defaultChecked":Y=F;break;case"value":E=F;break;case"defaultValue":w=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==Z&&nt(i,r,B,F,u,Z)}}Mn(i,E,w,R,q,Y,m,f);return;case"select":F=E=w=B=null;for(m in o)if(R=o[m],o.hasOwnProperty(m)&&R!=null)switch(m){case"value":break;case"multiple":F=R;default:u.hasOwnProperty(m)||nt(i,r,m,null,u,R)}for(f in u)if(m=u[f],R=o[f],u.hasOwnProperty(f)&&(m!=null||R!=null))switch(f){case"value":B=m;break;case"defaultValue":w=m;break;case"multiple":E=m;default:m!==R&&nt(i,r,f,m,u,R)}r=w,o=E,u=F,B!=null?Ji(i,!!o,B,!1):!!u!=!!o&&(r!=null?Ji(i,!!o,r,!0):Ji(i,!!o,o?[]:"",!1));return;case"textarea":F=B=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:nt(i,r,w,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":B=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&nt(i,r,E,f,u,m)}et(i,B,F);return;case"option":for(var Te in o)if(B=o[Te],o.hasOwnProperty(Te)&&B!=null&&!u.hasOwnProperty(Te))switch(Te){case"selected":i.selected=!1;break;default:nt(i,r,Te,null,u,B)}for(R in u)if(B=u[R],F=o[R],u.hasOwnProperty(R)&&B!==F&&(B!=null||F!=null))switch(R){case"selected":i.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:nt(i,r,R,B,u,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in o)B=o[ye],o.hasOwnProperty(ye)&&B!=null&&!u.hasOwnProperty(ye)&&nt(i,r,ye,null,u,B);for(q in u)if(B=u[q],F=o[q],u.hasOwnProperty(q)&&B!==F&&(B!=null||F!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:nt(i,r,q,B,u,F)}return;default:if(zl(r)){for(var it in o)B=o[it],o.hasOwnProperty(it)&&B!==void 0&&!u.hasOwnProperty(it)&&Np(i,r,it,void 0,u,B);for(Y in u)B=u[Y],F=o[Y],!u.hasOwnProperty(Y)||B===F||B===void 0&&F===void 0||Np(i,r,Y,B,u,F);return}}for(var V in o)B=o[V],o.hasOwnProperty(V)&&B!=null&&!u.hasOwnProperty(V)&&nt(i,r,V,null,u,B);for(Z in u)B=u[Z],F=o[Z],!u.hasOwnProperty(Z)||B===F||B==null&&F==null||nt(i,r,Z,B,u,F)}var xp=null,Dp=null;function Qh(i){return i.nodeType===9?i:i.ownerDocument}function kT(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function PT(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Op(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Mp=null;function _R(){var i=window.event;return i&&i.type==="popstate"?i===Mp?!1:(Mp=i,!0):(Mp=null,!1)}var VT=typeof setTimeout=="function"?setTimeout:void 0,yR=typeof clearTimeout=="function"?clearTimeout:void 0,LT=typeof Promise=="function"?Promise:void 0,vR=typeof queueMicrotask=="function"?queueMicrotask:typeof LT<"u"?function(i){return LT.resolve(null).then(i).catch(ER)}:VT;function ER(i){setTimeout(function(){throw i})}function ar(i){return i==="head"}function UT(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&bu(E.documentElement),o&2&&bu(E.body),o&4)for(o=E.head,bu(o),E=o.firstChild;E;){var w=E.nextSibling,R=E.nodeName;E[Qr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(f===0){i.removeChild(m),Ou(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Ou(r)}function kp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":kp(o),qs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function TR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Qr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=ci(i.nextSibling),i===null)break}return null}function SR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ci(i.nextSibling),i===null))return null;return i}function Pp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function wR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function ci(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Vp=null;function zT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function jT(i,r,o){switch(r=Qh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function bu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);qs(i)}var ni=new Map,qT=new Set;function Yh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var ys=se.d;se.d={f:bR,r:AR,D:CR,C:RR,L:IR,m:NR,X:DR,S:xR,M:OR};function bR(){var i=ys.f(),r=Uh();return i||r}function AR(i){var r=Ei(i);r!==null&&r.tag===5&&r.type==="form"?oE(r):ys.r(i)}var Vo=typeof document>"u"?null:document;function BT(i,r,o){var u=Vo;if(u&&typeof r=="string"&&r){var f=It(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),qT.has(f)||(qT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),rn(r,"link",i),St(r),u.head.appendChild(r)))}}function CR(i){ys.D(i),BT("dns-prefetch",i,null)}function RR(i,r){ys.C(i,r),BT("preconnect",i,r)}function IR(i,r,o){ys.L(i,r,o);var u=Vo;if(u&&i&&r){var f='link[rel="preload"][as="'+It(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+It(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+It(o.imageSizes)+'"]')):f+='[href="'+It(i)+'"]';var m=f;switch(r){case"style":m=Lo(i);break;case"script":m=Uo(i)}ni.has(m)||(i=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ni.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Au(m))||r==="script"&&u.querySelector(Cu(m))||(r=u.createElement("link"),rn(r,"link",i),St(r),u.head.appendChild(r)))}}function NR(i,r){ys.m(i,r);var o=Vo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+It(u)+'"][href="'+It(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Uo(i)}if(!ni.has(m)&&(i=v({rel:"modulepreload",href:i},r),ni.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Cu(m)))return}u=o.createElement("link"),rn(u,"link",i),St(u),o.head.appendChild(u)}}}function xR(i,r,o){ys.S(i,r,o);var u=Vo;if(u&&i){var f=yn(u).hoistableStyles,m=Lo(i);r=r||"default";var E=f.get(m);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(Au(m)))w.loading=5;else{i=v({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ni.get(m))&&Lp(i,o);var R=E=u.createElement("link");St(R),rn(R,"link",i),R._p=new Promise(function(q,Y){R.onload=q,R.onerror=Y}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Kh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(m,E)}}}function DR(i,r){ys.X(i,r);var o=Vo;if(o&&i){var u=yn(o).hoistableScripts,f=Uo(i),m=u.get(f);m||(m=o.querySelector(Cu(f)),m||(i=v({src:i,async:!0},r),(r=ni.get(f))&&Up(i,r),m=o.createElement("script"),St(m),rn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function OR(i,r){ys.M(i,r);var o=Vo;if(o&&i){var u=yn(o).hoistableScripts,f=Uo(i),m=u.get(f);m||(m=o.querySelector(Cu(f)),m||(i=v({src:i,async:!0,type:"module"},r),(r=ni.get(f))&&Up(i,r),m=o.createElement("script"),St(m),rn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function FT(i,r,o,u){var f=(f=Ae.current)?Yh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Lo(o.href),o=yn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Lo(o.href);var m=yn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Au(i)))&&!m._p&&(E.instance=m,E.state.loading=5),ni.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ni.set(i,o),m||MR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Uo(o),o=yn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Lo(i){return'href="'+It(i)+'"'}function Au(i){return'link[rel="stylesheet"]['+i+"]"}function HT(i){return v({},i,{"data-precedence":i.precedence,precedence:null})}function MR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),rn(r,"link",o),St(r),i.head.appendChild(r))}function Uo(i){return'[src="'+It(i)+'"]'}function Cu(i){return"script[async]"+i}function GT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+It(o.href)+'"]');if(u)return r.instance=u,St(u),u;var f=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),St(u),rn(u,"style",f),Kh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Lo(o.href);var m=i.querySelector(Au(f));if(m)return r.state.loading|=4,r.instance=m,St(m),m;u=HT(o),(f=ni.get(f))&&Lp(u,f),m=(i.ownerDocument||i).createElement("link"),St(m);var E=m;return E._p=new Promise(function(w,R){E.onload=w,E.onerror=R}),rn(m,"link",u),r.state.loading|=4,Kh(m,o.precedence,i),r.instance=m;case"script":return m=Uo(o.src),(f=i.querySelector(Cu(m)))?(r.instance=f,St(f),f):(u=o,(f=ni.get(m))&&(u=v({},o),Up(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),St(f),rn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Kh(u,o.precedence,i));return r.instance}function Kh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===r)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Lp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Up(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Xh=null;function QT(i,r,o){if(Xh===null){var u=new Map,f=Xh=new Map;f.set(o,u)}else f=Xh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Qr]||m[Lt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var w=u.get(E);w?w.push(m):u.set(E,[m])}}return u}function YT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function kR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function KT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Ru=null;function PR(){}function VR(i,r,o){if(Ru===null)throw Error(s(475));var u=Ru;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Lo(o.href),m=i.querySelector(Au(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Wh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,St(m);return}m=i.ownerDocument||i,o=HT(o),(f=ni.get(f))&&Lp(o,f),m=m.createElement("link"),St(m);var E=m;E._p=new Promise(function(w,R){E.onload=w,E.onerror=R}),rn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Wh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function LR(){if(Ru===null)throw Error(s(475));var i=Ru;return i.stylesheets&&i.count===0&&zp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&zp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Wh(){if(this.count--,this.count===0){if(this.stylesheets)zp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var $h=null;function zp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,$h=new Map,r.forEach(UR,i),$h=null,Wh.call(i))}function UR(i,r){if(!(r.state.loading&4)){var o=$h.get(i);if(o)var u=o.get(null);else{o=new Map,$h.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Wh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Iu={$$typeof:ce,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function zR(i,r,o,u,f,m,E,w){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function XT(i,r,o,u,f,m,E,w,R,q,Y,Z){return i=new zR(i,r,o,E,w,R,q,Z),r=1,m===!0&&(r|=24),m=Pn(3,null,null,r),i.current=m,m.stateNode=i,r=Em(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},bm(m),i}function WT(i){return i?(i=po,i):po}function $T(i,r,o,u,f,m){f=WT(f),u.context===null?u.context=f:u.pendingContext=f,u=Ys(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Ks(i,u,r),o!==null&&(jn(o,i,r),su(o,i,r))}function ZT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function jp(i,r){ZT(i,r),(i=i.alternate)&&ZT(i,r)}function JT(i){if(i.tag===13){var r=mo(i,67108864);r!==null&&jn(r,i,67108864),jp(i,67108864)}}var Zh=!0;function jR(i,r,o,u){var f=G.T;G.T=null;var m=se.p;try{se.p=2,qp(i,r,o,u)}finally{se.p=m,G.T=f}}function qR(i,r,o,u){var f=G.T;G.T=null;var m=se.p;try{se.p=8,qp(i,r,o,u)}finally{se.p=m,G.T=f}}function qp(i,r,o,u){if(Zh){var f=Bp(u);if(f===null)Ip(i,r,u,Jh,o),t0(i,u);else if(FR(f,i,r,o,u))u.stopPropagation();else if(t0(i,u),r&4&&-1<BR.indexOf(i)){for(;f!==null;){var m=Ei(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ri(m.pendingLanes);if(E!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var R=1<<31-un(E);w.entanglements[1]|=R,E&=~R}ki(m),($e&6)===0&&(Vh=Hn()+500,Tu(0))}}break;case 13:w=mo(m,2),w!==null&&jn(w,m,2),Uh(),jp(m,2)}if(m=Bp(u),m===null&&Ip(i,r,u,Jh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Ip(i,r,u,null,o)}}function Bp(i){return i=Yn(i),Fp(i)}var Jh=null;function Fp(i){if(Jh=null,i=Wi(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return Jh=i,null}function e0(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qd()){case Cl:return 2;case Qa:return 8;case qr:case Yd:return 32;case Ya:return 268435456;default:return 32}default:return 32}}var Hp=!1,or=null,lr=null,ur=null,Nu=new Map,xu=new Map,cr=[],BR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(i,r){switch(i){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Nu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xu.delete(r.pointerId)}}function Du(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ei(r),r!==null&&JT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function FR(i,r,o,u,f){switch(r){case"focusin":return or=Du(or,i,r,o,u,f),!0;case"dragenter":return lr=Du(lr,i,r,o,u,f),!0;case"mouseover":return ur=Du(ur,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Nu.set(m,Du(Nu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,xu.set(m,Du(xu.get(m)||null,i,r,o,u,f)),!0}return!1}function n0(i){var r=Wi(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Uc(i.priority,function(){if(o.tag===13){var u=zn();u=Us(u);var f=mo(o,u);f!==null&&jn(f,o,u),jp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ef(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Bp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);es=u,o.target.dispatchEvent(u),es=null}else return r=Ei(o),r!==null&&JT(r),i.blockedOn=o,!1;r.shift()}return!0}function i0(i,r,o){ef(i)&&o.delete(r)}function HR(){Hp=!1,or!==null&&ef(or)&&(or=null),lr!==null&&ef(lr)&&(lr=null),ur!==null&&ef(ur)&&(ur=null),Nu.forEach(i0),xu.forEach(i0)}function tf(i,r){i.blockedOn===r&&(i.blockedOn=null,Hp||(Hp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,HR)))}var nf=null;function s0(i){nf!==i&&(nf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){nf===i&&(nf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Fp(u||o)===null)continue;break}var m=Ei(o);m!==null&&(i.splice(r,3),r-=3,Fm(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Ou(i){function r(R){return tf(R,i)}or!==null&&tf(or,i),lr!==null&&tf(lr,i),ur!==null&&tf(ur,i),Nu.forEach(r),xu.forEach(r);for(var o=0;o<cr.length;o++){var u=cr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)n0(o),o.blockedOn===null&&cr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Rt]||null;if(typeof m=="function")E||s0(o);else if(E){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Rt]||null)w=E.formAction;else if(Fp(f)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),s0(o)}}}function Gp(i){this._internalRoot=i}sf.prototype.render=Gp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=zn();$T(o,u,i,r,null,null)},sf.prototype.unmount=Gp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;$T(i.current,2,null,i,null,null),Uh(),r[Gn]=null}};function sf(i){this._internalRoot=i}sf.prototype.unstable_scheduleHydration=function(i){if(i){var r=zs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<cr.length&&r!==0&&r<cr[o].priority;o++);cr.splice(o,0,i),o===0&&n0(i)}};var r0=e.version;if(r0!=="19.1.1")throw Error(s(527,r0,"19.1.1"));se.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var GR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rf.isDisabled&&rf.supportsFiber)try{yt=rf.inject(GR),We=rf}catch{}}return ku.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=TE,m=SE,E=wE,w=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=XT(i,1,!1,null,null,o,u,f,m,E,w,null),i[Gn]=r.current,Rp(i),new Gp(r)},ku.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=TE,E=SE,w=wE,R=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=XT(i,1,!0,r,o??null,u,f,m,E,w,R,q),r.context=WT(null),o=r.current,u=zn(),u=Us(u),f=Ys(u),f.callback=null,Ks(o,f,u),o=u,r.current.lanes=o,Xi(r,o),ki(r),i[Gn]=r.current,Rp(i),new sf(r)},ku.version="19.1.1",ku}var p0;function tI(){if(p0)return Kp.exports;p0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kp.exports=eI(),Kp.exports}var nI=tI();const iI=()=>{};var g0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=function(n,e){if(!n)throw dl(e)},dl=function(n){return new Error("Firebase Database ("+Uw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},sI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,x=g&63;p||(x=64,c||(S=64)),s.push(t[v],t[T],t[S],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new rI;const S=l<<2|d>>4;if(s.push(S),g!==64){const x=d<<4&240|g>>2;if(s.push(x),T!==64){const U=g<<6&192|T;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jw=function(n){const e=zw(n);return u_.encodeByteArray(e,!0)},Cf=function(n){return jw(n).replace(/\./g,"")},Rf=function(n){try{return u_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n){return qw(void 0,n)}function qw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!oI(t)||(n[t]=qw(n[t],e[t]));return n}function oI(n){return n!=="__proto__"}/**
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
 */function lI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>lI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof g0>"u")return;const n=g0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rf(n[1]);return e&&JSON.parse(e)},ud=()=>{try{return iI()||uI()||cI()||hI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bw=n=>ud()?.emulatorHosts?.[n],Fw=n=>{const e=Bw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Hw=()=>ud()?.config,Gw=n=>ud()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function kr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function c_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Qw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Cf(JSON.stringify(t)),Cf(JSON.stringify(c)),""].join(".")}const Fu={};function fI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fu))Fu[e]?n.emulator.push(e):n.prod.push(e);return n}function dI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let _0=!1;function h_(n,e){if(typeof window>"u"||typeof document>"u"||!kr(window.location.host)||Fu[n]===e||Fu[n]||_0)return;Fu[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=fI().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,x){S.setAttribute("width","24"),S.setAttribute("id",x),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{_0=!0,c()},S}function v(S,x){S.setAttribute("id",x),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=dI(s),x=t("text"),U=document.getElementById(x)||document.createElement("span"),Q=t("learnmore"),K=document.getElementById(Q)||document.createElement("a"),ge=t("preprendIcon"),ue=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ce=S.element;d(ce),v(K,Q);const Le=g();p(ue,ge),ce.append(ue,U,K,Le),document.body.appendChild(ce)}l?(U.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gn())}function mI(){const n=ud()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _I(){const n=gn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yI(){return Uw.NODE_ADMIN===!0}function vI(){return!mI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function EI(){try{return typeof indexedDB=="object"}catch{return!1}}function TI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="FirebaseError";class Ps extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=SI,Object.setPrototypeOf(this,Ps.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_c.prototype.create)}}class _c{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?wI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ps(a,d,s)}}function wI(n,e){return n.replace(bI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const bI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n){return JSON.parse(n)}function Jt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=ec(Rf(l[0])||""),t=ec(Rf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},AI=function(n){const e=Kw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},CI=function(n){const e=Kw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Jo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function If(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Bi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(y0(l)&&y0(c)){if(!Bi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function y0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),v=1518500249):(g=l^c^d,v=1859775393):T<60?(g=l&c|d&(l|c),v=2400959708):(g=l^c^d,v=3395469782);const S=(a<<5|a>>>27)+g+p+v+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function II(n,e){const t=new NI(n,e);return t.subscribe.bind(t)}class NI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");xI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Zp),a.error===void 0&&(a.error=Zp),a.complete===void 0&&(a.complete=Zp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zp(){}function el(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ie(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},cd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ut(n){return n&&n._delegate?n._delegate:n}class br{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ta="[DEFAULT]";/**
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
 */class OI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Es;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kI(e))try{this.getOrInitializeService({instanceIdentifier:Ta})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Ta){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ta){return this.instances.has(e)}getOptions(e=Ta){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:MI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ta){return this.component?this.component.multipleInstances?e:Ta:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MI(n){return n===Ta?void 0:n}function kI(n){return n.instantiationMode==="EAGER"}/**
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
 */class PI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new OI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const VI={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},LI=Ve.INFO,UI={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},zI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=UI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hd{constructor(e){this.name=e,this._logLevel=LI,this._logHandler=zI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const jI=(n,e)=>e.some(t=>n instanceof t);let v0,E0;function qI(){return v0||(v0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return E0||(E0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xw=new WeakMap,Eg=new WeakMap,Ww=new WeakMap,Jp=new WeakMap,d_=new WeakMap;function FI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(_r(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Xw.set(t,n)}).catch(()=>{}),d_.set(e,n),e}function HI(n){if(Eg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Eg.set(n,e)}let Tg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Eg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ww.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _r(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function GI(n){Tg=n(Tg)}function QI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(eg(this),e,...t);return Ww.set(s,e.sort?e.sort():[e]),_r(s)}:BI().includes(n)?function(...e){return n.apply(eg(this),e),_r(Xw.get(this))}:function(...e){return _r(n.apply(eg(this),e))}}function YI(n){return typeof n=="function"?QI(n):(n instanceof IDBTransaction&&HI(n),jI(n,qI())?new Proxy(n,Tg):n)}function _r(n){if(n instanceof IDBRequest)return FI(n);if(Jp.has(n))return Jp.get(n);const e=YI(n);return e!==n&&(Jp.set(n,e),d_.set(e,n)),e}const eg=n=>d_.get(n);function KI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=_r(c);return s&&c.addEventListener("upgradeneeded",p=>{s(_r(c.result),p.oldVersion,p.newVersion,_r(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const XI=["get","getKey","getAll","getAllKeys","count"],WI=["put","add","delete","clear"],tg=new Map;function T0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tg.get(e))return tg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=WI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||XI.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return tg.set(e,l),l}GI(n=>({...n,get:(e,t,s)=>T0(e,t)||n.get(e,t,s),has:(e,t)=>!!T0(e,t)||n.has(e,t)}));/**
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
 */class $I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ZI(n){return n.getComponent()?.type==="VERSION"}const Sg="@firebase/app",S0="0.14.1";/**
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
 */const Is=new hd("@firebase/app"),JI="@firebase/app-compat",eN="@firebase/analytics-compat",tN="@firebase/analytics",nN="@firebase/app-check-compat",iN="@firebase/app-check",sN="@firebase/auth",rN="@firebase/auth-compat",aN="@firebase/database",oN="@firebase/data-connect",lN="@firebase/database-compat",uN="@firebase/functions",cN="@firebase/functions-compat",hN="@firebase/installations",fN="@firebase/installations-compat",dN="@firebase/messaging",mN="@firebase/messaging-compat",pN="@firebase/performance",gN="@firebase/performance-compat",_N="@firebase/remote-config",yN="@firebase/remote-config-compat",vN="@firebase/storage",EN="@firebase/storage-compat",TN="@firebase/firestore",SN="@firebase/ai",wN="@firebase/firestore-compat",bN="firebase",AN="12.1.0";/**
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
 */const wg="[DEFAULT]",CN={[Sg]:"fire-core",[JI]:"fire-core-compat",[tN]:"fire-analytics",[eN]:"fire-analytics-compat",[iN]:"fire-app-check",[nN]:"fire-app-check-compat",[sN]:"fire-auth",[rN]:"fire-auth-compat",[aN]:"fire-rtdb",[oN]:"fire-data-connect",[lN]:"fire-rtdb-compat",[uN]:"fire-fn",[cN]:"fire-fn-compat",[hN]:"fire-iid",[fN]:"fire-iid-compat",[dN]:"fire-fcm",[mN]:"fire-fcm-compat",[pN]:"fire-perf",[gN]:"fire-perf-compat",[_N]:"fire-rc",[yN]:"fire-rc-compat",[vN]:"fire-gcs",[EN]:"fire-gcs-compat",[TN]:"fire-fst",[wN]:"fire-fst-compat",[SN]:"fire-vertex","fire-js":"fire-js",[bN]:"fire-js-all"};/**
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
 */const xf=new Map,RN=new Map,bg=new Map;function w0(n,e){try{n.container.addComponent(e)}catch(t){Is.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Da(n){const e=n.name;if(bg.has(e))return Is.debug(`There were multiple attempts to register component ${e}.`),!1;bg.set(e,n);for(const t of xf.values())w0(t,n);for(const t of RN.values())w0(t,n);return!0}function fd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const IN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new _c("app","Firebase",IN);/**
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
 */class NN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const ja=AN;function $w(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:wg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw yr.create("bad-app-name",{appName:String(a)});if(t||(t=Hw()),!t)throw yr.create("no-options");const l=xf.get(a);if(l){if(Bi(t,l.options)&&Bi(s,l.config))return l;throw yr.create("duplicate-app",{appName:a})}const c=new PI(a);for(const p of bg.values())c.addComponent(p);const d=new NN(t,s,c);return xf.set(a,d),d}function m_(n=wg){const e=xf.get(n);if(!e&&n===wg&&Hw())return $w();if(!e)throw yr.create("no-app",{appName:n});return e}function Vi(n,e,t){let s=CN[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Is.warn(c.join(" "));return}Da(new br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xN="firebase-heartbeat-database",DN=1,tc="firebase-heartbeat-store";let ng=null;function Zw(){return ng||(ng=KI(xN,DN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tc)}catch(t){console.warn(t)}}}}).catch(n=>{throw yr.create("idb-open",{originalErrorMessage:n.message})})),ng}async function ON(n){try{const t=(await Zw()).transaction(tc),s=await t.objectStore(tc).get(Jw(n));return await t.done,s}catch(e){if(e instanceof Ps)Is.warn(e.message);else{const t=yr.create("idb-get",{originalErrorMessage:e?.message});Is.warn(t.message)}}}async function b0(n,e){try{const s=(await Zw()).transaction(tc,"readwrite");await s.objectStore(tc).put(e,Jw(n)),await s.done}catch(t){if(t instanceof Ps)Is.warn(t.message);else{const s=yr.create("idb-set",{originalErrorMessage:t?.message});Is.warn(s.message)}}}function Jw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const MN=1024,kN=30;class PN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new LN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=A0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>kN){const a=UN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Is.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=A0(),{heartbeatsToSend:t,unsentEntries:s}=VN(this._heartbeatsCache.heartbeats),a=Cf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Is.warn(e),""}}}function A0(){return new Date().toISOString().substring(0,10)}function VN(n,e=MN){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),C0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),C0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class LN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EI()?TI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ON(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return b0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return b0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function C0(n){return Cf(JSON.stringify({version:2,heartbeats:n})).length}function UN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function zN(n){Da(new br("platform-logger",e=>new $I(e),"PRIVATE")),Da(new br("heartbeat",e=>new PN(e),"PRIVATE")),Vi(Sg,S0,n),Vi(Sg,S0,"esm2020"),Vi("fire-js","")}zN("");var jN="firebase",qN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi(jN,qN,"app");function eb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BN=eb,tb=new _c("auth","Firebase",eb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new hd("@firebase/auth");function FN(n,...e){Df.logLevel<=Ve.WARN&&Df.warn(`Auth (${ja}): ${n}`,...e)}function mf(n,...e){Df.logLevel<=Ve.ERROR&&Df.error(`Auth (${ja}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n,...e){throw g_(n,...e)}function mi(n,...e){return g_(n,...e)}function p_(n,e,t){const s={...BN(),[e]:t};return new _c("auth","Firebase",s).create(e,{appName:n.name})}function vr(n){return p_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Fi(n,"argument-error"),p_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return tb.create(n,...e)}function be(n,e,...t){if(!n)throw g_(e,...t)}function Ss(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mf(e),new Error(e)}function Ns(n,e){n||Ss(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){return typeof self<"u"&&self.location?.href||""}function GN(){return R0()==="http:"||R0()==="https:"}function R0(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GN()||gI()||"connection"in navigator)?navigator.onLine:!0}function YN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ns(t>e,"Short delay should be less than long delay!"),this.isMobile=f_()||Yw()}get(){return QN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n,e){Ns(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ss("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ss("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ss("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],WN=new yc(3e4,6e4);function dd(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function pl(n,e,t,s,a={}){return ib(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=ml({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return pI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&kr(n.emulatorConfig.host)&&(g.credentials="include"),nb.fetch()(await rb(n,n.config.apiHost,t,d),g)})}async function ib(n,e,t){n._canInitEmulator=!1;const s={...KN,...e};try{const a=new $N(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw af(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw af(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw af(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw af(n,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw p_(n,v,g);Fi(n,v)}}catch(a){if(a instanceof Ps)throw a;Fi(n,"network-request-failed",{message:String(a)})}}async function sb(n,e,t,s,a={}){const l=await pl(n,e,t,s,a);return"mfaPendingCredential"in l&&Fi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function rb(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?__(n.config,a):`${n.config.apiScheme}://${a}`;return XN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class $N{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(mi(this.auth,"network-request-failed")),WN.get())})}}function af(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=mi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(n,e){return pl(n,"POST","/v1/accounts:delete",e)}async function Of(n,e){return pl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JN(n,e=!1){const t=ut(n),s=await t.getIdToken(e),a=y_(s);be(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Hu(ig(a.auth_time)),issuedAtTime:Hu(ig(a.iat)),expirationTime:Hu(ig(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ig(n){return Number(n)*1e3}function y_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return mf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Rf(t);return a?JSON.parse(a):(mf("Failed to decode base64 JWT payload"),null)}catch(a){return mf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function I0(n){const e=y_(n);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ps&&e2(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function e2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hu(this.lastLoginAt),this.creationTime=Hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mf(n){const e=n.auth,t=await n.getIdToken(),s=await nc(n,Of(e,{idToken:t}));be(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?ab(a.providerUserInfo):[],c=i2(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Cg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,v)}async function n2(n){const e=ut(n);await Mf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i2(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function ab(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s2(n,e){const t=await ib(n,{},async()=>{const s=ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await rb(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&kr(n.emulatorConfig.host)&&(p.credentials="include"),nb.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function r2(n,e){return pl(n,"POST","/v2/accounts:revokeToken",dd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):I0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=I0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await s2(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Qo;return s&&(be(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(be(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(be(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return Ss("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,e){be(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new t2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await nc(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return JN(this,e)}reload(){return n2(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await nc(this,ZN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:S,isAnonymous:x,providerData:U,stsTokenManager:Q}=t;be(T&&Q,e,"internal-error");const K=Qo.fromJSON(this.name,Q);be(typeof T=="string",e,"internal-error"),fr(s,e.name),fr(a,e.name),be(typeof S=="boolean",e,"internal-error"),be(typeof x=="boolean",e,"internal-error"),fr(l,e.name),fr(c,e.name),fr(d,e.name),fr(p,e.name),fr(g,e.name),fr(v,e.name);const ge=new fi({uid:T,auth:e,email:a,emailVerified:S,displayName:s,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:K,createdAt:g,lastLoginAt:v});return U&&Array.isArray(U)&&(ge.providerData=U.map(ue=>({...ue}))),p&&(ge._redirectEventId=p),ge}static async _fromIdTokenResponse(e,t,s=!1){const a=new Qo;a.updateFromServerResponse(t);const l=new fi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Mf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];be(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?ab(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Qo;d.updateFromIdToken(s);const p=new fi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Cg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new Map;function ws(n){Ns(n instanceof Function,"Expected a class definition");let e=N0.get(n);return e?(Ns(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,N0.set(n,e),e)}/**
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
 */class ob{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ob.type="NONE";const x0=ob;/**
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
 */function pf(n,e,t){return`firebase:${n}:${e}:${t}`}class Yo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=pf(this.userKey,a.apiKey,l),this.fullPersistenceKey=pf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Of(this.auth,{idToken:e}).catch(()=>{});return t?fi._fromGetAccountInfoResponse(this.auth,t,e):null}return fi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Yo(ws(x0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ws(x0);const c=pf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const S=await Of(e,{idToken:v}).catch(()=>{});if(!S)break;T=await fi._fromGetAccountInfoResponse(e,S,v)}else T=fi._fromJSON(e,v);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Yo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Yo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(db(e))return"Blackberry";if(mb(e))return"Webos";if(ub(e))return"Safari";if((e.includes("chrome/")||cb(e))&&!e.includes("edge/"))return"Chrome";if(fb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function lb(n=gn()){return/firefox\//i.test(n)}function ub(n=gn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cb(n=gn()){return/crios\//i.test(n)}function hb(n=gn()){return/iemobile/i.test(n)}function fb(n=gn()){return/android/i.test(n)}function db(n=gn()){return/blackberry/i.test(n)}function mb(n=gn()){return/webos/i.test(n)}function v_(n=gn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function a2(n=gn()){return v_(n)&&!!window.navigator?.standalone}function o2(){return _I()&&document.documentMode===10}function pb(n=gn()){return v_(n)||fb(n)||mb(n)||db(n)||/windows phone/i.test(n)||hb(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n,e=[]){let t;switch(n){case"Browser":t=D0(gn());break;case"Worker":t=`${D0(gn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ja}/${s}`}/**
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
 */class l2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function u2(n,e={}){return pl(n,"GET","/v2/passwordPolicy",dd(n,e))}/**
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
 */const c2=6;class h2{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??c2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new O0(this),this.idTokenSubscription=new O0(this),this.beforeStateQueue=new l2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ws(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Yo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Of(this,{idToken:e}),s=await fi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(vr(this));const t=e?ut(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ws(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await u2(this),t=new h2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _c("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await r2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ws(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await Yo.create(this,[ws(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&FN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function vc(n){return ut(n)}class O0{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function d2(n){E_=n}function m2(n){return E_.loadJS(n)}function p2(){return E_.gapiScript}function g2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(n,e){const t=fd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Bi(l,e??{}))return a;Fi(a,"already-initialized")}return t.initialize({options:e})}function y2(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(ws);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function v2(n,e,t){const s=vc(n);be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=_b(e),{host:c,port:d}=E2(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){be(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),be(Bi(g,s.config.emulator)&&Bi(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,kr(c)?(c_(`${l}//${c}${p}`),h_("Auth",!0)):T2()}function _b(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function E2(n){const e=_b(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:M0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:M0(c)}}}function M0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function T2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ss("not implemented")}_getIdTokenResponse(e){return Ss("not implemented")}_linkToIdToken(e,t){return Ss("not implemented")}_getReauthenticationResolver(e){return Ss("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(n,e){return sb(n,"POST","/v1/accounts:signInWithIdp",dd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2="http://localhost";class Oa extends yb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new Oa(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ko(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ko(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ko(e,t)}buildRequest(){const e={requestUri:S2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ml(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ec extends T_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ec{constructor(){super("facebook.com")}static credential(e){return Oa._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Oa._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ts.credential(t,s)}catch{return null}}}Ts.GOOGLE_SIGN_IN_METHOD="google.com";Ts.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ec{constructor(){super("github.com")}static credential(e){return Oa._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ec{constructor(){super("twitter.com")}static credential(e,t){return Oa._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pr.credential(t,s)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await fi._fromIdTokenResponse(e,s,a),c=k0(s);return new Ma({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=k0(s);return new Ma({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function k0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends Ps{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,kf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new kf(e,t,s,a)}}function vb(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?kf._fromErrorAndOperation(n,l,e,s):l})}async function w2(n,e,t=!1){const s=await nc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ma._forOperation(n,"link",s)}/**
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
 */async function b2(n,e,t=!1){const{auth:s}=n;if(qn(s.app))return Promise.reject(vr(s));const a="reauthenticate";try{const l=await nc(n,vb(s,a,e,n),t);be(l.idToken,s,"internal-error");const c=y_(l.idToken);be(c,s,"internal-error");const{sub:d}=c;return be(n.uid===d,s,"user-mismatch"),Ma._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Fi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(n,e,t=!1){if(qn(n.app))return Promise.reject(vr(n));const s="signIn",a=await vb(n,s,e),l=await Ma._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(n,e){return sb(n,"POST","/v1/accounts:signInWithCustomToken",dd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(n,e){if(qn(n.app))return Promise.reject(vr(n));const t=vc(n),s=await C2(t,{token:e,returnSecureToken:!0}),a=await Ma._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function I2(n,e,t,s){return ut(n).onIdTokenChanged(e,t,s)}function N2(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}function x2(n,e,t,s){return ut(n).onAuthStateChanged(e,t,s)}function D2(n){return ut(n).signOut()}const Pf="__sak";/**
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
 */class Eb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pf,"1"),this.storage.removeItem(Pf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=1e3,M2=10;class Tb extends Eb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);o2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,M2):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},O2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tb.type="LOCAL";const k2=Tb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb extends Eb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sb.type="SESSION";const wb=Sb;/**
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
 */function P2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new md(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await P2(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class V2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=S_("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return window}function L2(n){Li().location.href=n}/**
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
 */function bb(){return typeof Li().WorkerGlobalScope<"u"&&typeof Li().importScripts=="function"}async function U2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z2(){return navigator?.serviceWorker?.controller||null}function j2(){return bb()?self:null}/**
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
 */const Ab="firebaseLocalStorageDb",q2=1,Vf="firebaseLocalStorage",Cb="fbase_key";class Tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pd(n,e){return n.transaction([Vf],e?"readwrite":"readonly").objectStore(Vf)}function B2(){const n=indexedDB.deleteDatabase(Ab);return new Tc(n).toPromise()}function Rg(){const n=indexedDB.open(Ab,q2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Vf,{keyPath:Cb})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Vf)?e(s):(s.close(),await B2(),e(await Rg()))})})}async function P0(n,e,t){const s=pd(n,!0).put({[Cb]:e,value:t});return new Tc(s).toPromise()}async function F2(n,e){const t=pd(n,!1).get(e),s=await new Tc(t).toPromise();return s===void 0?null:s.value}function V0(n,e){const t=pd(n,!0).delete(e);return new Tc(t).toPromise()}const H2=800,G2=3;class Rb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>G2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(j2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await U2(),!this.activeServiceWorker)return;this.sender=new V2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rg();return await P0(e,Pf,"1"),await V0(e,Pf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>P0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>F2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>V0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=pd(a,!1).getAll();return new Tc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rb.type="LOCAL";const Q2=Rb;new yc(3e4,6e4);/**
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
 */function Ib(n,e){return e?ws(e):(be(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class w_ extends yb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Y2(n){return A2(n.auth,new w_(n),n.bypassAuthState)}function K2(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),b2(t,new w_(n),n.bypassAuthState)}async function X2(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),w2(t,new w_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Y2;case"linkViaPopup":case"linkViaRedirect":return X2;case"reauthViaPopup":case"reauthViaRedirect":return K2;default:Fi(this.auth,"internal-error")}}resolve(e){Ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=new yc(2e3,1e4);async function $2(n,e,t){if(qn(n.app))return Promise.reject(mi(n,"operation-not-supported-in-this-environment"));const s=vc(n);HN(n,e,T_);const a=Ib(s,t);return new wa(s,"signInViaPopup",e,a).executeNotNull()}class wa extends Nb{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,wa.currentPopupAction&&wa.currentPopupAction.cancel(),wa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Ns(this.filter.length===1,"Popup operations only handle one event");const e=S_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wa.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,W2.get())};e()}}wa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="pendingRedirect",gf=new Map;class J2 extends Nb{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=gf.get(this.auth._key());if(!e){try{const s=await ex(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}gf.set(this.auth._key(),e)}return this.bypassAuthState||gf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ex(n,e){const t=ix(e),s=nx(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function tx(n,e){gf.set(n._key(),e)}function nx(n){return ws(n._redirectPersistence)}function ix(n){return pf(Z2,n.config.apiKey,n.name)}async function sx(n,e,t=!1){if(qn(n.app))return Promise.reject(vr(n));const s=vc(n),a=Ib(s,e),c=await new J2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=600*1e3;class ax{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ox(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!xb(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(mi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rx&&this.cachedEventUids.clear(),this.cachedEventUids.has(L0(e))}saveEventToCache(e){this.cachedEventUids.add(L0(e)),this.lastProcessedEventTime=Date.now()}}function L0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xb({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ox(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(n,e={}){return pl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cx=/^https?/;async function hx(n){if(n.config.emulator)return;const{authorizedDomains:e}=await lx(n);for(const t of e)try{if(fx(t))return}catch{}Fi(n,"unauthorized-domain")}function fx(n){const e=Ag(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!cx.test(t))return!1;if(ux.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const dx=new yc(3e4,6e4);function U0(){const n=Li().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function mx(n){return new Promise((e,t)=>{function s(){U0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{U0(),t(mi(n,"network-request-failed"))},timeout:dx.get()})}if(Li().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Li().gapi?.load)s();else{const a=g2("iframefcb");return Li()[a]=()=>{gapi.load?s():t(mi(n,"network-request-failed"))},m2(`${p2()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw _f=null,e})}let _f=null;function px(n){return _f=_f||mx(n),_f}/**
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
 */const gx=new yc(5e3,15e3),_x="__/auth/iframe",yx="emulator/auth/iframe",vx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tx(n){const e=n.config;be(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?__(e,yx):`https://${n.config.authDomain}/${_x}`,s={apiKey:e.apiKey,appName:n.name,v:ja},a=Ex.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ml(s).slice(1)}`}async function Sx(n){const e=await px(n),t=Li().gapi;return be(t,n,"internal-error"),e.open({where:document.body,url:Tx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vx,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=mi(n,"network-request-failed"),d=Li().setTimeout(()=>{l(c)},gx.get());function p(){Li().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const wx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bx=500,Ax=600,Cx="_blank",Rx="http://localhost";class z0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ix(n,e,t,s=bx,a=Ax){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...wx,width:s.toString(),height:a.toString(),top:l,left:c},g=gn().toLowerCase();t&&(d=cb(g)?Cx:t),lb(g)&&(e=e||Rx,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[x,U])=>`${S}${x}=${U},`,"");if(a2(g)&&d!=="_self")return Nx(e||"",d),new z0(null);const T=window.open(e||"",d,v);be(T,n,"popup-blocked");try{T.focus()}catch{}return new z0(T)}function Nx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const xx="__/auth/handler",Dx="emulator/auth/handler",Ox=encodeURIComponent("fac");async function j0(n,e,t,s,a,l){be(n.config.authDomain,n,"auth-domain-config-required"),be(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ja,eventId:a};if(e instanceof T_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",If(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Ec){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),g=p?`#${Ox}=${encodeURIComponent(p)}`:"";return`${Mx(n)}?${ml(d).slice(1)}${g}`}function Mx({config:n}){return n.emulator?__(n,Dx):`https://${n.authDomain}/${xx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="webStorageSupport";class kx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wb,this._completeRedirectFn=sx,this._overrideRedirectResult=tx}async _openPopup(e,t,s,a){Ns(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await j0(e,t,s,Ag(),a);return Ix(e,l,S_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await j0(e,t,s,Ag(),a);return L2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ns(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Sx(e),s=new ax(e);return t.register("authEvent",a=>(be(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sg,{type:sg},a=>{const l=a?.[0]?.[sg];l!==void 0&&t(!!l),Fi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pb()||ub()||v_()}}const Px=kx;var q0="@firebase/auth",B0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ux(n){Da(new br("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;be(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gb(n)},g=new f2(s,a,l,p);return y2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Da(new br("auth-internal",e=>{const t=vc(e.getProvider("auth").getImmediate());return(s=>new Vx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vi(q0,B0,Lx(n)),Vi(q0,B0,"esm2020")}/**
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
 */const zx=300,jx=Gw("authIdTokenMaxAge")||zx;let F0=null;const qx=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>jx)return;const a=t?.token;F0!==a&&(F0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Bx(n=m_()){const e=fd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_2(n,{popupRedirectResolver:Px,persistence:[Q2,k2,wb]}),s=Gw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=qx(l.toString());N2(t,c,()=>c(t.currentUser)),I2(t,d=>c(d))}}const a=Bw("auth");return a&&v2(t,`http://${a}`),t}function Fx(){return document.getElementsByTagName("head")?.[0]??document}d2({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=mi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",Fx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ux("Browser");var H0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,Db;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,A){function C(){}C.prototype=A.prototype,P.D=A.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(M,k,L){for(var N=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)N[Vt-2]=arguments[Vt];return A.prototype[k].apply(M,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,A,C){C||(C=0);var M=Array(16);if(typeof A=="string")for(var k=0;16>k;++k)M[k]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(k=0;16>k;++k)M[k]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=P.g[0],C=P.g[1],k=P.g[2];var L=P.g[3],N=A+(L^C&(k^L))+M[0]+3614090360&4294967295;A=C+(N<<7&4294967295|N>>>25),N=L+(k^A&(C^k))+M[1]+3905402710&4294967295,L=A+(N<<12&4294967295|N>>>20),N=k+(C^L&(A^C))+M[2]+606105819&4294967295,k=L+(N<<17&4294967295|N>>>15),N=C+(A^k&(L^A))+M[3]+3250441966&4294967295,C=k+(N<<22&4294967295|N>>>10),N=A+(L^C&(k^L))+M[4]+4118548399&4294967295,A=C+(N<<7&4294967295|N>>>25),N=L+(k^A&(C^k))+M[5]+1200080426&4294967295,L=A+(N<<12&4294967295|N>>>20),N=k+(C^L&(A^C))+M[6]+2821735955&4294967295,k=L+(N<<17&4294967295|N>>>15),N=C+(A^k&(L^A))+M[7]+4249261313&4294967295,C=k+(N<<22&4294967295|N>>>10),N=A+(L^C&(k^L))+M[8]+1770035416&4294967295,A=C+(N<<7&4294967295|N>>>25),N=L+(k^A&(C^k))+M[9]+2336552879&4294967295,L=A+(N<<12&4294967295|N>>>20),N=k+(C^L&(A^C))+M[10]+4294925233&4294967295,k=L+(N<<17&4294967295|N>>>15),N=C+(A^k&(L^A))+M[11]+2304563134&4294967295,C=k+(N<<22&4294967295|N>>>10),N=A+(L^C&(k^L))+M[12]+1804603682&4294967295,A=C+(N<<7&4294967295|N>>>25),N=L+(k^A&(C^k))+M[13]+4254626195&4294967295,L=A+(N<<12&4294967295|N>>>20),N=k+(C^L&(A^C))+M[14]+2792965006&4294967295,k=L+(N<<17&4294967295|N>>>15),N=C+(A^k&(L^A))+M[15]+1236535329&4294967295,C=k+(N<<22&4294967295|N>>>10),N=A+(k^L&(C^k))+M[1]+4129170786&4294967295,A=C+(N<<5&4294967295|N>>>27),N=L+(C^k&(A^C))+M[6]+3225465664&4294967295,L=A+(N<<9&4294967295|N>>>23),N=k+(A^C&(L^A))+M[11]+643717713&4294967295,k=L+(N<<14&4294967295|N>>>18),N=C+(L^A&(k^L))+M[0]+3921069994&4294967295,C=k+(N<<20&4294967295|N>>>12),N=A+(k^L&(C^k))+M[5]+3593408605&4294967295,A=C+(N<<5&4294967295|N>>>27),N=L+(C^k&(A^C))+M[10]+38016083&4294967295,L=A+(N<<9&4294967295|N>>>23),N=k+(A^C&(L^A))+M[15]+3634488961&4294967295,k=L+(N<<14&4294967295|N>>>18),N=C+(L^A&(k^L))+M[4]+3889429448&4294967295,C=k+(N<<20&4294967295|N>>>12),N=A+(k^L&(C^k))+M[9]+568446438&4294967295,A=C+(N<<5&4294967295|N>>>27),N=L+(C^k&(A^C))+M[14]+3275163606&4294967295,L=A+(N<<9&4294967295|N>>>23),N=k+(A^C&(L^A))+M[3]+4107603335&4294967295,k=L+(N<<14&4294967295|N>>>18),N=C+(L^A&(k^L))+M[8]+1163531501&4294967295,C=k+(N<<20&4294967295|N>>>12),N=A+(k^L&(C^k))+M[13]+2850285829&4294967295,A=C+(N<<5&4294967295|N>>>27),N=L+(C^k&(A^C))+M[2]+4243563512&4294967295,L=A+(N<<9&4294967295|N>>>23),N=k+(A^C&(L^A))+M[7]+1735328473&4294967295,k=L+(N<<14&4294967295|N>>>18),N=C+(L^A&(k^L))+M[12]+2368359562&4294967295,C=k+(N<<20&4294967295|N>>>12),N=A+(C^k^L)+M[5]+4294588738&4294967295,A=C+(N<<4&4294967295|N>>>28),N=L+(A^C^k)+M[8]+2272392833&4294967295,L=A+(N<<11&4294967295|N>>>21),N=k+(L^A^C)+M[11]+1839030562&4294967295,k=L+(N<<16&4294967295|N>>>16),N=C+(k^L^A)+M[14]+4259657740&4294967295,C=k+(N<<23&4294967295|N>>>9),N=A+(C^k^L)+M[1]+2763975236&4294967295,A=C+(N<<4&4294967295|N>>>28),N=L+(A^C^k)+M[4]+1272893353&4294967295,L=A+(N<<11&4294967295|N>>>21),N=k+(L^A^C)+M[7]+4139469664&4294967295,k=L+(N<<16&4294967295|N>>>16),N=C+(k^L^A)+M[10]+3200236656&4294967295,C=k+(N<<23&4294967295|N>>>9),N=A+(C^k^L)+M[13]+681279174&4294967295,A=C+(N<<4&4294967295|N>>>28),N=L+(A^C^k)+M[0]+3936430074&4294967295,L=A+(N<<11&4294967295|N>>>21),N=k+(L^A^C)+M[3]+3572445317&4294967295,k=L+(N<<16&4294967295|N>>>16),N=C+(k^L^A)+M[6]+76029189&4294967295,C=k+(N<<23&4294967295|N>>>9),N=A+(C^k^L)+M[9]+3654602809&4294967295,A=C+(N<<4&4294967295|N>>>28),N=L+(A^C^k)+M[12]+3873151461&4294967295,L=A+(N<<11&4294967295|N>>>21),N=k+(L^A^C)+M[15]+530742520&4294967295,k=L+(N<<16&4294967295|N>>>16),N=C+(k^L^A)+M[2]+3299628645&4294967295,C=k+(N<<23&4294967295|N>>>9),N=A+(k^(C|~L))+M[0]+4096336452&4294967295,A=C+(N<<6&4294967295|N>>>26),N=L+(C^(A|~k))+M[7]+1126891415&4294967295,L=A+(N<<10&4294967295|N>>>22),N=k+(A^(L|~C))+M[14]+2878612391&4294967295,k=L+(N<<15&4294967295|N>>>17),N=C+(L^(k|~A))+M[5]+4237533241&4294967295,C=k+(N<<21&4294967295|N>>>11),N=A+(k^(C|~L))+M[12]+1700485571&4294967295,A=C+(N<<6&4294967295|N>>>26),N=L+(C^(A|~k))+M[3]+2399980690&4294967295,L=A+(N<<10&4294967295|N>>>22),N=k+(A^(L|~C))+M[10]+4293915773&4294967295,k=L+(N<<15&4294967295|N>>>17),N=C+(L^(k|~A))+M[1]+2240044497&4294967295,C=k+(N<<21&4294967295|N>>>11),N=A+(k^(C|~L))+M[8]+1873313359&4294967295,A=C+(N<<6&4294967295|N>>>26),N=L+(C^(A|~k))+M[15]+4264355552&4294967295,L=A+(N<<10&4294967295|N>>>22),N=k+(A^(L|~C))+M[6]+2734768916&4294967295,k=L+(N<<15&4294967295|N>>>17),N=C+(L^(k|~A))+M[13]+1309151649&4294967295,C=k+(N<<21&4294967295|N>>>11),N=A+(k^(C|~L))+M[4]+4149444226&4294967295,A=C+(N<<6&4294967295|N>>>26),N=L+(C^(A|~k))+M[11]+3174756917&4294967295,L=A+(N<<10&4294967295|N>>>22),N=k+(A^(L|~C))+M[2]+718787259&4294967295,k=L+(N<<15&4294967295|N>>>17),N=C+(L^(k|~A))+M[9]+3951481745&4294967295,P.g[0]=P.g[0]+A&4294967295,P.g[1]=P.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+L&4294967295}s.prototype.u=function(P,A){A===void 0&&(A=P.length);for(var C=A-this.blockSize,M=this.B,k=this.h,L=0;L<A;){if(k==0)for(;L<=C;)a(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<A;)if(M[k++]=P.charCodeAt(L++),k==this.blockSize){a(this,M),k=0;break}}else for(;L<A;)if(M[k++]=P[L++],k==this.blockSize){a(this,M),k=0;break}}this.h=k,this.o+=A},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var A=1;A<P.length-8;++A)P[A]=0;var C=8*this.o;for(A=P.length-8;A<P.length;++A)P[A]=C&255,C/=256;for(this.u(P),P=Array(16),A=C=0;4>A;++A)for(var M=0;32>M;M+=8)P[C++]=this.g[A]>>>M&255;return P};function l(P,A){var C=d;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=A(P)}function c(P,A){this.h=A;for(var C=[],M=!0,k=P.length-1;0<=k;k--){var L=P[k]|0;M&&L==A||(C[k]=L,M=!1)}this.g=C}var d={};function p(P){return-128<=P&&128>P?l(P,function(A){return new c([A|0],0>A?-1:0)}):new c([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return K(g(-P));for(var A=[],C=1,M=0;P>=C;M++)A[M]=P/C|0,C*=4294967296;return new c(A,0)}function v(P,A){if(P.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P.charAt(0)=="-")return K(v(P.substring(1),A));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(A,8)),M=T,k=0;k<P.length;k+=8){var L=Math.min(8,P.length-k),N=parseInt(P.substring(k,k+L),A);8>L?(L=g(Math.pow(A,L)),M=M.j(L).add(g(N))):(M=M.j(C),M=M.add(g(N)))}return M}var T=p(0),S=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(Q(this))return-K(this).m();for(var P=0,A=1,C=0;C<this.g.length;C++){var M=this.i(C);P+=(0<=M?M:4294967296+M)*A,A*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(U(this))return"0";if(Q(this))return"-"+K(this).toString(P);for(var A=g(Math.pow(P,6)),C=this,M="";;){var k=Le(C,A).g;C=ge(C,k.j(A));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=k,U(C))return L+M;for(;6>L.length;)L="0"+L;M=L+M}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function U(P){if(P.h!=0)return!1;for(var A=0;A<P.g.length;A++)if(P.g[A]!=0)return!1;return!0}function Q(P){return P.h==-1}n.l=function(P){return P=ge(this,P),Q(P)?-1:U(P)?0:1};function K(P){for(var A=P.g.length,C=[],M=0;M<A;M++)C[M]=~P.g[M];return new c(C,~P.h).add(S)}n.abs=function(){return Q(this)?K(this):this},n.add=function(P){for(var A=Math.max(this.g.length,P.g.length),C=[],M=0,k=0;k<=A;k++){var L=M+(this.i(k)&65535)+(P.i(k)&65535),N=(L>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);M=N>>>16,L&=65535,N&=65535,C[k]=N<<16|L}return new c(C,C[C.length-1]&-2147483648?-1:0)};function ge(P,A){return P.add(K(A))}n.j=function(P){if(U(this)||U(P))return T;if(Q(this))return Q(P)?K(this).j(K(P)):K(K(this).j(P));if(Q(P))return K(this.j(K(P)));if(0>this.l(x)&&0>P.l(x))return g(this.m()*P.m());for(var A=this.g.length+P.g.length,C=[],M=0;M<2*A;M++)C[M]=0;for(M=0;M<this.g.length;M++)for(var k=0;k<P.g.length;k++){var L=this.i(M)>>>16,N=this.i(M)&65535,Vt=P.i(k)>>>16,dt=P.i(k)&65535;C[2*M+2*k]+=N*dt,ue(C,2*M+2*k),C[2*M+2*k+1]+=L*dt,ue(C,2*M+2*k+1),C[2*M+2*k+1]+=N*Vt,ue(C,2*M+2*k+1),C[2*M+2*k+2]+=L*Vt,ue(C,2*M+2*k+2)}for(M=0;M<A;M++)C[M]=C[2*M+1]<<16|C[2*M];for(M=A;M<2*A;M++)C[M]=0;return new c(C,0)};function ue(P,A){for(;(P[A]&65535)!=P[A];)P[A+1]+=P[A]>>>16,P[A]&=65535,A++}function ce(P,A){this.g=P,this.h=A}function Le(P,A){if(U(A))throw Error("division by zero");if(U(P))return new ce(T,T);if(Q(P))return A=Le(K(P),A),new ce(K(A.g),K(A.h));if(Q(A))return A=Le(P,K(A)),new ce(K(A.g),A.h);if(30<P.g.length){if(Q(P)||Q(A))throw Error("slowDivide_ only works with positive integers.");for(var C=S,M=A;0>=M.l(P);)C=_e(C),M=_e(M);var k=Ue(C,1),L=Ue(M,1);for(M=Ue(M,2),C=Ue(C,2);!U(M);){var N=L.add(M);0>=N.l(P)&&(k=k.add(C),L=N),M=Ue(M,1),C=Ue(C,1)}return A=ge(P,k.j(A)),new ce(k,A)}for(k=T;0<=P.l(A);){for(C=Math.max(1,Math.floor(P.m()/A.m())),M=Math.ceil(Math.log(C)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),L=g(C),N=L.j(A);Q(N)||0<N.l(P);)C-=M,L=g(C),N=L.j(A);U(L)&&(L=S),k=k.add(L),P=ge(P,N)}return new ce(k,P)}n.A=function(P){return Le(this,P).h},n.and=function(P){for(var A=Math.max(this.g.length,P.g.length),C=[],M=0;M<A;M++)C[M]=this.i(M)&P.i(M);return new c(C,this.h&P.h)},n.or=function(P){for(var A=Math.max(this.g.length,P.g.length),C=[],M=0;M<A;M++)C[M]=this.i(M)|P.i(M);return new c(C,this.h|P.h)},n.xor=function(P){for(var A=Math.max(this.g.length,P.g.length),C=[],M=0;M<A;M++)C[M]=this.i(M)^P.i(M);return new c(C,this.h^P.h)};function _e(P){for(var A=P.g.length+1,C=[],M=0;M<A;M++)C[M]=P.i(M)<<1|P.i(M-1)>>>31;return new c(C,P.h)}function Ue(P,A){var C=A>>5;A%=32;for(var M=P.g.length-C,k=[],L=0;L<M;L++)k[L]=0<A?P.i(L+C)>>>A|P.i(L+C+1)<<32-A:P.i(L+C);return new c(k,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Db=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Er=c}).apply(typeof H0<"u"?H0:typeof self<"u"?self:typeof window<"u"?window:{});var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ob,zu,Mb,yf,Ig,kb,Pb,Vb;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof of=="object"&&of];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var b=0;b<h.length-1;b++){var z=h[b];if(!(z in y))break e;y=y[z]}h=h[h.length-1],b=y[h],_=_(b),_!=b&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,b=!1,z={next:function(){if(!b&&y<h.length){var H=y++;return{value:_(H,h[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,b),h.apply(_,z)}}return function(){return h.apply(_,arguments)}}function S(h,_,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,S.apply(null,arguments)}function x(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var b=y.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function U(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(b,z,H){for(var ne=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ne[qe-2]=arguments[qe];return _.prototype[z].apply(b,ne)}}function Q(h){const _=h.length;if(0<_){const y=Array(_);for(let b=0;b<_;b++)y[b]=h[b];return y}return[]}function K(h,_){for(let y=1;y<arguments.length;y++){const b=arguments[y];if(p(b)){const z=h.length||0,H=b.length||0;h.length=z+H;for(let ne=0;ne<H;ne++)h[z+ne]=b[ne]}else h.push(b)}}class ge{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ue(h){return/^[\s\xa0]*$/.test(h)}function ce(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Le(h){return Le[" "](h),h}Le[" "]=function(){};var _e=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function Ue(h,_,y){for(const b in h)_.call(y,h[b],b,h)}function P(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function A(h){const _={};for(const y in h)_[y]=h[y];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let y,b;for(let z=1;z<arguments.length;z++){b=arguments[z];for(y in b)h[y]=b[y];for(let H=0;H<C.length;H++)y=C[H],Object.prototype.hasOwnProperty.call(b,y)&&(h[y]=b[y])}}function k(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function L(h){d.setTimeout(()=>{throw h},0)}function N(){var h=oe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Vt{constructor(){this.h=this.g=null}add(_,y){const b=dt.get();b.set(_,y),this.h?this.h.next=b:this.g=b,this.h=b}}var dt=new ge(()=>new G,h=>h.reset());class G{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let se,fe=!1,oe=new Vt,I=()=>{const h=d.Promise.resolve(void 0);se=()=>{h.then(X)}};var X=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(y){L(y)}var _=dt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}fe=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var me=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h})();function we(h,_){if(ee.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(_e){e:{try{Le(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&we.aa.h.call(this)}}U(we,ee);var Ae={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),at=0;function yi(h,_,y,b,z){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!b,this.ha=z,this.key=++at,this.da=this.fa=!1}function Ls(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Yi(h){this.src=h,this.g={},this.h=0}Yi.prototype.add=function(h,_,y,b,z){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var ne=zr(h,_,b,z);return-1<ne?(_=h[ne],y||(_.fa=!1)):(_=new yi(_,this.src,H,!!b,z),_.fa=y,h.push(_)),_};function Ur(h,_){var y=_.type;if(y in h.g){var b=h.g[y],z=Array.prototype.indexOf.call(b,_,void 0),H;(H=0<=z)&&Array.prototype.splice.call(b,z,1),H&&(Ls(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function zr(h,_,y,b){for(var z=0;z<h.length;++z){var H=h[z];if(!H.da&&H.listener==_&&H.capture==!!y&&H.ha==b)return z}return-1}var jr="closure_lm_"+(1e6*Math.random()|0),Al={};function Pc(h,_,y,b,z){if(Array.isArray(_)){for(var H=0;H<_.length;H++)Pc(h,_[H],y,b,z);return null}return y=Vc(y),h&&h[Ht]?h.K(_,y,g(b)?!!b.capture:!1,z):Hn(h,_,y,!1,b,z)}function Hn(h,_,y,b,z,H){if(!_)throw Error("Invalid event type");var ne=g(z)?!!z.capture:!!z,qe=Ya(h);if(qe||(h[jr]=qe=new Yi(h)),y=qe.add(_,y,b,ne,H),y.proxy)return y;if(b=Qd(),y.proxy=b,b.src=h,b.listener=y,h.addEventListener)me||(z=ne),z===void 0&&(z=!1),h.addEventListener(_.toString(),b,z);else if(h.attachEvent)h.attachEvent(qr(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Qd(){function h(y){return _.call(h.src,h.listener,y)}const _=Yd;return h}function Cl(h,_,y,b,z){if(Array.isArray(_))for(var H=0;H<_.length;H++)Cl(h,_[H],y,b,z);else b=g(b)?!!b.capture:!!b,y=Vc(y),h&&h[Ht]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],y=zr(H,y,b,z),-1<y&&(Ls(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ya(h))&&(_=h.g[_.toString()],h=-1,_&&(h=zr(_,y,b,z)),(y=-1<h?_[h]:null)&&Qa(y))}function Qa(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Ht])Ur(_.i,h);else{var y=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(y,b,h.capture):_.detachEvent?_.detachEvent(qr(y),b):_.addListener&&_.removeListener&&_.removeListener(b),(y=Ya(_))?(Ur(y,h),y.h==0&&(y.src=null,_[jr]=null)):Ls(h)}}}function qr(h){return h in Al?Al[h]:Al[h]="on"+h}function Yd(h,_){if(h.da)h=!0;else{_=new we(_,this);var y=h.listener,b=h.ha||h.src;h.fa&&Qa(h),h=y.call(b,_)}return h}function Ya(h){return h=h[jr],h instanceof Yi?h:null}var Rl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vc(h){return typeof h=="function"?h:(h[Rl]||(h[Rl]=function(_){return h.handleEvent(_)}),h[Rl])}function yt(){te.call(this),this.i=new Yi(this),this.M=this,this.F=null}U(yt,te),yt.prototype[Ht]=!0,yt.prototype.removeEventListener=function(h,_,y,b){Cl(this,h,_,y,b)};function We(h,_){var y,b=h.F;if(b)for(y=[];b;b=b.F)y.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new ee(_,h);else if(_ instanceof ee)_.target=_.target||h;else{var z=_;_=new ee(b,h),M(_,z)}if(z=!0,y)for(var H=y.length-1;0<=H;H--){var ne=_.g=y[H];z=On(ne,b,!0,_)&&z}if(ne=_.g=h,z=On(ne,b,!0,_)&&z,z=On(ne,b,!1,_)&&z,y)for(H=0;H<y.length;H++)ne=_.g=y[H],z=On(ne,b,!1,_)&&z}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],b=0;b<y.length;b++)Ls(y[b]);delete h.g[_],h.h--}}this.F=null},yt.prototype.K=function(h,_,y,b){return this.i.add(String(h),_,!1,y,b)},yt.prototype.L=function(h,_,y,b){return this.i.add(String(h),_,!0,y,b)};function On(h,_,y,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,H=0;H<_.length;++H){var ne=_[H];if(ne&&!ne.da&&ne.capture==y){var qe=ne.listener,Ut=ne.ha||ne.src;ne.fa&&Ur(h.i,ne),z=qe.call(Ut,b)!==!1&&z}}return z&&!b.defaultPrevented}function un(h,_,y){if(typeof h=="function")y&&(h=S(h,y));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Lc(h){h.g=un(()=>{h.g=null,h.i&&(h.i=!1,Lc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Kd extends te{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Lc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(h){te.call(this),this.h=h,this.g={}}U(Br,te);var Fr=[];function Hr(h){Ue(h.g,function(_,y){this.g.hasOwnProperty(y)&&Qa(_)},h),h.g={}}Br.prototype.N=function(){Br.aa.N.call(this),Hr(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ri=d.JSON.stringify,Ka=d.JSON.parse,Gr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Il(){}Il.prototype.h=null;function Nl(h){return h.h||(h.h=h.i())}function xl(){}var Ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xi(){ee.call(this,"d")}U(Xi,ee);function Dl(){ee.call(this,"c")}U(Dl,ee);var vi={},Ol=null;function Us(){return Ol=Ol||new yt}vi.La="serverreachability";function Xa(h){ee.call(this,vi.La,h)}U(Xa,ee);function zs(h){const _=Us();We(_,new Xa(_))}vi.STAT_EVENT="statevent";function Uc(h,_){ee.call(this,vi.STAT_EVENT,h),this.stat=_}U(Uc,ee);function mt(h){const _=Us();We(_,new Uc(_,h))}vi.Ma="timingevent";function Lt(h,_){ee.call(this,vi.Ma,h),this.size=_}U(Lt,ee);function Rt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function Ml(h,_,y,b,z,H){h.info(function(){if(h.g)if(H)for(var ne="",qe=H.split("&"),Ut=0;Ut<qe.length;Ut++){var Be=qe[Ut].split("=");if(1<Be.length){var Qt=Be[0];Be=Be[1];var zt=Qt.split("_");ne=2<=zt.length&&zt[1]=="type"?ne+(Qt+"="+Be+"&"):ne+(Qt+"=redacted&")}}else ne=null;else ne=H;return"XMLHTTP REQ ("+b+") [attempt "+z+"]: "+_+`
`+y+`
`+ne})}function Xd(h,_,y,b,z,H,ne){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+z+"]: "+_+`
`+y+`
`+H+" "+ne})}function js(h,_,y,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Qr(h,y)+(b?" "+b:"")})}function zc(h,_){h.info(function(){return"TIMEOUT: "+_})}Gn.prototype.info=function(){};function Qr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var b=y[h];if(!(2>b.length)){var z=b[1];if(Array.isArray(z)&&!(1>z.length)){var H=z[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ne=1;ne<z.length;ne++)z[ne]=""}}}}return ri(y)}catch{return _}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ei;function Ti(){}U(Ti,Il),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},Ei=new Ti;function yn(h,_,y,b){this.j=h,this.i=_,this.l=y,this.R=b||1,this.U=new Br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}var kl={},Wa={};function ai(h,_,y){h.L=1,h.v=$r(Mn(_)),h.m=y,h.P=!0,$i(h,null)}function $i(h,_){h.F=Date.now(),Yr(h),h.A=Mn(h.v);var y=h.A,b=h.R;Array.isArray(b)||(b=[String(b)]),jl(y.i,"t",b),h.C=0,y=h.j.J,h.h=new St,h.g=th(h.j,y?_:null,!h.m),0<h.O&&(h.M=new Kd(S(h.Y,h,h.g),h.O)),_=h.U,y=h.g,b=h.ca;var z="readystatechange";Array.isArray(z)||(z&&(Fr[0]=z.toString()),z=Fr);for(var H=0;H<z.length;H++){var ne=Pc(y,z[H],b||_.handleEvent,!1,_.h||_);if(!ne)break;_.g[ne.key]=ne}_=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),zs(),Ml(h.i,h.u,h.A,h.l,h.R,h.m)}yn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Xn(h)==3?_.j():this.Y(h)},yn.prototype.Y=function(h){try{if(h==this.g)e:{const zt=Xn(this.g);var _=this.g.Ba();const rs=this.g.Z();if(!(3>zt)&&(zt!=3||this.g&&(this.h.h||this.g.oa()||Yc(this.g)))){this.J||zt!=4||_==7||(_==8||0>=rs?zs(3):zs(2)),Bs(this);var y=this.g.Z();this.X=y;t:if(jc(this)){var b=Yc(this.g);h="";var z=b.length,H=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),Si(this);var ne="";break t}this.h.i=new d.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,h+=this.h.i.decode(b[_],{stream:!(H&&_==z-1)});b.length=0,this.h.g+=h,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=y==200,Xd(this.i,this.u,this.A,this.l,this.R,zt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Ut=this.g;if((qe=Ut.g?Ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(qe)){var Be=qe;break t}}Be=null}if(y=Be)js(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kr(this,y);else{this.o=!1,this.s=3,mt(12),en(this),Si(this);break e}}if(this.P){y=!0;let tn;for(;!this.J&&this.C<ne.length;)if(tn=qc(this,ne),tn==Wa){zt==4&&(this.s=4,mt(14),y=!1),js(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==kl){this.s=4,mt(15),js(this.i,this.l,ne,"[Invalid Chunk]"),y=!1;break}else js(this.i,this.l,tn,null),Kr(this,tn);if(jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),zt!=4||ne.length!=0||this.h.h||(this.s=1,mt(16),y=!1),this.o=this.o&&y,!y)js(this.i,this.l,ne,"[Invalid Chunked Response]"),en(this),Si(this);else if(0<ne.length&&!this.W){this.W=!0;var Qt=this.j;Qt.g==this&&Qt.ba&&!Qt.M&&(Qt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ra(Qt),Qt.M=!0,mt(11))}}else js(this.i,this.l,ne,null),Kr(this,ne);zt==4&&en(this),this.o&&!this.J&&(zt==4?Zc(this.j,this):(this.o=!1,Yr(this)))}else em(this.g),y==400&&0<ne.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),en(this),Si(this)}}}catch{}finally{}};function jc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function qc(h,_){var y=h.C,b=_.indexOf(`
`,y);return b==-1?Wa:(y=Number(_.substring(y,b)),isNaN(y)?kl:(b+=1,b+y>_.length?Wa:(_=_.slice(b,b+y),h.C=b+y,_)))}yn.prototype.cancel=function(){this.J=!0,en(this)};function Yr(h){h.S=Date.now()+h.I,Bc(h,h.I)}function Bc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Rt(S(h.ba,h),_)}function Bs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}yn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(zc(this.i,this.A),this.L!=2&&(zs(),mt(17)),en(this),this.s=2,Si(this)):Bc(this,this.S-h)};function Si(h){h.j.G==0||h.J||Zc(h.j,h)}function en(h){Bs(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Hr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Kr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||Pl(y.h,h))){if(!h.K&&Pl(y.h,h)&&y.G==3){try{var b=y.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var z=b;if(z[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)lo(y),ao(y);else break e;Gl(y),mt(18)}}else y.za=z[1],0<y.za-y.T&&37500>z[2]&&y.F&&y.v==0&&!y.C&&(y.C=Rt(S(y.Za,y),6e3));if(1>=Za(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ss(y,11)}else if((h.K||y.g==h)&&lo(y),!ue(_))for(z=y.Da.g.parse(_),_=0;_<z.length;_++){let Be=z[_];if(y.T=Be[0],Be=Be[1],y.G==2)if(Be[0]=="c"){y.K=Be[1],y.ia=Be[2];const Qt=Be[3];Qt!=null&&(y.la=Qt,y.j.info("VER="+y.la));const zt=Be[4];zt!=null&&(y.Aa=zt,y.j.info("SVER="+y.Aa));const rs=Be[5];rs!=null&&typeof rs=="number"&&0<rs&&(b=1.5*rs,y.L=b,y.j.info("backChannelRequestTimeoutMs_="+b)),b=y;const tn=h.g;if(tn){const Ni=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var H=b.h;H.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Ja(H,H.h),H.h=null))}if(b.D){const Yl=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yl&&(b.ya=Yl,et(b.I,b.D,Yl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),b=y;var ne=h;if(b.qa=eh(b,b.J?b.ia:null,b.W),ne.K){vn(b.h,ne);var qe=ne,Ut=b.L;Ut&&(qe.I=Ut),qe.B&&(Bs(qe),Yr(qe)),b.g=ne}else Wc(b);0<y.i.length&&oo(y)}else Be[0]!="stop"&&Be[0]!="close"||ss(y,7);else y.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?ss(y,7):Fl(y):Be[0]!="noop"&&y.l&&y.l.ta(Be),y.v=0)}}zs(4)}catch{}}var Fc=class{constructor(h,_){this.g=h,this.map=_}};function Zi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $a(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Za(h){return h.h?1:h.g?h.g.size:0}function Pl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Ja(h,_){h.g?h.g.add(_):h.h=_}function vn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Zi.prototype.cancel=function(){if(this.i=Vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Vl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return Q(h.i)}function Wd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],y=h.length,b=0;b<y;b++)_.push(h[b]);return _}_=[],y=0;for(b in h)_[y++]=h[b];return _}function eo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const b in h)_[y++]=b;return _}}}function Ll(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=eo(h),b=Wd(h),z=b.length,H=0;H<z;H++)_.call(void 0,b[H],y&&y[H],h)}var Xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $d(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var b=h[y].indexOf("="),z=null;if(0<=b){var H=h[y].substring(0,b);z=h[y].substring(b+1)}else H=h[y];_(H,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function It(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof It){this.h=h.h,Wr(this,h.j),this.o=h.o,this.g=h.g,Fs(this,h.s),this.l=h.l;var _=h.i,y=new es;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Ji(this,y),this.m=h.m}else h&&(_=String(h).match(Xr))?(this.h=!1,Wr(this,_[1]||"",!0),this.o=Qn(_[2]||""),this.g=Qn(_[3]||"",!0),Fs(this,_[4]),this.l=Qn(_[5]||"",!0),Ji(this,_[6]||"",!0),this.m=Qn(_[7]||"")):(this.h=!1,this.i=new es(null,this.h))}It.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Zr(_,Ul,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Zr(_,Ul,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Zr(y,y.charAt(0)=="/"?Zd:zl,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Zr(y,to)),h.join("")};function Mn(h){return new It(h)}function Wr(h,_,y){h.j=y?Qn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Fs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Ji(h,_,y){_ instanceof es?(h.i=_,Gc(h.i,h.h)):(y||(_=Zr(_,Jd)),h.i=new es(_,h.h))}function et(h,_,y){h.i.set(_,y)}function $r(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Qn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Zr(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Hc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Hc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Ul=/[#\/\?@]/g,zl=/[#\?:]/g,Zd=/[#\?]/g,Jd=/[#\?@]/g,to=/#/g;function es(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Yn(h){h.g||(h.g=new Map,h.h=0,h.i&&$d(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}n=es.prototype,n.add=function(h,_){Yn(this),this.i=null,h=wi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function ts(h,_){Yn(h),_=wi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ns(h,_){return Yn(h),_=wi(h,_),h.g.has(_)}n.forEach=function(h,_){Yn(this),this.g.forEach(function(y,b){y.forEach(function(z){h.call(_,z,b,this)},this)},this)},n.na=function(){Yn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let b=0;b<_.length;b++){const z=h[b];for(let H=0;H<z.length;H++)y.push(_[b])}return y},n.V=function(h){Yn(this);let _=[];if(typeof h=="string")ns(this,h)&&(_=_.concat(this.g.get(wi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},n.set=function(h,_){return Yn(this),this.i=null,h=wi(this,h),ns(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function jl(h,_,y){ts(h,_),0<y.length&&(h.i=null,h.g.set(wi(h,_),Q(y)),h.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var b=_[y];const H=encodeURIComponent(String(b)),ne=this.V(b);for(b=0;b<ne.length;b++){var z=H;ne[b]!==""&&(z+="="+encodeURIComponent(String(ne[b]))),h.push(z)}}return this.i=h.join("&")};function wi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Gc(h,_){_&&!h.j&&(Yn(h),h.i=null,h.g.forEach(function(y,b){var z=b.toLowerCase();b!=z&&(ts(this,b),jl(this,z,y))},h)),h.j=_}function Jr(h,_){const y=new Gn;if(d.Image){const b=new Image;b.onload=x(Kn,y,"TestLoadImage: loaded",!0,_,b),b.onerror=x(Kn,y,"TestLoadImage: error",!1,_,b),b.onabort=x(Kn,y,"TestLoadImage: abort",!1,_,b),b.ontimeout=x(Kn,y,"TestLoadImage: timeout",!1,_,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function oi(h,_){const y=new Gn,b=new AbortController,z=setTimeout(()=>{b.abort(),Kn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(H=>{clearTimeout(z),H.ok?Kn(y,"TestPingServer: ok",!0,_):Kn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),Kn(y,"TestPingServer: error",!1,_)})}function Kn(h,_,y,b,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),b(y)}catch{}}function ea(){this.g=new Gr}function bi(h,_,y){const b=y||"";try{Ll(h,function(z,H){let ne=z;g(z)&&(ne=ri(z)),_.push(b+H+"="+encodeURIComponent(ne))})}catch(z){throw _.push(b+"type="+encodeURIComponent("_badmap")),z}}function Hs(h){this.l=h.Ub||null,this.j=h.eb||!1}U(Hs,Il),Hs.prototype.g=function(){return new is(this.l,this.j)},Hs.prototype.i=(function(h){return function(){return h}})({});function is(h,_){yt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(is,yt),n=is.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ci(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ql(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function ql(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ai(this):Ci(this),this.readyState==3&&ql(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ai(this))},n.Qa=function(h){this.g&&(this.response=h,Ai(this))},n.ga=function(){this.g&&Ai(this)};function Ai(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ci(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Ci(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Bl(h){let _="";return Ue(h,function(y,b){_+=b,_+=":",_+=y,_+=`\r
`}),_}function Gt(h,_,y){e:{for(b in y){var b=!1;break e}b=!0}b||(y=Bl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):et(h,_,y))}function Ke(h){yt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ke,yt);var no=/^https?$/i,ta=["POST","PUT"];n=Ke.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,y,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ei.g(),this.v=this.o?Nl(this.o):Nl(Ei),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){Qc(this,H);return}if(h=y||"",y=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var z in b)y.set(z,b[z]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())y.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),z=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ta,_,void 0))||b||z||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of y)this.g.setRequestHeader(H,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{na(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){Qc(this,H)}};function Qc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,io(h),Ri(h)}function io(h){h.A||(h.A=!0,We(h,"complete"),We(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,We(this,"complete"),We(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),Ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?so(this):this.bb())},n.bb=function(){so(this)};function so(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Xn(h)!=4||h.Z()!=2)){if(h.u&&Xn(h)==4)un(h.Ea,0,h);else if(We(h,"readystatechange"),Xn(h)==4){h.h=!1;try{const ne=h.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var b;if(b=ne===0){var z=String(h.D).match(Xr)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),b=!no.test(z?z.toLowerCase():"")}y=b}if(y)We(h,"complete"),We(h,"success");else{h.m=6;try{var H=2<Xn(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",io(h)}}finally{Ri(h)}}}}function Ri(h,_){if(h.g){na(h);const y=h.g,b=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||We(h,"ready");try{y.onreadystatechange=b}catch{}}}function na(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Xn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ka(_)}};function Yc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function em(h){const _={};h=(h.g&&2<=Xn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(ue(h[b]))continue;var y=k(h[b]);const z=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=_[z]||[];_[z]=H,H.push(y)}P(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ia(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function ro(h){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ia("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ia("baseRetryDelayMs",5e3,h),this.cb=ia("retryDelaySeedMs",1e4,h),this.Wa=ia("forwardChannelMaxRetries",2,h),this.wa=ia("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(h&&h.concurrentRequestLimit),this.Da=new ea,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ro.prototype,n.la=8,n.G=1,n.connect=function(h,_,y,b){mt(0),this.W=h,this.H=_||{},y&&b!==void 0&&(this.H.OSID=y,this.H.OAID=b),this.F=this.X,this.I=eh(this,null,this.W),oo(this)};function Fl(h){if(Kc(h),h.G==3){var _=h.U++,y=Mn(h.I);if(et(y,"SID",h.K),et(y,"RID",_),et(y,"TYPE","terminate"),sa(h,y),_=new yn(h,h.j,_),_.L=2,_.v=$r(Mn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=th(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Yr(_)}Jc(h)}function ao(h){h.g&&(ra(h),h.g.cancel(),h.g=null)}function Kc(h){ao(h),h.u&&(d.clearTimeout(h.u),h.u=null),lo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function oo(h){if(!$a(h.h)&&!h.s){h.s=!0;var _=h.Ga;se||I(),fe||(se(),fe=!0),oe.add(_,h),h.B=0}}function tm(h,_){return Za(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Rt(S(h.Ga,h,_),Ql(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const z=new yn(this,this.j,h);let H=this.o;if(this.S&&(H?(H=A(H),M(H,this.S)):H=this.S),this.m!==null||this.O||(z.H=H,H=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var b=this.i[y];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Xc(this,z,_),y=Mn(this.I),et(y,"RID",h),et(y,"CVER",22),this.D&&et(y,"X-HTTP-Session-Id",this.D),sa(this,y),H&&(this.O?_="headers="+encodeURIComponent(String(Bl(H)))+"&"+_:this.m&&Gt(y,this.m,H)),Ja(this.h,z),this.Ua&&et(y,"TYPE","init"),this.P?(et(y,"$req",_),et(y,"SID","null"),z.T=!0,ai(z,y,null)):ai(z,y,_),this.G=2}}else this.G==3&&(h?Hl(this,h):this.i.length==0||$a(this.h)||Hl(this))};function Hl(h,_){var y;_?y=_.l:y=h.U++;const b=Mn(h.I);et(b,"SID",h.K),et(b,"RID",y),et(b,"AID",h.T),sa(h,b),h.m&&h.o&&Gt(b,h.m,h.o),y=new yn(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Xc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ja(h.h,y),ai(y,b,_)}function sa(h,_){h.H&&Ue(h.H,function(y,b){et(_,b,y)}),h.l&&Ll({},function(y,b){et(_,b,y)})}function Xc(h,_,y){y=Math.min(h.i.length,y);var b=h.l?S(h.l.Na,h.l,h):null;e:{var z=h.i;let H=-1;for(;;){const ne=["count="+y];H==-1?0<y?(H=z[0].g,ne.push("ofs="+H)):H=0:ne.push("ofs="+H);let qe=!0;for(let Ut=0;Ut<y;Ut++){let Be=z[Ut].g;const Qt=z[Ut].map;if(Be-=H,0>Be)H=Math.max(0,z[Ut].g-100),qe=!1;else try{bi(Qt,ne,"req"+Be+"_")}catch{b&&b(Qt)}}if(qe){b=ne.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,b}function Wc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;se||I(),fe||(se(),fe=!0),oe.add(_,h),h.v=0}}function Gl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Rt(S(h.Fa,h),Ql(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,$c(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Rt(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),ao(this),$c(this))};function ra(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function $c(h){h.g=new yn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Mn(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),sa(h,_),h.m&&h.o&&Gt(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=$r(Mn(_)),y.m=null,y.P=!0,$i(y,h)}n.Za=function(){this.C!=null&&(this.C=null,ao(this),Gl(this),mt(19))};function lo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Zc(h,_){var y=null;if(h.g==_){lo(h),ra(h),h.g=null;var b=2}else if(Pl(h.h,_))y=_.D,vn(h.h,_),b=1;else return;if(h.G!=0){if(_.o)if(b==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var z=h.B;b=Us(),We(b,new Lt(b,y)),oo(h)}else Wc(h);else if(z=_.s,z==3||z==0&&0<_.X||!(b==1&&tm(h,_)||b==2&&Gl(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),z){case 1:ss(h,5);break;case 4:ss(h,10);break;case 3:ss(h,6);break;default:ss(h,2)}}}function Ql(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function ss(h,_){if(h.j.info("Error code "+_),_==2){var y=S(h.fb,h),b=h.Xa;const z=!b;b=new It(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Wr(b,"https"),$r(b),z?Jr(b.toString(),y):oi(b.toString(),y)}else mt(2);h.G=0,h.l&&h.l.sa(_),Jc(h),Kc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Jc(h){if(h.G=0,h.ka=[],h.l){const _=Vl(h.h);(_.length!=0||h.i.length!=0)&&(K(h.ka,_),K(h.ka,h.i),h.h.i.length=0,Q(h.i),h.i.length=0),h.l.ra()}}function eh(h,_,y){var b=y instanceof It?Mn(y):new It(y);if(b.g!="")_&&(b.g=_+"."+b.g),Fs(b,b.s);else{var z=d.location;b=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var H=new It(null);b&&Wr(H,b),_&&(H.g=_),z&&Fs(H,z),y&&(H.l=y),b=H}return y=h.D,_=h.ya,y&&_&&et(b,y,_),et(b,"VER",h.la),sa(h,b),b}function th(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Hs({eb:y})):new Ke(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}n=nh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function uo(){}uo.prototype.g=function(h,_){return new En(h,_)};function En(h,_){yt.call(this),this.g=new ro(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ue(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ue(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ii(this)}U(En,yt),En.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},En.prototype.close=function(){Fl(this.g)},En.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=ri(h),h=y);_.i.push(new Fc(_.Ya++,h)),_.G==3&&oo(_)},En.prototype.N=function(){this.g.l=null,delete this.j,Fl(this.g),delete this.g,En.aa.N.call(this)};function ih(h){Xi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}U(ih,Xi);function sh(){Dl.call(this),this.status=1}U(sh,Dl);function Ii(h){this.g=h}U(Ii,nh),Ii.prototype.ua=function(){We(this.g,"a")},Ii.prototype.ta=function(h){We(this.g,new ih(h))},Ii.prototype.sa=function(h){We(this.g,new sh)},Ii.prototype.ra=function(){We(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,En.prototype.send=En.prototype.o,En.prototype.open=En.prototype.m,En.prototype.close=En.prototype.close,Vb=function(){return new uo},Pb=function(){return Us()},kb=vi,Ig={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,yf=qs,Wi.COMPLETE="complete",Mb=Wi,xl.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",yt.prototype.listen=yt.prototype.K,zu=xl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Ob=Ke}).apply(typeof of<"u"?of:typeof self<"u"?self:typeof window<"u"?window:{});const G0="@firebase/firestore",Q0="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dn.UNAUTHENTICATED=new dn(null),dn.GOOGLE_CREDENTIALS=new dn("google-credentials-uid"),dn.FIRST_PARTY=new dn("first-party-uid"),dn.MOCK_USER=new dn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new hd("@firebase/firestore");function jo(){return ka.logLevel}function ae(n,...e){if(ka.logLevel<=Ve.DEBUG){const t=e.map(b_);ka.debug(`Firestore (${gl}): ${n}`,...t)}}function xs(n,...e){if(ka.logLevel<=Ve.ERROR){const t=e.map(b_);ka.error(`Firestore (${gl}): ${n}`,...t)}}function tl(n,...e){if(ka.logLevel<=Ve.WARN){const t=e.map(b_);ka.warn(`Firestore (${gl}): ${n}`,...t)}}function b_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ee(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Lb(n,s,t)}function Lb(n,e,t){let s=`FIRESTORE (${gl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xs(s),new Error(s)}function Xe(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Lb(e,a,s)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Ps{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dn.UNAUTHENTICATED)))}shutdown(){}}class Gx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qx{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new As;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new As,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new As)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string",31837,{l:s}),new Ub(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new dn(e)}}class Yx{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Kx{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Yx(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(dn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Y0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xx{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Y0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Y0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Wx(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function ze(n,e){return n<e?-1:n>e?1:0}function Ng(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return rg(a)===rg(l)?ze(a,l):rg(a)?1:-1}return ze(n.length,e.length)}const $x=55296,Zx=57343;function rg(n){const e=n.charCodeAt(0);return e>=$x&&e<=Zx}function nl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="__name__";class Pi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Pi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return ze(e.length,t.length)}static compareSegments(e,t){const s=Pi.isNumericId(e),a=Pi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Pi.extractNumericId(e).compare(Pi.extractNumericId(t)):Ng(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Er.fromString(e.substring(4,e.length-2))}}class lt extends Pi{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new lt(t)}static emptyPath(){return new lt([])}}const Jx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends Pi{construct(e,t,s){return new on(e,t,s)}static isValidIdentifier(e){return Jx.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===K0}static keyField(){return new on([K0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new re(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new re(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new re(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new on(t)}static emptyPath(){return new on([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(lt.fromString(e))}static fromName(e){return new pe(lt.fromString(e).popFirst(5))}static empty(){return new pe(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(n,e,t){if(!t)throw new re(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function eD(n,e,t,s){if(e===!0&&s===!0)throw new re(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function X0(n){if(!pe.isDocumentKey(n))throw new re(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function W0(n){if(pe.isDocumentKey(n))throw new re(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function gd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee(12329,{type:typeof n})}function Nn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gd(n);throw new re(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function kt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Sc(n,e){if(!jb(n))throw new re(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new re(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=-62135596800,Z0=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Z0);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$0)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Z0}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sc(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:kt("string",ft._jsonSchemaVersion),seconds:kt("number"),nanoseconds:kt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new ft(0,0))}static max(){return new Ce(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ic=-1;function tD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ce.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new Ar(a,pe.empty(),e)}function nD(n){return new Ar(n.readTime,n.key,ic)}class Ar{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ar(Ce.min(),pe.empty(),ic)}static max(){return new Ar(Ce.max(),pe.empty(),ic)}}function iD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:ze(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==sD)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):J.reject(t)}static resolve(e){return new J(((t,s)=>{t(e)}))}static reject(e){return new J(((t,s)=>{s(e)}))}static waitFor(e){return new J(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next((a=>a?J.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new J(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++d,d===l&&s(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new J(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function aD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const C_=-1;function yd(n){return n==null}function Lf(n){return n===0&&1/n==-1/0}function oD(n){return typeof n=="number"&&Number.isInteger(n)&&!Lf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="";function lD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=J0(e)),e=uD(n.get(t),e);return J0(e)}function uD(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case qb:t+="";break;default:t+=l}}return t}function J0(n){return n+qb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Bb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt=class xg{constructor(e,t){this.comparator=e,this.root=t||Tr.EMPTY}insert(e,t){return new xg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tr.BLACK,null,null))}remove(e){return new xg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lf(this.root,e,this.comparator,!1)}getReverseIterator(){return new lf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lf(this.root,e,this.comparator,!0)}},lf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Tr=class vs{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??vs.RED,this.left=a??vs.EMPTY,this.right=l??vs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new vs(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return vs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return vs.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}};Tr.EMPTY=null,Tr.RED=!0,Tr.BLACK=!1;Tr.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Tr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tS(this.data.getIterator())}getIteratorFrom(e){return new tS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class tS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.fields=e,e.sort(on.comparator)}static empty(){return new Bn([])}unionWith(e){let t=new Bt(on.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Fb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Fb("Invalid base64 string: "+l):l}})(e);return new ln(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new ln(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const cD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(n){if(Xe(!!n,39018),typeof n=="string"){let e=0;const t=cD.exec(n);if(Xe(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rr(n){return typeof n=="string"?ln.fromBase64String(n):ln.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="server_timestamp",Gb="__type__",Qb="__previous_value__",Yb="__local_write_time__";function R_(n){return(n?.mapValue?.fields||{})[Gb]?.stringValue===Hb}function vd(n){const e=n.mapValue.fields[Qb];return R_(e)?vd(e):e}function sc(n){const e=Cr(n.mapValue.fields[Yb].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,t,s,a,l,c,d,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const Uf="(default)";class rc{constructor(e,t){this.projectId=e,this.database=t||Uf}static empty(){return new rc("","")}get isDefaultDatabase(){return this.database===Uf}isEqual(e){return e instanceof rc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="__type__",fD="__max__",uf={mapValue:{}},Xb="__vector__",zf="value";function Ir(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?R_(n)?4:mD(n)?9007199254740991:dD(n)?10:11:Ee(28295,{value:n})}function Hi(n,e){if(n===e)return!0;const t=Ir(n);if(t!==Ir(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sc(n).isEqual(sc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Cr(a.timestampValue),d=Cr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Rr(a.bytesValue).isEqual(Rr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return At(a.geoPointValue.latitude)===At(l.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return At(a.integerValue)===At(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=At(a.doubleValue),d=At(l.doubleValue);return c===d?Lf(c)===Lf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return nl(n.arrayValue.values||[],e.arrayValue.values||[],Hi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(eS(c)!==eS(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Hi(c[p],d[p])))return!1;return!0})(n,e);default:return Ee(52216,{left:n})}}function ac(n,e){return(n.values||[]).find((t=>Hi(t,e)))!==void 0}function il(n,e){if(n===e)return 0;const t=Ir(n),s=Ir(e);if(t!==s)return ze(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ze(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=At(l.integerValue||l.doubleValue),p=At(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return nS(n.timestampValue,e.timestampValue);case 4:return nS(sc(n),sc(e));case 5:return Ng(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Rr(l),p=Rr(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const v=ze(d[g],p[g]);if(v!==0)return v}return ze(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=ze(At(l.latitude),At(c.latitude));return d!==0?d:ze(At(l.longitude),At(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return iS(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[zf]?.arrayValue,v=p[zf]?.arrayValue,T=ze(g?.values?.length||0,v?.values?.length||0);return T!==0?T:iS(g,v)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===uf.mapValue&&c===uf.mapValue)return 0;if(l===uf.mapValue)return 1;if(c===uf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const S=Ng(p[T],v[T]);if(S!==0)return S;const x=il(d[p[T]],g[v[T]]);if(x!==0)return x}return ze(p.length,v.length)})(n.mapValue,e.mapValue);default:throw Ee(23264,{he:t})}}function nS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ze(n,e);const t=Cr(n),s=Cr(e),a=ze(t.seconds,s.seconds);return a!==0?a:ze(t.nanos,s.nanos)}function iS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=il(t[a],s[a]);if(l)return l}return ze(t.length,s.length)}function sl(n){return Dg(n)}function Dg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Cr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Rr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Dg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Dg(t.fields[c])}`;return a+"}"})(n.mapValue):Ee(61005,{value:n})}function vf(n){switch(Ir(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vd(n);return e?16+vf(e):16;case 5:return 2*n.stringValue.length;case 6:return Rr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+vf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Pr(s.fields,((l,c)=>{a+=l.length+vf(c)})),a})(n.mapValue);default:throw Ee(13486,{value:n})}}function sS(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Og(n){return!!n&&"integerValue"in n}function I_(n){return!!n&&"arrayValue"in n}function rS(n){return!!n&&"nullValue"in n}function aS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ef(n){return!!n&&"mapValue"in n}function dD(n){return(n?.mapValue?.fields||{})[Kb]?.stringValue===Xb}function Gu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Pr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Gu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gu(n.arrayValue.values[t]);return e}return{...n}}function mD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===fD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ef(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gu(t)}setAll(e){let t=on.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Gu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Ef(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Ef(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Pr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Cn(Gu(this.value))}}function Wb(n){const e=[];return Pr(n.fields,((t,s)=>{const a=new on([t]);if(Ef(s)){const l=Wb(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new mn(e,0,Ce.min(),Ce.min(),Ce.min(),Cn.empty(),0)}static newFoundDocument(e,t,s,a){return new mn(e,1,t,Ce.min(),s,a,0)}static newNoDocument(e,t){return new mn(e,2,t,Ce.min(),Ce.min(),Cn.empty(),0)}static newUnknownDocument(e,t){return new mn(e,3,t,Ce.min(),Ce.min(),Cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jf{constructor(e,t){this.position=e,this.inclusive=t}}function oS(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(c.referenceValue),t.key):s=il(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function lS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Hi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}function pD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $b{}class Mt extends $b{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new _D(e,t,s):t==="array-contains"?new ED(e,s):t==="in"?new TD(e,s):t==="not-in"?new SD(e,s):t==="array-contains-any"?new wD(e,s):new Mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new yD(e,s):new vD(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(il(t,this.value)):t!==null&&Ir(this.value)===Ir(t)&&this.matchesComparison(il(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _i extends $b{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new _i(e,t)}matches(e){return Zb(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Zb(n){return n.op==="and"}function Jb(n){return gD(n)&&Zb(n)}function gD(n){for(const e of n.filters)if(e instanceof _i)return!1;return!0}function Mg(n){if(n instanceof Mt)return n.field.canonicalString()+n.op.toString()+sl(n.value);if(Jb(n))return n.filters.map((e=>Mg(e))).join(",");{const e=n.filters.map((t=>Mg(t))).join(",");return`${n.op}(${e})`}}function eA(n,e){return n instanceof Mt?(function(s,a){return a instanceof Mt&&s.op===a.op&&s.field.isEqual(a.field)&&Hi(s.value,a.value)})(n,e):n instanceof _i?(function(s,a){return a instanceof _i&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&eA(c,a.filters[d])),!0):!1})(n,e):void Ee(19439)}function tA(n){return n instanceof Mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${sl(t.value)}`})(n):n instanceof _i?(function(t){return t.op.toString()+" {"+t.getFilters().map(tA).join(" ,")+"}"})(n):"Filter"}class _D extends Mt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class yD extends Mt{constructor(e,t){super(e,"in",t),this.keys=nA("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class vD extends Mt{constructor(e,t){super(e,"not-in",t),this.keys=nA("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function nA(n,e){return(e.arrayValue?.values||[]).map((t=>pe.fromName(t.referenceValue)))}class ED extends Mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return I_(t)&&ac(t.arrayValue,this.value)}}class TD extends Mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ac(this.value.arrayValue,t)}}class SD extends Mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ac(this.value.arrayValue,t)}}class wD extends Mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!I_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ac(this.value.arrayValue,s)))}}/**
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
 */class bD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function uS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new bD(n,e,t,s,a,l,c)}function N_(n){const e=Re(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Mg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),yd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>sl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>sl(s))).join(",")),e.Te=t}return e.Te}function x_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!pD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!eA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lS(n.startAt,e.startAt)&&lS(n.endAt,e.endAt)}function kg(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function AD(n,e,t,s,a,l,c,d){return new vl(n,e,t,s,a,l,c,d)}function Ed(n){return new vl(n)}function cS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function iA(n){return n.collectionGroup!==null}function Qu(n){const e=Re(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Bt(on.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new oc(l,s))})),t.has(on.keyField().canonicalString())||e.Ie.push(new oc(on.keyField(),s))}return e.Ie}function Ui(n){const e=Re(n);return e.Ee||(e.Ee=CD(e,Qu(n))),e.Ee}function CD(n,e){if(n.limitType==="F")return uS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new oc(a.field,l)}));const t=n.endAt?new jf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new jf(n.startAt.position,n.startAt.inclusive):null;return uS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Pg(n,e){const t=n.filters.concat([e]);return new vl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qf(n,e,t){return new vl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Td(n,e){return x_(Ui(n),Ui(e))&&n.limitType===e.limitType}function sA(n){return`${N_(Ui(n))}|lt:${n.limitType}`}function qo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>tA(a))).join(", ")}]`),yd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>sl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>sl(a))).join(",")),`Target(${s})`})(Ui(n))}; limitType=${n.limitType})`}function Sd(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of Qu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=oS(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,Qu(s),a)||s.endAt&&!(function(c,d,p){const g=oS(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,Qu(s),a))})(n,e)}function RD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rA(n){return(e,t)=>{let s=!1;for(const a of Qu(n)){const l=ID(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function ID(n,e,t){const s=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?il(p,g):Ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Bb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=new Pt(pe.comparator);function Ds(){return ND}const aA=new Pt(pe.comparator);function ju(...n){let e=aA;for(const t of n)e=e.insert(t.key,t);return e}function oA(n){let e=aA;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ba(){return Yu()}function lA(){return Yu()}function Yu(){return new qa((n=>n.toString()),((n,e)=>n.isEqual(e)))}const xD=new Pt(pe.comparator),DD=new Bt(pe.comparator);function je(...n){let e=DD;for(const t of n)e=e.add(t);return e}const OD=new Bt(ze);function MD(){return OD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lf(e)?"-0":e}}function uA(n){return{integerValue:""+n}}function kD(n,e){return oD(e)?uA(e):D_(n,e)}/**
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
 */class wd{constructor(){this._=void 0}}function PD(n,e,t){return n instanceof lc?(function(a,l){const c={fields:{[Gb]:{stringValue:Hb},[Yb]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&R_(l)&&(l=vd(l)),l&&(c.fields[Qb]=l),{mapValue:c}})(t,e):n instanceof rl?hA(n,e):n instanceof al?fA(n,e):(function(a,l){const c=cA(a,l),d=hS(c)+hS(a.Ae);return Og(c)&&Og(a.Ae)?uA(d):D_(a.serializer,d)})(n,e)}function VD(n,e,t){return n instanceof rl?hA(n,e):n instanceof al?fA(n,e):t}function cA(n,e){return n instanceof Bf?(function(s){return Og(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class lc extends wd{}class rl extends wd{constructor(e){super(),this.elements=e}}function hA(n,e){const t=dA(e);for(const s of n.elements)t.some((a=>Hi(a,s)))||t.push(s);return{arrayValue:{values:t}}}class al extends wd{constructor(e){super(),this.elements=e}}function fA(n,e){let t=dA(e);for(const s of n.elements)t=t.filter((a=>!Hi(a,s)));return{arrayValue:{values:t}}}class Bf extends wd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function hS(n){return At(n.integerValue||n.doubleValue)}function dA(n){return I_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t){this.field=e,this.transform=t}}function LD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof rl&&a instanceof rl||s instanceof al&&a instanceof al?nl(s.elements,a.elements,Hi):s instanceof Bf&&a instanceof Bf?Hi(s.Ae,a.Ae):s instanceof lc&&a instanceof lc})(n.transform,e.transform)}class UD{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bd{}function mA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new M_(n.key,xn.none()):new wc(n.key,n.data,xn.none());{const t=n.data,s=Cn.empty();let a=new Bt(on.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Vr(n.key,s,new Bn(a.toArray()),xn.none())}}function zD(n,e,t){n instanceof wc?(function(a,l,c){const d=a.value.clone(),p=dS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Vr?(function(a,l,c){if(!Tf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=dS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(pA(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Ku(n,e,t,s){return n instanceof wc?(function(l,c,d,p){if(!Tf(l.precondition,c))return d;const g=l.value.clone(),v=mS(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Vr?(function(l,c,d,p){if(!Tf(l.precondition,c))return d;const g=mS(l.fieldTransforms,p,c),v=c.data;return v.setAll(pA(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return Tf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function jD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=cA(s.transform,a||null);l!=null&&(t===null&&(t=Cn.empty()),t.set(s.field,l))}return t||null}function fS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&nl(s,a,((l,c)=>LD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wc extends bd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Vr extends bd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function pA(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function dS(n,e,t){const s=new Map;Xe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,VD(c,d,t[a]))}return s}function mS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,PD(l,c,e))}return s}class M_ extends bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qD extends bd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&zD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ku(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ku(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=lA();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=mA(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ce.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),je())}isEqual(e){return this.batchId===e.batchId&&nl(this.mutations,e.mutations,((t,s)=>fS(t,s)))&&nl(this.baseMutations,e.baseMutations,((t,s)=>fS(t,s)))}}class k_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Xe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return xD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new k_(e,t,s,a)}}/**
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
 */class FD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,He;function GD(n){switch(n){case W.OK:return Ee(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ee(15467,{code:n})}}function gA(n){if(n===void 0)return xs("GRPC error has no .code"),W.UNKNOWN;switch(n){case Dt.OK:return W.OK;case Dt.CANCELLED:return W.CANCELLED;case Dt.UNKNOWN:return W.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return W.INTERNAL;case Dt.UNAVAILABLE:return W.UNAVAILABLE;case Dt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Dt.NOT_FOUND:return W.NOT_FOUND;case Dt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Dt.ABORTED:return W.ABORTED;case Dt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Dt.DATA_LOSS:return W.DATA_LOSS;default:return Ee(39323,{code:n})}}(He=Dt||(Dt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function QD(){return new TextEncoder}/**
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
 */const YD=new Er([4294967295,4294967295],0);function pS(n){const e=QD().encode(n),t=new Db;return t.update(e),new Uint8Array(t.digest())}function gS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Er([t,s],0),new Er([a,l],0)]}class P_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new qu(`Invalid padding: ${t}`);if(s<0)throw new qu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new qu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new qu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Er.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Er.fromNumber(s)));return a.compare(YD)===1&&(a=new Er([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=pS(e),[s,a]=gS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new P_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=pS(e),[s,a]=gS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class qu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,bc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ad(Ce.min(),a,new Pt(ze),Ds(),je())}}class bc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new bc(s,t,je(),je(),je())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class _A{constructor(e,t){this.targetId=e,this.Ce=t}}class yA{constructor(e,t,s=ln.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class _S{constructor(){this.ve=0,this.Fe=yS(),this.Me=ln.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),t=je(),s=je();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ee(38017,{changeType:l})}})),new bc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=yS()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class KD{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ds(),this.Je=cf(),this.He=cf(),this.Ye=new Pt(ze)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(kg(l))if(s===0){const c=new pe(l.path);this.et(t,c,mn.newNoDocument(c,Ce.min()))}else Xe(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Rr(s).toUint8Array()}catch(p){if(p instanceof Fb)return tl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new P_(c,a,l)}catch(p){return tl(p instanceof qu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&kg(d.target)){const p=new pe(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,mn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=je();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Ad(e,t,this.Ye,this.je,s);return this.je=Ds(),this.Je=cf(),this.He=cf(),this.Ye=new Pt(ze),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new _S,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Bt(ze),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Bt(ze),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _S),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function cf(){return new Pt(pe.comparator)}function yS(){return new Pt(pe.comparator)}const XD={asc:"ASCENDING",desc:"DESCENDING"},WD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$D={and:"AND",or:"OR"};class ZD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vg(n,e){return n.useProto3Json||yd(e)?e:{value:e}}function Ff(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function JD(n,e){return Ff(n,e.toTimestamp())}function zi(n){return Xe(!!n,49232),Ce.fromTimestamp((function(t){const s=Cr(t);return new ft(s.seconds,s.nanos)})(n))}function V_(n,e){return Lg(n,e).canonicalString()}function Lg(n,e){const t=(function(a){return new lt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function EA(n){const e=lt.fromString(n);return Xe(AA(e),10190,{key:e.toString()}),e}function Ug(n,e){return V_(n.databaseId,e.path)}function ag(n,e){const t=EA(e);if(t.get(1)!==n.databaseId.projectId)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(SA(t))}function TA(n,e){return V_(n.databaseId,e)}function eO(n){const e=EA(n);return e.length===4?lt.emptyPath():SA(e)}function zg(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function SA(n){return Xe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function vS(n,e,t){return{name:Ug(n,e),fields:t.value.mapValue.fields}}function tO(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ee(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(Xe(v===void 0||typeof v=="string",58123),ln.fromBase64String(v||"")):(Xe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),ln.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const v=g.code===void 0?W.UNKNOWN:gA(g.code);return new re(v,g.message||"")})(c);t=new yA(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=ag(n,s.document.name),l=zi(s.document.updateTime),c=s.document.createTime?zi(s.document.createTime):Ce.min(),d=new Cn({mapValue:{fields:s.document.fields}}),p=mn.newFoundDocument(a,l,c,d),g=s.targetIds||[],v=s.removedTargetIds||[];t=new Sf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=ag(n,s.document),l=s.readTime?zi(s.readTime):Ce.min(),c=mn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Sf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=ag(n,s.document),l=s.removedTargetIds||[];t=new Sf([],l,a,null)}else{if(!("filter"in e))return Ee(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new HD(a,l),d=s.targetId;t=new _A(d,c)}}return t}function nO(n,e){let t;if(e instanceof wc)t={update:vS(n,e.key,e.value)};else if(e instanceof M_)t={delete:Ug(n,e.key)};else if(e instanceof Vr)t={update:vS(n,e.key,e.data),updateMask:hO(e.fieldMask)};else{if(!(e instanceof qD))return Ee(16599,{Vt:e.type});t={verify:Ug(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof lc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof rl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof al)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Bf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Ee(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:JD(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee(27497)})(n,e.precondition)),t}function iO(n,e){return n&&n.length>0?(Xe(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?zi(a.updateTime):zi(l);return c.isEqual(Ce.min())&&(c=zi(l)),new UD(c,a.transformResults||[])})(t,e)))):[]}function sO(n,e){return{documents:[TA(n,e.path)]}}function rO(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=TA(n,a);const l=(function(g){if(g.length!==0)return bA(_i.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(S){return{field:Bo(S.field),direction:lO(S.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Vg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function aO(n){let e=eO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Xe(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const S=wA(T);return S instanceof _i&&Jb(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((S=>(function(U){return new oc(Fo(U.field),(function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(S)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let S;return S=typeof T=="object"?T.value:T,yd(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(T){const S=!!T.before,x=T.values||[];return new jf(x,S)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const S=!T.before,x=T.values||[];return new jf(x,S)})(t.endAt)),AD(e,a,c,l,d,"F",p,g)}function oO(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wA(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Fo(t.unaryFilter.field);return Mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Fo(t.unaryFilter.field);return Mt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Fo(t.unaryFilter.field);return Mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Fo(t.unaryFilter.field);return Mt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Mt.create(Fo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return _i.create(t.compositeFilter.filters.map((s=>wA(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(n):Ee(30097,{filter:n})}function lO(n){return XD[n]}function uO(n){return WD[n]}function cO(n){return $D[n]}function Bo(n){return{fieldPath:n.canonicalString()}}function Fo(n){return on.fromServerFormat(n.fieldPath)}function bA(n){return n instanceof Mt?(function(t){if(t.op==="=="){if(aS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NAN"}};if(rS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(aS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NAN"}};if(rS(t.value))return{unaryFilter:{field:Bo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bo(t.field),op:uO(t.op),value:t.value}}})(n):n instanceof _i?(function(t){const s=t.getFilters().map((a=>bA(a)));return s.length===1?s[0]:{compositeFilter:{op:cO(t.op),filters:s}}})(n):Ee(54877,{filter:n})}function hO(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function AA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t,s,a,l=Ce.min(),c=Ce.min(),d=ln.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.yt=e}}function dO(n){const e=aO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qf(e,e.limit,"L"):e}/**
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
 */class mO{constructor(){this.Cn=new pO}addToCollectionParentIndex(e,t){return this.Cn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Ar.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class pO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Bt(lt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Bt(lt.comparator)).toArray()}}/**
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
 */const ES={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},CA=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(CA,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ol(0)}static cr(){return new ol(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="LruGarbageCollector",gO=1048576;function SS([n,e],[t,s]){const a=ze(n,t);return a===0?ze(e,s):a}class _O{constructor(e){this.Ir=e,this.buffer=new Bt(SS),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();SS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(TS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yl(t)?ae(TS,"Ignoring IndexedDB error during garbage collection: ",t):await _l(t)}await this.Vr(3e5)}))}}class vO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return J.resolve(_d.ce);const s=new _O(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(ES)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ES):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),jo()<=Ve.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function EO(n,e){return new vO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.changes=new qa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,mn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class SO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Ku(s.mutation,a,Bn.empty(),ft.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,je()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=je()){const a=ba();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=ju();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=ba();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,je())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Ds();const c=Yu(),d=(function(){return Yu()})();return t.forEach(((p,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Vr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Ku(v.mutation,g,v.mutation.getFieldMask(),ft.now())):c.set(g.key,Bn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>d.set(g,new SO(v,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=Yu();let a=new Pt(((c,d)=>c-d)),l=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=s.get(p)||Bn.empty();v=d.applyToLocalView(g,v),s.set(p,v);const T=(a.get(d.batchId)||je()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,v=p.value,T=lA();v.forEach((S=>{if(!l.has(S)){const x=mA(t.get(S),s.get(S));x!==null&&T.set(S,x),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return J.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return pe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):iA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(ba());let d=ic,p=l;return c.next((g=>J.forEach(g,((v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?J.resolve():this.remoteDocumentCache.getEntry(e,v).next((S=>{p=p.insert(v,S)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,je()))).next((v=>({batchId:d,changes:oA(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let a=ju();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=ju();return this.indexManager.getCollectionParents(e,l).next((d=>J.forEach(d,(p=>{const g=(function(T,S){return new vl(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((v=>{v.forEach(((T,S)=>{c=c.insert(T,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,mn.newInvalidDocument(v)))}));let d=ju();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&Ku(v.mutation,g,Bn.empty(),ft.now()),Sd(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return J.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:zi(a.createTime)}})(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:dO(a.bundledQuery),readTime:zi(a.readTime)}})(t)),J.resolve()}}/**
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
 */class AO{constructor(){this.overlays=new Pt(pe.comparator),this.qr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ba();return J.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=ba(),l=t.length+1,c=new pe(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Pt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=ba(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=ba(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=a)););return J.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new FD(t,s));let l=this.qr.get(t);l===void 0&&(l=je(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class CO{constructor(){this.sessionToken=ln.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.Qr=new Bt($t.$r),this.Ur=new Bt($t.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new $t(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new $t(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new pe(new lt([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new pe(new lt([])),s=new $t(t,e),a=new $t(t,e+1);let l=je();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new $t(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return pe.comparator(e.key,t.key)||ze(e.Yr,t.Yr)}static Kr(e,t){return ze(e.Yr,t.Yr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Bt($t.$r)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new BD(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?C_:this.tr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Bt(ze);return t.forEach((a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),J.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const c=new $t(new pe(l),0);let d=new Bt(ze);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),J.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Xe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return J.forEach(t.mutations,(a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new $t(t,0),a=this.Zr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.ri=e,this.docs=(function(){return new Pt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():mn.newInvalidDocument(t))}getEntries(e,t){let s=Ds();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():mn.newInvalidDocument(a))})),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ds();const c=t.path,d=new pe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||iD(nD(v),s)<=0||(a.has(v.key)||Sd(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ee(9500)}ii(e,t){return J.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new NO(this)}getSize(e){return J.resolve(this.size)}}class NO extends TO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),J.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.persistence=e,this.si=new qa((t=>N_(t)),x_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.oi=0,this._i=new L_,this.targetCount=0,this.ai=ol.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),J.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ol(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Pr(t),J.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),J.waitFor(l).next((()=>a))}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t){this.ui={},this.overlays={},this.ci=new _d(0),this.li=!1,this.li=!0,this.hi=new CO,this.referenceDelegate=e(this),this.Pi=new xO(this),this.indexManager=new mO,this.remoteDocumentCache=(function(a){return new IO(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new fO(t),this.Ii=new bO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new AO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new RO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const a=new DO(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return J.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class DO extends rD{constructor(e){super(),this.currentSequenceNumber=e}}class U_{constructor(e){this.persistence=e,this.Ri=new L_,this.Vi=null}static mi(e){return new U_(e)}get fi(){if(this.Vi)return this.Vi;throw Ee(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.fi,(s=>{const a=pe.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ce.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return J.or([()=>J.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Hf{constructor(e,t){this.persistence=e,this.pi=new qa((s=>lD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=EO(this,t)}static mi(e,t){return new Hf(e,t)}Ei(){}di(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return J.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?J.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ce.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),J.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vf(e.data.value)),t}br(e,t,s){return J.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=je(),a=je();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new z_(e,t.fromCache,s,a)}}/**
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
 */class OO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return vI()?8:aD(gn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new OO;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(jo()<=Ve.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",qo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),J.resolve()):(jo()<=Ve.DEBUG&&ae("QueryEngine","Query:",qo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(jo()<=Ve.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",qo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ui(t))):J.resolve())}ys(e,t){if(cS(t))return J.resolve(null);let s=Ui(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=qf(t,null,"F"),s=Ui(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=je(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,qf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return cS(t)||a.isEqual(Ce.min())?J.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?J.resolve(null):(jo()<=Ve.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),qo(t)),this.vs(e,c,t,tD(a,ic)).next((d=>d)))}))}Ds(e,t){let s=new Bt(rA(e));return t.forEach(((a,l)=>{Sd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return jo()<=Ve.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",qo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ar.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="LocalStore",kO=3e8;class PO{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Pt(ze),this.xs=new qa((l=>N_(l)),x_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function VO(n,e,t,s){return new PO(n,e,t,s)}async function IA(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=je();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){d.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function LO(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,v){const T=g.batch,S=T.keys();let x=J.resolve();return S.forEach((U=>{x=x.next((()=>v.getEntry(p,U))).next((Q=>{const K=g.docVersions.get(U);Xe(K!==null,48541),Q.version.compareTo(K)<0&&(T.applyToRemoteDocument(Q,g),Q.isValidDocument()&&(Q.setReadTime(g.commitVersion),v.addEntry(Q)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=je();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function NA(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function UO(n,e){const t=Re(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((v,T)=>{const S=a.get(T);if(!S)return;d.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,T))));let x=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(ln.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,s)),a=a.insert(T,x),(function(Q,K,ge){return Q.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=kO?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(S,x,v)&&d.push(t.Pi.updateTargetData(l,x))}));let p=Ds(),g=je();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),d.push(zO(l,c,e.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!s.isEqual(Ce.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(v)}return J.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function zO(n,e,t){let s=je(),a=je();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Ds();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ce.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae(j_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function jO(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=C_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function qO(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,J.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new gr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function jg(n,e,t){const s=Re(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!yl(c))throw c;ae(j_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function wS(n,e,t){const s=Re(n);let a=Ce.min(),l=je();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=Re(p),S=T.xs.get(v);return S!==void 0?J.resolve(T.Ms.get(S)):T.Pi.getTargetData(g,v)})(s,c,Ui(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ce.min(),t?l:je()))).next((d=>(BO(s,RD(e),d),{documents:d,Qs:l})))))}function BO(n,e,t){let s=n.Os.get(e)||Ce.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class bS{constructor(){this.activeTargetIds=MD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FO{constructor(){this.Mo=new bS,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new bS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HO{Oo(e){}shutdown(){}}/**
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
 */const AS="ConnectivityMonitor";class CS{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(AS,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(AS,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const og="RestConnection",GO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class QO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Uf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=qg(),d=this.zo(e,t.toUriEncodedString());ae(og,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),v=kr(g);return this.Jo(e,d,p,s,v).then((T=>(ae(og,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw tl(og,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+gl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=GO[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="WebChannelConnection";class KO extends QO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=qg();return new Promise(((d,p)=>{const g=new Ob;g.setWithCredentials(!0),g.listenOnce(Mb.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case yf.NO_ERROR:const T=g.getResponseJson();ae(fn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case yf.TIMEOUT:ae(fn,`RPC '${e}' ${c} timed out`),p(new re(W.DEADLINE_EXCEEDED,"Request time out"));break;case yf.HTTP_ERROR:const S=g.getStatus();if(ae(fn,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const U=x?.error;if(U&&U.status&&U.message){const Q=(function(ge){const ue=ge.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ue)>=0?ue:W.UNKNOWN})(U.status);p(new re(Q,U.message))}else p(new re(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new re(W.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ae(fn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);ae(fn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)}))}T_(e,t,s){const a=qg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Vb(),d=Pb(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");ae(fn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let S=!1,x=!1;const U=new YO({Yo:K=>{x?ae(fn,`Not sending because RPC '${e}' stream ${a} is closed:`,K):(S||(ae(fn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),ae(fn,`RPC '${e}' stream ${a} sending:`,K),T.send(K))},Zo:()=>T.close()}),Q=(K,ge,ue)=>{K.listen(ge,(ce=>{try{ue(ce)}catch(Le){setTimeout((()=>{throw Le}),0)}}))};return Q(T,zu.EventType.OPEN,(()=>{x||(ae(fn,`RPC '${e}' stream ${a} transport opened.`),U.o_())})),Q(T,zu.EventType.CLOSE,(()=>{x||(x=!0,ae(fn,`RPC '${e}' stream ${a} transport closed`),U.a_(),this.E_(T))})),Q(T,zu.EventType.ERROR,(K=>{x||(x=!0,tl(fn,`RPC '${e}' stream ${a} transport errored. Name:`,K.name,"Message:",K.message),U.a_(new re(W.UNAVAILABLE,"The operation could not be completed")))})),Q(T,zu.EventType.MESSAGE,(K=>{if(!x){const ge=K.data[0];Xe(!!ge,16349);const ue=ge,ce=ue?.error||ue[0]?.error;if(ce){ae(fn,`RPC '${e}' stream ${a} received error:`,ce);const Le=ce.status;let _e=(function(A){const C=Dt[A];if(C!==void 0)return gA(C)})(Le),Ue=ce.message;_e===void 0&&(_e=W.INTERNAL,Ue="Unknown error status: "+Le+" with message "+ce.message),x=!0,U.a_(new re(_e,Ue)),T.close()}else ae(fn,`RPC '${e}' stream ${a} received:`,ge),U.u_(ge)}})),Q(d,kb.STAT_EVENT,(K=>{K.stat===Ig.PROXY?ae(fn,`RPC '${e}' stream ${a} detected buffering proxy`):K.stat===Ig.NOPROXY&&ae(fn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function lg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n){return new ZD(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ae("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="PersistentStream";class DA{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(xs(t.toString()),xs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new re(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(RS,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(RS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XO extends DA{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=tO(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ce.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ce.min():c.readTime?zi(c.readTime):Ce.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=zg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=kg(p)?{documents:sO(l,p)}:{query:rO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=vA(l,c.resumeToken);const g=Vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ce.min())>0){d.readTime=Ff(l,c.snapshotVersion.toTimestamp());const g=Vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=oO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=zg(this.serializer),t.removeTarget=e,this.q_(t)}}class WO extends DA{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=iO(e.writeResults,e.commitTime),s=zi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=zg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>nO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{}class ZO extends $O{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Lg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re(W.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Lg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new re(W.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class JO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xs(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="RemoteStore";class eM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Ba(this)&&(ae(Pa,"Restarting streams for network reachability change."),await(async function(p){const g=Re(p);g.Ea.add(4),await Ac(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Rd(g)})(this))}))})),this.Ra=new JO(s,a)}}async function Rd(n){if(Ba(n))for(const e of n.da)await e(!0)}async function Ac(n){for(const e of n.da)await e(!1)}function OA(n,e){const t=Re(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),H_(t)?F_(t):El(t).O_()&&B_(t,e))}function q_(n,e){const t=Re(n),s=El(t);t.Ia.delete(e),s.O_()&&MA(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ba(t)&&t.Ra.set("Unknown"))}function B_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}El(n).Y_(e)}function MA(n,e){n.Va.Ue(e),El(n).Z_(e)}function F_(n){n.Va=new KD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),El(n).start(),n.Ra.ua()}function H_(n){return Ba(n)&&!El(n).x_()&&n.Ia.size>0}function Ba(n){return Re(n).Ea.size===0}function kA(n){n.Va=void 0}async function tM(n){n.Ra.set("Online")}async function nM(n){n.Ia.forEach(((e,t)=>{B_(n,e)}))}async function iM(n,e){kA(n),H_(n)?(n.Ra.ha(e),F_(n)):n.Ra.set("Unknown")}async function sM(n,e,t){if(n.Ra.set("Online"),e instanceof yA&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){ae(Pa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Gf(n,s)}else if(e instanceof Sf?n.Va.Ze(e):e instanceof _A?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ce.min()))try{const s=await NA(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(ln.EMPTY_BYTE_STRING,v.snapshotVersion)),MA(l,p);const T=new gr(v.target,p,g,v.sequenceNumber);B_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){ae(Pa,"Failed to raise snapshot:",s),await Gf(n,s)}}async function Gf(n,e,t){if(!yl(e))throw e;n.Ea.add(1),await Ac(n),n.Ra.set("Offline"),t||(t=()=>NA(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae(Pa,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Rd(n)}))}function PA(n,e){return e().catch((t=>Gf(n,t,e)))}async function Id(n){const e=Re(n),t=Nr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:C_;for(;rM(e);)try{const a=await jO(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,aM(e,a)}catch(a){await Gf(e,a)}VA(e)&&LA(e)}function rM(n){return Ba(n)&&n.Ta.length<10}function aM(n,e){n.Ta.push(e);const t=Nr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function VA(n){return Ba(n)&&!Nr(n).x_()&&n.Ta.length>0}function LA(n){Nr(n).start()}async function oM(n){Nr(n).ra()}async function lM(n){const e=Nr(n);for(const t of n.Ta)e.ea(t.mutations)}async function uM(n,e,t){const s=n.Ta.shift(),a=k_.from(s,e,t);await PA(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Id(n)}async function cM(n,e){e&&Nr(n).X_&&await(async function(s,a){if((function(c){return GD(c)&&c!==W.ABORTED})(a.code)){const l=s.Ta.shift();Nr(s).B_(),await PA(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Id(s)}})(n,e),VA(n)&&LA(n)}async function IS(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ae(Pa,"RemoteStore received new credentials");const s=Ba(t);t.Ea.add(3),await Ac(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Rd(t)}async function hM(n,e){const t=Re(n);e?(t.Ea.delete(2),await Rd(t)):e||(t.Ea.add(2),await Ac(t),t.Ra.set("Unknown"))}function El(n){return n.ma||(n.ma=(function(t,s,a){const l=Re(t);return l.sa(),new XO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:tM.bind(null,n),t_:nM.bind(null,n),r_:iM.bind(null,n),H_:sM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),H_(n)?F_(n):n.Ra.set("Unknown")):(await n.ma.stop(),kA(n))}))),n.ma}function Nr(n){return n.fa||(n.fa=(function(t,s,a){const l=Re(t);return l.sa(),new WO(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:oM.bind(null,n),r_:cM.bind(null,n),ta:lM.bind(null,n),na:uM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Id(n)):(await n.fa.stop(),n.Ta.length>0&&(ae(Pa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new As,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new G_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Q_(n,e){if(xs("AsyncQueue",`${e}: ${n}`),yl(n))return new re(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{static emptySet(e){return new Xo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=ju(),this.sortedSet=new Pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Xo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.ga=new Pt(pe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ee(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ll{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new ll(e,t,Xo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class dM{constructor(){this.queries=xS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Re(t),l=a.queries;a.queries=xS(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new re(W.ABORTED,"Firestore shutting down"))}}function xS(){return new qa((n=>sA(n)),Td)}async function Y_(n,e){const t=Re(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new fM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=Q_(c,`Initialization of query '${qo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&X_(t)}async function K_(n,e){const t=Re(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function mM(n,e){const t=Re(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&X_(t)}function pM(n,e,t){const s=Re(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function X_(n){n.Ca.forEach((e=>{e.next()}))}var Bg,DS;(DS=Bg||(Bg={})).Ma="default",DS.Cache="cache";class W_{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new ll(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ll.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.key=e}}class zA{constructor(e){this.key=e}}class gM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=je(),this.mutatedKeys=je(),this.eu=rA(e),this.tu=new Xo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new NS,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const S=a.get(v),x=Sd(this.query,T)?T:null,U=!!S&&this.mutatedKeys.has(S.key),Q=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let K=!1;S&&x?S.data.isEqual(x.data)?U!==Q&&(s.track({type:3,doc:x}),K=!0):this.su(S,x)||(s.track({type:2,doc:x}),K=!0,(p&&this.eu(x,p)>0||g&&this.eu(x,g)<0)&&(d=!0)):!S&&x?(s.track({type:0,doc:x}),K=!0):S&&!x&&(s.track({type:1,doc:S}),K=!0,(p||g)&&(d=!0)),K&&(x?(c=c.add(x),l=Q?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(x,U){const Q=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Rt:K})}};return Q(x)-Q(U)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new ll(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new NS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=je(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new zA(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new UA(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=je();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ll.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const $_="SyncEngine";class _M{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class yM{constructor(e){this.key=e,this.hu=!1}}class vM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new qa((d=>sA(d)),Td),this.Iu=new Map,this.Eu=new Set,this.du=new Pt(pe.comparator),this.Au=new Map,this.Ru=new L_,this.Vu={},this.mu=new Map,this.fu=ol.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function EM(n,e,t=!0){const s=GA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await jA(s,e,t,!0),a}async function TM(n,e){const t=GA(n);await jA(t,e,!0,!1)}async function jA(n,e,t,s){const a=await qO(n.localStore,Ui(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await SM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&OA(n.remoteStore,a),d}async function SM(n,e,t,s,a){n.pu=(T,S,x)=>(async function(Q,K,ge,ue){let ce=K.view.ru(ge);ce.Cs&&(ce=await wS(Q.localStore,K.query,!1).then((({documents:P})=>K.view.ru(P,ce))));const Le=ue&&ue.targetChanges.get(K.targetId),_e=ue&&ue.targetMismatches.get(K.targetId)!=null,Ue=K.view.applyChanges(ce,Q.isPrimaryClient,Le,_e);return MS(Q,K.targetId,Ue.au),Ue.snapshot})(n,T,S,x);const l=await wS(n.localStore,e,!0),c=new gM(e,l.Qs),d=c.ru(l.documents),p=bc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);MS(n,t,g.au);const v=new _M(e,t,c);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function wM(n,e,t){const s=Re(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Td(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await jg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&q_(s.remoteStore,a.targetId),Fg(s,a.targetId)})).catch(_l)):(Fg(s,a.targetId),await jg(s.localStore,a.targetId,!0))}async function bM(n,e){const t=Re(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),q_(t.remoteStore,s.targetId))}async function AM(n,e,t){const s=OM(n);try{const a=await(function(c,d){const p=Re(c),g=ft.now(),v=d.reduce(((x,U)=>x.add(U.key)),je());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let U=Ds(),Q=je();return p.Ns.getEntries(x,v).next((K=>{U=K,U.forEach(((ge,ue)=>{ue.isValidDocument()||(Q=Q.add(ge))}))})).next((()=>p.localDocuments.getOverlayedDocuments(x,U))).next((K=>{T=K;const ge=[];for(const ue of d){const ce=jD(ue,T.get(ue.key).overlayedDocument);ce!=null&&ge.push(new Vr(ue.key,ce,Wb(ce.value.mapValue),xn.exists(!0)))}return p.mutationQueue.addMutationBatch(x,g,ge,d)})).next((K=>{S=K;const ge=K.applyToLocalDocumentSet(T,Q);return p.documentOverlayCache.saveOverlays(x,K.batchId,ge)}))})).then((()=>({batchId:S.batchId,changes:oA(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Pt(ze)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Cc(s,a.changes),await Id(s.remoteStore)}catch(a){const l=Q_(a,"Failed to persist write");t.reject(l)}}async function qA(n,e){const t=Re(n);try{const s=await UO(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?Xe(c.hu,14607):a.removedDocuments.size>0&&(Xe(c.hu,42227),c.hu=!1))})),await Cc(t,s,e)}catch(s){await _l(s)}}function OS(n,e,t){const s=Re(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=Re(c);p.onlineState=d;let g=!1;p.queries.forEach(((v,T)=>{for(const S of T.Sa)S.va(d)&&(g=!0)})),g&&X_(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function CM(n,e,t){const s=Re(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Pt(pe.comparator);c=c.insert(l,mn.newNoDocument(l,Ce.min()));const d=je().add(l),p=new Ad(Ce.min(),new Map,new Pt(ze),c,d);await qA(s,p),s.du=s.du.remove(l),s.Au.delete(e),Z_(s)}else await jg(s.localStore,e,!1).then((()=>Fg(s,e,t))).catch(_l)}async function RM(n,e){const t=Re(n),s=e.batch.batchId;try{const a=await LO(t.localStore,e);FA(t,s,null),BA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Cc(t,a)}catch(a){await _l(a)}}async function IM(n,e,t){const s=Re(n);try{const a=await(function(c,d){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(Xe(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(s.localStore,e);FA(s,e,t),BA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Cc(s,a)}catch(a){await _l(a)}}function BA(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function FA(n,e,t){const s=Re(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Fg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||HA(n,s)}))}function HA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(q_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Z_(n))}function MS(n,e,t){for(const s of t)s instanceof UA?(n.Ru.addReference(s.key,e),NM(n,s)):s instanceof zA?(ae($_,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||HA(n,s.key)):Ee(19791,{wu:s})}function NM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(ae($_,"New document in limbo: "+t),n.Eu.add(s),Z_(n))}function Z_(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new pe(lt.fromString(e)),s=n.fu.next();n.Au.set(s,new yM(t)),n.du=n.du.insert(t,s),OA(n.remoteStore,new gr(Ui(Ed(t.path)),s,"TargetPurposeLimboResolution",_d.ce))}}async function Cc(n,e,t){const s=Re(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const v=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=z_.As(p.targetId,g);l.push(v)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const v=Re(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>J.forEach(g,(S=>J.forEach(S.Es,(x=>v.persistence.referenceDelegate.addReference(T,S.targetId,x))).next((()=>J.forEach(S.ds,(x=>v.persistence.referenceDelegate.removeReference(T,S.targetId,x)))))))))}catch(T){if(!yl(T))throw T;ae(j_,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const x=v.Ms.get(S),U=x.snapshotVersion,Q=x.withLastLimboFreeSnapshotVersion(U);v.Ms=v.Ms.insert(S,Q)}}})(s.localStore,l))}async function xM(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ae($_,"User change. New user:",e.toKey());const s=await IA(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new re(W.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Cc(t,s.Ls)}}function DM(n,e){const t=Re(n),s=t.Au.get(e);if(s&&s.hu)return je().add(s.key);{let a=je();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function GA(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CM.bind(null,e),e.Pu.H_=mM.bind(null,e.eventManager),e.Pu.yu=pM.bind(null,e.eventManager),e}function OM(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IM.bind(null,e),e}class Qf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return VO(this.persistence,new MO,e.initialUser,this.serializer)}Cu(e){return new RA(U_.mi,this.serializer)}Du(e){return new FO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qf.provider={build:()=>new Qf};class MM extends Qf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Xe(this.persistence.referenceDelegate instanceof Hf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new yO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new RA((s=>Hf.mi(s,t)),this.serializer)}}class Hg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>OS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xM.bind(null,this.syncEngine),await hM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new dM})()}createDatastore(e){const t=Cd(e.databaseInfo.databaseId),s=(function(l){return new KO(l)})(e.databaseInfo);return(function(l,c,d,p){return new ZO(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new eM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>OS(this.syncEngine,t,0)),(function(){return CS.v()?new CS:new HO})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,v){const T=new vM(a,l,c,d,p,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Re(t);ae(Pa,"RemoteStore shutting down."),s.Ea.add(5),await Ac(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Hg.provider={build:()=>new Hg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class J_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class kM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=dn.UNAUTHENTICATED,this.clientId=A_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{ae(xr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(ae(xr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new As;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Q_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ug(n,e){n.asyncQueue.verifyOperationInProgress(),ae(xr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await IA(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function kS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await PM(n);ae(xr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>IS(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>IS(e.remoteStore,a))),n._onlineComponents=e}async function PM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(xr,"Using user provided OfflineComponentProvider");try{await ug(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===W.FAILED_PRECONDITION||a.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;tl("Error using user provided cache. Falling back to memory cache: "+t),await ug(n,new Qf)}}else ae(xr,"Using default OfflineComponentProvider"),await ug(n,new MM(void 0));return n._offlineComponents}async function QA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(xr,"Using user provided OnlineComponentProvider"),await kS(n,n._uninitializedComponentsProvider._online)):(ae(xr,"Using default OnlineComponentProvider"),await kS(n,new Hg))),n._onlineComponents}function VM(n){return QA(n).then((e=>e.syncEngine))}async function Yf(n){const e=await QA(n),t=e.eventManager;return t.onListen=EM.bind(null,e.syncEngine),t.onUnlisten=wM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=TM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bM.bind(null,e.syncEngine),t}function LM(n,e,t={}){const s=new As;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new J_({next:S=>{v.Nu(),c.enqueueAndForget((()=>K_(l,T)));const x=S.docs.has(d);!x&&S.fromCache?g.reject(new re(W.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&S.fromCache&&p&&p.source==="server"?g.reject(new re(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new W_(Ed(d.path),v,{includeMetadataChanges:!0,qa:!0});return Y_(l,T)})(await Yf(n),n.asyncQueue,e,t,s))),s.promise}function UM(n,e,t={}){const s=new As;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const v=new J_({next:S=>{v.Nu(),c.enqueueAndForget((()=>K_(l,T))),S.fromCache&&p.source==="server"?g.reject(new re(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new W_(d,v,{includeMetadataChanges:!0,qa:!0});return Y_(l,T)})(await Yf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function YA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="firestore.googleapis.com",VS=!0;class LS{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=KA,this.ssl=VS}else this.host=e.host,this.ssl=e.ssl??VS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=CA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gO)throw new re(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new LS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new LS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Hx;switch(s.type){case"firstParty":return new Kx(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=PS.get(t);s&&(ae("ComponentProvider","Removing Datastore"),PS.delete(t),s.terminate())})(this),Promise.resolve()}}function zM(n,e,t,s={}){n=Nn(n,Nd);const a=kr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(c_(`https://${d}`),h_("Firestore",!0)),l.host!==KA&&l.host!==d&&tl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Bi(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,v;if(typeof s.mockUserToken=="string")g=s.mockUserToken,v=dn.MOCK_USER;else{g=Qw(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new re(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new dn(T)}n._authCredentials=new Gx(new Ub(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vs(this.firestore,e,this._query)}}class Tt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Sc(t,Tt._jsonSchema))return new Tt(e,s||null,new pe(lt.fromString(t.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:kt("string",Tt._jsonSchemaVersion),referencePath:kt("string")};class Sr extends Vs{constructor(e,t,s){super(e,t,Ed(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new pe(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function Fn(n,e,...t){if(n=ut(n),zb("collection","path",e),n instanceof Nd){const s=lt.fromString(e,...t);return W0(s),new Sr(n,null,s)}{if(!(n instanceof Tt||n instanceof Sr))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(lt.fromString(e,...t));return W0(s),new Sr(n.firestore,null,s)}}function Gi(n,e,...t){if(n=ut(n),arguments.length===1&&(e=A_.newId()),zb("doc","path",e),n instanceof Nd){const s=lt.fromString(e,...t);return X0(s),new Tt(n,null,new pe(s))}{if(!(n instanceof Tt||n instanceof Sr))throw new re(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(lt.fromString(e,...t));return X0(s),new Tt(n.firestore,n instanceof Sr?n.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="AsyncQueue";class zS{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xA(this,"async_queue_retry"),this._c=()=>{const s=lg();s&&ae(US,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=lg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=lg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new As;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!yl(e))throw e;ae(US,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,xs("INTERNAL UNHANDLED ERROR: ",jS(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=G_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Ee(47125,{Pc:jS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function jS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function qS(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Os extends Nd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new zS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zS(e),this._firestoreClient=void 0,await e}}}function jM(n,e){const t=typeof n=="object"?n:m_(),s=typeof n=="string"?n:Uf,a=fd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Fw("firestore");l&&zM(a,...l)}return a}function Rc(n){if(n._terminated)throw new re(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qM(n),n._firestoreClient}function qM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new hD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,YA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new kM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(ln.fromBase64String(e))}catch(t){throw new re(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ii(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ii._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sc(e,ii._jsonSchema))return ii.fromBase64String(e.bytes)}}ii._jsonSchemaVersion="firestore/bytes/1.0",ii._jsonSchema={type:kt("string",ii._jsonSchemaVersion),bytes:kt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ji._jsonSchemaVersion}}static fromJSON(e){if(Sc(e,ji._jsonSchema))return new ji(e.latitude,e.longitude)}}ji._jsonSchemaVersion="firestore/geoPoint/1.0",ji._jsonSchema={type:kt("string",ji._jsonSchemaVersion),latitude:kt("number"),longitude:kt("number")};/**
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
 */class qi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:qi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sc(e,qi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new qi(e.vectorValues);throw new re(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qi._jsonSchemaVersion="firestore/vectorValue/1.0",qi._jsonSchema={type:kt("string",qi._jsonSchemaVersion),vectorValues:kt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=/^__.*__$/;class FM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms):new wc(e,this.data,t,this.fieldTransforms)}}class XA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function WA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ac:n})}}class xd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new xd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Kf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(WA(this.Ac)&&BM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class HM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Cd(e)}Cc(e,t,s,a=!1){return new xd({Ac:e,methodName:t,Dc:s,path:on.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nc(n){const e=n._freezeSettings(),t=Cd(n._databaseId);return new HM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ey(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);sy("Data must be an object, but it was:",c,s);const d=e1(s,c);let p,g;if(l.merge)p=new Bn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const S=Gg(e,T,t);if(!c.contains(S))throw new re(W.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);n1(v,S)||v.push(S)}p=new Bn(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new FM(new Cn(d),p,g)}class Dd extends Tl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dd}}function $A(n,e,t){return new xd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ty extends Tl{_toFieldTransform(e){return new O_(e.path,new lc)}isEqual(e){return e instanceof ty}}class ny extends Tl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=$A(this,e,!0),s=this.vc.map((l=>Fa(l,t))),a=new rl(s);return new O_(e.path,a)}isEqual(e){return e instanceof ny&&Bi(this.vc,e.vc)}}class iy extends Tl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=$A(this,e,!0),s=this.vc.map((l=>Fa(l,t))),a=new al(s);return new O_(e.path,a)}isEqual(e){return e instanceof iy&&Bi(this.vc,e.vc)}}function ZA(n,e,t,s){const a=n.Cc(1,e,t);sy("Data must be an object, but it was:",a,s);const l=[],c=Cn.empty();Pr(s,((p,g)=>{const v=ry(e,p,t);g=ut(g);const T=a.yc(v);if(g instanceof Dd)l.push(v);else{const S=Fa(g,T);S!=null&&(l.push(v),c.set(v,S))}}));const d=new Bn(l);return new XA(c,d,a.fieldTransforms)}function JA(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Gg(e,s,t)],p=[a];if(l.length%2!=0)throw new re(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(Gg(e,l[S])),p.push(l[S+1]);const g=[],v=Cn.empty();for(let S=d.length-1;S>=0;--S)if(!n1(g,d[S])){const x=d[S];let U=p[S];U=ut(U);const Q=c.yc(x);if(U instanceof Dd)g.push(x);else{const K=Fa(U,Q);K!=null&&(g.push(x),v.set(x,K))}}const T=new Bn(g);return new XA(v,T,c.fieldTransforms)}function GM(n,e,t,s=!1){return Fa(t,n.Cc(s?4:3,e))}function Fa(n,e){if(t1(n=ut(n)))return sy("Unsupported field value:",e,n),e1(n,e);if(n instanceof Tl)return(function(s,a){if(!WA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Fa(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=ut(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ft.fromDate(s);return{timestampValue:Ff(a.serializer,l)}}if(s instanceof ft){const l=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ff(a.serializer,l)}}if(s instanceof ji)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ii)return{bytesValue:vA(a.serializer,s._byteString)};if(s instanceof Tt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:V_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof qi)return(function(c,d){return{mapValue:{fields:{[Kb]:{stringValue:Xb},[zf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return D_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${gd(s)}`)})(n,e)}function e1(n,e){const t={};return Bb(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(n,((s,a)=>{const l=Fa(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function t1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ft||n instanceof ji||n instanceof ii||n instanceof Tt||n instanceof Tl||n instanceof qi)}function sy(n,e,t){if(!t1(t)||!jb(t)){const s=gd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Gg(n,e,t){if((e=ut(e))instanceof Ic)return e._internalPath;if(typeof e=="string")return ry(n,e);throw Kf("Field path arguments must be of type string or ",n,!1,void 0,t)}const QM=new RegExp("[~\\*/\\[\\]]");function ry(n,e,t){if(e.search(QM)>=0)throw Kf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ic(...e.split("."))._internalPath}catch{throw Kf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Kf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new re(W.INVALID_ARGUMENT,d+n+p)}function n1(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Od("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YM extends i1{data(){return super.data()}}function Od(n,e){return typeof e=="string"?ry(n,e):e instanceof Ic?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ay{}class oy extends ay{}function pi(n,e,...t){let s=[];e instanceof ay&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof ly)).length,d=l.filter((p=>p instanceof Md)).length;if(c>1||c>0&&d>0)throw new re(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Md extends oy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Md(e,t,s)}_apply(e){const t=this._parse(e);return r1(e._query,t),new Vs(e.firestore,e.converter,Pg(e._query,t))}_parse(e){const t=Nc(e.firestore);return(function(l,c,d,p,g,v,T){let S;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new re(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){FS(T,v);const U=[];for(const Q of T)U.push(BS(p,l,Q));S={arrayValue:{values:U}}}else S=BS(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||FS(T,v),S=GM(d,c,T,v==="in"||v==="not-in");return Mt.create(g,v,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pn(n,e,t){const s=e,a=Od("where",n);return Md._create(a,s,t)}class ly extends ay{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ly(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:_i.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)r1(c,p),c=Pg(c,p)})(e._query,t),new Vs(e.firestore,e.converter,Pg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uy extends oy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uy(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new re(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new re(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oc(l,c)})(e._query,this._field,this._direction);return new Vs(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new vl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function KM(n,e="asc"){const t=e,s=Od("orderBy",n);return uy._create(s,t)}class cy extends oy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new cy(e,t,s)}_apply(e){return new Vs(e.firestore,e.converter,qf(e._query,this._limit,this._limitType))}}function XM(n){return cy._create("limit",n,"F")}function BS(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new re(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iA(e)&&t.indexOf("/")!==-1)throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(lt.fromString(t));if(!pe.isDocumentKey(s))throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return sS(n,new pe(s))}if(t instanceof Tt)return sS(n,t._key);throw new re(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gd(t)}.`)}function FS(n,e){if(!Array.isArray(n)||n.length===0)throw new re(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function r1(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WM{convertValue(e,t="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Pr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[zf].arrayValue?.values?.map((s=>At(s.doubleValue)));return new qi(t)}convertGeoPoint(e){return new ji(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=vd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(sc(e));default:return null}}convertTimestamp(e){const t=Cr(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);Xe(AA(s),9688,{name:e});const a=new rc(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return a.isEqual(t)||xs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Bu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ra extends i1{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Od("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ra._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ra._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ra._jsonSchema={type:kt("string",Ra._jsonSchemaVersion),bundleSource:kt("string","DocumentSnapshot"),bundleName:kt("string"),bundle:kt("string")};class wf extends Ra{data(e={}){return super.data(e)}}class Ia{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Bu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new wf(this._firestore,this._userDataWriter,s.key,s,new Bu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Bu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new wf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Bu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:$M(d.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ia._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=A_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $M(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(n){n=Nn(n,Tt);const e=Nn(n.firestore,Os);return LM(Rc(e),n._key).then((t=>l1(e,n,t)))}Ia._jsonSchemaVersion="firestore/querySnapshot/1.0",Ia._jsonSchema={type:kt("string",Ia._jsonSchemaVersion),bundleSource:kt("string","QuerySnapshot"),bundleName:kt("string"),bundle:kt("string")};class fy extends WM{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function Xf(n){n=Nn(n,Vs);const e=Nn(n.firestore,Os),t=Rc(e),s=new fy(e);return s1(n._query),UM(t,n._query).then((a=>new Ia(e,s,n,a)))}function ZM(n,e,t){n=Nn(n,Tt);const s=Nn(n.firestore,Os),a=hy(n.converter,e,t);return kd(s,[ey(Nc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,xn.none())])}function Cs(n,e,t,...s){n=Nn(n,Tt);const a=Nn(n.firestore,Os),l=Nc(a);let c;return c=typeof(e=ut(e))=="string"||e instanceof Ic?JA(l,"updateDoc",n._key,e,t,s):ZA(l,"updateDoc",n._key,e),kd(a,[c.toMutation(n._key,xn.exists(!0))])}function o1(n,e){const t=Nn(n.firestore,Os),s=Gi(n),a=hy(n.converter,e);return kd(t,[ey(Nc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,xn.exists(!1))]).then((()=>s))}function Dr(n,...e){n=ut(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||qS(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(qS(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof Tt)c=Nn(n.firestore,Os),d=Ed(n._key.path),l={next:p=>{e[s]&&e[s](l1(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Nn(n,Vs);c=Nn(p.firestore,Os),d=p._query;const g=new fy(c);l={next:v=>{e[s]&&e[s](new Ia(c,g,p,v))},error:e[s+1],complete:e[s+2]},s1(n._query)}return(function(g,v,T,S){const x=new J_(S),U=new W_(v,x,T);return g.asyncQueue.enqueueAndForget((async()=>Y_(await Yf(g),U))),()=>{x.Nu(),g.asyncQueue.enqueueAndForget((async()=>K_(await Yf(g),U)))}})(Rc(c),d,a,l)}function kd(n,e){return(function(s,a){const l=new As;return s.asyncQueue.enqueueAndForget((async()=>AM(await VM(s),a,l))),l.promise})(Rc(n),e)}function l1(n,e,t){const s=t.docs.get(e._key),a=new fy(n);return new Ra(n,a,e._key,s,new Bu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Nc(e)}set(e,t,s){this._verifyNotCommitted();const a=cg(e,this._firestore),l=hy(a.converter,t,s),c=ey(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,xn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=cg(e,this._firestore);let c;return c=typeof(t=ut(t))=="string"||t instanceof Ic?JA(this._dataReader,"WriteBatch.update",l._key,t,s,a):ZA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,xn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=cg(e,this._firestore);return this._mutations=this._mutations.concat(new M_(t._key,xn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new re(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function cg(n,e){if((n=ut(n)).firestore!==e)throw new re(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function uc(){return new ty("serverTimestamp")}function Qg(...n){return new ny("arrayUnion",n)}function ek(...n){return new iy("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(n){return Rc(n=Nn(n,Os)),new JM(n,(e=>kd(n,e)))}(function(e,t=!0){(function(a){gl=a})(ja),Da(new br("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Os(new Qx(s.getProvider("auth-internal")),new Xx(c,s.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new re(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rc(g.options.projectId,v)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Vi(G0,Q0,e),Vi(G0,Q0,"esm2020")})();var HS={};const GS="@firebase/database",QS="1.1.0";/**
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
 */let u1="";function tk(n){u1=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ec(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Qi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nk(e)}}catch{}return new ik},Aa=c1("localStorage"),sk=c1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new hd("@firebase/database"),rk=(function(){let n=1;return function(){return n++}})(),h1=function(n){const e=DI(n),t=new RI;t.update(e);const s=t.digest();return u_.encodeByteArray(s)},xc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xc.apply(null,s):typeof s=="object"?e+=Jt(s):e+=s,e+=" "}return e};let Xu=null,YS=!0;const ak=function(n,e){ie(!0,"Can't turn on custom loggers persistently."),Wo.logLevel=Ve.VERBOSE,Xu=Wo.log.bind(Wo)},an=function(...n){if(YS===!0&&(YS=!1,Xu===null&&sk.get("logging_enabled")===!0&&ak()),Xu){const e=xc.apply(null,n);Xu(e)}},Dc=function(n){return function(...e){an(n,...e)}},Yg=function(...n){const e="FIREBASE INTERNAL ERROR: "+xc(...n);Wo.error(e)},Ms=function(...n){const e=`FIREBASE FATAL ERROR: ${xc(...n)}`;throw Wo.error(e),new Error(e)},Dn=function(...n){const e="FIREBASE WARNING: "+xc(...n);Wo.warn(e)},ok=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},lk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ul="[MIN_NAME]",Va="[MAX_NAME]",Ha=function(n,e){if(n===e)return 0;if(n===ul||e===Va)return-1;if(e===ul||n===Va)return 1;{const t=KS(n),s=KS(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},uk=function(n,e){return n===e?0:n<e?-1:1},Pu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Jt(e))},dy=function(n){if(typeof n!="object"||n===null)return Jt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Jt(e[s]),t+=":",t+=dy(n[e[s]]);return t+="}",t},f1=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function _n(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const d1=function(n){ie(!Pd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(p=0;p<64;p+=8){let S=parseInt(v.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},ck=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const dk=new RegExp("^-?(0*)\\d{1,10}$"),mk=-2147483648,pk=2147483647,KS=function(n){if(dk.test(n)){const e=Number(n);if(e>=mk&&e<=pk)return e}return null},Sl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Dn("Exception was thrown by user callback.",t),e},Math.floor(0))}},gk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class _k{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,qn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(an("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dn(e)}}class bf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="5",m1="v",p1="s",g1="r",_1="f",y1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,v1="ls",E1="p",Kg="ac",T1="websocket",S1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Aa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Aa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function b1(n,e,t){ie(typeof e=="string","typeof type must == string"),ie(typeof t=="object","typeof params must == object");let s;if(e===T1)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===S1)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vk(n)&&(t.ns=n.namespace);const a=[];return _n(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.counters_={}}incrementCounter(e,t=1){Qi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return aI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={},dg={};function py(n){const e=n.toString();return fg[e]||(fg[e]=new Ek),fg[e]}function Tk(n,e){const t=n.toString();return dg[t]||(dg[t]=e()),dg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Sl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="start",wk="close",bk="pLPCommand",Ak="pRTLPCB",A1="id",C1="pw",R1="ser",Ck="cb",Rk="seg",Ik="ts",Nk="d",xk="dframe",I1=1870,N1=30,Dk=I1-N1,Ok=25e3,Mk=3e4;class Ho{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dc(e),this.stats_=py(t),this.urlFn=p=>(this.appCheckToken&&(p[Kg]=this.appCheckToken),b1(t,S1,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Sk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mk)),lk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gy((...l)=>{const[c,d,p,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===XS)this.id=d,this.password=p;else if(c===wk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[XS]="t",s[R1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ck]=this.scriptTagHolder.uniqueCallbackIdentifier),s[m1]=my,this.transportSessionId&&(s[p1]=this.transportSessionId),this.lastSessionId&&(s[v1]=this.lastSessionId),this.applicationId&&(s[E1]=this.applicationId),this.appCheckToken&&(s[Kg]=this.appCheckToken),typeof location<"u"&&location.hostname&&y1.test(location.hostname)&&(s[g1]=_1);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ho.forceAllow_=!0}static forceDisallow(){Ho.forceDisallow_=!0}static isAvailable(){return Ho.forceAllow_?!0:!Ho.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ck()&&!hk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=jw(t),a=f1(s,Dk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[xk]="t",s[A1]=e,s[C1]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rk(),window[bk+this.uniqueCallbackIdentifier]=e,window[Ak+this.uniqueCallbackIdentifier]=t,this.myIFrame=gy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){an("frame writing exception"),d.stack&&an(d.stack),an(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||an("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[A1]=this.myID,e[C1]=this.myPW,e[R1]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+N1+s.length<=I1;){const c=this.pendingSegs.shift();s=s+"&"+Rk+a+"="+c.seg+"&"+Ik+a+"="+c.ts+"&"+Nk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(Ok)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{an("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=16384,Pk=45e3;let Wf=null;typeof MozWebSocket<"u"?Wf=MozWebSocket:typeof WebSocket<"u"&&(Wf=WebSocket);class hi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dc(this.connId),this.stats_=py(t),this.connURL=hi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[m1]=my,typeof location<"u"&&location.hostname&&y1.test(location.hostname)&&(c[g1]=_1),t&&(c[p1]=t),s&&(c[v1]=s),a&&(c[Kg]=a),l&&(c[E1]=l),b1(e,T1,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Aa.set("previous_websocket_failure",!0);try{let s;yI(),this.mySock=new Wf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Wf!==null&&!hi.forceDisallow_}static previouslyFailed(){return Aa.isInMemoryStorage||Aa.get("previous_websocket_failure")===!0}markConnectionHealthy(){Aa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ec(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ie(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=f1(t,kk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Pk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hi.responsesRequiredToBeHealthy=2;hi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static get ALL_TRANSPORTS(){return[Ho,hi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=hi&&hi.isAvailable();let s=t&&!hi.previouslyFailed();if(e.webSocketOnly&&(t||Dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hi];else{const a=this.transports_=[];for(const l of cc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);cc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=6e4,Lk=5e3,Uk=10*1024,zk=100*1024,mg="t",WS="d",jk="s",$S="r",qk="e",ZS="o",JS="a",ew="n",tw="p",Bk="h";class Fk{constructor(e,t,s,a,l,c,d,p,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dc("c:"+this.id+":"),this.transportManager_=new cc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Wu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Uk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mg in e){const t=e[mg];t===JS?this.upgradeIfSecondaryHealthy_():t===$S?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ZS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pu("t",e),s=Pu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:JS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ew,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pu("t",e),s=Pu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pu(mg,e);if(WS in e){const s=e[WS];if(t===Bk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===ew){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===jk?this.onConnectionShutdown_(s):t===$S?this.onReset_(s):t===qk?Yg("Server Error: "+s):t===ZS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),my!==s&&Dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Wu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Aa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.allowedEvents_=e,this.listeners_={},ie(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ie(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends D1{static getInstance(){return new $f}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!f_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ie(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=32,iw=768;class Je{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new Je("")}function xe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Or(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Je(n.pieces_,e)}function _y(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Hk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function hc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function O1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Je(e,0)}function Ct(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Je)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Je(t,0)}function Oe(n){return n.pieceNum_>=n.pieces_.length}function Rn(n,e){const t=xe(n),s=xe(e);if(t===null)return e;if(t===s)return Rn(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Gk(n,e){const t=hc(n,0),s=hc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Ha(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function yy(n,e){if(Or(n)!==Or(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function si(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Or(n)>Or(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Qk{constructor(e,t){this.errorPrefix_=t,this.parts_=hc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=cd(this.parts_[s]);M1(this)}}function Yk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=cd(e),M1(n)}function Kk(n){const e=n.parts_.pop();n.byteLength_-=cd(e),n.parts_.length>0&&(n.byteLength_-=1)}function M1(n){if(n.byteLength_>iw)throw new Error(n.errorPrefix_+"has a key path longer than "+iw+" bytes ("+n.byteLength_+").");if(n.parts_.length>nw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nw+") or object contains a cycle "+Sa(n))}function Sa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy extends D1{static getInstance(){return new vy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ie(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=1e3,Xk=300*1e3,sw=30*1e3,Wk=1.3,$k=3e4,Zk="server_kill",rw=3;class Rs extends x1{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Rs.nextPersistentConnectionId_++,this.log_=Dc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vu,this.maxReconnectDelay_=Xk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$f.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Jt(l)),ie(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Es,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ie(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Rs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Qi(e,"w")){const s=Jo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=AI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Jt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Yg("Unrecognized action received from server: "+Jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ie(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$k&&(this.reconnectDelay_=Vu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Rs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ie(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?an("getToken() completed but was canceled"):(an("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new Fk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,x=>{Dn(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(Zk)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Dn(T),p())}}}interrupt(e){an("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){an("Resuming connection for reason: "+e),delete this.interruptReasons_[e],If(this.interruptReasons_)&&(this.reconnectDelay_=Vu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>dy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Je(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){an("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rw&&(this.reconnectDelay_=sw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){an("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+u1.replace(/\./g,"-")]=1,f_()?e["framework.cordova"]=1:Yw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$f.getInstance().currentlyOnline();return If(this.interruptReasons_)&&e}}Rs.nextPersistentConnectionId_=0;Rs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Me(ul,e),a=new Me(ul,t);return this.compare(s,a)!==0}minPost(){return Me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;class k1 extends Vd{static get __EMPTY_NODE(){return ff}static set __EMPTY_NODE(e){ff=e}compare(e,t){return Ha(e.name,t.name)}isDefinedOn(e){throw dl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Me.MIN}maxPost(){return new Me(Va,ff)}makePost(e,t){return ie(typeof e=="string","KeyIndex indexValue must always be a string."),new Me(e,ff)}toString(){return".key"}}const $o=new k1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Zt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Zt.RED,this.left=a??In.EMPTY_NODE,this.right=l??In.EMPTY_NODE}copy(e,t,s,a,l){return new Zt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return In.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Zt.RED=!0;Zt.BLACK=!1;class Jk{copy(e,t,s,a,l){return this}insert(e,t,s){return new Zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class In{constructor(e,t=In.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new In(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Zt.BLACK,null,null))}remove(e){return new In(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new df(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new df(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new df(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new df(this.root_,null,this.comparator_,!0,e)}}In.EMPTY_NODE=new Jk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(n,e){return Ha(n.name,e.name)}function Ey(n,e){return Ha(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xg;function tP(n){Xg=n}const P1=function(n){return typeof n=="number"?"number:"+d1(n):"string:"+n},V1=function(n){if(n.isLeafNode()){const e=n.val();ie(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qi(e,".sv"),"Priority must be a string or number.")}else ie(n===Xg||n.isEmpty(),"priority of unexpected type.");ie(n===Xg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aw;class Wt{static set __childrenNodeConstructor(e){aw=e}static get __childrenNodeConstructor(){return aw}constructor(e,t=Wt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ie(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),V1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Wt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Wt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Oe(e)?this:xe(e)===".priority"?this.priorityNode_:Wt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Wt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=xe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ie(s!==".priority"||Or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Wt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+P1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=d1(this.value_):e+=this.value_,this.lazyHash_=h1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Wt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Wt.__childrenNodeConstructor?-1:(ie(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Wt.VALUE_TYPE_ORDER.indexOf(t),l=Wt.VALUE_TYPE_ORDER.indexOf(s);return ie(a>=0,"Unknown leaf type: "+t),ie(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Wt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L1,U1;function nP(n){L1=n}function iP(n){U1=n}class sP extends Vd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ha(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(Va,new Wt("[PRIORITY-POST]",U1))}makePost(e,t){const s=L1(e);return new Me(t,new Wt("[PRIORITY-POST]",s))}toString(){return".priority"}}const _t=new sP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=Math.log(2);class aP{constructor(e){const t=l=>parseInt(Math.log(l)/rP,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zf=function(n,e,t,s){n.sort(e);const a=function(p,g){const v=g-p;let T,S;if(v===0)return null;if(v===1)return T=n[p],S=t?t(T):T,new Zt(S,T.node,Zt.BLACK,null,null);{const x=parseInt(v/2,10)+p,U=a(p,x),Q=a(x+1,g);return T=n[x],S=t?t(T):T,new Zt(S,T.node,Zt.BLACK,U,Q)}},l=function(p){let g=null,v=null,T=n.length;const S=function(U,Q){const K=T-U,ge=T;T-=U;const ue=a(K+1,ge),ce=n[K],Le=t?t(ce):ce;x(new Zt(Le,ce.node,Q,null,ue))},x=function(U){g?(g.left=U,g=U):(v=U,g=U)};for(let U=0;U<p.count;++U){const Q=p.nextBitIsOne(),K=Math.pow(2,p.count-(U+1));Q?S(K,Zt.BLACK):(S(K,Zt.BLACK),S(K,Zt.RED))}return v},c=new aP(n.length),d=l(c);return new In(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pg;const zo={};class bs{static get Default(){return ie(zo&&_t,"ChildrenNode.ts has not been loaded"),pg=pg||new bs({".priority":zo},{".priority":_t}),pg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Jo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof In?t:null}hasIndex(e){return Qi(this.indexSet_,e.toString())}addIndex(e,t){ie(e!==$o,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Me.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Zf(s,e.getCompare()):d=zo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const v={...this.indexes_};return v[p]=d,new bs(v,g)}addToIndexes(e,t){const s=Nf(this.indexes_,(a,l)=>{const c=Jo(this.indexSet_,l);if(ie(c,"Missing index implementation for "+l),a===zo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Me.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),Zf(d,c.getCompare())}else return zo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Me(e.name,d))),p.insert(e,e.node)}});return new bs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Nf(this.indexes_,a=>{if(a===zo)return a;{const l=t.get(e.name);return l?a.remove(new Me(e.name,l)):a}});return new bs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu;class Se{static get EMPTY_NODE(){return Lu||(Lu=new Se(new In(Ey),null,bs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&V1(this.priorityNode_),this.children_.isEmpty()&&ie(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Lu}updatePriority(e){return this.children_.isEmpty()?this:new Se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Lu:t}}getChild(e){const t=xe(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ie(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Me(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Lu:this.priorityNode_;return new Se(a,c,l)}}updateChild(e,t){const s=xe(e);if(s===null)return t;{ie(xe(e)!==".priority"||Or(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(rt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(_t,(c,d)=>{t[c]=d.val(e),s++,l&&Se.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+P1(this.getPriority().val())+":"),this.forEachChild(_t,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":h1(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Me(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Me(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Me.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oc?-1:0}withIndex(e){if(e===$o||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Se(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===$o||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(_t),a=t.getIterator(_t);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===$o?null:this.indexMap_.get(e.toString())}}Se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oP extends Se{constructor(){super(new In(Ey),Se.EMPTY_NODE,bs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Se.EMPTY_NODE}isEmpty(){return!1}}const Oc=new oP;Object.defineProperties(Me,{MIN:{value:new Me(ul,Se.EMPTY_NODE)},MAX:{value:new Me(Va,Oc)}});k1.__EMPTY_NODE=Se.EMPTY_NODE;Wt.__childrenNodeConstructor=Se;tP(Oc);iP(Oc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=!0;function Ot(n,e=null){if(n===null)return Se.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ie(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Wt(t,Ot(e))}if(!(n instanceof Array)&&lP){const t=[];let s=!1;if(_n(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=Ot(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Me(c,p)))}}),t.length===0)return Se.EMPTY_NODE;const l=Zf(t,eP,c=>c.name,Ey);if(s){const c=Zf(t,_t.getCompare());return new Se(l,Ot(e),new bs({".priority":c},{".priority":_t}))}else return new Se(l,Ot(e),bs.Default)}else{let t=Se.EMPTY_NODE;return _n(n,(s,a)=>{if(Qi(n,s)&&s.substring(0,1)!=="."){const l=Ot(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Ot(e))}}nP(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP extends Vd{constructor(e){super(),this.indexPath_=e,ie(!Oe(e)&&xe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ha(e.name,t.name):l}makePost(e,t){const s=Ot(e),a=Se.EMPTY_NODE.updateChild(this.indexPath_,s);return new Me(t,a)}maxPost(){const e=Se.EMPTY_NODE.updateChild(this.indexPath_,Oc);return new Me(Va,e)}toString(){return hc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP extends Vd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ha(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,t){const s=Ot(e);return new Me(t,s)}toString(){return".value"}}const hP=new cP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(n){return{type:"value",snapshotNode:n}}function cl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function fc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function dc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function fP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){ie(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(fc(t,d)):ie(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(cl(t,s)):c.trackChildChange(dc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_t,(a,l)=>{t.hasChild(a)||s.trackChildChange(fc(a,l))}),t.isLeafNode()||t.forEachChild(_t,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(dc(a,l,c))}else s.trackChildChange(cl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Se.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.indexedFilter_=new Ty(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mc.getStartPost_(e),this.endPost_=mc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Me(t,s))||(s=Se.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Se.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Se.EMPTY_NODE);const l=this;return t.forEachChild(_t,(c,d)=>{l.matches(new Me(c,d))||(a=a.updateImmediateChild(c,Se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new mc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Me(t,s))||(s=Se.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Se.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Se.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(S,x)=>T(x,S)}else c=this.index_.getCompare();const d=e;ie(d.numChildren()===this.limit_,"");const p=new Me(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let S=a.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===t||d.hasChild(S.name));)S=a.getChildAfterChild(this.index_,S,this.reverse_);const x=S==null?1:c(S,p);if(v&&!s.isEmpty()&&x>=0)return l?.trackChildChange(dc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(fc(t,T));const Q=d.updateImmediateChild(t,Se.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(l?.trackChildChange(cl(S.name,S.node)),Q.updateImmediateChild(S.name,S.node)):Q}}else return s.isEmpty()?e:v&&c(g,p)>=0?(l!=null&&(l.trackChildChange(fc(g.name,g.node)),l.trackChildChange(cl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,Se.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ie(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ie(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ul}hasEnd(){return this.endSet_}getIndexEndValue(){return ie(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ie(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Va}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ie(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new Sy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mP(n){return n.loadsAllData()?new Ty(n.getIndex()):n.hasLimit()?new dP(n):new mc(n)}function ow(n){const e={};if(n.isDefault())return e;let t;if(n.index_===_t?t="$priority":n.index_===hP?t="$value":n.index_===$o?t="$key":(ie(n.index_ instanceof uP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Jt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Jt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Jt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Jt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Jt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function lw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==_t&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends x1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ie(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Dc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Jf.getListenId_(e,s),d={};this.listens_[c]=d;const p=ow(e._queryParams);this.restRequest_(l+".json",p,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Jo(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=Jf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ow(e._queryParams),s=e._path.toString(),a=new Es;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ml(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=ec(d.responseText)}catch{Dn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Dn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.rootNode_=Se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){return{value:null,children:new Map}}function wl(n,e,t){if(Oe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=xe(e);n.children.has(s)||n.children.set(s,ed());const a=n.children.get(s);e=rt(e),wl(a,e,t)}}function Wg(n,e){if(Oe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(_t,(s,a)=>{wl(n,new Je(s),a)}),Wg(n,e)}}else if(n.children.size>0){const t=xe(e);return e=rt(e),n.children.has(t)&&Wg(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function $g(n,e,t){n.value!==null?t(e,n.value):gP(n,(s,a)=>{const l=new Je(e.toString()+"/"+s);$g(a,l,t)})}function gP(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&_n(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=10*1e3,yP=30*1e3,vP=300*1e3;class EP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _P(e);const s=uw+(yP-uw)*Math.random();Wu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;_n(e,(a,l)=>{l>0&&Qi(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Wu(this.reportStats_.bind(this),Math.floor(Math.random()*2*vP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(di||(di={}));function j1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function by(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=di.ACK_USER_WRITE,this.source=j1()}operationForChild(e){if(Oe(this.path)){if(this.affectedTree.value!=null)return ie(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Je(e));return new td(Ye(),t,this.revert)}}else return ie(xe(this.path)===e,"operationForChild called for unrelated child."),new td(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.source=e,this.path=t,this.type=di.LISTEN_COMPLETE}operationForChild(e){return Oe(this.path)?new pc(this.source,Ye()):new pc(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=di.OVERWRITE}operationForChild(e){return Oe(this.path)?new La(this.source,Ye(),this.snap.getImmediateChild(e)):new La(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=di.MERGE}operationForChild(e){if(Oe(this.path)){const t=this.children.subtree(new Je(e));return t.isEmpty()?null:t.value?new La(this.source,Ye(),t.value):new gc(this.source,Ye(),t)}else return ie(xe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gc(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Oe(e))return this.isFullyInitialized()&&!this.filtered_;const t=xe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function SP(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(fP(c.childName,c.snapshotNode))}),Uu(n,a,"child_removed",e,s,t),Uu(n,a,"child_added",e,s,t),Uu(n,a,"child_moved",l,s,t),Uu(n,a,"child_changed",e,s,t),Uu(n,a,"value",e,s,t),a}function Uu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>bP(n,d,p)),c.forEach(d=>{const p=wP(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function wP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function bP(n,e,t){if(e.childName==null||t.childName==null)throw dl("Should only compare child_ events.");const s=new Me(e.childName,e.snapshotNode),a=new Me(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n,e){return{eventCache:n,serverCache:e}}function $u(n,e,t,s){return Ld(new Ua(e,t,s),n.serverCache)}function q1(n,e,t,s){return Ld(n.eventCache,new Ua(e,t,s))}function Zg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function za(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gg;const AP=()=>(gg||(gg=new In(uk)),gg);class ct{static fromObject(e){let t=new ct(null);return _n(e,(s,a)=>{t=t.set(new Je(s),a)}),t}constructor(e,t=AP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Oe(e))return null;{const s=xe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(rt(e),t);return l!=null?{path:Ct(new Je(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Oe(e))return this;{const t=xe(e),s=this.children.get(t);return s!==null?s.subtree(rt(e)):new ct(null)}}set(e,t){if(Oe(e))return new ct(t,this.children);{const s=xe(e),l=(this.children.get(s)||new ct(null)).set(rt(e),t),c=this.children.insert(s,l);return new ct(this.value,c)}}remove(e){if(Oe(e))return this.children.isEmpty()?new ct(null):new ct(null,this.children);{const t=xe(e),s=this.children.get(t);if(s){const a=s.remove(rt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ct(null):new ct(this.value,l)}else return this}}get(e){if(Oe(e))return this.value;{const t=xe(e),s=this.children.get(t);return s?s.get(rt(e)):null}}setTree(e,t){if(Oe(e))return t;{const s=xe(e),l=(this.children.get(s)||new ct(null)).setTree(rt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ct(this.value,c)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Ct(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Oe(e))return null;{const l=xe(e),c=this.children.get(l);return c?c.findOnPath_(rt(e),Ct(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,s){if(Oe(e))return this;{this.value&&s(t,this.value);const a=xe(e),l=this.children.get(a);return l?l.foreachOnPath_(rt(e),Ct(t,a),s):new ct(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Ct(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.writeTree_=e}static empty(){return new gi(new ct(null))}}function Zu(n,e,t){if(Oe(e))return new gi(new ct(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Rn(a,e);return l=l.updateChild(c,t),new gi(n.writeTree_.set(a,l))}else{const a=new ct(t),l=n.writeTree_.setTree(e,a);return new gi(l)}}}function cw(n,e,t){let s=n;return _n(t,(a,l)=>{s=Zu(s,Ct(e,a),l)}),s}function hw(n,e){if(Oe(e))return gi.empty();{const t=n.writeTree_.setTree(e,new ct(null));return new gi(t)}}function Jg(n,e){return Ga(n,e)!=null}function Ga(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Rn(t.path,e)):null}function fw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(_t,(s,a)=>{e.push(new Me(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Me(s,a.value))}),e}function wr(n,e){if(Oe(e))return n;{const t=Ga(n,e);return t!=null?new gi(new ct(t)):new gi(n.writeTree_.subtree(e))}}function e_(n){return n.writeTree_.isEmpty()}function hl(n,e){return B1(Ye(),n.writeTree_,e)}function B1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ie(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=B1(Ct(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ct(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n,e){return Q1(e,n)}function CP(n,e,t,s,a){ie(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Zu(n.visibleWrites,e,t)),n.lastWriteId=s}function RP(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function IP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ie(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&NP(d,s.path)?a=!1:si(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return xP(n),!0;if(s.snap)n.visibleWrites=hw(n.visibleWrites,s.path);else{const d=s.children;_n(d,p=>{n.visibleWrites=hw(n.visibleWrites,Ct(s.path,p))})}return!0}else return!1}function NP(n,e){if(n.snap)return si(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&si(Ct(n.path,t),e))return!0;return!1}function xP(n){n.visibleWrites=F1(n.allWrites,DP,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function DP(n){return n.visible}function F1(n,e,t){let s=gi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)si(t,c)?(d=Rn(t,c),s=Zu(s,d,l.snap)):si(c,t)&&(d=Rn(c,t),s=Zu(s,Ye(),l.snap.getChild(d)));else if(l.children){if(si(t,c))d=Rn(t,c),s=cw(s,d,l.children);else if(si(c,t))if(d=Rn(c,t),Oe(d))s=cw(s,Ye(),l.children);else{const p=Jo(l.children,xe(d));if(p){const g=p.getChild(rt(d));s=Zu(s,Ye(),g)}}}else throw dl("WriteRecord should have .snap or .children")}}return s}function H1(n,e,t,s,a){if(!s&&!a){const l=Ga(n.visibleWrites,e);if(l!=null)return l;{const c=wr(n.visibleWrites,e);if(e_(c))return t;if(t==null&&!Jg(c,Ye()))return null;{const d=t||Se.EMPTY_NODE;return hl(c,d)}}}else{const l=wr(n.visibleWrites,e);if(!a&&e_(l))return t;if(!a&&t==null&&!Jg(l,Ye()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(si(g.path,e)||si(e,g.path))},d=F1(n.allWrites,c,e),p=t||Se.EMPTY_NODE;return hl(d,p)}}}function OP(n,e,t){let s=Se.EMPTY_NODE;const a=Ga(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(_t,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=wr(n.visibleWrites,e);return t.forEachChild(_t,(c,d)=>{const p=hl(wr(l,new Je(c)),d);s=s.updateImmediateChild(c,p)}),fw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=wr(n.visibleWrites,e);return fw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function MP(n,e,t,s,a){ie(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Ct(e,t);if(Jg(n.visibleWrites,l))return null;{const c=wr(n.visibleWrites,l);return e_(c)?a.getChild(t):hl(c,a.getChild(t))}}function kP(n,e,t,s){const a=Ct(e,t),l=Ga(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=wr(n.visibleWrites,a);return hl(c,s.getNode().getImmediateChild(t))}else return null}function PP(n,e){return Ga(n.visibleWrites,e)}function VP(n,e,t,s,a,l,c){let d;const p=wr(n.visibleWrites,e),g=Ga(p,Ye());if(g!=null)d=g;else if(t!=null)d=hl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const v=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let x=S.getNext();for(;x&&v.length<a;)T(x,s)!==0&&v.push(x),x=S.getNext();return v}else return[]}function LP(){return{visibleWrites:gi.empty(),allWrites:[],lastWriteId:-1}}function nd(n,e,t,s){return H1(n.writeTree,n.treePath,e,t,s)}function Cy(n,e){return OP(n.writeTree,n.treePath,e)}function dw(n,e,t,s){return MP(n.writeTree,n.treePath,e,t,s)}function id(n,e){return PP(n.writeTree,Ct(n.treePath,e))}function UP(n,e,t,s,a,l){return VP(n.writeTree,n.treePath,e,t,s,a,l)}function Ry(n,e,t){return kP(n.writeTree,n.treePath,e,t)}function G1(n,e){return Q1(Ct(n.treePath,e),n.writeTree)}function Q1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ie(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ie(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,dc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,fc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,cl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,dc(s,e.snapshotNode,a.oldSnap));else throw dl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Y1=new jP;class Iy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ua(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ry(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:za(this.viewCache_),l=UP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(n){return{filter:n}}function BP(n,e){ie(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ie(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function FP(n,e,t,s,a){const l=new zP;let c,d;if(t.type===di.OVERWRITE){const g=t;g.source.fromUser?c=t_(n,e,g.path,g.snap,s,a,l):(ie(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Oe(g.path),c=sd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===di.MERGE){const g=t;g.source.fromUser?c=GP(n,e,g.path,g.children,s,a,l):(ie(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=n_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===di.ACK_USER_WRITE){const g=t;g.revert?c=KP(n,e,g.path,s,a,l):c=QP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===di.LISTEN_COMPLETE)c=YP(n,e,t.path,s,l);else throw dl("Unknown operation type: "+t.type);const p=l.getChanges();return HP(e,c,p),{viewCache:c,changes:p}}function HP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Zg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(z1(Zg(e)))}}function K1(n,e,t,s,a,l){const c=e.eventCache;if(id(s,t)!=null)return e;{let d,p;if(Oe(t))if(ie(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=za(e),v=g instanceof Se?g:Se.EMPTY_NODE,T=Cy(s,v);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=nd(s,za(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=xe(t);if(g===".priority"){ie(Or(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const T=dw(s,t,v,p);T!=null?d=n.filter.updatePriority(v,T):d=c.getNode()}else{const v=rt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const S=dw(s,t,c.getNode(),p);S!=null?T=c.getNode().getImmediateChild(g).updateChild(v,S):T=c.getNode().getImmediateChild(g)}else T=Ry(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,v,a,l):d=c.getNode()}}return $u(e,d,c.isFullyInitialized()||Oe(t),n.filter.filtersNodes())}}function sd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const v=c?n.filter:n.filter.getIndexedFilter();if(Oe(t))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const x=p.getNode().updateChild(t,s);g=v.updateFullNode(p.getNode(),x,null)}else{const x=xe(t);if(!p.isCompleteForPath(t)&&Or(t)>1)return e;const U=rt(t),K=p.getNode().getImmediateChild(x).updateChild(U,s);x===".priority"?g=v.updatePriority(p.getNode(),K):g=v.updateChild(p.getNode(),x,K,U,Y1,null)}const T=q1(e,g,p.isFullyInitialized()||Oe(t),v.filtersNodes()),S=new Iy(a,T,l);return K1(n,T,t,a,S,d)}function t_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const v=new Iy(a,e,l);if(Oe(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=$u(e,g,!0,n.filter.filtersNodes());else{const T=xe(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=$u(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=rt(t),x=d.getNode().getImmediateChild(T);let U;if(Oe(S))U=s;else{const Q=v.getCompleteChild(T);Q!=null?_y(S)===".priority"&&Q.getChild(O1(S)).isEmpty()?U=Q:U=Q.updateChild(S,s):U=Se.EMPTY_NODE}if(x.equals(U))p=e;else{const Q=n.filter.updateChild(d.getNode(),T,U,S,v,c);p=$u(e,Q,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function mw(n,e){return n.eventCache.isCompleteForChild(e)}function GP(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const v=Ct(t,p);mw(e,xe(v))&&(d=t_(n,d,v,g,a,l,c))}),s.foreach((p,g)=>{const v=Ct(t,p);mw(e,xe(v))||(d=t_(n,d,v,g,a,l,c))}),d}function pw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function n_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Oe(t)?g=s:g=new ct(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(v.hasChild(T)){const x=e.serverCache.getNode().getImmediateChild(T),U=pw(n,x,S);p=sd(n,p,new Je(T),U,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const x=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!v.hasChild(T)&&!x){const U=e.serverCache.getNode().getImmediateChild(T),Q=pw(n,U,S);p=sd(n,p,new Je(T),Q,a,l,c,d)}}),p}function QP(n,e,t,s,a,l,c){if(id(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Oe(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return sd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Oe(t)){let g=new ct(null);return p.getNode().forEachChild($o,(v,T)=>{g=g.set(new Je(v),T)}),n_(n,e,t,g,a,l,d,c)}else return e}else{let g=new ct(null);return s.foreach((v,T)=>{const S=Ct(t,v);p.isCompleteForPath(S)&&(g=g.set(v,p.getNode().getChild(S)))}),n_(n,e,t,g,a,l,d,c)}}function YP(n,e,t,s,a){const l=e.serverCache,c=q1(e,l.getNode(),l.isFullyInitialized()||Oe(t),l.isFiltered());return K1(n,c,t,s,Y1,a)}function KP(n,e,t,s,a,l){let c;if(id(s,t)!=null)return e;{const d=new Iy(s,e,a),p=e.eventCache.getNode();let g;if(Oe(t)||xe(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=nd(s,za(e));else{const T=e.serverCache.getNode();ie(T instanceof Se,"serverChildren would be complete if leaf node"),v=Cy(s,T)}v=v,g=n.filter.updateFullNode(p,v,l)}else{const v=xe(t);let T=Ry(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=p.getImmediateChild(v)),T!=null?g=n.filter.updateChild(p,v,T,rt(t),d,l):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(p,v,Se.EMPTY_NODE,rt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=nd(s,za(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||id(s,Ye())!=null,$u(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Ty(s.getIndex()),l=mP(s);this.processor_=qP(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(Se.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Se.EMPTY_NODE,d.getNode(),null),v=new Ua(p,c.isFullyInitialized(),a.filtersNodes()),T=new Ua(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Ld(T,v),this.eventGenerator_=new TP(this.query_)}get query(){return this.query_}}function WP(n){return n.viewCache_.serverCache.getNode()}function $P(n,e){const t=za(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Oe(e)&&!t.getImmediateChild(xe(e)).isEmpty())?t.getChild(e):null}function gw(n){return n.eventRegistrations_.length===0}function ZP(n,e){n.eventRegistrations_.push(e)}function _w(n,e,t){const s=[];if(t){ie(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function yw(n,e,t,s){e.type===di.MERGE&&e.source.queryId!==null&&(ie(za(n.viewCache_),"We should always have a full cache before handling merges"),ie(Zg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=FP(n.processor_,a,e,t,s);return BP(n.processor_,l.viewCache),ie(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,X1(n,l.changes,l.viewCache.eventCache.getNode(),null)}function JP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(_t,(l,c)=>{s.push(cl(l,c))}),t.isFullyInitialized()&&s.push(z1(t.getNode())),X1(n,s,t.getNode(),e)}function X1(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return SP(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd;class e4{constructor(){this.views=new Map}}function t4(n){ie(!rd,"__referenceConstructor has already been defined"),rd=n}function n4(){return ie(rd,"Reference.ts has not been loaded"),rd}function i4(n){return n.views.size===0}function Ny(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ie(l!=null,"SyncTree gave us an op for an invalid query."),yw(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(yw(c,e,t,s));return l}}function s4(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=nd(t,a?s:null),p=!1;d?p=!0:s instanceof Se?(d=Cy(t,s),p=!1):(d=Se.EMPTY_NODE,p=!1);const g=Ld(new Ua(d,p,!1),new Ua(s,a,!1));return new XP(e,g)}return c}function r4(n,e,t,s,a,l){const c=s4(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),ZP(c,t),JP(c,t)}function a4(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Mr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(_w(g,t,s)),gw(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(_w(p,t,s)),gw(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Mr(n)&&l.push(new(n4())(e._repo,e._path)),{removed:l,events:c}}function W1(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Zo(n,e){let t=null;for(const s of n.views.values())t=t||$P(s,e);return t}function $1(n,e){if(e._queryParams.loadsAllData())return Ud(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Z1(n,e){return $1(n,e)!=null}function Mr(n){return Ud(n)!=null}function Ud(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad;function o4(n){ie(!ad,"__referenceConstructor has already been defined"),ad=n}function l4(){return ie(ad,"Reference.ts has not been loaded"),ad}let u4=1;class vw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ct(null),this.pendingWriteTree_=LP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function J1(n,e,t,s,a){return CP(n.pendingWriteTree_,e,t,s,a),a?Mc(n,new La(j1(),e,t)):[]}function Ca(n,e,t=!1){const s=RP(n.pendingWriteTree_,e);if(IP(n.pendingWriteTree_,e)){let l=new ct(null);return s.snap!=null?l=l.set(Ye(),!0):_n(s.children,c=>{l=l.set(new Je(c),!0)}),Mc(n,new td(s.path,l,t))}else return[]}function zd(n,e,t){return Mc(n,new La(wy(),e,t))}function c4(n,e,t){const s=ct.fromObject(t);return Mc(n,new gc(wy(),e,s))}function h4(n,e){return Mc(n,new pc(wy(),e))}function f4(n,e,t){const s=Dy(n,t);if(s){const a=Oy(s),l=a.path,c=a.queryId,d=Rn(l,e),p=new pc(by(c),d);return My(n,l,p)}else return[]}function i_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||Z1(c,e))){const p=a4(c,e,t,s);i4(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const v=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(S,x)=>Mr(x));if(v&&!T){const S=n.syncPointTree_.subtree(l);if(!S.isEmpty()){const x=p4(S);for(let U=0;U<x.length;++U){const Q=x[U],K=Q.query,ge=nC(n,Q);n.listenProvider_.startListening(Ju(K),od(n,K),ge.hashFn,ge.onComplete)}}}!T&&g.length>0&&!s&&(v?n.listenProvider_.stopListening(Ju(e),null):g.forEach(S=>{const x=n.queryToTagMap.get(jd(S));n.listenProvider_.stopListening(Ju(S),x)}))}g4(n,g)}return d}function d4(n,e,t,s){const a=Dy(n,s);if(a!=null){const l=Oy(a),c=l.path,d=l.queryId,p=Rn(c,e),g=new La(by(d),p,t);return My(n,c,g)}else return[]}function m4(n,e,t,s){const a=Dy(n,s);if(a){const l=Oy(a),c=l.path,d=l.queryId,p=Rn(c,e),g=ct.fromObject(t),v=new gc(by(d),p,g);return My(n,c,v)}else return[]}function Ew(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(S,x)=>{const U=Rn(S,a);l=l||Zo(x,U),c=c||Mr(x)});let d=n.syncPointTree_.get(a);d?(c=c||Mr(d),l=l||Zo(d,Ye())):(d=new e4,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=Se.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((x,U)=>{const Q=Zo(U,Ye());Q&&(l=l.updateImmediateChild(x,Q))}));const g=Z1(d,e);if(!g&&!e._queryParams.loadsAllData()){const S=jd(e);ie(!n.queryToTagMap.has(S),"View does not exist, but we have a tag");const x=_4();n.queryToTagMap.set(S,x),n.tagToQueryMap.set(x,S)}const v=Ay(n.pendingWriteTree_,a);let T=r4(d,e,t,v,l,p);if(!g&&!c&&!s){const S=$1(d,e);T=T.concat(y4(n,e,S))}return T}function xy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Rn(c,e),g=Zo(d,p);if(g)return g});return H1(a,e,l,t,!0)}function Mc(n,e){return eC(e,n.syncPointTree_,null,Ay(n.pendingWriteTree_,Ye()))}function eC(n,e,t,s){if(Oe(n.path))return tC(n,e,t,s);{const a=e.get(Ye());t==null&&a!=null&&(t=Zo(a,Ye()));let l=[];const c=xe(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,v=G1(s,c);l=l.concat(eC(d,p,g,v))}return a&&(l=l.concat(Ny(a,n,s,t))),l}}function tC(n,e,t,s){const a=e.get(Ye());t==null&&a!=null&&(t=Zo(a,Ye()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=G1(s,c),v=n.operationForChild(c);v&&(l=l.concat(tC(v,d,p,g)))}),a&&(l=l.concat(Ny(a,n,s,t))),l}function nC(n,e){const t=e.query,s=od(n,t);return{hashFn:()=>(WP(e)||Se.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?f4(n,t._path,s):h4(n,t._path);{const l=fk(a,t);return i_(n,t,null,l)}}}}function od(n,e){const t=jd(e);return n.queryToTagMap.get(t)}function jd(n){return n._path.toString()+"$"+n._queryIdentifier}function Dy(n,e){return n.tagToQueryMap.get(e)}function Oy(n){const e=n.indexOf("$");return ie(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Je(n.substr(0,e))}}function My(n,e,t){const s=n.syncPointTree_.get(e);ie(s,"Missing sync point for query tag that we're tracking");const a=Ay(n.pendingWriteTree_,e);return Ny(s,t,a,null)}function p4(n){return n.fold((e,t,s)=>{if(t&&Mr(t))return[Ud(t)];{let a=[];return t&&(a=W1(t)),_n(s,(l,c)=>{a=a.concat(c)}),a}})}function Ju(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(l4())(n._repo,n._path):n}function g4(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=jd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function _4(){return u4++}function y4(n,e,t){const s=e._path,a=od(n,e),l=nC(n,t),c=n.listenProvider_.startListening(Ju(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)ie(!Mr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,v,T)=>{if(!Oe(g)&&v&&Mr(v))return[Ud(v).query];{let S=[];return v&&(S=S.concat(W1(v).map(x=>x.query))),_n(T,(x,U)=>{S=S.concat(U)}),S}});for(let g=0;g<p.length;++g){const v=p[g];n.listenProvider_.stopListening(Ju(v),od(n,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ky(t)}node(){return this.node_}}class Py{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ct(this.path_,e);return new Py(this.syncTree_,t)}node(){return xy(this.syncTree_,this.path_)}}const v4=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Tw=function(n,e,t){if(!n||typeof n!="object")return n;if(ie(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return E4(n[".sv"],e,t);if(typeof n[".sv"]=="object")return T4(n[".sv"],e);ie(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},E4=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ie(!1,"Unexpected server value: "+n)}},T4=function(n,e,t){n.hasOwnProperty("increment")||ie(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ie(!1,"Unexpected increment value: "+s);const a=e.node();if(ie(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},S4=function(n,e,t,s){return Vy(e,new Py(t,n),s)},iC=function(n,e,t){return Vy(n,new ky(e),t)};function Vy(n,e,t){const s=n.getPriority().val(),a=Tw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=Tw(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Wt(d,Ot(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Wt(a))),c.forEachChild(_t,(d,p)=>{const g=Vy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Uy(n,e){let t=e instanceof Je?e:new Je(e),s=n,a=xe(t);for(;a!==null;){const l=Jo(s.node.children,a)||{children:{},childCount:0};s=new Ly(a,s,l),t=rt(t),a=xe(t)}return s}function bl(n){return n.node.value}function sC(n,e){n.node.value=e,s_(n)}function rC(n){return n.node.childCount>0}function w4(n){return bl(n)===void 0&&!rC(n)}function qd(n,e){_n(n.node.children,(t,s)=>{e(new Ly(t,n,s))})}function aC(n,e,t,s){t&&e(n),qd(n,a=>{aC(a,e,!0)})}function b4(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function kc(n){return new Je(n.parent===null?n.name:kc(n.parent)+"/"+n.name)}function s_(n){n.parent!==null&&A4(n.parent,n.name,n)}function A4(n,e,t){const s=w4(t),a=Qi(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,s_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,s_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=/[\[\].#$\/\u0000-\u001F\u007F]/,R4=/[\[\].#$\u0000-\u001F\u007F]/,_g=10*1024*1024,zy=function(n){return typeof n=="string"&&n.length!==0&&!C4.test(n)},oC=function(n){return typeof n=="string"&&n.length!==0&&!R4.test(n)},I4=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oC(n)},lC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Pd(n)||n&&typeof n=="object"&&Qi(n,".sv")},r_=function(n,e,t,s){Bd(el(n,"value"),e,t)},Bd=function(n,e,t){const s=t instanceof Je?new Qk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Sa(s));if(typeof e=="function")throw new Error(n+"contains a function "+Sa(s)+" with contents = "+e.toString());if(Pd(e))throw new Error(n+"contains "+e.toString()+" "+Sa(s));if(typeof e=="string"&&e.length>_g/3&&cd(e)>_g)throw new Error(n+"contains a string greater than "+_g+" utf8 bytes "+Sa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(_n(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!zy(c)))throw new Error(n+" contains an invalid key ("+c+") "+Sa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Yk(s,c),Bd(n,d,s),Kk(s)}),a&&l)throw new Error(n+' contains ".value" child '+Sa(s)+" in addition to actual children.")}},N4=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=hc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!zy(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Gk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&si(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},x4=function(n,e,t,s){const a=el(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];_n(e,(c,d)=>{const p=new Je(c);if(Bd(a,d,Ct(t,p)),_y(p)===".priority"&&!lC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),N4(a,l)},D4=function(n,e,t){if(Pd(e))throw new Error(el(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!lC(e))throw new Error(el(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},uC=function(n,e,t,s){if(!oC(t))throw new Error(el(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},O4=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),uC(n,e,t)},Go=function(n,e){if(xe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},M4=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!I4(t))throw new Error(el(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!yy(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function cC(n,e,t){jy(n,t),hC(n,s=>yy(s,e))}function ks(n,e,t){jy(n,t),hC(n,s=>si(s,e)||si(e,s))}function hC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(P4(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function P4(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Xu&&an("event: "+t.toString()),Sl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4="repo_interrupt",L4=25;class U4{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new k4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ed(),this.transactionQueueTree_=new Ly,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function z4(n,e,t){if(n.stats_=py(n.repoInfo_),n.forceRestClient_||gk())n.server_=new Jf(n.repoInfo_,(s,a,l,c)=>{Sw(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ww(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Jt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Rs(n.repoInfo_,e,(s,a,l,c)=>{Sw(n,s,a,l,c)},s=>{ww(n,s)},s=>{q4(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Tk(n.repoInfo_,()=>new EP(n.stats_,n.server_)),n.infoData_=new pP,n.infoSyncTree_=new vw({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=zd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),By(n,"connected",!1),n.serverSyncTree_=new vw({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);ks(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function j4(n){const t=n.infoData_.getNode(new Je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function qy(n){return v4({timestamp:j4(n)})}function Sw(n,e,t,s,a){n.dataUpdateCount++;const l=new Je(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Nf(t,g=>Ot(g));c=m4(n.serverSyncTree_,l,p,a)}else{const p=Ot(t);c=d4(n.serverSyncTree_,l,p,a)}else if(s){const p=Nf(t,g=>Ot(g));c=c4(n.serverSyncTree_,l,p)}else{const p=Ot(t);c=zd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Fd(n,l)),ks(n.eventQueue_,d,c)}function ww(n,e){By(n,"connected",e),e===!1&&F4(n)}function q4(n,e){_n(e,(t,s)=>{By(n,t,s)})}function By(n,e,t){const s=new Je("/.info/"+e),a=Ot(t);n.infoData_.updateSnapshot(s,a);const l=zd(n.infoSyncTree_,s,a);ks(n.eventQueue_,s,l)}function fC(n){return n.nextWriteId_++}function B4(n,e,t,s,a){Fy(n,"set",{path:e.toString(),value:t,priority:s});const l=qy(n),c=Ot(t,s),d=xy(n.serverSyncTree_,e),p=iC(c,d,l),g=fC(n),v=J1(n.serverSyncTree_,e,p,g,!0);jy(n.eventQueue_,v),n.server_.put(e.toString(),c.val(!0),(S,x)=>{const U=S==="ok";U||Dn("set at "+e+" failed: "+S);const Q=Ca(n.serverSyncTree_,g,!U);ks(n.eventQueue_,e,Q),fl(n,a,S,x)});const T=_C(n,e);Fd(n,T),ks(n.eventQueue_,T,[])}function F4(n){Fy(n,"onDisconnectEvents");const e=qy(n),t=ed();$g(n.onDisconnect_,Ye(),(a,l)=>{const c=S4(a,l,n.serverSyncTree_,e);wl(t,a,c)});let s=[];$g(t,Ye(),(a,l)=>{s=s.concat(zd(n.serverSyncTree_,a,l));const c=_C(n,a);Fd(n,c)}),n.onDisconnect_=ed(),ks(n.eventQueue_,Ye(),s)}function H4(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&Wg(n.onDisconnect_,e),fl(n,t,s,a)})}function bw(n,e,t,s){const a=Ot(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&wl(n.onDisconnect_,e,a),fl(n,s,l,c)})}function G4(n,e,t,s,a){const l=Ot(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&wl(n.onDisconnect_,e,l),fl(n,a,c,d)})}function Q4(n,e,t,s){if(If(t)){an("onDisconnect().update() called with empty data.  Don't do anything."),fl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&_n(t,(c,d)=>{const p=Ot(d);wl(n.onDisconnect_,Ct(e,c),p)}),fl(n,s,a,l)})}function Y4(n,e,t){let s;xe(e._path)===".info"?s=Ew(n.infoSyncTree_,e,t):s=Ew(n.serverSyncTree_,e,t),cC(n.eventQueue_,e._path,s)}function K4(n,e,t){let s;xe(e._path)===".info"?s=i_(n.infoSyncTree_,e,t):s=i_(n.serverSyncTree_,e,t),cC(n.eventQueue_,e._path,s)}function X4(n){n.persistentConnection_&&n.persistentConnection_.interrupt(V4)}function Fy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),an(t,...e)}function fl(n,e,t,s){e&&Sl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function dC(n,e,t){return xy(n.serverSyncTree_,e,t)||Se.EMPTY_NODE}function Hy(n,e=n.transactionQueueTree_){if(e||Hd(n,e),bl(e)){const t=pC(n,e);ie(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&W4(n,kc(e),t)}else rC(e)&&qd(e,t=>{Hy(n,t)})}function W4(n,e,t){const s=t.map(g=>g.currentWriteId),a=dC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];ie(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=Rn(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{Fy(n,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,v=v.concat(Ca(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();Hd(n,Uy(n.transactionQueueTree_,e)),Hy(n,n.transactionQueueTree_),ks(n.eventQueue_,e,v);for(let S=0;S<T.length;S++)Sl(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Dn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Fd(n,e)}},c)}function Fd(n,e){const t=mC(n,e),s=kc(t),a=pC(n,t);return $4(n,a,s),s}function $4(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Rn(t,p.path);let v=!1,T;if(ie(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,T=p.abortReason,a=a.concat(Ca(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=L4)v=!0,T="maxretry",a=a.concat(Ca(n.serverSyncTree_,p.currentWriteId,!0));else{const S=dC(n,p.path,c);p.currentInputSnapshot=S;const x=e[d].update(S.val());if(x!==void 0){Bd("transaction failed: Data returned ",x,p.path);let U=Ot(x);typeof x=="object"&&x!=null&&Qi(x,".priority")||(U=U.updatePriority(S.getPriority()));const K=p.currentWriteId,ge=qy(n),ue=iC(U,S,ge);p.currentOutputSnapshotRaw=U,p.currentOutputSnapshotResolved=ue,p.currentWriteId=fC(n),c.splice(c.indexOf(K),1),a=a.concat(J1(n.serverSyncTree_,p.path,ue,p.currentWriteId,p.applyLocally)),a=a.concat(Ca(n.serverSyncTree_,K,!0))}else v=!0,T="nodata",a=a.concat(Ca(n.serverSyncTree_,p.currentWriteId,!0))}ks(n.eventQueue_,t,a),a=[],v&&(e[d].status=2,(function(S){setTimeout(S,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Hd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Sl(s[d]);Hy(n,n.transactionQueueTree_)}function mC(n,e){let t,s=n.transactionQueueTree_;for(t=xe(e);t!==null&&bl(s)===void 0;)s=Uy(s,t),e=rt(e),t=xe(e);return s}function pC(n,e){const t=[];return gC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function gC(n,e,t){const s=bl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);qd(e,a=>{gC(n,a,t)})}function Hd(n,e){const t=bl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,sC(e,t.length>0?t:void 0)}qd(e,s=>{Hd(n,s)})}function _C(n,e){const t=kc(mC(n,e)),s=Uy(n.transactionQueueTree_,e);return b4(s,a=>{yg(n,a)}),yg(n,s),aC(s,a=>{yg(n,a)}),t}function yg(n,e){const t=bl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ie(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ie(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Ca(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?sC(e,void 0):t.length=l+1,ks(n.eventQueue_,kc(e),a);for(let c=0;c<s.length;c++)Sl(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function J4(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Dn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Aw=function(n,e){const t=eV(n),s=t.namespace;t.domain==="firebase.com"&&Ms(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ms("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ok();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new w1(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Je(t.pathString)}},eV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(v,T)),v<T&&(a=Z4(n.substring(v,T)));const S=J4(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const U=e.indexOf(".");s=e.substring(0,U).toLowerCase(),t=e.substring(U+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Jt(this.snapshot.exportVal())}}class nV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ie(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class sV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Es;return H4(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Go("OnDisconnect.remove",this._path);const e=new Es;return bw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Go("OnDisconnect.set",this._path),r_("OnDisconnect.set",e,this._path);const t=new Es;return bw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Go("OnDisconnect.setWithPriority",this._path),r_("OnDisconnect.setWithPriority",e,this._path),D4("OnDisconnect.setWithPriority",t);const s=new Es;return G4(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Go("OnDisconnect.update",this._path),x4("OnDisconnect.update",e,this._path);const t=new Es;return Q4(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Oe(this._path)?null:_y(this._path)}get ref(){return new Lr(this._repo,this._path)}get _queryIdentifier(){const e=lw(this._queryParams),t=dy(e);return t==="{}"?"default":t}get _queryObject(){return lw(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof Gy))return!1;const t=this._repo===e._repo,s=yy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hk(this._path)}}class Lr extends Gy{constructor(e,t){super(e,t,new Sy,!1)}get parent(){const e=O1(this._path);return e===null?null:new Lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ld{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Je(e),s=a_(this.ref,e);return new ld(this._node.getChild(t),s,_t)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new ld(a,a_(this.ref,s),_t)))}hasChild(e){const t=new Je(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Na(n,e){return n=ut(n),n._checkNotDeleted("ref"),e!==void 0?a_(n._root,e):n._root}function a_(n,e){return n=ut(n),xe(n._path)===null?O4("child","path",e):uC("child","path",e),new Lr(n._repo,Ct(n._path,e))}function rV(n){return n=ut(n),new sV(n._repo,n._path)}function vg(n){return Go("remove",n._path),Gd(n,null)}function Gd(n,e){n=ut(n),Go("set",n._path),r_("set",e,n._path);const t=new Es;return B4(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Qy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new tV("value",this,new ld(e.snapshotNode,new Lr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new nV(this,e,t):null}matches(e){return e instanceof Qy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function aV(n,e,t,s,a){const l=new iV(t,void 0),c=new Qy(l);return Y4(n._repo,n,c),()=>K4(n._repo,n,c)}function Yy(n,e,t,s){return aV(n,"value",e)}t4(Lr);o4(Lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV="FIREBASE_DATABASE_EMULATOR_HOST",o_={};let lV=!1;function uV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=kr(l);n.repoInfo_=new w1(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function cV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Ms("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),an("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Aw(l,a),d=c.repoInfo,p;typeof process<"u"&&HS&&(p=HS[oV]),p?(l=`http://${p}?ns=${d.namespace}`,c=Aw(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new yk(n.name,n.options,e);M4("Invalid Firebase Database URL",c),Oe(c.path)||Ms("Database URL must point to the root of a Firebase Database (not including a child path).");const v=fV(d,n,g,new _k(n,t));return new dV(v,n)}function hV(n,e){const t=o_[e];(!t||t[n.key]!==n)&&Ms(`Database ${e}(${n.repoInfo_}) has already been deleted.`),X4(n),delete t[n.key]}function fV(n,e,t,s){let a=o_[e.name];a||(a={},o_[e.name]=a);let l=a[n.toURLString()];return l&&Ms("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new U4(n,lV,t,s),a[n.toURLString()]=l,l}class dV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(z4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lr(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ms("Cannot call "+e+" on a deleted database.")}}function mV(n=m_(),e){const t=fd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Fw("database");s&&pV(t,...s)}return t}function pV(n,e,t,s={}){n=ut(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Bi(s,l.repoInfo_.emulatorOptions))return;Ms("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Ms('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new bf(bf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Qw(s.mockUserToken,n.app.options.projectId);c=new bf(d)}kr(e)&&(c_(e),h_("Database",!0)),uV(l,a,s,c)}/**
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
 */function gV(n){tk(ja),Da(new br("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return cV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Vi(GS,QS,n),Vi(GS,QS,"esm2020")}Rs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Rs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Cw=n=>{const e=yV(n);return e.charAt(0).toUpperCase()+e.slice(1)},yC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),vV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=he.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>he.createElement("svg",{ref:p,...EV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:yC("lucide",a),...!l&&!vV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,v])=>he.createElement(g,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=(n,e)=>{const t=he.forwardRef(({className:s,...a},l)=>he.createElement(TV,{ref:l,iconNode:e,className:yC(`lucide-${_V(Cw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=Cw(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],wV=Ft("arrow-left",SV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Rw=Ft("bell",bV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],CV=Ft("check-check",AV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vC=Ft("check",RV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Iw=Ft("corner-up-left",IV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],xV=Ft("ellipsis-vertical",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],OV=Ft("eraser",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],EC=Ft("loader-circle",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Nw=Ft("log-out",kV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Ky=Ft("message-square",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],LV=Ft("pin-off",VV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],zV=Ft("pin",UV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],qV=Ft("send",jV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],FV=Ft("smile",BV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],GV=Ft("square-pen",HV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],xw=Ft("trash-2",QV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Dw=Ft("user-plus",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ow=Ft("users",KV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],TC=Ft("x",XV),WV={apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},Xy=$w(WV),Af=Bx(Xy),ht=jM(Xy),xa=mV(Xy),$V=n=>{he.useEffect(()=>{if(!n)return;const e=Na(xa,`/status/${n.uid}`),t=Gi(ht,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Na(xa,".info/connected"),c=Yy(l,d=>{if(d.val()===!1){Cs(t,{state:"offline",last_changed:uc()});return}rV(e).set(s).then(()=>{Gd(e,a),Cs(t,{state:"online",last_changed:uc()})})});return()=>c()},[n])},SC=n=>{const[e,t]=he.useState(null);return he.useEffect(()=>{if(!n){t(null);return}const s=Dr(Gi(ht,"users",n),c=>{c.exists()?t(d=>({...d,...c.data()})):t(null)}),a=Na(xa,`/status/${n}`),l=Yy(a,c=>{const d=c.val();t(p=>({...p,presence:d?.state}))});return()=>{s(),l()}},[n]),e},ZV=n=>{const[e,t]=he.useState(0);return he.useEffect(()=>{if(!n?.uid)return;const s=pi(Fn(ht,"friendships"),pn("users","array-contains",n.uid),pn("status","==","pending")),a=Dr(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},JV=n=>{const[e,t]=he.useState(0),[s,a]=he.useState([]);return he.useEffect(()=>{if(!n?.uid)return;const l=pi(Fn(ht,"friendships"),pn("users","array-contains",n.uid),pn("status","==","accepted")),c=Dr(l,d=>{const p=d.docs.map(g=>g.data().users.find(v=>v!==n.uid));a(p)});return()=>c()},[n]),he.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=pi(Fn(ht,`conversations/${p}/messages`),pn("receiverId","==",n.uid),pn("status","in",["sent","delivered"]));return Dr(g,v=>{l[p]=v.size;const T=Object.values(l).reduce((S,x)=>S+x,0);t(T)})});return()=>c.forEach(d=>d())},[s,n]),e},eL=n=>{const e=he.useRef(n);he.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),he.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=SI"}),e.current=n},[n])},tL=({text:n="Preparando seu bate-papo..."})=>D.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:D.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[D.jsx(Ky,{size:80,className:"text-blue-400 mb-6 mx-auto"}),D.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),D.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[D.jsx(EC,{className:"animate-spin h-10 w-10 text-blue-400"}),D.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),nL=()=>{const n=async()=>{const e=new Ts;try{const s=(await $2(Af,e)).user,a=Gi(ht,"users",s.uid);(await a1(a)).exists()||await ZM(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return D.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:D.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[D.jsx(Ky,{size:80,className:"text-blue-400 mb-6 mx-auto"}),D.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),D.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),D.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[D.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},iL=({user:n,onClose:e})=>n?D.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:D.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[D.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),D.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),D.jsx("p",{className:"text-gray-400",children:n.email}),D.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,Mw=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?D.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:D.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[D.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),D.jsx("p",{className:"text-gray-400 mb-6",children:a}),D.jsxs("div",{className:"flex justify-center gap-4",children:[D.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),D.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,kw=({currentUser:n})=>{const[e,t]=he.useState(""),[s,a]=he.useState([]),[l,c]=he.useState({}),[d,p]=he.useState(!1),[g,v]=he.useState(""),[T,S]=he.useState(""),x=async Q=>{if(Q.preventDefault(),e.trim()!==""){p(!0),v(""),S(""),a([]);try{const K=pi(Fn(ht,"users"),pn("email","==",e.trim()),XM(1)),ue=(await Xf(K)).docs.map(ce=>ce.data())[0];if(ue&&ue.uid!==n.uid){a([ue]);const ce=pi(Fn(ht,"friendships"),pn("users","array-contains",n.uid)),_e=(await Xf(ce)).docs.find(Ue=>Ue.data().users.includes(ue.uid));c({[ue.uid]:_e?_e.data().status:"not_friends"})}else ue&&ue.uid===n.uid?S("Você não pode adicionar a si mesmo."):S("Nenhum usuário encontrado com este e-mail.")}catch(K){v("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(K)}finally{p(!1)}}},U=async Q=>{try{await o1(Fn(ht,"friendships"),{users:[n.uid,Q.uid],status:"pending",requestedBy:n.uid,createdAt:uc()}),c(K=>({...K,[Q.uid]:"pending"}))}catch(K){v("Falha ao enviar pedido."),console.error(K)}};return D.jsxs("div",{className:"p-4",children:[D.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),D.jsxs("form",{onSubmit:x,className:"flex gap-2",children:[D.jsx("input",{type:"email",value:e,onChange:Q=>t(Q.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),D.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?D.jsx(EC,{className:"animate-spin"}):"Buscar"})]}),D.jsxs("div",{className:"mt-4 h-24",children:[g&&D.jsx("p",{className:"text-red-400",children:g}),T&&D.jsx("p",{className:"text-yellow-400",children:T}),s.map(Q=>D.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx("img",{src:Q.photoURL,alt:Q.displayName,className:"w-10 h-10 rounded-full"}),D.jsx("span",{className:"text-white",children:Q.displayName})]}),D.jsxs("div",{children:[l[Q.uid]==="not_friends"&&D.jsx("button",{onClick:()=>U(Q),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[Q.uid]==="pending"&&D.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[Q.uid]==="accepted"&&D.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[Q.uid]==="declined"&&D.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},Q.uid))]})]})},Pw=({currentUser:n})=>{const[e,t]=he.useState([]);he.useEffect(()=>{if(!n?.uid)return;const a=pi(Fn(ht,"friendships"),pn("users","array-contains",n.uid),pn("status","==","pending")),l=Dr(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const v=g.users.find(S=>S!==n.uid),T=await a1(Gi(ht,"users",v));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await Cs(Gi(ht,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return D.jsxs("div",{className:"p-4",children:[D.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?D.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):D.jsx("ul",{className:"space-y-2",children:e.map(a=>D.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),D.jsx("span",{className:"text-white",children:a.displayName})]}),D.jsxs("div",{className:"flex gap-2",children:[D.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:D.jsx(vC,{size:16})}),D.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:D.jsx(TC,{size:16})})]})]},a.id))})]})},Vw=({currentUser:n,onSelectUser:e})=>{const[t,s]=he.useState([]);he.useEffect(()=>{if(!n?.uid)return;const l=pi(Fn(ht,"friendships"),pn("users","array-contains",n.uid),pn("status","==","accepted")),c=Dr(l,d=>{const p=d.docs.map(g=>({id:g.id,...g.data(),friendId:g.data().users.find(v=>v!==n.uid)}));p.sort((g,v)=>{const T=g.pinnedBy?.includes(n.uid),S=v.pinnedBy?.includes(n.uid);return T&&!S?-1:!T&&S?1:0}),s(p)});return()=>c()},[n.uid]);const a=async(l,c)=>{const d=Gi(ht,"friendships",l);c?await Cs(d,{pinnedBy:ek(n.uid)}):await Cs(d,{pinnedBy:Qg(n.uid)})};return D.jsxs("div",{className:"flex-grow overflow-y-auto",children:[D.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Contatos"}),t.length===0?D.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):D.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(l=>D.jsx(sL,{friendship:l,currentUser:n,onSelectUser:e,onTogglePin:a},l.id))})]})},sL=({friendship:n,currentUser:e,onSelectUser:t,onTogglePin:s})=>{const a=SC(n.friendId),[l,c]=he.useState(0),d=n.pinnedBy?.includes(e.uid);if(he.useEffect(()=>{if(!n.friendId||!e)return;const g=[e.uid,n.friendId].sort().join("_"),v=pi(Fn(ht,`conversations/${g}/messages`),pn("receiverId","==",e.uid),pn("status","in",["sent","delivered"])),T=Dr(v,S=>c(S.size));return()=>T()},[n.friendId,e]),!a||!a.uid)return D.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const p=g=>{if(!g||typeof g.seconds!="number")return"Offline";const v=new Date(g.seconds*1e3),T=new Date,S=new Date(T.getFullYear(),T.getMonth(),T.getDate()),x=new Date(T.getFullYear(),T.getMonth(),T.getDate()-1),U={hour:"2-digit",minute:"2-digit"},Q=v.toLocaleTimeString("pt-BR",U);if(v>=S)return`Visto por último hoje às ${Q}`;if(v>=x)return`Visto por último ontem às ${Q}`;const K={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${v.toLocaleDateString("pt-BR",K)}`};return D.jsxs("li",{onClick:()=>t(a),className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${d?"bg-gray-700/30":""}`,children:[D.jsxs("div",{className:"flex items-center gap-4 relative flex-grow",children:[D.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-12 h-12 rounded-full"}),D.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${a.presence==="online"?"bg-green-500":"bg-gray-500"}`}),D.jsxs("div",{children:[D.jsx("span",{className:"font-semibold text-white text-lg",children:a.displayName}),D.jsx("p",{className:"text-sm text-gray-400",children:a.presence==="online"?"Online":p(a.last_changed)})]})]}),D.jsxs("div",{className:"flex items-center gap-2",children:[l>0&&D.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:l}),D.jsx("button",{onClick:g=>{g.stopPropagation(),s(n.id,d)},className:"p-2 rounded-full hover:bg-gray-600",children:d?D.jsx(LV,{size:18,className:"text-blue-400"}):D.jsx(zV,{size:18,className:"text-gray-500"})})]})]})},rL=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a})=>{const[l,c]=he.useState(!1),d=he.useRef(null),p=he.useRef();he.useEffect(()=>{const x=U=>{d.current&&!d.current.contains(U.target)&&c(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const g=()=>{e&&c(!0)},v=()=>{p.current=setTimeout(g,500)},T=()=>{clearTimeout(p.current)},S=({msg:x})=>{if(!e||!x.status)return null;const U=x.status==="read";return D.jsx(CV,{size:16,className:U?"text-blue-400":"text-gray-500"})};return D.jsxs("div",{className:`w-full flex items-center gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&D.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:D.jsx(Iw,{size:16})}),D.jsxs("div",{className:"relative",ref:d,onTouchStart:v,onTouchEnd:T,onContextMenu:x=>{x.preventDefault(),e&&c(!0)},children:[D.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-none":"rounded-bl-none"}`,children:[n.replyTo&&!n.isDeleted&&D.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[D.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),D.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),D.jsx("p",{className:"break-words",children:n.isDeleted?"Esta mensagem foi apagada":n.text}),!n.isDeleted&&D.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&D.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),D.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),D.jsx(S,{msg:n})]})]}),l&&e&&D.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[D.jsxs("button",{onClick:()=>{a(),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[D.jsx(GV,{size:14})," Editar"]}),D.jsxs("button",{onClick:()=>{s("self"),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[D.jsx(xw,{size:14})," Apagar para mim"]}),D.jsxs("button",{onClick:()=>{s("all"),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[D.jsx(xw,{size:14})," Apagar para todos"]})]})]}),e&&D.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:D.jsx(Iw,{size:16})})]})},aL=({onEmojiSelect:n,onClose:e})=>{const t=he.useRef(null);he.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😀","😂","❤️","👍","🙏","😢","🎉","🤔","🔥","💀","✨","😊","😍","🥰","😎","🤩","🥳","😭","😡","😱","😇","🥺","🤯","🙌","👋","🤝","💪","👀","🧠","🧑‍💻","🐶","🐱","🌺","🍕","⚽️","🚗","✈️","💡","💰","✅","❌"];return D.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:D.jsx("div",{className:"p-2 overflow-y-auto",children:D.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>D.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},Lw=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=he.useState([]),[l,c]=he.useState(""),[d,p]=he.useState(!1),[g,v]=he.useState(!1),[T,S]=he.useState(null),[x,U]=he.useState(null),[Q,K]=he.useState(!1),[ge,ue]=he.useState(!1),[ce,Le]=he.useState(!1),[_e,Ue]=he.useState(null),P=he.useRef(null),A=he.useRef(null),C=[n.uid,e.uid].sort().join("_"),M=SC(e.uid),k=he.useRef();he.useEffect(()=>{k.current=M?.presence},[M?.presence]),he.useEffect(()=>{if(k.current!=="online"&&M?.presence==="online"){const oe=pi(Fn(ht,`conversations/${C}/messages`),pn("receiverId","==",n.uid),pn("status","==","sent"));Xf(oe).then(I=>{const X=hg(ht);I.docs.forEach(te=>X.update(te.ref,{status:"delivered"})),X.commit()})}},[M?.presence,C,n.uid]),he.useEffect(()=>{const oe=`conversations/${C}/messages`,I=pi(Fn(ht,oe),KM("createdAt","asc")),X=Dr(I,te=>{const ee=te.docs.map(we=>({id:we.id,...we.data()})).filter(we=>!we.deletedFor?.includes(n.uid));a(ee);const me=hg(ht);te.docs.forEach(we=>{we.data().receiverId===n.uid&&we.data().status!=="read"&&me.update(we.ref,{status:"read"})}),me.commit()});return()=>X()},[C,n.uid]),he.useEffect(()=>{const oe=Na(xa,`typing/${C}/${e.uid}`),I=Yy(oe,X=>p(X.exists()));return()=>I()},[C,e.uid]),he.useEffect(()=>{P.current?.scrollIntoView({behavior:"smooth"})},[s]);const L=oe=>{c(oe.target.value);const I=Na(xa,`typing/${C}/${n.uid}`);oe.target.value.trim().length>0?(Gd(I,!0),A.current&&clearTimeout(A.current),A.current=setTimeout(()=>vg(I),3e3)):vg(I)},N=async oe=>{if(oe.preventDefault(),l.trim()==="")return;const I=l;c(""),vg(Na(xa,`typing/${C}/${n.uid}`)),A.current&&clearTimeout(A.current);const X={text:I,createdAt:uc(),senderId:n.uid,receiverId:e.uid,status:M?.presence==="online"?"delivered":"sent"};T&&(X.replyTo={id:T.id,text:T.text,senderName:T.senderId===n.uid?"Você":e.displayName});try{await o1(Fn(ht,`conversations/${C}/messages`),X),S(null)}catch(te){console.error("Falha ao enviar mensagem:",te),c(I)}},Vt=async oe=>{if(oe.preventDefault(),!x||l.trim()==="")return;const I=Gi(ht,`conversations/${C}/messages`,x.id);await Cs(I,{text:l,edited:!0}),U(null),c("")},dt=async()=>{if(!_e)return;const{id:oe,type:I}=_e,X=Gi(ht,`conversations/${C}/messages`,oe);I==="self"?await Cs(X,{deletedFor:Qg(n.uid)}):I==="all"&&await Cs(X,{text:"",isDeleted:!0,replyTo:null}),Ue(null)},G=async()=>{const oe=pi(Fn(ht,`conversations/${C}/messages`)),I=await Xf(oe),X=hg(ht);I.docs.forEach(te=>{X.update(te.ref,{deletedFor:Qg(n.uid)})}),await X.commit(),Le(!1)},se=oe=>{U(oe),c(oe.text),S(null)},fe=()=>{U(null),c("")};return D.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[D.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[D.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:D.jsx(wV,{size:24})}),D.jsxs("div",{className:"flex items-center cursor-pointer flex-grow",onClick:()=>v(!0),children:[D.jsx("img",{src:e.photoURL,alt:e.displayName,className:"w-10 h-10 rounded-full mr-4"}),D.jsxs("div",{children:[D.jsx("h2",{className:"text-xl font-bold text-white",children:e.displayName}),D.jsx("p",{className:"text-sm text-blue-300 h-4",children:d?"Digitando...":M?.presence==="online"?"Online":""})]})]}),D.jsxs("div",{className:"relative",children:[D.jsx("button",{onClick:()=>ue(oe=>!oe),className:"p-2 text-gray-400 hover:text-white",children:D.jsx(xV,{})}),ge&&D.jsx("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:D.jsxs("button",{onClick:()=>{Le(!0),ue(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[D.jsx(OV,{size:14})," Limpar conversa"]})})]})]}),D.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main",children:[D.jsx("div",{className:"space-y-1",children:s.map(oe=>D.jsx(rL,{msg:oe,isCurrentUser:oe.senderId===n.uid,onReply:()=>S(oe),onDelete:I=>Ue({id:oe.id,type:I}),onEdit:()=>se(oe)},oe.id))}),D.jsx("div",{ref:P})]}),D.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[(T||x)&&D.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[D.jsxs("div",{className:"flex justify-between items-center text-sm",children:[D.jsx("p",{className:"font-bold",children:x?"Editando mensagem":`Respondendo a ${T.senderId===n.uid?"Você":e.displayName}`}),D.jsx("button",{onClick:x?fe:()=>S(null),className:"p-1",children:D.jsx(TC,{size:16})})]}),D.jsx("p",{className:"text-xs text-gray-400 truncate",children:x?x.text:T.text})]}),D.jsxs("div",{className:"relative flex items-center gap-2",children:[Q&&D.jsx(aL,{onEmojiSelect:oe=>c(I=>I+oe),onClose:()=>K(!1)}),D.jsx("button",{type:"button",onClick:()=>K(oe=>!oe),className:"p-2 text-gray-400 hover:text-white",children:D.jsx(FV,{})}),D.jsxs("form",{onSubmit:x?Vt:N,className:"flex-grow flex items-center gap-2",children:[D.jsx("input",{type:"text",value:l,onChange:L,placeholder:"Digite sua mensagem...",className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),D.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim(),children:x?D.jsx(vC,{size:20}):D.jsx(qV,{size:20})})]})]})]}),g&&D.jsx(iL,{user:e,onClose:()=>v(!1)}),D.jsx(Mw,{isOpen:ce,onClose:()=>Le(!1),onConfirm:G,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),D.jsx(Mw,{isOpen:!!_e,onClose:()=>Ue(null),onConfirm:dt,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${_e?.type==="all"?"para todos":"para você"}?`})]})},oL=({user:n,onLogout:e})=>{const[t,s]=he.useState(null),[a,l]=he.useState("contacts"),[c,d]=he.useState("list"),p=ZV(n),g=JV(n);eL(g),he.useEffect(()=>{d(t?"chat":"list")},[t]);const v=U=>{s(U)},T=()=>{s(null)},S=({count:U})=>U===0?null:D.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:U}),x=({count:U})=>U===0?null:D.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[D.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),D.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]});return D.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[D.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[D.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),D.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),D.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:D.jsx(Nw,{size:20})})]}),D.jsxs("div",{className:"flex border-b border-gray-700/50",children:[D.jsxs("button",{onClick:()=>l("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[D.jsx(Ow,{className:"mx-auto"}),D.jsx(x,{count:g})]}),D.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:D.jsx(Dw,{className:"mx-auto"})}),D.jsxs("button",{onClick:()=>l("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[D.jsx(Rw,{className:"mx-auto"}),D.jsx(S,{count:p})]})]}),D.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&D.jsx(Vw,{currentUser:n,onSelectUser:v}),a==="add"&&D.jsx(kw,{currentUser:n}),a==="requests"&&D.jsx(Pw,{currentUser:n})]})]}),D.jsx("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:c==="list"?D.jsxs(D.Fragment,{children:[D.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),D.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),D.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:D.jsx(Nw,{size:20})})]}),D.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&D.jsx(Vw,{currentUser:n,onSelectUser:v}),a==="add"&&D.jsx(kw,{currentUser:n}),a==="requests"&&D.jsx(Pw,{currentUser:n})]}),D.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[D.jsxs("button",{onClick:()=>l("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:[D.jsx(Ow,{}),D.jsx(x,{count:g})]}),D.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:D.jsx(Dw,{})}),D.jsxs("button",{onClick:()=>l("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[D.jsx(Rw,{}),D.jsx(S,{count:p})]})]})]}):D.jsx(Lw,{currentUser:n,otherUser:t,onLeave:T})}),D.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?D.jsx(Lw,{currentUser:n,otherUser:t,onLeave:T}):D.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[D.jsx(Ky,{size:60,className:"mb-4"}),D.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione um contato"}),D.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function lL(){return D.jsxs(D.Fragment,{children:[D.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),D.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:D.jsx(uL,{})})]})}const uL=()=>{const[n,e]=he.useState(null),[t,s]=he.useState(!0);$V(n),he.useEffect(()=>{const l=x2(Af,async c=>{if(c)e(c);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await R2(Af,__initial_auth_token):e(null)}catch(d){console.error("Falha na autenticação automática, mostrando tela de login.",d),e(null)}s(!1)});return()=>l()},[]);const a=async()=>{if(n)try{const l=Na(xa,`/status/${n.uid}`);await Gd(l,{state:"offline",last_changed:Date.now()}),await Cs(Gi(ht,`/users/${n.uid}`),{state:"offline",last_changed:uc()}),await D2(Af),e(null)}catch(l){console.error("Erro ao fazer logout:",l)}};return t?D.jsx(tL,{}):n?D.jsx(oL,{user:n,onLogout:a}):D.jsx(nL,{})};nI.createRoot(document.getElementById("root")).render(D.jsx(he.StrictMode,{children:D.jsx(lL,{})}));
