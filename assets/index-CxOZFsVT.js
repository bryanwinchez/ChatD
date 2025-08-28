(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Xp={exports:{}},Pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT;function JR(){if(dT)return Pu;dT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Pu.Fragment=e,Pu.jsx=t,Pu.jsxs=t,Pu}var mT;function eI(){return mT||(mT=1,Xp.exports=JR()),Xp.exports}var A=eI(),Wp={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT;function tI(){if(pT)return Ie;pT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,Q={};function F(D,J,ae){this.props=D,this.context=J,this.refs=Q,this.updater=ae||x}F.prototype.isReactComponent={},F.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},F.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ue(){}ue.prototype=F.prototype;function te(D,J,ae){this.props=D,this.context=J,this.refs=Q,this.updater=ae||x}var le=te.prototype=new ue;le.constructor=te,U(le,F.prototype),le.isPureReactComponent=!0;var me=Array.isArray,pe={H:null,A:null,T:null,S:null,V:null},xe=Object.prototype.hasOwnProperty;function k(D,J,ae,ee,ge,Ne){return ae=Ne.ref,{$$typeof:n,type:D,key:J,ref:ae!==void 0?ae:null,props:Ne}}function C(D,J){return k(D.type,J,void 0,void 0,void 0,D.props)}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function M(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return J[ae]})}var P=/\/+/g;function V(D,J){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):J.toString(36)}function R(){}function it(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function mt(D,J,ae,ee,ge){var Ne=typeof D;(Ne==="undefined"||Ne==="boolean")&&(D=null);var be=!1;if(D===null)be=!0;else switch(Ne){case"bigint":case"string":case"number":be=!0;break;case"object":switch(D.$$typeof){case n:case e:be=!0;break;case y:return be=D._init,mt(be(D._payload),J,ae,ee,ge)}}if(be)return ge=ge(D),be=ee===""?"."+V(D,0):ee,me(ge)?(ae="",be!=null&&(ae=be.replace(P,"$&/")+"/"),mt(ge,J,ae,"",function(Cn){return Cn})):ge!=null&&(N(ge)&&(ge=C(ge,ae+(ge.key==null||D&&D.key===ge.key?"":(""+ge.key).replace(P,"$&/")+"/")+be)),J.push(ge)),1;be=0;var kt=ee===""?".":ee+":";if(me(D))for(var st=0;st<D.length;st++)ee=D[st],Ne=kt+V(ee,st),be+=mt(ee,J,ae,Ne,ge);else if(st=b(D),typeof st=="function")for(D=st.call(D),st=0;!(ee=D.next()).done;)ee=ee.value,Ne=kt+V(ee,st++),be+=mt(ee,J,ae,Ne,ge);else if(Ne==="object"){if(typeof D.then=="function")return mt(it(D),J,ae,ee,ge);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return be}function Y(D,J,ae){if(D==null)return D;var ee=[],ge=0;return mt(D,ee,"","",function(Ne){return J.call(ae,Ne,ge++)}),ee}function re(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var fe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ye(){}return Ie.Children={map:Y,forEach:function(D,J,ae){Y(D,function(){J.apply(this,arguments)},ae)},count:function(D){var J=0;return Y(D,function(){J++}),J},toArray:function(D){return Y(D,function(J){return J})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ie.Component=F,Ie.Fragment=t,Ie.Profiler=a,Ie.PureComponent=te,Ie.StrictMode=s,Ie.Suspense=p,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pe,Ie.__COMPILER_RUNTIME={__proto__:null,c:function(D){return pe.H.useMemoCache(D)}},Ie.cache=function(D){return function(){return D.apply(null,arguments)}},Ie.cloneElement=function(D,J,ae){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ee=U({},D.props),ge=D.key,Ne=void 0;if(J!=null)for(be in J.ref!==void 0&&(Ne=void 0),J.key!==void 0&&(ge=""+J.key),J)!xe.call(J,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&J.ref===void 0||(ee[be]=J[be]);var be=arguments.length-2;if(be===1)ee.children=ae;else if(1<be){for(var kt=Array(be),st=0;st<be;st++)kt[st]=arguments[st+2];ee.children=kt}return k(D.type,ge,void 0,void 0,Ne,ee)},Ie.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Ie.createElement=function(D,J,ae){var ee,ge={},Ne=null;if(J!=null)for(ee in J.key!==void 0&&(Ne=""+J.key),J)xe.call(J,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(ge[ee]=J[ee]);var be=arguments.length-2;if(be===1)ge.children=ae;else if(1<be){for(var kt=Array(be),st=0;st<be;st++)kt[st]=arguments[st+2];ge.children=kt}if(D&&D.defaultProps)for(ee in be=D.defaultProps,be)ge[ee]===void 0&&(ge[ee]=be[ee]);return k(D,Ne,void 0,void 0,null,ge)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(D){return{$$typeof:d,render:D}},Ie.isValidElement=N,Ie.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:re}},Ie.memo=function(D,J){return{$$typeof:g,type:D,compare:J===void 0?null:J}},Ie.startTransition=function(D){var J=pe.T,ae={};pe.T=ae;try{var ee=D(),ge=pe.S;ge!==null&&ge(ae,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(Ye,fe)}catch(Ne){fe(Ne)}finally{pe.T=J}},Ie.unstable_useCacheRefresh=function(){return pe.H.useCacheRefresh()},Ie.use=function(D){return pe.H.use(D)},Ie.useActionState=function(D,J,ae){return pe.H.useActionState(D,J,ae)},Ie.useCallback=function(D,J){return pe.H.useCallback(D,J)},Ie.useContext=function(D){return pe.H.useContext(D)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(D,J){return pe.H.useDeferredValue(D,J)},Ie.useEffect=function(D,J,ae){var ee=pe.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(D,J)},Ie.useId=function(){return pe.H.useId()},Ie.useImperativeHandle=function(D,J,ae){return pe.H.useImperativeHandle(D,J,ae)},Ie.useInsertionEffect=function(D,J){return pe.H.useInsertionEffect(D,J)},Ie.useLayoutEffect=function(D,J){return pe.H.useLayoutEffect(D,J)},Ie.useMemo=function(D,J){return pe.H.useMemo(D,J)},Ie.useOptimistic=function(D,J){return pe.H.useOptimistic(D,J)},Ie.useReducer=function(D,J,ae){return pe.H.useReducer(D,J,ae)},Ie.useRef=function(D){return pe.H.useRef(D)},Ie.useState=function(D){return pe.H.useState(D)},Ie.useSyncExternalStore=function(D,J,ae){return pe.H.useSyncExternalStore(D,J,ae)},Ie.useTransition=function(){return pe.H.useTransition()},Ie.version="19.1.1",Ie}var gT;function m_(){return gT||(gT=1,Wp.exports=tI()),Wp.exports}var ne=m_(),Zp={exports:{}},Vu={},Jp={exports:{}},eg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T;function nI(){return _T||(_T=1,(function(n){function e(Y,re){var fe=Y.length;Y.push(re);e:for(;0<fe;){var Ye=fe-1>>>1,D=Y[Ye];if(0<a(D,re))Y[Ye]=re,Y[fe]=D,fe=Ye;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var re=Y[0],fe=Y.pop();if(fe!==re){Y[0]=fe;e:for(var Ye=0,D=Y.length,J=D>>>1;Ye<J;){var ae=2*(Ye+1)-1,ee=Y[ae],ge=ae+1,Ne=Y[ge];if(0>a(ee,fe))ge<D&&0>a(Ne,ee)?(Y[Ye]=Ne,Y[ge]=fe,Ye=ge):(Y[Ye]=ee,Y[ae]=fe,Ye=ae);else if(ge<D&&0>a(Ne,fe))Y[Ye]=Ne,Y[ge]=fe,Ye=ge;else break e}}return re}function a(Y,re){var fe=Y.sortIndex-re.sortIndex;return fe!==0?fe:Y.id-re.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,b=3,x=!1,U=!1,Q=!1,F=!1,ue=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function me(Y){for(var re=t(g);re!==null;){if(re.callback===null)s(g);else if(re.startTime<=Y)s(g),re.sortIndex=re.expirationTime,e(p,re);else break;re=t(g)}}function pe(Y){if(Q=!1,me(Y),!U)if(t(p)!==null)U=!0,xe||(xe=!0,V());else{var re=t(g);re!==null&&mt(pe,re.startTime-Y)}}var xe=!1,k=-1,C=5,N=-1;function M(){return F?!0:!(n.unstable_now()-N<C)}function P(){if(F=!1,xe){var Y=n.unstable_now();N=Y;var re=!0;try{e:{U=!1,Q&&(Q=!1,te(k),k=-1),x=!0;var fe=b;try{t:{for(me(Y),T=t(p);T!==null&&!(T.expirationTime>Y&&M());){var Ye=T.callback;if(typeof Ye=="function"){T.callback=null,b=T.priorityLevel;var D=Ye(T.expirationTime<=Y);if(Y=n.unstable_now(),typeof D=="function"){T.callback=D,me(Y),re=!0;break t}T===t(p)&&s(p),me(Y)}else s(p);T=t(p)}if(T!==null)re=!0;else{var J=t(g);J!==null&&mt(pe,J.startTime-Y),re=!1}}break e}finally{T=null,b=fe,x=!1}re=void 0}}finally{re?V():xe=!1}}}var V;if(typeof le=="function")V=function(){le(P)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,it=R.port2;R.port1.onmessage=P,V=function(){it.postMessage(null)}}else V=function(){ue(P,0)};function mt(Y,re){k=ue(function(){Y(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_next=function(Y){switch(b){case 1:case 2:case 3:var re=3;break;default:re=b}var fe=b;b=re;try{return Y()}finally{b=fe}},n.unstable_requestPaint=function(){F=!0},n.unstable_runWithPriority=function(Y,re){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var fe=b;b=Y;try{return re()}finally{b=fe}},n.unstable_scheduleCallback=function(Y,re,fe){var Ye=n.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Ye+fe:Ye):fe=Ye,Y){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=fe+D,Y={id:y++,callback:re,priorityLevel:Y,startTime:fe,expirationTime:D,sortIndex:-1},fe>Ye?(Y.sortIndex=fe,e(g,Y),t(p)===null&&Y===t(g)&&(Q?(te(k),k=-1):Q=!0,mt(pe,fe-Ye))):(Y.sortIndex=D,e(p,Y),U||x||(U=!0,xe||(xe=!0,V()))),Y},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(Y){var re=b;return function(){var fe=b;b=re;try{return Y.apply(this,arguments)}finally{b=fe}}}})(eg)),eg}var yT;function iI(){return yT||(yT=1,Jp.exports=nI()),Jp.exports}var tg={exports:{}},vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT;function sI(){if(vT)return vn;vT=1;var n=m_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,vn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},vn.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},vn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},vn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},vn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:x}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:b,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},vn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},vn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},vn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},vn.requestFormReset=function(p){s.d.r(p)},vn.unstable_batchedUpdates=function(p,g){return p(g)},vn.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},vn.useFormStatus=function(){return c.H.useHostTransitionStatus()},vn.version="19.1.1",vn}var ET;function rI(){if(ET)return tg.exports;ET=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),tg.exports=sI(),tg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function aI(){if(TT)return Vu;TT=1;var n=iI(),e=m_(),t=rI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),te=Symbol.for("react.consumer"),le=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function V(i){return i===null||typeof i!="object"?null:(i=P&&i[P]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function it(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case F:return"Profiler";case Q:return"StrictMode";case pe:return"Suspense";case xe:return"SuspenseList";case N:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case x:return"Portal";case le:return(i.displayName||"Context")+".Provider";case te:return(i._context.displayName||"Context")+".Consumer";case me:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case k:return r=i.displayName||null,r!==null?r:it(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return it(i(r))}catch{}}return null}var mt=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Ye=[],D=-1;function J(i){return{current:i}}function ae(i){0>D||(i.current=Ye[D],Ye[D]=null,D--)}function ee(i,r){D++,Ye[D]=i.current,i.current=r}var ge=J(null),Ne=J(null),be=J(null),kt=J(null);function st(i,r){switch(ee(be,r),ee(Ne,i),ee(ge,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?q0(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=q0(r),i=B0(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ae(ge),ee(ge,i)}function Cn(){ae(ge),ae(Ne),ae(be)}function ei(i){i.memoizedState!==null&&ee(kt,i);var r=ge.current,o=B0(r,i.type);r!==o&&(ee(Ne,i),ee(ge,o))}function ve(i){Ne.current===i&&(ae(ge),ae(Ne)),kt.current===i&&(ae(kt),xu._currentValue=fe)}var ze=Object.prototype.hasOwnProperty,vt=n.unstable_scheduleCallback,gn=n.unstable_cancelCallback,qr=n.unstable_shouldYield,Br=n.unstable_requestPaint,It=n.unstable_now,Xd=n.unstable_getCurrentPriorityLevel,Il=n.unstable_ImmediatePriority,Ka=n.unstable_UserBlockingPriority,Fr=n.unstable_NormalPriority,Wd=n.unstable_LowPriority,$a=n.unstable_IdlePriority,Nl=n.log,jc=n.unstable_setDisableYieldValue,St=null,Je=null;function Fn(i){if(typeof Nl=="function"&&jc(i),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(St,i)}catch{}}var _n=Math.clz32?Math.clz32:Hr,zc=Math.log,Zd=Math.LN2;function Hr(i){return i>>>=0,i===0?32:31-(zc(i)/Zd|0)|0}var Gr=256,Qr=4194304;function pi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Xa(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=pi(u):(E&=S,E!==0?f=pi(E):o||(o=S&~i,o!==0&&(f=pi(o))))):(S=u&~m,S!==0?f=pi(S):E!==0?f=pi(E):o||(o=u&~i,o!==0&&(f=pi(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Yr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function xl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dl(){var i=Gr;return Gr<<=1,(Gr&4194048)===0&&(Gr=256),i}function Ol(){var i=Qr;return Qr<<=1,(Qr&62914560)===0&&(Qr=4194304),i}function ts(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function ns(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Ml(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,I=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var K=31-_n(o),W=1<<K;S[K]=0,I[K]=-1;var B=q[K];if(B!==null)for(q[K]=null,K=0;K<B.length;K++){var H=B[K];H!==null&&(H.lane&=-536870913)}o&=~W}u!==0&&Ri(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function Ri(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-_n(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function kl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-_n(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Bs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Wa(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Fs(){var i=re.p;return i!==0?i:(i=window.event,i===void 0?32:oT(i.type))}function qc(i,r){var o=re.p;try{return re.p=i,r()}finally{re.p=o}}var _t=Math.random().toString(36).slice(2),Ht="__reactFiber$"+_t,Pt="__reactProps$"+_t,ti="__reactContainer$"+_t,Pl="__reactEvents$"+_t,Jd="__reactListeners$"+_t,Hs="__reactHandles$"+_t,Bc="__reactResources$"+_t,Kr="__reactMarker$"+_t;function Gs(i){delete i[Ht],delete i[Pt],delete i[Pl],delete i[Jd],delete i[Hs]}function is(i){var r=i[Ht];if(r)return r;for(var o=i.parentNode;o;){if(r=o[ti]||o[Ht]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=Q0(i);i!==null;){if(o=i[Ht])return o;i=Q0(i)}return r}i=o,o=i.parentNode}return null}function Ii(i){if(i=i[Ht]||i[ti]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Ni(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function Rn(i){var r=i[Bc];return r||(r=i[Bc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nt(i){i[Kr]=!0}var Vl=new Set,Za={};function gi(i,r){ss(i,r),ss(i+"Capture",r)}function ss(i,r){for(Za[i]=r,i=0;i<r.length;i++)Vl.add(r[i])}var Fc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hc={},$r={};function Gc(i){return ze.call($r,i)?!0:ze.call(Hc,i)?!1:Fc.test(i)?$r[i]=!0:(Hc[i]=!0,!1)}function Qs(i,r,o){if(Gc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function xi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function on(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Xr,Qc;function rs(i){if(Xr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Xr=r&&r[1]||"",Qc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xr+i+Qc}var Ja=!1;function eo(i,r){if(!i||Ja)return"";Ja=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(H){var B=H}Reflect.construct(i,[],W)}else{try{W.call()}catch(H){B=H}i.call(W.prototype)}}else{try{throw Error()}catch(H){B=H}(W=i())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var I=E.split(`
`),q=S.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===q.length)for(u=I.length-1,f=q.length-1;1<=u&&0<=f&&I[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==q[f]){var K=`
`+I[u].replace(" at new "," at ");return i.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",i.displayName)),K}while(1<=u&&0<=f);break}}}finally{Ja=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?rs(o):""}function Ll(i){switch(i.tag){case 26:case 27:case 5:return rs(i.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 15:return eo(i.type,!1);case 11:return eo(i.type.render,!1);case 1:return eo(i.type,!0);case 31:return rs("Activity");default:return""}}function to(i){try{var r="";do r+=Ll(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function In(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ul(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function em(i){var r=Ul(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function no(i){i._valueTracker||(i._valueTracker=em(i))}function jl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Ul(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Wr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var tm=/[\n"\\]/g;function Vt(i){return i.replace(tm,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Hn(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+In(r)):i.value!==""+In(r)&&(i.value=""+In(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Ys(i,E,In(r)):o!=null?Ys(i,E,In(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+In(S):i.removeAttribute("name")}function Zr(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+In(o):"",r=r!=null?""+In(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Ys(i,r,o){r==="number"&&Wr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function as(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+In(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function rt(i,r,o){if(r!=null&&(r=""+In(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+In(o):""}function Jr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(mt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=In(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function ni(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||ea.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function zl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Yc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Yc(i,m,r[m])}function ql(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function io(i){return im.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var os=null;function ii(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ls=null,us=null;function Bl(i){var r=Ii(i);if(r&&(i=r.stateNode)){var o=i[Pt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Hn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Vt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Pt]||null;if(!f)throw Error(s(90));Hn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&jl(u)}break e;case"textarea":rt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&as(i,!!o.multiple,r,!1)}}}var Di=!1;function Kc(i,r,o){if(Di)return i(r,o);Di=!0;try{var u=i(r);return u}finally{if(Di=!1,(ls!==null||us!==null)&&(qh(),ls&&(r=ls,i=us,us=ls=null,Bl(r),i)))for(r=0;r<i.length;r++)Bl(i[r])}}function ta(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Pt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=!1;if(_i)try{var na={};Object.defineProperty(na,"passive",{get:function(){si=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{si=!1}var Oi=null,Ks=null,cs=null;function Fl(){if(cs)return cs;var i,r=Ks,o=r.length,u,f="value"in Oi?Oi.value:Oi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return cs=f.slice(i,1<u?1-u:void 0)}function Mi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function ki(){return!0}function Hl(){return!1}function Wt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ki:Hl,this.isPropagationStopped=Hl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),r}var We={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=Wt(We),ia=y({},We,{view:0,detail:0}),$c=Wt(ia),ro,ao,Pi,sa=y({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Pi&&(Pi&&i.type==="mousemove"?(ro=i.screenX-Pi.screenX,ao=i.screenY-Pi.screenY):ao=ro=0,Pi=i),ro)},movementY:function(i){return"movementY"in i?i.movementY:ao}}),ri=Wt(sa),Xc=y({},sa,{dataTransfer:0}),sm=Wt(Xc),ra=y({},ia,{relatedTarget:0}),oo=Wt(ra),Gl=y({},We,{animationName:0,elapsedTime:0,pseudoElement:0}),lo=Wt(Gl),Wc=y({},We,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),uo=Wt(Wc),rm=y({},We,{data:0}),Ql=Wt(rm),aa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Jc[i])?!!r[i]:!1}function oa(){return Yl}var eh=y({},ia,{key:function(i){if(i.key){var r=aa[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Mi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Zc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(i){return i.type==="keypress"?Mi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Mi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),co=Wt(eh),th=y({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kl=Wt(th),hs=y({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),nh=Wt(hs),ih=y({},We,{propertyName:0,elapsedTime:0,pseudoElement:0}),sh=Wt(ih),rh=y({},sa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ho=Wt(rh),Nn=y({},We,{newState:0,oldState:0}),ah=Wt(Nn),oh=[9,13,27,32],Vi=_i&&"CompositionEvent"in window,h=null;_i&&"documentMode"in document&&(h=document.documentMode);var _=_i&&"TextEvent"in window&&!h,v=_i&&(!Vi||h&&8<h&&11>=h),w=" ",j=!1;function G(i,r){switch(i){case"keyup":return oh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Fe=!1;function Gt(i,r){switch(i){case"compositionend":return ie(r);case"keypress":return r.which!==32?null:(j=!0,w);case"textInput":return i=r.data,i===w&&j?null:i;default:return null}}function He(i,r){if(Fe)return i==="compositionend"||!Vi&&G(i,r)?(i=Fl(),cs=Ks=Oi=null,Fe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Zt[i.type]:r==="textarea"}function fs(i,r,o,u){ls?us?us.push(u):us=[u]:ls=u,r=Yh(r,"onChange"),0<r.length&&(o=new so("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var ln=null,Li=null;function $l(i){V0(i,0)}function lh(i){var r=Ni(i);if(jl(r))return i}function iv(i,r){if(i==="change")return r}var sv=!1;if(_i){var am;if(_i){var om="oninput"in document;if(!om){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),om=typeof rv.oninput=="function"}am=om}else am=!1;sv=am&&(!document.documentMode||9<document.documentMode)}function av(){ln&&(ln.detachEvent("onpropertychange",ov),Li=ln=null)}function ov(i){if(i.propertyName==="value"&&lh(Li)){var r=[];fs(r,Li,i,ii(i)),Kc($l,r)}}function NC(i,r,o){i==="focusin"?(av(),ln=r,Li=o,ln.attachEvent("onpropertychange",ov)):i==="focusout"&&av()}function xC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return lh(Li)}function DC(i,r){if(i==="click")return lh(r)}function OC(i,r){if(i==="input"||i==="change")return lh(r)}function MC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Gn=typeof Object.is=="function"?Object.is:MC;function Xl(i,r){if(Gn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!ze.call(r,f)||!Gn(i[f],r[f]))return!1}return!0}function lv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function uv(i,r){var o=lv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=lv(o)}}function cv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?cv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function hv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Wr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Wr(i.document)}return r}function lm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var kC=_i&&"documentMode"in document&&11>=document.documentMode,fo=null,um=null,Wl=null,cm=!1;function fv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cm||fo==null||fo!==Wr(u)||(u=fo,"selectionStart"in u&&lm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Wl&&Xl(Wl,u)||(Wl=u,u=Yh(um,"onSelect"),0<u.length&&(r=new so("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=fo)))}function la(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var mo={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},hm={},dv={};_i&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function ua(i){if(hm[i])return hm[i];if(!mo[i])return i;var r=mo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in dv)return hm[i]=r[o];return i}var mv=ua("animationend"),pv=ua("animationiteration"),gv=ua("animationstart"),PC=ua("transitionrun"),VC=ua("transitionstart"),LC=ua("transitioncancel"),_v=ua("transitionend"),yv=new Map,fm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fm.push("scrollEnd");function yi(i,r){yv.set(i,r),gi(r,[i])}var vv=new WeakMap;function ai(i,r){if(typeof i=="object"&&i!==null){var o=vv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:to(r)},vv.set(i,r),r)}return{value:i,source:r,stack:to(r)}}var oi=[],po=0,dm=0;function uh(){for(var i=po,r=dm=po=0;r<i;){var o=oi[r];oi[r++]=null;var u=oi[r];oi[r++]=null;var f=oi[r];oi[r++]=null;var m=oi[r];if(oi[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Ev(o,f,m)}}function ch(i,r,o,u){oi[po++]=i,oi[po++]=r,oi[po++]=o,oi[po++]=u,dm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function mm(i,r,o,u){return ch(i,r,o,u),hh(i)}function go(i,r){return ch(i,null,null,r),hh(i)}function Ev(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-_n(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function hh(i){if(50<bu)throw bu=0,Ep=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var _o={};function UC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(i,r,o,u){return new UC(i,r,o,u)}function pm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ds(i,r){var o=i.alternate;return o===null?(o=Qn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Tv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function fh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")pm(i)&&(E=1);else if(typeof i=="string")E=zR(i,o,ge.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case N:return i=Qn(31,o,r,f),i.elementType=N,i.lanes=m,i;case U:return ca(o.children,f,m,r);case Q:E=8,f|=24;break;case F:return i=Qn(12,o,r,f|2),i.elementType=F,i.lanes=m,i;case pe:return i=Qn(13,o,r,f),i.elementType=pe,i.lanes=m,i;case xe:return i=Qn(19,o,r,f),i.elementType=xe,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ue:case le:E=10;break e;case te:E=9;break e;case me:E=11;break e;case k:E=14;break e;case C:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Qn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ca(i,r,o,u){return i=Qn(7,i,u,r),i.lanes=o,i}function gm(i,r,o){return i=Qn(6,i,null,r),i.lanes=o,i}function _m(i,r,o){return r=Qn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var yo=[],vo=0,dh=null,mh=0,li=[],ui=0,ha=null,ms=1,ps="";function fa(i,r){yo[vo++]=mh,yo[vo++]=dh,dh=i,mh=r}function bv(i,r,o){li[ui++]=ms,li[ui++]=ps,li[ui++]=ha,ha=i;var u=ms;i=ps;var f=32-_n(u)-1;u&=~(1<<f),o+=1;var m=32-_n(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ms=1<<32-_n(r)+f|o<<f|u,ps=m+i}else ms=1<<m|o<<f|u,ps=i}function ym(i){i.return!==null&&(fa(i,1),bv(i,1,0))}function vm(i){for(;i===dh;)dh=yo[--vo],yo[vo]=null,mh=yo[--vo],yo[vo]=null;for(;i===ha;)ha=li[--ui],li[ui]=null,ps=li[--ui],li[ui]=null,ms=li[--ui],li[ui]=null}var xn=null,wt=null,$e=!1,da=null,Ui=!1,Em=Error(s(519));function ma(i){var r=Error(s(418,""));throw eu(ai(r,i)),Em}function Sv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Ht]=i,r[Pt]=u,o){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(o=0;o<wu.length;o++)Ue(wu[o],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":Ue("invalid",r),Zr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),no(r);break;case"select":Ue("invalid",r);break;case"textarea":Ue("invalid",r),Jr(r,u.value,u.defaultValue,u.children),no(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||z0(r.textContent,o)?(u.popover!=null&&(Ue("beforetoggle",r),Ue("toggle",r)),u.onScroll!=null&&Ue("scroll",r),u.onScrollEnd!=null&&Ue("scrollend",r),u.onClick!=null&&(r.onclick=Kh),r=!0):r=!1,r||ma(i)}function wv(i){for(xn=i.return;xn;)switch(xn.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:xn=xn.return}}function Zl(i){if(i!==xn)return!1;if(!$e)return wv(i),$e=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Vp(i.type,i.memoizedProps)),o=!o),o&&wt&&ma(i),wv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){wt=Ei(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}wt=null}}else r===27?(r=wt,cr(i.type)?(i=zp,zp=null,wt=i):wt=r):wt=xn?Ei(i.stateNode.nextSibling):null;return!0}function Jl(){wt=xn=null,$e=!1}function Av(){var i=da;return i!==null&&(Vn===null?Vn=i:Vn.push.apply(Vn,i),da=null),i}function eu(i){da===null?da=[i]:da.push(i)}var Tm=J(null),pa=null,gs=null;function $s(i,r,o){ee(Tm,r._currentValue),r._currentValue=o}function _s(i){i._currentValue=Tm.current,ae(Tm)}function bm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Sm(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var I=0;I<r.length;I++)if(S.context===r[I]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),bm(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),bm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function tu(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Gn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===kt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(xu):i=[xu])}f=f.return}i!==null&&Sm(r,i,o,u),r.flags|=262144}function ph(i){for(i=i.firstContext;i!==null;){if(!Gn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ga(i){pa=i,gs=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function yn(i){return Cv(pa,i)}function gh(i,r){return pa===null&&ga(i),Cv(i,r)}function Cv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},gs===null){if(i===null)throw Error(s(308));gs=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else gs=gs.next=r;return o}var jC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},zC=n.unstable_scheduleCallback,qC=n.unstable_NormalPriority,Yt={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wm(){return{controller:new jC,data:new Map,refCount:0}}function nu(i){i.refCount--,i.refCount===0&&zC(qC,function(){i.controller.abort()})}var iu=null,Am=0,Eo=0,To=null;function BC(i,r){if(iu===null){var o=iu=[];Am=0,Eo=Rp(),To={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Am++,r.then(Rv,Rv),r}function Rv(){if(--Am===0&&iu!==null){To!==null&&(To.status="fulfilled");var i=iu;iu=null,Eo=0,To=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function FC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Iv=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&BC(i,r),Iv!==null&&Iv(i,r)};var _a=J(null);function Cm(){var i=_a.current;return i!==null?i:ht.pooledCache}function _h(i,r){r===null?ee(_a,_a.current):ee(_a,r.pool)}function Nv(){var i=Cm();return i===null?null:{parent:Yt._currentValue,pool:i}}var su=Error(s(460)),xv=Error(s(474)),yh=Error(s(542)),Rm={then:function(){}};function Dv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function vh(){}function Ov(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(vh,vh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,kv(i),i;default:if(typeof r.status=="string")r.then(vh,vh);else{if(i=ht,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,kv(i),i}throw ru=r,su}}var ru=null;function Mv(){if(ru===null)throw Error(s(459));var i=ru;return ru=null,i}function kv(i){if(i===su||i===yh)throw Error(s(483))}var Xs=!1;function Im(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ws(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Zs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(et&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=hh(i),Ev(i,null,o),r}return ch(i,u,r,o),hh(i)}function au(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,kl(i,o)}}function xm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Dm=!1;function ou(){if(Dm){var i=To;if(i!==null)throw i}}function lu(i,r,o,u){Dm=!1;var f=i.updateQueue;Xs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var I=S,q=I.next;I.next=null,E===null?m=q:E.next=q,E=I;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=q:S.next=q,K.lastBaseUpdate=I))}if(m!==null){var W=f.baseState;E=0,K=q=I=null,S=m;do{var B=S.lane&-536870913,H=B!==S.lane;if(H?(Ge&B)===B:(u&B)===B){B!==0&&B===Eo&&(Dm=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Se=i,ye=S;B=r;var lt=o;switch(ye.tag){case 1:if(Se=ye.payload,typeof Se=="function"){W=Se.call(lt,W,B);break e}W=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ye.payload,B=typeof Se=="function"?Se.call(lt,W,B):Se,B==null)break e;W=y({},W,B);break e;case 2:Xs=!0}}B=S.callback,B!==null&&(i.flags|=64,H&&(i.flags|=8192),H=f.callbacks,H===null?f.callbacks=[B]:H.push(B))}else H={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(q=K=H,I=W):K=K.next=H,E|=B;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;H=S,S=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);K===null&&(I=W),f.baseState=I,f.firstBaseUpdate=q,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),ar|=E,i.lanes=E,i.memoizedState=W}}function Pv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Vv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Pv(o[i],r)}var bo=J(null),Eh=J(0);function Lv(i,r){i=ws,ee(Eh,i),ee(bo,r),ws=i|r.baseLanes}function Om(){ee(Eh,ws),ee(bo,bo.current)}function Mm(){ws=Eh.current,ae(bo),ae(Eh)}var Js=0,De=null,at=null,Lt=null,Th=!1,So=!1,ya=!1,bh=0,uu=0,wo=null,HC=0;function xt(){throw Error(s(321))}function km(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Gn(i[o],r[o]))return!1;return!0}function Pm(i,r,o,u,f,m){return Js=m,De=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?EE:TE,ya=!1,m=o(u,f),ya=!1,So&&(m=jv(r,o,u,f)),Uv(i),m}function Uv(i){Y.H=Ih;var r=at!==null&&at.next!==null;if(Js=0,Lt=at=De=null,Th=!1,uu=0,wo=null,r)throw Error(s(300));i===null||Jt||(i=i.dependencies,i!==null&&ph(i)&&(Jt=!0))}function jv(i,r,o,u){De=i;var f=0;do{if(So&&(wo=null),uu=0,So=!1,25<=f)throw Error(s(301));if(f+=1,Lt=at=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=WC,m=r(o,u)}while(So);return m}function GC(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?cu(r):r,i=i.useState()[0],(at!==null?at.memoizedState:null)!==i&&(De.flags|=1024),r}function Vm(){var i=bh!==0;return bh=0,i}function Lm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Um(i){if(Th){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Th=!1}Js=0,Lt=at=De=null,So=!1,uu=bh=0,wo=null}function kn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?De.memoizedState=Lt=i:Lt=Lt.next=i,Lt}function Ut(){if(at===null){var i=De.alternate;i=i!==null?i.memoizedState:null}else i=at.next;var r=Lt===null?De.memoizedState:Lt.next;if(r!==null)Lt=r,at=i;else{if(i===null)throw De.alternate===null?Error(s(467)):Error(s(310));at=i,i={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Lt===null?De.memoizedState=Lt=i:Lt=Lt.next=i}return Lt}function jm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cu(i){var r=uu;return uu+=1,wo===null&&(wo=[]),i=Ov(wo,i,r),r=De,(Lt===null?r.memoizedState:Lt.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?EE:TE),i}function Sh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return cu(i);if(i.$$typeof===le)return yn(i)}throw Error(s(438,String(i)))}function zm(i){var r=null,o=De.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=De.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=jm(),De.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=M;return r.index++,o}function ys(i,r){return typeof r=="function"?r(i):r}function wh(i){var r=Ut();return qm(r,at,i)}function qm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,I=null,q=r,K=!1;do{var W=q.lane&-536870913;if(W!==q.lane?(Ge&W)===W:(Js&W)===W){var B=q.revertLane;if(B===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),W===Eo&&(K=!0);else if((Js&B)===B){q=q.next,B===Eo&&(K=!0);continue}else W={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(S=I=W,E=m):I=I.next=W,De.lanes|=B,ar|=B;W=q.action,ya&&o(m,W),m=q.hasEagerState?q.eagerState:o(m,W)}else B={lane:W,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(S=I=B,E=m):I=I.next=B,De.lanes|=W,ar|=W;q=q.next}while(q!==null&&q!==r);if(I===null?E=m:I.next=S,!Gn(m,i.memoizedState)&&(Jt=!0,K&&(o=To,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=I,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Bm(i){var r=Ut(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Gn(m,r.memoizedState)||(Jt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function zv(i,r,o){var u=De,f=Ut(),m=$e;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Gn((at||f).memoizedState,o);E&&(f.memoizedState=o,Jt=!0),f=f.queue;var S=Fv.bind(null,u,f,i);if(hu(2048,8,S,[i]),f.getSnapshot!==r||E||Lt!==null&&Lt.memoizedState.tag&1){if(u.flags|=2048,Ao(9,Ah(),Bv.bind(null,u,f,o,r),null),ht===null)throw Error(s(349));m||(Js&124)!==0||qv(u,r,o)}return o}function qv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=De.updateQueue,r===null?(r=jm(),De.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Bv(i,r,o,u){r.value=o,r.getSnapshot=u,Hv(r)&&Gv(i)}function Fv(i,r,o){return o(function(){Hv(r)&&Gv(i)})}function Hv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Gn(i,o)}catch{return!0}}function Gv(i){var r=go(i,2);r!==null&&Wn(r,i,2)}function Fm(i){var r=kn();if(typeof i=="function"){var o=i;if(i=o(),ya){Fn(!0);try{o()}finally{Fn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:i},r}function Qv(i,r,o,u){return i.baseState=o,qm(i,at,typeof u=="function"?u:ys)}function QC(i,r,o,u,f){if(Rh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Yv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Yv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Y.T,E={};Y.T=E;try{var S=o(f,u),I=Y.S;I!==null&&I(E,S),Kv(i,r,S)}catch(q){Hm(i,r,q)}finally{Y.T=m}}else try{m=o(f,u),Kv(i,r,m)}catch(q){Hm(i,r,q)}}function Kv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){$v(i,r,u)},function(u){return Hm(i,r,u)}):$v(i,r,o)}function $v(i,r,o){r.status="fulfilled",r.value=o,Xv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Yv(i,o)))}function Hm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Xv(r),r=r.next;while(r!==u)}i.action=null}function Xv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Wv(i,r){return r}function Zv(i,r){if($e){var o=ht.formState;if(o!==null){e:{var u=De;if($e){if(wt){t:{for(var f=wt,m=Ui;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){wt=Ei(f.nextSibling),u=f.data==="F!";break e}}ma(u)}u=!1}u&&(r=o[0])}}return o=kn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wv,lastRenderedState:r},o.queue=u,o=_E.bind(null,De,u),u.dispatch=o,u=Fm(!1),m=$m.bind(null,De,!1,u.queue),u=kn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=QC.bind(null,De,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function Jv(i){var r=Ut();return eE(r,at,i)}function eE(i,r,o){if(r=qm(i,r,Wv)[0],i=wh(ys)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=cu(r)}catch(E){throw E===su?yh:E}else u=r;r=Ut();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(De.flags|=2048,Ao(9,Ah(),YC.bind(null,f,o),null)),[u,m,i]}function YC(i,r){i.action=r}function tE(i){var r=Ut(),o=at;if(o!==null)return eE(r,o,i);Ut(),r=r.memoizedState,o=Ut();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function Ao(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=De.updateQueue,r===null&&(r=jm(),De.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Ah(){return{destroy:void 0,resource:void 0}}function nE(){return Ut().memoizedState}function Ch(i,r,o,u){var f=kn();u=u===void 0?null:u,De.flags|=i,f.memoizedState=Ao(1|r,Ah(),o,u)}function hu(i,r,o,u){var f=Ut();u=u===void 0?null:u;var m=f.memoizedState.inst;at!==null&&u!==null&&km(u,at.memoizedState.deps)?f.memoizedState=Ao(r,m,o,u):(De.flags|=i,f.memoizedState=Ao(1|r,m,o,u))}function iE(i,r){Ch(8390656,8,i,r)}function sE(i,r){hu(2048,8,i,r)}function rE(i,r){return hu(4,2,i,r)}function aE(i,r){return hu(4,4,i,r)}function oE(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function lE(i,r,o){o=o!=null?o.concat([i]):null,hu(4,4,oE.bind(null,r,i),o)}function Gm(){}function uE(i,r){var o=Ut();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&km(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function cE(i,r){var o=Ut();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&km(r,u[1]))return u[0];if(u=i(),ya){Fn(!0);try{i()}finally{Fn(!1)}}return o.memoizedState=[u,r],u}function Qm(i,r,o){return o===void 0||(Js&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=d0(),De.lanes|=i,ar|=i,o)}function hE(i,r,o,u){return Gn(o,r)?o:bo.current!==null?(i=Qm(i,o,u),Gn(i,r)||(Jt=!0),i):(Js&42)===0?(Jt=!0,i.memoizedState=o):(i=d0(),De.lanes|=i,ar|=i,r)}function fE(i,r,o,u,f){var m=re.p;re.p=m!==0&&8>m?m:8;var E=Y.T,S={};Y.T=S,$m(i,!1,r,o);try{var I=f(),q=Y.S;if(q!==null&&q(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=FC(I,u);fu(i,r,K,Xn(i))}else fu(i,r,u,Xn(i))}catch(W){fu(i,r,{then:function(){},status:"rejected",reason:W},Xn())}finally{re.p=m,Y.T=E}}function KC(){}function Ym(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=dE(i).queue;fE(i,f,r,fe,o===null?KC:function(){return mE(i),o(u)})}function dE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:fe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function mE(i){var r=dE(i).next.queue;fu(i,r,{},Xn())}function Km(){return yn(xu)}function pE(){return Ut().memoizedState}function gE(){return Ut().memoizedState}function $C(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Xn();i=Ws(o);var u=Zs(r,i,o);u!==null&&(Wn(u,r,o),au(u,r,o)),r={cache:wm()},i.payload=r;return}r=r.return}}function XC(i,r,o){var u=Xn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Rh(i)?yE(r,o):(o=mm(i,r,o,u),o!==null&&(Wn(o,i,u),vE(o,r,u)))}function _E(i,r,o){var u=Xn();fu(i,r,o,u)}function fu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Rh(i))yE(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Gn(S,E))return ch(i,r,f,0),ht===null&&uh(),!1}catch{}finally{}if(o=mm(i,r,f,u),o!==null)return Wn(o,i,u),vE(o,r,u),!0}return!1}function $m(i,r,o,u){if(u={lane:2,revertLane:Rp(),action:u,hasEagerState:!1,eagerState:null,next:null},Rh(i)){if(r)throw Error(s(479))}else r=mm(i,o,u,2),r!==null&&Wn(r,i,2)}function Rh(i){var r=i.alternate;return i===De||r!==null&&r===De}function yE(i,r){So=Th=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function vE(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,kl(i,o)}}var Ih={readContext:yn,use:Sh,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt},EE={readContext:yn,use:Sh,useCallback:function(i,r){return kn().memoizedState=[i,r===void 0?null:r],i},useContext:yn,useEffect:iE,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Ch(4194308,4,oE.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Ch(4194308,4,i,r)},useInsertionEffect:function(i,r){Ch(4,2,i,r)},useMemo:function(i,r){var o=kn();r=r===void 0?null:r;var u=i();if(ya){Fn(!0);try{i()}finally{Fn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=kn();if(o!==void 0){var f=o(r);if(ya){Fn(!0);try{o(r)}finally{Fn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=XC.bind(null,De,i),[u.memoizedState,i]},useRef:function(i){var r=kn();return i={current:i},r.memoizedState=i},useState:function(i){i=Fm(i);var r=i.queue,o=_E.bind(null,De,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Gm,useDeferredValue:function(i,r){var o=kn();return Qm(o,i,r)},useTransition:function(){var i=Fm(!1);return i=fE.bind(null,De,i.queue,!0,!1),kn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=De,f=kn();if($e){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ht===null)throw Error(s(349));(Ge&124)!==0||qv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,iE(Fv.bind(null,u,m,i),[i]),u.flags|=2048,Ao(9,Ah(),Bv.bind(null,u,m,o,r),null),o},useId:function(){var i=kn(),r=ht.identifierPrefix;if($e){var o=ps,u=ms;o=(u&~(1<<32-_n(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=bh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=HC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Km,useFormState:Zv,useActionState:Zv,useOptimistic:function(i){var r=kn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=$m.bind(null,De,!0,o),o.dispatch=r,[i,r]},useMemoCache:zm,useCacheRefresh:function(){return kn().memoizedState=$C.bind(null,De)}},TE={readContext:yn,use:Sh,useCallback:uE,useContext:yn,useEffect:sE,useImperativeHandle:lE,useInsertionEffect:rE,useLayoutEffect:aE,useMemo:cE,useReducer:wh,useRef:nE,useState:function(){return wh(ys)},useDebugValue:Gm,useDeferredValue:function(i,r){var o=Ut();return hE(o,at.memoizedState,i,r)},useTransition:function(){var i=wh(ys)[0],r=Ut().memoizedState;return[typeof i=="boolean"?i:cu(i),r]},useSyncExternalStore:zv,useId:pE,useHostTransitionStatus:Km,useFormState:Jv,useActionState:Jv,useOptimistic:function(i,r){var o=Ut();return Qv(o,at,i,r)},useMemoCache:zm,useCacheRefresh:gE},WC={readContext:yn,use:Sh,useCallback:uE,useContext:yn,useEffect:sE,useImperativeHandle:lE,useInsertionEffect:rE,useLayoutEffect:aE,useMemo:cE,useReducer:Bm,useRef:nE,useState:function(){return Bm(ys)},useDebugValue:Gm,useDeferredValue:function(i,r){var o=Ut();return at===null?Qm(o,i,r):hE(o,at.memoizedState,i,r)},useTransition:function(){var i=Bm(ys)[0],r=Ut().memoizedState;return[typeof i=="boolean"?i:cu(i),r]},useSyncExternalStore:zv,useId:pE,useHostTransitionStatus:Km,useFormState:tE,useActionState:tE,useOptimistic:function(i,r){var o=Ut();return at!==null?Qv(o,at,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:zm,useCacheRefresh:gE},Co=null,du=0;function Nh(i){var r=du;return du+=1,Co===null&&(Co=[]),Ov(Co,i,r)}function mu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function xh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function bE(i){var r=i._init;return r(i._payload)}function SE(i){function r(L,O){if(i){var z=L.deletions;z===null?(L.deletions=[O],L.flags|=16):z.push(O)}}function o(L,O){if(!i)return null;for(;O!==null;)r(L,O),O=O.sibling;return null}function u(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function f(L,O){return L=ds(L,O),L.index=0,L.sibling=null,L}function m(L,O,z){return L.index=z,i?(z=L.alternate,z!==null?(z=z.index,z<O?(L.flags|=67108866,O):z):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function E(L){return i&&L.alternate===null&&(L.flags|=67108866),L}function S(L,O,z,X){return O===null||O.tag!==6?(O=gm(z,L.mode,X),O.return=L,O):(O=f(O,z),O.return=L,O)}function I(L,O,z,X){var he=z.type;return he===U?K(L,O,z.props.children,X,z.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===C&&bE(he)===O.type)?(O=f(O,z.props),mu(O,z),O.return=L,O):(O=fh(z.type,z.key,z.props,null,L.mode,X),mu(O,z),O.return=L,O)}function q(L,O,z,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=_m(z,L.mode,X),O.return=L,O):(O=f(O,z.children||[]),O.return=L,O)}function K(L,O,z,X,he){return O===null||O.tag!==7?(O=ca(z,L.mode,X,he),O.return=L,O):(O=f(O,z),O.return=L,O)}function W(L,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=gm(""+O,L.mode,z),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case b:return z=fh(O.type,O.key,O.props,null,L.mode,z),mu(z,O),z.return=L,z;case x:return O=_m(O,L.mode,z),O.return=L,O;case C:var X=O._init;return O=X(O._payload),W(L,O,z)}if(mt(O)||V(O))return O=ca(O,L.mode,z,null),O.return=L,O;if(typeof O.then=="function")return W(L,Nh(O),z);if(O.$$typeof===le)return W(L,gh(L,O),z);xh(L,O)}return null}function B(L,O,z,X){var he=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return he!==null?null:S(L,O,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case b:return z.key===he?I(L,O,z,X):null;case x:return z.key===he?q(L,O,z,X):null;case C:return he=z._init,z=he(z._payload),B(L,O,z,X)}if(mt(z)||V(z))return he!==null?null:K(L,O,z,X,null);if(typeof z.then=="function")return B(L,O,Nh(z),X);if(z.$$typeof===le)return B(L,O,gh(L,z),X);xh(L,z)}return null}function H(L,O,z,X,he){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(z)||null,S(O,L,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case b:return L=L.get(X.key===null?z:X.key)||null,I(O,L,X,he);case x:return L=L.get(X.key===null?z:X.key)||null,q(O,L,X,he);case C:var Me=X._init;return X=Me(X._payload),H(L,O,z,X,he)}if(mt(X)||V(X))return L=L.get(z)||null,K(O,L,X,he,null);if(typeof X.then=="function")return H(L,O,z,Nh(X),he);if(X.$$typeof===le)return H(L,O,z,gh(O,X),he);xh(O,X)}return null}function Se(L,O,z,X){for(var he=null,Me=null,de=O,Ee=O=0,tn=null;de!==null&&Ee<z.length;Ee++){de.index>Ee?(tn=de,de=null):tn=de.sibling;var Ke=B(L,de,z[Ee],X);if(Ke===null){de===null&&(de=tn);break}i&&de&&Ke.alternate===null&&r(L,de),O=m(Ke,O,Ee),Me===null?he=Ke:Me.sibling=Ke,Me=Ke,de=tn}if(Ee===z.length)return o(L,de),$e&&fa(L,Ee),he;if(de===null){for(;Ee<z.length;Ee++)de=W(L,z[Ee],X),de!==null&&(O=m(de,O,Ee),Me===null?he=de:Me.sibling=de,Me=de);return $e&&fa(L,Ee),he}for(de=u(de);Ee<z.length;Ee++)tn=H(de,L,Ee,z[Ee],X),tn!==null&&(i&&tn.alternate!==null&&de.delete(tn.key===null?Ee:tn.key),O=m(tn,O,Ee),Me===null?he=tn:Me.sibling=tn,Me=tn);return i&&de.forEach(function(pr){return r(L,pr)}),$e&&fa(L,Ee),he}function ye(L,O,z,X){if(z==null)throw Error(s(151));for(var he=null,Me=null,de=O,Ee=O=0,tn=null,Ke=z.next();de!==null&&!Ke.done;Ee++,Ke=z.next()){de.index>Ee?(tn=de,de=null):tn=de.sibling;var pr=B(L,de,Ke.value,X);if(pr===null){de===null&&(de=tn);break}i&&de&&pr.alternate===null&&r(L,de),O=m(pr,O,Ee),Me===null?he=pr:Me.sibling=pr,Me=pr,de=tn}if(Ke.done)return o(L,de),$e&&fa(L,Ee),he;if(de===null){for(;!Ke.done;Ee++,Ke=z.next())Ke=W(L,Ke.value,X),Ke!==null&&(O=m(Ke,O,Ee),Me===null?he=Ke:Me.sibling=Ke,Me=Ke);return $e&&fa(L,Ee),he}for(de=u(de);!Ke.done;Ee++,Ke=z.next())Ke=H(de,L,Ee,Ke.value,X),Ke!==null&&(i&&Ke.alternate!==null&&de.delete(Ke.key===null?Ee:Ke.key),O=m(Ke,O,Ee),Me===null?he=Ke:Me.sibling=Ke,Me=Ke);return i&&de.forEach(function(ZR){return r(L,ZR)}),$e&&fa(L,Ee),he}function lt(L,O,z,X){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case b:e:{for(var he=z.key;O!==null;){if(O.key===he){if(he=z.type,he===U){if(O.tag===7){o(L,O.sibling),X=f(O,z.props.children),X.return=L,L=X;break e}}else if(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===C&&bE(he)===O.type){o(L,O.sibling),X=f(O,z.props),mu(X,z),X.return=L,L=X;break e}o(L,O);break}else r(L,O);O=O.sibling}z.type===U?(X=ca(z.props.children,L.mode,X,z.key),X.return=L,L=X):(X=fh(z.type,z.key,z.props,null,L.mode,X),mu(X,z),X.return=L,L=X)}return E(L);case x:e:{for(he=z.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){o(L,O.sibling),X=f(O,z.children||[]),X.return=L,L=X;break e}else{o(L,O);break}else r(L,O);O=O.sibling}X=_m(z,L.mode,X),X.return=L,L=X}return E(L);case C:return he=z._init,z=he(z._payload),lt(L,O,z,X)}if(mt(z))return Se(L,O,z,X);if(V(z)){if(he=V(z),typeof he!="function")throw Error(s(150));return z=he.call(z),ye(L,O,z,X)}if(typeof z.then=="function")return lt(L,O,Nh(z),X);if(z.$$typeof===le)return lt(L,O,gh(L,z),X);xh(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(o(L,O.sibling),X=f(O,z),X.return=L,L=X):(o(L,O),X=gm(z,L.mode,X),X.return=L,L=X),E(L)):o(L,O)}return function(L,O,z,X){try{du=0;var he=lt(L,O,z,X);return Co=null,he}catch(de){if(de===su||de===yh)throw de;var Me=Qn(29,de,null,L.mode);return Me.lanes=X,Me.return=L,Me}finally{}}}var Ro=SE(!0),wE=SE(!1),ci=J(null),ji=null;function er(i){var r=i.alternate;ee(Kt,Kt.current&1),ee(ci,i),ji===null&&(r===null||bo.current!==null||r.memoizedState!==null)&&(ji=i)}function AE(i){if(i.tag===22){if(ee(Kt,Kt.current),ee(ci,i),ji===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(ji=i)}}else tr()}function tr(){ee(Kt,Kt.current),ee(ci,ci.current)}function vs(i){ae(ci),ji===i&&(ji=null),ae(Kt)}var Kt=J(0);function Dh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||jp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Xm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Wm={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Xn(),f=Ws(u);f.payload=r,o!=null&&(f.callback=o),r=Zs(i,f,u),r!==null&&(Wn(r,i,u),au(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Xn(),f=Ws(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Zs(i,f,u),r!==null&&(Wn(r,i,u),au(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Xn(),u=Ws(o);u.tag=2,r!=null&&(u.callback=r),r=Zs(i,u,o),r!==null&&(Wn(r,i,o),au(r,i,o))}};function CE(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Xl(o,u)||!Xl(f,m):!0}function RE(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Wm.enqueueReplaceState(r,r.state,null)}function va(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Oh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function IE(i){Oh(i)}function NE(i){console.error(i)}function xE(i){Oh(i)}function Mh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function DE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Zm(i,r,o){return o=Ws(o),o.tag=3,o.payload={element:null},o.callback=function(){Mh(i,r)},o}function OE(i){return i=Ws(i),i.tag=3,i}function ME(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){DE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){DE(r,o,u),typeof f!="function"&&(or===null?or=new Set([this]):or.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function ZC(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&tu(r,o,f,!0),o=ci.current,o!==null){switch(o.tag){case 13:return ji===null?bp():o.alternate===null&&At===0&&(At=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Rm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),wp(i,u,f)),!1;case 22:return o.flags|=65536,u===Rm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),wp(i,u,f)),!1}throw Error(s(435,o.tag))}return wp(i,u,f),bp(),!1}if($e)return r=ci.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Em&&(i=Error(s(422),{cause:u}),eu(ai(i,o)))):(u!==Em&&(r=Error(s(423),{cause:u}),eu(ai(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=ai(u,o),f=Zm(i.stateNode,u,f),xm(i,f),At!==4&&(At=2)),!1;var m=Error(s(520),{cause:u});if(m=ai(m,o),Tu===null?Tu=[m]:Tu.push(m),At!==4&&(At=2),r===null)return!0;u=ai(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Zm(o.stateNode,u,i),xm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(or===null||!or.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=OE(f),ME(f,i,o,u),xm(o,f),!1}o=o.return}while(o!==null);return!1}var kE=Error(s(461)),Jt=!1;function un(i,r,o,u){r.child=i===null?wE(r,null,o,u):Ro(r,i.child,o,u)}function PE(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return ga(r),u=Pm(i,r,o,E,m,f),S=Vm(),i!==null&&!Jt?(Lm(i,r,f),Es(i,r,f)):($e&&S&&ym(r),r.flags|=1,un(i,r,u,f),r.child)}function VE(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!pm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,LE(i,r,m,u,f)):(i=fh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!ap(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Xl,o(E,u)&&i.ref===r.ref)return Es(i,r,f)}return r.flags|=1,i=ds(m,u),i.ref=r.ref,i.return=r,r.child=i}function LE(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Xl(m,u)&&i.ref===r.ref)if(Jt=!1,r.pendingProps=u=m,ap(i,f))(i.flags&131072)!==0&&(Jt=!0);else return r.lanes=i.lanes,Es(i,r,f)}return Jm(i,r,o,u,f)}function UE(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return jE(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&_h(r,m!==null?m.cachePool:null),m!==null?Lv(r,m):Om(),AE(r);else return r.lanes=r.childLanes=536870912,jE(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(_h(r,m.cachePool),Lv(r,m),tr(),r.memoizedState=null):(i!==null&&_h(r,null),Om(),tr());return un(i,r,f,o),r.child}function jE(i,r,o,u){var f=Cm();return f=f===null?null:{parent:Yt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&_h(r,null),Om(),AE(r),i!==null&&tu(i,r,u,!0),null}function kh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Jm(i,r,o,u,f){return ga(r),o=Pm(i,r,o,u,void 0,f),u=Vm(),i!==null&&!Jt?(Lm(i,r,f),Es(i,r,f)):($e&&u&&ym(r),r.flags|=1,un(i,r,o,f),r.child)}function zE(i,r,o,u,f,m){return ga(r),r.updateQueue=null,o=jv(r,u,o,f),Uv(i),u=Vm(),i!==null&&!Jt?(Lm(i,r,m),Es(i,r,m)):($e&&u&&ym(r),r.flags|=1,un(i,r,o,m),r.child)}function qE(i,r,o,u,f){if(ga(r),r.stateNode===null){var m=_o,E=o.contextType;typeof E=="object"&&E!==null&&(m=yn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Wm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Im(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?yn(E):_o,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Xm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Wm.enqueueReplaceState(m,m.state,null),lu(r,u,m,f),ou(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,I=va(o,S);m.props=I;var q=m.context,K=o.contextType;E=_o,typeof K=="object"&&K!==null&&(E=yn(K));var W=o.getDerivedStateFromProps;K=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||q!==E)&&RE(r,m,u,E),Xs=!1;var B=r.memoizedState;m.state=B,lu(r,u,m,f),ou(),q=r.memoizedState,S||B!==q||Xs?(typeof W=="function"&&(Xm(r,o,W,u),q=r.memoizedState),(I=Xs||CE(r,o,I,u,B,q,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Nm(i,r),E=r.memoizedProps,K=va(o,E),m.props=K,W=r.pendingProps,B=m.context,q=o.contextType,I=_o,typeof q=="object"&&q!==null&&(I=yn(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==W||B!==I)&&RE(r,m,u,I),Xs=!1,B=r.memoizedState,m.state=B,lu(r,u,m,f),ou();var H=r.memoizedState;E!==W||B!==H||Xs||i!==null&&i.dependencies!==null&&ph(i.dependencies)?(typeof S=="function"&&(Xm(r,o,S,u),H=r.memoizedState),(K=Xs||CE(r,o,K,u,B,H,I)||i!==null&&i.dependencies!==null&&ph(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,H,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,H,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=H),m.props=u,m.state=H,m.context=I,u=K):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,kh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Ro(r,i.child,null,f),r.child=Ro(r,null,o,f)):un(i,r,o,f),r.memoizedState=m.state,i=r.child):i=Es(i,r,f),i}function BE(i,r,o,u){return Jl(),r.flags|=256,un(i,r,o,u),r.child}var ep={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tp(i){return{baseLanes:i,cachePool:Nv()}}function np(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=hi),i}function FE(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Kt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if($e){if(f?er(r):tr(),$e){var S=wt,I;if(I=S){e:{for(I=S,S=Ui;I.nodeType!==8;){if(!S){S=null;break e}if(I=Ei(I.nextSibling),I===null){S=null;break e}}S=I}S!==null?(r.memoizedState={dehydrated:S,treeContext:ha!==null?{id:ms,overflow:ps}:null,retryLane:536870912,hydrationErrors:null},I=Qn(18,null,null,0),I.stateNode=S,I.return=r,r.child=I,xn=r,wt=null,I=!0):I=!1}I||ma(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return jp(S)?r.lanes=32:r.lanes=536870912,null;vs(r)}return S=u.children,u=u.fallback,f?(tr(),f=r.mode,S=Ph({mode:"hidden",children:S},f),u=ca(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=tp(o),f.childLanes=np(i,E,o),r.memoizedState=ep,u):(er(r),ip(r,S))}if(I=i.memoizedState,I!==null&&(S=I.dehydrated,S!==null)){if(m)r.flags&256?(er(r),r.flags&=-257,r=sp(i,r,o)):r.memoizedState!==null?(tr(),r.child=i.child,r.flags|=128,r=null):(tr(),f=u.fallback,S=r.mode,u=Ph({mode:"visible",children:u.children},S),f=ca(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Ro(r,i.child,null,o),u=r.child,u.memoizedState=tp(o),u.childLanes=np(i,E,o),r.memoizedState=ep,r=f);else if(er(r),jp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,eu({value:u,source:null,stack:null}),r=sp(i,r,o)}else if(Jt||tu(i,r,o,!1),E=(o&i.childLanes)!==0,Jt||E){if(E=ht,E!==null&&(u=o&-o,u=(u&42)!==0?1:Bs(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,go(i,u),Wn(E,i,u),kE;S.data==="$?"||bp(),r=sp(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=I.treeContext,wt=Ei(S.nextSibling),xn=r,$e=!0,da=null,Ui=!1,i!==null&&(li[ui++]=ms,li[ui++]=ps,li[ui++]=ha,ms=i.id,ps=i.overflow,ha=r),r=ip(r,u.children),r.flags|=4096);return r}return f?(tr(),f=u.fallback,S=r.mode,I=i.child,q=I.sibling,u=ds(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,q!==null?f=ds(q,f):(f=ca(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=tp(o):(I=S.cachePool,I!==null?(q=Yt._currentValue,I=I.parent!==q?{parent:q,pool:q}:I):I=Nv(),S={baseLanes:S.baseLanes|o,cachePool:I}),f.memoizedState=S,f.childLanes=np(i,E,o),r.memoizedState=ep,u):(er(r),o=i.child,i=o.sibling,o=ds(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function ip(i,r){return r=Ph({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Ph(i,r){return i=Qn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function sp(i,r,o){return Ro(r,i.child,null,o),i=ip(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function HE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),bm(i.return,r,o)}function rp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function GE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(un(i,r,u.children,o),u=Kt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&HE(i,o,r);else if(i.tag===19)HE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ee(Kt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Dh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),rp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Dh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}rp(r,!0,o,null,m);break;case"together":rp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Es(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),ar|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(tu(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ds(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ds(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function ap(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&ph(i)))}function JC(i,r,o){switch(r.tag){case 3:st(r,r.stateNode.containerInfo),$s(r,Yt,i.memoizedState.cache),Jl();break;case 27:case 5:ei(r);break;case 4:st(r,r.stateNode.containerInfo);break;case 10:$s(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(er(r),r.flags|=128,null):(o&r.child.childLanes)!==0?FE(i,r,o):(er(r),i=Es(i,r,o),i!==null?i.sibling:null);er(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(tu(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return GE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(Kt,Kt.current),u)break;return null;case 22:case 23:return r.lanes=0,UE(i,r,o);case 24:$s(r,Yt,i.memoizedState.cache)}return Es(i,r,o)}function QE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Jt=!0;else{if(!ap(i,o)&&(r.flags&128)===0)return Jt=!1,JC(i,r,o);Jt=(i.flags&131072)!==0}else Jt=!1,$e&&(r.flags&1048576)!==0&&bv(r,mh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")pm(u)?(i=va(u,i),r.tag=1,r=qE(null,r,u,i,o)):(r.tag=0,r=Jm(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===me){r.tag=11,r=PE(null,r,u,i,o);break e}else if(f===k){r.tag=14,r=VE(null,r,u,i,o);break e}}throw r=it(u)||u,Error(s(306,r,""))}}return r;case 0:return Jm(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=va(u,r.pendingProps),qE(i,r,u,f,o);case 3:e:{if(st(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Nm(i,r),lu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,$s(r,Yt,u),u!==m.cache&&Sm(r,[Yt],o,!0),ou(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=BE(i,r,u,o);break e}else if(u!==f){f=ai(Error(s(424)),r),eu(f),r=BE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(wt=Ei(i.firstChild),xn=r,$e=!0,da=null,Ui=!0,o=wE(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Jl(),u===f){r=Es(i,r,o);break e}un(i,r,u,o)}r=r.child}return r;case 26:return kh(i,r),i===null?(o=X0(r.type,null,r.pendingProps,null))?r.memoizedState=o:$e||(o=r.type,i=r.pendingProps,u=$h(be.current).createElement(o),u[Ht]=r,u[Pt]=i,hn(u,o,i),Nt(u),r.stateNode=u):r.memoizedState=X0(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return ei(r),i===null&&$e&&(u=r.stateNode=Y0(r.type,r.pendingProps,be.current),xn=r,Ui=!0,f=wt,cr(r.type)?(zp=f,wt=Ei(u.firstChild)):wt=f),un(i,r,r.pendingProps.children,o),kh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&$e&&((f=u=wt)&&(u=RR(u,r.type,r.pendingProps,Ui),u!==null?(r.stateNode=u,xn=r,wt=Ei(u.firstChild),Ui=!1,f=!0):f=!1),f||ma(r)),ei(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Vp(f,m)?u=null:E!==null&&Vp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Pm(i,r,GC,null,null,o),xu._currentValue=f),kh(i,r),un(i,r,u,o),r.child;case 6:return i===null&&$e&&((i=o=wt)&&(o=IR(o,r.pendingProps,Ui),o!==null?(r.stateNode=o,xn=r,wt=null,i=!0):i=!1),i||ma(r)),null;case 13:return FE(i,r,o);case 4:return st(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Ro(r,null,u,o):un(i,r,u,o),r.child;case 11:return PE(i,r,r.type,r.pendingProps,o);case 7:return un(i,r,r.pendingProps,o),r.child;case 8:return un(i,r,r.pendingProps.children,o),r.child;case 12:return un(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,$s(r,r.type,u.value),un(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ga(r),f=yn(f),u=u(f),r.flags|=1,un(i,r,u,o),r.child;case 14:return VE(i,r,r.type,r.pendingProps,o);case 15:return LE(i,r,r.type,r.pendingProps,o);case 19:return GE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Ph(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ds(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return UE(i,r,o);case 24:return ga(r),u=yn(Yt),i===null?(f=Cm(),f===null&&(f=ht,m=wm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Im(r),$s(r,Yt,f)):((i.lanes&o)!==0&&(Nm(i,r),lu(r,null,null,o),ou()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),$s(r,Yt,u)):(u=m.cache,$s(r,Yt,u),u!==f.cache&&Sm(r,[Yt],o,!0))),un(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Ts(i){i.flags|=4}function YE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!tT(r)){if(r=ci.current,r!==null&&((Ge&4194048)===Ge?ji!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||r!==ji))throw ru=Rm,xv;i.flags|=8192}}function Vh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Ol():536870912,i.lanes|=r,Do|=r)}function pu(i,r){if(!$e)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Et(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function eR(i,r,o){var u=r.pendingProps;switch(vm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(r),null;case 1:return Et(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),_s(Yt),Cn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Zl(r)?Ts(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Av())),Et(r),null;case 26:return o=r.memoizedState,i===null?(Ts(r),o!==null?(Et(r),YE(r,o)):(Et(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Ts(r),Et(r),YE(r,o)):(Et(r),r.flags&=-16777217):(i.memoizedProps!==u&&Ts(r),Et(r),r.flags&=-16777217),null;case 27:ve(r),o=be.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Ts(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return Et(r),null}i=ge.current,Zl(r)?Sv(r):(i=Y0(f,u,o),r.stateNode=i,Ts(r))}return Et(r),null;case 5:if(ve(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Ts(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return Et(r),null}if(i=ge.current,Zl(r))Sv(r);else{switch(f=$h(be.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Ht]=r,i[Pt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(hn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ts(r)}}return Et(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Ts(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=be.current,Zl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=xn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Ht]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||z0(i.nodeValue,o)),i||ma(r)}else i=$h(i).createTextNode(u),i[Ht]=r,r.stateNode=i}return Et(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Zl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ht]=r}else Jl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Et(r),f=!1}else f=Av(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(vs(r),r):(vs(r),null)}if(vs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Vh(r,r.updateQueue),Et(r),null;case 4:return Cn(),i===null&&Dp(r.stateNode.containerInfo),Et(r),null;case 10:return _s(r.type),Et(r),null;case 19:if(ae(Kt),f=r.memoizedState,f===null)return Et(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)pu(f,!1);else{if(At!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Dh(i),m!==null){for(r.flags|=128,pu(f,!1),i=m.updateQueue,r.updateQueue=i,Vh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Tv(o,i),o=o.sibling;return ee(Kt,Kt.current&1|2),r.child}i=i.sibling}f.tail!==null&&It()>jh&&(r.flags|=128,u=!0,pu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Dh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Vh(r,i),pu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!$e)return Et(r),null}else 2*It()-f.renderingStartTime>jh&&o!==536870912&&(r.flags|=128,u=!0,pu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=It(),r.sibling=null,i=Kt.current,ee(Kt,u?i&1|2:i&1),r):(Et(r),null);case 22:case 23:return vs(r),Mm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(Et(r),r.subtreeFlags&6&&(r.flags|=8192)):Et(r),o=r.updateQueue,o!==null&&Vh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&ae(_a),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),_s(Yt),Et(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function tR(i,r){switch(vm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return _s(Yt),Cn(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return ve(r),null;case 13:if(vs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Jl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ae(Kt),null;case 4:return Cn(),null;case 10:return _s(r.type),null;case 22:case 23:return vs(r),Mm(),i!==null&&ae(_a),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return _s(Yt),null;case 25:return null;default:return null}}function KE(i,r){switch(vm(r),r.tag){case 3:_s(Yt),Cn();break;case 26:case 27:case 5:ve(r);break;case 4:Cn();break;case 13:vs(r);break;case 19:ae(Kt);break;case 10:_s(r.type);break;case 22:case 23:vs(r),Mm(),i!==null&&ae(_a);break;case 24:_s(Yt)}}function gu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){ut(r,r.return,S)}}function nr(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var I=o,q=S;try{q()}catch(K){ut(f,I,K)}}}u=u.next}while(u!==m)}}catch(K){ut(r,r.return,K)}}function $E(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Vv(r,o)}catch(u){ut(i,i.return,u)}}}function XE(i,r,o){o.props=va(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ut(i,r,u)}}function _u(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){ut(i,r,f)}}function zi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ut(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ut(i,r,f)}else o.current=null}function WE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ut(i,i.return,f)}}function op(i,r,o){try{var u=i.stateNode;bR(u,i.type,o,r),u[Pt]=r}catch(f){ut(i,i.return,f)}}function ZE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&cr(i.type)||i.tag===4}function lp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||ZE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&cr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function up(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Kh));else if(u!==4&&(u===27&&cr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(up(i,r,o),i=i.sibling;i!==null;)up(i,r,o),i=i.sibling}function Lh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&cr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Lh(i,r,o),i=i.sibling;i!==null;)Lh(i,r,o),i=i.sibling}function JE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);hn(r,u,o),r[Ht]=i,r[Pt]=o}catch(m){ut(i,i.return,m)}}var bs=!1,Dt=!1,cp=!1,e0=typeof WeakSet=="function"?WeakSet:Set,en=null;function nR(i,r){if(i=i.containerInfo,kp=tf,i=hv(i),lm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,I=-1,q=0,K=0,W=i,B=null;t:for(;;){for(var H;W!==o||f!==0&&W.nodeType!==3||(S=E+f),W!==m||u!==0&&W.nodeType!==3||(I=E+u),W.nodeType===3&&(E+=W.nodeValue.length),(H=W.firstChild)!==null;)B=W,W=H;for(;;){if(W===i)break t;if(B===o&&++q===f&&(S=E),B===m&&++K===u&&(I=E),(H=W.nextSibling)!==null)break;W=B,B=W.parentNode}W=H}o=S===-1||I===-1?null:{start:S,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(Pp={focusedElem:i,selectionRange:o},tf=!1,en=r;en!==null;)if(r=en,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,en=i;else for(;en!==null;){switch(r=en,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Se=va(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Se,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ye){ut(o,o.return,ye)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Up(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Up(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,en=i;break}en=r.return}}function t0(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ir(i,o),u&4&&gu(5,o);break;case 1:if(ir(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){ut(o,o.return,E)}else{var f=va(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){ut(o,o.return,E)}}u&64&&$E(o),u&512&&_u(o,o.return);break;case 3:if(ir(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Vv(i,r)}catch(E){ut(o,o.return,E)}}break;case 27:r===null&&u&4&&JE(o);case 26:case 5:ir(i,o),r===null&&u&4&&WE(o),u&512&&_u(o,o.return);break;case 12:ir(i,o);break;case 13:ir(i,o),u&4&&s0(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=hR.bind(null,o),NR(i,o))));break;case 22:if(u=o.memoizedState!==null||bs,!u){r=r!==null&&r.memoizedState!==null||Dt,f=bs;var m=Dt;bs=u,(Dt=r)&&!m?sr(i,o,(o.subtreeFlags&8772)!==0):ir(i,o),bs=f,Dt=m}break;case 30:break;default:ir(i,o)}}function n0(i){var r=i.alternate;r!==null&&(i.alternate=null,n0(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Gs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var yt=null,Pn=!1;function Ss(i,r,o){for(o=o.child;o!==null;)i0(i,r,o),o=o.sibling}function i0(i,r,o){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(St,o)}catch{}switch(o.tag){case 26:Dt||zi(o,r),Ss(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Dt||zi(o,r);var u=yt,f=Pn;cr(o.type)&&(yt=o.stateNode,Pn=!1),Ss(i,r,o),Cu(o.stateNode),yt=u,Pn=f;break;case 5:Dt||zi(o,r);case 6:if(u=yt,f=Pn,yt=null,Ss(i,r,o),yt=u,Pn=f,yt!==null)if(Pn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(o.stateNode)}catch(m){ut(o,r,m)}else try{yt.removeChild(o.stateNode)}catch(m){ut(o,r,m)}break;case 18:yt!==null&&(Pn?(i=yt,G0(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),ku(i)):G0(yt,o.stateNode));break;case 4:u=yt,f=Pn,yt=o.stateNode.containerInfo,Pn=!0,Ss(i,r,o),yt=u,Pn=f;break;case 0:case 11:case 14:case 15:Dt||nr(2,o,r),Dt||nr(4,o,r),Ss(i,r,o);break;case 1:Dt||(zi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&XE(o,r,u)),Ss(i,r,o);break;case 21:Ss(i,r,o);break;case 22:Dt=(u=Dt)||o.memoizedState!==null,Ss(i,r,o),Dt=u;break;default:Ss(i,r,o)}}function s0(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{ku(i)}catch(o){ut(r,r.return,o)}}function iR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new e0),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new e0),r;default:throw Error(s(435,i.tag))}}function hp(i,r){var o=iR(i);r.forEach(function(u){var f=fR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Yn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(cr(S.type)){yt=S.stateNode,Pn=!1;break e}break;case 5:yt=S.stateNode,Pn=!1;break e;case 3:case 4:yt=S.stateNode.containerInfo,Pn=!0;break e}S=S.return}if(yt===null)throw Error(s(160));i0(m,E,f),yt=null,Pn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)r0(r,i),r=r.sibling}var vi=null;function r0(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Yn(r,i),Kn(i),u&4&&(nr(3,i,i.return),gu(3,i),nr(5,i,i.return));break;case 1:Yn(r,i),Kn(i),u&512&&(Dt||o===null||zi(o,o.return)),u&64&&bs&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=vi;if(Yn(r,i),Kn(i),u&512&&(Dt||o===null||zi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Kr]||m[Ht]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),hn(m,u,o),m[Ht]=i,Nt(m),u=m;break e;case"link":var E=J0("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),hn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=J0("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),hn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Ht]=i,Nt(m),u=m}i.stateNode=u}else eT(f,i.type,i.stateNode);else i.stateNode=Z0(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?eT(f,i.type,i.stateNode):Z0(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&op(i,i.memoizedProps,o.memoizedProps)}break;case 27:Yn(r,i),Kn(i),u&512&&(Dt||o===null||zi(o,o.return)),o!==null&&u&4&&op(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Yn(r,i),Kn(i),u&512&&(Dt||o===null||zi(o,o.return)),i.flags&32){f=i.stateNode;try{ni(f,"")}catch(H){ut(i,i.return,H)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,op(i,f,o!==null?o.memoizedProps:f)),u&1024&&(cp=!0);break;case 6:if(Yn(r,i),Kn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(H){ut(i,i.return,H)}}break;case 3:if(Zh=null,f=vi,vi=Xh(r.containerInfo),Yn(r,i),vi=f,Kn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ku(r.containerInfo)}catch(H){ut(i,i.return,H)}cp&&(cp=!1,a0(i));break;case 4:u=vi,vi=Xh(i.stateNode.containerInfo),Yn(r,i),Kn(i),vi=u;break;case 12:Yn(r,i),Kn(i);break;case 13:Yn(r,i),Kn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(_p=It()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,hp(i,u)));break;case 22:f=i.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,q=bs,K=Dt;if(bs=q||f,Dt=K||I,Yn(r,i),Dt=K,bs=q,Kn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||I||bs||Dt||Ea(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){I=o=r;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=I.stateNode;var W=I.memoizedProps.style,B=W!=null&&W.hasOwnProperty("display")?W.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(H){ut(I,I.return,H)}}}else if(r.tag===6){if(o===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(H){ut(I,I.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,hp(i,o))));break;case 19:Yn(r,i),Kn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,hp(i,u)));break;case 30:break;case 21:break;default:Yn(r,i),Kn(i)}}function Kn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(ZE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=lp(i);Lh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(ni(E,""),o.flags&=-33);var S=lp(i);Lh(i,S,E);break;case 3:case 4:var I=o.stateNode.containerInfo,q=lp(i);up(i,q,I);break;default:throw Error(s(161))}}catch(K){ut(i,i.return,K)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function a0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;a0(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function ir(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)t0(i,r.alternate,r),r=r.sibling}function Ea(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:nr(4,r,r.return),Ea(r);break;case 1:zi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&XE(r,r.return,o),Ea(r);break;case 27:Cu(r.stateNode);case 26:case 5:zi(r,r.return),Ea(r);break;case 22:r.memoizedState===null&&Ea(r);break;case 30:Ea(r);break;default:Ea(r)}i=i.sibling}}function sr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:sr(f,m,o),gu(4,m);break;case 1:if(sr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){ut(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Pv(I[f],S)}catch(q){ut(u,u.return,q)}}o&&E&64&&$E(m),_u(m,m.return);break;case 27:JE(m);case 26:case 5:sr(f,m,o),o&&u===null&&E&4&&WE(m),_u(m,m.return);break;case 12:sr(f,m,o);break;case 13:sr(f,m,o),o&&E&4&&s0(f,m);break;case 22:m.memoizedState===null&&sr(f,m,o),_u(m,m.return);break;case 30:break;default:sr(f,m,o)}r=r.sibling}}function fp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&nu(o))}function dp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&nu(i))}function qi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)o0(i,r,o,u),r=r.sibling}function o0(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:qi(i,r,o,u),f&2048&&gu(9,r);break;case 1:qi(i,r,o,u);break;case 3:qi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&nu(i)));break;case 12:if(f&2048){qi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(I){ut(r,r.return,I)}}else qi(i,r,o,u);break;case 13:qi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?qi(i,r,o,u):yu(i,r):m._visibility&2?qi(i,r,o,u):(m._visibility|=2,Io(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&fp(E,r);break;case 24:qi(i,r,o,u),f&2048&&dp(r.alternate,r);break;default:qi(i,r,o,u)}}function Io(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,I=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Io(m,E,S,I,f),gu(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Io(m,E,S,I,f):yu(m,E):(K._visibility|=2,Io(m,E,S,I,f)),f&&q&2048&&fp(E.alternate,E);break;case 24:Io(m,E,S,I,f),f&&q&2048&&dp(E.alternate,E);break;default:Io(m,E,S,I,f)}r=r.sibling}}function yu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:yu(o,u),f&2048&&fp(u.alternate,u);break;case 24:yu(o,u),f&2048&&dp(u.alternate,u);break;default:yu(o,u)}r=r.sibling}}var vu=8192;function No(i){if(i.subtreeFlags&vu)for(i=i.child;i!==null;)l0(i),i=i.sibling}function l0(i){switch(i.tag){case 26:No(i),i.flags&vu&&i.memoizedState!==null&&BR(vi,i.memoizedState,i.memoizedProps);break;case 5:No(i);break;case 3:case 4:var r=vi;vi=Xh(i.stateNode.containerInfo),No(i),vi=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=vu,vu=16777216,No(i),vu=r):No(i));break;default:No(i)}}function u0(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Eu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];en=u,h0(u,i)}u0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)c0(i),i=i.sibling}function c0(i){switch(i.tag){case 0:case 11:case 15:Eu(i),i.flags&2048&&nr(9,i,i.return);break;case 3:Eu(i);break;case 12:Eu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Uh(i)):Eu(i);break;default:Eu(i)}}function Uh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];en=u,h0(u,i)}u0(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:nr(8,r,r.return),Uh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Uh(r));break;default:Uh(r)}i=i.sibling}}function h0(i,r){for(;en!==null;){var o=en;switch(o.tag){case 0:case 11:case 15:nr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:nu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,en=u;else e:for(o=i;en!==null;){u=en;var f=u.sibling,m=u.return;if(n0(u),u===o){en=null;break e}if(f!==null){f.return=m,en=f;break e}en=m}}}var sR={getCacheForType:function(i){var r=yn(Yt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},rR=typeof WeakMap=="function"?WeakMap:Map,et=0,ht=null,Le=null,Ge=0,tt=0,$n=null,rr=!1,xo=!1,mp=!1,ws=0,At=0,ar=0,Ta=0,pp=0,hi=0,Do=0,Tu=null,Vn=null,gp=!1,_p=0,jh=1/0,zh=null,or=null,cn=0,lr=null,Oo=null,Mo=0,yp=0,vp=null,f0=null,bu=0,Ep=null;function Xn(){if((et&2)!==0&&Ge!==0)return Ge&-Ge;if(Y.T!==null){var i=Eo;return i!==0?i:Rp()}return Fs()}function d0(){hi===0&&(hi=(Ge&536870912)===0||$e?Dl():536870912);var i=ci.current;return i!==null&&(i.flags|=32),hi}function Wn(i,r,o){(i===ht&&(tt===2||tt===9)||i.cancelPendingCommit!==null)&&(ko(i,0),ur(i,Ge,hi,!1)),ns(i,o),((et&2)===0||i!==ht)&&(i===ht&&((et&2)===0&&(Ta|=o),At===4&&ur(i,Ge,hi,!1)),Bi(i))}function m0(i,r,o){if((et&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Yr(i,r),f=u?lR(i,r):Sp(i,r,!0),m=u;do{if(f===0){xo&&!u&&ur(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!aR(o)){f=Sp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=Tu;var I=S.current.memoizedState.isDehydrated;if(I&&(ko(S,E).flags|=256),E=Sp(S,E,!1),E!==2){if(mp&&!I){S.errorRecoveryDisabledLanes|=m,Ta|=m,f=4;break e}m=Vn,Vn=f,m!==null&&(Vn===null?Vn=m:Vn.push.apply(Vn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){ko(i,0),ur(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:ur(u,r,hi,!rr);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=_p+300-It(),10<f)){if(ur(u,r,hi,!rr),Xa(u,0,!0)!==0)break e;u.timeoutHandle=F0(p0.bind(null,u,o,Vn,zh,gp,r,hi,Ta,Do,rr,m,2,-0,0),f);break e}p0(u,o,Vn,zh,gp,r,hi,Ta,Do,rr,m,0,-0,0)}}break}while(!0);Bi(i)}function p0(i,r,o,u,f,m,E,S,I,q,K,W,B,H){if(i.timeoutHandle=-1,W=r.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(Nu={stylesheets:null,count:0,unsuspend:qR},l0(r),W=FR(),W!==null)){i.cancelPendingCommit=W(b0.bind(null,i,r,m,o,u,f,E,S,I,K,1,B,H)),ur(i,m,E,!q);return}b0(i,r,m,o,u,f,E,S,I)}function aR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Gn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ur(i,r,o,u){r&=~pp,r&=~Ta,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-_n(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Ri(i,o,r)}function qh(){return(et&6)===0?(Su(0),!1):!0}function Tp(){if(Le!==null){if(tt===0)var i=Le.return;else i=Le,gs=pa=null,Um(i),Co=null,du=0,i=Le;for(;i!==null;)KE(i.alternate,i),i=i.return;Le=null}}function ko(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,wR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Tp(),ht=i,Le=o=ds(i.current,null),Ge=r,tt=0,$n=null,rr=!1,xo=Yr(i,r),mp=!1,Do=hi=pp=Ta=ar=At=0,Vn=Tu=null,gp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-_n(u),m=1<<f;r|=i[f],u&=~m}return ws=r,uh(),o}function g0(i,r){De=null,Y.H=Ih,r===su||r===yh?(r=Mv(),tt=3):r===xv?(r=Mv(),tt=4):tt=r===kE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,$n=r,Le===null&&(At=1,Mh(i,ai(r,i.current)))}function _0(){var i=Y.H;return Y.H=Ih,i===null?Ih:i}function y0(){var i=Y.A;return Y.A=sR,i}function bp(){At=4,rr||(Ge&4194048)!==Ge&&ci.current!==null||(xo=!0),(ar&134217727)===0&&(Ta&134217727)===0||ht===null||ur(ht,Ge,hi,!1)}function Sp(i,r,o){var u=et;et|=2;var f=_0(),m=y0();(ht!==i||Ge!==r)&&(zh=null,ko(i,r)),r=!1;var E=At;e:do try{if(tt!==0&&Le!==null){var S=Le,I=$n;switch(tt){case 8:Tp(),E=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(r=!0);var q=tt;if(tt=0,$n=null,Po(i,S,I,q),o&&xo){E=0;break e}break;default:q=tt,tt=0,$n=null,Po(i,S,I,q)}}oR(),E=At;break}catch(K){g0(i,K)}while(!0);return r&&i.shellSuspendCounter++,gs=pa=null,et=u,Y.H=f,Y.A=m,Le===null&&(ht=null,Ge=0,uh()),E}function oR(){for(;Le!==null;)v0(Le)}function lR(i,r){var o=et;et|=2;var u=_0(),f=y0();ht!==i||Ge!==r?(zh=null,jh=It()+500,ko(i,r)):xo=Yr(i,r);e:do try{if(tt!==0&&Le!==null){r=Le;var m=$n;t:switch(tt){case 1:tt=0,$n=null,Po(i,r,m,1);break;case 2:case 9:if(Dv(m)){tt=0,$n=null,E0(r);break}r=function(){tt!==2&&tt!==9||ht!==i||(tt=7),Bi(i)},m.then(r,r);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:Dv(m)?(tt=0,$n=null,E0(r)):(tt=0,$n=null,Po(i,r,m,7));break;case 5:var E=null;switch(Le.tag){case 26:E=Le.memoizedState;case 5:case 27:var S=Le;if(!E||tT(E)){tt=0,$n=null;var I=S.sibling;if(I!==null)Le=I;else{var q=S.return;q!==null?(Le=q,Bh(q)):Le=null}break t}}tt=0,$n=null,Po(i,r,m,5);break;case 6:tt=0,$n=null,Po(i,r,m,6);break;case 8:Tp(),At=6;break e;default:throw Error(s(462))}}uR();break}catch(K){g0(i,K)}while(!0);return gs=pa=null,Y.H=u,Y.A=f,et=o,Le!==null?0:(ht=null,Ge=0,uh(),At)}function uR(){for(;Le!==null&&!qr();)v0(Le)}function v0(i){var r=QE(i.alternate,i,ws);i.memoizedProps=i.pendingProps,r===null?Bh(i):Le=r}function E0(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=zE(o,r,r.pendingProps,r.type,void 0,Ge);break;case 11:r=zE(o,r,r.pendingProps,r.type.render,r.ref,Ge);break;case 5:Um(r);default:KE(o,r),r=Le=Tv(r,ws),r=QE(o,r,ws)}i.memoizedProps=i.pendingProps,r===null?Bh(i):Le=r}function Po(i,r,o,u){gs=pa=null,Um(r),Co=null,du=0;var f=r.return;try{if(ZC(i,f,r,o,Ge)){At=1,Mh(i,ai(o,i.current)),Le=null;return}}catch(m){if(f!==null)throw Le=f,m;At=1,Mh(i,ai(o,i.current)),Le=null;return}r.flags&32768?($e||u===1?i=!0:xo||(Ge&536870912)!==0?i=!1:(rr=i=!0,(u===2||u===9||u===3||u===6)&&(u=ci.current,u!==null&&u.tag===13&&(u.flags|=16384))),T0(r,i)):Bh(r)}function Bh(i){var r=i;do{if((r.flags&32768)!==0){T0(r,rr);return}i=r.return;var o=eR(r.alternate,r,ws);if(o!==null){Le=o;return}if(r=r.sibling,r!==null){Le=r;return}Le=r=i}while(r!==null);At===0&&(At=5)}function T0(i,r){do{var o=tR(i.alternate,i);if(o!==null){o.flags&=32767,Le=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Le=i;return}Le=i=o}while(i!==null);At=6,Le=null}function b0(i,r,o,u,f,m,E,S,I){i.cancelPendingCommit=null;do Fh();while(cn!==0);if((et&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=dm,Ml(i,o,m,E,S,I),i===ht&&(Le=ht=null,Ge=0),Oo=r,lr=i,Mo=o,yp=m,vp=f,f0=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,dR(Fr,function(){return R0(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=re.p,re.p=2,E=et,et|=4;try{nR(i,r,o)}finally{et=E,re.p=f,Y.T=u}}cn=1,S0(),w0(),A0()}}function S0(){if(cn===1){cn=0;var i=lr,r=Oo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=re.p;re.p=2;var f=et;et|=4;try{r0(r,i);var m=Pp,E=hv(i.containerInfo),S=m.focusedElem,I=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&cv(S.ownerDocument.documentElement,S)){if(I!==null&&lm(S)){var q=I.start,K=I.end;if(K===void 0&&(K=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(K,S.value.length);else{var W=S.ownerDocument||document,B=W&&W.defaultView||window;if(B.getSelection){var H=B.getSelection(),Se=S.textContent.length,ye=Math.min(I.start,Se),lt=I.end===void 0?ye:Math.min(I.end,Se);!H.extend&&ye>lt&&(E=lt,lt=ye,ye=E);var L=uv(S,ye),O=uv(S,lt);if(L&&O&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var z=W.createRange();z.setStart(L.node,L.offset),H.removeAllRanges(),ye>lt?(H.addRange(z),H.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),H.addRange(z))}}}}for(W=[],H=S;H=H.parentNode;)H.nodeType===1&&W.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<W.length;S++){var X=W[S];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}tf=!!kp,Pp=kp=null}finally{et=f,re.p=u,Y.T=o}}i.current=r,cn=2}}function w0(){if(cn===2){cn=0;var i=lr,r=Oo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=re.p;re.p=2;var f=et;et|=4;try{t0(i,r.alternate,r)}finally{et=f,re.p=u,Y.T=o}}cn=3}}function A0(){if(cn===4||cn===3){cn=0,Br();var i=lr,r=Oo,o=Mo,u=f0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?cn=5:(cn=0,Oo=lr=null,C0(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(or=null),Wa(o),r=r.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(St,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Y.T,f=re.p,re.p=2,Y.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{Y.T=r,re.p=f}}(Mo&3)!==0&&Fh(),Bi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===Ep?bu++:(bu=0,Ep=i):bu=0,Su(0)}}function C0(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,nu(r)))}function Fh(i){return S0(),w0(),A0(),R0()}function R0(){if(cn!==5)return!1;var i=lr,r=yp;yp=0;var o=Wa(Mo),u=Y.T,f=re.p;try{re.p=32>o?32:o,Y.T=null,o=vp,vp=null;var m=lr,E=Mo;if(cn=0,Oo=lr=null,Mo=0,(et&6)!==0)throw Error(s(331));var S=et;if(et|=4,c0(m.current),o0(m,m.current,E,o),et=S,Su(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(St,m)}catch{}return!0}finally{re.p=f,Y.T=u,C0(i,r)}}function I0(i,r,o){r=ai(o,r),r=Zm(i.stateNode,r,2),i=Zs(i,r,2),i!==null&&(ns(i,2),Bi(i))}function ut(i,r,o){if(i.tag===3)I0(i,i,o);else for(;r!==null;){if(r.tag===3){I0(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){i=ai(o,i),o=OE(2),u=Zs(r,o,2),u!==null&&(ME(o,u,r,i),ns(u,2),Bi(u));break}}r=r.return}}function wp(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new rR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(mp=!0,f.add(o),i=cR.bind(null,i,r,o),r.then(i,i))}function cR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ht===i&&(Ge&o)===o&&(At===4||At===3&&(Ge&62914560)===Ge&&300>It()-_p?(et&2)===0&&ko(i,0):pp|=o,Do===Ge&&(Do=0)),Bi(i)}function N0(i,r){r===0&&(r=Ol()),i=go(i,r),i!==null&&(ns(i,r),Bi(i))}function hR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),N0(i,o)}function fR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),N0(i,o)}function dR(i,r){return vt(i,r)}var Hh=null,Vo=null,Ap=!1,Gh=!1,Cp=!1,ba=0;function Bi(i){i!==Vo&&i.next===null&&(Vo===null?Hh=Vo=i:Vo=Vo.next=i),Gh=!0,Ap||(Ap=!0,pR())}function Su(i,r){if(!Cp&&Gh){Cp=!0;do for(var o=!1,u=Hh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-_n(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,M0(u,m))}else m=Ge,m=Xa(u,u===ht?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Yr(u,m)||(o=!0,M0(u,m));u=u.next}while(o);Cp=!1}}function mR(){x0()}function x0(){Gh=Ap=!1;var i=0;ba!==0&&(SR()&&(i=ba),ba=0);for(var r=It(),o=null,u=Hh;u!==null;){var f=u.next,m=D0(u,r);m===0?(u.next=null,o===null?Hh=f:o.next=f,f===null&&(Vo=o)):(o=u,(i!==0||(m&3)!==0)&&(Gh=!0)),u=f}Su(i)}function D0(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-_n(m),S=1<<E,I=f[E];I===-1?((S&o)===0||(S&u)!==0)&&(f[E]=xl(S,r)):I<=r&&(i.expiredLanes|=S),m&=~S}if(r=ht,o=Ge,o=Xa(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(tt===2||tt===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&gn(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Yr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&gn(u),Wa(o)){case 2:case 8:o=Ka;break;case 32:o=Fr;break;case 268435456:o=$a;break;default:o=Fr}return u=O0.bind(null,i),o=vt(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&gn(u),i.callbackPriority=2,i.callbackNode=null,2}function O0(i,r){if(cn!==0&&cn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Fh()&&i.callbackNode!==o)return null;var u=Ge;return u=Xa(i,i===ht?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(m0(i,u,r),D0(i,It()),i.callbackNode!=null&&i.callbackNode===o?O0.bind(null,i):null)}function M0(i,r){if(Fh())return null;m0(i,r,!0)}function pR(){AR(function(){(et&6)!==0?vt(Il,mR):x0()})}function Rp(){return ba===0&&(ba=Dl()),ba}function k0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:io(""+i)}function P0(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function gR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=k0((f[Pt]||null).action),E=u.submitter;E&&(r=(r=E[Pt]||null)?k0(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new so("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ba!==0){var I=E?P0(f,E):new FormData(f);Ym(o,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(S.preventDefault(),I=E?P0(f,E):new FormData(f),Ym(o,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Ip=0;Ip<fm.length;Ip++){var Np=fm[Ip],_R=Np.toLowerCase(),yR=Np[0].toUpperCase()+Np.slice(1);yi(_R,"on"+yR)}yi(mv,"onAnimationEnd"),yi(pv,"onAnimationIteration"),yi(gv,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(PC,"onTransitionRun"),yi(VC,"onTransitionStart"),yi(LC,"onTransitionCancel"),yi(_v,"onTransitionEnd"),ss("onMouseEnter",["mouseout","mouseover"]),ss("onMouseLeave",["mouseout","mouseover"]),ss("onPointerEnter",["pointerout","pointerover"]),ss("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wu));function V0(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],I=S.instance,q=S.currentTarget;if(S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){Oh(K)}f.currentTarget=null,m=I}else for(E=0;E<u.length;E++){if(S=u[E],I=S.instance,q=S.currentTarget,S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){Oh(K)}f.currentTarget=null,m=I}}}}function Ue(i,r){var o=r[Pl];o===void 0&&(o=r[Pl]=new Set);var u=i+"__bubble";o.has(u)||(L0(r,i,2,!1),o.add(u))}function xp(i,r,o){var u=0;r&&(u|=4),L0(o,i,u,r)}var Qh="_reactListening"+Math.random().toString(36).slice(2);function Dp(i){if(!i[Qh]){i[Qh]=!0,Vl.forEach(function(o){o!=="selectionchange"&&(vR.has(o)||xp(o,!1,i),xp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Qh]||(r[Qh]=!0,xp("selectionchange",!1,r))}}function L0(i,r,o,u){switch(oT(r)){case 2:var f=QR;break;case 8:f=YR;break;default:f=Gp}o=f.bind(null,r,o,i),f=void 0,!si||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Op(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=is(S),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Kc(function(){var q=m,K=ii(o),W=[];e:{var B=yv.get(i);if(B!==void 0){var H=so,Se=i;switch(i){case"keypress":if(Mi(o)===0)break e;case"keydown":case"keyup":H=co;break;case"focusin":Se="focus",H=oo;break;case"focusout":Se="blur",H=oo;break;case"beforeblur":case"afterblur":H=oo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=ri;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=nh;break;case mv:case pv:case gv:H=lo;break;case _v:H=sh;break;case"scroll":case"scrollend":H=$c;break;case"wheel":H=ho;break;case"copy":case"cut":case"paste":H=uo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Kl;break;case"toggle":case"beforetoggle":H=ah}var ye=(r&4)!==0,lt=!ye&&(i==="scroll"||i==="scrollend"),L=ye?B!==null?B+"Capture":null:B;ye=[];for(var O=q,z;O!==null;){var X=O;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||L===null||(X=ta(O,L),X!=null&&ye.push(Au(O,X,z))),lt)break;O=O.return}0<ye.length&&(B=new H(B,Se,null,o,K),W.push({event:B,listeners:ye}))}}if((r&7)===0){e:{if(B=i==="mouseover"||i==="pointerover",H=i==="mouseout"||i==="pointerout",B&&o!==os&&(Se=o.relatedTarget||o.fromElement)&&(is(Se)||Se[ti]))break e;if((H||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,H?(Se=o.relatedTarget||o.toElement,H=q,Se=Se?is(Se):null,Se!==null&&(lt=l(Se),ye=Se.tag,Se!==lt||ye!==5&&ye!==27&&ye!==6)&&(Se=null)):(H=null,Se=q),H!==Se)){if(ye=ri,X="onMouseLeave",L="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ye=Kl,X="onPointerLeave",L="onPointerEnter",O="pointer"),lt=H==null?B:Ni(H),z=Se==null?B:Ni(Se),B=new ye(X,O+"leave",H,o,K),B.target=lt,B.relatedTarget=z,X=null,is(K)===q&&(ye=new ye(L,O+"enter",Se,o,K),ye.target=z,ye.relatedTarget=lt,X=ye),lt=X,H&&Se)t:{for(ye=H,L=Se,O=0,z=ye;z;z=Lo(z))O++;for(z=0,X=L;X;X=Lo(X))z++;for(;0<O-z;)ye=Lo(ye),O--;for(;0<z-O;)L=Lo(L),z--;for(;O--;){if(ye===L||L!==null&&ye===L.alternate)break t;ye=Lo(ye),L=Lo(L)}ye=null}else ye=null;H!==null&&U0(W,B,H,ye,!1),Se!==null&&lt!==null&&U0(W,lt,Se,ye,!0)}}e:{if(B=q?Ni(q):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var he=iv;else if(Qt(B))if(sv)he=OC;else{he=xC;var Me=NC}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?q&&ql(q.elementType)&&(he=iv):he=DC;if(he&&(he=he(i,q))){fs(W,he,o,K);break e}Me&&Me(i,B,q),i==="focusout"&&q&&B.type==="number"&&q.memoizedProps.value!=null&&Ys(B,"number",B.value)}switch(Me=q?Ni(q):window,i){case"focusin":(Qt(Me)||Me.contentEditable==="true")&&(fo=Me,um=q,Wl=null);break;case"focusout":Wl=um=fo=null;break;case"mousedown":cm=!0;break;case"contextmenu":case"mouseup":case"dragend":cm=!1,fv(W,o,K);break;case"selectionchange":if(kC)break;case"keydown":case"keyup":fv(W,o,K)}var de;if(Vi)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Fe?G(i,o)&&(Ee="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(Fe||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Fe&&(de=Fl()):(Oi=K,Ks="value"in Oi?Oi.value:Oi.textContent,Fe=!0)),Me=Yh(q,Ee),0<Me.length&&(Ee=new Ql(Ee,i,null,o,K),W.push({event:Ee,listeners:Me}),de?Ee.data=de:(de=ie(o),de!==null&&(Ee.data=de)))),(de=_?Gt(i,o):He(i,o))&&(Ee=Yh(q,"onBeforeInput"),0<Ee.length&&(Me=new Ql("onBeforeInput","beforeinput",null,o,K),W.push({event:Me,listeners:Ee}),Me.data=de)),gR(W,i,q,o,K)}V0(W,r)})}function Au(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Yh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=ta(i,o),f!=null&&u.unshift(Au(i,f,m)),f=ta(i,r),f!=null&&u.push(Au(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Lo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function U0(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,I=S.alternate,q=S.stateNode;if(S=S.tag,I!==null&&I===u)break;S!==5&&S!==26&&S!==27||q===null||(I=q,f?(q=ta(o,m),q!=null&&E.unshift(Au(o,q,I))):f||(q=ta(o,m),q!=null&&E.push(Au(o,q,I)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var ER=/\r\n?/g,TR=/\u0000|\uFFFD/g;function j0(i){return(typeof i=="string"?i:""+i).replace(ER,`
`).replace(TR,"")}function z0(i,r){return r=j0(r),j0(i)===r}function Kh(){}function ot(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||ni(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&ni(i,""+u);break;case"className":xi(i,"class",u);break;case"tabIndex":xi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":xi(i,o,u);break;case"style":zl(i,u,m);break;case"data":if(r!=="object"){xi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=io(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&ot(i,r,"name",f.name,f,null),ot(i,r,"formEncType",f.formEncType,f,null),ot(i,r,"formMethod",f.formMethod,f,null),ot(i,r,"formTarget",f.formTarget,f,null)):(ot(i,r,"encType",f.encType,f,null),ot(i,r,"method",f.method,f,null),ot(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=io(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Kh);break;case"onScroll":u!=null&&Ue("scroll",i);break;case"onScrollEnd":u!=null&&Ue("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=io(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Ue("beforetoggle",i),Ue("toggle",i),Qs(i,"popover",u);break;case"xlinkActuate":on(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":on(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":on(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":on(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":on(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":on(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":on(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":on(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":on(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Qs(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=nm.get(o)||o,Qs(i,o,u))}}function Mp(i,r,o,u,f,m){switch(o){case"style":zl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?ni(i,u):(typeof u=="number"||typeof u=="bigint")&&ni(i,""+u);break;case"onScroll":u!=null&&Ue("scroll",i);break;case"onScrollEnd":u!=null&&Ue("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Kh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Za.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Pt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Qs(i,o,u)}}}function hn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",i),Ue("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(i,r,m,E,o,null)}}f&&ot(i,r,"srcSet",o.srcSet,o,null),u&&ot(i,r,"src",o.src,o,null);return;case"input":Ue("invalid",i);var S=m=E=f=null,I=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":I=K;break;case"defaultChecked":q=K;break;case"value":m=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:ot(i,r,u,K,o,null)}}Zr(i,m,S,I,q,E,f,!1),no(i);return;case"select":Ue("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:ot(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?as(i,!!u,r,!1):o!=null&&as(i,!!u,o,!0);return;case"textarea":Ue("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ot(i,r,E,S,o,null)}Jr(i,u,f,m),no(i);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ot(i,r,I,u,o,null)}return;case"dialog":Ue("beforetoggle",i),Ue("toggle",i),Ue("cancel",i),Ue("close",i);break;case"iframe":case"object":Ue("load",i);break;case"video":case"audio":for(u=0;u<wu.length;u++)Ue(wu[u],i);break;case"image":Ue("error",i),Ue("load",i);break;case"details":Ue("toggle",i);break;case"embed":case"source":case"link":Ue("error",i),Ue("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(i,r,q,u,o,null)}return;default:if(ql(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&Mp(i,r,K,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ot(i,r,S,u,o,null))}function bR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,I=null,q=null,K=null;for(H in o){var W=o[H];if(o.hasOwnProperty(H)&&W!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=W;default:u.hasOwnProperty(H)||ot(i,r,H,null,u,W)}}for(var B in u){var H=u[B];if(W=o[B],u.hasOwnProperty(B)&&(H!=null||W!=null))switch(B){case"type":m=H;break;case"name":f=H;break;case"checked":q=H;break;case"defaultChecked":K=H;break;case"value":E=H;break;case"defaultValue":S=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==W&&ot(i,r,B,H,u,W)}}Hn(i,E,S,I,q,K,m,f);return;case"select":H=E=S=B=null;for(m in o)if(I=o[m],o.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":H=I;default:u.hasOwnProperty(m)||ot(i,r,m,null,u,I)}for(f in u)if(m=u[f],I=o[f],u.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":B=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==I&&ot(i,r,f,m,u,I)}r=S,o=E,u=H,B!=null?as(i,!!o,B,!1):!!u!=!!o&&(r!=null?as(i,!!o,r,!0):as(i,!!o,o?[]:"",!1));return;case"textarea":H=B=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ot(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":B=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ot(i,r,E,f,u,m)}rt(i,B,H);return;case"option":for(var Se in o)if(B=o[Se],o.hasOwnProperty(Se)&&B!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":i.selected=!1;break;default:ot(i,r,Se,null,u,B)}for(I in u)if(B=u[I],H=o[I],u.hasOwnProperty(I)&&B!==H&&(B!=null||H!=null))switch(I){case"selected":i.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:ot(i,r,I,B,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in o)B=o[ye],o.hasOwnProperty(ye)&&B!=null&&!u.hasOwnProperty(ye)&&ot(i,r,ye,null,u,B);for(q in u)if(B=u[q],H=o[q],u.hasOwnProperty(q)&&B!==H&&(B!=null||H!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:ot(i,r,q,B,u,H)}return;default:if(ql(r)){for(var lt in o)B=o[lt],o.hasOwnProperty(lt)&&B!==void 0&&!u.hasOwnProperty(lt)&&Mp(i,r,lt,void 0,u,B);for(K in u)B=u[K],H=o[K],!u.hasOwnProperty(K)||B===H||B===void 0&&H===void 0||Mp(i,r,K,B,u,H);return}}for(var L in o)B=o[L],o.hasOwnProperty(L)&&B!=null&&!u.hasOwnProperty(L)&&ot(i,r,L,null,u,B);for(W in u)B=u[W],H=o[W],!u.hasOwnProperty(W)||B===H||B==null&&H==null||ot(i,r,W,B,u,H)}var kp=null,Pp=null;function $h(i){return i.nodeType===9?i:i.ownerDocument}function q0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Vp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lp=null;function SR(){var i=window.event;return i&&i.type==="popstate"?i===Lp?!1:(Lp=i,!0):(Lp=null,!1)}var F0=typeof setTimeout=="function"?setTimeout:void 0,wR=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,AR=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(i){return H0.resolve(null).then(i).catch(CR)}:F0;function CR(i){setTimeout(function(){throw i})}function cr(i){return i==="head"}function G0(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Cu(E.documentElement),o&2&&Cu(E.body),o&4)for(o=E.head,Cu(o),E=o.firstChild;E;){var S=E.nextSibling,I=E.nodeName;E[Kr]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),ku(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);ku(r)}function Up(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Up(o),Gs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function RR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Kr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=Ei(i.nextSibling),i===null)break}return null}function IR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ei(i.nextSibling),i===null))return null;return i}function jp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function NR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var zp=null;function Q0(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function Y0(i,r,o){switch(r=$h(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Cu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Gs(i)}var fi=new Map,K0=new Set;function Xh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var As=re.d;re.d={f:xR,r:DR,D:OR,C:MR,L:kR,m:PR,X:LR,S:VR,M:UR};function xR(){var i=As.f(),r=qh();return i||r}function DR(i){var r=Ii(i);r!==null&&r.tag===5&&r.type==="form"?mE(r):As.r(i)}var Uo=typeof document>"u"?null:document;function $0(i,r,o){var u=Uo;if(u&&typeof r=="string"&&r){var f=Vt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),K0.has(f)||(K0.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),hn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function OR(i){As.D(i),$0("dns-prefetch",i,null)}function MR(i,r){As.C(i,r),$0("preconnect",i,r)}function kR(i,r,o){As.L(i,r,o);var u=Uo;if(u&&i&&r){var f='link[rel="preload"][as="'+Vt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Vt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Vt(o.imageSizes)+'"]')):f+='[href="'+Vt(i)+'"]';var m=f;switch(r){case"style":m=jo(i);break;case"script":m=zo(i)}fi.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),fi.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Ru(m))||r==="script"&&u.querySelector(Iu(m))||(r=u.createElement("link"),hn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function PR(i,r){As.m(i,r);var o=Uo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Vt(u)+'"][href="'+Vt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=zo(i)}if(!fi.has(m)&&(i=y({rel:"modulepreload",href:i},r),fi.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Iu(m)))return}u=o.createElement("link"),hn(u,"link",i),Nt(u),o.head.appendChild(u)}}}function VR(i,r,o){As.S(i,r,o);var u=Uo;if(u&&i){var f=Rn(u).hoistableStyles,m=jo(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(Ru(m)))S.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=fi.get(m))&&qp(i,o);var I=E=u.createElement("link");Nt(I),hn(I,"link",i),I._p=new Promise(function(q,K){I.onload=q,I.onerror=K}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Wh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function LR(i,r){As.X(i,r);var o=Uo;if(o&&i){var u=Rn(o).hoistableScripts,f=zo(i),m=u.get(f);m||(m=o.querySelector(Iu(f)),m||(i=y({src:i,async:!0},r),(r=fi.get(f))&&Bp(i,r),m=o.createElement("script"),Nt(m),hn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function UR(i,r){As.M(i,r);var o=Uo;if(o&&i){var u=Rn(o).hoistableScripts,f=zo(i),m=u.get(f);m||(m=o.querySelector(Iu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=fi.get(f))&&Bp(i,r),m=o.createElement("script"),Nt(m),hn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function X0(i,r,o,u){var f=(f=be.current)?Xh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=jo(o.href),o=Rn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=jo(o.href);var m=Rn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Ru(i)))&&!m._p&&(E.instance=m,E.state.loading=5),fi.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},fi.set(i,o),m||jR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=zo(o),o=Rn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function jo(i){return'href="'+Vt(i)+'"'}function Ru(i){return'link[rel="stylesheet"]['+i+"]"}function W0(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function jR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),hn(r,"link",o),Nt(r),i.head.appendChild(r))}function zo(i){return'[src="'+Vt(i)+'"]'}function Iu(i){return"script[async]"+i}function Z0(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Vt(o.href)+'"]');if(u)return r.instance=u,Nt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Nt(u),hn(u,"style",f),Wh(u,o.precedence,i),r.instance=u;case"stylesheet":f=jo(o.href);var m=i.querySelector(Ru(f));if(m)return r.state.loading|=4,r.instance=m,Nt(m),m;u=W0(o),(f=fi.get(f))&&qp(u,f),m=(i.ownerDocument||i).createElement("link"),Nt(m);var E=m;return E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),hn(m,"link",u),r.state.loading|=4,Wh(m,o.precedence,i),r.instance=m;case"script":return m=zo(o.src),(f=i.querySelector(Iu(m)))?(r.instance=f,Nt(f),f):(u=o,(f=fi.get(m))&&(u=y({},o),Bp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Nt(f),hn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Wh(u,o.precedence,i));return r.instance}function Wh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function qp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Bp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Zh=null;function J0(i,r,o){if(Zh===null){var u=new Map,f=Zh=new Map;f.set(o,u)}else f=Zh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Kr]||m[Ht]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function eT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function zR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function tT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Nu=null;function qR(){}function BR(i,r,o){if(Nu===null)throw Error(s(475));var u=Nu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=jo(o.href),m=i.querySelector(Ru(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Jh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Nt(m);return}m=i.ownerDocument||i,o=W0(o),(f=fi.get(f))&&qp(o,f),m=m.createElement("link"),Nt(m);var E=m;E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),hn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Jh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function FR(){if(Nu===null)throw Error(s(475));var i=Nu;return i.stylesheets&&i.count===0&&Fp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Fp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Jh(){if(this.count--,this.count===0){if(this.stylesheets)Fp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var ef=null;function Fp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,ef=new Map,r.forEach(HR,i),ef=null,Jh.call(i))}function HR(i,r){if(!(r.state.loading&4)){var o=ef.get(i);if(o)var u=o.get(null);else{o=new Map,ef.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Jh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var xu={$$typeof:le,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function GR(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ts(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.hiddenUpdates=ts(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function nT(i,r,o,u,f,m,E,S,I,q,K,W){return i=new GR(i,r,o,E,S,I,q,W),r=1,m===!0&&(r|=24),m=Qn(3,null,null,r),i.current=m,m.stateNode=i,r=wm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Im(m),i}function iT(i){return i?(i=_o,i):_o}function sT(i,r,o,u,f,m){f=iT(f),u.context===null?u.context=f:u.pendingContext=f,u=Ws(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Zs(i,u,r),o!==null&&(Wn(o,i,r),au(o,i,r))}function rT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Hp(i,r){rT(i,r),(i=i.alternate)&&rT(i,r)}function aT(i){if(i.tag===13){var r=go(i,67108864);r!==null&&Wn(r,i,67108864),Hp(i,67108864)}}var tf=!0;function QR(i,r,o,u){var f=Y.T;Y.T=null;var m=re.p;try{re.p=2,Gp(i,r,o,u)}finally{re.p=m,Y.T=f}}function YR(i,r,o,u){var f=Y.T;Y.T=null;var m=re.p;try{re.p=8,Gp(i,r,o,u)}finally{re.p=m,Y.T=f}}function Gp(i,r,o,u){if(tf){var f=Qp(u);if(f===null)Op(i,r,u,nf,o),lT(i,u);else if($R(f,i,r,o,u))u.stopPropagation();else if(lT(i,u),r&4&&-1<KR.indexOf(i)){for(;f!==null;){var m=Ii(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=pi(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var I=1<<31-_n(E);S.entanglements[1]|=I,E&=~I}Bi(m),(et&6)===0&&(jh=It()+500,Su(0))}}break;case 13:S=go(m,2),S!==null&&Wn(S,m,2),qh(),Hp(m,2)}if(m=Qp(u),m===null&&Op(i,r,u,nf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Op(i,r,u,null,o)}}function Qp(i){return i=ii(i),Yp(i)}var nf=null;function Yp(i){if(nf=null,i=is(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return nf=i,null}function oT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xd()){case Il:return 2;case Ka:return 8;case Fr:case Wd:return 32;case $a:return 268435456;default:return 32}default:return 32}}var Kp=!1,hr=null,fr=null,dr=null,Du=new Map,Ou=new Map,mr=[],KR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lT(i,r){switch(i){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Du.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ou.delete(r.pointerId)}}function Mu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ii(r),r!==null&&aT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function $R(i,r,o,u,f){switch(r){case"focusin":return hr=Mu(hr,i,r,o,u,f),!0;case"dragenter":return fr=Mu(fr,i,r,o,u,f),!0;case"mouseover":return dr=Mu(dr,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Du.set(m,Mu(Du.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Ou.set(m,Mu(Ou.get(m)||null,i,r,o,u,f)),!0}return!1}function uT(i){var r=is(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,qc(i.priority,function(){if(o.tag===13){var u=Xn();u=Bs(u);var f=go(o,u);f!==null&&Wn(f,o,u),Hp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Qp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);os=u,o.target.dispatchEvent(u),os=null}else return r=Ii(o),r!==null&&aT(r),i.blockedOn=o,!1;r.shift()}return!0}function cT(i,r,o){sf(i)&&o.delete(r)}function XR(){Kp=!1,hr!==null&&sf(hr)&&(hr=null),fr!==null&&sf(fr)&&(fr=null),dr!==null&&sf(dr)&&(dr=null),Du.forEach(cT),Ou.forEach(cT)}function rf(i,r){i.blockedOn===r&&(i.blockedOn=null,Kp||(Kp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,XR)))}var af=null;function hT(i){af!==i&&(af=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){af===i&&(af=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Yp(u||o)===null)continue;break}var m=Ii(o);m!==null&&(i.splice(r,3),r-=3,Ym(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function ku(i){function r(I){return rf(I,i)}hr!==null&&rf(hr,i),fr!==null&&rf(fr,i),dr!==null&&rf(dr,i),Du.forEach(r),Ou.forEach(r);for(var o=0;o<mr.length;o++){var u=mr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<mr.length&&(o=mr[0],o.blockedOn===null);)uT(o),o.blockedOn===null&&mr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Pt]||null;if(typeof m=="function")E||hT(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Pt]||null)S=E.formAction;else if(Yp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),hT(o)}}}function $p(i){this._internalRoot=i}of.prototype.render=$p.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Xn();sT(o,u,i,r,null,null)},of.prototype.unmount=$p.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;sT(i.current,2,null,i,null,null),qh(),r[ti]=null}};function of(i){this._internalRoot=i}of.prototype.unstable_scheduleHydration=function(i){if(i){var r=Fs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<mr.length&&r!==0&&r<mr[o].priority;o++);mr.splice(o,0,i),o===0&&uT(i)}};var fT=e.version;if(fT!=="19.1.1")throw Error(s(527,fT,"19.1.1"));re.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var WR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lf.isDisabled&&lf.supportsFiber)try{St=lf.inject(WR),Je=lf}catch{}}return Vu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=IE,m=NE,E=xE,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=nT(i,1,!1,null,null,o,u,f,m,E,S,null),i[ti]=r.current,Dp(i),new $p(r)},Vu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=IE,E=NE,S=xE,I=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=nT(i,1,!0,r,o??null,u,f,m,E,S,I,q),r.context=iT(null),o=r.current,u=Xn(),u=Bs(u),f=Ws(u),f.callback=null,Zs(o,f,u),o=u,r.current.lanes=o,ns(r,o),Bi(r),i[ti]=r.current,Dp(i),new of(r)},Vu.version="19.1.1",Vu}var bT;function oI(){if(bT)return Zp.exports;bT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Zp.exports=aI(),Zp.exports}var lI=oI();const uI=()=>{};var ST={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=function(n,e){if(!n)throw gl(e)},gl=function(n){return new Error("Firebase Database ("+FS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},cI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},p_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let b=(d&15)<<2|g>>6,x=g&63;p||(x=64,c||(b=64)),s.push(t[y],t[T],t[b],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(HS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new hI;const b=l<<2|d>>4;if(s.push(b),g!==64){const x=d<<4&240|g>>2;if(s.push(x),T!==64){const U=g<<6&192|T;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GS=function(n){const e=HS(n);return p_.encodeByteArray(e,!0)},If=function(n){return GS(n).replace(/\./g,"")},Nf=function(n){try{return p_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n){return QS(void 0,n)}function QS(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!dI(t)||(n[t]=QS(n[t],e[t]));return n}function dI(n){return n!=="__proto__"}/**
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
 */function mI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pI=()=>mI().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof ST>"u")return;const n=ST.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_I=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nf(n[1]);return e&&JSON.parse(e)},fd=()=>{try{return uI()||pI()||gI()||_I()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},YS=n=>fd()?.emulatorHosts?.[n],KS=n=>{const e=YS(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},$S=()=>fd()?.config,XS=n=>fd()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Lr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function g_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function WS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[If(JSON.stringify(t)),If(JSON.stringify(c)),""].join(".")}const Gu={};function yI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Gu))Gu[e]?n.emulator.push(e):n.prod.push(e);return n}function vI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let wT=!1;function __(n,e){if(typeof window>"u"||typeof document>"u"||!Lr(window.location.host)||Gu[n]===e||Gu[n]||wT)return;Gu[n]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",l=yI().prod.length>0;function c(){const b=document.getElementById(s);b&&b.remove()}function d(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function p(b,x){b.setAttribute("width","24"),b.setAttribute("id",x),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function g(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{wT=!0,c()},b}function y(b,x){b.setAttribute("id",x),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=vI(s),x=t("text"),U=document.getElementById(x)||document.createElement("span"),Q=t("learnmore"),F=document.getElementById(Q)||document.createElement("a"),ue=t("preprendIcon"),te=document.getElementById(ue)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const le=b.element;d(le),y(F,Q);const me=g();p(te,ue),le.append(te,U,F,me),document.body.appendChild(le)}l?(U.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function wn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wn())}function EI(){const n=fd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ZS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SI(){const n=wn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wI(){return FS.NODE_ADMIN===!0}function AI(){return!EI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CI(){try{return typeof indexedDB=="object"}catch{return!1}}function RI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="FirebaseError";class zs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=II,Object.setPrototypeOf(this,zs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ec.prototype.create)}}class Ec{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?NI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new zs(a,d,s)}}function NI(n,e){return n.replace(xI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const xI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n){return JSON.parse(n)}function an(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=sc(Nf(l[0])||""),t=sc(Nf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},DI=function(n){const e=JS(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},OI=function(n){const e=JS(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function xf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Df(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Xi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(AT(l)&&AT(c)){if(!Xi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function AT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const b=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(b<<1|b>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const b=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=b}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function kI(n,e){const t=new PI(n,e);return t.subscribe.bind(t)}class PI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");VI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=ng),a.error===void 0&&(a.error=ng),a.complete===void 0&&(a.complete=ng);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ng(){}function nl(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,se(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},dd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function dt(n){return n&&n._delegate?n._delegate:n}class Ir{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sa="[DEFAULT]";/**
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
 */class UI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Rs;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zI(e))try{this.getOrInitializeService({instanceIdentifier:Sa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Sa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sa){return this.instances.has(e)}getOptions(e=Sa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Sa){return this.component?this.component.multipleInstances?e:Sa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jI(n){return n===Sa?void 0:n}function zI(n){return n.instantiationMode==="EAGER"}/**
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
 */class qI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new UI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(je||(je={}));const BI={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},FI=je.INFO,HI={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},GI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=HI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=FI,this._logHandler=GI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const QI=(n,e)=>e.some(t=>n instanceof t);let CT,RT;function YI(){return CT||(CT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KI(){return RT||(RT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,Ag=new WeakMap,tw=new WeakMap,ig=new WeakMap,v_=new WeakMap;function $I(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Tr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&ew.set(t,n)}).catch(()=>{}),v_.set(e,n),e}function XI(n){if(Ag.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Ag.set(n,e)}let Cg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ag.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function WI(n){Cg=n(Cg)}function ZI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(sg(this),e,...t);return tw.set(s,e.sort?e.sort():[e]),Tr(s)}:KI().includes(n)?function(...e){return n.apply(sg(this),e),Tr(ew.get(this))}:function(...e){return Tr(n.apply(sg(this),e))}}function JI(n){return typeof n=="function"?ZI(n):(n instanceof IDBTransaction&&XI(n),QI(n,YI())?new Proxy(n,Cg):n)}function Tr(n){if(n instanceof IDBRequest)return $I(n);if(ig.has(n))return ig.get(n);const e=JI(n);return e!==n&&(ig.set(n,e),v_.set(e,n)),e}const sg=n=>v_.get(n);function eN(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Tr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Tr(c.result),p.oldVersion,p.newVersion,Tr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const tN=["get","getKey","getAll","getAllKeys","count"],nN=["put","add","delete","clear"],rg=new Map;function IT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rg.get(e))return rg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=nN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||tN.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return rg.set(e,l),l}WI(n=>({...n,get:(e,t,s)=>IT(e,t)||n.get(e,t,s),has:(e,t)=>!!IT(e,t)||n.has(e,t)}));/**
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
 */class iN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function sN(n){return n.getComponent()?.type==="VERSION"}const Rg="@firebase/app",NT="0.14.1";/**
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
 */const ks=new md("@firebase/app"),rN="@firebase/app-compat",aN="@firebase/analytics-compat",oN="@firebase/analytics",lN="@firebase/app-check-compat",uN="@firebase/app-check",cN="@firebase/auth",hN="@firebase/auth-compat",fN="@firebase/database",dN="@firebase/data-connect",mN="@firebase/database-compat",pN="@firebase/functions",gN="@firebase/functions-compat",_N="@firebase/installations",yN="@firebase/installations-compat",vN="@firebase/messaging",EN="@firebase/messaging-compat",TN="@firebase/performance",bN="@firebase/performance-compat",SN="@firebase/remote-config",wN="@firebase/remote-config-compat",AN="@firebase/storage",CN="@firebase/storage-compat",RN="@firebase/firestore",IN="@firebase/ai",NN="@firebase/firestore-compat",xN="firebase",DN="12.1.0";/**
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
 */const Ig="[DEFAULT]",ON={[Rg]:"fire-core",[rN]:"fire-core-compat",[oN]:"fire-analytics",[aN]:"fire-analytics-compat",[uN]:"fire-app-check",[lN]:"fire-app-check-compat",[cN]:"fire-auth",[hN]:"fire-auth-compat",[fN]:"fire-rtdb",[dN]:"fire-data-connect",[mN]:"fire-rtdb-compat",[pN]:"fire-fn",[gN]:"fire-fn-compat",[_N]:"fire-iid",[yN]:"fire-iid-compat",[vN]:"fire-fcm",[EN]:"fire-fcm-compat",[TN]:"fire-perf",[bN]:"fire-perf-compat",[SN]:"fire-rc",[wN]:"fire-rc-compat",[AN]:"fire-gcs",[CN]:"fire-gcs-compat",[RN]:"fire-fst",[NN]:"fire-fst-compat",[IN]:"fire-vertex","fire-js":"fire-js",[xN]:"fire-js-all"};/**
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
 */const Of=new Map,MN=new Map,Ng=new Map;function xT(n,e){try{n.container.addComponent(e)}catch(t){ks.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ma(n){const e=n.name;if(Ng.has(e))return ks.debug(`There were multiple attempts to register component ${e}.`),!1;Ng.set(e,n);for(const t of Of.values())xT(t,n);for(const t of MN.values())xT(t,n);return!0}function pd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const kN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new Ec("app","Firebase",kN);/**
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
 */class PN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const Ba=DN;function nw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ig,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw br.create("bad-app-name",{appName:String(a)});if(t||(t=$S()),!t)throw br.create("no-options");const l=Of.get(a);if(l){if(Xi(t,l.options)&&Xi(s,l.config))return l;throw br.create("duplicate-app",{appName:a})}const c=new qI(a);for(const p of Ng.values())c.addComponent(p);const d=new PN(t,s,c);return Of.set(a,d),d}function E_(n=Ig){const e=Of.get(n);if(!e&&n===Ig&&$S())return nw();if(!e)throw br.create("no-app",{appName:n});return e}function Hi(n,e,t){let s=ON[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ks.warn(c.join(" "));return}Ma(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const VN="firebase-heartbeat-database",LN=1,rc="firebase-heartbeat-store";let ag=null;function iw(){return ag||(ag=eN(VN,LN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rc)}catch(t){console.warn(t)}}}}).catch(n=>{throw br.create("idb-open",{originalErrorMessage:n.message})})),ag}async function UN(n){try{const t=(await iw()).transaction(rc),s=await t.objectStore(rc).get(sw(n));return await t.done,s}catch(e){if(e instanceof zs)ks.warn(e.message);else{const t=br.create("idb-get",{originalErrorMessage:e?.message});ks.warn(t.message)}}}async function DT(n,e){try{const s=(await iw()).transaction(rc,"readwrite");await s.objectStore(rc).put(e,sw(n)),await s.done}catch(t){if(t instanceof zs)ks.warn(t.message);else{const s=br.create("idb-set",{originalErrorMessage:t?.message});ks.warn(s.message)}}}function sw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jN=1024,zN=30;class qN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=OT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>zN){const a=HN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ks.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=OT(),{heartbeatsToSend:t,unsentEntries:s}=BN(this._heartbeatsCache.heartbeats),a=If(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return ks.warn(e),""}}}function OT(){return new Date().toISOString().substring(0,10)}function BN(n,e=jN){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),MT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),MT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class FN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CI()?RI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await UN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return DT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return DT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function MT(n){return If(JSON.stringify({version:2,heartbeats:n})).length}function HN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function GN(n){Ma(new Ir("platform-logger",e=>new iN(e),"PRIVATE")),Ma(new Ir("heartbeat",e=>new qN(e),"PRIVATE")),Hi(Rg,NT,n),Hi(Rg,NT,"esm2020"),Hi("fire-js","")}GN("");var QN="firebase",YN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hi(QN,YN,"app");function rw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KN=rw,aw=new Ec("auth","Firebase",rw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new md("@firebase/auth");function $N(n,...e){Mf.logLevel<=je.WARN&&Mf.warn(`Auth (${Ba}): ${n}`,...e)}function _f(n,...e){Mf.logLevel<=je.ERROR&&Mf.error(`Auth (${Ba}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n,...e){throw b_(n,...e)}function wi(n,...e){return b_(n,...e)}function T_(n,e,t){const s={...KN(),[e]:t};return new Ec("auth","Firebase",s).create(e,{appName:n.name})}function Sr(n){return T_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function XN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Wi(n,"argument-error"),T_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return aw.create(n,...e)}function Ae(n,e,...t){if(!n)throw b_(e,...t)}function Ns(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _f(e),new Error(e)}function Ps(n,e){n||Ns(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){return typeof self<"u"&&self.location?.href||""}function WN(){return kT()==="http:"||kT()==="https:"}function kT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WN()||bI()||"connection"in navigator)?navigator.onLine:!0}function JN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ps(t>e,"Short delay should be less than long delay!"),this.isMobile=y_()||ZS()}get(){return ZN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n,e){Ps(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ns("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ns("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ns("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nx=new Tc(3e4,6e4);function gd(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yl(n,e,t,s,a={}){return lw(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=_l({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return TI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Lr(n.emulatorConfig.host)&&(g.credentials="include"),ow.fetch()(await cw(n,n.config.apiHost,t,d),g)})}async function lw(n,e,t){n._canInitEmulator=!1;const s={...ex,...e};try{const a=new ix(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw uf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw uf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw uf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw uf(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw T_(n,y,g);Wi(n,y)}}catch(a){if(a instanceof zs)throw a;Wi(n,"network-request-failed",{message:String(a)})}}async function uw(n,e,t,s,a={}){const l=await yl(n,e,t,s,a);return"mfaPendingCredential"in l&&Wi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function cw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?S_(n.config,a):`${n.config.apiScheme}://${a}`;return tx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class ix{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(wi(this.auth,"network-request-failed")),nx.get())})}}function uf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=wi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(n,e){return yl(n,"POST","/v1/accounts:delete",e)}async function kf(n,e){return yl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rx(n,e=!1){const t=dt(n),s=await t.getIdToken(e),a=w_(s);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Qu(og(a.auth_time)),issuedAtTime:Qu(og(a.iat)),expirationTime:Qu(og(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function og(n){return Number(n)*1e3}function w_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return _f("JWT malformed, contained fewer than 3 sections"),null;try{const a=Nf(t);return a?JSON.parse(a):(_f("Failed to decode base64 JWT payload"),null)}catch(a){return _f("Caught error parsing JWT payload as JSON",a?.toString()),null}}function PT(n){const e=w_(n);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof zs&&ax(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ax({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qu(this.lastLoginAt),this.creationTime=Qu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pf(n){const e=n.auth,t=await n.getIdToken(),s=await ac(n,kf(e,{idToken:t}));Ae(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?hw(a.providerUserInfo):[],c=ux(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Dg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function lx(n){const e=dt(n);await Pf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ux(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function hw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(n,e){const t=await lw(n,{},async()=>{const s=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await cw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Lr(n.emulatorConfig.host)&&(p.credentials="include"),ow.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hx(n,e){return yl(n,"POST","/v2/accounts:revokeToken",gd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=PT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await cx(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Ko;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ko,this.toJSON())}_performRefresh(){return Ns("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n,e){Ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Dg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ac(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rx(this,e)}reload(){return lx(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Pf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await ac(this,sx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:b,isAnonymous:x,providerData:U,stsTokenManager:Q}=t;Ae(T&&Q,e,"internal-error");const F=Ko.fromJSON(this.name,Q);Ae(typeof T=="string",e,"internal-error"),gr(s,e.name),gr(a,e.name),Ae(typeof b=="boolean",e,"internal-error"),Ae(typeof x=="boolean",e,"internal-error"),gr(l,e.name),gr(c,e.name),gr(d,e.name),gr(p,e.name),gr(g,e.name),gr(y,e.name);const ue=new bi({uid:T,auth:e,email:a,emailVerified:b,displayName:s,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:F,createdAt:g,lastLoginAt:y});return U&&Array.isArray(U)&&(ue.providerData=U.map(te=>({...te}))),p&&(ue._redirectEventId=p),ue}static async _fromIdTokenResponse(e,t,s=!1){const a=new Ko;a.updateFromServerResponse(t);const l=new bi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Pf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?hw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Ko;d.updateFromIdToken(s);const p=new bi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Dg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new Map;function xs(n){Ps(n instanceof Function,"Expected a class definition");let e=VT.get(n);return e?(Ps(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,VT.set(n,e),e)}/**
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
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fw.type="NONE";const LT=fw;/**
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
 */function yf(n,e,t){return`firebase:${n}:${e}:${t}`}class $o{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=yf(this.userKey,a.apiKey,l),this.fullPersistenceKey=yf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await kf(this.auth,{idToken:e}).catch(()=>{});return t?bi._fromGetAccountInfoResponse(this.auth,t,e):null}return bi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new $o(xs(LT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||xs(LT);const c=yf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const b=await kf(e,{idToken:y}).catch(()=>{});if(!b)break;T=await bi._fromGetAccountInfoResponse(e,b,y)}else T=bi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new $o(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new $o(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yw(e))return"Blackberry";if(vw(e))return"Webos";if(mw(e))return"Safari";if((e.includes("chrome/")||pw(e))&&!e.includes("edge/"))return"Chrome";if(_w(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function dw(n=wn()){return/firefox\//i.test(n)}function mw(n=wn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pw(n=wn()){return/crios\//i.test(n)}function gw(n=wn()){return/iemobile/i.test(n)}function _w(n=wn()){return/android/i.test(n)}function yw(n=wn()){return/blackberry/i.test(n)}function vw(n=wn()){return/webos/i.test(n)}function A_(n=wn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fx(n=wn()){return A_(n)&&!!window.navigator?.standalone}function dx(){return SI()&&document.documentMode===10}function Ew(n=wn()){return A_(n)||_w(n)||vw(n)||yw(n)||/windows phone/i.test(n)||gw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(n,e=[]){let t;switch(n){case"Browser":t=UT(wn());break;case"Worker":t=`${UT(wn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ba}/${s}`}/**
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
 */class mx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function px(n,e={}){return yl(n,"GET","/v2/passwordPolicy",gd(n,e))}/**
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
 */const gx=6;class _x{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??gx,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jT(this),this.idTokenSubscription=new jT(this),this.beforeStateQueue=new mx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xs(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await $o.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await kf(this,{idToken:e}),s=await bi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Zn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Sr(this));const t=e?dt(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await px(this),t=new _x(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ec("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hx(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xs(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await $o.create(this,[xs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&$N(`Error while retrieving App Check token: ${e.error}`),e?.token}}function bc(n){return dt(n)}class jT{constructor(e){this.auth=e,this.observer=null,this.addObserver=kI(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vx(n){C_=n}function Ex(n){return C_.loadJS(n)}function Tx(){return C_.gapiScript}function bx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(n,e){const t=pd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Xi(l,e??{}))return a;Wi(a,"already-initialized")}return t.initialize({options:e})}function wx(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(xs);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function Ax(n,e,t){const s=bc(n);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=bw(e),{host:c,port:d}=Cx(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(Xi(g,s.config.emulator)&&Xi(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Lr(c)?(g_(`${l}//${c}${p}`),__("Auth",!0)):Rx()}function bw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Cx(n){const e=bw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:zT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:zT(c)}}}function zT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ns("not implemented")}_getIdTokenResponse(e){return Ns("not implemented")}_linkToIdToken(e,t){return Ns("not implemented")}_getReauthenticationResolver(e){return Ns("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(n,e){return uw(n,"POST","/v1/accounts:signInWithIdp",gd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="http://localhost";class ka extends Sw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ka(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new ka(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Xo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Xo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xo(e,t)}buildRequest(){const e={requestUri:Ix,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_l(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sc extends R_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Sc{constructor(){super("facebook.com")}static credential(e){return ka._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Sc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ka._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Is.credential(t,s)}catch{return null}}}Is.GOOGLE_SIGN_IN_METHOD="google.com";Is.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Sc{constructor(){super("github.com")}static credential(e){return ka._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Sc{constructor(){super("twitter.com")}static credential(e,t){return ka._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return vr.credential(t,s)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await bi._fromIdTokenResponse(e,s,a),c=qT(s);return new Pa({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=qT(s);return new Pa({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function qT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends zs{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Vf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Vf(e,t,s,a)}}function ww(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Vf._fromErrorAndOperation(n,l,e,s):l})}async function Nx(n,e,t=!1){const s=await ac(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Pa._forOperation(n,"link",s)}/**
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
 */async function xx(n,e,t=!1){const{auth:s}=n;if(Zn(s.app))return Promise.reject(Sr(s));const a="reauthenticate";try{const l=await ac(n,ww(s,a,e,n),t);Ae(l.idToken,s,"internal-error");const c=w_(l.idToken);Ae(c,s,"internal-error");const{sub:d}=c;return Ae(n.uid===d,s,"user-mismatch"),Pa._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Wi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(n,e,t=!1){if(Zn(n.app))return Promise.reject(Sr(n));const s="signIn",a=await ww(n,s,e),l=await Pa._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(n,e){return uw(n,"POST","/v1/accounts:signInWithCustomToken",gd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(n,e){if(Zn(n.app))return Promise.reject(Sr(n));const t=bc(n),s=await Ox(t,{token:e,returnSecureToken:!0}),a=await Pa._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function kx(n,e,t,s){return dt(n).onIdTokenChanged(e,t,s)}function Px(n,e,t){return dt(n).beforeAuthStateChanged(e,t)}function Vx(n,e,t,s){return dt(n).onAuthStateChanged(e,t,s)}function Lx(n){return dt(n).signOut()}const Lf="__sak";/**
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
 */class Aw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lf,"1"),this.storage.removeItem(Lf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=1e3,jx=10;class Cw extends Aw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);dx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,jx):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Ux)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cw.type="LOCAL";const zx=Cw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends Aw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rw.type="SESSION";const Iw=Rw;/**
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
 */function qx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new _d(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await qx(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_d.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Bx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=I_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const b=T;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(b.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){return window}function Fx(n){Gi().location.href=n}/**
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
 */function Nw(){return typeof Gi().WorkerGlobalScope<"u"&&typeof Gi().importScripts=="function"}async function Hx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gx(){return navigator?.serviceWorker?.controller||null}function Qx(){return Nw()?self:null}/**
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
 */const xw="firebaseLocalStorageDb",Yx=1,Uf="firebaseLocalStorage",Dw="fbase_key";class wc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yd(n,e){return n.transaction([Uf],e?"readwrite":"readonly").objectStore(Uf)}function Kx(){const n=indexedDB.deleteDatabase(xw);return new wc(n).toPromise()}function Og(){const n=indexedDB.open(xw,Yx);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Uf,{keyPath:Dw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Uf)?e(s):(s.close(),await Kx(),e(await Og()))})})}async function BT(n,e,t){const s=yd(n,!0).put({[Dw]:e,value:t});return new wc(s).toPromise()}async function $x(n,e){const t=yd(n,!1).get(e),s=await new wc(t).toPromise();return s===void 0?null:s.value}function FT(n,e){const t=yd(n,!0).delete(e);return new wc(t).toPromise()}const Xx=800,Wx=3;class Ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Og(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Wx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_d._getInstance(Qx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Hx(),!this.activeServiceWorker)return;this.sender=new Bx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Og();return await BT(e,Lf,"1"),await FT(e,Lf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>BT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>$x(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>FT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=yd(a,!1).getAll();return new wc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ow.type="LOCAL";const Zx=Ow;new Tc(3e4,6e4);/**
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
 */function Mw(n,e){return e?xs(e):(Ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class N_ extends Sw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Jx(n){return Dx(n.auth,new N_(n),n.bypassAuthState)}function e2(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),xx(t,new N_(n),n.bypassAuthState)}async function t2(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),Nx(t,new N_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jx;case"linkViaPopup":case"linkViaRedirect":return t2;case"reauthViaPopup":case"reauthViaRedirect":return e2;default:Wi(this.auth,"internal-error")}}resolve(e){Ps(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ps(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=new Tc(2e3,1e4);async function i2(n,e,t){if(Zn(n.app))return Promise.reject(wi(n,"operation-not-supported-in-this-environment"));const s=bc(n);XN(n,e,R_);const a=Mw(s,t);return new Aa(s,"signInViaPopup",e,a).executeNotNull()}class Aa extends kw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Aa.currentPopupAction&&Aa.currentPopupAction.cancel(),Aa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){Ps(this.filter.length===1,"Popup operations only handle one event");const e=I_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(wi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Aa.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n2.get())};e()}}Aa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="pendingRedirect",vf=new Map;class r2 extends kw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=vf.get(this.auth._key());if(!e){try{const s=await a2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}vf.set(this.auth._key(),e)}return this.bypassAuthState||vf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a2(n,e){const t=u2(e),s=l2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function o2(n,e){vf.set(n._key(),e)}function l2(n){return xs(n._redirectPersistence)}function u2(n){return yf(s2,n.config.apiKey,n.name)}async function c2(n,e,t=!1){if(Zn(n.app))return Promise.reject(Sr(n));const s=bc(n),a=Mw(s,e),c=await new r2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=600*1e3;class f2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Pw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(wi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h2&&this.cachedEventUids.clear(),this.cachedEventUids.has(HT(e))}saveEventToCache(e){this.cachedEventUids.add(HT(e)),this.lastProcessedEventTime=Date.now()}}function HT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function d2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2(n,e={}){return yl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g2=/^https?/;async function _2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await m2(n);for(const t of e)try{if(y2(t))return}catch{}Wi(n,"unauthorized-domain")}function y2(n){const e=xg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!g2.test(t))return!1;if(p2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const v2=new Tc(3e4,6e4);function GT(){const n=Gi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function E2(n){return new Promise((e,t)=>{function s(){GT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{GT(),t(wi(n,"network-request-failed"))},timeout:v2.get()})}if(Gi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Gi().gapi?.load)s();else{const a=bx("iframefcb");return Gi()[a]=()=>{gapi.load?s():t(wi(n,"network-request-failed"))},Ex(`${Tx()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ef=null,e})}let Ef=null;function T2(n){return Ef=Ef||E2(n),Ef}/**
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
 */const b2=new Tc(5e3,15e3),S2="__/auth/iframe",w2="emulator/auth/iframe",A2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R2(n){const e=n.config;Ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?S_(e,w2):`https://${n.config.authDomain}/${S2}`,s={apiKey:e.apiKey,appName:n.name,v:Ba},a=C2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${_l(s).slice(1)}`}async function I2(n){const e=await T2(n),t=Gi().gapi;return Ae(t,n,"internal-error"),e.open({where:document.body,url:R2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=wi(n,"network-request-failed"),d=Gi().setTimeout(()=>{l(c)},b2.get());function p(){Gi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const N2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x2=500,D2=600,O2="_blank",M2="http://localhost";class QT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k2(n,e,t,s=x2,a=D2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...N2,width:s.toString(),height:a.toString(),top:l,left:c},g=wn().toLowerCase();t&&(d=pw(g)?O2:t),dw(g)&&(e=e||M2,p.scrollbars="yes");const y=Object.entries(p).reduce((b,[x,U])=>`${b}${x}=${U},`,"");if(fx(g)&&d!=="_self")return P2(e||"",d),new QT(null);const T=window.open(e||"",d,y);Ae(T,n,"popup-blocked");try{T.focus()}catch{}return new QT(T)}function P2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const V2="__/auth/handler",L2="emulator/auth/handler",U2=encodeURIComponent("fac");async function YT(n,e,t,s,a,l){Ae(n.config.authDomain,n,"auth-domain-config-required"),Ae(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ba,eventId:a};if(e instanceof R_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",xf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof Sc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${U2}=${encodeURIComponent(p)}`:"";return`${j2(n)}?${_l(d).slice(1)}${g}`}function j2({config:n}){return n.emulator?S_(n,L2):`https://${n.authDomain}/${V2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="webStorageSupport";class z2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iw,this._completeRedirectFn=c2,this._overrideRedirectResult=o2}async _openPopup(e,t,s,a){Ps(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await YT(e,t,s,xg(),a);return k2(e,l,I_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await YT(e,t,s,xg(),a);return Fx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ps(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await I2(e),s=new f2(e);return t.register("authEvent",a=>(Ae(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lg,{type:lg},a=>{const l=a?.[0]?.[lg];l!==void 0&&t(!!l),Wi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ew()||mw()||A_()}}const q2=z2;var KT="@firebase/auth",$T="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H2(n){Ma(new Ir("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(n)},g=new yx(s,a,l,p);return wx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ma(new Ir("auth-internal",e=>{const t=bc(e.getProvider("auth").getImmediate());return(s=>new B2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hi(KT,$T,F2(n)),Hi(KT,$T,"esm2020")}/**
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
 */const G2=300,Q2=XS("authIdTokenMaxAge")||G2;let XT=null;const Y2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Q2)return;const a=t?.token;XT!==a&&(XT=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function K2(n=E_()){const e=pd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Sx(n,{popupRedirectResolver:q2,persistence:[Zx,zx,Iw]}),s=XS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=Y2(l.toString());Px(t,c,()=>c(t.currentUser)),kx(t,d=>c(d))}}const a=YS("auth");return a&&Ax(t,`http://${a}`),t}function $2(){return document.getElementsByTagName("head")?.[0]??document}vx({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=wi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",$2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H2("Browser");var WT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,Vw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,C){function N(){}N.prototype=C.prototype,k.D=C.prototype,k.prototype=new N,k.prototype.constructor=k,k.C=function(M,P,V){for(var R=Array(arguments.length-2),it=2;it<arguments.length;it++)R[it-2]=arguments[it];return C.prototype[P].apply(M,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,C,N){N||(N=0);var M=Array(16);if(typeof C=="string")for(var P=0;16>P;++P)M[P]=C.charCodeAt(N++)|C.charCodeAt(N++)<<8|C.charCodeAt(N++)<<16|C.charCodeAt(N++)<<24;else for(P=0;16>P;++P)M[P]=C[N++]|C[N++]<<8|C[N++]<<16|C[N++]<<24;C=k.g[0],N=k.g[1],P=k.g[2];var V=k.g[3],R=C+(V^N&(P^V))+M[0]+3614090360&4294967295;C=N+(R<<7&4294967295|R>>>25),R=V+(P^C&(N^P))+M[1]+3905402710&4294967295,V=C+(R<<12&4294967295|R>>>20),R=P+(N^V&(C^N))+M[2]+606105819&4294967295,P=V+(R<<17&4294967295|R>>>15),R=N+(C^P&(V^C))+M[3]+3250441966&4294967295,N=P+(R<<22&4294967295|R>>>10),R=C+(V^N&(P^V))+M[4]+4118548399&4294967295,C=N+(R<<7&4294967295|R>>>25),R=V+(P^C&(N^P))+M[5]+1200080426&4294967295,V=C+(R<<12&4294967295|R>>>20),R=P+(N^V&(C^N))+M[6]+2821735955&4294967295,P=V+(R<<17&4294967295|R>>>15),R=N+(C^P&(V^C))+M[7]+4249261313&4294967295,N=P+(R<<22&4294967295|R>>>10),R=C+(V^N&(P^V))+M[8]+1770035416&4294967295,C=N+(R<<7&4294967295|R>>>25),R=V+(P^C&(N^P))+M[9]+2336552879&4294967295,V=C+(R<<12&4294967295|R>>>20),R=P+(N^V&(C^N))+M[10]+4294925233&4294967295,P=V+(R<<17&4294967295|R>>>15),R=N+(C^P&(V^C))+M[11]+2304563134&4294967295,N=P+(R<<22&4294967295|R>>>10),R=C+(V^N&(P^V))+M[12]+1804603682&4294967295,C=N+(R<<7&4294967295|R>>>25),R=V+(P^C&(N^P))+M[13]+4254626195&4294967295,V=C+(R<<12&4294967295|R>>>20),R=P+(N^V&(C^N))+M[14]+2792965006&4294967295,P=V+(R<<17&4294967295|R>>>15),R=N+(C^P&(V^C))+M[15]+1236535329&4294967295,N=P+(R<<22&4294967295|R>>>10),R=C+(P^V&(N^P))+M[1]+4129170786&4294967295,C=N+(R<<5&4294967295|R>>>27),R=V+(N^P&(C^N))+M[6]+3225465664&4294967295,V=C+(R<<9&4294967295|R>>>23),R=P+(C^N&(V^C))+M[11]+643717713&4294967295,P=V+(R<<14&4294967295|R>>>18),R=N+(V^C&(P^V))+M[0]+3921069994&4294967295,N=P+(R<<20&4294967295|R>>>12),R=C+(P^V&(N^P))+M[5]+3593408605&4294967295,C=N+(R<<5&4294967295|R>>>27),R=V+(N^P&(C^N))+M[10]+38016083&4294967295,V=C+(R<<9&4294967295|R>>>23),R=P+(C^N&(V^C))+M[15]+3634488961&4294967295,P=V+(R<<14&4294967295|R>>>18),R=N+(V^C&(P^V))+M[4]+3889429448&4294967295,N=P+(R<<20&4294967295|R>>>12),R=C+(P^V&(N^P))+M[9]+568446438&4294967295,C=N+(R<<5&4294967295|R>>>27),R=V+(N^P&(C^N))+M[14]+3275163606&4294967295,V=C+(R<<9&4294967295|R>>>23),R=P+(C^N&(V^C))+M[3]+4107603335&4294967295,P=V+(R<<14&4294967295|R>>>18),R=N+(V^C&(P^V))+M[8]+1163531501&4294967295,N=P+(R<<20&4294967295|R>>>12),R=C+(P^V&(N^P))+M[13]+2850285829&4294967295,C=N+(R<<5&4294967295|R>>>27),R=V+(N^P&(C^N))+M[2]+4243563512&4294967295,V=C+(R<<9&4294967295|R>>>23),R=P+(C^N&(V^C))+M[7]+1735328473&4294967295,P=V+(R<<14&4294967295|R>>>18),R=N+(V^C&(P^V))+M[12]+2368359562&4294967295,N=P+(R<<20&4294967295|R>>>12),R=C+(N^P^V)+M[5]+4294588738&4294967295,C=N+(R<<4&4294967295|R>>>28),R=V+(C^N^P)+M[8]+2272392833&4294967295,V=C+(R<<11&4294967295|R>>>21),R=P+(V^C^N)+M[11]+1839030562&4294967295,P=V+(R<<16&4294967295|R>>>16),R=N+(P^V^C)+M[14]+4259657740&4294967295,N=P+(R<<23&4294967295|R>>>9),R=C+(N^P^V)+M[1]+2763975236&4294967295,C=N+(R<<4&4294967295|R>>>28),R=V+(C^N^P)+M[4]+1272893353&4294967295,V=C+(R<<11&4294967295|R>>>21),R=P+(V^C^N)+M[7]+4139469664&4294967295,P=V+(R<<16&4294967295|R>>>16),R=N+(P^V^C)+M[10]+3200236656&4294967295,N=P+(R<<23&4294967295|R>>>9),R=C+(N^P^V)+M[13]+681279174&4294967295,C=N+(R<<4&4294967295|R>>>28),R=V+(C^N^P)+M[0]+3936430074&4294967295,V=C+(R<<11&4294967295|R>>>21),R=P+(V^C^N)+M[3]+3572445317&4294967295,P=V+(R<<16&4294967295|R>>>16),R=N+(P^V^C)+M[6]+76029189&4294967295,N=P+(R<<23&4294967295|R>>>9),R=C+(N^P^V)+M[9]+3654602809&4294967295,C=N+(R<<4&4294967295|R>>>28),R=V+(C^N^P)+M[12]+3873151461&4294967295,V=C+(R<<11&4294967295|R>>>21),R=P+(V^C^N)+M[15]+530742520&4294967295,P=V+(R<<16&4294967295|R>>>16),R=N+(P^V^C)+M[2]+3299628645&4294967295,N=P+(R<<23&4294967295|R>>>9),R=C+(P^(N|~V))+M[0]+4096336452&4294967295,C=N+(R<<6&4294967295|R>>>26),R=V+(N^(C|~P))+M[7]+1126891415&4294967295,V=C+(R<<10&4294967295|R>>>22),R=P+(C^(V|~N))+M[14]+2878612391&4294967295,P=V+(R<<15&4294967295|R>>>17),R=N+(V^(P|~C))+M[5]+4237533241&4294967295,N=P+(R<<21&4294967295|R>>>11),R=C+(P^(N|~V))+M[12]+1700485571&4294967295,C=N+(R<<6&4294967295|R>>>26),R=V+(N^(C|~P))+M[3]+2399980690&4294967295,V=C+(R<<10&4294967295|R>>>22),R=P+(C^(V|~N))+M[10]+4293915773&4294967295,P=V+(R<<15&4294967295|R>>>17),R=N+(V^(P|~C))+M[1]+2240044497&4294967295,N=P+(R<<21&4294967295|R>>>11),R=C+(P^(N|~V))+M[8]+1873313359&4294967295,C=N+(R<<6&4294967295|R>>>26),R=V+(N^(C|~P))+M[15]+4264355552&4294967295,V=C+(R<<10&4294967295|R>>>22),R=P+(C^(V|~N))+M[6]+2734768916&4294967295,P=V+(R<<15&4294967295|R>>>17),R=N+(V^(P|~C))+M[13]+1309151649&4294967295,N=P+(R<<21&4294967295|R>>>11),R=C+(P^(N|~V))+M[4]+4149444226&4294967295,C=N+(R<<6&4294967295|R>>>26),R=V+(N^(C|~P))+M[11]+3174756917&4294967295,V=C+(R<<10&4294967295|R>>>22),R=P+(C^(V|~N))+M[2]+718787259&4294967295,P=V+(R<<15&4294967295|R>>>17),R=N+(V^(P|~C))+M[9]+3951481745&4294967295,k.g[0]=k.g[0]+C&4294967295,k.g[1]=k.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.u=function(k,C){C===void 0&&(C=k.length);for(var N=C-this.blockSize,M=this.B,P=this.h,V=0;V<C;){if(P==0)for(;V<=N;)a(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<C;)if(M[P++]=k.charCodeAt(V++),P==this.blockSize){a(this,M),P=0;break}}else for(;V<C;)if(M[P++]=k[V++],P==this.blockSize){a(this,M),P=0;break}}this.h=P,this.o+=C},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var C=1;C<k.length-8;++C)k[C]=0;var N=8*this.o;for(C=k.length-8;C<k.length;++C)k[C]=N&255,N/=256;for(this.u(k),k=Array(16),C=N=0;4>C;++C)for(var M=0;32>M;M+=8)k[N++]=this.g[C]>>>M&255;return k};function l(k,C){var N=d;return Object.prototype.hasOwnProperty.call(N,k)?N[k]:N[k]=C(k)}function c(k,C){this.h=C;for(var N=[],M=!0,P=k.length-1;0<=P;P--){var V=k[P]|0;M&&V==C||(N[P]=V,M=!1)}this.g=N}var d={};function p(k){return-128<=k&&128>k?l(k,function(C){return new c([C|0],0>C?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return F(g(-k));for(var C=[],N=1,M=0;k>=N;M++)C[M]=k/N|0,N*=4294967296;return new c(C,0)}function y(k,C){if(k.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(k.charAt(0)=="-")return F(y(k.substring(1),C));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=g(Math.pow(C,8)),M=T,P=0;P<k.length;P+=8){var V=Math.min(8,k.length-P),R=parseInt(k.substring(P,P+V),C);8>V?(V=g(Math.pow(C,V)),M=M.j(V).add(g(R))):(M=M.j(N),M=M.add(g(R)))}return M}var T=p(0),b=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(Q(this))return-F(this).m();for(var k=0,C=1,N=0;N<this.g.length;N++){var M=this.i(N);k+=(0<=M?M:4294967296+M)*C,C*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(U(this))return"0";if(Q(this))return"-"+F(this).toString(k);for(var C=g(Math.pow(k,6)),N=this,M="";;){var P=me(N,C).g;N=ue(N,P.j(C));var V=((0<N.g.length?N.g[0]:N.h)>>>0).toString(k);if(N=P,U(N))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function U(k){if(k.h!=0)return!1;for(var C=0;C<k.g.length;C++)if(k.g[C]!=0)return!1;return!0}function Q(k){return k.h==-1}n.l=function(k){return k=ue(this,k),Q(k)?-1:U(k)?0:1};function F(k){for(var C=k.g.length,N=[],M=0;M<C;M++)N[M]=~k.g[M];return new c(N,~k.h).add(b)}n.abs=function(){return Q(this)?F(this):this},n.add=function(k){for(var C=Math.max(this.g.length,k.g.length),N=[],M=0,P=0;P<=C;P++){var V=M+(this.i(P)&65535)+(k.i(P)&65535),R=(V>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);M=R>>>16,V&=65535,R&=65535,N[P]=R<<16|V}return new c(N,N[N.length-1]&-2147483648?-1:0)};function ue(k,C){return k.add(F(C))}n.j=function(k){if(U(this)||U(k))return T;if(Q(this))return Q(k)?F(this).j(F(k)):F(F(this).j(k));if(Q(k))return F(this.j(F(k)));if(0>this.l(x)&&0>k.l(x))return g(this.m()*k.m());for(var C=this.g.length+k.g.length,N=[],M=0;M<2*C;M++)N[M]=0;for(M=0;M<this.g.length;M++)for(var P=0;P<k.g.length;P++){var V=this.i(M)>>>16,R=this.i(M)&65535,it=k.i(P)>>>16,mt=k.i(P)&65535;N[2*M+2*P]+=R*mt,te(N,2*M+2*P),N[2*M+2*P+1]+=V*mt,te(N,2*M+2*P+1),N[2*M+2*P+1]+=R*it,te(N,2*M+2*P+1),N[2*M+2*P+2]+=V*it,te(N,2*M+2*P+2)}for(M=0;M<C;M++)N[M]=N[2*M+1]<<16|N[2*M];for(M=C;M<2*C;M++)N[M]=0;return new c(N,0)};function te(k,C){for(;(k[C]&65535)!=k[C];)k[C+1]+=k[C]>>>16,k[C]&=65535,C++}function le(k,C){this.g=k,this.h=C}function me(k,C){if(U(C))throw Error("division by zero");if(U(k))return new le(T,T);if(Q(k))return C=me(F(k),C),new le(F(C.g),F(C.h));if(Q(C))return C=me(k,F(C)),new le(F(C.g),C.h);if(30<k.g.length){if(Q(k)||Q(C))throw Error("slowDivide_ only works with positive integers.");for(var N=b,M=C;0>=M.l(k);)N=pe(N),M=pe(M);var P=xe(N,1),V=xe(M,1);for(M=xe(M,2),N=xe(N,2);!U(M);){var R=V.add(M);0>=R.l(k)&&(P=P.add(N),V=R),M=xe(M,1),N=xe(N,1)}return C=ue(k,P.j(C)),new le(P,C)}for(P=T;0<=k.l(C);){for(N=Math.max(1,Math.floor(k.m()/C.m())),M=Math.ceil(Math.log(N)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=g(N),R=V.j(C);Q(R)||0<R.l(k);)N-=M,V=g(N),R=V.j(C);U(V)&&(V=b),P=P.add(V),k=ue(k,R)}return new le(P,k)}n.A=function(k){return me(this,k).h},n.and=function(k){for(var C=Math.max(this.g.length,k.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)&k.i(M);return new c(N,this.h&k.h)},n.or=function(k){for(var C=Math.max(this.g.length,k.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)|k.i(M);return new c(N,this.h|k.h)},n.xor=function(k){for(var C=Math.max(this.g.length,k.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)^k.i(M);return new c(N,this.h^k.h)};function pe(k){for(var C=k.g.length+1,N=[],M=0;M<C;M++)N[M]=k.i(M)<<1|k.i(M-1)>>>31;return new c(N,k.h)}function xe(k,C){var N=C>>5;C%=32;for(var M=k.g.length-N,P=[],V=0;V<M;V++)P[V]=0<C?k.i(V+N)>>>C|k.i(V+N+1)<<32-C:k.i(V+N);return new c(P,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Vw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,wr=c}).apply(typeof WT<"u"?WT:typeof self<"u"?self:typeof window<"u"?window:{});var cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lw,qu,Uw,Tf,Mg,jw,zw,qw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof cf=="object"&&cf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var j=h[w];if(!(j in v))break e;v=v[j]}h=h[h.length-1],w=v[h],_=_(w),_!=w&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,w=!1,j={next:function(){if(!w&&v<h.length){var G=v++;return{value:_(G,h[G]),done:!1}}return w=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,w),h.apply(_,j)}}return function(){return h.apply(_,arguments)}}function b(h,_,v){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,b.apply(null,arguments)}function x(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function U(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(w,j,G){for(var ie=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)ie[Fe-2]=arguments[Fe];return _.prototype[j].apply(w,ie)}}function Q(h){const _=h.length;if(0<_){const v=Array(_);for(let w=0;w<_;w++)v[w]=h[w];return v}return[]}function F(h,_){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(p(w)){const j=h.length||0,G=w.length||0;h.length=j+G;for(let ie=0;ie<G;ie++)h[j+ie]=w[ie]}else h.push(w)}}class ue{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function te(h){return/^[\s\xa0]*$/.test(h)}function le(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function me(h){return me[" "](h),h}me[" "]=function(){};var pe=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function xe(h,_,v){for(const w in h)_.call(v,h[w],w,h)}function k(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let v,w;for(let j=1;j<arguments.length;j++){w=arguments[j];for(v in w)h[v]=w[v];for(let G=0;G<N.length;G++)v=N[G],Object.prototype.hasOwnProperty.call(w,v)&&(h[v]=w[v])}}function P(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function V(h){d.setTimeout(()=>{throw h},0)}function R(){var h=Ye;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class it{constructor(){this.h=this.g=null}add(_,v){const w=mt.get();w.set(_,v),this.h?this.h.next=w:this.g=w,this.h=w}}var mt=new ue(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let re,fe=!1,Ye=new it,D=()=>{const h=d.Promise.resolve(void 0);re=()=>{h.then(J)}};var J=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(v){V(v)}var _=mt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}fe=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var ge=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Ne(h,_){if(ee.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(pe){e:{try{me(_.nodeName);var j=!0;break e}catch{}j=!1}j||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ne.aa.h.call(this)}}U(Ne,ee);var be={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),st=0;function Cn(h,_,v,w,j){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!w,this.ha=j,this.key=++st,this.da=this.fa=!1}function ei(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function ve(h){this.src=h,this.g={},this.h=0}ve.prototype.add=function(h,_,v,w,j){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var ie=vt(h,_,w,j);return-1<ie?(_=h[ie],v||(_.fa=!1)):(_=new Cn(_,this.src,G,!!w,j),_.fa=v,h.push(_)),_};function ze(h,_){var v=_.type;if(v in h.g){var w=h.g[v],j=Array.prototype.indexOf.call(w,_,void 0),G;(G=0<=j)&&Array.prototype.splice.call(w,j,1),G&&(ei(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function vt(h,_,v,w){for(var j=0;j<h.length;++j){var G=h[j];if(!G.da&&G.listener==_&&G.capture==!!v&&G.ha==w)return j}return-1}var gn="closure_lm_"+(1e6*Math.random()|0),qr={};function Br(h,_,v,w,j){if(Array.isArray(_)){for(var G=0;G<_.length;G++)Br(h,_[G],v,w,j);return null}return v=jc(v),h&&h[kt]?h.K(_,v,g(w)?!!w.capture:!1,j):It(h,_,v,!1,w,j)}function It(h,_,v,w,j,G){if(!_)throw Error("Invalid event type");var ie=g(j)?!!j.capture:!!j,Fe=$a(h);if(Fe||(h[gn]=Fe=new ve(h)),v=Fe.add(_,v,w,ie,G),v.proxy)return v;if(w=Xd(),v.proxy=w,w.src=h,w.listener=v,h.addEventListener)ge||(j=ie),j===void 0&&(j=!1),h.addEventListener(_.toString(),w,j);else if(h.attachEvent)h.attachEvent(Fr(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Xd(){function h(v){return _.call(h.src,h.listener,v)}const _=Wd;return h}function Il(h,_,v,w,j){if(Array.isArray(_))for(var G=0;G<_.length;G++)Il(h,_[G],v,w,j);else w=g(w)?!!w.capture:!!w,v=jc(v),h&&h[kt]?(h=h.i,_=String(_).toString(),_ in h.g&&(G=h.g[_],v=vt(G,v,w,j),-1<v&&(ei(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete h.g[_],h.h--)))):h&&(h=$a(h))&&(_=h.g[_.toString()],h=-1,_&&(h=vt(_,v,w,j)),(v=-1<h?_[h]:null)&&Ka(v))}function Ka(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[kt])ze(_.i,h);else{var v=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(v,w,h.capture):_.detachEvent?_.detachEvent(Fr(v),w):_.addListener&&_.removeListener&&_.removeListener(w),(v=$a(_))?(ze(v,h),v.h==0&&(v.src=null,_[gn]=null)):ei(h)}}}function Fr(h){return h in qr?qr[h]:qr[h]="on"+h}function Wd(h,_){if(h.da)h=!0;else{_=new Ne(_,this);var v=h.listener,w=h.ha||h.src;h.fa&&Ka(h),h=v.call(w,_)}return h}function $a(h){return h=h[gn],h instanceof ve?h:null}var Nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function jc(h){return typeof h=="function"?h:(h[Nl]||(h[Nl]=function(_){return h.handleEvent(_)}),h[Nl])}function St(){ae.call(this),this.i=new ve(this),this.M=this,this.F=null}U(St,ae),St.prototype[kt]=!0,St.prototype.removeEventListener=function(h,_,v,w){Il(this,h,_,v,w)};function Je(h,_){var v,w=h.F;if(w)for(v=[];w;w=w.F)v.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new ee(_,h);else if(_ instanceof ee)_.target=_.target||h;else{var j=_;_=new ee(w,h),M(_,j)}if(j=!0,v)for(var G=v.length-1;0<=G;G--){var ie=_.g=v[G];j=Fn(ie,w,!0,_)&&j}if(ie=_.g=h,j=Fn(ie,w,!0,_)&&j,j=Fn(ie,w,!1,_)&&j,v)for(G=0;G<v.length;G++)ie=_.g=v[G],j=Fn(ie,w,!1,_)&&j}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],w=0;w<v.length;w++)ei(v[w]);delete h.g[_],h.h--}}this.F=null},St.prototype.K=function(h,_,v,w){return this.i.add(String(h),_,!1,v,w)},St.prototype.L=function(h,_,v,w){return this.i.add(String(h),_,!0,v,w)};function Fn(h,_,v,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var j=!0,G=0;G<_.length;++G){var ie=_[G];if(ie&&!ie.da&&ie.capture==v){var Fe=ie.listener,Gt=ie.ha||ie.src;ie.fa&&ze(h.i,ie),j=Fe.call(Gt,w)!==!1&&j}}return j&&!w.defaultPrevented}function _n(h,_,v){if(typeof h=="function")v&&(h=b(h,v));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function zc(h){h.g=_n(()=>{h.g=null,h.i&&(h.i=!1,zc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Zd extends ae{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:zc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(h){ae.call(this),this.h=h,this.g={}}U(Hr,ae);var Gr=[];function Qr(h){xe(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ka(_)},h),h.g={}}Hr.prototype.N=function(){Hr.aa.N.call(this),Qr(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pi=d.JSON.stringify,Xa=d.JSON.parse,Yr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function xl(){}xl.prototype.h=null;function Dl(h){return h.h||(h.h=h.i())}function Ol(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ns(){ee.call(this,"d")}U(ns,ee);function Ml(){ee.call(this,"c")}U(Ml,ee);var Ri={},kl=null;function Bs(){return kl=kl||new St}Ri.La="serverreachability";function Wa(h){ee.call(this,Ri.La,h)}U(Wa,ee);function Fs(h){const _=Bs();Je(_,new Wa(_))}Ri.STAT_EVENT="statevent";function qc(h,_){ee.call(this,Ri.STAT_EVENT,h),this.stat=_}U(qc,ee);function _t(h){const _=Bs();Je(_,new qc(_,h))}Ri.Ma="timingevent";function Ht(h,_){ee.call(this,Ri.Ma,h),this.size=_}U(Ht,ee);function Pt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function ti(){this.g=!0}ti.prototype.xa=function(){this.g=!1};function Pl(h,_,v,w,j,G){h.info(function(){if(h.g)if(G)for(var ie="",Fe=G.split("&"),Gt=0;Gt<Fe.length;Gt++){var He=Fe[Gt].split("=");if(1<He.length){var Zt=He[0];He=He[1];var Qt=Zt.split("_");ie=2<=Qt.length&&Qt[1]=="type"?ie+(Zt+"="+He+"&"):ie+(Zt+"=redacted&")}}else ie=null;else ie=G;return"XMLHTTP REQ ("+w+") [attempt "+j+"]: "+_+`
`+v+`
`+ie})}function Jd(h,_,v,w,j,G,ie){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+j+"]: "+_+`
`+v+`
`+G+" "+ie})}function Hs(h,_,v,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Kr(h,v)+(w?" "+w:"")})}function Bc(h,_){h.info(function(){return"TIMEOUT: "+_})}ti.prototype.info=function(){};function Kr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var w=v[h];if(!(2>w.length)){var j=w[1];if(Array.isArray(j)&&!(1>j.length)){var G=j[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ie=1;ie<j.length;ie++)j[ie]=""}}}}return pi(v)}catch{return _}}var Gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},is={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ii;function Ni(){}U(Ni,xl),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Ii=new Ni;function Rn(h,_,v,w){this.j=h,this.i=_,this.l=v,this.R=w||1,this.U=new Hr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var Vl={},Za={};function gi(h,_,v){h.L=1,h.v=Jr(Hn(_)),h.m=v,h.P=!0,ss(h,null)}function ss(h,_){h.F=Date.now(),$r(h),h.A=Hn(h.v);var v=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Bl(v.i,"t",w),h.C=0,v=h.j.J,h.h=new Nt,h.g=sh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Zd(b(h.Y,h,h.g),h.O)),_=h.U,v=h.g,w=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Gr[0]=j.toString()),j=Gr);for(var G=0;G<j.length;G++){var ie=Br(v,j[G],w||_.handleEvent,!1,_.h||_);if(!ie)break;_.g[ie.key]=ie}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Fs(),Pl(h.i,h.u,h.A,h.l,h.R,h.m)}Rn.prototype.ca=function(h){h=h.target;const _=this.M;_&&ri(h)==3?_.j():this.Y(h)},Rn.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ri(this.g);var _=this.g.Ba();const fs=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Xc(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=fs?Fs(3):Fs(2)),Qs(this);var v=this.g.Z();this.X=v;t:if(Fc(this)){var w=Xc(this.g);h="";var j=w.length,G=ri(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),xi(this);var ie="";break t}this.h.i=new d.TextDecoder}for(_=0;_<j;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(G&&_==j-1)});w.length=0,this.h.g+=h,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=v==200,Jd(this.i,this.u,this.A,this.l,this.R,Qt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,Gt=this.g;if((Fe=Gt.g?Gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Fe)){var He=Fe;break t}}He=null}if(v=He)Hs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xr(this,v);else{this.o=!1,this.s=3,_t(12),on(this),xi(this);break e}}if(this.P){v=!0;let ln;for(;!this.J&&this.C<ie.length;)if(ln=Hc(this,ie),ln==Za){Qt==4&&(this.s=4,_t(14),v=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Vl){this.s=4,_t(15),Hs(this.i,this.l,ie,"[Invalid Chunk]"),v=!1;break}else Hs(this.i,this.l,ln,null),Xr(this,ln);if(Fc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ie.length!=0||this.h.h||(this.s=1,_t(16),v=!1),this.o=this.o&&v,!v)Hs(this.i,this.l,ie,"[Invalid Chunked Response]"),on(this),xi(this);else if(0<ie.length&&!this.W){this.W=!0;var Zt=this.j;Zt.g==this&&Zt.ba&&!Zt.M&&(Zt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),oa(Zt),Zt.M=!0,_t(11))}}else Hs(this.i,this.l,ie,null),Xr(this,ie);Qt==4&&on(this),this.o&&!this.J&&(Qt==4?th(this.j,this):(this.o=!1,$r(this)))}else sm(this.g),v==400&&0<ie.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),on(this),xi(this)}}}catch{}finally{}};function Fc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Hc(h,_){var v=h.C,w=_.indexOf(`
`,v);return w==-1?Za:(v=Number(_.substring(v,w)),isNaN(v)?Vl:(w+=1,w+v>_.length?Za:(_=_.slice(w,w+v),h.C=w+v,_)))}Rn.prototype.cancel=function(){this.J=!0,on(this)};function $r(h){h.S=Date.now()+h.I,Gc(h,h.I)}function Gc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Pt(b(h.ba,h),_)}function Qs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Rn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Bc(this.i,this.A),this.L!=2&&(Fs(),_t(17)),on(this),this.s=2,xi(this)):Gc(this,this.S-h)};function xi(h){h.j.G==0||h.J||th(h.j,h)}function on(h){Qs(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Qr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Xr(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Ll(v.h,h))){if(!h.K&&Ll(v.h,h)&&v.G==3){try{var w=v.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var j=w;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)co(v),lo(v);else break e;Yl(v),_t(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Pt(b(v.Za,v),6e3));if(1>=eo(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else hs(v,11)}else if((h.K||v.g==h)&&co(v),!te(_))for(j=v.Da.g.parse(_),_=0;_<j.length;_++){let He=j[_];if(v.T=He[0],He=He[1],v.G==2)if(He[0]=="c"){v.K=He[1],v.ia=He[2];const Zt=He[3];Zt!=null&&(v.la=Zt,v.j.info("VER="+v.la));const Qt=He[4];Qt!=null&&(v.Aa=Qt,v.j.info("SVER="+v.Aa));const fs=He[5];fs!=null&&typeof fs=="number"&&0<fs&&(w=1.5*fs,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const ln=h.g;if(ln){const Li=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Li){var G=w.h;G.g||Li.indexOf("spdy")==-1&&Li.indexOf("quic")==-1&&Li.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(to(G,G.h),G.h=null))}if(w.D){const $l=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;$l&&(w.ya=$l,rt(w.I,w.D,$l))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var ie=h;if(w.qa=ih(w,w.J?w.ia:null,w.W),ie.K){In(w.h,ie);var Fe=ie,Gt=w.L;Gt&&(Fe.I=Gt),Fe.B&&(Qs(Fe),$r(Fe)),w.g=ie}else Jc(w);0<v.i.length&&uo(v)}else He[0]!="stop"&&He[0]!="close"||hs(v,7);else v.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?hs(v,7):Gl(v):He[0]!="noop"&&v.l&&v.l.ta(He),v.v=0)}}Fs(4)}catch{}}var Qc=class{constructor(h,_){this.g=h,this.map=_}};function rs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ja(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function eo(h){return h.h?1:h.g?h.g.size:0}function Ll(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function to(h,_){h.g?h.g.add(_):h.h=_}function In(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}rs.prototype.cancel=function(){if(this.i=Ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Ul(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return Q(h.i)}function em(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,w=0;w<v;w++)_.push(h[w]);return _}_=[],v=0;for(w in h)_[v++]=h[w];return _}function no(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const w in h)_[v++]=w;return _}}}function jl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=no(h),w=em(h),j=w.length,G=0;G<j;G++)_.call(void 0,w[G],v&&v[G],h)}var Wr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tm(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var w=h[v].indexOf("="),j=null;if(0<=w){var G=h[v].substring(0,w);j=h[v].substring(w+1)}else G=h[v];_(G,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Vt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Vt){this.h=h.h,Zr(this,h.j),this.o=h.o,this.g=h.g,Ys(this,h.s),this.l=h.l;var _=h.i,v=new os;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),as(this,v),this.m=h.m}else h&&(_=String(h).match(Wr))?(this.h=!1,Zr(this,_[1]||"",!0),this.o=ni(_[2]||""),this.g=ni(_[3]||"",!0),Ys(this,_[4]),this.l=ni(_[5]||"",!0),as(this,_[6]||"",!0),this.m=ni(_[7]||"")):(this.h=!1,this.i=new os(null,this.h))}Vt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ea(_,zl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ea(_,zl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(ea(v,v.charAt(0)=="/"?nm:ql,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",ea(v,io)),h.join("")};function Hn(h){return new Vt(h)}function Zr(h,_,v){h.j=v?ni(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ys(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function as(h,_,v){_ instanceof os?(h.i=_,Kc(h.i,h.h)):(v||(_=ea(_,im)),h.i=new os(_,h.h))}function rt(h,_,v){h.i.set(_,v)}function Jr(h){return rt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function ni(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ea(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Yc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Yc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var zl=/[#\/\?@]/g,ql=/[#\?:]/g,nm=/[#\?]/g,im=/[#\?@]/g,io=/#/g;function os(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ii(h){h.g||(h.g=new Map,h.h=0,h.i&&tm(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=os.prototype,n.add=function(h,_){ii(this),this.i=null,h=Di(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ls(h,_){ii(h),_=Di(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function us(h,_){return ii(h),_=Di(h,_),h.g.has(_)}n.forEach=function(h,_){ii(this),this.g.forEach(function(v,w){v.forEach(function(j){h.call(_,j,w,this)},this)},this)},n.na=function(){ii(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let w=0;w<_.length;w++){const j=h[w];for(let G=0;G<j.length;G++)v.push(_[w])}return v},n.V=function(h){ii(this);let _=[];if(typeof h=="string")us(this,h)&&(_=_.concat(this.g.get(Di(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return ii(this),this.i=null,h=Di(this,h),us(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Bl(h,_,v){ls(h,_),0<v.length&&(h.i=null,h.g.set(Di(h,_),Q(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var w=_[v];const G=encodeURIComponent(String(w)),ie=this.V(w);for(w=0;w<ie.length;w++){var j=G;ie[w]!==""&&(j+="="+encodeURIComponent(String(ie[w]))),h.push(j)}}return this.i=h.join("&")};function Di(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Kc(h,_){_&&!h.j&&(ii(h),h.i=null,h.g.forEach(function(v,w){var j=w.toLowerCase();w!=j&&(ls(this,w),Bl(this,j,v))},h)),h.j=_}function ta(h,_){const v=new ti;if(d.Image){const w=new Image;w.onload=x(si,v,"TestLoadImage: loaded",!0,_,w),w.onerror=x(si,v,"TestLoadImage: error",!1,_,w),w.onabort=x(si,v,"TestLoadImage: abort",!1,_,w),w.ontimeout=x(si,v,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function _i(h,_){const v=new ti,w=new AbortController,j=setTimeout(()=>{w.abort(),si(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(G=>{clearTimeout(j),G.ok?si(v,"TestPingServer: ok",!0,_):si(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(j),si(v,"TestPingServer: error",!1,_)})}function si(h,_,v,w,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),w(v)}catch{}}function na(){this.g=new Yr}function Oi(h,_,v){const w=v||"";try{jl(h,function(j,G){let ie=j;g(j)&&(ie=pi(j)),_.push(w+G+"="+encodeURIComponent(ie))})}catch(j){throw _.push(w+"type="+encodeURIComponent("_badmap")),j}}function Ks(h){this.l=h.Ub||null,this.j=h.eb||!1}U(Ks,xl),Ks.prototype.g=function(){return new cs(this.l,this.j)},Ks.prototype.i=(function(h){return function(){return h}})({});function cs(h,_){St.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(cs,St),n=cs.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,ki(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Mi(this):ki(this),this.readyState==3&&Fl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Mi(this))},n.Qa=function(h){this.g&&(this.response=h,Mi(this))},n.ga=function(){this.g&&Mi(this)};function Mi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,ki(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function ki(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Hl(h){let _="";return xe(h,function(v,w){_+=w,_+=":",_+=v,_+=`\r
`}),_}function Wt(h,_,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=Hl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):rt(h,_,v))}function We(h){St.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(We,St);var so=/^https?$/i,ia=["POST","PUT"];n=We.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ii.g(),this.v=this.o?Dl(this.o):Dl(Ii),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(G){$c(this,G);return}if(h=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var j in w)v.set(j,w[j]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const G of w.keys())v.set(G,w.get(G));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ia,_,void 0))||w||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ie]of v)this.g.setRequestHeader(G,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sa(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){$c(this,G)}};function $c(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,ro(h),Pi(h)}function ro(h){h.A||(h.A=!0,Je(h,"complete"),Je(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Je(this,"complete"),Je(this,"abort"),Pi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pi(this,!0)),We.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ao(this):this.bb())},n.bb=function(){ao(this)};function ao(h){if(h.h&&typeof c<"u"&&(!h.v[1]||ri(h)!=4||h.Z()!=2)){if(h.u&&ri(h)==4)_n(h.Ea,0,h);else if(Je(h,"readystatechange"),ri(h)==4){h.h=!1;try{const ie=h.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var w;if(w=ie===0){var j=String(h.D).match(Wr)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),w=!so.test(j?j.toLowerCase():"")}v=w}if(v)Je(h,"complete"),Je(h,"success");else{h.m=6;try{var G=2<ri(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",ro(h)}}finally{Pi(h)}}}}function Pi(h,_){if(h.g){sa(h);const v=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Je(h,"ready");try{v.onreadystatechange=w}catch{}}}function sa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ri(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ri(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Xa(_)}};function Xc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function sm(h){const _={};h=(h.g&&2<=ri(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(te(h[w]))continue;var v=P(h[w]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=_[j]||[];_[j]=G,G.push(v)}k(_,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ra(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function oo(h){this.Aa=0,this.i=[],this.j=new ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ra("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ra("baseRetryDelayMs",5e3,h),this.cb=ra("retryDelaySeedMs",1e4,h),this.Wa=ra("forwardChannelMaxRetries",2,h),this.wa=ra("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new rs(h&&h.concurrentRequestLimit),this.Da=new na,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=oo.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,w){_t(0),this.W=h,this.H=_||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=ih(this,null,this.W),uo(this)};function Gl(h){if(Wc(h),h.G==3){var _=h.U++,v=Hn(h.I);if(rt(v,"SID",h.K),rt(v,"RID",_),rt(v,"TYPE","terminate"),aa(h,v),_=new Rn(h,h.j,_),_.L=2,_.v=Jr(Hn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=sh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),$r(_)}nh(h)}function lo(h){h.g&&(oa(h),h.g.cancel(),h.g=null)}function Wc(h){lo(h),h.u&&(d.clearTimeout(h.u),h.u=null),co(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function uo(h){if(!Ja(h.h)&&!h.s){h.s=!0;var _=h.Ga;re||D(),fe||(re(),fe=!0),Ye.add(_,h),h.B=0}}function rm(h,_){return eo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Pt(b(h.Ga,h,_),Kl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new Rn(this,this.j,h);let G=this.o;if(this.S&&(G?(G=C(G),M(G,this.S)):G=this.S),this.m!==null||this.O||(j.H=G,G=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Zc(this,j,_),v=Hn(this.I),rt(v,"RID",h),rt(v,"CVER",22),this.D&&rt(v,"X-HTTP-Session-Id",this.D),aa(this,v),G&&(this.O?_="headers="+encodeURIComponent(String(Hl(G)))+"&"+_:this.m&&Wt(v,this.m,G)),to(this.h,j),this.Ua&&rt(v,"TYPE","init"),this.P?(rt(v,"$req",_),rt(v,"SID","null"),j.T=!0,gi(j,v,null)):gi(j,v,_),this.G=2}}else this.G==3&&(h?Ql(this,h):this.i.length==0||Ja(this.h)||Ql(this))};function Ql(h,_){var v;_?v=_.l:v=h.U++;const w=Hn(h.I);rt(w,"SID",h.K),rt(w,"RID",v),rt(w,"AID",h.T),aa(h,w),h.m&&h.o&&Wt(w,h.m,h.o),v=new Rn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Zc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),to(h.h,v),gi(v,w,_)}function aa(h,_){h.H&&xe(h.H,function(v,w){rt(_,w,v)}),h.l&&jl({},function(v,w){rt(_,w,v)})}function Zc(h,_,v){v=Math.min(h.i.length,v);var w=h.l?b(h.l.Na,h.l,h):null;e:{var j=h.i;let G=-1;for(;;){const ie=["count="+v];G==-1?0<v?(G=j[0].g,ie.push("ofs="+G)):G=0:ie.push("ofs="+G);let Fe=!0;for(let Gt=0;Gt<v;Gt++){let He=j[Gt].g;const Zt=j[Gt].map;if(He-=G,0>He)G=Math.max(0,j[Gt].g-100),Fe=!1;else try{Oi(Zt,ie,"req"+He+"_")}catch{w&&w(Zt)}}if(Fe){w=ie.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,w}function Jc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;re||D(),fe||(re(),fe=!0),Ye.add(_,h),h.v=0}}function Yl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Pt(b(h.Fa,h),Kl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,eh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Pt(b(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),lo(this),eh(this))};function oa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function eh(h){h.g=new Rn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Hn(h.qa);rt(_,"RID","rpc"),rt(_,"SID",h.K),rt(_,"AID",h.T),rt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&rt(_,"TO",h.ja),rt(_,"TYPE","xmlhttp"),aa(h,_),h.m&&h.o&&Wt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Jr(Hn(_)),v.m=null,v.P=!0,ss(v,h)}n.Za=function(){this.C!=null&&(this.C=null,lo(this),Yl(this),_t(19))};function co(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function th(h,_){var v=null;if(h.g==_){co(h),oa(h),h.g=null;var w=2}else if(Ll(h.h,_))v=_.D,In(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var j=h.B;w=Bs(),Je(w,new Ht(w,v)),uo(h)}else Jc(h);else if(j=_.s,j==3||j==0&&0<_.X||!(w==1&&rm(h,_)||w==2&&Yl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),j){case 1:hs(h,5);break;case 4:hs(h,10);break;case 3:hs(h,6);break;default:hs(h,2)}}}function Kl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function hs(h,_){if(h.j.info("Error code "+_),_==2){var v=b(h.fb,h),w=h.Xa;const j=!w;w=new Vt(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Zr(w,"https"),Jr(w),j?ta(w.toString(),v):_i(w.toString(),v)}else _t(2);h.G=0,h.l&&h.l.sa(_),nh(h),Wc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function nh(h){if(h.G=0,h.ka=[],h.l){const _=Ul(h.h);(_.length!=0||h.i.length!=0)&&(F(h.ka,_),F(h.ka,h.i),h.h.i.length=0,Q(h.i),h.i.length=0),h.l.ra()}}function ih(h,_,v){var w=v instanceof Vt?Hn(v):new Vt(v);if(w.g!="")_&&(w.g=_+"."+w.g),Ys(w,w.s);else{var j=d.location;w=j.protocol,_=_?_+"."+j.hostname:j.hostname,j=+j.port;var G=new Vt(null);w&&Zr(G,w),_&&(G.g=_),j&&Ys(G,j),v&&(G.l=v),w=G}return v=h.D,_=h.ya,v&&_&&rt(w,v,_),rt(w,"VER",h.la),aa(h,w),w}function sh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new We(new Ks({eb:v})):new We(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rh(){}n=rh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ho(){}ho.prototype.g=function(h,_){return new Nn(h,_)};function Nn(h,_){St.call(this),this.g=new oo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!te(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!te(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Vi(this)}U(Nn,St),Nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nn.prototype.close=function(){Gl(this.g)},Nn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=pi(h),h=v);_.i.push(new Qc(_.Ya++,h)),_.G==3&&uo(_)},Nn.prototype.N=function(){this.g.l=null,delete this.j,Gl(this.g),delete this.g,Nn.aa.N.call(this)};function ah(h){ns.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}U(ah,ns);function oh(){Ml.call(this),this.status=1}U(oh,Ml);function Vi(h){this.g=h}U(Vi,rh),Vi.prototype.ua=function(){Je(this.g,"a")},Vi.prototype.ta=function(h){Je(this.g,new ah(h))},Vi.prototype.sa=function(h){Je(this.g,new oh)},Vi.prototype.ra=function(){Je(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,Nn.prototype.send=Nn.prototype.o,Nn.prototype.open=Nn.prototype.m,Nn.prototype.close=Nn.prototype.close,qw=function(){return new ho},zw=function(){return Bs()},jw=Ri,Mg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gs.NO_ERROR=0,Gs.TIMEOUT=8,Gs.HTTP_ERROR=6,Tf=Gs,is.COMPLETE="complete",Uw=is,Ol.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",St.prototype.listen=St.prototype.K,qu=Ol,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,Lw=We}).apply(typeof cf<"u"?cf:typeof self<"u"?self:typeof window<"u"?window:{});const ZT="@firebase/firestore",JT="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tn.UNAUTHENTICATED=new Tn(null),Tn.GOOGLE_CREDENTIALS=new Tn("google-credentials-uid"),Tn.FIRST_PARTY=new Tn("first-party-uid"),Tn.MOCK_USER=new Tn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Va=new md("@firebase/firestore");function Bo(){return Va.logLevel}function ce(n,...e){if(Va.logLevel<=je.DEBUG){const t=e.map(x_);Va.debug(`Firestore (${vl}): ${n}`,...t)}}function Vs(n,...e){if(Va.logLevel<=je.ERROR){const t=e.map(x_);Va.error(`Firestore (${vl}): ${n}`,...t)}}function il(n,...e){if(Va.logLevel<=je.WARN){const t=e.map(x_);Va.warn(`Firestore (${vl}): ${n}`,...t)}}function x_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Bw(n,s,t)}function Bw(n,e,t){let s=`FIRESTORE (${vl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vs(s),new Error(s)}function Ze(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Bw(e,a,s)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends zs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Tn.UNAUTHENTICATED)))}shutdown(){}}class W2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Z2{constructor(e){this.t=e,this.currentUser=Tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Os;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Os,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Os)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ze(typeof s.accessToken=="string",31837,{l:s}),new Fw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new Tn(e)}}class J2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new J2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Tn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class eb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const s=l=>{l.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ce("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new eb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new eb(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=nD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function qe(n,e){return n<e?-1:n>e?1:0}function kg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return ug(a)===ug(l)?qe(a,l):ug(a)?1:-1}return qe(n.length,e.length)}const iD=55296,sD=57343;function ug(n){const e=n.charCodeAt(0);return e>=iD&&e<=sD}function sl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="__name__";class Fi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Fi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Fi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return qe(e.length,t.length)}static compareSegments(e,t){const s=Fi.isNumericId(e),a=Fi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Fi.extractNumericId(e).compare(Fi.extractNumericId(t)):kg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wr.fromString(e.substring(4,e.length-2))}}class ft extends Fi{construct(e,t,s){return new ft(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new ft(t)}static emptyPath(){return new ft([])}}const rD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dn extends Fi{construct(e,t,s){return new dn(e,t,s)}static isValidIdentifier(e){return rD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tb}static keyField(){return new dn([tb])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new oe($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new oe($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new oe($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new oe($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dn(t)}static emptyPath(){return new dn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(ft.fromString(e))}static fromName(e){return new _e(ft.fromString(e).popFirst(5))}static empty(){return new _e(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ft.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new ft(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(n,e,t){if(!t)throw new oe($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function aD(n,e,t,s){if(e===!0&&s===!0)throw new oe($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nb(n){if(!_e.isDocumentKey(n))throw new oe($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ib(n){if(_e.isDocumentKey(n))throw new oe($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function On(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vd(n);throw new oe($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Bt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ac(n,e){if(!Gw(n))throw new oe($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new oe($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=-62135596800,rb=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*rb);return new gt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<sb)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rb}_compareTo(e){return this.seconds===e.seconds?qe(this.nanoseconds,e.nanoseconds):qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:gt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ac(e,gt._jsonSchema))return new gt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-sb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}gt._jsonSchemaVersion="firestore/timestamp/1.0",gt._jsonSchema={type:Bt("string",gt._jsonSchemaVersion),seconds:Bt("number"),nanoseconds:Bt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new gt(0,0))}static max(){return new Ce(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const oc=-1;function oD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ce.fromTimestamp(s===1e9?new gt(t+1,0):new gt(t,s));return new Nr(a,_e.empty(),e)}function lD(n){return new Nr(n.readTime,n.key,oc)}class Nr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Nr(Ce.min(),_e.empty(),oc)}static max(){return new Nr(Ce.max(),_e.empty(),oc)}}function uD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:qe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==cD)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.reject(t)}static resolve(e){return new Z(((t,s)=>{t(e)}))}static reject(e){return new Z(((t,s)=>{s(e)}))}static waitFor(e){return new Z(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next((a=>a?Z.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new Z(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((y=>{c[g]=y,++d,d===l&&s(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new Z(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function fD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Tl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ed{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ed.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=-1;function Td(n){return n==null}function jf(n){return n===0&&1/n==-1/0}function dD(n){return typeof n=="number"&&Number.isInteger(n)&&!jf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="";function mD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ab(e)),e=pD(n.get(t),e);return ab(e)}function pD(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Qw:t+="";break;default:t+=l}}return t}function ab(n){return n+Qw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ur(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft=class Pg{constructor(e,t){this.comparator=e,this.root=t||Ar.EMPTY}insert(e,t){return new Pg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ar.BLACK,null,null))}remove(e){return new Pg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ar.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hf(this.root,e,this.comparator,!1)}getReverseIterator(){return new hf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hf(this.root,e,this.comparator,!0)}},hf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ar=class Cs{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Cs.RED,this.left=a??Cs.EMPTY,this.right=l??Cs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Cs(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Cs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Cs.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Cs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Cs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}};Ar.EMPTY=null,Ar.RED=!0,Ar.BLACK=!1;Ar.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Ar(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.comparator=e,this.data=new Ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lb(this.data.getIterator())}getIteratorFrom(e){return new lb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xt(this.comparator);return t.data=e,t}}class lb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.fields=e,e.sort(dn.comparator)}static empty(){return new Jn([])}unionWith(e){let t=new Xt(dn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Kw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Kw("Invalid base64 string: "+l):l}})(e);return new pn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new pn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pn.EMPTY_BYTE_STRING=new pn("");const gD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(n){if(Ze(!!n,39018),typeof n=="string"){let e=0;const t=gD.exec(n);if(Ze(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ot(n.seconds),nanos:Ot(n.nanos)}}function Ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dr(n){return typeof n=="string"?pn.fromBase64String(n):pn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="server_timestamp",Xw="__type__",Ww="__previous_value__",Zw="__local_write_time__";function M_(n){return(n?.mapValue?.fields||{})[Xw]?.stringValue===$w}function bd(n){const e=n.mapValue.fields[Ww];return M_(e)?bd(e):e}function lc(n){const e=xr(n.mapValue.fields[Zw].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const zf="(default)";class uc{constructor(e,t){this.projectId=e,this.database=t||zf}static empty(){return new uc("","")}get isDefaultDatabase(){return this.database===zf}isEqual(e){return e instanceof uc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="__type__",yD="__max__",ff={mapValue:{}},eA="__vector__",qf="value";function Or(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?M_(n)?4:ED(n)?9007199254740991:vD(n)?10:11:Te(28295,{value:n})}function Zi(n,e){if(n===e)return!0;const t=Or(n);if(t!==Or(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return lc(n).isEqual(lc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=xr(a.timestampValue),d=xr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Dr(a.bytesValue).isEqual(Dr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Ot(a.geoPointValue.latitude)===Ot(l.geoPointValue.latitude)&&Ot(a.geoPointValue.longitude)===Ot(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Ot(a.integerValue)===Ot(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Ot(a.doubleValue),d=Ot(l.doubleValue);return c===d?jf(c)===jf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return sl(n.arrayValue.values||[],e.arrayValue.values||[],Zi);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(ob(c)!==ob(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Zi(c[p],d[p])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function cc(n,e){return(n.values||[]).find((t=>Zi(t,e)))!==void 0}function rl(n,e){if(n===e)return 0;const t=Or(n),s=Or(e);if(t!==s)return qe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return qe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=Ot(l.integerValue||l.doubleValue),p=Ot(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return ub(n.timestampValue,e.timestampValue);case 4:return ub(lc(n),lc(e));case 5:return kg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Dr(l),p=Dr(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=qe(d[g],p[g]);if(y!==0)return y}return qe(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=qe(Ot(l.latitude),Ot(c.latitude));return d!==0?d:qe(Ot(l.longitude),Ot(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return cb(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[qf]?.arrayValue,y=p[qf]?.arrayValue,T=qe(g?.values?.length||0,y?.values?.length||0);return T!==0?T:cb(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===ff.mapValue&&c===ff.mapValue)return 0;if(l===ff.mapValue)return 1;if(c===ff.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const b=kg(p[T],y[T]);if(b!==0)return b;const x=rl(d[p[T]],g[y[T]]);if(x!==0)return x}return qe(p.length,y.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{he:t})}}function ub(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return qe(n,e);const t=xr(n),s=xr(e),a=qe(t.seconds,s.seconds);return a!==0?a:qe(t.nanos,s.nanos)}function cb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=rl(t[a],s[a]);if(l)return l}return qe(t.length,s.length)}function al(n){return Vg(n)}function Vg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=xr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Dr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Vg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Vg(t.fields[c])}`;return a+"}"})(n.mapValue):Te(61005,{value:n})}function bf(n){switch(Or(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bd(n);return e?16+bf(e):16;case 5:return 2*n.stringValue.length;case 6:return Dr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+bf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Ur(s.fields,((l,c)=>{a+=l.length+bf(c)})),a})(n.mapValue);default:throw Te(13486,{value:n})}}function hb(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lg(n){return!!n&&"integerValue"in n}function k_(n){return!!n&&"arrayValue"in n}function fb(n){return!!n&&"nullValue"in n}function db(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sf(n){return!!n&&"mapValue"in n}function vD(n){return(n?.mapValue?.fields||{})[Jw]?.stringValue===eA}function Yu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ur(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Yu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yu(n.arrayValue.values[t]);return e}return{...n}}function ED(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.value=e}static empty(){return new Un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Sf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yu(t)}setAll(e){let t=dn.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Yu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Sf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Sf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Ur(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Un(Yu(this.value))}}function tA(n){const e=[];return Ur(n.fields,((t,s)=>{const a=new dn([t]);if(Sf(s)){const l=tA(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new bn(e,0,Ce.min(),Ce.min(),Ce.min(),Un.empty(),0)}static newFoundDocument(e,t,s,a){return new bn(e,1,t,Ce.min(),s,a,0)}static newNoDocument(e,t){return new bn(e,2,t,Ce.min(),Ce.min(),Un.empty(),0)}static newUnknownDocument(e,t){return new bn(e,3,t,Ce.min(),Ce.min(),Un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bf{constructor(e,t){this.position=e,this.inclusive=t}}function mb(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=_e.comparator(_e.fromName(c.referenceValue),t.key):s=rl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function pb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hc{constructor(e,t="asc"){this.field=e,this.dir=t}}function TD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class nA{}class qt extends nA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new SD(e,t,s):t==="array-contains"?new CD(e,s):t==="in"?new RD(e,s):t==="not-in"?new ID(e,s):t==="array-contains-any"?new ND(e,s):new qt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new wD(e,s):new AD(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rl(t,this.value)):t!==null&&Or(this.value)===Or(t)&&this.matchesComparison(rl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ci extends nA{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ci(e,t)}matches(e){return iA(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function iA(n){return n.op==="and"}function sA(n){return bD(n)&&iA(n)}function bD(n){for(const e of n.filters)if(e instanceof Ci)return!1;return!0}function Ug(n){if(n instanceof qt)return n.field.canonicalString()+n.op.toString()+al(n.value);if(sA(n))return n.filters.map((e=>Ug(e))).join(",");{const e=n.filters.map((t=>Ug(t))).join(",");return`${n.op}(${e})`}}function rA(n,e){return n instanceof qt?(function(s,a){return a instanceof qt&&s.op===a.op&&s.field.isEqual(a.field)&&Zi(s.value,a.value)})(n,e):n instanceof Ci?(function(s,a){return a instanceof Ci&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&rA(c,a.filters[d])),!0):!1})(n,e):void Te(19439)}function aA(n){return n instanceof qt?(function(t){return`${t.field.canonicalString()} ${t.op} ${al(t.value)}`})(n):n instanceof Ci?(function(t){return t.op.toString()+" {"+t.getFilters().map(aA).join(" ,")+"}"})(n):"Filter"}class SD extends qt{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class wD extends qt{constructor(e,t){super(e,"in",t),this.keys=oA("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class AD extends qt{constructor(e,t){super(e,"not-in",t),this.keys=oA("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function oA(n,e){return(e.arrayValue?.values||[]).map((t=>_e.fromName(t.referenceValue)))}class CD extends qt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return k_(t)&&cc(t.arrayValue,this.value)}}class RD extends qt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cc(this.value.arrayValue,t)}}class ID extends qt{constructor(e,t){super(e,"not-in",t)}matches(e){if(cc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cc(this.value.arrayValue,t)}}class ND extends qt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!k_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>cc(this.value.arrayValue,s)))}}/**
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
 */class xD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function gb(n,e=null,t=[],s=[],a=null,l=null,c=null){return new xD(n,e,t,s,a,l,c)}function P_(n){const e=Re(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Ug(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Td(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>al(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>al(s))).join(",")),e.Te=t}return e.Te}function V_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!TD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!rA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pb(n.startAt,e.startAt)&&pb(n.endAt,e.endAt)}function jg(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function DD(n,e,t,s,a,l,c,d){return new bl(n,e,t,s,a,l,c,d)}function Sd(n){return new bl(n)}function _b(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lA(n){return n.collectionGroup!==null}function Ku(n){const e=Re(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Xt(dn.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new hc(l,s))})),t.has(dn.keyField().canonicalString())||e.Ie.push(new hc(dn.keyField(),s))}return e.Ie}function Qi(n){const e=Re(n);return e.Ee||(e.Ee=OD(e,Ku(n))),e.Ee}function OD(n,e){if(n.limitType==="F")return gb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new hc(a.field,l)}));const t=n.endAt?new Bf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Bf(n.startAt.position,n.startAt.inclusive):null;return gb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function zg(n,e){const t=n.filters.concat([e]);return new bl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ff(n,e,t){return new bl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function wd(n,e){return V_(Qi(n),Qi(e))&&n.limitType===e.limitType}function uA(n){return`${P_(Qi(n))}|lt:${n.limitType}`}function Fo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>aA(a))).join(", ")}]`),Td(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>al(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>al(a))).join(",")),`Target(${s})`})(Qi(n))}; limitType=${n.limitType})`}function Ad(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):_e.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of Ku(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=mb(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,Ku(s),a)||s.endAt&&!(function(c,d,p){const g=mb(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,Ku(s),a))})(n,e)}function MD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cA(n){return(e,t)=>{let s=!1;for(const a of Ku(n)){const l=kD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function kD(n,e,t){const s=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?rl(p,g):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Yw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=new Ft(_e.comparator);function Ls(){return PD}const hA=new Ft(_e.comparator);function Bu(...n){let e=hA;for(const t of n)e=e.insert(t.key,t);return e}function fA(n){let e=hA;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ca(){return $u()}function dA(){return $u()}function $u(){return new Fa((n=>n.toString()),((n,e)=>n.isEqual(e)))}const VD=new Ft(_e.comparator),LD=new Xt(_e.comparator);function Be(...n){let e=LD;for(const t of n)e=e.add(t);return e}const UD=new Xt(qe);function jD(){return UD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jf(e)?"-0":e}}function mA(n){return{integerValue:""+n}}function zD(n,e){return dD(e)?mA(e):L_(n,e)}/**
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
 */class Cd{constructor(){this._=void 0}}function qD(n,e,t){return n instanceof fc?(function(a,l){const c={fields:{[Xw]:{stringValue:$w},[Zw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&M_(l)&&(l=bd(l)),l&&(c.fields[Ww]=l),{mapValue:c}})(t,e):n instanceof ol?gA(n,e):n instanceof ll?_A(n,e):(function(a,l){const c=pA(a,l),d=yb(c)+yb(a.Ae);return Lg(c)&&Lg(a.Ae)?mA(d):L_(a.serializer,d)})(n,e)}function BD(n,e,t){return n instanceof ol?gA(n,e):n instanceof ll?_A(n,e):t}function pA(n,e){return n instanceof Hf?(function(s){return Lg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class fc extends Cd{}class ol extends Cd{constructor(e){super(),this.elements=e}}function gA(n,e){const t=yA(e);for(const s of n.elements)t.some((a=>Zi(a,s)))||t.push(s);return{arrayValue:{values:t}}}class ll extends Cd{constructor(e){super(),this.elements=e}}function _A(n,e){let t=yA(e);for(const s of n.elements)t=t.filter((a=>!Zi(a,s)));return{arrayValue:{values:t}}}class Hf extends Cd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function yb(n){return Ot(n.integerValue||n.doubleValue)}function yA(n){return k_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t){this.field=e,this.transform=t}}function FD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof ol&&a instanceof ol||s instanceof ll&&a instanceof ll?sl(s.elements,a.elements,Zi):s instanceof Hf&&a instanceof Hf?Zi(s.Ae,a.Ae):s instanceof fc&&a instanceof fc})(n.transform,e.transform)}class HD{constructor(e,t){this.version=e,this.transformResults=t}}class Mn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rd{}function vA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Id(n.key,Mn.none()):new Cc(n.key,n.data,Mn.none());{const t=n.data,s=Un.empty();let a=new Xt(dn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new jr(n.key,s,new Jn(a.toArray()),Mn.none())}}function GD(n,e,t){n instanceof Cc?(function(a,l,c){const d=a.value.clone(),p=Eb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof jr?(function(a,l,c){if(!wf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Eb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(EA(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Xu(n,e,t,s){return n instanceof Cc?(function(l,c,d,p){if(!wf(l.precondition,c))return d;const g=l.value.clone(),y=Tb(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof jr?(function(l,c,d,p){if(!wf(l.precondition,c))return d;const g=Tb(l.fieldTransforms,p,c),y=c.data;return y.setAll(EA(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return wf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function QD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=pA(s.transform,a||null);l!=null&&(t===null&&(t=Un.empty()),t.set(s.field,l))}return t||null}function vb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&sl(s,a,((l,c)=>FD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cc extends Rd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class jr extends Rd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function EA(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Eb(n,e,t){const s=new Map;Ze(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,BD(c,d,t[a]))}return s}function Tb(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,qD(l,c,e))}return s}class Id extends Rd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YD extends Rd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&GD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Xu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Xu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=dA();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=vA(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ce.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&sl(this.mutations,e.mutations,((t,s)=>vb(t,s)))&&sl(this.baseMutations,e.baseMutations,((t,s)=>vb(t,s)))}}class j_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return VD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new j_(e,t,s,a)}}/**
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
 */class $D{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt,Qe;function WD(n){switch(n){case $.OK:return Te(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function TA(n){if(n===void 0)return Vs("GRPC error has no .code"),$.UNKNOWN;switch(n){case jt.OK:return $.OK;case jt.CANCELLED:return $.CANCELLED;case jt.UNKNOWN:return $.UNKNOWN;case jt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case jt.INTERNAL:return $.INTERNAL;case jt.UNAVAILABLE:return $.UNAVAILABLE;case jt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case jt.NOT_FOUND:return $.NOT_FOUND;case jt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case jt.ABORTED:return $.ABORTED;case jt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case jt.DATA_LOSS:return $.DATA_LOSS;default:return Te(39323,{code:n})}}(Qe=jt||(jt={}))[Qe.OK=0]="OK",Qe[Qe.CANCELLED=1]="CANCELLED",Qe[Qe.UNKNOWN=2]="UNKNOWN",Qe[Qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qe[Qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qe[Qe.NOT_FOUND=5]="NOT_FOUND",Qe[Qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qe[Qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qe[Qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qe[Qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qe[Qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qe[Qe.ABORTED=10]="ABORTED",Qe[Qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qe[Qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qe[Qe.INTERNAL=13]="INTERNAL",Qe[Qe.UNAVAILABLE=14]="UNAVAILABLE",Qe[Qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ZD(){return new TextEncoder}/**
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
 */const JD=new wr([4294967295,4294967295],0);function bb(n){const e=ZD().encode(n),t=new Vw;return t.update(e),new Uint8Array(t.digest())}function Sb(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new wr([t,s],0),new wr([a,l],0)]}class z_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Fu(`Invalid padding: ${t}`);if(s<0)throw new Fu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Fu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Fu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=wr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(wr.fromNumber(s)));return a.compare(JD)===1&&(a=new wr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=bb(e),[s,a]=Sb(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new z_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=bb(e),[s,a]=Sb(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Fu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Rc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Nd(Ce.min(),a,new Ft(qe),Ls(),Be())}}class Rc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Rc(s,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class bA{constructor(e,t){this.targetId=e,this.Ce=t}}class SA{constructor(e,t,s=pn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class wb{constructor(){this.ve=0,this.Fe=Ab(),this.Me=pn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Be(),t=Be(),s=Be();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te(38017,{changeType:l})}})),new Rc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Ab()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ls(),this.Je=df(),this.He=df(),this.Ye=new Ft(qe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(jg(l))if(s===0){const c=new _e(l.path);this.et(t,c,bn.newNoDocument(c,Ce.min()))}else Ze(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Dr(s).toUint8Array()}catch(p){if(p instanceof Kw)return il("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new z_(c,a,l)}catch(p){return il(p instanceof Fu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&jg(d.target)){const p=new _e(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,bn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Be();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Nd(e,t,this.Ye,this.je,s);return this.je=Ls(),this.Je=df(),this.He=df(),this.Ye=new Ft(qe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new wb,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Xt(qe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Xt(qe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function df(){return new Ft(_e.comparator)}function Ab(){return new Ft(_e.comparator)}const tO={asc:"ASCENDING",desc:"DESCENDING"},nO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iO={and:"AND",or:"OR"};class sO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qg(n,e){return n.useProto3Json||Td(e)?e:{value:e}}function Gf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rO(n,e){return Gf(n,e.toTimestamp())}function Yi(n){return Ze(!!n,49232),Ce.fromTimestamp((function(t){const s=xr(t);return new gt(s.seconds,s.nanos)})(n))}function q_(n,e){return Bg(n,e).canonicalString()}function Bg(n,e){const t=(function(a){return new ft(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function AA(n){const e=ft.fromString(n);return Ze(xA(e),10190,{key:e.toString()}),e}function Fg(n,e){return q_(n.databaseId,e.path)}function cg(n,e){const t=AA(e);if(t.get(1)!==n.databaseId.projectId)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(RA(t))}function CA(n,e){return q_(n.databaseId,e)}function aO(n){const e=AA(n);return e.length===4?ft.emptyPath():RA(e)}function Hg(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function RA(n){return Ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Cb(n,e,t){return{name:Fg(n,e),fields:t.value.mapValue.fields}}function oO(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(Ze(y===void 0||typeof y=="string",58123),pn.fromBase64String(y||"")):(Ze(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),pn.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const y=g.code===void 0?$.UNKNOWN:TA(g.code);return new oe(y,g.message||"")})(c);t=new SA(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=cg(n,s.document.name),l=Yi(s.document.updateTime),c=s.document.createTime?Yi(s.document.createTime):Ce.min(),d=new Un({mapValue:{fields:s.document.fields}}),p=bn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new Af(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=cg(n,s.document),l=s.readTime?Yi(s.readTime):Ce.min(),c=bn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Af([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=cg(n,s.document),l=s.removedTargetIds||[];t=new Af([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new XD(a,l),d=s.targetId;t=new bA(d,c)}}return t}function lO(n,e){let t;if(e instanceof Cc)t={update:Cb(n,e.key,e.value)};else if(e instanceof Id)t={delete:Fg(n,e.key)};else if(e instanceof jr)t={update:Cb(n,e.key,e.data),updateMask:_O(e.fieldMask)};else{if(!(e instanceof YD))return Te(16599,{Vt:e.type});t={verify:Fg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof fc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ol)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ll)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Hf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Te(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:rO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)})(n,e.precondition)),t}function uO(n,e){return n&&n.length>0?(Ze(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?Yi(a.updateTime):Yi(l);return c.isEqual(Ce.min())&&(c=Yi(l)),new HD(c,a.transformResults||[])})(t,e)))):[]}function cO(n,e){return{documents:[CA(n,e.path)]}}function hO(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=CA(n,a);const l=(function(g){if(g.length!==0)return NA(Ci.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(b){return{field:Ho(b.field),direction:mO(b.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=qg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function fO(n){let e=aO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Ze(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const b=IA(T);return b instanceof Ci&&sA(b)?b.getFilters():[b]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((b=>(function(U){return new hc(Go(U.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(b)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let b;return b=typeof T=="object"?T.value:T,Td(b)?null:b})(t.limit));let p=null;t.startAt&&(p=(function(T){const b=!!T.before,x=T.values||[];return new Bf(x,b)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const b=!T.before,x=T.values||[];return new Bf(x,b)})(t.endAt)),DD(e,a,c,l,d,"F",p,g)}function dO(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function IA(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Go(t.unaryFilter.field);return qt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Go(t.unaryFilter.field);return qt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Go(t.unaryFilter.field);return qt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Go(t.unaryFilter.field);return qt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return qt.create(Go(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ci.create(t.compositeFilter.filters.map((s=>IA(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function mO(n){return tO[n]}function pO(n){return nO[n]}function gO(n){return iO[n]}function Ho(n){return{fieldPath:n.canonicalString()}}function Go(n){return dn.fromServerFormat(n.fieldPath)}function NA(n){return n instanceof qt?(function(t){if(t.op==="=="){if(db(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NAN"}};if(fb(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(db(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NOT_NAN"}};if(fb(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ho(t.field),op:pO(t.op),value:t.value}}})(n):n instanceof Ci?(function(t){const s=t.getFilters().map((a=>NA(a)));return s.length===1?s[0]:{compositeFilter:{op:gO(t.op),filters:s}}})(n):Te(54877,{filter:n})}function _O(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function xA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t,s,a,l=Ce.min(),c=Ce.min(),d=pn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.yt=e}}function vO(n){const e=fO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ff(e,e.limit,"L"):e}/**
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
 */class EO{constructor(){this.Cn=new TO}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Nr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class TO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Xt(ft.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Xt(ft.comparator)).toArray()}}/**
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
 */const Rb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DA=41943040;class Ln{static withCacheSize(e){return new Ln(e,Ln.DEFAULT_COLLECTION_PERCENTILE,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.DEFAULT_COLLECTION_PERCENTILE=10,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ln.DEFAULT=new Ln(DA,Ln.DEFAULT_COLLECTION_PERCENTILE,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ln.DISABLED=new Ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ib="LruGarbageCollector",bO=1048576;function Nb([n,e],[t,s]){const a=qe(n,t);return a===0?qe(e,s):a}class SO{constructor(e){this.Ir=e,this.buffer=new Xt(Nb),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Nb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ce(Ib,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Tl(t)?ce(Ib,"Ignoring IndexedDB error during garbage collection: ",t):await El(t)}await this.Vr(3e5)}))}}class AO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(Ed.ce);const s=new SO(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(Rb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rb):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),Bo()<=je.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function CO(n,e){return new AO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.changes=new Fa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Xu(s.mutation,a,Jn.empty(),gt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Be()){const a=Ca();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=Bu();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Ca();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Be())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Ls();const c=$u(),d=(function(){return $u()})();return t.forEach(((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof jr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Xu(y.mutation,g,y.mutation.getFieldMask(),gt.now())):c.set(g.key,Jn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>d.set(g,new IO(y,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=$u();let a=new Ft(((c,d)=>c-d)),l=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Jn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||Be()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=dA();y.forEach((b=>{if(!l.has(b)){const x=vA(t.get(b),s.get(b));x!==null&&T.set(b,x),l=l.add(b)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Z.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return _e.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(Ca());let d=oc,p=l;return c.next((g=>Z.forEach(g,((y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?Z.resolve():this.remoteDocumentCache.getEntry(e,y).next((b=>{p=p.insert(y,b)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Be()))).next((y=>({batchId:d,changes:fA(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((s=>{let a=Bu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Bu();return this.indexManager.getCollectionParents(e,l).next((d=>Z.forEach(d,(p=>{const g=(function(T,b){return new bl(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((T,b)=>{c=c.insert(T,b)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,bn.newInvalidDocument(y)))}));let d=Bu();return c.forEach(((p,g)=>{const y=l.get(p);y!==void 0&&Xu(y.mutation,g,Jn.empty(),gt.now()),Ad(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Yi(a.createTime)}})(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:vO(a.bundledQuery),readTime:Yi(a.readTime)}})(t)),Z.resolve()}}/**
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
 */class DO{constructor(){this.overlays=new Ft(_e.comparator),this.qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ca();return Z.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=Ca(),l=t.length+1,c=new _e(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Ft(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Ca(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Ca(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return Z.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new $D(t,s));let l=this.qr.get(t);l===void 0&&(l=Be(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class OO{constructor(){this.sessionToken=pn.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(){this.Qr=new Xt(sn.$r),this.Ur=new Xt(sn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new sn(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new sn(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new _e(new ft([])),s=new sn(t,e),a=new sn(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new ft([])),s=new sn(t,e),a=new sn(t,e+1);let l=Be();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new sn(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class sn{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||qe(e.Yr,t.Yr)}static Kr(e,t){return qe(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Xt(sn.$r)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new KD(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new sn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?O_:this.tr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new sn(t,0),a=new sn(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Xt(qe);return t.forEach((a=>{const l=new sn(a,0),c=new sn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),Z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;_e.isDocumentKey(l)||(l=l.child(""));const c=new sn(new _e(l),0);let d=new Xt(qe);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),Z.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Z.forEach(t.mutations,(a=>{const l=new sn(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new sn(t,0),a=this.Zr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.ri=e,this.docs=(function(){return new Ft(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():bn.newInvalidDocument(t))}getEntries(e,t){let s=Ls();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():bn.newInvalidDocument(a))})),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ls();const c=t.path,d=new _e(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||uD(lD(y),s)<=0||(a.has(y.key)||Ad(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Te(9500)}ii(e,t){return Z.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new PO(this)}getSize(e){return Z.resolve(this.size)}}class PO extends RO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),Z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.persistence=e,this.si=new Fa((t=>P_(t)),V_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.oi=0,this._i=new B_,this.targetCount=0,this.ai=ul.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),Z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ul(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Pr(t),Z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),Z.waitFor(l).next((()=>a))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ed(0),this.li=!1,this.li=!0,this.hi=new OO,this.referenceDelegate=e(this),this.Pi=new VO(this),this.indexManager=new EO,this.remoteDocumentCache=(function(a){return new kO(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new yO(t),this.Ii=new xO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new MO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ce("MemoryPersistence","Starting transaction:",e);const a=new LO(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return Z.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class LO extends hD{constructor(e){super(),this.currentSequenceNumber=e}}class F_{constructor(e){this.persistence=e,this.Ri=new B_,this.Vi=null}static mi(e){return new F_(e)}get fi(){if(this.Vi)return this.Vi;throw Te(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.fi,(s=>{const a=_e.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ce.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return Z.or([()=>Z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Qf{constructor(e,t){this.persistence=e,this.pi=new Fa((s=>mD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=CO(this,t)}static mi(e,t){return new Qf(e,t)}Ei(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return Z.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?Z.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ce.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bf(e.data.value)),t}br(e,t,s){return Z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Be(),a=Be();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new H_(e,t.fromCache,s,a)}}/**
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
 */class UO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return AI()?8:fD(wn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new UO;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Bo()<=je.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Z.resolve()):(Bo()<=je.DEBUG&&ce("QueryEngine","Query:",Fo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Bo()<=je.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qi(t))):Z.resolve())}ys(e,t){if(_b(t))return Z.resolve(null);let s=Qi(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Ff(t,null,"F"),s=Qi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Be(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Ff(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return _b(t)||a.isEqual(Ce.min())?Z.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?Z.resolve(null):(Bo()<=je.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Fo(t)),this.vs(e,c,t,oD(a,oc)).next((d=>d)))}))}Ds(e,t){let s=new Xt(cA(e));return t.forEach(((a,l)=>{Ad(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Bo()<=je.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Fo(t)),this.ps.getDocumentsMatchingQuery(e,t,Nr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="LocalStore",zO=3e8;class qO{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Ft(qe),this.xs=new Fa((l=>P_(l)),V_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function BO(n,e,t,s){return new qO(n,e,t,s)}async function MA(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Be();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function FO(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,y){const T=g.batch,b=T.keys();let x=Z.resolve();return b.forEach((U=>{x=x.next((()=>y.getEntry(p,U))).next((Q=>{const F=g.docVersions.get(U);Ze(F!==null,48541),Q.version.compareTo(F)<0&&(T.applyToRemoteDocument(Q,g),Q.isValidDocument()&&(Q.setReadTime(g.commitVersion),y.addEntry(Q)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Be();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function kA(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function HO(n,e){const t=Re(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,T)=>{const b=a.get(T);if(!b)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let x=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(pn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):y.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(y.resumeToken,s)),a=a.insert(T,x),(function(Q,F,ue){return Q.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=zO?!0:ue.addedDocuments.size+ue.modifiedDocuments.size+ue.removedDocuments.size>0})(b,x,y)&&d.push(t.Pi.updateTargetData(l,x))}));let p=Ls(),g=Be();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push(GO(l,c,e.documentUpdates).next((y=>{p=y.ks,g=y.qs}))),!s.isEqual(Ce.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return Z.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function GO(n,e,t){let s=Be(),a=Be();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Ls();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ce.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ce(G_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function QO(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=O_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function YO(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,Z.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new Er(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Gg(n,e,t){const s=Re(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Tl(c))throw c;ce(G_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function xb(n,e,t){const s=Re(n);let a=Ce.min(),l=Be();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,y){const T=Re(p),b=T.xs.get(y);return b!==void 0?Z.resolve(T.Ms.get(b)):T.Pi.getTargetData(g,y)})(s,c,Qi(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ce.min(),t?l:Be()))).next((d=>(KO(s,MD(e),d),{documents:d,Qs:l})))))}function KO(n,e,t){let s=n.Os.get(e)||Ce.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Db{constructor(){this.activeTargetIds=jD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $O{constructor(){this.Mo=new Db,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Db,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XO{Oo(e){}shutdown(){}}/**
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
 */const Ob="ConnectivityMonitor";class Mb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ce(Ob,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ce(Ob,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mf=null;function Qg(){return mf===null?mf=(function(){return 268435456+Math.round(2147483648*Math.random())})():mf++,"0x"+mf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="RestConnection",WO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===zf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Qg(),d=this.zo(e,t.toUriEncodedString());ce(hg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),y=Lr(g);return this.Jo(e,d,p,s,y).then((T=>(ce(hg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw il(hg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=WO[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="WebChannelConnection";class eM extends ZO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Qg();return new Promise(((d,p)=>{const g=new Lw;g.setWithCredentials(!0),g.listenOnce(Uw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Tf.NO_ERROR:const T=g.getResponseJson();ce(En,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Tf.TIMEOUT:ce(En,`RPC '${e}' ${c} timed out`),p(new oe($.DEADLINE_EXCEEDED,"Request time out"));break;case Tf.HTTP_ERROR:const b=g.getStatus();if(ce(En,`RPC '${e}' ${c} failed with status:`,b,"response text:",g.getResponseText()),b>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const U=x?.error;if(U&&U.status&&U.message){const Q=(function(ue){const te=ue.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(te)>=0?te:$.UNKNOWN})(U.status);p(new oe(Q,U.message))}else p(new oe($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new oe($.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ce(En,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);ce(En,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Qg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=qw(),d=zw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");ce(En,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);this.I_(T);let b=!1,x=!1;const U=new JO({Yo:F=>{x?ce(En,`Not sending because RPC '${e}' stream ${a} is closed:`,F):(b||(ce(En,`Opening RPC '${e}' stream ${a} transport.`),T.open(),b=!0),ce(En,`RPC '${e}' stream ${a} sending:`,F),T.send(F))},Zo:()=>T.close()}),Q=(F,ue,te)=>{F.listen(ue,(le=>{try{te(le)}catch(me){setTimeout((()=>{throw me}),0)}}))};return Q(T,qu.EventType.OPEN,(()=>{x||(ce(En,`RPC '${e}' stream ${a} transport opened.`),U.o_())})),Q(T,qu.EventType.CLOSE,(()=>{x||(x=!0,ce(En,`RPC '${e}' stream ${a} transport closed`),U.a_(),this.E_(T))})),Q(T,qu.EventType.ERROR,(F=>{x||(x=!0,il(En,`RPC '${e}' stream ${a} transport errored. Name:`,F.name,"Message:",F.message),U.a_(new oe($.UNAVAILABLE,"The operation could not be completed")))})),Q(T,qu.EventType.MESSAGE,(F=>{if(!x){const ue=F.data[0];Ze(!!ue,16349);const te=ue,le=te?.error||te[0]?.error;if(le){ce(En,`RPC '${e}' stream ${a} received error:`,le);const me=le.status;let pe=(function(C){const N=jt[C];if(N!==void 0)return TA(N)})(me),xe=le.message;pe===void 0&&(pe=$.INTERNAL,xe="Unknown error status: "+me+" with message "+le.message),x=!0,U.a_(new oe(pe,xe)),T.close()}else ce(En,`RPC '${e}' stream ${a} received:`,ue),U.u_(ue)}})),Q(d,jw.STAT_EVENT,(F=>{F.stat===Mg.PROXY?ce(En,`RPC '${e}' stream ${a} detected buffering proxy`):F.stat===Mg.NOPROXY&&ce(En,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function fg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){return new sO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ce("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="PersistentStream";class VA{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new PA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Vs(t.toString()),Vs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new oe($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ce(kb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ce(kb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tM extends VA{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=oO(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ce.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ce.min():c.readTime?Yi(c.readTime):Ce.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Hg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=jg(p)?{documents:cO(l,p)}:{query:hO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=wA(l,c.resumeToken);const g=qg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ce.min())>0){d.readTime=Gf(l,c.snapshotVersion.toTimestamp());const g=qg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=dO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Hg(this.serializer),t.removeTarget=e,this.q_(t)}}class nM extends VA{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=uO(e.writeResults,e.commitTime),s=Yi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Hg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>lO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{}class sM extends iM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Bg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new oe($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Bg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new oe($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class rM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vs(t),this.aa=!1):ce("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="RemoteStore";class aM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Ha(this)&&(ce(La,"Restarting streams for network reachability change."),await(async function(p){const g=Re(p);g.Ea.add(4),await Ic(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Dd(g)})(this))}))})),this.Ra=new rM(s,a)}}async function Dd(n){if(Ha(n))for(const e of n.da)await e(!0)}async function Ic(n){for(const e of n.da)await e(!1)}function LA(n,e){const t=Re(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),$_(t)?K_(t):Sl(t).O_()&&Y_(t,e))}function Q_(n,e){const t=Re(n),s=Sl(t);t.Ia.delete(e),s.O_()&&UA(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ha(t)&&t.Ra.set("Unknown"))}function Y_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sl(n).Y_(e)}function UA(n,e){n.Va.Ue(e),Sl(n).Z_(e)}function K_(n){n.Va=new eO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Sl(n).start(),n.Ra.ua()}function $_(n){return Ha(n)&&!Sl(n).x_()&&n.Ia.size>0}function Ha(n){return Re(n).Ea.size===0}function jA(n){n.Va=void 0}async function oM(n){n.Ra.set("Online")}async function lM(n){n.Ia.forEach(((e,t)=>{Y_(n,e)}))}async function uM(n,e){jA(n),$_(n)?(n.Ra.ha(e),K_(n)):n.Ra.set("Unknown")}async function cM(n,e,t){if(n.Ra.set("Online"),e instanceof SA&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){ce(La,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yf(n,s)}else if(e instanceof Af?n.Va.Ze(e):e instanceof bA?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ce.min()))try{const s=await kA(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const y=l.Ia.get(p);if(!y)return;l.Ia.set(p,y.withResumeToken(pn.EMPTY_BYTE_STRING,y.snapshotVersion)),UA(l,p);const T=new Er(y.target,p,g,y.sequenceNumber);Y_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){ce(La,"Failed to raise snapshot:",s),await Yf(n,s)}}async function Yf(n,e,t){if(!Tl(e))throw e;n.Ea.add(1),await Ic(n),n.Ra.set("Offline"),t||(t=()=>kA(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ce(La,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Dd(n)}))}function zA(n,e){return e().catch((t=>Yf(n,t,e)))}async function Od(n){const e=Re(n),t=Mr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:O_;for(;hM(e);)try{const a=await QO(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,fM(e,a)}catch(a){await Yf(e,a)}qA(e)&&BA(e)}function hM(n){return Ha(n)&&n.Ta.length<10}function fM(n,e){n.Ta.push(e);const t=Mr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function qA(n){return Ha(n)&&!Mr(n).x_()&&n.Ta.length>0}function BA(n){Mr(n).start()}async function dM(n){Mr(n).ra()}async function mM(n){const e=Mr(n);for(const t of n.Ta)e.ea(t.mutations)}async function pM(n,e,t){const s=n.Ta.shift(),a=j_.from(s,e,t);await zA(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Od(n)}async function gM(n,e){e&&Mr(n).X_&&await(async function(s,a){if((function(c){return WD(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();Mr(s).B_(),await zA(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Od(s)}})(n,e),qA(n)&&BA(n)}async function Pb(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ce(La,"RemoteStore received new credentials");const s=Ha(t);t.Ea.add(3),await Ic(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Dd(t)}async function _M(n,e){const t=Re(n);e?(t.Ea.delete(2),await Dd(t)):e||(t.Ea.add(2),await Ic(t),t.Ra.set("Unknown"))}function Sl(n){return n.ma||(n.ma=(function(t,s,a){const l=Re(t);return l.sa(),new tM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:oM.bind(null,n),t_:lM.bind(null,n),r_:uM.bind(null,n),H_:cM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),$_(n)?K_(n):n.Ra.set("Unknown")):(await n.ma.stop(),jA(n))}))),n.ma}function Mr(n){return n.fa||(n.fa=(function(t,s,a){const l=Re(t);return l.sa(),new nM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:dM.bind(null,n),r_:gM.bind(null,n),ta:mM.bind(null,n),na:pM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Od(n)):(await n.fa.stop(),n.Ta.length>0&&(ce(La,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new X_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function W_(n,e){if(Vs("AsyncQueue",`${e}: ${n}`),Tl(n))return new oe($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{static emptySet(e){return new Wo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||_e.comparator(t.key,s.key):(t,s)=>_e.comparator(t.key,s.key),this.keyedMap=Bu(),this.sortedSet=new Ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Wo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.ga=new Ft(_e.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Te(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class cl{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new cl(e,t,Wo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class vM{constructor(){this.queries=Lb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Re(t),l=a.queries;a.queries=Lb(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new oe($.ABORTED,"Firestore shutting down"))}}function Lb(){return new Fa((n=>uA(n)),wd)}async function Z_(n,e){const t=Re(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new yM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=W_(c,`Initialization of query '${Fo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ey(t)}async function J_(n,e){const t=Re(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function EM(n,e){const t=Re(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&ey(t)}function TM(n,e,t){const s=Re(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function ey(n){n.Ca.forEach((e=>{e.next()}))}var Yg,Ub;(Ub=Yg||(Yg={})).Ma="default",Ub.Cache="cache";class ty{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new cl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=cl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Yg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.key=e}}class HA{constructor(e){this.key=e}}class bM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Be(),this.mutatedKeys=Be(),this.eu=cA(e),this.tu=new Wo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Vb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const b=a.get(y),x=Ad(this.query,T)?T:null,U=!!b&&this.mutatedKeys.has(b.key),Q=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let F=!1;b&&x?b.data.isEqual(x.data)?U!==Q&&(s.track({type:3,doc:x}),F=!0):this.su(b,x)||(s.track({type:2,doc:x}),F=!0,(p&&this.eu(x,p)>0||g&&this.eu(x,g)<0)&&(d=!0)):!b&&x?(s.track({type:0,doc:x}),F=!0):b&&!x&&(s.track({type:1,doc:b}),F=!0,(p||g)&&(d=!0)),F&&(x?(c=c.add(x),l=Q?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(x,U){const Q=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Rt:F})}};return Q(x)-Q(U)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new cl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Be(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new HA(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new FA(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return cl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ny="SyncEngine";class SM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class wM{constructor(e){this.key=e,this.hu=!1}}class AM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Fa((d=>uA(d)),wd),this.Iu=new Map,this.Eu=new Set,this.du=new Ft(_e.comparator),this.Au=new Map,this.Ru=new B_,this.Vu={},this.mu=new Map,this.fu=ul.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function CM(n,e,t=!0){const s=XA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await GA(s,e,t,!0),a}async function RM(n,e){const t=XA(n);await GA(t,e,!0,!1)}async function GA(n,e,t,s){const a=await YO(n.localStore,Qi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await IM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&LA(n.remoteStore,a),d}async function IM(n,e,t,s,a){n.pu=(T,b,x)=>(async function(Q,F,ue,te){let le=F.view.ru(ue);le.Cs&&(le=await xb(Q.localStore,F.query,!1).then((({documents:k})=>F.view.ru(k,le))));const me=te&&te.targetChanges.get(F.targetId),pe=te&&te.targetMismatches.get(F.targetId)!=null,xe=F.view.applyChanges(le,Q.isPrimaryClient,me,pe);return zb(Q,F.targetId,xe.au),xe.snapshot})(n,T,b,x);const l=await xb(n.localStore,e,!0),c=new bM(e,l.Qs),d=c.ru(l.documents),p=Rc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);zb(n,t,g.au);const y=new SM(e,t,c);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function NM(n,e,t){const s=Re(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!wd(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Gg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Q_(s.remoteStore,a.targetId),Kg(s,a.targetId)})).catch(El)):(Kg(s,a.targetId),await Gg(s.localStore,a.targetId,!0))}async function xM(n,e){const t=Re(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Q_(t.remoteStore,s.targetId))}async function DM(n,e,t){const s=UM(n);try{const a=await(function(c,d){const p=Re(c),g=gt.now(),y=d.reduce(((x,U)=>x.add(U.key)),Be());let T,b;return p.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let U=Ls(),Q=Be();return p.Ns.getEntries(x,y).next((F=>{U=F,U.forEach(((ue,te)=>{te.isValidDocument()||(Q=Q.add(ue))}))})).next((()=>p.localDocuments.getOverlayedDocuments(x,U))).next((F=>{T=F;const ue=[];for(const te of d){const le=QD(te,T.get(te.key).overlayedDocument);le!=null&&ue.push(new jr(te.key,le,tA(le.value.mapValue),Mn.exists(!0)))}return p.mutationQueue.addMutationBatch(x,g,ue,d)})).next((F=>{b=F;const ue=F.applyToLocalDocumentSet(T,Q);return p.documentOverlayCache.saveOverlays(x,F.batchId,ue)}))})).then((()=>({batchId:b.batchId,changes:fA(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Ft(qe)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Nc(s,a.changes),await Od(s.remoteStore)}catch(a){const l=W_(a,"Failed to persist write");t.reject(l)}}async function QA(n,e){const t=Re(n);try{const s=await HO(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(Ze(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?Ze(c.hu,14607):a.removedDocuments.size>0&&(Ze(c.hu,42227),c.hu=!1))})),await Nc(t,s,e)}catch(s){await El(s)}}function jb(n,e,t){const s=Re(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=Re(c);p.onlineState=d;let g=!1;p.queries.forEach(((y,T)=>{for(const b of T.Sa)b.va(d)&&(g=!0)})),g&&ey(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function OM(n,e,t){const s=Re(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Ft(_e.comparator);c=c.insert(l,bn.newNoDocument(l,Ce.min()));const d=Be().add(l),p=new Nd(Ce.min(),new Map,new Ft(qe),c,d);await QA(s,p),s.du=s.du.remove(l),s.Au.delete(e),iy(s)}else await Gg(s.localStore,e,!1).then((()=>Kg(s,e,t))).catch(El)}async function MM(n,e){const t=Re(n),s=e.batch.batchId;try{const a=await FO(t.localStore,e);KA(t,s,null),YA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Nc(t,a)}catch(a){await El(a)}}async function kM(n,e,t){const s=Re(n);try{const a=await(function(c,d){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(Ze(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>p.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);KA(s,e,t),YA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Nc(s,a)}catch(a){await El(a)}}function YA(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function KA(n,e,t){const s=Re(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Kg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||$A(n,s)}))}function $A(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Q_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),iy(n))}function zb(n,e,t){for(const s of t)s instanceof FA?(n.Ru.addReference(s.key,e),PM(n,s)):s instanceof HA?(ce(ny,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||$A(n,s.key)):Te(19791,{wu:s})}function PM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(ce(ny,"New document in limbo: "+t),n.Eu.add(s),iy(n))}function iy(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new _e(ft.fromString(e)),s=n.fu.next();n.Au.set(s,new wM(t)),n.du=n.du.insert(t,s),LA(n.remoteStore,new Er(Qi(Sd(t.path)),s,"TargetPurposeLimboResolution",Ed.ce))}}async function Nc(n,e,t){const s=Re(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){a.push(g);const y=H_.As(p.targetId,g);l.push(y)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const y=Re(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>Z.forEach(g,(b=>Z.forEach(b.Es,(x=>y.persistence.referenceDelegate.addReference(T,b.targetId,x))).next((()=>Z.forEach(b.ds,(x=>y.persistence.referenceDelegate.removeReference(T,b.targetId,x)))))))))}catch(T){if(!Tl(T))throw T;ce(G_,"Failed to update sequence numbers: "+T)}for(const T of g){const b=T.targetId;if(!T.fromCache){const x=y.Ms.get(b),U=x.snapshotVersion,Q=x.withLastLimboFreeSnapshotVersion(U);y.Ms=y.Ms.insert(b,Q)}}})(s.localStore,l))}async function VM(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ce(ny,"User change. New user:",e.toKey());const s=await MA(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new oe($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Nc(t,s.Ls)}}function LM(n,e){const t=Re(n),s=t.Au.get(e);if(s&&s.hu)return Be().add(s.key);{let a=Be();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function XA(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=QA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OM.bind(null,e),e.Pu.H_=EM.bind(null,e.eventManager),e.Pu.yu=TM.bind(null,e.eventManager),e}function UM(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kM.bind(null,e),e}class Kf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return BO(this.persistence,new jO,e.initialUser,this.serializer)}Cu(e){return new OA(F_.mi,this.serializer)}Du(e){return new $O}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kf.provider={build:()=>new Kf};class jM extends Kf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ze(this.persistence.referenceDelegate instanceof Qf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new wO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ln.withCacheSize(this.cacheSizeBytes):Ln.DEFAULT;return new OA((s=>Qf.mi(s,t)),this.serializer)}}class $g{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=VM.bind(null,this.syncEngine),await _M(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vM})()}createDatastore(e){const t=xd(e.databaseInfo.databaseId),s=(function(l){return new eM(l)})(e.databaseInfo);return(function(l,c,d,p){return new sM(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new aM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>jb(this.syncEngine,t,0)),(function(){return Mb.v()?new Mb:new XO})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,y){const T=new AM(a,l,c,d,p,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Re(t);ce(La,"RemoteStore shutting down."),s.Ea.add(5),await Ic(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}$g.provider={build:()=>new $g};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="FirestoreClient";class zM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Tn.UNAUTHENTICATED,this.clientId=D_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{ce(kr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(ce(kr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=W_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function dg(n,e){n.asyncQueue.verifyOperationInProgress(),ce(kr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await MA(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function qb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qM(n);ce(kr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Pb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>Pb(e.remoteStore,a))),n._onlineComponents=e}async function qM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(kr,"Using user provided OfflineComponentProvider");try{await dg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;il("Error using user provided cache. Falling back to memory cache: "+t),await dg(n,new Kf)}}else ce(kr,"Using default OfflineComponentProvider"),await dg(n,new jM(void 0));return n._offlineComponents}async function WA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(kr,"Using user provided OnlineComponentProvider"),await qb(n,n._uninitializedComponentsProvider._online)):(ce(kr,"Using default OnlineComponentProvider"),await qb(n,new $g))),n._onlineComponents}function BM(n){return WA(n).then((e=>e.syncEngine))}async function $f(n){const e=await WA(n),t=e.eventManager;return t.onListen=CM.bind(null,e.syncEngine),t.onUnlisten=NM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xM.bind(null,e.syncEngine),t}function FM(n,e,t={}){const s=new Os;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new sy({next:b=>{y.Nu(),c.enqueueAndForget((()=>J_(l,T)));const x=b.docs.has(d);!x&&b.fromCache?g.reject(new oe($.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&b.fromCache&&p&&p.source==="server"?g.reject(new oe($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new ty(Sd(d.path),y,{includeMetadataChanges:!0,qa:!0});return Z_(l,T)})(await $f(n),n.asyncQueue,e,t,s))),s.promise}function HM(n,e,t={}){const s=new Os;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new sy({next:b=>{y.Nu(),c.enqueueAndForget((()=>J_(l,T))),b.fromCache&&p.source==="server"?g.reject(new oe($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new ty(d,y,{includeMetadataChanges:!0,qa:!0});return Z_(l,T)})(await $f(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function ZA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="firestore.googleapis.com",Fb=!0;class Hb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=JA,this.ssl=Fb}else this.host=e.host,this.ssl=e.ssl??Fb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bO)throw new oe($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Md{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new X2;switch(s.type){case"firstParty":return new eD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Bb.get(t);s&&(ce("ComponentProvider","Removing Datastore"),Bb.delete(t),s.terminate())})(this),Promise.resolve()}}function GM(n,e,t,s={}){n=On(n,Md);const a=Lr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(g_(`https://${d}`),__("Firestore",!0)),l.host!==JA&&l.host!==d&&il("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Xi(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=Tn.MOCK_USER;else{g=WS(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new oe($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Tn(T)}n._authCredentials=new W2(new Fw(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class Ct{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}toJSON(){return{type:Ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ac(t,Ct._jsonSchema))return new Ct(e,s||null,new _e(ft.fromString(t.referencePath)))}}Ct._jsonSchemaVersion="firestore/documentReference/1.0",Ct._jsonSchema={type:Bt("string",Ct._jsonSchemaVersion),referencePath:Bt("string")};class Cr extends qs{constructor(e,t,s){super(e,t,Sd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new _e(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function $t(n,e,...t){if(n=dt(n),Hw("collection","path",e),n instanceof Md){const s=ft.fromString(e,...t);return ib(s),new Cr(n,null,s)}{if(!(n instanceof Ct||n instanceof Cr))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ft.fromString(e,...t));return ib(s),new Cr(n.firestore,null,s)}}function mn(n,e,...t){if(n=dt(n),arguments.length===1&&(e=D_.newId()),Hw("doc","path",e),n instanceof Md){const s=ft.fromString(e,...t);return nb(s),new Ct(n,null,new _e(s))}{if(!(n instanceof Ct||n instanceof Cr))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ft.fromString(e,...t));return nb(s),new Ct(n.firestore,n instanceof Cr?n.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="AsyncQueue";class Qb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new PA(this,"async_queue_retry"),this._c=()=>{const s=fg();s&&ce(Gb,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=fg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=fg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Os;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Tl(e))throw e;ce(Gb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Vs("INTERNAL UNHANDLED ERROR: ",Yb(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=X_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Te(47125,{Pc:Yb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Yb(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Kb(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Ji extends Md{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new Qb,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qb(e),this._firestoreClient=void 0,await e}}}function QM(n,e){const t=typeof n=="object"?n:E_(),s=typeof n=="string"?n:zf,a=pd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=KS("firestore");l&&GM(a,...l)}return a}function xc(n){if(n._terminated)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||YM(n),n._firestoreClient}function YM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new _D(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ZA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new zM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new di(pn.fromBase64String(e))}catch(t){throw new oe($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new di(pn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:di._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ac(e,di._jsonSchema))return di.fromBase64String(e.bytes)}}di._jsonSchemaVersion="firestore/bytes/1.0",di._jsonSchema={type:Bt("string",di._jsonSchemaVersion),bytes:Bt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return qe(this._lat,e._lat)||qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ki._jsonSchemaVersion}}static fromJSON(e){if(Ac(e,Ki._jsonSchema))return new Ki(e.latitude,e.longitude)}}Ki._jsonSchemaVersion="firestore/geoPoint/1.0",Ki._jsonSchema={type:Bt("string",Ki._jsonSchemaVersion),latitude:Bt("number"),longitude:Bt("number")};/**
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
 */class $i{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$i._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ac(e,$i._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $i(e.vectorValues);throw new oe($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$i._jsonSchemaVersion="firestore/vectorValue/1.0",$i._jsonSchema={type:Bt("string",$i._jsonSchemaVersion),vectorValues:Bt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=/^__.*__$/;class $M{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cc(e,this.data,t,this.fieldTransforms)}}class e1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new jr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function t1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ac:n})}}class kd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new kd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Xf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(t1(this.Ac)&&KM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class XM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||xd(e)}Cc(e,t,s,a=!1){return new kd({Ac:e,methodName:t,Dc:s,path:dn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oc(n){const e=n._freezeSettings(),t=xd(n._databaseId);return new XM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ry(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);uy("Data must be an object, but it was:",c,s);const d=r1(s,c);let p,g;if(l.merge)p=new Jn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const b=Xg(e,T,t);if(!c.contains(b))throw new oe($.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);o1(y,b)||y.push(b)}p=new Jn(y),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new $M(new Un(d),p,g)}class Pd extends wl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pd}}function n1(n,e,t){return new kd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ay extends wl{_toFieldTransform(e){return new U_(e.path,new fc)}isEqual(e){return e instanceof ay}}class oy extends wl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=n1(this,e,!0),s=this.vc.map((l=>Ga(l,t))),a=new ol(s);return new U_(e.path,a)}isEqual(e){return e instanceof oy&&Xi(this.vc,e.vc)}}class ly extends wl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=n1(this,e,!0),s=this.vc.map((l=>Ga(l,t))),a=new ll(s);return new U_(e.path,a)}isEqual(e){return e instanceof ly&&Xi(this.vc,e.vc)}}function i1(n,e,t,s){const a=n.Cc(1,e,t);uy("Data must be an object, but it was:",a,s);const l=[],c=Un.empty();Ur(s,((p,g)=>{const y=cy(e,p,t);g=dt(g);const T=a.yc(y);if(g instanceof Pd)l.push(y);else{const b=Ga(g,T);b!=null&&(l.push(y),c.set(y,b))}}));const d=new Jn(l);return new e1(c,d,a.fieldTransforms)}function s1(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Xg(e,s,t)],p=[a];if(l.length%2!=0)throw new oe($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(Xg(e,l[b])),p.push(l[b+1]);const g=[],y=Un.empty();for(let b=d.length-1;b>=0;--b)if(!o1(g,d[b])){const x=d[b];let U=p[b];U=dt(U);const Q=c.yc(x);if(U instanceof Pd)g.push(x);else{const F=Ga(U,Q);F!=null&&(g.push(x),y.set(x,F))}}const T=new Jn(g);return new e1(y,T,c.fieldTransforms)}function WM(n,e,t,s=!1){return Ga(t,n.Cc(s?4:3,e))}function Ga(n,e){if(a1(n=dt(n)))return uy("Unsupported field value:",e,n),r1(n,e);if(n instanceof wl)return(function(s,a){if(!t1(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Ga(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return zD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=gt.fromDate(s);return{timestampValue:Gf(a.serializer,l)}}if(s instanceof gt){const l=new gt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Gf(a.serializer,l)}}if(s instanceof Ki)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof di)return{bytesValue:wA(a.serializer,s._byteString)};if(s instanceof Ct){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:q_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof $i)return(function(c,d){return{mapValue:{fields:{[Jw]:{stringValue:eA},[qf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return L_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${vd(s)}`)})(n,e)}function r1(n,e){const t={};return Yw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(n,((s,a)=>{const l=Ga(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function a1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Ki||n instanceof di||n instanceof Ct||n instanceof wl||n instanceof $i)}function uy(n,e,t){if(!a1(t)||!Gw(t)){const s=vd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Xg(n,e,t){if((e=dt(e))instanceof Dc)return e._internalPath;if(typeof e=="string")return cy(n,e);throw Xf("Field path arguments must be of type string or ",n,!1,void 0,t)}const ZM=new RegExp("[~\\*/\\[\\]]");function cy(n,e,t){if(e.search(ZM)>=0)throw Xf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Dc(...e.split("."))._internalPath}catch{throw Xf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new oe($.INVALID_ARGUMENT,d+n+p)}function o1(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JM extends l1{data(){return super.data()}}function Vd(n,e){return typeof e=="string"?cy(n,e):e instanceof Dc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hy{}class fy extends hy{}function Sn(n,e,...t){let s=[];e instanceof hy&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof dy)).length,d=l.filter((p=>p instanceof Ld)).length;if(c>1||c>0&&d>0)throw new oe($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Ld extends fy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ld(e,t,s)}_apply(e){const t=this._parse(e);return f1(e._query,t),new qs(e.firestore,e.converter,zg(e._query,t))}_parse(e){const t=Oc(e.firestore);return(function(l,c,d,p,g,y,T){let b;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new oe($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Xb(T,y);const U=[];for(const Q of T)U.push($b(p,l,Q));b={arrayValue:{values:U}}}else b=$b(p,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Xb(T,y),b=WM(d,c,T,y==="in"||y==="not-in");return qt.create(g,y,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rt(n,e,t){const s=e,a=Vd("where",n);return Ld._create(a,s,t)}class dy extends hy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ci.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)f1(c,p),c=zg(c,p)})(e._query,t),new qs(e.firestore,e.converter,zg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class my extends fy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new my(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new oe($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new oe($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hc(l,c)})(e._query,this._field,this._direction);return new qs(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new bl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function c1(n,e="asc"){const t=e,s=Vd("orderBy",n);return my._create(s,t)}class py extends fy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new py(e,t,s)}_apply(e){return new qs(e.firestore,e.converter,Ff(e._query,this._limit,this._limitType))}}function h1(n){return py._create("limit",n,"F")}function $b(n,e,t){if(typeof(t=dt(t))=="string"){if(t==="")throw new oe($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lA(e)&&t.indexOf("/")!==-1)throw new oe($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ft.fromString(t));if(!_e.isDocumentKey(s))throw new oe($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return hb(n,new _e(s))}if(t instanceof Ct)return hb(n,t._key);throw new oe($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vd(t)}.`)}function Xb(n,e){if(!Array.isArray(n)||n.length===0)throw new oe($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function f1(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ek{convertValue(e,t="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ur(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[qf].arrayValue?.values?.map((s=>Ot(s.doubleValue)));return new $i(t)}convertGeoPoint(e){return new Ki(Ot(e.latitude),Ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=bd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(lc(e));default:return null}}convertTimestamp(e){const t=xr(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ft.fromString(e);Ze(xA(s),9688,{name:e});const a=new uc(s.get(1),s.get(3)),l=new _e(s.popFirst(5));return a.isEqual(t)||Vs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Hu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Na extends l1{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Vd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Na._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Na._jsonSchemaVersion="firestore/documentSnapshot/1.0",Na._jsonSchema={type:Bt("string",Na._jsonSchemaVersion),bundleSource:Bt("string","DocumentSnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class Cf extends Na{data(e={}){return super.data(e)}}class xa{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Hu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Cf(this._firestore,this._userDataWriter,s.key,s,new Hu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new Cf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Hu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Cf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Hu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:tk(d.type),doc:p,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=D_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(n){n=On(n,Ct);const e=On(n.firestore,Ji);return FM(xc(e),n._key).then((t=>m1(e,n,t)))}xa._jsonSchemaVersion="firestore/querySnapshot/1.0",xa._jsonSchema={type:Bt("string",xa._jsonSchemaVersion),bundleSource:Bt("string","QuerySnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class _y extends ek{constructor(e){super(),this.firestore=e}convertBytes(e){return new di(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,t)}}function Wf(n){n=On(n,qs);const e=On(n.firestore,Ji),t=xc(e),s=new _y(e);return u1(n._query),HM(t,n._query).then((a=>new xa(e,s,n,a)))}function nk(n,e,t){n=On(n,Ct);const s=On(n.firestore,Ji),a=gy(n.converter,e,t);return Mc(s,[ry(Oc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Mn.none())])}function Dn(n,e,t,...s){n=On(n,Ct);const a=On(n.firestore,Ji),l=Oc(a);let c;return c=typeof(e=dt(e))=="string"||e instanceof Dc?s1(l,"updateDoc",n._key,e,t,s):i1(l,"updateDoc",n._key,e),Mc(a,[c.toMutation(n._key,Mn.exists(!0))])}function ik(n){return Mc(On(n.firestore,Ji),[new Id(n._key,Mn.none())])}function yy(n,e){const t=On(n.firestore,Ji),s=mn(n),a=gy(n.converter,e);return Mc(t,[ry(Oc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,Mn.exists(!1))]).then((()=>s))}function Bn(n,...e){n=dt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Kb(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Kb(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof Ct)c=On(n.firestore,Ji),d=Sd(n._key.path),l={next:p=>{e[s]&&e[s](m1(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=On(n,qs);c=On(p.firestore,Ji),d=p._query;const g=new _y(c);l={next:y=>{e[s]&&e[s](new xa(c,g,p,y))},error:e[s+1],complete:e[s+2]},u1(n._query)}return(function(g,y,T,b){const x=new sy(b),U=new ty(y,x,T);return g.asyncQueue.enqueueAndForget((async()=>Z_(await $f(g),U))),()=>{x.Nu(),g.asyncQueue.enqueueAndForget((async()=>J_(await $f(g),U)))}})(xc(c),d,a,l)}function Mc(n,e){return(function(s,a){const l=new Os;return s.asyncQueue.enqueueAndForget((async()=>DM(await BM(s),a,l))),l.promise})(xc(n),e)}function m1(n,e,t){const s=t.docs.get(e._key),a=new _y(n);return new Na(n,a,e._key,s,new Hu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Oc(e)}set(e,t,s){this._verifyNotCommitted();const a=mg(e,this._firestore),l=gy(a.converter,t,s),c=ry(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,Mn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=mg(e,this._firestore);let c;return c=typeof(t=dt(t))=="string"||t instanceof Dc?s1(this._dataReader,"WriteBatch.update",l._key,t,s,a):i1(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,Mn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=mg(e,this._firestore);return this._mutations=this._mutations.concat(new Id(t._key,Mn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mg(n,e){if((n=dt(n)).firestore!==e)throw new oe($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function hl(){return new ay("serverTimestamp")}function Wu(...n){return new oy("arrayUnion",n)}function p1(...n){return new ly("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n){return xc(n=On(n,Ji)),new sk(n,(e=>Mc(n,e)))}(function(e,t=!0){(function(a){vl=a})(Ba),Ma(new Ir("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Ji(new Z2(s.getProvider("auth-internal")),new tD(c,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new oe($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uc(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Hi(ZT,JT,e),Hi(ZT,JT,"esm2020")})();var Wb={};const Zb="@firebase/database",Jb="1.1.0";/**
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
 */let g1="";function rk(n){g1=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),an(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:sc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return es(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ak(e)}}catch{}return new ok},Ra=_1("localStorage"),lk=_1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new md("@firebase/database"),uk=(function(){let n=1;return function(){return n++}})(),y1=function(n){const e=LI(n),t=new MI;t.update(e);const s=t.digest();return p_.encodeByteArray(s)},kc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=kc.apply(null,s):typeof s=="object"?e+=an(s):e+=s,e+=" "}return e};let Zu=null,eS=!0;const ck=function(n,e){se(!0,"Can't turn on custom loggers persistently."),Zo.logLevel=je.VERBOSE,Zu=Zo.log.bind(Zo)},fn=function(...n){if(eS===!0&&(eS=!1,Zu===null&&lk.get("logging_enabled")===!0&&ck()),Zu){const e=kc.apply(null,n);Zu(e)}},Pc=function(n){return function(...e){fn(n,...e)}},Wg=function(...n){const e="FIREBASE INTERNAL ERROR: "+kc(...n);Zo.error(e)},Us=function(...n){const e=`FIREBASE FATAL ERROR: ${kc(...n)}`;throw Zo.error(e),new Error(e)},qn=function(...n){const e="FIREBASE WARNING: "+kc(...n);Zo.warn(e)},hk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ud=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},fk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},fl="[MIN_NAME]",Ua="[MAX_NAME]",Qa=function(n,e){if(n===e)return 0;if(n===fl||e===Ua)return-1;if(e===fl||n===Ua)return 1;{const t=tS(n),s=tS(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},dk=function(n,e){return n===e?0:n<e?-1:1},Lu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+an(e))},vy=function(n){if(typeof n!="object"||n===null)return an(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=an(e[s]),t+=":",t+=vy(n[e[s]]);return t+="}",t},v1=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function An(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const E1=function(n){se(!Ud(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let b=parseInt(y.substr(p,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},mk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const _k=new RegExp("^-?(0*)\\d{1,10}$"),yk=-2147483648,vk=2147483647,tS=function(n){if(_k.test(n)){const e=Number(n);if(e>=yk&&e<=vk)return e}return null},Al=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw qn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Ek=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ju=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Tk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Zn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){qn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(fn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qn(e)}}class Rf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="5",T1="v",b1="s",S1="r",w1="f",A1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,C1="ls",R1="p",Zg="ac",I1="websocket",N1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ra.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ra.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Sk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function D1(n,e,t){se(typeof e=="string","typeof type must == string"),se(typeof t=="object","typeof params must == object");let s;if(e===I1)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===N1)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sk(n)&&(t.ns=n.namespace);const a=[];return An(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.counters_={}}incrementCounter(e,t=1){es(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return fI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg={},_g={};function Ty(n){const e=n.toString();return gg[e]||(gg[e]=new wk),gg[e]}function Ak(n,e){const t=n.toString();return _g[t]||(_g[t]=e()),_g[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Al(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="start",Rk="close",Ik="pLPCommand",Nk="pRTLPCB",O1="id",M1="pw",k1="ser",xk="cb",Dk="seg",Ok="ts",Mk="d",kk="dframe",P1=1870,V1=30,Pk=P1-V1,Vk=25e3,Lk=3e4;class Qo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pc(e),this.stats_=Ty(t),this.urlFn=p=>(this.appCheckToken&&(p[Zg]=this.appCheckToken),D1(t,N1,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ck(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lk)),fk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new by((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===nS)this.id=d,this.password=p;else if(c===Rk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[nS]="t",s[k1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[xk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[T1]=Ey,this.transportSessionId&&(s[b1]=this.transportSessionId),this.lastSessionId&&(s[C1]=this.lastSessionId),this.applicationId&&(s[R1]=this.applicationId),this.appCheckToken&&(s[Zg]=this.appCheckToken),typeof location<"u"&&location.hostname&&A1.test(location.hostname)&&(s[S1]=w1);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qo.forceAllow_=!0}static forceDisallow(){Qo.forceDisallow_=!0}static isAvailable(){return Qo.forceAllow_?!0:!Qo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mk()&&!pk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=an(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=GS(t),a=v1(s,Pk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[kk]="t",s[O1]=e,s[M1]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=an(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class by{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uk(),window[Ik+this.uniqueCallbackIdentifier]=e,window[Nk+this.uniqueCallbackIdentifier]=t,this.myIFrame=by.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){fn("frame writing exception"),d.stack&&fn(d.stack),fn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||fn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[O1]=this.myID,e[M1]=this.myPW,e[k1]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+V1+s.length<=P1;){const c=this.pendingSegs.shift();s=s+"&"+Dk+a+"="+c.seg+"&"+Ok+a+"="+c.ts+"&"+Mk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(Vk)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{fn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=16384,jk=45e3;let Zf=null;typeof MozWebSocket<"u"?Zf=MozWebSocket:typeof WebSocket<"u"&&(Zf=WebSocket);class Ti{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pc(this.connId),this.stats_=Ty(t),this.connURL=Ti.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[T1]=Ey,typeof location<"u"&&location.hostname&&A1.test(location.hostname)&&(c[S1]=w1),t&&(c[b1]=t),s&&(c[C1]=s),a&&(c[Zg]=a),l&&(c[R1]=l),D1(e,I1,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ra.set("previous_websocket_failure",!0);try{let s;wI(),this.mySock=new Zf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zf!==null&&!Ti.forceDisallow_}static previouslyFailed(){return Ra.isInMemoryStorage||Ra.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ra.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=sc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(se(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=an(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=v1(t,Uk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ti.responsesRequiredToBeHealthy=2;Ti.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{static get ALL_TRANSPORTS(){return[Qo,Ti]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ti&&Ti.isAvailable();let s=t&&!Ti.previouslyFailed();if(e.webSocketOnly&&(t||qn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ti];else{const a=this.transports_=[];for(const l of dc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);dc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=6e4,qk=5e3,Bk=10*1024,Fk=100*1024,yg="t",iS="d",Hk="s",sS="r",Gk="e",rS="o",aS="a",oS="n",lS="p",Qk="h";class Yk{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pc("c:"+this.id+":"),this.transportManager_=new dc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ju(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yg in e){const t=e[yg];t===aS?this.upgradeIfSecondaryHealthy_():t===sS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===rS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Lu("t",e),s=Lu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lS,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:aS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Lu("t",e),s=Lu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Lu(yg,e);if(iS in e){const s=e[iS];if(t===Qk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===oS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Hk?this.onConnectionShutdown_(s):t===sS?this.onReset_(s):t===Gk?Wg("Server Error: "+s):t===rS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ey!==s&&qn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ju(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ju(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lS,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ra.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.allowedEvents_=e,this.listeners_={},se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){se(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends U1{static getInstance(){return new Jf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!y_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return se(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=32,cS=768;class nt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xe(){return new nt("")}function Oe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Pr(n){return n.pieces_.length-n.pieceNum_}function ct(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new nt(n.pieces_,e)}function Sy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Kk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function mc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function j1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new nt(e,0)}function Mt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof nt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new nt(t,0)}function Pe(n){return n.pieceNum_>=n.pieces_.length}function jn(n,e){const t=Oe(n),s=Oe(e);if(t===null)return e;if(t===s)return jn(ct(n),ct(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function $k(n,e){const t=mc(n,0),s=mc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Qa(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function wy(n,e){if(Pr(n)!==Pr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function mi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Pr(n)>Pr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Xk{constructor(e,t){this.errorPrefix_=t,this.parts_=mc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dd(this.parts_[s]);z1(this)}}function Wk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=dd(e),z1(n)}function Zk(n){const e=n.parts_.pop();n.byteLength_-=dd(e),n.parts_.length>0&&(n.byteLength_-=1)}function z1(n){if(n.byteLength_>cS)throw new Error(n.errorPrefix_+"has a key path longer than "+cS+" bytes ("+n.byteLength_+").");if(n.parts_.length>uS)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+uS+") or object contains a cycle "+wa(n))}function wa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay extends U1{static getInstance(){return new Ay}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return se(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=1e3,Jk=300*1e3,hS=30*1e3,e4=1.3,t4=3e4,n4="server_kill",fS=3;class Ms extends L1{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Ms.nextPersistentConnectionId_++,this.log_=Pc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Uu,this.maxReconnectDelay_=Jk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ay.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(an(l)),se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Rs,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),se(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Ms.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&es(e,"w")){const s=tl(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();qn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||OI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=DI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+an(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Wg("Unrecognized action received from server: "+an(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Uu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Uu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>t4&&(this.reconnectDelay_=Uu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*e4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ms.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){se(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?fn("getToken() completed but was canceled"):(fn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,d=new Yk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,x=>{qn(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(n4)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&qn(T),p())}}}interrupt(e){fn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xf(this.interruptReasons_)&&(this.reconnectDelay_=Uu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>vy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new nt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){fn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fS&&(this.reconnectDelay_=hS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){fn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fS&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+g1.replace(/\./g,"-")]=1,y_()?e["framework.cordova"]=1:ZS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jf.getInstance().currentlyOnline();return xf(this.interruptReasons_)&&e}}Ms.nextPersistentConnectionId_=0;Ms.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ve(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ve(fl,e),a=new Ve(fl,t);return this.compare(s,a)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pf;class q1 extends jd{static get __EMPTY_NODE(){return pf}static set __EMPTY_NODE(e){pf=e}compare(e,t){return Qa(e.name,t.name)}isDefinedOn(e){throw gl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(Ua,pf)}makePost(e,t){return se(typeof e=="string","KeyIndex indexValue must always be a string."),new Ve(e,pf)}toString(){return".key"}}const Jo=new q1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??rn.RED,this.left=a??zn.EMPTY_NODE,this.right=l??zn.EMPTY_NODE}copy(e,t,s,a,l){return new rn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return zn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return zn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rn.RED=!0;rn.BLACK=!1;class i4{copy(e,t,s,a,l){return this}insert(e,t,s){return new rn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zn{constructor(e,t=zn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,rn.BLACK,null,null))}remove(e){return new zn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new gf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new gf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new gf(this.root_,null,this.comparator_,!0,e)}}zn.EMPTY_NODE=new i4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(n,e){return Qa(n.name,e.name)}function Cy(n,e){return Qa(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jg;function r4(n){Jg=n}const B1=function(n){return typeof n=="number"?"number:"+E1(n):"string:"+n},F1=function(n){if(n.isLeafNode()){const e=n.val();se(typeof e=="string"||typeof e=="number"||typeof e=="object"&&es(e,".sv"),"Priority must be a string or number.")}else se(n===Jg||n.isEmpty(),"priority of unexpected type.");se(n===Jg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dS;class nn{static set __childrenNodeConstructor(e){dS=e}static get __childrenNodeConstructor(){return dS}constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,se(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),F1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:Oe(e)===".priority"?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Oe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(se(s!==".priority"||Pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+B1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=E1(this.value_):e+=this.value_,this.lazyHash_=y1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=nn.VALUE_TYPE_ORDER.indexOf(t),l=nn.VALUE_TYPE_ORDER.indexOf(s);return se(a>=0,"Unknown leaf type: "+t),se(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H1,G1;function a4(n){H1=n}function o4(n){G1=n}class l4 extends jd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Qa(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(Ua,new nn("[PRIORITY-POST]",G1))}makePost(e,t){const s=H1(e);return new Ve(t,new nn("[PRIORITY-POST]",s))}toString(){return".priority"}}const Tt=new l4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4=Math.log(2);class c4{constructor(e){const t=l=>parseInt(Math.log(l)/u4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ed=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,b;if(y===0)return null;if(y===1)return T=n[p],b=t?t(T):T,new rn(b,T.node,rn.BLACK,null,null);{const x=parseInt(y/2,10)+p,U=a(p,x),Q=a(x+1,g);return T=n[x],b=t?t(T):T,new rn(b,T.node,rn.BLACK,U,Q)}},l=function(p){let g=null,y=null,T=n.length;const b=function(U,Q){const F=T-U,ue=T;T-=U;const te=a(F+1,ue),le=n[F],me=t?t(le):le;x(new rn(me,le.node,Q,null,te))},x=function(U){g?(g.left=U,g=U):(y=U,g=U)};for(let U=0;U<p.count;++U){const Q=p.nextBitIsOne(),F=Math.pow(2,p.count-(U+1));Q?b(F,rn.BLACK):(b(F,rn.BLACK),b(F,rn.RED))}return y},c=new c4(n.length),d=l(c);return new zn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vg;const qo={};class Ds{static get Default(){return se(qo&&Tt,"ChildrenNode.ts has not been loaded"),vg=vg||new Ds({".priority":qo},{".priority":Tt}),vg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=tl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zn?t:null}hasIndex(e){return es(this.indexSet_,e.toString())}addIndex(e,t){se(e!==Jo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ve.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=ed(s,e.getCompare()):d=qo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=d,new Ds(y,g)}addToIndexes(e,t){const s=Df(this.indexes_,(a,l)=>{const c=tl(this.indexSet_,l);if(se(c,"Missing index implementation for "+l),a===qo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Ve.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),ed(d,c.getCompare())}else return qo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Ve(e.name,d))),p.insert(e,e.node)}});return new Ds(s,this.indexSet_)}removeFromIndexes(e,t){const s=Df(this.indexes_,a=>{if(a===qo)return a;{const l=t.get(e.name);return l?a.remove(new Ve(e.name,l)):a}});return new Ds(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju;class we{static get EMPTY_NODE(){return ju||(ju=new we(new zn(Cy),null,Ds.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&F1(this.priorityNode_),this.children_.isEmpty()&&se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ju}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ju:t}}getChild(e){const t=Oe(e);return t===null?this:this.getImmediateChild(t).getChild(ct(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(se(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ve(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?ju:this.priorityNode_;return new we(a,c,l)}}updateChild(e,t){const s=Oe(e);if(s===null)return t;{se(Oe(e)!==".priority"||Pr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ct(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(Tt,(c,d)=>{t[c]=d.val(e),s++,l&&we.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+B1(this.getPriority().val())+":"),this.forEachChild(Tt,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":y1(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ve(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ve(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ve(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ve.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ve.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vc?-1:0}withIndex(e){if(e===Jo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Jo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Tt),a=t.getIterator(Tt);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Jo?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class h4 extends we{constructor(){super(new zn(Cy),we.EMPTY_NODE,Ds.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Vc=new h4;Object.defineProperties(Ve,{MIN:{value:new Ve(fl,we.EMPTY_NODE)},MAX:{value:new Ve(Ua,Vc)}});q1.__EMPTY_NODE=we.EMPTY_NODE;nn.__childrenNodeConstructor=we;r4(Vc);o4(Vc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=!0;function zt(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),se(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new nn(t,zt(e))}if(!(n instanceof Array)&&f4){const t=[];let s=!1;if(An(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=zt(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Ve(c,p)))}}),t.length===0)return we.EMPTY_NODE;const l=ed(t,s4,c=>c.name,Cy);if(s){const c=ed(t,Tt.getCompare());return new we(l,zt(e),new Ds({".priority":c},{".priority":Tt}))}else return new we(l,zt(e),Ds.Default)}else{let t=we.EMPTY_NODE;return An(n,(s,a)=>{if(es(n,s)&&s.substring(0,1)!=="."){const l=zt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(zt(e))}}a4(zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4 extends jd{constructor(e){super(),this.indexPath_=e,se(!Pe(e)&&Oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Qa(e.name,t.name):l}makePost(e,t){const s=zt(e),a=we.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ve(t,a)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Vc);return new Ve(Ua,e)}toString(){return mc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4 extends jd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Qa(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(e,t){const s=zt(e);return new Ve(t,s)}toString(){return".value"}}const p4=new m4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(n){return{type:"value",snapshotNode:n}}function dl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function pc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function gc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function g4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){se(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(pc(t,d)):se(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(dl(t,s)):c.trackChildChange(gc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Tt,(a,l)=>{t.hasChild(a)||s.trackChildChange(pc(a,l))}),t.isLeafNode()||t.forEachChild(Tt,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(gc(a,l,c))}else s.trackChildChange(dl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?we.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.indexedFilter_=new Ry(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_c.getStartPost_(e),this.endPost_=_c.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Ve(t,s))||(s=we.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=we.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(we.EMPTY_NODE);const l=this;return t.forEachChild(Tt,(c,d)=>{l.matches(new Ve(c,d))||(a=a.updateImmediateChild(c,we.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new _c(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Ve(t,s))||(s=we.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=we.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=we.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(we.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,we.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(b,x)=>T(x,b)}else c=this.index_.getCompare();const d=e;se(d.numChildren()===this.limit_,"");const p=new Ve(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let b=a.getChildAfterChild(this.index_,g,this.reverse_);for(;b!=null&&(b.name===t||d.hasChild(b.name));)b=a.getChildAfterChild(this.index_,b,this.reverse_);const x=b==null?1:c(b,p);if(y&&!s.isEmpty()&&x>=0)return l?.trackChildChange(gc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(pc(t,T));const Q=d.updateImmediateChild(t,we.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(l?.trackChildChange(dl(b.name,b.node)),Q.updateImmediateChild(b.name,b.node)):Q}}else return s.isEmpty()?e:y&&c(g,p)>=0?(l!=null&&(l.trackChildChange(pc(g.name,g.node)),l.trackChildChange(dl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,we.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fl}hasEnd(){return this.endSet_}getIndexEndValue(){return se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ua}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tt}copy(){const e=new Iy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function y4(n){return n.loadsAllData()?new Ry(n.getIndex()):n.hasLimit()?new _4(n):new _c(n)}function mS(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Tt?t="$priority":n.index_===p4?t="$value":n.index_===Jo?t="$key":(se(n.index_ instanceof d4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=an(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=an(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+an(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=an(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+an(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function pS(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Tt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends L1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Pc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=td.getListenId_(e,s),d={};this.listens_[c]=d;const p=mS(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),tl(this.listens_,c)===d){let b;g?g===401?b="permission_denied":b="rest_error:"+g:b="ok",a(b,null)}})}unlisten(e,t){const s=td.getListenId_(e,t);delete this.listens_[s]}get(e){const t=mS(e._queryParams),s=e._path.toString(),a=new Rs;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_l(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=sc(d.responseText)}catch{qn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&qn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){return{value:null,children:new Map}}function Cl(n,e,t){if(Pe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Oe(e);n.children.has(s)||n.children.set(s,nd());const a=n.children.get(s);e=ct(e),Cl(a,e,t)}}function e_(n,e){if(Pe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Tt,(s,a)=>{Cl(n,new nt(s),a)}),e_(n,e)}}else if(n.children.size>0){const t=Oe(e);return e=ct(e),n.children.has(t)&&e_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function t_(n,e,t){n.value!==null?t(e,n.value):E4(n,(s,a)=>{const l=new nt(e.toString()+"/"+s);t_(a,l,t)})}function E4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&An(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=10*1e3,b4=30*1e3,S4=300*1e3;class w4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new T4(e);const s=gS+(b4-gS)*Math.random();Ju(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;An(e,(a,l)=>{l>0&&es(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Ju(this.reportStats_.bind(this),Math.floor(Math.random()*2*S4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Si||(Si={}));function Y1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ny(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Si.ACK_USER_WRITE,this.source=Y1()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new nt(e));return new id(Xe(),t,this.revert)}}else return se(Oe(this.path)===e,"operationForChild called for unrelated child."),new id(ct(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.source=e,this.path=t,this.type=Si.LISTEN_COMPLETE}operationForChild(e){return Pe(this.path)?new yc(this.source,Xe()):new yc(this.source,ct(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Si.OVERWRITE}operationForChild(e){return Pe(this.path)?new ja(this.source,Xe(),this.snap.getImmediateChild(e)):new ja(this.source,ct(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Si.MERGE}operationForChild(e){if(Pe(this.path)){const t=this.children.subtree(new nt(e));return t.isEmpty()?null:t.value?new ja(this.source,Xe(),t.value):new vc(this.source,Xe(),t)}else return se(Oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vc(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Oe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function C4(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(g4(c.childName,c.snapshotNode))}),zu(n,a,"child_removed",e,s,t),zu(n,a,"child_added",e,s,t),zu(n,a,"child_moved",l,s,t),zu(n,a,"child_changed",e,s,t),zu(n,a,"value",e,s,t),a}function zu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>I4(n,d,p)),c.forEach(d=>{const p=R4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function R4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function I4(n,e,t){if(e.childName==null||t.childName==null)throw gl("Should only compare child_ events.");const s=new Ve(e.childName,e.snapshotNode),a=new Ve(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n,e){return{eventCache:n,serverCache:e}}function ec(n,e,t,s){return zd(new za(e,t,s),n.serverCache)}function K1(n,e,t,s){return zd(n.eventCache,new za(e,t,s))}function n_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qa(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eg;const N4=()=>(Eg||(Eg=new zn(dk)),Eg);class pt{static fromObject(e){let t=new pt(null);return An(e,(s,a)=>{t=t.set(new nt(s),a)}),t}constructor(e,t=N4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Xe(),value:this.value};if(Pe(e))return null;{const s=Oe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ct(e),t);return l!=null?{path:Mt(new nt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const t=Oe(e),s=this.children.get(t);return s!==null?s.subtree(ct(e)):new pt(null)}}set(e,t){if(Pe(e))return new pt(t,this.children);{const s=Oe(e),l=(this.children.get(s)||new pt(null)).set(ct(e),t),c=this.children.insert(s,l);return new pt(this.value,c)}}remove(e){if(Pe(e))return this.children.isEmpty()?new pt(null):new pt(null,this.children);{const t=Oe(e),s=this.children.get(t);if(s){const a=s.remove(ct(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new pt(null):new pt(this.value,l)}else return this}}get(e){if(Pe(e))return this.value;{const t=Oe(e),s=this.children.get(t);return s?s.get(ct(e)):null}}setTree(e,t){if(Pe(e))return t;{const s=Oe(e),l=(this.children.get(s)||new pt(null)).setTree(ct(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new pt(this.value,c)}}fold(e){return this.fold_(Xe(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Mt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Xe(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Pe(e))return null;{const l=Oe(e),c=this.children.get(l);return c?c.findOnPath_(ct(e),Mt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xe(),t)}foreachOnPath_(e,t,s){if(Pe(e))return this;{this.value&&s(t,this.value);const a=Oe(e),l=this.children.get(a);return l?l.foreachOnPath_(ct(e),Mt(t,a),s):new pt(null)}}foreach(e){this.foreach_(Xe(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Mt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.writeTree_=e}static empty(){return new Ai(new pt(null))}}function tc(n,e,t){if(Pe(e))return new Ai(new pt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=jn(a,e);return l=l.updateChild(c,t),new Ai(n.writeTree_.set(a,l))}else{const a=new pt(t),l=n.writeTree_.setTree(e,a);return new Ai(l)}}}function _S(n,e,t){let s=n;return An(t,(a,l)=>{s=tc(s,Mt(e,a),l)}),s}function yS(n,e){if(Pe(e))return Ai.empty();{const t=n.writeTree_.setTree(e,new pt(null));return new Ai(t)}}function i_(n,e){return Ya(n,e)!=null}function Ya(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(jn(t.path,e)):null}function vS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Tt,(s,a)=>{e.push(new Ve(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ve(s,a.value))}),e}function Rr(n,e){if(Pe(e))return n;{const t=Ya(n,e);return t!=null?new Ai(new pt(t)):new Ai(n.writeTree_.subtree(e))}}function s_(n){return n.writeTree_.isEmpty()}function ml(n,e){return $1(Xe(),n.writeTree_,e)}function $1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(se(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=$1(Mt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Mt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(n,e){return J1(e,n)}function x4(n,e,t,s,a){se(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=tc(n.visibleWrites,e,t)),n.lastWriteId=s}function D4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function O4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);se(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&M4(d,s.path)?a=!1:mi(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return k4(n),!0;if(s.snap)n.visibleWrites=yS(n.visibleWrites,s.path);else{const d=s.children;An(d,p=>{n.visibleWrites=yS(n.visibleWrites,Mt(s.path,p))})}return!0}else return!1}function M4(n,e){if(n.snap)return mi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&mi(Mt(n.path,t),e))return!0;return!1}function k4(n){n.visibleWrites=X1(n.allWrites,P4,Xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function P4(n){return n.visible}function X1(n,e,t){let s=Ai.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)mi(t,c)?(d=jn(t,c),s=tc(s,d,l.snap)):mi(c,t)&&(d=jn(c,t),s=tc(s,Xe(),l.snap.getChild(d)));else if(l.children){if(mi(t,c))d=jn(t,c),s=_S(s,d,l.children);else if(mi(c,t))if(d=jn(c,t),Pe(d))s=_S(s,Xe(),l.children);else{const p=tl(l.children,Oe(d));if(p){const g=p.getChild(ct(d));s=tc(s,Xe(),g)}}}else throw gl("WriteRecord should have .snap or .children")}}return s}function W1(n,e,t,s,a){if(!s&&!a){const l=Ya(n.visibleWrites,e);if(l!=null)return l;{const c=Rr(n.visibleWrites,e);if(s_(c))return t;if(t==null&&!i_(c,Xe()))return null;{const d=t||we.EMPTY_NODE;return ml(c,d)}}}else{const l=Rr(n.visibleWrites,e);if(!a&&s_(l))return t;if(!a&&t==null&&!i_(l,Xe()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(mi(g.path,e)||mi(e,g.path))},d=X1(n.allWrites,c,e),p=t||we.EMPTY_NODE;return ml(d,p)}}}function V4(n,e,t){let s=we.EMPTY_NODE;const a=Ya(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Tt,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Rr(n.visibleWrites,e);return t.forEachChild(Tt,(c,d)=>{const p=ml(Rr(l,new nt(c)),d);s=s.updateImmediateChild(c,p)}),vS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Rr(n.visibleWrites,e);return vS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function L4(n,e,t,s,a){se(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Mt(e,t);if(i_(n.visibleWrites,l))return null;{const c=Rr(n.visibleWrites,l);return s_(c)?a.getChild(t):ml(c,a.getChild(t))}}function U4(n,e,t,s){const a=Mt(e,t),l=Ya(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Rr(n.visibleWrites,a);return ml(c,s.getNode().getImmediateChild(t))}else return null}function j4(n,e){return Ya(n.visibleWrites,e)}function z4(n,e,t,s,a,l,c){let d;const p=Rr(n.visibleWrites,e),g=Ya(p,Xe());if(g!=null)d=g;else if(t!=null)d=ml(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),b=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let x=b.getNext();for(;x&&y.length<a;)T(x,s)!==0&&y.push(x),x=b.getNext();return y}else return[]}function q4(){return{visibleWrites:Ai.empty(),allWrites:[],lastWriteId:-1}}function sd(n,e,t,s){return W1(n.writeTree,n.treePath,e,t,s)}function Oy(n,e){return V4(n.writeTree,n.treePath,e)}function ES(n,e,t,s){return L4(n.writeTree,n.treePath,e,t,s)}function rd(n,e){return j4(n.writeTree,Mt(n.treePath,e))}function B4(n,e,t,s,a,l){return z4(n.writeTree,n.treePath,e,t,s,a,l)}function My(n,e,t){return U4(n.writeTree,n.treePath,e,t)}function Z1(n,e){return J1(Mt(n.treePath,e),n.writeTree)}function J1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;se(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),se(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,gc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,pc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,dl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,gc(s,e.snapshotNode,a.oldSnap));else throw gl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const eC=new H4;class ky{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new za(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return My(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qa(this.viewCache_),l=B4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(n){return{filter:n}}function Q4(n,e){se(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),se(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Y4(n,e,t,s,a){const l=new F4;let c,d;if(t.type===Si.OVERWRITE){const g=t;g.source.fromUser?c=r_(n,e,g.path,g.snap,s,a,l):(se(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Pe(g.path),c=ad(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Si.MERGE){const g=t;g.source.fromUser?c=$4(n,e,g.path,g.children,s,a,l):(se(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=a_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Si.ACK_USER_WRITE){const g=t;g.revert?c=Z4(n,e,g.path,s,a,l):c=X4(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Si.LISTEN_COMPLETE)c=W4(n,e,t.path,s,l);else throw gl("Unknown operation type: "+t.type);const p=l.getChanges();return K4(e,c,p),{viewCache:c,changes:p}}function K4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=n_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(Q1(n_(e)))}}function tC(n,e,t,s,a,l){const c=e.eventCache;if(rd(s,t)!=null)return e;{let d,p;if(Pe(t))if(se(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=qa(e),y=g instanceof we?g:we.EMPTY_NODE,T=Oy(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=sd(s,qa(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Oe(t);if(g===".priority"){se(Pr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=ES(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=ct(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const b=ES(s,t,c.getNode(),p);b!=null?T=c.getNode().getImmediateChild(g).updateChild(y,b):T=c.getNode().getImmediateChild(g)}else T=My(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return ec(e,d,c.isFullyInitialized()||Pe(t),n.filter.filtersNodes())}}function ad(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Pe(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const x=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),x,null)}else{const x=Oe(t);if(!p.isCompleteForPath(t)&&Pr(t)>1)return e;const U=ct(t),F=p.getNode().getImmediateChild(x).updateChild(U,s);x===".priority"?g=y.updatePriority(p.getNode(),F):g=y.updateChild(p.getNode(),x,F,U,eC,null)}const T=K1(e,g,p.isFullyInitialized()||Pe(t),y.filtersNodes()),b=new ky(a,T,l);return tC(n,T,t,a,b,d)}function r_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new ky(a,e,l);if(Pe(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=ec(e,g,!0,n.filter.filtersNodes());else{const T=Oe(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=ec(e,g,d.isFullyInitialized(),d.isFiltered());else{const b=ct(t),x=d.getNode().getImmediateChild(T);let U;if(Pe(b))U=s;else{const Q=y.getCompleteChild(T);Q!=null?Sy(b)===".priority"&&Q.getChild(j1(b)).isEmpty()?U=Q:U=Q.updateChild(b,s):U=we.EMPTY_NODE}if(x.equals(U))p=e;else{const Q=n.filter.updateChild(d.getNode(),T,U,b,y,c);p=ec(e,Q,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function TS(n,e){return n.eventCache.isCompleteForChild(e)}function $4(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Mt(t,p);TS(e,Oe(y))&&(d=r_(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Mt(t,p);TS(e,Oe(y))||(d=r_(n,d,y,g,a,l,c))}),d}function bS(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function a_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Pe(t)?g=s:g=new pt(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,b)=>{if(y.hasChild(T)){const x=e.serverCache.getNode().getImmediateChild(T),U=bS(n,x,b);p=ad(n,p,new nt(T),U,a,l,c,d)}}),g.children.inorderTraversal((T,b)=>{const x=!e.serverCache.isCompleteForChild(T)&&b.value===null;if(!y.hasChild(T)&&!x){const U=e.serverCache.getNode().getImmediateChild(T),Q=bS(n,U,b);p=ad(n,p,new nt(T),Q,a,l,c,d)}}),p}function X4(n,e,t,s,a,l,c){if(rd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Pe(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return ad(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Pe(t)){let g=new pt(null);return p.getNode().forEachChild(Jo,(y,T)=>{g=g.set(new nt(y),T)}),a_(n,e,t,g,a,l,d,c)}else return e}else{let g=new pt(null);return s.foreach((y,T)=>{const b=Mt(t,y);p.isCompleteForPath(b)&&(g=g.set(y,p.getNode().getChild(b)))}),a_(n,e,t,g,a,l,d,c)}}function W4(n,e,t,s,a){const l=e.serverCache,c=K1(e,l.getNode(),l.isFullyInitialized()||Pe(t),l.isFiltered());return tC(n,c,t,s,eC,a)}function Z4(n,e,t,s,a,l){let c;if(rd(s,t)!=null)return e;{const d=new ky(s,e,a),p=e.eventCache.getNode();let g;if(Pe(t)||Oe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=sd(s,qa(e));else{const T=e.serverCache.getNode();se(T instanceof we,"serverChildren would be complete if leaf node"),y=Oy(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=Oe(t);let T=My(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,ct(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,we.EMPTY_NODE,ct(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=sd(s,qa(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||rd(s,Xe())!=null,ec(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Ry(s.getIndex()),l=y4(s);this.processor_=G4(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(we.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(we.EMPTY_NODE,d.getNode(),null),y=new za(p,c.isFullyInitialized(),a.filtersNodes()),T=new za(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=zd(T,y),this.eventGenerator_=new A4(this.query_)}get query(){return this.query_}}function eP(n){return n.viewCache_.serverCache.getNode()}function tP(n,e){const t=qa(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Pe(e)&&!t.getImmediateChild(Oe(e)).isEmpty())?t.getChild(e):null}function SS(n){return n.eventRegistrations_.length===0}function nP(n,e){n.eventRegistrations_.push(e)}function wS(n,e,t){const s=[];if(t){se(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function AS(n,e,t,s){e.type===Si.MERGE&&e.source.queryId!==null&&(se(qa(n.viewCache_),"We should always have a full cache before handling merges"),se(n_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=Y4(n.processor_,a,e,t,s);return Q4(n.processor_,l.viewCache),se(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,nC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function iP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Tt,(l,c)=>{s.push(dl(l,c))}),t.isFullyInitialized()&&s.push(Q1(t.getNode())),nC(n,s,t.getNode(),e)}function nC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return C4(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od;class sP{constructor(){this.views=new Map}}function rP(n){se(!od,"__referenceConstructor has already been defined"),od=n}function aP(){return se(od,"Reference.ts has not been loaded"),od}function oP(n){return n.views.size===0}function Py(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return se(l!=null,"SyncTree gave us an op for an invalid query."),AS(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(AS(c,e,t,s));return l}}function lP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=sd(t,a?s:null),p=!1;d?p=!0:s instanceof we?(d=Oy(t,s),p=!1):(d=we.EMPTY_NODE,p=!1);const g=zd(new za(d,p,!1),new za(s,a,!1));return new J4(e,g)}return c}function uP(n,e,t,s,a,l){const c=lP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),nP(c,t),iP(c,t)}function cP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Vr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(wS(g,t,s)),SS(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(wS(p,t,s)),SS(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Vr(n)&&l.push(new(aP())(e._repo,e._path)),{removed:l,events:c}}function iC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function el(n,e){let t=null;for(const s of n.views.values())t=t||tP(s,e);return t}function sC(n,e){if(e._queryParams.loadsAllData())return qd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function rC(n,e){return sC(n,e)!=null}function Vr(n){return qd(n)!=null}function qd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld;function hP(n){se(!ld,"__referenceConstructor has already been defined"),ld=n}function fP(){return se(ld,"Reference.ts has not been loaded"),ld}let dP=1;class CS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pt(null),this.pendingWriteTree_=q4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function aC(n,e,t,s,a){return x4(n.pendingWriteTree_,e,t,s,a),a?Lc(n,new ja(Y1(),e,t)):[]}function Ia(n,e,t=!1){const s=D4(n.pendingWriteTree_,e);if(O4(n.pendingWriteTree_,e)){let l=new pt(null);return s.snap!=null?l=l.set(Xe(),!0):An(s.children,c=>{l=l.set(new nt(c),!0)}),Lc(n,new id(s.path,l,t))}else return[]}function Bd(n,e,t){return Lc(n,new ja(Ny(),e,t))}function mP(n,e,t){const s=pt.fromObject(t);return Lc(n,new vc(Ny(),e,s))}function pP(n,e){return Lc(n,new yc(Ny(),e))}function gP(n,e,t){const s=Ly(n,t);if(s){const a=Uy(s),l=a.path,c=a.queryId,d=jn(l,e),p=new yc(xy(c),d);return jy(n,l,p)}else return[]}function o_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||rC(c,e))){const p=cP(c,e,t,s);oP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const y=g.findIndex(b=>b._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(b,x)=>Vr(x));if(y&&!T){const b=n.syncPointTree_.subtree(l);if(!b.isEmpty()){const x=vP(b);for(let U=0;U<x.length;++U){const Q=x[U],F=Q.query,ue=uC(n,Q);n.listenProvider_.startListening(nc(F),ud(n,F),ue.hashFn,ue.onComplete)}}}!T&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(nc(e),null):g.forEach(b=>{const x=n.queryToTagMap.get(Fd(b));n.listenProvider_.stopListening(nc(b),x)}))}EP(n,g)}return d}function _P(n,e,t,s){const a=Ly(n,s);if(a!=null){const l=Uy(a),c=l.path,d=l.queryId,p=jn(c,e),g=new ja(xy(d),p,t);return jy(n,c,g)}else return[]}function yP(n,e,t,s){const a=Ly(n,s);if(a){const l=Uy(a),c=l.path,d=l.queryId,p=jn(c,e),g=pt.fromObject(t),y=new vc(xy(d),p,g);return jy(n,c,y)}else return[]}function RS(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(b,x)=>{const U=jn(b,a);l=l||el(x,U),c=c||Vr(x)});let d=n.syncPointTree_.get(a);d?(c=c||Vr(d),l=l||el(d,Xe())):(d=new sP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=we.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((x,U)=>{const Q=el(U,Xe());Q&&(l=l.updateImmediateChild(x,Q))}));const g=rC(d,e);if(!g&&!e._queryParams.loadsAllData()){const b=Fd(e);se(!n.queryToTagMap.has(b),"View does not exist, but we have a tag");const x=TP();n.queryToTagMap.set(b,x),n.tagToQueryMap.set(x,b)}const y=Dy(n.pendingWriteTree_,a);let T=uP(d,e,t,y,l,p);if(!g&&!c&&!s){const b=sC(d,e);T=T.concat(bP(n,e,b))}return T}function Vy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=jn(c,e),g=el(d,p);if(g)return g});return W1(a,e,l,t,!0)}function Lc(n,e){return oC(e,n.syncPointTree_,null,Dy(n.pendingWriteTree_,Xe()))}function oC(n,e,t,s){if(Pe(n.path))return lC(n,e,t,s);{const a=e.get(Xe());t==null&&a!=null&&(t=el(a,Xe()));let l=[];const c=Oe(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=Z1(s,c);l=l.concat(oC(d,p,g,y))}return a&&(l=l.concat(Py(a,n,s,t))),l}}function lC(n,e,t,s){const a=e.get(Xe());t==null&&a!=null&&(t=el(a,Xe()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=Z1(s,c),y=n.operationForChild(c);y&&(l=l.concat(lC(y,d,p,g)))}),a&&(l=l.concat(Py(a,n,s,t))),l}function uC(n,e){const t=e.query,s=ud(n,t);return{hashFn:()=>(eP(e)||we.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?gP(n,t._path,s):pP(n,t._path);{const l=gk(a,t);return o_(n,t,null,l)}}}}function ud(n,e){const t=Fd(e);return n.queryToTagMap.get(t)}function Fd(n){return n._path.toString()+"$"+n._queryIdentifier}function Ly(n,e){return n.tagToQueryMap.get(e)}function Uy(n){const e=n.indexOf("$");return se(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new nt(n.substr(0,e))}}function jy(n,e,t){const s=n.syncPointTree_.get(e);se(s,"Missing sync point for query tag that we're tracking");const a=Dy(n.pendingWriteTree_,e);return Py(s,t,a,null)}function vP(n){return n.fold((e,t,s)=>{if(t&&Vr(t))return[qd(t)];{let a=[];return t&&(a=iC(t)),An(s,(l,c)=>{a=a.concat(c)}),a}})}function nc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(fP())(n._repo,n._path):n}function EP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Fd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function TP(){return dP++}function bP(n,e,t){const s=e._path,a=ud(n,e),l=uC(n,t),c=n.listenProvider_.startListening(nc(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)se(!Vr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,y,T)=>{if(!Pe(g)&&y&&Vr(y))return[qd(y).query];{let b=[];return y&&(b=b.concat(iC(y).map(x=>x.query))),An(T,(x,U)=>{b=b.concat(U)}),b}});for(let g=0;g<p.length;++g){const y=p[g];n.listenProvider_.stopListening(nc(y),ud(n,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new zy(t)}node(){return this.node_}}class qy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Mt(this.path_,e);return new qy(this.syncTree_,t)}node(){return Vy(this.syncTree_,this.path_)}}const SP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},IS=function(n,e,t){if(!n||typeof n!="object")return n;if(se(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return wP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return AP(n[".sv"],e);se(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},wP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:se(!1,"Unexpected server value: "+n)}},AP=function(n,e,t){n.hasOwnProperty("increment")||se(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&se(!1,"Unexpected increment value: "+s);const a=e.node();if(se(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},CP=function(n,e,t,s){return By(e,new qy(t,n),s)},cC=function(n,e,t){return By(n,new zy(e),t)};function By(n,e,t){const s=n.getPriority().val(),a=IS(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=IS(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new nn(d,zt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new nn(a))),c.forEachChild(Tt,(d,p)=>{const g=By(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Hy(n,e){let t=e instanceof nt?e:new nt(e),s=n,a=Oe(t);for(;a!==null;){const l=tl(s.node.children,a)||{children:{},childCount:0};s=new Fy(a,s,l),t=ct(t),a=Oe(t)}return s}function Rl(n){return n.node.value}function hC(n,e){n.node.value=e,l_(n)}function fC(n){return n.node.childCount>0}function RP(n){return Rl(n)===void 0&&!fC(n)}function Hd(n,e){An(n.node.children,(t,s)=>{e(new Fy(t,n,s))})}function dC(n,e,t,s){t&&e(n),Hd(n,a=>{dC(a,e,!0)})}function IP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Uc(n){return new nt(n.parent===null?n.name:Uc(n.parent)+"/"+n.name)}function l_(n){n.parent!==null&&NP(n.parent,n.name,n)}function NP(n,e,t){const s=RP(t),a=es(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,l_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,l_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/[\[\].#$\/\u0000-\u001F\u007F]/,DP=/[\[\].#$\u0000-\u001F\u007F]/,Tg=10*1024*1024,Gy=function(n){return typeof n=="string"&&n.length!==0&&!xP.test(n)},mC=function(n){return typeof n=="string"&&n.length!==0&&!DP.test(n)},OP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mC(n)},pC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ud(n)||n&&typeof n=="object"&&es(n,".sv")},u_=function(n,e,t,s){Gd(nl(n,"value"),e,t)},Gd=function(n,e,t){const s=t instanceof nt?new Xk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wa(s));if(typeof e=="function")throw new Error(n+"contains a function "+wa(s)+" with contents = "+e.toString());if(Ud(e))throw new Error(n+"contains "+e.toString()+" "+wa(s));if(typeof e=="string"&&e.length>Tg/3&&dd(e)>Tg)throw new Error(n+"contains a string greater than "+Tg+" utf8 bytes "+wa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(An(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Gy(c)))throw new Error(n+" contains an invalid key ("+c+") "+wa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wk(s,c),Gd(n,d,s),Zk(s)}),a&&l)throw new Error(n+' contains ".value" child '+wa(s)+" in addition to actual children.")}},MP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=mc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Gy(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($k);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&mi(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},kP=function(n,e,t,s){const a=nl(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];An(e,(c,d)=>{const p=new nt(c);if(Gd(a,d,Mt(t,p)),Sy(p)===".priority"&&!pC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),MP(a,l)},PP=function(n,e,t){if(Ud(e))throw new Error(nl(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!pC(e))throw new Error(nl(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},gC=function(n,e,t,s){if(!mC(t))throw new Error(nl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},VP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gC(n,e,t)},Yo=function(n,e){if(Oe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},LP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!OP(t))throw new Error(nl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!wy(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function _C(n,e,t){Qy(n,t),yC(n,s=>wy(s,e))}function js(n,e,t){Qy(n,t),yC(n,s=>mi(s,e)||mi(e,s))}function yC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(jP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function jP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Zu&&fn("event: "+t.toString()),Al(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="repo_interrupt",qP=25;class BP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nd(),this.transactionQueueTree_=new Fy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FP(n,e,t){if(n.stats_=Ty(n.repoInfo_),n.forceRestClient_||Ek())n.server_=new td(n.repoInfo_,(s,a,l,c)=>{NS(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>xS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{an(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ms(n.repoInfo_,e,(s,a,l,c)=>{NS(n,s,a,l,c)},s=>{xS(n,s)},s=>{GP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ak(n.repoInfo_,()=>new w4(n.stats_,n.server_)),n.infoData_=new v4,n.infoSyncTree_=new CS({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=Bd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Ky(n,"connected",!1),n.serverSyncTree_=new CS({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);js(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function HP(n){const t=n.infoData_.getNode(new nt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Yy(n){return SP({timestamp:HP(n)})}function NS(n,e,t,s,a){n.dataUpdateCount++;const l=new nt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Df(t,g=>zt(g));c=yP(n.serverSyncTree_,l,p,a)}else{const p=zt(t);c=_P(n.serverSyncTree_,l,p,a)}else if(s){const p=Df(t,g=>zt(g));c=mP(n.serverSyncTree_,l,p)}else{const p=zt(t);c=Bd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Qd(n,l)),js(n.eventQueue_,d,c)}function xS(n,e){Ky(n,"connected",e),e===!1&&YP(n)}function GP(n,e){An(e,(t,s)=>{Ky(n,t,s)})}function Ky(n,e,t){const s=new nt("/.info/"+e),a=zt(t);n.infoData_.updateSnapshot(s,a);const l=Bd(n.infoSyncTree_,s,a);js(n.eventQueue_,s,l)}function vC(n){return n.nextWriteId_++}function QP(n,e,t,s,a){$y(n,"set",{path:e.toString(),value:t,priority:s});const l=Yy(n),c=zt(t,s),d=Vy(n.serverSyncTree_,e),p=cC(c,d,l),g=vC(n),y=aC(n.serverSyncTree_,e,p,g,!0);Qy(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(b,x)=>{const U=b==="ok";U||qn("set at "+e+" failed: "+b);const Q=Ia(n.serverSyncTree_,g,!U);js(n.eventQueue_,e,Q),pl(n,a,b,x)});const T=wC(n,e);Qd(n,T),js(n.eventQueue_,T,[])}function YP(n){$y(n,"onDisconnectEvents");const e=Yy(n),t=nd();t_(n.onDisconnect_,Xe(),(a,l)=>{const c=CP(a,l,n.serverSyncTree_,e);Cl(t,a,c)});let s=[];t_(t,Xe(),(a,l)=>{s=s.concat(Bd(n.serverSyncTree_,a,l));const c=wC(n,a);Qd(n,c)}),n.onDisconnect_=nd(),js(n.eventQueue_,Xe(),s)}function KP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&e_(n.onDisconnect_,e),pl(n,t,s,a)})}function DS(n,e,t,s){const a=zt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&Cl(n.onDisconnect_,e,a),pl(n,s,l,c)})}function $P(n,e,t,s,a){const l=zt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&Cl(n.onDisconnect_,e,l),pl(n,a,c,d)})}function XP(n,e,t,s){if(xf(t)){fn("onDisconnect().update() called with empty data.  Don't do anything."),pl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&An(t,(c,d)=>{const p=zt(d);Cl(n.onDisconnect_,Mt(e,c),p)}),pl(n,s,a,l)})}function WP(n,e,t){let s;Oe(e._path)===".info"?s=RS(n.infoSyncTree_,e,t):s=RS(n.serverSyncTree_,e,t),_C(n.eventQueue_,e._path,s)}function ZP(n,e,t){let s;Oe(e._path)===".info"?s=o_(n.infoSyncTree_,e,t):s=o_(n.serverSyncTree_,e,t),_C(n.eventQueue_,e._path,s)}function JP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(zP)}function $y(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),fn(t,...e)}function pl(n,e,t,s){e&&Al(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function EC(n,e,t){return Vy(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function Xy(n,e=n.transactionQueueTree_){if(e||Yd(n,e),Rl(e)){const t=bC(n,e);se(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&eV(n,Uc(e),t)}else fC(e)&&Hd(e,t=>{Xy(n,t)})}function eV(n,e,t){const s=t.map(g=>g.currentWriteId),a=EC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];se(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=jn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{$y(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let b=0;b<t.length;b++)t[b].status=2,y=y.concat(Ia(n.serverSyncTree_,t[b].currentWriteId)),t[b].onComplete&&T.push(()=>t[b].onComplete(null,!0,t[b].currentOutputSnapshotResolved)),t[b].unwatcher();Yd(n,Hy(n.transactionQueueTree_,e)),Xy(n,n.transactionQueueTree_),js(n.eventQueue_,e,y);for(let b=0;b<T.length;b++)Al(T[b])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{qn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Qd(n,e)}},c)}function Qd(n,e){const t=TC(n,e),s=Uc(t),a=bC(n,t);return tV(n,a,s),s}function tV(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=jn(t,p.path);let y=!1,T;if(se(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(Ia(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=qP)y=!0,T="maxretry",a=a.concat(Ia(n.serverSyncTree_,p.currentWriteId,!0));else{const b=EC(n,p.path,c);p.currentInputSnapshot=b;const x=e[d].update(b.val());if(x!==void 0){Gd("transaction failed: Data returned ",x,p.path);let U=zt(x);typeof x=="object"&&x!=null&&es(x,".priority")||(U=U.updatePriority(b.getPriority()));const F=p.currentWriteId,ue=Yy(n),te=cC(U,b,ue);p.currentOutputSnapshotRaw=U,p.currentOutputSnapshotResolved=te,p.currentWriteId=vC(n),c.splice(c.indexOf(F),1),a=a.concat(aC(n.serverSyncTree_,p.path,te,p.currentWriteId,p.applyLocally)),a=a.concat(Ia(n.serverSyncTree_,F,!0))}else y=!0,T="nodata",a=a.concat(Ia(n.serverSyncTree_,p.currentWriteId,!0))}js(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(b){setTimeout(b,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Yd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Al(s[d]);Xy(n,n.transactionQueueTree_)}function TC(n,e){let t,s=n.transactionQueueTree_;for(t=Oe(e);t!==null&&Rl(s)===void 0;)s=Hy(s,t),e=ct(e),t=Oe(e);return s}function bC(n,e){const t=[];return SC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function SC(n,e,t){const s=Rl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Hd(e,a=>{SC(n,a,t)})}function Yd(n,e){const t=Rl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,hC(e,t.length>0?t:void 0)}Hd(e,s=>{Yd(n,s)})}function wC(n,e){const t=Uc(TC(n,e)),s=Hy(n.transactionQueueTree_,e);return IP(s,a=>{bg(n,a)}),bg(n,s),dC(s,a=>{bg(n,a)}),t}function bg(n,e){const t=Rl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(se(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(se(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Ia(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?hC(e,void 0):t.length=l+1,js(n.eventQueue_,Uc(e),a);for(let c=0;c<s.length;c++)Al(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function iV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qn(`Invalid query segment '${t}' in query '${n}'`)}return e}const OS=function(n,e){const t=sV(n),s=t.namespace;t.domain==="firebase.com"&&Us(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||hk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new x1(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new nt(t.pathString)}},sV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=nV(n.substring(y,T)));const b=iV(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const U=e.indexOf(".");s=e.substring(0,U).toLowerCase(),t=e.substring(U+1),l=s}"ns"in b&&(l=b.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+an(this.snapshot.exportVal())}}class aV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return se(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class lV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Rs;return KP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Yo("OnDisconnect.remove",this._path);const e=new Rs;return DS(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Yo("OnDisconnect.set",this._path),u_("OnDisconnect.set",e,this._path);const t=new Rs;return DS(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Yo("OnDisconnect.setWithPriority",this._path),u_("OnDisconnect.setWithPriority",e,this._path),PP("OnDisconnect.setWithPriority",t);const s=new Rs;return $P(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Yo("OnDisconnect.update",this._path),kP("OnDisconnect.update",e,this._path);const t=new Rs;return XP(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Pe(this._path)?null:Sy(this._path)}get ref(){return new zr(this._repo,this._path)}get _queryIdentifier(){const e=pS(this._queryParams),t=vy(e);return t==="{}"?"default":t}get _queryObject(){return pS(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof Wy))return!1;const t=this._repo===e._repo,s=wy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Kk(this._path)}}class zr extends Wy{constructor(e,t){super(e,t,new Iy,!1)}get parent(){const e=j1(this._path);return e===null?null:new zr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cd{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new nt(e),s=c_(this.ref,e);return new cd(this._node.getChild(t),s,Tt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new cd(a,c_(this.ref,s),Tt)))}hasChild(e){const t=new nt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Da(n,e){return n=dt(n),n._checkNotDeleted("ref"),e!==void 0?c_(n._root,e):n._root}function c_(n,e){return n=dt(n),Oe(n._path)===null?VP("child","path",e):gC("child","path",e),new zr(n._repo,Mt(n._path,e))}function uV(n){return n=dt(n),new lV(n._repo,n._path)}function Sg(n){return Yo("remove",n._path),Kd(n,null)}function Kd(n,e){n=dt(n),Yo("set",n._path),u_("set",e,n._path);const t=new Rs;return QP(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Zy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new rV("value",this,new cd(e.snapshotNode,new zr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new aV(this,e,t):null}matches(e){return e instanceof Zy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function cV(n,e,t,s,a){const l=new oV(t,void 0),c=new Zy(l);return WP(n._repo,n,c),()=>ZP(n._repo,n,c)}function Jy(n,e,t,s){return cV(n,"value",e)}rP(zr);hP(zr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV="FIREBASE_DATABASE_EMULATOR_HOST",h_={};let fV=!1;function dV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Lr(l);n.repoInfo_=new x1(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function mV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=OS(l,a),d=c.repoInfo,p;typeof process<"u"&&Wb&&(p=Wb[hV]),p?(l=`http://${p}?ns=${d.namespace}`,c=OS(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new bk(n.name,n.options,e);LP("Invalid Firebase Database URL",c),Pe(c.path)||Us("Database URL must point to the root of a Firebase Database (not including a child path).");const y=gV(d,n,g,new Tk(n,t));return new _V(y,n)}function pV(n,e){const t=h_[e];(!t||t[n.key]!==n)&&Us(`Database ${e}(${n.repoInfo_}) has already been deleted.`),JP(n),delete t[n.key]}function gV(n,e,t,s){let a=h_[e.name];a||(a={},h_[e.name]=a);let l=a[n.toURLString()];return l&&Us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new BP(n,fV,t,s),a[n.toURLString()]=l,l}class _V{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zr(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Us("Cannot call "+e+" on a deleted database.")}}function yV(n=E_(),e){const t=pd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=KS("database");s&&vV(t,...s)}return t}function vV(n,e,t,s={}){n=dt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Xi(s,l.repoInfo_.emulatorOptions))return;Us("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Us('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Rf(Rf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:WS(s.mockUserToken,n.app.options.projectId);c=new Rf(d)}Lr(e)&&(g_(e),__("Database",!0)),dV(l,a,s,c)}/**
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
 */function EV(n){rk(Ba),Ma(new Ir("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return mV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Hi(Zb,Jb,n),Hi(Zb,Jb,"esm2020")}Ms.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ms.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};EV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),MS=n=>{const e=bV(n);return e.charAt(0).toUpperCase()+e.slice(1)},AC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),SV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=ne.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>ne.createElement("svg",{ref:p,...wV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:AC("lucide",a),...!l&&!SV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,y])=>ne.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(n,e)=>{const t=ne.forwardRef(({className:s,...a},l)=>ne.createElement(AV,{ref:l,iconNode:e,className:AC(`lucide-${TV(MS(n))}`,`lucide-${n}`,s),...a}));return t.displayName=MS(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],RV=bt("arrow-left",CV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],kS=bt("bell",IV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],xV=bt("check-check",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ev=bt("check",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],MV=bt("circle-check-big",OV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],wg=bt("corner-up-left",kV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],VV=bt("ellipsis-vertical",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],UV=bt("eraser",LV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],CC=bt("loader-circle",jV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],PS=bt("log-out",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],VS=bt("message-circle",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],tv=bt("message-square",BV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],HV=bt("palette",FV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],QV=bt("pin-off",GV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],KV=bt("pin",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],XV=bt("send",$V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],ZV=bt("smile",WV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],RC=bt("square-pen",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],f_=bt("trash-2",eL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],LS=bt("user-plus",tL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],iL=bt("user-x",nL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],d_=bt("users",sL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],IC=bt("x",rL),aL=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},nv=nw(aL),ic=K2(nv),ke=QM(nv),Oa=yV(nv),oL=n=>{ne.useEffect(()=>{if(!n)return;const e=Da(Oa,`/status/${n.uid}`),t=mn(ke,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Da(Oa,".info/connected"),c=Jy(l,d=>{if(d.val()===!1){Dn(t,{state:"offline",last_changed:hl()});return}uV(e).set(s).then(()=>{Kd(e,a),Dn(t,{state:"online",last_changed:hl()})})});return()=>c()},[n])},$d=(n,e)=>{const[t,s]=ne.useState(null),a=ic.currentUser;return ne.useEffect(()=>{if(!n){s(null);return}const l=Bn(mn(ke,"users",n),p=>{if(p.exists()){const g=p.data(),y=e?.customNames?.[a.uid];s(T=>({...T||{},...g,displayName:y||g.displayName}))}else s(null)}),c=Da(Oa,`/status/${n}`),d=Jy(c,p=>{const g=p.val();s(y=>({...y||{},presence:g?.state}))});return()=>{l(),d()}},[n,e,a]),t},lL=n=>{const[e,t]=ne.useState(0);return ne.useEffect(()=>{if(!n?.uid)return;const s=Sn($t(ke,"friendships"),Rt("users","array-contains",n.uid),Rt("status","==","pending")),a=Bn(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},uL=n=>{const[e,t]=ne.useState(0),[s,a]=ne.useState([]);return ne.useEffect(()=>{if(!n?.uid)return;const l=Sn($t(ke,"friendships"),Rt("users","array-contains",n.uid),Rt("status","==","accepted")),c=Bn(l,d=>{const p=d.docs.map(g=>g.data().users.find(y=>y!==n.uid));a(p)});return()=>c()},[n]),ne.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=Sn($t(ke,`conversations/${p}/messages`),Rt("receiverId","==",n.uid),Rt("status","in",["sent","delivered"]));return Bn(g,y=>{l[p]=y.size;const T=Object.values(l).reduce((b,x)=>b+x,0);t(T)})});return()=>c.forEach(d=>d())},[s,n]),e},cL=n=>{const e=ne.useRef(n);ne.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),ne.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=SI"}),e.current=n},[n])},hL=(n,e)=>{const[t,s]=ne.useState(null);return ne.useEffect(()=>{if(!n||!e)return;const a=Sn($t(ke,"friendships"),Rt("users","array-contains",n.uid)),l=Bn(a,c=>{const d=c.docs.find(p=>p.data().users.includes(e.uid));s(d?{id:d.id,...d.data()}:null)});return()=>l()},[n,e]),t},fL=({text:n="Preparando seu bate-papo..."})=>A.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:A.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[A.jsx(tv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),A.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),A.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[A.jsx(CC,{className:"animate-spin h-10 w-10 text-blue-400"}),A.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),dL=()=>{const n=async()=>{const e=new Is;try{const s=(await i2(ic,e)).user,a=mn(ke,"users",s.uid);(await d1(a)).exists()||await nk(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL,recado:"Olá! Estou usando o ChatD."})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return A.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:A.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[A.jsx(tv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),A.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),A.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),A.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[A.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},mL=({user:n,onClose:e})=>n?A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[A.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),A.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),A.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),A.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),A.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,pL=({user:n,onClose:e})=>{const[t,s]=ne.useState(n.recado||""),a=async()=>{const l=mn(ke,"users",n.uid);await Dn(l,{recado:t}),e()};return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[A.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),A.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),A.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),A.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[A.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),A.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},hd=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[A.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),A.jsx("p",{className:"text-gray-400 mb-6",children:a}),A.jsxs("div",{className:"flex justify-center gap-4",children:[A.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),A.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,US=({currentUser:n})=>{const[e,t]=ne.useState(""),[s,a]=ne.useState([]),[l,c]=ne.useState({}),[d,p]=ne.useState(!1),[g,y]=ne.useState(""),[T,b]=ne.useState(""),x=async Q=>{if(Q.preventDefault(),e.trim()!==""){p(!0),y(""),b(""),a([]);try{const F=Sn($t(ke,"users"),Rt("email","==",e.trim()),h1(1)),te=(await Wf(F)).docs.map(le=>le.data())[0];if(te&&te.uid!==n.uid){a([te]);const le=Sn($t(ke,"friendships"),Rt("users","array-contains",n.uid)),pe=(await Wf(le)).docs.find(xe=>xe.data().users.includes(te.uid));c({[te.uid]:pe?pe.data().status:"not_friends"})}else te&&te.uid===n.uid?b("Você não pode adicionar a si mesmo."):b("Nenhum usuário encontrado com este e-mail.")}catch(F){y("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(F)}finally{p(!1)}}},U=async Q=>{try{await yy($t(ke,"friendships"),{users:[n.uid,Q.uid],status:"pending",requestedBy:n.uid,createdAt:hl()}),c(F=>({...F,[Q.uid]:"pending"}))}catch(F){y("Falha ao enviar pedido."),console.error(F)}};return A.jsxs("div",{className:"p-4",children:[A.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),A.jsxs("form",{onSubmit:x,className:"flex gap-2",children:[A.jsx("input",{type:"email",value:e,onChange:Q=>t(Q.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),A.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?A.jsx(CC,{className:"animate-spin"}):"Buscar"})]}),A.jsxs("div",{className:"mt-4 h-24",children:[g&&A.jsx("p",{className:"text-red-400",children:g}),T&&A.jsx("p",{className:"text-yellow-400",children:T}),s.map(Q=>A.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("img",{src:Q.photoURL,alt:Q.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("span",{className:"text-white",children:Q.displayName})]}),A.jsxs("div",{children:[l[Q.uid]==="not_friends"&&A.jsx("button",{onClick:()=>U(Q),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[Q.uid]==="pending"&&A.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[Q.uid]==="accepted"&&A.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[Q.uid]==="declined"&&A.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},Q.uid))]})]})},jS=({currentUser:n})=>{const[e,t]=ne.useState([]);ne.useEffect(()=>{if(!n?.uid)return;const a=Sn($t(ke,"friendships"),Rt("users","array-contains",n.uid),Rt("status","==","pending")),l=Bn(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const y=g.users.find(b=>b!==n.uid),T=await d1(mn(ke,"users",y));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await Dn(mn(ke,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return A.jsxs("div",{className:"p-4",children:[A.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?A.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):A.jsx("ul",{className:"space-y-2",children:e.map(a=>A.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("span",{className:"text-white",children:a.displayName})]}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:A.jsx(ev,{size:16})}),A.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:A.jsx(IC,{size:16})})]})]},a.id))})]})},gL=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=$d(n.friendId,n);return s?A.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[A.jsxs("div",{className:"flex items-center gap-4 relative",children:[A.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),A.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),A.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:A.jsx(f_,{size:18,className:"text-red-500"})})]}):A.jsx("div",{className:"p-4 h-[69px] bg-gray-800 animate-pulse"})},zS=({currentUser:n,onSelectUser:e})=>{const[t,s]=ne.useState([]),[a,l]=ne.useState(null);ne.useEffect(()=>{if(!n?.uid)return;const d=Sn($t(ke,"friendships"),Rt("users","array-contains",n.uid),Rt("status","==","accepted")),p=Bn(d,g=>{const y=g.docs.map(T=>({id:T.id,...T.data(),friendId:T.data().users.find(b=>b!==n.uid)}));s(y)});return()=>p()},[n.uid]);const c=async()=>{if(!a)return;const d=mn(ke,"friendships",a.id);try{await ik(d)}catch(p){console.error("Error deleting friendship: ",p)}l(null)};return A.jsxs("div",{className:"flex-grow overflow-y-auto",children:[A.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?A.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):A.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>A.jsx(gL,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),A.jsx(hd,{isOpen:!!a,onClose:()=>l(null),onConfirm:c,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},qS=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=ne.useState([]),[l,c]=ne.useState([]),[d,p]=ne.useState(null);ne.useEffect(()=>{if(!n?.uid)return;const b=Sn($t(ke,"friendships"),Rt("users","array-contains",n.uid),Rt("status","==","accepted")),x=Bn(b,F=>{let ue=F.docs.map(te=>({id:te.id,...te.data(),friendId:te.data().users.find(le=>le!==n.uid),isGroup:!1})).filter(te=>!te.chatDeletedFor?.includes(n.uid));ue.sort((te,le)=>{const me=te.pinnedBy?.includes(n.uid),pe=le.pinnedBy?.includes(n.uid);return me&&!pe?-1:!me&&pe?1:0}),a(ue)}),U=Sn($t(ke,"groups"),Rt("members","array-contains",n.uid)),Q=Bn(U,F=>{const ue=F.docs.map(te=>({id:te.id,...te.data(),isGroup:!0,displayName:te.data().name,photoURL:te.data().photoURL||`https://placehold.co/96x96/7c3aed/FFFFFF?text=${te.data().name.charAt(0).toUpperCase()}`}));c(ue)});return()=>{x(),Q()}},[n.uid]);const g=async(b,x)=>{const U=mn(ke,"friendships",b);x?await Dn(U,{pinnedBy:p1(n.uid)}):await Dn(U,{pinnedBy:Wu(n.uid)})},y=async()=>{if(!d)return;const b=mn(ke,"friendships",d.id);await Dn(b,{chatDeletedFor:Wu(n.uid)}),p(null)},T=[...s,...l];return A.jsxs("div",{className:"flex-grow overflow-y-auto",children:[A.jsxs("div",{className:"flex justify-between items-center p-4",children:[A.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),A.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",children:[A.jsx(d_,{size:16})," Criar Grupo"]})]}),T.length===0?A.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):A.jsx("ul",{className:"divide-y divide-gray-700/50",children:T.map(b=>A.jsx(_L,{chat:b,currentUser:n,onSelectUser:e,onTogglePin:g,onDeleteChat:()=>p(b)},b.id))}),A.jsx(hd,{isOpen:!!d,onClose:()=>p(null),onConfirm:y,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},_L=({chat:n,currentUser:e,onSelectUser:t,onTogglePin:s,onDeleteChat:a})=>{const l=$d(n.friendId,n),[c,d]=ne.useState(0),p=n.pinnedBy?.includes(e.uid),g=ne.useRef(null),[y,T]=ne.useState(null);ne.useEffect(()=>{if(!e)return;const Q=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,F=Sn($t(ke,Q),Rt("receiverId","==",e.uid),Rt("status","in",["sent","delivered"])),ue=Bn(F,me=>d(me.size)),te=Sn($t(ke,Q),c1("createdAt","desc"),h1(1)),le=Bn(te,me=>{me.empty||T(me.docs[0].data())});return()=>{ue(),le()}},[n,e]);const b=n.isGroup?n:l;if(!b)return A.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const x=U=>{if(!U||typeof U.seconds!="number")return"Offline";const Q=new Date(U.seconds*1e3),F=new Date,ue=new Date(F.getFullYear(),F.getMonth(),F.getDate()),te=new Date(F.getFullYear(),F.getMonth(),F.getDate()-1),le={hour:"2-digit",minute:"2-digit"},me=Q.toLocaleTimeString("pt-BR",le);if(Q>=ue)return`Visto por último hoje às ${me}`;if(Q>=te)return`Visto por último ontem às ${me}`;const pe={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${Q.toLocaleDateString("pt-BR",pe)}`};return A.jsxs("li",{ref:g,onClick:()=>t(b),onContextMenu:U=>{U.preventDefault(),n.isGroup||a()},className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${p?"bg-gray-700/30":""}`,children:[A.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[A.jsx("img",{src:b.photoURL,alt:b.displayName,className:"w-12 h-12 rounded-full flex-shrink-0"}),!n.isGroup&&A.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${l.presence==="online"?"bg-green-500":"bg-gray-500"}`}),A.jsxs("div",{className:"flex-grow min-w-0",children:[A.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:b.displayName}),A.jsx("p",{className:"text-sm text-gray-400 truncate",children:y?y.isDeleted?"Mensagem apagada":y.text:n.isGroup?"Nenhuma mensagem ainda":l?.presence==="online"?"Online":x(l?.last_changed)})]})]}),A.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[c>0&&A.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:c}),!n.isGroup&&A.jsx("button",{onClick:U=>{U.stopPropagation(),s(n.id,p)},className:"p-2 rounded-full hover:bg-gray-600",children:p?A.jsx(QV,{size:18,className:"text-blue-400"}):A.jsx(KV,{size:18,className:"text-gray-500"})})]})]})},yL=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a})=>{const[l,c]=ne.useState(!1),d=ne.useRef(null),p=ne.useRef(),[g,y]=ne.useState("bottom");ne.useEffect(()=>{l&&d.current&&(d.current.getBoundingClientRect().top<150?y("top"):y("bottom"))},[l]),ne.useEffect(()=>{const F=ue=>{d.current&&!d.current.contains(ue.target)&&c(!1)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[]);const T=F=>{F.preventDefault(),navigator.vibrate&&navigator.vibrate(50),c(!0)},b=F=>{p.current=setTimeout(()=>T(F),500)},x=()=>{clearTimeout(p.current)},U=()=>{clearTimeout(p.current)},Q=({msg:F})=>{if(!e||!F.status)return null;const ue=F.status==="read";return A.jsx(xV,{size:16,className:ue?"text-blue-400":"text-gray-400"})};return A.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&A.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:A.jsx(wg,{size:16})}),A.jsxs("div",{className:"relative",ref:d,onTouchStart:b,onTouchEnd:x,onTouchMove:U,onContextMenu:F=>{F.preventDefault(),c(!0)},children:[A.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&A.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[A.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),A.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),A.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":n.text}),!n.isDeleted&&A.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&A.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),A.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),A.jsx(Q,{msg:n})]})]}),l&&A.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${g==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10`,children:[A.jsxs("button",{onClick:()=>{t(),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(wg,{size:14})," Responder"]}),e&&!n.isDeleted&&A.jsxs(A.Fragment,{children:[A.jsxs("button",{onClick:()=>{a(),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(RC,{size:14})," Editar"]}),A.jsxs("button",{onClick:()=>{s("self"),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(f_,{size:14})," Apagar para mim"]}),A.jsxs("button",{onClick:()=>{s("all"),c(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[A.jsx(f_,{size:14})," Apagar para todos"]})]})]})]}),e&&A.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:A.jsx(wg,{size:16})})]})},vL=({onEmojiSelect:n,onClose:e})=>{const t=ne.useRef(null);ne.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍🔥","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return A.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:A.jsx("div",{className:"p-2 overflow-y-auto",children:A.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>A.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},EL=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}}];return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg",onClick:a=>a.stopPropagation(),children:[A.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),A.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>A.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[A.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&A.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:A.jsx(MV,{className:"text-white"})})}),A.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},TL=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=ne.useState(t);return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[A.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),A.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),A.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[A.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),A.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},BS=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=ne.useState([]),[l,c]=ne.useState(""),[d,p]=ne.useState(!1),[g,y]=ne.useState(!1),[T,b]=ne.useState(null),[x,U]=ne.useState(null),[Q,F]=ne.useState(!1),[ue,te]=ne.useState(!1),[le,me]=ne.useState(!1),[pe,xe]=ne.useState(!1),[k,C]=ne.useState(!1),[N,M]=ne.useState(null),P=ne.useRef(null),V=ne.useRef(null),R=hL(n,e),it=$d(e.uid,R),mt=ne.useRef(),Y=[n.uid,e.uid].sort().join("_"),re=R?.themes?.[n.uid]||"default",fe={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}};ne.useEffect(()=>{mt.current=it?.presence},[it?.presence]),ne.useEffect(()=>{if(mt.current!=="online"&&it?.presence==="online"){const ve=Sn($t(ke,`conversations/${Y}/messages`),Rt("receiverId","==",n.uid),Rt("status","==","sent"));Wf(ve).then(ze=>{const vt=pg(ke);ze.docs.forEach(gn=>vt.update(gn.ref,{status:"delivered"})),vt.commit()})}},[it?.presence,Y,n.uid]),ne.useEffect(()=>{const ve=`conversations/${Y}/messages`,ze=Sn($t(ke,ve),c1("createdAt","asc")),vt=Bn(ze,gn=>{const qr=gn.docs.map(It=>({id:It.id,...It.data()})).filter(It=>!It.deletedFor?.includes(n.uid));a(qr);const Br=pg(ke);gn.docs.forEach(It=>{It.data().receiverId===n.uid&&It.data().status!=="read"&&Br.update(It.ref,{status:"read"})}),Br.commit()});return()=>vt()},[Y,n.uid]),ne.useEffect(()=>{const ve=Da(Oa,`typing/${Y}/${e.uid}`),ze=Jy(ve,vt=>p(vt.exists()));return()=>ze()},[Y,e.uid]),ne.useEffect(()=>{P.current?.scrollIntoView({behavior:"smooth"})},[s]);const Ye=ve=>{c(ve.target.value);const ze=Da(Oa,`typing/${Y}/${n.uid}`);ve.target.value.trim().length>0?(Kd(ze,!0),V.current&&clearTimeout(V.current),V.current=setTimeout(()=>Sg(ze),3e3)):Sg(ze)},D=async ve=>{if(ve.preventDefault(),l.trim()===""||R?.blockedBy?.includes(e.uid)||R?.blockedBy?.includes(n.uid))return;const ze=l;c(""),Sg(Da(Oa,`typing/${Y}/${n.uid}`)),V.current&&clearTimeout(V.current);const vt={text:ze,createdAt:hl(),senderId:n.uid,receiverId:e.uid,status:it?.presence==="online"?"delivered":"sent"};T&&(vt.replyTo={id:T.id,text:T.text,senderName:T.senderId===n.uid?"Você":e.displayName});try{await yy($t(ke,`conversations/${Y}/messages`),vt),b(null)}catch(gn){console.error("Falha ao enviar mensagem:",gn),c(ze)}},J=async ve=>{if(ve.preventDefault(),!x||l.trim()==="")return;const ze=mn(ke,`conversations/${Y}/messages`,x.id);await Dn(ze,{text:l,edited:!0}),U(null),c("")},ae=async()=>{if(!N)return;const{id:ve,type:ze}=N,vt=mn(ke,`conversations/${Y}/messages`,ve);ze==="self"?await Dn(vt,{deletedFor:Wu(n.uid)}):ze==="all"&&await Dn(vt,{text:"",isDeleted:!0,replyTo:null}),M(null)},ee=async()=>{const ve=Sn($t(ke,`conversations/${Y}/messages`)),ze=await Wf(ve),vt=pg(ke);ze.docs.forEach(gn=>{vt.update(gn.ref,{deletedFor:Wu(n.uid)})}),await vt.commit(),me(!1)},ge=async()=>{if(!R)return;const ve=mn(ke,"friendships",R.id);R.blockedBy?.includes(n.uid)?await Dn(ve,{blockedBy:p1(n.uid)}):await Dn(ve,{blockedBy:Wu(n.uid)}),te(!1)},Ne=async ve=>{if(!R)return;const ze=mn(ke,"friendships",R.id);await Dn(ze,{[`themes.${n.uid}`]:ve}),xe(!1)},be=async ve=>{if(!R||!ve.trim())return;const ze=mn(ke,"friendships",R.id);await Dn(ze,{[`customNames.${n.uid}`]:ve.trim()}),C(!1)},kt=ve=>{U(ve),c(ve.text),b(null)},st=()=>{U(null),c("")},Cn=R?.blockedBy?.includes(n.uid),ei=R?.blockedBy?.includes(e.uid);return A.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[A.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[A.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:A.jsx(RV,{size:24})}),A.jsxs("div",{className:"flex items-center cursor-pointer flex-grow",onClick:()=>y(!0),children:[A.jsx("img",{src:e.photoURL,alt:it?.displayName,className:"w-10 h-10 rounded-full mr-4"}),A.jsxs("div",{children:[A.jsx("h2",{className:"text-xl font-bold text-white",children:it?.displayName}),A.jsx("p",{className:"text-sm text-blue-300 h-4",children:d?"Digitando...":it?.presence==="online"?"Online":""})]})]}),A.jsxs("div",{className:"relative",children:[A.jsx("button",{onClick:()=>te(ve=>!ve),className:"p-2 text-gray-400 hover:text-white",children:A.jsx(VV,{})}),ue&&A.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[A.jsxs("button",{onClick:()=>{C(!0),te(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(RC,{size:14})," Alterar nome do contato"]}),A.jsxs("button",{onClick:()=>{xe(!0),te(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(HV,{size:14})," Alterar tema da conversa"]}),A.jsxs("button",{onClick:()=>{me(!0),te(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(UV,{size:14})," Limpar conversa"]}),A.jsxs("button",{onClick:ge,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[A.jsx(iL,{size:14})," ",Cn?"Desbloquear":"Bloquear"]})]})]})]}),A.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500",style:fe[re],children:[A.jsx("div",{className:"space-y-2",children:s.map(ve=>A.jsx(yL,{msg:ve,isCurrentUser:ve.senderId===n.uid,onReply:()=>b(ve),onDelete:ze=>M({id:ve.id,type:ze}),onEdit:()=>kt(ve)},ve.id))}),A.jsx("div",{ref:P})]}),A.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[(T||x)&&A.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[A.jsxs("div",{className:"flex justify-between items-center text-sm",children:[A.jsx("p",{className:"font-bold",children:x?"Editando mensagem":`Respondendo a ${T.senderId===n.uid?"Você":it?.displayName}`}),A.jsx("button",{onClick:x?st:()=>b(null),className:"p-1",children:A.jsx(IC,{size:16})})]}),A.jsx("p",{className:"text-xs text-gray-400 truncate",children:x?x.text:T.text})]}),A.jsxs("div",{className:"relative flex items-center gap-2",children:[Q&&A.jsx(vL,{onEmojiSelect:ve=>c(ze=>ze+ve),onClose:()=>F(!1)}),A.jsx("button",{type:"button",onClick:()=>F(ve=>!ve),className:"p-2 text-gray-400 hover:text-white",children:A.jsx(ZV,{})}),A.jsxs("form",{onSubmit:x?J:D,className:"flex-grow flex items-center gap-2",children:[A.jsx("input",{type:"text",value:l,onChange:Ye,placeholder:Cn?"Você bloqueou este contato.":ei?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:ei||Cn,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),A.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||ei||Cn,children:x?A.jsx(ev,{size:20}):A.jsx(XV,{size:20})})]})]})]}),g&&A.jsx(mL,{user:e,onClose:()=>y(!1)}),pe&&A.jsx(EL,{onClose:()=>xe(!1),onSelectTheme:Ne,currentTheme:re}),k&&A.jsx(TL,{onClose:()=>C(!1),onSave:be,currentName:it?.displayName}),A.jsx(hd,{isOpen:le,onClose:()=>me(!1),onConfirm:ee,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),A.jsx(hd,{isOpen:!!N,onClose:()=>M(null),onConfirm:ae,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${N?.type==="all"?"para todos":"para você"}?`})]})},bL=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=ne.useState(""),[l,c]=ne.useState([n.uid]),[d,p]=ne.useState(""),g=T=>{c(b=>b.includes(T)?b.filter(x=>x!==T):[...b,T])},y=async()=>{if(!s.trim()){p("O nome do grupo é obrigatório.");return}if(l.length<2){p("Selecione pelo menos um amigo para criar um grupo.");return}try{await yy($t(ke,"groups"),{name:s.trim(),members:l,admins:[n.uid],createdAt:hl(),createdBy:n.uid}),e()}catch(T){console.error("Erro ao criar grupo:",T),p("Não foi possível criar o grupo. Tente novamente.")}};return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col",onClick:T=>T.stopPropagation(),children:[A.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),A.jsx("input",{type:"text",value:s,onChange:T=>a(T.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),A.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),A.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(T=>A.jsx(SL,{friendship:T,onToggle:g,isSelected:l.includes(T.friendId)},T.id))}),d&&A.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),A.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[A.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),A.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Criar Grupo"})]})]})})},SL=({friendship:n,onToggle:e,isSelected:t})=>{const s=$d(n.friendId,n);return s?A.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("span",{className:"text-white",children:s.displayName})]}),A.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&A.jsx(ev,{size:16,className:"text-white"})})]}):null},wL=({user:n,onLogout:e})=>{const[t,s]=ne.useState(null),[a,l]=ne.useState("chats"),[c,d]=ne.useState("list"),[p,g]=ne.useState(!1),[y,T]=ne.useState(!1),[b,x]=ne.useState([]),U=lL(n),Q=uL(n);cL(Q),ne.useEffect(()=>{if(!n?.uid)return;const me=Sn($t(ke,"friendships"),Rt("users","array-contains",n.uid),Rt("status","==","accepted")),pe=Bn(me,xe=>{const k=xe.docs.map(C=>({id:C.id,...C.data(),friendId:C.data().users.find(N=>N!==n.uid)}));x(k)});return()=>pe()},[n.uid]),ne.useEffect(()=>{d(t?"chat":"list")},[t]);const F=me=>{s(me)},ue=()=>{s(null)},te=({count:me})=>me===0?null:A.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:me}),le=({count:me})=>me===0?null:A.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[A.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),A.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]});return A.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&A.jsx(pL,{user:n,onClose:()=>g(!1)}),y&&A.jsx(bL,{currentUser:n,onClose:()=>T(!1),friendships:b}),A.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[A.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[A.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[A.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),A.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:A.jsx(PS,{size:20})})]}),A.jsxs("div",{className:"flex border-b border-gray-700/50",children:[A.jsxs("button",{onClick:()=>l("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[A.jsx(VS,{className:"mx-auto"}),A.jsx(le,{count:Q})]}),A.jsx("button",{onClick:()=>l("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:A.jsx(d_,{className:"mx-auto"})}),A.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:A.jsx(LS,{className:"mx-auto"})}),A.jsxs("button",{onClick:()=>l("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[A.jsx(kS,{className:"mx-auto"}),A.jsx(te,{count:U})]})]}),A.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&A.jsx(qS,{currentUser:n,onSelectUser:F,onCreateGroup:()=>T(!0)}),a==="contacts"&&A.jsx(zS,{currentUser:n,onSelectUser:F}),a==="add"&&A.jsx(US,{currentUser:n}),a==="requests"&&A.jsx(jS,{currentUser:n})]})]}),A.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[A.jsxs("div",{className:`flex-col h-full ${c==="list"?"flex":"hidden"}`,children:[A.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[A.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[A.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),A.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:A.jsx(PS,{size:20})})]}),A.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&A.jsx(qS,{currentUser:n,onSelectUser:F,onCreateGroup:()=>T(!0)}),a==="contacts"&&A.jsx(zS,{currentUser:n,onSelectUser:F}),a==="add"&&A.jsx(US,{currentUser:n}),a==="requests"&&A.jsx(jS,{currentUser:n})]}),A.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[A.jsxs("button",{onClick:()=>l("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[A.jsx(VS,{}),A.jsx(le,{count:Q})]}),A.jsx("button",{onClick:()=>l("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:A.jsx(d_,{})}),A.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:A.jsx(LS,{})}),A.jsxs("button",{onClick:()=>l("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[A.jsx(kS,{}),A.jsx(te,{count:U})]})]})]}),c==="chat"&&t&&A.jsx(BS,{currentUser:n,otherUser:t,onLeave:ue})]}),A.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?A.jsx(BS,{currentUser:n,otherUser:t,onLeave:ue}):A.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[A.jsx(tv,{size:60,className:"mb-4"}),A.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),A.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function AL(){return A.jsxs(A.Fragment,{children:[A.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),A.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:A.jsx(CL,{})})]})}const CL=()=>{const[n,e]=ne.useState(null),[t,s]=ne.useState(!0),[a,l]=ne.useState(null);oL(n),ne.useEffect(()=>{const d=Vx(ic,async p=>{if(p)e(p);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await Mx(ic,__initial_auth_token):e(null)}catch(g){console.error("Falha na autenticação automática, mostrando tela de login.",g),e(null)}s(!1)});return()=>d()},[]),ne.useEffect(()=>{if(!n){l(null);return}const d=mn(ke,"users",n.uid),p=Bn(d,g=>{g.exists()&&l({...n,...g.data()})});return()=>p()},[n]);const c=async()=>{if(n)try{const d=Da(Oa,`/status/${n.uid}`);await Kd(d,{state:"offline",last_changed:Date.now()}),await Dn(mn(ke,`/users/${n.uid}`),{state:"offline",last_changed:hl()}),await Lx(ic),e(null)}catch(d){console.error("Erro ao fazer logout:",d)}};return t?A.jsx(fL,{}):a?A.jsx(wL,{user:a,onLogout:c}):A.jsx(dL,{})};lI.createRoot(document.getElementById("root")).render(A.jsx(ne.StrictMode,{children:A.jsx(AL,{})}));
