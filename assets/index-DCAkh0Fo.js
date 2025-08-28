(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Zp={exports:{}},ju={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T;function tI(){if(_T)return ju;_T=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return ju.Fragment=e,ju.jsx=t,ju.jsxs=t,ju}var yT;function nI(){return yT||(yT=1,Zp.exports=tI()),Zp.exports}var S=nI(),Jp={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT;function iI(){if(vT)return De;vT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,F={};function G(D,X,oe){this.props=D,this.context=X,this.refs=F,this.updater=oe||x}G.prototype.isReactComponent={},G.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ae(){}ae.prototype=G.prototype;function ie(D,X,oe){this.props=D,this.context=X,this.refs=F,this.updater=oe||x}var le=ie.prototype=new ae;le.constructor=ie,U(le,G.prototype),le.isPureReactComponent=!0;var _e=Array.isArray,de={H:null,A:null,T:null,S:null,V:null},Oe=Object.prototype.hasOwnProperty;function P(D,X,oe,te,ge,Me){return oe=Me.ref,{$$typeof:n,type:D,key:X,ref:oe!==void 0?oe:null,props:Me}}function C(D,X){return P(D.type,X,void 0,void 0,void 0,D.props)}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function M(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(oe){return X[oe]})}var k=/\/+/g;function L(D,X){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):X.toString(36)}function R(){}function Ht(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function pt(D,X,oe,te,ge){var Me=typeof D;(Me==="undefined"||Me==="boolean")&&(D=null);var be=!1;if(D===null)be=!0;else switch(Me){case"bigint":case"string":case"number":be=!0;break;case"object":switch(D.$$typeof){case n:case e:be=!0;break;case y:return be=D._init,pt(be(D._payload),X,oe,te,ge)}}if(be)return ge=ge(D),be=te===""?"."+L(D,0):te,_e(ge)?(oe="",be!=null&&(oe=be.replace(k,"$&/")+"/"),pt(ge,X,oe,"",function(Jn){return Jn})):ge!=null&&(N(ge)&&(ge=C(ge,oe+(ge.key==null||D&&D.key===ge.key?"":(""+ge.key).replace(k,"$&/")+"/")+be)),X.push(ge)),1;be=0;var kt=te===""?".":te+":";if(_e(D))for(var st=0;st<D.length;st++)te=D[st],Me=kt+L(te,st),be+=pt(te,X,oe,Me,ge);else if(st=b(D),typeof st=="function")for(D=st.call(D),st=0;!(te=D.next()).done;)te=te.value,Me=kt+L(te,st++),be+=pt(te,X,oe,Me,ge);else if(Me==="object"){if(typeof D.then=="function")return pt(Ht(D),X,oe,te,ge);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return be}function Y(D,X,oe){if(D==null)return D;var te=[],ge=0;return pt(D,te,"","",function(Me){return X.call(oe,Me,ge++)}),te}function J(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(oe){(D._status===0||D._status===-1)&&(D._status=1,D._result=oe)},function(oe){(D._status===0||D._status===-1)&&(D._status=2,D._result=oe)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var ce=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function xe(){}return De.Children={map:Y,forEach:function(D,X,oe){Y(D,function(){X.apply(this,arguments)},oe)},count:function(D){var X=0;return Y(D,function(){X++}),X},toArray:function(D){return Y(D,function(X){return X})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},De.Component=G,De.Fragment=t,De.Profiler=a,De.PureComponent=ie,De.StrictMode=s,De.Suspense=p,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de,De.__COMPILER_RUNTIME={__proto__:null,c:function(D){return de.H.useMemoCache(D)}},De.cache=function(D){return function(){return D.apply(null,arguments)}},De.cloneElement=function(D,X,oe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var te=U({},D.props),ge=D.key,Me=void 0;if(X!=null)for(be in X.ref!==void 0&&(Me=void 0),X.key!==void 0&&(ge=""+X.key),X)!Oe.call(X,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&X.ref===void 0||(te[be]=X[be]);var be=arguments.length-2;if(be===1)te.children=oe;else if(1<be){for(var kt=Array(be),st=0;st<be;st++)kt[st]=arguments[st+2];te.children=kt}return P(D.type,ge,void 0,void 0,Me,te)},De.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},De.createElement=function(D,X,oe){var te,ge={},Me=null;if(X!=null)for(te in X.key!==void 0&&(Me=""+X.key),X)Oe.call(X,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ge[te]=X[te]);var be=arguments.length-2;if(be===1)ge.children=oe;else if(1<be){for(var kt=Array(be),st=0;st<be;st++)kt[st]=arguments[st+2];ge.children=kt}if(D&&D.defaultProps)for(te in be=D.defaultProps,be)ge[te]===void 0&&(ge[te]=be[te]);return P(D,Me,void 0,void 0,null,ge)},De.createRef=function(){return{current:null}},De.forwardRef=function(D){return{$$typeof:d,render:D}},De.isValidElement=N,De.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:J}},De.memo=function(D,X){return{$$typeof:g,type:D,compare:X===void 0?null:X}},De.startTransition=function(D){var X=de.T,oe={};de.T=oe;try{var te=D(),ge=de.S;ge!==null&&ge(oe,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(xe,ce)}catch(Me){ce(Me)}finally{de.T=X}},De.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()},De.use=function(D){return de.H.use(D)},De.useActionState=function(D,X,oe){return de.H.useActionState(D,X,oe)},De.useCallback=function(D,X){return de.H.useCallback(D,X)},De.useContext=function(D){return de.H.useContext(D)},De.useDebugValue=function(){},De.useDeferredValue=function(D,X){return de.H.useDeferredValue(D,X)},De.useEffect=function(D,X,oe){var te=de.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(D,X)},De.useId=function(){return de.H.useId()},De.useImperativeHandle=function(D,X,oe){return de.H.useImperativeHandle(D,X,oe)},De.useInsertionEffect=function(D,X){return de.H.useInsertionEffect(D,X)},De.useLayoutEffect=function(D,X){return de.H.useLayoutEffect(D,X)},De.useMemo=function(D,X){return de.H.useMemo(D,X)},De.useOptimistic=function(D,X){return de.H.useOptimistic(D,X)},De.useReducer=function(D,X,oe){return de.H.useReducer(D,X,oe)},De.useRef=function(D){return de.H.useRef(D)},De.useState=function(D){return de.H.useState(D)},De.useSyncExternalStore=function(D,X,oe){return de.H.useSyncExternalStore(D,X,oe)},De.useTransition=function(){return de.H.useTransition()},De.version="19.1.1",De}var ET;function g_(){return ET||(ET=1,Jp.exports=iI()),Jp.exports}var ne=g_(),eg={exports:{}},zu={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function sI(){return TT||(TT=1,(function(n){function e(Y,J){var ce=Y.length;Y.push(J);e:for(;0<ce;){var xe=ce-1>>>1,D=Y[xe];if(0<a(D,J))Y[xe]=J,Y[ce]=D,ce=xe;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var J=Y[0],ce=Y.pop();if(ce!==J){Y[0]=ce;e:for(var xe=0,D=Y.length,X=D>>>1;xe<X;){var oe=2*(xe+1)-1,te=Y[oe],ge=oe+1,Me=Y[ge];if(0>a(te,ce))ge<D&&0>a(Me,te)?(Y[xe]=Me,Y[ge]=ce,xe=ge):(Y[xe]=te,Y[oe]=ce,xe=oe);else if(ge<D&&0>a(Me,ce))Y[xe]=Me,Y[ge]=ce,xe=ge;else break e}}return J}function a(Y,J){var ce=Y.sortIndex-J.sortIndex;return ce!==0?ce:Y.id-J.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,b=3,x=!1,U=!1,F=!1,G=!1,ae=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function _e(Y){for(var J=t(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=Y)s(g),J.sortIndex=J.expirationTime,e(p,J);else break;J=t(g)}}function de(Y){if(F=!1,_e(Y),!U)if(t(p)!==null)U=!0,Oe||(Oe=!0,L());else{var J=t(g);J!==null&&pt(de,J.startTime-Y)}}var Oe=!1,P=-1,C=5,N=-1;function M(){return G?!0:!(n.unstable_now()-N<C)}function k(){if(G=!1,Oe){var Y=n.unstable_now();N=Y;var J=!0;try{e:{U=!1,F&&(F=!1,ie(P),P=-1),x=!0;var ce=b;try{t:{for(_e(Y),T=t(p);T!==null&&!(T.expirationTime>Y&&M());){var xe=T.callback;if(typeof xe=="function"){T.callback=null,b=T.priorityLevel;var D=xe(T.expirationTime<=Y);if(Y=n.unstable_now(),typeof D=="function"){T.callback=D,_e(Y),J=!0;break t}T===t(p)&&s(p),_e(Y)}else s(p);T=t(p)}if(T!==null)J=!0;else{var X=t(g);X!==null&&pt(de,X.startTime-Y),J=!1}}break e}finally{T=null,b=ce,x=!1}J=void 0}}finally{J?L():Oe=!1}}}var L;if(typeof le=="function")L=function(){le(k)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Ht=R.port2;R.port1.onmessage=k,L=function(){Ht.postMessage(null)}}else L=function(){ae(k,0)};function pt(Y,J){P=ae(function(){Y(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_next=function(Y){switch(b){case 1:case 2:case 3:var J=3;break;default:J=b}var ce=b;b=J;try{return Y()}finally{b=ce}},n.unstable_requestPaint=function(){G=!0},n.unstable_runWithPriority=function(Y,J){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ce=b;b=Y;try{return J()}finally{b=ce}},n.unstable_scheduleCallback=function(Y,J,ce){var xe=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?xe+ce:xe):ce=xe,Y){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ce+D,Y={id:y++,callback:J,priorityLevel:Y,startTime:ce,expirationTime:D,sortIndex:-1},ce>xe?(Y.sortIndex=ce,e(g,Y),t(p)===null&&Y===t(g)&&(F?(ie(P),P=-1):F=!0,pt(de,ce-xe))):(Y.sortIndex=D,e(p,Y),U||x||(U=!0,Oe||(Oe=!0,L()))),Y},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(Y){var J=b;return function(){var ce=b;b=J;try{return Y.apply(this,arguments)}finally{b=ce}}}})(ng)),ng}var bT;function rI(){return bT||(bT=1,tg.exports=sI()),tg.exports}var ig={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function aI(){if(wT)return En;wT=1;var n=g_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},En.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},En.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},En.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},En.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:x}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:b,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},En.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},En.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},En.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},En.requestFormReset=function(p){s.d.r(p)},En.unstable_batchedUpdates=function(p,g){return p(g)},En.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},En.useFormStatus=function(){return c.H.useHostTransitionStatus()},En.version="19.1.1",En}var ST;function oI(){if(ST)return ig.exports;ST=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ig.exports=aI(),ig.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function lI(){if(AT)return zu;AT=1;var n=rI(),e=g_(),t=oI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,w=f.child;w;){if(w===o){E=!0,o=f,u=m;break}if(w===u){E=!0,u=f,o=m;break}w=w.sibling}if(!E){for(w=m.child;w;){if(w===o){E=!0,o=m,u=f;break}if(w===u){E=!0,u=m,o=f;break}w=w.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),le=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function Ht(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case G:return"Profiler";case F:return"StrictMode";case de:return"Suspense";case Oe:return"SuspenseList";case N:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case x:return"Portal";case le:return(i.displayName||"Context")+".Provider";case ie:return(i._context.displayName||"Context")+".Consumer";case _e:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:Ht(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return Ht(i(r))}catch{}}return null}var pt=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},xe=[],D=-1;function X(i){return{current:i}}function oe(i){0>D||(i.current=xe[D],xe[D]=null,D--)}function te(i,r){D++,xe[D]=i.current,i.current=r}var ge=X(null),Me=X(null),be=X(null),kt=X(null);function st(i,r){switch(te(be,r),te(Me,i),te(ge,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?GE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=GE(r),i=QE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}oe(ge),te(ge,i)}function Jn(){oe(ge),oe(Me),oe(be)}function Ri(i){i.memoizedState!==null&&te(kt,i);var r=ge.current,o=QE(r,i.type);r!==o&&(te(Me,i),te(ge,o))}function mi(i){Me.current===i&&(oe(ge),oe(Me)),kt.current===i&&(oe(kt),ku._currentValue=ce)}var is=Object.prototype.hasOwnProperty,ss=n.unstable_scheduleCallback,rs=n.unstable_cancelCallback,$r=n.unstable_shouldYield,eo=n.unstable_requestPaint,kn=n.unstable_now,$s=n.unstable_getCurrentPriorityLevel,as=n.unstable_ImmediatePriority,Ii=n.unstable_UserBlockingPriority,os=n.unstable_NormalPriority,me=n.unstable_LowPriority,Ce=n.unstable_IdlePriority,qe=n.log,cn=n.unstable_setDisableYieldValue,ht=null,Ge=null;function gt(i){if(typeof qe=="function"&&cn(i),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(ht,i)}catch{}}var Zt=Math.clz32?Math.clz32:Xr,Ml=Math.log,em=Math.LN2;function Xr(i){return i>>>=0,i===0?32:31-(Ml(i)/em|0)|0}var Wr=256,Zr=4194304;function pi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function to(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var w=u&134217727;return w!==0?(u=w&~m,u!==0?f=pi(u):(E&=w,E!==0?f=pi(E):o||(o=w&~i,o!==0&&(f=pi(o))))):(w=u&~m,w!==0?f=pi(w):E!==0?f=pi(E):o||(o=u&~i,o!==0&&(f=pi(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Jr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function kl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pl(){var i=Wr;return Wr<<=1,(Wr&4194048)===0&&(Wr=256),i}function Vl(){var i=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),i}function ls(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function us(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Ll(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,I=i.expirationTimes,B=i.hiddenUpdates;for(o=E&~o;0<o;){var K=31-Zt(o),Z=1<<K;w[K]=0,I[K]=-1;var q=B[K];if(q!==null)for(B[K]=null,K=0;K<q.length;K++){var H=q[K];H!==null&&(H.lane&=-536870913)}o&=~Z}u!==0&&Ni(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function Ni(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-Zt(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Ul(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-Zt(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Xs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function no(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ws(){var i=J.p;return i!==0?i:(i=window.event,i===void 0?32:hT(i.type))}function Hc(i,r){var o=J.p;try{return J.p=i,r()}finally{J.p=o}}var Et=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Et,Pt="__reactProps$"+Et,ei="__reactContainer$"+Et,jl="__reactEvents$"+Et,tm="__reactListeners$"+Et,Zs="__reactHandles$"+Et,Gc="__reactResources$"+Et,ea="__reactMarker$"+Et;function Js(i){delete i[Gt],delete i[Pt],delete i[jl],delete i[tm],delete i[Zs]}function cs(i){var r=i[Gt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[ei]||o[Gt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=XE(i);i!==null;){if(o=i[Gt])return o;i=XE(i)}return r}i=o,o=i.parentNode}return null}function xi(i){if(i=i[Gt]||i[ei]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Di(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function Rn(i){var r=i[Gc];return r||(r=i[Gc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nt(i){i[ea]=!0}var zl=new Set,io={};function gi(i,r){hs(i,r),hs(i+"Capture",r)}function hs(i,r){for(io[i]=r,i=0;i<r.length;i++)zl.add(r[i])}var Qc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yc={},ta={};function Kc(i){return is.call(ta,i)?!0:is.call(Yc,i)?!1:Qc.test(i)?ta[i]=!0:(Yc[i]=!0,!1)}function er(i,r,o){if(Kc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Oi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function hn(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var na,$c;function fs(i){if(na===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);na=r&&r[1]||"",$c=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+na+i+$c}var so=!1;function ro(i,r){if(!i||so)return"";so=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(H){var q=H}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(H){q=H}i.call(Z.prototype)}}else{try{throw Error()}catch(H){q=H}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],w=m[1];if(E&&w){var I=E.split(`
`),B=w.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===B.length)for(u=I.length-1,f=B.length-1;1<=u&&0<=f&&I[u]!==B[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==B[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==B[f]){var K=`
`+I[u].replace(" at new "," at ");return i.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",i.displayName)),K}while(1<=u&&0<=f);break}}}finally{so=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?fs(o):""}function Bl(i){switch(i.tag){case 26:case 27:case 5:return fs(i.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 15:return ro(i.type,!1);case 11:return ro(i.type.render,!1);case 1:return ro(i.type,!0);case 31:return fs("Activity");default:return""}}function ao(i){try{var r="";do r+=Bl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function In(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ql(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function nm(i){var r=ql(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function oo(i){i._valueTracker||(i._valueTracker=nm(i))}function Fl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=ql(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function ia(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var im=/[\n"\\]/g;function Vt(i){return i.replace(im,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Fn(i,r,o,u,f,m,E,w){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+In(r)):i.value!==""+In(r)&&(i.value=""+In(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?tr(i,E,In(r)):o!=null?tr(i,E,In(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+In(w):i.removeAttribute("name")}function sa(i,r,o,u,f,m,E,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+In(o):"",r=r!=null?""+In(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=w?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function tr(i,r,o){r==="number"&&ia(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function ds(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+In(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function rt(i,r,o){if(r!=null&&(r=""+In(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+In(o):""}function ra(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(pt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=In(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function ti(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var aa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||aa.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Hl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Xc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Xc(i,m,r[m])}function Gl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lo(i){return rm.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ms=null;function ni(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ps=null,gs=null;function Ql(i){var r=xi(i);if(r&&(i=r.stateNode)){var o=i[Pt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Fn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Vt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Pt]||null;if(!f)throw Error(s(90));Fn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Fl(u)}break e;case"textarea":rt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ds(i,!!o.multiple,r,!1)}}}var Mi=!1;function Wc(i,r,o){if(Mi)return i(r,o);Mi=!0;try{var u=i(r);return u}finally{if(Mi=!1,(ps!==null||gs!==null)&&(Hh(),ps&&(r=ps,i=gs,gs=ps=null,Ql(r),i)))for(r=0;r<i.length;r++)Ql(i[r])}}function oa(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Pt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=!1;if(_i)try{var la={};Object.defineProperty(la,"passive",{get:function(){ii=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{ii=!1}var ki=null,nr=null,_s=null;function Yl(){if(_s)return _s;var i,r=nr,o=r.length,u,f="value"in ki?ki.value:ki.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return _s=f.slice(i,1<u?1-u:void 0)}function Pi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Vi(){return!0}function Kl(){return!1}function Jt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vi:Kl,this.isPropagationStopped=Kl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),r}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=Jt(Je),ua=y({},Je,{view:0,detail:0}),Zc=Jt(ua),co,ho,Li,ca=y({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Li&&(Li&&i.type==="mousemove"?(co=i.screenX-Li.screenX,ho=i.screenY-Li.screenY):ho=co=0,Li=i),co)},movementY:function(i){return"movementY"in i?i.movementY:ho}}),si=Jt(ca),Jc=y({},ca,{dataTransfer:0}),am=Jt(Jc),ha=y({},ua,{relatedTarget:0}),fo=Jt(ha),$l=y({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),mo=Jt($l),eh=y({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),po=Jt(eh),om=y({},Je,{data:0}),Xl=Jt(om),fa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=nh[i])?!!r[i]:!1}function da(){return Wl}var ih=y({},ua,{key:function(i){if(i.key){var r=fa[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Pi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?th[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(i){return i.type==="keypress"?Pi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Pi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),go=Jt(ih),sh=y({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=Jt(sh),ys=y({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),rh=Jt(ys),ah=y({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),oh=Jt(ah),lh=y({},ca,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),_o=Jt(lh),Nn=y({},Je,{newState:0,oldState:0}),uh=Jt(Nn),ch=[9,13,27,32],Ui=_i&&"CompositionEvent"in window,h=null;_i&&"documentMode"in document&&(h=document.documentMode);var _=_i&&"TextEvent"in window&&!h,v=_i&&(!Ui||h&&8<h&&11>=h),A=" ",j=!1;function Q(i,r){switch(i){case"keyup":return ch.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Qe=!1;function Qt(i,r){switch(i){case"compositionend":return se(r);case"keypress":return r.which!==32?null:(j=!0,A);case"textInput":return i=r.data,i===A&&j?null:i;default:return null}}function Ye(i,r){if(Qe)return i==="compositionend"||!Ui&&Q(i,r)?(i=Yl(),_s=nr=ki=null,Qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var en={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!en[i.type]:r==="textarea"}function vs(i,r,o,u){ps?gs?gs.push(u):gs=[u]:ps=u,r=Xh(r,"onChange"),0<r.length&&(o=new uo("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var fn=null,ji=null;function Jl(i){zE(i,0)}function hh(i){var r=Di(i);if(Fl(r))return i}function ov(i,r){if(i==="change")return r}var lv=!1;if(_i){var lm;if(_i){var um="oninput"in document;if(!um){var uv=document.createElement("div");uv.setAttribute("oninput","return;"),um=typeof uv.oninput=="function"}lm=um}else lm=!1;lv=lm&&(!document.documentMode||9<document.documentMode)}function cv(){fn&&(fn.detachEvent("onpropertychange",hv),ji=fn=null)}function hv(i){if(i.propertyName==="value"&&hh(ji)){var r=[];vs(r,ji,i,ni(i)),Wc(Jl,r)}}function DC(i,r,o){i==="focusin"?(cv(),fn=r,ji=o,fn.attachEvent("onpropertychange",hv)):i==="focusout"&&cv()}function OC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return hh(ji)}function MC(i,r){if(i==="click")return hh(r)}function kC(i,r){if(i==="input"||i==="change")return hh(r)}function PC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Hn=typeof Object.is=="function"?Object.is:PC;function eu(i,r){if(Hn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!is.call(r,f)||!Hn(i[f],r[f]))return!1}return!0}function fv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function dv(i,r){var o=fv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=fv(o)}}function mv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?mv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function pv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=ia(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=ia(i.document)}return r}function cm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var VC=_i&&"documentMode"in document&&11>=document.documentMode,yo=null,hm=null,tu=null,fm=!1;function gv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fm||yo==null||yo!==ia(u)||(u=yo,"selectionStart"in u&&cm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),tu&&eu(tu,u)||(tu=u,u=Xh(hm,"onSelect"),0<u.length&&(r=new uo("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=yo)))}function ma(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var vo={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},dm={},_v={};_i&&(_v=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function pa(i){if(dm[i])return dm[i];if(!vo[i])return i;var r=vo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in _v)return dm[i]=r[o];return i}var yv=pa("animationend"),vv=pa("animationiteration"),Ev=pa("animationstart"),LC=pa("transitionrun"),UC=pa("transitionstart"),jC=pa("transitioncancel"),Tv=pa("transitionend"),bv=new Map,mm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mm.push("scrollEnd");function yi(i,r){bv.set(i,r),gi(r,[i])}var wv=new WeakMap;function ri(i,r){if(typeof i=="object"&&i!==null){var o=wv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:ao(r)},wv.set(i,r),r)}return{value:i,source:r,stack:ao(r)}}var ai=[],Eo=0,pm=0;function fh(){for(var i=Eo,r=pm=Eo=0;r<i;){var o=ai[r];ai[r++]=null;var u=ai[r];ai[r++]=null;var f=ai[r];ai[r++]=null;var m=ai[r];if(ai[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Sv(o,f,m)}}function dh(i,r,o,u){ai[Eo++]=i,ai[Eo++]=r,ai[Eo++]=o,ai[Eo++]=u,pm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function gm(i,r,o,u){return dh(i,r,o,u),mh(i)}function To(i,r){return dh(i,null,null,r),mh(i)}function Sv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-Zt(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function mh(i){if(50<Cu)throw Cu=0,bp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var bo={};function zC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(i,r,o,u){return new zC(i,r,o,u)}function _m(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Es(i,r){var o=i.alternate;return o===null?(o=Gn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Av(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function ph(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")_m(i)&&(E=1);else if(typeof i=="string")E=qR(i,o,ge.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case N:return i=Gn(31,o,r,f),i.elementType=N,i.lanes=m,i;case U:return ga(o.children,f,m,r);case F:E=8,f|=24;break;case G:return i=Gn(12,o,r,f|2),i.elementType=G,i.lanes=m,i;case de:return i=Gn(13,o,r,f),i.elementType=de,i.lanes=m,i;case Oe:return i=Gn(19,o,r,f),i.elementType=Oe,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ae:case le:E=10;break e;case ie:E=9;break e;case _e:E=11;break e;case P:E=14;break e;case C:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Gn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ga(i,r,o,u){return i=Gn(7,i,u,r),i.lanes=o,i}function ym(i,r,o){return i=Gn(6,i,null,r),i.lanes=o,i}function vm(i,r,o){return r=Gn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var wo=[],So=0,gh=null,_h=0,oi=[],li=0,_a=null,Ts=1,bs="";function ya(i,r){wo[So++]=_h,wo[So++]=gh,gh=i,_h=r}function Cv(i,r,o){oi[li++]=Ts,oi[li++]=bs,oi[li++]=_a,_a=i;var u=Ts;i=bs;var f=32-Zt(u)-1;u&=~(1<<f),o+=1;var m=32-Zt(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Ts=1<<32-Zt(r)+f|o<<f|u,bs=m+i}else Ts=1<<m|o<<f|u,bs=i}function Em(i){i.return!==null&&(ya(i,1),Cv(i,1,0))}function Tm(i){for(;i===gh;)gh=wo[--So],wo[So]=null,_h=wo[--So],wo[So]=null;for(;i===_a;)_a=oi[--li],oi[li]=null,bs=oi[--li],oi[li]=null,Ts=oi[--li],oi[li]=null}var xn=null,At=null,We=!1,va=null,zi=!1,bm=Error(s(519));function Ea(i){var r=Error(s(418,""));throw su(ri(r,i)),bm}function Rv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Gt]=i,r[Pt]=u,o){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<Iu.length;o++)ze(Iu[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":ze("invalid",r),sa(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),oo(r);break;case"select":ze("invalid",r);break;case"textarea":ze("invalid",r),ra(r,u.value,u.defaultValue,u.children),oo(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||HE(r.textContent,o)?(u.popover!=null&&(ze("beforetoggle",r),ze("toggle",r)),u.onScroll!=null&&ze("scroll",r),u.onScrollEnd!=null&&ze("scrollend",r),u.onClick!=null&&(r.onclick=Wh),r=!0):r=!1,r||Ea(i)}function Iv(i){for(xn=i.return;xn;)switch(xn.tag){case 5:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:xn=xn.return}}function nu(i){if(i!==xn)return!1;if(!We)return Iv(i),We=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Up(i.type,i.memoizedProps)),o=!o),o&&At&&Ea(i),Iv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){At=Ei(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}At=null}}else r===27?(r=At,yr(i.type)?(i=qp,qp=null,At=i):At=r):At=xn?Ei(i.stateNode.nextSibling):null;return!0}function iu(){At=xn=null,We=!1}function Nv(){var i=va;return i!==null&&(Ln===null?Ln=i:Ln.push.apply(Ln,i),va=null),i}function su(i){va===null?va=[i]:va.push(i)}var wm=X(null),Ta=null,ws=null;function ir(i,r,o){te(wm,r._currentValue),r._currentValue=o}function Ss(i){i._currentValue=wm.current,oe(wm)}function Sm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Am(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var I=0;I<r.length;I++)if(w.context===r[I]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),Sm(m.return,o,i),u||(E=null);break e}m=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Sm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function ru(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=f.type;Hn(f.pendingProps.value,E.value)||(i!==null?i.push(w):i=[w])}}else if(f===kt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(ku):i=[ku])}f=f.return}i!==null&&Am(r,i,o,u),r.flags|=262144}function yh(i){for(i=i.firstContext;i!==null;){if(!Hn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ba(i){Ta=i,ws=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function vn(i){return xv(Ta,i)}function vh(i,r){return Ta===null&&ba(i),xv(i,r)}function xv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ws===null){if(i===null)throw Error(s(308));ws=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else ws=ws.next=r;return o}var BC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},qC=n.unstable_scheduleCallback,FC=n.unstable_NormalPriority,Kt={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cm(){return{controller:new BC,data:new Map,refCount:0}}function au(i){i.refCount--,i.refCount===0&&qC(FC,function(){i.controller.abort()})}var ou=null,Rm=0,Ao=0,Co=null;function HC(i,r){if(ou===null){var o=ou=[];Rm=0,Ao=Np(),Co={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Rm++,r.then(Dv,Dv),r}function Dv(){if(--Rm===0&&ou!==null){Co!==null&&(Co.status="fulfilled");var i=ou;ou=null,Ao=0,Co=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function GC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Ov=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&HC(i,r),Ov!==null&&Ov(i,r)};var wa=X(null);function Im(){var i=wa.current;return i!==null?i:ft.pooledCache}function Eh(i,r){r===null?te(wa,wa.current):te(wa,r.pool)}function Mv(){var i=Im();return i===null?null:{parent:Kt._currentValue,pool:i}}var lu=Error(s(460)),kv=Error(s(474)),Th=Error(s(542)),Nm={then:function(){}};function Pv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function bh(){}function Vv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(bh,bh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Uv(i),i;default:if(typeof r.status=="string")r.then(bh,bh);else{if(i=ft,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Uv(i),i}throw uu=r,lu}}var uu=null;function Lv(){if(uu===null)throw Error(s(459));var i=uu;return uu=null,i}function Uv(i){if(i===lu||i===Th)throw Error(s(483))}var sr=!1;function xm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function rr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function ar(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(tt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=mh(i),Sv(i,null,o),r}return dh(i,u,r,o),mh(i)}function cu(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ul(i,o)}}function Om(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Mm=!1;function hu(){if(Mm){var i=Co;if(i!==null)throw i}}function fu(i,r,o,u){Mm=!1;var f=i.updateQueue;sr=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var I=w,B=I.next;I.next=null,E===null?m=B:E.next=B,E=I;var K=i.alternate;K!==null&&(K=K.updateQueue,w=K.lastBaseUpdate,w!==E&&(w===null?K.firstBaseUpdate=B:w.next=B,K.lastBaseUpdate=I))}if(m!==null){var Z=f.baseState;E=0,K=B=I=null,w=m;do{var q=w.lane&-536870913,H=q!==w.lane;if(H?(Ke&q)===q:(u&q)===q){q!==0&&q===Ao&&(Mm=!0),K!==null&&(K=K.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var we=i,ve=w;q=r;var lt=o;switch(ve.tag){case 1:if(we=ve.payload,typeof we=="function"){Z=we.call(lt,Z,q);break e}Z=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=ve.payload,q=typeof we=="function"?we.call(lt,Z,q):we,q==null)break e;Z=y({},Z,q);break e;case 2:sr=!0}}q=w.callback,q!==null&&(i.flags|=64,H&&(i.flags|=8192),H=f.callbacks,H===null?f.callbacks=[q]:H.push(q))}else H={lane:q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},K===null?(B=K=H,I=Z):K=K.next=H,E|=q;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;H=w,w=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);K===null&&(I=Z),f.baseState=I,f.firstBaseUpdate=B,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),mr|=E,i.lanes=E,i.memoizedState=Z}}function jv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function zv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)jv(o[i],r)}var Ro=X(null),wh=X(0);function Bv(i,r){i=Ds,te(wh,i),te(Ro,r),Ds=i|r.baseLanes}function km(){te(wh,Ds),te(Ro,Ro.current)}function Pm(){Ds=wh.current,oe(Ro),oe(wh)}var or=0,ke=null,at=null,Lt=null,Sh=!1,Io=!1,Sa=!1,Ah=0,du=0,No=null,QC=0;function xt(){throw Error(s(321))}function Vm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Hn(i[o],r[o]))return!1;return!0}function Lm(i,r,o,u,f,m){return or=m,ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?S0:A0,Sa=!1,m=o(u,f),Sa=!1,Io&&(m=Fv(r,o,u,f)),qv(i),m}function qv(i){Y.H=Dh;var r=at!==null&&at.next!==null;if(or=0,Lt=at=ke=null,Sh=!1,du=0,No=null,r)throw Error(s(300));i===null||tn||(i=i.dependencies,i!==null&&yh(i)&&(tn=!0))}function Fv(i,r,o,u){ke=i;var f=0;do{if(Io&&(No=null),du=0,Io=!1,25<=f)throw Error(s(301));if(f+=1,Lt=at=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=JC,m=r(o,u)}while(Io);return m}function YC(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?mu(r):r,i=i.useState()[0],(at!==null?at.memoizedState:null)!==i&&(ke.flags|=1024),r}function Um(){var i=Ah!==0;return Ah=0,i}function jm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function zm(i){if(Sh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sh=!1}or=0,Lt=at=ke=null,Io=!1,du=Ah=0,No=null}function Pn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ke.memoizedState=Lt=i:Lt=Lt.next=i,Lt}function Ut(){if(at===null){var i=ke.alternate;i=i!==null?i.memoizedState:null}else i=at.next;var r=Lt===null?ke.memoizedState:Lt.next;if(r!==null)Lt=r,at=i;else{if(i===null)throw ke.alternate===null?Error(s(467)):Error(s(310));at=i,i={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Lt===null?ke.memoizedState=Lt=i:Lt=Lt.next=i}return Lt}function Bm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mu(i){var r=du;return du+=1,No===null&&(No=[]),i=Vv(No,i,r),r=ke,(Lt===null?r.memoizedState:Lt.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?S0:A0),i}function Ch(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return mu(i);if(i.$$typeof===le)return vn(i)}throw Error(s(438,String(i)))}function qm(i){var r=null,o=ke.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=ke.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Bm(),ke.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=M;return r.index++,o}function As(i,r){return typeof r=="function"?r(i):r}function Rh(i){var r=Ut();return Fm(r,at,i)}function Fm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var w=E=null,I=null,B=r,K=!1;do{var Z=B.lane&-536870913;if(Z!==B.lane?(Ke&Z)===Z:(or&Z)===Z){var q=B.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Z===Ao&&(K=!0);else if((or&q)===q){B=B.next,q===Ao&&(K=!0);continue}else Z={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(w=I=Z,E=m):I=I.next=Z,ke.lanes|=q,mr|=q;Z=B.action,Sa&&o(m,Z),m=B.hasEagerState?B.eagerState:o(m,Z)}else q={lane:Z,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(w=I=q,E=m):I=I.next=q,ke.lanes|=Z,mr|=Z;B=B.next}while(B!==null&&B!==r);if(I===null?E=m:I.next=w,!Hn(m,i.memoizedState)&&(tn=!0,K&&(o=Co,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=I,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Hm(i){var r=Ut(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Hn(m,r.memoizedState)||(tn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Hv(i,r,o){var u=ke,f=Ut(),m=We;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Hn((at||f).memoizedState,o);E&&(f.memoizedState=o,tn=!0),f=f.queue;var w=Yv.bind(null,u,f,i);if(pu(2048,8,w,[i]),f.getSnapshot!==r||E||Lt!==null&&Lt.memoizedState.tag&1){if(u.flags|=2048,xo(9,Ih(),Qv.bind(null,u,f,o,r),null),ft===null)throw Error(s(349));m||(or&124)!==0||Gv(u,r,o)}return o}function Gv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=ke.updateQueue,r===null?(r=Bm(),ke.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Qv(i,r,o,u){r.value=o,r.getSnapshot=u,Kv(r)&&$v(i)}function Yv(i,r,o){return o(function(){Kv(r)&&$v(i)})}function Kv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Hn(i,o)}catch{return!0}}function $v(i){var r=To(i,2);r!==null&&Xn(r,i,2)}function Gm(i){var r=Pn();if(typeof i=="function"){var o=i;if(i=o(),Sa){gt(!0);try{o()}finally{gt(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:i},r}function Xv(i,r,o,u){return i.baseState=o,Fm(i,at,typeof u=="function"?u:As)}function KC(i,r,o,u,f){if(xh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Wv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Wv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Y.T,E={};Y.T=E;try{var w=o(f,u),I=Y.S;I!==null&&I(E,w),Zv(i,r,w)}catch(B){Qm(i,r,B)}finally{Y.T=m}}else try{m=o(f,u),Zv(i,r,m)}catch(B){Qm(i,r,B)}}function Zv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Jv(i,r,u)},function(u){return Qm(i,r,u)}):Jv(i,r,o)}function Jv(i,r,o){r.status="fulfilled",r.value=o,e0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Wv(i,o)))}function Qm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,e0(r),r=r.next;while(r!==u)}i.action=null}function e0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function t0(i,r){return r}function n0(i,r){if(We){var o=ft.formState;if(o!==null){e:{var u=ke;if(We){if(At){t:{for(var f=At,m=zi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){At=Ei(f.nextSibling),u=f.data==="F!";break e}}Ea(u)}u=!1}u&&(r=o[0])}}return o=Pn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t0,lastRenderedState:r},o.queue=u,o=T0.bind(null,ke,u),u.dispatch=o,u=Gm(!1),m=Wm.bind(null,ke,!1,u.queue),u=Pn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=KC.bind(null,ke,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function i0(i){var r=Ut();return s0(r,at,i)}function s0(i,r,o){if(r=Fm(i,r,t0)[0],i=Rh(As)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=mu(r)}catch(E){throw E===lu?Th:E}else u=r;r=Ut();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(ke.flags|=2048,xo(9,Ih(),$C.bind(null,f,o),null)),[u,m,i]}function $C(i,r){i.action=r}function r0(i){var r=Ut(),o=at;if(o!==null)return s0(r,o,i);Ut(),r=r.memoizedState,o=Ut();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function xo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=ke.updateQueue,r===null&&(r=Bm(),ke.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Ih(){return{destroy:void 0,resource:void 0}}function a0(){return Ut().memoizedState}function Nh(i,r,o,u){var f=Pn();u=u===void 0?null:u,ke.flags|=i,f.memoizedState=xo(1|r,Ih(),o,u)}function pu(i,r,o,u){var f=Ut();u=u===void 0?null:u;var m=f.memoizedState.inst;at!==null&&u!==null&&Vm(u,at.memoizedState.deps)?f.memoizedState=xo(r,m,o,u):(ke.flags|=i,f.memoizedState=xo(1|r,m,o,u))}function o0(i,r){Nh(8390656,8,i,r)}function l0(i,r){pu(2048,8,i,r)}function u0(i,r){return pu(4,2,i,r)}function c0(i,r){return pu(4,4,i,r)}function h0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function f0(i,r,o){o=o!=null?o.concat([i]):null,pu(4,4,h0.bind(null,r,i),o)}function Ym(){}function d0(i,r){var o=Ut();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Vm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function m0(i,r){var o=Ut();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Vm(r,u[1]))return u[0];if(u=i(),Sa){gt(!0);try{i()}finally{gt(!1)}}return o.memoizedState=[u,r],u}function Km(i,r,o){return o===void 0||(or&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=_E(),ke.lanes|=i,mr|=i,o)}function p0(i,r,o,u){return Hn(o,r)?o:Ro.current!==null?(i=Km(i,o,u),Hn(i,r)||(tn=!0),i):(or&42)===0?(tn=!0,i.memoizedState=o):(i=_E(),ke.lanes|=i,mr|=i,r)}function g0(i,r,o,u,f){var m=J.p;J.p=m!==0&&8>m?m:8;var E=Y.T,w={};Y.T=w,Wm(i,!1,r,o);try{var I=f(),B=Y.S;if(B!==null&&B(w,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=GC(I,u);gu(i,r,K,$n(i))}else gu(i,r,u,$n(i))}catch(Z){gu(i,r,{then:function(){},status:"rejected",reason:Z},$n())}finally{J.p=m,Y.T=E}}function XC(){}function $m(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=_0(i).queue;g0(i,f,r,ce,o===null?XC:function(){return y0(i),o(u)})}function _0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:ce},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function y0(i){var r=_0(i).next.queue;gu(i,r,{},$n())}function Xm(){return vn(ku)}function v0(){return Ut().memoizedState}function E0(){return Ut().memoizedState}function WC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=$n();i=rr(o);var u=ar(r,i,o);u!==null&&(Xn(u,r,o),cu(u,r,o)),r={cache:Cm()},i.payload=r;return}r=r.return}}function ZC(i,r,o){var u=$n();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},xh(i)?b0(r,o):(o=gm(i,r,o,u),o!==null&&(Xn(o,i,u),w0(o,r,u)))}function T0(i,r,o){var u=$n();gu(i,r,o,u)}function gu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(xh(i))b0(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,w=m(E,o);if(f.hasEagerState=!0,f.eagerState=w,Hn(w,E))return dh(i,r,f,0),ft===null&&fh(),!1}catch{}finally{}if(o=gm(i,r,f,u),o!==null)return Xn(o,i,u),w0(o,r,u),!0}return!1}function Wm(i,r,o,u){if(u={lane:2,revertLane:Np(),action:u,hasEagerState:!1,eagerState:null,next:null},xh(i)){if(r)throw Error(s(479))}else r=gm(i,o,u,2),r!==null&&Xn(r,i,2)}function xh(i){var r=i.alternate;return i===ke||r!==null&&r===ke}function b0(i,r){Io=Sh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function w0(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ul(i,o)}}var Dh={readContext:vn,use:Ch,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt},S0={readContext:vn,use:Ch,useCallback:function(i,r){return Pn().memoizedState=[i,r===void 0?null:r],i},useContext:vn,useEffect:o0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Nh(4194308,4,h0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Nh(4194308,4,i,r)},useInsertionEffect:function(i,r){Nh(4,2,i,r)},useMemo:function(i,r){var o=Pn();r=r===void 0?null:r;var u=i();if(Sa){gt(!0);try{i()}finally{gt(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Pn();if(o!==void 0){var f=o(r);if(Sa){gt(!0);try{o(r)}finally{gt(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=ZC.bind(null,ke,i),[u.memoizedState,i]},useRef:function(i){var r=Pn();return i={current:i},r.memoizedState=i},useState:function(i){i=Gm(i);var r=i.queue,o=T0.bind(null,ke,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Ym,useDeferredValue:function(i,r){var o=Pn();return Km(o,i,r)},useTransition:function(){var i=Gm(!1);return i=g0.bind(null,ke,i.queue,!0,!1),Pn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=ke,f=Pn();if(We){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ft===null)throw Error(s(349));(Ke&124)!==0||Gv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,o0(Yv.bind(null,u,m,i),[i]),u.flags|=2048,xo(9,Ih(),Qv.bind(null,u,m,o,r),null),o},useId:function(){var i=Pn(),r=ft.identifierPrefix;if(We){var o=bs,u=Ts;o=(u&~(1<<32-Zt(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=Ah++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=QC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Xm,useFormState:n0,useActionState:n0,useOptimistic:function(i){var r=Pn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Wm.bind(null,ke,!0,o),o.dispatch=r,[i,r]},useMemoCache:qm,useCacheRefresh:function(){return Pn().memoizedState=WC.bind(null,ke)}},A0={readContext:vn,use:Ch,useCallback:d0,useContext:vn,useEffect:l0,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:m0,useReducer:Rh,useRef:a0,useState:function(){return Rh(As)},useDebugValue:Ym,useDeferredValue:function(i,r){var o=Ut();return p0(o,at.memoizedState,i,r)},useTransition:function(){var i=Rh(As)[0],r=Ut().memoizedState;return[typeof i=="boolean"?i:mu(i),r]},useSyncExternalStore:Hv,useId:v0,useHostTransitionStatus:Xm,useFormState:i0,useActionState:i0,useOptimistic:function(i,r){var o=Ut();return Xv(o,at,i,r)},useMemoCache:qm,useCacheRefresh:E0},JC={readContext:vn,use:Ch,useCallback:d0,useContext:vn,useEffect:l0,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:m0,useReducer:Hm,useRef:a0,useState:function(){return Hm(As)},useDebugValue:Ym,useDeferredValue:function(i,r){var o=Ut();return at===null?Km(o,i,r):p0(o,at.memoizedState,i,r)},useTransition:function(){var i=Hm(As)[0],r=Ut().memoizedState;return[typeof i=="boolean"?i:mu(i),r]},useSyncExternalStore:Hv,useId:v0,useHostTransitionStatus:Xm,useFormState:r0,useActionState:r0,useOptimistic:function(i,r){var o=Ut();return at!==null?Xv(o,at,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:qm,useCacheRefresh:E0},Do=null,_u=0;function Oh(i){var r=_u;return _u+=1,Do===null&&(Do=[]),Vv(Do,i,r)}function yu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Mh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function C0(i){var r=i._init;return r(i._payload)}function R0(i){function r(V,O){if(i){var z=V.deletions;z===null?(V.deletions=[O],V.flags|=16):z.push(O)}}function o(V,O){if(!i)return null;for(;O!==null;)r(V,O),O=O.sibling;return null}function u(V){for(var O=new Map;V!==null;)V.key!==null?O.set(V.key,V):O.set(V.index,V),V=V.sibling;return O}function f(V,O){return V=Es(V,O),V.index=0,V.sibling=null,V}function m(V,O,z){return V.index=z,i?(z=V.alternate,z!==null?(z=z.index,z<O?(V.flags|=67108866,O):z):(V.flags|=67108866,O)):(V.flags|=1048576,O)}function E(V){return i&&V.alternate===null&&(V.flags|=67108866),V}function w(V,O,z,W){return O===null||O.tag!==6?(O=ym(z,V.mode,W),O.return=V,O):(O=f(O,z),O.return=V,O)}function I(V,O,z,W){var fe=z.type;return fe===U?K(V,O,z.props.children,W,z.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===C&&C0(fe)===O.type)?(O=f(O,z.props),yu(O,z),O.return=V,O):(O=ph(z.type,z.key,z.props,null,V.mode,W),yu(O,z),O.return=V,O)}function B(V,O,z,W){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=vm(z,V.mode,W),O.return=V,O):(O=f(O,z.children||[]),O.return=V,O)}function K(V,O,z,W,fe){return O===null||O.tag!==7?(O=ga(z,V.mode,W,fe),O.return=V,O):(O=f(O,z),O.return=V,O)}function Z(V,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=ym(""+O,V.mode,z),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case b:return z=ph(O.type,O.key,O.props,null,V.mode,z),yu(z,O),z.return=V,z;case x:return O=vm(O,V.mode,z),O.return=V,O;case C:var W=O._init;return O=W(O._payload),Z(V,O,z)}if(pt(O)||L(O))return O=ga(O,V.mode,z,null),O.return=V,O;if(typeof O.then=="function")return Z(V,Oh(O),z);if(O.$$typeof===le)return Z(V,vh(V,O),z);Mh(V,O)}return null}function q(V,O,z,W){var fe=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:w(V,O,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case b:return z.key===fe?I(V,O,z,W):null;case x:return z.key===fe?B(V,O,z,W):null;case C:return fe=z._init,z=fe(z._payload),q(V,O,z,W)}if(pt(z)||L(z))return fe!==null?null:K(V,O,z,W,null);if(typeof z.then=="function")return q(V,O,Oh(z),W);if(z.$$typeof===le)return q(V,O,vh(V,z),W);Mh(V,z)}return null}function H(V,O,z,W,fe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return V=V.get(z)||null,w(O,V,""+W,fe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return V=V.get(W.key===null?z:W.key)||null,I(O,V,W,fe);case x:return V=V.get(W.key===null?z:W.key)||null,B(O,V,W,fe);case C:var Ve=W._init;return W=Ve(W._payload),H(V,O,z,W,fe)}if(pt(W)||L(W))return V=V.get(z)||null,K(O,V,W,fe,null);if(typeof W.then=="function")return H(V,O,z,Oh(W),fe);if(W.$$typeof===le)return H(V,O,z,vh(O,W),fe);Mh(O,W)}return null}function we(V,O,z,W){for(var fe=null,Ve=null,pe=O,Ee=O=0,sn=null;pe!==null&&Ee<z.length;Ee++){pe.index>Ee?(sn=pe,pe=null):sn=pe.sibling;var Xe=q(V,pe,z[Ee],W);if(Xe===null){pe===null&&(pe=sn);break}i&&pe&&Xe.alternate===null&&r(V,pe),O=m(Xe,O,Ee),Ve===null?fe=Xe:Ve.sibling=Xe,Ve=Xe,pe=sn}if(Ee===z.length)return o(V,pe),We&&ya(V,Ee),fe;if(pe===null){for(;Ee<z.length;Ee++)pe=Z(V,z[Ee],W),pe!==null&&(O=m(pe,O,Ee),Ve===null?fe=pe:Ve.sibling=pe,Ve=pe);return We&&ya(V,Ee),fe}for(pe=u(pe);Ee<z.length;Ee++)sn=H(pe,V,Ee,z[Ee],W),sn!==null&&(i&&sn.alternate!==null&&pe.delete(sn.key===null?Ee:sn.key),O=m(sn,O,Ee),Ve===null?fe=sn:Ve.sibling=sn,Ve=sn);return i&&pe.forEach(function(wr){return r(V,wr)}),We&&ya(V,Ee),fe}function ve(V,O,z,W){if(z==null)throw Error(s(151));for(var fe=null,Ve=null,pe=O,Ee=O=0,sn=null,Xe=z.next();pe!==null&&!Xe.done;Ee++,Xe=z.next()){pe.index>Ee?(sn=pe,pe=null):sn=pe.sibling;var wr=q(V,pe,Xe.value,W);if(wr===null){pe===null&&(pe=sn);break}i&&pe&&wr.alternate===null&&r(V,pe),O=m(wr,O,Ee),Ve===null?fe=wr:Ve.sibling=wr,Ve=wr,pe=sn}if(Xe.done)return o(V,pe),We&&ya(V,Ee),fe;if(pe===null){for(;!Xe.done;Ee++,Xe=z.next())Xe=Z(V,Xe.value,W),Xe!==null&&(O=m(Xe,O,Ee),Ve===null?fe=Xe:Ve.sibling=Xe,Ve=Xe);return We&&ya(V,Ee),fe}for(pe=u(pe);!Xe.done;Ee++,Xe=z.next())Xe=H(pe,V,Ee,Xe.value,W),Xe!==null&&(i&&Xe.alternate!==null&&pe.delete(Xe.key===null?Ee:Xe.key),O=m(Xe,O,Ee),Ve===null?fe=Xe:Ve.sibling=Xe,Ve=Xe);return i&&pe.forEach(function(eI){return r(V,eI)}),We&&ya(V,Ee),fe}function lt(V,O,z,W){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case b:e:{for(var fe=z.key;O!==null;){if(O.key===fe){if(fe=z.type,fe===U){if(O.tag===7){o(V,O.sibling),W=f(O,z.props.children),W.return=V,V=W;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===C&&C0(fe)===O.type){o(V,O.sibling),W=f(O,z.props),yu(W,z),W.return=V,V=W;break e}o(V,O);break}else r(V,O);O=O.sibling}z.type===U?(W=ga(z.props.children,V.mode,W,z.key),W.return=V,V=W):(W=ph(z.type,z.key,z.props,null,V.mode,W),yu(W,z),W.return=V,V=W)}return E(V);case x:e:{for(fe=z.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){o(V,O.sibling),W=f(O,z.children||[]),W.return=V,V=W;break e}else{o(V,O);break}else r(V,O);O=O.sibling}W=vm(z,V.mode,W),W.return=V,V=W}return E(V);case C:return fe=z._init,z=fe(z._payload),lt(V,O,z,W)}if(pt(z))return we(V,O,z,W);if(L(z)){if(fe=L(z),typeof fe!="function")throw Error(s(150));return z=fe.call(z),ve(V,O,z,W)}if(typeof z.then=="function")return lt(V,O,Oh(z),W);if(z.$$typeof===le)return lt(V,O,vh(V,z),W);Mh(V,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(o(V,O.sibling),W=f(O,z),W.return=V,V=W):(o(V,O),W=ym(z,V.mode,W),W.return=V,V=W),E(V)):o(V,O)}return function(V,O,z,W){try{_u=0;var fe=lt(V,O,z,W);return Do=null,fe}catch(pe){if(pe===lu||pe===Th)throw pe;var Ve=Gn(29,pe,null,V.mode);return Ve.lanes=W,Ve.return=V,Ve}finally{}}}var Oo=R0(!0),I0=R0(!1),ui=X(null),Bi=null;function lr(i){var r=i.alternate;te($t,$t.current&1),te(ui,i),Bi===null&&(r===null||Ro.current!==null||r.memoizedState!==null)&&(Bi=i)}function N0(i){if(i.tag===22){if(te($t,$t.current),te(ui,i),Bi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Bi=i)}}else ur()}function ur(){te($t,$t.current),te(ui,ui.current)}function Cs(i){oe(ui),Bi===i&&(Bi=null),oe($t)}var $t=X(0);function kh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Bp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Zm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Jm={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=$n(),f=rr(u);f.payload=r,o!=null&&(f.callback=o),r=ar(i,f,u),r!==null&&(Xn(r,i,u),cu(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=$n(),f=rr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=ar(i,f,u),r!==null&&(Xn(r,i,u),cu(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=$n(),u=rr(o);u.tag=2,r!=null&&(u.callback=r),r=ar(i,u,o),r!==null&&(Xn(r,i,o),cu(r,i,o))}};function x0(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!eu(o,u)||!eu(f,m):!0}function D0(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Jm.enqueueReplaceState(r,r.state,null)}function Aa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Ph=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function O0(i){Ph(i)}function M0(i){console.error(i)}function k0(i){Ph(i)}function Vh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function P0(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ep(i,r,o){return o=rr(o),o.tag=3,o.payload={element:null},o.callback=function(){Vh(i,r)},o}function V0(i){return i=rr(i),i.tag=3,i}function L0(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){P0(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){P0(r,o,u),typeof f!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function eR(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&ru(r,o,f,!0),o=ui.current,o!==null){switch(o.tag){case 13:return Bi===null?Sp():o.alternate===null&&Ct===0&&(Ct=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Nm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Cp(i,u,f)),!1;case 22:return o.flags|=65536,u===Nm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Cp(i,u,f)),!1}throw Error(s(435,o.tag))}return Cp(i,u,f),Sp(),!1}if(We)return r=ui.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==bm&&(i=Error(s(422),{cause:u}),su(ri(i,o)))):(u!==bm&&(r=Error(s(423),{cause:u}),su(ri(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=ri(u,o),f=ep(i.stateNode,u,f),Om(i,f),Ct!==4&&(Ct=2)),!1;var m=Error(s(520),{cause:u});if(m=ri(m,o),Au===null?Au=[m]:Au.push(m),Ct!==4&&(Ct=2),r===null)return!0;u=ri(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=ep(o.stateNode,u,i),Om(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pr===null||!pr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=V0(f),L0(f,i,o,u),Om(o,f),!1}o=o.return}while(o!==null);return!1}var U0=Error(s(461)),tn=!1;function dn(i,r,o,u){r.child=i===null?I0(r,null,o,u):Oo(r,i.child,o,u)}function j0(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return ba(r),u=Lm(i,r,o,E,m,f),w=Um(),i!==null&&!tn?(jm(i,r,f),Rs(i,r,f)):(We&&w&&Em(r),r.flags|=1,dn(i,r,u,f),r.child)}function z0(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!_m(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,B0(i,r,m,u,f)):(i=ph(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!lp(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:eu,o(E,u)&&i.ref===r.ref)return Rs(i,r,f)}return r.flags|=1,i=Es(m,u),i.ref=r.ref,i.return=r,r.child=i}function B0(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(eu(m,u)&&i.ref===r.ref)if(tn=!1,r.pendingProps=u=m,lp(i,f))(i.flags&131072)!==0&&(tn=!0);else return r.lanes=i.lanes,Rs(i,r,f)}return tp(i,r,o,u,f)}function q0(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return F0(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Eh(r,m!==null?m.cachePool:null),m!==null?Bv(r,m):km(),N0(r);else return r.lanes=r.childLanes=536870912,F0(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(Eh(r,m.cachePool),Bv(r,m),ur(),r.memoizedState=null):(i!==null&&Eh(r,null),km(),ur());return dn(i,r,f,o),r.child}function F0(i,r,o,u){var f=Im();return f=f===null?null:{parent:Kt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&Eh(r,null),km(),N0(r),i!==null&&ru(i,r,u,!0),null}function Lh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function tp(i,r,o,u,f){return ba(r),o=Lm(i,r,o,u,void 0,f),u=Um(),i!==null&&!tn?(jm(i,r,f),Rs(i,r,f)):(We&&u&&Em(r),r.flags|=1,dn(i,r,o,f),r.child)}function H0(i,r,o,u,f,m){return ba(r),r.updateQueue=null,o=Fv(r,u,o,f),qv(i),u=Um(),i!==null&&!tn?(jm(i,r,m),Rs(i,r,m)):(We&&u&&Em(r),r.flags|=1,dn(i,r,o,m),r.child)}function G0(i,r,o,u,f){if(ba(r),r.stateNode===null){var m=bo,E=o.contextType;typeof E=="object"&&E!==null&&(m=vn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Jm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},xm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?vn(E):bo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Zm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Jm.enqueueReplaceState(m,m.state,null),fu(r,u,m,f),hu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var w=r.memoizedProps,I=Aa(o,w);m.props=I;var B=m.context,K=o.contextType;E=bo,typeof K=="object"&&K!==null&&(E=vn(K));var Z=o.getDerivedStateFromProps;K=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||B!==E)&&D0(r,m,u,E),sr=!1;var q=r.memoizedState;m.state=q,fu(r,u,m,f),hu(),B=r.memoizedState,w||q!==B||sr?(typeof Z=="function"&&(Zm(r,o,Z,u),B=r.memoizedState),(I=sr||x0(r,o,I,u,q,B,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),m.props=u,m.state=B,m.context=E,u=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Dm(i,r),E=r.memoizedProps,K=Aa(o,E),m.props=K,Z=r.pendingProps,q=m.context,B=o.contextType,I=bo,typeof B=="object"&&B!==null&&(I=vn(B)),w=o.getDerivedStateFromProps,(B=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||q!==I)&&D0(r,m,u,I),sr=!1,q=r.memoizedState,m.state=q,fu(r,u,m,f),hu();var H=r.memoizedState;E!==Z||q!==H||sr||i!==null&&i.dependencies!==null&&yh(i.dependencies)?(typeof w=="function"&&(Zm(r,o,w,u),H=r.memoizedState),(K=sr||x0(r,o,K,u,q,H,I)||i!==null&&i.dependencies!==null&&yh(i.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,H,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,H,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=H),m.props=u,m.state=H,m.context=I,u=K):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Lh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Oo(r,i.child,null,f),r.child=Oo(r,null,o,f)):dn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=Rs(i,r,f),i}function Q0(i,r,o,u){return iu(),r.flags|=256,dn(i,r,o,u),r.child}var np={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ip(i){return{baseLanes:i,cachePool:Mv()}}function sp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ci),i}function Y0(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:($t.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(We){if(f?lr(r):ur(),We){var w=At,I;if(I=w){e:{for(I=w,w=zi;I.nodeType!==8;){if(!w){w=null;break e}if(I=Ei(I.nextSibling),I===null){w=null;break e}}w=I}w!==null?(r.memoizedState={dehydrated:w,treeContext:_a!==null?{id:Ts,overflow:bs}:null,retryLane:536870912,hydrationErrors:null},I=Gn(18,null,null,0),I.stateNode=w,I.return=r,r.child=I,xn=r,At=null,I=!0):I=!1}I||Ea(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Bp(w)?r.lanes=32:r.lanes=536870912,null;Cs(r)}return w=u.children,u=u.fallback,f?(ur(),f=r.mode,w=Uh({mode:"hidden",children:w},f),u=ga(u,f,o,null),w.return=r,u.return=r,w.sibling=u,r.child=w,f=r.child,f.memoizedState=ip(o),f.childLanes=sp(i,E,o),r.memoizedState=np,u):(lr(r),rp(r,w))}if(I=i.memoizedState,I!==null&&(w=I.dehydrated,w!==null)){if(m)r.flags&256?(lr(r),r.flags&=-257,r=ap(i,r,o)):r.memoizedState!==null?(ur(),r.child=i.child,r.flags|=128,r=null):(ur(),f=u.fallback,w=r.mode,u=Uh({mode:"visible",children:u.children},w),f=ga(f,w,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Oo(r,i.child,null,o),u=r.child,u.memoizedState=ip(o),u.childLanes=sp(i,E,o),r.memoizedState=np,r=f);else if(lr(r),Bp(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var B=E.dgst;E=B,u=Error(s(419)),u.stack="",u.digest=E,su({value:u,source:null,stack:null}),r=ap(i,r,o)}else if(tn||ru(i,r,o,!1),E=(o&i.childLanes)!==0,tn||E){if(E=ft,E!==null&&(u=o&-o,u=(u&42)!==0?1:Xs(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,To(i,u),Xn(E,i,u),U0;w.data==="$?"||Sp(),r=ap(i,r,o)}else w.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=I.treeContext,At=Ei(w.nextSibling),xn=r,We=!0,va=null,zi=!1,i!==null&&(oi[li++]=Ts,oi[li++]=bs,oi[li++]=_a,Ts=i.id,bs=i.overflow,_a=r),r=rp(r,u.children),r.flags|=4096);return r}return f?(ur(),f=u.fallback,w=r.mode,I=i.child,B=I.sibling,u=Es(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,B!==null?f=Es(B,f):(f=ga(f,w,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,w=i.child.memoizedState,w===null?w=ip(o):(I=w.cachePool,I!==null?(B=Kt._currentValue,I=I.parent!==B?{parent:B,pool:B}:I):I=Mv(),w={baseLanes:w.baseLanes|o,cachePool:I}),f.memoizedState=w,f.childLanes=sp(i,E,o),r.memoizedState=np,u):(lr(r),o=i.child,i=o.sibling,o=Es(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function rp(i,r){return r=Uh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Uh(i,r){return i=Gn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function ap(i,r,o){return Oo(r,i.child,null,o),i=rp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function K0(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Sm(i.return,r,o)}function op(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function $0(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(dn(i,r,u.children,o),u=$t.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&K0(i,o,r);else if(i.tag===19)K0(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(te($t,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&kh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),op(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&kh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}op(r,!0,o,null,m);break;case"together":op(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Rs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),mr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(ru(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Es(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Es(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function lp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&yh(i)))}function tR(i,r,o){switch(r.tag){case 3:st(r,r.stateNode.containerInfo),ir(r,Kt,i.memoizedState.cache),iu();break;case 27:case 5:Ri(r);break;case 4:st(r,r.stateNode.containerInfo);break;case 10:ir(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(lr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Y0(i,r,o):(lr(r),i=Rs(i,r,o),i!==null?i.sibling:null);lr(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(ru(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return $0(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),te($t,$t.current),u)break;return null;case 22:case 23:return r.lanes=0,q0(i,r,o);case 24:ir(r,Kt,i.memoizedState.cache)}return Rs(i,r,o)}function X0(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)tn=!0;else{if(!lp(i,o)&&(r.flags&128)===0)return tn=!1,tR(i,r,o);tn=(i.flags&131072)!==0}else tn=!1,We&&(r.flags&1048576)!==0&&Cv(r,_h,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")_m(u)?(i=Aa(u,i),r.tag=1,r=G0(null,r,u,i,o)):(r.tag=0,r=tp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===_e){r.tag=11,r=j0(null,r,u,i,o);break e}else if(f===P){r.tag=14,r=z0(null,r,u,i,o);break e}}throw r=Ht(u)||u,Error(s(306,r,""))}}return r;case 0:return tp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=Aa(u,r.pendingProps),G0(i,r,u,f,o);case 3:e:{if(st(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Dm(i,r),fu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,ir(r,Kt,u),u!==m.cache&&Am(r,[Kt],o,!0),hu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=Q0(i,r,u,o);break e}else if(u!==f){f=ri(Error(s(424)),r),su(f),r=Q0(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(At=Ei(i.firstChild),xn=r,We=!0,va=null,zi=!0,o=I0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(iu(),u===f){r=Rs(i,r,o);break e}dn(i,r,u,o)}r=r.child}return r;case 26:return Lh(i,r),i===null?(o=eT(r.type,null,r.pendingProps,null))?r.memoizedState=o:We||(o=r.type,i=r.pendingProps,u=Zh(be.current).createElement(o),u[Gt]=r,u[Pt]=i,pn(u,o,i),Nt(u),r.stateNode=u):r.memoizedState=eT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ri(r),i===null&&We&&(u=r.stateNode=WE(r.type,r.pendingProps,be.current),xn=r,zi=!0,f=At,yr(r.type)?(qp=f,At=Ei(u.firstChild)):At=f),dn(i,r,r.pendingProps.children,o),Lh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&We&&((f=u=At)&&(u=NR(u,r.type,r.pendingProps,zi),u!==null?(r.stateNode=u,xn=r,At=Ei(u.firstChild),zi=!1,f=!0):f=!1),f||Ea(r)),Ri(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Up(f,m)?u=null:E!==null&&Up(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Lm(i,r,YC,null,null,o),ku._currentValue=f),Lh(i,r),dn(i,r,u,o),r.child;case 6:return i===null&&We&&((i=o=At)&&(o=xR(o,r.pendingProps,zi),o!==null?(r.stateNode=o,xn=r,At=null,i=!0):i=!1),i||Ea(r)),null;case 13:return Y0(i,r,o);case 4:return st(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Oo(r,null,u,o):dn(i,r,u,o),r.child;case 11:return j0(i,r,r.type,r.pendingProps,o);case 7:return dn(i,r,r.pendingProps,o),r.child;case 8:return dn(i,r,r.pendingProps.children,o),r.child;case 12:return dn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,ir(r,r.type,u.value),dn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ba(r),f=vn(f),u=u(f),r.flags|=1,dn(i,r,u,o),r.child;case 14:return z0(i,r,r.type,r.pendingProps,o);case 15:return B0(i,r,r.type,r.pendingProps,o);case 19:return $0(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Uh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=Es(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return q0(i,r,o);case 24:return ba(r),u=vn(Kt),i===null?(f=Im(),f===null&&(f=ft,m=Cm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},xm(r),ir(r,Kt,f)):((i.lanes&o)!==0&&(Dm(i,r),fu(r,null,null,o),hu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),ir(r,Kt,u)):(u=m.cache,ir(r,Kt,u),u!==f.cache&&Am(r,[Kt],o,!0))),dn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Is(i){i.flags|=4}function W0(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!rT(r)){if(r=ui.current,r!==null&&((Ke&4194048)===Ke?Bi!==null:(Ke&62914560)!==Ke&&(Ke&536870912)===0||r!==Bi))throw uu=Nm,kv;i.flags|=8192}}function jh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Vl():536870912,i.lanes|=r,Vo|=r)}function vu(i,r){if(!We)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function wt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function nR(i,r,o){var u=r.pendingProps;switch(Tm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(r),null;case 1:return wt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ss(Kt),Jn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(nu(r)?Is(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nv())),wt(r),null;case 26:return o=r.memoizedState,i===null?(Is(r),o!==null?(wt(r),W0(r,o)):(wt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Is(r),wt(r),W0(r,o)):(wt(r),r.flags&=-16777217):(i.memoizedProps!==u&&Is(r),wt(r),r.flags&=-16777217),null;case 27:mi(r),o=be.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Is(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return wt(r),null}i=ge.current,nu(r)?Rv(r):(i=WE(f,u,o),r.stateNode=i,Is(r))}return wt(r),null;case 5:if(mi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Is(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return wt(r),null}if(i=ge.current,nu(r))Rv(r);else{switch(f=Zh(be.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Gt]=r,i[Pt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(pn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Is(r)}}return wt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Is(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=be.current,nu(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=xn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Gt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||HE(i.nodeValue,o)),i||Ea(r)}else i=Zh(i).createTextNode(u),i[Gt]=r,r.stateNode=i}return wt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=nu(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Gt]=r}else iu(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;wt(r),f=!1}else f=Nv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Cs(r),r):(Cs(r),null)}if(Cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),jh(r,r.updateQueue),wt(r),null;case 4:return Jn(),i===null&&Mp(r.stateNode.containerInfo),wt(r),null;case 10:return Ss(r.type),wt(r),null;case 19:if(oe($t),f=r.memoizedState,f===null)return wt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)vu(f,!1);else{if(Ct!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=kh(i),m!==null){for(r.flags|=128,vu(f,!1),i=m.updateQueue,r.updateQueue=i,jh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Av(o,i),o=o.sibling;return te($t,$t.current&1|2),r.child}i=i.sibling}f.tail!==null&&kn()>qh&&(r.flags|=128,u=!0,vu(f,!1),r.lanes=4194304)}else{if(!u)if(i=kh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,jh(r,i),vu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!We)return wt(r),null}else 2*kn()-f.renderingStartTime>qh&&o!==536870912&&(r.flags|=128,u=!0,vu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=kn(),r.sibling=null,i=$t.current,te($t,u?i&1|2:i&1),r):(wt(r),null);case 22:case 23:return Cs(r),Pm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(wt(r),r.subtreeFlags&6&&(r.flags|=8192)):wt(r),o=r.updateQueue,o!==null&&jh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&oe(wa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ss(Kt),wt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function iR(i,r){switch(Tm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Ss(Kt),Jn(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return mi(r),null;case 13:if(Cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));iu()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return oe($t),null;case 4:return Jn(),null;case 10:return Ss(r.type),null;case 22:case 23:return Cs(r),Pm(),i!==null&&oe(wa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Ss(Kt),null;case 25:return null;default:return null}}function Z0(i,r){switch(Tm(r),r.tag){case 3:Ss(Kt),Jn();break;case 26:case 27:case 5:mi(r);break;case 4:Jn();break;case 13:Cs(r);break;case 19:oe($t);break;case 10:Ss(r.type);break;case 22:case 23:Cs(r),Pm(),i!==null&&oe(wa);break;case 24:Ss(Kt)}}function Eu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(w){ut(r,r.return,w)}}function cr(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=r;var I=o,B=w;try{B()}catch(K){ut(f,I,K)}}}u=u.next}while(u!==m)}}catch(K){ut(r,r.return,K)}}function J0(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{zv(r,o)}catch(u){ut(i,i.return,u)}}}function eE(i,r,o){o.props=Aa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ut(i,r,u)}}function Tu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){ut(i,r,f)}}function qi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ut(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ut(i,r,f)}else o.current=null}function tE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ut(i,i.return,f)}}function up(i,r,o){try{var u=i.stateNode;SR(u,i.type,o,r),u[Pt]=r}catch(f){ut(i,i.return,f)}}function nE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&yr(i.type)||i.tag===4}function cp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||nE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&yr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function hp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Wh));else if(u!==4&&(u===27&&yr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(hp(i,r,o),i=i.sibling;i!==null;)hp(i,r,o),i=i.sibling}function zh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&yr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(zh(i,r,o),i=i.sibling;i!==null;)zh(i,r,o),i=i.sibling}function iE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);pn(r,u,o),r[Gt]=i,r[Pt]=o}catch(m){ut(i,i.return,m)}}var Ns=!1,Dt=!1,fp=!1,sE=typeof WeakSet=="function"?WeakSet:Set,nn=null;function sR(i,r){if(i=i.containerInfo,Vp=rf,i=pv(i),cm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,w=-1,I=-1,B=0,K=0,Z=i,q=null;t:for(;;){for(var H;Z!==o||f!==0&&Z.nodeType!==3||(w=E+f),Z!==m||u!==0&&Z.nodeType!==3||(I=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(H=Z.firstChild)!==null;)q=Z,Z=H;for(;;){if(Z===i)break t;if(q===o&&++B===f&&(w=E),q===m&&++K===u&&(I=E),(H=Z.nextSibling)!==null)break;Z=q,q=Z.parentNode}Z=H}o=w===-1||I===-1?null:{start:w,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(Lp={focusedElem:i,selectionRange:o},rf=!1,nn=r;nn!==null;)if(r=nn,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,nn=i;else for(;nn!==null;){switch(r=nn,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var we=Aa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(we,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ve){ut(o,o.return,ve)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)zp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":zp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,nn=i;break}nn=r.return}}function rE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:hr(i,o),u&4&&Eu(5,o);break;case 1:if(hr(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){ut(o,o.return,E)}else{var f=Aa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){ut(o,o.return,E)}}u&64&&J0(o),u&512&&Tu(o,o.return);break;case 3:if(hr(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{zv(i,r)}catch(E){ut(o,o.return,E)}}break;case 27:r===null&&u&4&&iE(o);case 26:case 5:hr(i,o),r===null&&u&4&&tE(o),u&512&&Tu(o,o.return);break;case 12:hr(i,o);break;case 13:hr(i,o),u&4&&lE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=dR.bind(null,o),DR(i,o))));break;case 22:if(u=o.memoizedState!==null||Ns,!u){r=r!==null&&r.memoizedState!==null||Dt,f=Ns;var m=Dt;Ns=u,(Dt=r)&&!m?fr(i,o,(o.subtreeFlags&8772)!==0):hr(i,o),Ns=f,Dt=m}break;case 30:break;default:hr(i,o)}}function aE(i){var r=i.alternate;r!==null&&(i.alternate=null,aE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Js(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Tt=null,Vn=!1;function xs(i,r,o){for(o=o.child;o!==null;)oE(i,r,o),o=o.sibling}function oE(i,r,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ht,o)}catch{}switch(o.tag){case 26:Dt||qi(o,r),xs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Dt||qi(o,r);var u=Tt,f=Vn;yr(o.type)&&(Tt=o.stateNode,Vn=!1),xs(i,r,o),xu(o.stateNode),Tt=u,Vn=f;break;case 5:Dt||qi(o,r);case 6:if(u=Tt,f=Vn,Tt=null,xs(i,r,o),Tt=u,Vn=f,Tt!==null)if(Vn)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(o.stateNode)}catch(m){ut(o,r,m)}else try{Tt.removeChild(o.stateNode)}catch(m){ut(o,r,m)}break;case 18:Tt!==null&&(Vn?(i=Tt,$E(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Uu(i)):$E(Tt,o.stateNode));break;case 4:u=Tt,f=Vn,Tt=o.stateNode.containerInfo,Vn=!0,xs(i,r,o),Tt=u,Vn=f;break;case 0:case 11:case 14:case 15:Dt||cr(2,o,r),Dt||cr(4,o,r),xs(i,r,o);break;case 1:Dt||(qi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&eE(o,r,u)),xs(i,r,o);break;case 21:xs(i,r,o);break;case 22:Dt=(u=Dt)||o.memoizedState!==null,xs(i,r,o),Dt=u;break;default:xs(i,r,o)}}function lE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Uu(i)}catch(o){ut(r,r.return,o)}}function rR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new sE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new sE),r;default:throw Error(s(435,i.tag))}}function dp(i,r){var o=rR(i);r.forEach(function(u){var f=mR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Qn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(yr(w.type)){Tt=w.stateNode,Vn=!1;break e}break;case 5:Tt=w.stateNode,Vn=!1;break e;case 3:case 4:Tt=w.stateNode.containerInfo,Vn=!0;break e}w=w.return}if(Tt===null)throw Error(s(160));oE(m,E,f),Tt=null,Vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)uE(r,i),r=r.sibling}var vi=null;function uE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Qn(r,i),Yn(i),u&4&&(cr(3,i,i.return),Eu(3,i),cr(5,i,i.return));break;case 1:Qn(r,i),Yn(i),u&512&&(Dt||o===null||qi(o,o.return)),u&64&&Ns&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=vi;if(Qn(r,i),Yn(i),u&512&&(Dt||o===null||qi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ea]||m[Gt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),pn(m,u,o),m[Gt]=i,Nt(m),u=m;break e;case"link":var E=iT("link","href",f).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(m=E[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=iT("meta","content",f).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(m=E[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Gt]=i,Nt(m),u=m}i.stateNode=u}else sT(f,i.type,i.stateNode);else i.stateNode=nT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?sT(f,i.type,i.stateNode):nT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&up(i,i.memoizedProps,o.memoizedProps)}break;case 27:Qn(r,i),Yn(i),u&512&&(Dt||o===null||qi(o,o.return)),o!==null&&u&4&&up(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Qn(r,i),Yn(i),u&512&&(Dt||o===null||qi(o,o.return)),i.flags&32){f=i.stateNode;try{ti(f,"")}catch(H){ut(i,i.return,H)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,up(i,f,o!==null?o.memoizedProps:f)),u&1024&&(fp=!0);break;case 6:if(Qn(r,i),Yn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(H){ut(i,i.return,H)}}break;case 3:if(tf=null,f=vi,vi=Jh(r.containerInfo),Qn(r,i),vi=f,Yn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Uu(r.containerInfo)}catch(H){ut(i,i.return,H)}fp&&(fp=!1,cE(i));break;case 4:u=vi,vi=Jh(i.stateNode.containerInfo),Qn(r,i),Yn(i),vi=u;break;case 12:Qn(r,i),Yn(i);break;case 13:Qn(r,i),Yn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(vp=kn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,dp(i,u)));break;case 22:f=i.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,B=Ns,K=Dt;if(Ns=B||f,Dt=K||I,Qn(r,i),Dt=K,Ns=B,Yn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||I||Ns||Dt||Ca(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){I=o=r;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=I.stateNode;var Z=I.memoizedProps.style,q=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;w.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){ut(I,I.return,H)}}}else if(r.tag===6){if(o===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(H){ut(I,I.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,dp(i,o))));break;case 19:Qn(r,i),Yn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,dp(i,u)));break;case 30:break;case 21:break;default:Qn(r,i),Yn(i)}}function Yn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(nE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=cp(i);zh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(ti(E,""),o.flags&=-33);var w=cp(i);zh(i,w,E);break;case 3:case 4:var I=o.stateNode.containerInfo,B=cp(i);hp(i,B,I);break;default:throw Error(s(161))}}catch(K){ut(i,i.return,K)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function cE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;cE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function hr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)rE(i,r.alternate,r),r=r.sibling}function Ca(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:cr(4,r,r.return),Ca(r);break;case 1:qi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&eE(r,r.return,o),Ca(r);break;case 27:xu(r.stateNode);case 26:case 5:qi(r,r.return),Ca(r);break;case 22:r.memoizedState===null&&Ca(r);break;case 30:Ca(r);break;default:Ca(r)}i=i.sibling}}function fr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:fr(f,m,o),Eu(4,m);break;case 1:if(fr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){ut(u,u.return,B)}if(u=m,f=u.updateQueue,f!==null){var w=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)jv(I[f],w)}catch(B){ut(u,u.return,B)}}o&&E&64&&J0(m),Tu(m,m.return);break;case 27:iE(m);case 26:case 5:fr(f,m,o),o&&u===null&&E&4&&tE(m),Tu(m,m.return);break;case 12:fr(f,m,o);break;case 13:fr(f,m,o),o&&E&4&&lE(f,m);break;case 22:m.memoizedState===null&&fr(f,m,o),Tu(m,m.return);break;case 30:break;default:fr(f,m,o)}r=r.sibling}}function mp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&au(o))}function pp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&au(i))}function Fi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)hE(i,r,o,u),r=r.sibling}function hE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Fi(i,r,o,u),f&2048&&Eu(9,r);break;case 1:Fi(i,r,o,u);break;case 3:Fi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&au(i)));break;case 12:if(f&2048){Fi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,w=m.onPostCommit;typeof w=="function"&&w(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(I){ut(r,r.return,I)}}else Fi(i,r,o,u);break;case 13:Fi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Fi(i,r,o,u):bu(i,r):m._visibility&2?Fi(i,r,o,u):(m._visibility|=2,Mo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&mp(E,r);break;case 24:Fi(i,r,o,u),f&2048&&pp(r.alternate,r);break;default:Fi(i,r,o,u)}}function Mo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,w=o,I=u,B=E.flags;switch(E.tag){case 0:case 11:case 15:Mo(m,E,w,I,f),Eu(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Mo(m,E,w,I,f):bu(m,E):(K._visibility|=2,Mo(m,E,w,I,f)),f&&B&2048&&mp(E.alternate,E);break;case 24:Mo(m,E,w,I,f),f&&B&2048&&pp(E.alternate,E);break;default:Mo(m,E,w,I,f)}r=r.sibling}}function bu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:bu(o,u),f&2048&&mp(u.alternate,u);break;case 24:bu(o,u),f&2048&&pp(u.alternate,u);break;default:bu(o,u)}r=r.sibling}}var wu=8192;function ko(i){if(i.subtreeFlags&wu)for(i=i.child;i!==null;)fE(i),i=i.sibling}function fE(i){switch(i.tag){case 26:ko(i),i.flags&wu&&i.memoizedState!==null&&HR(vi,i.memoizedState,i.memoizedProps);break;case 5:ko(i);break;case 3:case 4:var r=vi;vi=Jh(i.stateNode.containerInfo),ko(i),vi=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=wu,wu=16777216,ko(i),wu=r):ko(i));break;default:ko(i)}}function dE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Su(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];nn=u,pE(u,i)}dE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)mE(i),i=i.sibling}function mE(i){switch(i.tag){case 0:case 11:case 15:Su(i),i.flags&2048&&cr(9,i,i.return);break;case 3:Su(i);break;case 12:Su(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Bh(i)):Su(i);break;default:Su(i)}}function Bh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];nn=u,pE(u,i)}dE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:cr(8,r,r.return),Bh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Bh(r));break;default:Bh(r)}i=i.sibling}}function pE(i,r){for(;nn!==null;){var o=nn;switch(o.tag){case 0:case 11:case 15:cr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:au(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,nn=u;else e:for(o=i;nn!==null;){u=nn;var f=u.sibling,m=u.return;if(aE(u),u===o){nn=null;break e}if(f!==null){f.return=m,nn=f;break e}nn=m}}}var aR={getCacheForType:function(i){var r=vn(Kt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},oR=typeof WeakMap=="function"?WeakMap:Map,tt=0,ft=null,je=null,Ke=0,nt=0,Kn=null,dr=!1,Po=!1,gp=!1,Ds=0,Ct=0,mr=0,Ra=0,_p=0,ci=0,Vo=0,Au=null,Ln=null,yp=!1,vp=0,qh=1/0,Fh=null,pr=null,mn=0,gr=null,Lo=null,Uo=0,Ep=0,Tp=null,gE=null,Cu=0,bp=null;function $n(){if((tt&2)!==0&&Ke!==0)return Ke&-Ke;if(Y.T!==null){var i=Ao;return i!==0?i:Np()}return Ws()}function _E(){ci===0&&(ci=(Ke&536870912)===0||We?Pl():536870912);var i=ui.current;return i!==null&&(i.flags|=32),ci}function Xn(i,r,o){(i===ft&&(nt===2||nt===9)||i.cancelPendingCommit!==null)&&(jo(i,0),_r(i,Ke,ci,!1)),us(i,o),((tt&2)===0||i!==ft)&&(i===ft&&((tt&2)===0&&(Ra|=o),Ct===4&&_r(i,Ke,ci,!1)),Hi(i))}function yE(i,r,o){if((tt&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Jr(i,r),f=u?cR(i,r):Ap(i,r,!0),m=u;do{if(f===0){Po&&!u&&_r(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!lR(o)){f=Ap(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var w=i;f=Au;var I=w.current.memoizedState.isDehydrated;if(I&&(jo(w,E).flags|=256),E=Ap(w,E,!1),E!==2){if(gp&&!I){w.errorRecoveryDisabledLanes|=m,Ra|=m,f=4;break e}m=Ln,Ln=f,m!==null&&(Ln===null?Ln=m:Ln.push.apply(Ln,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){jo(i,0),_r(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:_r(u,r,ci,!dr);break e;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=vp+300-kn(),10<f)){if(_r(u,r,ci,!dr),to(u,0,!0)!==0)break e;u.timeoutHandle=YE(vE.bind(null,u,o,Ln,Fh,yp,r,ci,Ra,Vo,dr,m,2,-0,0),f);break e}vE(u,o,Ln,Fh,yp,r,ci,Ra,Vo,dr,m,0,-0,0)}}break}while(!0);Hi(i)}function vE(i,r,o,u,f,m,E,w,I,B,K,Z,q,H){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Mu={stylesheets:null,count:0,unsuspend:FR},fE(r),Z=GR(),Z!==null)){i.cancelPendingCommit=Z(CE.bind(null,i,r,m,o,u,f,E,w,I,K,1,q,H)),_r(i,m,E,!B);return}CE(i,r,m,o,u,f,E,w,I)}function lR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Hn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _r(i,r,o,u){r&=~_p,r&=~Ra,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-Zt(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Ni(i,o,r)}function Hh(){return(tt&6)===0?(Ru(0),!1):!0}function wp(){if(je!==null){if(nt===0)var i=je.return;else i=je,ws=Ta=null,zm(i),Do=null,_u=0,i=je;for(;i!==null;)Z0(i.alternate,i),i=i.return;je=null}}function jo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,CR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),wp(),ft=i,je=o=Es(i.current,null),Ke=r,nt=0,Kn=null,dr=!1,Po=Jr(i,r),gp=!1,Vo=ci=_p=Ra=mr=Ct=0,Ln=Au=null,yp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-Zt(u),m=1<<f;r|=i[f],u&=~m}return Ds=r,fh(),o}function EE(i,r){ke=null,Y.H=Dh,r===lu||r===Th?(r=Lv(),nt=3):r===kv?(r=Lv(),nt=4):nt=r===U0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Kn=r,je===null&&(Ct=1,Vh(i,ri(r,i.current)))}function TE(){var i=Y.H;return Y.H=Dh,i===null?Dh:i}function bE(){var i=Y.A;return Y.A=aR,i}function Sp(){Ct=4,dr||(Ke&4194048)!==Ke&&ui.current!==null||(Po=!0),(mr&134217727)===0&&(Ra&134217727)===0||ft===null||_r(ft,Ke,ci,!1)}function Ap(i,r,o){var u=tt;tt|=2;var f=TE(),m=bE();(ft!==i||Ke!==r)&&(Fh=null,jo(i,r)),r=!1;var E=Ct;e:do try{if(nt!==0&&je!==null){var w=je,I=Kn;switch(nt){case 8:wp(),E=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(r=!0);var B=nt;if(nt=0,Kn=null,zo(i,w,I,B),o&&Po){E=0;break e}break;default:B=nt,nt=0,Kn=null,zo(i,w,I,B)}}uR(),E=Ct;break}catch(K){EE(i,K)}while(!0);return r&&i.shellSuspendCounter++,ws=Ta=null,tt=u,Y.H=f,Y.A=m,je===null&&(ft=null,Ke=0,fh()),E}function uR(){for(;je!==null;)wE(je)}function cR(i,r){var o=tt;tt|=2;var u=TE(),f=bE();ft!==i||Ke!==r?(Fh=null,qh=kn()+500,jo(i,r)):Po=Jr(i,r);e:do try{if(nt!==0&&je!==null){r=je;var m=Kn;t:switch(nt){case 1:nt=0,Kn=null,zo(i,r,m,1);break;case 2:case 9:if(Pv(m)){nt=0,Kn=null,SE(r);break}r=function(){nt!==2&&nt!==9||ft!==i||(nt=7),Hi(i)},m.then(r,r);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:Pv(m)?(nt=0,Kn=null,SE(r)):(nt=0,Kn=null,zo(i,r,m,7));break;case 5:var E=null;switch(je.tag){case 26:E=je.memoizedState;case 5:case 27:var w=je;if(!E||rT(E)){nt=0,Kn=null;var I=w.sibling;if(I!==null)je=I;else{var B=w.return;B!==null?(je=B,Gh(B)):je=null}break t}}nt=0,Kn=null,zo(i,r,m,5);break;case 6:nt=0,Kn=null,zo(i,r,m,6);break;case 8:wp(),Ct=6;break e;default:throw Error(s(462))}}hR();break}catch(K){EE(i,K)}while(!0);return ws=Ta=null,Y.H=u,Y.A=f,tt=o,je!==null?0:(ft=null,Ke=0,fh(),Ct)}function hR(){for(;je!==null&&!$r();)wE(je)}function wE(i){var r=X0(i.alternate,i,Ds);i.memoizedProps=i.pendingProps,r===null?Gh(i):je=r}function SE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=H0(o,r,r.pendingProps,r.type,void 0,Ke);break;case 11:r=H0(o,r,r.pendingProps,r.type.render,r.ref,Ke);break;case 5:zm(r);default:Z0(o,r),r=je=Av(r,Ds),r=X0(o,r,Ds)}i.memoizedProps=i.pendingProps,r===null?Gh(i):je=r}function zo(i,r,o,u){ws=Ta=null,zm(r),Do=null,_u=0;var f=r.return;try{if(eR(i,f,r,o,Ke)){Ct=1,Vh(i,ri(o,i.current)),je=null;return}}catch(m){if(f!==null)throw je=f,m;Ct=1,Vh(i,ri(o,i.current)),je=null;return}r.flags&32768?(We||u===1?i=!0:Po||(Ke&536870912)!==0?i=!1:(dr=i=!0,(u===2||u===9||u===3||u===6)&&(u=ui.current,u!==null&&u.tag===13&&(u.flags|=16384))),AE(r,i)):Gh(r)}function Gh(i){var r=i;do{if((r.flags&32768)!==0){AE(r,dr);return}i=r.return;var o=nR(r.alternate,r,Ds);if(o!==null){je=o;return}if(r=r.sibling,r!==null){je=r;return}je=r=i}while(r!==null);Ct===0&&(Ct=5)}function AE(i,r){do{var o=iR(i.alternate,i);if(o!==null){o.flags&=32767,je=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){je=i;return}je=i=o}while(i!==null);Ct=6,je=null}function CE(i,r,o,u,f,m,E,w,I){i.cancelPendingCommit=null;do Qh();while(mn!==0);if((tt&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=pm,Ll(i,o,m,E,w,I),i===ft&&(je=ft=null,Ke=0),Lo=r,gr=i,Uo=o,Ep=m,Tp=f,gE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,pR(os,function(){return DE(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=J.p,J.p=2,E=tt,tt|=4;try{sR(i,r,o)}finally{tt=E,J.p=f,Y.T=u}}mn=1,RE(),IE(),NE()}}function RE(){if(mn===1){mn=0;var i=gr,r=Lo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=J.p;J.p=2;var f=tt;tt|=4;try{uE(r,i);var m=Lp,E=pv(i.containerInfo),w=m.focusedElem,I=m.selectionRange;if(E!==w&&w&&w.ownerDocument&&mv(w.ownerDocument.documentElement,w)){if(I!==null&&cm(w)){var B=I.start,K=I.end;if(K===void 0&&(K=B),"selectionStart"in w)w.selectionStart=B,w.selectionEnd=Math.min(K,w.value.length);else{var Z=w.ownerDocument||document,q=Z&&Z.defaultView||window;if(q.getSelection){var H=q.getSelection(),we=w.textContent.length,ve=Math.min(I.start,we),lt=I.end===void 0?ve:Math.min(I.end,we);!H.extend&&ve>lt&&(E=lt,lt=ve,ve=E);var V=dv(w,ve),O=dv(w,lt);if(V&&O&&(H.rangeCount!==1||H.anchorNode!==V.node||H.anchorOffset!==V.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var z=Z.createRange();z.setStart(V.node,V.offset),H.removeAllRanges(),ve>lt?(H.addRange(z),H.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),H.addRange(z))}}}}for(Z=[],H=w;H=H.parentNode;)H.nodeType===1&&Z.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Z.length;w++){var W=Z[w];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}rf=!!Vp,Lp=Vp=null}finally{tt=f,J.p=u,Y.T=o}}i.current=r,mn=2}}function IE(){if(mn===2){mn=0;var i=gr,r=Lo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=J.p;J.p=2;var f=tt;tt|=4;try{rE(i,r.alternate,r)}finally{tt=f,J.p=u,Y.T=o}}mn=3}}function NE(){if(mn===4||mn===3){mn=0,eo();var i=gr,r=Lo,o=Uo,u=gE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?mn=5:(mn=0,Lo=gr=null,xE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(pr=null),no(o),r=r.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ht,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Y.T,f=J.p,J.p=2,Y.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var w=u[E];m(w.value,{componentStack:w.stack})}}finally{Y.T=r,J.p=f}}(Uo&3)!==0&&Qh(),Hi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===bp?Cu++:(Cu=0,bp=i):Cu=0,Ru(0)}}function xE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,au(r)))}function Qh(i){return RE(),IE(),NE(),DE()}function DE(){if(mn!==5)return!1;var i=gr,r=Ep;Ep=0;var o=no(Uo),u=Y.T,f=J.p;try{J.p=32>o?32:o,Y.T=null,o=Tp,Tp=null;var m=gr,E=Uo;if(mn=0,Lo=gr=null,Uo=0,(tt&6)!==0)throw Error(s(331));var w=tt;if(tt|=4,mE(m.current),hE(m,m.current,E,o),tt=w,Ru(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ht,m)}catch{}return!0}finally{J.p=f,Y.T=u,xE(i,r)}}function OE(i,r,o){r=ri(o,r),r=ep(i.stateNode,r,2),i=ar(i,r,2),i!==null&&(us(i,2),Hi(i))}function ut(i,r,o){if(i.tag===3)OE(i,i,o);else for(;r!==null;){if(r.tag===3){OE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pr===null||!pr.has(u))){i=ri(o,i),o=V0(2),u=ar(r,o,2),u!==null&&(L0(o,u,r,i),us(u,2),Hi(u));break}}r=r.return}}function Cp(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new oR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(gp=!0,f.add(o),i=fR.bind(null,i,r,o),r.then(i,i))}function fR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ft===i&&(Ke&o)===o&&(Ct===4||Ct===3&&(Ke&62914560)===Ke&&300>kn()-vp?(tt&2)===0&&jo(i,0):_p|=o,Vo===Ke&&(Vo=0)),Hi(i)}function ME(i,r){r===0&&(r=Vl()),i=To(i,r),i!==null&&(us(i,r),Hi(i))}function dR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),ME(i,o)}function mR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),ME(i,o)}function pR(i,r){return ss(i,r)}var Yh=null,Bo=null,Rp=!1,Kh=!1,Ip=!1,Ia=0;function Hi(i){i!==Bo&&i.next===null&&(Bo===null?Yh=Bo=i:Bo=Bo.next=i),Kh=!0,Rp||(Rp=!0,_R())}function Ru(i,r){if(!Ip&&Kh){Ip=!0;do for(var o=!1,u=Yh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,w=u.pingedLanes;m=(1<<31-Zt(42|i)+1)-1,m&=f&~(E&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,LE(u,m))}else m=Ke,m=to(u,u===ft?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Jr(u,m)||(o=!0,LE(u,m));u=u.next}while(o);Ip=!1}}function gR(){kE()}function kE(){Kh=Rp=!1;var i=0;Ia!==0&&(AR()&&(i=Ia),Ia=0);for(var r=kn(),o=null,u=Yh;u!==null;){var f=u.next,m=PE(u,r);m===0?(u.next=null,o===null?Yh=f:o.next=f,f===null&&(Bo=o)):(o=u,(i!==0||(m&3)!==0)&&(Kh=!0)),u=f}Ru(i)}function PE(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-Zt(m),w=1<<E,I=f[E];I===-1?((w&o)===0||(w&u)!==0)&&(f[E]=kl(w,r)):I<=r&&(i.expiredLanes|=w),m&=~w}if(r=ft,o=Ke,o=to(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(nt===2||nt===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&rs(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Jr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&rs(u),no(o)){case 2:case 8:o=Ii;break;case 32:o=os;break;case 268435456:o=Ce;break;default:o=os}return u=VE.bind(null,i),o=ss(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&rs(u),i.callbackPriority=2,i.callbackNode=null,2}function VE(i,r){if(mn!==0&&mn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Qh()&&i.callbackNode!==o)return null;var u=Ke;return u=to(i,i===ft?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(yE(i,u,r),PE(i,kn()),i.callbackNode!=null&&i.callbackNode===o?VE.bind(null,i):null)}function LE(i,r){if(Qh())return null;yE(i,r,!0)}function _R(){RR(function(){(tt&6)!==0?ss(as,gR):kE()})}function Np(){return Ia===0&&(Ia=Pl()),Ia}function UE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:lo(""+i)}function jE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function yR(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=UE((f[Pt]||null).action),E=u.submitter;E&&(r=(r=E[Pt]||null)?UE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var w=new uo("action","action",null,u,f);i.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ia!==0){var I=E?jE(f,E):new FormData(f);$m(o,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(w.preventDefault(),I=E?jE(f,E):new FormData(f),$m(o,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var xp=0;xp<mm.length;xp++){var Dp=mm[xp],vR=Dp.toLowerCase(),ER=Dp[0].toUpperCase()+Dp.slice(1);yi(vR,"on"+ER)}yi(yv,"onAnimationEnd"),yi(vv,"onAnimationIteration"),yi(Ev,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(LC,"onTransitionRun"),yi(UC,"onTransitionStart"),yi(jC,"onTransitionCancel"),yi(Tv,"onTransitionEnd"),hs("onMouseEnter",["mouseout","mouseover"]),hs("onMouseLeave",["mouseout","mouseover"]),hs("onPointerEnter",["pointerout","pointerover"]),hs("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Iu));function zE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var w=u[E],I=w.instance,B=w.currentTarget;if(w=w.listener,I!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=B;try{m(f)}catch(K){Ph(K)}f.currentTarget=null,m=I}else for(E=0;E<u.length;E++){if(w=u[E],I=w.instance,B=w.currentTarget,w=w.listener,I!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=B;try{m(f)}catch(K){Ph(K)}f.currentTarget=null,m=I}}}}function ze(i,r){var o=r[jl];o===void 0&&(o=r[jl]=new Set);var u=i+"__bubble";o.has(u)||(BE(r,i,2,!1),o.add(u))}function Op(i,r,o){var u=0;r&&(u|=4),BE(o,i,u,r)}var $h="_reactListening"+Math.random().toString(36).slice(2);function Mp(i){if(!i[$h]){i[$h]=!0,zl.forEach(function(o){o!=="selectionchange"&&(TR.has(o)||Op(o,!1,i),Op(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[$h]||(r[$h]=!0,Op("selectionchange",!1,r))}}function BE(i,r,o,u){switch(hT(r)){case 2:var f=KR;break;case 8:f=$R;break;default:f=Yp}o=f.bind(null,r,o,i),f=void 0,!ii||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function kp(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=cs(w),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=m=E;continue e}w=w.parentNode}}u=u.return}Wc(function(){var B=m,K=ni(o),Z=[];e:{var q=bv.get(i);if(q!==void 0){var H=uo,we=i;switch(i){case"keypress":if(Pi(o)===0)break e;case"keydown":case"keyup":H=go;break;case"focusin":we="focus",H=fo;break;case"focusout":we="blur",H=fo;break;case"beforeblur":case"afterblur":H=fo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=si;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=rh;break;case yv:case vv:case Ev:H=mo;break;case Tv:H=oh;break;case"scroll":case"scrollend":H=Zc;break;case"wheel":H=_o;break;case"copy":case"cut":case"paste":H=po;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Zl;break;case"toggle":case"beforetoggle":H=uh}var ve=(r&4)!==0,lt=!ve&&(i==="scroll"||i==="scrollend"),V=ve?q!==null?q+"Capture":null:q;ve=[];for(var O=B,z;O!==null;){var W=O;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||V===null||(W=oa(O,V),W!=null&&ve.push(Nu(O,W,z))),lt)break;O=O.return}0<ve.length&&(q=new H(q,we,null,o,K),Z.push({event:q,listeners:ve}))}}if((r&7)===0){e:{if(q=i==="mouseover"||i==="pointerover",H=i==="mouseout"||i==="pointerout",q&&o!==ms&&(we=o.relatedTarget||o.fromElement)&&(cs(we)||we[ei]))break e;if((H||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,H?(we=o.relatedTarget||o.toElement,H=B,we=we?cs(we):null,we!==null&&(lt=l(we),ve=we.tag,we!==lt||ve!==5&&ve!==27&&ve!==6)&&(we=null)):(H=null,we=B),H!==we)){if(ve=si,W="onMouseLeave",V="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ve=Zl,W="onPointerLeave",V="onPointerEnter",O="pointer"),lt=H==null?q:Di(H),z=we==null?q:Di(we),q=new ve(W,O+"leave",H,o,K),q.target=lt,q.relatedTarget=z,W=null,cs(K)===B&&(ve=new ve(V,O+"enter",we,o,K),ve.target=z,ve.relatedTarget=lt,W=ve),lt=W,H&&we)t:{for(ve=H,V=we,O=0,z=ve;z;z=qo(z))O++;for(z=0,W=V;W;W=qo(W))z++;for(;0<O-z;)ve=qo(ve),O--;for(;0<z-O;)V=qo(V),z--;for(;O--;){if(ve===V||V!==null&&ve===V.alternate)break t;ve=qo(ve),V=qo(V)}ve=null}else ve=null;H!==null&&qE(Z,q,H,ve,!1),we!==null&&lt!==null&&qE(Z,lt,we,ve,!0)}}e:{if(q=B?Di(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var fe=ov;else if(Yt(q))if(lv)fe=kC;else{fe=OC;var Ve=DC}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&Gl(B.elementType)&&(fe=ov):fe=MC;if(fe&&(fe=fe(i,B))){vs(Z,fe,o,K);break e}Ve&&Ve(i,q,B),i==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&tr(q,"number",q.value)}switch(Ve=B?Di(B):window,i){case"focusin":(Yt(Ve)||Ve.contentEditable==="true")&&(yo=Ve,hm=B,tu=null);break;case"focusout":tu=hm=yo=null;break;case"mousedown":fm=!0;break;case"contextmenu":case"mouseup":case"dragend":fm=!1,gv(Z,o,K);break;case"selectionchange":if(VC)break;case"keydown":case"keyup":gv(Z,o,K)}var pe;if(Ui)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Qe?Q(i,o)&&(Ee="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(Qe||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Qe&&(pe=Yl()):(ki=K,nr="value"in ki?ki.value:ki.textContent,Qe=!0)),Ve=Xh(B,Ee),0<Ve.length&&(Ee=new Xl(Ee,i,null,o,K),Z.push({event:Ee,listeners:Ve}),pe?Ee.data=pe:(pe=se(o),pe!==null&&(Ee.data=pe)))),(pe=_?Qt(i,o):Ye(i,o))&&(Ee=Xh(B,"onBeforeInput"),0<Ee.length&&(Ve=new Xl("onBeforeInput","beforeinput",null,o,K),Z.push({event:Ve,listeners:Ee}),Ve.data=pe)),yR(Z,i,B,o,K)}zE(Z,r)})}function Nu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Xh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=oa(i,o),f!=null&&u.unshift(Nu(i,f,m)),f=oa(i,r),f!=null&&u.push(Nu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function qo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function qE(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var w=o,I=w.alternate,B=w.stateNode;if(w=w.tag,I!==null&&I===u)break;w!==5&&w!==26&&w!==27||B===null||(I=B,f?(B=oa(o,m),B!=null&&E.unshift(Nu(o,B,I))):f||(B=oa(o,m),B!=null&&E.push(Nu(o,B,I)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var bR=/\r\n?/g,wR=/\u0000|\uFFFD/g;function FE(i){return(typeof i=="string"?i:""+i).replace(bR,`
`).replace(wR,"")}function HE(i,r){return r=FE(r),FE(i)===r}function Wh(){}function ot(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||ti(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&ti(i,""+u);break;case"className":Oi(i,"class",u);break;case"tabIndex":Oi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(i,o,u);break;case"style":Hl(i,u,m);break;case"data":if(r!=="object"){Oi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=lo(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&ot(i,r,"name",f.name,f,null),ot(i,r,"formEncType",f.formEncType,f,null),ot(i,r,"formMethod",f.formMethod,f,null),ot(i,r,"formTarget",f.formTarget,f,null)):(ot(i,r,"encType",f.encType,f,null),ot(i,r,"method",f.method,f,null),ot(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=lo(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Wh);break;case"onScroll":u!=null&&ze("scroll",i);break;case"onScrollEnd":u!=null&&ze("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=lo(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":ze("beforetoggle",i),ze("toggle",i),er(i,"popover",u);break;case"xlinkActuate":hn(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":hn(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":hn(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":hn(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":hn(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":hn(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":hn(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":hn(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":hn(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":er(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=sm.get(o)||o,er(i,o,u))}}function Pp(i,r,o,u,f,m){switch(o){case"style":Hl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?ti(i,u):(typeof u=="number"||typeof u=="bigint")&&ti(i,""+u);break;case"onScroll":u!=null&&ze("scroll",i);break;case"onScrollEnd":u!=null&&ze("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Wh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!io.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Pt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):er(i,o,u)}}}function pn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",i),ze("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(i,r,m,E,o,null)}}f&&ot(i,r,"srcSet",o.srcSet,o,null),u&&ot(i,r,"src",o.src,o,null);return;case"input":ze("invalid",i);var w=m=E=f=null,I=null,B=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":I=K;break;case"defaultChecked":B=K;break;case"value":m=K;break;case"defaultValue":w=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:ot(i,r,u,K,o,null)}}sa(i,m,w,I,B,E,f,!1),oo(i);return;case"select":ze("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:ot(i,r,f,w,o,null)}r=m,o=E,i.multiple=!!u,r!=null?ds(i,!!u,r,!1):o!=null&&ds(i,!!u,o,!0);return;case"textarea":ze("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:ot(i,r,E,w,o,null)}ra(i,u,f,m),oo(i);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ot(i,r,I,u,o,null)}return;case"dialog":ze("beforetoggle",i),ze("toggle",i),ze("cancel",i),ze("close",i);break;case"iframe":case"object":ze("load",i);break;case"video":case"audio":for(u=0;u<Iu.length;u++)ze(Iu[u],i);break;case"image":ze("error",i),ze("load",i);break;case"details":ze("toggle",i);break;case"embed":case"source":case"link":ze("error",i),ze("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(u=o[B],u!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(i,r,B,u,o,null)}return;default:if(Gl(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&Pp(i,r,K,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&ot(i,r,w,u,o,null))}function SR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,w=null,I=null,B=null,K=null;for(H in o){var Z=o[H];if(o.hasOwnProperty(H)&&Z!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=Z;default:u.hasOwnProperty(H)||ot(i,r,H,null,u,Z)}}for(var q in u){var H=u[q];if(Z=o[q],u.hasOwnProperty(q)&&(H!=null||Z!=null))switch(q){case"type":m=H;break;case"name":f=H;break;case"checked":B=H;break;case"defaultChecked":K=H;break;case"value":E=H;break;case"defaultValue":w=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==Z&&ot(i,r,q,H,u,Z)}}Fn(i,E,w,I,B,K,m,f);return;case"select":H=E=w=q=null;for(m in o)if(I=o[m],o.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":H=I;default:u.hasOwnProperty(m)||ot(i,r,m,null,u,I)}for(f in u)if(m=u[f],I=o[f],u.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":q=m;break;case"defaultValue":w=m;break;case"multiple":E=m;default:m!==I&&ot(i,r,f,m,u,I)}r=w,o=E,u=H,q!=null?ds(i,!!o,q,!1):!!u!=!!o&&(r!=null?ds(i,!!o,r,!0):ds(i,!!o,o?[]:"",!1));return;case"textarea":H=q=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ot(i,r,w,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":q=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ot(i,r,E,f,u,m)}rt(i,q,H);return;case"option":for(var we in o)if(q=o[we],o.hasOwnProperty(we)&&q!=null&&!u.hasOwnProperty(we))switch(we){case"selected":i.selected=!1;break;default:ot(i,r,we,null,u,q)}for(I in u)if(q=u[I],H=o[I],u.hasOwnProperty(I)&&q!==H&&(q!=null||H!=null))switch(I){case"selected":i.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:ot(i,r,I,q,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in o)q=o[ve],o.hasOwnProperty(ve)&&q!=null&&!u.hasOwnProperty(ve)&&ot(i,r,ve,null,u,q);for(B in u)if(q=u[B],H=o[B],u.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:ot(i,r,B,q,u,H)}return;default:if(Gl(r)){for(var lt in o)q=o[lt],o.hasOwnProperty(lt)&&q!==void 0&&!u.hasOwnProperty(lt)&&Pp(i,r,lt,void 0,u,q);for(K in u)q=u[K],H=o[K],!u.hasOwnProperty(K)||q===H||q===void 0&&H===void 0||Pp(i,r,K,q,u,H);return}}for(var V in o)q=o[V],o.hasOwnProperty(V)&&q!=null&&!u.hasOwnProperty(V)&&ot(i,r,V,null,u,q);for(Z in u)q=u[Z],H=o[Z],!u.hasOwnProperty(Z)||q===H||q==null&&H==null||ot(i,r,Z,q,u,H)}var Vp=null,Lp=null;function Zh(i){return i.nodeType===9?i:i.ownerDocument}function GE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function QE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Up(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jp=null;function AR(){var i=window.event;return i&&i.type==="popstate"?i===jp?!1:(jp=i,!0):(jp=null,!1)}var YE=typeof setTimeout=="function"?setTimeout:void 0,CR=typeof clearTimeout=="function"?clearTimeout:void 0,KE=typeof Promise=="function"?Promise:void 0,RR=typeof queueMicrotask=="function"?queueMicrotask:typeof KE<"u"?function(i){return KE.resolve(null).then(i).catch(IR)}:YE;function IR(i){setTimeout(function(){throw i})}function yr(i){return i==="head"}function $E(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&xu(E.documentElement),o&2&&xu(E.body),o&4)for(o=E.head,xu(o),E=o.firstChild;E;){var w=E.nextSibling,I=E.nodeName;E[ea]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(f===0){i.removeChild(m),Uu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Uu(r)}function zp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":zp(o),Js(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function NR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[ea])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=Ei(i.nextSibling),i===null)break}return null}function xR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ei(i.nextSibling),i===null))return null;return i}function Bp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function DR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var qp=null;function XE(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function WE(i,r,o){switch(r=Zh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function xu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Js(i)}var hi=new Map,ZE=new Set;function Jh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Os=J.d;J.d={f:OR,r:MR,D:kR,C:PR,L:VR,m:LR,X:jR,S:UR,M:zR};function OR(){var i=Os.f(),r=Hh();return i||r}function MR(i){var r=xi(i);r!==null&&r.tag===5&&r.type==="form"?y0(r):Os.r(i)}var Fo=typeof document>"u"?null:document;function JE(i,r,o){var u=Fo;if(u&&typeof r=="string"&&r){var f=Vt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),ZE.has(f)||(ZE.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),pn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function kR(i){Os.D(i),JE("dns-prefetch",i,null)}function PR(i,r){Os.C(i,r),JE("preconnect",i,r)}function VR(i,r,o){Os.L(i,r,o);var u=Fo;if(u&&i&&r){var f='link[rel="preload"][as="'+Vt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Vt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Vt(o.imageSizes)+'"]')):f+='[href="'+Vt(i)+'"]';var m=f;switch(r){case"style":m=Ho(i);break;case"script":m=Go(i)}hi.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),hi.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Du(m))||r==="script"&&u.querySelector(Ou(m))||(r=u.createElement("link"),pn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function LR(i,r){Os.m(i,r);var o=Fo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Vt(u)+'"][href="'+Vt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Go(i)}if(!hi.has(m)&&(i=y({rel:"modulepreload",href:i},r),hi.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ou(m)))return}u=o.createElement("link"),pn(u,"link",i),Nt(u),o.head.appendChild(u)}}}function UR(i,r,o){Os.S(i,r,o);var u=Fo;if(u&&i){var f=Rn(u).hoistableStyles,m=Ho(i);r=r||"default";var E=f.get(m);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(Du(m)))w.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=hi.get(m))&&Fp(i,o);var I=E=u.createElement("link");Nt(I),pn(I,"link",i),I._p=new Promise(function(B,K){I.onload=B,I.onerror=K}),I.addEventListener("load",function(){w.loading|=1}),I.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ef(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(m,E)}}}function jR(i,r){Os.X(i,r);var o=Fo;if(o&&i){var u=Rn(o).hoistableScripts,f=Go(i),m=u.get(f);m||(m=o.querySelector(Ou(f)),m||(i=y({src:i,async:!0},r),(r=hi.get(f))&&Hp(i,r),m=o.createElement("script"),Nt(m),pn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function zR(i,r){Os.M(i,r);var o=Fo;if(o&&i){var u=Rn(o).hoistableScripts,f=Go(i),m=u.get(f);m||(m=o.querySelector(Ou(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=hi.get(f))&&Hp(i,r),m=o.createElement("script"),Nt(m),pn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function eT(i,r,o,u){var f=(f=be.current)?Jh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Ho(o.href),o=Rn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Ho(o.href);var m=Rn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Du(i)))&&!m._p&&(E.instance=m,E.state.loading=5),hi.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},hi.set(i,o),m||BR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Go(o),o=Rn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Ho(i){return'href="'+Vt(i)+'"'}function Du(i){return'link[rel="stylesheet"]['+i+"]"}function tT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function BR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),pn(r,"link",o),Nt(r),i.head.appendChild(r))}function Go(i){return'[src="'+Vt(i)+'"]'}function Ou(i){return"script[async]"+i}function nT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Vt(o.href)+'"]');if(u)return r.instance=u,Nt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Nt(u),pn(u,"style",f),ef(u,o.precedence,i),r.instance=u;case"stylesheet":f=Ho(o.href);var m=i.querySelector(Du(f));if(m)return r.state.loading|=4,r.instance=m,Nt(m),m;u=tT(o),(f=hi.get(f))&&Fp(u,f),m=(i.ownerDocument||i).createElement("link"),Nt(m);var E=m;return E._p=new Promise(function(w,I){E.onload=w,E.onerror=I}),pn(m,"link",u),r.state.loading|=4,ef(m,o.precedence,i),r.instance=m;case"script":return m=Go(o.src),(f=i.querySelector(Ou(m)))?(r.instance=f,Nt(f),f):(u=o,(f=hi.get(m))&&(u=y({},o),Hp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Nt(f),pn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,ef(u,o.precedence,i));return r.instance}function ef(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===r)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Fp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Hp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var tf=null;function iT(i,r,o){if(tf===null){var u=new Map,f=tf=new Map;f.set(o,u)}else f=tf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[ea]||m[Gt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var w=u.get(E);w?w.push(m):u.set(E,[m])}}return u}function sT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function qR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function rT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Mu=null;function FR(){}function HR(i,r,o){if(Mu===null)throw Error(s(475));var u=Mu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ho(o.href),m=i.querySelector(Du(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=nf.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Nt(m);return}m=i.ownerDocument||i,o=tT(o),(f=hi.get(f))&&Fp(o,f),m=m.createElement("link"),Nt(m);var E=m;E._p=new Promise(function(w,I){E.onload=w,E.onerror=I}),pn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=nf.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function GR(){if(Mu===null)throw Error(s(475));var i=Mu;return i.stylesheets&&i.count===0&&Gp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Gp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function nf(){if(this.count--,this.count===0){if(this.stylesheets)Gp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var sf=null;function Gp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,sf=new Map,r.forEach(QR,i),sf=null,nf.call(i))}function QR(i,r){if(!(r.state.loading&4)){var o=sf.get(i);if(o)var u=o.get(null);else{o=new Map,sf.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=nf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var ku={$$typeof:le,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function YR(i,r,o,u,f,m,E,w){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function aT(i,r,o,u,f,m,E,w,I,B,K,Z){return i=new YR(i,r,o,E,w,I,B,Z),r=1,m===!0&&(r|=24),m=Gn(3,null,null,r),i.current=m,m.stateNode=i,r=Cm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},xm(m),i}function oT(i){return i?(i=bo,i):bo}function lT(i,r,o,u,f,m){f=oT(f),u.context===null?u.context=f:u.pendingContext=f,u=rr(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ar(i,u,r),o!==null&&(Xn(o,i,r),cu(o,i,r))}function uT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Qp(i,r){uT(i,r),(i=i.alternate)&&uT(i,r)}function cT(i){if(i.tag===13){var r=To(i,67108864);r!==null&&Xn(r,i,67108864),Qp(i,67108864)}}var rf=!0;function KR(i,r,o,u){var f=Y.T;Y.T=null;var m=J.p;try{J.p=2,Yp(i,r,o,u)}finally{J.p=m,Y.T=f}}function $R(i,r,o,u){var f=Y.T;Y.T=null;var m=J.p;try{J.p=8,Yp(i,r,o,u)}finally{J.p=m,Y.T=f}}function Yp(i,r,o,u){if(rf){var f=Kp(u);if(f===null)kp(i,r,u,af,o),fT(i,u);else if(WR(f,i,r,o,u))u.stopPropagation();else if(fT(i,u),r&4&&-1<XR.indexOf(i)){for(;f!==null;){var m=xi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=pi(m.pendingLanes);if(E!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var I=1<<31-Zt(E);w.entanglements[1]|=I,E&=~I}Hi(m),(tt&6)===0&&(qh=kn()+500,Ru(0))}}break;case 13:w=To(m,2),w!==null&&Xn(w,m,2),Hh(),Qp(m,2)}if(m=Kp(u),m===null&&kp(i,r,u,af,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else kp(i,r,u,null,o)}}function Kp(i){return i=ni(i),$p(i)}var af=null;function $p(i){if(af=null,i=cs(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return af=i,null}function hT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($s()){case as:return 2;case Ii:return 8;case os:case me:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Xp=!1,vr=null,Er=null,Tr=null,Pu=new Map,Vu=new Map,br=[],XR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fT(i,r){switch(i){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Pu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vu.delete(r.pointerId)}}function Lu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=xi(r),r!==null&&cT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function WR(i,r,o,u,f){switch(r){case"focusin":return vr=Lu(vr,i,r,o,u,f),!0;case"dragenter":return Er=Lu(Er,i,r,o,u,f),!0;case"mouseover":return Tr=Lu(Tr,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Pu.set(m,Lu(Pu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Vu.set(m,Lu(Vu.get(m)||null,i,r,o,u,f)),!0}return!1}function dT(i){var r=cs(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Hc(i.priority,function(){if(o.tag===13){var u=$n();u=Xs(u);var f=To(o,u);f!==null&&Xn(f,o,u),Qp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function of(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Kp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);ms=u,o.target.dispatchEvent(u),ms=null}else return r=xi(o),r!==null&&cT(r),i.blockedOn=o,!1;r.shift()}return!0}function mT(i,r,o){of(i)&&o.delete(r)}function ZR(){Xp=!1,vr!==null&&of(vr)&&(vr=null),Er!==null&&of(Er)&&(Er=null),Tr!==null&&of(Tr)&&(Tr=null),Pu.forEach(mT),Vu.forEach(mT)}function lf(i,r){i.blockedOn===r&&(i.blockedOn=null,Xp||(Xp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ZR)))}var uf=null;function pT(i){uf!==i&&(uf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){uf===i&&(uf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if($p(u||o)===null)continue;break}var m=xi(o);m!==null&&(i.splice(r,3),r-=3,$m(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Uu(i){function r(I){return lf(I,i)}vr!==null&&lf(vr,i),Er!==null&&lf(Er,i),Tr!==null&&lf(Tr,i),Pu.forEach(r),Vu.forEach(r);for(var o=0;o<br.length;o++){var u=br[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<br.length&&(o=br[0],o.blockedOn===null);)dT(o),o.blockedOn===null&&br.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Pt]||null;if(typeof m=="function")E||pT(o);else if(E){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Pt]||null)w=E.formAction;else if($p(f)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),pT(o)}}}function Wp(i){this._internalRoot=i}cf.prototype.render=Wp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=$n();lT(o,u,i,r,null,null)},cf.prototype.unmount=Wp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;lT(i.current,2,null,i,null,null),Hh(),r[ei]=null}};function cf(i){this._internalRoot=i}cf.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ws();i={blockedOn:null,target:i,priority:r};for(var o=0;o<br.length&&r!==0&&r<br[o].priority;o++);br.splice(o,0,i),o===0&&dT(i)}};var gT=e.version;if(gT!=="19.1.1")throw Error(s(527,gT,"19.1.1"));J.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var JR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hf.isDisabled&&hf.supportsFiber)try{ht=hf.inject(JR),Ge=hf}catch{}}return zu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=O0,m=M0,E=k0,w=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=aT(i,1,!1,null,null,o,u,f,m,E,w,null),i[ei]=r.current,Mp(i),new Wp(r)},zu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=O0,E=M0,w=k0,I=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),r=aT(i,1,!0,r,o??null,u,f,m,E,w,I,B),r.context=oT(null),o=r.current,u=$n(),u=Xs(u),f=rr(u),f.callback=null,ar(o,f,u),o=u,r.current.lanes=o,us(r,o),Hi(r),i[ei]=r.current,Mp(i),new cf(r)},zu.version="19.1.1",zu}var CT;function uI(){if(CT)return eg.exports;CT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),eg.exports=lI(),eg.exports}var cI=uI();const hI=()=>{};var RT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(n,e){if(!n)throw Tl(e)},Tl=function(n){return new Error("Firebase Database ("+Yw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},fI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},__={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let b=(d&15)<<2|g>>6,x=g&63;p||(x=64,c||(b=64)),s.push(t[y],t[T],t[b],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new dI;const b=l<<2|d>>4;if(s.push(b),g!==64){const x=d<<4&240|g>>2;if(s.push(x),T!==64){const U=g<<6&192|T;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $w=function(n){const e=Kw(n);return __.encodeByteArray(e,!0)},Df=function(n){return $w(n).replace(/\./g,"")},Of=function(n){try{return __.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){return Xw(void 0,n)}function Xw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!pI(t)||(n[t]=Xw(n[t],e[t]));return n}function pI(n){return n!=="__proto__"}/**
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
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _I=()=>gI().__FIREBASE_DEFAULTS__,yI=()=>{if(typeof process>"u"||typeof RT>"u")return;const n=RT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Of(n[1]);return e&&JSON.parse(e)},gd=()=>{try{return hI()||_I()||yI()||vI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ww=n=>gd()?.emulatorHosts?.[n],Zw=n=>{const e=Ww(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Jw=()=>gd()?.config,eS=n=>gd()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Gr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function y_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function tS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Df(JSON.stringify(t)),Df(JSON.stringify(c)),""].join(".")}const $u={};function EI(){const n={prod:[],emulator:[]};for(const e of Object.keys($u))$u[e]?n.emulator.push(e):n.prod.push(e);return n}function TI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let IT=!1;function v_(n,e){if(typeof window>"u"||typeof document>"u"||!Gr(window.location.host)||$u[n]===e||$u[n]||IT)return;$u[n]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",l=EI().prod.length>0;function c(){const b=document.getElementById(s);b&&b.remove()}function d(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function p(b,x){b.setAttribute("width","24"),b.setAttribute("id",x),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function g(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{IT=!0,c()},b}function y(b,x){b.setAttribute("id",x),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=TI(s),x=t("text"),U=document.getElementById(x)||document.createElement("span"),F=t("learnmore"),G=document.getElementById(F)||document.createElement("a"),ae=t("preprendIcon"),ie=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const le=b.element;d(le),y(G,F);const _e=g();p(ie,ae),le.append(ie,U,G,_e),document.body.appendChild(le)}l?(U.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function E_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function bI(){const n=gd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AI(){const n=An();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CI(){return Yw.NODE_ADMIN===!0}function RI(){return!bI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function II(){try{return typeof indexedDB=="object"}catch{return!1}}function NI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="FirebaseError";class Ys extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=xI,Object.setPrototypeOf(this,Ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ac.prototype.create)}}class Ac{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?DI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ys(a,d,s)}}function DI(n,e){return n.replace(OI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const OI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){return JSON.parse(n)}function un(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=lc(Of(l[0])||""),t=lc(Of(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},MI=function(n){const e=iS(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},kI=function(n){const e=iS(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function al(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Mf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Zi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(NT(l)&&NT(c)){if(!Zi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function NT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const b=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(b<<1|b>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const b=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=b}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function VI(n,e){const t=new LI(n,e);return t.subscribe.bind(t)}class LI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");UI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=sg),a.error===void 0&&(a.error=sg),a.complete===void 0&&(a.complete=sg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sg(){}function ol(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,re(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},_d=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function mt(n){return n&&n._delegate?n._delegate:n}class Vr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ks;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qI(e))try{this.getOrInitializeService({instanceIdentifier:Na})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Na){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Na){return this.instances.has(e)}getOptions(e=Na){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:BI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Na){return this.component?this.component.multipleInstances?e:Na:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BI(n){return n===Na?void 0:n}function qI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const HI={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},GI=Be.INFO,QI={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},YI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=QI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=GI,this._logHandler=YI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const KI=(n,e)=>e.some(t=>n instanceof t);let xT,DT;function $I(){return xT||(xT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XI(){return DT||(DT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sS=new WeakMap,Rg=new WeakMap,rS=new WeakMap,rg=new WeakMap,T_=new WeakMap;function WI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Nr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&sS.set(t,n)}).catch(()=>{}),T_.set(e,n),e}function ZI(n){if(Rg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Rg.set(n,e)}let Ig={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Rg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function JI(n){Ig=n(Ig)}function eN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ag(this),e,...t);return rS.set(s,e.sort?e.sort():[e]),Nr(s)}:XI().includes(n)?function(...e){return n.apply(ag(this),e),Nr(sS.get(this))}:function(...e){return Nr(n.apply(ag(this),e))}}function tN(n){return typeof n=="function"?eN(n):(n instanceof IDBTransaction&&ZI(n),KI(n,$I())?new Proxy(n,Ig):n)}function Nr(n){if(n instanceof IDBRequest)return WI(n);if(rg.has(n))return rg.get(n);const e=tN(n);return e!==n&&(rg.set(n,e),T_.set(e,n)),e}const ag=n=>T_.get(n);function nN(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Nr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Nr(c.result),p.oldVersion,p.newVersion,Nr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const iN=["get","getKey","getAll","getAllKeys","count"],sN=["put","add","delete","clear"],og=new Map;function OT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(og.get(e))return og.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=sN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||iN.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return og.set(e,l),l}JI(n=>({...n,get:(e,t,s)=>OT(e,t)||n.get(e,t,s),has:(e,t)=>!!OT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function aN(n){return n.getComponent()?.type==="VERSION"}const Ng="@firebase/app",MT="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new yd("@firebase/app"),oN="@firebase/app-compat",lN="@firebase/analytics-compat",uN="@firebase/analytics",cN="@firebase/app-check-compat",hN="@firebase/app-check",fN="@firebase/auth",dN="@firebase/auth-compat",mN="@firebase/database",pN="@firebase/data-connect",gN="@firebase/database-compat",_N="@firebase/functions",yN="@firebase/functions-compat",vN="@firebase/installations",EN="@firebase/installations-compat",TN="@firebase/messaging",bN="@firebase/messaging-compat",wN="@firebase/performance",SN="@firebase/performance-compat",AN="@firebase/remote-config",CN="@firebase/remote-config-compat",RN="@firebase/storage",IN="@firebase/storage-compat",NN="@firebase/firestore",xN="@firebase/ai",DN="@firebase/firestore-compat",ON="firebase",MN="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="[DEFAULT]",kN={[Ng]:"fire-core",[oN]:"fire-core-compat",[uN]:"fire-analytics",[lN]:"fire-analytics-compat",[hN]:"fire-app-check",[cN]:"fire-app-check-compat",[fN]:"fire-auth",[dN]:"fire-auth-compat",[mN]:"fire-rtdb",[pN]:"fire-data-connect",[gN]:"fire-rtdb-compat",[_N]:"fire-fn",[yN]:"fire-fn-compat",[vN]:"fire-iid",[EN]:"fire-iid-compat",[TN]:"fire-fcm",[bN]:"fire-fcm-compat",[wN]:"fire-perf",[SN]:"fire-perf-compat",[AN]:"fire-rc",[CN]:"fire-rc-compat",[RN]:"fire-gcs",[IN]:"fire-gcs-compat",[NN]:"fire-fst",[DN]:"fire-fst-compat",[xN]:"fire-vertex","fire-js":"fire-js",[ON]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map,PN=new Map,Dg=new Map;function kT(n,e){try{n.container.addComponent(e)}catch(t){Bs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ja(n){const e=n.name;if(Dg.has(e))return Bs.debug(`There were multiple attempts to register component ${e}.`),!1;Dg.set(e,n);for(const t of Pf.values())kT(t,n);for(const t of PN.values())kT(t,n);return!0}function vd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Ac("app","Firebase",VN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=MN;function aS(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:xg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw xr.create("bad-app-name",{appName:String(a)});if(t||(t=Jw()),!t)throw xr.create("no-options");const l=Pf.get(a);if(l){if(Zi(t,l.options)&&Zi(s,l.config))return l;throw xr.create("duplicate-app",{appName:a})}const c=new FI(a);for(const p of Dg.values())c.addComponent(p);const d=new LN(t,s,c);return Pf.set(a,d),d}function b_(n=xg){const e=Pf.get(n);if(!e&&n===xg&&Jw())return aS();if(!e)throw xr.create("no-app",{appName:n});return e}function Qi(n,e,t){let s=kN[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bs.warn(c.join(" "));return}ja(new Vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const UN="firebase-heartbeat-database",jN=1,uc="firebase-heartbeat-store";let lg=null;function oS(){return lg||(lg=nN(UN,jN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(uc)}catch(t){console.warn(t)}}}}).catch(n=>{throw xr.create("idb-open",{originalErrorMessage:n.message})})),lg}async function zN(n){try{const t=(await oS()).transaction(uc),s=await t.objectStore(uc).get(lS(n));return await t.done,s}catch(e){if(e instanceof Ys)Bs.warn(e.message);else{const t=xr.create("idb-get",{originalErrorMessage:e?.message});Bs.warn(t.message)}}}async function PT(n,e){try{const s=(await oS()).transaction(uc,"readwrite");await s.objectStore(uc).put(e,lS(n)),await s.done}catch(t){if(t instanceof Ys)Bs.warn(t.message);else{const s=xr.create("idb-set",{originalErrorMessage:t?.message});Bs.warn(s.message)}}}function lS(n){return`${n.name}!${n.options.appId}`}/**
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
 */const BN=1024,qN=30;class FN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=VT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>qN){const a=QN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Bs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=VT(),{heartbeatsToSend:t,unsentEntries:s}=HN(this._heartbeatsCache.heartbeats),a=Df(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Bs.warn(e),""}}}function VT(){return new Date().toISOString().substring(0,10)}function HN(n,e=BN){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),LT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),LT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class GN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return II()?NI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return PT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return PT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function LT(n){return Df(JSON.stringify({version:2,heartbeats:n})).length}function QN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(n){ja(new Vr("platform-logger",e=>new rN(e),"PRIVATE")),ja(new Vr("heartbeat",e=>new FN(e),"PRIVATE")),Qi(Ng,MT,n),Qi(Ng,MT,"esm2020"),Qi("fire-js","")}YN("");var KN="firebase",$N="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi(KN,$N,"app");function uS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XN=uS,cS=new Ac("auth","Firebase",uS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new yd("@firebase/auth");function WN(n,...e){Vf.logLevel<=Be.WARN&&Vf.warn(`Auth (${Ka}): ${n}`,...e)}function Ef(n,...e){Vf.logLevel<=Be.ERROR&&Vf.error(`Auth (${Ka}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,...e){throw S_(n,...e)}function Si(n,...e){return S_(n,...e)}function w_(n,e,t){const s={...XN(),[e]:t};return new Ac("auth","Firebase",s).create(e,{appName:n.name})}function Dr(n){return w_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ji(n,"argument-error"),w_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function S_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return cS.create(n,...e)}function Ae(n,e,...t){if(!n)throw S_(e,...t)}function Vs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ef(e),new Error(e)}function qs(n,e){n||Vs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){return typeof self<"u"&&self.location?.href||""}function JN(){return UT()==="http:"||UT()==="https:"}function UT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JN()||SI()||"connection"in navigator)?navigator.onLine:!0}function tx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t){this.shortDelay=e,this.longDelay=t,qs(t>e,"Short delay should be less than long delay!"),this.isMobile=E_()||nS()}get(){return ex()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n,e){qs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sx=new Cc(3e4,6e4);function Ed(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function wl(n,e,t,s,a={}){return fS(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=bl({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return wI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Gr(n.emulatorConfig.host)&&(g.credentials="include"),hS.fetch()(await mS(n,n.config.apiHost,t,d),g)})}async function fS(n,e,t){n._canInitEmulator=!1;const s={...nx,...e};try{const a=new rx(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw ff(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ff(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw ff(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw ff(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw w_(n,y,g);Ji(n,y)}}catch(a){if(a instanceof Ys)throw a;Ji(n,"network-request-failed",{message:String(a)})}}async function dS(n,e,t,s,a={}){const l=await wl(n,e,t,s,a);return"mfaPendingCredential"in l&&Ji(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function mS(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?A_(n.config,a):`${n.config.apiScheme}://${a}`;return ix.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class rx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Si(this.auth,"network-request-failed")),sx.get())})}}function ff(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Si(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(n,e){return wl(n,"POST","/v1/accounts:delete",e)}async function Lf(n,e){return wl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ox(n,e=!1){const t=mt(n),s=await t.getIdToken(e),a=C_(s);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Xu(ug(a.auth_time)),issuedAtTime:Xu(ug(a.iat)),expirationTime:Xu(ug(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ug(n){return Number(n)*1e3}function C_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ef("JWT malformed, contained fewer than 3 sections"),null;try{const a=Of(t);return a?JSON.parse(a):(Ef("Failed to decode base64 JWT payload"),null)}catch(a){return Ef("Caught error parsing JWT payload as JSON",a?.toString()),null}}function jT(n){const e=C_(n);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ys&&lx(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function lx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xu(this.lastLoginAt),this.creationTime=Xu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uf(n){const e=n.auth,t=await n.getIdToken(),s=await cc(n,Lf(e,{idToken:t}));Ae(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?pS(a.providerUserInfo):[],c=hx(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Mg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function cx(n){const e=mt(n);await Uf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hx(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function pS(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(n,e){const t=await fS(n,{},async()=>{const s=bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await mS(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Gr(n.emulatorConfig.host)&&(p.credentials="include"),hS.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dx(n,e){return wl(n,"POST","/v2/accounts:revokeToken",Ed(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=jT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await fx(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Jo;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jo,this.toJSON())}_performRefresh(){return Vs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n,e){Ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Mg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await cc(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ox(this,e)}reload(){return cx(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(Dr(this.auth));const e=await this.getIdToken();return await cc(this,ax(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:b,isAnonymous:x,providerData:U,stsTokenManager:F}=t;Ae(T&&F,e,"internal-error");const G=Jo.fromJSON(this.name,F);Ae(typeof T=="string",e,"internal-error"),Sr(s,e.name),Sr(a,e.name),Ae(typeof b=="boolean",e,"internal-error"),Ae(typeof x=="boolean",e,"internal-error"),Sr(l,e.name),Sr(c,e.name),Sr(d,e.name),Sr(p,e.name),Sr(g,e.name),Sr(y,e.name);const ae=new bi({uid:T,auth:e,email:a,emailVerified:b,displayName:s,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:G,createdAt:g,lastLoginAt:y});return U&&Array.isArray(U)&&(ae.providerData=U.map(ie=>({...ie}))),p&&(ae._redirectEventId=p),ae}static async _fromIdTokenResponse(e,t,s=!1){const a=new Jo;a.updateFromServerResponse(t);const l=new bi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Uf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?pS(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Jo;d.updateFromIdToken(s);const p=new bi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Mg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=new Map;function Ls(n){qs(n instanceof Function,"Expected a class definition");let e=zT.get(n);return e?(qs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gS.type="NONE";const BT=gS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n,e,t){return`firebase:${n}:${e}:${t}`}class el{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Tf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Tf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lf(this.auth,{idToken:e}).catch(()=>{});return t?bi._fromGetAccountInfoResponse(this.auth,t,e):null}return bi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new el(Ls(BT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ls(BT);const c=Tf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const b=await Lf(e,{idToken:y}).catch(()=>{});if(!b)break;T=await bi._fromGetAccountInfoResponse(e,b,y)}else T=bi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new el(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new el(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ES(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_S(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bS(e))return"Blackberry";if(wS(e))return"Webos";if(yS(e))return"Safari";if((e.includes("chrome/")||vS(e))&&!e.includes("edge/"))return"Chrome";if(TS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function _S(n=An()){return/firefox\//i.test(n)}function yS(n=An()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vS(n=An()){return/crios\//i.test(n)}function ES(n=An()){return/iemobile/i.test(n)}function TS(n=An()){return/android/i.test(n)}function bS(n=An()){return/blackberry/i.test(n)}function wS(n=An()){return/webos/i.test(n)}function R_(n=An()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mx(n=An()){return R_(n)&&!!window.navigator?.standalone}function px(){return AI()&&document.documentMode===10}function SS(n=An()){return R_(n)||TS(n)||wS(n)||bS(n)||/windows phone/i.test(n)||ES(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(n,e=[]){let t;switch(n){case"Browser":t=qT(An());break;case"Worker":t=`${qT(An())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ka}/${s}`}/**
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
 */class gx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function _x(n,e={}){return wl(n,"GET","/v2/passwordPolicy",Ed(n,e))}/**
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
 */const yx=6;class vx{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??yx,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new FT(this),this.idTokenSubscription=new FT(this),this.beforeStateQueue=new gx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ls(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await el.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lf(this,{idToken:e}),s=await bi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Wn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(Dr(this));const t=e?mt(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(Dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(Dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ls(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _x(this),t=new vx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ac("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await dx(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ls(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await el.create(this,[Ls(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&WN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Rc(n){return mt(n)}class FT{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tx(n){I_=n}function bx(n){return I_.loadJS(n)}function wx(){return I_.gapiScript}function Sx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(n,e){const t=vd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Zi(l,e??{}))return a;Ji(a,"already-initialized")}return t.initialize({options:e})}function Cx(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ls);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function Rx(n,e,t){const s=Rc(n);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=CS(e),{host:c,port:d}=Ix(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(Zi(g,s.config.emulator)&&Zi(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Gr(c)?(y_(`${l}//${c}${p}`),v_("Auth",!0)):Nx()}function CS(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ix(n){const e=CS(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:HT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:HT(c)}}}function HT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Nx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vs("not implemented")}_getIdTokenResponse(e){return Vs("not implemented")}_linkToIdToken(e,t){return Vs("not implemented")}_getReauthenticationResolver(e){return Vs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(n,e){return dS(n,"POST","/v1/accounts:signInWithIdp",Ed(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx="http://localhost";class za extends RS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new za(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ji("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new za(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return tl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,tl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tl(e,t)}buildRequest(){const e={requestUri:xx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends N_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Ic{constructor(){super("facebook.com")}static credential(e){return za._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Ic{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return za._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ps.credential(t,s)}catch{return null}}}Ps.GOOGLE_SIGN_IN_METHOD="google.com";Ps.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Ic{constructor(){super("github.com")}static credential(e){return za._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Ic{constructor(){super("twitter.com")}static credential(e,t){return za._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Rr.credential(t,s)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await bi._fromIdTokenResponse(e,s,a),c=GT(s);return new Ba({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=GT(s);return new Ba({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function GT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends Ys{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,jf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new jf(e,t,s,a)}}function IS(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?jf._fromErrorAndOperation(n,l,e,s):l})}async function Dx(n,e,t=!1){const s=await cc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ba._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(n,e,t=!1){const{auth:s}=n;if(Wn(s.app))return Promise.reject(Dr(s));const a="reauthenticate";try{const l=await cc(n,IS(s,a,e,n),t);Ae(l.idToken,s,"internal-error");const c=C_(l.idToken);Ae(c,s,"internal-error");const{sub:d}=c;return Ae(n.uid===d,s,"user-mismatch"),Ba._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ji(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(n,e,t=!1){if(Wn(n.app))return Promise.reject(Dr(n));const s="signIn",a=await IS(n,s,e),l=await Ba._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(n,e){return dS(n,"POST","/v1/accounts:signInWithCustomToken",Ed(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(n,e){if(Wn(n.app))return Promise.reject(Dr(n));const t=Rc(n),s=await kx(t,{token:e,returnSecureToken:!0}),a=await Ba._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function Vx(n,e,t,s){return mt(n).onIdTokenChanged(e,t,s)}function Lx(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function Ux(n,e,t,s){return mt(n).onAuthStateChanged(e,t,s)}function jx(n){return mt(n).signOut()}const zf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zf,"1"),this.storage.removeItem(zf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=1e3,Bx=10;class xS extends NS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=SS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);px()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Bx):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xS.type="LOCAL";const qx=xS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS extends NS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}DS.type="SESSION";const OS=DS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Td(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await Fx(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Td.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=x_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const b=T;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(b.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return window}function Gx(n){Yi().location.href=n}/**
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
 */function MS(){return typeof Yi().WorkerGlobalScope<"u"&&typeof Yi().importScripts=="function"}async function Qx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yx(){return navigator?.serviceWorker?.controller||null}function Kx(){return MS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebaseLocalStorageDb",$x=1,Bf="firebaseLocalStorage",PS="fbase_key";class Nc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bd(n,e){return n.transaction([Bf],e?"readwrite":"readonly").objectStore(Bf)}function Xx(){const n=indexedDB.deleteDatabase(kS);return new Nc(n).toPromise()}function kg(){const n=indexedDB.open(kS,$x);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Bf,{keyPath:PS})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Bf)?e(s):(s.close(),await Xx(),e(await kg()))})})}async function QT(n,e,t){const s=bd(n,!0).put({[PS]:e,value:t});return new Nc(s).toPromise()}async function Wx(n,e){const t=bd(n,!1).get(e),s=await new Nc(t).toPromise();return s===void 0?null:s.value}function YT(n,e){const t=bd(n,!0).delete(e);return new Nc(t).toPromise()}const Zx=800,Jx=3;class VS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Jx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Td._getInstance(Kx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Qx(),!this.activeServiceWorker)return;this.sender=new Hx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kg();return await QT(e,zf,"1"),await YT(e,zf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>QT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Wx(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>YT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=bd(a,!1).getAll();return new Nc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VS.type="LOCAL";const e2=VS;new Cc(3e4,6e4);/**
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
 */function LS(n,e){return e?Ls(e):(Ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_ extends RS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function t2(n){return Mx(n.auth,new D_(n),n.bypassAuthState)}function n2(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),Ox(t,new D_(n),n.bypassAuthState)}async function i2(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),Dx(t,new D_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t2;case"linkViaPopup":case"linkViaRedirect":return i2;case"reauthViaPopup":case"reauthViaRedirect":return n2;default:Ji(this.auth,"internal-error")}}resolve(e){qs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new Cc(2e3,1e4);async function r2(n,e,t){if(Wn(n.app))return Promise.reject(Si(n,"operation-not-supported-in-this-environment"));const s=Rc(n);ZN(n,e,N_);const a=LS(s,t);return new Da(s,"signInViaPopup",e,a).executeNotNull()}class Da extends US{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Da.currentPopupAction&&Da.currentPopupAction.cancel(),Da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){qs(this.filter.length===1,"Popup operations only handle one event");const e=x_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Si(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Si(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Da.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Si(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s2.get())};e()}}Da.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="pendingRedirect",bf=new Map;class o2 extends US{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=bf.get(this.auth._key());if(!e){try{const s=await l2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}bf.set(this.auth._key(),e)}return this.bypassAuthState||bf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l2(n,e){const t=h2(e),s=c2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function u2(n,e){bf.set(n._key(),e)}function c2(n){return Ls(n._redirectPersistence)}function h2(n){return Tf(a2,n.config.apiKey,n.name)}async function f2(n,e,t=!1){if(Wn(n.app))return Promise.reject(Dr(n));const s=Rc(n),a=LS(s,e),c=await new o2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=600*1e3;class m2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!jS(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Si(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d2&&this.cachedEventUids.clear(),this.cachedEventUids.has(KT(e))}saveEventToCache(e){this.cachedEventUids.add(KT(e)),this.lastProcessedEventTime=Date.now()}}function KT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jS({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function p2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jS(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2(n,e={}){return wl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y2=/^https?/;async function v2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await g2(n);for(const t of e)try{if(E2(t))return}catch{}Ji(n,"unauthorized-domain")}function E2(n){const e=Og(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!y2.test(t))return!1;if(_2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const T2=new Cc(3e4,6e4);function $T(){const n=Yi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function b2(n){return new Promise((e,t)=>{function s(){$T(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$T(),t(Si(n,"network-request-failed"))},timeout:T2.get()})}if(Yi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Yi().gapi?.load)s();else{const a=Sx("iframefcb");return Yi()[a]=()=>{gapi.load?s():t(Si(n,"network-request-failed"))},bx(`${wx()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw wf=null,e})}let wf=null;function w2(n){return wf=wf||b2(n),wf}/**
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
 */const S2=new Cc(5e3,15e3),A2="__/auth/iframe",C2="emulator/auth/iframe",R2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N2(n){const e=n.config;Ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?A_(e,C2):`https://${n.config.authDomain}/${A2}`,s={apiKey:e.apiKey,appName:n.name,v:Ka},a=I2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${bl(s).slice(1)}`}async function x2(n){const e=await w2(n),t=Yi().gapi;return Ae(t,n,"internal-error"),e.open({where:document.body,url:N2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Si(n,"network-request-failed"),d=Yi().setTimeout(()=>{l(c)},S2.get());function p(){Yi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const D2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},O2=500,M2=600,k2="_blank",P2="http://localhost";class XT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V2(n,e,t,s=O2,a=M2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...D2,width:s.toString(),height:a.toString(),top:l,left:c},g=An().toLowerCase();t&&(d=vS(g)?k2:t),_S(g)&&(e=e||P2,p.scrollbars="yes");const y=Object.entries(p).reduce((b,[x,U])=>`${b}${x}=${U},`,"");if(mx(g)&&d!=="_self")return L2(e||"",d),new XT(null);const T=window.open(e||"",d,y);Ae(T,n,"popup-blocked");try{T.focus()}catch{}return new XT(T)}function L2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const U2="__/auth/handler",j2="emulator/auth/handler",z2=encodeURIComponent("fac");async function WT(n,e,t,s,a,l){Ae(n.config.authDomain,n,"auth-domain-config-required"),Ae(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ka,eventId:a};if(e instanceof N_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Mf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof Ic){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${z2}=${encodeURIComponent(p)}`:"";return`${B2(n)}?${bl(d).slice(1)}${g}`}function B2({config:n}){return n.emulator?A_(n,j2):`https://${n.authDomain}/${U2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="webStorageSupport";class q2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OS,this._completeRedirectFn=f2,this._overrideRedirectResult=u2}async _openPopup(e,t,s,a){qs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await WT(e,t,s,Og(),a);return V2(e,l,x_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await WT(e,t,s,Og(),a);return Gx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(qs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await x2(e),s=new m2(e);return t.register("authEvent",a=>(Ae(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cg,{type:cg},a=>{const l=a?.[0]?.[cg];l!==void 0&&t(!!l),Ji(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=v2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return SS()||yS()||R_()}}const F2=q2;var ZT="@firebase/auth",JT="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q2(n){ja(new Vr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AS(n)},g=new Ex(s,a,l,p);return Cx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ja(new Vr("auth-internal",e=>{const t=Rc(e.getProvider("auth").getImmediate());return(s=>new H2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qi(ZT,JT,G2(n)),Qi(ZT,JT,"esm2020")}/**
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
 */const Y2=300,K2=eS("authIdTokenMaxAge")||Y2;let eb=null;const $2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>K2)return;const a=t?.token;eb!==a&&(eb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function X2(n=b_()){const e=vd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ax(n,{popupRedirectResolver:F2,persistence:[e2,qx,OS]}),s=eS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=$2(l.toString());Lx(t,c,()=>c(t.currentUser)),Vx(t,d=>c(d))}}const a=Ww("auth");return a&&Rx(t,`http://${a}`),t}function W2(){return document.getElementsByTagName("head")?.[0]??document}Tx({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=Si("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",W2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q2("Browser");var tb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,zS;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,C){function N(){}N.prototype=C.prototype,P.D=C.prototype,P.prototype=new N,P.prototype.constructor=P,P.C=function(M,k,L){for(var R=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)R[Ht-2]=arguments[Ht];return C.prototype[k].apply(M,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,C,N){N||(N=0);var M=Array(16);if(typeof C=="string")for(var k=0;16>k;++k)M[k]=C.charCodeAt(N++)|C.charCodeAt(N++)<<8|C.charCodeAt(N++)<<16|C.charCodeAt(N++)<<24;else for(k=0;16>k;++k)M[k]=C[N++]|C[N++]<<8|C[N++]<<16|C[N++]<<24;C=P.g[0],N=P.g[1],k=P.g[2];var L=P.g[3],R=C+(L^N&(k^L))+M[0]+3614090360&4294967295;C=N+(R<<7&4294967295|R>>>25),R=L+(k^C&(N^k))+M[1]+3905402710&4294967295,L=C+(R<<12&4294967295|R>>>20),R=k+(N^L&(C^N))+M[2]+606105819&4294967295,k=L+(R<<17&4294967295|R>>>15),R=N+(C^k&(L^C))+M[3]+3250441966&4294967295,N=k+(R<<22&4294967295|R>>>10),R=C+(L^N&(k^L))+M[4]+4118548399&4294967295,C=N+(R<<7&4294967295|R>>>25),R=L+(k^C&(N^k))+M[5]+1200080426&4294967295,L=C+(R<<12&4294967295|R>>>20),R=k+(N^L&(C^N))+M[6]+2821735955&4294967295,k=L+(R<<17&4294967295|R>>>15),R=N+(C^k&(L^C))+M[7]+4249261313&4294967295,N=k+(R<<22&4294967295|R>>>10),R=C+(L^N&(k^L))+M[8]+1770035416&4294967295,C=N+(R<<7&4294967295|R>>>25),R=L+(k^C&(N^k))+M[9]+2336552879&4294967295,L=C+(R<<12&4294967295|R>>>20),R=k+(N^L&(C^N))+M[10]+4294925233&4294967295,k=L+(R<<17&4294967295|R>>>15),R=N+(C^k&(L^C))+M[11]+2304563134&4294967295,N=k+(R<<22&4294967295|R>>>10),R=C+(L^N&(k^L))+M[12]+1804603682&4294967295,C=N+(R<<7&4294967295|R>>>25),R=L+(k^C&(N^k))+M[13]+4254626195&4294967295,L=C+(R<<12&4294967295|R>>>20),R=k+(N^L&(C^N))+M[14]+2792965006&4294967295,k=L+(R<<17&4294967295|R>>>15),R=N+(C^k&(L^C))+M[15]+1236535329&4294967295,N=k+(R<<22&4294967295|R>>>10),R=C+(k^L&(N^k))+M[1]+4129170786&4294967295,C=N+(R<<5&4294967295|R>>>27),R=L+(N^k&(C^N))+M[6]+3225465664&4294967295,L=C+(R<<9&4294967295|R>>>23),R=k+(C^N&(L^C))+M[11]+643717713&4294967295,k=L+(R<<14&4294967295|R>>>18),R=N+(L^C&(k^L))+M[0]+3921069994&4294967295,N=k+(R<<20&4294967295|R>>>12),R=C+(k^L&(N^k))+M[5]+3593408605&4294967295,C=N+(R<<5&4294967295|R>>>27),R=L+(N^k&(C^N))+M[10]+38016083&4294967295,L=C+(R<<9&4294967295|R>>>23),R=k+(C^N&(L^C))+M[15]+3634488961&4294967295,k=L+(R<<14&4294967295|R>>>18),R=N+(L^C&(k^L))+M[4]+3889429448&4294967295,N=k+(R<<20&4294967295|R>>>12),R=C+(k^L&(N^k))+M[9]+568446438&4294967295,C=N+(R<<5&4294967295|R>>>27),R=L+(N^k&(C^N))+M[14]+3275163606&4294967295,L=C+(R<<9&4294967295|R>>>23),R=k+(C^N&(L^C))+M[3]+4107603335&4294967295,k=L+(R<<14&4294967295|R>>>18),R=N+(L^C&(k^L))+M[8]+1163531501&4294967295,N=k+(R<<20&4294967295|R>>>12),R=C+(k^L&(N^k))+M[13]+2850285829&4294967295,C=N+(R<<5&4294967295|R>>>27),R=L+(N^k&(C^N))+M[2]+4243563512&4294967295,L=C+(R<<9&4294967295|R>>>23),R=k+(C^N&(L^C))+M[7]+1735328473&4294967295,k=L+(R<<14&4294967295|R>>>18),R=N+(L^C&(k^L))+M[12]+2368359562&4294967295,N=k+(R<<20&4294967295|R>>>12),R=C+(N^k^L)+M[5]+4294588738&4294967295,C=N+(R<<4&4294967295|R>>>28),R=L+(C^N^k)+M[8]+2272392833&4294967295,L=C+(R<<11&4294967295|R>>>21),R=k+(L^C^N)+M[11]+1839030562&4294967295,k=L+(R<<16&4294967295|R>>>16),R=N+(k^L^C)+M[14]+4259657740&4294967295,N=k+(R<<23&4294967295|R>>>9),R=C+(N^k^L)+M[1]+2763975236&4294967295,C=N+(R<<4&4294967295|R>>>28),R=L+(C^N^k)+M[4]+1272893353&4294967295,L=C+(R<<11&4294967295|R>>>21),R=k+(L^C^N)+M[7]+4139469664&4294967295,k=L+(R<<16&4294967295|R>>>16),R=N+(k^L^C)+M[10]+3200236656&4294967295,N=k+(R<<23&4294967295|R>>>9),R=C+(N^k^L)+M[13]+681279174&4294967295,C=N+(R<<4&4294967295|R>>>28),R=L+(C^N^k)+M[0]+3936430074&4294967295,L=C+(R<<11&4294967295|R>>>21),R=k+(L^C^N)+M[3]+3572445317&4294967295,k=L+(R<<16&4294967295|R>>>16),R=N+(k^L^C)+M[6]+76029189&4294967295,N=k+(R<<23&4294967295|R>>>9),R=C+(N^k^L)+M[9]+3654602809&4294967295,C=N+(R<<4&4294967295|R>>>28),R=L+(C^N^k)+M[12]+3873151461&4294967295,L=C+(R<<11&4294967295|R>>>21),R=k+(L^C^N)+M[15]+530742520&4294967295,k=L+(R<<16&4294967295|R>>>16),R=N+(k^L^C)+M[2]+3299628645&4294967295,N=k+(R<<23&4294967295|R>>>9),R=C+(k^(N|~L))+M[0]+4096336452&4294967295,C=N+(R<<6&4294967295|R>>>26),R=L+(N^(C|~k))+M[7]+1126891415&4294967295,L=C+(R<<10&4294967295|R>>>22),R=k+(C^(L|~N))+M[14]+2878612391&4294967295,k=L+(R<<15&4294967295|R>>>17),R=N+(L^(k|~C))+M[5]+4237533241&4294967295,N=k+(R<<21&4294967295|R>>>11),R=C+(k^(N|~L))+M[12]+1700485571&4294967295,C=N+(R<<6&4294967295|R>>>26),R=L+(N^(C|~k))+M[3]+2399980690&4294967295,L=C+(R<<10&4294967295|R>>>22),R=k+(C^(L|~N))+M[10]+4293915773&4294967295,k=L+(R<<15&4294967295|R>>>17),R=N+(L^(k|~C))+M[1]+2240044497&4294967295,N=k+(R<<21&4294967295|R>>>11),R=C+(k^(N|~L))+M[8]+1873313359&4294967295,C=N+(R<<6&4294967295|R>>>26),R=L+(N^(C|~k))+M[15]+4264355552&4294967295,L=C+(R<<10&4294967295|R>>>22),R=k+(C^(L|~N))+M[6]+2734768916&4294967295,k=L+(R<<15&4294967295|R>>>17),R=N+(L^(k|~C))+M[13]+1309151649&4294967295,N=k+(R<<21&4294967295|R>>>11),R=C+(k^(N|~L))+M[4]+4149444226&4294967295,C=N+(R<<6&4294967295|R>>>26),R=L+(N^(C|~k))+M[11]+3174756917&4294967295,L=C+(R<<10&4294967295|R>>>22),R=k+(C^(L|~N))+M[2]+718787259&4294967295,k=L+(R<<15&4294967295|R>>>17),R=N+(L^(k|~C))+M[9]+3951481745&4294967295,P.g[0]=P.g[0]+C&4294967295,P.g[1]=P.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+L&4294967295}s.prototype.u=function(P,C){C===void 0&&(C=P.length);for(var N=C-this.blockSize,M=this.B,k=this.h,L=0;L<C;){if(k==0)for(;L<=N;)a(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<C;)if(M[k++]=P.charCodeAt(L++),k==this.blockSize){a(this,M),k=0;break}}else for(;L<C;)if(M[k++]=P[L++],k==this.blockSize){a(this,M),k=0;break}}this.h=k,this.o+=C},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var C=1;C<P.length-8;++C)P[C]=0;var N=8*this.o;for(C=P.length-8;C<P.length;++C)P[C]=N&255,N/=256;for(this.u(P),P=Array(16),C=N=0;4>C;++C)for(var M=0;32>M;M+=8)P[N++]=this.g[C]>>>M&255;return P};function l(P,C){var N=d;return Object.prototype.hasOwnProperty.call(N,P)?N[P]:N[P]=C(P)}function c(P,C){this.h=C;for(var N=[],M=!0,k=P.length-1;0<=k;k--){var L=P[k]|0;M&&L==C||(N[k]=L,M=!1)}this.g=N}var d={};function p(P){return-128<=P&&128>P?l(P,function(C){return new c([C|0],0>C?-1:0)}):new c([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return G(g(-P));for(var C=[],N=1,M=0;P>=N;M++)C[M]=P/N|0,N*=4294967296;return new c(C,0)}function y(P,C){if(P.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P.charAt(0)=="-")return G(y(P.substring(1),C));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=g(Math.pow(C,8)),M=T,k=0;k<P.length;k+=8){var L=Math.min(8,P.length-k),R=parseInt(P.substring(k,k+L),C);8>L?(L=g(Math.pow(C,L)),M=M.j(L).add(g(R))):(M=M.j(N),M=M.add(g(R)))}return M}var T=p(0),b=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(F(this))return-G(this).m();for(var P=0,C=1,N=0;N<this.g.length;N++){var M=this.i(N);P+=(0<=M?M:4294967296+M)*C,C*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(U(this))return"0";if(F(this))return"-"+G(this).toString(P);for(var C=g(Math.pow(P,6)),N=this,M="";;){var k=_e(N,C).g;N=ae(N,k.j(C));var L=((0<N.g.length?N.g[0]:N.h)>>>0).toString(P);if(N=k,U(N))return L+M;for(;6>L.length;)L="0"+L;M=L+M}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function U(P){if(P.h!=0)return!1;for(var C=0;C<P.g.length;C++)if(P.g[C]!=0)return!1;return!0}function F(P){return P.h==-1}n.l=function(P){return P=ae(this,P),F(P)?-1:U(P)?0:1};function G(P){for(var C=P.g.length,N=[],M=0;M<C;M++)N[M]=~P.g[M];return new c(N,~P.h).add(b)}n.abs=function(){return F(this)?G(this):this},n.add=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],M=0,k=0;k<=C;k++){var L=M+(this.i(k)&65535)+(P.i(k)&65535),R=(L>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);M=R>>>16,L&=65535,R&=65535,N[k]=R<<16|L}return new c(N,N[N.length-1]&-2147483648?-1:0)};function ae(P,C){return P.add(G(C))}n.j=function(P){if(U(this)||U(P))return T;if(F(this))return F(P)?G(this).j(G(P)):G(G(this).j(P));if(F(P))return G(this.j(G(P)));if(0>this.l(x)&&0>P.l(x))return g(this.m()*P.m());for(var C=this.g.length+P.g.length,N=[],M=0;M<2*C;M++)N[M]=0;for(M=0;M<this.g.length;M++)for(var k=0;k<P.g.length;k++){var L=this.i(M)>>>16,R=this.i(M)&65535,Ht=P.i(k)>>>16,pt=P.i(k)&65535;N[2*M+2*k]+=R*pt,ie(N,2*M+2*k),N[2*M+2*k+1]+=L*pt,ie(N,2*M+2*k+1),N[2*M+2*k+1]+=R*Ht,ie(N,2*M+2*k+1),N[2*M+2*k+2]+=L*Ht,ie(N,2*M+2*k+2)}for(M=0;M<C;M++)N[M]=N[2*M+1]<<16|N[2*M];for(M=C;M<2*C;M++)N[M]=0;return new c(N,0)};function ie(P,C){for(;(P[C]&65535)!=P[C];)P[C+1]+=P[C]>>>16,P[C]&=65535,C++}function le(P,C){this.g=P,this.h=C}function _e(P,C){if(U(C))throw Error("division by zero");if(U(P))return new le(T,T);if(F(P))return C=_e(G(P),C),new le(G(C.g),G(C.h));if(F(C))return C=_e(P,G(C)),new le(G(C.g),C.h);if(30<P.g.length){if(F(P)||F(C))throw Error("slowDivide_ only works with positive integers.");for(var N=b,M=C;0>=M.l(P);)N=de(N),M=de(M);var k=Oe(N,1),L=Oe(M,1);for(M=Oe(M,2),N=Oe(N,2);!U(M);){var R=L.add(M);0>=R.l(P)&&(k=k.add(N),L=R),M=Oe(M,1),N=Oe(N,1)}return C=ae(P,k.j(C)),new le(k,C)}for(k=T;0<=P.l(C);){for(N=Math.max(1,Math.floor(P.m()/C.m())),M=Math.ceil(Math.log(N)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),L=g(N),R=L.j(C);F(R)||0<R.l(P);)N-=M,L=g(N),R=L.j(C);U(L)&&(L=b),k=k.add(L),P=ae(P,R)}return new le(k,P)}n.A=function(P){return _e(this,P).h},n.and=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)&P.i(M);return new c(N,this.h&P.h)},n.or=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)|P.i(M);return new c(N,this.h|P.h)},n.xor=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)^P.i(M);return new c(N,this.h^P.h)};function de(P){for(var C=P.g.length+1,N=[],M=0;M<C;M++)N[M]=P.i(M)<<1|P.i(M-1)>>>31;return new c(N,P.h)}function Oe(P,C){var N=C>>5;C%=32;for(var M=P.g.length-N,k=[],L=0;L<M;L++)k[L]=0<C?P.i(L+N)>>>C|P.i(L+N+1)<<32-C:P.i(L+N);return new c(k,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,zS=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Or=c}).apply(typeof tb<"u"?tb:typeof self<"u"?self:typeof window<"u"?window:{});var df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var BS,Gu,qS,Sf,Pg,FS,HS,GS;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof df=="object"&&df];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var j=h[A];if(!(j in v))break e;v=v[j]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,j={next:function(){if(!A&&v<h.length){var Q=v++;return{value:_(Q,h[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,A),h.apply(_,j)}}return function(){return h.apply(_,arguments)}}function b(h,_,v){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,b.apply(null,arguments)}function x(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function U(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,j,Q){for(var se=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)se[Qe-2]=arguments[Qe];return _.prototype[j].apply(A,se)}}function F(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function G(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const j=h.length||0,Q=A.length||0;h.length=j+Q;for(let se=0;se<Q;se++)h[j+se]=A[se]}else h.push(A)}}class ae{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ie(h){return/^[\s\xa0]*$/.test(h)}function le(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function _e(h){return _e[" "](h),h}_e[" "]=function(){};var de=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function Oe(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function P(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let v,A;for(let j=1;j<arguments.length;j++){A=arguments[j];for(v in A)h[v]=A[v];for(let Q=0;Q<N.length;Q++)v=N[Q],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function k(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function L(h){d.setTimeout(()=>{throw h},0)}function R(){var h=xe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Ht{constructor(){this.h=this.g=null}add(_,v){const A=pt.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var pt=new ae(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let J,ce=!1,xe=new Ht,D=()=>{const h=d.Promise.resolve(void 0);J=()=>{h.then(X)}};var X=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(v){L(v)}var _=pt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ce=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ge=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Me(h,_){if(te.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(de){e:{try{_e(_.nodeName);var j=!0;break e}catch{}j=!1}j||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Me.aa.h.call(this)}}U(Me,te);var be={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),st=0;function Jn(h,_,v,A,j){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=j,this.key=++st,this.da=this.fa=!1}function Ri(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function mi(h){this.src=h,this.g={},this.h=0}mi.prototype.add=function(h,_,v,A,j){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var se=ss(h,_,A,j);return-1<se?(_=h[se],v||(_.fa=!1)):(_=new Jn(_,this.src,Q,!!A,j),_.fa=v,h.push(_)),_};function is(h,_){var v=_.type;if(v in h.g){var A=h.g[v],j=Array.prototype.indexOf.call(A,_,void 0),Q;(Q=0<=j)&&Array.prototype.splice.call(A,j,1),Q&&(Ri(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function ss(h,_,v,A){for(var j=0;j<h.length;++j){var Q=h[j];if(!Q.da&&Q.listener==_&&Q.capture==!!v&&Q.ha==A)return j}return-1}var rs="closure_lm_"+(1e6*Math.random()|0),$r={};function eo(h,_,v,A,j){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)eo(h,_[Q],v,A,j);return null}return v=cn(v),h&&h[kt]?h.K(_,v,g(A)?!!A.capture:!1,j):kn(h,_,v,!1,A,j)}function kn(h,_,v,A,j,Q){if(!_)throw Error("Invalid event type");var se=g(j)?!!j.capture:!!j,Qe=Ce(h);if(Qe||(h[rs]=Qe=new mi(h)),v=Qe.add(_,v,A,se,Q),v.proxy)return v;if(A=$s(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)ge||(j=se),j===void 0&&(j=!1),h.addEventListener(_.toString(),A,j);else if(h.attachEvent)h.attachEvent(os(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function $s(){function h(v){return _.call(h.src,h.listener,v)}const _=me;return h}function as(h,_,v,A,j){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)as(h,_[Q],v,A,j);else A=g(A)?!!A.capture:!!A,v=cn(v),h&&h[kt]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],v=ss(Q,v,A,j),-1<v&&(Ri(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ce(h))&&(_=h.g[_.toString()],h=-1,_&&(h=ss(_,v,A,j)),(v=-1<h?_[h]:null)&&Ii(v))}function Ii(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[kt])is(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(os(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Ce(_))?(is(v,h),v.h==0&&(v.src=null,_[rs]=null)):Ri(h)}}}function os(h){return h in $r?$r[h]:$r[h]="on"+h}function me(h,_){if(h.da)h=!0;else{_=new Me(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Ii(h),h=v.call(A,_)}return h}function Ce(h){return h=h[rs],h instanceof mi?h:null}var qe="__closure_events_fn_"+(1e9*Math.random()>>>0);function cn(h){return typeof h=="function"?h:(h[qe]||(h[qe]=function(_){return h.handleEvent(_)}),h[qe])}function ht(){oe.call(this),this.i=new mi(this),this.M=this,this.F=null}U(ht,oe),ht.prototype[kt]=!0,ht.prototype.removeEventListener=function(h,_,v,A){as(this,h,_,v,A)};function Ge(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new te(_,h);else if(_ instanceof te)_.target=_.target||h;else{var j=_;_=new te(A,h),M(_,j)}if(j=!0,v)for(var Q=v.length-1;0<=Q;Q--){var se=_.g=v[Q];j=gt(se,A,!0,_)&&j}if(se=_.g=h,j=gt(se,A,!0,_)&&j,j=gt(se,A,!1,_)&&j,v)for(Q=0;Q<v.length;Q++)se=_.g=v[Q],j=gt(se,A,!1,_)&&j}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Ri(v[A]);delete h.g[_],h.h--}}this.F=null},ht.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},ht.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function gt(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var j=!0,Q=0;Q<_.length;++Q){var se=_[Q];if(se&&!se.da&&se.capture==v){var Qe=se.listener,Qt=se.ha||se.src;se.fa&&is(h.i,se),j=Qe.call(Qt,A)!==!1&&j}}return j&&!A.defaultPrevented}function Zt(h,_,v){if(typeof h=="function")v&&(h=b(h,v));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Ml(h){h.g=Zt(()=>{h.g=null,h.i&&(h.i=!1,Ml(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class em extends oe{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ml(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(h){oe.call(this),this.h=h,this.g={}}U(Xr,oe);var Wr=[];function Zr(h){Oe(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ii(_)},h),h.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),Zr(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pi=d.JSON.stringify,to=d.JSON.parse,Jr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function kl(){}kl.prototype.h=null;function Pl(h){return h.h||(h.h=h.i())}function Vl(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){te.call(this,"d")}U(us,te);function Ll(){te.call(this,"c")}U(Ll,te);var Ni={},Ul=null;function Xs(){return Ul=Ul||new ht}Ni.La="serverreachability";function no(h){te.call(this,Ni.La,h)}U(no,te);function Ws(h){const _=Xs();Ge(_,new no(_))}Ni.STAT_EVENT="statevent";function Hc(h,_){te.call(this,Ni.STAT_EVENT,h),this.stat=_}U(Hc,te);function Et(h){const _=Xs();Ge(_,new Hc(_,h))}Ni.Ma="timingevent";function Gt(h,_){te.call(this,Ni.Ma,h),this.size=_}U(Gt,te);function Pt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function ei(){this.g=!0}ei.prototype.xa=function(){this.g=!1};function jl(h,_,v,A,j,Q){h.info(function(){if(h.g)if(Q)for(var se="",Qe=Q.split("&"),Qt=0;Qt<Qe.length;Qt++){var Ye=Qe[Qt].split("=");if(1<Ye.length){var en=Ye[0];Ye=Ye[1];var Yt=en.split("_");se=2<=Yt.length&&Yt[1]=="type"?se+(en+"="+Ye+"&"):se+(en+"=redacted&")}}else se=null;else se=Q;return"XMLHTTP REQ ("+A+") [attempt "+j+"]: "+_+`
`+v+`
`+se})}function tm(h,_,v,A,j,Q,se){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+j+"]: "+_+`
`+v+`
`+Q+" "+se})}function Zs(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ea(h,v)+(A?" "+A:"")})}function Gc(h,_){h.info(function(){return"TIMEOUT: "+_})}ei.prototype.info=function(){};function ea(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var j=A[1];if(Array.isArray(j)&&!(1>j.length)){var Q=j[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var se=1;se<j.length;se++)j[se]=""}}}}return pi(v)}catch{return _}}var Js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xi;function Di(){}U(Di,kl),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},xi=new Di;function Rn(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var zl={},io={};function gi(h,_,v){h.L=1,h.v=ra(Fn(_)),h.m=v,h.P=!0,hs(h,null)}function hs(h,_){h.F=Date.now(),ta(h),h.A=Fn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Ql(v.i,"t",A),h.C=0,v=h.j.J,h.h=new Nt,h.g=oh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new em(b(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Wr[0]=j.toString()),j=Wr);for(var Q=0;Q<j.length;Q++){var se=eo(v,j[Q],A||_.handleEvent,!1,_.h||_);if(!se)break;_.g[se.key]=se}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ws(),jl(h.i,h.u,h.A,h.l,h.R,h.m)}Rn.prototype.ca=function(h){h=h.target;const _=this.M;_&&si(h)==3?_.j():this.Y(h)},Rn.prototype.Y=function(h){try{if(h==this.g)e:{const Yt=si(this.g);var _=this.g.Ba();const vs=this.g.Z();if(!(3>Yt)&&(Yt!=3||this.g&&(this.h.h||this.g.oa()||Jc(this.g)))){this.J||Yt!=4||_==7||(_==8||0>=vs?Ws(3):Ws(2)),er(this);var v=this.g.Z();this.X=v;t:if(Qc(this)){var A=Jc(this.g);h="";var j=A.length,Q=si(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Oi(this);var se="";break t}this.h.i=new d.TextDecoder}for(_=0;_<j;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(Q&&_==j-1)});A.length=0,this.h.g+=h,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,tm(this.i,this.u,this.A,this.l,this.R,Yt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,Qt=this.g;if((Qe=Qt.g?Qt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Qe)){var Ye=Qe;break t}}Ye=null}if(v=Ye)Zs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,na(this,v);else{this.o=!1,this.s=3,Et(12),hn(this),Oi(this);break e}}if(this.P){v=!0;let fn;for(;!this.J&&this.C<se.length;)if(fn=Yc(this,se),fn==io){Yt==4&&(this.s=4,Et(14),v=!1),Zs(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==zl){this.s=4,Et(15),Zs(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else Zs(this.i,this.l,fn,null),na(this,fn);if(Qc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Yt!=4||se.length!=0||this.h.h||(this.s=1,Et(16),v=!1),this.o=this.o&&v,!v)Zs(this.i,this.l,se,"[Invalid Chunked Response]"),hn(this),Oi(this);else if(0<se.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),da(en),en.M=!0,Et(11))}}else Zs(this.i,this.l,se,null),na(this,se);Yt==4&&hn(this),this.o&&!this.J&&(Yt==4?sh(this.j,this):(this.o=!1,ta(this)))}else am(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),hn(this),Oi(this)}}}catch{}finally{}};function Qc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Yc(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?io:(v=Number(_.substring(v,A)),isNaN(v)?zl:(A+=1,A+v>_.length?io:(_=_.slice(A,A+v),h.C=A+v,_)))}Rn.prototype.cancel=function(){this.J=!0,hn(this)};function ta(h){h.S=Date.now()+h.I,Kc(h,h.I)}function Kc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Pt(b(h.ba,h),_)}function er(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Rn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Gc(this.i,this.A),this.L!=2&&(Ws(),Et(17)),hn(this),this.s=2,Oi(this)):Kc(this,this.S-h)};function Oi(h){h.j.G==0||h.J||sh(h.j,h)}function hn(h){er(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Zr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function na(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Bl(v.h,h))){if(!h.K&&Bl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var j=A;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)go(v),mo(v);else break e;Wl(v),Et(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Pt(b(v.Za,v),6e3));if(1>=ro(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ys(v,11)}else if((h.K||v.g==h)&&go(v),!ie(_))for(j=v.Da.g.parse(_),_=0;_<j.length;_++){let Ye=j[_];if(v.T=Ye[0],Ye=Ye[1],v.G==2)if(Ye[0]=="c"){v.K=Ye[1],v.ia=Ye[2];const en=Ye[3];en!=null&&(v.la=en,v.j.info("VER="+v.la));const Yt=Ye[4];Yt!=null&&(v.Aa=Yt,v.j.info("SVER="+v.Aa));const vs=Ye[5];vs!=null&&typeof vs=="number"&&0<vs&&(A=1.5*vs,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const fn=h.g;if(fn){const ji=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var Q=A.h;Q.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ao(Q,Q.h),Q.h=null))}if(A.D){const Jl=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jl&&(A.ya=Jl,rt(A.I,A.D,Jl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var se=h;if(A.qa=ah(A,A.J?A.ia:null,A.W),se.K){In(A.h,se);var Qe=se,Qt=A.L;Qt&&(Qe.I=Qt),Qe.B&&(er(Qe),ta(Qe)),A.g=se}else nh(A);0<v.i.length&&po(v)}else Ye[0]!="stop"&&Ye[0]!="close"||ys(v,7);else v.G==3&&(Ye[0]=="stop"||Ye[0]=="close"?Ye[0]=="stop"?ys(v,7):$l(v):Ye[0]!="noop"&&v.l&&v.l.ta(Ye),v.v=0)}}Ws(4)}catch{}}var $c=class{constructor(h,_){this.g=h,this.map=_}};function fs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function so(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ro(h){return h.h?1:h.g?h.g.size:0}function Bl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function ao(h,_){h.g?h.g.add(_):h.h=_}function In(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}fs.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function ql(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return F(h.i)}function nm(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function oo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Fl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=oo(h),A=nm(h),j=A.length,Q=0;Q<j;Q++)_.call(void 0,A[Q],v&&v[Q],h)}var ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function im(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),j=null;if(0<=A){var Q=h[v].substring(0,A);j=h[v].substring(A+1)}else Q=h[v];_(Q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Vt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Vt){this.h=h.h,sa(this,h.j),this.o=h.o,this.g=h.g,tr(this,h.s),this.l=h.l;var _=h.i,v=new ms;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ds(this,v),this.m=h.m}else h&&(_=String(h).match(ia))?(this.h=!1,sa(this,_[1]||"",!0),this.o=ti(_[2]||""),this.g=ti(_[3]||"",!0),tr(this,_[4]),this.l=ti(_[5]||"",!0),ds(this,_[6]||"",!0),this.m=ti(_[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Vt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(aa(_,Hl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(aa(_,Hl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(aa(v,v.charAt(0)=="/"?sm:Gl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",aa(v,lo)),h.join("")};function Fn(h){return new Vt(h)}function sa(h,_,v){h.j=v?ti(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function tr(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ds(h,_,v){_ instanceof ms?(h.i=_,Wc(h.i,h.h)):(v||(_=aa(_,rm)),h.i=new ms(_,h.h))}function rt(h,_,v){h.i.set(_,v)}function ra(h){return rt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function ti(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function aa(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Xc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Xc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Hl=/[#\/\?@]/g,Gl=/[#\?:]/g,sm=/[#\?]/g,rm=/[#\?@]/g,lo=/#/g;function ms(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ni(h){h.g||(h.g=new Map,h.h=0,h.i&&im(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=ms.prototype,n.add=function(h,_){ni(this),this.i=null,h=Mi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ps(h,_){ni(h),_=Mi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function gs(h,_){return ni(h),_=Mi(h,_),h.g.has(_)}n.forEach=function(h,_){ni(this),this.g.forEach(function(v,A){v.forEach(function(j){h.call(_,j,A,this)},this)},this)},n.na=function(){ni(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const j=h[A];for(let Q=0;Q<j.length;Q++)v.push(_[A])}return v},n.V=function(h){ni(this);let _=[];if(typeof h=="string")gs(this,h)&&(_=_.concat(this.g.get(Mi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return ni(this),this.i=null,h=Mi(this,h),gs(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ql(h,_,v){ps(h,_),0<v.length&&(h.i=null,h.g.set(Mi(h,_),F(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const Q=encodeURIComponent(String(A)),se=this.V(A);for(A=0;A<se.length;A++){var j=Q;se[A]!==""&&(j+="="+encodeURIComponent(String(se[A]))),h.push(j)}}return this.i=h.join("&")};function Mi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Wc(h,_){_&&!h.j&&(ni(h),h.i=null,h.g.forEach(function(v,A){var j=A.toLowerCase();A!=j&&(ps(this,A),Ql(this,j,v))},h)),h.j=_}function oa(h,_){const v=new ei;if(d.Image){const A=new Image;A.onload=x(ii,v,"TestLoadImage: loaded",!0,_,A),A.onerror=x(ii,v,"TestLoadImage: error",!1,_,A),A.onabort=x(ii,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=x(ii,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function _i(h,_){const v=new ei,A=new AbortController,j=setTimeout(()=>{A.abort(),ii(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(Q=>{clearTimeout(j),Q.ok?ii(v,"TestPingServer: ok",!0,_):ii(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(j),ii(v,"TestPingServer: error",!1,_)})}function ii(h,_,v,A,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),A(v)}catch{}}function la(){this.g=new Jr}function ki(h,_,v){const A=v||"";try{Fl(h,function(j,Q){let se=j;g(j)&&(se=pi(j)),_.push(A+Q+"="+encodeURIComponent(se))})}catch(j){throw _.push(A+"type="+encodeURIComponent("_badmap")),j}}function nr(h){this.l=h.Ub||null,this.j=h.eb||!1}U(nr,kl),nr.prototype.g=function(){return new _s(this.l,this.j)},nr.prototype.i=(function(h){return function(){return h}})({});function _s(h,_){ht.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(_s,ht),n=_s.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Vi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Pi(this):Vi(this),this.readyState==3&&Yl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Pi(this))},n.Qa=function(h){this.g&&(this.response=h,Pi(this))},n.ga=function(){this.g&&Pi(this)};function Pi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Vi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Vi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Kl(h){let _="";return Oe(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function Jt(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Kl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):rt(h,_,v))}function Je(h){ht.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Je,ht);var uo=/^https?$/i,ua=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xi.g(),this.v=this.o?Pl(this.o):Pl(xi),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Zc(this,Q);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var j in A)v.set(j,A[j]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())v.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,_,void 0))||A||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,se]of v)this.g.setRequestHeader(Q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ca(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Zc(this,Q)}};function Zc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,co(h),Li(h)}function co(h){h.A||(h.A=!0,Ge(h,"complete"),Ge(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ge(this,"complete"),Ge(this,"abort"),Li(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ho(this):this.bb())},n.bb=function(){ho(this)};function ho(h){if(h.h&&typeof c<"u"&&(!h.v[1]||si(h)!=4||h.Z()!=2)){if(h.u&&si(h)==4)Zt(h.Ea,0,h);else if(Ge(h,"readystatechange"),si(h)==4){h.h=!1;try{const se=h.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=se===0){var j=String(h.D).match(ia)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),A=!uo.test(j?j.toLowerCase():"")}v=A}if(v)Ge(h,"complete"),Ge(h,"success");else{h.m=6;try{var Q=2<si(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",co(h)}}finally{Li(h)}}}}function Li(h,_){if(h.g){ca(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ge(h,"ready");try{v.onreadystatechange=A}catch{}}}function ca(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function si(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<si(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),to(_)}};function Jc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function am(h){const _={};h=(h.g&&2<=si(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(ie(h[A]))continue;var v=k(h[A]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=_[j]||[];_[j]=Q,Q.push(v)}P(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ha(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function fo(h){this.Aa=0,this.i=[],this.j=new ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ha("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ha("baseRetryDelayMs",5e3,h),this.cb=ha("retryDelaySeedMs",1e4,h),this.Wa=ha("forwardChannelMaxRetries",2,h),this.wa=ha("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new fs(h&&h.concurrentRequestLimit),this.Da=new la,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fo.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){Et(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=ah(this,null,this.W),po(this)};function $l(h){if(eh(h),h.G==3){var _=h.U++,v=Fn(h.I);if(rt(v,"SID",h.K),rt(v,"RID",_),rt(v,"TYPE","terminate"),fa(h,v),_=new Rn(h,h.j,_),_.L=2,_.v=ra(Fn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=oh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ta(_)}rh(h)}function mo(h){h.g&&(da(h),h.g.cancel(),h.g=null)}function eh(h){mo(h),h.u&&(d.clearTimeout(h.u),h.u=null),go(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function po(h){if(!so(h.h)&&!h.s){h.s=!0;var _=h.Ga;J||D(),ce||(J(),ce=!0),xe.add(_,h),h.B=0}}function om(h,_){return ro(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Pt(b(h.Ga,h,_),Zl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new Rn(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=C(Q),M(Q,this.S)):Q=this.S),this.m!==null||this.O||(j.H=Q,Q=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=th(this,j,_),v=Fn(this.I),rt(v,"RID",h),rt(v,"CVER",22),this.D&&rt(v,"X-HTTP-Session-Id",this.D),fa(this,v),Q&&(this.O?_="headers="+encodeURIComponent(String(Kl(Q)))+"&"+_:this.m&&Jt(v,this.m,Q)),ao(this.h,j),this.Ua&&rt(v,"TYPE","init"),this.P?(rt(v,"$req",_),rt(v,"SID","null"),j.T=!0,gi(j,v,null)):gi(j,v,_),this.G=2}}else this.G==3&&(h?Xl(this,h):this.i.length==0||so(this.h)||Xl(this))};function Xl(h,_){var v;_?v=_.l:v=h.U++;const A=Fn(h.I);rt(A,"SID",h.K),rt(A,"RID",v),rt(A,"AID",h.T),fa(h,A),h.m&&h.o&&Jt(A,h.m,h.o),v=new Rn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=th(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),ao(h.h,v),gi(v,A,_)}function fa(h,_){h.H&&Oe(h.H,function(v,A){rt(_,A,v)}),h.l&&Fl({},function(v,A){rt(_,A,v)})}function th(h,_,v){v=Math.min(h.i.length,v);var A=h.l?b(h.l.Na,h.l,h):null;e:{var j=h.i;let Q=-1;for(;;){const se=["count="+v];Q==-1?0<v?(Q=j[0].g,se.push("ofs="+Q)):Q=0:se.push("ofs="+Q);let Qe=!0;for(let Qt=0;Qt<v;Qt++){let Ye=j[Qt].g;const en=j[Qt].map;if(Ye-=Q,0>Ye)Q=Math.max(0,j[Qt].g-100),Qe=!1;else try{ki(en,se,"req"+Ye+"_")}catch{A&&A(en)}}if(Qe){A=se.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function nh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;J||D(),ce||(J(),ce=!0),xe.add(_,h),h.v=0}}function Wl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Pt(b(h.Fa,h),Zl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,ih(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Pt(b(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),mo(this),ih(this))};function da(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function ih(h){h.g=new Rn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Fn(h.qa);rt(_,"RID","rpc"),rt(_,"SID",h.K),rt(_,"AID",h.T),rt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&rt(_,"TO",h.ja),rt(_,"TYPE","xmlhttp"),fa(h,_),h.m&&h.o&&Jt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ra(Fn(_)),v.m=null,v.P=!0,hs(v,h)}n.Za=function(){this.C!=null&&(this.C=null,mo(this),Wl(this),Et(19))};function go(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function sh(h,_){var v=null;if(h.g==_){go(h),da(h),h.g=null;var A=2}else if(Bl(h.h,_))v=_.D,In(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var j=h.B;A=Xs(),Ge(A,new Gt(A,v)),po(h)}else nh(h);else if(j=_.s,j==3||j==0&&0<_.X||!(A==1&&om(h,_)||A==2&&Wl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),j){case 1:ys(h,5);break;case 4:ys(h,10);break;case 3:ys(h,6);break;default:ys(h,2)}}}function Zl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ys(h,_){if(h.j.info("Error code "+_),_==2){var v=b(h.fb,h),A=h.Xa;const j=!A;A=new Vt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||sa(A,"https"),ra(A),j?oa(A.toString(),v):_i(A.toString(),v)}else Et(2);h.G=0,h.l&&h.l.sa(_),rh(h),eh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function rh(h){if(h.G=0,h.ka=[],h.l){const _=ql(h.h);(_.length!=0||h.i.length!=0)&&(G(h.ka,_),G(h.ka,h.i),h.h.i.length=0,F(h.i),h.i.length=0),h.l.ra()}}function ah(h,_,v){var A=v instanceof Vt?Fn(v):new Vt(v);if(A.g!="")_&&(A.g=_+"."+A.g),tr(A,A.s);else{var j=d.location;A=j.protocol,_=_?_+"."+j.hostname:j.hostname,j=+j.port;var Q=new Vt(null);A&&sa(Q,A),_&&(Q.g=_),j&&tr(Q,j),v&&(Q.l=v),A=Q}return v=h.D,_=h.ya,v&&_&&rt(A,v,_),rt(A,"VER",h.la),fa(h,A),A}function oh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Je(new nr({eb:v})):new Je(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lh(){}n=lh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _o(){}_o.prototype.g=function(h,_){return new Nn(h,_)};function Nn(h,_){ht.call(this),this.g=new fo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ie(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ie(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ui(this)}U(Nn,ht),Nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nn.prototype.close=function(){$l(this.g)},Nn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=pi(h),h=v);_.i.push(new $c(_.Ya++,h)),_.G==3&&po(_)},Nn.prototype.N=function(){this.g.l=null,delete this.j,$l(this.g),delete this.g,Nn.aa.N.call(this)};function uh(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}U(uh,us);function ch(){Ll.call(this),this.status=1}U(ch,Ll);function Ui(h){this.g=h}U(Ui,lh),Ui.prototype.ua=function(){Ge(this.g,"a")},Ui.prototype.ta=function(h){Ge(this.g,new uh(h))},Ui.prototype.sa=function(h){Ge(this.g,new ch)},Ui.prototype.ra=function(){Ge(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Nn.prototype.send=Nn.prototype.o,Nn.prototype.open=Nn.prototype.m,Nn.prototype.close=Nn.prototype.close,GS=function(){return new _o},HS=function(){return Xs()},FS=Ni,Pg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Js.NO_ERROR=0,Js.TIMEOUT=8,Js.HTTP_ERROR=6,Sf=Js,cs.COMPLETE="complete",qS=cs,Vl.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Gu=Vl,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,BS=Je}).apply(typeof df<"u"?df:typeof self<"u"?self:typeof window<"u"?window:{});const nb="@firebase/firestore",ib="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Sl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new yd("@firebase/firestore");function Yo(){return qa.logLevel}function he(n,...e){if(qa.logLevel<=Be.DEBUG){const t=e.map(O_);qa.debug(`Firestore (${Sl}): ${n}`,...t)}}function Fs(n,...e){if(qa.logLevel<=Be.ERROR){const t=e.map(O_);qa.error(`Firestore (${Sl}): ${n}`,...t)}}function ll(n,...e){if(qa.logLevel<=Be.WARN){const t=e.map(O_);qa.warn(`Firestore (${Sl}): ${n}`,...t)}}function O_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,QS(n,s,t)}function QS(n,e,t){let s=`FIRESTORE (${Sl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fs(s),new Error(s)}function et(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||QS(e,a,s)}function Ne(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Ys{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bn.UNAUTHENTICATED)))}shutdown(){}}class J2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class eD{constructor(e){this.t=e,this.currentUser=bn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new js;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new js,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new js)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(et(typeof s.accessToken=="string",31837,{l:s}),new YS(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string",2055,{h:e}),new bn(e)}}class tD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new tD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){et(this.o===void 0,3512);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(et(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new sb(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=sD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Fe(n,e){return n<e?-1:n>e?1:0}function Vg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return hg(a)===hg(l)?Fe(a,l):hg(a)?1:-1}return Fe(n.length,e.length)}const rD=55296,aD=57343;function hg(n){const e=n.charCodeAt(0);return e>=rD&&e<=aD}function ul(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="__name__";class Gi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Gi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Fe(e.length,t.length)}static compareSegments(e,t){const s=Gi.isNumericId(e),a=Gi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Gi.extractNumericId(e).compare(Gi.extractNumericId(t)):Vg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Or.fromString(e.substring(4,e.length-2))}}class dt extends Gi{construct(e,t,s){return new dt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new dt(t)}static emptyPath(){return new dt([])}}const oD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _n extends Gi{construct(e,t,s){return new _n(e,t,s)}static isValidIdentifier(e){return oD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_n.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rb}static keyField(){return new _n([rb])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ue($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ue($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ue($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _n(t)}static emptyPath(){return new _n([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(dt.fromString(e))}static fromName(e){return new ye(dt.fromString(e).popFirst(5))}static empty(){return new ye(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return dt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new dt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(n,e,t){if(!t)throw new ue($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lD(n,e,t,s){if(e===!0&&s===!0)throw new ue($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ab(n){if(!ye.isDocumentKey(n))throw new ue($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ob(n){if(ye.isDocumentKey(n))throw new ue($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $S(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function Dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wd(n);throw new ue($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function qt(n,e){const t={typeString:n};return e&&(t.value=e),t}function xc(n,e){if(!$S(n))throw new ue($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ue($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=-62135596800,ub=1e6;class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ub);return new yt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lb)throw new ue($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ub}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:yt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xc(e,yt._jsonSchema))return new yt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}yt._jsonSchemaVersion="firestore/timestamp/1.0",yt._jsonSchema={type:qt("string",yt._jsonSchemaVersion),seconds:qt("number"),nanoseconds:qt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new yt(0,0))}static max(){return new Ie(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const hc=-1;function uD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ie.fromTimestamp(s===1e9?new yt(t+1,0):new yt(t,s));return new Lr(a,ye.empty(),e)}function cD(n){return new Lr(n.readTime,n.key,hc)}class Lr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Lr(Ie.min(),ye.empty(),hc)}static max(){return new Lr(Ie.max(),ye.empty(),hc)}}function hD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==fD)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.reject(t)}static resolve(e){return new ee(((t,s)=>{t(e)}))}static reject(e){return new ee(((t,s)=>{s(e)}))}static waitFor(e){return new ee(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next((a=>a?ee.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ee(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((y=>{c[g]=y,++d,d===l&&s(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new ee(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function mD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Cl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Sd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Sd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=-1;function Ad(n){return n==null}function qf(n){return n===0&&1/n==-1/0}function pD(n){return typeof n=="number"&&Number.isInteger(n)&&!qf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="";function gD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cb(e)),e=_D(n.get(t),e);return cb(e)}function _D(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case XS:t+="";break;default:t+=l}}return t}function cb(n){return n+XS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function WS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft=class Lg{constructor(e,t){this.comparator=e,this.root=t||Mr.EMPTY}insert(e,t){return new Lg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mr.BLACK,null,null))}remove(e){return new Lg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mf(this.root,e,this.comparator,!1)}getReverseIterator(){return new mf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mf(this.root,e,this.comparator,!0)}},mf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Mr=class Ms{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ms.RED,this.left=a??Ms.EMPTY,this.right=l??Ms.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ms(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ms.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ms.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ms.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ms.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}};Mr.EMPTY=null,Mr.RED=!0,Mr.BLACK=!1;Mr.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Mr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new Ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fb(this.data.getIterator())}getIteratorFrom(e){return new fb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wt(this.comparator);return t.data=e,t}}class fb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.fields=e,e.sort(_n.comparator)}static empty(){return new Zn([])}unionWith(e){let t=new Wt(_n.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ul(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class ZS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ZS("Invalid base64 string: "+l):l}})(e);return new yn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new yn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yn.EMPTY_BYTE_STRING=new yn("");const yD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(n){if(et(!!n,39018),typeof n=="string"){let e=0;const t=yD.exec(n);if(et(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ot(n.seconds),nanos:Ot(n.nanos)}}function Ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jr(n){return typeof n=="string"?yn.fromBase64String(n):yn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="server_timestamp",e1="__type__",t1="__previous_value__",n1="__local_write_time__";function P_(n){return(n?.mapValue?.fields||{})[e1]?.stringValue===JS}function Cd(n){const e=n.mapValue.fields[t1];return P_(e)?Cd(e):e}function fc(n){const e=Ur(n.mapValue.fields[n1].timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Ff="(default)";class dc{constructor(e,t){this.projectId=e,this.database=t||Ff}static empty(){return new dc("","")}get isDefaultDatabase(){return this.database===Ff}isEqual(e){return e instanceof dc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="__type__",ED="__max__",pf={mapValue:{}},s1="__vector__",Hf="value";function zr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?P_(n)?4:bD(n)?9007199254740991:TD(n)?10:11:Te(28295,{value:n})}function es(n,e){if(n===e)return!0;const t=zr(n);if(t!==zr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fc(n).isEqual(fc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Ur(a.timestampValue),d=Ur(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return jr(a.bytesValue).isEqual(jr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Ot(a.geoPointValue.latitude)===Ot(l.geoPointValue.latitude)&&Ot(a.geoPointValue.longitude)===Ot(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Ot(a.integerValue)===Ot(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Ot(a.doubleValue),d=Ot(l.doubleValue);return c===d?qf(c)===qf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return ul(n.arrayValue.values||[],e.arrayValue.values||[],es);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(hb(c)!==hb(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!es(c[p],d[p])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function mc(n,e){return(n.values||[]).find((t=>es(t,e)))!==void 0}function cl(n,e){if(n===e)return 0;const t=zr(n),s=zr(e);if(t!==s)return Fe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Fe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=Ot(l.integerValue||l.doubleValue),p=Ot(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return db(n.timestampValue,e.timestampValue);case 4:return db(fc(n),fc(e));case 5:return Vg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=jr(l),p=jr(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Fe(d[g],p[g]);if(y!==0)return y}return Fe(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Fe(Ot(l.latitude),Ot(c.latitude));return d!==0?d:Fe(Ot(l.longitude),Ot(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return mb(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Hf]?.arrayValue,y=p[Hf]?.arrayValue,T=Fe(g?.values?.length||0,y?.values?.length||0);return T!==0?T:mb(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===pf.mapValue&&c===pf.mapValue)return 0;if(l===pf.mapValue)return 1;if(c===pf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const b=Vg(p[T],y[T]);if(b!==0)return b;const x=cl(d[p[T]],g[y[T]]);if(x!==0)return x}return Fe(p.length,y.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{he:t})}}function db(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Fe(n,e);const t=Ur(n),s=Ur(e),a=Fe(t.seconds,s.seconds);return a!==0?a:Fe(t.nanos,s.nanos)}function mb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=cl(t[a],s[a]);if(l)return l}return Fe(t.length,s.length)}function hl(n){return Ug(n)}function Ug(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Ur(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return jr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ye.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Ug(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Ug(t.fields[c])}`;return a+"}"})(n.mapValue):Te(61005,{value:n})}function Af(n){switch(zr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cd(n);return e?16+Af(e):16;case 5:return 2*n.stringValue.length;case 6:return jr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+Af(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Qr(s.fields,((l,c)=>{a+=l.length+Af(c)})),a})(n.mapValue);default:throw Te(13486,{value:n})}}function pb(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jg(n){return!!n&&"integerValue"in n}function V_(n){return!!n&&"arrayValue"in n}function gb(n){return!!n&&"nullValue"in n}function _b(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cf(n){return!!n&&"mapValue"in n}function TD(n){return(n?.mapValue?.fields||{})[i1]?.stringValue===s1}function Wu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Qr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Wu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wu(n.arrayValue.values[t]);return e}return{...n}}function bD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ED}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Cf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wu(t)}setAll(e){let t=_n.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Wu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Cf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return es(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Cf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Qr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new jn(Wu(this.value))}}function r1(n){const e=[];return Qr(n.fields,((t,s)=>{const a=new _n([t]);if(Cf(s)){const l=r1(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new wn(e,0,Ie.min(),Ie.min(),Ie.min(),jn.empty(),0)}static newFoundDocument(e,t,s,a){return new wn(e,1,t,Ie.min(),s,a,0)}static newNoDocument(e,t){return new wn(e,2,t,Ie.min(),Ie.min(),jn.empty(),0)}static newUnknownDocument(e,t){return new wn(e,3,t,Ie.min(),Ie.min(),jn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gf{constructor(e,t){this.position=e,this.inclusive=t}}function yb(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(c.referenceValue),t.key):s=cl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function vb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!es(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class pc{constructor(e,t="asc"){this.field=e,this.dir=t}}function wD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class a1{}class Bt extends a1{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new AD(e,t,s):t==="array-contains"?new ID(e,s):t==="in"?new ND(e,s):t==="not-in"?new xD(e,s):t==="array-contains-any"?new DD(e,s):new Bt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new CD(e,s):new RD(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cl(t,this.value)):t!==null&&zr(this.value)===zr(t)&&this.matchesComparison(cl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ci extends a1{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ci(e,t)}matches(e){return o1(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function o1(n){return n.op==="and"}function l1(n){return SD(n)&&o1(n)}function SD(n){for(const e of n.filters)if(e instanceof Ci)return!1;return!0}function zg(n){if(n instanceof Bt)return n.field.canonicalString()+n.op.toString()+hl(n.value);if(l1(n))return n.filters.map((e=>zg(e))).join(",");{const e=n.filters.map((t=>zg(t))).join(",");return`${n.op}(${e})`}}function u1(n,e){return n instanceof Bt?(function(s,a){return a instanceof Bt&&s.op===a.op&&s.field.isEqual(a.field)&&es(s.value,a.value)})(n,e):n instanceof Ci?(function(s,a){return a instanceof Ci&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&u1(c,a.filters[d])),!0):!1})(n,e):void Te(19439)}function c1(n){return n instanceof Bt?(function(t){return`${t.field.canonicalString()} ${t.op} ${hl(t.value)}`})(n):n instanceof Ci?(function(t){return t.op.toString()+" {"+t.getFilters().map(c1).join(" ,")+"}"})(n):"Filter"}class AD extends Bt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class CD extends Bt{constructor(e,t){super(e,"in",t),this.keys=h1("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class RD extends Bt{constructor(e,t){super(e,"not-in",t),this.keys=h1("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function h1(n,e){return(e.arrayValue?.values||[]).map((t=>ye.fromName(t.referenceValue)))}class ID extends Bt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return V_(t)&&mc(t.arrayValue,this.value)}}class ND extends Bt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mc(this.value.arrayValue,t)}}class xD extends Bt{constructor(e,t){super(e,"not-in",t)}matches(e){if(mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!mc(this.value.arrayValue,t)}}class DD extends Bt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!V_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>mc(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function Eb(n,e=null,t=[],s=[],a=null,l=null,c=null){return new OD(n,e,t,s,a,l,c)}function L_(n){const e=Ne(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>zg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Ad(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>hl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>hl(s))).join(",")),e.Te=t}return e.Te}function U_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!wD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!u1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vb(n.startAt,e.startAt)&&vb(n.endAt,e.endAt)}function Bg(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function MD(n,e,t,s,a,l,c,d){return new Rl(n,e,t,s,a,l,c,d)}function Rd(n){return new Rl(n)}function Tb(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function f1(n){return n.collectionGroup!==null}function Zu(n){const e=Ne(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Wt(_n.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new pc(l,s))})),t.has(_n.keyField().canonicalString())||e.Ie.push(new pc(_n.keyField(),s))}return e.Ie}function Ki(n){const e=Ne(n);return e.Ee||(e.Ee=kD(e,Zu(n))),e.Ee}function kD(n,e){if(n.limitType==="F")return Eb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new pc(a.field,l)}));const t=n.endAt?new Gf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Gf(n.startAt.position,n.startAt.inclusive):null;return Eb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function qg(n,e){const t=n.filters.concat([e]);return new Rl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qf(n,e,t){return new Rl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Id(n,e){return U_(Ki(n),Ki(e))&&n.limitType===e.limitType}function d1(n){return`${L_(Ki(n))}|lt:${n.limitType}`}function Ko(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>c1(a))).join(", ")}]`),Ad(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>hl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>hl(a))).join(",")),`Target(${s})`})(Ki(n))}; limitType=${n.limitType})`}function Nd(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of Zu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=yb(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,Zu(s),a)||s.endAt&&!(function(c,d,p){const g=yb(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,Zu(s),a))})(n,e)}function PD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function m1(n){return(e,t)=>{let s=!1;for(const a of Zu(n)){const l=VD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function VD(n,e,t){const s=n.field.isKeyField()?ye.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?cl(p,g):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return WS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new Ft(ye.comparator);function Hs(){return LD}const p1=new Ft(ye.comparator);function Qu(...n){let e=p1;for(const t of n)e=e.insert(t.key,t);return e}function g1(n){let e=p1;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Oa(){return Ju()}function _1(){return Ju()}function Ju(){return new $a((n=>n.toString()),((n,e)=>n.isEqual(e)))}const UD=new Ft(ye.comparator),jD=new Wt(ye.comparator);function He(...n){let e=jD;for(const t of n)e=e.add(t);return e}const zD=new Wt(Fe);function BD(){return zD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qf(e)?"-0":e}}function y1(n){return{integerValue:""+n}}function qD(n,e){return pD(e)?y1(e):j_(n,e)}/**
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
 */class xd{constructor(){this._=void 0}}function FD(n,e,t){return n instanceof gc?(function(a,l){const c={fields:{[e1]:{stringValue:JS},[n1]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&P_(l)&&(l=Cd(l)),l&&(c.fields[t1]=l),{mapValue:c}})(t,e):n instanceof fl?E1(n,e):n instanceof dl?T1(n,e):(function(a,l){const c=v1(a,l),d=bb(c)+bb(a.Ae);return jg(c)&&jg(a.Ae)?y1(d):j_(a.serializer,d)})(n,e)}function HD(n,e,t){return n instanceof fl?E1(n,e):n instanceof dl?T1(n,e):t}function v1(n,e){return n instanceof Yf?(function(s){return jg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class gc extends xd{}class fl extends xd{constructor(e){super(),this.elements=e}}function E1(n,e){const t=b1(e);for(const s of n.elements)t.some((a=>es(a,s)))||t.push(s);return{arrayValue:{values:t}}}class dl extends xd{constructor(e){super(),this.elements=e}}function T1(n,e){let t=b1(e);for(const s of n.elements)t=t.filter((a=>!es(a,s)));return{arrayValue:{values:t}}}class Yf extends xd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function bb(n){return Ot(n.integerValue||n.doubleValue)}function b1(n){return V_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t){this.field=e,this.transform=t}}function GD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof fl&&a instanceof fl||s instanceof dl&&a instanceof dl?ul(s.elements,a.elements,es):s instanceof Yf&&a instanceof Yf?es(s.Ae,a.Ae):s instanceof gc&&a instanceof gc})(n.transform,e.transform)}class QD{constructor(e,t){this.version=e,this.transformResults=t}}class On{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Dd{}function w1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Od(n.key,On.none()):new Dc(n.key,n.data,On.none());{const t=n.data,s=jn.empty();let a=new Wt(_n.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Yr(n.key,s,new Zn(a.toArray()),On.none())}}function YD(n,e,t){n instanceof Dc?(function(a,l,c){const d=a.value.clone(),p=Sb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Yr?(function(a,l,c){if(!Rf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Sb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(S1(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ec(n,e,t,s){return n instanceof Dc?(function(l,c,d,p){if(!Rf(l.precondition,c))return d;const g=l.value.clone(),y=Ab(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Yr?(function(l,c,d,p){if(!Rf(l.precondition,c))return d;const g=Ab(l.fieldTransforms,p,c),y=c.data;return y.setAll(S1(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return Rf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function KD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=v1(s.transform,a||null);l!=null&&(t===null&&(t=jn.empty()),t.set(s.field,l))}return t||null}function wb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&ul(s,a,((l,c)=>GD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Dc extends Dd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Yr extends Dd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function S1(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Sb(n,e,t){const s=new Map;et(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,HD(c,d,t[a]))}return s}function Ab(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,FD(l,c,e))}return s}class Od extends Dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $D extends Dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&YD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ec(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ec(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=_1();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=w1(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),He())}isEqual(e){return this.batchId===e.batchId&&ul(this.mutations,e.mutations,((t,s)=>wb(t,s)))&&ul(this.baseMutations,e.baseMutations,((t,s)=>wb(t,s)))}}class B_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){et(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return UD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new B_(e,t,s,a)}}/**
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
 */class WD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt,$e;function JD(n){switch(n){case $.OK:return Te(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function A1(n){if(n===void 0)return Fs("GRPC error has no .code"),$.UNKNOWN;switch(n){case jt.OK:return $.OK;case jt.CANCELLED:return $.CANCELLED;case jt.UNKNOWN:return $.UNKNOWN;case jt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case jt.INTERNAL:return $.INTERNAL;case jt.UNAVAILABLE:return $.UNAVAILABLE;case jt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case jt.NOT_FOUND:return $.NOT_FOUND;case jt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case jt.ABORTED:return $.ABORTED;case jt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case jt.DATA_LOSS:return $.DATA_LOSS;default:return Te(39323,{code:n})}}($e=jt||(jt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eO(){return new TextEncoder}/**
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
 */const tO=new Or([4294967295,4294967295],0);function Cb(n){const e=eO().encode(n),t=new zS;return t.update(e),new Uint8Array(t.digest())}function Rb(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Or([t,s],0),new Or([a,l],0)]}class q_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Yu(`Invalid padding: ${t}`);if(s<0)throw new Yu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Yu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Yu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Or.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Or.fromNumber(s)));return a.compare(tO)===1&&(a=new Or([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Cb(e),[s,a]=Rb(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new q_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=Cb(e),[s,a]=Rb(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Yu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Oc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Md(Ie.min(),a,new Ft(Fe),Hs(),He())}}class Oc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Oc(s,t,He(),He(),He())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class C1{constructor(e,t){this.targetId=e,this.Ce=t}}class R1{constructor(e,t,s=yn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Ib{constructor(){this.ve=0,this.Fe=Nb(),this.Me=yn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=He(),t=He(),s=He();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te(38017,{changeType:l})}})),new Oc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Nb()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,et(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hs(),this.Je=gf(),this.He=gf(),this.Ye=new Ft(Fe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Bg(l))if(s===0){const c=new ye(l.path);this.et(t,c,wn.newNoDocument(c,Ie.min()))}else et(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=jr(s).toUint8Array()}catch(p){if(p instanceof ZS)return ll("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new q_(c,a,l)}catch(p){return ll(p instanceof Yu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Bg(d.target)){const p=new ye(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,wn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=He();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Md(e,t,this.Ye,this.je,s);return this.je=Hs(),this.Je=gf(),this.He=gf(),this.Ye=new Ft(Fe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ib,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Wt(Fe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Wt(Fe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ib),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function gf(){return new Ft(ye.comparator)}function Nb(){return new Ft(ye.comparator)}const iO={asc:"ASCENDING",desc:"DESCENDING"},sO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rO={and:"AND",or:"OR"};class aO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fg(n,e){return n.useProto3Json||Ad(e)?e:{value:e}}function Kf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function oO(n,e){return Kf(n,e.toTimestamp())}function $i(n){return et(!!n,49232),Ie.fromTimestamp((function(t){const s=Ur(t);return new yt(s.seconds,s.nanos)})(n))}function F_(n,e){return Hg(n,e).canonicalString()}function Hg(n,e){const t=(function(a){return new dt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function N1(n){const e=dt.fromString(n);return et(k1(e),10190,{key:e.toString()}),e}function Gg(n,e){return F_(n.databaseId,e.path)}function fg(n,e){const t=N1(e);if(t.get(1)!==n.databaseId.projectId)throw new ue($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(D1(t))}function x1(n,e){return F_(n.databaseId,e)}function lO(n){const e=N1(n);return e.length===4?dt.emptyPath():D1(e)}function Qg(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function D1(n){return et(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xb(n,e,t){return{name:Gg(n,e),fields:t.value.mapValue.fields}}function uO(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(et(y===void 0||typeof y=="string",58123),yn.fromBase64String(y||"")):(et(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),yn.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const y=g.code===void 0?$.UNKNOWN:A1(g.code);return new ue(y,g.message||"")})(c);t=new R1(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=fg(n,s.document.name),l=$i(s.document.updateTime),c=s.document.createTime?$i(s.document.createTime):Ie.min(),d=new jn({mapValue:{fields:s.document.fields}}),p=wn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new If(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=fg(n,s.document),l=s.readTime?$i(s.readTime):Ie.min(),c=wn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new If([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=fg(n,s.document),l=s.removedTargetIds||[];t=new If([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new ZD(a,l),d=s.targetId;t=new C1(d,c)}}return t}function cO(n,e){let t;if(e instanceof Dc)t={update:xb(n,e.key,e.value)};else if(e instanceof Od)t={delete:Gg(n,e.key)};else if(e instanceof Yr)t={update:xb(n,e.key,e.data),updateMask:vO(e.fieldMask)};else{if(!(e instanceof $D))return Te(16599,{Vt:e.type});t={verify:Gg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof gc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof fl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof dl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Yf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Te(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:oO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)})(n,e.precondition)),t}function hO(n,e){return n&&n.length>0?(et(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?$i(a.updateTime):$i(l);return c.isEqual(Ie.min())&&(c=$i(l)),new QD(c,a.transformResults||[])})(t,e)))):[]}function fO(n,e){return{documents:[x1(n,e.path)]}}function dO(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=x1(n,a);const l=(function(g){if(g.length!==0)return M1(Ci.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(b){return{field:$o(b.field),direction:gO(b.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Fg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function mO(n){let e=lO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){et(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const b=O1(T);return b instanceof Ci&&l1(b)?b.getFilters():[b]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((b=>(function(U){return new pc(Xo(U.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(b)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let b;return b=typeof T=="object"?T.value:T,Ad(b)?null:b})(t.limit));let p=null;t.startAt&&(p=(function(T){const b=!!T.before,x=T.values||[];return new Gf(x,b)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const b=!T.before,x=T.values||[];return new Gf(x,b)})(t.endAt)),MD(e,a,c,l,d,"F",p,g)}function pO(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function O1(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Xo(t.unaryFilter.field);return Bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Xo(t.unaryFilter.field);return Bt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Xo(t.unaryFilter.field);return Bt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Xo(t.unaryFilter.field);return Bt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Bt.create(Xo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ci.create(t.compositeFilter.filters.map((s=>O1(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function gO(n){return iO[n]}function _O(n){return sO[n]}function yO(n){return rO[n]}function $o(n){return{fieldPath:n.canonicalString()}}function Xo(n){return _n.fromServerFormat(n.fieldPath)}function M1(n){return n instanceof Bt?(function(t){if(t.op==="=="){if(_b(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NAN"}};if(gb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_b(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NAN"}};if(gb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$o(t.field),op:_O(t.op),value:t.value}}})(n):n instanceof Ci?(function(t){const s=t.getFilters().map((a=>M1(a)));return s.length===1?s[0]:{compositeFilter:{op:yO(t.op),filters:s}}})(n):Te(54877,{filter:n})}function vO(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function k1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,s,a,l=Ie.min(),c=Ie.min(),d=yn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.yt=e}}function TO(n){const e=mO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.Cn=new wO}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(Lr.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class wO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Wt(dt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Wt(dt.comparator)).toArray()}}/**
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
 */const Db={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},P1=41943040;class Un{static withCacheSize(e){return new Un(e,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un.DEFAULT_COLLECTION_PERCENTILE=10,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Un.DEFAULT=new Un(P1,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Un.DISABLED=new Un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ml(0)}static cr(){return new ml(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="LruGarbageCollector",SO=1048576;function Mb([n,e],[t,s]){const a=Fe(n,t);return a===0?Fe(e,s):a}class AO{constructor(e){this.Ir=e,this.buffer=new Wt(Mb),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Mb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class CO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(Ob,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Cl(t)?he(Ob,"Ignoring IndexedDB error during garbage collection: ",t):await Al(t)}await this.Vr(3e5)}))}}class RO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Sd.ce);const s=new AO(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Db)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Db):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),Yo()<=Be.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function IO(n,e){return new RO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.changes=new $a((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,wn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&ec(s.mutation,a,Zn.empty(),yt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,He()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=He()){const a=Oa();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=Qu();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Oa();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,He())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Hs();const c=Ju(),d=(function(){return Ju()})();return t.forEach(((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Yr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),ec(y.mutation,g,y.mutation.getFieldMask(),yt.now())):c.set(g.key,Zn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>d.set(g,new xO(y,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=Ju();let a=new Ft(((c,d)=>c-d)),l=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Zn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||He()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=_1();y.forEach((b=>{if(!l.has(b)){const x=w1(t.get(b),s.get(b));x!==null&&T.set(b,x),l=l.add(b)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return ee.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):f1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(Oa());let d=hc,p=l;return c.next((g=>ee.forEach(g,((y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next((b=>{p=p.insert(y,b)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,He()))).next((y=>({batchId:d,changes:g1(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((s=>{let a=Qu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Qu();return this.indexManager.getCollectionParents(e,l).next((d=>ee.forEach(d,(p=>{const g=(function(T,b){return new Rl(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((T,b)=>{c=c.insert(T,b)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,wn.newInvalidDocument(y)))}));let d=Qu();return c.forEach(((p,g)=>{const y=l.get(p);y!==void 0&&ec(y.mutation,g,Zn.empty(),yt.now()),Nd(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:$i(a.createTime)}})(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:TO(a.bundledQuery),readTime:$i(a.readTime)}})(t)),ee.resolve()}}/**
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
 */class MO{constructor(){this.overlays=new Ft(ye.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Oa();return ee.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=Oa(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Ft(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Oa(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Oa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return ee.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new WD(t,s));let l=this.qr.get(t);l===void 0&&(l=He(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class kO{constructor(){this.sessionToken=yn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.Qr=new Wt(an.$r),this.Ur=new Wt(an.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new an(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new an(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ye(new dt([])),s=new an(t,e),a=new an(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ye(new dt([])),s=new an(t,e),a=new an(t,e+1);let l=He();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new an(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class an{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ye.comparator(e.key,t.key)||Fe(e.Yr,t.Yr)}static Kr(e,t){return Fe(e.Yr,t.Yr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Wt(an.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new XD(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new an(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(c)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?k_:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new an(t,0),a=new an(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Wt(Fe);return t.forEach((a=>{const l=new an(a,0),c=new an(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const c=new an(new ye(l),0);let d=new Wt(Fe);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),ee.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){et(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,(a=>{const l=new an(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new an(t,0),a=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.ri=e,this.docs=(function(){return new Ft(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():wn.newInvalidDocument(t))}getEntries(e,t){let s=Hs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():wn.newInvalidDocument(a))})),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Hs();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||hD(cD(y),s)<=0||(a.has(y.key)||Nd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Te(9500)}ii(e,t){return ee.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new LO(this)}getSize(e){return ee.resolve(this.size)}}class LO extends NO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.persistence=e,this.si=new $a((t=>L_(t)),U_),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.oi=0,this._i=new H_,this.targetCount=0,this.ai=ml.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ml(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),ee.waitFor(l).next((()=>a))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,t){this.ui={},this.overlays={},this.ci=new Sd(0),this.li=!1,this.li=!0,this.hi=new kO,this.referenceDelegate=e(this),this.Pi=new UO(this),this.indexManager=new bO,this.remoteDocumentCache=(function(a){return new VO(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new EO(t),this.Ii=new OO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new PO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new jO(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class jO extends dD{constructor(e){super(),this.currentSequenceNumber=e}}class G_{constructor(e){this.persistence=e,this.Ri=new H_,this.Vi=null}static mi(e){return new G_(e)}get fi(){if(this.Vi)return this.Vi;throw Te(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const a=ye.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ie.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $f{constructor(e,t){this.persistence=e,this.pi=new $a((s=>gD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=IO(this,t)}static mi(e,t){return new $f(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return ee.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?ee.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ie.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Af(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=He(),a=He();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Q_(e,t.fromCache,s,a)}}/**
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
 */class zO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return RI()?8:mD(An())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new zO;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Yo()<=Be.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Yo()<=Be.DEBUG&&he("QueryEngine","Query:",Ko(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Yo()<=Be.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ki(t))):ee.resolve())}ys(e,t){if(Tb(t))return ee.resolve(null);let s=Ki(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Qf(t,null,"F"),s=Ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=He(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Qf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return Tb(t)||a.isEqual(Ie.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?ee.resolve(null):(Yo()<=Be.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Ko(t)),this.vs(e,c,t,uD(a,hc)).next((d=>d)))}))}Ds(e,t){let s=new Wt(m1(e));return t.forEach(((a,l)=>{Nd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Yo()<=Be.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Ko(t)),this.ps.getDocumentsMatchingQuery(e,t,Lr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="LocalStore",qO=3e8;class FO{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Ft(Fe),this.xs=new $a((l=>L_(l)),U_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function HO(n,e,t,s){return new FO(n,e,t,s)}async function L1(n,e){const t=Ne(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=He();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function GO(n,e){const t=Ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,y){const T=g.batch,b=T.keys();let x=ee.resolve();return b.forEach((U=>{x=x.next((()=>y.getEntry(p,U))).next((F=>{const G=g.docVersions.get(U);et(G!==null,48541),F.version.compareTo(G)<0&&(T.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),y.addEntry(F)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=He();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function U1(n){const e=Ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function QO(n,e){const t=Ne(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,T)=>{const b=a.get(T);if(!b)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let x=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(yn.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):y.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(y.resumeToken,s)),a=a.insert(T,x),(function(F,G,ae){return F.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=qO?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(b,x,y)&&d.push(t.Pi.updateTargetData(l,x))}));let p=Hs(),g=He();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push(YO(l,c,e.documentUpdates).next((y=>{p=y.ks,g=y.qs}))),!s.isEqual(Ie.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return ee.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function YO(n,e,t){let s=He(),a=He();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Hs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):he(Y_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function KO(n,e){const t=Ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=k_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function $O(n,e){const t=Ne(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,ee.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new Ir(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Yg(n,e,t){const s=Ne(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Cl(c))throw c;he(Y_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function kb(n,e,t){const s=Ne(n);let a=Ie.min(),l=He();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,y){const T=Ne(p),b=T.xs.get(y);return b!==void 0?ee.resolve(T.Ms.get(b)):T.Pi.getTargetData(g,y)})(s,c,Ki(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ie.min(),t?l:He()))).next((d=>(XO(s,PD(e),d),{documents:d,Qs:l})))))}function XO(n,e,t){let s=n.Os.get(e)||Ie.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Pb{constructor(){this.activeTargetIds=BD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WO{constructor(){this.Mo=new Pb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Pb,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="ConnectivityMonitor";class Lb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(Vb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(Vb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _f=null;function Kg(){return _f===null?_f=(function(){return 268435456+Math.round(2147483648*Math.random())})():_f++,"0x"+_f.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="RestConnection",JO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Ff?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Kg(),d=this.zo(e,t.toUriEncodedString());he(dg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),y=Gr(g);return this.Jo(e,d,p,s,y).then((T=>(he(dg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ll(dg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Sl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=JO[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="WebChannelConnection";class nM extends eM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Kg();return new Promise(((d,p)=>{const g=new BS;g.setWithCredentials(!0),g.listenOnce(qS.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Sf.NO_ERROR:const T=g.getResponseJson();he(Tn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Sf.TIMEOUT:he(Tn,`RPC '${e}' ${c} timed out`),p(new ue($.DEADLINE_EXCEEDED,"Request time out"));break;case Sf.HTTP_ERROR:const b=g.getStatus();if(he(Tn,`RPC '${e}' ${c} failed with status:`,b,"response text:",g.getResponseText()),b>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const U=x?.error;if(U&&U.status&&U.message){const F=(function(ae){const ie=ae.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ie)>=0?ie:$.UNKNOWN})(U.status);p(new ue(F,U.message))}else p(new ue($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ue($.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(Tn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);he(Tn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Kg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=GS(),d=HS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");he(Tn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);this.I_(T);let b=!1,x=!1;const U=new tM({Yo:G=>{x?he(Tn,`Not sending because RPC '${e}' stream ${a} is closed:`,G):(b||(he(Tn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),b=!0),he(Tn,`RPC '${e}' stream ${a} sending:`,G),T.send(G))},Zo:()=>T.close()}),F=(G,ae,ie)=>{G.listen(ae,(le=>{try{ie(le)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return F(T,Gu.EventType.OPEN,(()=>{x||(he(Tn,`RPC '${e}' stream ${a} transport opened.`),U.o_())})),F(T,Gu.EventType.CLOSE,(()=>{x||(x=!0,he(Tn,`RPC '${e}' stream ${a} transport closed`),U.a_(),this.E_(T))})),F(T,Gu.EventType.ERROR,(G=>{x||(x=!0,ll(Tn,`RPC '${e}' stream ${a} transport errored. Name:`,G.name,"Message:",G.message),U.a_(new ue($.UNAVAILABLE,"The operation could not be completed")))})),F(T,Gu.EventType.MESSAGE,(G=>{if(!x){const ae=G.data[0];et(!!ae,16349);const ie=ae,le=ie?.error||ie[0]?.error;if(le){he(Tn,`RPC '${e}' stream ${a} received error:`,le);const _e=le.status;let de=(function(C){const N=jt[C];if(N!==void 0)return A1(N)})(_e),Oe=le.message;de===void 0&&(de=$.INTERNAL,Oe="Unknown error status: "+_e+" with message "+le.message),x=!0,U.a_(new ue(de,Oe)),T.close()}else he(Tn,`RPC '${e}' stream ${a} received:`,ae),U.u_(ae)}})),F(d,FS.STAT_EVENT,(G=>{G.stat===Pg.PROXY?he(Tn,`RPC '${e}' stream ${a} detected buffering proxy`):G.stat===Pg.NOPROXY&&he(Tn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function mg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){return new aO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="PersistentStream";class z1{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new j1(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Fs(t.toString()),Fs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ue($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(Ub,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(he(Ub,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iM extends z1{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=uO(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?$i(c.readTime):Ie.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Qg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=Bg(p)?{documents:fO(l,p)}:{query:dO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=I1(l,c.resumeToken);const g=Fg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Kf(l,c.snapshotVersion.toTimestamp());const g=Fg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=pO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Qg(this.serializer),t.removeTarget=e,this.q_(t)}}class sM extends z1{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return et(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,et(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){et(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=hO(e.writeResults,e.commitTime),s=$i(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Qg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>cO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{}class aM extends rM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ue($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Hg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Hg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class oM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fs(t),this.aa=!1):he("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="RemoteStore";class lM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Xa(this)&&(he(Fa,"Restarting streams for network reachability change."),await(async function(p){const g=Ne(p);g.Ea.add(4),await Mc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Pd(g)})(this))}))})),this.Ra=new oM(s,a)}}async function Pd(n){if(Xa(n))for(const e of n.da)await e(!0)}async function Mc(n){for(const e of n.da)await e(!1)}function B1(n,e){const t=Ne(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),W_(t)?X_(t):Il(t).O_()&&$_(t,e))}function K_(n,e){const t=Ne(n),s=Il(t);t.Ia.delete(e),s.O_()&&q1(t,e),t.Ia.size===0&&(s.O_()?s.L_():Xa(t)&&t.Ra.set("Unknown"))}function $_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Il(n).Y_(e)}function q1(n,e){n.Va.Ue(e),Il(n).Z_(e)}function X_(n){n.Va=new nO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Il(n).start(),n.Ra.ua()}function W_(n){return Xa(n)&&!Il(n).x_()&&n.Ia.size>0}function Xa(n){return Ne(n).Ea.size===0}function F1(n){n.Va=void 0}async function uM(n){n.Ra.set("Online")}async function cM(n){n.Ia.forEach(((e,t)=>{$_(n,e)}))}async function hM(n,e){F1(n),W_(n)?(n.Ra.ha(e),X_(n)):n.Ra.set("Unknown")}async function fM(n,e,t){if(n.Ra.set("Online"),e instanceof R1&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){he(Fa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xf(n,s)}else if(e instanceof If?n.Va.Ze(e):e instanceof C1?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ie.min()))try{const s=await U1(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const y=l.Ia.get(p);if(!y)return;l.Ia.set(p,y.withResumeToken(yn.EMPTY_BYTE_STRING,y.snapshotVersion)),q1(l,p);const T=new Ir(y.target,p,g,y.sequenceNumber);$_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){he(Fa,"Failed to raise snapshot:",s),await Xf(n,s)}}async function Xf(n,e,t){if(!Cl(e))throw e;n.Ea.add(1),await Mc(n),n.Ra.set("Offline"),t||(t=()=>U1(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{he(Fa,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Pd(n)}))}function H1(n,e){return e().catch((t=>Xf(n,t,e)))}async function Vd(n){const e=Ne(n),t=Br(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:k_;for(;dM(e);)try{const a=await KO(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,mM(e,a)}catch(a){await Xf(e,a)}G1(e)&&Q1(e)}function dM(n){return Xa(n)&&n.Ta.length<10}function mM(n,e){n.Ta.push(e);const t=Br(n);t.O_()&&t.X_&&t.ea(e.mutations)}function G1(n){return Xa(n)&&!Br(n).x_()&&n.Ta.length>0}function Q1(n){Br(n).start()}async function pM(n){Br(n).ra()}async function gM(n){const e=Br(n);for(const t of n.Ta)e.ea(t.mutations)}async function _M(n,e,t){const s=n.Ta.shift(),a=B_.from(s,e,t);await H1(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Vd(n)}async function yM(n,e){e&&Br(n).X_&&await(async function(s,a){if((function(c){return JD(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();Br(s).B_(),await H1(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Vd(s)}})(n,e),G1(n)&&Q1(n)}async function jb(n,e){const t=Ne(n);t.asyncQueue.verifyOperationInProgress(),he(Fa,"RemoteStore received new credentials");const s=Xa(t);t.Ea.add(3),await Mc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Pd(t)}async function vM(n,e){const t=Ne(n);e?(t.Ea.delete(2),await Pd(t)):e||(t.Ea.add(2),await Mc(t),t.Ra.set("Unknown"))}function Il(n){return n.ma||(n.ma=(function(t,s,a){const l=Ne(t);return l.sa(),new iM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:uM.bind(null,n),t_:cM.bind(null,n),r_:hM.bind(null,n),H_:fM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),W_(n)?X_(n):n.Ra.set("Unknown")):(await n.ma.stop(),F1(n))}))),n.ma}function Br(n){return n.fa||(n.fa=(function(t,s,a){const l=Ne(t);return l.sa(),new sM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:pM.bind(null,n),r_:yM.bind(null,n),ta:gM.bind(null,n),na:_M.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Vd(n)):(await n.fa.stop(),n.Ta.length>0&&(he(Fa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new js,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new Z_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function J_(n,e){if(Fs("AsyncQueue",`${e}: ${n}`),Cl(n))return new ue($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{static emptySet(e){return new nl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Qu(),this.sortedSet=new Ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new nl;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.ga=new Ft(ye.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Te(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class pl{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new pl(e,t,nl.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Id(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class TM{constructor(){this.queries=Bb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Ne(t),l=a.queries;a.queries=Bb(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new ue($.ABORTED,"Firestore shutting down"))}}function Bb(){return new $a((n=>d1(n)),Id)}async function ey(n,e){const t=Ne(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new EM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=J_(c,`Initialization of query '${Ko(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ny(t)}async function ty(n,e){const t=Ne(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function bM(n,e){const t=Ne(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&ny(t)}function wM(n,e,t){const s=Ne(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function ny(n){n.Ca.forEach((e=>{e.next()}))}var $g,qb;(qb=$g||($g={})).Ma="default",qb.Cache="cache";class iy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new pl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=pl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$g.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.key=e}}class K1{constructor(e){this.key=e}}class SM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=He(),this.mutatedKeys=He(),this.eu=m1(e),this.tu=new nl(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new zb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const b=a.get(y),x=Nd(this.query,T)?T:null,U=!!b&&this.mutatedKeys.has(b.key),F=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let G=!1;b&&x?b.data.isEqual(x.data)?U!==F&&(s.track({type:3,doc:x}),G=!0):this.su(b,x)||(s.track({type:2,doc:x}),G=!0,(p&&this.eu(x,p)>0||g&&this.eu(x,g)<0)&&(d=!0)):!b&&x?(s.track({type:0,doc:x}),G=!0):b&&!x&&(s.track({type:1,doc:b}),G=!0,(p||g)&&(d=!0)),G&&(x?(c=c.add(x),l=F?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(x,U){const F=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Rt:G})}};return F(x)-F(U)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new pl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new zb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=He(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new K1(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Y1(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=He();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return pl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const sy="SyncEngine";class AM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class CM{constructor(e){this.key=e,this.hu=!1}}class RM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new $a((d=>d1(d)),Id),this.Iu=new Map,this.Eu=new Set,this.du=new Ft(ye.comparator),this.Au=new Map,this.Ru=new H_,this.Vu={},this.mu=new Map,this.fu=ml.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function IM(n,e,t=!0){const s=eA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await $1(s,e,t,!0),a}async function NM(n,e){const t=eA(n);await $1(t,e,!0,!1)}async function $1(n,e,t,s){const a=await $O(n.localStore,Ki(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await xM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&B1(n.remoteStore,a),d}async function xM(n,e,t,s,a){n.pu=(T,b,x)=>(async function(F,G,ae,ie){let le=G.view.ru(ae);le.Cs&&(le=await kb(F.localStore,G.query,!1).then((({documents:P})=>G.view.ru(P,le))));const _e=ie&&ie.targetChanges.get(G.targetId),de=ie&&ie.targetMismatches.get(G.targetId)!=null,Oe=G.view.applyChanges(le,F.isPrimaryClient,_e,de);return Hb(F,G.targetId,Oe.au),Oe.snapshot})(n,T,b,x);const l=await kb(n.localStore,e,!0),c=new SM(e,l.Qs),d=c.ru(l.documents),p=Oc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);Hb(n,t,g.au);const y=new AM(e,t,c);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function DM(n,e,t){const s=Ne(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Id(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Yg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&K_(s.remoteStore,a.targetId),Xg(s,a.targetId)})).catch(Al)):(Xg(s,a.targetId),await Yg(s.localStore,a.targetId,!0))}async function OM(n,e){const t=Ne(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),K_(t.remoteStore,s.targetId))}async function MM(n,e,t){const s=zM(n);try{const a=await(function(c,d){const p=Ne(c),g=yt.now(),y=d.reduce(((x,U)=>x.add(U.key)),He());let T,b;return p.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let U=Hs(),F=He();return p.Ns.getEntries(x,y).next((G=>{U=G,U.forEach(((ae,ie)=>{ie.isValidDocument()||(F=F.add(ae))}))})).next((()=>p.localDocuments.getOverlayedDocuments(x,U))).next((G=>{T=G;const ae=[];for(const ie of d){const le=KD(ie,T.get(ie.key).overlayedDocument);le!=null&&ae.push(new Yr(ie.key,le,r1(le.value.mapValue),On.exists(!0)))}return p.mutationQueue.addMutationBatch(x,g,ae,d)})).next((G=>{b=G;const ae=G.applyToLocalDocumentSet(T,F);return p.documentOverlayCache.saveOverlays(x,G.batchId,ae)}))})).then((()=>({batchId:b.batchId,changes:g1(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Ft(Fe)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await kc(s,a.changes),await Vd(s.remoteStore)}catch(a){const l=J_(a,"Failed to persist write");t.reject(l)}}async function X1(n,e){const t=Ne(n);try{const s=await QO(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(et(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?et(c.hu,14607):a.removedDocuments.size>0&&(et(c.hu,42227),c.hu=!1))})),await kc(t,s,e)}catch(s){await Al(s)}}function Fb(n,e,t){const s=Ne(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=Ne(c);p.onlineState=d;let g=!1;p.queries.forEach(((y,T)=>{for(const b of T.Sa)b.va(d)&&(g=!0)})),g&&ny(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kM(n,e,t){const s=Ne(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Ft(ye.comparator);c=c.insert(l,wn.newNoDocument(l,Ie.min()));const d=He().add(l),p=new Md(Ie.min(),new Map,new Ft(Fe),c,d);await X1(s,p),s.du=s.du.remove(l),s.Au.delete(e),ry(s)}else await Yg(s.localStore,e,!1).then((()=>Xg(s,e,t))).catch(Al)}async function PM(n,e){const t=Ne(n),s=e.batch.batchId;try{const a=await GO(t.localStore,e);Z1(t,s,null),W1(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await kc(t,a)}catch(a){await Al(a)}}async function VM(n,e,t){const s=Ne(n);try{const a=await(function(c,d){const p=Ne(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(et(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>p.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);Z1(s,e,t),W1(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await kc(s,a)}catch(a){await Al(a)}}function W1(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Z1(n,e,t){const s=Ne(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Xg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||J1(n,s)}))}function J1(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(K_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ry(n))}function Hb(n,e,t){for(const s of t)s instanceof Y1?(n.Ru.addReference(s.key,e),LM(n,s)):s instanceof K1?(he(sy,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||J1(n,s.key)):Te(19791,{wu:s})}function LM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(he(sy,"New document in limbo: "+t),n.Eu.add(s),ry(n))}function ry(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ye(dt.fromString(e)),s=n.fu.next();n.Au.set(s,new CM(t)),n.du=n.du.insert(t,s),B1(n.remoteStore,new Ir(Ki(Rd(t.path)),s,"TargetPurposeLimboResolution",Sd.ce))}}async function kc(n,e,t){const s=Ne(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){a.push(g);const y=Q_.As(p.targetId,g);l.push(y)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const y=Ne(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>ee.forEach(g,(b=>ee.forEach(b.Es,(x=>y.persistence.referenceDelegate.addReference(T,b.targetId,x))).next((()=>ee.forEach(b.ds,(x=>y.persistence.referenceDelegate.removeReference(T,b.targetId,x)))))))))}catch(T){if(!Cl(T))throw T;he(Y_,"Failed to update sequence numbers: "+T)}for(const T of g){const b=T.targetId;if(!T.fromCache){const x=y.Ms.get(b),U=x.snapshotVersion,F=x.withLastLimboFreeSnapshotVersion(U);y.Ms=y.Ms.insert(b,F)}}})(s.localStore,l))}async function UM(n,e){const t=Ne(n);if(!t.currentUser.isEqual(e)){he(sy,"User change. New user:",e.toKey());const s=await L1(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new ue($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await kc(t,s.Ls)}}function jM(n,e){const t=Ne(n),s=t.Au.get(e);if(s&&s.hu)return He().add(s.key);{let a=He();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function eA(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=X1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kM.bind(null,e),e.Pu.H_=bM.bind(null,e.eventManager),e.Pu.yu=wM.bind(null,e.eventManager),e}function zM(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VM.bind(null,e),e}class Wf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return HO(this.persistence,new BO,e.initialUser,this.serializer)}Cu(e){return new V1(G_.mi,this.serializer)}Du(e){return new WO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wf.provider={build:()=>new Wf};class BM extends Wf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){et(this.persistence.referenceDelegate instanceof $f,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new CO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Un.withCacheSize(this.cacheSizeBytes):Un.DEFAULT;return new V1((s=>$f.mi(s,t)),this.serializer)}}class Wg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=UM.bind(null,this.syncEngine),await vM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new TM})()}createDatastore(e){const t=kd(e.databaseInfo.databaseId),s=(function(l){return new nM(l)})(e.databaseInfo);return(function(l,c,d,p){return new aM(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new lM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Fb(this.syncEngine,t,0)),(function(){return Lb.v()?new Lb:new ZO})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,y){const T=new RM(a,l,c,d,p,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ne(t);he(Fa,"RemoteStore shutting down."),s.Ea.add(5),await Mc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Wg.provider={build:()=>new Wg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirestoreClient";class qM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=bn.UNAUTHENTICATED,this.clientId=M_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{he(qr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(he(qr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new js;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=J_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function pg(n,e){n.asyncQueue.verifyOperationInProgress(),he(qr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await L1(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Gb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await FM(n);he(qr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>jb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>jb(e.remoteStore,a))),n._onlineComponents=e}async function FM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(qr,"Using user provided OfflineComponentProvider");try{await pg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ll("Error using user provided cache. Falling back to memory cache: "+t),await pg(n,new Wf)}}else he(qr,"Using default OfflineComponentProvider"),await pg(n,new BM(void 0));return n._offlineComponents}async function tA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(qr,"Using user provided OnlineComponentProvider"),await Gb(n,n._uninitializedComponentsProvider._online)):(he(qr,"Using default OnlineComponentProvider"),await Gb(n,new Wg))),n._onlineComponents}function HM(n){return tA(n).then((e=>e.syncEngine))}async function Zf(n){const e=await tA(n),t=e.eventManager;return t.onListen=IM.bind(null,e.syncEngine),t.onUnlisten=DM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OM.bind(null,e.syncEngine),t}function GM(n,e,t={}){const s=new js;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new ay({next:b=>{y.Nu(),c.enqueueAndForget((()=>ty(l,T)));const x=b.docs.has(d);!x&&b.fromCache?g.reject(new ue($.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&b.fromCache&&p&&p.source==="server"?g.reject(new ue($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new iy(Rd(d.path),y,{includeMetadataChanges:!0,qa:!0});return ey(l,T)})(await Zf(n),n.asyncQueue,e,t,s))),s.promise}function QM(n,e,t={}){const s=new js;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new ay({next:b=>{y.Nu(),c.enqueueAndForget((()=>ty(l,T))),b.fromCache&&p.source==="server"?g.reject(new ue($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new iy(d,y,{includeMetadataChanges:!0,qa:!0});return ey(l,T)})(await Zf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function nA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="firestore.googleapis.com",Yb=!0;class Kb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iA,this.ssl=Yb}else this.host=e.host,this.ssl=e.ssl??Yb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=P1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SO)throw new ue($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ld{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Z2;switch(s.type){case"firstParty":return new nD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Qb.get(t);s&&(he("ComponentProvider","Removing Datastore"),Qb.delete(t),s.terminate())})(this),Promise.resolve()}}function YM(n,e,t,s={}){n=Dn(n,Ld);const a=Gr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(y_(`https://${d}`),v_("Firestore",!0)),l.host!==iA&&l.host!==d&&ll("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Zi(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=bn.MOCK_USER;else{g=tS(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new ue($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new bn(T)}n._authCredentials=new J2(new YS(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class Rt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(xc(t,Rt._jsonSchema))return new Rt(e,s||null,new ye(dt.fromString(t.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:qt("string",Rt._jsonSchemaVersion),referencePath:qt("string")};class kr extends Ks{constructor(e,t,s){super(e,t,Rd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new ye(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function Xt(n,e,...t){if(n=mt(n),KS("collection","path",e),n instanceof Ld){const s=dt.fromString(e,...t);return ob(s),new kr(n,null,s)}{if(!(n instanceof Rt||n instanceof kr))throw new ue($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(dt.fromString(e,...t));return ob(s),new kr(n.firestore,null,s)}}function bt(n,e,...t){if(n=mt(n),arguments.length===1&&(e=M_.newId()),KS("doc","path",e),n instanceof Ld){const s=dt.fromString(e,...t);return ab(s),new Rt(n,null,new ye(s))}{if(!(n instanceof Rt||n instanceof kr))throw new ue($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(dt.fromString(e,...t));return ab(s),new Rt(n.firestore,n instanceof kr?n.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="AsyncQueue";class Xb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new j1(this,"async_queue_retry"),this._c=()=>{const s=mg();s&&he($b,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=mg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=mg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new js;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Cl(e))throw e;he($b,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Fs("INTERNAL UNHANDLED ERROR: ",Wb(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Z_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Te(47125,{Pc:Wb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Wb(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Zb(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class ts extends Ld{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new Xb,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xb(e),this._firestoreClient=void 0,await e}}}function KM(n,e){const t=typeof n=="object"?n:b_(),s=typeof n=="string"?n:Ff,a=vd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Zw("firestore");l&&YM(a,...l)}return a}function Pc(n){if(n._terminated)throw new ue($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$M(n),n._firestoreClient}function $M(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new vD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new qM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(yn.fromBase64String(e))}catch(t){throw new ue($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fi(yn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xc(e,fi._jsonSchema))return fi.fromBase64String(e.bytes)}}fi._jsonSchemaVersion="firestore/bytes/1.0",fi._jsonSchema={type:qt("string",fi._jsonSchemaVersion),bytes:qt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xi._jsonSchemaVersion}}static fromJSON(e){if(xc(e,Xi._jsonSchema))return new Xi(e.latitude,e.longitude)}}Xi._jsonSchemaVersion="firestore/geoPoint/1.0",Xi._jsonSchema={type:qt("string",Xi._jsonSchemaVersion),latitude:qt("number"),longitude:qt("number")};/**
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
 */class Wi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xc(e,Wi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wi(e.vectorValues);throw new ue($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wi._jsonSchemaVersion="firestore/vectorValue/1.0",Wi._jsonSchema={type:qt("string",Wi._jsonSchemaVersion),vectorValues:qt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=/^__.*__$/;class WM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dc(e,this.data,t,this.fieldTransforms)}}class sA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Yr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ac:n})}}class Ud{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ud({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Jf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(rA(this.Ac)&&XM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ZM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||kd(e)}Cc(e,t,s,a=!1){return new Ud({Ac:e,methodName:t,Dc:s,path:_n.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lc(n){const e=n._freezeSettings(),t=kd(n._databaseId);return new ZM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oy(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);hy("Data must be an object, but it was:",c,s);const d=uA(s,c);let p,g;if(l.merge)p=new Zn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const b=Zg(e,T,t);if(!c.contains(b))throw new ue($.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);hA(y,b)||y.push(b)}p=new Zn(y),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new WM(new jn(d),p,g)}class jd extends Nl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jd}}function aA(n,e,t){return new Ud({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ly extends Nl{_toFieldTransform(e){return new z_(e.path,new gc)}isEqual(e){return e instanceof ly}}class uy extends Nl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=aA(this,e,!0),s=this.vc.map((l=>Wa(l,t))),a=new fl(s);return new z_(e.path,a)}isEqual(e){return e instanceof uy&&Zi(this.vc,e.vc)}}class cy extends Nl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=aA(this,e,!0),s=this.vc.map((l=>Wa(l,t))),a=new dl(s);return new z_(e.path,a)}isEqual(e){return e instanceof cy&&Zi(this.vc,e.vc)}}function oA(n,e,t,s){const a=n.Cc(1,e,t);hy("Data must be an object, but it was:",a,s);const l=[],c=jn.empty();Qr(s,((p,g)=>{const y=fy(e,p,t);g=mt(g);const T=a.yc(y);if(g instanceof jd)l.push(y);else{const b=Wa(g,T);b!=null&&(l.push(y),c.set(y,b))}}));const d=new Zn(l);return new sA(c,d,a.fieldTransforms)}function lA(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Zg(e,s,t)],p=[a];if(l.length%2!=0)throw new ue($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(Zg(e,l[b])),p.push(l[b+1]);const g=[],y=jn.empty();for(let b=d.length-1;b>=0;--b)if(!hA(g,d[b])){const x=d[b];let U=p[b];U=mt(U);const F=c.yc(x);if(U instanceof jd)g.push(x);else{const G=Wa(U,F);G!=null&&(g.push(x),y.set(x,G))}}const T=new Zn(g);return new sA(y,T,c.fieldTransforms)}function JM(n,e,t,s=!1){return Wa(t,n.Cc(s?4:3,e))}function Wa(n,e){if(cA(n=mt(n)))return hy("Unsupported field value:",e,n),uA(n,e);if(n instanceof Nl)return(function(s,a){if(!rA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Wa(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=mt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return qD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=yt.fromDate(s);return{timestampValue:Kf(a.serializer,l)}}if(s instanceof yt){const l=new yt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Kf(a.serializer,l)}}if(s instanceof Xi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fi)return{bytesValue:I1(a.serializer,s._byteString)};if(s instanceof Rt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:F_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Wi)return(function(c,d){return{mapValue:{fields:{[i1]:{stringValue:s1},[Hf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return j_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${wd(s)}`)})(n,e)}function uA(n,e){const t={};return WS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(n,((s,a)=>{const l=Wa(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function cA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof Xi||n instanceof fi||n instanceof Rt||n instanceof Nl||n instanceof Wi)}function hy(n,e,t){if(!cA(t)||!$S(t)){const s=wd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Zg(n,e,t){if((e=mt(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return fy(n,e);throw Jf("Field path arguments must be of type string or ",n,!1,void 0,t)}const ek=new RegExp("[~\\*/\\[\\]]");function fy(n,e,t){if(e.search(ek)>=0)throw Jf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vc(...e.split("."))._internalPath}catch{throw Jf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ue($.INVALID_ARGUMENT,d+n+p)}function hA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tk extends fA{data(){return super.data()}}function zd(n,e){return typeof e=="string"?fy(n,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dy{}class my extends dy{}function Sn(n,e,...t){let s=[];e instanceof dy&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof py)).length,d=l.filter((p=>p instanceof Bd)).length;if(c>1||c>0&&d>0)throw new ue($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Bd extends my{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Bd(e,t,s)}_apply(e){const t=this._parse(e);return gA(e._query,t),new Ks(e.firestore,e.converter,qg(e._query,t))}_parse(e){const t=Lc(e.firestore);return(function(l,c,d,p,g,y,T){let b;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ue($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){ew(T,y);const U=[];for(const F of T)U.push(Jb(p,l,F));b={arrayValue:{values:U}}}else b=Jb(p,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||ew(T,y),b=JM(d,c,T,y==="in"||y==="not-in");return Bt.create(g,y,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function It(n,e,t){const s=e,a=zd("where",n);return Bd._create(a,s,t)}class py extends dy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new py(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ci.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)gA(c,p),c=qg(c,p)})(e._query,t),new Ks(e.firestore,e.converter,qg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gy extends my{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gy(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new ue($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ue($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pc(l,c)})(e._query,this._field,this._direction);return new Ks(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Rl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function mA(n,e="asc"){const t=e,s=zd("orderBy",n);return gy._create(s,t)}class _y extends my{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new _y(e,t,s)}_apply(e){return new Ks(e.firestore,e.converter,Qf(e._query,this._limit,this._limitType))}}function pA(n){return _y._create("limit",n,"F")}function Jb(n,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new ue($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!f1(e)&&t.indexOf("/")!==-1)throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(dt.fromString(t));if(!ye.isDocumentKey(s))throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return pb(n,new ye(s))}if(t instanceof Rt)return pb(n,t._key);throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wd(t)}.`)}function ew(n,e){if(!Array.isArray(n)||n.length===0)throw new ue($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gA(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ue($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class nk{convertValue(e,t="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Qr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Hf].arrayValue?.values?.map((s=>Ot(s.doubleValue)));return new Wi(t)}convertGeoPoint(e){return new Xi(Ot(e.latitude),Ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Cd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(fc(e));default:return null}}convertTimestamp(e){const t=Ur(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=dt.fromString(e);et(k1(s),9688,{name:e});const a=new dc(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return a.isEqual(t)||Fs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Ku{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pa extends fA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(zd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pa._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pa._jsonSchema={type:qt("string",Pa._jsonSchemaVersion),bundleSource:qt("string","DocumentSnapshot"),bundleName:qt("string"),bundle:qt("string")};class Nf extends Pa{data(e={}){return super.data(e)}}class Va{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Ku(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Nf(this._firestore,this._userDataWriter,s.key,s,new Ku(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new Nf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Ku(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Nf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Ku(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:ik(d.type),doc:p,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Va._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=M_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ik(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n){n=Dn(n,Rt);const e=Dn(n.firestore,ts);return GM(Pc(e),n._key).then((t=>yA(e,n,t)))}Va._jsonSchemaVersion="firestore/querySnapshot/1.0",Va._jsonSchema={type:qt("string",Va._jsonSchemaVersion),bundleSource:qt("string","QuerySnapshot"),bundleName:qt("string"),bundle:qt("string")};class Ey extends nk{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,t)}}function ed(n){n=Dn(n,Ks);const e=Dn(n.firestore,ts),t=Pc(e),s=new Ey(e);return dA(n._query),QM(t,n._query).then((a=>new Va(e,s,n,a)))}function sk(n,e,t){n=Dn(n,Rt);const s=Dn(n.firestore,ts),a=yy(n.converter,e,t);return Uc(s,[oy(Lc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,On.none())])}function on(n,e,t,...s){n=Dn(n,Rt);const a=Dn(n.firestore,ts),l=Lc(a);let c;return c=typeof(e=mt(e))=="string"||e instanceof Vc?lA(l,"updateDoc",n._key,e,t,s):oA(l,"updateDoc",n._key,e),Uc(a,[c.toMutation(n._key,On.exists(!0))])}function _A(n){return Uc(Dn(n.firestore,ts),[new Od(n._key,On.none())])}function Ty(n,e){const t=Dn(n.firestore,ts),s=bt(n),a=yy(n.converter,e);return Uc(t,[oy(Lc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,On.exists(!1))]).then((()=>s))}function Mn(n,...e){n=mt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Zb(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Zb(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof Rt)c=Dn(n.firestore,ts),d=Rd(n._key.path),l={next:p=>{e[s]&&e[s](yA(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Dn(n,Ks);c=Dn(p.firestore,ts),d=p._query;const g=new Ey(c);l={next:y=>{e[s]&&e[s](new Va(c,g,p,y))},error:e[s+1],complete:e[s+2]},dA(n._query)}return(function(g,y,T,b){const x=new ay(b),U=new iy(y,x,T);return g.asyncQueue.enqueueAndForget((async()=>ey(await Zf(g),U))),()=>{x.Nu(),g.asyncQueue.enqueueAndForget((async()=>ty(await Zf(g),U)))}})(Pc(c),d,a,l)}function Uc(n,e){return(function(s,a){const l=new js;return s.asyncQueue.enqueueAndForget((async()=>MM(await HM(s),a,l))),l.promise})(Pc(n),e)}function yA(n,e,t){const s=t.docs.get(e._key),a=new Ey(n);return new Pa(n,a,e._key,s,new Ku(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Lc(e)}set(e,t,s){this._verifyNotCommitted();const a=gg(e,this._firestore),l=yy(a.converter,t,s),c=oy(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,On.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=gg(e,this._firestore);let c;return c=typeof(t=mt(t))=="string"||t instanceof Vc?lA(this._dataReader,"WriteBatch.update",l._key,t,s,a):oA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,On.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=gg(e,this._firestore);return this._mutations=this._mutations.concat(new Od(t._key,On.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ue($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gg(n,e){if((n=mt(n)).firestore!==e)throw new ue($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function gl(){return new ly("serverTimestamp")}function tc(...n){return new uy("arrayUnion",n)}function td(...n){return new cy("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(n){return Pc(n=Dn(n,ts)),new rk(n,(e=>Uc(n,e)))}(function(e,t=!0){(function(a){Sl=a})(Ka),ja(new Vr("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ts(new eD(s.getProvider("auth-internal")),new iD(c,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ue($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dc(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Qi(nb,ib,e),Qi(nb,ib,"esm2020")})();var tw={};const nw="@firebase/database",iw="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vA="";function ak(n){vA=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),un(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:lc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ns(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ok(e)}}catch{}return new lk},Ma=EA("localStorage"),uk=EA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new yd("@firebase/database"),ck=(function(){let n=1;return function(){return n++}})(),TA=function(n){const e=jI(n),t=new PI;t.update(e);const s=t.digest();return __.encodeByteArray(s)},jc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=jc.apply(null,s):typeof s=="object"?e+=un(s):e+=s,e+=" "}return e};let nc=null,sw=!0;const hk=function(n,e){re(!0,"Can't turn on custom loggers persistently."),il.logLevel=Be.VERBOSE,nc=il.log.bind(il)},gn=function(...n){if(sw===!0&&(sw=!1,nc===null&&uk.get("logging_enabled")===!0&&hk()),nc){const e=jc.apply(null,n);nc(e)}},zc=function(n){return function(...e){gn(n,...e)}},Jg=function(...n){const e="FIREBASE INTERNAL ERROR: "+jc(...n);il.error(e)},Gs=function(...n){const e=`FIREBASE FATAL ERROR: ${jc(...n)}`;throw il.error(e),new Error(e)},qn=function(...n){const e="FIREBASE WARNING: "+jc(...n);il.warn(e)},fk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},dk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},_l="[MIN_NAME]",Ha="[MAX_NAME]",Za=function(n,e){if(n===e)return 0;if(n===_l||e===Ha)return-1;if(e===_l||n===Ha)return 1;{const t=rw(n),s=rw(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},mk=function(n,e){return n===e?0:n<e?-1:1},Bu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+un(e))},by=function(n){if(typeof n!="object"||n===null)return un(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=un(e[s]),t+=":",t+=by(n[e[s]]);return t+="}",t},bA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Cn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const wA=function(n){re(!qd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let b=parseInt(y.substr(p,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},pk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _k(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const yk=new RegExp("^-?(0*)\\d{1,10}$"),vk=-2147483648,Ek=2147483647,rw=function(n){if(yk.test(n)){const e=Number(n);if(e>=vk&&e<=Ek)return e}return null},xl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw qn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Tk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ic=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class bk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){qn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(gn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qn(e)}}class xf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="5",SA="v",AA="s",CA="r",RA="f",IA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,NA="ls",xA="p",e_="ac",DA="websocket",OA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Sk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function kA(n,e,t){re(typeof e=="string","typeof type must == string"),re(typeof t=="object","typeof params must == object");let s;if(e===DA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===OA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sk(n)&&(t.ns=n.namespace);const a=[];return Cn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.counters_={}}incrementCounter(e,t=1){ns(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return mI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={},vg={};function Sy(n){const e=n.toString();return yg[e]||(yg[e]=new Ak),yg[e]}function Ck(n,e){const t=n.toString();return vg[t]||(vg[t]=e()),vg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&xl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="start",Ik="close",Nk="pLPCommand",xk="pRTLPCB",PA="id",VA="pw",LA="ser",Dk="cb",Ok="seg",Mk="ts",kk="d",Pk="dframe",UA=1870,jA=30,Vk=UA-jA,Lk=25e3,Uk=3e4;class Wo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zc(e),this.stats_=Sy(t),this.urlFn=p=>(this.appCheckToken&&(p[e_]=this.appCheckToken),kA(t,OA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Rk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Uk)),dk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ay((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===aw)this.id=d,this.password=p;else if(c===Ik)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[aw]="t",s[LA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Dk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[SA]=wy,this.transportSessionId&&(s[AA]=this.transportSessionId),this.lastSessionId&&(s[NA]=this.lastSessionId),this.applicationId&&(s[xA]=this.applicationId),this.appCheckToken&&(s[e_]=this.appCheckToken),typeof location<"u"&&location.hostname&&IA.test(location.hostname)&&(s[CA]=RA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wo.forceAllow_=!0}static forceDisallow(){Wo.forceDisallow_=!0}static isAvailable(){return Wo.forceAllow_?!0:!Wo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pk()&&!gk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$w(t),a=bA(s,Vk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Pk]="t",s[PA]=e,s[VA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=un(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ay{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ck(),window[Nk+this.uniqueCallbackIdentifier]=e,window[xk+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ay.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){gn("frame writing exception"),d.stack&&gn(d.stack),gn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[PA]=this.myID,e[VA]=this.myPW,e[LA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jA+s.length<=UA;){const c=this.pendingSegs.shift();s=s+"&"+Ok+a+"="+c.seg+"&"+Mk+a+"="+c.ts+"&"+kk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(Lk)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{gn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=16384,zk=45e3;let nd=null;typeof MozWebSocket<"u"?nd=MozWebSocket:typeof WebSocket<"u"&&(nd=WebSocket);class Ti{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zc(this.connId),this.stats_=Sy(t),this.connURL=Ti.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[SA]=wy,typeof location<"u"&&location.hostname&&IA.test(location.hostname)&&(c[CA]=RA),t&&(c[AA]=t),s&&(c[NA]=s),a&&(c[e_]=a),l&&(c[xA]=l),kA(e,DA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ma.set("previous_websocket_failure",!0);try{let s;CI(),this.mySock=new nd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&nd!==null&&!Ti.forceDisallow_}static previouslyFailed(){return Ma.isInMemoryStorage||Ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=lc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=bA(t,jk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ti.responsesRequiredToBeHealthy=2;Ti.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static get ALL_TRANSPORTS(){return[Wo,Ti]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ti&&Ti.isAvailable();let s=t&&!Ti.previouslyFailed();if(e.webSocketOnly&&(t||qn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ti];else{const a=this.transports_=[];for(const l of _c.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);_c.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_c.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=6e4,qk=5e3,Fk=10*1024,Hk=100*1024,Eg="t",ow="d",Gk="s",lw="r",Qk="e",uw="o",cw="a",hw="n",fw="p",Yk="h";class Kk{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zc("c:"+this.id+":"),this.transportManager_=new _c(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ic(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Eg in e){const t=e[Eg];t===cw?this.upgradeIfSecondaryHealthy_():t===lw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===uw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bu("t",e),s=Bu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:cw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bu("t",e),s=Bu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bu(Eg,e);if(ow in e){const s=e[ow];if(t===Yk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===hw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Gk?this.onConnectionShutdown_(s):t===lw?this.onReset_(s):t===Qk?Jg("Server Error: "+s):t===uw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),wy!==s&&qn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ic(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ic(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class id extends BA{static getInstance(){return new id}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!E_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=32,mw=768;class it{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ze(){return new it("")}function Pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fr(n){return n.pieces_.length-n.pieceNum_}function ct(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new it(n.pieces_,e)}function Cy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function $k(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function qA(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new it(e,0)}function Mt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof it)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new it(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function zn(n,e){const t=Pe(n),s=Pe(e);if(t===null)return e;if(t===s)return zn(ct(n),ct(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Xk(n,e){const t=yc(n,0),s=yc(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Za(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Ry(n,e){if(Fr(n)!==Fr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function di(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Fr(n)>Fr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Wk{constructor(e,t){this.errorPrefix_=t,this.parts_=yc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_d(this.parts_[s]);FA(this)}}function Zk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=_d(e),FA(n)}function Jk(n){const e=n.parts_.pop();n.byteLength_-=_d(e),n.parts_.length>0&&(n.byteLength_-=1)}function FA(n){if(n.byteLength_>mw)throw new Error(n.errorPrefix_+"has a key path longer than "+mw+" bytes ("+n.byteLength_+").");if(n.parts_.length>dw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dw+") or object contains a cycle "+xa(n))}function xa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy extends BA{static getInstance(){return new Iy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=1e3,e4=300*1e3,pw=30*1e3,t4=1.3,n4=3e4,i4="server_kill",gw=3;class zs extends zA{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=zs.nextPersistentConnectionId_++,this.log_=zc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qu,this.maxReconnectDelay_=e4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Iy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&id.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(un(l)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ks,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;zs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ns(e,"w")){const s=al(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();qn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=MI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+un(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Jg("Unrecognized action received from server: "+un(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>n4&&(this.reconnectDelay_=qu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*t4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+zs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){re(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?gn("getToken() completed but was canceled"):(gn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,d=new Kk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,x=>{qn(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(i4)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&qn(T),p())}}}interrupt(e){gn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mf(this.interruptReasons_)&&(this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>by(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new it(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){gn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gw&&(this.reconnectDelay_=pw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){gn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+vA.replace(/\./g,"-")]=1,E_()?e["framework.cordova"]=1:nS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=id.getInstance().currentlyOnline();return Mf(this.interruptReasons_)&&e}}zs.nextPersistentConnectionId_=0;zs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ue(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ue(_l,e),a=new Ue(_l,t);return this.compare(s,a)!==0}minPost(){return Ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;class HA extends Fd{static get __EMPTY_NODE(){return yf}static set __EMPTY_NODE(e){yf=e}compare(e,t){return Za(e.name,t.name)}isDefinedOn(e){throw Tl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(Ha,yf)}makePost(e,t){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new Ue(e,yf)}toString(){return".key"}}const sl=new HA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ln{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ln.RED,this.left=a??Bn.EMPTY_NODE,this.right=l??Bn.EMPTY_NODE}copy(e,t,s,a,l){return new ln(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Bn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ln.RED=!0;ln.BLACK=!1;class s4{copy(e,t,s,a,l){return this}insert(e,t,s){return new ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bn{constructor(e,t=Bn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Bn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ln.BLACK,null,null))}remove(e){return new Bn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ln.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new vf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new vf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new vf(this.root_,null,this.comparator_,!0,e)}}Bn.EMPTY_NODE=new s4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(n,e){return Za(n.name,e.name)}function Ny(n,e){return Za(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_;function a4(n){t_=n}const GA=function(n){return typeof n=="number"?"number:"+wA(n):"string:"+n},QA=function(n){if(n.isLeafNode()){const e=n.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ns(e,".sv"),"Priority must be a string or number.")}else re(n===t_||n.isEmpty(),"priority of unexpected type.");re(n===t_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _w;class rn{static set __childrenNodeConstructor(e){_w=e}static get __childrenNodeConstructor(){return _w}constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),QA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:Pe(e)===".priority"?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Pe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(re(s!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+GA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=wA(this.value_):e+=this.value_,this.lazyHash_=TA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=rn.VALUE_TYPE_ORDER.indexOf(t),l=rn.VALUE_TYPE_ORDER.indexOf(s);return re(a>=0,"Unknown leaf type: "+t),re(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YA,KA;function o4(n){YA=n}function l4(n){KA=n}class u4 extends Fd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Za(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(Ha,new rn("[PRIORITY-POST]",KA))}makePost(e,t){const s=YA(e);return new Ue(t,new rn("[PRIORITY-POST]",s))}toString(){return".priority"}}const St=new u4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=Math.log(2);class h4{constructor(e){const t=l=>parseInt(Math.log(l)/c4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sd=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,b;if(y===0)return null;if(y===1)return T=n[p],b=t?t(T):T,new ln(b,T.node,ln.BLACK,null,null);{const x=parseInt(y/2,10)+p,U=a(p,x),F=a(x+1,g);return T=n[x],b=t?t(T):T,new ln(b,T.node,ln.BLACK,U,F)}},l=function(p){let g=null,y=null,T=n.length;const b=function(U,F){const G=T-U,ae=T;T-=U;const ie=a(G+1,ae),le=n[G],_e=t?t(le):le;x(new ln(_e,le.node,F,null,ie))},x=function(U){g?(g.left=U,g=U):(y=U,g=U)};for(let U=0;U<p.count;++U){const F=p.nextBitIsOne(),G=Math.pow(2,p.count-(U+1));F?b(G,ln.BLACK):(b(G,ln.BLACK),b(G,ln.RED))}return y},c=new h4(n.length),d=l(c);return new Bn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tg;const Qo={};class Us{static get Default(){return re(Qo&&St,"ChildrenNode.ts has not been loaded"),Tg=Tg||new Us({".priority":Qo},{".priority":St}),Tg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=al(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bn?t:null}hasIndex(e){return ns(this.indexSet_,e.toString())}addIndex(e,t){re(e!==sl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ue.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=sd(s,e.getCompare()):d=Qo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=d,new Us(y,g)}addToIndexes(e,t){const s=kf(this.indexes_,(a,l)=>{const c=al(this.indexSet_,l);if(re(c,"Missing index implementation for "+l),a===Qo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Ue.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),sd(d,c.getCompare())}else return Qo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Ue(e.name,d))),p.insert(e,e.node)}});return new Us(s,this.indexSet_)}removeFromIndexes(e,t){const s=kf(this.indexes_,a=>{if(a===Qo)return a;{const l=t.get(e.name);return l?a.remove(new Ue(e.name,l)):a}});return new Us(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;class Se{static get EMPTY_NODE(){return Fu||(Fu=new Se(new Bn(Ny),null,Us.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&QA(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fu}updatePriority(e){return this.children_.isEmpty()?this:new Se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fu:t}}getChild(e){const t=Pe(e);return t===null?this:this.getImmediateChild(t).getChild(ct(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(re(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ue(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Fu:this.priorityNode_;return new Se(a,c,l)}}updateChild(e,t){const s=Pe(e);if(s===null)return t;{re(Pe(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ct(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(St,(c,d)=>{t[c]=d.val(e),s++,l&&Se.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+GA(this.getPriority().val())+":"),this.forEachChild(St,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":TA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ue(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ue(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ue.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ue.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bc?-1:0}withIndex(e){if(e===sl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Se(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(St),a=t.getIterator(St);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===sl?null:this.indexMap_.get(e.toString())}}Se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class f4 extends Se{constructor(){super(new Bn(Ny),Se.EMPTY_NODE,Us.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Se.EMPTY_NODE}isEmpty(){return!1}}const Bc=new f4;Object.defineProperties(Ue,{MIN:{value:new Ue(_l,Se.EMPTY_NODE)},MAX:{value:new Ue(Ha,Bc)}});HA.__EMPTY_NODE=Se.EMPTY_NODE;rn.__childrenNodeConstructor=Se;a4(Bc);l4(Bc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4=!0;function zt(n,e=null){if(n===null)return Se.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new rn(t,zt(e))}if(!(n instanceof Array)&&d4){const t=[];let s=!1;if(Cn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=zt(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Ue(c,p)))}}),t.length===0)return Se.EMPTY_NODE;const l=sd(t,r4,c=>c.name,Ny);if(s){const c=sd(t,St.getCompare());return new Se(l,zt(e),new Us({".priority":c},{".priority":St}))}else return new Se(l,zt(e),Us.Default)}else{let t=Se.EMPTY_NODE;return Cn(n,(s,a)=>{if(ns(n,s)&&s.substring(0,1)!=="."){const l=zt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(zt(e))}}o4(zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4 extends Fd{constructor(e){super(),this.indexPath_=e,re(!Le(e)&&Pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Za(e.name,t.name):l}makePost(e,t){const s=zt(e),a=Se.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ue(t,a)}maxPost(){const e=Se.EMPTY_NODE.updateChild(this.indexPath_,Bc);return new Ue(Ha,e)}toString(){return yc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4 extends Fd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Za(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(e,t){const s=zt(e);return new Ue(t,s)}toString(){return".value"}}const g4=new p4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){return{type:"value",snapshotNode:n}}function yl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ec(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function _4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){re(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(vc(t,d)):re(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(yl(t,s)):c.trackChildChange(Ec(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(St,(a,l)=>{t.hasChild(a)||s.trackChildChange(vc(a,l))}),t.isLeafNode()||t.forEachChild(St,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(Ec(a,l,c))}else s.trackChildChange(yl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Se.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.indexedFilter_=new xy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tc.getStartPost_(e),this.endPost_=Tc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Ue(t,s))||(s=Se.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Se.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Se.EMPTY_NODE);const l=this;return t.forEachChild(St,(c,d)=>{l.matches(new Ue(c,d))||(a=a.updateImmediateChild(c,Se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Tc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Ue(t,s))||(s=Se.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Se.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Se.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(b,x)=>T(x,b)}else c=this.index_.getCompare();const d=e;re(d.numChildren()===this.limit_,"");const p=new Ue(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let b=a.getChildAfterChild(this.index_,g,this.reverse_);for(;b!=null&&(b.name===t||d.hasChild(b.name));)b=a.getChildAfterChild(this.index_,b,this.reverse_);const x=b==null?1:c(b,p);if(y&&!s.isEmpty()&&x>=0)return l?.trackChildChange(Ec(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(vc(t,T));const F=d.updateImmediateChild(t,Se.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(l?.trackChildChange(yl(b.name,b.node)),F.updateImmediateChild(b.name,b.node)):F}}else return s.isEmpty()?e:y&&c(g,p)>=0?(l!=null&&(l.trackChildChange(vc(g.name,g.node)),l.trackChildChange(yl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,Se.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=St}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_l}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ha}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===St}copy(){const e=new Dy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function v4(n){return n.loadsAllData()?new xy(n.getIndex()):n.hasLimit()?new y4(n):new Tc(n)}function yw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===St?t="$priority":n.index_===g4?t="$value":n.index_===sl?t="$key":(re(n.index_ instanceof m4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=un(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=un(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+un(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=un(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+un(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function vw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==St&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends zA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=zc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=rd.getListenId_(e,s),d={};this.listens_[c]=d;const p=yw(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),al(this.listens_,c)===d){let b;g?g===401?b="permission_denied":b="rest_error:"+g:b="ok",a(b,null)}})}unlisten(e,t){const s=rd.getListenId_(e,t);delete this.listens_[s]}get(e){const t=yw(e._queryParams),s=e._path.toString(),a=new ks;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=lc(d.responseText)}catch{qn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&qn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(){this.rootNode_=Se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){return{value:null,children:new Map}}function Dl(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Pe(e);n.children.has(s)||n.children.set(s,ad());const a=n.children.get(s);e=ct(e),Dl(a,e,t)}}function n_(n,e){if(Le(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(St,(s,a)=>{Dl(n,new it(s),a)}),n_(n,e)}}else if(n.children.size>0){const t=Pe(e);return e=ct(e),n.children.has(t)&&n_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function i_(n,e,t){n.value!==null?t(e,n.value):T4(n,(s,a)=>{const l=new it(e.toString()+"/"+s);i_(a,l,t)})}function T4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Cn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=10*1e3,w4=30*1e3,S4=300*1e3;class A4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new b4(e);const s=Ew+(w4-Ew)*Math.random();ic(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Cn(e,(a,l)=>{l>0&&ns(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),ic(this.reportStats_.bind(this),Math.floor(Math.random()*2*S4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wi||(wi={}));function XA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Oy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function My(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=wi.ACK_USER_WRITE,this.source=XA()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new it(e));return new od(Ze(),t,this.revert)}}else return re(Pe(this.path)===e,"operationForChild called for unrelated child."),new od(ct(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.source=e,this.path=t,this.type=wi.LISTEN_COMPLETE}operationForChild(e){return Le(this.path)?new bc(this.source,Ze()):new bc(this.source,ct(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=wi.OVERWRITE}operationForChild(e){return Le(this.path)?new Ga(this.source,Ze(),this.snap.getImmediateChild(e)):new Ga(this.source,ct(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=wi.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new it(e));return t.isEmpty()?null:t.value?new Ga(this.source,Ze(),t.value):new wc(this.source,Ze(),t)}else return re(Pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wc(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=Pe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function R4(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(_4(c.childName,c.snapshotNode))}),Hu(n,a,"child_removed",e,s,t),Hu(n,a,"child_added",e,s,t),Hu(n,a,"child_moved",l,s,t),Hu(n,a,"child_changed",e,s,t),Hu(n,a,"value",e,s,t),a}function Hu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>N4(n,d,p)),c.forEach(d=>{const p=I4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function I4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function N4(n,e,t){if(e.childName==null||t.childName==null)throw Tl("Should only compare child_ events.");const s=new Ue(e.childName,e.snapshotNode),a=new Ue(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n,e){return{eventCache:n,serverCache:e}}function sc(n,e,t,s){return Hd(new Qa(e,t,s),n.serverCache)}function WA(n,e,t,s){return Hd(n.eventCache,new Qa(e,t,s))}function s_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ya(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bg;const x4=()=>(bg||(bg=new Bn(mk)),bg);class _t{static fromObject(e){let t=new _t(null);return Cn(e,(s,a)=>{t=t.set(new it(s),a)}),t}constructor(e,t=x4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ze(),value:this.value};if(Le(e))return null;{const s=Pe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ct(e),t);return l!=null?{path:Mt(new it(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=Pe(e),s=this.children.get(t);return s!==null?s.subtree(ct(e)):new _t(null)}}set(e,t){if(Le(e))return new _t(t,this.children);{const s=Pe(e),l=(this.children.get(s)||new _t(null)).set(ct(e),t),c=this.children.insert(s,l);return new _t(this.value,c)}}remove(e){if(Le(e))return this.children.isEmpty()?new _t(null):new _t(null,this.children);{const t=Pe(e),s=this.children.get(t);if(s){const a=s.remove(ct(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new _t(null):new _t(this.value,l)}else return this}}get(e){if(Le(e))return this.value;{const t=Pe(e),s=this.children.get(t);return s?s.get(ct(e)):null}}setTree(e,t){if(Le(e))return t;{const s=Pe(e),l=(this.children.get(s)||new _t(null)).setTree(ct(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new _t(this.value,c)}}fold(e){return this.fold_(Ze(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Mt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ze(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Le(e))return null;{const l=Pe(e),c=this.children.get(l);return c?c.findOnPath_(ct(e),Mt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ze(),t)}foreachOnPath_(e,t,s){if(Le(e))return this;{this.value&&s(t,this.value);const a=Pe(e),l=this.children.get(a);return l?l.foreachOnPath_(ct(e),Mt(t,a),s):new _t(null)}}foreach(e){this.foreach_(Ze(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Mt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.writeTree_=e}static empty(){return new Ai(new _t(null))}}function rc(n,e,t){if(Le(e))return new Ai(new _t(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=zn(a,e);return l=l.updateChild(c,t),new Ai(n.writeTree_.set(a,l))}else{const a=new _t(t),l=n.writeTree_.setTree(e,a);return new Ai(l)}}}function Tw(n,e,t){let s=n;return Cn(t,(a,l)=>{s=rc(s,Mt(e,a),l)}),s}function bw(n,e){if(Le(e))return Ai.empty();{const t=n.writeTree_.setTree(e,new _t(null));return new Ai(t)}}function r_(n,e){return Ja(n,e)!=null}function Ja(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zn(t.path,e)):null}function ww(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(St,(s,a)=>{e.push(new Ue(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ue(s,a.value))}),e}function Pr(n,e){if(Le(e))return n;{const t=Ja(n,e);return t!=null?new Ai(new _t(t)):new Ai(n.writeTree_.subtree(e))}}function a_(n){return n.writeTree_.isEmpty()}function vl(n,e){return ZA(Ze(),n.writeTree_,e)}function ZA(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(re(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=ZA(Mt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Mt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n,e){return nC(e,n)}function D4(n,e,t,s,a){re(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=rc(n.visibleWrites,e,t)),n.lastWriteId=s}function O4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function M4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);re(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&k4(d,s.path)?a=!1:di(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return P4(n),!0;if(s.snap)n.visibleWrites=bw(n.visibleWrites,s.path);else{const d=s.children;Cn(d,p=>{n.visibleWrites=bw(n.visibleWrites,Mt(s.path,p))})}return!0}else return!1}function k4(n,e){if(n.snap)return di(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&di(Mt(n.path,t),e))return!0;return!1}function P4(n){n.visibleWrites=JA(n.allWrites,V4,Ze()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function V4(n){return n.visible}function JA(n,e,t){let s=Ai.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)di(t,c)?(d=zn(t,c),s=rc(s,d,l.snap)):di(c,t)&&(d=zn(c,t),s=rc(s,Ze(),l.snap.getChild(d)));else if(l.children){if(di(t,c))d=zn(t,c),s=Tw(s,d,l.children);else if(di(c,t))if(d=zn(c,t),Le(d))s=Tw(s,Ze(),l.children);else{const p=al(l.children,Pe(d));if(p){const g=p.getChild(ct(d));s=rc(s,Ze(),g)}}}else throw Tl("WriteRecord should have .snap or .children")}}return s}function eC(n,e,t,s,a){if(!s&&!a){const l=Ja(n.visibleWrites,e);if(l!=null)return l;{const c=Pr(n.visibleWrites,e);if(a_(c))return t;if(t==null&&!r_(c,Ze()))return null;{const d=t||Se.EMPTY_NODE;return vl(c,d)}}}else{const l=Pr(n.visibleWrites,e);if(!a&&a_(l))return t;if(!a&&t==null&&!r_(l,Ze()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(di(g.path,e)||di(e,g.path))},d=JA(n.allWrites,c,e),p=t||Se.EMPTY_NODE;return vl(d,p)}}}function L4(n,e,t){let s=Se.EMPTY_NODE;const a=Ja(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(St,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Pr(n.visibleWrites,e);return t.forEachChild(St,(c,d)=>{const p=vl(Pr(l,new it(c)),d);s=s.updateImmediateChild(c,p)}),ww(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Pr(n.visibleWrites,e);return ww(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function U4(n,e,t,s,a){re(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Mt(e,t);if(r_(n.visibleWrites,l))return null;{const c=Pr(n.visibleWrites,l);return a_(c)?a.getChild(t):vl(c,a.getChild(t))}}function j4(n,e,t,s){const a=Mt(e,t),l=Ja(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Pr(n.visibleWrites,a);return vl(c,s.getNode().getImmediateChild(t))}else return null}function z4(n,e){return Ja(n.visibleWrites,e)}function B4(n,e,t,s,a,l,c){let d;const p=Pr(n.visibleWrites,e),g=Ja(p,Ze());if(g!=null)d=g;else if(t!=null)d=vl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),b=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let x=b.getNext();for(;x&&y.length<a;)T(x,s)!==0&&y.push(x),x=b.getNext();return y}else return[]}function q4(){return{visibleWrites:Ai.empty(),allWrites:[],lastWriteId:-1}}function ld(n,e,t,s){return eC(n.writeTree,n.treePath,e,t,s)}function Py(n,e){return L4(n.writeTree,n.treePath,e)}function Sw(n,e,t,s){return U4(n.writeTree,n.treePath,e,t,s)}function ud(n,e){return z4(n.writeTree,Mt(n.treePath,e))}function F4(n,e,t,s,a,l){return B4(n.writeTree,n.treePath,e,t,s,a,l)}function Vy(n,e,t){return j4(n.writeTree,n.treePath,e,t)}function tC(n,e){return nC(Mt(n.treePath,e),n.writeTree)}function nC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;re(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),re(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,Ec(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,vc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,yl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,Ec(s,e.snapshotNode,a.oldSnap));else throw Tl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const iC=new G4;class Ly{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ya(this.viewCache_),l=F4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q4(n){return{filter:n}}function Y4(n,e){re(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function K4(n,e,t,s,a){const l=new H4;let c,d;if(t.type===wi.OVERWRITE){const g=t;g.source.fromUser?c=o_(n,e,g.path,g.snap,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Le(g.path),c=cd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===wi.MERGE){const g=t;g.source.fromUser?c=X4(n,e,g.path,g.children,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=l_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===wi.ACK_USER_WRITE){const g=t;g.revert?c=J4(n,e,g.path,s,a,l):c=W4(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===wi.LISTEN_COMPLETE)c=Z4(n,e,t.path,s,l);else throw Tl("Unknown operation type: "+t.type);const p=l.getChanges();return $4(e,c,p),{viewCache:c,changes:p}}function $4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=s_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push($A(s_(e)))}}function sC(n,e,t,s,a,l){const c=e.eventCache;if(ud(s,t)!=null)return e;{let d,p;if(Le(t))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ya(e),y=g instanceof Se?g:Se.EMPTY_NODE,T=Py(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ld(s,Ya(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Pe(t);if(g===".priority"){re(Fr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=Sw(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=ct(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const b=Sw(s,t,c.getNode(),p);b!=null?T=c.getNode().getImmediateChild(g).updateChild(y,b):T=c.getNode().getImmediateChild(g)}else T=Vy(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return sc(e,d,c.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function cd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Le(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const x=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),x,null)}else{const x=Pe(t);if(!p.isCompleteForPath(t)&&Fr(t)>1)return e;const U=ct(t),G=p.getNode().getImmediateChild(x).updateChild(U,s);x===".priority"?g=y.updatePriority(p.getNode(),G):g=y.updateChild(p.getNode(),x,G,U,iC,null)}const T=WA(e,g,p.isFullyInitialized()||Le(t),y.filtersNodes()),b=new Ly(a,T,l);return sC(n,T,t,a,b,d)}function o_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new Ly(a,e,l);if(Le(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=sc(e,g,!0,n.filter.filtersNodes());else{const T=Pe(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=sc(e,g,d.isFullyInitialized(),d.isFiltered());else{const b=ct(t),x=d.getNode().getImmediateChild(T);let U;if(Le(b))U=s;else{const F=y.getCompleteChild(T);F!=null?Cy(b)===".priority"&&F.getChild(qA(b)).isEmpty()?U=F:U=F.updateChild(b,s):U=Se.EMPTY_NODE}if(x.equals(U))p=e;else{const F=n.filter.updateChild(d.getNode(),T,U,b,y,c);p=sc(e,F,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Aw(n,e){return n.eventCache.isCompleteForChild(e)}function X4(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Mt(t,p);Aw(e,Pe(y))&&(d=o_(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Mt(t,p);Aw(e,Pe(y))||(d=o_(n,d,y,g,a,l,c))}),d}function Cw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function l_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Le(t)?g=s:g=new _t(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,b)=>{if(y.hasChild(T)){const x=e.serverCache.getNode().getImmediateChild(T),U=Cw(n,x,b);p=cd(n,p,new it(T),U,a,l,c,d)}}),g.children.inorderTraversal((T,b)=>{const x=!e.serverCache.isCompleteForChild(T)&&b.value===null;if(!y.hasChild(T)&&!x){const U=e.serverCache.getNode().getImmediateChild(T),F=Cw(n,U,b);p=cd(n,p,new it(T),F,a,l,c,d)}}),p}function W4(n,e,t,s,a,l,c){if(ud(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Le(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return cd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Le(t)){let g=new _t(null);return p.getNode().forEachChild(sl,(y,T)=>{g=g.set(new it(y),T)}),l_(n,e,t,g,a,l,d,c)}else return e}else{let g=new _t(null);return s.foreach((y,T)=>{const b=Mt(t,y);p.isCompleteForPath(b)&&(g=g.set(y,p.getNode().getChild(b)))}),l_(n,e,t,g,a,l,d,c)}}function Z4(n,e,t,s,a){const l=e.serverCache,c=WA(e,l.getNode(),l.isFullyInitialized()||Le(t),l.isFiltered());return sC(n,c,t,s,iC,a)}function J4(n,e,t,s,a,l){let c;if(ud(s,t)!=null)return e;{const d=new Ly(s,e,a),p=e.eventCache.getNode();let g;if(Le(t)||Pe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ld(s,Ya(e));else{const T=e.serverCache.getNode();re(T instanceof Se,"serverChildren would be complete if leaf node"),y=Py(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=Pe(t);let T=Vy(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,ct(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,Se.EMPTY_NODE,ct(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ld(s,Ya(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||ud(s,Ze())!=null,sc(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new xy(s.getIndex()),l=v4(s);this.processor_=Q4(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(Se.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Se.EMPTY_NODE,d.getNode(),null),y=new Qa(p,c.isFullyInitialized(),a.filtersNodes()),T=new Qa(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Hd(T,y),this.eventGenerator_=new C4(this.query_)}get query(){return this.query_}}function tP(n){return n.viewCache_.serverCache.getNode()}function nP(n,e){const t=Ya(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(Pe(e)).isEmpty())?t.getChild(e):null}function Rw(n){return n.eventRegistrations_.length===0}function iP(n,e){n.eventRegistrations_.push(e)}function Iw(n,e,t){const s=[];if(t){re(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function Nw(n,e,t,s){e.type===wi.MERGE&&e.source.queryId!==null&&(re(Ya(n.viewCache_),"We should always have a full cache before handling merges"),re(s_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=K4(n.processor_,a,e,t,s);return Y4(n.processor_,l.viewCache),re(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,rC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function sP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(St,(l,c)=>{s.push(yl(l,c))}),t.isFullyInitialized()&&s.push($A(t.getNode())),rC(n,s,t.getNode(),e)}function rC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return R4(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd;class rP{constructor(){this.views=new Map}}function aP(n){re(!hd,"__referenceConstructor has already been defined"),hd=n}function oP(){return re(hd,"Reference.ts has not been loaded"),hd}function lP(n){return n.views.size===0}function Uy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return re(l!=null,"SyncTree gave us an op for an invalid query."),Nw(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(Nw(c,e,t,s));return l}}function uP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=ld(t,a?s:null),p=!1;d?p=!0:s instanceof Se?(d=Py(t,s),p=!1):(d=Se.EMPTY_NODE,p=!1);const g=Hd(new Qa(d,p,!1),new Qa(s,a,!1));return new eP(e,g)}return c}function cP(n,e,t,s,a,l){const c=uP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),iP(c,t),sP(c,t)}function hP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Hr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(Iw(g,t,s)),Rw(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(Iw(p,t,s)),Rw(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Hr(n)&&l.push(new(oP())(e._repo,e._path)),{removed:l,events:c}}function aC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function rl(n,e){let t=null;for(const s of n.views.values())t=t||nP(s,e);return t}function oC(n,e){if(e._queryParams.loadsAllData())return Gd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function lC(n,e){return oC(n,e)!=null}function Hr(n){return Gd(n)!=null}function Gd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;function fP(n){re(!fd,"__referenceConstructor has already been defined"),fd=n}function dP(){return re(fd,"Reference.ts has not been loaded"),fd}let mP=1;class xw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _t(null),this.pendingWriteTree_=q4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uC(n,e,t,s,a){return D4(n.pendingWriteTree_,e,t,s,a),a?qc(n,new Ga(XA(),e,t)):[]}function ka(n,e,t=!1){const s=O4(n.pendingWriteTree_,e);if(M4(n.pendingWriteTree_,e)){let l=new _t(null);return s.snap!=null?l=l.set(Ze(),!0):Cn(s.children,c=>{l=l.set(new it(c),!0)}),qc(n,new od(s.path,l,t))}else return[]}function Qd(n,e,t){return qc(n,new Ga(Oy(),e,t))}function pP(n,e,t){const s=_t.fromObject(t);return qc(n,new wc(Oy(),e,s))}function gP(n,e){return qc(n,new bc(Oy(),e))}function _P(n,e,t){const s=zy(n,t);if(s){const a=By(s),l=a.path,c=a.queryId,d=zn(l,e),p=new bc(My(c),d);return qy(n,l,p)}else return[]}function u_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||lC(c,e))){const p=hP(c,e,t,s);lP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const y=g.findIndex(b=>b._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(b,x)=>Hr(x));if(y&&!T){const b=n.syncPointTree_.subtree(l);if(!b.isEmpty()){const x=EP(b);for(let U=0;U<x.length;++U){const F=x[U],G=F.query,ae=fC(n,F);n.listenProvider_.startListening(ac(G),dd(n,G),ae.hashFn,ae.onComplete)}}}!T&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(ac(e),null):g.forEach(b=>{const x=n.queryToTagMap.get(Yd(b));n.listenProvider_.stopListening(ac(b),x)}))}TP(n,g)}return d}function yP(n,e,t,s){const a=zy(n,s);if(a!=null){const l=By(a),c=l.path,d=l.queryId,p=zn(c,e),g=new Ga(My(d),p,t);return qy(n,c,g)}else return[]}function vP(n,e,t,s){const a=zy(n,s);if(a){const l=By(a),c=l.path,d=l.queryId,p=zn(c,e),g=_t.fromObject(t),y=new wc(My(d),p,g);return qy(n,c,y)}else return[]}function Dw(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(b,x)=>{const U=zn(b,a);l=l||rl(x,U),c=c||Hr(x)});let d=n.syncPointTree_.get(a);d?(c=c||Hr(d),l=l||rl(d,Ze())):(d=new rP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=Se.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((x,U)=>{const F=rl(U,Ze());F&&(l=l.updateImmediateChild(x,F))}));const g=lC(d,e);if(!g&&!e._queryParams.loadsAllData()){const b=Yd(e);re(!n.queryToTagMap.has(b),"View does not exist, but we have a tag");const x=bP();n.queryToTagMap.set(b,x),n.tagToQueryMap.set(x,b)}const y=ky(n.pendingWriteTree_,a);let T=cP(d,e,t,y,l,p);if(!g&&!c&&!s){const b=oC(d,e);T=T.concat(wP(n,e,b))}return T}function jy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=zn(c,e),g=rl(d,p);if(g)return g});return eC(a,e,l,t,!0)}function qc(n,e){return cC(e,n.syncPointTree_,null,ky(n.pendingWriteTree_,Ze()))}function cC(n,e,t,s){if(Le(n.path))return hC(n,e,t,s);{const a=e.get(Ze());t==null&&a!=null&&(t=rl(a,Ze()));let l=[];const c=Pe(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=tC(s,c);l=l.concat(cC(d,p,g,y))}return a&&(l=l.concat(Uy(a,n,s,t))),l}}function hC(n,e,t,s){const a=e.get(Ze());t==null&&a!=null&&(t=rl(a,Ze()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=tC(s,c),y=n.operationForChild(c);y&&(l=l.concat(hC(y,d,p,g)))}),a&&(l=l.concat(Uy(a,n,s,t))),l}function fC(n,e){const t=e.query,s=dd(n,t);return{hashFn:()=>(tP(e)||Se.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?_P(n,t._path,s):gP(n,t._path);{const l=_k(a,t);return u_(n,t,null,l)}}}}function dd(n,e){const t=Yd(e);return n.queryToTagMap.get(t)}function Yd(n){return n._path.toString()+"$"+n._queryIdentifier}function zy(n,e){return n.tagToQueryMap.get(e)}function By(n){const e=n.indexOf("$");return re(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new it(n.substr(0,e))}}function qy(n,e,t){const s=n.syncPointTree_.get(e);re(s,"Missing sync point for query tag that we're tracking");const a=ky(n.pendingWriteTree_,e);return Uy(s,t,a,null)}function EP(n){return n.fold((e,t,s)=>{if(t&&Hr(t))return[Gd(t)];{let a=[];return t&&(a=aC(t)),Cn(s,(l,c)=>{a=a.concat(c)}),a}})}function ac(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(dP())(n._repo,n._path):n}function TP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Yd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function bP(){return mP++}function wP(n,e,t){const s=e._path,a=dd(n,e),l=fC(n,t),c=n.listenProvider_.startListening(ac(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)re(!Hr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,y,T)=>{if(!Le(g)&&y&&Hr(y))return[Gd(y).query];{let b=[];return y&&(b=b.concat(aC(y).map(x=>x.query))),Cn(T,(x,U)=>{b=b.concat(U)}),b}});for(let g=0;g<p.length;++g){const y=p[g];n.listenProvider_.stopListening(ac(y),dd(n,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Fy(t)}node(){return this.node_}}class Hy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Mt(this.path_,e);return new Hy(this.syncTree_,t)}node(){return jy(this.syncTree_,this.path_)}}const SP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ow=function(n,e,t){if(!n||typeof n!="object")return n;if(re(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return AP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return CP(n[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},AP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:re(!1,"Unexpected server value: "+n)}},CP=function(n,e,t){n.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&re(!1,"Unexpected increment value: "+s);const a=e.node();if(re(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},RP=function(n,e,t,s){return Gy(e,new Hy(t,n),s)},dC=function(n,e,t){return Gy(n,new Fy(e),t)};function Gy(n,e,t){const s=n.getPriority().val(),a=Ow(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=Ow(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new rn(d,zt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new rn(a))),c.forEachChild(St,(d,p)=>{const g=Gy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Yy(n,e){let t=e instanceof it?e:new it(e),s=n,a=Pe(t);for(;a!==null;){const l=al(s.node.children,a)||{children:{},childCount:0};s=new Qy(a,s,l),t=ct(t),a=Pe(t)}return s}function Ol(n){return n.node.value}function mC(n,e){n.node.value=e,c_(n)}function pC(n){return n.node.childCount>0}function IP(n){return Ol(n)===void 0&&!pC(n)}function Kd(n,e){Cn(n.node.children,(t,s)=>{e(new Qy(t,n,s))})}function gC(n,e,t,s){t&&e(n),Kd(n,a=>{gC(a,e,!0)})}function NP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fc(n){return new it(n.parent===null?n.name:Fc(n.parent)+"/"+n.name)}function c_(n){n.parent!==null&&xP(n.parent,n.name,n)}function xP(n,e,t){const s=IP(t),a=ns(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,c_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,c_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=/[\[\].#$\/\u0000-\u001F\u007F]/,OP=/[\[\].#$\u0000-\u001F\u007F]/,wg=10*1024*1024,Ky=function(n){return typeof n=="string"&&n.length!==0&&!DP.test(n)},_C=function(n){return typeof n=="string"&&n.length!==0&&!OP.test(n)},MP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_C(n)},yC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!qd(n)||n&&typeof n=="object"&&ns(n,".sv")},h_=function(n,e,t,s){$d(ol(n,"value"),e,t)},$d=function(n,e,t){const s=t instanceof it?new Wk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+xa(s));if(typeof e=="function")throw new Error(n+"contains a function "+xa(s)+" with contents = "+e.toString());if(qd(e))throw new Error(n+"contains "+e.toString()+" "+xa(s));if(typeof e=="string"&&e.length>wg/3&&_d(e)>wg)throw new Error(n+"contains a string greater than "+wg+" utf8 bytes "+xa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Cn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Ky(c)))throw new Error(n+" contains an invalid key ("+c+") "+xa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Zk(s,c),$d(n,d,s),Jk(s)}),a&&l)throw new Error(n+' contains ".value" child '+xa(s)+" in addition to actual children.")}},kP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=yc(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Ky(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Xk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&di(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},PP=function(n,e,t,s){const a=ol(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];Cn(e,(c,d)=>{const p=new it(c);if($d(a,d,Mt(t,p)),Cy(p)===".priority"&&!yC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),kP(a,l)},VP=function(n,e,t){if(qd(e))throw new Error(ol(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!yC(e))throw new Error(ol(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},vC=function(n,e,t,s){if(!_C(t))throw new Error(ol(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vC(n,e,t)},Zo=function(n,e){if(Pe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},UP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ky(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!MP(t))throw new Error(ol(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $y(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Ry(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function EC(n,e,t){$y(n,t),TC(n,s=>Ry(s,e))}function Qs(n,e,t){$y(n,t),TC(n,s=>di(s,e)||di(e,s))}function TC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(zP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function zP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();nc&&gn("event: "+t.toString()),xl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="repo_interrupt",qP=25;class FP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ad(),this.transactionQueueTree_=new Qy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HP(n,e,t){if(n.stats_=Sy(n.repoInfo_),n.forceRestClient_||Tk())n.server_=new rd(n.repoInfo_,(s,a,l,c)=>{Mw(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>kw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{un(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new zs(n.repoInfo_,e,(s,a,l,c)=>{Mw(n,s,a,l,c)},s=>{kw(n,s)},s=>{QP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ck(n.repoInfo_,()=>new A4(n.stats_,n.server_)),n.infoData_=new E4,n.infoSyncTree_=new xw({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=Qd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Wy(n,"connected",!1),n.serverSyncTree_=new xw({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Qs(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function GP(n){const t=n.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Xy(n){return SP({timestamp:GP(n)})}function Mw(n,e,t,s,a){n.dataUpdateCount++;const l=new it(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=kf(t,g=>zt(g));c=vP(n.serverSyncTree_,l,p,a)}else{const p=zt(t);c=yP(n.serverSyncTree_,l,p,a)}else if(s){const p=kf(t,g=>zt(g));c=pP(n.serverSyncTree_,l,p)}else{const p=zt(t);c=Qd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Xd(n,l)),Qs(n.eventQueue_,d,c)}function kw(n,e){Wy(n,"connected",e),e===!1&&KP(n)}function QP(n,e){Cn(e,(t,s)=>{Wy(n,t,s)})}function Wy(n,e,t){const s=new it("/.info/"+e),a=zt(t);n.infoData_.updateSnapshot(s,a);const l=Qd(n.infoSyncTree_,s,a);Qs(n.eventQueue_,s,l)}function bC(n){return n.nextWriteId_++}function YP(n,e,t,s,a){Zy(n,"set",{path:e.toString(),value:t,priority:s});const l=Xy(n),c=zt(t,s),d=jy(n.serverSyncTree_,e),p=dC(c,d,l),g=bC(n),y=uC(n.serverSyncTree_,e,p,g,!0);$y(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(b,x)=>{const U=b==="ok";U||qn("set at "+e+" failed: "+b);const F=ka(n.serverSyncTree_,g,!U);Qs(n.eventQueue_,e,F),El(n,a,b,x)});const T=RC(n,e);Xd(n,T),Qs(n.eventQueue_,T,[])}function KP(n){Zy(n,"onDisconnectEvents");const e=Xy(n),t=ad();i_(n.onDisconnect_,Ze(),(a,l)=>{const c=RP(a,l,n.serverSyncTree_,e);Dl(t,a,c)});let s=[];i_(t,Ze(),(a,l)=>{s=s.concat(Qd(n.serverSyncTree_,a,l));const c=RC(n,a);Xd(n,c)}),n.onDisconnect_=ad(),Qs(n.eventQueue_,Ze(),s)}function $P(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&n_(n.onDisconnect_,e),El(n,t,s,a)})}function Pw(n,e,t,s){const a=zt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&Dl(n.onDisconnect_,e,a),El(n,s,l,c)})}function XP(n,e,t,s,a){const l=zt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&Dl(n.onDisconnect_,e,l),El(n,a,c,d)})}function WP(n,e,t,s){if(Mf(t)){gn("onDisconnect().update() called with empty data.  Don't do anything."),El(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&Cn(t,(c,d)=>{const p=zt(d);Dl(n.onDisconnect_,Mt(e,c),p)}),El(n,s,a,l)})}function ZP(n,e,t){let s;Pe(e._path)===".info"?s=Dw(n.infoSyncTree_,e,t):s=Dw(n.serverSyncTree_,e,t),EC(n.eventQueue_,e._path,s)}function JP(n,e,t){let s;Pe(e._path)===".info"?s=u_(n.infoSyncTree_,e,t):s=u_(n.serverSyncTree_,e,t),EC(n.eventQueue_,e._path,s)}function eV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(BP)}function Zy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),gn(t,...e)}function El(n,e,t,s){e&&xl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function wC(n,e,t){return jy(n.serverSyncTree_,e,t)||Se.EMPTY_NODE}function Jy(n,e=n.transactionQueueTree_){if(e||Wd(n,e),Ol(e)){const t=AC(n,e);re(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&tV(n,Fc(e),t)}else pC(e)&&Kd(e,t=>{Jy(n,t)})}function tV(n,e,t){const s=t.map(g=>g.currentWriteId),a=wC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];re(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=zn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{Zy(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let b=0;b<t.length;b++)t[b].status=2,y=y.concat(ka(n.serverSyncTree_,t[b].currentWriteId)),t[b].onComplete&&T.push(()=>t[b].onComplete(null,!0,t[b].currentOutputSnapshotResolved)),t[b].unwatcher();Wd(n,Yy(n.transactionQueueTree_,e)),Jy(n,n.transactionQueueTree_),Qs(n.eventQueue_,e,y);for(let b=0;b<T.length;b++)xl(T[b])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{qn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Xd(n,e)}},c)}function Xd(n,e){const t=SC(n,e),s=Fc(t),a=AC(n,t);return nV(n,a,s),s}function nV(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=zn(t,p.path);let y=!1,T;if(re(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=qP)y=!0,T="maxretry",a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0));else{const b=wC(n,p.path,c);p.currentInputSnapshot=b;const x=e[d].update(b.val());if(x!==void 0){$d("transaction failed: Data returned ",x,p.path);let U=zt(x);typeof x=="object"&&x!=null&&ns(x,".priority")||(U=U.updatePriority(b.getPriority()));const G=p.currentWriteId,ae=Xy(n),ie=dC(U,b,ae);p.currentOutputSnapshotRaw=U,p.currentOutputSnapshotResolved=ie,p.currentWriteId=bC(n),c.splice(c.indexOf(G),1),a=a.concat(uC(n.serverSyncTree_,p.path,ie,p.currentWriteId,p.applyLocally)),a=a.concat(ka(n.serverSyncTree_,G,!0))}else y=!0,T="nodata",a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0))}Qs(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(b){setTimeout(b,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Wd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)xl(s[d]);Jy(n,n.transactionQueueTree_)}function SC(n,e){let t,s=n.transactionQueueTree_;for(t=Pe(e);t!==null&&Ol(s)===void 0;)s=Yy(s,t),e=ct(e),t=Pe(e);return s}function AC(n,e){const t=[];return CC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function CC(n,e,t){const s=Ol(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Kd(e,a=>{CC(n,a,t)})}function Wd(n,e){const t=Ol(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,mC(e,t.length>0?t:void 0)}Kd(e,s=>{Wd(n,s)})}function RC(n,e){const t=Fc(SC(n,e)),s=Yy(n.transactionQueueTree_,e);return NP(s,a=>{Sg(n,a)}),Sg(n,s),gC(s,a=>{Sg(n,a)}),t}function Sg(n,e){const t=Ol(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(re(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(re(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(ka(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?mC(e,void 0):t.length=l+1,Qs(n.eventQueue_,Fc(e),a);for(let c=0;c<s.length;c++)xl(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function sV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Vw=function(n,e){const t=rV(n),s=t.namespace;t.domain==="firebase.com"&&Gs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new MA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new it(t.pathString)}},rV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=iV(n.substring(y,T)));const b=sV(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const U=e.indexOf(".");s=e.substring(0,U).toLowerCase(),t=e.substring(U+1),l=s}"ns"in b&&(l=b.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+un(this.snapshot.exportVal())}}class oV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return re(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class uV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ks;return $P(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Zo("OnDisconnect.remove",this._path);const e=new ks;return Pw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Zo("OnDisconnect.set",this._path),h_("OnDisconnect.set",e,this._path);const t=new ks;return Pw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Zo("OnDisconnect.setWithPriority",this._path),h_("OnDisconnect.setWithPriority",e,this._path),VP("OnDisconnect.setWithPriority",t);const s=new ks;return XP(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Zo("OnDisconnect.update",this._path),PP("OnDisconnect.update",e,this._path);const t=new ks;return WP(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Le(this._path)?null:Cy(this._path)}get ref(){return new Kr(this._repo,this._path)}get _queryIdentifier(){const e=vw(this._queryParams),t=by(e);return t==="{}"?"default":t}get _queryObject(){return vw(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof ev))return!1;const t=this._repo===e._repo,s=Ry(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+$k(this._path)}}class Kr extends ev{constructor(e,t){super(e,t,new Dy,!1)}get parent(){const e=qA(this._path);return e===null?null:new Kr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class md{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new it(e),s=f_(this.ref,e);return new md(this._node.getChild(t),s,St)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new md(a,f_(this.ref,s),St)))}hasChild(e){const t=new it(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function La(n,e){return n=mt(n),n._checkNotDeleted("ref"),e!==void 0?f_(n._root,e):n._root}function f_(n,e){return n=mt(n),Pe(n._path)===null?LP("child","path",e):vC("child","path",e),new Kr(n._repo,Mt(n._path,e))}function cV(n){return n=mt(n),new uV(n._repo,n._path)}function Ag(n){return Zo("remove",n._path),Zd(n,null)}function Zd(n,e){n=mt(n),Zo("set",n._path),h_("set",e,n._path);const t=new ks;return YP(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class tv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new aV("value",this,new md(e.snapshotNode,new Kr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new oV(this,e,t):null}matches(e){return e instanceof tv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function hV(n,e,t,s,a){const l=new lV(t,void 0),c=new tv(l);return ZP(n._repo,n,c),()=>JP(n._repo,n,c)}function nv(n,e,t,s){return hV(n,"value",e)}aP(Kr);fP(Kr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV="FIREBASE_DATABASE_EMULATOR_HOST",d_={};let dV=!1;function mV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Gr(l);n.repoInfo_=new MA(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function pV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Vw(l,a),d=c.repoInfo,p;typeof process<"u"&&tw&&(p=tw[fV]),p?(l=`http://${p}?ns=${d.namespace}`,c=Vw(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new wk(n.name,n.options,e);UP("Invalid Firebase Database URL",c),Le(c.path)||Gs("Database URL must point to the root of a Firebase Database (not including a child path).");const y=_V(d,n,g,new bk(n,t));return new yV(y,n)}function gV(n,e){const t=d_[e];(!t||t[n.key]!==n)&&Gs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),eV(n),delete t[n.key]}function _V(n,e,t,s){let a=d_[e.name];a||(a={},d_[e.name]=a);let l=a[n.toURLString()];return l&&Gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new FP(n,dV,t,s),a[n.toURLString()]=l,l}class yV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kr(this._repo,Ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gs("Cannot call "+e+" on a deleted database.")}}function vV(n=b_(),e){const t=vd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Zw("database");s&&EV(t,...s)}return t}function EV(n,e,t,s={}){n=mt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Zi(s,l.repoInfo_.emulatorOptions))return;Gs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Gs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new xf(xf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:tS(s.mockUserToken,n.app.options.projectId);c=new xf(d)}Gr(e)&&(y_(e),v_("Database",!0)),mV(l,a,s,c)}/**
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
 */function TV(n){ak(Ka),ja(new Vr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return pV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Qi(nw,iw,n),Qi(nw,iw,"esm2020")}zs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};zs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};TV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Lw=n=>{const e=wV(n);return e.charAt(0).toUpperCase()+e.slice(1)},IC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),SV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=ne.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>ne.createElement("svg",{ref:p,...AV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:IC("lucide",a),...!l&&!SV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,y])=>ne.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=(n,e)=>{const t=ne.forwardRef(({className:s,...a},l)=>ne.createElement(CV,{ref:l,iconNode:e,className:IC(`lucide-${bV(Lw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=Lw(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],IV=vt("arrow-left",RV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xV=vt("ban",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Uw=vt("bell",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],MV=vt("check-check",OV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],iv=vt("check",kV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],VV=vt("circle-check-big",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Cg=vt("corner-up-left",LV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],jV=vt("crown",UV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],BV=vt("ellipsis-vertical",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],FV=vt("eraser",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],NC=vt("loader-circle",HV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],jw=vt("log-out",GV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],zw=vt("message-circle",QV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],sv=vt("message-square",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],$V=vt("palette",KV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],WV=vt("pin-off",XV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],rv=vt("pin",ZV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],eL=vt("send",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],nL=vt("smile",tL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],xC=vt("square-pen",iL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],m_=vt("trash-2",sL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Bw=vt("user-plus",rL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],oL=vt("user-x",aL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],pd=vt("users",lL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],p_=vt("x",uL),cL=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},av=aS(cL),oc=X2(av),Re=KM(av),Ua=vV(av),hL=n=>{ne.useEffect(()=>{if(!n)return;const e=La(Ua,`/status/${n.uid}`),t=bt(Re,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=La(Ua,".info/connected"),c=nv(l,d=>{if(d.val()===!1){on(t,{state:"offline",last_changed:gl()});return}cV(e).set(s).then(()=>{Zd(e,a),on(t,{state:"online",last_changed:gl()})})});return()=>c()},[n])},Jd=(n,e)=>{const[t,s]=ne.useState(null),a=oc.currentUser;return ne.useEffect(()=>{if(!n||!a){s(null);return}const l=Mn(bt(Re,"users",n),p=>{if(p.exists()){const g=p.data(),y=e?.customNames?.[a.uid];s(T=>({...T||{},...g,displayName:y||g.displayName}))}else s(null)}),c=La(Ua,`/status/${n}`),d=nv(c,p=>{const g=p.val();s(y=>({...y||{},presence:g?.state,last_changed:g?.last_changed}))});return()=>{l(),d()}},[n,e,a]),t},fL=n=>{const[e,t]=ne.useState(0);return ne.useEffect(()=>{if(!n?.uid)return;const s=Sn(Xt(Re,"friendships"),It("users","array-contains",n.uid),It("status","==","pending")),a=Mn(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},dL=n=>{const[e,t]=ne.useState(0),[s,a]=ne.useState([]);return ne.useEffect(()=>{if(!n?.uid)return;const l=Sn(Xt(Re,"friendships"),It("users","array-contains",n.uid),It("status","==","accepted")),c=Mn(l,d=>{const p=d.docs.map(g=>g.data().users.find(y=>y!==n.uid));a(p)});return()=>c()},[n]),ne.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=Sn(Xt(Re,`conversations/${p}/messages`),It("receiverId","==",n.uid),It("status","in",["sent","delivered"]));return Mn(g,y=>{l[p]=y.size;const T=Object.values(l).reduce((b,x)=>b+x,0);t(T)})});return()=>c.forEach(d=>d())},[s,n]),e},mL=n=>{const e=ne.useRef(n);ne.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),ne.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=CD"}),e.current=n},[n])},pL=(n,e)=>{const[t,s]=ne.useState(null);return ne.useEffect(()=>{if(!n||!e||e.isGroup){s(null);return}const a=Sn(Xt(Re,"friendships"),It("users","in",[[n.uid,e.uid],[e.uid,n.uid]])),l=Mn(a,c=>{if(c.empty)s(null);else{const d=c.docs[0];s({id:d.id,...d.data()})}});return()=>l()},[n,e]),t},gL=({text:n="Preparando seu bate-papo..."})=>S.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:S.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[S.jsx(sv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),S.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),S.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[S.jsx(NC,{className:"animate-spin h-10 w-10 text-blue-400"}),S.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),_L=()=>{const n=async()=>{const e=new Ps;try{const s=(await r2(oc,e)).user,a=bt(Re,"users",s.uid);(await vy(a)).exists()||await sk(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL,recado:"Olá! Estou usando o ChatD."})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return S.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:S.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[S.jsx(sv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),S.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),S.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),S.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[S.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},yL=({user:n,onClose:e})=>n?S.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:S.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[S.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),S.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),S.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),S.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),S.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,vL=({user:n,onClose:e})=>{const[t,s]=ne.useState(n.recado||""),a=async()=>{const l=bt(Re,"users",n.uid);await on(l,{recado:t}),e()};return S.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:S.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[S.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),S.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),S.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),S.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[S.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),S.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},Sc=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?S.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:S.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[S.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),S.jsx("p",{className:"text-gray-400 mb-6",children:a}),S.jsxs("div",{className:"flex justify-center gap-4",children:[S.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),S.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,qw=({currentUser:n})=>{const[e,t]=ne.useState(""),[s,a]=ne.useState([]),[l,c]=ne.useState({}),[d,p]=ne.useState(!1),[g,y]=ne.useState(""),[T,b]=ne.useState(""),x=async F=>{if(F.preventDefault(),e.trim()!==""){p(!0),y(""),b(""),a([]);try{const G=Sn(Xt(Re,"users"),It("email","==",e.trim()),pA(1)),ie=(await ed(G)).docs.map(le=>le.data())[0];if(ie&&ie.uid!==n.uid){a([ie]);const le=Sn(Xt(Re,"friendships"),It("users","array-contains",n.uid)),de=(await ed(le)).docs.find(Oe=>Oe.data().users.includes(ie.uid));c({[ie.uid]:de?de.data().status:"not_friends"})}else ie&&ie.uid===n.uid?b("Você não pode adicionar a si mesmo."):b("Nenhum usuário encontrado com este e-mail.")}catch(G){y("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(G)}finally{p(!1)}}},U=async F=>{try{await Ty(Xt(Re,"friendships"),{users:[n.uid,F.uid],status:"pending",requestedBy:n.uid,createdAt:gl()}),c(G=>({...G,[F.uid]:"pending"}))}catch(G){y("Falha ao enviar pedido."),console.error(G)}};return S.jsxs("div",{className:"p-4",children:[S.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),S.jsxs("form",{onSubmit:x,className:"flex gap-2",children:[S.jsx("input",{type:"email",value:e,onChange:F=>t(F.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),S.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?S.jsx(NC,{className:"animate-spin"}):"Buscar"})]}),S.jsxs("div",{className:"mt-4 h-24",children:[g&&S.jsx("p",{className:"text-red-400",children:g}),T&&S.jsx("p",{className:"text-yellow-400",children:T}),s.map(F=>S.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("img",{src:F.photoURL,alt:F.displayName,className:"w-10 h-10 rounded-full"}),S.jsx("span",{className:"text-white",children:F.displayName})]}),S.jsxs("div",{children:[l[F.uid]==="not_friends"&&S.jsx("button",{onClick:()=>U(F),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[F.uid]==="pending"&&S.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[F.uid]==="accepted"&&S.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[F.uid]==="declined"&&S.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},F.uid))]})]})},Fw=({currentUser:n})=>{const[e,t]=ne.useState([]);ne.useEffect(()=>{if(!n?.uid)return;const a=Sn(Xt(Re,"friendships"),It("users","array-contains",n.uid),It("status","==","pending")),l=Mn(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const y=g.users.find(b=>b!==n.uid),T=await vy(bt(Re,"users",y));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await on(bt(Re,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return S.jsxs("div",{className:"p-4",children:[S.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?S.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):S.jsx("ul",{className:"space-y-2",children:e.map(a=>S.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),S.jsx("span",{className:"text-white",children:a.displayName})]}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:S.jsx(iv,{size:16})}),S.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:S.jsx(p_,{size:16})})]})]},a.id))})]})},EL=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=Jd(n.friendId,n);return s?S.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[S.jsxs("div",{className:"flex items-center gap-4 relative",children:[S.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),S.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),S.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:S.jsx(m_,{size:18,className:"text-red-500"})})]}):S.jsx("div",{className:"p-4 h-[69px] bg-gray-800 animate-pulse"})},Hw=({currentUser:n,onSelectUser:e})=>{const[t,s]=ne.useState([]),[a,l]=ne.useState(null);ne.useEffect(()=>{if(!n?.uid)return;const d=Sn(Xt(Re,"friendships"),It("users","array-contains",n.uid),It("status","==","accepted")),p=Mn(d,g=>{const y=g.docs.map(T=>({id:T.id,...T.data(),friendId:T.data().users.find(b=>b!==n.uid)}));s(y)});return()=>p()},[n.uid]);const c=async()=>{if(!a)return;const d=bt(Re,"friendships",a.id);try{await _A(d)}catch(p){console.error("Error deleting friendship: ",p)}l(null)};return S.jsxs("div",{className:"flex-grow overflow-y-auto",children:[S.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?S.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):S.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>S.jsx(EL,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),S.jsx(Sc,{isOpen:!!a,onClose:()=>l(null),onConfirm:c,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},Gw=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=ne.useState([]),[l,c]=ne.useState([]),[d,p]=ne.useState(null);ne.useEffect(()=>{if(!n?.uid)return;const b=Sn(Xt(Re,"friendships"),It("users","array-contains",n.uid),It("status","==","accepted")),x=Mn(b,G=>{let ae=G.docs.map(ie=>({id:ie.id,...ie.data(),friendId:ie.data().users.find(le=>le!==n.uid),isGroup:!1})).filter(ie=>!ie.chatDeletedFor?.includes(n.uid));ae.sort((ie,le)=>{const _e=ie.pinnedBy?.includes(n.uid),de=le.pinnedBy?.includes(n.uid);return _e&&!de?-1:!_e&&de?1:0}),a(ae)}),U=Sn(Xt(Re,"groups"),It("members","array-contains",n.uid)),F=Mn(U,G=>{const ae=G.docs.map(ie=>{const le=ie.data();return{id:ie.id,...le,isGroup:!0,displayName:le.name,photoURL:`https://placehold.co/96x96/${le.photoColor?.replace("#","")||"7c3aed"}/FFFFFF?text=${le.name.charAt(0).toUpperCase()}`}});c(ae)});return()=>{x(),F()}},[n.uid]);const g=async(b,x)=>{const U=bt(Re,"friendships",b);x?await on(U,{pinnedBy:td(n.uid)}):await on(U,{pinnedBy:tc(n.uid)})},y=async()=>{if(!d)return;const b=bt(Re,"friendships",d.id);await on(b,{chatDeletedFor:tc(n.uid)}),p(null)},T=[...s,...l];return S.jsxs("div",{className:"flex-grow overflow-y-auto",children:[S.jsxs("div",{className:"flex justify-between items-center p-4",children:[S.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),S.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",children:[S.jsx(pd,{size:16})," Criar Grupo"]})]}),T.length===0?S.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):S.jsx("ul",{className:"divide-y divide-gray-700/50",children:T.map(b=>S.jsx(TL,{chat:b,currentUser:n,onSelectUser:e,onTogglePin:g,onDeleteChat:()=>p(b)},b.id))}),S.jsx(Sc,{isOpen:!!d,onClose:()=>p(null),onConfirm:y,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},TL=({chat:n,currentUser:e,onSelectUser:t,onTogglePin:s,onDeleteChat:a})=>{const l=Jd(n.friendId,n),[c,d]=ne.useState(0),p=n.pinnedBy?.includes(e.uid),g=ne.useRef(null),[y,T]=ne.useState(null);n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId),ne.useEffect(()=>{if(!e)return;const G=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,ae=Sn(Xt(Re,G),It("receiverId","==",e.uid),It("status","in",["sent","delivered"])),ie=Mn(ae,de=>d(de.size)),le=Sn(Xt(Re,G),mA("createdAt","desc"),pA(1)),_e=Mn(le,de=>{de.empty?T(null):T(de.docs[0].data())});return()=>{ie(),_e()}},[n,e]);const b=n.isGroup?n:l;if(!b)return S.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const x=F=>{if(!F)return"Offline";const G=new Date(F.seconds?F.seconds*1e3:F),ae=new Date,ie=new Date(ae.getFullYear(),ae.getMonth(),ae.getDate()),le=new Date(ae.getFullYear(),ae.getMonth(),ae.getDate()-1),_e={hour:"2-digit",minute:"2-digit"},de=G.toLocaleTimeString("pt-BR",_e);if(G>=ie)return`Visto por último hoje às ${de}`;if(G>=le)return`Visto por último ontem às ${de}`;const Oe={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${G.toLocaleDateString("pt-BR",Oe)}`},U=({data:F})=>{const G=n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId);return S.jsxs("div",{className:"relative",children:[F.photoURL?S.jsx("img",{src:F.photoURL,alt:F.displayName,className:"w-12 h-12 rounded-full flex-shrink-0"}):S.jsx("div",{className:"w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold",style:{backgroundColor:F.photoColor||"#7c3aed"},children:F.displayName?.charAt(0).toUpperCase()}),G&&S.jsx("div",{className:"absolute inset-0 bg-black/50 rounded-full flex items-center justify-center",children:S.jsx(xV,{size:20,className:"text-white"})})]})};return S.jsxs("li",{ref:g,onClick:()=>t(b),onContextMenu:F=>{F.preventDefault(),n.isGroup||a()},className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${p?"bg-gray-700/30":""}`,children:[S.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[S.jsx(U,{data:b}),!n.isGroup&&S.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${l?.presence==="online"?"bg-green-500":"bg-gray-500"}`}),S.jsxs("div",{className:"flex-grow min-w-0",children:[S.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:b.displayName}),S.jsx("p",{className:"text-sm text-gray-400 truncate",children:y?y.isDeleted?"Mensagem apagada":y.text:n.isGroup?"Nenhuma mensagem ainda":l?.presence==="online"?"Online":x(l?.last_changed)})]})]}),S.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[c>0&&S.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:c}),!n.isGroup&&S.jsx("button",{onClick:F=>{F.stopPropagation(),s(n.id,p)},className:"p-2 rounded-full hover:bg-gray-600",children:p?S.jsx(WV,{size:18,className:"text-blue-400"}):S.jsx(rv,{size:18,className:"text-gray-500"})})]})]})},bL=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a,onPin:l})=>{const[c,d]=ne.useState(!1),p=ne.useRef(null),g=ne.useRef(),[y,T]=ne.useState("bottom");ne.useEffect(()=>{c&&p.current&&(p.current.getBoundingClientRect().top<150?T("top"):T("bottom"))},[c]),ne.useEffect(()=>{const ae=ie=>{p.current&&!p.current.contains(ie.target)&&d(!1)};return document.addEventListener("mousedown",ae),()=>document.removeEventListener("mousedown",ae)},[]);const b=ae=>{ae.preventDefault(),navigator.vibrate&&navigator.vibrate(50),d(!0)},x=ae=>{g.current=setTimeout(()=>b(ae),500)},U=()=>{clearTimeout(g.current)},F=()=>{clearTimeout(g.current)},G=({msg:ae})=>{if(!e||!ae.status)return null;const ie=ae.status==="read";return S.jsx(MV,{size:16,className:ie?"text-blue-400":"text-gray-400"})};return S.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&S.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:S.jsx(Cg,{size:16})}),S.jsxs("div",{className:"relative",ref:p,onTouchStart:x,onTouchEnd:U,onTouchMove:F,onContextMenu:ae=>{ae.preventDefault(),d(!0)},children:[S.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&S.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[S.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),S.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),S.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":n.text}),!n.isDeleted&&S.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&S.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),S.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),S.jsx(G,{msg:n})]})]}),c&&S.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${y==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10`,children:[S.jsxs("button",{onClick:()=>{l(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[S.jsx(rv,{size:14})," Fixar"]}),S.jsxs("button",{onClick:()=>{t(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[S.jsx(Cg,{size:14})," Responder"]}),e&&!n.isDeleted&&S.jsxs(S.Fragment,{children:[S.jsxs("button",{onClick:()=>{a(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[S.jsx(xC,{size:14})," Editar"]}),S.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[S.jsx(m_,{size:14})," Apagar para mim"]}),S.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[S.jsx(m_,{size:14})," Apagar para todos"]})]})]})]}),e&&S.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:S.jsx(Cg,{size:16})})]})},wL=({onEmojiSelect:n,onClose:e})=>{const t=ne.useRef(null);ne.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍🔥","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return S.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:S.jsx("div",{className:"p-2 overflow-y-auto",children:S.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>S.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},SL=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}},{id:"rose",name:"Rosa",style:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"}},{id:"night",name:"Noite",style:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}}];return S.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:S.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg",onClick:a=>a.stopPropagation(),children:[S.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),S.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>S.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[S.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&S.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:S.jsx(VV,{className:"text-white"})})}),S.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},AL=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=ne.useState(t);return S.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:S.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[S.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),S.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),S.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[S.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),S.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},CL=({groupData:n,currentUser:e,onClose:t,onLeaveChat:s})=>{const[a,l]=ne.useState([]),[c,d]=ne.useState(!1);n.admins?.includes(e.uid),ne.useEffect(()=>{(async()=>{const y=n.members.map(x=>vy(bt(Re,"users",x))),b=(await Promise.all(y)).filter(x=>x.exists()).map(x=>x.data());l(b)})()},[n.members]);const p=async()=>{const g=bt(Re,"groups",n.id);await on(g,{members:td(e.uid),admins:td(e.uid)}),n.members.length===1&&await _A(g),s(),t()};return S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:S.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col h-4/5",onClick:g=>g.stopPropagation(),children:[S.jsxs("div",{className:"flex flex-col items-center mb-4",children:[S.jsx("div",{className:"w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4",style:{backgroundColor:n.photoColor||"#7c3aed"},children:n.name?.charAt(0).toUpperCase()}),S.jsx("h2",{className:"text-2xl font-bold text-white",children:n.name}),S.jsxs("p",{className:"text-gray-400",children:[n.members?.length," membros"]})]}),S.jsxs("div",{className:"flex-grow overflow-y-auto pr-2",children:[S.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Membros"}),S.jsx("ul",{className:"space-y-2",children:a.map(g=>S.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700/50 rounded-lg",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("img",{src:g.photoURL,alt:g.displayName,className:"w-10 h-10 rounded-full"}),S.jsx("span",{className:"text-white",children:g.displayName})]}),n.admins?.includes(g.uid)&&S.jsxs("div",{className:"flex items-center gap-1 text-xs text-yellow-400",children:[S.jsx(jV,{size:14})," Admin"]})]},g.uid))})]}),S.jsxs("div",{className:"mt-6 flex flex-col gap-2",children:[S.jsx("button",{onClick:()=>d(!0),className:"w-full bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Sair do Grupo"}),S.jsx("button",{onClick:t,className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Fechar"})]})]})}),S.jsx(Sc,{isOpen:c,onClose:()=>d(!1),onConfirm:p,title:"Sair do Grupo?",message:"Você tem certeza que quer sair deste grupo? Você não receberá mais mensagens."})]})},Qw=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=ne.useState([]),[l,c]=ne.useState(""),[d,p]=ne.useState(!1),[g,y]=ne.useState(!1),[T,b]=ne.useState(!1),[x,U]=ne.useState(null),[F,G]=ne.useState(null),[ae,ie]=ne.useState(!1),[le,_e]=ne.useState(!1),[de,Oe]=ne.useState(!1),[P,C]=ne.useState(!1),[N,M]=ne.useState(!1),[k,L]=ne.useState(null),[R,Ht]=ne.useState(e),pt=ne.useRef(null),Y=ne.useRef(null),J=e.isGroup,ce=pL(n,e),xe=Jd(e.uid,ce),D=ne.useRef(),X=J?e.id:[n.uid,e.uid].sort().join("_"),oe=ce?.themes?.[n.uid]||"default",te=J?R.pinnedMessage:ce?.pinnedMessage,ge={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"},rose:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"},night:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}},Me=me=>{if(!me)return"";const Ce=new Date(me.seconds?me.seconds*1e3:me),qe=new Date,cn=new Date(qe.getFullYear(),qe.getMonth(),qe.getDate()),ht=new Date(qe.getFullYear(),qe.getMonth(),qe.getDate()-1),Ge={hour:"2-digit",minute:"2-digit"},gt=Ce.toLocaleTimeString("pt-BR",Ge);if(Ce>=cn)return`Visto por último hoje às ${gt}`;if(Ce>=ht)return`Visto por último ontem às ${gt}`;const Zt={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${Ce.toLocaleDateString("pt-BR",Zt)}`};ne.useEffect(()=>{if(J){const me=bt(Re,"groups",e.id),Ce=Mn(me,qe=>{qe.exists()&&Ht({...qe.data(),id:qe.id,isGroup:!0})});return()=>Ce()}},[J,e.id]),ne.useEffect(()=>{D.current=xe?.presence},[xe?.presence]),ne.useEffect(()=>{if(J||D.current==="online"||xe?.presence!=="online")return;const me=Sn(Xt(Re,`conversations/${X}/messages`),It("receiverId","==",n.uid),It("status","==","sent"));ed(me).then(Ce=>{const qe=_g(Re);Ce.docs.forEach(cn=>qe.update(cn.ref,{status:"delivered"})),qe.commit()})},[xe?.presence,X,n.uid,J]),ne.useEffect(()=>{const me=`conversations/${X}/messages`,Ce=Sn(Xt(Re,me),mA("createdAt","asc")),qe=Mn(Ce,cn=>{const ht=cn.docs.map(gt=>({id:gt.id,...gt.data()})).filter(gt=>!gt.deletedFor?.includes(n.uid));if(a(ht),J)return;const Ge=_g(Re);cn.docs.forEach(gt=>{gt.data().receiverId===n.uid&&gt.data().status!=="read"&&Ge.update(gt.ref,{status:"read"})}),Ge.commit()});return()=>qe()},[X,n.uid,J]),ne.useEffect(()=>{if(J)return;const me=La(Ua,`typing/${X}/${e.uid}`),Ce=nv(me,qe=>p(qe.val()===!0));return()=>Ce()},[X,e.uid,J]),ne.useEffect(()=>{pt.current?.scrollIntoView({behavior:"smooth"})},[s]);const be=me=>{if(c(me.target.value),J)return;const Ce=La(Ua,`typing/${X}/${n.uid}`);me.target.value.trim().length>0?(Zd(Ce,!0),Y.current&&clearTimeout(Y.current),Y.current=setTimeout(()=>Ag(Ce),3e3)):Ag(Ce)},kt=async me=>{if(me.preventDefault(),l.trim()===""||!J&&(ce?.blockedBy?.includes(e.uid)||ce?.blockedBy?.includes(n.uid)))return;const Ce=l;c(""),J||(Ag(La(Ua,`typing/${X}/${n.uid}`)),Y.current&&clearTimeout(Y.current));const qe={text:Ce,createdAt:gl(),senderId:n.uid,senderName:n.displayName};J||(qe.receiverId=e.uid,qe.status=xe?.presence==="online"?"delivered":"sent"),x&&(qe.replyTo={id:x.id,text:x.text,senderName:x.senderId===n.uid?"Você":J?x.senderName:e.displayName});try{await Ty(Xt(Re,`conversations/${X}/messages`),qe),U(null)}catch(cn){console.error("Falha ao enviar mensagem:",cn),c(Ce)}},st=async me=>{if(me.preventDefault(),!F||l.trim()==="")return;const Ce=bt(Re,`conversations/${X}/messages`,F.id);await on(Ce,{text:l,edited:!0}),G(null),c("")},Jn=async()=>{if(!k)return;const{id:me,type:Ce}=k,qe=bt(Re,`conversations/${X}/messages`,me);Ce==="self"?await on(qe,{deletedFor:tc(n.uid)}):Ce==="all"&&await on(qe,{text:"",isDeleted:!0,replyTo:null}),L(null)},Ri=async()=>{const me=Sn(Xt(Re,`conversations/${X}/messages`)),Ce=await ed(me),qe=_g(Re);Ce.docs.forEach(cn=>{qe.update(cn.ref,{deletedFor:tc(n.uid)})}),await qe.commit(),Oe(!1)},mi=async()=>{if(!ce)return;const me=bt(Re,"friendships",ce.id);ce.blockedBy?.includes(n.uid)?await on(me,{blockedBy:td(n.uid)}):await on(me,{blockedBy:tc(n.uid)}),_e(!1)},is=async me=>{if(!ce)return;const Ce=bt(Re,"friendships",ce.id);await on(Ce,{[`themes.${n.uid}`]:me}),C(!1)},ss=async me=>{if(!ce||!me.trim())return;const Ce=bt(Re,"friendships",ce.id);await on(Ce,{[`customNames.${n.uid}`]:me.trim()}),M(!1)},rs=async me=>{const Ce=J&&R.admins.includes(n.uid);if(J&&!Ce)return;const qe=J?bt(Re,"groups",R.id):bt(Re,"friendships",ce.id),cn={id:me.id,text:me.text,senderName:me.senderName};await on(qe,{pinnedMessage:cn})},$r=async()=>{const me=J&&R.admins.includes(n.uid);if(J&&!me)return;const Ce=J?bt(Re,"groups",R.id):bt(Re,"friendships",ce.id);await on(Ce,{pinnedMessage:null})},eo=me=>{G(me),c(me.text),U(null)},kn=()=>{G(null),c("")},$s=!J&&ce?.blockedBy?.includes(n.uid),as=!J&&ce?.blockedBy?.includes(e.uid),Ii=J?R.name:xe?.displayName,os=J?R.photoColor?"":R.photoURL:e.photoURL;return S.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[S.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[S.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:S.jsx(IV,{size:24})}),S.jsxs("div",{className:"flex items-center cursor-pointer flex-grow",onClick:()=>J?b(!0):y(!0),children:[J?S.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold mr-4",style:{backgroundColor:R.photoColor||"#7c3aed"},children:Ii?.charAt(0).toUpperCase()}):S.jsx("img",{src:os,alt:Ii,className:"w-10 h-10 rounded-full mr-4"}),S.jsxs("div",{children:[S.jsx("h2",{className:"text-xl font-bold text-white",children:Ii}),S.jsx("p",{className:"text-sm text-blue-300 h-4",children:J?`${R.members?.length||0} membros`:d?"Digitando...":xe?.presence==="online"?"Online":Me(xe?.last_changed)})]})]}),S.jsxs("div",{className:"relative",children:[S.jsx("button",{onClick:()=>_e(me=>!me),className:"p-2 text-gray-400 hover:text-white",children:S.jsx(BV,{})}),le&&S.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[J?S.jsxs("button",{onClick:()=>{b(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[S.jsx(pd,{size:14})," Perfil do Grupo"]}):S.jsxs(S.Fragment,{children:[S.jsxs("button",{onClick:()=>{M(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[S.jsx(xC,{size:14})," Alterar nome do contato"]}),S.jsxs("button",{onClick:()=>{C(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[S.jsx($V,{size:14})," Alterar tema da conversa"]})]}),S.jsxs("button",{onClick:()=>{Oe(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[S.jsx(FV,{size:14})," Limpar conversa"]}),!J&&S.jsxs("button",{onClick:mi,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[S.jsx(oL,{size:14})," ",$s?"Desbloquear":"Bloquear"]})]})]})]}),S.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500 flex flex-col",style:J?ge.default:ge[oe],children:[te&&S.jsx("div",{className:"sticky top-0 bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg mb-4 border border-blue-500/50 animate-fade-in",children:S.jsxs("div",{className:"flex justify-between items-center",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold",children:[S.jsx(rv,{size:12})," MENSAGEM FIXADA"]}),S.jsx("p",{className:"text-sm text-white truncate",children:te.text})]}),(J?R.admins.includes(n.uid):!0)&&S.jsx("button",{onClick:$r,className:"p-1 text-gray-400 hover:text-white",children:S.jsx(p_,{size:16})})]})}),S.jsx("div",{className:"space-y-2 mt-auto",children:s.map(me=>S.jsx(bL,{msg:me,isCurrentUser:me.senderId===n.uid,onReply:()=>U(me),onDelete:Ce=>L({id:me.id,type:Ce}),onEdit:()=>eo(me),onPin:()=>rs(me)},me.id))}),S.jsx("div",{ref:pt})]}),S.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[(x||F)&&S.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[S.jsxs("div",{className:"flex justify-between items-center text-sm",children:[S.jsx("p",{className:"font-bold",children:F?"Editando mensagem":`Respondendo a ${x.senderId===n.uid?"Você":J?x.senderName:xe?.displayName}`}),S.jsx("button",{onClick:F?kn:()=>U(null),className:"p-1",children:S.jsx(p_,{size:16})})]}),S.jsx("p",{className:"text-xs text-gray-400 truncate",children:F?F.text:x.text})]}),S.jsxs("div",{className:"relative flex items-center gap-2",children:[ae&&S.jsx(wL,{onEmojiSelect:me=>c(Ce=>Ce+me),onClose:()=>ie(!1)}),S.jsx("button",{type:"button",onClick:()=>ie(me=>!me),className:"p-2 text-gray-400 hover:text-white",children:S.jsx(nL,{})}),S.jsxs("form",{onSubmit:F?st:kt,className:"flex-grow flex items-center gap-2",children:[S.jsx("input",{type:"text",value:l,onChange:be,placeholder:$s?"Você bloqueou este contato.":as?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:as||$s,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),S.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||as||$s,children:F?S.jsx(iv,{size:20}):S.jsx(eL,{size:20})})]})]})]}),g&&S.jsx(yL,{user:e,onClose:()=>y(!1)}),T&&S.jsx(CL,{groupData:R,currentUser:n,onClose:()=>b(!1),onLeaveChat:t}),P&&S.jsx(SL,{onClose:()=>C(!1),onSelectTheme:is,currentTheme:oe}),N&&S.jsx(AL,{onClose:()=>M(!1),onSave:ss,currentName:xe?.displayName}),S.jsx(Sc,{isOpen:de,onClose:()=>Oe(!1),onConfirm:Ri,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),S.jsx(Sc,{isOpen:!!k,onClose:()=>L(null),onConfirm:Jn,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${k?.type==="all"?"para todos":"para você"}?`})]})},RL=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=ne.useState(""),[l,c]=ne.useState([n.uid]),[d,p]=ne.useState(""),g=T=>{c(b=>b.includes(T)?b.filter(x=>x!==T):[...b,T])},y=async()=>{if(!s.trim()){p("O nome do grupo é obrigatório.");return}if(l.length<2){p("Selecione pelo menos um amigo para criar um grupo.");return}try{await Ty(Xt(Re,"groups"),{name:s.trim(),description:"",members:l,admins:[n.uid],createdAt:gl(),createdBy:n.uid,photoColor:"#7c3aed",pinnedMessage:null}),e()}catch(T){console.error("Erro ao criar grupo:",T),p(`Erro: ${T.message}`)}};return S.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:S.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col",onClick:T=>T.stopPropagation(),children:[S.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),S.jsx("input",{type:"text",value:s,onChange:T=>a(T.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),S.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),S.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(T=>S.jsx(IL,{friendship:T,onToggle:g,isSelected:l.includes(T.friendId)},T.id))}),d&&S.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),S.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[S.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),S.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Criar Grupo"})]})]})})},IL=({friendship:n,onToggle:e,isSelected:t})=>{const s=Jd(n.friendId,n);return s?S.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),S.jsx("span",{className:"text-white",children:s.displayName})]}),S.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&S.jsx(iv,{size:16,className:"text-white"})})]}):null},NL=({user:n,onLogout:e})=>{const[t,s]=ne.useState(null),[a,l]=ne.useState("chats"),[c,d]=ne.useState("list"),[p,g]=ne.useState(!1),[y,T]=ne.useState(!1),[b,x]=ne.useState([]),U=fL(n),F=dL(n);mL(F),ne.useEffect(()=>{if(!n?.uid)return;const _e=Sn(Xt(Re,"friendships"),It("users","array-contains",n.uid),It("status","==","accepted")),de=Mn(_e,Oe=>{const P=Oe.docs.map(C=>({id:C.id,...C.data(),friendId:C.data().users.find(N=>N!==n.uid)}));x(P)});return()=>de()},[n.uid]),ne.useEffect(()=>{d(t?"chat":"list")},[t]);const G=_e=>{s(_e)},ae=()=>{s(null)},ie=({count:_e})=>_e===0?null:S.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:_e}),le=({count:_e})=>_e===0?null:S.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),S.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]});return S.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&S.jsx(vL,{user:n,onClose:()=>g(!1)}),y&&S.jsx(RL,{currentUser:n,onClose:()=>T(!1),friendships:b}),S.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[S.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[S.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[S.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),S.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),S.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:S.jsx(jw,{size:20})})]}),S.jsxs("div",{className:"flex border-b border-gray-700/50",children:[S.jsxs("button",{onClick:()=>l("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[S.jsx(zw,{className:"mx-auto"}),S.jsx(le,{count:F})]}),S.jsx("button",{onClick:()=>l("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:S.jsx(pd,{className:"mx-auto"})}),S.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:S.jsx(Bw,{className:"mx-auto"})}),S.jsxs("button",{onClick:()=>l("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[S.jsx(Uw,{className:"mx-auto"}),S.jsx(ie,{count:U})]})]}),S.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&S.jsx(Gw,{currentUser:n,onSelectUser:G,onCreateGroup:()=>T(!0)}),a==="contacts"&&S.jsx(Hw,{currentUser:n,onSelectUser:G}),a==="add"&&S.jsx(qw,{currentUser:n}),a==="requests"&&S.jsx(Fw,{currentUser:n})]})]}),S.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[S.jsxs("div",{className:`flex-col h-full ${c==="list"?"flex":"hidden"}`,children:[S.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[S.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[S.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),S.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),S.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:S.jsx(jw,{size:20})})]}),S.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&S.jsx(Gw,{currentUser:n,onSelectUser:G,onCreateGroup:()=>T(!0)}),a==="contacts"&&S.jsx(Hw,{currentUser:n,onSelectUser:G}),a==="add"&&S.jsx(qw,{currentUser:n}),a==="requests"&&S.jsx(Fw,{currentUser:n})]}),S.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[S.jsxs("button",{onClick:()=>l("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[S.jsx(zw,{}),S.jsx(le,{count:F})]}),S.jsx("button",{onClick:()=>l("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:S.jsx(pd,{})}),S.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:S.jsx(Bw,{})}),S.jsxs("button",{onClick:()=>l("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[S.jsx(Uw,{}),S.jsx(ie,{count:U})]})]})]}),c==="chat"&&t&&S.jsx(Qw,{currentUser:n,otherUser:t,onLeave:ae})]}),S.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?S.jsx(Qw,{currentUser:n,otherUser:t,onLeave:ae}):S.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[S.jsx(sv,{size:60,className:"mb-4"}),S.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),S.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function xL(){return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),S.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:S.jsx(DL,{})})]})}const DL=()=>{const[n,e]=ne.useState(null),[t,s]=ne.useState(!0),[a,l]=ne.useState(null);hL(n),ne.useEffect(()=>{const d=Ux(oc,async p=>{if(p)e(p);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await Px(oc,__initial_auth_token):e(null)}catch(g){console.error("Falha na autenticação automática, mostrando tela de login.",g),e(null)}s(!1)});return()=>d()},[]),ne.useEffect(()=>{if(!n){l(null);return}const d=bt(Re,"users",n.uid),p=Mn(d,g=>{g.exists()&&l({...n,...g.data()})});return()=>p()},[n]);const c=async()=>{if(n)try{const d=La(Ua,`/status/${n.uid}`);await Zd(d,{state:"offline",last_changed:Date.now()}),await on(bt(Re,`/users/${n.uid}`),{state:"offline",last_changed:gl()}),await jx(oc),e(null)}catch(d){console.error("Erro ao fazer logout:",d)}};return t?S.jsx(gL,{}):a?S.jsx(NL,{user:a,onLogout:c}):S.jsx(_L,{})};cI.createRoot(document.getElementById("root")).render(S.jsx(ne.StrictMode,{children:S.jsx(xL,{})}));
