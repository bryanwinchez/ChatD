(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var rg={exports:{}},Pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function TI(){if(v0)return Pu;v0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Pu.Fragment=e,Pu.jsx=t,Pu.jsxs=t,Pu}var E0;function SI(){return E0||(E0=1,rg.exports=TI()),rg.exports}var j=SI(),ag={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function wI(){if(T0)return Re;T0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,Q={};function H(D,J,se){this.props=D,this.context=J,this.refs=Q,this.updater=se||O}H.prototype.isReactComponent={},H.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},H.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ce(){}ce.prototype=H.prototype;function oe(D,J,se){this.props=D,this.context=J,this.refs=Q,this.updater=se||O}var re=oe.prototype=new ce;re.constructor=oe,U(re,H.prototype),re.isPureReactComponent=!0;var ye=Array.isArray,pe={H:null,A:null,T:null,S:null,V:null},De=Object.prototype.hasOwnProperty;function N(D,J,se,ee,me,Oe){return se=Oe.ref,{$$typeof:n,type:D,key:J,ref:se!==void 0?se:null,props:Oe}}function b(D,J){return N(D.type,J,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function k(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(se){return J[se]})}var M=/\/+/g;function P(D,J){return typeof D=="object"&&D!==null&&D.key!=null?k(""+D.key):J.toString(36)}function I(){}function Jt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function gt(D,J,se,ee,me){var Oe=typeof D;(Oe==="undefined"||Oe==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(Oe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case n:case e:we=!0;break;case y:return we=D._init,gt(we(D._payload),J,se,ee,me)}}if(we)return me=me(D),we=ee===""?"."+P(D,0):ee,ye(me)?(se="",we!=null&&(se=we.replace(M,"$&/")+"/"),gt(me,J,se,"",function(Ei){return Ei})):me!=null&&(C(me)&&(me=b(me,se+(me.key==null||D&&D.key===me.key?"":(""+me.key).replace(M,"$&/")+"/")+we)),J.push(me)),1;we=0;var jt=ee===""?".":ee+":";if(ye(D))for(var ot=0;ot<D.length;ot++)ee=D[ot],Oe=jt+P(ee,ot),we+=gt(ee,J,se,Oe,me);else if(ot=S(D),typeof ot=="function")for(D=ot.call(D),ot=0;!(ee=D.next()).done;)ee=ee.value,Oe=jt+P(ee,ot++),we+=gt(ee,J,se,Oe,me);else if(Oe==="object"){if(typeof D.then=="function")return gt(Jt(D),J,se,ee,me);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return we}function K(D,J,se){if(D==null)return D;var ee=[],me=0;return gt(D,ee,"","",function(Oe){return J.call(se,Oe,me++)}),ee}function ie(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(se){(D._status===0||D._status===-1)&&(D._status=1,D._result=se)},function(se){(D._status===0||D._status===-1)&&(D._status=2,D._result=se)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var fe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ge(){}return Re.Children={map:K,forEach:function(D,J,se){K(D,function(){J.apply(this,arguments)},se)},count:function(D){var J=0;return K(D,function(){J++}),J},toArray:function(D){return K(D,function(J){return J})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Re.Component=H,Re.Fragment=t,Re.Profiler=a,Re.PureComponent=oe,Re.StrictMode=s,Re.Suspense=m,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pe,Re.__COMPILER_RUNTIME={__proto__:null,c:function(D){return pe.H.useMemoCache(D)}},Re.cache=function(D){return function(){return D.apply(null,arguments)}},Re.cloneElement=function(D,J,se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ee=U({},D.props),me=D.key,Oe=void 0;if(J!=null)for(we in J.ref!==void 0&&(Oe=void 0),J.key!==void 0&&(me=""+J.key),J)!De.call(J,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&J.ref===void 0||(ee[we]=J[we]);var we=arguments.length-2;if(we===1)ee.children=se;else if(1<we){for(var jt=Array(we),ot=0;ot<we;ot++)jt[ot]=arguments[ot+2];ee.children=jt}return N(D.type,me,void 0,void 0,Oe,ee)},Re.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Re.createElement=function(D,J,se){var ee,me={},Oe=null;if(J!=null)for(ee in J.key!==void 0&&(Oe=""+J.key),J)De.call(J,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(me[ee]=J[ee]);var we=arguments.length-2;if(we===1)me.children=se;else if(1<we){for(var jt=Array(we),ot=0;ot<we;ot++)jt[ot]=arguments[ot+2];me.children=jt}if(D&&D.defaultProps)for(ee in we=D.defaultProps,we)me[ee]===void 0&&(me[ee]=we[ee]);return N(D,Oe,void 0,void 0,null,me)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(D){return{$$typeof:d,render:D}},Re.isValidElement=C,Re.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ie}},Re.memo=function(D,J){return{$$typeof:g,type:D,compare:J===void 0?null:J}},Re.startTransition=function(D){var J=pe.T,se={};pe.T=se;try{var ee=D(),me=pe.S;me!==null&&me(se,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Ge,fe)}catch(Oe){fe(Oe)}finally{pe.T=J}},Re.unstable_useCacheRefresh=function(){return pe.H.useCacheRefresh()},Re.use=function(D){return pe.H.use(D)},Re.useActionState=function(D,J,se){return pe.H.useActionState(D,J,se)},Re.useCallback=function(D,J){return pe.H.useCallback(D,J)},Re.useContext=function(D){return pe.H.useContext(D)},Re.useDebugValue=function(){},Re.useDeferredValue=function(D,J){return pe.H.useDeferredValue(D,J)},Re.useEffect=function(D,J,se){var ee=pe.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(D,J)},Re.useId=function(){return pe.H.useId()},Re.useImperativeHandle=function(D,J,se){return pe.H.useImperativeHandle(D,J,se)},Re.useInsertionEffect=function(D,J){return pe.H.useInsertionEffect(D,J)},Re.useLayoutEffect=function(D,J){return pe.H.useLayoutEffect(D,J)},Re.useMemo=function(D,J){return pe.H.useMemo(D,J)},Re.useOptimistic=function(D,J){return pe.H.useOptimistic(D,J)},Re.useReducer=function(D,J,se){return pe.H.useReducer(D,J,se)},Re.useRef=function(D){return pe.H.useRef(D)},Re.useState=function(D){return pe.H.useState(D)},Re.useSyncExternalStore=function(D,J,se){return pe.H.useSyncExternalStore(D,J,se)},Re.useTransition=function(){return pe.H.useTransition()},Re.version="19.1.1",Re}var S0;function T_(){return S0||(S0=1,ag.exports=wI()),ag.exports}var Ie=T_(),og={exports:{}},Vu={},lg={exports:{}},ug={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function AI(){return w0||(w0=1,(function(n){function e(K,ie){var fe=K.length;K.push(ie);e:for(;0<fe;){var Ge=fe-1>>>1,D=K[Ge];if(0<a(D,ie))K[Ge]=ie,K[fe]=D,fe=Ge;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var ie=K[0],fe=K.pop();if(fe!==ie){K[0]=fe;e:for(var Ge=0,D=K.length,J=D>>>1;Ge<J;){var se=2*(Ge+1)-1,ee=K[se],me=se+1,Oe=K[me];if(0>a(ee,fe))me<D&&0>a(Oe,ee)?(K[Ge]=Oe,K[me]=fe,Ge=me):(K[Ge]=ee,K[se]=fe,Ge=se);else if(me<D&&0>a(Oe,fe))K[Ge]=Oe,K[me]=fe,Ge=me;else break e}}return ie}function a(K,ie){var fe=K.sortIndex-ie.sortIndex;return fe!==0?fe:K.id-ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var m=[],g=[],y=1,T=null,S=3,O=!1,U=!1,Q=!1,H=!1,ce=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function ye(K){for(var ie=t(g);ie!==null;){if(ie.callback===null)s(g);else if(ie.startTime<=K)s(g),ie.sortIndex=ie.expirationTime,e(m,ie);else break;ie=t(g)}}function pe(K){if(Q=!1,ye(K),!U)if(t(m)!==null)U=!0,De||(De=!0,P());else{var ie=t(g);ie!==null&&gt(pe,ie.startTime-K)}}var De=!1,N=-1,b=5,C=-1;function k(){return H?!0:!(n.unstable_now()-C<b)}function M(){if(H=!1,De){var K=n.unstable_now();C=K;var ie=!0;try{e:{U=!1,Q&&(Q=!1,oe(N),N=-1),O=!0;var fe=S;try{t:{for(ye(K),T=t(m);T!==null&&!(T.expirationTime>K&&k());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,S=T.priorityLevel;var D=Ge(T.expirationTime<=K);if(K=n.unstable_now(),typeof D=="function"){T.callback=D,ye(K),ie=!0;break t}T===t(m)&&s(m),ye(K)}else s(m);T=t(m)}if(T!==null)ie=!0;else{var J=t(g);J!==null&&gt(pe,J.startTime-K),ie=!1}}break e}finally{T=null,S=fe,O=!1}ie=void 0}}finally{ie?P():De=!1}}}var P;if(typeof re=="function")P=function(){re(M)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Jt=I.port2;I.port1.onmessage=M,P=function(){Jt.postMessage(null)}}else P=function(){ce(M,0)};function gt(K,ie){N=ce(function(){K(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(K){switch(S){case 1:case 2:case 3:var ie=3;break;default:ie=S}var fe=S;S=ie;try{return K()}finally{S=fe}},n.unstable_requestPaint=function(){H=!0},n.unstable_runWithPriority=function(K,ie){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var fe=S;S=K;try{return ie()}finally{S=fe}},n.unstable_scheduleCallback=function(K,ie,fe){var Ge=n.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Ge+fe:Ge):fe=Ge,K){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=fe+D,K={id:y++,callback:ie,priorityLevel:K,startTime:fe,expirationTime:D,sortIndex:-1},fe>Ge?(K.sortIndex=fe,e(g,K),t(m)===null&&K===t(g)&&(Q?(oe(N),N=-1):Q=!0,gt(pe,fe-Ge))):(K.sortIndex=D,e(m,K),U||O||(U=!0,De||(De=!0,P()))),K},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(K){var ie=S;return function(){var fe=S;S=ie;try{return K.apply(this,arguments)}finally{S=fe}}}})(ug)),ug}var A0;function bI(){return A0||(A0=1,lg.exports=AI()),lg.exports}var cg={exports:{}},hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function RI(){if(b0)return hn;b0=1;var n=T_();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,hn.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,y)},hn.flushSync=function(m){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=g,s.p=y,s.d.f()}},hn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},hn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},hn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:O}):y==="script"&&s.d.X(m,{crossOrigin:T,integrity:S,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},hn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},hn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(m,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},hn.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},hn.requestFormReset=function(m){s.d.r(m)},hn.unstable_batchedUpdates=function(m,g){return m(g)},hn.useFormState=function(m,g,y){return c.H.useFormState(m,g,y)},hn.useFormStatus=function(){return c.H.useHostTransitionStatus()},hn.version="19.1.1",hn}var R0;function CI(){if(R0)return cg.exports;R0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),cg.exports=RI(),cg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function II(){if(C0)return Vu;C0=1;var n=bI(),e=T_(),t=CI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function m(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return d(f),i;if(p===u)return d(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var E=!1,w=f.child;w;){if(w===o){E=!0,o=f,u=p;break}if(w===u){E=!0,u=f,o=p;break}w=w.sibling}if(!E){for(w=p.child;w;){if(w===o){E=!0,o=p,u=f;break}if(w===u){E=!0,u=p,o=f;break}w=w.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),oe=Symbol.for("react.consumer"),re=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function P(i){return i===null||typeof i!="object"?null:(i=M&&i[M]||i["@@iterator"],typeof i=="function"?i:null)}var I=Symbol.for("react.client.reference");function Jt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===I?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case H:return"Profiler";case Q:return"StrictMode";case pe:return"Suspense";case De:return"SuspenseList";case C:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case O:return"Portal";case re:return(i.displayName||"Context")+".Provider";case oe:return(i._context.displayName||"Context")+".Consumer";case ye:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case N:return r=i.displayName||null,r!==null?r:Jt(i.type)||"Memo";case b:r=i._payload,i=i._init;try{return Jt(i(r))}catch{}}return null}var gt=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Ge=[],D=-1;function J(i){return{current:i}}function se(i){0>D||(i.current=Ge[D],Ge[D]=null,D--)}function ee(i,r){D++,Ge[D]=i.current,i.current=r}var me=J(null),Oe=J(null),we=J(null),jt=J(null);function ot(i,r){switch(ee(we,r),ee(Oe,i),ee(me,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?KT(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=KT(r),i=YT(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}se(me),ee(me,i)}function Ei(){se(me),se(Oe),se(we)}function Ls(i){i.memoizedState!==null&&ee(jt,i);var r=me.current,o=YT(r,i.type);r!==o&&(ee(Oe,i),ee(me,o))}function Xi(i){Oe.current===i&&(se(me),se(Oe)),jt.current===i&&(se(jt),Du._currentValue=fe)}var Fr=Object.prototype.hasOwnProperty,jr=n.unstable_scheduleCallback,Hr=n.unstable_cancelCallback,Cl=n.unstable_shouldYield,Fc=n.unstable_requestPaint,Hn=n.unstable_now,rp=n.unstable_getCurrentPriorityLevel,Il=n.unstable_ImmediatePriority,$a=n.unstable_UserBlockingPriority,Gr=n.unstable_NormalPriority,ap=n.unstable_LowPriority,Wa=n.unstable_IdlePriority,Nl=n.log,jc=n.unstable_setDisableYieldValue,_t=null,$e=null;function xn(i){if(typeof Nl=="function"&&jc(i),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(_t,i)}catch{}}var un=Math.clz32?Math.clz32:Qr,Hc=Math.log,op=Math.LN2;function Qr(i){return i>>>=0,i===0?32:31-(Hc(i)/op|0)|0}var Kr=256,Yr=4194304;function ai(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Za(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,p=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var w=u&134217727;return w!==0?(u=w&~p,u!==0?f=ai(u):(E&=w,E!==0?f=ai(E):o||(o=w&~i,o!==0&&(f=ai(o))))):(w=u&~p,w!==0?f=ai(w):E!==0?f=ai(E):o||(o=u&~i,o!==0&&(f=ai(o)))),f===0?0:r!==0&&r!==f&&(r&p)===0&&(p=f&-f,o=r&-r,p>=o||p===32&&(o&4194048)!==0)?r:f}function Xr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Dl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ol(){var i=Kr;return Kr<<=1,(Kr&4194048)===0&&(Kr=256),i}function xl(){var i=Yr;return Yr<<=1,(Yr&62914560)===0&&(Yr=4194304),i}function $i(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Wi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Ml(i,r,o,u,f,p){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,R=i.expirationTimes,B=i.hiddenUpdates;for(o=E&~o;0<o;){var Y=31-un(o),W=1<<Y;w[Y]=0,R[Y]=-1;var q=B[Y];if(q!==null)for(B[Y]=null,Y=0;Y<q.length;Y++){var F=q[Y];F!==null&&(F.lane&=-536870913)}o&=~W}u!==0&&Ti(i,u,0),p!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=p&~(E&~r))}function Ti(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-un(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function kl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-un(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Us(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ja(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function zs(){var i=ie.p;return i!==0?i:(i=window.event,i===void 0?32:d0(i.type))}function Gc(i,r){var o=ie.p;try{return ie.p=i,r()}finally{ie.p=o}}var ft=Math.random().toString(36).slice(2),Lt="__reactFiber$"+ft,It="__reactProps$"+ft,Gn="__reactContainer$"+ft,Pl="__reactEvents$"+ft,lp="__reactListeners$"+ft,Bs="__reactHandles$"+ft,Qc="__reactResources$"+ft,$r="__reactMarker$"+ft;function qs(i){delete i[Lt],delete i[It],delete i[Pl],delete i[lp],delete i[Bs]}function Zi(i){var r=i[Lt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Gn]||o[Lt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=ZT(i);i!==null;){if(o=i[Lt])return o;i=ZT(i)}return r}i=o,o=i.parentNode}return null}function Si(i){if(i=i[Lt]||i[Gn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function wi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function _n(i){var r=i[Qc];return r||(r=i[Qc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function wt(i){i[$r]=!0}var Vl=new Set,eo={};function oi(i,r){Ji(i,r),Ji(i+"Capture",r)}function Ji(i,r){for(eo[i]=r,i=0;i<r.length;i++)Vl.add(r[i])}var Kc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yc={},Wr={};function Xc(i){return Fr.call(Wr,i)?!0:Fr.call(Yc,i)?!1:Kc.test(i)?Wr[i]=!0:(Yc[i]=!0,!1)}function Fs(i,r,o){if(Xc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Ai(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function en(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Zr,$c;function es(i){if(Zr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Zr=r&&r[1]||"",$c=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zr+i+$c}var to=!1;function no(i,r){if(!i||to)return"";to=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(F){var q=F}Reflect.construct(i,[],W)}else{try{W.call()}catch(F){q=F}i.call(W.prototype)}}else{try{throw Error()}catch(F){q=F}(W=i())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(F){if(F&&q&&typeof F.stack=="string")return[F.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],w=p[1];if(E&&w){var R=E.split(`
`),B=w.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===B.length)for(u=R.length-1,f=B.length-1;1<=u&&0<=f&&R[u]!==B[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==B[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==B[f]){var Y=`
`+R[u].replace(" at new "," at ");return i.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",i.displayName)),Y}while(1<=u&&0<=f);break}}}finally{to=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?es(o):""}function Ll(i){switch(i.tag){case 26:case 27:case 5:return es(i.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 15:return no(i.type,!1);case 11:return no(i.type.render,!1);case 1:return no(i.type,!0);case 31:return es("Activity");default:return""}}function io(i){try{var r="";do r+=Ll(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function yn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ul(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function up(i){var r=Ul(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function so(i){i._valueTracker||(i._valueTracker=up(i))}function zl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Ul(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Jr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var cp=/[\n"\\]/g;function Nt(i){return i.replace(cp,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Mn(i,r,o,u,f,p,E,w){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+yn(r)):i.value!==""+yn(r)&&(i.value=""+yn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?js(i,E,yn(r)):o!=null?js(i,E,yn(o)):u!=null&&i.removeAttribute("value"),f==null&&p!=null&&(i.defaultChecked=!!p),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+yn(w):i.removeAttribute("name")}function ea(i,r,o,u,f,p,E,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(i.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+yn(o):"",r=r!=null?""+yn(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=w?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function js(i,r,o){r==="number"&&Jr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function ts(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+yn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function et(i,r,o){if(r!=null&&(r=""+yn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+yn(o):""}function ta(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(gt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=yn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Qn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var na=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||na.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Bl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Wc(i,f,u)}else for(var p in r)r.hasOwnProperty(p)&&Wc(i,p,r[p])}function ql(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ro(i){return fp.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ns=null;function Kn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var is=null,ss=null;function Fl(i){var r=Si(i);if(r&&(i=r.stateNode)){var o=i[It]||null;e:switch(i=r.stateNode,r.type){case"input":if(Mn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Nt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[It]||null;if(!f)throw Error(s(90));Mn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&zl(u)}break e;case"textarea":et(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ts(i,!!o.multiple,r,!1)}}}var bi=!1;function Zc(i,r,o){if(bi)return i(r,o);bi=!0;try{var u=i(r);return u}finally{if(bi=!1,(is!==null||ss!==null)&&(Gh(),is&&(r=is,i=ss,ss=is=null,Fl(r),i)))for(r=0;r<i.length;r++)Fl(i[r])}}function ia(i,r){var o=i.stateNode;if(o===null)return null;var u=o[It]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yn=!1;if(li)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){Yn=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{Yn=!1}var Ri=null,Hs=null,rs=null;function jl(){if(rs)return rs;var i,r=Hs,o=r.length,u,f="value"in Ri?Ri.value:Ri.textContent,p=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[p-u];u++);return rs=f.slice(i,1<u?1-u:void 0)}function Ci(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ii(){return!0}function Hl(){return!1}function Ht(i){function r(o,u,f,p,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ii:Hl,this.isPropagationStopped=Hl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),r}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Ht(Ye),ra=y({},Ye,{view:0,detail:0}),Jc=Ht(ra),oo,lo,Ni,aa=y({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ni&&(Ni&&i.type==="mousemove"?(oo=i.screenX-Ni.screenX,lo=i.screenY-Ni.screenY):lo=oo=0,Ni=i),oo)},movementY:function(i){return"movementY"in i?i.movementY:lo}}),Xn=Ht(aa),eh=y({},aa,{dataTransfer:0}),dp=Ht(eh),oa=y({},ra,{relatedTarget:0}),uo=Ht(oa),Gl=y({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),co=Ht(Gl),th=y({},Ye,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ho=Ht(th),pp=y({},Ye,{data:0}),Ql=Ht(pp),la={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=ih[i])?!!r[i]:!1}function ua(){return Kl}var sh=y({},ra,{key:function(i){if(i.key){var r=la[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ci(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?nh[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(i){return i.type==="keypress"?Ci(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ci(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),fo=Ht(sh),rh=y({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yl=Ht(rh),as=y({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),ah=Ht(as),oh=y({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=Ht(oh),uh=y({},aa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),po=Ht(uh),vn=y({},Ye,{newState:0,oldState:0}),ch=Ht(vn),hh=[9,13,27,32],Di=li&&"CompositionEvent"in window,h=null;li&&"documentMode"in document&&(h=document.documentMode);var _=li&&"TextEvent"in window&&!h,v=li&&(!Di||h&&8<h&&11>=h),A=" ",L=!1;function G(i,r){switch(i){case"keyup":return hh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Be=!1;function Ut(i,r){switch(i){case"compositionend":return te(r);case"keypress":return r.which!==32?null:(L=!0,A);case"textInput":return i=r.data,i===A&&L?null:i;default:return null}}function qe(i,r){if(Be)return i==="compositionend"||!Di&&G(i,r)?(i=jl(),rs=Hs=Ri=null,Be=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Gt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Gt[i.type]:r==="textarea"}function os(i,r,o,u){is?ss?ss.push(u):ss=[u]:is=u,r=Wh(r,"onChange"),0<r.length&&(o=new ao("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var tn=null,Oi=null;function Xl(i){FT(i,0)}function fh(i){var r=wi(i);if(zl(r))return i}function uv(i,r){if(i==="change")return r}var cv=!1;if(li){var mp;if(li){var gp="oninput"in document;if(!gp){var hv=document.createElement("div");hv.setAttribute("oninput","return;"),gp=typeof hv.oninput=="function"}mp=gp}else mp=!1;cv=mp&&(!document.documentMode||9<document.documentMode)}function fv(){tn&&(tn.detachEvent("onpropertychange",dv),Oi=tn=null)}function dv(i){if(i.propertyName==="value"&&fh(Oi)){var r=[];os(r,Oi,i,Kn(i)),Zc(Xl,r)}}function WC(i,r,o){i==="focusin"?(fv(),tn=r,Oi=o,tn.attachEvent("onpropertychange",dv)):i==="focusout"&&fv()}function ZC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return fh(Oi)}function JC(i,r){if(i==="click")return fh(r)}function e1(i,r){if(i==="input"||i==="change")return fh(r)}function t1(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var kn=typeof Object.is=="function"?Object.is:t1;function $l(i,r){if(kn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Fr.call(r,f)||!kn(i[f],r[f]))return!1}return!0}function pv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function mv(i,r){var o=pv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=pv(o)}}function gv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?gv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function _v(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Jr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Jr(i.document)}return r}function _p(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var n1=li&&"documentMode"in document&&11>=document.documentMode,mo=null,yp=null,Wl=null,vp=!1;function yv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vp||mo==null||mo!==Jr(u)||(u=mo,"selectionStart"in u&&_p(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Wl&&$l(Wl,u)||(Wl=u,u=Wh(yp,"onSelect"),0<u.length&&(r=new ao("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=mo)))}function ca(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var go={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},Ep={},vv={};li&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function ha(i){if(Ep[i])return Ep[i];if(!go[i])return i;var r=go[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in vv)return Ep[i]=r[o];return i}var Ev=ha("animationend"),Tv=ha("animationiteration"),Sv=ha("animationstart"),i1=ha("transitionrun"),s1=ha("transitionstart"),r1=ha("transitioncancel"),wv=ha("transitionend"),Av=new Map,Tp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tp.push("scrollEnd");function ui(i,r){Av.set(i,r),oi(r,[i])}var bv=new WeakMap;function $n(i,r){if(typeof i=="object"&&i!==null){var o=bv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:io(r)},bv.set(i,r),r)}return{value:i,source:r,stack:io(r)}}var Wn=[],_o=0,Sp=0;function dh(){for(var i=_o,r=Sp=_o=0;r<i;){var o=Wn[r];Wn[r++]=null;var u=Wn[r];Wn[r++]=null;var f=Wn[r];Wn[r++]=null;var p=Wn[r];if(Wn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}p!==0&&Rv(o,f,p)}}function ph(i,r,o,u){Wn[_o++]=i,Wn[_o++]=r,Wn[_o++]=o,Wn[_o++]=u,Sp|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function wp(i,r,o,u){return ph(i,r,o,u),mh(i)}function yo(i,r){return ph(i,null,null,r),mh(i)}function Rv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=i.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(i=p.stateNode,i===null||i._visibility&1||(f=!0)),i=p,p=p.return;return i.tag===3?(p=i.stateNode,f&&r!==null&&(f=31-un(o),i=p.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),p):null}function mh(i){if(50<Su)throw Su=0,Nm=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var vo={};function a1(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(i,r,o,u){return new a1(i,r,o,u)}function Ap(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ls(i,r){var o=i.alternate;return o===null?(o=Pn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Cv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function gh(i,r,o,u,f,p){var E=0;if(u=i,typeof i=="function")Ap(i)&&(E=1);else if(typeof i=="string")E=lI(i,o,me.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case C:return i=Pn(31,o,r,f),i.elementType=C,i.lanes=p,i;case U:return fa(o.children,f,p,r);case Q:E=8,f|=24;break;case H:return i=Pn(12,o,r,f|2),i.elementType=H,i.lanes=p,i;case pe:return i=Pn(13,o,r,f),i.elementType=pe,i.lanes=p,i;case De:return i=Pn(19,o,r,f),i.elementType=De,i.lanes=p,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ce:case re:E=10;break e;case oe:E=9;break e;case ye:E=11;break e;case N:E=14;break e;case b:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Pn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=p,r}function fa(i,r,o,u){return i=Pn(7,i,u,r),i.lanes=o,i}function bp(i,r,o){return i=Pn(6,i,null,r),i.lanes=o,i}function Rp(i,r,o){return r=Pn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Eo=[],To=0,_h=null,yh=0,Zn=[],Jn=0,da=null,us=1,cs="";function pa(i,r){Eo[To++]=yh,Eo[To++]=_h,_h=i,yh=r}function Iv(i,r,o){Zn[Jn++]=us,Zn[Jn++]=cs,Zn[Jn++]=da,da=i;var u=us;i=cs;var f=32-un(u)-1;u&=~(1<<f),o+=1;var p=32-un(r)+f;if(30<p){var E=f-f%5;p=(u&(1<<E)-1).toString(32),u>>=E,f-=E,us=1<<32-un(r)+f|o<<f|u,cs=p+i}else us=1<<p|o<<f|u,cs=i}function Cp(i){i.return!==null&&(pa(i,1),Iv(i,1,0))}function Ip(i){for(;i===_h;)_h=Eo[--To],Eo[To]=null,yh=Eo[--To],Eo[To]=null;for(;i===da;)da=Zn[--Jn],Zn[Jn]=null,cs=Zn[--Jn],Zn[Jn]=null,us=Zn[--Jn],Zn[Jn]=null}var En=null,yt=null,Qe=!1,ma=null,xi=!1,Np=Error(s(519));function ga(i){var r=Error(s(418,""));throw eu($n(r,i)),Np}function Nv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Lt]=i,r[It]=u,o){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(o=0;o<Au.length;o++)Ve(Au[o],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Ve("invalid",r),ea(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),so(r);break;case"select":Ve("invalid",r);break;case"textarea":Ve("invalid",r),ta(r,u.value,u.defaultValue,u.children),so(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||QT(r.textContent,o)?(u.popover!=null&&(Ve("beforetoggle",r),Ve("toggle",r)),u.onScroll!=null&&Ve("scroll",r),u.onScrollEnd!=null&&Ve("scrollend",r),u.onClick!=null&&(r.onclick=Zh),r=!0):r=!1,r||ga(i)}function Dv(i){for(En=i.return;En;)switch(En.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:En=En.return}}function Zl(i){if(i!==En)return!1;if(!Qe)return Dv(i),Qe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Gm(i.type,i.memoizedProps)),o=!o),o&&yt&&ga(i),Dv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){yt=hi(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}yt=null}}else r===27?(r=yt,ar(i.type)?(i=Xm,Xm=null,yt=i):yt=r):yt=En?hi(i.stateNode.nextSibling):null;return!0}function Jl(){yt=En=null,Qe=!1}function Ov(){var i=ma;return i!==null&&(An===null?An=i:An.push.apply(An,i),ma=null),i}function eu(i){ma===null?ma=[i]:ma.push(i)}var Dp=J(null),_a=null,hs=null;function Gs(i,r,o){ee(Dp,r._currentValue),r._currentValue=o}function fs(i){i._currentValue=Dp.current,se(Dp)}function Op(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function xp(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var p=f.dependencies;if(p!==null){var E=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var R=0;R<r.length;R++)if(w.context===r[R]){p.lanes|=o,w=p.alternate,w!==null&&(w.lanes|=o),Op(p.return,o,i),u||(E=null);break e}p=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Op(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function tu(i,r,o,u){i=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=f.type;kn(f.pendingProps.value,E.value)||(i!==null?i.push(w):i=[w])}}else if(f===jt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Du):i=[Du])}f=f.return}i!==null&&xp(r,i,o,u),r.flags|=262144}function vh(i){for(i=i.firstContext;i!==null;){if(!kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ya(i){_a=i,hs=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function cn(i){return xv(_a,i)}function Eh(i,r){return _a===null&&ya(i),xv(i,r)}function xv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},hs===null){if(i===null)throw Error(s(308));hs=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else hs=hs.next=r;return o}var o1=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},l1=n.unstable_scheduleCallback,u1=n.unstable_NormalPriority,Bt={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mp(){return{controller:new o1,data:new Map,refCount:0}}function nu(i){i.refCount--,i.refCount===0&&l1(u1,function(){i.controller.abort()})}var iu=null,kp=0,So=0,wo=null;function c1(i,r){if(iu===null){var o=iu=[];kp=0,So=Vm(),wo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return kp++,r.then(Mv,Mv),r}function Mv(){if(--kp===0&&iu!==null){wo!==null&&(wo.status="fulfilled");var i=iu;iu=null,So=0,wo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function h1(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var kv=K.S;K.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&c1(i,r),kv!==null&&kv(i,r)};var va=J(null);function Pp(){var i=va.current;return i!==null?i:lt.pooledCache}function Th(i,r){r===null?ee(va,va.current):ee(va,r.pool)}function Pv(){var i=Pp();return i===null?null:{parent:Bt._currentValue,pool:i}}var su=Error(s(460)),Vv=Error(s(474)),Sh=Error(s(542)),Vp={then:function(){}};function Lv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function wh(){}function Uv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(wh,wh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i;default:if(typeof r.status=="string")r.then(wh,wh);else{if(i=lt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i}throw ru=r,su}}var ru=null;function zv(){if(ru===null)throw Error(s(459));var i=ru;return ru=null,i}function Bv(i){if(i===su||i===Sh)throw Error(s(483))}var Qs=!1;function Lp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Up(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ks(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ys(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(We&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=mh(i),Rv(i,null,o),r}return ph(i,u,r,o),mh(i)}function au(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,kl(i,o)}}function zp(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Bp=!1;function ou(){if(Bp){var i=wo;if(i!==null)throw i}}function lu(i,r,o,u){Bp=!1;var f=i.updateQueue;Qs=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var R=w,B=R.next;R.next=null,E===null?p=B:E.next=B,E=R;var Y=i.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==E&&(w===null?Y.firstBaseUpdate=B:w.next=B,Y.lastBaseUpdate=R))}if(p!==null){var W=f.baseState;E=0,Y=B=R=null,w=p;do{var q=w.lane&-536870913,F=q!==w.lane;if(F?(Fe&q)===q:(u&q)===q){q!==0&&q===So&&(Bp=!0),Y!==null&&(Y=Y.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ee=i,ge=w;q=r;var it=o;switch(ge.tag){case 1:if(Ee=ge.payload,typeof Ee=="function"){W=Ee.call(it,W,q);break e}W=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=ge.payload,q=typeof Ee=="function"?Ee.call(it,W,q):Ee,q==null)break e;W=y({},W,q);break e;case 2:Qs=!0}}q=w.callback,q!==null&&(i.flags|=64,F&&(i.flags|=8192),F=f.callbacks,F===null?f.callbacks=[q]:F.push(q))}else F={lane:q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(B=Y=F,R=W):Y=Y.next=F,E|=q;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;F=w,w=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);Y===null&&(R=W),f.baseState=R,f.firstBaseUpdate=B,f.lastBaseUpdate=Y,p===null&&(f.shared.lanes=0),nr|=E,i.lanes=E,i.memoizedState=W}}function qv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Fv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)qv(o[i],r)}var Ao=J(null),Ah=J(0);function jv(i,r){i=vs,ee(Ah,i),ee(Ao,r),vs=i|r.baseLanes}function qp(){ee(Ah,vs),ee(Ao,Ao.current)}function Fp(){vs=Ah.current,se(Ao),se(Ah)}var Xs=0,Ce=null,tt=null,Dt=null,bh=!1,bo=!1,Ea=!1,Rh=0,uu=0,Ro=null,f1=0;function At(){throw Error(s(321))}function jp(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!kn(i[o],r[o]))return!1;return!0}function Hp(i,r,o,u,f,p){return Xs=p,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,K.H=i===null||i.memoizedState===null?RE:CE,Ea=!1,p=o(u,f),Ea=!1,bo&&(p=Gv(r,o,u,f)),Hv(i),p}function Hv(i){K.H=xh;var r=tt!==null&&tt.next!==null;if(Xs=0,Dt=tt=Ce=null,bh=!1,uu=0,Ro=null,r)throw Error(s(300));i===null||Qt||(i=i.dependencies,i!==null&&vh(i)&&(Qt=!0))}function Gv(i,r,o,u){Ce=i;var f=0;do{if(bo&&(Ro=null),uu=0,bo=!1,25<=f)throw Error(s(301));if(f+=1,Dt=tt=null,i.updateQueue!=null){var p=i.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}K.H=v1,p=r(o,u)}while(bo);return p}function d1(){var i=K.H,r=i.useState()[0];return r=typeof r.then=="function"?cu(r):r,i=i.useState()[0],(tt!==null?tt.memoizedState:null)!==i&&(Ce.flags|=1024),r}function Gp(){var i=Rh!==0;return Rh=0,i}function Qp(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Kp(i){if(bh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bh=!1}Xs=0,Dt=tt=Ce=null,bo=!1,uu=Rh=0,Ro=null}function Sn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Ce.memoizedState=Dt=i:Dt=Dt.next=i,Dt}function Ot(){if(tt===null){var i=Ce.alternate;i=i!==null?i.memoizedState:null}else i=tt.next;var r=Dt===null?Ce.memoizedState:Dt.next;if(r!==null)Dt=r,tt=i;else{if(i===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));tt=i,i={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},Dt===null?Ce.memoizedState=Dt=i:Dt=Dt.next=i}return Dt}function Yp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cu(i){var r=uu;return uu+=1,Ro===null&&(Ro=[]),i=Uv(Ro,i,r),r=Ce,(Dt===null?r.memoizedState:Dt.next)===null&&(r=r.alternate,K.H=r===null||r.memoizedState===null?RE:CE),i}function Ch(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return cu(i);if(i.$$typeof===re)return cn(i)}throw Error(s(438,String(i)))}function Xp(i){var r=null,o=Ce.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Yp(),Ce.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=k;return r.index++,o}function ds(i,r){return typeof r=="function"?r(i):r}function Ih(i){var r=Ot();return $p(r,tt,i)}function $p(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,p=u.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}r.baseQueue=f=p,u.pending=null}if(p=i.baseState,f===null)i.memoizedState=p;else{r=f.next;var w=E=null,R=null,B=r,Y=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(Fe&W)===W:(Xs&W)===W){var q=B.revertLane;if(q===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===So&&(Y=!0);else if((Xs&q)===q){B=B.next,q===So&&(Y=!0);continue}else W={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(w=R=W,E=p):R=R.next=W,Ce.lanes|=q,nr|=q;W=B.action,Ea&&o(p,W),p=B.hasEagerState?B.eagerState:o(p,W)}else q={lane:W,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(w=R=q,E=p):R=R.next=q,Ce.lanes|=W,nr|=W;B=B.next}while(B!==null&&B!==r);if(R===null?E=p:R.next=w,!kn(p,i.memoizedState)&&(Qt=!0,Y&&(o=wo,o!==null)))throw o;i.memoizedState=p,i.baseState=E,i.baseQueue=R,u.lastRenderedState=p}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Wp(i){var r=Ot(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=i(p,E.action),E=E.next;while(E!==f);kn(p,r.memoizedState)||(Qt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function Qv(i,r,o){var u=Ce,f=Ot(),p=Qe;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!kn((tt||f).memoizedState,o);E&&(f.memoizedState=o,Qt=!0),f=f.queue;var w=Xv.bind(null,u,f,i);if(hu(2048,8,w,[i]),f.getSnapshot!==r||E||Dt!==null&&Dt.memoizedState.tag&1){if(u.flags|=2048,Co(9,Nh(),Yv.bind(null,u,f,o,r),null),lt===null)throw Error(s(349));p||(Xs&124)!==0||Kv(u,r,o)}return o}function Kv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ce.updateQueue,r===null?(r=Yp(),Ce.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Yv(i,r,o,u){r.value=o,r.getSnapshot=u,$v(r)&&Wv(i)}function Xv(i,r,o){return o(function(){$v(r)&&Wv(i)})}function $v(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!kn(i,o)}catch{return!0}}function Wv(i){var r=yo(i,2);r!==null&&Bn(r,i,2)}function Zp(i){var r=Sn();if(typeof i=="function"){var o=i;if(i=o(),Ea){xn(!0);try{o()}finally{xn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:i},r}function Zv(i,r,o,u){return i.baseState=o,$p(i,tt,typeof u=="function"?u:ds)}function p1(i,r,o,u,f){if(Oh(i))throw Error(s(485));if(i=r.action,i!==null){var p={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};K.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,Jv(r,p)):(p.next=o.next,r.pending=o.next=p)}}function Jv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var p=K.T,E={};K.T=E;try{var w=o(f,u),R=K.S;R!==null&&R(E,w),eE(i,r,w)}catch(B){Jp(i,r,B)}finally{K.T=p}}else try{p=o(f,u),eE(i,r,p)}catch(B){Jp(i,r,B)}}function eE(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){tE(i,r,u)},function(u){return Jp(i,r,u)}):tE(i,r,o)}function tE(i,r,o){r.status="fulfilled",r.value=o,nE(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Jv(i,o)))}function Jp(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,nE(r),r=r.next;while(r!==u)}i.action=null}function nE(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function iE(i,r){return r}function sE(i,r){if(Qe){var o=lt.formState;if(o!==null){e:{var u=Ce;if(Qe){if(yt){t:{for(var f=yt,p=xi;f.nodeType!==8;){if(!p){f=null;break t}if(f=hi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){yt=hi(f.nextSibling),u=f.data==="F!";break e}}ga(u)}u=!1}u&&(r=o[0])}}return o=Sn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iE,lastRenderedState:r},o.queue=u,o=wE.bind(null,Ce,u),u.dispatch=o,u=Zp(!1),p=sm.bind(null,Ce,!1,u.queue),u=Sn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=p1.bind(null,Ce,f,p,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function rE(i){var r=Ot();return aE(r,tt,i)}function aE(i,r,o){if(r=$p(i,r,iE)[0],i=Ih(ds)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=cu(r)}catch(E){throw E===su?Sh:E}else u=r;r=Ot();var f=r.queue,p=f.dispatch;return o!==r.memoizedState&&(Ce.flags|=2048,Co(9,Nh(),m1.bind(null,f,o),null)),[u,p,i]}function m1(i,r){i.action=r}function oE(i){var r=Ot(),o=tt;if(o!==null)return aE(r,o,i);Ot(),r=r.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function Co(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ce.updateQueue,r===null&&(r=Yp(),Ce.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Nh(){return{destroy:void 0,resource:void 0}}function lE(){return Ot().memoizedState}function Dh(i,r,o,u){var f=Sn();u=u===void 0?null:u,Ce.flags|=i,f.memoizedState=Co(1|r,Nh(),o,u)}function hu(i,r,o,u){var f=Ot();u=u===void 0?null:u;var p=f.memoizedState.inst;tt!==null&&u!==null&&jp(u,tt.memoizedState.deps)?f.memoizedState=Co(r,p,o,u):(Ce.flags|=i,f.memoizedState=Co(1|r,p,o,u))}function uE(i,r){Dh(8390656,8,i,r)}function cE(i,r){hu(2048,8,i,r)}function hE(i,r){return hu(4,2,i,r)}function fE(i,r){return hu(4,4,i,r)}function dE(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function pE(i,r,o){o=o!=null?o.concat([i]):null,hu(4,4,dE.bind(null,r,i),o)}function em(){}function mE(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&jp(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function gE(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&jp(r,u[1]))return u[0];if(u=i(),Ea){xn(!0);try{i()}finally{xn(!1)}}return o.memoizedState=[u,r],u}function tm(i,r,o){return o===void 0||(Xs&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=vT(),Ce.lanes|=i,nr|=i,o)}function _E(i,r,o,u){return kn(o,r)?o:Ao.current!==null?(i=tm(i,o,u),kn(i,r)||(Qt=!0),i):(Xs&42)===0?(Qt=!0,i.memoizedState=o):(i=vT(),Ce.lanes|=i,nr|=i,r)}function yE(i,r,o,u,f){var p=ie.p;ie.p=p!==0&&8>p?p:8;var E=K.T,w={};K.T=w,sm(i,!1,r,o);try{var R=f(),B=K.S;if(B!==null&&B(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var Y=h1(R,u);fu(i,r,Y,zn(i))}else fu(i,r,u,zn(i))}catch(W){fu(i,r,{then:function(){},status:"rejected",reason:W},zn())}finally{ie.p=p,K.T=E}}function g1(){}function nm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=vE(i).queue;yE(i,f,r,fe,o===null?g1:function(){return EE(i),o(u)})}function vE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:fe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function EE(i){var r=vE(i).next.queue;fu(i,r,{},zn())}function im(){return cn(Du)}function TE(){return Ot().memoizedState}function SE(){return Ot().memoizedState}function _1(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=zn();i=Ks(o);var u=Ys(r,i,o);u!==null&&(Bn(u,r,o),au(u,r,o)),r={cache:Mp()},i.payload=r;return}r=r.return}}function y1(i,r,o){var u=zn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(i)?AE(r,o):(o=wp(i,r,o,u),o!==null&&(Bn(o,i,u),bE(o,r,u)))}function wE(i,r,o){var u=zn();fu(i,r,o,u)}function fu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(i))AE(r,f);else{var p=i.alternate;if(i.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var E=r.lastRenderedState,w=p(E,o);if(f.hasEagerState=!0,f.eagerState=w,kn(w,E))return ph(i,r,f,0),lt===null&&dh(),!1}catch{}finally{}if(o=wp(i,r,f,u),o!==null)return Bn(o,i,u),bE(o,r,u),!0}return!1}function sm(i,r,o,u){if(u={lane:2,revertLane:Vm(),action:u,hasEagerState:!1,eagerState:null,next:null},Oh(i)){if(r)throw Error(s(479))}else r=wp(i,o,u,2),r!==null&&Bn(r,i,2)}function Oh(i){var r=i.alternate;return i===Ce||r!==null&&r===Ce}function AE(i,r){bo=bh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function bE(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,kl(i,o)}}var xh={readContext:cn,use:Ch,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At},RE={readContext:cn,use:Ch,useCallback:function(i,r){return Sn().memoizedState=[i,r===void 0?null:r],i},useContext:cn,useEffect:uE,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Dh(4194308,4,dE.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Dh(4194308,4,i,r)},useInsertionEffect:function(i,r){Dh(4,2,i,r)},useMemo:function(i,r){var o=Sn();r=r===void 0?null:r;var u=i();if(Ea){xn(!0);try{i()}finally{xn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Sn();if(o!==void 0){var f=o(r);if(Ea){xn(!0);try{o(r)}finally{xn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=y1.bind(null,Ce,i),[u.memoizedState,i]},useRef:function(i){var r=Sn();return i={current:i},r.memoizedState=i},useState:function(i){i=Zp(i);var r=i.queue,o=wE.bind(null,Ce,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:em,useDeferredValue:function(i,r){var o=Sn();return tm(o,i,r)},useTransition:function(){var i=Zp(!1);return i=yE.bind(null,Ce,i.queue,!0,!1),Sn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ce,f=Sn();if(Qe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),lt===null)throw Error(s(349));(Fe&124)!==0||Kv(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,uE(Xv.bind(null,u,p,i),[i]),u.flags|=2048,Co(9,Nh(),Yv.bind(null,u,p,o,r),null),o},useId:function(){var i=Sn(),r=lt.identifierPrefix;if(Qe){var o=cs,u=us;o=(u&~(1<<32-un(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=Rh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=f1++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:im,useFormState:sE,useActionState:sE,useOptimistic:function(i){var r=Sn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=sm.bind(null,Ce,!0,o),o.dispatch=r,[i,r]},useMemoCache:Xp,useCacheRefresh:function(){return Sn().memoizedState=_1.bind(null,Ce)}},CE={readContext:cn,use:Ch,useCallback:mE,useContext:cn,useEffect:cE,useImperativeHandle:pE,useInsertionEffect:hE,useLayoutEffect:fE,useMemo:gE,useReducer:Ih,useRef:lE,useState:function(){return Ih(ds)},useDebugValue:em,useDeferredValue:function(i,r){var o=Ot();return _E(o,tt.memoizedState,i,r)},useTransition:function(){var i=Ih(ds)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:cu(i),r]},useSyncExternalStore:Qv,useId:TE,useHostTransitionStatus:im,useFormState:rE,useActionState:rE,useOptimistic:function(i,r){var o=Ot();return Zv(o,tt,i,r)},useMemoCache:Xp,useCacheRefresh:SE},v1={readContext:cn,use:Ch,useCallback:mE,useContext:cn,useEffect:cE,useImperativeHandle:pE,useInsertionEffect:hE,useLayoutEffect:fE,useMemo:gE,useReducer:Wp,useRef:lE,useState:function(){return Wp(ds)},useDebugValue:em,useDeferredValue:function(i,r){var o=Ot();return tt===null?tm(o,i,r):_E(o,tt.memoizedState,i,r)},useTransition:function(){var i=Wp(ds)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:cu(i),r]},useSyncExternalStore:Qv,useId:TE,useHostTransitionStatus:im,useFormState:oE,useActionState:oE,useOptimistic:function(i,r){var o=Ot();return tt!==null?Zv(o,tt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Xp,useCacheRefresh:SE},Io=null,du=0;function Mh(i){var r=du;return du+=1,Io===null&&(Io=[]),Uv(Io,i,r)}function pu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function kh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function IE(i){var r=i._init;return r(i._payload)}function NE(i){function r(V,x){if(i){var z=V.deletions;z===null?(V.deletions=[x],V.flags|=16):z.push(x)}}function o(V,x){if(!i)return null;for(;x!==null;)r(V,x),x=x.sibling;return null}function u(V){for(var x=new Map;V!==null;)V.key!==null?x.set(V.key,V):x.set(V.index,V),V=V.sibling;return x}function f(V,x){return V=ls(V,x),V.index=0,V.sibling=null,V}function p(V,x,z){return V.index=z,i?(z=V.alternate,z!==null?(z=z.index,z<x?(V.flags|=67108866,x):z):(V.flags|=67108866,x)):(V.flags|=1048576,x)}function E(V){return i&&V.alternate===null&&(V.flags|=67108866),V}function w(V,x,z,X){return x===null||x.tag!==6?(x=bp(z,V.mode,X),x.return=V,x):(x=f(x,z),x.return=V,x)}function R(V,x,z,X){var ue=z.type;return ue===U?Y(V,x,z.props.children,X,z.key):x!==null&&(x.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===b&&IE(ue)===x.type)?(x=f(x,z.props),pu(x,z),x.return=V,x):(x=gh(z.type,z.key,z.props,null,V.mode,X),pu(x,z),x.return=V,x)}function B(V,x,z,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=Rp(z,V.mode,X),x.return=V,x):(x=f(x,z.children||[]),x.return=V,x)}function Y(V,x,z,X,ue){return x===null||x.tag!==7?(x=fa(z,V.mode,X,ue),x.return=V,x):(x=f(x,z),x.return=V,x)}function W(V,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=bp(""+x,V.mode,z),x.return=V,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case S:return z=gh(x.type,x.key,x.props,null,V.mode,z),pu(z,x),z.return=V,z;case O:return x=Rp(x,V.mode,z),x.return=V,x;case b:var X=x._init;return x=X(x._payload),W(V,x,z)}if(gt(x)||P(x))return x=fa(x,V.mode,z,null),x.return=V,x;if(typeof x.then=="function")return W(V,Mh(x),z);if(x.$$typeof===re)return W(V,Eh(V,x),z);kh(V,x)}return null}function q(V,x,z,X){var ue=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ue!==null?null:w(V,x,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===ue?R(V,x,z,X):null;case O:return z.key===ue?B(V,x,z,X):null;case b:return ue=z._init,z=ue(z._payload),q(V,x,z,X)}if(gt(z)||P(z))return ue!==null?null:Y(V,x,z,X,null);if(typeof z.then=="function")return q(V,x,Mh(z),X);if(z.$$typeof===re)return q(V,x,Eh(V,z),X);kh(V,z)}return null}function F(V,x,z,X,ue){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return V=V.get(z)||null,w(x,V,""+X,ue);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return V=V.get(X.key===null?z:X.key)||null,R(x,V,X,ue);case O:return V=V.get(X.key===null?z:X.key)||null,B(x,V,X,ue);case b:var xe=X._init;return X=xe(X._payload),F(V,x,z,X,ue)}if(gt(X)||P(X))return V=V.get(z)||null,Y(x,V,X,ue,null);if(typeof X.then=="function")return F(V,x,z,Mh(X),ue);if(X.$$typeof===re)return F(V,x,z,Eh(x,X),ue);kh(x,X)}return null}function Ee(V,x,z,X){for(var ue=null,xe=null,he=x,_e=x=0,Yt=null;he!==null&&_e<z.length;_e++){he.index>_e?(Yt=he,he=null):Yt=he.sibling;var He=q(V,he,z[_e],X);if(He===null){he===null&&(he=Yt);break}i&&he&&He.alternate===null&&r(V,he),x=p(He,x,_e),xe===null?ue=He:xe.sibling=He,xe=He,he=Yt}if(_e===z.length)return o(V,he),Qe&&pa(V,_e),ue;if(he===null){for(;_e<z.length;_e++)he=W(V,z[_e],X),he!==null&&(x=p(he,x,_e),xe===null?ue=he:xe.sibling=he,xe=he);return Qe&&pa(V,_e),ue}for(he=u(he);_e<z.length;_e++)Yt=F(he,V,_e,z[_e],X),Yt!==null&&(i&&Yt.alternate!==null&&he.delete(Yt.key===null?_e:Yt.key),x=p(Yt,x,_e),xe===null?ue=Yt:xe.sibling=Yt,xe=Yt);return i&&he.forEach(function(hr){return r(V,hr)}),Qe&&pa(V,_e),ue}function ge(V,x,z,X){if(z==null)throw Error(s(151));for(var ue=null,xe=null,he=x,_e=x=0,Yt=null,He=z.next();he!==null&&!He.done;_e++,He=z.next()){he.index>_e?(Yt=he,he=null):Yt=he.sibling;var hr=q(V,he,He.value,X);if(hr===null){he===null&&(he=Yt);break}i&&he&&hr.alternate===null&&r(V,he),x=p(hr,x,_e),xe===null?ue=hr:xe.sibling=hr,xe=hr,he=Yt}if(He.done)return o(V,he),Qe&&pa(V,_e),ue;if(he===null){for(;!He.done;_e++,He=z.next())He=W(V,He.value,X),He!==null&&(x=p(He,x,_e),xe===null?ue=He:xe.sibling=He,xe=He);return Qe&&pa(V,_e),ue}for(he=u(he);!He.done;_e++,He=z.next())He=F(he,V,_e,He.value,X),He!==null&&(i&&He.alternate!==null&&he.delete(He.key===null?_e:He.key),x=p(He,x,_e),xe===null?ue=He:xe.sibling=He,xe=He);return i&&he.forEach(function(EI){return r(V,EI)}),Qe&&pa(V,_e),ue}function it(V,x,z,X){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var ue=z.key;x!==null;){if(x.key===ue){if(ue=z.type,ue===U){if(x.tag===7){o(V,x.sibling),X=f(x,z.props.children),X.return=V,V=X;break e}}else if(x.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===b&&IE(ue)===x.type){o(V,x.sibling),X=f(x,z.props),pu(X,z),X.return=V,V=X;break e}o(V,x);break}else r(V,x);x=x.sibling}z.type===U?(X=fa(z.props.children,V.mode,X,z.key),X.return=V,V=X):(X=gh(z.type,z.key,z.props,null,V.mode,X),pu(X,z),X.return=V,V=X)}return E(V);case O:e:{for(ue=z.key;x!==null;){if(x.key===ue)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){o(V,x.sibling),X=f(x,z.children||[]),X.return=V,V=X;break e}else{o(V,x);break}else r(V,x);x=x.sibling}X=Rp(z,V.mode,X),X.return=V,V=X}return E(V);case b:return ue=z._init,z=ue(z._payload),it(V,x,z,X)}if(gt(z))return Ee(V,x,z,X);if(P(z)){if(ue=P(z),typeof ue!="function")throw Error(s(150));return z=ue.call(z),ge(V,x,z,X)}if(typeof z.then=="function")return it(V,x,Mh(z),X);if(z.$$typeof===re)return it(V,x,Eh(V,z),X);kh(V,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,x!==null&&x.tag===6?(o(V,x.sibling),X=f(x,z),X.return=V,V=X):(o(V,x),X=bp(z,V.mode,X),X.return=V,V=X),E(V)):o(V,x)}return function(V,x,z,X){try{du=0;var ue=it(V,x,z,X);return Io=null,ue}catch(he){if(he===su||he===Sh)throw he;var xe=Pn(29,he,null,V.mode);return xe.lanes=X,xe.return=V,xe}finally{}}}var No=NE(!0),DE=NE(!1),ei=J(null),Mi=null;function $s(i){var r=i.alternate;ee(qt,qt.current&1),ee(ei,i),Mi===null&&(r===null||Ao.current!==null||r.memoizedState!==null)&&(Mi=i)}function OE(i){if(i.tag===22){if(ee(qt,qt.current),ee(ei,i),Mi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Mi=i)}}else Ws()}function Ws(){ee(qt,qt.current),ee(ei,ei.current)}function ps(i){se(ei),Mi===i&&(Mi=null),se(qt)}var qt=J(0);function Ph(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Ym(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function rm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var am={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=zn(),f=Ks(u);f.payload=r,o!=null&&(f.callback=o),r=Ys(i,f,u),r!==null&&(Bn(r,i,u),au(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=zn(),f=Ks(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Ys(i,f,u),r!==null&&(Bn(r,i,u),au(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=zn(),u=Ks(o);u.tag=2,r!=null&&(u.callback=r),r=Ys(i,u,o),r!==null&&(Bn(r,i,o),au(r,i,o))}};function xE(i,r,o,u,f,p,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,p,E):r.prototype&&r.prototype.isPureReactComponent?!$l(o,u)||!$l(f,p):!0}function ME(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&am.enqueueReplaceState(r,r.state,null)}function Ta(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Vh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function kE(i){Vh(i)}function PE(i){console.error(i)}function VE(i){Vh(i)}function Lh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function LE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function om(i,r,o){return o=Ks(o),o.tag=3,o.payload={element:null},o.callback=function(){Lh(i,r)},o}function UE(i){return i=Ks(i),i.tag=3,i}function zE(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;i.payload=function(){return f(p)},i.callback=function(){LE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){LE(r,o,u),typeof f!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function E1(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&tu(r,o,f,!0),o=ei.current,o!==null){switch(o.tag){case 13:return Mi===null?Om():o.alternate===null&&vt===0&&(vt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Vp?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Mm(i,u,f)),!1;case 22:return o.flags|=65536,u===Vp?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Mm(i,u,f)),!1}throw Error(s(435,o.tag))}return Mm(i,u,f),Om(),!1}if(Qe)return r=ei.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Np&&(i=Error(s(422),{cause:u}),eu($n(i,o)))):(u!==Np&&(r=Error(s(423),{cause:u}),eu($n(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=$n(u,o),f=om(i.stateNode,u,f),zp(i,f),vt!==4&&(vt=2)),!1;var p=Error(s(520),{cause:u});if(p=$n(p,o),Tu===null?Tu=[p]:Tu.push(p),vt!==4&&(vt=2),r===null)return!0;u=$n(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=om(o.stateNode,u,i),zp(o,i),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ir===null||!ir.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=UE(f),zE(f,i,o,u),zp(o,f),!1}o=o.return}while(o!==null);return!1}var BE=Error(s(461)),Qt=!1;function nn(i,r,o,u){r.child=i===null?DE(r,null,o,u):No(r,i.child,o,u)}function qE(i,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return ya(r),u=Hp(i,r,o,E,p,f),w=Gp(),i!==null&&!Qt?(Qp(i,r,f),ms(i,r,f)):(Qe&&w&&Cp(r),r.flags|=1,nn(i,r,u,f),r.child)}function FE(i,r,o,u,f){if(i===null){var p=o.type;return typeof p=="function"&&!Ap(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,jE(i,r,p,u,f)):(i=gh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(p=i.child,!mm(i,f)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:$l,o(E,u)&&i.ref===r.ref)return ms(i,r,f)}return r.flags|=1,i=ls(p,u),i.ref=r.ref,i.return=r,r.child=i}function jE(i,r,o,u,f){if(i!==null){var p=i.memoizedProps;if($l(p,u)&&i.ref===r.ref)if(Qt=!1,r.pendingProps=u=p,mm(i,f))(i.flags&131072)!==0&&(Qt=!0);else return r.lanes=i.lanes,ms(i,r,f)}return lm(i,r,o,u,f)}function HE(i,r,o){var u=r.pendingProps,f=u.children,p=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,i!==null){for(f=r.child=i.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return GE(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Th(r,p!==null?p.cachePool:null),p!==null?jv(r,p):qp(),OE(r);else return r.lanes=r.childLanes=536870912,GE(i,r,p!==null?p.baseLanes|o:o,o)}else p!==null?(Th(r,p.cachePool),jv(r,p),Ws(),r.memoizedState=null):(i!==null&&Th(r,null),qp(),Ws());return nn(i,r,f,o),r.child}function GE(i,r,o,u){var f=Pp();return f=f===null?null:{parent:Bt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&Th(r,null),qp(),OE(r),i!==null&&tu(i,r,u,!0),null}function Uh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function lm(i,r,o,u,f){return ya(r),o=Hp(i,r,o,u,void 0,f),u=Gp(),i!==null&&!Qt?(Qp(i,r,f),ms(i,r,f)):(Qe&&u&&Cp(r),r.flags|=1,nn(i,r,o,f),r.child)}function QE(i,r,o,u,f,p){return ya(r),r.updateQueue=null,o=Gv(r,u,o,f),Hv(i),u=Gp(),i!==null&&!Qt?(Qp(i,r,p),ms(i,r,p)):(Qe&&u&&Cp(r),r.flags|=1,nn(i,r,o,p),r.child)}function KE(i,r,o,u,f){if(ya(r),r.stateNode===null){var p=vo,E=o.contextType;typeof E=="object"&&E!==null&&(p=cn(E)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=am,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},Lp(r),E=o.contextType,p.context=typeof E=="object"&&E!==null?cn(E):vo,p.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(rm(r,o,E,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&am.enqueueReplaceState(p,p.state,null),lu(r,u,p,f),ou(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){p=r.stateNode;var w=r.memoizedProps,R=Ta(o,w);p.props=R;var B=p.context,Y=o.contextType;E=vo,typeof Y=="object"&&Y!==null&&(E=cn(Y));var W=o.getDerivedStateFromProps;Y=typeof W=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,Y||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||B!==E)&&ME(r,p,u,E),Qs=!1;var q=r.memoizedState;p.state=q,lu(r,u,p,f),ou(),B=r.memoizedState,w||q!==B||Qs?(typeof W=="function"&&(rm(r,o,W,u),B=r.memoizedState),(R=Qs||xE(r,o,R,u,q,B,E))?(Y||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),p.props=u,p.state=B,p.context=E,u=R):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,Up(i,r),E=r.memoizedProps,Y=Ta(o,E),p.props=Y,W=r.pendingProps,q=p.context,B=o.contextType,R=vo,typeof B=="object"&&B!==null&&(R=cn(B)),w=o.getDerivedStateFromProps,(B=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==W||q!==R)&&ME(r,p,u,R),Qs=!1,q=r.memoizedState,p.state=q,lu(r,u,p,f),ou();var F=r.memoizedState;E!==W||q!==F||Qs||i!==null&&i.dependencies!==null&&vh(i.dependencies)?(typeof w=="function"&&(rm(r,o,w,u),F=r.memoizedState),(Y=Qs||xE(r,o,Y,u,q,F,R)||i!==null&&i.dependencies!==null&&vh(i.dependencies))?(B||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,F,R),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,F,R)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=F),p.props=u,p.state=F,p.context=R,u=Y):(typeof p.componentDidUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=1024),u=!1)}return p=u,Uh(i,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,i!==null&&u?(r.child=No(r,i.child,null,f),r.child=No(r,null,o,f)):nn(i,r,o,f),r.memoizedState=p.state,i=r.child):i=ms(i,r,f),i}function YE(i,r,o,u){return Jl(),r.flags|=256,nn(i,r,o,u),r.child}var um={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cm(i){return{baseLanes:i,cachePool:Pv()}}function hm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ti),i}function XE(i,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,E;if((E=p)||(E=i!==null&&i.memoizedState===null?!1:(qt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Qe){if(f?$s(r):Ws(),Qe){var w=yt,R;if(R=w){e:{for(R=w,w=xi;R.nodeType!==8;){if(!w){w=null;break e}if(R=hi(R.nextSibling),R===null){w=null;break e}}w=R}w!==null?(r.memoizedState={dehydrated:w,treeContext:da!==null?{id:us,overflow:cs}:null,retryLane:536870912,hydrationErrors:null},R=Pn(18,null,null,0),R.stateNode=w,R.return=r,r.child=R,En=r,yt=null,R=!0):R=!1}R||ga(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Ym(w)?r.lanes=32:r.lanes=536870912,null;ps(r)}return w=u.children,u=u.fallback,f?(Ws(),f=r.mode,w=zh({mode:"hidden",children:w},f),u=fa(u,f,o,null),w.return=r,u.return=r,w.sibling=u,r.child=w,f=r.child,f.memoizedState=cm(o),f.childLanes=hm(i,E,o),r.memoizedState=um,u):($s(r),fm(r,w))}if(R=i.memoizedState,R!==null&&(w=R.dehydrated,w!==null)){if(p)r.flags&256?($s(r),r.flags&=-257,r=dm(i,r,o)):r.memoizedState!==null?(Ws(),r.child=i.child,r.flags|=128,r=null):(Ws(),f=u.fallback,w=r.mode,u=zh({mode:"visible",children:u.children},w),f=fa(f,w,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,No(r,i.child,null,o),u=r.child,u.memoizedState=cm(o),u.childLanes=hm(i,E,o),r.memoizedState=um,r=f);else if($s(r),Ym(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var B=E.dgst;E=B,u=Error(s(419)),u.stack="",u.digest=E,eu({value:u,source:null,stack:null}),r=dm(i,r,o)}else if(Qt||tu(i,r,o,!1),E=(o&i.childLanes)!==0,Qt||E){if(E=lt,E!==null&&(u=o&-o,u=(u&42)!==0?1:Us(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,yo(i,u),Bn(E,i,u),BE;w.data==="$?"||Om(),r=dm(i,r,o)}else w.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=R.treeContext,yt=hi(w.nextSibling),En=r,Qe=!0,ma=null,xi=!1,i!==null&&(Zn[Jn++]=us,Zn[Jn++]=cs,Zn[Jn++]=da,us=i.id,cs=i.overflow,da=r),r=fm(r,u.children),r.flags|=4096);return r}return f?(Ws(),f=u.fallback,w=r.mode,R=i.child,B=R.sibling,u=ls(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,B!==null?f=ls(B,f):(f=fa(f,w,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,w=i.child.memoizedState,w===null?w=cm(o):(R=w.cachePool,R!==null?(B=Bt._currentValue,R=R.parent!==B?{parent:B,pool:B}:R):R=Pv(),w={baseLanes:w.baseLanes|o,cachePool:R}),f.memoizedState=w,f.childLanes=hm(i,E,o),r.memoizedState=um,u):($s(r),o=i.child,i=o.sibling,o=ls(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function fm(i,r){return r=zh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function zh(i,r){return i=Pn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function dm(i,r,o){return No(r,i.child,null,o),i=fm(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function $E(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Op(i.return,r,o)}function pm(i,r,o,u,f){var p=i.memoizedState;p===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function WE(i,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(nn(i,r,u.children,o),u=qt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&$E(i,o,r);else if(i.tag===19)$E(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ee(qt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Ph(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),pm(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Ph(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}pm(r,!0,o,null,p);break;case"together":pm(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ms(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),nr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(tu(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ls(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ls(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function mm(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&vh(i)))}function T1(i,r,o){switch(r.tag){case 3:ot(r,r.stateNode.containerInfo),Gs(r,Bt,i.memoizedState.cache),Jl();break;case 27:case 5:Ls(r);break;case 4:ot(r,r.stateNode.containerInfo);break;case 10:Gs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?($s(r),r.flags|=128,null):(o&r.child.childLanes)!==0?XE(i,r,o):($s(r),i=ms(i,r,o),i!==null?i.sibling:null);$s(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(tu(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return WE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(qt,qt.current),u)break;return null;case 22:case 23:return r.lanes=0,HE(i,r,o);case 24:Gs(r,Bt,i.memoizedState.cache)}return ms(i,r,o)}function ZE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Qt=!0;else{if(!mm(i,o)&&(r.flags&128)===0)return Qt=!1,T1(i,r,o);Qt=(i.flags&131072)!==0}else Qt=!1,Qe&&(r.flags&1048576)!==0&&Iv(r,yh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Ap(u)?(i=Ta(u,i),r.tag=1,r=KE(null,r,u,i,o)):(r.tag=0,r=lm(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===ye){r.tag=11,r=qE(null,r,u,i,o);break e}else if(f===N){r.tag=14,r=FE(null,r,u,i,o);break e}}throw r=Jt(u)||u,Error(s(306,r,""))}}return r;case 0:return lm(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=Ta(u,r.pendingProps),KE(i,r,u,f,o);case 3:e:{if(ot(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var p=r.memoizedState;f=p.element,Up(i,r),lu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Gs(r,Bt,u),u!==p.cache&&xp(r,[Bt],o,!0),ou(),u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=YE(i,r,u,o);break e}else if(u!==f){f=$n(Error(s(424)),r),eu(f),r=YE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(yt=hi(i.firstChild),En=r,Qe=!0,ma=null,xi=!0,o=DE(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Jl(),u===f){r=ms(i,r,o);break e}nn(i,r,u,o)}r=r.child}return r;case 26:return Uh(i,r),i===null?(o=n0(r.type,null,r.pendingProps,null))?r.memoizedState=o:Qe||(o=r.type,i=r.pendingProps,u=Jh(we.current).createElement(o),u[Lt]=r,u[It]=i,rn(u,o,i),wt(u),r.stateNode=u):r.memoizedState=n0(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ls(r),i===null&&Qe&&(u=r.stateNode=JT(r.type,r.pendingProps,we.current),En=r,xi=!0,f=yt,ar(r.type)?(Xm=f,yt=hi(u.firstChild)):yt=f),nn(i,r,r.pendingProps.children,o),Uh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Qe&&((f=u=yt)&&(u=X1(u,r.type,r.pendingProps,xi),u!==null?(r.stateNode=u,En=r,yt=hi(u.firstChild),xi=!1,f=!0):f=!1),f||ga(r)),Ls(r),f=r.type,p=r.pendingProps,E=i!==null?i.memoizedProps:null,u=p.children,Gm(f,p)?u=null:E!==null&&Gm(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Hp(i,r,d1,null,null,o),Du._currentValue=f),Uh(i,r),nn(i,r,u,o),r.child;case 6:return i===null&&Qe&&((i=o=yt)&&(o=$1(o,r.pendingProps,xi),o!==null?(r.stateNode=o,En=r,yt=null,i=!0):i=!1),i||ga(r)),null;case 13:return XE(i,r,o);case 4:return ot(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=No(r,null,u,o):nn(i,r,u,o),r.child;case 11:return qE(i,r,r.type,r.pendingProps,o);case 7:return nn(i,r,r.pendingProps,o),r.child;case 8:return nn(i,r,r.pendingProps.children,o),r.child;case 12:return nn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Gs(r,r.type,u.value),nn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ya(r),f=cn(f),u=u(f),r.flags|=1,nn(i,r,u,o),r.child;case 14:return FE(i,r,r.type,r.pendingProps,o);case 15:return jE(i,r,r.type,r.pendingProps,o);case 19:return WE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=zh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ls(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return HE(i,r,o);case 24:return ya(r),u=cn(Bt),i===null?(f=Pp(),f===null&&(f=lt,p=Mp(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},Lp(r),Gs(r,Bt,f)):((i.lanes&o)!==0&&(Up(i,r),lu(r,null,null,o),ou()),f=i.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Gs(r,Bt,u)):(u=p.cache,Gs(r,Bt,u),u!==f.cache&&xp(r,[Bt],o,!0))),nn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function gs(i){i.flags|=4}function JE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!o0(r)){if(r=ei.current,r!==null&&((Fe&4194048)===Fe?Mi!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||r!==Mi))throw ru=Vp,Vv;i.flags|=8192}}function Bh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?xl():536870912,i.lanes|=r,Mo|=r)}function mu(i,r){if(!Qe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function pt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function S1(i,r,o){var u=r.pendingProps;switch(Ip(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(r),null;case 1:return pt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),fs(Bt),Ei(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Zl(r)?gs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ov())),pt(r),null;case 26:return o=r.memoizedState,i===null?(gs(r),o!==null?(pt(r),JE(r,o)):(pt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(gs(r),pt(r),JE(r,o)):(pt(r),r.flags&=-16777217):(i.memoizedProps!==u&&gs(r),pt(r),r.flags&=-16777217),null;case 27:Xi(r),o=we.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&gs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return pt(r),null}i=me.current,Zl(r)?Nv(r):(i=JT(f,u,o),r.stateNode=i,gs(r))}return pt(r),null;case 5:if(Xi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&gs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return pt(r),null}if(i=me.current,Zl(r))Nv(r);else{switch(f=Jh(we.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Lt]=r,i[It]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(rn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&gs(r)}}return pt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&gs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=we.current,Zl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=En,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Lt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||QT(i.nodeValue,o)),i||ga(r)}else i=Jh(i).createTextNode(u),i[Lt]=r,r.stateNode=i}return pt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Zl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Lt]=r}else Jl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pt(r),f=!1}else f=Ov(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(ps(r),r):(ps(r),null)}if(ps(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Bh(r,r.updateQueue),pt(r),null;case 4:return Ei(),i===null&&Bm(r.stateNode.containerInfo),pt(r),null;case 10:return fs(r.type),pt(r),null;case 19:if(se(qt),f=r.memoizedState,f===null)return pt(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)mu(f,!1);else{if(vt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(p=Ph(i),p!==null){for(r.flags|=128,mu(f,!1),i=p.updateQueue,r.updateQueue=i,Bh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Cv(o,i),o=o.sibling;return ee(qt,qt.current&1|2),r.child}i=i.sibling}f.tail!==null&&Hn()>jh&&(r.flags|=128,u=!0,mu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Ph(p),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Bh(r,i),mu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Qe)return pt(r),null}else 2*Hn()-f.renderingStartTime>jh&&o!==536870912&&(r.flags|=128,u=!0,mu(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(i=f.last,i!==null?i.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Hn(),r.sibling=null,i=qt.current,ee(qt,u?i&1|2:i&1),r):(pt(r),null);case 22:case 23:return ps(r),Fp(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(pt(r),r.subtreeFlags&6&&(r.flags|=8192)):pt(r),o=r.updateQueue,o!==null&&Bh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&se(va),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),fs(Bt),pt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function w1(i,r){switch(Ip(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return fs(Bt),Ei(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Xi(r),null;case 13:if(ps(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Jl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return se(qt),null;case 4:return Ei(),null;case 10:return fs(r.type),null;case 22:case 23:return ps(r),Fp(),i!==null&&se(va),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return fs(Bt),null;case 25:return null;default:return null}}function eT(i,r){switch(Ip(r),r.tag){case 3:fs(Bt),Ei();break;case 26:case 27:case 5:Xi(r);break;case 4:Ei();break;case 13:ps(r);break;case 19:se(qt);break;case 10:fs(r.type);break;case 22:case 23:ps(r),Fp(),i!==null&&se(va);break;case 24:fs(Bt)}}function gu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==f)}}catch(w){rt(r,r.return,w)}}function Zs(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&i)===i){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=r;var R=o,B=w;try{B()}catch(Y){rt(f,R,Y)}}}u=u.next}while(u!==p)}}catch(Y){rt(r,r.return,Y)}}function tT(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Fv(r,o)}catch(u){rt(i,i.return,u)}}}function nT(i,r,o){o.props=Ta(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){rt(i,r,u)}}function _u(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){rt(i,r,f)}}function ki(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){rt(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){rt(i,r,f)}else o.current=null}function iT(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){rt(i,i.return,f)}}function gm(i,r,o){try{var u=i.stateNode;H1(u,i.type,o,r),u[It]=r}catch(f){rt(i,i.return,f)}}function sT(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&ar(i.type)||i.tag===4}function _m(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||sT(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&ar(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ym(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Zh));else if(u!==4&&(u===27&&ar(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(ym(i,r,o),i=i.sibling;i!==null;)ym(i,r,o),i=i.sibling}function qh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&ar(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(qh(i,r,o),i=i.sibling;i!==null;)qh(i,r,o),i=i.sibling}function rT(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);rn(r,u,o),r[Lt]=i,r[It]=o}catch(p){rt(i,i.return,p)}}var _s=!1,bt=!1,vm=!1,aT=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function A1(i,r){if(i=i.containerInfo,jm=af,i=_v(i),_p(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,w=-1,R=-1,B=0,Y=0,W=i,q=null;t:for(;;){for(var F;W!==o||f!==0&&W.nodeType!==3||(w=E+f),W!==p||u!==0&&W.nodeType!==3||(R=E+u),W.nodeType===3&&(E+=W.nodeValue.length),(F=W.firstChild)!==null;)q=W,W=F;for(;;){if(W===i)break t;if(q===o&&++B===f&&(w=E),q===p&&++Y===u&&(R=E),(F=W.nextSibling)!==null)break;W=q,q=W.parentNode}W=F}o=w===-1||R===-1?null:{start:w,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(Hm={focusedElem:i,selectionRange:o},af=!1,Kt=r;Kt!==null;)if(r=Kt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Kt=i;else for(;Kt!==null;){switch(r=Kt,p=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&p!==null){i=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Ee=Ta(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Ee,p),u.__reactInternalSnapshotBeforeUpdate=i}catch(ge){rt(o,o.return,ge)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Km(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Km(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Kt=i;break}Kt=r.return}}function oT(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Js(i,o),u&4&&gu(5,o);break;case 1:if(Js(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){rt(o,o.return,E)}else{var f=Ta(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){rt(o,o.return,E)}}u&64&&tT(o),u&512&&_u(o,o.return);break;case 3:if(Js(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Fv(i,r)}catch(E){rt(o,o.return,E)}}break;case 27:r===null&&u&4&&rT(o);case 26:case 5:Js(i,o),r===null&&u&4&&iT(o),u&512&&_u(o,o.return);break;case 12:Js(i,o);break;case 13:Js(i,o),u&4&&cT(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=M1.bind(null,o),W1(i,o))));break;case 22:if(u=o.memoizedState!==null||_s,!u){r=r!==null&&r.memoizedState!==null||bt,f=_s;var p=bt;_s=u,(bt=r)&&!p?er(i,o,(o.subtreeFlags&8772)!==0):Js(i,o),_s=f,bt=p}break;case 30:break;default:Js(i,o)}}function lT(i){var r=i.alternate;r!==null&&(i.alternate=null,lT(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&qs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var dt=null,wn=!1;function ys(i,r,o){for(o=o.child;o!==null;)uT(i,r,o),o=o.sibling}function uT(i,r,o){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(_t,o)}catch{}switch(o.tag){case 26:bt||ki(o,r),ys(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:bt||ki(o,r);var u=dt,f=wn;ar(o.type)&&(dt=o.stateNode,wn=!1),ys(i,r,o),Ru(o.stateNode),dt=u,wn=f;break;case 5:bt||ki(o,r);case 6:if(u=dt,f=wn,dt=null,ys(i,r,o),dt=u,wn=f,dt!==null)if(wn)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(o.stateNode)}catch(p){rt(o,r,p)}else try{dt.removeChild(o.stateNode)}catch(p){rt(o,r,p)}break;case 18:dt!==null&&(wn?(i=dt,WT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),ku(i)):WT(dt,o.stateNode));break;case 4:u=dt,f=wn,dt=o.stateNode.containerInfo,wn=!0,ys(i,r,o),dt=u,wn=f;break;case 0:case 11:case 14:case 15:bt||Zs(2,o,r),bt||Zs(4,o,r),ys(i,r,o);break;case 1:bt||(ki(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&nT(o,r,u)),ys(i,r,o);break;case 21:ys(i,r,o);break;case 22:bt=(u=bt)||o.memoizedState!==null,ys(i,r,o),bt=u;break;default:ys(i,r,o)}}function cT(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{ku(i)}catch(o){rt(r,r.return,o)}}function b1(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new aT),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new aT),r;default:throw Error(s(435,i.tag))}}function Em(i,r){var o=b1(i);r.forEach(function(u){var f=k1.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Vn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=i,E=r,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(ar(w.type)){dt=w.stateNode,wn=!1;break e}break;case 5:dt=w.stateNode,wn=!1;break e;case 3:case 4:dt=w.stateNode.containerInfo,wn=!0;break e}w=w.return}if(dt===null)throw Error(s(160));uT(p,E,f),dt=null,wn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)hT(r,i),r=r.sibling}var ci=null;function hT(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Vn(r,i),Ln(i),u&4&&(Zs(3,i,i.return),gu(3,i),Zs(5,i,i.return));break;case 1:Vn(r,i),Ln(i),u&512&&(bt||o===null||ki(o,o.return)),u&64&&_s&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ci;if(Vn(r,i),Ln(i),u&512&&(bt||o===null||ki(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[$r]||p[Lt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),rn(p,u,o),p[Lt]=i,wt(p),u=p;break e;case"link":var E=r0("link","href",f).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(p=E[w],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}p=f.createElement(u),rn(p,u,o),f.head.appendChild(p);break;case"meta":if(E=r0("meta","content",f).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(p=E[w],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}p=f.createElement(u),rn(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[Lt]=i,wt(p),u=p}i.stateNode=u}else a0(f,i.type,i.stateNode);else i.stateNode=s0(f,u,i.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?a0(f,i.type,i.stateNode):s0(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&gm(i,i.memoizedProps,o.memoizedProps)}break;case 27:Vn(r,i),Ln(i),u&512&&(bt||o===null||ki(o,o.return)),o!==null&&u&4&&gm(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Vn(r,i),Ln(i),u&512&&(bt||o===null||ki(o,o.return)),i.flags&32){f=i.stateNode;try{Qn(f,"")}catch(F){rt(i,i.return,F)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,gm(i,f,o!==null?o.memoizedProps:f)),u&1024&&(vm=!0);break;case 6:if(Vn(r,i),Ln(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(F){rt(i,i.return,F)}}break;case 3:if(nf=null,f=ci,ci=ef(r.containerInfo),Vn(r,i),ci=f,Ln(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ku(r.containerInfo)}catch(F){rt(i,i.return,F)}vm&&(vm=!1,fT(i));break;case 4:u=ci,ci=ef(i.stateNode.containerInfo),Vn(r,i),Ln(i),ci=u;break;case 12:Vn(r,i),Ln(i);break;case 13:Vn(r,i),Ln(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Rm=Hn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Em(i,u)));break;case 22:f=i.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,B=_s,Y=bt;if(_s=B||f,bt=Y||R,Vn(r,i),bt=Y,_s=B,Ln(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||R||_s||bt||Sa(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){R=o=r;try{if(p=R.stateNode,f)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=R.stateNode;var W=R.memoizedProps.style,q=W!=null&&W.hasOwnProperty("display")?W.display:null;w.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(F){rt(R,R.return,F)}}}else if(r.tag===6){if(o===null){R=r;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(F){rt(R,R.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Em(i,o))));break;case 19:Vn(r,i),Ln(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Em(i,u)));break;case 30:break;case 21:break;default:Vn(r,i),Ln(i)}}function Ln(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(sT(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,p=_m(i);qh(i,p,f);break;case 5:var E=o.stateNode;o.flags&32&&(Qn(E,""),o.flags&=-33);var w=_m(i);qh(i,w,E);break;case 3:case 4:var R=o.stateNode.containerInfo,B=_m(i);ym(i,B,R);break;default:throw Error(s(161))}}catch(Y){rt(i,i.return,Y)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function fT(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;fT(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Js(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)oT(i,r.alternate,r),r=r.sibling}function Sa(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Zs(4,r,r.return),Sa(r);break;case 1:ki(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&nT(r,r.return,o),Sa(r);break;case 27:Ru(r.stateNode);case 26:case 5:ki(r,r.return),Sa(r);break;case 22:r.memoizedState===null&&Sa(r);break;case 30:Sa(r);break;default:Sa(r)}i=i.sibling}}function er(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,p=r,E=p.flags;switch(p.tag){case 0:case 11:case 15:er(f,p,o),gu(4,p);break;case 1:if(er(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){rt(u,u.return,B)}if(u=p,f=u.updateQueue,f!==null){var w=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)qv(R[f],w)}catch(B){rt(u,u.return,B)}}o&&E&64&&tT(p),_u(p,p.return);break;case 27:rT(p);case 26:case 5:er(f,p,o),o&&u===null&&E&4&&iT(p),_u(p,p.return);break;case 12:er(f,p,o);break;case 13:er(f,p,o),o&&E&4&&cT(f,p);break;case 22:p.memoizedState===null&&er(f,p,o),_u(p,p.return);break;case 30:break;default:er(f,p,o)}r=r.sibling}}function Tm(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&nu(o))}function Sm(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&nu(i))}function Pi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)dT(i,r,o,u),r=r.sibling}function dT(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Pi(i,r,o,u),f&2048&&gu(9,r);break;case 1:Pi(i,r,o,u);break;case 3:Pi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&nu(i)));break;case 12:if(f&2048){Pi(i,r,o,u),i=r.stateNode;try{var p=r.memoizedProps,E=p.id,w=p.onPostCommit;typeof w=="function"&&w(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(R){rt(r,r.return,R)}}else Pi(i,r,o,u);break;case 13:Pi(i,r,o,u);break;case 23:break;case 22:p=r.stateNode,E=r.alternate,r.memoizedState!==null?p._visibility&2?Pi(i,r,o,u):yu(i,r):p._visibility&2?Pi(i,r,o,u):(p._visibility|=2,Do(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Tm(E,r);break;case 24:Pi(i,r,o,u),f&2048&&Sm(r.alternate,r);break;default:Pi(i,r,o,u)}}function Do(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=i,E=r,w=o,R=u,B=E.flags;switch(E.tag){case 0:case 11:case 15:Do(p,E,w,R,f),gu(8,E);break;case 23:break;case 22:var Y=E.stateNode;E.memoizedState!==null?Y._visibility&2?Do(p,E,w,R,f):yu(p,E):(Y._visibility|=2,Do(p,E,w,R,f)),f&&B&2048&&Tm(E.alternate,E);break;case 24:Do(p,E,w,R,f),f&&B&2048&&Sm(E.alternate,E);break;default:Do(p,E,w,R,f)}r=r.sibling}}function yu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:yu(o,u),f&2048&&Tm(u.alternate,u);break;case 24:yu(o,u),f&2048&&Sm(u.alternate,u);break;default:yu(o,u)}r=r.sibling}}var vu=8192;function Oo(i){if(i.subtreeFlags&vu)for(i=i.child;i!==null;)pT(i),i=i.sibling}function pT(i){switch(i.tag){case 26:Oo(i),i.flags&vu&&i.memoizedState!==null&&cI(ci,i.memoizedState,i.memoizedProps);break;case 5:Oo(i);break;case 3:case 4:var r=ci;ci=ef(i.stateNode.containerInfo),Oo(i),ci=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=vu,vu=16777216,Oo(i),vu=r):Oo(i));break;default:Oo(i)}}function mT(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Eu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Kt=u,_T(u,i)}mT(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)gT(i),i=i.sibling}function gT(i){switch(i.tag){case 0:case 11:case 15:Eu(i),i.flags&2048&&Zs(9,i,i.return);break;case 3:Eu(i);break;case 12:Eu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Fh(i)):Eu(i);break;default:Eu(i)}}function Fh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Kt=u,_T(u,i)}mT(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Zs(8,r,r.return),Fh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Fh(r));break;default:Fh(r)}i=i.sibling}}function _T(i,r){for(;Kt!==null;){var o=Kt;switch(o.tag){case 0:case 11:case 15:Zs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:nu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Kt=u;else e:for(o=i;Kt!==null;){u=Kt;var f=u.sibling,p=u.return;if(lT(u),u===o){Kt=null;break e}if(f!==null){f.return=p,Kt=f;break e}Kt=p}}}var R1={getCacheForType:function(i){var r=cn(Bt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},C1=typeof WeakMap=="function"?WeakMap:Map,We=0,lt=null,Pe=null,Fe=0,Ze=0,Un=null,tr=!1,xo=!1,wm=!1,vs=0,vt=0,nr=0,wa=0,Am=0,ti=0,Mo=0,Tu=null,An=null,bm=!1,Rm=0,jh=1/0,Hh=null,ir=null,sn=0,sr=null,ko=null,Po=0,Cm=0,Im=null,yT=null,Su=0,Nm=null;function zn(){if((We&2)!==0&&Fe!==0)return Fe&-Fe;if(K.T!==null){var i=So;return i!==0?i:Vm()}return zs()}function vT(){ti===0&&(ti=(Fe&536870912)===0||Qe?Ol():536870912);var i=ei.current;return i!==null&&(i.flags|=32),ti}function Bn(i,r,o){(i===lt&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(Vo(i,0),rr(i,Fe,ti,!1)),Wi(i,o),((We&2)===0||i!==lt)&&(i===lt&&((We&2)===0&&(wa|=o),vt===4&&rr(i,Fe,ti,!1)),Vi(i))}function ET(i,r,o){if((We&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Xr(i,r),f=u?D1(i,r):xm(i,r,!0),p=u;do{if(f===0){xo&&!u&&rr(i,r,0,!1);break}else{if(o=i.current.alternate,p&&!I1(o)){f=xm(i,r,!1),p=!1;continue}if(f===2){if(p=r,i.errorRecoveryDisabledLanes&p)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var w=i;f=Tu;var R=w.current.memoizedState.isDehydrated;if(R&&(Vo(w,E).flags|=256),E=xm(w,E,!1),E!==2){if(wm&&!R){w.errorRecoveryDisabledLanes|=p,wa|=p,f=4;break e}p=An,An=f,p!==null&&(An===null?An=p:An.push.apply(An,p))}f=E}if(p=!1,f!==2)continue}}if(f===1){Vo(i,0),rr(i,r,0,!0);break}e:{switch(u=i,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:rr(u,r,ti,!tr);break e;case 2:An=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Rm+300-Hn(),10<f)){if(rr(u,r,ti,!tr),Za(u,0,!0)!==0)break e;u.timeoutHandle=XT(TT.bind(null,u,o,An,Hh,bm,r,ti,wa,Mo,tr,p,2,-0,0),f);break e}TT(u,o,An,Hh,bm,r,ti,wa,Mo,tr,p,0,-0,0)}}break}while(!0);Vi(i)}function TT(i,r,o,u,f,p,E,w,R,B,Y,W,q,F){if(i.timeoutHandle=-1,W=r.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(Nu={stylesheets:null,count:0,unsuspend:uI},pT(r),W=hI(),W!==null)){i.cancelPendingCommit=W(IT.bind(null,i,r,p,o,u,f,E,w,R,Y,1,q,F)),rr(i,p,E,!B);return}IT(i,r,p,o,u,f,E,w,R)}function I1(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!kn(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function rr(i,r,o,u){r&=~Am,r&=~wa,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var p=31-un(f),E=1<<p;u[p]=-1,f&=~E}o!==0&&Ti(i,o,r)}function Gh(){return(We&6)===0?(wu(0),!1):!0}function Dm(){if(Pe!==null){if(Ze===0)var i=Pe.return;else i=Pe,hs=_a=null,Kp(i),Io=null,du=0,i=Pe;for(;i!==null;)eT(i.alternate,i),i=i.return;Pe=null}}function Vo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,Q1(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Dm(),lt=i,Pe=o=ls(i.current,null),Fe=r,Ze=0,Un=null,tr=!1,xo=Xr(i,r),wm=!1,Mo=ti=Am=wa=nr=vt=0,An=Tu=null,bm=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-un(u),p=1<<f;r|=i[f],u&=~p}return vs=r,dh(),o}function ST(i,r){Ce=null,K.H=xh,r===su||r===Sh?(r=zv(),Ze=3):r===Vv?(r=zv(),Ze=4):Ze=r===BE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Un=r,Pe===null&&(vt=1,Lh(i,$n(r,i.current)))}function wT(){var i=K.H;return K.H=xh,i===null?xh:i}function AT(){var i=K.A;return K.A=R1,i}function Om(){vt=4,tr||(Fe&4194048)!==Fe&&ei.current!==null||(xo=!0),(nr&134217727)===0&&(wa&134217727)===0||lt===null||rr(lt,Fe,ti,!1)}function xm(i,r,o){var u=We;We|=2;var f=wT(),p=AT();(lt!==i||Fe!==r)&&(Hh=null,Vo(i,r)),r=!1;var E=vt;e:do try{if(Ze!==0&&Pe!==null){var w=Pe,R=Un;switch(Ze){case 8:Dm(),E=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(r=!0);var B=Ze;if(Ze=0,Un=null,Lo(i,w,R,B),o&&xo){E=0;break e}break;default:B=Ze,Ze=0,Un=null,Lo(i,w,R,B)}}N1(),E=vt;break}catch(Y){ST(i,Y)}while(!0);return r&&i.shellSuspendCounter++,hs=_a=null,We=u,K.H=f,K.A=p,Pe===null&&(lt=null,Fe=0,dh()),E}function N1(){for(;Pe!==null;)bT(Pe)}function D1(i,r){var o=We;We|=2;var u=wT(),f=AT();lt!==i||Fe!==r?(Hh=null,jh=Hn()+500,Vo(i,r)):xo=Xr(i,r);e:do try{if(Ze!==0&&Pe!==null){r=Pe;var p=Un;t:switch(Ze){case 1:Ze=0,Un=null,Lo(i,r,p,1);break;case 2:case 9:if(Lv(p)){Ze=0,Un=null,RT(r);break}r=function(){Ze!==2&&Ze!==9||lt!==i||(Ze=7),Vi(i)},p.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:Lv(p)?(Ze=0,Un=null,RT(r)):(Ze=0,Un=null,Lo(i,r,p,7));break;case 5:var E=null;switch(Pe.tag){case 26:E=Pe.memoizedState;case 5:case 27:var w=Pe;if(!E||o0(E)){Ze=0,Un=null;var R=w.sibling;if(R!==null)Pe=R;else{var B=w.return;B!==null?(Pe=B,Qh(B)):Pe=null}break t}}Ze=0,Un=null,Lo(i,r,p,5);break;case 6:Ze=0,Un=null,Lo(i,r,p,6);break;case 8:Dm(),vt=6;break e;default:throw Error(s(462))}}O1();break}catch(Y){ST(i,Y)}while(!0);return hs=_a=null,K.H=u,K.A=f,We=o,Pe!==null?0:(lt=null,Fe=0,dh(),vt)}function O1(){for(;Pe!==null&&!Cl();)bT(Pe)}function bT(i){var r=ZE(i.alternate,i,vs);i.memoizedProps=i.pendingProps,r===null?Qh(i):Pe=r}function RT(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=QE(o,r,r.pendingProps,r.type,void 0,Fe);break;case 11:r=QE(o,r,r.pendingProps,r.type.render,r.ref,Fe);break;case 5:Kp(r);default:eT(o,r),r=Pe=Cv(r,vs),r=ZE(o,r,vs)}i.memoizedProps=i.pendingProps,r===null?Qh(i):Pe=r}function Lo(i,r,o,u){hs=_a=null,Kp(r),Io=null,du=0;var f=r.return;try{if(E1(i,f,r,o,Fe)){vt=1,Lh(i,$n(o,i.current)),Pe=null;return}}catch(p){if(f!==null)throw Pe=f,p;vt=1,Lh(i,$n(o,i.current)),Pe=null;return}r.flags&32768?(Qe||u===1?i=!0:xo||(Fe&536870912)!==0?i=!1:(tr=i=!0,(u===2||u===9||u===3||u===6)&&(u=ei.current,u!==null&&u.tag===13&&(u.flags|=16384))),CT(r,i)):Qh(r)}function Qh(i){var r=i;do{if((r.flags&32768)!==0){CT(r,tr);return}i=r.return;var o=S1(r.alternate,r,vs);if(o!==null){Pe=o;return}if(r=r.sibling,r!==null){Pe=r;return}Pe=r=i}while(r!==null);vt===0&&(vt=5)}function CT(i,r){do{var o=w1(i.alternate,i);if(o!==null){o.flags&=32767,Pe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Pe=i;return}Pe=i=o}while(i!==null);vt=6,Pe=null}function IT(i,r,o,u,f,p,E,w,R){i.cancelPendingCommit=null;do Kh();while(sn!==0);if((We&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(p=r.lanes|r.childLanes,p|=Sp,Ml(i,o,p,E,w,R),i===lt&&(Pe=lt=null,Fe=0),ko=r,sr=i,Po=o,Cm=p,Im=f,yT=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,P1(Gr,function(){return MT(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,f=ie.p,ie.p=2,E=We,We|=4;try{A1(i,r,o)}finally{We=E,ie.p=f,K.T=u}}sn=1,NT(),DT(),OT()}}function NT(){if(sn===1){sn=0;var i=sr,r=ko,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var u=ie.p;ie.p=2;var f=We;We|=4;try{hT(r,i);var p=Hm,E=_v(i.containerInfo),w=p.focusedElem,R=p.selectionRange;if(E!==w&&w&&w.ownerDocument&&gv(w.ownerDocument.documentElement,w)){if(R!==null&&_p(w)){var B=R.start,Y=R.end;if(Y===void 0&&(Y=B),"selectionStart"in w)w.selectionStart=B,w.selectionEnd=Math.min(Y,w.value.length);else{var W=w.ownerDocument||document,q=W&&W.defaultView||window;if(q.getSelection){var F=q.getSelection(),Ee=w.textContent.length,ge=Math.min(R.start,Ee),it=R.end===void 0?ge:Math.min(R.end,Ee);!F.extend&&ge>it&&(E=it,it=ge,ge=E);var V=mv(w,ge),x=mv(w,it);if(V&&x&&(F.rangeCount!==1||F.anchorNode!==V.node||F.anchorOffset!==V.offset||F.focusNode!==x.node||F.focusOffset!==x.offset)){var z=W.createRange();z.setStart(V.node,V.offset),F.removeAllRanges(),ge>it?(F.addRange(z),F.extend(x.node,x.offset)):(z.setEnd(x.node,x.offset),F.addRange(z))}}}}for(W=[],F=w;F=F.parentNode;)F.nodeType===1&&W.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<W.length;w++){var X=W[w];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}af=!!jm,Hm=jm=null}finally{We=f,ie.p=u,K.T=o}}i.current=r,sn=2}}function DT(){if(sn===2){sn=0;var i=sr,r=ko,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var u=ie.p;ie.p=2;var f=We;We|=4;try{oT(i,r.alternate,r)}finally{We=f,ie.p=u,K.T=o}}sn=3}}function OT(){if(sn===4||sn===3){sn=0,Fc();var i=sr,r=ko,o=Po,u=yT;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?sn=5:(sn=0,ko=sr=null,xT(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(ir=null),Ja(o),r=r.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(_t,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=K.T,f=ie.p,ie.p=2,K.T=null;try{for(var p=i.onRecoverableError,E=0;E<u.length;E++){var w=u[E];p(w.value,{componentStack:w.stack})}}finally{K.T=r,ie.p=f}}(Po&3)!==0&&Kh(),Vi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===Nm?Su++:(Su=0,Nm=i):Su=0,wu(0)}}function xT(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,nu(r)))}function Kh(i){return NT(),DT(),OT(),MT()}function MT(){if(sn!==5)return!1;var i=sr,r=Cm;Cm=0;var o=Ja(Po),u=K.T,f=ie.p;try{ie.p=32>o?32:o,K.T=null,o=Im,Im=null;var p=sr,E=Po;if(sn=0,ko=sr=null,Po=0,(We&6)!==0)throw Error(s(331));var w=We;if(We|=4,gT(p.current),dT(p,p.current,E,o),We=w,wu(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(_t,p)}catch{}return!0}finally{ie.p=f,K.T=u,xT(i,r)}}function kT(i,r,o){r=$n(o,r),r=om(i.stateNode,r,2),i=Ys(i,r,2),i!==null&&(Wi(i,2),Vi(i))}function rt(i,r,o){if(i.tag===3)kT(i,i,o);else for(;r!==null;){if(r.tag===3){kT(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ir===null||!ir.has(u))){i=$n(o,i),o=UE(2),u=Ys(r,o,2),u!==null&&(zE(o,u,r,i),Wi(u,2),Vi(u));break}}r=r.return}}function Mm(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new C1;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(wm=!0,f.add(o),i=x1.bind(null,i,r,o),r.then(i,i))}function x1(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,lt===i&&(Fe&o)===o&&(vt===4||vt===3&&(Fe&62914560)===Fe&&300>Hn()-Rm?(We&2)===0&&Vo(i,0):Am|=o,Mo===Fe&&(Mo=0)),Vi(i)}function PT(i,r){r===0&&(r=xl()),i=yo(i,r),i!==null&&(Wi(i,r),Vi(i))}function M1(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),PT(i,o)}function k1(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),PT(i,o)}function P1(i,r){return jr(i,r)}var Yh=null,Uo=null,km=!1,Xh=!1,Pm=!1,Aa=0;function Vi(i){i!==Uo&&i.next===null&&(Uo===null?Yh=Uo=i:Uo=Uo.next=i),Xh=!0,km||(km=!0,L1())}function wu(i,r){if(!Pm&&Xh){Pm=!0;do for(var o=!1,u=Yh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var E=u.suspendedLanes,w=u.pingedLanes;p=(1<<31-un(42|i)+1)-1,p&=f&~(E&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,zT(u,p))}else p=Fe,p=Za(u,u===lt?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||Xr(u,p)||(o=!0,zT(u,p));u=u.next}while(o);Pm=!1}}function V1(){VT()}function VT(){Xh=km=!1;var i=0;Aa!==0&&(G1()&&(i=Aa),Aa=0);for(var r=Hn(),o=null,u=Yh;u!==null;){var f=u.next,p=LT(u,r);p===0?(u.next=null,o===null?Yh=f:o.next=f,f===null&&(Uo=o)):(o=u,(i!==0||(p&3)!==0)&&(Xh=!0)),u=f}wu(i)}function LT(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,p=i.pendingLanes&-62914561;0<p;){var E=31-un(p),w=1<<E,R=f[E];R===-1?((w&o)===0||(w&u)!==0)&&(f[E]=Dl(w,r)):R<=r&&(i.expiredLanes|=w),p&=~w}if(r=lt,o=Fe,o=Za(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Hr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Xr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Hr(u),Ja(o)){case 2:case 8:o=$a;break;case 32:o=Gr;break;case 268435456:o=Wa;break;default:o=Gr}return u=UT.bind(null,i),o=jr(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Hr(u),i.callbackPriority=2,i.callbackNode=null,2}function UT(i,r){if(sn!==0&&sn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Kh()&&i.callbackNode!==o)return null;var u=Fe;return u=Za(i,i===lt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(ET(i,u,r),LT(i,Hn()),i.callbackNode!=null&&i.callbackNode===o?UT.bind(null,i):null)}function zT(i,r){if(Kh())return null;ET(i,r,!0)}function L1(){K1(function(){(We&6)!==0?jr(Il,V1):VT()})}function Vm(){return Aa===0&&(Aa=Ol()),Aa}function BT(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:ro(""+i)}function qT(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function U1(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=BT((f[It]||null).action),E=u.submitter;E&&(r=(r=E[It]||null)?BT(r.formAction):E.getAttribute("formAction"),r!==null&&(p=r,E=null));var w=new ao("action","action",null,u,f);i.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Aa!==0){var R=E?qT(f,E):new FormData(f);nm(o,{pending:!0,data:R,method:f.method,action:p},null,R)}}else typeof p=="function"&&(w.preventDefault(),R=E?qT(f,E):new FormData(f),nm(o,{pending:!0,data:R,method:f.method,action:p},p,R))},currentTarget:f}]})}}for(var Lm=0;Lm<Tp.length;Lm++){var Um=Tp[Lm],z1=Um.toLowerCase(),B1=Um[0].toUpperCase()+Um.slice(1);ui(z1,"on"+B1)}ui(Ev,"onAnimationEnd"),ui(Tv,"onAnimationIteration"),ui(Sv,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(i1,"onTransitionRun"),ui(s1,"onTransitionStart"),ui(r1,"onTransitionCancel"),ui(wv,"onTransitionEnd"),Ji("onMouseEnter",["mouseout","mouseover"]),Ji("onMouseLeave",["mouseout","mouseover"]),Ji("onPointerEnter",["pointerout","pointerover"]),Ji("onPointerLeave",["pointerout","pointerover"]),oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Au="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Au));function FT(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var E=u.length-1;0<=E;E--){var w=u[E],R=w.instance,B=w.currentTarget;if(w=w.listener,R!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=B;try{p(f)}catch(Y){Vh(Y)}f.currentTarget=null,p=R}else for(E=0;E<u.length;E++){if(w=u[E],R=w.instance,B=w.currentTarget,w=w.listener,R!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=B;try{p(f)}catch(Y){Vh(Y)}f.currentTarget=null,p=R}}}}function Ve(i,r){var o=r[Pl];o===void 0&&(o=r[Pl]=new Set);var u=i+"__bubble";o.has(u)||(jT(r,i,2,!1),o.add(u))}function zm(i,r,o){var u=0;r&&(u|=4),jT(o,i,u,r)}var $h="_reactListening"+Math.random().toString(36).slice(2);function Bm(i){if(!i[$h]){i[$h]=!0,Vl.forEach(function(o){o!=="selectionchange"&&(q1.has(o)||zm(o,!1,i),zm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[$h]||(r[$h]=!0,zm("selectionchange",!1,r))}}function jT(i,r,o,u){switch(d0(r)){case 2:var f=pI;break;case 8:f=mI;break;default:f=eg}o=f.bind(null,r,o,i),f=void 0,!Yn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function qm(i,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=u.return;E!==null;){var R=E.tag;if((R===3||R===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=Zi(w),E===null)return;if(R=E.tag,R===5||R===6||R===26||R===27){u=p=E;continue e}w=w.parentNode}}u=u.return}Zc(function(){var B=p,Y=Kn(o),W=[];e:{var q=Av.get(i);if(q!==void 0){var F=ao,Ee=i;switch(i){case"keypress":if(Ci(o)===0)break e;case"keydown":case"keyup":F=fo;break;case"focusin":Ee="focus",F=uo;break;case"focusout":Ee="blur",F=uo;break;case"beforeblur":case"afterblur":F=uo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Xn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=ah;break;case Ev:case Tv:case Sv:F=co;break;case wv:F=lh;break;case"scroll":case"scrollend":F=Jc;break;case"wheel":F=po;break;case"copy":case"cut":case"paste":F=ho;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Yl;break;case"toggle":case"beforetoggle":F=ch}var ge=(r&4)!==0,it=!ge&&(i==="scroll"||i==="scrollend"),V=ge?q!==null?q+"Capture":null:q;ge=[];for(var x=B,z;x!==null;){var X=x;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||V===null||(X=ia(x,V),X!=null&&ge.push(bu(x,X,z))),it)break;x=x.return}0<ge.length&&(q=new F(q,Ee,null,o,Y),W.push({event:q,listeners:ge}))}}if((r&7)===0){e:{if(q=i==="mouseover"||i==="pointerover",F=i==="mouseout"||i==="pointerout",q&&o!==ns&&(Ee=o.relatedTarget||o.fromElement)&&(Zi(Ee)||Ee[Gn]))break e;if((F||q)&&(q=Y.window===Y?Y:(q=Y.ownerDocument)?q.defaultView||q.parentWindow:window,F?(Ee=o.relatedTarget||o.toElement,F=B,Ee=Ee?Zi(Ee):null,Ee!==null&&(it=l(Ee),ge=Ee.tag,Ee!==it||ge!==5&&ge!==27&&ge!==6)&&(Ee=null)):(F=null,Ee=B),F!==Ee)){if(ge=Xn,X="onMouseLeave",V="onMouseEnter",x="mouse",(i==="pointerout"||i==="pointerover")&&(ge=Yl,X="onPointerLeave",V="onPointerEnter",x="pointer"),it=F==null?q:wi(F),z=Ee==null?q:wi(Ee),q=new ge(X,x+"leave",F,o,Y),q.target=it,q.relatedTarget=z,X=null,Zi(Y)===B&&(ge=new ge(V,x+"enter",Ee,o,Y),ge.target=z,ge.relatedTarget=it,X=ge),it=X,F&&Ee)t:{for(ge=F,V=Ee,x=0,z=ge;z;z=zo(z))x++;for(z=0,X=V;X;X=zo(X))z++;for(;0<x-z;)ge=zo(ge),x--;for(;0<z-x;)V=zo(V),z--;for(;x--;){if(ge===V||V!==null&&ge===V.alternate)break t;ge=zo(ge),V=zo(V)}ge=null}else ge=null;F!==null&&HT(W,q,F,ge,!1),Ee!==null&&it!==null&&HT(W,it,Ee,ge,!0)}}e:{if(q=B?wi(B):window,F=q.nodeName&&q.nodeName.toLowerCase(),F==="select"||F==="input"&&q.type==="file")var ue=uv;else if(zt(q))if(cv)ue=e1;else{ue=ZC;var xe=WC}else F=q.nodeName,!F||F.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&ql(B.elementType)&&(ue=uv):ue=JC;if(ue&&(ue=ue(i,B))){os(W,ue,o,Y);break e}xe&&xe(i,q,B),i==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&js(q,"number",q.value)}switch(xe=B?wi(B):window,i){case"focusin":(zt(xe)||xe.contentEditable==="true")&&(mo=xe,yp=B,Wl=null);break;case"focusout":Wl=yp=mo=null;break;case"mousedown":vp=!0;break;case"contextmenu":case"mouseup":case"dragend":vp=!1,yv(W,o,Y);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":yv(W,o,Y)}var he;if(Di)e:{switch(i){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Be?G(i,o)&&(_e="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(v&&o.locale!=="ko"&&(Be||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Be&&(he=jl()):(Ri=Y,Hs="value"in Ri?Ri.value:Ri.textContent,Be=!0)),xe=Wh(B,_e),0<xe.length&&(_e=new Ql(_e,i,null,o,Y),W.push({event:_e,listeners:xe}),he?_e.data=he:(he=te(o),he!==null&&(_e.data=he)))),(he=_?Ut(i,o):qe(i,o))&&(_e=Wh(B,"onBeforeInput"),0<_e.length&&(xe=new Ql("onBeforeInput","beforeinput",null,o,Y),W.push({event:xe,listeners:_e}),xe.data=he)),U1(W,i,B,o,Y)}FT(W,r)})}function bu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Wh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=ia(i,o),f!=null&&u.unshift(bu(i,f,p)),f=ia(i,r),f!=null&&u.push(bu(i,f,p))),i.tag===3)return u;i=i.return}return[]}function zo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function HT(i,r,o,u,f){for(var p=r._reactName,E=[];o!==null&&o!==u;){var w=o,R=w.alternate,B=w.stateNode;if(w=w.tag,R!==null&&R===u)break;w!==5&&w!==26&&w!==27||B===null||(R=B,f?(B=ia(o,p),B!=null&&E.unshift(bu(o,B,R))):f||(B=ia(o,p),B!=null&&E.push(bu(o,B,R)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var F1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function GT(i){return(typeof i=="string"?i:""+i).replace(F1,`
`).replace(j1,"")}function QT(i,r){return r=GT(r),GT(i)===r}function Zh(){}function nt(i,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Qn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Qn(i,""+u);break;case"className":Ai(i,"class",u);break;case"tabIndex":Ai(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(i,o,u);break;case"style":Bl(i,u,p);break;case"data":if(r!=="object"){Ai(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=ro(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&nt(i,r,"name",f.name,f,null),nt(i,r,"formEncType",f.formEncType,f,null),nt(i,r,"formMethod",f.formMethod,f,null),nt(i,r,"formTarget",f.formTarget,f,null)):(nt(i,r,"encType",f.encType,f,null),nt(i,r,"method",f.method,f,null),nt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=ro(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Zh);break;case"onScroll":u!=null&&Ve("scroll",i);break;case"onScrollEnd":u!=null&&Ve("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=ro(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Ve("beforetoggle",i),Ve("toggle",i),Fs(i,"popover",u);break;case"xlinkActuate":en(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":en(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":en(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":en(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":en(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":en(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":en(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":en(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":en(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Fs(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=hp.get(o)||o,Fs(i,o,u))}}function Fm(i,r,o,u,f,p){switch(o){case"style":Bl(i,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Qn(i,u):(typeof u=="number"||typeof u=="bigint")&&Qn(i,""+u);break;case"onScroll":u!=null&&Ve("scroll",i);break;case"onScrollEnd":u!=null&&Ve("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Zh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!eo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=i[It]||null,p=p!=null?p[o]:null,typeof p=="function"&&i.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Fs(i,o,u)}}}function rn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",i),Ve("load",i);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,p,E,o,null)}}f&&nt(i,r,"srcSet",o.srcSet,o,null),u&&nt(i,r,"src",o.src,o,null);return;case"input":Ve("invalid",i);var w=p=E=f=null,R=null,B=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":f=Y;break;case"type":E=Y;break;case"checked":R=Y;break;case"defaultChecked":B=Y;break;case"value":p=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:nt(i,r,u,Y,o,null)}}ea(i,p,w,R,B,E,f,!1),so(i);return;case"select":Ve("invalid",i),u=E=p=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:nt(i,r,f,w,o,null)}r=p,o=E,i.multiple=!!u,r!=null?ts(i,!!u,r,!1):o!=null&&ts(i,!!u,o,!0);return;case"textarea":Ve("invalid",i),p=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:nt(i,r,E,w,o,null)}ta(i,u,f,p),so(i);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(i,r,R,u,o,null)}return;case"dialog":Ve("beforetoggle",i),Ve("toggle",i),Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":Ve("load",i);break;case"video":case"audio":for(u=0;u<Au.length;u++)Ve(Au[u],i);break;case"image":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"embed":case"source":case"link":Ve("error",i),Ve("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(u=o[B],u!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(i,r,B,u,o,null)}return;default:if(ql(r)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&Fm(i,r,Y,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&nt(i,r,w,u,o,null))}function H1(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,E=null,w=null,R=null,B=null,Y=null;for(F in o){var W=o[F];if(o.hasOwnProperty(F)&&W!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":R=W;default:u.hasOwnProperty(F)||nt(i,r,F,null,u,W)}}for(var q in u){var F=u[q];if(W=o[q],u.hasOwnProperty(q)&&(F!=null||W!=null))switch(q){case"type":p=F;break;case"name":f=F;break;case"checked":B=F;break;case"defaultChecked":Y=F;break;case"value":E=F;break;case"defaultValue":w=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==W&&nt(i,r,q,F,u,W)}}Mn(i,E,w,R,B,Y,p,f);return;case"select":F=E=w=q=null;for(p in o)if(R=o[p],o.hasOwnProperty(p)&&R!=null)switch(p){case"value":break;case"multiple":F=R;default:u.hasOwnProperty(p)||nt(i,r,p,null,u,R)}for(f in u)if(p=u[f],R=o[f],u.hasOwnProperty(f)&&(p!=null||R!=null))switch(f){case"value":q=p;break;case"defaultValue":w=p;break;case"multiple":E=p;default:p!==R&&nt(i,r,f,p,u,R)}r=w,o=E,u=F,q!=null?ts(i,!!o,q,!1):!!u!=!!o&&(r!=null?ts(i,!!o,r,!0):ts(i,!!o,o?[]:"",!1));return;case"textarea":F=q=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:nt(i,r,w,null,u,f)}for(E in u)if(f=u[E],p=o[E],u.hasOwnProperty(E)&&(f!=null||p!=null))switch(E){case"value":q=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&nt(i,r,E,f,u,p)}et(i,q,F);return;case"option":for(var Ee in o)if(q=o[Ee],o.hasOwnProperty(Ee)&&q!=null&&!u.hasOwnProperty(Ee))switch(Ee){case"selected":i.selected=!1;break;default:nt(i,r,Ee,null,u,q)}for(R in u)if(q=u[R],F=o[R],u.hasOwnProperty(R)&&q!==F&&(q!=null||F!=null))switch(R){case"selected":i.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:nt(i,r,R,q,u,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in o)q=o[ge],o.hasOwnProperty(ge)&&q!=null&&!u.hasOwnProperty(ge)&&nt(i,r,ge,null,u,q);for(B in u)if(q=u[B],F=o[B],u.hasOwnProperty(B)&&q!==F&&(q!=null||F!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:nt(i,r,B,q,u,F)}return;default:if(ql(r)){for(var it in o)q=o[it],o.hasOwnProperty(it)&&q!==void 0&&!u.hasOwnProperty(it)&&Fm(i,r,it,void 0,u,q);for(Y in u)q=u[Y],F=o[Y],!u.hasOwnProperty(Y)||q===F||q===void 0&&F===void 0||Fm(i,r,Y,q,u,F);return}}for(var V in o)q=o[V],o.hasOwnProperty(V)&&q!=null&&!u.hasOwnProperty(V)&&nt(i,r,V,null,u,q);for(W in u)q=u[W],F=o[W],!u.hasOwnProperty(W)||q===F||q==null&&F==null||nt(i,r,W,q,u,F)}var jm=null,Hm=null;function Jh(i){return i.nodeType===9?i:i.ownerDocument}function KT(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function YT(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Gm(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qm=null;function G1(){var i=window.event;return i&&i.type==="popstate"?i===Qm?!1:(Qm=i,!0):(Qm=null,!1)}var XT=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,$T=typeof Promise=="function"?Promise:void 0,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof $T<"u"?function(i){return $T.resolve(null).then(i).catch(Y1)}:XT;function Y1(i){setTimeout(function(){throw i})}function ar(i){return i==="head"}function WT(i,r){var o=r,u=0,f=0;do{var p=o.nextSibling;if(i.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Ru(E.documentElement),o&2&&Ru(E.body),o&4)for(o=E.head,Ru(o),E=o.firstChild;E;){var w=E.nextSibling,R=E.nodeName;E[$r]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(f===0){i.removeChild(p),ku(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);ku(r)}function Km(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Km(o),qs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function X1(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[$r])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(p=i.getAttribute("rel"),p==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(p!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(p=i.getAttribute("src"),(p!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===p)return i}else return i;if(i=hi(i.nextSibling),i===null)break}return null}function $1(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=hi(i.nextSibling),i===null))return null;return i}function Ym(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function W1(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function hi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Xm=null;function ZT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function JT(i,r,o){switch(r=Jh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Ru(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);qs(i)}var ni=new Map,e0=new Set;function ef(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Es=ie.d;ie.d={f:Z1,r:J1,D:eI,C:tI,L:nI,m:iI,X:rI,S:sI,M:aI};function Z1(){var i=Es.f(),r=Gh();return i||r}function J1(i){var r=Si(i);r!==null&&r.tag===5&&r.type==="form"?EE(r):Es.r(i)}var Bo=typeof document>"u"?null:document;function t0(i,r,o){var u=Bo;if(u&&typeof r=="string"&&r){var f=Nt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),e0.has(f)||(e0.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),rn(r,"link",i),wt(r),u.head.appendChild(r)))}}function eI(i){Es.D(i),t0("dns-prefetch",i,null)}function tI(i,r){Es.C(i,r),t0("preconnect",i,r)}function nI(i,r,o){Es.L(i,r,o);var u=Bo;if(u&&i&&r){var f='link[rel="preload"][as="'+Nt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Nt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Nt(o.imageSizes)+'"]')):f+='[href="'+Nt(i)+'"]';var p=f;switch(r){case"style":p=qo(i);break;case"script":p=Fo(i)}ni.has(p)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ni.set(p,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Cu(p))||r==="script"&&u.querySelector(Iu(p))||(r=u.createElement("link"),rn(r,"link",i),wt(r),u.head.appendChild(r)))}}function iI(i,r){Es.m(i,r);var o=Bo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Nt(u)+'"][href="'+Nt(i)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Fo(i)}if(!ni.has(p)&&(i=y({rel:"modulepreload",href:i},r),ni.set(p,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Iu(p)))return}u=o.createElement("link"),rn(u,"link",i),wt(u),o.head.appendChild(u)}}}function sI(i,r,o){Es.S(i,r,o);var u=Bo;if(u&&i){var f=_n(u).hoistableStyles,p=qo(i);r=r||"default";var E=f.get(p);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(Cu(p)))w.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ni.get(p))&&$m(i,o);var R=E=u.createElement("link");wt(R),rn(R,"link",i),R._p=new Promise(function(B,Y){R.onload=B,R.onerror=Y}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,tf(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(p,E)}}}function rI(i,r){Es.X(i,r);var o=Bo;if(o&&i){var u=_n(o).hoistableScripts,f=Fo(i),p=u.get(f);p||(p=o.querySelector(Iu(f)),p||(i=y({src:i,async:!0},r),(r=ni.get(f))&&Wm(i,r),p=o.createElement("script"),wt(p),rn(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function aI(i,r){Es.M(i,r);var o=Bo;if(o&&i){var u=_n(o).hoistableScripts,f=Fo(i),p=u.get(f);p||(p=o.querySelector(Iu(f)),p||(i=y({src:i,async:!0,type:"module"},r),(r=ni.get(f))&&Wm(i,r),p=o.createElement("script"),wt(p),rn(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function n0(i,r,o,u){var f=(f=we.current)?ef(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=qo(o.href),o=_n(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=qo(o.href);var p=_n(f).hoistableStyles,E=p.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(i,E),(p=f.querySelector(Cu(i)))&&!p._p&&(E.instance=p,E.state.loading=5),ni.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ni.set(i,o),p||oI(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Fo(o),o=_n(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function qo(i){return'href="'+Nt(i)+'"'}function Cu(i){return'link[rel="stylesheet"]['+i+"]"}function i0(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function oI(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),rn(r,"link",o),wt(r),i.head.appendChild(r))}function Fo(i){return'[src="'+Nt(i)+'"]'}function Iu(i){return"script[async]"+i}function s0(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Nt(o.href)+'"]');if(u)return r.instance=u,wt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),wt(u),rn(u,"style",f),tf(u,o.precedence,i),r.instance=u;case"stylesheet":f=qo(o.href);var p=i.querySelector(Cu(f));if(p)return r.state.loading|=4,r.instance=p,wt(p),p;u=i0(o),(f=ni.get(f))&&$m(u,f),p=(i.ownerDocument||i).createElement("link"),wt(p);var E=p;return E._p=new Promise(function(w,R){E.onload=w,E.onerror=R}),rn(p,"link",u),r.state.loading|=4,tf(p,o.precedence,i),r.instance=p;case"script":return p=Fo(o.src),(f=i.querySelector(Iu(p)))?(r.instance=f,wt(f),f):(u=o,(f=ni.get(p))&&(u=y({},o),Wm(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),wt(f),rn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,tf(u,o.precedence,i));return r.instance}function tf(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===r)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(i,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function $m(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Wm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var nf=null;function r0(i,r,o){if(nf===null){var u=new Map,f=nf=new Map;f.set(o,u)}else f=nf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var p=o[f];if(!(p[$r]||p[Lt]||i==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(r)||"";E=i+E;var w=u.get(E);w?w.push(p):u.set(E,[p])}}return u}function a0(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function lI(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function o0(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Nu=null;function uI(){}function cI(i,r,o){if(Nu===null)throw Error(s(475));var u=Nu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=qo(o.href),p=i.querySelector(Cu(f));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=sf.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=p,wt(p);return}p=i.ownerDocument||i,o=i0(o),(f=ni.get(f))&&$m(o,f),p=p.createElement("link"),wt(p);var E=p;E._p=new Promise(function(w,R){E.onload=w,E.onerror=R}),rn(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=sf.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function hI(){if(Nu===null)throw Error(s(475));var i=Nu;return i.stylesheets&&i.count===0&&Zm(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Zm(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function sf(){if(this.count--,this.count===0){if(this.stylesheets)Zm(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var rf=null;function Zm(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,rf=new Map,r.forEach(fI,i),rf=null,sf.call(i))}function fI(i,r){if(!(r.state.loading&4)){var o=rf.get(i);if(o)var u=o.get(null);else{o=new Map,rf.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var E=f[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,f),o.set(E,f),this.count++,u=sf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Du={$$typeof:re,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function dI(i,r,o,u,f,p,E,w){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function l0(i,r,o,u,f,p,E,w,R,B,Y,W){return i=new dI(i,r,o,E,w,R,B,W),r=1,p===!0&&(r|=24),p=Pn(3,null,null,r),i.current=p,p.stateNode=i,r=Mp(),r.refCount++,i.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},Lp(p),i}function u0(i){return i?(i=vo,i):vo}function c0(i,r,o,u,f,p){f=u0(f),u.context===null?u.context=f:u.pendingContext=f,u=Ks(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=Ys(i,u,r),o!==null&&(Bn(o,i,r),au(o,i,r))}function h0(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Jm(i,r){h0(i,r),(i=i.alternate)&&h0(i,r)}function f0(i){if(i.tag===13){var r=yo(i,67108864);r!==null&&Bn(r,i,67108864),Jm(i,67108864)}}var af=!0;function pI(i,r,o,u){var f=K.T;K.T=null;var p=ie.p;try{ie.p=2,eg(i,r,o,u)}finally{ie.p=p,K.T=f}}function mI(i,r,o,u){var f=K.T;K.T=null;var p=ie.p;try{ie.p=8,eg(i,r,o,u)}finally{ie.p=p,K.T=f}}function eg(i,r,o,u){if(af){var f=tg(u);if(f===null)qm(i,r,u,of,o),p0(i,u);else if(_I(f,i,r,o,u))u.stopPropagation();else if(p0(i,u),r&4&&-1<gI.indexOf(i)){for(;f!==null;){var p=Si(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=ai(p.pendingLanes);if(E!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var R=1<<31-un(E);w.entanglements[1]|=R,E&=~R}Vi(p),(We&6)===0&&(jh=Hn()+500,wu(0))}}break;case 13:w=yo(p,2),w!==null&&Bn(w,p,2),Gh(),Jm(p,2)}if(p=tg(u),p===null&&qm(i,r,u,of,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else qm(i,r,u,null,o)}}function tg(i){return i=Kn(i),ng(i)}var of=null;function ng(i){if(of=null,i=Zi(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return of=i,null}function d0(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rp()){case Il:return 2;case $a:return 8;case Gr:case ap:return 32;case Wa:return 268435456;default:return 32}default:return 32}}var ig=!1,or=null,lr=null,ur=null,Ou=new Map,xu=new Map,cr=[],gI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p0(i,r){switch(i){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Ou.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xu.delete(r.pointerId)}}function Mu(i,r,o,u,f,p){return i===null||i.nativeEvent!==p?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=Si(r),r!==null&&f0(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function _I(i,r,o,u,f){switch(r){case"focusin":return or=Mu(or,i,r,o,u,f),!0;case"dragenter":return lr=Mu(lr,i,r,o,u,f),!0;case"mouseover":return ur=Mu(ur,i,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return Ou.set(p,Mu(Ou.get(p)||null,i,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,xu.set(p,Mu(xu.get(p)||null,i,r,o,u,f)),!0}return!1}function m0(i){var r=Zi(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Gc(i.priority,function(){if(o.tag===13){var u=zn();u=Us(u);var f=yo(o,u);f!==null&&Bn(f,o,u),Jm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function lf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=tg(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);ns=u,o.target.dispatchEvent(u),ns=null}else return r=Si(o),r!==null&&f0(r),i.blockedOn=o,!1;r.shift()}return!0}function g0(i,r,o){lf(i)&&o.delete(r)}function yI(){ig=!1,or!==null&&lf(or)&&(or=null),lr!==null&&lf(lr)&&(lr=null),ur!==null&&lf(ur)&&(ur=null),Ou.forEach(g0),xu.forEach(g0)}function uf(i,r){i.blockedOn===r&&(i.blockedOn=null,ig||(ig=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,yI)))}var cf=null;function _0(i){cf!==i&&(cf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){cf===i&&(cf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(ng(u||o)===null)continue;break}var p=Si(o);p!==null&&(i.splice(r,3),r-=3,nm(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function ku(i){function r(R){return uf(R,i)}or!==null&&uf(or,i),lr!==null&&uf(lr,i),ur!==null&&uf(ur,i),Ou.forEach(r),xu.forEach(r);for(var o=0;o<cr.length;o++){var u=cr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)m0(o),o.blockedOn===null&&cr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],E=f[It]||null;if(typeof p=="function")E||_0(o);else if(E){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,E=p[It]||null)w=E.formAction;else if(ng(f)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),_0(o)}}}function sg(i){this._internalRoot=i}hf.prototype.render=sg.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=zn();c0(o,u,i,r,null,null)},hf.prototype.unmount=sg.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;c0(i.current,2,null,i,null,null),Gh(),r[Gn]=null}};function hf(i){this._internalRoot=i}hf.prototype.unstable_scheduleHydration=function(i){if(i){var r=zs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<cr.length&&r!==0&&r<cr[o].priority;o++);cr.splice(o,0,i),o===0&&m0(i)}};var y0=e.version;if(y0!=="19.1.1")throw Error(s(527,y0,"19.1.1"));ie.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=m(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var vI={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ff=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ff.isDisabled&&ff.supportsFiber)try{_t=ff.inject(vI),$e=ff}catch{}}return Vu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=kE,p=PE,E=VE,w=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=l0(i,1,!1,null,null,o,u,f,p,E,w,null),i[Gn]=r.current,Bm(i),new sg(r)},Vu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",p=kE,E=PE,w=VE,R=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),r=l0(i,1,!0,r,o??null,u,f,p,E,w,R,B),r.context=u0(null),o=r.current,u=zn(),u=Us(u),f=Ks(u),f.callback=null,Ys(o,f,u),o=u,r.current.lanes=o,Wi(r,o),Vi(r),i[Gn]=r.current,Bm(i),new hf(r)},Vu.version="19.1.1",Vu}var I0;function NI(){if(I0)return og.exports;I0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),og.exports=II(),og.exports}var DI=NI();const OI=()=>{};var N0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw gl(e)},gl=function(n){return new Error("Firebase Database ("+eA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},xI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},S_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,m=a+2<n.length,g=m?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,O=g&63;m||(O=64,c||(S=64)),s.push(t[y],t[T],t[S],t[O])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new MI;const S=l<<2|d>>4;if(s.push(S),g!==64){const O=d<<4&240|g>>2;if(s.push(O),T!==64){const U=g<<6&192|T;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class MI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nA=function(n){const e=tA(n);return S_.encodeByteArray(e,!0)},Pf=function(n){return nA(n).replace(/\./g,"")},Vf=function(n){try{return S_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n){return iA(void 0,n)}function iA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!PI(t)||(n[t]=iA(n[t],e[t]));return n}function PI(n){return n!=="__proto__"}/**
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
 */function VI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LI=()=>VI().__FIREBASE_DEFAULTS__,UI=()=>{if(typeof process>"u"||typeof N0>"u")return;const n=N0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vf(n[1]);return e&&JSON.parse(e)},_d=()=>{try{return OI()||LI()||UI()||zI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sA=n=>_d()?.emulatorHosts?.[n],w_=n=>{const e=sA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},rA=()=>_d()?.config,aA=n=>_d()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Qi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function A_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Pf(JSON.stringify(t)),Pf(JSON.stringify(c)),""].join(".")}const Qu={};function BI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qu))Qu[e]?n.emulator.push(e):n.prod.push(e);return n}function qI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let D0=!1;function vd(n,e){if(typeof window>"u"||typeof document>"u"||!Qi(window.location.host)||Qu[n]===e||Qu[n]||D0)return;Qu[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=BI().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,O){S.setAttribute("width","24"),S.setAttribute("id",O),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{D0=!0,c()},S}function y(S,O){S.setAttribute("id",O),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=qI(s),O=t("text"),U=document.getElementById(O)||document.createElement("span"),Q=t("learnmore"),H=document.getElementById(Q)||document.createElement("a"),ce=t("preprendIcon"),oe=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const re=S.element;d(re),y(H,Q);const ye=g();m(oe,ce),re.append(oe,U,H,ye),document.body.appendChild(re)}l?(U.innerText="Preview backend disconnected.",oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function b_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function FI(){const n=_d()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function oA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GI(){const n=mn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function QI(){return eA.NODE_ADMIN===!0}function KI(){return!FI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YI(){try{return typeof indexedDB=="object"}catch{return!1}}function XI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="FirebaseError";class Ki extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$I,Object.setPrototypeOf(this,Ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ac.prototype.create)}}class Ac{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?WI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ki(a,d,s)}}function WI(n,e){return n.replace(ZI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const ZI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n){return JSON.parse(n)}function Zt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=sc(Vf(l[0])||""),t=sc(Vf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},JI=function(n){const e=lA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},eN=function(n){const e=lA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function il(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Lf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Uf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Rr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(O0(l)&&O0(c)){if(!Rr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function O0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],m=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const S=(a<<5|a>>>27)+g+m+y+s[T]&4294967295;m=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function nN(n,e){const t=new iN(n,e);return t.subscribe.bind(t)}class iN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");sN(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=hg),a.error===void 0&&(a.error=hg),a.complete===void 0&&(a.complete=hg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function hg(){}function sl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ne(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Ed=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function st(n){return n&&n._delegate?n._delegate:n}class Ns{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ba="[DEFAULT]";/**
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
 */class aN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ss;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lN(e))try{this.getOrInitializeService({instanceIdentifier:ba})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=ba){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ba){return this.instances.has(e)}getOptions(e=ba){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:oN(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ba){return this.component?this.component.multipleInstances?e:ba:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oN(n){return n===ba?void 0:n}function lN(n){return n.instantiationMode==="EAGER"}/**
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
 */class uN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const cN={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},hN=Le.INFO,fN={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},dN=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=fN[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Td{constructor(e){this.name=e,this._logLevel=hN,this._logHandler=dN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const pN=(n,e)=>e.some(t=>n instanceof t);let x0,M0;function mN(){return x0||(x0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gN(){return M0||(M0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uA=new WeakMap,Mg=new WeakMap,cA=new WeakMap,fg=new WeakMap,R_=new WeakMap;function _N(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(yr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&uA.set(t,n)}).catch(()=>{}),R_.set(e,n),e}function yN(n){if(Mg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Mg.set(n,e)}let kg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vN(n){kg=n(kg)}function EN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(dg(this),e,...t);return cA.set(s,e.sort?e.sort():[e]),yr(s)}:gN().includes(n)?function(...e){return n.apply(dg(this),e),yr(uA.get(this))}:function(...e){return yr(n.apply(dg(this),e))}}function TN(n){return typeof n=="function"?EN(n):(n instanceof IDBTransaction&&yN(n),pN(n,mN())?new Proxy(n,kg):n)}function yr(n){if(n instanceof IDBRequest)return _N(n);if(fg.has(n))return fg.get(n);const e=TN(n);return e!==n&&(fg.set(n,e),R_.set(e,n)),e}const dg=n=>R_.get(n);function SN(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=yr(c);return s&&c.addEventListener("upgradeneeded",m=>{s(yr(c.result),m.oldVersion,m.newVersion,yr(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const wN=["get","getKey","getAll","getAllKeys","count"],AN=["put","add","delete","clear"],pg=new Map;function k0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pg.get(e))return pg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=AN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||wN.includes(t)))return;const l=async function(c,...d){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&m.done]))[0]};return pg.set(e,l),l}vN(n=>({...n,get:(e,t,s)=>k0(e,t)||n.get(e,t,s),has:(e,t)=>!!k0(e,t)||n.has(e,t)}));/**
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
 */class bN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(RN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function RN(n){return n.getComponent()?.type==="VERSION"}const Pg="@firebase/app",P0="0.14.1";/**
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
 */const Ds=new Td("@firebase/app"),CN="@firebase/app-compat",IN="@firebase/analytics-compat",NN="@firebase/analytics",DN="@firebase/app-check-compat",ON="@firebase/app-check",xN="@firebase/auth",MN="@firebase/auth-compat",kN="@firebase/database",PN="@firebase/data-connect",VN="@firebase/database-compat",LN="@firebase/functions",UN="@firebase/functions-compat",zN="@firebase/installations",BN="@firebase/installations-compat",qN="@firebase/messaging",FN="@firebase/messaging-compat",jN="@firebase/performance",HN="@firebase/performance-compat",GN="@firebase/remote-config",QN="@firebase/remote-config-compat",KN="@firebase/storage",YN="@firebase/storage-compat",XN="@firebase/firestore",$N="@firebase/ai",WN="@firebase/firestore-compat",ZN="firebase",JN="12.1.0";/**
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
 */const Vg="[DEFAULT]",eD={[Pg]:"fire-core",[CN]:"fire-core-compat",[NN]:"fire-analytics",[IN]:"fire-analytics-compat",[ON]:"fire-app-check",[DN]:"fire-app-check-compat",[xN]:"fire-auth",[MN]:"fire-auth-compat",[kN]:"fire-rtdb",[PN]:"fire-data-connect",[VN]:"fire-rtdb-compat",[LN]:"fire-fn",[UN]:"fire-fn-compat",[zN]:"fire-iid",[BN]:"fire-iid-compat",[qN]:"fire-fcm",[FN]:"fire-fcm-compat",[jN]:"fire-perf",[HN]:"fire-perf-compat",[GN]:"fire-rc",[QN]:"fire-rc-compat",[KN]:"fire-gcs",[YN]:"fire-gcs-compat",[XN]:"fire-fst",[WN]:"fire-fst-compat",[$N]:"fire-vertex","fire-js":"fire-js",[ZN]:"fire-js-all"};/**
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
 */const zf=new Map,tD=new Map,Lg=new Map;function V0(n,e){try{n.container.addComponent(e)}catch(t){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cr(n){const e=n.name;if(Lg.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;Lg.set(e,n);for(const t of zf.values())V0(t,n);for(const t of tD.values())V0(t,n);return!0}function bc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Rn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const nD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new Ac("app","Firebase",nD);/**
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
 */class iD{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ur=JN;function hA(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Vg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw vr.create("bad-app-name",{appName:String(a)});if(t||(t=rA()),!t)throw vr.create("no-options");const l=zf.get(a);if(l){if(Rr(t,l.options)&&Rr(s,l.config))return l;throw vr.create("duplicate-app",{appName:a})}const c=new uN(a);for(const m of Lg.values())c.addComponent(m);const d=new iD(t,s,c);return zf.set(a,d),d}function Sd(n=Vg){const e=zf.get(n);if(!e&&n===Vg&&rA())return hA();if(!e)throw vr.create("no-app",{appName:n});return e}function ri(n,e,t){let s=eD[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(c.join(" "));return}Cr(new Ns(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sD="firebase-heartbeat-database",rD=1,rc="firebase-heartbeat-store";let mg=null;function fA(){return mg||(mg=SN(sD,rD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rc)}catch(t){console.warn(t)}}}}).catch(n=>{throw vr.create("idb-open",{originalErrorMessage:n.message})})),mg}async function aD(n){try{const t=(await fA()).transaction(rc),s=await t.objectStore(rc).get(dA(n));return await t.done,s}catch(e){if(e instanceof Ki)Ds.warn(e.message);else{const t=vr.create("idb-get",{originalErrorMessage:e?.message});Ds.warn(t.message)}}}async function L0(n,e){try{const s=(await fA()).transaction(rc,"readwrite");await s.objectStore(rc).put(e,dA(n)),await s.done}catch(t){if(t instanceof Ki)Ds.warn(t.message);else{const s=vr.create("idb-set",{originalErrorMessage:t?.message});Ds.warn(s.message)}}}function dA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const oD=1024,lD=30;class uD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=U0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>lD){const a=fD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ds.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=U0(),{heartbeatsToSend:t,unsentEntries:s}=cD(this._heartbeatsCache.heartbeats),a=Pf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Ds.warn(e),""}}}function U0(){return new Date().toISOString().substring(0,10)}function cD(n,e=oD){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),z0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),z0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class hD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YI()?XI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aD(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return L0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return L0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function z0(n){return Pf(JSON.stringify({version:2,heartbeats:n})).length}function fD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function dD(n){Cr(new Ns("platform-logger",e=>new bN(e),"PRIVATE")),Cr(new Ns("heartbeat",e=>new uD(e),"PRIVATE")),ri(Pg,P0,n),ri(Pg,P0,"esm2020"),ri("fire-js","")}dD("");var pD="firebase",mD="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri(pD,mD,"app");function pA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gD=pA,mA=new Ac("auth","Firebase",pA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Td("@firebase/auth");function _D(n,...e){Bf.logLevel<=Le.WARN&&Bf.warn(`Auth (${Ur}): ${n}`,...e)}function wf(n,...e){Bf.logLevel<=Le.ERROR&&Bf.error(`Auth (${Ur}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,...e){throw I_(n,...e)}function mi(n,...e){return I_(n,...e)}function C_(n,e,t){const s={...gD(),[e]:t};return new Ac("auth","Firebase",s).create(e,{appName:n.name})}function Er(n){return C_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yD(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Hi(n,"argument-error"),C_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return mA.create(n,...e)}function Se(n,e,...t){if(!n)throw I_(e,...t)}function As(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wf(e),new Error(e)}function Os(n,e){n||As(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(){return typeof self<"u"&&self.location?.href||""}function vD(){return B0()==="http:"||B0()==="https:"}function B0(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vD()||HI()||"connection"in navigator)?navigator.onLine:!0}function TD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Os(t>e,"Short delay should be less than long delay!"),this.isMobile=b_()||oA()}get(){return ED()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n,e){Os(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;As("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;As("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;As("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],AD=new Rc(3e4,6e4);function wd(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yl(n,e,t,s,a={}){return _A(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=_l({key:n.config.apiKey,...c}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:m,...l};return jI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Qi(n.emulatorConfig.host)&&(g.credentials="include"),gA.fetch()(await vA(n,n.config.apiHost,t,d),g)})}async function _A(n,e,t){n._canInitEmulator=!1;const s={...SD,...e};try{const a=new bD(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw df(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,g]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw df(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw df(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw df(n,"user-disabled",c);const y=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw C_(n,y,g);Hi(n,y)}}catch(a){if(a instanceof Ki)throw a;Hi(n,"network-request-failed",{message:String(a)})}}async function yA(n,e,t,s,a={}){const l=await yl(n,e,t,s,a);return"mfaPendingCredential"in l&&Hi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function vA(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?N_(n.config,a):`${n.config.apiScheme}://${a}`;return wD.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class bD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(mi(this.auth,"network-request-failed")),AD.get())})}}function df(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=mi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(n,e){return yl(n,"POST","/v1/accounts:delete",e)}async function qf(n,e){return yl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CD(n,e=!1){const t=st(n),s=await t.getIdToken(e),a=D_(s);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Ku(gg(a.auth_time)),issuedAtTime:Ku(gg(a.iat)),expirationTime:Ku(gg(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function gg(n){return Number(n)*1e3}function D_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return wf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Vf(t);return a?JSON.parse(a):(wf("Failed to decode base64 JWT payload"),null)}catch(a){return wf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function q0(n){const e=D_(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ki&&ID(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ID({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ku(this.lastLoginAt),this.creationTime=Ku(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ff(n){const e=n.auth,t=await n.getIdToken(),s=await ac(n,qf(e,{idToken:t}));Se(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?EA(a.providerUserInfo):[],c=OD(n.providerData,l),d=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!c?.length,g=d?m:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new zg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function DD(n){const e=st(n);await Ff(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OD(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function EA(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(n,e){const t=await _A(n,{},async()=>{const s=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await vA(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:d,body:s};return n.emulatorConfig&&Qi(n.emulatorConfig.host)&&(m.credentials="include"),gA.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function MD(n,e){return yl(n,"POST","/v2/accounts:revokeToken",wd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):q0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=q0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await xD(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new $o;return s&&(Se(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Se(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return As("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class di{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new ND(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new zg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ac(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CD(this,e)}reload(){return DD(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new di({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ff(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await ac(this,RD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:S,isAnonymous:O,providerData:U,stsTokenManager:Q}=t;Se(T&&Q,e,"internal-error");const H=$o.fromJSON(this.name,Q);Se(typeof T=="string",e,"internal-error"),fr(s,e.name),fr(a,e.name),Se(typeof S=="boolean",e,"internal-error"),Se(typeof O=="boolean",e,"internal-error"),fr(l,e.name),fr(c,e.name),fr(d,e.name),fr(m,e.name),fr(g,e.name),fr(y,e.name);const ce=new di({uid:T,auth:e,email:a,emailVerified:S,displayName:s,isAnonymous:O,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:H,createdAt:g,lastLoginAt:y});return U&&Array.isArray(U)&&(ce.providerData=U.map(oe=>({...oe}))),m&&(ce._redirectEventId=m),ce}static async _fromIdTokenResponse(e,t,s=!1){const a=new $o;a.updateFromServerResponse(t);const l=new di({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Ff(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?EA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new $o;d.updateFromIdToken(s);const m=new di({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new zg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=new Map;function bs(n){Os(n instanceof Function,"Expected a class definition");let e=F0.get(n);return e?(Os(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,F0.set(n,e),e)}/**
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
 */class TA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}TA.type="NONE";const j0=TA;/**
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
 */function Af(n,e,t){return`firebase:${n}:${e}:${t}`}class Wo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Af(this.userKey,a.apiKey,l),this.fullPersistenceKey=Af("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qf(this.auth,{idToken:e}).catch(()=>{});return t?di._fromGetAccountInfoResponse(this.auth,t,e):null}return di._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Wo(bs(j0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||bs(j0);const c=Af(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const S=await qf(e,{idToken:y}).catch(()=>{});if(!S)break;T=await di._fromGetAccountInfoResponse(e,S,y)}else T=di._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Wo(l,e,s):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Wo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CA(e))return"Blackberry";if(IA(e))return"Webos";if(wA(e))return"Safari";if((e.includes("chrome/")||AA(e))&&!e.includes("edge/"))return"Chrome";if(RA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function SA(n=mn()){return/firefox\//i.test(n)}function wA(n=mn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AA(n=mn()){return/crios\//i.test(n)}function bA(n=mn()){return/iemobile/i.test(n)}function RA(n=mn()){return/android/i.test(n)}function CA(n=mn()){return/blackberry/i.test(n)}function IA(n=mn()){return/webos/i.test(n)}function O_(n=mn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kD(n=mn()){return O_(n)&&!!window.navigator?.standalone}function PD(){return GI()&&document.documentMode===10}function NA(n=mn()){return O_(n)||RA(n)||IA(n)||CA(n)||/windows phone/i.test(n)||bA(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(n,e=[]){let t;switch(n){case"Browser":t=H0(mn());break;case"Worker":t=`${H0(mn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ur}/${s}`}/**
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
 */class VD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function LD(n,e={}){return yl(n,"GET","/v2/passwordPolicy",wd(n,e))}/**
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
 */const UD=6;class zD{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??UD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G0(this),this.idTokenSubscription=new G0(this),this.beforeStateQueue=new VD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bs(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Wo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qf(this,{idToken:e}),s=await di._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Rn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ff(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(Er(this));const t=e?st(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LD(this),t=new zD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ac("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await MD(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bs(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Wo.create(this,[bs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&_D(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Cc(n){return st(n)}class G0{constructor(e){this.auth=e,this.observer=null,this.addObserver=nN(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qD(n){x_=n}function FD(n){return x_.loadJS(n)}function jD(){return x_.gapiScript}function HD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(n,e){const t=bc(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Rr(l,e??{}))return a;Hi(a,"already-initialized")}return t.initialize({options:e})}function QD(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(bs);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function KD(n,e,t){const s=Cc(n);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=OA(e),{host:c,port:d}=YD(e),m=d===null?"":`:${d}`,g={url:`${l}//${c}${m}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(Rr(g,s.config.emulator)&&Rr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Qi(c)?(yd(`${l}//${c}${m}`),vd("Auth",!0)):XD()}function OA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function YD(n){const e=OA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:Q0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:Q0(c)}}}function Q0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function XD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return As("not implemented")}_getIdTokenResponse(e){return As("not implemented")}_linkToIdToken(e,t){return As("not implemented")}_getReauthenticationResolver(e){return As("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n,e){return yA(n,"POST","/v1/accounts:signInWithIdp",wd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D="http://localhost";class Va extends xA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Va(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new Va(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Zo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Zo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zo(e,t)}buildRequest(){const e={requestUri:$D,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_l(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dr extends Ic{constructor(){super("facebook.com")}static credential(e){return Va._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Ic{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Va._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ws.credential(t,s)}catch{return null}}}ws.GOOGLE_SIGN_IN_METHOD="google.com";ws.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ic{constructor(){super("github.com")}static credential(e){return Va._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ic{constructor(){super("twitter.com")}static credential(e,t){return Va._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mr.credential(t,s)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await di._fromIdTokenResponse(e,s,a),c=K0(s);return new La({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=K0(s);return new La({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function K0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends Ki{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,jf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new jf(e,t,s,a)}}function MA(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?jf._fromErrorAndOperation(n,l,e,s):l})}async function WD(n,e,t=!1){const s=await ac(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return La._forOperation(n,"link",s)}/**
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
 */async function ZD(n,e,t=!1){const{auth:s}=n;if(Rn(s.app))return Promise.reject(Er(s));const a="reauthenticate";try{const l=await ac(n,MA(s,a,e,n),t);Se(l.idToken,s,"internal-error");const c=D_(l.idToken);Se(c,s,"internal-error");const{sub:d}=c;return Se(n.uid===d,s,"user-mismatch"),La._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Hi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(n,e,t=!1){if(Rn(n.app))return Promise.reject(Er(n));const s="signIn",a=await MA(n,s,e),l=await La._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(n,e){return yA(n,"POST","/v1/accounts:signInWithCustomToken",wd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(n,e){if(Rn(n.app))return Promise.reject(Er(n));const t=Cc(n),s=await e2(t,{token:e,returnSecureToken:!0}),a=await La._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function n2(n,e,t,s){return st(n).onIdTokenChanged(e,t,s)}function i2(n,e,t){return st(n).beforeAuthStateChanged(e,t)}function s2(n,e,t,s){return st(n).onAuthStateChanged(e,t,s)}function r2(n){return st(n).signOut()}const Hf="__sak";/**
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
 */class kA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hf,"1"),this.storage.removeItem(Hf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=1e3,o2=10;class PA extends kA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,m)=>{this.notifyListeners(c,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);PD()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,o2):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},a2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}PA.type="LOCAL";const l2=PA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA extends kA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}VA.type="SESSION";const LA=VA;/**
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
 */function u2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Ad(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),m=await u2(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ad.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class c2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,m)=>{const g=k_("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return window}function h2(n){zi().location.href=n}/**
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
 */function UA(){return typeof zi().WorkerGlobalScope<"u"&&typeof zi().importScripts=="function"}async function f2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function d2(){return navigator?.serviceWorker?.controller||null}function p2(){return UA()?self:null}/**
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
 */const zA="firebaseLocalStorageDb",m2=1,Gf="firebaseLocalStorage",BA="fbase_key";class Nc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bd(n,e){return n.transaction([Gf],e?"readwrite":"readonly").objectStore(Gf)}function g2(){const n=indexedDB.deleteDatabase(zA);return new Nc(n).toPromise()}function Bg(){const n=indexedDB.open(zA,m2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Gf,{keyPath:BA})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Gf)?e(s):(s.close(),await g2(),e(await Bg()))})})}async function Y0(n,e,t){const s=bd(n,!0).put({[BA]:e,value:t});return new Nc(s).toPromise()}async function _2(n,e){const t=bd(n,!1).get(e),s=await new Nc(t).toPromise();return s===void 0?null:s.value}function X0(n,e){const t=bd(n,!0).delete(e);return new Nc(t).toPromise()}const y2=800,v2=3;class qA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>v2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ad._getInstance(p2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await f2(),!this.activeServiceWorker)return;this.sender=new c2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||d2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bg();return await Y0(e,Hf,"1"),await X0(e,Hf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Y0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>_2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>X0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=bd(a,!1).getAll();return new Nc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qA.type="LOCAL";const E2=qA;new Rc(3e4,6e4);/**
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
 */function FA(n,e){return e?bs(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class P_ extends xA{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function T2(n){return JD(n.auth,new P_(n),n.bypassAuthState)}function S2(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),ZD(t,new P_(n),n.bypassAuthState)}async function w2(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),WD(t,new P_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T2;case"linkViaPopup":case"linkViaRedirect":return w2;case"reauthViaPopup":case"reauthViaRedirect":return S2;default:Hi(this.auth,"internal-error")}}resolve(e){Os(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Os(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=new Rc(2e3,1e4);async function b2(n,e,t){if(Rn(n.app))return Promise.reject(mi(n,"operation-not-supported-in-this-environment"));const s=Cc(n);yD(n,e,M_);const a=FA(s,t);return new Ca(s,"signInViaPopup",e,a).executeNotNull()}class Ca extends jA{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ca.currentPopupAction&&Ca.currentPopupAction.cancel(),Ca.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Os(this.filter.length===1,"Popup operations only handle one event");const e=k_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ca.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A2.get())};e()}}Ca.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="pendingRedirect",bf=new Map;class C2 extends jA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=bf.get(this.auth._key());if(!e){try{const s=await I2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}bf.set(this.auth._key(),e)}return this.bypassAuthState||bf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I2(n,e){const t=O2(e),s=D2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function N2(n,e){bf.set(n._key(),e)}function D2(n){return bs(n._redirectPersistence)}function O2(n){return Af(R2,n.config.apiKey,n.name)}async function x2(n,e,t=!1){if(Rn(n.app))return Promise.reject(Er(n));const s=Cc(n),a=FA(s,e),c=await new C2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=600*1e3;class k2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!HA(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(mi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=M2&&this.cachedEventUids.clear(),this.cachedEventUids.has($0(e))}saveEventToCache(e){this.cachedEventUids.add($0(e)),this.lastProcessedEventTime=Date.now()}}function $0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function HA({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function P2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HA(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(n,e={}){return yl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U2=/^https?/;async function z2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await V2(n);for(const t of e)try{if(B2(t))return}catch{}Hi(n,"unauthorized-domain")}function B2(n){const e=Ug(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!U2.test(t))return!1;if(L2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const q2=new Rc(3e4,6e4);function W0(){const n=zi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function F2(n){return new Promise((e,t)=>{function s(){W0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W0(),t(mi(n,"network-request-failed"))},timeout:q2.get()})}if(zi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(zi().gapi?.load)s();else{const a=HD("iframefcb");return zi()[a]=()=>{gapi.load?s():t(mi(n,"network-request-failed"))},FD(`${jD()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Rf=null,e})}let Rf=null;function j2(n){return Rf=Rf||F2(n),Rf}/**
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
 */const H2=new Rc(5e3,15e3),G2="__/auth/iframe",Q2="emulator/auth/iframe",K2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X2(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?N_(e,Q2):`https://${n.config.authDomain}/${G2}`,s={apiKey:e.apiKey,appName:n.name,v:Ur},a=Y2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${_l(s).slice(1)}`}async function $2(n){const e=await j2(n),t=zi().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:X2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=mi(n,"network-request-failed"),d=zi().setTimeout(()=>{l(c)},H2.get());function m(){zi().clearTimeout(d),a(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const W2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z2=500,J2=600,eO="_blank",tO="http://localhost";class Z0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nO(n,e,t,s=Z2,a=J2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const m={...W2,width:s.toString(),height:a.toString(),top:l,left:c},g=mn().toLowerCase();t&&(d=AA(g)?eO:t),SA(g)&&(e=e||tO,m.scrollbars="yes");const y=Object.entries(m).reduce((S,[O,U])=>`${S}${O}=${U},`,"");if(kD(g)&&d!=="_self")return iO(e||"",d),new Z0(null);const T=window.open(e||"",d,y);Se(T,n,"popup-blocked");try{T.focus()}catch{}return new Z0(T)}function iO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const sO="__/auth/handler",rO="emulator/auth/handler",aO=encodeURIComponent("fac");async function J0(n,e,t,s,a,l){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ur,eventId:a};if(e instanceof M_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Lf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof Ic){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const m=await n._getAppCheckToken(),g=m?`#${aO}=${encodeURIComponent(m)}`:"";return`${oO(n)}?${_l(d).slice(1)}${g}`}function oO({config:n}){return n.emulator?N_(n,rO):`https://${n.authDomain}/${sO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="webStorageSupport";class lO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LA,this._completeRedirectFn=x2,this._overrideRedirectResult=N2}async _openPopup(e,t,s,a){Os(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await J0(e,t,s,Ug(),a);return nO(e,l,k_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await J0(e,t,s,Ug(),a);return h2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Os(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await $2(e),s=new k2(e);return t.register("authEvent",a=>(Se(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_g,{type:_g},a=>{const l=a?.[0]?.[_g];l!==void 0&&t(!!l),Hi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=z2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return NA()||wA()||O_()}}const uO=lO;var eS="@firebase/auth",tS="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fO(n){Cr(new Ns("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Se(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DA(n)},g=new BD(s,a,l,m);return QD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Cr(new Ns("auth-internal",e=>{const t=Cc(e.getProvider("auth").getImmediate());return(s=>new cO(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ri(eS,tS,hO(n)),ri(eS,tS,"esm2020")}/**
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
 */const dO=300,pO=aA("authIdTokenMaxAge")||dO;let nS=null;const mO=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>pO)return;const a=t?.token;nS!==a&&(nS=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function gO(n=Sd()){const e=bc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=GD(n,{popupRedirectResolver:uO,persistence:[E2,l2,LA]}),s=aA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=mO(l.toString());i2(t,c,()=>c(t.currentUser)),n2(t,d=>c(d))}}const a=sA("auth");return a&&KD(t,`http://${a}`),t}function _O(){return document.getElementsByTagName("head")?.[0]??document}qD({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=mi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",_O().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fO("Browser");var iS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,GA;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,b){function C(){}C.prototype=b.prototype,N.D=b.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(k,M,P){for(var I=Array(arguments.length-2),Jt=2;Jt<arguments.length;Jt++)I[Jt-2]=arguments[Jt];return b.prototype[M].apply(k,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,b,C){C||(C=0);var k=Array(16);if(typeof b=="string")for(var M=0;16>M;++M)k[M]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(M=0;16>M;++M)k[M]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=N.g[0],C=N.g[1],M=N.g[2];var P=N.g[3],I=b+(P^C&(M^P))+k[0]+3614090360&4294967295;b=C+(I<<7&4294967295|I>>>25),I=P+(M^b&(C^M))+k[1]+3905402710&4294967295,P=b+(I<<12&4294967295|I>>>20),I=M+(C^P&(b^C))+k[2]+606105819&4294967295,M=P+(I<<17&4294967295|I>>>15),I=C+(b^M&(P^b))+k[3]+3250441966&4294967295,C=M+(I<<22&4294967295|I>>>10),I=b+(P^C&(M^P))+k[4]+4118548399&4294967295,b=C+(I<<7&4294967295|I>>>25),I=P+(M^b&(C^M))+k[5]+1200080426&4294967295,P=b+(I<<12&4294967295|I>>>20),I=M+(C^P&(b^C))+k[6]+2821735955&4294967295,M=P+(I<<17&4294967295|I>>>15),I=C+(b^M&(P^b))+k[7]+4249261313&4294967295,C=M+(I<<22&4294967295|I>>>10),I=b+(P^C&(M^P))+k[8]+1770035416&4294967295,b=C+(I<<7&4294967295|I>>>25),I=P+(M^b&(C^M))+k[9]+2336552879&4294967295,P=b+(I<<12&4294967295|I>>>20),I=M+(C^P&(b^C))+k[10]+4294925233&4294967295,M=P+(I<<17&4294967295|I>>>15),I=C+(b^M&(P^b))+k[11]+2304563134&4294967295,C=M+(I<<22&4294967295|I>>>10),I=b+(P^C&(M^P))+k[12]+1804603682&4294967295,b=C+(I<<7&4294967295|I>>>25),I=P+(M^b&(C^M))+k[13]+4254626195&4294967295,P=b+(I<<12&4294967295|I>>>20),I=M+(C^P&(b^C))+k[14]+2792965006&4294967295,M=P+(I<<17&4294967295|I>>>15),I=C+(b^M&(P^b))+k[15]+1236535329&4294967295,C=M+(I<<22&4294967295|I>>>10),I=b+(M^P&(C^M))+k[1]+4129170786&4294967295,b=C+(I<<5&4294967295|I>>>27),I=P+(C^M&(b^C))+k[6]+3225465664&4294967295,P=b+(I<<9&4294967295|I>>>23),I=M+(b^C&(P^b))+k[11]+643717713&4294967295,M=P+(I<<14&4294967295|I>>>18),I=C+(P^b&(M^P))+k[0]+3921069994&4294967295,C=M+(I<<20&4294967295|I>>>12),I=b+(M^P&(C^M))+k[5]+3593408605&4294967295,b=C+(I<<5&4294967295|I>>>27),I=P+(C^M&(b^C))+k[10]+38016083&4294967295,P=b+(I<<9&4294967295|I>>>23),I=M+(b^C&(P^b))+k[15]+3634488961&4294967295,M=P+(I<<14&4294967295|I>>>18),I=C+(P^b&(M^P))+k[4]+3889429448&4294967295,C=M+(I<<20&4294967295|I>>>12),I=b+(M^P&(C^M))+k[9]+568446438&4294967295,b=C+(I<<5&4294967295|I>>>27),I=P+(C^M&(b^C))+k[14]+3275163606&4294967295,P=b+(I<<9&4294967295|I>>>23),I=M+(b^C&(P^b))+k[3]+4107603335&4294967295,M=P+(I<<14&4294967295|I>>>18),I=C+(P^b&(M^P))+k[8]+1163531501&4294967295,C=M+(I<<20&4294967295|I>>>12),I=b+(M^P&(C^M))+k[13]+2850285829&4294967295,b=C+(I<<5&4294967295|I>>>27),I=P+(C^M&(b^C))+k[2]+4243563512&4294967295,P=b+(I<<9&4294967295|I>>>23),I=M+(b^C&(P^b))+k[7]+1735328473&4294967295,M=P+(I<<14&4294967295|I>>>18),I=C+(P^b&(M^P))+k[12]+2368359562&4294967295,C=M+(I<<20&4294967295|I>>>12),I=b+(C^M^P)+k[5]+4294588738&4294967295,b=C+(I<<4&4294967295|I>>>28),I=P+(b^C^M)+k[8]+2272392833&4294967295,P=b+(I<<11&4294967295|I>>>21),I=M+(P^b^C)+k[11]+1839030562&4294967295,M=P+(I<<16&4294967295|I>>>16),I=C+(M^P^b)+k[14]+4259657740&4294967295,C=M+(I<<23&4294967295|I>>>9),I=b+(C^M^P)+k[1]+2763975236&4294967295,b=C+(I<<4&4294967295|I>>>28),I=P+(b^C^M)+k[4]+1272893353&4294967295,P=b+(I<<11&4294967295|I>>>21),I=M+(P^b^C)+k[7]+4139469664&4294967295,M=P+(I<<16&4294967295|I>>>16),I=C+(M^P^b)+k[10]+3200236656&4294967295,C=M+(I<<23&4294967295|I>>>9),I=b+(C^M^P)+k[13]+681279174&4294967295,b=C+(I<<4&4294967295|I>>>28),I=P+(b^C^M)+k[0]+3936430074&4294967295,P=b+(I<<11&4294967295|I>>>21),I=M+(P^b^C)+k[3]+3572445317&4294967295,M=P+(I<<16&4294967295|I>>>16),I=C+(M^P^b)+k[6]+76029189&4294967295,C=M+(I<<23&4294967295|I>>>9),I=b+(C^M^P)+k[9]+3654602809&4294967295,b=C+(I<<4&4294967295|I>>>28),I=P+(b^C^M)+k[12]+3873151461&4294967295,P=b+(I<<11&4294967295|I>>>21),I=M+(P^b^C)+k[15]+530742520&4294967295,M=P+(I<<16&4294967295|I>>>16),I=C+(M^P^b)+k[2]+3299628645&4294967295,C=M+(I<<23&4294967295|I>>>9),I=b+(M^(C|~P))+k[0]+4096336452&4294967295,b=C+(I<<6&4294967295|I>>>26),I=P+(C^(b|~M))+k[7]+1126891415&4294967295,P=b+(I<<10&4294967295|I>>>22),I=M+(b^(P|~C))+k[14]+2878612391&4294967295,M=P+(I<<15&4294967295|I>>>17),I=C+(P^(M|~b))+k[5]+4237533241&4294967295,C=M+(I<<21&4294967295|I>>>11),I=b+(M^(C|~P))+k[12]+1700485571&4294967295,b=C+(I<<6&4294967295|I>>>26),I=P+(C^(b|~M))+k[3]+2399980690&4294967295,P=b+(I<<10&4294967295|I>>>22),I=M+(b^(P|~C))+k[10]+4293915773&4294967295,M=P+(I<<15&4294967295|I>>>17),I=C+(P^(M|~b))+k[1]+2240044497&4294967295,C=M+(I<<21&4294967295|I>>>11),I=b+(M^(C|~P))+k[8]+1873313359&4294967295,b=C+(I<<6&4294967295|I>>>26),I=P+(C^(b|~M))+k[15]+4264355552&4294967295,P=b+(I<<10&4294967295|I>>>22),I=M+(b^(P|~C))+k[6]+2734768916&4294967295,M=P+(I<<15&4294967295|I>>>17),I=C+(P^(M|~b))+k[13]+1309151649&4294967295,C=M+(I<<21&4294967295|I>>>11),I=b+(M^(C|~P))+k[4]+4149444226&4294967295,b=C+(I<<6&4294967295|I>>>26),I=P+(C^(b|~M))+k[11]+3174756917&4294967295,P=b+(I<<10&4294967295|I>>>22),I=M+(b^(P|~C))+k[2]+718787259&4294967295,M=P+(I<<15&4294967295|I>>>17),I=C+(P^(M|~b))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+b&4294967295,N.g[1]=N.g[1]+(M+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+M&4294967295,N.g[3]=N.g[3]+P&4294967295}s.prototype.u=function(N,b){b===void 0&&(b=N.length);for(var C=b-this.blockSize,k=this.B,M=this.h,P=0;P<b;){if(M==0)for(;P<=C;)a(this,N,P),P+=this.blockSize;if(typeof N=="string"){for(;P<b;)if(k[M++]=N.charCodeAt(P++),M==this.blockSize){a(this,k),M=0;break}}else for(;P<b;)if(k[M++]=N[P++],M==this.blockSize){a(this,k),M=0;break}}this.h=M,this.o+=b},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var b=1;b<N.length-8;++b)N[b]=0;var C=8*this.o;for(b=N.length-8;b<N.length;++b)N[b]=C&255,C/=256;for(this.u(N),N=Array(16),b=C=0;4>b;++b)for(var k=0;32>k;k+=8)N[C++]=this.g[b]>>>k&255;return N};function l(N,b){var C=d;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=b(N)}function c(N,b){this.h=b;for(var C=[],k=!0,M=N.length-1;0<=M;M--){var P=N[M]|0;k&&P==b||(C[M]=P,k=!1)}this.g=C}var d={};function m(N){return-128<=N&&128>N?l(N,function(b){return new c([b|0],0>b?-1:0)}):new c([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return H(g(-N));for(var b=[],C=1,k=0;N>=C;k++)b[k]=N/C|0,C*=4294967296;return new c(b,0)}function y(N,b){if(N.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(N.charAt(0)=="-")return H(y(N.substring(1),b));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(b,8)),k=T,M=0;M<N.length;M+=8){var P=Math.min(8,N.length-M),I=parseInt(N.substring(M,M+P),b);8>P?(P=g(Math.pow(b,P)),k=k.j(P).add(g(I))):(k=k.j(C),k=k.add(g(I)))}return k}var T=m(0),S=m(1),O=m(16777216);n=c.prototype,n.m=function(){if(Q(this))return-H(this).m();for(var N=0,b=1,C=0;C<this.g.length;C++){var k=this.i(C);N+=(0<=k?k:4294967296+k)*b,b*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(U(this))return"0";if(Q(this))return"-"+H(this).toString(N);for(var b=g(Math.pow(N,6)),C=this,k="";;){var M=ye(C,b).g;C=ce(C,M.j(b));var P=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=M,U(C))return P+k;for(;6>P.length;)P="0"+P;k=P+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function U(N){if(N.h!=0)return!1;for(var b=0;b<N.g.length;b++)if(N.g[b]!=0)return!1;return!0}function Q(N){return N.h==-1}n.l=function(N){return N=ce(this,N),Q(N)?-1:U(N)?0:1};function H(N){for(var b=N.g.length,C=[],k=0;k<b;k++)C[k]=~N.g[k];return new c(C,~N.h).add(S)}n.abs=function(){return Q(this)?H(this):this},n.add=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],k=0,M=0;M<=b;M++){var P=k+(this.i(M)&65535)+(N.i(M)&65535),I=(P>>>16)+(this.i(M)>>>16)+(N.i(M)>>>16);k=I>>>16,P&=65535,I&=65535,C[M]=I<<16|P}return new c(C,C[C.length-1]&-2147483648?-1:0)};function ce(N,b){return N.add(H(b))}n.j=function(N){if(U(this)||U(N))return T;if(Q(this))return Q(N)?H(this).j(H(N)):H(H(this).j(N));if(Q(N))return H(this.j(H(N)));if(0>this.l(O)&&0>N.l(O))return g(this.m()*N.m());for(var b=this.g.length+N.g.length,C=[],k=0;k<2*b;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var M=0;M<N.g.length;M++){var P=this.i(k)>>>16,I=this.i(k)&65535,Jt=N.i(M)>>>16,gt=N.i(M)&65535;C[2*k+2*M]+=I*gt,oe(C,2*k+2*M),C[2*k+2*M+1]+=P*gt,oe(C,2*k+2*M+1),C[2*k+2*M+1]+=I*Jt,oe(C,2*k+2*M+1),C[2*k+2*M+2]+=P*Jt,oe(C,2*k+2*M+2)}for(k=0;k<b;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=b;k<2*b;k++)C[k]=0;return new c(C,0)};function oe(N,b){for(;(N[b]&65535)!=N[b];)N[b+1]+=N[b]>>>16,N[b]&=65535,b++}function re(N,b){this.g=N,this.h=b}function ye(N,b){if(U(b))throw Error("division by zero");if(U(N))return new re(T,T);if(Q(N))return b=ye(H(N),b),new re(H(b.g),H(b.h));if(Q(b))return b=ye(N,H(b)),new re(H(b.g),b.h);if(30<N.g.length){if(Q(N)||Q(b))throw Error("slowDivide_ only works with positive integers.");for(var C=S,k=b;0>=k.l(N);)C=pe(C),k=pe(k);var M=De(C,1),P=De(k,1);for(k=De(k,2),C=De(C,2);!U(k);){var I=P.add(k);0>=I.l(N)&&(M=M.add(C),P=I),k=De(k,1),C=De(C,1)}return b=ce(N,M.j(b)),new re(M,b)}for(M=T;0<=N.l(b);){for(C=Math.max(1,Math.floor(N.m()/b.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),P=g(C),I=P.j(b);Q(I)||0<I.l(N);)C-=k,P=g(C),I=P.j(b);U(P)&&(P=S),M=M.add(P),N=ce(N,I)}return new re(M,N)}n.A=function(N){return ye(this,N).h},n.and=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],k=0;k<b;k++)C[k]=this.i(k)&N.i(k);return new c(C,this.h&N.h)},n.or=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],k=0;k<b;k++)C[k]=this.i(k)|N.i(k);return new c(C,this.h|N.h)},n.xor=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],k=0;k<b;k++)C[k]=this.i(k)^N.i(k);return new c(C,this.h^N.h)};function pe(N){for(var b=N.g.length+1,C=[],k=0;k<b;k++)C[k]=N.i(k)<<1|N.i(k-1)>>>31;return new c(C,N.h)}function De(N,b){var C=b>>5;b%=32;for(var k=N.g.length-C,M=[],P=0;P<k;P++)M[P]=0<b?N.i(P+C)>>>b|N.i(P+C+1)<<32-b:N.i(P+C);return new c(M,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,GA=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Tr=c}).apply(typeof iS<"u"?iS:typeof self<"u"?self:typeof window<"u"?window:{});var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var QA,Fu,KA,Cf,qg,YA,XA,$A;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof pf=="object"&&pf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var L=h[A];if(!(L in v))break e;v=v[L]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,L={next:function(){if(!A&&v<h.length){var G=v++;return{value:_(G,h[G]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),h.apply(_,L)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,S.apply(null,arguments)}function O(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function U(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,L,G){for(var te=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)te[Be-2]=arguments[Be];return _.prototype[L].apply(A,te)}}function Q(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function H(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(m(A)){const L=h.length||0,G=A.length||0;h.length=L+G;for(let te=0;te<G;te++)h[L+te]=A[te]}else h.push(A)}}class ce{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function oe(h){return/^[\s\xa0]*$/.test(h)}function re(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ye(h){return ye[" "](h),h}ye[" "]=function(){};var pe=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function De(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function N(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function b(h){const _={};for(const v in h)_[v]=h[v];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(h,_){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)h[v]=A[v];for(let G=0;G<C.length;G++)v=C[G],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function M(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function P(h){d.setTimeout(()=>{throw h},0)}function I(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Jt{constructor(){this.h=this.g=null}add(_,v){const A=gt.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var gt=new ce(()=>new K,h=>h.reset());class K{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,fe=!1,Ge=new Jt,D=()=>{const h=d.Promise.resolve(void 0);ie=()=>{h.then(J)}};var J=()=>{for(var h;h=I();){try{h.h.call(h.g)}catch(v){P(v)}var _=gt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}fe=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var me=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Oe(h,_){if(ee.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(pe){e:{try{ye(_.nodeName);var L=!0;break e}catch{}L=!1}L||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Oe.aa.h.call(this)}}U(Oe,ee);var we={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var jt="closure_listenable_"+(1e6*Math.random()|0),ot=0;function Ei(h,_,v,A,L){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=L,this.key=++ot,this.da=this.fa=!1}function Ls(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Xi(h){this.src=h,this.g={},this.h=0}Xi.prototype.add=function(h,_,v,A,L){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var te=jr(h,_,A,L);return-1<te?(_=h[te],v||(_.fa=!1)):(_=new Ei(_,this.src,G,!!A,L),_.fa=v,h.push(_)),_};function Fr(h,_){var v=_.type;if(v in h.g){var A=h.g[v],L=Array.prototype.indexOf.call(A,_,void 0),G;(G=0<=L)&&Array.prototype.splice.call(A,L,1),G&&(Ls(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function jr(h,_,v,A){for(var L=0;L<h.length;++L){var G=h[L];if(!G.da&&G.listener==_&&G.capture==!!v&&G.ha==A)return L}return-1}var Hr="closure_lm_"+(1e6*Math.random()|0),Cl={};function Fc(h,_,v,A,L){if(Array.isArray(_)){for(var G=0;G<_.length;G++)Fc(h,_[G],v,A,L);return null}return v=jc(v),h&&h[jt]?h.K(_,v,g(A)?!!A.capture:!1,L):Hn(h,_,v,!1,A,L)}function Hn(h,_,v,A,L,G){if(!_)throw Error("Invalid event type");var te=g(L)?!!L.capture:!!L,Be=Wa(h);if(Be||(h[Hr]=Be=new Xi(h)),v=Be.add(_,v,A,te,G),v.proxy)return v;if(A=rp(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)me||(L=te),L===void 0&&(L=!1),h.addEventListener(_.toString(),A,L);else if(h.attachEvent)h.attachEvent(Gr(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function rp(){function h(v){return _.call(h.src,h.listener,v)}const _=ap;return h}function Il(h,_,v,A,L){if(Array.isArray(_))for(var G=0;G<_.length;G++)Il(h,_[G],v,A,L);else A=g(A)?!!A.capture:!!A,v=jc(v),h&&h[jt]?(h=h.i,_=String(_).toString(),_ in h.g&&(G=h.g[_],v=jr(G,v,A,L),-1<v&&(Ls(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete h.g[_],h.h--)))):h&&(h=Wa(h))&&(_=h.g[_.toString()],h=-1,_&&(h=jr(_,v,A,L)),(v=-1<h?_[h]:null)&&$a(v))}function $a(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[jt])Fr(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(Gr(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Wa(_))?(Fr(v,h),v.h==0&&(v.src=null,_[Hr]=null)):Ls(h)}}}function Gr(h){return h in Cl?Cl[h]:Cl[h]="on"+h}function ap(h,_){if(h.da)h=!0;else{_=new Oe(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&$a(h),h=v.call(A,_)}return h}function Wa(h){return h=h[Hr],h instanceof Xi?h:null}var Nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function jc(h){return typeof h=="function"?h:(h[Nl]||(h[Nl]=function(_){return h.handleEvent(_)}),h[Nl])}function _t(){se.call(this),this.i=new Xi(this),this.M=this,this.F=null}U(_t,se),_t.prototype[jt]=!0,_t.prototype.removeEventListener=function(h,_,v,A){Il(this,h,_,v,A)};function $e(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new ee(_,h);else if(_ instanceof ee)_.target=_.target||h;else{var L=_;_=new ee(A,h),k(_,L)}if(L=!0,v)for(var G=v.length-1;0<=G;G--){var te=_.g=v[G];L=xn(te,A,!0,_)&&L}if(te=_.g=h,L=xn(te,A,!0,_)&&L,L=xn(te,A,!1,_)&&L,v)for(G=0;G<v.length;G++)te=_.g=v[G],L=xn(te,A,!1,_)&&L}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Ls(v[A]);delete h.g[_],h.h--}}this.F=null},_t.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},_t.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function xn(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var L=!0,G=0;G<_.length;++G){var te=_[G];if(te&&!te.da&&te.capture==v){var Be=te.listener,Ut=te.ha||te.src;te.fa&&Fr(h.i,te),L=Be.call(Ut,A)!==!1&&L}}return L&&!A.defaultPrevented}function un(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Hc(h){h.g=un(()=>{h.g=null,h.i&&(h.i=!1,Hc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class op extends se{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Hc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(h){se.call(this),this.h=h,this.g={}}U(Qr,se);var Kr=[];function Yr(h){De(h.g,function(_,v){this.g.hasOwnProperty(v)&&$a(_)},h),h.g={}}Qr.prototype.N=function(){Qr.aa.N.call(this),Yr(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ai=d.JSON.stringify,Za=d.JSON.parse,Xr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Dl(){}Dl.prototype.h=null;function Ol(h){return h.h||(h.h=h.i())}function xl(){}var $i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wi(){ee.call(this,"d")}U(Wi,ee);function Ml(){ee.call(this,"c")}U(Ml,ee);var Ti={},kl=null;function Us(){return kl=kl||new _t}Ti.La="serverreachability";function Ja(h){ee.call(this,Ti.La,h)}U(Ja,ee);function zs(h){const _=Us();$e(_,new Ja(_))}Ti.STAT_EVENT="statevent";function Gc(h,_){ee.call(this,Ti.STAT_EVENT,h),this.stat=_}U(Gc,ee);function ft(h){const _=Us();$e(_,new Gc(_,h))}Ti.Ma="timingevent";function Lt(h,_){ee.call(this,Ti.Ma,h),this.size=_}U(Lt,ee);function It(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function Pl(h,_,v,A,L,G){h.info(function(){if(h.g)if(G)for(var te="",Be=G.split("&"),Ut=0;Ut<Be.length;Ut++){var qe=Be[Ut].split("=");if(1<qe.length){var Gt=qe[0];qe=qe[1];var zt=Gt.split("_");te=2<=zt.length&&zt[1]=="type"?te+(Gt+"="+qe+"&"):te+(Gt+"=redacted&")}}else te=null;else te=G;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+_+`
`+v+`
`+te})}function lp(h,_,v,A,L,G,te){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+_+`
`+v+`
`+G+" "+te})}function Bs(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+$r(h,v)+(A?" "+A:"")})}function Qc(h,_){h.info(function(){return"TIMEOUT: "+_})}Gn.prototype.info=function(){};function $r(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var G=L[0];if(G!="noop"&&G!="stop"&&G!="close")for(var te=1;te<L.length;te++)L[te]=""}}}}return ai(v)}catch{return _}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Si;function wi(){}U(wi,Dl),wi.prototype.g=function(){return new XMLHttpRequest},wi.prototype.i=function(){return{}},Si=new wi;function _n(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new Qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}var Vl={},eo={};function oi(h,_,v){h.L=1,h.v=ta(Mn(_)),h.m=v,h.P=!0,Ji(h,null)}function Ji(h,_){h.F=Date.now(),Wr(h),h.A=Mn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Fl(v.i,"t",A),h.C=0,v=h.j.J,h.h=new wt,h.g=lh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new op(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(Kr[0]=L.toString()),L=Kr);for(var G=0;G<L.length;G++){var te=Fc(v,L[G],A||_.handleEvent,!1,_.h||_);if(!te)break;_.g[te.key]=te}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),zs(),Pl(h.i,h.u,h.A,h.l,h.R,h.m)}_n.prototype.ca=function(h){h=h.target;const _=this.M;_&&Xn(h)==3?_.j():this.Y(h)},_n.prototype.Y=function(h){try{if(h==this.g)e:{const zt=Xn(this.g);var _=this.g.Ba();const os=this.g.Z();if(!(3>zt)&&(zt!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||zt!=4||_==7||(_==8||0>=os?zs(3):zs(2)),Fs(this);var v=this.g.Z();this.X=v;t:if(Kc(this)){var A=eh(this.g);h="";var L=A.length,G=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),Ai(this);var te="";break t}this.h.i=new d.TextDecoder}for(_=0;_<L;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(G&&_==L-1)});A.length=0,this.h.g+=h,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=v==200,lp(this.i,this.u,this.A,this.l,this.R,zt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Ut=this.g;if((Be=Ut.g?Ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(Be)){var qe=Be;break t}}qe=null}if(v=qe)Bs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zr(this,v);else{this.o=!1,this.s=3,ft(12),en(this),Ai(this);break e}}if(this.P){v=!0;let tn;for(;!this.J&&this.C<te.length;)if(tn=Yc(this,te),tn==eo){zt==4&&(this.s=4,ft(14),v=!1),Bs(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Vl){this.s=4,ft(15),Bs(this.i,this.l,te,"[Invalid Chunk]"),v=!1;break}else Bs(this.i,this.l,tn,null),Zr(this,tn);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),zt!=4||te.length!=0||this.h.h||(this.s=1,ft(16),v=!1),this.o=this.o&&v,!v)Bs(this.i,this.l,te,"[Invalid Chunked Response]"),en(this),Ai(this);else if(0<te.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ua(Gt),Gt.M=!0,ft(11))}}else Bs(this.i,this.l,te,null),Zr(this,te);zt==4&&en(this),this.o&&!this.J&&(zt==4?rh(this.j,this):(this.o=!1,Wr(this)))}else dp(this.g),v==400&&0<te.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),en(this),Ai(this)}}}catch{}finally{}};function Kc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Yc(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?eo:(v=Number(_.substring(v,A)),isNaN(v)?Vl:(A+=1,A+v>_.length?eo:(_=_.slice(A,A+v),h.C=A+v,_)))}_n.prototype.cancel=function(){this.J=!0,en(this)};function Wr(h){h.S=Date.now()+h.I,Xc(h,h.I)}function Xc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=It(S(h.ba,h),_)}function Fs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}_n.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Qc(this.i,this.A),this.L!=2&&(zs(),ft(17)),en(this),this.s=2,Ai(this)):Xc(this,this.S-h)};function Ai(h){h.j.G==0||h.J||rh(h.j,h)}function en(h){Fs(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Yr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Zr(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Ll(v.h,h))){if(!h.K&&Ll(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)fo(v),co(v);else break e;Kl(v),ft(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=It(S(v.Za,v),6e3));if(1>=no(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else as(v,11)}else if((h.K||v.g==h)&&fo(v),!oe(_))for(L=v.Da.g.parse(_),_=0;_<L.length;_++){let qe=L[_];if(v.T=qe[0],qe=qe[1],v.G==2)if(qe[0]=="c"){v.K=qe[1],v.ia=qe[2];const Gt=qe[3];Gt!=null&&(v.la=Gt,v.j.info("VER="+v.la));const zt=qe[4];zt!=null&&(v.Aa=zt,v.j.info("SVER="+v.Aa));const os=qe[5];os!=null&&typeof os=="number"&&0<os&&(A=1.5*os,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const tn=h.g;if(tn){const Oi=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var G=A.h;G.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(io(G,G.h),G.h=null))}if(A.D){const Xl=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Xl&&(A.ya=Xl,et(A.I,A.D,Xl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var te=h;if(A.qa=oh(A,A.J?A.ia:null,A.W),te.K){yn(A.h,te);var Be=te,Ut=A.L;Ut&&(Be.I=Ut),Be.B&&(Fs(Be),Wr(Be)),A.g=te}else ih(A);0<v.i.length&&ho(v)}else qe[0]!="stop"&&qe[0]!="close"||as(v,7);else v.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?as(v,7):Gl(v):qe[0]!="noop"&&v.l&&v.l.ta(qe),v.v=0)}}zs(4)}catch{}}var $c=class{constructor(h,_){this.g=h,this.map=_}};function es(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function to(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function no(h){return h.h?1:h.g?h.g.size:0}function Ll(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function io(h,_){h.g?h.g.add(_):h.h=_}function yn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}es.prototype.cancel=function(){if(this.i=Ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Ul(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return Q(h.i)}function up(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function so(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function zl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=so(h),A=up(h),L=A.length,G=0;G<L;G++)_.call(void 0,A[G],v&&v[G],h)}var Jr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cp(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),L=null;if(0<=A){var G=h[v].substring(0,A);L=h[v].substring(A+1)}else G=h[v];_(G,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Nt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Nt){this.h=h.h,ea(this,h.j),this.o=h.o,this.g=h.g,js(this,h.s),this.l=h.l;var _=h.i,v=new ns;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ts(this,v),this.m=h.m}else h&&(_=String(h).match(Jr))?(this.h=!1,ea(this,_[1]||"",!0),this.o=Qn(_[2]||""),this.g=Qn(_[3]||"",!0),js(this,_[4]),this.l=Qn(_[5]||"",!0),ts(this,_[6]||"",!0),this.m=Qn(_[7]||"")):(this.h=!1,this.i=new ns(null,this.h))}Nt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(na(_,Bl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(na(_,Bl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(na(v,v.charAt(0)=="/"?hp:ql,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",na(v,ro)),h.join("")};function Mn(h){return new Nt(h)}function ea(h,_,v){h.j=v?Qn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function js(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ts(h,_,v){_ instanceof ns?(h.i=_,Zc(h.i,h.h)):(v||(_=na(_,fp)),h.i=new ns(_,h.h))}function et(h,_,v){h.i.set(_,v)}function ta(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Qn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function na(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Wc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Wc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Bl=/[#\/\?@]/g,ql=/[#\?:]/g,hp=/[#\?]/g,fp=/[#\?@]/g,ro=/#/g;function ns(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Kn(h){h.g||(h.g=new Map,h.h=0,h.i&&cp(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=ns.prototype,n.add=function(h,_){Kn(this),this.i=null,h=bi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function is(h,_){Kn(h),_=bi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ss(h,_){return Kn(h),_=bi(h,_),h.g.has(_)}n.forEach=function(h,_){Kn(this),this.g.forEach(function(v,A){v.forEach(function(L){h.call(_,L,A,this)},this)},this)},n.na=function(){Kn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const L=h[A];for(let G=0;G<L.length;G++)v.push(_[A])}return v},n.V=function(h){Kn(this);let _=[];if(typeof h=="string")ss(this,h)&&(_=_.concat(this.g.get(bi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return Kn(this),this.i=null,h=bi(this,h),ss(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Fl(h,_,v){is(h,_),0<v.length&&(h.i=null,h.g.set(bi(h,_),Q(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const G=encodeURIComponent(String(A)),te=this.V(A);for(A=0;A<te.length;A++){var L=G;te[A]!==""&&(L+="="+encodeURIComponent(String(te[A]))),h.push(L)}}return this.i=h.join("&")};function bi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Zc(h,_){_&&!h.j&&(Kn(h),h.i=null,h.g.forEach(function(v,A){var L=A.toLowerCase();A!=L&&(is(this,A),Fl(this,L,v))},h)),h.j=_}function ia(h,_){const v=new Gn;if(d.Image){const A=new Image;A.onload=O(Yn,v,"TestLoadImage: loaded",!0,_,A),A.onerror=O(Yn,v,"TestLoadImage: error",!1,_,A),A.onabort=O(Yn,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=O(Yn,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function li(h,_){const v=new Gn,A=new AbortController,L=setTimeout(()=>{A.abort(),Yn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(G=>{clearTimeout(L),G.ok?Yn(v,"TestPingServer: ok",!0,_):Yn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(L),Yn(v,"TestPingServer: error",!1,_)})}function Yn(h,_,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function sa(){this.g=new Xr}function Ri(h,_,v){const A=v||"";try{zl(h,function(L,G){let te=L;g(L)&&(te=ai(L)),_.push(A+G+"="+encodeURIComponent(te))})}catch(L){throw _.push(A+"type="+encodeURIComponent("_badmap")),L}}function Hs(h){this.l=h.Ub||null,this.j=h.eb||!1}U(Hs,Dl),Hs.prototype.g=function(){return new rs(this.l,this.j)},Hs.prototype.i=(function(h){return function(){return h}})({});function rs(h,_){_t.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(rs,_t),n=rs.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ii(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ii(this)),this.g&&(this.readyState=3,Ii(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function jl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ci(this):Ii(this),this.readyState==3&&jl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ci(this))},n.Qa=function(h){this.g&&(this.response=h,Ci(this))},n.ga=function(){this.g&&Ci(this)};function Ci(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ii(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ii(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Hl(h){let _="";return De(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function Ht(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Hl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):et(h,_,v))}function Ye(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ye,_t);var ao=/^https?$/i,ra=["POST","PUT"];n=Ye.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Si.g(),this.v=this.o?Ol(this.o):Ol(Si),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(G){Jc(this,G);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const G of A.keys())v.set(G,A.get(G));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),L=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ra,_,void 0))||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,te]of v)this.g.setRequestHeader(G,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{aa(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){Jc(this,G)}};function Jc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,oo(h),Ni(h)}function oo(h){h.A||(h.A=!0,$e(h,"complete"),$e(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,$e(this,"complete"),$e(this,"abort"),Ni(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ni(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lo(this):this.bb())},n.bb=function(){lo(this)};function lo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Xn(h)!=4||h.Z()!=2)){if(h.u&&Xn(h)==4)un(h.Ea,0,h);else if($e(h,"readystatechange"),Xn(h)==4){h.h=!1;try{const te=h.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=te===0){var L=String(h.D).match(Jr)[1]||null;!L&&d.self&&d.self.location&&(L=d.self.location.protocol.slice(0,-1)),A=!ao.test(L?L.toLowerCase():"")}v=A}if(v)$e(h,"complete"),$e(h,"success");else{h.m=6;try{var G=2<Xn(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",oo(h)}}finally{Ni(h)}}}}function Ni(h,_){if(h.g){aa(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||$e(h,"ready");try{v.onreadystatechange=A}catch{}}}function aa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Xn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Za(_)}};function eh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function dp(h){const _={};h=(h.g&&2<=Xn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(oe(h[A]))continue;var v=M(h[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=_[L]||[];_[L]=G,G.push(v)}N(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oa(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function uo(h){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oa("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oa("baseRetryDelayMs",5e3,h),this.cb=oa("retryDelaySeedMs",1e4,h),this.Wa=oa("forwardChannelMaxRetries",2,h),this.wa=oa("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new es(h&&h.concurrentRequestLimit),this.Da=new sa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=uo.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){ft(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=oh(this,null,this.W),ho(this)};function Gl(h){if(th(h),h.G==3){var _=h.U++,v=Mn(h.I);if(et(v,"SID",h.K),et(v,"RID",_),et(v,"TYPE","terminate"),la(h,v),_=new _n(h,h.j,_),_.L=2,_.v=ta(Mn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=lh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Wr(_)}ah(h)}function co(h){h.g&&(ua(h),h.g.cancel(),h.g=null)}function th(h){co(h),h.u&&(d.clearTimeout(h.u),h.u=null),fo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function ho(h){if(!to(h.h)&&!h.s){h.s=!0;var _=h.Ga;ie||D(),fe||(ie(),fe=!0),Ge.add(_,h),h.B=0}}function pp(h,_){return no(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=It(S(h.Ga,h,_),Yl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new _n(this,this.j,h);let G=this.o;if(this.S&&(G?(G=b(G),k(G,this.S)):G=this.S),this.m!==null||this.O||(L.H=G,G=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=nh(this,L,_),v=Mn(this.I),et(v,"RID",h),et(v,"CVER",22),this.D&&et(v,"X-HTTP-Session-Id",this.D),la(this,v),G&&(this.O?_="headers="+encodeURIComponent(String(Hl(G)))+"&"+_:this.m&&Ht(v,this.m,G)),io(this.h,L),this.Ua&&et(v,"TYPE","init"),this.P?(et(v,"$req",_),et(v,"SID","null"),L.T=!0,oi(L,v,null)):oi(L,v,_),this.G=2}}else this.G==3&&(h?Ql(this,h):this.i.length==0||to(this.h)||Ql(this))};function Ql(h,_){var v;_?v=_.l:v=h.U++;const A=Mn(h.I);et(A,"SID",h.K),et(A,"RID",v),et(A,"AID",h.T),la(h,A),h.m&&h.o&&Ht(A,h.m,h.o),v=new _n(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=nh(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),io(h.h,v),oi(v,A,_)}function la(h,_){h.H&&De(h.H,function(v,A){et(_,A,v)}),h.l&&zl({},function(v,A){et(_,A,v)})}function nh(h,_,v){v=Math.min(h.i.length,v);var A=h.l?S(h.l.Na,h.l,h):null;e:{var L=h.i;let G=-1;for(;;){const te=["count="+v];G==-1?0<v?(G=L[0].g,te.push("ofs="+G)):G=0:te.push("ofs="+G);let Be=!0;for(let Ut=0;Ut<v;Ut++){let qe=L[Ut].g;const Gt=L[Ut].map;if(qe-=G,0>qe)G=Math.max(0,L[Ut].g-100),Be=!1;else try{Ri(Gt,te,"req"+qe+"_")}catch{A&&A(Gt)}}if(Be){A=te.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function ih(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ie||D(),fe||(ie(),fe=!0),Ge.add(_,h),h.v=0}}function Kl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=It(S(h.Fa,h),Yl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=It(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),co(this),sh(this))};function ua(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function sh(h){h.g=new _n(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Mn(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),la(h,_),h.m&&h.o&&Ht(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ta(Mn(_)),v.m=null,v.P=!0,Ji(v,h)}n.Za=function(){this.C!=null&&(this.C=null,co(this),Kl(this),ft(19))};function fo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function rh(h,_){var v=null;if(h.g==_){fo(h),ua(h),h.g=null;var A=2}else if(Ll(h.h,_))v=_.D,yn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var L=h.B;A=Us(),$e(A,new Lt(A,v)),ho(h)}else ih(h);else if(L=_.s,L==3||L==0&&0<_.X||!(A==1&&pp(h,_)||A==2&&Kl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),L){case 1:as(h,5);break;case 4:as(h,10);break;case 3:as(h,6);break;default:as(h,2)}}}function Yl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function as(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),A=h.Xa;const L=!A;A=new Nt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ea(A,"https"),ta(A),L?ia(A.toString(),v):li(A.toString(),v)}else ft(2);h.G=0,h.l&&h.l.sa(_),ah(h),th(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function ah(h){if(h.G=0,h.ka=[],h.l){const _=Ul(h.h);(_.length!=0||h.i.length!=0)&&(H(h.ka,_),H(h.ka,h.i),h.h.i.length=0,Q(h.i),h.i.length=0),h.l.ra()}}function oh(h,_,v){var A=v instanceof Nt?Mn(v):new Nt(v);if(A.g!="")_&&(A.g=_+"."+A.g),js(A,A.s);else{var L=d.location;A=L.protocol,_=_?_+"."+L.hostname:L.hostname,L=+L.port;var G=new Nt(null);A&&ea(G,A),_&&(G.g=_),L&&js(G,L),v&&(G.l=v),A=G}return v=h.D,_=h.ya,v&&_&&et(A,v,_),et(A,"VER",h.la),la(h,A),A}function lh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ye(new Hs({eb:v})):new Ye(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function po(){}po.prototype.g=function(h,_){return new vn(h,_)};function vn(h,_){_t.call(this),this.g=new uo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!oe(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!oe(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Di(this)}U(vn,_t),vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Gl(this.g)},vn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=ai(h),h=v);_.i.push(new $c(_.Ya++,h)),_.G==3&&ho(_)},vn.prototype.N=function(){this.g.l=null,delete this.j,Gl(this.g),delete this.g,vn.aa.N.call(this)};function ch(h){Wi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}U(ch,Wi);function hh(){Ml.call(this),this.status=1}U(hh,Ml);function Di(h){this.g=h}U(Di,uh),Di.prototype.ua=function(){$e(this.g,"a")},Di.prototype.ta=function(h){$e(this.g,new ch(h))},Di.prototype.sa=function(h){$e(this.g,new hh)},Di.prototype.ra=function(){$e(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,$A=function(){return new po},XA=function(){return Us()},YA=Ti,qg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,Cf=qs,Zi.COMPLETE="complete",KA=Zi,xl.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Fu=xl,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,QA=Ye}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});const sS="@firebase/firestore",rS="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let vl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Td("@firebase/firestore");function Ho(){return Ua.logLevel}function le(n,...e){if(Ua.logLevel<=Le.DEBUG){const t=e.map(V_);Ua.debug(`Firestore (${vl}): ${n}`,...t)}}function xs(n,...e){if(Ua.logLevel<=Le.ERROR){const t=e.map(V_);Ua.error(`Firestore (${vl}): ${n}`,...t)}}function rl(n,...e){if(Ua.logLevel<=Le.WARN){const t=e.map(V_);Ua.warn(`Firestore (${vl}): ${n}`,...t)}}function V_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,WA(n,s,t)}function WA(n,e,t){let s=`FIRESTORE (${vl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xs(s),new Error(s)}function Xe(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||WA(e,a,s)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Ki{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dn.UNAUTHENTICATED)))}shutdown(){}}class vO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class EO{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new Cs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Cs,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await a(this.currentUser)}))},d=m=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((m=>d(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Cs)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string",31837,{l:s}),new ZA(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new dn(e)}}class TO{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class SO{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new TO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(dn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class aS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const s=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new aS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new aS(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=AO(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ue(n,e){return n<e?-1:n>e?1:0}function Fg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return yg(a)===yg(l)?Ue(a,l):yg(a)?1:-1}return Ue(n.length,e.length)}const bO=55296,RO=57343;function yg(n){const e=n.charCodeAt(0);return e>=bO&&e<=RO}function al(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="__name__";class Li{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Li.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Li?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Li.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ue(e.length,t.length)}static compareSegments(e,t){const s=Li.isNumericId(e),a=Li.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Li.extractNumericId(e).compare(Li.extractNumericId(t)):Fg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class ut extends Li{construct(e,t,s){return new ut(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new ut(t)}static emptyPath(){return new ut([])}}const CO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends Li{construct(e,t,s){return new on(e,t,s)}static isValidIdentifier(e){return CO.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oS}static keyField(){return new on([oS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ae($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ae($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ae($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new on(t)}static emptyPath(){return new on([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(ut.fromString(e))}static fromName(e){return new de(ut.fromString(e).popFirst(5))}static empty(){return new de(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new ut(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(n,e,t){if(!t)throw new ae($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function IO(n,e,t,s){if(e===!0&&s===!0)throw new ae($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lS(n){if(!de.isDocumentKey(n))throw new ae($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uS(n){if(de.isDocumentKey(n))throw new ae($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function eb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Rd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve(12329,{type:typeof n})}function jn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rd(n);throw new ae($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Pt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Dc(n,e){if(!eb(n))throw new ae($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ae($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=-62135596800,hS=1e6;class ht{static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*hS);return new ht(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cS)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hS}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ht._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dc(e,ht._jsonSchema))return new ht(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ht._jsonSchemaVersion="firestore/timestamp/1.0",ht._jsonSchema={type:Pt("string",ht._jsonSchemaVersion),seconds:Pt("number"),nanoseconds:Pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const oc=-1;function NO(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(s===1e9?new ht(t+1,0):new ht(t,s));return new Ir(a,de.empty(),e)}function DO(n){return new Ir(n.readTime,n.key,oc)}class Ir{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ir(Ae.min(),de.empty(),oc)}static max(){return new Ir(Ae.max(),de.empty(),oc)}}function OO(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(n.documentKey,e.documentKey),t!==0?t:Ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==xO)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.reject(t)}static resolve(e){return new Z(((t,s)=>{t(e)}))}static reject(e){return new Z(((t,s)=>{s(e)}))}static waitFor(e){return new Z(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(m=>s(m)))})),c=!0,l===a&&t()}))}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next((a=>a?Z.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new Z(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next((y=>{c[g]=y,++d,d===l&&s(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new Z(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function kO(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Tl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Cd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Cd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=-1;function Id(n){return n==null}function Qf(n){return n===0&&1/n==-1/0}function PO(n){return typeof n=="number"&&Number.isInteger(n)&&!Qf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="";function VO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fS(e)),e=LO(n.get(t),e);return fS(e)}function LO(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case tb:t+="";break;default:t+=l}}return t}function fS(n){return n+tb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt=class jg{constructor(e,t){this.comparator=e,this.root=t||Sr.EMPTY}insert(e,t){return new jg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Sr.BLACK,null,null))}remove(e){return new jg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Sr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mf(this.root,e,this.comparator,!1)}getReverseIterator(){return new mf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mf(this.root,e,this.comparator,!0)}},mf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Sr=class Ts{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ts.RED,this.left=a??Ts.EMPTY,this.right=l??Ts.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ts(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ts.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ts.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ts.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ts.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}};Sr.EMPTY=null,Sr.RED=!0,Sr.BLACK=!1;Sr.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Sr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pS(this.data.getIterator())}getIteratorFrom(e){return new pS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ft(this.comparator);return t.data=e,t}}class pS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(on.comparator)}static empty(){return new qn([])}unionWith(e){let t=new Ft(on.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return al(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class ib extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ib("Invalid base64 string: "+l):l}})(e);return new ln(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new ln(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const UO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(n){if(Xe(!!n,39018),typeof n=="string"){let e=0;const t=UO.exec(n);if(Xe(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dr(n){return typeof n=="string"?ln.fromBase64String(n):ln.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="server_timestamp",rb="__type__",ab="__previous_value__",ob="__local_write_time__";function z_(n){return(n?.mapValue?.fields||{})[rb]?.stringValue===sb}function Nd(n){const e=n.mapValue.fields[ab];return z_(e)?Nd(e):e}function lc(n){const e=Nr(n.mapValue.fields[ob].timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,t,s,a,l,c,d,m,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=y}}const Kf="(default)";class uc{constructor(e,t){this.projectId=e,this.database=t||Kf}static empty(){return new uc("","")}get isDefaultDatabase(){return this.database===Kf}isEqual(e){return e instanceof uc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="__type__",BO="__max__",gf={mapValue:{}},ub="__vector__",Yf="value";function Or(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?z_(n)?4:FO(n)?9007199254740991:qO(n)?10:11:ve(28295,{value:n})}function Gi(n,e){if(n===e)return!0;const t=Or(n);if(t!==Or(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return lc(n).isEqual(lc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Nr(a.timestampValue),d=Nr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Dr(a.bytesValue).isEqual(Dr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Rt(a.geoPointValue.latitude)===Rt(l.geoPointValue.latitude)&&Rt(a.geoPointValue.longitude)===Rt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Rt(a.integerValue)===Rt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Rt(a.doubleValue),d=Rt(l.doubleValue);return c===d?Qf(c)===Qf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return al(n.arrayValue.values||[],e.arrayValue.values||[],Gi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(dS(c)!==dS(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!Gi(c[m],d[m])))return!1;return!0})(n,e);default:return ve(52216,{left:n})}}function cc(n,e){return(n.values||[]).find((t=>Gi(t,e)))!==void 0}function ol(n,e){if(n===e)return 0;const t=Or(n),s=Or(e);if(t!==s)return Ue(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ue(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=Rt(l.integerValue||l.doubleValue),m=Rt(c.integerValue||c.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1})(n,e);case 3:return mS(n.timestampValue,e.timestampValue);case 4:return mS(lc(n),lc(e));case 5:return Fg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Dr(l),m=Dr(c);return d.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),m=c.split("/");for(let g=0;g<d.length&&g<m.length;g++){const y=Ue(d[g],m[g]);if(y!==0)return y}return Ue(d.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Ue(Rt(l.latitude),Rt(c.latitude));return d!==0?d:Ue(Rt(l.longitude),Rt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return gS(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},m=c.fields||{},g=d[Yf]?.arrayValue,y=m[Yf]?.arrayValue,T=Ue(g?.values?.length||0,y?.values?.length||0);return T!==0?T:gS(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===gf.mapValue&&c===gf.mapValue)return 0;if(l===gf.mapValue)return 1;if(c===gf.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),g=c.fields||{},y=Object.keys(g);m.sort(),y.sort();for(let T=0;T<m.length&&T<y.length;++T){const S=Fg(m[T],y[T]);if(S!==0)return S;const O=ol(d[m[T]],g[y[T]]);if(O!==0)return O}return Ue(m.length,y.length)})(n.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function mS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ue(n,e);const t=Nr(n),s=Nr(e),a=Ue(t.seconds,s.seconds);return a!==0?a:Ue(t.nanos,s.nanos)}function gS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=ol(t[a],s[a]);if(l)return l}return Ue(t.length,s.length)}function ll(n){return Hg(n)}function Hg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Nr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Dr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return de.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Hg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Hg(t.fields[c])}`;return a+"}"})(n.mapValue):ve(61005,{value:n})}function If(n){switch(Or(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nd(n);return e?16+If(e):16;case 5:return 2*n.stringValue.length;case 6:return Dr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+If(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return zr(s.fields,((l,c)=>{a+=l.length+If(c)})),a})(n.mapValue);default:throw ve(13486,{value:n})}}function _S(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gg(n){return!!n&&"integerValue"in n}function B_(n){return!!n&&"arrayValue"in n}function yS(n){return!!n&&"nullValue"in n}function vS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nf(n){return!!n&&"mapValue"in n}function qO(n){return(n?.mapValue?.fields||{})[lb]?.stringValue===ub}function Yu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return zr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Yu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yu(n.arrayValue.values[t]);return e}return{...n}}function FO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===BO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Nf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yu(t)}setAll(e){let t=on.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Yu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Nf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Nf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){zr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Cn(Yu(this.value))}}function cb(n){const e=[];return zr(n.fields,((t,s)=>{const a=new on([t]);if(Nf(s)){const l=cb(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new pn(e,0,Ae.min(),Ae.min(),Ae.min(),Cn.empty(),0)}static newFoundDocument(e,t,s,a){return new pn(e,1,t,Ae.min(),s,a,0)}static newNoDocument(e,t){return new pn(e,2,t,Ae.min(),Ae.min(),Cn.empty(),0)}static newUnknownDocument(e,t){return new pn(e,3,t,Ae.min(),Ae.min(),Cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xf{constructor(e,t){this.position=e,this.inclusive=t}}function ES(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=de.comparator(de.fromName(c.referenceValue),t.key):s=ol(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function TS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Gi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hc{constructor(e,t="asc"){this.field=e,this.dir=t}}function jO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class hb{}class kt extends hb{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new GO(e,t,s):t==="array-contains"?new YO(e,s):t==="in"?new XO(e,s):t==="not-in"?new $O(e,s):t==="array-contains-any"?new WO(e,s):new kt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new QO(e,s):new KO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ol(t,this.value)):t!==null&&Or(this.value)===Or(t)&&this.matchesComparison(ol(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yi extends hb{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new yi(e,t)}matches(e){return fb(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fb(n){return n.op==="and"}function db(n){return HO(n)&&fb(n)}function HO(n){for(const e of n.filters)if(e instanceof yi)return!1;return!0}function Qg(n){if(n instanceof kt)return n.field.canonicalString()+n.op.toString()+ll(n.value);if(db(n))return n.filters.map((e=>Qg(e))).join(",");{const e=n.filters.map((t=>Qg(t))).join(",");return`${n.op}(${e})`}}function pb(n,e){return n instanceof kt?(function(s,a){return a instanceof kt&&s.op===a.op&&s.field.isEqual(a.field)&&Gi(s.value,a.value)})(n,e):n instanceof yi?(function(s,a){return a instanceof yi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&pb(c,a.filters[d])),!0):!1})(n,e):void ve(19439)}function mb(n){return n instanceof kt?(function(t){return`${t.field.canonicalString()} ${t.op} ${ll(t.value)}`})(n):n instanceof yi?(function(t){return t.op.toString()+" {"+t.getFilters().map(mb).join(" ,")+"}"})(n):"Filter"}class GO extends kt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class QO extends kt{constructor(e,t){super(e,"in",t),this.keys=gb("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class KO extends kt{constructor(e,t){super(e,"not-in",t),this.keys=gb("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function gb(n,e){return(e.arrayValue?.values||[]).map((t=>de.fromName(t.referenceValue)))}class YO extends kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return B_(t)&&cc(t.arrayValue,this.value)}}class XO extends kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cc(this.value.arrayValue,t)}}class $O extends kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(cc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cc(this.value.arrayValue,t)}}class WO extends kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!B_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>cc(this.value.arrayValue,s)))}}/**
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
 */class ZO{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function SS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new ZO(n,e,t,s,a,l,c)}function q_(n){const e=be(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Qg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Id(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>ll(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>ll(s))).join(",")),e.Te=t}return e.Te}function F_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!jO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pb(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!TS(n.startAt,e.startAt)&&TS(n.endAt,e.endAt)}function Kg(n){return de.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function JO(n,e,t,s,a,l,c,d){return new Sl(n,e,t,s,a,l,c,d)}function Dd(n){return new Sl(n)}function wS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _b(n){return n.collectionGroup!==null}function Xu(n){const e=be(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ft(on.comparator);return c.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new hc(l,s))})),t.has(on.keyField().canonicalString())||e.Ie.push(new hc(on.keyField(),s))}return e.Ie}function Bi(n){const e=be(n);return e.Ee||(e.Ee=ex(e,Xu(n))),e.Ee}function ex(n,e){if(n.limitType==="F")return SS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new hc(a.field,l)}));const t=n.endAt?new Xf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Xf(n.startAt.position,n.startAt.inclusive):null;return SS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Yg(n,e){const t=n.filters.concat([e]);return new Sl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $f(n,e,t){return new Sl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Od(n,e){return F_(Bi(n),Bi(e))&&n.limitType===e.limitType}function yb(n){return`${q_(Bi(n))}|lt:${n.limitType}`}function Go(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>mb(a))).join(", ")}]`),Id(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>ll(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>ll(a))).join(",")),`Target(${s})`})(Bi(n))}; limitType=${n.limitType})`}function xd(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):de.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of Xu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,m){const g=ES(c,d,m);return c.inclusive?g<=0:g<0})(s.startAt,Xu(s),a)||s.endAt&&!(function(c,d,m){const g=ES(c,d,m);return c.inclusive?g>=0:g>0})(s.endAt,Xu(s),a))})(n,e)}function tx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vb(n){return(e,t)=>{let s=!1;for(const a of Xu(n)){const l=nx(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function nx(n,e,t){const s=n.field.isKeyField()?de.comparator(e.key,t.key):(function(l,c,d){const m=c.data.field(l),g=d.data.field(l);return m!==null&&g!==null?ol(m,g):ve(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return nb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=new Vt(de.comparator);function Ms(){return ix}const Eb=new Vt(de.comparator);function ju(...n){let e=Eb;for(const t of n)e=e.insert(t.key,t);return e}function Tb(n){let e=Eb;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ia(){return $u()}function Sb(){return $u()}function $u(){return new Qa((n=>n.toString()),((n,e)=>n.isEqual(e)))}const sx=new Vt(de.comparator),rx=new Ft(de.comparator);function ze(...n){let e=rx;for(const t of n)e=e.add(t);return e}const ax=new Ft(Ue);function ox(){return ax}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qf(e)?"-0":e}}function wb(n){return{integerValue:""+n}}function lx(n,e){return PO(e)?wb(e):j_(n,e)}/**
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
 */class Md{constructor(){this._=void 0}}function ux(n,e,t){return n instanceof fc?(function(a,l){const c={fields:{[rb]:{stringValue:sb},[ob]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&z_(l)&&(l=Nd(l)),l&&(c.fields[ab]=l),{mapValue:c}})(t,e):n instanceof dc?bb(n,e):n instanceof pc?Rb(n,e):(function(a,l){const c=Ab(a,l),d=AS(c)+AS(a.Ae);return Gg(c)&&Gg(a.Ae)?wb(d):j_(a.serializer,d)})(n,e)}function cx(n,e,t){return n instanceof dc?bb(n,e):n instanceof pc?Rb(n,e):t}function Ab(n,e){return n instanceof Wf?(function(s){return Gg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class fc extends Md{}class dc extends Md{constructor(e){super(),this.elements=e}}function bb(n,e){const t=Cb(e);for(const s of n.elements)t.some((a=>Gi(a,s)))||t.push(s);return{arrayValue:{values:t}}}class pc extends Md{constructor(e){super(),this.elements=e}}function Rb(n,e){let t=Cb(e);for(const s of n.elements)t=t.filter((a=>!Gi(a,s)));return{arrayValue:{values:t}}}class Wf extends Md{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function AS(n){return Rt(n.integerValue||n.doubleValue)}function Cb(n){return B_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,t){this.field=e,this.transform=t}}function fx(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof dc&&a instanceof dc||s instanceof pc&&a instanceof pc?al(s.elements,a.elements,Gi):s instanceof Wf&&a instanceof Wf?Gi(s.Ae,a.Ae):s instanceof fc&&a instanceof fc})(n.transform,e.transform)}class dx{constructor(e,t){this.version=e,this.transformResults=t}}class gi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gi}static exists(e){return new gi(void 0,e)}static updateTime(e){return new gi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Df(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class kd{}function Ib(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Db(n.key,gi.none()):new Oc(n.key,n.data,gi.none());{const t=n.data,s=Cn.empty();let a=new Ft(on.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Br(n.key,s,new qn(a.toArray()),gi.none())}}function px(n,e,t){n instanceof Oc?(function(a,l,c){const d=a.value.clone(),m=RS(a.fieldTransforms,l,c.transformResults);d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Br?(function(a,l,c){if(!Df(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=RS(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(Nb(a)),m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Wu(n,e,t,s){return n instanceof Oc?(function(l,c,d,m){if(!Df(l.precondition,c))return d;const g=l.value.clone(),y=CS(l.fieldTransforms,m,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Br?(function(l,c,d,m){if(!Df(l.precondition,c))return d;const g=CS(l.fieldTransforms,m,c),y=c.data;return y.setAll(Nb(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return Df(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function mx(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=Ab(s.transform,a||null);l!=null&&(t===null&&(t=Cn.empty()),t.set(s.field,l))}return t||null}function bS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&al(s,a,((l,c)=>fx(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Oc extends kd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Br extends kd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Nb(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function RS(n,e,t){const s=new Map;Xe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,cx(c,d,t[a]))}return s}function CS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,ux(l,c,e))}return s}class Db extends kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gx extends kd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&px(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Wu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Wu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Sb();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const m=Ib(c,d);m!==null&&s.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ze())}isEqual(e){return this.batchId===e.batchId&&al(this.mutations,e.mutations,((t,s)=>bS(t,s)))&&al(this.baseMutations,e.baseMutations,((t,s)=>bS(t,s)))}}class H_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Xe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return sx})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new H_(e,t,s,a)}}/**
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
 */class yx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,je;function Ex(n){switch(n){case $.OK:return ve(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ve(15467,{code:n})}}function Ob(n){if(n===void 0)return xs("GRPC error has no .code"),$.UNKNOWN;switch(n){case xt.OK:return $.OK;case xt.CANCELLED:return $.CANCELLED;case xt.UNKNOWN:return $.UNKNOWN;case xt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case xt.INTERNAL:return $.INTERNAL;case xt.UNAVAILABLE:return $.UNAVAILABLE;case xt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case xt.NOT_FOUND:return $.NOT_FOUND;case xt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case xt.ABORTED:return $.ABORTED;case xt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case xt.DATA_LOSS:return $.DATA_LOSS;default:return ve(39323,{code:n})}}(je=xt||(xt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tx(){return new TextEncoder}/**
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
 */const Sx=new Tr([4294967295,4294967295],0);function IS(n){const e=Tx().encode(n),t=new GA;return t.update(e),new Uint8Array(t.digest())}function NS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Tr([t,s],0),new Tr([a,l],0)]}class G_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Hu(`Invalid padding: ${t}`);if(s<0)throw new Hu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Hu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Hu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Tr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Tr.fromNumber(s)));return a.compare(Sx)===1&&(a=new Tr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=IS(e),[s,a]=NS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new G_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=IS(e),[s,a]=NS(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Hu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,xc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Pd(Ae.min(),a,new Vt(Ue),Ms(),ze())}}class xc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new xc(s,t,ze(),ze(),ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class xb{constructor(e,t){this.targetId=e,this.Ce=t}}class Mb{constructor(e,t,s=ln.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class DS{constructor(){this.ve=0,this.Fe=OS(),this.Me=ln.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ze(),t=ze(),s=ze();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:ve(38017,{changeType:l})}})),new xc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=OS()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class wx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ms(),this.Je=_f(),this.He=_f(),this.Ye=new Vt(Ue)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Kg(l))if(s===0){const c=new de(l.path);this.et(t,c,pn.newNoDocument(c,Ae.min()))}else Xe(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),m=d?this.ct(d,e,c):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Dr(s).toUint8Array()}catch(m){if(m instanceof ib)return rl("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new G_(c,a,l)}catch(m){return rl(m instanceof Hu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Kg(d.target)){const m=new de(d.target.path);this.It(m).has(c)||this.Et(c,m)||this.et(c,m,pn.newNoDocument(m,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=ze();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Pd(e,t,this.Ye,this.je,s);return this.je=Ms(),this.Je=_f(),this.He=_f(),this.Ye=new Vt(Ue),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new DS,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ft(Ue),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ft(Ue),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new DS),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _f(){return new Vt(de.comparator)}function OS(){return new Vt(de.comparator)}const Ax={asc:"ASCENDING",desc:"DESCENDING"},bx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rx={and:"AND",or:"OR"};class Cx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xg(n,e){return n.useProto3Json||Id(e)?e:{value:e}}function Zf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ix(n,e){return Zf(n,e.toTimestamp())}function qi(n){return Xe(!!n,49232),Ae.fromTimestamp((function(t){const s=Nr(t);return new ht(s.seconds,s.nanos)})(n))}function Q_(n,e){return $g(n,e).canonicalString()}function $g(n,e){const t=(function(a){return new ut(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Pb(n){const e=ut.fromString(n);return Xe(Bb(e),10190,{key:e.toString()}),e}function Wg(n,e){return Q_(n.databaseId,e.path)}function vg(n,e){const t=Pb(e);if(t.get(1)!==n.databaseId.projectId)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new de(Lb(t))}function Vb(n,e){return Q_(n.databaseId,e)}function Nx(n){const e=Pb(n);return e.length===4?ut.emptyPath():Lb(e)}function Zg(n){return new ut(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lb(n){return Xe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xS(n,e,t){return{name:Wg(n,e),fields:t.value.mapValue.fields}}function Dx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ve(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(Xe(y===void 0||typeof y=="string",58123),ln.fromBase64String(y||"")):(Xe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),ln.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const y=g.code===void 0?$.UNKNOWN:Ob(g.code);return new ae(y,g.message||"")})(c);t=new Mb(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=vg(n,s.document.name),l=qi(s.document.updateTime),c=s.document.createTime?qi(s.document.createTime):Ae.min(),d=new Cn({mapValue:{fields:s.document.fields}}),m=pn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new Of(g,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=vg(n,s.document),l=s.readTime?qi(s.readTime):Ae.min(),c=pn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Of([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=vg(n,s.document),l=s.removedTargetIds||[];t=new Of([],l,a,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new vx(a,l),d=s.targetId;t=new xb(d,c)}}return t}function Ox(n,e){let t;if(e instanceof Oc)t={update:xS(n,e.key,e.value)};else if(e instanceof Db)t={delete:Wg(n,e.key)};else if(e instanceof Br)t={update:xS(n,e.key,e.data),updateMask:Bx(e.fieldMask)};else{if(!(e instanceof gx))return ve(16599,{Vt:e.type});t={verify:Wg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof fc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof dc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof pc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Wf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw ve(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:Ix(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(n,e.precondition)),t}function xx(n,e){return n&&n.length>0?(Xe(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?qi(a.updateTime):qi(l);return c.isEqual(Ae.min())&&(c=qi(l)),new dx(c,a.transformResults||[])})(t,e)))):[]}function Mx(n,e){return{documents:[Vb(n,e.path)]}}function kx(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Vb(n,a);const l=(function(g){if(g.length!==0)return zb(yi.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(S){return{field:Qo(S.field),direction:Lx(S.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Xg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function Px(n){let e=Nx(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Xe(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const S=Ub(T);return S instanceof yi&&db(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((S=>(function(U){return new hc(Ko(U.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(S)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let S;return S=typeof T=="object"?T.value:T,Id(S)?null:S})(t.limit));let m=null;t.startAt&&(m=(function(T){const S=!!T.before,O=T.values||[];return new Xf(O,S)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const S=!T.before,O=T.values||[];return new Xf(O,S)})(t.endAt)),JO(e,a,c,l,d,"F",m,g)}function Vx(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ub(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ko(t.unaryFilter.field);return kt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Ko(t.unaryFilter.field);return kt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ko(t.unaryFilter.field);return kt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ko(t.unaryFilter.field);return kt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(n):n.fieldFilter!==void 0?(function(t){return kt.create(Ko(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return yi.create(t.compositeFilter.filters.map((s=>Ub(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(n):ve(30097,{filter:n})}function Lx(n){return Ax[n]}function Ux(n){return bx[n]}function zx(n){return Rx[n]}function Qo(n){return{fieldPath:n.canonicalString()}}function Ko(n){return on.fromServerFormat(n.fieldPath)}function zb(n){return n instanceof kt?(function(t){if(t.op==="=="){if(vS(t.value))return{unaryFilter:{field:Qo(t.field),op:"IS_NAN"}};if(yS(t.value))return{unaryFilter:{field:Qo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vS(t.value))return{unaryFilter:{field:Qo(t.field),op:"IS_NOT_NAN"}};if(yS(t.value))return{unaryFilter:{field:Qo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qo(t.field),op:Ux(t.op),value:t.value}}})(n):n instanceof yi?(function(t){const s=t.getFilters().map((a=>zb(a)));return s.length===1?s[0]:{compositeFilter:{op:zx(t.op),filters:s}}})(n):ve(54877,{filter:n})}function Bx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Bb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t,s,a,l=Ae.min(),c=Ae.min(),d=ln.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.yt=e}}function Fx(n){const e=Px({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$f(e,e.limit,"L"):e}/**
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
 */class jx{constructor(){this.Cn=new Hx}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Ir.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class Hx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Ft(ut.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Ft(ut.comparator)).toArray()}}/**
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
 */const MS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qb=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(qb,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ul(0)}static cr(){return new ul(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="LruGarbageCollector",Gx=1048576;function PS([n,e],[t,s]){const a=Ue(n,t);return a===0?Ue(e,s):a}class Qx{constructor(e){this.Ir=e,this.buffer=new Ft(PS),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();PS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Kx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){le(kS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Tl(t)?le(kS,"Ignoring IndexedDB error during garbage collection: ",t):await El(t)}await this.Vr(3e5)}))}}class Yx{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(Cd.ce);const s=new Qx(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(MS)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),MS):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,m,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),Ho()<=Le.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-y}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function Xx(n,e){return new Yx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this.changes=new Qa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Wu(s.mutation,a,qn.empty(),ht.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ze()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ze()){const a=Ia();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=ju();return l.forEach(((d,m)=>{c=c.insert(d,m.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Ia();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ze())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Ms();const c=$u(),d=(function(){return $u()})();return t.forEach(((m,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Br)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Wu(y.mutation,g,y.mutation.getFieldMask(),ht.now())):c.set(g.key,qn.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>d.set(g,new Wx(y,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=$u();let a=new Vt(((c,d)=>c-d)),l=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((m=>{const g=t.get(m);if(g===null)return;let y=s.get(m)||qn.empty();y=d.applyToLocalView(g,y),s.set(m,y);const T=(a.get(d.batchId)||ze()).add(m);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),g=m.key,y=m.value,T=Sb();y.forEach((S=>{if(!l.has(S)){const O=Ib(t.get(S),s.get(S));O!==null&&T.set(S,O),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Z.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return de.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_b(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(Ia());let d=oc,m=l;return c.next((g=>Z.forEach(g,((y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?Z.resolve():this.remoteDocumentCache.getEntry(e,y).next((S=>{m=m.insert(y,S)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,m,g,ze()))).next((y=>({batchId:d,changes:Tb(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let a=ju();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=ju();return this.indexManager.getCollectionParents(e,l).next((d=>Z.forEach(d,(m=>{const g=(function(T,S){return new Sl(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((T,S)=>{c=c.insert(T,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((m,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,pn.newInvalidDocument(y)))}));let d=ju();return c.forEach(((m,g)=>{const y=l.get(m);y!==void 0&&Wu(y.mutation,g,qn.empty(),ht.now()),xd(t,g)&&(d=d.insert(m,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:qi(a.createTime)}})(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:Fx(a.bundledQuery),readTime:qi(a.readTime)}})(t)),Z.resolve()}}/**
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
 */class eM{constructor(){this.overlays=new Vt(de.comparator),this.qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ia();return Z.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=Ia(),l=t.length+1,c=new de(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const m=d.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Vt(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Ia(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Ia(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return Z.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new yx(t,s));let l=this.qr.get(t);l===void 0&&(l=ze(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class tM{constructor(){this.sessionToken=ln.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.Qr=new Ft($t.$r),this.Ur=new Ft($t.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new $t(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new $t(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new de(new ut([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new ut([])),s=new $t(t,e),a=new $t(t,e+1);let l=ze();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new $t(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Ue(e.Yr,t.Yr)}static Kr(e,t){return Ue(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ft($t.$r)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new _x(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?U_:this.tr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ft(Ue);return t.forEach((a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),Z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;de.isDocumentKey(l)||(l=l.child(""));const c=new $t(new de(l),0);let d=new Ft(Ue);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(m.Yr)),!0)}),c),Z.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Xe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Z.forEach(t.mutations,(a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new $t(t,0),a=this.Zr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.ri=e,this.docs=(function(){return new Vt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():pn.newInvalidDocument(t))}getEntries(e,t){let s=Ms();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():pn.newInvalidDocument(a))})),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ms();const c=t.path,d=new de(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:g,value:{document:y}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||OO(DO(y),s)<=0||(a.has(y.key)||xd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){ve(9500)}ii(e,t){return Z.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new sM(this)}getSize(e){return Z.resolve(this.size)}}class sM extends $x{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),Z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.persistence=e,this.si=new Qa((t=>q_(t)),F_),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new K_,this.targetCount=0,this.ai=ul.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),Z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ul(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Pr(t),Z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),Z.waitFor(l).next((()=>a))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,t){this.ui={},this.overlays={},this.ci=new Cd(0),this.li=!1,this.li=!0,this.hi=new tM,this.referenceDelegate=e(this),this.Pi=new rM(this),this.indexManager=new jx,this.remoteDocumentCache=(function(a){return new iM(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new qx(t),this.Ii=new Jx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new nM(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){le("MemoryPersistence","Starting transaction:",e);const a=new aM(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return Z.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class aM extends MO{constructor(e){super(),this.currentSequenceNumber=e}}class Y_{constructor(e){this.persistence=e,this.Ri=new K_,this.Vi=null}static mi(e){return new Y_(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.fi,(s=>{const a=de.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ae.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return Z.or([()=>Z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Jf{constructor(e,t){this.persistence=e,this.pi=new Qa((s=>VO(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=Xx(this,t)}static mi(e,t){return new Jf(e,t)}Ei(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return Z.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?Z.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ae.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=If(e.data.value)),t}br(e,t,s){return Z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=ze(),a=ze();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new X_(e,t.fromCache,s,a)}}/**
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
 */class oM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lM{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return KI()?8:kO(mn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new oM;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Ho()<=Le.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Z.resolve()):(Ho()<=Le.DEBUG&&le("QueryEngine","Query:",Go(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Ho()<=Le.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bi(t))):Z.resolve())}ys(e,t){if(wS(t))return Z.resolve(null);let s=Bi(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=$f(t,null,"F"),s=Bi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=ze(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((m=>{const g=this.Ds(t,d);return this.Cs(t,g,c,m.readTime)?this.ys(e,$f(t,null,"F")):this.vs(e,g,t,m)}))))})))))}ws(e,t,s,a){return wS(t)||a.isEqual(Ae.min())?Z.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?Z.resolve(null):(Ho()<=Le.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Go(t)),this.vs(e,c,t,NO(a,oc)).next((d=>d)))}))}Ds(e,t){let s=new Ft(vb(e));return t.forEach(((a,l)=>{xd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Ho()<=Le.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Go(t)),this.ps.getDocumentsMatchingQuery(e,t,Ir.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="LocalStore",uM=3e8;class cM{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Vt(Ue),this.xs=new Qa((l=>q_(l)),F_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function hM(n,e,t,s){return new cM(n,e,t,s)}async function jb(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let m=ze();for(const g of a){c.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(s,m).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function fM(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,m,g,y){const T=g.batch,S=T.keys();let O=Z.resolve();return S.forEach((U=>{O=O.next((()=>y.getEntry(m,U))).next((Q=>{const H=g.docVersions.get(U);Xe(H!==null,48541),Q.version.compareTo(H)<0&&(T.applyToRemoteDocument(Q,g),Q.isValidDocument()&&(Q.setReadTime(g.commitVersion),y.addEntry(Q)))}))})),O.next((()=>d.mutationQueue.removeMutationBatch(m,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let m=ze();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(m=m.add(d.batch.mutations[g].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function Hb(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function dM(n,e){const t=be(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,T)=>{const S=a.get(T);if(!S)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let O=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(ln.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):y.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(y.resumeToken,s)),a=a.insert(T,O),(function(Q,H,ce){return Q.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=uM?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0})(S,O,y)&&d.push(t.Pi.updateTargetData(l,O))}));let m=Ms(),g=ze();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push(pM(l,c,e.documentUpdates).next((y=>{m=y.ks,g=y.qs}))),!s.isEqual(Ae.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return Z.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,g))).next((()=>m))})).then((l=>(t.Ms=a,l)))}function pM(n,e,t){let s=ze(),a=ze();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Ms();return t.forEach(((d,m)=>{const g=l.get(d);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(d,m.readTime),c=c.insert(d,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(d,m)):le($_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",m.version)})),{ks:c,qs:a}}))}function mM(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=U_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function gM(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,Z.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new _r(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Jg(n,e,t){const s=be(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Tl(c))throw c;le($_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function VS(n,e,t){const s=be(n);let a=Ae.min(),l=ze();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(m,g,y){const T=be(m),S=T.xs.get(y);return S!==void 0?Z.resolve(T.Ms.get(S)):T.Pi.getTargetData(g,y)})(s,c,Bi(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((m=>{l=m}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ae.min(),t?l:ze()))).next((d=>(_M(s,tx(e),d),{documents:d,Qs:l})))))}function _M(n,e,t){let s=n.Os.get(e)||Ae.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class LS{constructor(){this.activeTargetIds=ox()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yM{constructor(){this.Mo=new LS,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new LS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vM{Oo(e){}shutdown(){}}/**
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
 */const US="ConnectivityMonitor";class zS{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){le(US,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){le(US,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yf=null;function e_(){return yf===null?yf=(function(){return 268435456+Math.round(2147483648*Math.random())})():yf++,"0x"+yf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="RestConnection",EM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class TM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Kf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=e_(),d=this.zo(e,t.toUriEncodedString());le(Eg,`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,a,l);const{host:g}=new URL(d),y=Qi(g);return this.Jo(e,d,m,s,y).then((T=>(le(Eg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw rl(Eg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=EM[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="WebChannelConnection";class wM extends TM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=e_();return new Promise(((d,m)=>{const g=new QA;g.setWithCredentials(!0),g.listenOnce(KA.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Cf.NO_ERROR:const T=g.getResponseJson();le(fn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Cf.TIMEOUT:le(fn,`RPC '${e}' ${c} timed out`),m(new ae($.DEADLINE_EXCEEDED,"Request time out"));break;case Cf.HTTP_ERROR:const S=g.getStatus();if(le(fn,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const U=O?.error;if(U&&U.status&&U.message){const Q=(function(ce){const oe=ce.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(oe)>=0?oe:$.UNKNOWN})(U.status);m(new ae(Q,U.message))}else m(new ae($.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ae($.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{le(fn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);le(fn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=e_(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=$A(),d=XA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const y=l.join("");le(fn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const T=c.createWebChannel(y,m);this.I_(T);let S=!1,O=!1;const U=new SM({Yo:H=>{O?le(fn,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(S||(le(fn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),le(fn,`RPC '${e}' stream ${a} sending:`,H),T.send(H))},Zo:()=>T.close()}),Q=(H,ce,oe)=>{H.listen(ce,(re=>{try{oe(re)}catch(ye){setTimeout((()=>{throw ye}),0)}}))};return Q(T,Fu.EventType.OPEN,(()=>{O||(le(fn,`RPC '${e}' stream ${a} transport opened.`),U.o_())})),Q(T,Fu.EventType.CLOSE,(()=>{O||(O=!0,le(fn,`RPC '${e}' stream ${a} transport closed`),U.a_(),this.E_(T))})),Q(T,Fu.EventType.ERROR,(H=>{O||(O=!0,rl(fn,`RPC '${e}' stream ${a} transport errored. Name:`,H.name,"Message:",H.message),U.a_(new ae($.UNAVAILABLE,"The operation could not be completed")))})),Q(T,Fu.EventType.MESSAGE,(H=>{if(!O){const ce=H.data[0];Xe(!!ce,16349);const oe=ce,re=oe?.error||oe[0]?.error;if(re){le(fn,`RPC '${e}' stream ${a} received error:`,re);const ye=re.status;let pe=(function(b){const C=xt[b];if(C!==void 0)return Ob(C)})(ye),De=re.message;pe===void 0&&(pe=$.INTERNAL,De="Unknown error status: "+ye+" with message "+re.message),O=!0,U.a_(new ae(pe,De)),T.close()}else le(fn,`RPC '${e}' stream ${a} received:`,ce),U.u_(ce)}})),Q(d,YA.STAT_EVENT,(H=>{H.stat===qg.PROXY?le(fn,`RPC '${e}' stream ${a} detected buffering proxy`):H.stat===qg.NOPROXY&&le(fn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Tg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){return new Cx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&le("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="PersistentStream";class Qb{constructor(e,t,s,a,l,c,d,m){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gb(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(xs(t.toString()),xs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ae($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(BS,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(le(BS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class AM extends Qb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Dx(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ae.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?qi(c.readTime):Ae.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Zg(this.serializer),t.addTarget=(function(l,c){let d;const m=c.target;if(d=Kg(m)?{documents:Mx(l,m)}:{query:kx(l,m).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=kb(l,c.resumeToken);const g=Xg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ae.min())>0){d.readTime=Zf(l,c.snapshotVersion.toTimestamp());const g=Xg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=Vx(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Zg(this.serializer),t.removeTarget=e,this.q_(t)}}class bM extends Qb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=xx(e.writeResults,e.commitTime),s=qi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Zg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Ox(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{}class CM extends RM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,$g(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,$g(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ae($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class IM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xs(t),this.aa=!1):le("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="RemoteStore";class NM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Ka(this)&&(le(za,"Restarting streams for network reachability change."),await(async function(m){const g=be(m);g.Ea.add(4),await Mc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Ld(g)})(this))}))})),this.Ra=new IM(s,a)}}async function Ld(n){if(Ka(n))for(const e of n.da)await e(!0)}async function Mc(n){for(const e of n.da)await e(!1)}function Kb(n,e){const t=be(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ey(t)?J_(t):wl(t).O_()&&Z_(t,e))}function W_(n,e){const t=be(n),s=wl(t);t.Ia.delete(e),s.O_()&&Yb(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ka(t)&&t.Ra.set("Unknown"))}function Z_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wl(n).Y_(e)}function Yb(n,e){n.Va.Ue(e),wl(n).Z_(e)}function J_(n){n.Va=new wx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),wl(n).start(),n.Ra.ua()}function ey(n){return Ka(n)&&!wl(n).x_()&&n.Ia.size>0}function Ka(n){return be(n).Ea.size===0}function Xb(n){n.Va=void 0}async function DM(n){n.Ra.set("Online")}async function OM(n){n.Ia.forEach(((e,t)=>{Z_(n,e)}))}async function xM(n,e){Xb(n),ey(n)?(n.Ra.ha(e),J_(n)):n.Ra.set("Unknown")}async function MM(n,e,t){if(n.Ra.set("Online"),e instanceof Mb&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){le(za,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ed(n,s)}else if(e instanceof Of?n.Va.Ze(e):e instanceof xb?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ae.min()))try{const s=await Hb(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(m.resumeToken,c))}})),d.targetMismatches.forEach(((m,g)=>{const y=l.Ia.get(m);if(!y)return;l.Ia.set(m,y.withResumeToken(ln.EMPTY_BYTE_STRING,y.snapshotVersion)),Yb(l,m);const T=new _r(y.target,m,g,y.sequenceNumber);Z_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){le(za,"Failed to raise snapshot:",s),await ed(n,s)}}async function ed(n,e,t){if(!Tl(e))throw e;n.Ea.add(1),await Mc(n),n.Ra.set("Offline"),t||(t=()=>Hb(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{le(za,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ld(n)}))}function $b(n,e){return e().catch((t=>ed(n,t,e)))}async function Ud(n){const e=be(n),t=xr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:U_;for(;kM(e);)try{const a=await mM(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,PM(e,a)}catch(a){await ed(e,a)}Wb(e)&&Zb(e)}function kM(n){return Ka(n)&&n.Ta.length<10}function PM(n,e){n.Ta.push(e);const t=xr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Wb(n){return Ka(n)&&!xr(n).x_()&&n.Ta.length>0}function Zb(n){xr(n).start()}async function VM(n){xr(n).ra()}async function LM(n){const e=xr(n);for(const t of n.Ta)e.ea(t.mutations)}async function UM(n,e,t){const s=n.Ta.shift(),a=H_.from(s,e,t);await $b(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Ud(n)}async function zM(n,e){e&&xr(n).X_&&await(async function(s,a){if((function(c){return Ex(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();xr(s).B_(),await $b(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Ud(s)}})(n,e),Wb(n)&&Zb(n)}async function qS(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),le(za,"RemoteStore received new credentials");const s=Ka(t);t.Ea.add(3),await Mc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ld(t)}async function BM(n,e){const t=be(n);e?(t.Ea.delete(2),await Ld(t)):e||(t.Ea.add(2),await Mc(t),t.Ra.set("Unknown"))}function wl(n){return n.ma||(n.ma=(function(t,s,a){const l=be(t);return l.sa(),new AM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:DM.bind(null,n),t_:OM.bind(null,n),r_:xM.bind(null,n),H_:MM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),ey(n)?J_(n):n.Ra.set("Unknown")):(await n.ma.stop(),Xb(n))}))),n.ma}function xr(n){return n.fa||(n.fa=(function(t,s,a){const l=be(t);return l.sa(),new bM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:VM.bind(null,n),r_:zM.bind(null,n),ta:LM.bind(null,n),na:UM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ud(n)):(await n.fa.stop(),n.Ta.length>0&&(le(za,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new ty(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ny(n,e){if(xs("AsyncQueue",`${e}: ${n}`),Tl(n))return new ae($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{static emptySet(e){return new Jo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=ju(),this.sortedSet=new Vt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Jo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.ga=new Vt(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class cl{constructor(e,t,s,a,l,c,d,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new cl(e,t,Jo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Od(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class FM{constructor(){this.queries=jS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=be(t),l=a.queries;a.queries=jS(),l.forEach(((c,d)=>{for(const m of d.Sa)m.onError(s)}))})(this,new ae($.ABORTED,"Firestore shutting down"))}}function jS(){return new Qa((n=>yb(n)),Od)}async function iy(n,e){const t=be(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new qM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=ny(c,`Initialization of query '${Go(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ry(t)}async function sy(n,e){const t=be(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function jM(n,e){const t=be(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&ry(t)}function HM(n,e,t){const s=be(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function ry(n){n.Ca.forEach((e=>{e.next()}))}var t_,HS;(HS=t_||(t_={})).Ma="default",HS.Cache="cache";class ay{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new cl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=cl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==t_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.key=e}}class eR{constructor(e){this.key=e}}class GM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ze(),this.mutatedKeys=ze(),this.eu=vb(e),this.tu=new Jo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new FS,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const S=a.get(y),O=xd(this.query,T)?T:null,U=!!S&&this.mutatedKeys.has(S.key),Q=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let H=!1;S&&O?S.data.isEqual(O.data)?U!==Q&&(s.track({type:3,doc:O}),H=!0):this.su(S,O)||(s.track({type:2,doc:O}),H=!0,(m&&this.eu(O,m)>0||g&&this.eu(O,g)<0)&&(d=!0)):!S&&O?(s.track({type:0,doc:O}),H=!0):S&&!O&&(s.track({type:1,doc:S}),H=!0,(m||g)&&(d=!0)),H&&(O?(c=c.add(O),l=Q?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(O,U){const Q=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:H})}};return Q(O)-Q(U)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],m=this.Xa.size===0&&this.current&&!a?1:0,g=m!==this.Za;return this.Za=m,c.length!==0||g?{snapshot:new cl(this.query,e.tu,l,c,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new FS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ze(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new eR(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Jb(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=ze();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return cl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const oy="SyncEngine";class QM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class KM{constructor(e){this.key=e,this.hu=!1}}class YM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Qa((d=>yb(d)),Od),this.Iu=new Map,this.Eu=new Set,this.du=new Vt(de.comparator),this.Au=new Map,this.Ru=new K_,this.Vu={},this.mu=new Map,this.fu=ul.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function XM(n,e,t=!0){const s=aR(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await tR(s,e,t,!0),a}async function $M(n,e){const t=aR(n);await tR(t,e,!0,!1)}async function tR(n,e,t,s){const a=await gM(n.localStore,Bi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await WM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&Kb(n.remoteStore,a),d}async function WM(n,e,t,s,a){n.pu=(T,S,O)=>(async function(Q,H,ce,oe){let re=H.view.ru(ce);re.Cs&&(re=await VS(Q.localStore,H.query,!1).then((({documents:N})=>H.view.ru(N,re))));const ye=oe&&oe.targetChanges.get(H.targetId),pe=oe&&oe.targetMismatches.get(H.targetId)!=null,De=H.view.applyChanges(re,Q.isPrimaryClient,ye,pe);return QS(Q,H.targetId,De.au),De.snapshot})(n,T,S,O);const l=await VS(n.localStore,e,!0),c=new GM(e,l.Qs),d=c.ru(l.documents),m=xc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,m);QS(n,t,g.au);const y=new QM(e,t,c);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function ZM(n,e,t){const s=be(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Od(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Jg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&W_(s.remoteStore,a.targetId),n_(s,a.targetId)})).catch(El)):(n_(s,a.targetId),await Jg(s.localStore,a.targetId,!0))}async function JM(n,e){const t=be(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),W_(t.remoteStore,s.targetId))}async function ek(n,e,t){const s=ok(n);try{const a=await(function(c,d){const m=be(c),g=ht.now(),y=d.reduce(((O,U)=>O.add(U.key)),ze());let T,S;return m.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let U=Ms(),Q=ze();return m.Ns.getEntries(O,y).next((H=>{U=H,U.forEach(((ce,oe)=>{oe.isValidDocument()||(Q=Q.add(ce))}))})).next((()=>m.localDocuments.getOverlayedDocuments(O,U))).next((H=>{T=H;const ce=[];for(const oe of d){const re=mx(oe,T.get(oe.key).overlayedDocument);re!=null&&ce.push(new Br(oe.key,re,cb(re.value.mapValue),gi.exists(!0)))}return m.mutationQueue.addMutationBatch(O,g,ce,d)})).next((H=>{S=H;const ce=H.applyToLocalDocumentSet(T,Q);return m.documentOverlayCache.saveOverlays(O,H.batchId,ce)}))})).then((()=>({batchId:S.batchId,changes:Tb(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,m){let g=c.Vu[c.currentUser.toKey()];g||(g=new Vt(Ue)),g=g.insert(d,m),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await kc(s,a.changes),await Ud(s.remoteStore)}catch(a){const l=ny(a,"Failed to persist write");t.reject(l)}}async function nR(n,e){const t=be(n);try{const s=await dM(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?Xe(c.hu,14607):a.removedDocuments.size>0&&(Xe(c.hu,42227),c.hu=!1))})),await kc(t,s,e)}catch(s){await El(s)}}function GS(n,e,t){const s=be(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const m=be(c);m.onlineState=d;let g=!1;m.queries.forEach(((y,T)=>{for(const S of T.Sa)S.va(d)&&(g=!0)})),g&&ry(m)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tk(n,e,t){const s=be(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Vt(de.comparator);c=c.insert(l,pn.newNoDocument(l,Ae.min()));const d=ze().add(l),m=new Pd(Ae.min(),new Map,new Vt(Ue),c,d);await nR(s,m),s.du=s.du.remove(l),s.Au.delete(e),ly(s)}else await Jg(s.localStore,e,!1).then((()=>n_(s,e,t))).catch(El)}async function nk(n,e){const t=be(n),s=e.batch.batchId;try{const a=await fM(t.localStore,e);sR(t,s,null),iR(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await kc(t,a)}catch(a){await El(a)}}async function ik(n,e,t){const s=be(n);try{const a=await(function(c,d){const m=be(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return m.mutationQueue.lookupMutationBatch(g,d).next((T=>(Xe(T!==null,37113),y=T.keys(),m.mutationQueue.removeMutationBatch(g,T)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>m.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);sR(s,e,t),iR(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await kc(s,a)}catch(a){await El(a)}}function iR(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function sR(n,e,t){const s=be(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function n_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||rR(n,s)}))}function rR(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(W_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ly(n))}function QS(n,e,t){for(const s of t)s instanceof Jb?(n.Ru.addReference(s.key,e),sk(n,s)):s instanceof eR?(le(oy,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||rR(n,s.key)):ve(19791,{wu:s})}function sk(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(le(oy,"New document in limbo: "+t),n.Eu.add(s),ly(n))}function ly(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new de(ut.fromString(e)),s=n.fu.next();n.Au.set(s,new KM(t)),n.du=n.du.insert(t,s),Kb(n.remoteStore,new _r(Bi(Dd(t.path)),s,"TargetPurposeLimboResolution",Cd.ce))}}async function kc(n,e,t){const s=be(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,m)=>{c.push(s.pu(m,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(m.targetId)?.current;s.sharedClientState.updateQueryState(m.targetId,y?"current":"not-current")}if(g){a.push(g);const y=X_.As(m.targetId,g);l.push(y)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(m,g){const y=be(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Z.forEach(g,(S=>Z.forEach(S.Es,(O=>y.persistence.referenceDelegate.addReference(T,S.targetId,O))).next((()=>Z.forEach(S.ds,(O=>y.persistence.referenceDelegate.removeReference(T,S.targetId,O)))))))))}catch(T){if(!Tl(T))throw T;le($_,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const O=y.Ms.get(S),U=O.snapshotVersion,Q=O.withLastLimboFreeSnapshotVersion(U);y.Ms=y.Ms.insert(S,Q)}}})(s.localStore,l))}async function rk(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){le(oy,"User change. New user:",e.toKey());const s=await jb(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((m=>{m.reject(new ae($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await kc(t,s.Ls)}}function ak(n,e){const t=be(n),s=t.Au.get(e);if(s&&s.hu)return ze().add(s.key);{let a=ze();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function aR(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tk.bind(null,e),e.Pu.H_=jM.bind(null,e.eventManager),e.Pu.yu=HM.bind(null,e.eventManager),e}function ok(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ik.bind(null,e),e}class td{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hM(this.persistence,new lM,e.initialUser,this.serializer)}Cu(e){return new Fb(Y_.mi,this.serializer)}Du(e){return new yM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}td.provider={build:()=>new td};class lk extends td{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Xe(this.persistence.referenceDelegate instanceof Jf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Kx(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new Fb((s=>Jf.mi(s,t)),this.serializer)}}class i_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>GS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rk.bind(null,this.syncEngine),await BM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new FM})()}createDatastore(e){const t=Vd(e.databaseInfo.databaseId),s=(function(l){return new wM(l)})(e.databaseInfo);return(function(l,c,d,m){return new CM(l,c,d,m)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new NM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>GS(this.syncEngine,t,0)),(function(){return zS.v()?new zS:new vM})())}createSyncEngine(e,t){return(function(a,l,c,d,m,g,y){const T=new YM(a,l,c,d,m,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=be(t);le(za,"RemoteStore shutting down."),s.Ea.add(5),await Mc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}i_.provider={build:()=>new i_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="FirestoreClient";class uk{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=dn.UNAUTHENTICATED,this.clientId=L_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{le(Mr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(le(Mr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ny(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Sg(n,e){n.asyncQueue.verifyOperationInProgress(),le(Mr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await jb(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function KS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ck(n);le(Mr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>qS(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>qS(e.remoteStore,a))),n._onlineComponents=e}async function ck(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le(Mr,"Using user provided OfflineComponentProvider");try{await Sg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;rl("Error using user provided cache. Falling back to memory cache: "+t),await Sg(n,new td)}}else le(Mr,"Using default OfflineComponentProvider"),await Sg(n,new lk(void 0));return n._offlineComponents}async function oR(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le(Mr,"Using user provided OnlineComponentProvider"),await KS(n,n._uninitializedComponentsProvider._online)):(le(Mr,"Using default OnlineComponentProvider"),await KS(n,new i_))),n._onlineComponents}function hk(n){return oR(n).then((e=>e.syncEngine))}async function nd(n){const e=await oR(n),t=e.eventManager;return t.onListen=XM.bind(null,e.syncEngine),t.onUnlisten=ZM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$M.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=JM.bind(null,e.syncEngine),t}function fk(n,e,t={}){const s=new Cs;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,m,g){const y=new uy({next:S=>{y.Nu(),c.enqueueAndForget((()=>sy(l,T)));const O=S.docs.has(d);!O&&S.fromCache?g.reject(new ae($.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&S.fromCache&&m&&m.source==="server"?g.reject(new ae($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new ay(Dd(d.path),y,{includeMetadataChanges:!0,qa:!0});return iy(l,T)})(await nd(n),n.asyncQueue,e,t,s))),s.promise}function dk(n,e,t={}){const s=new Cs;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,m,g){const y=new uy({next:S=>{y.Nu(),c.enqueueAndForget((()=>sy(l,T))),S.fromCache&&m.source==="server"?g.reject(new ae($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new ay(d,y,{includeMetadataChanges:!0,qa:!0});return iy(l,T)})(await nd(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function lR(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="firestore.googleapis.com",XS=!0;class $S{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uR,this.ssl=XS}else this.host=e.host,this.ssl=e.ssl??XS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gx)throw new ae($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lR(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $S({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $S(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new yO;switch(s.type){case"firstParty":return new SO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=YS.get(t);s&&(le("ComponentProvider","Removing Datastore"),YS.delete(t),s.terminate())})(this),Promise.resolve()}}function pk(n,e,t,s={}){n=jn(n,zd);const a=Qi(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(yd(`https://${d}`),vd("Firestore",!0)),l.host!==uR&&l.host!==d&&rl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...l,host:d,ssl:a,emulatorOptions:s};if(!Rr(m,c)&&(n._setSettings(m),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=dn.MOCK_USER;else{g=A_(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new ae($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new dn(T)}n._authCredentials=new vO(new ZA(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vs(this.firestore,e,this._query)}}class Et{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Dc(t,Et._jsonSchema))return new Et(e,s||null,new de(ut.fromString(t.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:Pt("string",Et._jsonSchemaVersion),referencePath:Pt("string")};class wr extends Vs{constructor(e,t,s){super(e,t,Dd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new de(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function Ar(n,e,...t){if(n=st(n),JA("collection","path",e),n instanceof zd){const s=ut.fromString(e,...t);return uS(s),new wr(n,null,s)}{if(!(n instanceof Et||n instanceof wr))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ut.fromString(e,...t));return uS(s),new wr(n.firestore,null,s)}}function Ba(n,e,...t){if(n=st(n),arguments.length===1&&(e=L_.newId()),JA("doc","path",e),n instanceof zd){const s=ut.fromString(e,...t);return lS(s),new Et(n,null,new de(s))}{if(!(n instanceof Et||n instanceof wr))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ut.fromString(e,...t));return lS(s),new Et(n.firestore,n instanceof wr?n.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="AsyncQueue";class ZS{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gb(this,"async_queue_retry"),this._c=()=>{const s=Tg();s&&le(WS,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Tg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Tg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Cs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Tl(e))throw e;le(WS,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,xs("INTERNAL UNHANDLED ERROR: ",JS(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=ty.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&ve(47125,{Pc:JS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function JS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function ew(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class kr extends zd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new ZS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ZS(e),this._firestoreClient=void 0,await e}}}function mk(n,e){const t=typeof n=="object"?n:Sd(),s=typeof n=="string"?n:Kf,a=bc(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=w_("firestore");l&&pk(a,...l)}return a}function Bd(n){if(n._terminated)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gk(n),n._firestoreClient}function gk(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new zO(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,lR(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new uk(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(ln.fromBase64String(e))}catch(t){throw new ae($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ii(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ii._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dc(e,ii._jsonSchema))return ii.fromBase64String(e.bytes)}}ii._jsonSchemaVersion="firestore/bytes/1.0",ii._jsonSchema={type:Pt("string",ii._jsonSchemaVersion),bytes:Pt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fi._jsonSchemaVersion}}static fromJSON(e){if(Dc(e,Fi._jsonSchema))return new Fi(e.latitude,e.longitude)}}Fi._jsonSchemaVersion="firestore/geoPoint/1.0",Fi._jsonSchema={type:Pt("string",Fi._jsonSchemaVersion),latitude:Pt("number"),longitude:Pt("number")};/**
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
 */class ji{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ji._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dc(e,ji._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ji(e.vectorValues);throw new ae($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ji._jsonSchemaVersion="firestore/vectorValue/1.0",ji._jsonSchema={type:Pt("string",ji._jsonSchemaVersion),vectorValues:Pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=/^__.*__$/;class yk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oc(e,this.data,t,this.fieldTransforms)}}class cR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Br(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hR(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:n})}}class cy{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new cy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return id(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(hR(this.Ac)&&_k.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class vk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Vd(e)}Cc(e,t,s,a=!1){return new cy({Ac:e,methodName:t,Dc:s,path:on.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jd(n){const e=n._freezeSettings(),t=Vd(n._databaseId);return new vk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fR(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);fy("Data must be an object, but it was:",c,s);const d=dR(s,c);let m,g;if(l.merge)m=new qn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const S=s_(e,T,t);if(!c.contains(S))throw new ae($.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);mR(y,S)||y.push(S)}m=new qn(y),g=c.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,g=c.fieldTransforms;return new yk(new Cn(d),m,g)}class Hd extends Fd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hd}}class hy extends Fd{_toFieldTransform(e){return new hx(e.path,new fc)}isEqual(e){return e instanceof hy}}function Ek(n,e,t,s){const a=n.Cc(1,e,t);fy("Data must be an object, but it was:",a,s);const l=[],c=Cn.empty();zr(s,((m,g)=>{const y=dy(e,m,t);g=st(g);const T=a.yc(y);if(g instanceof Hd)l.push(y);else{const S=Pc(g,T);S!=null&&(l.push(y),c.set(y,S))}}));const d=new qn(l);return new cR(c,d,a.fieldTransforms)}function Tk(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[s_(e,s,t)],m=[a];if(l.length%2!=0)throw new ae($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(s_(e,l[S])),m.push(l[S+1]);const g=[],y=Cn.empty();for(let S=d.length-1;S>=0;--S)if(!mR(g,d[S])){const O=d[S];let U=m[S];U=st(U);const Q=c.yc(O);if(U instanceof Hd)g.push(O);else{const H=Pc(U,Q);H!=null&&(g.push(O),y.set(O,H))}}const T=new qn(g);return new cR(y,T,c.fieldTransforms)}function Sk(n,e,t,s=!1){return Pc(t,n.Cc(s?4:3,e))}function Pc(n,e){if(pR(n=st(n)))return fy("Unsupported field value:",e,n),dR(n,e);if(n instanceof Fd)return(function(s,a){if(!hR(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let m=Pc(d,a.wc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=st(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lx(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ht.fromDate(s);return{timestampValue:Zf(a.serializer,l)}}if(s instanceof ht){const l=new ht(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zf(a.serializer,l)}}if(s instanceof Fi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ii)return{bytesValue:kb(a.serializer,s._byteString)};if(s instanceof Et){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Q_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ji)return(function(c,d){return{mapValue:{fields:{[lb]:{stringValue:ub},[Yf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return j_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Rd(s)}`)})(n,e)}function dR(n,e){const t={};return nb(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(n,((s,a)=>{const l=Pc(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function pR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ht||n instanceof Fi||n instanceof ii||n instanceof Et||n instanceof Fd||n instanceof ji)}function fy(n,e,t){if(!pR(t)||!eb(t)){const s=Rd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function s_(n,e,t){if((e=st(e))instanceof qd)return e._internalPath;if(typeof e=="string")return dy(n,e);throw id("Field path arguments must be of type string or ",n,!1,void 0,t)}const wk=new RegExp("[~\\*/\\[\\]]");function dy(n,e,t){if(e.search(wk)>=0)throw id(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qd(...e.split("."))._internalPath}catch{throw id(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function id(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${s}`),c&&(m+=` in document ${a}`),m+=")"),new ae($.INVALID_ARGUMENT,d+n+m)}function mR(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ak extends gR{data(){return super.data()}}function Gd(n,e){return typeof e=="string"?dy(n,e):e instanceof qd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class py{}class my extends py{}function hl(n,e,...t){let s=[];e instanceof py&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((m=>m instanceof gy)).length,d=l.filter((m=>m instanceof Qd)).length;if(c>1||c>0&&d>0)throw new ae($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Qd extends my{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Qd(e,t,s)}_apply(e){const t=this._parse(e);return yR(e._query,t),new Vs(e.firestore,e.converter,Yg(e._query,t))}_parse(e){const t=jd(e.firestore);return(function(l,c,d,m,g,y,T){let S;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ae($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){nw(T,y);const U=[];for(const Q of T)U.push(tw(m,l,Q));S={arrayValue:{values:U}}}else S=tw(m,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||nw(T,y),S=Sk(d,c,T,y==="in"||y==="not-in");return kt.create(g,y,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Pr(n,e,t){const s=e,a=Gd("where",n);return Qd._create(a,s,t)}class gy extends py{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:yi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const m of d)yR(c,m),c=Yg(c,m)})(e._query,t),new Vs(e.firestore,e.converter,Yg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _y extends my{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _y(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new ae($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ae($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hc(l,c)})(e._query,this._field,this._direction);return new Vs(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Sl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function bk(n,e="asc"){const t=e,s=Gd("orderBy",n);return _y._create(s,t)}class yy extends my{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new yy(e,t,s)}_apply(e){return new Vs(e.firestore,e.converter,$f(e._query,this._limit,this._limitType))}}function Rk(n){return yy._create("limit",n,"F")}function tw(n,e,t){if(typeof(t=st(t))=="string"){if(t==="")throw new ae($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_b(e)&&t.indexOf("/")!==-1)throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ut.fromString(t));if(!de.isDocumentKey(s))throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _S(n,new de(s))}if(t instanceof Et)return _S(n,t._key);throw new ae($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rd(t)}.`)}function nw(n,e){if(!Array.isArray(n)||n.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yR(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ck{convertValue(e,t="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return zr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Yf].arrayValue?.values?.map((s=>Rt(s.doubleValue)));return new ji(t)}convertGeoPoint(e){return new Fi(Rt(e.latitude),Rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Nd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(lc(e));default:return null}}convertTimestamp(e){const t=Nr(e);return new ht(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ut.fromString(e);Xe(Bb(s),9688,{name:e});const a=new uc(s.get(1),s.get(3)),l=new de(s.popFirst(5));return a.isEqual(t)||xs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Gu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oa extends gR{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Gd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Oa._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Oa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Oa._jsonSchema={type:Pt("string",Oa._jsonSchemaVersion),bundleSource:Pt("string","DocumentSnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class xf extends Oa{data(e={}){return super.data(e)}}class xa{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Gu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new xf(this._firestore,this._userDataWriter,s.key,s,new Gu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const m=new xf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Gu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const m=new xf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Gu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:Ik(d.type),doc:m,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=L_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ik(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(n){n=jn(n,Et);const e=jn(n.firestore,kr);return fk(Bd(e),n._key).then((t=>SR(e,n,t)))}xa._jsonSchemaVersion="firestore/querySnapshot/1.0",xa._jsonSchema={type:Pt("string",xa._jsonSchemaVersion),bundleSource:Pt("string","QuerySnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class vy extends Ck{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function iw(n){n=jn(n,Vs);const e=jn(n.firestore,kr),t=Bd(e),s=new vy(e);return _R(n._query),dk(t,n._query).then((a=>new xa(e,s,n,a)))}function Nk(n,e,t){n=jn(n,Et);const s=jn(n.firestore,kr),a=vR(n.converter,e);return Ey(s,[fR(jd(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,gi.none())])}function mc(n,e,t,...s){n=jn(n,Et);const a=jn(n.firestore,kr),l=jd(a);let c;return c=typeof(e=st(e))=="string"||e instanceof qd?Tk(l,"updateDoc",n._key,e,t,s):Ek(l,"updateDoc",n._key,e),Ey(a,[c.toMutation(n._key,gi.exists(!0))])}function TR(n,e){const t=jn(n.firestore,kr),s=Ba(n),a=vR(n.converter,e);return Ey(t,[fR(jd(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,gi.exists(!1))]).then((()=>s))}function Vc(n,...e){n=st(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||ew(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ew(e[s])){const m=e[s];e[s]=m.next?.bind(m),e[s+1]=m.error?.bind(m),e[s+2]=m.complete?.bind(m)}let l,c,d;if(n instanceof Et)c=jn(n.firestore,kr),d=Dd(n._key.path),l={next:m=>{e[s]&&e[s](SR(c,n,m))},error:e[s+1],complete:e[s+2]};else{const m=jn(n,Vs);c=jn(m.firestore,kr),d=m._query;const g=new vy(c);l={next:y=>{e[s]&&e[s](new xa(c,g,m,y))},error:e[s+1],complete:e[s+2]},_R(n._query)}return(function(g,y,T,S){const O=new uy(S),U=new ay(y,O,T);return g.asyncQueue.enqueueAndForget((async()=>iy(await nd(g),U))),()=>{O.Nu(),g.asyncQueue.enqueueAndForget((async()=>sy(await nd(g),U)))}})(Bd(c),d,a,l)}function Ey(n,e){return(function(s,a){const l=new Cs;return s.asyncQueue.enqueueAndForget((async()=>ek(await hk(s),a,l))),l.promise})(Bd(n),e)}function SR(n,e,t){const s=t.docs.get(e._key),a=new vy(n);return new Oa(n,a,e._key,s,new Gu(t.hasPendingWrites,t.fromCache),e.converter)}function gc(){return new hy("serverTimestamp")}(function(e,t=!0){(function(a){vl=a})(Ur),Cr(new Ns("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new kr(new EO(s.getProvider("auth-internal")),new wO(c,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ae($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uc(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),ri(sS,rS,e),ri(sS,rS,"esm2020")})();var sw={};const rw="@firebase/database",aw="1.1.0";/**
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
 */let wR="";function Dk(n){wR=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Zt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:sc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Yi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ok(e)}}catch{}return new xk},Na=AR("localStorage"),Mk=AR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Td("@firebase/database"),kk=(function(){let n=1;return function(){return n++}})(),bR=function(n){const e=rN(n),t=new tN;t.update(e);const s=t.digest();return S_.encodeByteArray(s)},Lc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Lc.apply(null,s):typeof s=="object"?e+=Zt(s):e+=s,e+=" "}return e};let Zu=null,ow=!0;const Pk=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),el.logLevel=Le.VERBOSE,Zu=el.log.bind(el)},an=function(...n){if(ow===!0&&(ow=!1,Zu===null&&Mk.get("logging_enabled")===!0&&Pk()),Zu){const e=Lc.apply(null,n);Zu(e)}},Uc=function(n){return function(...e){an(n,...e)}},r_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Lc(...n);el.error(e)},ks=function(...n){const e=`FIREBASE FATAL ERROR: ${Lc(...n)}`;throw el.error(e),new Error(e)},Dn=function(...n){const e="FIREBASE WARNING: "+Lc(...n);el.warn(e)},Vk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Lk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},fl="[MIN_NAME]",qa="[MAX_NAME]",Ya=function(n,e){if(n===e)return 0;if(n===fl||e===qa)return-1;if(e===fl||n===qa)return 1;{const t=lw(n),s=lw(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Uk=function(n,e){return n===e?0:n<e?-1:1},Lu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Zt(e))},Ty=function(n){if(typeof n!="object"||n===null)return Zt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Zt(e[s]),t+=":",t+=Ty(n[e[s]]);return t+="}",t},RR=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function gn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const CR=function(n){ne(!Kd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,m;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(m=0;m<64;m+=8){let S=parseInt(y.substr(m,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},zk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Fk=new RegExp("^-?(0*)\\d{1,10}$"),jk=-2147483648,Hk=2147483647,lw=function(n){if(Fk.test(n)){const e=Number(n);if(e>=jk&&e<=Hk)return e}return null},Al=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Dn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Gk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ju=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Qk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Rn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(an("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Dn(e)}}class Mf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="5",IR="v",NR="s",DR="r",OR="f",xR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,MR="ls",kR="p",a_="ac",PR="websocket",VR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t,s,a,l=!1,c="",d=!1,m=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Na.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Na.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Yk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function UR(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let s;if(e===PR)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===VR)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yk(n)&&(t.ns=n.namespace);const a=[];return gn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.counters_={}}incrementCounter(e,t=1){Yi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return kI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={},Ag={};function wy(n){const e=n.toString();return wg[e]||(wg[e]=new Xk),wg[e]}function $k(n,e){const t=n.toString();return Ag[t]||(Ag[t]=e()),Ag[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Al(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="start",Zk="close",Jk="pLPCommand",eP="pRTLPCB",zR="id",BR="pw",qR="ser",tP="cb",nP="seg",iP="ts",sP="d",rP="dframe",FR=1870,jR=30,aP=FR-jR,oP=25e3,lP=3e4;class Yo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Uc(e),this.stats_=wy(t),this.urlFn=m=>(this.appCheckToken&&(m[a_]=this.appCheckToken),UR(t,VR,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Wk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lP)),Lk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ay((...l)=>{const[c,d,m,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===uw)this.id=d,this.password=m;else if(c===Zk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[uw]="t",s[qR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[IR]=Sy,this.transportSessionId&&(s[NR]=this.transportSessionId),this.lastSessionId&&(s[MR]=this.lastSessionId),this.applicationId&&(s[kR]=this.applicationId),this.appCheckToken&&(s[a_]=this.appCheckToken),typeof location<"u"&&location.hostname&&xR.test(location.hostname)&&(s[DR]=OR);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yo.forceAllow_=!0}static forceDisallow(){Yo.forceDisallow_=!0}static isAvailable(){return Yo.forceAllow_?!0:!Yo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zk()&&!Bk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=nA(t),a=RR(s,aP);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[rP]="t",s[zR]=e,s[BR]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Zt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ay{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kk(),window[Jk+this.uniqueCallbackIdentifier]=e,window[eP+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ay.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){an("frame writing exception"),d.stack&&an(d.stack),an(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||an("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zR]=this.myID,e[BR]=this.myPW,e[qR]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jR+s.length<=FR;){const c=this.pendingSegs.shift();s=s+"&"+nP+a+"="+c.seg+"&"+iP+a+"="+c.ts+"&"+sP+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(oP)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{an("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=16384,cP=45e3;let sd=null;typeof MozWebSocket<"u"?sd=MozWebSocket:typeof WebSocket<"u"&&(sd=WebSocket);class fi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Uc(this.connId),this.stats_=wy(t),this.connURL=fi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[IR]=Sy,typeof location<"u"&&location.hostname&&xR.test(location.hostname)&&(c[DR]=OR),t&&(c[NR]=t),s&&(c[MR]=s),a&&(c[a_]=a),l&&(c[kR]=l),UR(e,PR,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Na.set("previous_websocket_failure",!0);try{let s;QI(),this.mySock=new sd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){fi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&sd!==null&&!fi.forceDisallow_}static previouslyFailed(){return Na.isInMemoryStorage||Na.get("previous_websocket_failure")===!0}markConnectionHealthy(){Na.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=sc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=RR(t,uP);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cP))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fi.responsesRequiredToBeHealthy=2;fi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static get ALL_TRANSPORTS(){return[Yo,fi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=fi&&fi.isAvailable();let s=t&&!fi.previouslyFailed();if(e.webSocketOnly&&(t||Dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[fi];else{const a=this.transports_=[];for(const l of _c.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);_c.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_c.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=6e4,fP=5e3,dP=10*1024,pP=100*1024,bg="t",cw="d",mP="s",hw="r",gP="e",fw="o",dw="a",pw="n",mw="p",_P="h";class yP{constructor(e,t,s,a,l,c,d,m,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Uc("c:"+this.id+":"),this.transportManager_=new _c(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ju(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bg in e){const t=e[bg];t===dw?this.upgradeIfSecondaryHealthy_():t===hw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Lu("t",e),s=Lu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Lu("t",e),s=Lu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Lu(bg,e);if(cw in e){const s=e[cw];if(t===_P){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===pw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mP?this.onConnectionShutdown_(s):t===hw?this.onReset_(s):t===gP?r_("Server Error: "+s):t===fw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):r_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Sy!==s&&Dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ju(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ju(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Na.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends GR{static getInstance(){return new rd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!b_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=32,_w=768;class Je{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ke(){return new Je("")}function Ne(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Vr(n){return n.pieces_.length-n.pieceNum_}function at(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Je(n.pieces_,e)}function by(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function vP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function QR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Je(e,0)}function Ct(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Je)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new Je(t,0)}function Me(n){return n.pieceNum_>=n.pieces_.length}function In(n,e){const t=Ne(n),s=Ne(e);if(t===null)return e;if(t===s)return In(at(n),at(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function EP(n,e){const t=yc(n,0),s=yc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Ya(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Ry(n,e){if(Vr(n)!==Vr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function si(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Vr(n)>Vr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class TP{constructor(e,t){this.errorPrefix_=t,this.parts_=yc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ed(this.parts_[s]);KR(this)}}function SP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ed(e),KR(n)}function wP(n){const e=n.parts_.pop();n.byteLength_-=Ed(e),n.parts_.length>0&&(n.byteLength_-=1)}function KR(n){if(n.byteLength_>_w)throw new Error(n.errorPrefix_+"has a key path longer than "+_w+" bytes ("+n.byteLength_+").");if(n.parts_.length>gw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gw+") or object contains a cycle "+Ra(n))}function Ra(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends GR{static getInstance(){return new Cy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=1e3,AP=300*1e3,yw=30*1e3,bP=1.3,RP=3e4,CP="server_kill",vw=3;class Is extends HR{constructor(e,t,s,a,l,c,d,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=Is.nextPersistentConnectionId_++,this.log_=Uc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Uu,this.maxReconnectDelay_=AP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Zt(l)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Ss,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const m=d.d,g=d.s;Is.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Yi(e,"w")){const s=il(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||eN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=JI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Zt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):r_("Unrecognized action received from server: "+Zt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Uu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Uu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RP&&(this.reconnectDelay_=Uu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Is.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const m=function(){d?d.close():(c=!0,s())},g=function(T){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:m,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?an("getToken() completed but was canceled"):(an("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new yP(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,O=>{Dn(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(CP)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Dn(T),m())}}}interrupt(e){an("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){an("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lf(this.interruptReasons_)&&(this.reconnectDelay_=Uu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Ty(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new Je(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){an("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vw&&(this.reconnectDelay_=yw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){an("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+wR.replace(/\./g,"-")]=1,b_()?e["framework.cordova"]=1:oA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rd.getInstance().currentlyOnline();return Lf(this.interruptReasons_)&&e}}Is.nextPersistentConnectionId_=0;Is.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ke(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ke(fl,e),a=new ke(fl,t);return this.compare(s,a)!==0}minPost(){return ke.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf;class YR extends Yd{static get __EMPTY_NODE(){return vf}static set __EMPTY_NODE(e){vf=e}compare(e,t){return Ya(e.name,t.name)}isDefinedOn(e){throw gl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ke.MIN}maxPost(){return new ke(qa,vf)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new ke(e,vf)}toString(){return".key"}}const tl=new YR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Wt.RED,this.left=a??Nn.EMPTY_NODE,this.right=l??Nn.EMPTY_NODE}copy(e,t,s,a,l){return new Wt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Nn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0;Wt.BLACK=!1;class IP{copy(e,t,s,a,l){return this}insert(e,t,s){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nn{constructor(e,t=Nn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Nn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ef(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ef(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ef(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ef(this.root_,null,this.comparator_,!0,e)}}Nn.EMPTY_NODE=new IP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(n,e){return Ya(n.name,e.name)}function Iy(n,e){return Ya(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o_;function DP(n){o_=n}const XR=function(n){return typeof n=="number"?"number:"+CR(n):"string:"+n},$R=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yi(e,".sv"),"Priority must be a string or number.")}else ne(n===o_||n.isEmpty(),"priority of unexpected type.");ne(n===o_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ew;class Xt{static set __childrenNodeConstructor(e){Ew=e}static get __childrenNodeConstructor(){return Ew}constructor(e,t=Xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$R(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Me(e)?this:Ne(e)===".priority"?this.priorityNode_:Xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ne(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ne(s!==".priority"||Vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(at(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+XR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=CR(this.value_):e+=this.value_,this.lazyHash_=bR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Xt.VALUE_TYPE_ORDER.indexOf(t),l=Xt.VALUE_TYPE_ORDER.indexOf(s);return ne(a>=0,"Unknown leaf type: "+t),ne(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WR,ZR;function OP(n){WR=n}function xP(n){ZR=n}class MP extends Yd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Ya(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(qa,new Xt("[PRIORITY-POST]",ZR))}makePost(e,t){const s=WR(e);return new ke(t,new Xt("[PRIORITY-POST]",s))}toString(){return".priority"}}const mt=new MP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=Math.log(2);class PP{constructor(e){const t=l=>parseInt(Math.log(l)/kP,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ad=function(n,e,t,s){n.sort(e);const a=function(m,g){const y=g-m;let T,S;if(y===0)return null;if(y===1)return T=n[m],S=t?t(T):T,new Wt(S,T.node,Wt.BLACK,null,null);{const O=parseInt(y/2,10)+m,U=a(m,O),Q=a(O+1,g);return T=n[O],S=t?t(T):T,new Wt(S,T.node,Wt.BLACK,U,Q)}},l=function(m){let g=null,y=null,T=n.length;const S=function(U,Q){const H=T-U,ce=T;T-=U;const oe=a(H+1,ce),re=n[H],ye=t?t(re):re;O(new Wt(ye,re.node,Q,null,oe))},O=function(U){g?(g.left=U,g=U):(y=U,g=U)};for(let U=0;U<m.count;++U){const Q=m.nextBitIsOne(),H=Math.pow(2,m.count-(U+1));Q?S(H,Wt.BLACK):(S(H,Wt.BLACK),S(H,Wt.RED))}return y},c=new PP(n.length),d=l(c);return new Nn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rg;const jo={};class Rs{static get Default(){return ne(jo&&mt,"ChildrenNode.ts has not been loaded"),Rg=Rg||new Rs({".priority":jo},{".priority":mt}),Rg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=il(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Nn?t:null}hasIndex(e){return Yi(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==tl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(ke.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=ad(s,e.getCompare()):d=jo;const m=e.toString(),g={...this.indexSet_};g[m]=e;const y={...this.indexes_};return y[m]=d,new Rs(y,g)}addToIndexes(e,t){const s=Uf(this.indexes_,(a,l)=>{const c=il(this.indexSet_,l);if(ne(c,"Missing index implementation for "+l),a===jo)if(c.isDefinedOn(e.node)){const d=[],m=t.getIterator(ke.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&d.push(g),g=m.getNext();return d.push(e),ad(d,c.getCompare())}else return jo;else{const d=t.get(e.name);let m=a;return d&&(m=m.remove(new ke(e.name,d))),m.insert(e,e.node)}});return new Rs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Uf(this.indexes_,a=>{if(a===jo)return a;{const l=t.get(e.name);return l?a.remove(new ke(e.name,l)):a}});return new Rs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;class Te{static get EMPTY_NODE(){return zu||(zu=new Te(new Nn(Iy),null,Rs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$R(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zu}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?zu:t}}getChild(e){const t=Ne(e);return t===null?this:this.getImmediateChild(t).getChild(at(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ke(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?zu:this.priorityNode_;return new Te(a,c,l)}}updateChild(e,t){const s=Ne(e);if(s===null)return t;{ne(Ne(e)!==".priority"||Vr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(at(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(mt,(c,d)=>{t[c]=d.val(e),s++,l&&Te.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+XR(this.getPriority().val())+":"),this.forEachChild(mt,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":bR(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new ke(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ke(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ke(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,ke.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zc?-1:0}withIndex(e){if(e===tl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===tl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(mt),a=t.getIterator(mt);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===tl?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VP extends Te{constructor(){super(new Nn(Iy),Te.EMPTY_NODE,Rs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const zc=new VP;Object.defineProperties(ke,{MIN:{value:new ke(fl,Te.EMPTY_NODE)},MAX:{value:new ke(qa,zc)}});YR.__EMPTY_NODE=Te.EMPTY_NODE;Xt.__childrenNodeConstructor=Te;DP(zc);xP(zc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=!0;function Mt(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Xt(t,Mt(e))}if(!(n instanceof Array)&&LP){const t=[];let s=!1;if(gn(n,(c,d)=>{if(c.substring(0,1)!=="."){const m=Mt(d);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new ke(c,m)))}}),t.length===0)return Te.EMPTY_NODE;const l=ad(t,NP,c=>c.name,Iy);if(s){const c=ad(t,mt.getCompare());return new Te(l,Mt(e),new Rs({".priority":c},{".priority":mt}))}else return new Te(l,Mt(e),Rs.Default)}else{let t=Te.EMPTY_NODE;return gn(n,(s,a)=>{if(Yi(n,s)&&s.substring(0,1)!=="."){const l=Mt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Mt(e))}}OP(Mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP extends Yd{constructor(e){super(),this.indexPath_=e,ne(!Me(e)&&Ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Ya(e.name,t.name):l}makePost(e,t){const s=Mt(e),a=Te.EMPTY_NODE.updateChild(this.indexPath_,s);return new ke(t,a)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,zc);return new ke(qa,e)}toString(){return yc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP extends Yd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ya(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,t){const s=Mt(e);return new ke(t,s)}toString(){return".value"}}const BP=new zP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(n){return{type:"value",snapshotNode:n}}function dl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ec(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function qP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(vc(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(dl(t,s)):c.trackChildChange(Ec(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(mt,(a,l)=>{t.hasChild(a)||s.trackChildChange(vc(a,l))}),t.isLeafNode()||t.forEachChild(mt,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(Ec(a,l,c))}else s.trackChildChange(dl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.indexedFilter_=new Ny(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tc.getStartPost_(e),this.endPost_=Tc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new ke(t,s))||(s=Te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Te.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Te.EMPTY_NODE);const l=this;return t.forEachChild(mt,(c,d)=>{l.matches(new ke(c,d))||(a=a.updateImmediateChild(c,Te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Tc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new ke(t,s))||(s=Te.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Te.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Te.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(S,O)=>T(O,S)}else c=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const m=new ke(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(m);if(d.hasChild(t)){const T=d.getImmediateChild(t);let S=a.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===t||d.hasChild(S.name));)S=a.getChildAfterChild(this.index_,S,this.reverse_);const O=S==null?1:c(S,m);if(y&&!s.isEmpty()&&O>=0)return l?.trackChildChange(Ec(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(vc(t,T));const Q=d.updateImmediateChild(t,Te.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(l?.trackChildChange(dl(S.name,S.node)),Q.updateImmediateChild(S.name,S.node)):Q}}else return s.isEmpty()?e:y&&c(g,m)>=0?(l!=null&&(l.trackChildChange(vc(g.name,g.node)),l.trackChildChange(dl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,Te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fl}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new Dy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jP(n){return n.loadsAllData()?new Ny(n.getIndex()):n.hasLimit()?new FP(n):new Tc(n)}function Tw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===mt?t="$priority":n.index_===BP?t="$value":n.index_===tl?t="$key":(ne(n.index_ instanceof UP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Zt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Zt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Zt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Zt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Zt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Sw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==mt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od extends HR{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Uc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=od.getListenId_(e,s),d={};this.listens_[c]=d;const m=Tw(e._queryParams);this.restRequest_(l+".json",m,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),il(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=od.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Tw(e._queryParams),s=e._path.toString(),a=new Ss;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_l(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=sc(d.responseText)}catch{Dn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,m)}else d.status!==401&&d.status!==404&&Dn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){return{value:null,children:new Map}}function bl(n,e,t){if(Me(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ne(e);n.children.has(s)||n.children.set(s,ld());const a=n.children.get(s);e=at(e),bl(a,e,t)}}function l_(n,e){if(Me(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(mt,(s,a)=>{bl(n,new Je(s),a)}),l_(n,e)}}else if(n.children.size>0){const t=Ne(e);return e=at(e),n.children.has(t)&&l_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function u_(n,e,t){n.value!==null?t(e,n.value):GP(n,(s,a)=>{const l=new Je(e.toString()+"/"+s);u_(a,l,t)})}function GP(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&gn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=10*1e3,KP=30*1e3,YP=300*1e3;class XP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new QP(e);const s=ww+(KP-ww)*Math.random();Ju(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;gn(e,(a,l)=>{l>0&&Yi(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Ju(this.reportStats_.bind(this),Math.floor(Math.random()*2*YP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pi||(pi={}));function eC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Oy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=pi.ACK_USER_WRITE,this.source=eC()}operationForChild(e){if(Me(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Je(e));return new ud(Ke(),t,this.revert)}}else return ne(Ne(this.path)===e,"operationForChild called for unrelated child."),new ud(at(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.source=e,this.path=t,this.type=pi.LISTEN_COMPLETE}operationForChild(e){return Me(this.path)?new Sc(this.source,Ke()):new Sc(this.source,at(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=pi.OVERWRITE}operationForChild(e){return Me(this.path)?new Fa(this.source,Ke(),this.snap.getImmediateChild(e)):new Fa(this.source,at(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=pi.MERGE}operationForChild(e){if(Me(this.path)){const t=this.children.subtree(new Je(e));return t.isEmpty()?null:t.value?new Fa(this.source,Ke(),t.value):new wc(this.source,Ke(),t)}else return ne(Ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wc(this.source,at(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Me(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ne(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function WP(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(qP(c.childName,c.snapshotNode))}),Bu(n,a,"child_removed",e,s,t),Bu(n,a,"child_added",e,s,t),Bu(n,a,"child_moved",l,s,t),Bu(n,a,"child_changed",e,s,t),Bu(n,a,"value",e,s,t),a}function Bu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,m)=>JP(n,d,m)),c.forEach(d=>{const m=ZP(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(m,n.query_))})})}function ZP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function JP(n,e,t){if(e.childName==null||t.childName==null)throw gl("Should only compare child_ events.");const s=new ke(e.childName,e.snapshotNode),a=new ke(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,e){return{eventCache:n,serverCache:e}}function ec(n,e,t,s){return Xd(new ja(e,t,s),n.serverCache)}function tC(n,e,t,s){return Xd(n.eventCache,new ja(e,t,s))}function c_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ha(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg;const e4=()=>(Cg||(Cg=new Nn(Uk)),Cg);class ct{static fromObject(e){let t=new ct(null);return gn(e,(s,a)=>{t=t.set(new Je(s),a)}),t}constructor(e,t=e4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ke(),value:this.value};if(Me(e))return null;{const s=Ne(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(at(e),t);return l!=null?{path:Ct(new Je(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Me(e))return this;{const t=Ne(e),s=this.children.get(t);return s!==null?s.subtree(at(e)):new ct(null)}}set(e,t){if(Me(e))return new ct(t,this.children);{const s=Ne(e),l=(this.children.get(s)||new ct(null)).set(at(e),t),c=this.children.insert(s,l);return new ct(this.value,c)}}remove(e){if(Me(e))return this.children.isEmpty()?new ct(null):new ct(null,this.children);{const t=Ne(e),s=this.children.get(t);if(s){const a=s.remove(at(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ct(null):new ct(this.value,l)}else return this}}get(e){if(Me(e))return this.value;{const t=Ne(e),s=this.children.get(t);return s?s.get(at(e)):null}}setTree(e,t){if(Me(e))return t;{const s=Ne(e),l=(this.children.get(s)||new ct(null)).setTree(at(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ct(this.value,c)}}fold(e){return this.fold_(Ke(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Ct(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ke(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Me(e))return null;{const l=Ne(e),c=this.children.get(l);return c?c.findOnPath_(at(e),Ct(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ke(),t)}foreachOnPath_(e,t,s){if(Me(e))return this;{this.value&&s(t,this.value);const a=Ne(e),l=this.children.get(a);return l?l.foreachOnPath_(at(e),Ct(t,a),s):new ct(null)}}foreach(e){this.foreach_(Ke(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Ct(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.writeTree_=e}static empty(){return new _i(new ct(null))}}function tc(n,e,t){if(Me(e))return new _i(new ct(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=In(a,e);return l=l.updateChild(c,t),new _i(n.writeTree_.set(a,l))}else{const a=new ct(t),l=n.writeTree_.setTree(e,a);return new _i(l)}}}function Aw(n,e,t){let s=n;return gn(t,(a,l)=>{s=tc(s,Ct(e,a),l)}),s}function bw(n,e){if(Me(e))return _i.empty();{const t=n.writeTree_.setTree(e,new ct(null));return new _i(t)}}function h_(n,e){return Xa(n,e)!=null}function Xa(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(In(t.path,e)):null}function Rw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(mt,(s,a)=>{e.push(new ke(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new ke(s,a.value))}),e}function br(n,e){if(Me(e))return n;{const t=Xa(n,e);return t!=null?new _i(new ct(t)):new _i(n.writeTree_.subtree(e))}}function f_(n){return n.writeTree_.isEmpty()}function pl(n,e){return nC(Ke(),n.writeTree_,e)}function nC(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ne(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=nC(Ct(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ct(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n,e){return aC(e,n)}function t4(n,e,t,s,a){ne(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=tc(n.visibleWrites,e,t)),n.lastWriteId=s}function n4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function i4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&s4(d,s.path)?a=!1:si(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return r4(n),!0;if(s.snap)n.visibleWrites=bw(n.visibleWrites,s.path);else{const d=s.children;gn(d,m=>{n.visibleWrites=bw(n.visibleWrites,Ct(s.path,m))})}return!0}else return!1}function s4(n,e){if(n.snap)return si(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&si(Ct(n.path,t),e))return!0;return!1}function r4(n){n.visibleWrites=iC(n.allWrites,a4,Ke()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function a4(n){return n.visible}function iC(n,e,t){let s=_i.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)si(t,c)?(d=In(t,c),s=tc(s,d,l.snap)):si(c,t)&&(d=In(c,t),s=tc(s,Ke(),l.snap.getChild(d)));else if(l.children){if(si(t,c))d=In(t,c),s=Aw(s,d,l.children);else if(si(c,t))if(d=In(c,t),Me(d))s=Aw(s,Ke(),l.children);else{const m=il(l.children,Ne(d));if(m){const g=m.getChild(at(d));s=tc(s,Ke(),g)}}}else throw gl("WriteRecord should have .snap or .children")}}return s}function sC(n,e,t,s,a){if(!s&&!a){const l=Xa(n.visibleWrites,e);if(l!=null)return l;{const c=br(n.visibleWrites,e);if(f_(c))return t;if(t==null&&!h_(c,Ke()))return null;{const d=t||Te.EMPTY_NODE;return pl(c,d)}}}else{const l=br(n.visibleWrites,e);if(!a&&f_(l))return t;if(!a&&t==null&&!h_(l,Ke()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(si(g.path,e)||si(e,g.path))},d=iC(n.allWrites,c,e),m=t||Te.EMPTY_NODE;return pl(d,m)}}}function o4(n,e,t){let s=Te.EMPTY_NODE;const a=Xa(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(mt,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=br(n.visibleWrites,e);return t.forEachChild(mt,(c,d)=>{const m=pl(br(l,new Je(c)),d);s=s.updateImmediateChild(c,m)}),Rw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=br(n.visibleWrites,e);return Rw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function l4(n,e,t,s,a){ne(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Ct(e,t);if(h_(n.visibleWrites,l))return null;{const c=br(n.visibleWrites,l);return f_(c)?a.getChild(t):pl(c,a.getChild(t))}}function u4(n,e,t,s){const a=Ct(e,t),l=Xa(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=br(n.visibleWrites,a);return pl(c,s.getNode().getImmediateChild(t))}else return null}function c4(n,e){return Xa(n.visibleWrites,e)}function h4(n,e,t,s,a,l,c){let d;const m=br(n.visibleWrites,e),g=Xa(m,Ke());if(g!=null)d=g;else if(t!=null)d=pl(m,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let O=S.getNext();for(;O&&y.length<a;)T(O,s)!==0&&y.push(O),O=S.getNext();return y}else return[]}function f4(){return{visibleWrites:_i.empty(),allWrites:[],lastWriteId:-1}}function cd(n,e,t,s){return sC(n.writeTree,n.treePath,e,t,s)}function ky(n,e){return o4(n.writeTree,n.treePath,e)}function Cw(n,e,t,s){return l4(n.writeTree,n.treePath,e,t,s)}function hd(n,e){return c4(n.writeTree,Ct(n.treePath,e))}function d4(n,e,t,s,a,l){return h4(n.writeTree,n.treePath,e,t,s,a,l)}function Py(n,e,t){return u4(n.writeTree,n.treePath,e,t)}function rC(n,e){return aC(Ct(n.treePath,e),n.writeTree)}function aC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,Ec(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,vc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,dl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,Ec(s,e.snapshotNode,a.oldSnap));else throw gl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const oC=new m4;class Vy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ja(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Py(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ha(this.viewCache_),l=d4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(n){return{filter:n}}function _4(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function y4(n,e,t,s,a){const l=new p4;let c,d;if(t.type===pi.OVERWRITE){const g=t;g.source.fromUser?c=d_(n,e,g.path,g.snap,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Me(g.path),c=fd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===pi.MERGE){const g=t;g.source.fromUser?c=E4(n,e,g.path,g.children,s,a,l):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=p_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===pi.ACK_USER_WRITE){const g=t;g.revert?c=w4(n,e,g.path,s,a,l):c=T4(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===pi.LISTEN_COMPLETE)c=S4(n,e,t.path,s,l);else throw gl("Unknown operation type: "+t.type);const m=l.getChanges();return v4(e,c,m),{viewCache:c,changes:m}}function v4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=c_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(JR(c_(e)))}}function lC(n,e,t,s,a,l){const c=e.eventCache;if(hd(s,t)!=null)return e;{let d,m;if(Me(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ha(e),y=g instanceof Te?g:Te.EMPTY_NODE,T=ky(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=cd(s,Ha(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Ne(t);if(g===".priority"){ne(Vr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();m=e.serverCache.getNode();const T=Cw(s,t,y,m);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=at(t);let T;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const S=Cw(s,t,c.getNode(),m);S!=null?T=c.getNode().getImmediateChild(g).updateChild(y,S):T=c.getNode().getImmediateChild(g)}else T=Py(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return ec(e,d,c.isFullyInitialized()||Me(t),n.filter.filtersNodes())}}function fd(n,e,t,s,a,l,c,d){const m=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Me(t))g=y.updateFullNode(m.getNode(),s,null);else if(y.filtersNodes()&&!m.isFiltered()){const O=m.getNode().updateChild(t,s);g=y.updateFullNode(m.getNode(),O,null)}else{const O=Ne(t);if(!m.isCompleteForPath(t)&&Vr(t)>1)return e;const U=at(t),H=m.getNode().getImmediateChild(O).updateChild(U,s);O===".priority"?g=y.updatePriority(m.getNode(),H):g=y.updateChild(m.getNode(),O,H,U,oC,null)}const T=tC(e,g,m.isFullyInitialized()||Me(t),y.filtersNodes()),S=new Vy(a,T,l);return lC(n,T,t,a,S,d)}function d_(n,e,t,s,a,l,c){const d=e.eventCache;let m,g;const y=new Vy(a,e,l);if(Me(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),m=ec(e,g,!0,n.filter.filtersNodes());else{const T=Ne(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),m=ec(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=at(t),O=d.getNode().getImmediateChild(T);let U;if(Me(S))U=s;else{const Q=y.getCompleteChild(T);Q!=null?by(S)===".priority"&&Q.getChild(QR(S)).isEmpty()?U=Q:U=Q.updateChild(S,s):U=Te.EMPTY_NODE}if(O.equals(U))m=e;else{const Q=n.filter.updateChild(d.getNode(),T,U,S,y,c);m=ec(e,Q,d.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function Iw(n,e){return n.eventCache.isCompleteForChild(e)}function E4(n,e,t,s,a,l,c){let d=e;return s.foreach((m,g)=>{const y=Ct(t,m);Iw(e,Ne(y))&&(d=d_(n,d,y,g,a,l,c))}),s.foreach((m,g)=>{const y=Ct(t,m);Iw(e,Ne(y))||(d=d_(n,d,y,g,a,l,c))}),d}function Nw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function p_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;Me(t)?g=s:g=new ct(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(y.hasChild(T)){const O=e.serverCache.getNode().getImmediateChild(T),U=Nw(n,O,S);m=fd(n,m,new Je(T),U,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const O=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!y.hasChild(T)&&!O){const U=e.serverCache.getNode().getImmediateChild(T),Q=Nw(n,U,S);m=fd(n,m,new Je(T),Q,a,l,c,d)}}),m}function T4(n,e,t,s,a,l,c){if(hd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(Me(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return fd(n,e,t,m.getNode().getChild(t),a,l,d,c);if(Me(t)){let g=new ct(null);return m.getNode().forEachChild(tl,(y,T)=>{g=g.set(new Je(y),T)}),p_(n,e,t,g,a,l,d,c)}else return e}else{let g=new ct(null);return s.foreach((y,T)=>{const S=Ct(t,y);m.isCompleteForPath(S)&&(g=g.set(y,m.getNode().getChild(S)))}),p_(n,e,t,g,a,l,d,c)}}function S4(n,e,t,s,a){const l=e.serverCache,c=tC(e,l.getNode(),l.isFullyInitialized()||Me(t),l.isFiltered());return lC(n,c,t,s,oC,a)}function w4(n,e,t,s,a,l){let c;if(hd(s,t)!=null)return e;{const d=new Vy(s,e,a),m=e.eventCache.getNode();let g;if(Me(t)||Ne(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=cd(s,Ha(e));else{const T=e.serverCache.getNode();ne(T instanceof Te,"serverChildren would be complete if leaf node"),y=ky(s,T)}y=y,g=n.filter.updateFullNode(m,y,l)}else{const y=Ne(t);let T=Py(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=m.getImmediateChild(y)),T!=null?g=n.filter.updateChild(m,y,T,at(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(m,y,Te.EMPTY_NODE,at(t),d,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=cd(s,Ha(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||hd(s,Ke())!=null,ec(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Ny(s.getIndex()),l=jP(s);this.processor_=g4(l);const c=t.serverCache,d=t.eventCache,m=a.updateFullNode(Te.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Te.EMPTY_NODE,d.getNode(),null),y=new ja(m,c.isFullyInitialized(),a.filtersNodes()),T=new ja(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Xd(T,y),this.eventGenerator_=new $P(this.query_)}get query(){return this.query_}}function b4(n){return n.viewCache_.serverCache.getNode()}function R4(n,e){const t=Ha(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Me(e)&&!t.getImmediateChild(Ne(e)).isEmpty())?t.getChild(e):null}function Dw(n){return n.eventRegistrations_.length===0}function C4(n,e){n.eventRegistrations_.push(e)}function Ow(n,e,t){const s=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function xw(n,e,t,s){e.type===pi.MERGE&&e.source.queryId!==null&&(ne(Ha(n.viewCache_),"We should always have a full cache before handling merges"),ne(c_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=y4(n.processor_,a,e,t,s);return _4(n.processor_,l.viewCache),ne(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,uC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function I4(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(mt,(l,c)=>{s.push(dl(l,c))}),t.isFullyInitialized()&&s.push(JR(t.getNode())),uC(n,s,t.getNode(),e)}function uC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return WP(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;class N4{constructor(){this.views=new Map}}function D4(n){ne(!dd,"__referenceConstructor has already been defined"),dd=n}function O4(){return ne(dd,"Reference.ts has not been loaded"),dd}function x4(n){return n.views.size===0}function Ly(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ne(l!=null,"SyncTree gave us an op for an invalid query."),xw(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(xw(c,e,t,s));return l}}function M4(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=cd(t,a?s:null),m=!1;d?m=!0:s instanceof Te?(d=ky(t,s),m=!1):(d=Te.EMPTY_NODE,m=!1);const g=Xd(new ja(d,m,!1),new ja(s,a,!1));return new A4(e,g)}return c}function k4(n,e,t,s,a,l){const c=M4(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),C4(c,t),I4(c,t)}function P4(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Lr(n);if(a==="default")for(const[m,g]of n.views.entries())c=c.concat(Ow(g,t,s)),Dw(g)&&(n.views.delete(m),g.query._queryParams.loadsAllData()||l.push(g.query));else{const m=n.views.get(a);m&&(c=c.concat(Ow(m,t,s)),Dw(m)&&(n.views.delete(a),m.query._queryParams.loadsAllData()||l.push(m.query)))}return d&&!Lr(n)&&l.push(new(O4())(e._repo,e._path)),{removed:l,events:c}}function cC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function nl(n,e){let t=null;for(const s of n.views.values())t=t||R4(s,e);return t}function hC(n,e){if(e._queryParams.loadsAllData())return $d(n);{const s=e._queryIdentifier;return n.views.get(s)}}function fC(n,e){return hC(n,e)!=null}function Lr(n){return $d(n)!=null}function $d(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd;function V4(n){ne(!pd,"__referenceConstructor has already been defined"),pd=n}function L4(){return ne(pd,"Reference.ts has not been loaded"),pd}let U4=1;class Mw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ct(null),this.pendingWriteTree_=f4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dC(n,e,t,s,a){return t4(n.pendingWriteTree_,e,t,s,a),a?Bc(n,new Fa(eC(),e,t)):[]}function Da(n,e,t=!1){const s=n4(n.pendingWriteTree_,e);if(i4(n.pendingWriteTree_,e)){let l=new ct(null);return s.snap!=null?l=l.set(Ke(),!0):gn(s.children,c=>{l=l.set(new Je(c),!0)}),Bc(n,new ud(s.path,l,t))}else return[]}function Wd(n,e,t){return Bc(n,new Fa(Oy(),e,t))}function z4(n,e,t){const s=ct.fromObject(t);return Bc(n,new wc(Oy(),e,s))}function B4(n,e){return Bc(n,new Sc(Oy(),e))}function q4(n,e,t){const s=zy(n,t);if(s){const a=By(s),l=a.path,c=a.queryId,d=In(l,e),m=new Sc(xy(c),d);return qy(n,l,m)}else return[]}function m_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||fC(c,e))){const m=P4(c,e,t,s);x4(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=m.removed;if(d=m.events,!a){const y=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(S,O)=>Lr(O));if(y&&!T){const S=n.syncPointTree_.subtree(l);if(!S.isEmpty()){const O=H4(S);for(let U=0;U<O.length;++U){const Q=O[U],H=Q.query,ce=gC(n,Q);n.listenProvider_.startListening(nc(H),md(n,H),ce.hashFn,ce.onComplete)}}}!T&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(nc(e),null):g.forEach(S=>{const O=n.queryToTagMap.get(Zd(S));n.listenProvider_.stopListening(nc(S),O)}))}G4(n,g)}return d}function F4(n,e,t,s){const a=zy(n,s);if(a!=null){const l=By(a),c=l.path,d=l.queryId,m=In(c,e),g=new Fa(xy(d),m,t);return qy(n,c,g)}else return[]}function j4(n,e,t,s){const a=zy(n,s);if(a){const l=By(a),c=l.path,d=l.queryId,m=In(c,e),g=ct.fromObject(t),y=new wc(xy(d),m,g);return qy(n,c,y)}else return[]}function kw(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(S,O)=>{const U=In(S,a);l=l||nl(O,U),c=c||Lr(O)});let d=n.syncPointTree_.get(a);d?(c=c||Lr(d),l=l||nl(d,Ke())):(d=new N4,n.syncPointTree_=n.syncPointTree_.set(a,d));let m;l!=null?m=!0:(m=!1,l=Te.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((O,U)=>{const Q=nl(U,Ke());Q&&(l=l.updateImmediateChild(O,Q))}));const g=fC(d,e);if(!g&&!e._queryParams.loadsAllData()){const S=Zd(e);ne(!n.queryToTagMap.has(S),"View does not exist, but we have a tag");const O=Q4();n.queryToTagMap.set(S,O),n.tagToQueryMap.set(O,S)}const y=My(n.pendingWriteTree_,a);let T=k4(d,e,t,y,l,m);if(!g&&!c&&!s){const S=hC(d,e);T=T.concat(K4(n,e,S))}return T}function Uy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const m=In(c,e),g=nl(d,m);if(g)return g});return sC(a,e,l,t,!0)}function Bc(n,e){return pC(e,n.syncPointTree_,null,My(n.pendingWriteTree_,Ke()))}function pC(n,e,t,s){if(Me(n.path))return mC(n,e,t,s);{const a=e.get(Ke());t==null&&a!=null&&(t=nl(a,Ke()));let l=[];const c=Ne(n.path),d=n.operationForChild(c),m=e.children.get(c);if(m&&d){const g=t?t.getImmediateChild(c):null,y=rC(s,c);l=l.concat(pC(d,m,g,y))}return a&&(l=l.concat(Ly(a,n,s,t))),l}}function mC(n,e,t,s){const a=e.get(Ke());t==null&&a!=null&&(t=nl(a,Ke()));let l=[];return e.children.inorderTraversal((c,d)=>{const m=t?t.getImmediateChild(c):null,g=rC(s,c),y=n.operationForChild(c);y&&(l=l.concat(mC(y,d,m,g)))}),a&&(l=l.concat(Ly(a,n,s,t))),l}function gC(n,e){const t=e.query,s=md(n,t);return{hashFn:()=>(b4(e)||Te.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?q4(n,t._path,s):B4(n,t._path);{const l=qk(a,t);return m_(n,t,null,l)}}}}function md(n,e){const t=Zd(e);return n.queryToTagMap.get(t)}function Zd(n){return n._path.toString()+"$"+n._queryIdentifier}function zy(n,e){return n.tagToQueryMap.get(e)}function By(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Je(n.substr(0,e))}}function qy(n,e,t){const s=n.syncPointTree_.get(e);ne(s,"Missing sync point for query tag that we're tracking");const a=My(n.pendingWriteTree_,e);return Ly(s,t,a,null)}function H4(n){return n.fold((e,t,s)=>{if(t&&Lr(t))return[$d(t)];{let a=[];return t&&(a=cC(t)),gn(s,(l,c)=>{a=a.concat(c)}),a}})}function nc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(L4())(n._repo,n._path):n}function G4(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Zd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function Q4(){return U4++}function K4(n,e,t){const s=e._path,a=md(n,e),l=gC(n,t),c=n.listenProvider_.startListening(nc(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)ne(!Lr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const m=d.fold((g,y,T)=>{if(!Me(g)&&y&&Lr(y))return[$d(y).query];{let S=[];return y&&(S=S.concat(cC(y).map(O=>O.query))),gn(T,(O,U)=>{S=S.concat(U)}),S}});for(let g=0;g<m.length;++g){const y=m[g];n.listenProvider_.stopListening(nc(y),md(n,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Fy(t)}node(){return this.node_}}class jy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ct(this.path_,e);return new jy(this.syncTree_,t)}node(){return Uy(this.syncTree_,this.path_)}}const Y4=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Pw=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return X4(n[".sv"],e,t);if(typeof n[".sv"]=="object")return $4(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},X4=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},$4=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ne(!1,"Unexpected increment value: "+s);const a=e.node();if(ne(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},W4=function(n,e,t,s){return Hy(e,new jy(t,n),s)},_C=function(n,e,t){return Hy(n,new Fy(e),t)};function Hy(n,e,t){const s=n.getPriority().val(),a=Pw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=Pw(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Xt(d,Mt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Xt(a))),c.forEachChild(mt,(d,m)=>{const g=Hy(m,e.getImmediateChild(d),t);g!==m&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Qy(n,e){let t=e instanceof Je?e:new Je(e),s=n,a=Ne(t);for(;a!==null;){const l=il(s.node.children,a)||{children:{},childCount:0};s=new Gy(a,s,l),t=at(t),a=Ne(t)}return s}function Rl(n){return n.node.value}function yC(n,e){n.node.value=e,g_(n)}function vC(n){return n.node.childCount>0}function Z4(n){return Rl(n)===void 0&&!vC(n)}function Jd(n,e){gn(n.node.children,(t,s)=>{e(new Gy(t,n,s))})}function EC(n,e,t,s){t&&e(n),Jd(n,a=>{EC(a,e,!0)})}function J4(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qc(n){return new Je(n.parent===null?n.name:qc(n.parent)+"/"+n.name)}function g_(n){n.parent!==null&&eV(n.parent,n.name,n)}function eV(n,e,t){const s=Z4(t),a=Yi(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,g_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,g_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV=/[\[\].#$\/\u0000-\u001F\u007F]/,nV=/[\[\].#$\u0000-\u001F\u007F]/,Ig=10*1024*1024,Ky=function(n){return typeof n=="string"&&n.length!==0&&!tV.test(n)},TC=function(n){return typeof n=="string"&&n.length!==0&&!nV.test(n)},iV=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),TC(n)},SC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Kd(n)||n&&typeof n=="object"&&Yi(n,".sv")},__=function(n,e,t,s){ep(sl(n,"value"),e,t)},ep=function(n,e,t){const s=t instanceof Je?new TP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ra(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ra(s)+" with contents = "+e.toString());if(Kd(e))throw new Error(n+"contains "+e.toString()+" "+Ra(s));if(typeof e=="string"&&e.length>Ig/3&&Ed(e)>Ig)throw new Error(n+"contains a string greater than "+Ig+" utf8 bytes "+Ra(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(gn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Ky(c)))throw new Error(n+" contains an invalid key ("+c+") "+Ra(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SP(s,c),ep(n,d,s),wP(s)}),a&&l)throw new Error(n+' contains ".value" child '+Ra(s)+" in addition to actual children.")}},sV=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=yc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Ky(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(EP);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&si(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},rV=function(n,e,t,s){const a=sl(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];gn(e,(c,d)=>{const m=new Je(c);if(ep(a,d,Ct(t,m)),by(m)===".priority"&&!SC(d))throw new Error(a+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(m)}),sV(a,l)},aV=function(n,e,t){if(Kd(e))throw new Error(sl(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!SC(e))throw new Error(sl(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},wC=function(n,e,t,s){if(!TC(t))throw new Error(sl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},oV=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wC(n,e,t)},Xo=function(n,e){if(Ne(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},lV=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ky(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!iV(t))throw new Error(sl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Ry(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function AC(n,e,t){Yy(n,t),bC(n,s=>Ry(s,e))}function Ps(n,e,t){Yy(n,t),bC(n,s=>si(s,e)||si(e,s))}function bC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(cV(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function cV(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Zu&&an("event: "+t.toString()),Al(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV="repo_interrupt",fV=25;class dV{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ld(),this.transactionQueueTree_=new Gy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pV(n,e,t){if(n.stats_=wy(n.repoInfo_),n.forceRestClient_||Gk())n.server_=new od(n.repoInfo_,(s,a,l,c)=>{Vw(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Lw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Zt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Is(n.repoInfo_,e,(s,a,l,c)=>{Vw(n,s,a,l,c)},s=>{Lw(n,s)},s=>{gV(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=$k(n.repoInfo_,()=>new XP(n.stats_,n.server_)),n.infoData_=new HP,n.infoSyncTree_=new Mw({startListening:(s,a,l,c)=>{let d=[];const m=n.infoData_.getNode(s._path);return m.isEmpty()||(d=Wd(n.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),$y(n,"connected",!1),n.serverSyncTree_=new Mw({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,m)=>{const g=c(d,m);Ps(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function mV(n){const t=n.infoData_.getNode(new Je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Xy(n){return Y4({timestamp:mV(n)})}function Vw(n,e,t,s,a){n.dataUpdateCount++;const l=new Je(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const m=Uf(t,g=>Mt(g));c=j4(n.serverSyncTree_,l,m,a)}else{const m=Mt(t);c=F4(n.serverSyncTree_,l,m,a)}else if(s){const m=Uf(t,g=>Mt(g));c=z4(n.serverSyncTree_,l,m)}else{const m=Mt(t);c=Wd(n.serverSyncTree_,l,m)}let d=l;c.length>0&&(d=tp(n,l)),Ps(n.eventQueue_,d,c)}function Lw(n,e){$y(n,"connected",e),e===!1&&yV(n)}function gV(n,e){gn(e,(t,s)=>{$y(n,t,s)})}function $y(n,e,t){const s=new Je("/.info/"+e),a=Mt(t);n.infoData_.updateSnapshot(s,a);const l=Wd(n.infoSyncTree_,s,a);Ps(n.eventQueue_,s,l)}function RC(n){return n.nextWriteId_++}function _V(n,e,t,s,a){Wy(n,"set",{path:e.toString(),value:t,priority:s});const l=Xy(n),c=Mt(t,s),d=Uy(n.serverSyncTree_,e),m=_C(c,d,l),g=RC(n),y=dC(n.serverSyncTree_,e,m,g,!0);Yy(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(S,O)=>{const U=S==="ok";U||Dn("set at "+e+" failed: "+S);const Q=Da(n.serverSyncTree_,g,!U);Ps(n.eventQueue_,e,Q),ml(n,a,S,O)});const T=OC(n,e);tp(n,T),Ps(n.eventQueue_,T,[])}function yV(n){Wy(n,"onDisconnectEvents");const e=Xy(n),t=ld();u_(n.onDisconnect_,Ke(),(a,l)=>{const c=W4(a,l,n.serverSyncTree_,e);bl(t,a,c)});let s=[];u_(t,Ke(),(a,l)=>{s=s.concat(Wd(n.serverSyncTree_,a,l));const c=OC(n,a);tp(n,c)}),n.onDisconnect_=ld(),Ps(n.eventQueue_,Ke(),s)}function vV(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&l_(n.onDisconnect_,e),ml(n,t,s,a)})}function Uw(n,e,t,s){const a=Mt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&bl(n.onDisconnect_,e,a),ml(n,s,l,c)})}function EV(n,e,t,s,a){const l=Mt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&bl(n.onDisconnect_,e,l),ml(n,a,c,d)})}function TV(n,e,t,s){if(Lf(t)){an("onDisconnect().update() called with empty data.  Don't do anything."),ml(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&gn(t,(c,d)=>{const m=Mt(d);bl(n.onDisconnect_,Ct(e,c),m)}),ml(n,s,a,l)})}function SV(n,e,t){let s;Ne(e._path)===".info"?s=kw(n.infoSyncTree_,e,t):s=kw(n.serverSyncTree_,e,t),AC(n.eventQueue_,e._path,s)}function wV(n,e,t){let s;Ne(e._path)===".info"?s=m_(n.infoSyncTree_,e,t):s=m_(n.serverSyncTree_,e,t),AC(n.eventQueue_,e._path,s)}function AV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(hV)}function Wy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),an(t,...e)}function ml(n,e,t,s){e&&Al(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function CC(n,e,t){return Uy(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function Zy(n,e=n.transactionQueueTree_){if(e||np(n,e),Rl(e)){const t=NC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&bV(n,qc(e),t)}else vC(e)&&Jd(e,t=>{Zy(n,t)})}function bV(n,e,t){const s=t.map(g=>g.currentWriteId),a=CC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];ne(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=In(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),m=e;n.server_.put(m.toString(),d,g=>{Wy(n,"transaction put response",{path:m.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,y=y.concat(Da(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();np(n,Qy(n.transactionQueueTree_,e)),Zy(n,n.transactionQueueTree_),Ps(n.eventQueue_,e,y);for(let S=0;S<T.length;S++)Al(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Dn("transaction at "+m.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}tp(n,e)}},c)}function tp(n,e){const t=IC(n,e),s=qc(t),a=NC(n,t);return RV(n,a,s),s}function RV(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const m=e[d],g=In(t,m.path);let y=!1,T;if(ne(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)y=!0,T=m.abortReason,a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=fV)y=!0,T="maxretry",a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0));else{const S=CC(n,m.path,c);m.currentInputSnapshot=S;const O=e[d].update(S.val());if(O!==void 0){ep("transaction failed: Data returned ",O,m.path);let U=Mt(O);typeof O=="object"&&O!=null&&Yi(O,".priority")||(U=U.updatePriority(S.getPriority()));const H=m.currentWriteId,ce=Xy(n),oe=_C(U,S,ce);m.currentOutputSnapshotRaw=U,m.currentOutputSnapshotResolved=oe,m.currentWriteId=RC(n),c.splice(c.indexOf(H),1),a=a.concat(dC(n.serverSyncTree_,m.path,oe,m.currentWriteId,m.applyLocally)),a=a.concat(Da(n.serverSyncTree_,H,!0))}else y=!0,T="nodata",a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0))}Ps(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(S){setTimeout(S,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}np(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Al(s[d]);Zy(n,n.transactionQueueTree_)}function IC(n,e){let t,s=n.transactionQueueTree_;for(t=Ne(e);t!==null&&Rl(s)===void 0;)s=Qy(s,t),e=at(e),t=Ne(e);return s}function NC(n,e){const t=[];return DC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function DC(n,e,t){const s=Rl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Jd(e,a=>{DC(n,a,t)})}function np(n,e){const t=Rl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,yC(e,t.length>0?t:void 0)}Jd(e,s=>{np(n,s)})}function OC(n,e){const t=qc(IC(n,e)),s=Qy(n.transactionQueueTree_,e);return J4(s,a=>{Ng(n,a)}),Ng(n,s),EC(s,a=>{Ng(n,a)}),t}function Ng(n,e){const t=Rl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ne(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ne(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Da(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?yC(e,void 0):t.length=l+1,Ps(n.eventQueue_,qc(e),a);for(let c=0;c<s.length;c++)Al(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function IV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Dn(`Invalid query segment '${t}' in query '${n}'`)}return e}const zw=function(n,e){const t=NV(n),s=t.namespace;t.domain==="firebase.com"&&ks(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ks("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Vk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new LR(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new Je(t.pathString)}},NV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",m=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=CV(n.substring(y,T)));const S=IV(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const U=e.indexOf(".");s=e.substring(0,U).toLowerCase(),t=e.substring(U+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Zt(this.snapshot.exportVal())}}class OV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class MV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Ss;return vV(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Xo("OnDisconnect.remove",this._path);const e=new Ss;return Uw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Xo("OnDisconnect.set",this._path),__("OnDisconnect.set",e,this._path);const t=new Ss;return Uw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Xo("OnDisconnect.setWithPriority",this._path),__("OnDisconnect.setWithPriority",e,this._path),aV("OnDisconnect.setWithPriority",t);const s=new Ss;return EV(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Xo("OnDisconnect.update",this._path),rV("OnDisconnect.update",e,this._path);const t=new Ss;return TV(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Me(this._path)?null:by(this._path)}get ref(){return new qr(this._repo,this._path)}get _queryIdentifier(){const e=Sw(this._queryParams),t=Ty(e);return t==="{}"?"default":t}get _queryObject(){return Sw(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof Jy))return!1;const t=this._repo===e._repo,s=Ry(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+vP(this._path)}}class qr extends Jy{constructor(e,t){super(e,t,new Dy,!1)}get parent(){const e=QR(this._path);return e===null?null:new qr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gd{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Je(e),s=y_(this.ref,e);return new gd(this._node.getChild(t),s,mt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new gd(a,y_(this.ref,s),mt)))}hasChild(e){const t=new Je(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ma(n,e){return n=st(n),n._checkNotDeleted("ref"),e!==void 0?y_(n._root,e):n._root}function y_(n,e){return n=st(n),Ne(n._path)===null?oV("child","path",e):wC("child","path",e),new qr(n._repo,Ct(n._path,e))}function kV(n){return n=st(n),new MV(n._repo,n._path)}function Dg(n){return Xo("remove",n._path),ip(n,null)}function ip(n,e){n=st(n),Xo("set",n._path),__("set",e,n._path);const t=new Ss;return _V(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class ev{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new DV("value",this,new gd(e.snapshotNode,new qr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new OV(this,e,t):null}matches(e){return e instanceof ev?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function PV(n,e,t,s,a){const l=new xV(t,void 0),c=new ev(l);return SV(n._repo,n,c),()=>wV(n._repo,n,c)}function tv(n,e,t,s){return PV(n,"value",e)}D4(qr);V4(qr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV="FIREBASE_DATABASE_EMULATOR_HOST",v_={};let LV=!1;function UV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Qi(l);n.repoInfo_=new LR(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function zV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||ks("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),an("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=zw(l,a),d=c.repoInfo,m;typeof process<"u"&&sw&&(m=sw[VV]),m?(l=`http://${m}?ns=${d.namespace}`,c=zw(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new Kk(n.name,n.options,e);lV("Invalid Firebase Database URL",c),Me(c.path)||ks("Database URL must point to the root of a Firebase Database (not including a child path).");const y=qV(d,n,g,new Qk(n,t));return new FV(y,n)}function BV(n,e){const t=v_[e];(!t||t[n.key]!==n)&&ks(`Database ${e}(${n.repoInfo_}) has already been deleted.`),AV(n),delete t[n.key]}function qV(n,e,t,s){let a=v_[e.name];a||(a={},v_[e.name]=a);let l=a[n.toURLString()];return l&&ks("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new dV(n,LV,t,s),a[n.toURLString()]=l,l}class FV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qr(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(BV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ks("Cannot call "+e+" on a deleted database.")}}function jV(n=Sd(),e){const t=bc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=w_("database");s&&HV(t,...s)}return t}function HV(n,e,t,s={}){n=st(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Rr(s,l.repoInfo_.emulatorOptions))return;ks("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&ks('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Mf(Mf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:A_(s.mockUserToken,n.app.options.projectId);c=new Mf(d)}Qi(e)&&(yd(e),vd("Database",!0)),UV(l,a,s,c)}/**
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
 */function GV(n){Dk(Ur),Cr(new Ns("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return zV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),ri(rw,aw,n),ri(rw,aw,"esm2020")}Is.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Is.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};GV();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="firebasestorage.googleapis.com",MC="storageBucket",QV=120*1e3,KV=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Ki{constructor(e,t,s=0){super(Og(e),`Firebase Storage: ${t} (${Og(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,St.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Og(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function Og(n){return"storage/"+n}function nv(){const n="An unknown error occurred, please check the error payload for server response.";return new St(Tt.UNKNOWN,n)}function YV(n){return new St(Tt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function XV(n){return new St(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $V(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new St(Tt.UNAUTHENTICATED,n)}function WV(){return new St(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ZV(n){return new St(Tt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function JV(){return new St(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eL(){return new St(Tt.CANCELED,"User canceled the upload/download.")}function tL(n){return new St(Tt.INVALID_URL,"Invalid URL '"+n+"'.")}function nL(n){return new St(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function iL(){return new St(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+MC+"' property when initializing the app?")}function sL(){return new St(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rL(){return new St(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function aL(n){return new St(Tt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function E_(n){return new St(Tt.INVALID_ARGUMENT,n)}function kC(){return new St(Tt.APP_DELETED,"The Firebase app was deleted.")}function oL(n){return new St(Tt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ic(n,e){return new St(Tt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function qu(n){throw new St(Tt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Fn.makeFromUrl(e,t)}catch{return new Fn(e,"")}if(s.path==="")return s;throw nL(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function l(ye){ye.path.charAt(ye.path.length-1)==="/"&&(ye.path_=ye.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),m={bucket:1,path:3};function g(ye){ye.path_=decodeURIComponent(ye.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${T}/${y}/b/${a}/o${S}`,"i"),U={bucket:1,path:3},Q=t===xC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,H="([^?#]*)",ce=new RegExp(`^https?://${Q}/${a}/${H}`,"i"),re=[{regex:d,indices:m,postModify:l},{regex:O,indices:U,postModify:g},{regex:ce,indices:{bucket:1,path:2},postModify:g}];for(let ye=0;ye<re.length;ye++){const pe=re[ye],De=pe.regex.exec(e);if(De){const N=De[pe.indices.bucket];let b=De[pe.indices.path];b||(b=""),s=new Fn(N,b),pe.postModify(s);break}}if(s==null)throw tL(e);return s}}class lL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(n,e,t){let s=1,a=null,l=null,c=!1,d=0;function m(){return d===2}let g=!1;function y(...H){g||(g=!0,e.apply(null,H))}function T(H){a=setTimeout(()=>{a=null,n(O,m())},H)}function S(){l&&clearTimeout(l)}function O(H,...ce){if(g){S();return}if(H){S(),y.call(null,H,...ce);return}if(m()||c){S(),y.call(null,H,...ce);return}s<64&&(s*=2);let re;d===1?(d=2,re=0):re=(s+Math.random())*1e3,T(re)}let U=!1;function Q(H){U||(U=!0,S(),!g&&(a!==null?(H||(d=2),clearTimeout(a),T(0)):H||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,Q(!0)},t),Q}function cL(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(n){return n!==void 0}function fL(n){return typeof n=="object"&&!Array.isArray(n)}function iv(n){return typeof n=="string"||n instanceof String}function Bw(n){return sv()&&n instanceof Blob}function sv(){return typeof Blob<"u"}function qw(n,e,t,s){if(s<e)throw E_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw E_(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function PC(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const a=e(s)+"="+e(n[s]);t=t+a+"&"}return t=t.slice(0,-1),t}var ka;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ka||(ka={}));/**
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
 */function dL(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(e,t,s,a,l,c,d,m,g,y,T,S=!0,O=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((U,Q)=>{this.resolve_=U,this.reject_=Q,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new Tf(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const m=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===ka.NO_ERROR,m=l.getStatus();if(!d||dL(m,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===ka.ABORT;s(!1,new Tf(!1,null,y));return}const g=this.successCodes_.indexOf(m)!==-1;s(!0,new Tf(g,l))})},t=(s,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const m=this.callback_(d,d.getResponse());hL(m)?l(m):l()}catch(m){c(m)}else if(d!==null){const m=nv();m.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,m)):c(m)}else if(a.canceled){const m=this.appDelete_?kC():eL();c(m)}else{const m=JV();c(m)}};this.canceled_?t(!1,new Tf(!1,null,!0)):this.backoffId_=uL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tf{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function mL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function gL(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _L(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yL(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function vL(n,e,t,s,a,l,c=!0,d=!1){const m=PC(n.urlParams),g=n.url+m,y=Object.assign({},n.headers);return _L(y,e),mL(y,t),gL(y,l),yL(y,s),new pL(g,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TL(...n){const e=EL();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(sv())return new Blob(n);throw new St(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SL(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function wL(n){if(typeof atob>"u")throw aL("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xg{constructor(e,t){this.data=e,this.contentType=t||null}}function AL(n,e){switch(n){case Ui.RAW:return new xg(VC(e));case Ui.BASE64:case Ui.BASE64URL:return new xg(LC(n,e));case Ui.DATA_URL:return new xg(RL(e),CL(e))}throw nv()}function VC(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,c=n.charCodeAt(++t);s=65536|(l&1023)<<10|c&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function bL(n){let e;try{e=decodeURIComponent(n)}catch{throw ic(Ui.DATA_URL,"Malformed data URL.")}return VC(e)}function LC(n,e){switch(n){case Ui.BASE64:{const a=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(a||l)throw ic(n,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case Ui.BASE64URL:{const a=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(a||l)throw ic(n,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=wL(e)}catch(a){throw a.message.includes("polyfill")?a:ic(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}class UC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ic(Ui.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=IL(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function RL(n){const e=new UC(n);return e.base64?LC(Ui.BASE64,e.rest):bL(e.rest)}function CL(n){return new UC(n).contentType}function IL(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){let s=0,a="";Bw(e)?(this.data_=e,s=e.size,a=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=a}size(){return this.size_}type(){return this.type_}slice(e,t){if(Bw(this.data_)){const s=this.data_,a=SL(s,e,t);return a===null?null:new gr(a)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new gr(s,!0)}}static getBlob(...e){if(sv()){const t=e.map(s=>s instanceof gr?s.data_:s);return new gr(TL.apply(null,t))}else{const t=e.map(c=>iv(c)?AL(Ui.RAW,c).data:c.data_);let s=0;t.forEach(c=>{s+=c.byteLength});const a=new Uint8Array(s);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)a[l++]=c[d]}),new gr(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(n){let e;try{e=JSON.parse(n)}catch{return null}return fL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function DL(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function BC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(n,e){return e}class Tn{constructor(e,t,s,a){this.server=e,this.local=t||e,this.writable=!!s,this.xform=a||OL}}let Sf=null;function xL(n){return!iv(n)||n.length<2?n:BC(n)}function qC(){if(Sf)return Sf;const n=[];n.push(new Tn("bucket")),n.push(new Tn("generation")),n.push(new Tn("metageneration")),n.push(new Tn("name","fullPath",!0));function e(l,c){return xL(c)}const t=new Tn("name");t.xform=e,n.push(t);function s(l,c){return c!==void 0?Number(c):c}const a=new Tn("size");return a.xform=s,n.push(a),n.push(new Tn("timeCreated")),n.push(new Tn("updated")),n.push(new Tn("md5Hash",null,!0)),n.push(new Tn("cacheControl",null,!0)),n.push(new Tn("contentDisposition",null,!0)),n.push(new Tn("contentEncoding",null,!0)),n.push(new Tn("contentLanguage",null,!0)),n.push(new Tn("contentType",null,!0)),n.push(new Tn("metadata","customMetadata",!0)),Sf=n,Sf}function ML(n,e){function t(){const s=n.bucket,a=n.fullPath,l=new Fn(s,a);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function kL(n,e,t){const s={};s.type="file";const a=t.length;for(let l=0;l<a;l++){const c=t[l];s[c.local]=c.xform(s,e[c.server])}return ML(s,n),s}function FC(n,e,t){const s=zC(e);return s===null?null:kL(n,s,t)}function PL(n,e,t,s){const a=zC(e);if(a===null||!iv(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(g=>{const y=n.bucket,T=n.fullPath,S="/b/"+c(y)+"/o/"+c(T),O=rv(S,t,s),U=PC({alt:"media",token:g});return O+U})[0]}function VL(n,e){const t={},s=e.length;for(let a=0;a<s;a++){const l=e[a];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class jC{constructor(e,t,s,a){this.url=e,this.method=t,this.handler=s,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n){if(!n)throw nv()}function LL(n,e){function t(s,a){const l=FC(n,a,e);return HC(l!==null),l}return t}function UL(n,e){function t(s,a){const l=FC(n,a,e);return HC(l!==null),PL(l,a,n.host,n._protocol)}return t}function GC(n){function e(t,s){let a;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?a=WV():a=$V():t.getStatus()===402?a=XV(n.bucket):t.getStatus()===403?a=ZV(n.path):a=s,a.status=t.getStatus(),a.serverResponse=s.serverResponse,a}return e}function zL(n){const e=GC(n);function t(s,a){let l=e(s,a);return s.getStatus()===404&&(l=YV(n.path)),l.serverResponse=a.serverResponse,l}return t}function BL(n,e,t){const s=e.fullServerUrl(),a=rv(s,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new jC(a,l,UL(n,t),c);return d.errorHandler=zL(e),d}function qL(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function FL(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=qL(null,e)),s}function jL(n,e,t,s,a){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let re="";for(let ye=0;ye<2;ye++)re=re+Math.random().toString().slice(2);return re}const m=d();c["Content-Type"]="multipart/related; boundary="+m;const g=FL(e,s,a),y=VL(g,t),T="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+m+`\r
Content-Type: `+g.contentType+`\r
\r
`,S=`\r
--`+m+"--",O=gr.getBlob(T,s,S);if(O===null)throw sL();const U={name:g.fullPath},Q=rv(l,n.host,n._protocol),H="POST",ce=n.maxUploadRetryTime,oe=new jC(Q,H,LL(n,t),ce);return oe.urlParams=U,oe.headers=c,oe.body=O.uploadData(),oe.errorHandler=GC(e),oe}class HL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ka.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ka.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ka.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,a,l){if(this.sent_)throw qu("cannot .send() more than once");if(Qi(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const c in l)l.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,l[c].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GL extends HL{initXhr(){this.xhr_.responseType="text"}}function QC(){return new GL}/**
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
 */class Ga{constructor(e,t){this._service=e,t instanceof Fn?this._location=t:this._location=Fn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ga(e,t)}get root(){const e=new Fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BC(this._location.path)}get storage(){return this._service}get parent(){const e=NL(this._location.path);if(e===null)return null;const t=new Fn(this._location.bucket,e);return new Ga(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw oL(e)}}function QL(n,e,t){n._throwIfRoot("uploadBytes");const s=jL(n.storage,n._location,qC(),new gr(e,!0),t);return n.storage.makeRequestWithTokens(s,QC).then(a=>({metadata:a,ref:n}))}function KL(n){n._throwIfRoot("getDownloadURL");const e=BL(n.storage,n._location,qC());return n.storage.makeRequestWithTokens(e,QC).then(t=>{if(t===null)throw rL();return t})}function YL(n,e){const t=DL(n._location.path,e),s=new Fn(n._location.bucket,t);return new Ga(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(n){return/^[A-Za-z]+:\/\//.test(n)}function $L(n,e){return new Ga(n,e)}function KC(n,e){if(n instanceof av){const t=n;if(t._bucket==null)throw iL();const s=new Ga(t,t._bucket);return e!=null?KC(s,e):s}else return e!==void 0?YL(n,e):n}function WL(n,e){if(e&&XL(e)){if(n instanceof av)return $L(n,e);throw E_("To use ref(service, url), the first argument must be a Storage instance.")}else return KC(n,e)}function Fw(n,e){const t=e?.[MC];return t==null?null:Fn.makeFromBucketSpec(t,n)}function ZL(n,e,t,s={}){n.host=`${e}:${t}`;const a=Qi(e);a&&(yd(`https://${n.host}/b`),vd("Storage",!0)),n._isUsingEmulator=!0,n._protocol=a?"https":"http";const{mockUserToken:l}=s;l&&(n._overrideAuthToken=typeof l=="string"?l:A_(l,n.app.options.projectId))}class av{constructor(e,t,s,a,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=xC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QV,this._maxUploadRetryTime=KV,this._requests=new Set,a!=null?this._bucket=Fn.makeFromBucketSpec(a,this._host):this._bucket=Fw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fn.makeFromBucketSpec(this._url,e):this._bucket=Fw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ga(this,e)}_makeRequest(e,t,s,a,l=!0){if(this._deleted)return new lL(kC());{const c=vL(e,this._appId,s,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const jw="@firebase/storage",Hw="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="storage";function JL(n,e,t){return n=st(n),QL(n,e,t)}function e6(n){return n=st(n),KL(n)}function t6(n,e){return n=st(n),WL(n,e)}function n6(n=Sd(),e){n=st(n);const s=bc(n,YC).getImmediate({identifier:e}),a=w_("storage");return a&&i6(s,...a),s}function i6(n,e,t,s={}){ZL(n,e,t,s)}function s6(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new av(t,s,a,e,Ur)}function r6(){Cr(new Ns(YC,s6,"PUBLIC").setMultipleInstances(!0)),ri(jw,Hw,""),ri(jw,Hw,"esm2020")}r6();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o6=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Gw=n=>{const e=o6(n);return e.charAt(0).toUpperCase()+e.slice(1)},XC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),l6=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=Ie.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},m)=>Ie.createElement("svg",{ref:m,...u6,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:XC("lucide",a),...!l&&!l6(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,y])=>Ie.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=(n,e)=>{const t=Ie.forwardRef(({className:s,...a},l)=>Ie.createElement(c6,{ref:l,iconNode:e,className:XC(`lucide-${a6(Gw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=Gw(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],f6=vi("arrow-left",h6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Qw=vi("bell",d6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],m6=vi("check",p6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ov=vi("loader-circle",g6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Kw=vi("log-out",_6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],lv=vi("message-square",y6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],E6=vi("paperclip",v6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],S6=vi("send",T6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Yw=vi("user-plus",w6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Xw=vi("users",A6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],R6=vi("x",b6),C6={apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},sp=hA(C6),kf=gO(sp),On=mk(sp),Pa=jV(sp),I6=n6(sp),N6=n=>{Ie.useEffect(()=>{if(!n)return;const e=Ma(Pa,`/status/${n.uid}`),t=Ba(On,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Ma(Pa,".info/connected"),c=tv(l,d=>{if(d.val()===!1){mc(t,{state:"offline",last_changed:gc()});return}kV(e).set(s).then(()=>{ip(e,a),mc(t,{state:"online",last_changed:gc()})})});return()=>c()},[n])},$C=n=>{const[e,t]=Ie.useState(null);return Ie.useEffect(()=>{if(!n){t(null);return}const s=Vc(Ba(On,"users",n),c=>{c.exists()?t(d=>({...d,...c.data()})):t(null)}),a=Ma(Pa,`/status/${n}`),l=tv(a,c=>{const d=c.val();t(m=>({...m,presence:d?.state}))});return()=>{s(),l()}},[n]),e},D6=({text:n="Preparando seu bate-papo..."})=>j.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:j.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[j.jsx(lv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),j.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),j.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[j.jsx(ov,{className:"animate-spin h-10 w-10 text-blue-400"}),j.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),O6=()=>{const n=async()=>{const e=new ws;try{const s=(await b2(kf,e)).user,a=Ba(On,"users",s.uid);(await ER(a)).exists()||await Nk(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return j.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:j.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[j.jsx(lv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),j.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),j.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens minimalista e segura. Conecte-se para começar."}),j.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[j.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},x6=({user:n,onClose:e})=>n?j.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:j.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[j.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),j.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),j.jsx("p",{className:"text-gray-400",children:n.email}),j.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,$w=({currentUser:n})=>{const[e,t]=Ie.useState(""),[s,a]=Ie.useState([]),[l,c]=Ie.useState({}),[d,m]=Ie.useState(!1),[g,y]=Ie.useState(""),[T,S]=Ie.useState(""),O=async Q=>{if(Q.preventDefault(),e.trim()!==""){m(!0),y(""),S(""),a([]);try{const H=hl(Ar(On,"users"),Pr("email","==",e.trim()),Rk(1)),oe=(await iw(H)).docs.map(re=>re.data())[0];if(oe&&oe.uid!==n.uid){a([oe]);const re=hl(Ar(On,"friendships"),Pr("users","array-contains",n.uid)),pe=(await iw(re)).docs.find(De=>De.data().users.includes(oe.uid));c({[oe.uid]:pe?pe.data().status:"not_friends"})}else oe&&oe.uid===n.uid?S("Você não pode adicionar a si mesmo."):S("Nenhum usuário encontrado com este e-mail.")}catch(H){y("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(H)}finally{m(!1)}}},U=async Q=>{try{await TR(Ar(On,"friendships"),{users:[n.uid,Q.uid],status:"pending",requestedBy:n.uid,createdAt:gc()}),c(H=>({...H,[Q.uid]:"pending"}))}catch(H){y("Falha ao enviar pedido."),console.error(H)}};return j.jsxs("div",{className:"p-4",children:[j.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),j.jsxs("form",{onSubmit:O,className:"flex gap-2",children:[j.jsx("input",{type:"email",value:e,onChange:Q=>t(Q.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),j.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?j.jsx(ov,{className:"animate-spin"}):"Buscar"})]}),j.jsxs("div",{className:"mt-4 h-24",children:[g&&j.jsx("p",{className:"text-red-400",children:g}),T&&j.jsx("p",{className:"text-yellow-400",children:T}),s.map(Q=>j.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("img",{src:Q.photoURL,alt:Q.displayName,className:"w-10 h-10 rounded-full"}),j.jsx("span",{className:"text-white",children:Q.displayName})]}),j.jsxs("div",{children:[l[Q.uid]==="not_friends"&&j.jsx("button",{onClick:()=>U(Q),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[Q.uid]==="pending"&&j.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[Q.uid]==="accepted"&&j.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[Q.uid]==="declined"&&j.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},Q.uid))]})]})},Ww=({currentUser:n})=>{const[e,t]=Ie.useState([]);Ie.useEffect(()=>{const a=hl(Ar(On,"friendships"),Pr("users","array-contains",n.uid),Pr("status","==","pending")),l=Vc(a,async c=>{const d=[];for(const m of c.docs){const g=m.data();if(g.requestedBy!==n.uid){const y=g.users.find(S=>S!==n.uid),T=await ER(Ba(On,"users",y));T.exists()&&d.push({id:m.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await mc(Ba(On,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return j.jsxs("div",{className:"p-4",children:[j.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?j.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):j.jsx("ul",{className:"space-y-2",children:e.map(a=>j.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),j.jsx("span",{className:"text-white",children:a.displayName})]}),j.jsxs("div",{className:"flex gap-2",children:[j.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:j.jsx(m6,{size:16})}),j.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:j.jsx(R6,{size:16})})]})]},a.id))})]})},Zw=({currentUser:n,onSelectUser:e})=>{const[t,s]=Ie.useState([]);return Ie.useEffect(()=>{if(!n?.uid)return;const a=hl(Ar(On,"friendships"),Pr("users","array-contains",n.uid),Pr("status","==","accepted")),l=Vc(a,c=>{const d=c.docs.map(m=>m.data().users.find(g=>g!==n.uid));s(d)});return()=>l()},[n.uid]),j.jsxs("div",{className:"flex-grow overflow-y-auto",children:[j.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Contatos"}),t.length===0?j.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):j.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(a=>j.jsx(M6,{friendId:a,currentUser:n,onSelectUser:e},a))})]})},M6=({friendId:n,currentUser:e,onSelectUser:t})=>{const s=$C(n),[a,l]=Ie.useState(0);if(Ie.useEffect(()=>{if(!n||!e)return;const d=[e.uid,n].sort().join("_"),m=hl(Ar(On,`conversations/${d}/messages`),Pr("receiverId","==",e.uid),Pr("isRead","==",!1)),g=Vc(m,y=>l(y.size));return()=>g()},[n,e]),!s||!s.uid)return j.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const c=d=>d&&typeof d.seconds=="number"?`Visto por último: ${new Date(d.seconds*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:"Offline";return j.jsxs("li",{onClick:()=>t(s),className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200",children:[j.jsxs("div",{className:"flex items-center gap-4 relative",children:[j.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),j.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${s.presence==="online"?"bg-green-500":"bg-gray-500"}`}),j.jsxs("div",{children:[j.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName}),j.jsx("p",{className:"text-sm text-gray-400",children:s.presence==="online"?"Online":c(s.last_changed)})]})]}),a>0&&j.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce",children:a})]})},Jw=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=Ie.useState([]),[l,c]=Ie.useState(""),[d,m]=Ie.useState(!1),[g,y]=Ie.useState(!1),[T,S]=Ie.useState(!1),O=Ie.useRef(null),U=Ie.useRef(null),Q=Ie.useRef(null),H=[n.uid,e.uid].sort().join("_"),ce=$C(e.uid);Ie.useEffect(()=>{const N=`conversations/${H}/messages`,b=hl(Ar(On,N),bk("createdAt","asc")),C=Vc(b,k=>{a(k.docs.map(M=>({id:M.id,...M.data()}))),k.docs.forEach(M=>{M.data().receiverId===n.uid&&!M.data().isRead&&mc(M.ref,{isRead:!0})})});return()=>C()},[H,n.uid]),Ie.useEffect(()=>{const N=Ma(Pa,`typing/${H}/${e.uid}`),b=tv(N,C=>{m(C.exists())});return()=>b()},[H,e.uid]),Ie.useEffect(()=>{O.current?.scrollIntoView({behavior:"smooth"})},[s]);const oe=N=>{c(N.target.value);const b=Ma(Pa,`typing/${H}/${n.uid}`);N.target.value.trim().length>0?(ip(b,!0),Q.current&&clearTimeout(Q.current),Q.current=setTimeout(()=>{Dg(b)},3e3)):Dg(b)},re=async N=>{const b={...N,createdAt:gc(),senderId:n.uid,receiverId:e.uid,isRead:!1};await TR(Ar(On,`conversations/${H}/messages`),b)},ye=async N=>{if(N.preventDefault(),l.trim()==="")return;const b=l;c(""),Dg(Ma(Pa,`typing/${H}/${n.uid}`)),Q.current&&clearTimeout(Q.current);try{await re({text:b})}catch(C){console.error("Falha ao enviar mensagem:",C),c(b)}},pe=async N=>{const b=N.target.files[0];if(!b)return;y(!0);const C=b.type.split("/")[0],k=`chat_media/${H}/${Date.now()}_${b.name}`,M=t6(I6,k);try{await JL(M,b);const P=await e6(M);C==="image"?await re({imageUrl:P}):C==="audio"&&await re({audioUrl:P})}catch(P){console.error("Falha no upload do arquivo:",P)}finally{y(!1),N.target.value=null}},De=N=>N.imageUrl?j.jsx("img",{src:N.imageUrl,alt:"Imagem enviada",className:"rounded-lg max-w-full h-auto"}):N.audioUrl?j.jsx("audio",{controls:!0,src:N.audioUrl,className:"w-full"}):j.jsx("p",{className:"break-words",children:N.text});return j.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[j.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md cursor-pointer",onClick:()=>S(!0),children:[j.jsx("button",{onClick:N=>{N.stopPropagation(),t()},className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:j.jsx(f6,{size:24})}),j.jsx("img",{src:e.photoURL,alt:e.displayName,className:"w-10 h-10 rounded-full mr-4"}),j.jsxs("div",{children:[j.jsx("h2",{className:"text-xl font-bold text-white",children:e.displayName}),j.jsx("p",{className:"text-sm text-blue-300 h-4",children:d?"Digitando...":ce?.presence==="online"?"Online":""})]})]}),j.jsxs("main",{className:"flex-grow p-4 overflow-y-auto",children:[j.jsx("div",{className:"space-y-2",children:s.map((N,b)=>{const C=N.senderId===n.uid;return j.jsx("div",{className:`flex items-end gap-2 ${C?"justify-end":"justify-start"} animate-fade-in-up`,children:j.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${C?"bg-blue-600 text-white rounded-br-none":"bg-gray-700 text-white rounded-bl-none"}`,children:[De(N),j.jsx("p",{className:"text-xs text-right mt-1 opacity-60",children:N.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},N.id||b)})}),j.jsx("div",{ref:O})]}),j.jsx("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:j.jsxs("form",{onSubmit:ye,className:"flex items-center gap-2",children:[j.jsx("input",{type:"file",ref:U,onChange:pe,accept:"image/*,audio/*",className:"hidden"}),j.jsx("button",{type:"button",onClick:()=>U.current.click(),disabled:g,className:"p-3 text-gray-400 hover:text-white transition-colors",children:g?j.jsx(ov,{className:"animate-spin"}):j.jsx(E6,{size:20})}),j.jsx("input",{type:"text",value:l,onChange:oe,placeholder:"Digite sua mensagem...",className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),j.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||g,children:j.jsx(S6,{size:20})})]})}),j.jsx(x6,{user:e,onClose:()=>S(!1)})]})},k6=({user:n,onLogout:e})=>{const[t,s]=Ie.useState(null),[a,l]=Ie.useState("contacts"),[c,d]=Ie.useState("list");Ie.useEffect(()=>{d(t?"chat":"list")},[t]);const m=y=>{s(y)},g=()=>{s(null)};return j.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[j.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[j.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),j.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),j.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:j.jsx(Kw,{size:20})})]}),j.jsxs("div",{className:"flex border-b border-gray-700/50",children:[j.jsx("button",{onClick:()=>l("contacts"),className:`flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:j.jsx(Xw,{className:"mx-auto"})}),j.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:j.jsx(Yw,{className:"mx-auto"})}),j.jsx("button",{onClick:()=>l("requests"),className:`flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:j.jsx(Qw,{className:"mx-auto"})})]}),j.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&j.jsx(Zw,{currentUser:n,onSelectUser:m}),a==="add"&&j.jsx($w,{currentUser:n}),a==="requests"&&j.jsx(Ww,{currentUser:n})]})]}),j.jsx("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full",children:c==="list"?j.jsxs("div",{className:"flex flex-col h-full",children:[j.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[j.jsxs("div",{className:"flex items-center gap-3",children:[j.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),j.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),j.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:j.jsx(Kw,{size:20})})]}),j.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="contacts"&&j.jsx(Zw,{currentUser:n,onSelectUser:m}),a==="add"&&j.jsx($w,{currentUser:n}),a==="requests"&&j.jsx(Ww,{currentUser:n})]}),j.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[j.jsx("button",{onClick:()=>l("contacts"),className:`p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:j.jsx(Xw,{})}),j.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:j.jsx(Yw,{})}),j.jsx("button",{onClick:()=>l("requests"),className:`p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:j.jsx(Qw,{})})]})]}):j.jsx(Jw,{currentUser:n,otherUser:t,onLeave:g})}),j.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?j.jsx(Jw,{currentUser:n,otherUser:t,onLeave:g}):j.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[j.jsx(lv,{size:60,className:"mb-4"}),j.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione um contato"}),j.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function P6(){const[n,e]=Ie.useState(null),[t,s]=Ie.useState(!0);N6(n),Ie.useEffect(()=>{const l=s2(kf,async c=>{if(c)e(c);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await t2(kf,__initial_auth_token):e(null)}catch(d){console.error("Falha na autenticação automática, mostrando tela de login.",d),e(null)}s(!1)});return()=>l()},[]);const a=async()=>{if(n)try{const l=Ma(Pa,`/status/${n.uid}`);await ip(l,{state:"offline",last_changed:Date.now()}),await mc(Ba(On,`/users/${n.uid}`),{state:"offline",last_changed:gc()}),await r2(kf),e(null)}catch(l){console.error("Erro ao fazer logout:",l)}};return j.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:t?j.jsx(D6,{}):n?j.jsx(k6,{user:n,onLogout:a}):j.jsx(O6,{})})}DI.createRoot(document.getElementById("root")).render(j.jsx(Ie.StrictMode,{children:j.jsx(P6,{})}));
