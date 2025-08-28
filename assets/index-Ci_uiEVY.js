(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Wp={exports:{}},Uu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT;function eI(){if(pT)return Uu;pT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Uu.Fragment=e,Uu.jsx=t,Uu.jsxs=t,Uu}var gT;function tI(){return gT||(gT=1,Wp.exports=eI()),Wp.exports}var A=tI(),Zp={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T;function nI(){if(_T)return De;_T=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,F={};function G(D,X,oe){this.props=D,this.context=X,this.refs=F,this.updater=oe||x}G.prototype.isReactComponent={},G.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ae(){}ae.prototype=G.prototype;function ie(D,X,oe){this.props=D,this.context=X,this.refs=F,this.updater=oe||x}var le=ie.prototype=new ae;le.constructor=ie,U(le,G.prototype),le.isPureReactComponent=!0;var ge=Array.isArray,me={H:null,A:null,T:null,S:null,V:null},Me=Object.prototype.hasOwnProperty;function P(D,X,oe,te,_e,ke){return oe=ke.ref,{$$typeof:n,type:D,key:X,ref:oe!==void 0?oe:null,props:ke}}function C(D,X){return P(D.type,X,void 0,void 0,void 0,D.props)}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function M(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(oe){return X[oe]})}var k=/\/+/g;function L(D,X){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):X.toString(36)}function R(){}function Ft(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function pt(D,X,oe,te,_e){var ke=typeof D;(ke==="undefined"||ke==="boolean")&&(D=null);var be=!1;if(D===null)be=!0;else switch(ke){case"bigint":case"string":case"number":be=!0;break;case"object":switch(D.$$typeof){case n:case e:be=!0;break;case y:return be=D._init,pt(be(D._payload),X,oe,te,_e)}}if(be)return _e=_e(D),be=te===""?"."+L(D,0):te,ge(_e)?(oe="",be!=null&&(oe=be.replace(k,"$&/")+"/"),pt(_e,X,oe,"",function(Jn){return Jn})):_e!=null&&(N(_e)&&(_e=C(_e,oe+(_e.key==null||D&&D.key===_e.key?"":(""+_e.key).replace(k,"$&/")+"/")+be)),X.push(_e)),1;be=0;var Ot=te===""?".":te+":";if(ge(D))for(var st=0;st<D.length;st++)te=D[st],ke=Ot+L(te,st),be+=pt(te,X,oe,ke,_e);else if(st=b(D),typeof st=="function")for(D=st.call(D),st=0;!(te=D.next()).done;)te=te.value,ke=Ot+L(te,st++),be+=pt(te,X,oe,ke,_e);else if(ke==="object"){if(typeof D.then=="function")return pt(Ft(D),X,oe,te,_e);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return be}function Y(D,X,oe){if(D==null)return D;var te=[],_e=0;return pt(D,te,"","",function(ke){return X.call(oe,ke,_e++)}),te}function ee(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(oe){(D._status===0||D._status===-1)&&(D._status=1,D._result=oe)},function(oe){(D._status===0||D._status===-1)&&(D._status=2,D._result=oe)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var ce=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ie(){}return De.Children={map:Y,forEach:function(D,X,oe){Y(D,function(){X.apply(this,arguments)},oe)},count:function(D){var X=0;return Y(D,function(){X++}),X},toArray:function(D){return Y(D,function(X){return X})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},De.Component=G,De.Fragment=t,De.Profiler=a,De.PureComponent=ie,De.StrictMode=s,De.Suspense=p,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,De.__COMPILER_RUNTIME={__proto__:null,c:function(D){return me.H.useMemoCache(D)}},De.cache=function(D){return function(){return D.apply(null,arguments)}},De.cloneElement=function(D,X,oe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var te=U({},D.props),_e=D.key,ke=void 0;if(X!=null)for(be in X.ref!==void 0&&(ke=void 0),X.key!==void 0&&(_e=""+X.key),X)!Me.call(X,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&X.ref===void 0||(te[be]=X[be]);var be=arguments.length-2;if(be===1)te.children=oe;else if(1<be){for(var Ot=Array(be),st=0;st<be;st++)Ot[st]=arguments[st+2];te.children=Ot}return P(D.type,_e,void 0,void 0,ke,te)},De.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},De.createElement=function(D,X,oe){var te,_e={},ke=null;if(X!=null)for(te in X.key!==void 0&&(ke=""+X.key),X)Me.call(X,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(_e[te]=X[te]);var be=arguments.length-2;if(be===1)_e.children=oe;else if(1<be){for(var Ot=Array(be),st=0;st<be;st++)Ot[st]=arguments[st+2];_e.children=Ot}if(D&&D.defaultProps)for(te in be=D.defaultProps,be)_e[te]===void 0&&(_e[te]=be[te]);return P(D,ke,void 0,void 0,null,_e)},De.createRef=function(){return{current:null}},De.forwardRef=function(D){return{$$typeof:d,render:D}},De.isValidElement=N,De.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ee}},De.memo=function(D,X){return{$$typeof:g,type:D,compare:X===void 0?null:X}},De.startTransition=function(D){var X=me.T,oe={};me.T=oe;try{var te=D(),_e=me.S;_e!==null&&_e(oe,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Ie,ce)}catch(ke){ce(ke)}finally{me.T=X}},De.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},De.use=function(D){return me.H.use(D)},De.useActionState=function(D,X,oe){return me.H.useActionState(D,X,oe)},De.useCallback=function(D,X){return me.H.useCallback(D,X)},De.useContext=function(D){return me.H.useContext(D)},De.useDebugValue=function(){},De.useDeferredValue=function(D,X){return me.H.useDeferredValue(D,X)},De.useEffect=function(D,X,oe){var te=me.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(D,X)},De.useId=function(){return me.H.useId()},De.useImperativeHandle=function(D,X,oe){return me.H.useImperativeHandle(D,X,oe)},De.useInsertionEffect=function(D,X){return me.H.useInsertionEffect(D,X)},De.useLayoutEffect=function(D,X){return me.H.useLayoutEffect(D,X)},De.useMemo=function(D,X){return me.H.useMemo(D,X)},De.useOptimistic=function(D,X){return me.H.useOptimistic(D,X)},De.useReducer=function(D,X,oe){return me.H.useReducer(D,X,oe)},De.useRef=function(D){return me.H.useRef(D)},De.useState=function(D){return me.H.useState(D)},De.useSyncExternalStore=function(D,X,oe){return me.H.useSyncExternalStore(D,X,oe)},De.useTransition=function(){return me.H.useTransition()},De.version="19.1.1",De}var yT;function p_(){return yT||(yT=1,Zp.exports=nI()),Zp.exports}var ne=p_(),Jp={exports:{}},ju={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT;function iI(){return vT||(vT=1,(function(n){function e(Y,ee){var ce=Y.length;Y.push(ee);e:for(;0<ce;){var Ie=ce-1>>>1,D=Y[Ie];if(0<a(D,ee))Y[Ie]=ee,Y[ce]=D,ce=Ie;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ee=Y[0],ce=Y.pop();if(ce!==ee){Y[0]=ce;e:for(var Ie=0,D=Y.length,X=D>>>1;Ie<X;){var oe=2*(Ie+1)-1,te=Y[oe],_e=oe+1,ke=Y[_e];if(0>a(te,ce))_e<D&&0>a(ke,te)?(Y[Ie]=ke,Y[_e]=ce,Ie=_e):(Y[Ie]=te,Y[oe]=ce,Ie=oe);else if(_e<D&&0>a(ke,ce))Y[Ie]=ke,Y[_e]=ce,Ie=_e;else break e}}return ee}function a(Y,ee){var ce=Y.sortIndex-ee.sortIndex;return ce!==0?ce:Y.id-ee.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,b=3,x=!1,U=!1,F=!1,G=!1,ae=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function ge(Y){for(var ee=t(g);ee!==null;){if(ee.callback===null)s(g);else if(ee.startTime<=Y)s(g),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=t(g)}}function me(Y){if(F=!1,ge(Y),!U)if(t(p)!==null)U=!0,Me||(Me=!0,L());else{var ee=t(g);ee!==null&&pt(me,ee.startTime-Y)}}var Me=!1,P=-1,C=5,N=-1;function M(){return G?!0:!(n.unstable_now()-N<C)}function k(){if(G=!1,Me){var Y=n.unstable_now();N=Y;var ee=!0;try{e:{U=!1,F&&(F=!1,ie(P),P=-1),x=!0;var ce=b;try{t:{for(ge(Y),T=t(p);T!==null&&!(T.expirationTime>Y&&M());){var Ie=T.callback;if(typeof Ie=="function"){T.callback=null,b=T.priorityLevel;var D=Ie(T.expirationTime<=Y);if(Y=n.unstable_now(),typeof D=="function"){T.callback=D,ge(Y),ee=!0;break t}T===t(p)&&s(p),ge(Y)}else s(p);T=t(p)}if(T!==null)ee=!0;else{var X=t(g);X!==null&&pt(me,X.startTime-Y),ee=!1}}break e}finally{T=null,b=ce,x=!1}ee=void 0}}finally{ee?L():Me=!1}}}var L;if(typeof le=="function")L=function(){le(k)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Ft=R.port2;R.port1.onmessage=k,L=function(){Ft.postMessage(null)}}else L=function(){ae(k,0)};function pt(Y,ee){P=ae(function(){Y(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_next=function(Y){switch(b){case 1:case 2:case 3:var ee=3;break;default:ee=b}var ce=b;b=ee;try{return Y()}finally{b=ce}},n.unstable_requestPaint=function(){G=!0},n.unstable_runWithPriority=function(Y,ee){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ce=b;b=Y;try{return ee()}finally{b=ce}},n.unstable_scheduleCallback=function(Y,ee,ce){var Ie=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Ie+ce:Ie):ce=Ie,Y){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ce+D,Y={id:y++,callback:ee,priorityLevel:Y,startTime:ce,expirationTime:D,sortIndex:-1},ce>Ie?(Y.sortIndex=ce,e(g,Y),t(p)===null&&Y===t(g)&&(F?(ie(P),P=-1):F=!0,pt(me,ce-Ie))):(Y.sortIndex=D,e(p,Y),U||x||(U=!0,Me||(Me=!0,L()))),Y},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(Y){var ee=b;return function(){var ce=b;b=ee;try{return Y.apply(this,arguments)}finally{b=ce}}}})(tg)),tg}var ET;function sI(){return ET||(ET=1,eg.exports=iI()),eg.exports}var ng={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function rI(){if(TT)return En;TT=1;var n=p_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},En.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},En.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},En.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},En.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:x}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:b,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},En.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},En.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},En.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},En.requestFormReset=function(p){s.d.r(p)},En.unstable_batchedUpdates=function(p,g){return p(g)},En.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},En.useFormStatus=function(){return c.H.useHostTransitionStatus()},En.version="19.1.1",En}var bT;function aI(){if(bT)return ng.exports;bT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ng.exports=rI(),ng.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST;function oI(){if(ST)return ju;ST=1;var n=sI(),e=p_(),t=aI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),le=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function Ft(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case G:return"Profiler";case F:return"StrictMode";case me:return"Suspense";case Me:return"SuspenseList";case N:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case x:return"Portal";case le:return(i.displayName||"Context")+".Provider";case ie:return(i._context.displayName||"Context")+".Consumer";case ge:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:Ft(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return Ft(i(r))}catch{}}return null}var pt=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Ie=[],D=-1;function X(i){return{current:i}}function oe(i){0>D||(i.current=Ie[D],Ie[D]=null,D--)}function te(i,r){D++,Ie[D]=i.current,i.current=r}var _e=X(null),ke=X(null),be=X(null),Ot=X(null);function st(i,r){switch(te(be,r),te(ke,i),te(_e,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?FE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=FE(r),i=HE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}oe(_e),te(_e,i)}function Jn(){oe(_e),oe(ke),oe(be)}function Ri(i){i.memoizedState!==null&&te(Ot,i);var r=_e.current,o=HE(r,i.type);r!==o&&(te(ke,i),te(_e,o))}function mi(i){ke.current===i&&(oe(_e),oe(ke)),Ot.current===i&&(oe(Ot),Mu._currentValue=ce)}var ns=Object.prototype.hasOwnProperty,is=n.unstable_scheduleCallback,ss=n.unstable_cancelCallback,Kr=n.unstable_shouldYield,eo=n.unstable_requestPaint,on=n.unstable_now,$r=n.unstable_getCurrentPriorityLevel,rs=n.unstable_ImmediatePriority,Ys=n.unstable_UserBlockingPriority,de=n.unstable_NormalPriority,Ne=n.unstable_LowPriority,ze=n.unstable_IdlePriority,yn=n.log,Ks=n.unstable_setDisableYieldValue,ut=null,xe=null;function Rn(i){if(typeof yn=="function"&&Ks(i),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(ut,i)}catch{}}var ln=Math.clz32?Math.clz32:Xr,Bc=Math.log,Jd=Math.LN2;function Xr(i){return i>>>=0,i===0?32:31-(Bc(i)/Jd|0)|0}var Wr=256,Zr=4194304;function pi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function to(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=pi(u):(E&=S,E!==0?f=pi(E):o||(o=S&~i,o!==0&&(f=pi(o))))):(S=u&~m,S!==0?f=pi(S):E!==0?f=pi(E):o||(o=u&~i,o!==0&&(f=pi(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Jr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Ml(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kl(){var i=Wr;return Wr<<=1,(Wr&4194048)===0&&(Wr=256),i}function Pl(){var i=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),i}function as(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function os(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Vl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,I=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var K=31-ln(o),Z=1<<K;S[K]=0,I[K]=-1;var B=q[K];if(B!==null)for(q[K]=null,K=0;K<B.length;K++){var H=B[K];H!==null&&(H.lane&=-536870913)}o&=~Z}u!==0&&Ii(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function Ii(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-ln(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Ll(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-ln(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function $s(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function no(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Xs(){var i=ee.p;return i!==0?i:(i=window.event,i===void 0?32:uT(i.type))}function Fc(i,r){var o=ee.p;try{return ee.p=i,r()}finally{ee.p=o}}var yt=Math.random().toString(36).slice(2),Ht="__reactFiber$"+yt,Mt="__reactProps$"+yt,ei="__reactContainer$"+yt,Ul="__reactEvents$"+yt,em="__reactListeners$"+yt,Ws="__reactHandles$"+yt,Hc="__reactResources$"+yt,ea="__reactMarker$"+yt;function Zs(i){delete i[Ht],delete i[Mt],delete i[Ul],delete i[em],delete i[Ws]}function ls(i){var r=i[Ht];if(r)return r;for(var o=i.parentNode;o;){if(r=o[ei]||o[Ht]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=KE(i);i!==null;){if(o=i[Ht])return o;i=KE(i)}return r}i=o,o=i.parentNode}return null}function Ni(i){if(i=i[Ht]||i[ei]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function xi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function In(i){var r=i[Hc];return r||(r=i[Hc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Rt(i){i[ea]=!0}var jl=new Set,io={};function gi(i,r){us(i,r),us(i+"Capture",r)}function us(i,r){for(io[i]=r,i=0;i<r.length;i++)jl.add(r[i])}var Gc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qc={},ta={};function Yc(i){return ns.call(ta,i)?!0:ns.call(Qc,i)?!1:Gc.test(i)?ta[i]=!0:(Qc[i]=!0,!1)}function Js(i,r,o){if(Yc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Di(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function un(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var na,Kc;function cs(i){if(na===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);na=r&&r[1]||"",Kc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+na+i+Kc}var so=!1;function ro(i,r){if(!i||so)return"";so=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(H){var B=H}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(H){B=H}i.call(Z.prototype)}}else{try{throw Error()}catch(H){B=H}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var I=E.split(`
`),q=S.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===q.length)for(u=I.length-1,f=q.length-1;1<=u&&0<=f&&I[u]!==q[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==q[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==q[f]){var K=`
`+I[u].replace(" at new "," at ");return i.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",i.displayName)),K}while(1<=u&&0<=f);break}}}finally{so=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?cs(o):""}function zl(i){switch(i.tag){case 26:case 27:case 5:return cs(i.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 15:return ro(i.type,!1);case 11:return ro(i.type.render,!1);case 1:return ro(i.type,!0);case 31:return cs("Activity");default:return""}}function ao(i){try{var r="";do r+=zl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Nn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ql(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tm(i){var r=ql(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function oo(i){i._valueTracker||(i._valueTracker=tm(i))}function Bl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=ql(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function ia(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var nm=/[\n"\\]/g;function kt(i){return i.replace(nm,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Fn(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Nn(r)):i.value!==""+Nn(r)&&(i.value=""+Nn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?er(i,E,Nn(r)):o!=null?er(i,E,Nn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+Nn(S):i.removeAttribute("name")}function sa(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+Nn(o):"",r=r!=null?""+Nn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function er(i,r,o){r==="number"&&ia(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function hs(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+Nn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function rt(i,r,o){if(r!=null&&(r=""+Nn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+Nn(o):""}function ra(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(pt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=Nn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function ti(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var aa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $c(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||aa.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Fl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&$c(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&$c(i,m,r[m])}function Hl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lo(i){return sm.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var fs=null;function ni(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ds=null,ms=null;function Gl(i){var r=Ni(i);if(r&&(i=r.stateNode)){var o=i[Mt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Fn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+kt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Mt]||null;if(!f)throw Error(s(90));Fn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Bl(u)}break e;case"textarea":rt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&hs(i,!!o.multiple,r,!1)}}}var Oi=!1;function Xc(i,r,o){if(Oi)return i(r,o);Oi=!0;try{var u=i(r);return u}finally{if(Oi=!1,(ds!==null||ms!==null)&&(Fh(),ds&&(r=ds,i=ms,ms=ds=null,Gl(r),i)))for(r=0;r<i.length;r++)Gl(i[r])}}function oa(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Mt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=!1;if(_i)try{var la={};Object.defineProperty(la,"passive",{get:function(){ii=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{ii=!1}var Mi=null,tr=null,ps=null;function Ql(){if(ps)return ps;var i,r=tr,o=r.length,u,f="value"in Mi?Mi.value:Mi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return ps=f.slice(i,1<u?1-u:void 0)}function ki(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Pi(){return!0}function Yl(){return!1}function Wt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pi:Yl,this.isPropagationStopped=Yl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),r}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=Wt(Je),ua=y({},Je,{view:0,detail:0}),Wc=Wt(ua),co,ho,Vi,ca=y({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Vi&&(Vi&&i.type==="mousemove"?(co=i.screenX-Vi.screenX,ho=i.screenY-Vi.screenY):ho=co=0,Vi=i),co)},movementY:function(i){return"movementY"in i?i.movementY:ho}}),si=Wt(ca),Zc=y({},ca,{dataTransfer:0}),rm=Wt(Zc),ha=y({},ua,{relatedTarget:0}),fo=Wt(ha),Kl=y({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),mo=Wt(Kl),Jc=y({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),po=Wt(Jc),am=y({},Je,{data:0}),$l=Wt(am),fa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=th[i])?!!r[i]:!1}function da(){return Xl}var nh=y({},ua,{key:function(i){if(i.key){var r=fa[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=ki(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?eh[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(i){return i.type==="keypress"?ki(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ki(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),go=Wt(nh),ih=y({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=Wt(ih),gs=y({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),sh=Wt(gs),rh=y({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),ah=Wt(rh),oh=y({},ca,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),_o=Wt(oh),xn=y({},Je,{newState:0,oldState:0}),lh=Wt(xn),uh=[9,13,27,32],Li=_i&&"CompositionEvent"in window,h=null;_i&&"documentMode"in document&&(h=document.documentMode);var _=_i&&"TextEvent"in window&&!h,v=_i&&(!Li||h&&8<h&&11>=h),w=" ",j=!1;function Q(i,r){switch(i){case"keyup":return uh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Qe=!1;function Gt(i,r){switch(i){case"compositionend":return se(r);case"keypress":return r.which!==32?null:(j=!0,w);case"textInput":return i=r.data,i===w&&j?null:i;default:return null}}function Ye(i,r){if(Qe)return i==="compositionend"||!Li&&Q(i,r)?(i=Ql(),ps=tr=Mi=null,Qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Zt[i.type]:r==="textarea"}function _s(i,r,o,u){ds?ms?ms.push(u):ms=[u]:ds=u,r=$h(r,"onChange"),0<r.length&&(o=new uo("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var cn=null,Ui=null;function Zl(i){UE(i,0)}function ch(i){var r=xi(i);if(Bl(r))return i}function rv(i,r){if(i==="change")return r}var av=!1;if(_i){var om;if(_i){var lm="oninput"in document;if(!lm){var ov=document.createElement("div");ov.setAttribute("oninput","return;"),lm=typeof ov.oninput=="function"}om=lm}else om=!1;av=om&&(!document.documentMode||9<document.documentMode)}function lv(){cn&&(cn.detachEvent("onpropertychange",uv),Ui=cn=null)}function uv(i){if(i.propertyName==="value"&&ch(Ui)){var r=[];_s(r,Ui,i,ni(i)),Xc(Zl,r)}}function xC(i,r,o){i==="focusin"?(lv(),cn=r,Ui=o,cn.attachEvent("onpropertychange",uv)):i==="focusout"&&lv()}function DC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ch(Ui)}function OC(i,r){if(i==="click")return ch(r)}function MC(i,r){if(i==="input"||i==="change")return ch(r)}function kC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Hn=typeof Object.is=="function"?Object.is:kC;function Jl(i,r){if(Hn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!ns.call(r,f)||!Hn(i[f],r[f]))return!1}return!0}function cv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function hv(i,r){var o=cv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=cv(o)}}function fv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?fv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function dv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=ia(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=ia(i.document)}return r}function um(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var PC=_i&&"documentMode"in document&&11>=document.documentMode,yo=null,cm=null,eu=null,hm=!1;function mv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hm||yo==null||yo!==ia(u)||(u=yo,"selectionStart"in u&&um(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),eu&&Jl(eu,u)||(eu=u,u=$h(cm,"onSelect"),0<u.length&&(r=new uo("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=yo)))}function ma(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var vo={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},fm={},pv={};_i&&(pv=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function pa(i){if(fm[i])return fm[i];if(!vo[i])return i;var r=vo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in pv)return fm[i]=r[o];return i}var gv=pa("animationend"),_v=pa("animationiteration"),yv=pa("animationstart"),VC=pa("transitionrun"),LC=pa("transitionstart"),UC=pa("transitioncancel"),vv=pa("transitionend"),Ev=new Map,dm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dm.push("scrollEnd");function yi(i,r){Ev.set(i,r),gi(r,[i])}var Tv=new WeakMap;function ri(i,r){if(typeof i=="object"&&i!==null){var o=Tv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:ao(r)},Tv.set(i,r),r)}return{value:i,source:r,stack:ao(r)}}var ai=[],Eo=0,mm=0;function hh(){for(var i=Eo,r=mm=Eo=0;r<i;){var o=ai[r];ai[r++]=null;var u=ai[r];ai[r++]=null;var f=ai[r];ai[r++]=null;var m=ai[r];if(ai[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&bv(o,f,m)}}function fh(i,r,o,u){ai[Eo++]=i,ai[Eo++]=r,ai[Eo++]=o,ai[Eo++]=u,mm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function pm(i,r,o,u){return fh(i,r,o,u),dh(i)}function To(i,r){return fh(i,null,null,r),dh(i)}function bv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-ln(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function dh(i){if(50<Au)throw Au=0,Tp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var bo={};function jC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(i,r,o,u){return new jC(i,r,o,u)}function gm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ys(i,r){var o=i.alternate;return o===null?(o=Gn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Sv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function mh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")gm(i)&&(E=1);else if(typeof i=="string")E=qR(i,o,_e.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case N:return i=Gn(31,o,r,f),i.elementType=N,i.lanes=m,i;case U:return ga(o.children,f,m,r);case F:E=8,f|=24;break;case G:return i=Gn(12,o,r,f|2),i.elementType=G,i.lanes=m,i;case me:return i=Gn(13,o,r,f),i.elementType=me,i.lanes=m,i;case Me:return i=Gn(19,o,r,f),i.elementType=Me,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ae:case le:E=10;break e;case ie:E=9;break e;case ge:E=11;break e;case P:E=14;break e;case C:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Gn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ga(i,r,o,u){return i=Gn(7,i,u,r),i.lanes=o,i}function _m(i,r,o){return i=Gn(6,i,null,r),i.lanes=o,i}function ym(i,r,o){return r=Gn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var So=[],wo=0,ph=null,gh=0,oi=[],li=0,_a=null,vs=1,Es="";function ya(i,r){So[wo++]=gh,So[wo++]=ph,ph=i,gh=r}function wv(i,r,o){oi[li++]=vs,oi[li++]=Es,oi[li++]=_a,_a=i;var u=vs;i=Es;var f=32-ln(u)-1;u&=~(1<<f),o+=1;var m=32-ln(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,vs=1<<32-ln(r)+f|o<<f|u,Es=m+i}else vs=1<<m|o<<f|u,Es=i}function vm(i){i.return!==null&&(ya(i,1),wv(i,1,0))}function Em(i){for(;i===ph;)ph=So[--wo],So[wo]=null,gh=So[--wo],So[wo]=null;for(;i===_a;)_a=oi[--li],oi[li]=null,Es=oi[--li],oi[li]=null,vs=oi[--li],oi[li]=null}var Dn=null,St=null,We=!1,va=null,ji=!1,Tm=Error(s(519));function Ea(i){var r=Error(s(418,""));throw iu(ri(r,i)),Tm}function Av(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Ht]=i,r[Mt]=u,o){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(o=0;o<Ru.length;o++)Be(Ru[o],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Be("invalid",r),sa(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),oo(r);break;case"select":Be("invalid",r);break;case"textarea":Be("invalid",r),ra(r,u.value,u.defaultValue,u.children),oo(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||BE(r.textContent,o)?(u.popover!=null&&(Be("beforetoggle",r),Be("toggle",r)),u.onScroll!=null&&Be("scroll",r),u.onScrollEnd!=null&&Be("scrollend",r),u.onClick!=null&&(r.onclick=Xh),r=!0):r=!1,r||Ea(i)}function Cv(i){for(Dn=i.return;Dn;)switch(Dn.tag){case 5:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Dn=Dn.return}}function tu(i){if(i!==Dn)return!1;if(!We)return Cv(i),We=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Lp(i.type,i.memoizedProps)),o=!o),o&&St&&Ea(i),Cv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){St=Ei(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}St=null}}else r===27?(r=St,_r(i.type)?(i=qp,qp=null,St=i):St=r):St=Dn?Ei(i.stateNode.nextSibling):null;return!0}function nu(){St=Dn=null,We=!1}function Rv(){var i=va;return i!==null&&(Ln===null?Ln=i:Ln.push.apply(Ln,i),va=null),i}function iu(i){va===null?va=[i]:va.push(i)}var bm=X(null),Ta=null,Ts=null;function nr(i,r,o){te(bm,r._currentValue),r._currentValue=o}function bs(i){i._currentValue=bm.current,oe(bm)}function Sm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function wm(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var I=0;I<r.length;I++)if(S.context===r[I]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Sm(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Sm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function su(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Hn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===Ot.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Mu):i=[Mu])}f=f.return}i!==null&&wm(r,i,o,u),r.flags|=262144}function _h(i){for(i=i.firstContext;i!==null;){if(!Hn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ba(i){Ta=i,Ts=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function vn(i){return Iv(Ta,i)}function yh(i,r){return Ta===null&&ba(i),Iv(i,r)}function Iv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ts===null){if(i===null)throw Error(s(308));Ts=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Ts=Ts.next=r;return o}var zC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},qC=n.unstable_scheduleCallback,BC=n.unstable_NormalPriority,Yt={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Am(){return{controller:new zC,data:new Map,refCount:0}}function ru(i){i.refCount--,i.refCount===0&&qC(BC,function(){i.controller.abort()})}var au=null,Cm=0,Ao=0,Co=null;function FC(i,r){if(au===null){var o=au=[];Cm=0,Ao=Ip(),Co={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Cm++,r.then(Nv,Nv),r}function Nv(){if(--Cm===0&&au!==null){Co!==null&&(Co.status="fulfilled");var i=au;au=null,Ao=0,Co=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function HC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var xv=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&FC(i,r),xv!==null&&xv(i,r)};var Sa=X(null);function Rm(){var i=Sa.current;return i!==null?i:ft.pooledCache}function vh(i,r){r===null?te(Sa,Sa.current):te(Sa,r.pool)}function Dv(){var i=Rm();return i===null?null:{parent:Yt._currentValue,pool:i}}var ou=Error(s(460)),Ov=Error(s(474)),Eh=Error(s(542)),Im={then:function(){}};function Mv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Th(){}function kv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Th,Th),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Vv(i),i;default:if(typeof r.status=="string")r.then(Th,Th);else{if(i=ft,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Vv(i),i}throw lu=r,ou}}var lu=null;function Pv(){if(lu===null)throw Error(s(459));var i=lu;return lu=null,i}function Vv(i){if(i===ou||i===Eh)throw Error(s(483))}var ir=!1;function Nm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function sr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function rr(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(tt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=dh(i),bv(i,null,o),r}return fh(i,u,r,o),dh(i)}function uu(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ll(i,o)}}function Dm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Om=!1;function cu(){if(Om){var i=Co;if(i!==null)throw i}}function hu(i,r,o,u){Om=!1;var f=i.updateQueue;ir=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var I=S,q=I.next;I.next=null,E===null?m=q:E.next=q,E=I;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=q:S.next=q,K.lastBaseUpdate=I))}if(m!==null){var Z=f.baseState;E=0,K=q=I=null,S=m;do{var B=S.lane&-536870913,H=B!==S.lane;if(H?(Ke&B)===B:(u&B)===B){B!==0&&B===Ao&&(Om=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Se=i,ve=S;B=r;var lt=o;switch(ve.tag){case 1:if(Se=ve.payload,typeof Se=="function"){Z=Se.call(lt,Z,B);break e}Z=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ve.payload,B=typeof Se=="function"?Se.call(lt,Z,B):Se,B==null)break e;Z=y({},Z,B);break e;case 2:ir=!0}}B=S.callback,B!==null&&(i.flags|=64,H&&(i.flags|=8192),H=f.callbacks,H===null?f.callbacks=[B]:H.push(B))}else H={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(q=K=H,I=Z):K=K.next=H,E|=B;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;H=S,S=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);K===null&&(I=Z),f.baseState=I,f.firstBaseUpdate=q,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),dr|=E,i.lanes=E,i.memoizedState=Z}}function Lv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Uv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Lv(o[i],r)}var Ro=X(null),bh=X(0);function jv(i,r){i=Ns,te(bh,i),te(Ro,r),Ns=i|r.baseLanes}function Mm(){te(bh,Ns),te(Ro,Ro.current)}function km(){Ns=bh.current,oe(Ro),oe(bh)}var ar=0,Pe=null,at=null,Pt=null,Sh=!1,Io=!1,wa=!1,wh=0,fu=0,No=null,GC=0;function It(){throw Error(s(321))}function Pm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Hn(i[o],r[o]))return!1;return!0}function Vm(i,r,o,u,f,m){return ar=m,Pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?b0:S0,wa=!1,m=o(u,f),wa=!1,Io&&(m=qv(r,o,u,f)),zv(i),m}function zv(i){Y.H=xh;var r=at!==null&&at.next!==null;if(ar=0,Pt=at=Pe=null,Sh=!1,fu=0,No=null,r)throw Error(s(300));i===null||Jt||(i=i.dependencies,i!==null&&_h(i)&&(Jt=!0))}function qv(i,r,o,u){Pe=i;var f=0;do{if(Io&&(No=null),fu=0,Io=!1,25<=f)throw Error(s(301));if(f+=1,Pt=at=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=ZC,m=r(o,u)}while(Io);return m}function QC(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?du(r):r,i=i.useState()[0],(at!==null?at.memoizedState:null)!==i&&(Pe.flags|=1024),r}function Lm(){var i=wh!==0;return wh=0,i}function Um(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function jm(i){if(Sh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sh=!1}ar=0,Pt=at=Pe=null,Io=!1,fu=wh=0,No=null}function Pn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?Pe.memoizedState=Pt=i:Pt=Pt.next=i,Pt}function Vt(){if(at===null){var i=Pe.alternate;i=i!==null?i.memoizedState:null}else i=at.next;var r=Pt===null?Pe.memoizedState:Pt.next;if(r!==null)Pt=r,at=i;else{if(i===null)throw Pe.alternate===null?Error(s(467)):Error(s(310));at=i,i={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Pt===null?Pe.memoizedState=Pt=i:Pt=Pt.next=i}return Pt}function zm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function du(i){var r=fu;return fu+=1,No===null&&(No=[]),i=kv(No,i,r),r=Pe,(Pt===null?r.memoizedState:Pt.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?b0:S0),i}function Ah(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return du(i);if(i.$$typeof===le)return vn(i)}throw Error(s(438,String(i)))}function qm(i){var r=null,o=Pe.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=zm(),Pe.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=M;return r.index++,o}function Ss(i,r){return typeof r=="function"?r(i):r}function Ch(i){var r=Vt();return Bm(r,at,i)}function Bm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,I=null,q=r,K=!1;do{var Z=q.lane&-536870913;if(Z!==q.lane?(Ke&Z)===Z:(ar&Z)===Z){var B=q.revertLane;if(B===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Z===Ao&&(K=!0);else if((ar&B)===B){q=q.next,B===Ao&&(K=!0);continue}else Z={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(S=I=Z,E=m):I=I.next=Z,Pe.lanes|=B,dr|=B;Z=q.action,wa&&o(m,Z),m=q.hasEagerState?q.eagerState:o(m,Z)}else B={lane:Z,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(S=I=B,E=m):I=I.next=B,Pe.lanes|=Z,dr|=Z;q=q.next}while(q!==null&&q!==r);if(I===null?E=m:I.next=S,!Hn(m,i.memoizedState)&&(Jt=!0,K&&(o=Co,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=I,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Fm(i){var r=Vt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Hn(m,r.memoizedState)||(Jt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Bv(i,r,o){var u=Pe,f=Vt(),m=We;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Hn((at||f).memoizedState,o);E&&(f.memoizedState=o,Jt=!0),f=f.queue;var S=Gv.bind(null,u,f,i);if(mu(2048,8,S,[i]),f.getSnapshot!==r||E||Pt!==null&&Pt.memoizedState.tag&1){if(u.flags|=2048,xo(9,Rh(),Hv.bind(null,u,f,o,r),null),ft===null)throw Error(s(349));m||(ar&124)!==0||Fv(u,r,o)}return o}function Fv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Pe.updateQueue,r===null?(r=zm(),Pe.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Hv(i,r,o,u){r.value=o,r.getSnapshot=u,Qv(r)&&Yv(i)}function Gv(i,r,o){return o(function(){Qv(r)&&Yv(i)})}function Qv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Hn(i,o)}catch{return!0}}function Yv(i){var r=To(i,2);r!==null&&Xn(r,i,2)}function Hm(i){var r=Pn();if(typeof i=="function"){var o=i;if(i=o(),wa){Rn(!0);try{o()}finally{Rn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:i},r}function Kv(i,r,o,u){return i.baseState=o,Bm(i,at,typeof u=="function"?u:Ss)}function YC(i,r,o,u,f){if(Nh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,$v(r,m)):(m.next=o.next,r.pending=o.next=m)}}function $v(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Y.T,E={};Y.T=E;try{var S=o(f,u),I=Y.S;I!==null&&I(E,S),Xv(i,r,S)}catch(q){Gm(i,r,q)}finally{Y.T=m}}else try{m=o(f,u),Xv(i,r,m)}catch(q){Gm(i,r,q)}}function Xv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Wv(i,r,u)},function(u){return Gm(i,r,u)}):Wv(i,r,o)}function Wv(i,r,o){r.status="fulfilled",r.value=o,Zv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,$v(i,o)))}function Gm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Zv(r),r=r.next;while(r!==u)}i.action=null}function Zv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Jv(i,r){return r}function e0(i,r){if(We){var o=ft.formState;if(o!==null){e:{var u=Pe;if(We){if(St){t:{for(var f=St,m=ji;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){St=Ei(f.nextSibling),u=f.data==="F!";break e}}Ea(u)}u=!1}u&&(r=o[0])}}return o=Pn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jv,lastRenderedState:r},o.queue=u,o=v0.bind(null,Pe,u),u.dispatch=o,u=Hm(!1),m=Xm.bind(null,Pe,!1,u.queue),u=Pn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=YC.bind(null,Pe,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function t0(i){var r=Vt();return n0(r,at,i)}function n0(i,r,o){if(r=Bm(i,r,Jv)[0],i=Ch(Ss)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=du(r)}catch(E){throw E===ou?Eh:E}else u=r;r=Vt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Pe.flags|=2048,xo(9,Rh(),KC.bind(null,f,o),null)),[u,m,i]}function KC(i,r){i.action=r}function i0(i){var r=Vt(),o=at;if(o!==null)return n0(r,o,i);Vt(),r=r.memoizedState,o=Vt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function xo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Pe.updateQueue,r===null&&(r=zm(),Pe.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Rh(){return{destroy:void 0,resource:void 0}}function s0(){return Vt().memoizedState}function Ih(i,r,o,u){var f=Pn();u=u===void 0?null:u,Pe.flags|=i,f.memoizedState=xo(1|r,Rh(),o,u)}function mu(i,r,o,u){var f=Vt();u=u===void 0?null:u;var m=f.memoizedState.inst;at!==null&&u!==null&&Pm(u,at.memoizedState.deps)?f.memoizedState=xo(r,m,o,u):(Pe.flags|=i,f.memoizedState=xo(1|r,m,o,u))}function r0(i,r){Ih(8390656,8,i,r)}function a0(i,r){mu(2048,8,i,r)}function o0(i,r){return mu(4,2,i,r)}function l0(i,r){return mu(4,4,i,r)}function u0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function c0(i,r,o){o=o!=null?o.concat([i]):null,mu(4,4,u0.bind(null,r,i),o)}function Qm(){}function h0(i,r){var o=Vt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Pm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function f0(i,r){var o=Vt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Pm(r,u[1]))return u[0];if(u=i(),wa){Rn(!0);try{i()}finally{Rn(!1)}}return o.memoizedState=[u,r],u}function Ym(i,r,o){return o===void 0||(ar&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=pE(),Pe.lanes|=i,dr|=i,o)}function d0(i,r,o,u){return Hn(o,r)?o:Ro.current!==null?(i=Ym(i,o,u),Hn(i,r)||(Jt=!0),i):(ar&42)===0?(Jt=!0,i.memoizedState=o):(i=pE(),Pe.lanes|=i,dr|=i,r)}function m0(i,r,o,u,f){var m=ee.p;ee.p=m!==0&&8>m?m:8;var E=Y.T,S={};Y.T=S,Xm(i,!1,r,o);try{var I=f(),q=Y.S;if(q!==null&&q(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=HC(I,u);pu(i,r,K,$n(i))}else pu(i,r,u,$n(i))}catch(Z){pu(i,r,{then:function(){},status:"rejected",reason:Z},$n())}finally{ee.p=m,Y.T=E}}function $C(){}function Km(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=p0(i).queue;m0(i,f,r,ce,o===null?$C:function(){return g0(i),o(u)})}function p0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:ce},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function g0(i){var r=p0(i).next.queue;pu(i,r,{},$n())}function $m(){return vn(Mu)}function _0(){return Vt().memoizedState}function y0(){return Vt().memoizedState}function XC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=$n();i=sr(o);var u=rr(r,i,o);u!==null&&(Xn(u,r,o),uu(u,r,o)),r={cache:Am()},i.payload=r;return}r=r.return}}function WC(i,r,o){var u=$n();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Nh(i)?E0(r,o):(o=pm(i,r,o,u),o!==null&&(Xn(o,i,u),T0(o,r,u)))}function v0(i,r,o){var u=$n();pu(i,r,o,u)}function pu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nh(i))E0(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Hn(S,E))return fh(i,r,f,0),ft===null&&hh(),!1}catch{}finally{}if(o=pm(i,r,f,u),o!==null)return Xn(o,i,u),T0(o,r,u),!0}return!1}function Xm(i,r,o,u){if(u={lane:2,revertLane:Ip(),action:u,hasEagerState:!1,eagerState:null,next:null},Nh(i)){if(r)throw Error(s(479))}else r=pm(i,o,u,2),r!==null&&Xn(r,i,2)}function Nh(i){var r=i.alternate;return i===Pe||r!==null&&r===Pe}function E0(i,r){Io=Sh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function T0(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ll(i,o)}}var xh={readContext:vn,use:Ah,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useInsertionEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useSyncExternalStore:It,useId:It,useHostTransitionStatus:It,useFormState:It,useActionState:It,useOptimistic:It,useMemoCache:It,useCacheRefresh:It},b0={readContext:vn,use:Ah,useCallback:function(i,r){return Pn().memoizedState=[i,r===void 0?null:r],i},useContext:vn,useEffect:r0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Ih(4194308,4,u0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Ih(4194308,4,i,r)},useInsertionEffect:function(i,r){Ih(4,2,i,r)},useMemo:function(i,r){var o=Pn();r=r===void 0?null:r;var u=i();if(wa){Rn(!0);try{i()}finally{Rn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Pn();if(o!==void 0){var f=o(r);if(wa){Rn(!0);try{o(r)}finally{Rn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=WC.bind(null,Pe,i),[u.memoizedState,i]},useRef:function(i){var r=Pn();return i={current:i},r.memoizedState=i},useState:function(i){i=Hm(i);var r=i.queue,o=v0.bind(null,Pe,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Qm,useDeferredValue:function(i,r){var o=Pn();return Ym(o,i,r)},useTransition:function(){var i=Hm(!1);return i=m0.bind(null,Pe,i.queue,!0,!1),Pn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Pe,f=Pn();if(We){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ft===null)throw Error(s(349));(Ke&124)!==0||Fv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,r0(Gv.bind(null,u,m,i),[i]),u.flags|=2048,xo(9,Rh(),Hv.bind(null,u,m,o,r),null),o},useId:function(){var i=Pn(),r=ft.identifierPrefix;if(We){var o=Es,u=vs;o=(u&~(1<<32-ln(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=wh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=GC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:$m,useFormState:e0,useActionState:e0,useOptimistic:function(i){var r=Pn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Xm.bind(null,Pe,!0,o),o.dispatch=r,[i,r]},useMemoCache:qm,useCacheRefresh:function(){return Pn().memoizedState=XC.bind(null,Pe)}},S0={readContext:vn,use:Ah,useCallback:h0,useContext:vn,useEffect:a0,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:f0,useReducer:Ch,useRef:s0,useState:function(){return Ch(Ss)},useDebugValue:Qm,useDeferredValue:function(i,r){var o=Vt();return d0(o,at.memoizedState,i,r)},useTransition:function(){var i=Ch(Ss)[0],r=Vt().memoizedState;return[typeof i=="boolean"?i:du(i),r]},useSyncExternalStore:Bv,useId:_0,useHostTransitionStatus:$m,useFormState:t0,useActionState:t0,useOptimistic:function(i,r){var o=Vt();return Kv(o,at,i,r)},useMemoCache:qm,useCacheRefresh:y0},ZC={readContext:vn,use:Ah,useCallback:h0,useContext:vn,useEffect:a0,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:l0,useMemo:f0,useReducer:Fm,useRef:s0,useState:function(){return Fm(Ss)},useDebugValue:Qm,useDeferredValue:function(i,r){var o=Vt();return at===null?Ym(o,i,r):d0(o,at.memoizedState,i,r)},useTransition:function(){var i=Fm(Ss)[0],r=Vt().memoizedState;return[typeof i=="boolean"?i:du(i),r]},useSyncExternalStore:Bv,useId:_0,useHostTransitionStatus:$m,useFormState:i0,useActionState:i0,useOptimistic:function(i,r){var o=Vt();return at!==null?Kv(o,at,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:qm,useCacheRefresh:y0},Do=null,gu=0;function Dh(i){var r=gu;return gu+=1,Do===null&&(Do=[]),kv(Do,i,r)}function _u(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Oh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function w0(i){var r=i._init;return r(i._payload)}function A0(i){function r(V,O){if(i){var z=V.deletions;z===null?(V.deletions=[O],V.flags|=16):z.push(O)}}function o(V,O){if(!i)return null;for(;O!==null;)r(V,O),O=O.sibling;return null}function u(V){for(var O=new Map;V!==null;)V.key!==null?O.set(V.key,V):O.set(V.index,V),V=V.sibling;return O}function f(V,O){return V=ys(V,O),V.index=0,V.sibling=null,V}function m(V,O,z){return V.index=z,i?(z=V.alternate,z!==null?(z=z.index,z<O?(V.flags|=67108866,O):z):(V.flags|=67108866,O)):(V.flags|=1048576,O)}function E(V){return i&&V.alternate===null&&(V.flags|=67108866),V}function S(V,O,z,W){return O===null||O.tag!==6?(O=_m(z,V.mode,W),O.return=V,O):(O=f(O,z),O.return=V,O)}function I(V,O,z,W){var fe=z.type;return fe===U?K(V,O,z.props.children,W,z.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===C&&w0(fe)===O.type)?(O=f(O,z.props),_u(O,z),O.return=V,O):(O=mh(z.type,z.key,z.props,null,V.mode,W),_u(O,z),O.return=V,O)}function q(V,O,z,W){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=ym(z,V.mode,W),O.return=V,O):(O=f(O,z.children||[]),O.return=V,O)}function K(V,O,z,W,fe){return O===null||O.tag!==7?(O=ga(z,V.mode,W,fe),O.return=V,O):(O=f(O,z),O.return=V,O)}function Z(V,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=_m(""+O,V.mode,z),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case b:return z=mh(O.type,O.key,O.props,null,V.mode,z),_u(z,O),z.return=V,z;case x:return O=ym(O,V.mode,z),O.return=V,O;case C:var W=O._init;return O=W(O._payload),Z(V,O,z)}if(pt(O)||L(O))return O=ga(O,V.mode,z,null),O.return=V,O;if(typeof O.then=="function")return Z(V,Dh(O),z);if(O.$$typeof===le)return Z(V,yh(V,O),z);Oh(V,O)}return null}function B(V,O,z,W){var fe=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:S(V,O,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case b:return z.key===fe?I(V,O,z,W):null;case x:return z.key===fe?q(V,O,z,W):null;case C:return fe=z._init,z=fe(z._payload),B(V,O,z,W)}if(pt(z)||L(z))return fe!==null?null:K(V,O,z,W,null);if(typeof z.then=="function")return B(V,O,Dh(z),W);if(z.$$typeof===le)return B(V,O,yh(V,z),W);Oh(V,z)}return null}function H(V,O,z,W,fe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return V=V.get(z)||null,S(O,V,""+W,fe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return V=V.get(W.key===null?z:W.key)||null,I(O,V,W,fe);case x:return V=V.get(W.key===null?z:W.key)||null,q(O,V,W,fe);case C:var Le=W._init;return W=Le(W._payload),H(V,O,z,W,fe)}if(pt(W)||L(W))return V=V.get(z)||null,K(O,V,W,fe,null);if(typeof W.then=="function")return H(V,O,z,Dh(W),fe);if(W.$$typeof===le)return H(V,O,z,yh(O,W),fe);Oh(O,W)}return null}function Se(V,O,z,W){for(var fe=null,Le=null,pe=O,Ee=O=0,tn=null;pe!==null&&Ee<z.length;Ee++){pe.index>Ee?(tn=pe,pe=null):tn=pe.sibling;var Xe=B(V,pe,z[Ee],W);if(Xe===null){pe===null&&(pe=tn);break}i&&pe&&Xe.alternate===null&&r(V,pe),O=m(Xe,O,Ee),Le===null?fe=Xe:Le.sibling=Xe,Le=Xe,pe=tn}if(Ee===z.length)return o(V,pe),We&&ya(V,Ee),fe;if(pe===null){for(;Ee<z.length;Ee++)pe=Z(V,z[Ee],W),pe!==null&&(O=m(pe,O,Ee),Le===null?fe=pe:Le.sibling=pe,Le=pe);return We&&ya(V,Ee),fe}for(pe=u(pe);Ee<z.length;Ee++)tn=H(pe,V,Ee,z[Ee],W),tn!==null&&(i&&tn.alternate!==null&&pe.delete(tn.key===null?Ee:tn.key),O=m(tn,O,Ee),Le===null?fe=tn:Le.sibling=tn,Le=tn);return i&&pe.forEach(function(br){return r(V,br)}),We&&ya(V,Ee),fe}function ve(V,O,z,W){if(z==null)throw Error(s(151));for(var fe=null,Le=null,pe=O,Ee=O=0,tn=null,Xe=z.next();pe!==null&&!Xe.done;Ee++,Xe=z.next()){pe.index>Ee?(tn=pe,pe=null):tn=pe.sibling;var br=B(V,pe,Xe.value,W);if(br===null){pe===null&&(pe=tn);break}i&&pe&&br.alternate===null&&r(V,pe),O=m(br,O,Ee),Le===null?fe=br:Le.sibling=br,Le=br,pe=tn}if(Xe.done)return o(V,pe),We&&ya(V,Ee),fe;if(pe===null){for(;!Xe.done;Ee++,Xe=z.next())Xe=Z(V,Xe.value,W),Xe!==null&&(O=m(Xe,O,Ee),Le===null?fe=Xe:Le.sibling=Xe,Le=Xe);return We&&ya(V,Ee),fe}for(pe=u(pe);!Xe.done;Ee++,Xe=z.next())Xe=H(pe,V,Ee,Xe.value,W),Xe!==null&&(i&&Xe.alternate!==null&&pe.delete(Xe.key===null?Ee:Xe.key),O=m(Xe,O,Ee),Le===null?fe=Xe:Le.sibling=Xe,Le=Xe);return i&&pe.forEach(function(JR){return r(V,JR)}),We&&ya(V,Ee),fe}function lt(V,O,z,W){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case b:e:{for(var fe=z.key;O!==null;){if(O.key===fe){if(fe=z.type,fe===U){if(O.tag===7){o(V,O.sibling),W=f(O,z.props.children),W.return=V,V=W;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===C&&w0(fe)===O.type){o(V,O.sibling),W=f(O,z.props),_u(W,z),W.return=V,V=W;break e}o(V,O);break}else r(V,O);O=O.sibling}z.type===U?(W=ga(z.props.children,V.mode,W,z.key),W.return=V,V=W):(W=mh(z.type,z.key,z.props,null,V.mode,W),_u(W,z),W.return=V,V=W)}return E(V);case x:e:{for(fe=z.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){o(V,O.sibling),W=f(O,z.children||[]),W.return=V,V=W;break e}else{o(V,O);break}else r(V,O);O=O.sibling}W=ym(z,V.mode,W),W.return=V,V=W}return E(V);case C:return fe=z._init,z=fe(z._payload),lt(V,O,z,W)}if(pt(z))return Se(V,O,z,W);if(L(z)){if(fe=L(z),typeof fe!="function")throw Error(s(150));return z=fe.call(z),ve(V,O,z,W)}if(typeof z.then=="function")return lt(V,O,Dh(z),W);if(z.$$typeof===le)return lt(V,O,yh(V,z),W);Oh(V,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(o(V,O.sibling),W=f(O,z),W.return=V,V=W):(o(V,O),W=_m(z,V.mode,W),W.return=V,V=W),E(V)):o(V,O)}return function(V,O,z,W){try{gu=0;var fe=lt(V,O,z,W);return Do=null,fe}catch(pe){if(pe===ou||pe===Eh)throw pe;var Le=Gn(29,pe,null,V.mode);return Le.lanes=W,Le.return=V,Le}finally{}}}var Oo=A0(!0),C0=A0(!1),ui=X(null),zi=null;function or(i){var r=i.alternate;te(Kt,Kt.current&1),te(ui,i),zi===null&&(r===null||Ro.current!==null||r.memoizedState!==null)&&(zi=i)}function R0(i){if(i.tag===22){if(te(Kt,Kt.current),te(ui,i),zi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(zi=i)}}else lr()}function lr(){te(Kt,Kt.current),te(ui,ui.current)}function ws(i){oe(ui),zi===i&&(zi=null),oe(Kt)}var Kt=X(0);function Mh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||zp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Wm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Zm={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=$n(),f=sr(u);f.payload=r,o!=null&&(f.callback=o),r=rr(i,f,u),r!==null&&(Xn(r,i,u),uu(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=$n(),f=sr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=rr(i,f,u),r!==null&&(Xn(r,i,u),uu(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=$n(),u=sr(o);u.tag=2,r!=null&&(u.callback=r),r=rr(i,u,o),r!==null&&(Xn(r,i,o),uu(r,i,o))}};function I0(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Jl(o,u)||!Jl(f,m):!0}function N0(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Zm.enqueueReplaceState(r,r.state,null)}function Aa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var kh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function x0(i){kh(i)}function D0(i){console.error(i)}function O0(i){kh(i)}function Ph(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function M0(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Jm(i,r,o){return o=sr(o),o.tag=3,o.payload={element:null},o.callback=function(){Ph(i,r)},o}function k0(i){return i=sr(i),i.tag=3,i}function P0(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){M0(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){M0(r,o,u),typeof f!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function JC(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&su(r,o,f,!0),o=ui.current,o!==null){switch(o.tag){case 13:return zi===null?Sp():o.alternate===null&&wt===0&&(wt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Im?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Ap(i,u,f)),!1;case 22:return o.flags|=65536,u===Im?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Ap(i,u,f)),!1}throw Error(s(435,o.tag))}return Ap(i,u,f),Sp(),!1}if(We)return r=ui.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Tm&&(i=Error(s(422),{cause:u}),iu(ri(i,o)))):(u!==Tm&&(r=Error(s(423),{cause:u}),iu(ri(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=ri(u,o),f=Jm(i.stateNode,u,f),Dm(i,f),wt!==4&&(wt=2)),!1;var m=Error(s(520),{cause:u});if(m=ri(m,o),wu===null?wu=[m]:wu.push(m),wt!==4&&(wt=2),r===null)return!0;u=ri(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Jm(o.stateNode,u,i),Dm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mr===null||!mr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=k0(f),P0(f,i,o,u),Dm(o,f),!1}o=o.return}while(o!==null);return!1}var V0=Error(s(461)),Jt=!1;function hn(i,r,o,u){r.child=i===null?C0(r,null,o,u):Oo(r,i.child,o,u)}function L0(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return ba(r),u=Vm(i,r,o,E,m,f),S=Lm(),i!==null&&!Jt?(Um(i,r,f),As(i,r,f)):(We&&S&&vm(r),r.flags|=1,hn(i,r,u,f),r.child)}function U0(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!gm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,j0(i,r,m,u,f)):(i=mh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!op(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Jl,o(E,u)&&i.ref===r.ref)return As(i,r,f)}return r.flags|=1,i=ys(m,u),i.ref=r.ref,i.return=r,r.child=i}function j0(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Jl(m,u)&&i.ref===r.ref)if(Jt=!1,r.pendingProps=u=m,op(i,f))(i.flags&131072)!==0&&(Jt=!0);else return r.lanes=i.lanes,As(i,r,f)}return ep(i,r,o,u,f)}function z0(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return q0(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&vh(r,m!==null?m.cachePool:null),m!==null?jv(r,m):Mm(),R0(r);else return r.lanes=r.childLanes=536870912,q0(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(vh(r,m.cachePool),jv(r,m),lr(),r.memoizedState=null):(i!==null&&vh(r,null),Mm(),lr());return hn(i,r,f,o),r.child}function q0(i,r,o,u){var f=Rm();return f=f===null?null:{parent:Yt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&vh(r,null),Mm(),R0(r),i!==null&&su(i,r,u,!0),null}function Vh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function ep(i,r,o,u,f){return ba(r),o=Vm(i,r,o,u,void 0,f),u=Lm(),i!==null&&!Jt?(Um(i,r,f),As(i,r,f)):(We&&u&&vm(r),r.flags|=1,hn(i,r,o,f),r.child)}function B0(i,r,o,u,f,m){return ba(r),r.updateQueue=null,o=qv(r,u,o,f),zv(i),u=Lm(),i!==null&&!Jt?(Um(i,r,m),As(i,r,m)):(We&&u&&vm(r),r.flags|=1,hn(i,r,o,m),r.child)}function F0(i,r,o,u,f){if(ba(r),r.stateNode===null){var m=bo,E=o.contextType;typeof E=="object"&&E!==null&&(m=vn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Zm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Nm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?vn(E):bo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Wm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Zm.enqueueReplaceState(m,m.state,null),hu(r,u,m,f),cu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,I=Aa(o,S);m.props=I;var q=m.context,K=o.contextType;E=bo,typeof K=="object"&&K!==null&&(E=vn(K));var Z=o.getDerivedStateFromProps;K=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||q!==E)&&N0(r,m,u,E),ir=!1;var B=r.memoizedState;m.state=B,hu(r,u,m,f),cu(),q=r.memoizedState,S||B!==q||ir?(typeof Z=="function"&&(Wm(r,o,Z,u),q=r.memoizedState),(I=ir||I0(r,o,I,u,B,q,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=E,u=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,xm(i,r),E=r.memoizedProps,K=Aa(o,E),m.props=K,Z=r.pendingProps,B=m.context,q=o.contextType,I=bo,typeof q=="object"&&q!==null&&(I=vn(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||B!==I)&&N0(r,m,u,I),ir=!1,B=r.memoizedState,m.state=B,hu(r,u,m,f),cu();var H=r.memoizedState;E!==Z||B!==H||ir||i!==null&&i.dependencies!==null&&_h(i.dependencies)?(typeof S=="function"&&(Wm(r,o,S,u),H=r.memoizedState),(K=ir||I0(r,o,K,u,B,H,I)||i!==null&&i.dependencies!==null&&_h(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,H,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,H,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=H),m.props=u,m.state=H,m.context=I,u=K):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&B===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Vh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Oo(r,i.child,null,f),r.child=Oo(r,null,o,f)):hn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=As(i,r,f),i}function H0(i,r,o,u){return nu(),r.flags|=256,hn(i,r,o,u),r.child}var tp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function np(i){return{baseLanes:i,cachePool:Dv()}}function ip(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ci),i}function G0(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Kt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(We){if(f?or(r):lr(),We){var S=St,I;if(I=S){e:{for(I=S,S=ji;I.nodeType!==8;){if(!S){S=null;break e}if(I=Ei(I.nextSibling),I===null){S=null;break e}}S=I}S!==null?(r.memoizedState={dehydrated:S,treeContext:_a!==null?{id:vs,overflow:Es}:null,retryLane:536870912,hydrationErrors:null},I=Gn(18,null,null,0),I.stateNode=S,I.return=r,r.child=I,Dn=r,St=null,I=!0):I=!1}I||Ea(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return zp(S)?r.lanes=32:r.lanes=536870912,null;ws(r)}return S=u.children,u=u.fallback,f?(lr(),f=r.mode,S=Lh({mode:"hidden",children:S},f),u=ga(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=np(o),f.childLanes=ip(i,E,o),r.memoizedState=tp,u):(or(r),sp(r,S))}if(I=i.memoizedState,I!==null&&(S=I.dehydrated,S!==null)){if(m)r.flags&256?(or(r),r.flags&=-257,r=rp(i,r,o)):r.memoizedState!==null?(lr(),r.child=i.child,r.flags|=128,r=null):(lr(),f=u.fallback,S=r.mode,u=Lh({mode:"visible",children:u.children},S),f=ga(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Oo(r,i.child,null,o),u=r.child,u.memoizedState=np(o),u.childLanes=ip(i,E,o),r.memoizedState=tp,r=f);else if(or(r),zp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(s(419)),u.stack="",u.digest=E,iu({value:u,source:null,stack:null}),r=rp(i,r,o)}else if(Jt||su(i,r,o,!1),E=(o&i.childLanes)!==0,Jt||E){if(E=ft,E!==null&&(u=o&-o,u=(u&42)!==0?1:$s(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,To(i,u),Xn(E,i,u),V0;S.data==="$?"||Sp(),r=rp(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=I.treeContext,St=Ei(S.nextSibling),Dn=r,We=!0,va=null,ji=!1,i!==null&&(oi[li++]=vs,oi[li++]=Es,oi[li++]=_a,vs=i.id,Es=i.overflow,_a=r),r=sp(r,u.children),r.flags|=4096);return r}return f?(lr(),f=u.fallback,S=r.mode,I=i.child,q=I.sibling,u=ys(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,q!==null?f=ys(q,f):(f=ga(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=np(o):(I=S.cachePool,I!==null?(q=Yt._currentValue,I=I.parent!==q?{parent:q,pool:q}:I):I=Dv(),S={baseLanes:S.baseLanes|o,cachePool:I}),f.memoizedState=S,f.childLanes=ip(i,E,o),r.memoizedState=tp,u):(or(r),o=i.child,i=o.sibling,o=ys(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function sp(i,r){return r=Lh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Lh(i,r){return i=Gn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function rp(i,r,o){return Oo(r,i.child,null,o),i=sp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Q0(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Sm(i.return,r,o)}function ap(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function Y0(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(hn(i,r,u.children,o),u=Kt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Q0(i,o,r);else if(i.tag===19)Q0(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(te(Kt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Mh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),ap(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Mh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}ap(r,!0,o,null,m);break;case"together":ap(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function As(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),dr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(su(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ys(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ys(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function op(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&_h(i)))}function eR(i,r,o){switch(r.tag){case 3:st(r,r.stateNode.containerInfo),nr(r,Yt,i.memoizedState.cache),nu();break;case 27:case 5:Ri(r);break;case 4:st(r,r.stateNode.containerInfo);break;case 10:nr(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(or(r),r.flags|=128,null):(o&r.child.childLanes)!==0?G0(i,r,o):(or(r),i=As(i,r,o),i!==null?i.sibling:null);or(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(su(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return Y0(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),te(Kt,Kt.current),u)break;return null;case 22:case 23:return r.lanes=0,z0(i,r,o);case 24:nr(r,Yt,i.memoizedState.cache)}return As(i,r,o)}function K0(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Jt=!0;else{if(!op(i,o)&&(r.flags&128)===0)return Jt=!1,eR(i,r,o);Jt=(i.flags&131072)!==0}else Jt=!1,We&&(r.flags&1048576)!==0&&wv(r,gh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")gm(u)?(i=Aa(u,i),r.tag=1,r=F0(null,r,u,i,o)):(r.tag=0,r=ep(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===ge){r.tag=11,r=L0(null,r,u,i,o);break e}else if(f===P){r.tag=14,r=U0(null,r,u,i,o);break e}}throw r=Ft(u)||u,Error(s(306,r,""))}}return r;case 0:return ep(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=Aa(u,r.pendingProps),F0(i,r,u,f,o);case 3:e:{if(st(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,xm(i,r),hu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,nr(r,Yt,u),u!==m.cache&&wm(r,[Yt],o,!0),cu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=H0(i,r,u,o);break e}else if(u!==f){f=ri(Error(s(424)),r),iu(f),r=H0(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(St=Ei(i.firstChild),Dn=r,We=!0,va=null,ji=!0,o=C0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(nu(),u===f){r=As(i,r,o);break e}hn(i,r,u,o)}r=r.child}return r;case 26:return Vh(i,r),i===null?(o=ZE(r.type,null,r.pendingProps,null))?r.memoizedState=o:We||(o=r.type,i=r.pendingProps,u=Wh(be.current).createElement(o),u[Ht]=r,u[Mt]=i,dn(u,o,i),Rt(u),r.stateNode=u):r.memoizedState=ZE(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ri(r),i===null&&We&&(u=r.stateNode=$E(r.type,r.pendingProps,be.current),Dn=r,ji=!0,f=St,_r(r.type)?(qp=f,St=Ei(u.firstChild)):St=f),hn(i,r,r.pendingProps.children,o),Vh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&We&&((f=u=St)&&(u=IR(u,r.type,r.pendingProps,ji),u!==null?(r.stateNode=u,Dn=r,St=Ei(u.firstChild),ji=!1,f=!0):f=!1),f||Ea(r)),Ri(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Lp(f,m)?u=null:E!==null&&Lp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Vm(i,r,QC,null,null,o),Mu._currentValue=f),Vh(i,r),hn(i,r,u,o),r.child;case 6:return i===null&&We&&((i=o=St)&&(o=NR(o,r.pendingProps,ji),o!==null?(r.stateNode=o,Dn=r,St=null,i=!0):i=!1),i||Ea(r)),null;case 13:return G0(i,r,o);case 4:return st(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Oo(r,null,u,o):hn(i,r,u,o),r.child;case 11:return L0(i,r,r.type,r.pendingProps,o);case 7:return hn(i,r,r.pendingProps,o),r.child;case 8:return hn(i,r,r.pendingProps.children,o),r.child;case 12:return hn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,nr(r,r.type,u.value),hn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ba(r),f=vn(f),u=u(f),r.flags|=1,hn(i,r,u,o),r.child;case 14:return U0(i,r,r.type,r.pendingProps,o);case 15:return j0(i,r,r.type,r.pendingProps,o);case 19:return Y0(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Lh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ys(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return z0(i,r,o);case 24:return ba(r),u=vn(Yt),i===null?(f=Rm(),f===null&&(f=ft,m=Am(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Nm(r),nr(r,Yt,f)):((i.lanes&o)!==0&&(xm(i,r),hu(r,null,null,o),cu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),nr(r,Yt,u)):(u=m.cache,nr(r,Yt,u),u!==f.cache&&wm(r,[Yt],o,!0))),hn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Cs(i){i.flags|=4}function $0(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!iT(r)){if(r=ui.current,r!==null&&((Ke&4194048)===Ke?zi!==null:(Ke&62914560)!==Ke&&(Ke&536870912)===0||r!==zi))throw lu=Im,Ov;i.flags|=8192}}function Uh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Pl():536870912,i.lanes|=r,Vo|=r)}function yu(i,r){if(!We)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Et(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function tR(i,r,o){var u=r.pendingProps;switch(Em(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(r),null;case 1:return Et(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),bs(Yt),Jn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(tu(r)?Cs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Rv())),Et(r),null;case 26:return o=r.memoizedState,i===null?(Cs(r),o!==null?(Et(r),$0(r,o)):(Et(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Cs(r),Et(r),$0(r,o)):(Et(r),r.flags&=-16777217):(i.memoizedProps!==u&&Cs(r),Et(r),r.flags&=-16777217),null;case 27:mi(r),o=be.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Cs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return Et(r),null}i=_e.current,tu(r)?Av(r):(i=$E(f,u,o),r.stateNode=i,Cs(r))}return Et(r),null;case 5:if(mi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Cs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return Et(r),null}if(i=_e.current,tu(r))Av(r);else{switch(f=Wh(be.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Ht]=r,i[Mt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(dn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Cs(r)}}return Et(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Cs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=be.current,tu(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Ht]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||BE(i.nodeValue,o)),i||Ea(r)}else i=Wh(i).createTextNode(u),i[Ht]=r,r.stateNode=i}return Et(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=tu(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ht]=r}else nu(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Et(r),f=!1}else f=Rv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(ws(r),r):(ws(r),null)}if(ws(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Uh(r,r.updateQueue),Et(r),null;case 4:return Jn(),i===null&&Op(r.stateNode.containerInfo),Et(r),null;case 10:return bs(r.type),Et(r),null;case 19:if(oe(Kt),f=r.memoizedState,f===null)return Et(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)yu(f,!1);else{if(wt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Mh(i),m!==null){for(r.flags|=128,yu(f,!1),i=m.updateQueue,r.updateQueue=i,Uh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Sv(o,i),o=o.sibling;return te(Kt,Kt.current&1|2),r.child}i=i.sibling}f.tail!==null&&on()>qh&&(r.flags|=128,u=!0,yu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Mh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Uh(r,i),yu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!We)return Et(r),null}else 2*on()-f.renderingStartTime>qh&&o!==536870912&&(r.flags|=128,u=!0,yu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=on(),r.sibling=null,i=Kt.current,te(Kt,u?i&1|2:i&1),r):(Et(r),null);case 22:case 23:return ws(r),km(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(Et(r),r.subtreeFlags&6&&(r.flags|=8192)):Et(r),o=r.updateQueue,o!==null&&Uh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&oe(Sa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),bs(Yt),Et(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function nR(i,r){switch(Em(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return bs(Yt),Jn(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return mi(r),null;case 13:if(ws(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));nu()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return oe(Kt),null;case 4:return Jn(),null;case 10:return bs(r.type),null;case 22:case 23:return ws(r),km(),i!==null&&oe(Sa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return bs(Yt),null;case 25:return null;default:return null}}function X0(i,r){switch(Em(r),r.tag){case 3:bs(Yt),Jn();break;case 26:case 27:case 5:mi(r);break;case 4:Jn();break;case 13:ws(r);break;case 19:oe(Kt);break;case 10:bs(r.type);break;case 22:case 23:ws(r),km(),i!==null&&oe(Sa);break;case 24:bs(Yt)}}function vu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){ct(r,r.return,S)}}function ur(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var I=o,q=S;try{q()}catch(K){ct(f,I,K)}}}u=u.next}while(u!==m)}}catch(K){ct(r,r.return,K)}}function W0(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Uv(r,o)}catch(u){ct(i,i.return,u)}}}function Z0(i,r,o){o.props=Aa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ct(i,r,u)}}function Eu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){ct(i,r,f)}}function qi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ct(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ct(i,r,f)}else o.current=null}function J0(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ct(i,i.return,f)}}function lp(i,r,o){try{var u=i.stateNode;SR(u,i.type,o,r),u[Mt]=r}catch(f){ct(i,i.return,f)}}function eE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&_r(i.type)||i.tag===4}function up(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||eE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&_r(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function cp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Xh));else if(u!==4&&(u===27&&_r(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(cp(i,r,o),i=i.sibling;i!==null;)cp(i,r,o),i=i.sibling}function jh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&_r(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(jh(i,r,o),i=i.sibling;i!==null;)jh(i,r,o),i=i.sibling}function tE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);dn(r,u,o),r[Ht]=i,r[Mt]=o}catch(m){ct(i,i.return,m)}}var Rs=!1,Nt=!1,hp=!1,nE=typeof WeakSet=="function"?WeakSet:Set,en=null;function iR(i,r){if(i=i.containerInfo,Pp=sf,i=dv(i),um(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,I=-1,q=0,K=0,Z=i,B=null;t:for(;;){for(var H;Z!==o||f!==0&&Z.nodeType!==3||(S=E+f),Z!==m||u!==0&&Z.nodeType!==3||(I=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(H=Z.firstChild)!==null;)B=Z,Z=H;for(;;){if(Z===i)break t;if(B===o&&++q===f&&(S=E),B===m&&++K===u&&(I=E),(H=Z.nextSibling)!==null)break;Z=B,B=Z.parentNode}Z=H}o=S===-1||I===-1?null:{start:S,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vp={focusedElem:i,selectionRange:o},sf=!1,en=r;en!==null;)if(r=en,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,en=i;else for(;en!==null;){switch(r=en,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Se=Aa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Se,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ve){ct(o,o.return,ve)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)jp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":jp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,en=i;break}en=r.return}}function iE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:cr(i,o),u&4&&vu(5,o);break;case 1:if(cr(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){ct(o,o.return,E)}else{var f=Aa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){ct(o,o.return,E)}}u&64&&W0(o),u&512&&Eu(o,o.return);break;case 3:if(cr(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Uv(i,r)}catch(E){ct(o,o.return,E)}}break;case 27:r===null&&u&4&&tE(o);case 26:case 5:cr(i,o),r===null&&u&4&&J0(o),u&512&&Eu(o,o.return);break;case 12:cr(i,o);break;case 13:cr(i,o),u&4&&aE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=fR.bind(null,o),xR(i,o))));break;case 22:if(u=o.memoizedState!==null||Rs,!u){r=r!==null&&r.memoizedState!==null||Nt,f=Rs;var m=Nt;Rs=u,(Nt=r)&&!m?hr(i,o,(o.subtreeFlags&8772)!==0):cr(i,o),Rs=f,Nt=m}break;case 30:break;default:cr(i,o)}}function sE(i){var r=i.alternate;r!==null&&(i.alternate=null,sE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Zs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var vt=null,Vn=!1;function Is(i,r,o){for(o=o.child;o!==null;)rE(i,r,o),o=o.sibling}function rE(i,r,o){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(ut,o)}catch{}switch(o.tag){case 26:Nt||qi(o,r),Is(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Nt||qi(o,r);var u=vt,f=Vn;_r(o.type)&&(vt=o.stateNode,Vn=!1),Is(i,r,o),Nu(o.stateNode),vt=u,Vn=f;break;case 5:Nt||qi(o,r);case 6:if(u=vt,f=Vn,vt=null,Is(i,r,o),vt=u,Vn=f,vt!==null)if(Vn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(o.stateNode)}catch(m){ct(o,r,m)}else try{vt.removeChild(o.stateNode)}catch(m){ct(o,r,m)}break;case 18:vt!==null&&(Vn?(i=vt,YE(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Lu(i)):YE(vt,o.stateNode));break;case 4:u=vt,f=Vn,vt=o.stateNode.containerInfo,Vn=!0,Is(i,r,o),vt=u,Vn=f;break;case 0:case 11:case 14:case 15:Nt||ur(2,o,r),Nt||ur(4,o,r),Is(i,r,o);break;case 1:Nt||(qi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Z0(o,r,u)),Is(i,r,o);break;case 21:Is(i,r,o);break;case 22:Nt=(u=Nt)||o.memoizedState!==null,Is(i,r,o),Nt=u;break;default:Is(i,r,o)}}function aE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Lu(i)}catch(o){ct(r,r.return,o)}}function sR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new nE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new nE),r;default:throw Error(s(435,i.tag))}}function fp(i,r){var o=sR(i);r.forEach(function(u){var f=dR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Qn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(_r(S.type)){vt=S.stateNode,Vn=!1;break e}break;case 5:vt=S.stateNode,Vn=!1;break e;case 3:case 4:vt=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(vt===null)throw Error(s(160));rE(m,E,f),vt=null,Vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)oE(r,i),r=r.sibling}var vi=null;function oE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Qn(r,i),Yn(i),u&4&&(ur(3,i,i.return),vu(3,i),ur(5,i,i.return));break;case 1:Qn(r,i),Yn(i),u&512&&(Nt||o===null||qi(o,o.return)),u&64&&Rs&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=vi;if(Qn(r,i),Yn(i),u&512&&(Nt||o===null||qi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ea]||m[Ht]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),dn(m,u,o),m[Ht]=i,Rt(m),u=m;break e;case"link":var E=tT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),dn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=tT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),dn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Ht]=i,Rt(m),u=m}i.stateNode=u}else nT(f,i.type,i.stateNode);else i.stateNode=eT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?nT(f,i.type,i.stateNode):eT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&lp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Qn(r,i),Yn(i),u&512&&(Nt||o===null||qi(o,o.return)),o!==null&&u&4&&lp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Qn(r,i),Yn(i),u&512&&(Nt||o===null||qi(o,o.return)),i.flags&32){f=i.stateNode;try{ti(f,"")}catch(H){ct(i,i.return,H)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,lp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(hp=!0);break;case 6:if(Qn(r,i),Yn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(H){ct(i,i.return,H)}}break;case 3:if(ef=null,f=vi,vi=Zh(r.containerInfo),Qn(r,i),vi=f,Yn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Lu(r.containerInfo)}catch(H){ct(i,i.return,H)}hp&&(hp=!1,lE(i));break;case 4:u=vi,vi=Zh(i.stateNode.containerInfo),Qn(r,i),Yn(i),vi=u;break;case 12:Qn(r,i),Yn(i);break;case 13:Qn(r,i),Yn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(yp=on()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,fp(i,u)));break;case 22:f=i.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,q=Rs,K=Nt;if(Rs=q||f,Nt=K||I,Qn(r,i),Nt=K,Rs=q,Yn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||I||Rs||Nt||Ca(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){I=o=r;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=I.stateNode;var Z=I.memoizedProps.style,B=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(H){ct(I,I.return,H)}}}else if(r.tag===6){if(o===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(H){ct(I,I.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,fp(i,o))));break;case 19:Qn(r,i),Yn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,fp(i,u)));break;case 30:break;case 21:break;default:Qn(r,i),Yn(i)}}function Yn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(eE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=up(i);jh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(ti(E,""),o.flags&=-33);var S=up(i);jh(i,S,E);break;case 3:case 4:var I=o.stateNode.containerInfo,q=up(i);cp(i,q,I);break;default:throw Error(s(161))}}catch(K){ct(i,i.return,K)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function lE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;lE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function cr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)iE(i,r.alternate,r),r=r.sibling}function Ca(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:ur(4,r,r.return),Ca(r);break;case 1:qi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Z0(r,r.return,o),Ca(r);break;case 27:Nu(r.stateNode);case 26:case 5:qi(r,r.return),Ca(r);break;case 22:r.memoizedState===null&&Ca(r);break;case 30:Ca(r);break;default:Ca(r)}i=i.sibling}}function hr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:hr(f,m,o),vu(4,m);break;case 1:if(hr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){ct(u,u.return,q)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Lv(I[f],S)}catch(q){ct(u,u.return,q)}}o&&E&64&&W0(m),Eu(m,m.return);break;case 27:tE(m);case 26:case 5:hr(f,m,o),o&&u===null&&E&4&&J0(m),Eu(m,m.return);break;case 12:hr(f,m,o);break;case 13:hr(f,m,o),o&&E&4&&aE(f,m);break;case 22:m.memoizedState===null&&hr(f,m,o),Eu(m,m.return);break;case 30:break;default:hr(f,m,o)}r=r.sibling}}function dp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&ru(o))}function mp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&ru(i))}function Bi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)uE(i,r,o,u),r=r.sibling}function uE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Bi(i,r,o,u),f&2048&&vu(9,r);break;case 1:Bi(i,r,o,u);break;case 3:Bi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&ru(i)));break;case 12:if(f&2048){Bi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(I){ct(r,r.return,I)}}else Bi(i,r,o,u);break;case 13:Bi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Bi(i,r,o,u):Tu(i,r):m._visibility&2?Bi(i,r,o,u):(m._visibility|=2,Mo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&dp(E,r);break;case 24:Bi(i,r,o,u),f&2048&&mp(r.alternate,r);break;default:Bi(i,r,o,u)}}function Mo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,I=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Mo(m,E,S,I,f),vu(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Mo(m,E,S,I,f):Tu(m,E):(K._visibility|=2,Mo(m,E,S,I,f)),f&&q&2048&&dp(E.alternate,E);break;case 24:Mo(m,E,S,I,f),f&&q&2048&&mp(E.alternate,E);break;default:Mo(m,E,S,I,f)}r=r.sibling}}function Tu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:Tu(o,u),f&2048&&dp(u.alternate,u);break;case 24:Tu(o,u),f&2048&&mp(u.alternate,u);break;default:Tu(o,u)}r=r.sibling}}var bu=8192;function ko(i){if(i.subtreeFlags&bu)for(i=i.child;i!==null;)cE(i),i=i.sibling}function cE(i){switch(i.tag){case 26:ko(i),i.flags&bu&&i.memoizedState!==null&&FR(vi,i.memoizedState,i.memoizedProps);break;case 5:ko(i);break;case 3:case 4:var r=vi;vi=Zh(i.stateNode.containerInfo),ko(i),vi=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=bu,bu=16777216,ko(i),bu=r):ko(i));break;default:ko(i)}}function hE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Su(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];en=u,dE(u,i)}hE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)fE(i),i=i.sibling}function fE(i){switch(i.tag){case 0:case 11:case 15:Su(i),i.flags&2048&&ur(9,i,i.return);break;case 3:Su(i);break;case 12:Su(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,zh(i)):Su(i);break;default:Su(i)}}function zh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];en=u,dE(u,i)}hE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:ur(8,r,r.return),zh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,zh(r));break;default:zh(r)}i=i.sibling}}function dE(i,r){for(;en!==null;){var o=en;switch(o.tag){case 0:case 11:case 15:ur(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ru(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,en=u;else e:for(o=i;en!==null;){u=en;var f=u.sibling,m=u.return;if(sE(u),u===o){en=null;break e}if(f!==null){f.return=m,en=f;break e}en=m}}}var rR={getCacheForType:function(i){var r=vn(Yt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},aR=typeof WeakMap=="function"?WeakMap:Map,tt=0,ft=null,qe=null,Ke=0,nt=0,Kn=null,fr=!1,Po=!1,pp=!1,Ns=0,wt=0,dr=0,Ra=0,gp=0,ci=0,Vo=0,wu=null,Ln=null,_p=!1,yp=0,qh=1/0,Bh=null,mr=null,fn=0,pr=null,Lo=null,Uo=0,vp=0,Ep=null,mE=null,Au=0,Tp=null;function $n(){if((tt&2)!==0&&Ke!==0)return Ke&-Ke;if(Y.T!==null){var i=Ao;return i!==0?i:Ip()}return Xs()}function pE(){ci===0&&(ci=(Ke&536870912)===0||We?kl():536870912);var i=ui.current;return i!==null&&(i.flags|=32),ci}function Xn(i,r,o){(i===ft&&(nt===2||nt===9)||i.cancelPendingCommit!==null)&&(jo(i,0),gr(i,Ke,ci,!1)),os(i,o),((tt&2)===0||i!==ft)&&(i===ft&&((tt&2)===0&&(Ra|=o),wt===4&&gr(i,Ke,ci,!1)),Fi(i))}function gE(i,r,o){if((tt&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Jr(i,r),f=u?uR(i,r):wp(i,r,!0),m=u;do{if(f===0){Po&&!u&&gr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!oR(o)){f=wp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=wu;var I=S.current.memoizedState.isDehydrated;if(I&&(jo(S,E).flags|=256),E=wp(S,E,!1),E!==2){if(pp&&!I){S.errorRecoveryDisabledLanes|=m,Ra|=m,f=4;break e}m=Ln,Ln=f,m!==null&&(Ln===null?Ln=m:Ln.push.apply(Ln,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){jo(i,0),gr(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:gr(u,r,ci,!fr);break e;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=yp+300-on(),10<f)){if(gr(u,r,ci,!fr),to(u,0,!0)!==0)break e;u.timeoutHandle=GE(_E.bind(null,u,o,Ln,Bh,_p,r,ci,Ra,Vo,fr,m,2,-0,0),f);break e}_E(u,o,Ln,Bh,_p,r,ci,Ra,Vo,fr,m,0,-0,0)}}break}while(!0);Fi(i)}function _E(i,r,o,u,f,m,E,S,I,q,K,Z,B,H){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Ou={stylesheets:null,count:0,unsuspend:BR},cE(r),Z=HR(),Z!==null)){i.cancelPendingCommit=Z(wE.bind(null,i,r,m,o,u,f,E,S,I,K,1,B,H)),gr(i,m,E,!q);return}wE(i,r,m,o,u,f,E,S,I)}function oR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Hn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gr(i,r,o,u){r&=~gp,r&=~Ra,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-ln(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&Ii(i,o,r)}function Fh(){return(tt&6)===0?(Cu(0),!1):!0}function bp(){if(qe!==null){if(nt===0)var i=qe.return;else i=qe,Ts=Ta=null,jm(i),Do=null,gu=0,i=qe;for(;i!==null;)X0(i.alternate,i),i=i.return;qe=null}}function jo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,AR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),bp(),ft=i,qe=o=ys(i.current,null),Ke=r,nt=0,Kn=null,fr=!1,Po=Jr(i,r),pp=!1,Vo=ci=gp=Ra=dr=wt=0,Ln=wu=null,_p=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-ln(u),m=1<<f;r|=i[f],u&=~m}return Ns=r,hh(),o}function yE(i,r){Pe=null,Y.H=xh,r===ou||r===Eh?(r=Pv(),nt=3):r===Ov?(r=Pv(),nt=4):nt=r===V0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Kn=r,qe===null&&(wt=1,Ph(i,ri(r,i.current)))}function vE(){var i=Y.H;return Y.H=xh,i===null?xh:i}function EE(){var i=Y.A;return Y.A=rR,i}function Sp(){wt=4,fr||(Ke&4194048)!==Ke&&ui.current!==null||(Po=!0),(dr&134217727)===0&&(Ra&134217727)===0||ft===null||gr(ft,Ke,ci,!1)}function wp(i,r,o){var u=tt;tt|=2;var f=vE(),m=EE();(ft!==i||Ke!==r)&&(Bh=null,jo(i,r)),r=!1;var E=wt;e:do try{if(nt!==0&&qe!==null){var S=qe,I=Kn;switch(nt){case 8:bp(),E=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(r=!0);var q=nt;if(nt=0,Kn=null,zo(i,S,I,q),o&&Po){E=0;break e}break;default:q=nt,nt=0,Kn=null,zo(i,S,I,q)}}lR(),E=wt;break}catch(K){yE(i,K)}while(!0);return r&&i.shellSuspendCounter++,Ts=Ta=null,tt=u,Y.H=f,Y.A=m,qe===null&&(ft=null,Ke=0,hh()),E}function lR(){for(;qe!==null;)TE(qe)}function uR(i,r){var o=tt;tt|=2;var u=vE(),f=EE();ft!==i||Ke!==r?(Bh=null,qh=on()+500,jo(i,r)):Po=Jr(i,r);e:do try{if(nt!==0&&qe!==null){r=qe;var m=Kn;t:switch(nt){case 1:nt=0,Kn=null,zo(i,r,m,1);break;case 2:case 9:if(Mv(m)){nt=0,Kn=null,bE(r);break}r=function(){nt!==2&&nt!==9||ft!==i||(nt=7),Fi(i)},m.then(r,r);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:Mv(m)?(nt=0,Kn=null,bE(r)):(nt=0,Kn=null,zo(i,r,m,7));break;case 5:var E=null;switch(qe.tag){case 26:E=qe.memoizedState;case 5:case 27:var S=qe;if(!E||iT(E)){nt=0,Kn=null;var I=S.sibling;if(I!==null)qe=I;else{var q=S.return;q!==null?(qe=q,Hh(q)):qe=null}break t}}nt=0,Kn=null,zo(i,r,m,5);break;case 6:nt=0,Kn=null,zo(i,r,m,6);break;case 8:bp(),wt=6;break e;default:throw Error(s(462))}}cR();break}catch(K){yE(i,K)}while(!0);return Ts=Ta=null,Y.H=u,Y.A=f,tt=o,qe!==null?0:(ft=null,Ke=0,hh(),wt)}function cR(){for(;qe!==null&&!Kr();)TE(qe)}function TE(i){var r=K0(i.alternate,i,Ns);i.memoizedProps=i.pendingProps,r===null?Hh(i):qe=r}function bE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=B0(o,r,r.pendingProps,r.type,void 0,Ke);break;case 11:r=B0(o,r,r.pendingProps,r.type.render,r.ref,Ke);break;case 5:jm(r);default:X0(o,r),r=qe=Sv(r,Ns),r=K0(o,r,Ns)}i.memoizedProps=i.pendingProps,r===null?Hh(i):qe=r}function zo(i,r,o,u){Ts=Ta=null,jm(r),Do=null,gu=0;var f=r.return;try{if(JC(i,f,r,o,Ke)){wt=1,Ph(i,ri(o,i.current)),qe=null;return}}catch(m){if(f!==null)throw qe=f,m;wt=1,Ph(i,ri(o,i.current)),qe=null;return}r.flags&32768?(We||u===1?i=!0:Po||(Ke&536870912)!==0?i=!1:(fr=i=!0,(u===2||u===9||u===3||u===6)&&(u=ui.current,u!==null&&u.tag===13&&(u.flags|=16384))),SE(r,i)):Hh(r)}function Hh(i){var r=i;do{if((r.flags&32768)!==0){SE(r,fr);return}i=r.return;var o=tR(r.alternate,r,Ns);if(o!==null){qe=o;return}if(r=r.sibling,r!==null){qe=r;return}qe=r=i}while(r!==null);wt===0&&(wt=5)}function SE(i,r){do{var o=nR(i.alternate,i);if(o!==null){o.flags&=32767,qe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){qe=i;return}qe=i=o}while(i!==null);wt=6,qe=null}function wE(i,r,o,u,f,m,E,S,I){i.cancelPendingCommit=null;do Gh();while(fn!==0);if((tt&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=mm,Vl(i,o,m,E,S,I),i===ft&&(qe=ft=null,Ke=0),Lo=r,pr=i,Uo=o,vp=m,Ep=f,mE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,mR(de,function(){return NE(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=ee.p,ee.p=2,E=tt,tt|=4;try{iR(i,r,o)}finally{tt=E,ee.p=f,Y.T=u}}fn=1,AE(),CE(),RE()}}function AE(){if(fn===1){fn=0;var i=pr,r=Lo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=ee.p;ee.p=2;var f=tt;tt|=4;try{oE(r,i);var m=Vp,E=dv(i.containerInfo),S=m.focusedElem,I=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&fv(S.ownerDocument.documentElement,S)){if(I!==null&&um(S)){var q=I.start,K=I.end;if(K===void 0&&(K=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(K,S.value.length);else{var Z=S.ownerDocument||document,B=Z&&Z.defaultView||window;if(B.getSelection){var H=B.getSelection(),Se=S.textContent.length,ve=Math.min(I.start,Se),lt=I.end===void 0?ve:Math.min(I.end,Se);!H.extend&&ve>lt&&(E=lt,lt=ve,ve=E);var V=hv(S,ve),O=hv(S,lt);if(V&&O&&(H.rangeCount!==1||H.anchorNode!==V.node||H.anchorOffset!==V.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var z=Z.createRange();z.setStart(V.node,V.offset),H.removeAllRanges(),ve>lt?(H.addRange(z),H.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),H.addRange(z))}}}}for(Z=[],H=S;H=H.parentNode;)H.nodeType===1&&Z.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Z.length;S++){var W=Z[S];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}sf=!!Pp,Vp=Pp=null}finally{tt=f,ee.p=u,Y.T=o}}i.current=r,fn=2}}function CE(){if(fn===2){fn=0;var i=pr,r=Lo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=ee.p;ee.p=2;var f=tt;tt|=4;try{iE(i,r.alternate,r)}finally{tt=f,ee.p=u,Y.T=o}}fn=3}}function RE(){if(fn===4||fn===3){fn=0,eo();var i=pr,r=Lo,o=Uo,u=mE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?fn=5:(fn=0,Lo=pr=null,IE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(mr=null),no(o),r=r.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(ut,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Y.T,f=ee.p,ee.p=2,Y.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{Y.T=r,ee.p=f}}(Uo&3)!==0&&Gh(),Fi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===Tp?Au++:(Au=0,Tp=i):Au=0,Cu(0)}}function IE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,ru(r)))}function Gh(i){return AE(),CE(),RE(),NE()}function NE(){if(fn!==5)return!1;var i=pr,r=vp;vp=0;var o=no(Uo),u=Y.T,f=ee.p;try{ee.p=32>o?32:o,Y.T=null,o=Ep,Ep=null;var m=pr,E=Uo;if(fn=0,Lo=pr=null,Uo=0,(tt&6)!==0)throw Error(s(331));var S=tt;if(tt|=4,fE(m.current),uE(m,m.current,E,o),tt=S,Cu(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(ut,m)}catch{}return!0}finally{ee.p=f,Y.T=u,IE(i,r)}}function xE(i,r,o){r=ri(o,r),r=Jm(i.stateNode,r,2),i=rr(i,r,2),i!==null&&(os(i,2),Fi(i))}function ct(i,r,o){if(i.tag===3)xE(i,i,o);else for(;r!==null;){if(r.tag===3){xE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){i=ri(o,i),o=k0(2),u=rr(r,o,2),u!==null&&(P0(o,u,r,i),os(u,2),Fi(u));break}}r=r.return}}function Ap(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new aR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(pp=!0,f.add(o),i=hR.bind(null,i,r,o),r.then(i,i))}function hR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ft===i&&(Ke&o)===o&&(wt===4||wt===3&&(Ke&62914560)===Ke&&300>on()-yp?(tt&2)===0&&jo(i,0):gp|=o,Vo===Ke&&(Vo=0)),Fi(i)}function DE(i,r){r===0&&(r=Pl()),i=To(i,r),i!==null&&(os(i,r),Fi(i))}function fR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),DE(i,o)}function dR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),DE(i,o)}function mR(i,r){return is(i,r)}var Qh=null,qo=null,Cp=!1,Yh=!1,Rp=!1,Ia=0;function Fi(i){i!==qo&&i.next===null&&(qo===null?Qh=qo=i:qo=qo.next=i),Yh=!0,Cp||(Cp=!0,gR())}function Cu(i,r){if(!Rp&&Yh){Rp=!0;do for(var o=!1,u=Qh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-ln(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,PE(u,m))}else m=Ke,m=to(u,u===ft?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Jr(u,m)||(o=!0,PE(u,m));u=u.next}while(o);Rp=!1}}function pR(){OE()}function OE(){Yh=Cp=!1;var i=0;Ia!==0&&(wR()&&(i=Ia),Ia=0);for(var r=on(),o=null,u=Qh;u!==null;){var f=u.next,m=ME(u,r);m===0?(u.next=null,o===null?Qh=f:o.next=f,f===null&&(qo=o)):(o=u,(i!==0||(m&3)!==0)&&(Yh=!0)),u=f}Cu(i)}function ME(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-ln(m),S=1<<E,I=f[E];I===-1?((S&o)===0||(S&u)!==0)&&(f[E]=Ml(S,r)):I<=r&&(i.expiredLanes|=S),m&=~S}if(r=ft,o=Ke,o=to(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(nt===2||nt===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&ss(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Jr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&ss(u),no(o)){case 2:case 8:o=Ys;break;case 32:o=de;break;case 268435456:o=ze;break;default:o=de}return u=kE.bind(null,i),o=is(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&ss(u),i.callbackPriority=2,i.callbackNode=null,2}function kE(i,r){if(fn!==0&&fn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Gh()&&i.callbackNode!==o)return null;var u=Ke;return u=to(i,i===ft?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(gE(i,u,r),ME(i,on()),i.callbackNode!=null&&i.callbackNode===o?kE.bind(null,i):null)}function PE(i,r){if(Gh())return null;gE(i,r,!0)}function gR(){CR(function(){(tt&6)!==0?is(rs,pR):OE()})}function Ip(){return Ia===0&&(Ia=kl()),Ia}function VE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:lo(""+i)}function LE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function _R(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=VE((f[Mt]||null).action),E=u.submitter;E&&(r=(r=E[Mt]||null)?VE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new uo("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ia!==0){var I=E?LE(f,E):new FormData(f);Km(o,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(S.preventDefault(),I=E?LE(f,E):new FormData(f),Km(o,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Np=0;Np<dm.length;Np++){var xp=dm[Np],yR=xp.toLowerCase(),vR=xp[0].toUpperCase()+xp.slice(1);yi(yR,"on"+vR)}yi(gv,"onAnimationEnd"),yi(_v,"onAnimationIteration"),yi(yv,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(VC,"onTransitionRun"),yi(LC,"onTransitionStart"),yi(UC,"onTransitionCancel"),yi(vv,"onTransitionEnd"),us("onMouseEnter",["mouseout","mouseover"]),us("onMouseLeave",["mouseout","mouseover"]),us("onPointerEnter",["pointerout","pointerover"]),us("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ER=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ru));function UE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],I=S.instance,q=S.currentTarget;if(S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){kh(K)}f.currentTarget=null,m=I}else for(E=0;E<u.length;E++){if(S=u[E],I=S.instance,q=S.currentTarget,S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch(K){kh(K)}f.currentTarget=null,m=I}}}}function Be(i,r){var o=r[Ul];o===void 0&&(o=r[Ul]=new Set);var u=i+"__bubble";o.has(u)||(jE(r,i,2,!1),o.add(u))}function Dp(i,r,o){var u=0;r&&(u|=4),jE(o,i,u,r)}var Kh="_reactListening"+Math.random().toString(36).slice(2);function Op(i){if(!i[Kh]){i[Kh]=!0,jl.forEach(function(o){o!=="selectionchange"&&(ER.has(o)||Dp(o,!1,i),Dp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Kh]||(r[Kh]=!0,Dp("selectionchange",!1,r))}}function jE(i,r,o,u){switch(uT(r)){case 2:var f=YR;break;case 8:f=KR;break;default:f=Qp}o=f.bind(null,r,o,i),f=void 0,!ii||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Mp(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=ls(S),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Xc(function(){var q=m,K=ni(o),Z=[];e:{var B=Ev.get(i);if(B!==void 0){var H=uo,Se=i;switch(i){case"keypress":if(ki(o)===0)break e;case"keydown":case"keyup":H=go;break;case"focusin":Se="focus",H=fo;break;case"focusout":Se="blur",H=fo;break;case"beforeblur":case"afterblur":H=fo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=si;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=rm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=sh;break;case gv:case _v:case yv:H=mo;break;case vv:H=ah;break;case"scroll":case"scrollend":H=Wc;break;case"wheel":H=_o;break;case"copy":case"cut":case"paste":H=po;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Wl;break;case"toggle":case"beforetoggle":H=lh}var ve=(r&4)!==0,lt=!ve&&(i==="scroll"||i==="scrollend"),V=ve?B!==null?B+"Capture":null:B;ve=[];for(var O=q,z;O!==null;){var W=O;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||V===null||(W=oa(O,V),W!=null&&ve.push(Iu(O,W,z))),lt)break;O=O.return}0<ve.length&&(B=new H(B,Se,null,o,K),Z.push({event:B,listeners:ve}))}}if((r&7)===0){e:{if(B=i==="mouseover"||i==="pointerover",H=i==="mouseout"||i==="pointerout",B&&o!==fs&&(Se=o.relatedTarget||o.fromElement)&&(ls(Se)||Se[ei]))break e;if((H||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,H?(Se=o.relatedTarget||o.toElement,H=q,Se=Se?ls(Se):null,Se!==null&&(lt=l(Se),ve=Se.tag,Se!==lt||ve!==5&&ve!==27&&ve!==6)&&(Se=null)):(H=null,Se=q),H!==Se)){if(ve=si,W="onMouseLeave",V="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ve=Wl,W="onPointerLeave",V="onPointerEnter",O="pointer"),lt=H==null?B:xi(H),z=Se==null?B:xi(Se),B=new ve(W,O+"leave",H,o,K),B.target=lt,B.relatedTarget=z,W=null,ls(K)===q&&(ve=new ve(V,O+"enter",Se,o,K),ve.target=z,ve.relatedTarget=lt,W=ve),lt=W,H&&Se)t:{for(ve=H,V=Se,O=0,z=ve;z;z=Bo(z))O++;for(z=0,W=V;W;W=Bo(W))z++;for(;0<O-z;)ve=Bo(ve),O--;for(;0<z-O;)V=Bo(V),z--;for(;O--;){if(ve===V||V!==null&&ve===V.alternate)break t;ve=Bo(ve),V=Bo(V)}ve=null}else ve=null;H!==null&&zE(Z,B,H,ve,!1),Se!==null&&lt!==null&&zE(Z,lt,Se,ve,!0)}}e:{if(B=q?xi(q):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var fe=rv;else if(Qt(B))if(av)fe=MC;else{fe=DC;var Le=xC}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?q&&Hl(q.elementType)&&(fe=rv):fe=OC;if(fe&&(fe=fe(i,q))){_s(Z,fe,o,K);break e}Le&&Le(i,B,q),i==="focusout"&&q&&B.type==="number"&&q.memoizedProps.value!=null&&er(B,"number",B.value)}switch(Le=q?xi(q):window,i){case"focusin":(Qt(Le)||Le.contentEditable==="true")&&(yo=Le,cm=q,eu=null);break;case"focusout":eu=cm=yo=null;break;case"mousedown":hm=!0;break;case"contextmenu":case"mouseup":case"dragend":hm=!1,mv(Z,o,K);break;case"selectionchange":if(PC)break;case"keydown":case"keyup":mv(Z,o,K)}var pe;if(Li)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Qe?Q(i,o)&&(Ee="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(Qe||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Qe&&(pe=Ql()):(Mi=K,tr="value"in Mi?Mi.value:Mi.textContent,Qe=!0)),Le=$h(q,Ee),0<Le.length&&(Ee=new $l(Ee,i,null,o,K),Z.push({event:Ee,listeners:Le}),pe?Ee.data=pe:(pe=se(o),pe!==null&&(Ee.data=pe)))),(pe=_?Gt(i,o):Ye(i,o))&&(Ee=$h(q,"onBeforeInput"),0<Ee.length&&(Le=new $l("onBeforeInput","beforeinput",null,o,K),Z.push({event:Le,listeners:Ee}),Le.data=pe)),_R(Z,i,q,o,K)}UE(Z,r)})}function Iu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function $h(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=oa(i,o),f!=null&&u.unshift(Iu(i,f,m)),f=oa(i,r),f!=null&&u.push(Iu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Bo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function zE(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,I=S.alternate,q=S.stateNode;if(S=S.tag,I!==null&&I===u)break;S!==5&&S!==26&&S!==27||q===null||(I=q,f?(q=oa(o,m),q!=null&&E.unshift(Iu(o,q,I))):f||(q=oa(o,m),q!=null&&E.push(Iu(o,q,I)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var TR=/\r\n?/g,bR=/\u0000|\uFFFD/g;function qE(i){return(typeof i=="string"?i:""+i).replace(TR,`
`).replace(bR,"")}function BE(i,r){return r=qE(r),qE(i)===r}function Xh(){}function ot(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||ti(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&ti(i,""+u);break;case"className":Di(i,"class",u);break;case"tabIndex":Di(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(i,o,u);break;case"style":Fl(i,u,m);break;case"data":if(r!=="object"){Di(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=lo(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&ot(i,r,"name",f.name,f,null),ot(i,r,"formEncType",f.formEncType,f,null),ot(i,r,"formMethod",f.formMethod,f,null),ot(i,r,"formTarget",f.formTarget,f,null)):(ot(i,r,"encType",f.encType,f,null),ot(i,r,"method",f.method,f,null),ot(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=lo(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Xh);break;case"onScroll":u!=null&&Be("scroll",i);break;case"onScrollEnd":u!=null&&Be("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=lo(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Be("beforetoggle",i),Be("toggle",i),Js(i,"popover",u);break;case"xlinkActuate":un(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":un(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":un(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":un(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":un(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":un(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":un(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":un(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":un(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Js(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=im.get(o)||o,Js(i,o,u))}}function kp(i,r,o,u,f,m){switch(o){case"style":Fl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?ti(i,u):(typeof u=="number"||typeof u=="bigint")&&ti(i,""+u);break;case"onScroll":u!=null&&Be("scroll",i);break;case"onScrollEnd":u!=null&&Be("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Xh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!io.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Mt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Js(i,o,u)}}}function dn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",i),Be("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(i,r,m,E,o,null)}}f&&ot(i,r,"srcSet",o.srcSet,o,null),u&&ot(i,r,"src",o.src,o,null);return;case"input":Be("invalid",i);var S=m=E=f=null,I=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":I=K;break;case"defaultChecked":q=K;break;case"value":m=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:ot(i,r,u,K,o,null)}}sa(i,m,S,I,q,E,f,!1),oo(i);return;case"select":Be("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:ot(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?hs(i,!!u,r,!1):o!=null&&hs(i,!!u,o,!0);return;case"textarea":Be("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ot(i,r,E,S,o,null)}ra(i,u,f,m),oo(i);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ot(i,r,I,u,o,null)}return;case"dialog":Be("beforetoggle",i),Be("toggle",i),Be("cancel",i),Be("close",i);break;case"iframe":case"object":Be("load",i);break;case"video":case"audio":for(u=0;u<Ru.length;u++)Be(Ru[u],i);break;case"image":Be("error",i),Be("load",i);break;case"details":Be("toggle",i);break;case"embed":case"source":case"link":Be("error",i),Be("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ot(i,r,q,u,o,null)}return;default:if(Hl(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&kp(i,r,K,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ot(i,r,S,u,o,null))}function SR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,I=null,q=null,K=null;for(H in o){var Z=o[H];if(o.hasOwnProperty(H)&&Z!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=Z;default:u.hasOwnProperty(H)||ot(i,r,H,null,u,Z)}}for(var B in u){var H=u[B];if(Z=o[B],u.hasOwnProperty(B)&&(H!=null||Z!=null))switch(B){case"type":m=H;break;case"name":f=H;break;case"checked":q=H;break;case"defaultChecked":K=H;break;case"value":E=H;break;case"defaultValue":S=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==Z&&ot(i,r,B,H,u,Z)}}Fn(i,E,S,I,q,K,m,f);return;case"select":H=E=S=B=null;for(m in o)if(I=o[m],o.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":H=I;default:u.hasOwnProperty(m)||ot(i,r,m,null,u,I)}for(f in u)if(m=u[f],I=o[f],u.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":B=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==I&&ot(i,r,f,m,u,I)}r=S,o=E,u=H,B!=null?hs(i,!!o,B,!1):!!u!=!!o&&(r!=null?hs(i,!!o,r,!0):hs(i,!!o,o?[]:"",!1));return;case"textarea":H=B=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ot(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":B=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ot(i,r,E,f,u,m)}rt(i,B,H);return;case"option":for(var Se in o)if(B=o[Se],o.hasOwnProperty(Se)&&B!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":i.selected=!1;break;default:ot(i,r,Se,null,u,B)}for(I in u)if(B=u[I],H=o[I],u.hasOwnProperty(I)&&B!==H&&(B!=null||H!=null))switch(I){case"selected":i.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:ot(i,r,I,B,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in o)B=o[ve],o.hasOwnProperty(ve)&&B!=null&&!u.hasOwnProperty(ve)&&ot(i,r,ve,null,u,B);for(q in u)if(B=u[q],H=o[q],u.hasOwnProperty(q)&&B!==H&&(B!=null||H!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:ot(i,r,q,B,u,H)}return;default:if(Hl(r)){for(var lt in o)B=o[lt],o.hasOwnProperty(lt)&&B!==void 0&&!u.hasOwnProperty(lt)&&kp(i,r,lt,void 0,u,B);for(K in u)B=u[K],H=o[K],!u.hasOwnProperty(K)||B===H||B===void 0&&H===void 0||kp(i,r,K,B,u,H);return}}for(var V in o)B=o[V],o.hasOwnProperty(V)&&B!=null&&!u.hasOwnProperty(V)&&ot(i,r,V,null,u,B);for(Z in u)B=u[Z],H=o[Z],!u.hasOwnProperty(Z)||B===H||B==null&&H==null||ot(i,r,Z,B,u,H)}var Pp=null,Vp=null;function Wh(i){return i.nodeType===9?i:i.ownerDocument}function FE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function HE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Lp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Up=null;function wR(){var i=window.event;return i&&i.type==="popstate"?i===Up?!1:(Up=i,!0):(Up=null,!1)}var GE=typeof setTimeout=="function"?setTimeout:void 0,AR=typeof clearTimeout=="function"?clearTimeout:void 0,QE=typeof Promise=="function"?Promise:void 0,CR=typeof queueMicrotask=="function"?queueMicrotask:typeof QE<"u"?function(i){return QE.resolve(null).then(i).catch(RR)}:GE;function RR(i){setTimeout(function(){throw i})}function _r(i){return i==="head"}function YE(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Nu(E.documentElement),o&2&&Nu(E.body),o&4)for(o=E.head,Nu(o),E=o.firstChild;E;){var S=E.nextSibling,I=E.nodeName;E[ea]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),Lu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Lu(r)}function jp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":jp(o),Zs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function IR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[ea])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=Ei(i.nextSibling),i===null)break}return null}function NR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ei(i.nextSibling),i===null))return null;return i}function zp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function xR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var qp=null;function KE(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function $E(i,r,o){switch(r=Wh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Nu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Zs(i)}var hi=new Map,XE=new Set;function Zh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var xs=ee.d;ee.d={f:DR,r:OR,D:MR,C:kR,L:PR,m:VR,X:UR,S:LR,M:jR};function DR(){var i=xs.f(),r=Fh();return i||r}function OR(i){var r=Ni(i);r!==null&&r.tag===5&&r.type==="form"?g0(r):xs.r(i)}var Fo=typeof document>"u"?null:document;function WE(i,r,o){var u=Fo;if(u&&typeof r=="string"&&r){var f=kt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),XE.has(f)||(XE.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),dn(r,"link",i),Rt(r),u.head.appendChild(r)))}}function MR(i){xs.D(i),WE("dns-prefetch",i,null)}function kR(i,r){xs.C(i,r),WE("preconnect",i,r)}function PR(i,r,o){xs.L(i,r,o);var u=Fo;if(u&&i&&r){var f='link[rel="preload"][as="'+kt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+kt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+kt(o.imageSizes)+'"]')):f+='[href="'+kt(i)+'"]';var m=f;switch(r){case"style":m=Ho(i);break;case"script":m=Go(i)}hi.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),hi.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(xu(m))||r==="script"&&u.querySelector(Du(m))||(r=u.createElement("link"),dn(r,"link",i),Rt(r),u.head.appendChild(r)))}}function VR(i,r){xs.m(i,r);var o=Fo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+kt(u)+'"][href="'+kt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Go(i)}if(!hi.has(m)&&(i=y({rel:"modulepreload",href:i},r),hi.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Du(m)))return}u=o.createElement("link"),dn(u,"link",i),Rt(u),o.head.appendChild(u)}}}function LR(i,r,o){xs.S(i,r,o);var u=Fo;if(u&&i){var f=In(u).hoistableStyles,m=Ho(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(xu(m)))S.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=hi.get(m))&&Bp(i,o);var I=E=u.createElement("link");Rt(I),dn(I,"link",i),I._p=new Promise(function(q,K){I.onload=q,I.onerror=K}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Jh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function UR(i,r){xs.X(i,r);var o=Fo;if(o&&i){var u=In(o).hoistableScripts,f=Go(i),m=u.get(f);m||(m=o.querySelector(Du(f)),m||(i=y({src:i,async:!0},r),(r=hi.get(f))&&Fp(i,r),m=o.createElement("script"),Rt(m),dn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function jR(i,r){xs.M(i,r);var o=Fo;if(o&&i){var u=In(o).hoistableScripts,f=Go(i),m=u.get(f);m||(m=o.querySelector(Du(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=hi.get(f))&&Fp(i,r),m=o.createElement("script"),Rt(m),dn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function ZE(i,r,o,u){var f=(f=be.current)?Zh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Ho(o.href),o=In(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Ho(o.href);var m=In(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(xu(i)))&&!m._p&&(E.instance=m,E.state.loading=5),hi.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},hi.set(i,o),m||zR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Go(o),o=In(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Ho(i){return'href="'+kt(i)+'"'}function xu(i){return'link[rel="stylesheet"]['+i+"]"}function JE(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function zR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),dn(r,"link",o),Rt(r),i.head.appendChild(r))}function Go(i){return'[src="'+kt(i)+'"]'}function Du(i){return"script[async]"+i}function eT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+kt(o.href)+'"]');if(u)return r.instance=u,Rt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Rt(u),dn(u,"style",f),Jh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Ho(o.href);var m=i.querySelector(xu(f));if(m)return r.state.loading|=4,r.instance=m,Rt(m),m;u=JE(o),(f=hi.get(f))&&Bp(u,f),m=(i.ownerDocument||i).createElement("link"),Rt(m);var E=m;return E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),dn(m,"link",u),r.state.loading|=4,Jh(m,o.precedence,i),r.instance=m;case"script":return m=Go(o.src),(f=i.querySelector(Du(m)))?(r.instance=f,Rt(f),f):(u=o,(f=hi.get(m))&&(u=y({},o),Fp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Rt(f),dn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Jh(u,o.precedence,i));return r.instance}function Jh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Bp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Fp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var ef=null;function tT(i,r,o){if(ef===null){var u=new Map,f=ef=new Map;f.set(o,u)}else f=ef,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[ea]||m[Ht]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function nT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function qR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function iT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Ou=null;function BR(){}function FR(i,r,o){if(Ou===null)throw Error(s(475));var u=Ou;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ho(o.href),m=i.querySelector(xu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=tf.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Rt(m);return}m=i.ownerDocument||i,o=JE(o),(f=hi.get(f))&&Bp(o,f),m=m.createElement("link"),Rt(m);var E=m;E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),dn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=tf.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function HR(){if(Ou===null)throw Error(s(475));var i=Ou;return i.stylesheets&&i.count===0&&Hp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Hp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function tf(){if(this.count--,this.count===0){if(this.stylesheets)Hp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var nf=null;function Hp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,nf=new Map,r.forEach(GR,i),nf=null,tf.call(i))}function GR(i,r){if(!(r.state.loading&4)){var o=nf.get(i);if(o)var u=o.get(null);else{o=new Map,nf.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=tf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Mu={$$typeof:le,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function QR(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=as(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.hiddenUpdates=as(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function sT(i,r,o,u,f,m,E,S,I,q,K,Z){return i=new QR(i,r,o,E,S,I,q,Z),r=1,m===!0&&(r|=24),m=Gn(3,null,null,r),i.current=m,m.stateNode=i,r=Am(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Nm(m),i}function rT(i){return i?(i=bo,i):bo}function aT(i,r,o,u,f,m){f=rT(f),u.context===null?u.context=f:u.pendingContext=f,u=sr(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=rr(i,u,r),o!==null&&(Xn(o,i,r),uu(o,i,r))}function oT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Gp(i,r){oT(i,r),(i=i.alternate)&&oT(i,r)}function lT(i){if(i.tag===13){var r=To(i,67108864);r!==null&&Xn(r,i,67108864),Gp(i,67108864)}}var sf=!0;function YR(i,r,o,u){var f=Y.T;Y.T=null;var m=ee.p;try{ee.p=2,Qp(i,r,o,u)}finally{ee.p=m,Y.T=f}}function KR(i,r,o,u){var f=Y.T;Y.T=null;var m=ee.p;try{ee.p=8,Qp(i,r,o,u)}finally{ee.p=m,Y.T=f}}function Qp(i,r,o,u){if(sf){var f=Yp(u);if(f===null)Mp(i,r,u,rf,o),cT(i,u);else if(XR(f,i,r,o,u))u.stopPropagation();else if(cT(i,u),r&4&&-1<$R.indexOf(i)){for(;f!==null;){var m=Ni(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=pi(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var I=1<<31-ln(E);S.entanglements[1]|=I,E&=~I}Fi(m),(tt&6)===0&&(qh=on()+500,Cu(0))}}break;case 13:S=To(m,2),S!==null&&Xn(S,m,2),Fh(),Gp(m,2)}if(m=Yp(u),m===null&&Mp(i,r,u,rf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Mp(i,r,u,null,o)}}function Yp(i){return i=ni(i),Kp(i)}var rf=null;function Kp(i){if(rf=null,i=ls(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return rf=i,null}function uT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($r()){case rs:return 2;case Ys:return 8;case de:case Ne:return 32;case ze:return 268435456;default:return 32}default:return 32}}var $p=!1,yr=null,vr=null,Er=null,ku=new Map,Pu=new Map,Tr=[],$R="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cT(i,r){switch(i){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ku.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pu.delete(r.pointerId)}}function Vu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ni(r),r!==null&&lT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function XR(i,r,o,u,f){switch(r){case"focusin":return yr=Vu(yr,i,r,o,u,f),!0;case"dragenter":return vr=Vu(vr,i,r,o,u,f),!0;case"mouseover":return Er=Vu(Er,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return ku.set(m,Vu(ku.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Pu.set(m,Vu(Pu.get(m)||null,i,r,o,u,f)),!0}return!1}function hT(i){var r=ls(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Fc(i.priority,function(){if(o.tag===13){var u=$n();u=$s(u);var f=To(o,u);f!==null&&Xn(f,o,u),Gp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function af(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Yp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);fs=u,o.target.dispatchEvent(u),fs=null}else return r=Ni(o),r!==null&&lT(r),i.blockedOn=o,!1;r.shift()}return!0}function fT(i,r,o){af(i)&&o.delete(r)}function WR(){$p=!1,yr!==null&&af(yr)&&(yr=null),vr!==null&&af(vr)&&(vr=null),Er!==null&&af(Er)&&(Er=null),ku.forEach(fT),Pu.forEach(fT)}function of(i,r){i.blockedOn===r&&(i.blockedOn=null,$p||($p=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,WR)))}var lf=null;function dT(i){lf!==i&&(lf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){lf===i&&(lf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Kp(u||o)===null)continue;break}var m=Ni(o);m!==null&&(i.splice(r,3),r-=3,Km(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Lu(i){function r(I){return of(I,i)}yr!==null&&of(yr,i),vr!==null&&of(vr,i),Er!==null&&of(Er,i),ku.forEach(r),Pu.forEach(r);for(var o=0;o<Tr.length;o++){var u=Tr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<Tr.length&&(o=Tr[0],o.blockedOn===null);)hT(o),o.blockedOn===null&&Tr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Mt]||null;if(typeof m=="function")E||dT(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Mt]||null)S=E.formAction;else if(Kp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),dT(o)}}}function Xp(i){this._internalRoot=i}uf.prototype.render=Xp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=$n();aT(o,u,i,r,null,null)},uf.prototype.unmount=Xp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;aT(i.current,2,null,i,null,null),Fh(),r[ei]=null}};function uf(i){this._internalRoot=i}uf.prototype.unstable_scheduleHydration=function(i){if(i){var r=Xs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Tr.length&&r!==0&&r<Tr[o].priority;o++);Tr.splice(o,0,i),o===0&&hT(i)}};var mT=e.version;if(mT!=="19.1.1")throw Error(s(527,mT,"19.1.1"));ee.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var ZR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cf.isDisabled&&cf.supportsFiber)try{ut=cf.inject(ZR),xe=cf}catch{}}return ju.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=x0,m=D0,E=O0,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=sT(i,1,!1,null,null,o,u,f,m,E,S,null),i[ei]=r.current,Op(i),new Xp(r)},ju.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=x0,E=D0,S=O0,I=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=sT(i,1,!0,r,o??null,u,f,m,E,S,I,q),r.context=rT(null),o=r.current,u=$n(),u=$s(u),f=sr(u),f.callback=null,rr(o,f,u),o=u,r.current.lanes=o,os(r,o),Fi(r),i[ei]=r.current,Op(i),new uf(r)},ju.version="19.1.1",ju}var wT;function lI(){if(wT)return Jp.exports;wT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Jp.exports=oI(),Jp.exports}var uI=lI();const cI=()=>{};var AT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(n,e){if(!n)throw Tl(e)},Tl=function(n){return new Error("Firebase Database ("+GS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},hI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},g_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let b=(d&15)<<2|g>>6,x=g&63;p||(x=64,c||(b=64)),s.push(t[y],t[T],t[b],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(QS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new fI;const b=l<<2|d>>4;if(s.push(b),g!==64){const x=d<<4&240|g>>2;if(s.push(x),T!==64){const U=g<<6&192|T;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YS=function(n){const e=QS(n);return g_.encodeByteArray(e,!0)},xf=function(n){return YS(n).replace(/\./g,"")},Df=function(n){try{return g_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(n){return KS(void 0,n)}function KS(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!mI(t)||(n[t]=KS(n[t],e[t]));return n}function mI(n){return n!=="__proto__"}/**
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
 */function pI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gI=()=>pI().__FIREBASE_DEFAULTS__,_I=()=>{if(typeof process>"u"||typeof AT>"u")return;const n=AT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Df(n[1]);return e&&JSON.parse(e)},pd=()=>{try{return cI()||gI()||_I()||yI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$S=n=>pd()?.emulatorHosts?.[n],XS=n=>{const e=$S(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},WS=()=>pd()?.config,ZS=n=>pd()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Hr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function __(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function JS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[xf(JSON.stringify(t)),xf(JSON.stringify(c)),""].join(".")}const Ku={};function vI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ku))Ku[e]?n.emulator.push(e):n.prod.push(e);return n}function EI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let CT=!1;function y_(n,e){if(typeof window>"u"||typeof document>"u"||!Hr(window.location.host)||Ku[n]===e||Ku[n]||CT)return;Ku[n]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",l=vI().prod.length>0;function c(){const b=document.getElementById(s);b&&b.remove()}function d(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function p(b,x){b.setAttribute("width","24"),b.setAttribute("id",x),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function g(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{CT=!0,c()},b}function y(b,x){b.setAttribute("id",x),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=EI(s),x=t("text"),U=document.getElementById(x)||document.createElement("span"),F=t("learnmore"),G=document.getElementById(F)||document.createElement("a"),ae=t("preprendIcon"),ie=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const le=b.element;d(le),y(G,F);const ge=g();p(ie,ae),le.append(ie,U,G,ge),document.body.appendChild(le)}l?(U.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function TI(){const n=pd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wI(){const n=An();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function AI(){return GS.NODE_ADMIN===!0}function CI(){return!TI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RI(){try{return typeof indexedDB=="object"}catch{return!1}}function II(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="FirebaseError";class Gs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=NI,Object.setPrototypeOf(this,Gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sc.prototype.create)}}class Sc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?xI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Gs(a,d,s)}}function xI(n,e){return n.replace(DI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const DI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n){return JSON.parse(n)}function an(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=oc(Df(l[0])||""),t=oc(Df(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},OI=function(n){const e=tw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},MI=function(n){const e=tw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function al(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Of(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Wi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(RT(l)&&RT(c)){if(!Wi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function RT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const b=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(b<<1|b>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const b=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=b}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function PI(n,e){const t=new VI(n,e);return t.subscribe.bind(t)}class VI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=ig),a.error===void 0&&(a.error=ig),a.complete===void 0&&(a.complete=ig);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ig(){}function ol(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,re(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},gd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function mt(n){return n&&n._delegate?n._delegate:n}class Pr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Os;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qI(e))try{this.getOrInitializeService({instanceIdentifier:Na})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Na){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Na){return this.instances.has(e)}getOptions(e=Na){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Na){return this.component?this.component.multipleInstances?e:Na:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zI(n){return n===Na?void 0:n}function qI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Fe||(Fe={}));const FI={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},HI=Fe.INFO,GI={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},QI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=GI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=HI,this._logHandler=QI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const YI=(n,e)=>e.some(t=>n instanceof t);let IT,NT;function KI(){return IT||(IT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return NT||(NT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nw=new WeakMap,Cg=new WeakMap,iw=new WeakMap,sg=new WeakMap,E_=new WeakMap;function XI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ir(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&nw.set(t,n)}).catch(()=>{}),E_.set(e,n),e}function WI(n){if(Cg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Cg.set(n,e)}let Rg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||iw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ir(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ZI(n){Rg=n(Rg)}function JI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(rg(this),e,...t);return iw.set(s,e.sort?e.sort():[e]),Ir(s)}:$I().includes(n)?function(...e){return n.apply(rg(this),e),Ir(nw.get(this))}:function(...e){return Ir(n.apply(rg(this),e))}}function eN(n){return typeof n=="function"?JI(n):(n instanceof IDBTransaction&&WI(n),YI(n,KI())?new Proxy(n,Rg):n)}function Ir(n){if(n instanceof IDBRequest)return XI(n);if(sg.has(n))return sg.get(n);const e=eN(n);return e!==n&&(sg.set(n,e),E_.set(e,n)),e}const rg=n=>E_.get(n);function tN(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Ir(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Ir(c.result),p.oldVersion,p.newVersion,Ir(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const nN=["get","getKey","getAll","getAllKeys","count"],iN=["put","add","delete","clear"],ag=new Map;function xT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ag.get(e))return ag.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=iN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||nN.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return ag.set(e,l),l}ZI(n=>({...n,get:(e,t,s)=>xT(e,t)||n.get(e,t,s),has:(e,t)=>!!xT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function rN(n){return n.getComponent()?.type==="VERSION"}const Ig="@firebase/app",DT="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new _d("@firebase/app"),aN="@firebase/app-compat",oN="@firebase/analytics-compat",lN="@firebase/analytics",uN="@firebase/app-check-compat",cN="@firebase/app-check",hN="@firebase/auth",fN="@firebase/auth-compat",dN="@firebase/database",mN="@firebase/data-connect",pN="@firebase/database-compat",gN="@firebase/functions",_N="@firebase/functions-compat",yN="@firebase/installations",vN="@firebase/installations-compat",EN="@firebase/messaging",TN="@firebase/messaging-compat",bN="@firebase/performance",SN="@firebase/performance-compat",wN="@firebase/remote-config",AN="@firebase/remote-config-compat",CN="@firebase/storage",RN="@firebase/storage-compat",IN="@firebase/firestore",NN="@firebase/ai",xN="@firebase/firestore-compat",DN="firebase",ON="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="[DEFAULT]",MN={[Ig]:"fire-core",[aN]:"fire-core-compat",[lN]:"fire-analytics",[oN]:"fire-analytics-compat",[cN]:"fire-app-check",[uN]:"fire-app-check-compat",[hN]:"fire-auth",[fN]:"fire-auth-compat",[dN]:"fire-rtdb",[mN]:"fire-data-connect",[pN]:"fire-rtdb-compat",[gN]:"fire-fn",[_N]:"fire-fn-compat",[yN]:"fire-iid",[vN]:"fire-iid-compat",[EN]:"fire-fcm",[TN]:"fire-fcm-compat",[bN]:"fire-perf",[SN]:"fire-perf-compat",[wN]:"fire-rc",[AN]:"fire-rc-compat",[CN]:"fire-gcs",[RN]:"fire-gcs-compat",[IN]:"fire-fst",[xN]:"fire-fst-compat",[NN]:"fire-vertex","fire-js":"fire-js",[DN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=new Map,kN=new Map,xg=new Map;function OT(n,e){try{n.container.addComponent(e)}catch(t){js.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ja(n){const e=n.name;if(xg.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;xg.set(e,n);for(const t of kf.values())OT(t,n);for(const t of kN.values())OT(t,n);return!0}function yd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Sc("app","Firebase",PN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=ON;function sw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ng,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Nr.create("bad-app-name",{appName:String(a)});if(t||(t=WS()),!t)throw Nr.create("no-options");const l=kf.get(a);if(l){if(Wi(t,l.options)&&Wi(s,l.config))return l;throw Nr.create("duplicate-app",{appName:a})}const c=new BI(a);for(const p of xg.values())c.addComponent(p);const d=new VN(t,s,c);return kf.set(a,d),d}function T_(n=Ng){const e=kf.get(n);if(!e&&n===Ng&&WS())return sw();if(!e)throw Nr.create("no-app",{appName:n});return e}function Gi(n,e,t){let s=MN[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(c.join(" "));return}ja(new Pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const LN="firebase-heartbeat-database",UN=1,lc="firebase-heartbeat-store";let og=null;function rw(){return og||(og=tN(LN,UN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(lc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nr.create("idb-open",{originalErrorMessage:n.message})})),og}async function jN(n){try{const t=(await rw()).transaction(lc),s=await t.objectStore(lc).get(aw(n));return await t.done,s}catch(e){if(e instanceof Gs)js.warn(e.message);else{const t=Nr.create("idb-get",{originalErrorMessage:e?.message});js.warn(t.message)}}}async function MT(n,e){try{const s=(await rw()).transaction(lc,"readwrite");await s.objectStore(lc).put(e,aw(n)),await s.done}catch(t){if(t instanceof Gs)js.warn(t.message);else{const s=Nr.create("idb-set",{originalErrorMessage:t?.message});js.warn(s.message)}}}function aw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zN=1024,qN=30;class BN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>qN){const a=GN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){js.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kT(),{heartbeatsToSend:t,unsentEntries:s}=FN(this._heartbeatsCache.heartbeats),a=xf(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return js.warn(e),""}}}function kT(){return new Date().toISOString().substring(0,10)}function FN(n,e=zN){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),PT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),PT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class HN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RI()?II().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return MT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return MT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function PT(n){return xf(JSON.stringify({version:2,heartbeats:n})).length}function GN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(n){ja(new Pr("platform-logger",e=>new sN(e),"PRIVATE")),ja(new Pr("heartbeat",e=>new BN(e),"PRIVATE")),Gi(Ig,DT,n),Gi(Ig,DT,"esm2020"),Gi("fire-js","")}QN("");var YN="firebase",KN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gi(YN,KN,"app");function ow(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $N=ow,lw=new Sc("auth","Firebase",ow());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new _d("@firebase/auth");function XN(n,...e){Pf.logLevel<=Fe.WARN&&Pf.warn(`Auth (${Ka}): ${n}`,...e)}function vf(n,...e){Pf.logLevel<=Fe.ERROR&&Pf.error(`Auth (${Ka}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,...e){throw S_(n,...e)}function wi(n,...e){return S_(n,...e)}function b_(n,e,t){const s={...$N(),[e]:t};return new Sc("auth","Firebase",s).create(e,{appName:n.name})}function xr(n){return b_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function WN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Zi(n,"argument-error"),b_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function S_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return lw.create(n,...e)}function Ae(n,e,...t){if(!n)throw S_(e,...t)}function ks(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vf(e),new Error(e)}function zs(n,e){n||ks(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){return typeof self<"u"&&self.location?.href||""}function ZN(){return VT()==="http:"||VT()==="https:"}function VT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZN()||SI()||"connection"in navigator)?navigator.onLine:!0}function ex(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.shortDelay=e,this.longDelay=t,zs(t>e,"Short delay should be less than long delay!"),this.isMobile=v_()||ew()}get(){return JN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n,e){zs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ks("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ks("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ks("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ix=new wc(3e4,6e4);function vd(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Sl(n,e,t,s,a={}){return cw(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=bl({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return bI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Hr(n.emulatorConfig.host)&&(g.credentials="include"),uw.fetch()(await fw(n,n.config.apiHost,t,d),g)})}async function cw(n,e,t){n._canInitEmulator=!1;const s={...tx,...e};try{const a=new sx(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw hf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw hf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw hf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw hf(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw b_(n,y,g);Zi(n,y)}}catch(a){if(a instanceof Gs)throw a;Zi(n,"network-request-failed",{message:String(a)})}}async function hw(n,e,t,s,a={}){const l=await Sl(n,e,t,s,a);return"mfaPendingCredential"in l&&Zi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function fw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?w_(n.config,a):`${n.config.apiScheme}://${a}`;return nx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class sx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(wi(this.auth,"network-request-failed")),ix.get())})}}function hf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=wi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(n,e){return Sl(n,"POST","/v1/accounts:delete",e)}async function Vf(n,e){return Sl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ax(n,e=!1){const t=mt(n),s=await t.getIdToken(e),a=A_(s);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:$u(lg(a.auth_time)),issuedAtTime:$u(lg(a.iat)),expirationTime:$u(lg(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function lg(n){return Number(n)*1e3}function A_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return vf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Df(t);return a?JSON.parse(a):(vf("Failed to decode base64 JWT payload"),null)}catch(a){return vf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function LT(n){const e=A_(n);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Gs&&ox(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ox({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$u(this.lastLoginAt),this.creationTime=$u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(n){const e=n.auth,t=await n.getIdToken(),s=await uc(n,Vf(e,{idToken:t}));Ae(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?dw(a.providerUserInfo):[],c=cx(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Og(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function ux(n){const e=mt(n);await Lf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cx(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function dw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(n,e){const t=await cw(n,{},async()=>{const s=bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await fw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Hr(n.emulatorConfig.host)&&(p.credentials="include"),uw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fx(n,e){return Sl(n,"POST","/v2/accounts:revokeToken",vd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):LT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=LT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await hx(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Jo;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jo,this.toJSON())}_performRefresh(){return ks("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n,e){Ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new lx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Og(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await uc(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ax(this,e)}reload(){return ux(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Lf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await uc(this,rx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:b,isAnonymous:x,providerData:U,stsTokenManager:F}=t;Ae(T&&F,e,"internal-error");const G=Jo.fromJSON(this.name,F);Ae(typeof T=="string",e,"internal-error"),Sr(s,e.name),Sr(a,e.name),Ae(typeof b=="boolean",e,"internal-error"),Ae(typeof x=="boolean",e,"internal-error"),Sr(l,e.name),Sr(c,e.name),Sr(d,e.name),Sr(p,e.name),Sr(g,e.name),Sr(y,e.name);const ae=new bi({uid:T,auth:e,email:a,emailVerified:b,displayName:s,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:G,createdAt:g,lastLoginAt:y});return U&&Array.isArray(U)&&(ae.providerData=U.map(ie=>({...ie}))),p&&(ae._redirectEventId=p),ae}static async _fromIdTokenResponse(e,t,s=!1){const a=new Jo;a.updateFromServerResponse(t);const l=new bi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Lf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?dw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new Jo;d.updateFromIdToken(s);const p=new bi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Og(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=new Map;function Ps(n){zs(n instanceof Function,"Expected a class definition");let e=UT.get(n);return e?(zs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,UT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mw.type="NONE";const jT=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n,e,t){return`firebase:${n}:${e}:${t}`}class el{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Ef(this.userKey,a.apiKey,l),this.fullPersistenceKey=Ef("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Vf(this.auth,{idToken:e}).catch(()=>{});return t?bi._fromGetAccountInfoResponse(this.auth,t,e):null}return bi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new el(Ps(jT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ps(jT);const c=Ef(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const b=await Vf(e,{idToken:y}).catch(()=>{});if(!b)break;T=await bi._fromGetAccountInfoResponse(e,b,y)}else T=bi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new el(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new el(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(Tw(e))return"Webos";if(gw(e))return"Safari";if((e.includes("chrome/")||_w(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function pw(n=An()){return/firefox\//i.test(n)}function gw(n=An()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _w(n=An()){return/crios\//i.test(n)}function yw(n=An()){return/iemobile/i.test(n)}function vw(n=An()){return/android/i.test(n)}function Ew(n=An()){return/blackberry/i.test(n)}function Tw(n=An()){return/webos/i.test(n)}function C_(n=An()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dx(n=An()){return C_(n)&&!!window.navigator?.standalone}function mx(){return wI()&&document.documentMode===10}function bw(n=An()){return C_(n)||vw(n)||Tw(n)||Ew(n)||/windows phone/i.test(n)||yw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n,e=[]){let t;switch(n){case"Browser":t=zT(An());break;case"Worker":t=`${zT(An())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ka}/${s}`}/**
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
 */class px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function gx(n,e={}){return Sl(n,"GET","/v2/passwordPolicy",vd(n,e))}/**
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
 */const _x=6;class yx{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??_x,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qT(this),this.idTokenSubscription=new qT(this),this.beforeStateQueue=new px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ps(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await el.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vf(this,{idToken:e}),s=await bi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Wn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ex()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(xr(this));const t=e?mt(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ps(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gx(this),t=new yx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await fx(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ps(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await el.create(this,[Ps(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&XN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ac(n){return mt(n)}class qT{constructor(e){this.auth=e,this.observer=null,this.addObserver=PI(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ex(n){R_=n}function Tx(n){return R_.loadJS(n)}function bx(){return R_.gapiScript}function Sx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(n,e){const t=yd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Wi(l,e??{}))return a;Zi(a,"already-initialized")}return t.initialize({options:e})}function Ax(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ps);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function Cx(n,e,t){const s=Ac(n);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=ww(e),{host:c,port:d}=Rx(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(Wi(g,s.config.emulator)&&Wi(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Hr(c)?(__(`${l}//${c}${p}`),y_("Auth",!0)):Ix()}function ww(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Rx(n){const e=ww(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:BT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:BT(c)}}}function BT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ix(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ks("not implemented")}_getIdTokenResponse(e){return ks("not implemented")}_linkToIdToken(e,t){return ks("not implemented")}_getReauthenticationResolver(e){return ks("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(n,e){return hw(n,"POST","/v1/accounts:signInWithIdp",vd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="http://localhost";class za extends Aw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new za(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new za(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return tl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,tl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tl(e,t)}buildRequest(){const e={requestUri:Nx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends I_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Cc{constructor(){super("facebook.com")}static credential(e){return za._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Cc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return za._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ms.credential(t,s)}catch{return null}}}Ms.GOOGLE_SIGN_IN_METHOD="google.com";Ms.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Cc{constructor(){super("github.com")}static credential(e){return za._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Cc{constructor(){super("twitter.com")}static credential(e,t){return za._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Cr.credential(t,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await bi._fromIdTokenResponse(e,s,a),c=FT(s);return new qa({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=FT(s);return new qa({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function FT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends Gs{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Uf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Uf(e,t,s,a)}}function Cw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Uf._fromErrorAndOperation(n,l,e,s):l})}async function xx(n,e,t=!1){const s=await uc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qa._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(n,e,t=!1){const{auth:s}=n;if(Wn(s.app))return Promise.reject(xr(s));const a="reauthenticate";try{const l=await uc(n,Cw(s,a,e,n),t);Ae(l.idToken,s,"internal-error");const c=A_(l.idToken);Ae(c,s,"internal-error");const{sub:d}=c;return Ae(n.uid===d,s,"user-mismatch"),qa._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Zi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(n,e,t=!1){if(Wn(n.app))return Promise.reject(xr(n));const s="signIn",a=await Cw(n,s,e),l=await qa._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(n,e){return hw(n,"POST","/v1/accounts:signInWithCustomToken",vd(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(n,e){if(Wn(n.app))return Promise.reject(xr(n));const t=Ac(n),s=await Mx(t,{token:e,returnSecureToken:!0}),a=await qa._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function Px(n,e,t,s){return mt(n).onIdTokenChanged(e,t,s)}function Vx(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function Lx(n,e,t,s){return mt(n).onAuthStateChanged(e,t,s)}function Ux(n){return mt(n).signOut()}const jf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jf,"1"),this.storage.removeItem(jf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=1e3,zx=10;class Iw extends Rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);mx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,zx):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iw.type="LOCAL";const qx=Iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw extends Rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nw.type="SESSION";const xw=Nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Ed(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await Bx(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ed.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=N_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const b=T;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(b.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(){return window}function Hx(n){Qi().location.href=n}/**
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
 */function Dw(){return typeof Qi().WorkerGlobalScope<"u"&&typeof Qi().importScripts=="function"}async function Gx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qx(){return navigator?.serviceWorker?.controller||null}function Yx(){return Dw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebaseLocalStorageDb",Kx=1,zf="firebaseLocalStorage",Mw="fbase_key";class Rc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Td(n,e){return n.transaction([zf],e?"readwrite":"readonly").objectStore(zf)}function $x(){const n=indexedDB.deleteDatabase(Ow);return new Rc(n).toPromise()}function Mg(){const n=indexedDB.open(Ow,Kx);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(zf,{keyPath:Mw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(zf)?e(s):(s.close(),await $x(),e(await Mg()))})})}async function HT(n,e,t){const s=Td(n,!0).put({[Mw]:e,value:t});return new Rc(s).toPromise()}async function Xx(n,e){const t=Td(n,!1).get(e),s=await new Rc(t).toPromise();return s===void 0?null:s.value}function GT(n,e){const t=Td(n,!0).delete(e);return new Rc(t).toPromise()}const Wx=800,Zx=3;class kw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Zx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ed._getInstance(Yx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Gx(),!this.activeServiceWorker)return;this.sender=new Fx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mg();return await HT(e,jf,"1"),await GT(e,jf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>HT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Xx(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>GT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Td(a,!1).getAll();return new Rc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kw.type="LOCAL";const Jx=kw;new wc(3e4,6e4);/**
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
 */function Pw(n,e){return e?Ps(e):(Ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_ extends Aw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function e2(n){return Ox(n.auth,new x_(n),n.bypassAuthState)}function t2(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),Dx(t,new x_(n),n.bypassAuthState)}async function n2(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),xx(t,new x_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e2;case"linkViaPopup":case"linkViaRedirect":return n2;case"reauthViaPopup":case"reauthViaRedirect":return t2;default:Zi(this.auth,"internal-error")}}resolve(e){zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new wc(2e3,1e4);async function s2(n,e,t){if(Wn(n.app))return Promise.reject(wi(n,"operation-not-supported-in-this-environment"));const s=Ac(n);WN(n,e,I_);const a=Pw(s,t);return new Da(s,"signInViaPopup",e,a).executeNotNull()}class Da extends Vw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Da.currentPopupAction&&Da.currentPopupAction.cancel(),Da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){zs(this.filter.length===1,"Popup operations only handle one event");const e=N_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(wi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Da.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i2.get())};e()}}Da.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="pendingRedirect",Tf=new Map;class a2 extends Vw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Tf.get(this.auth._key());if(!e){try{const s=await o2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Tf.set(this.auth._key(),e)}return this.bypassAuthState||Tf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o2(n,e){const t=c2(e),s=u2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function l2(n,e){Tf.set(n._key(),e)}function u2(n){return Ps(n._redirectPersistence)}function c2(n){return Ef(r2,n.config.apiKey,n.name)}async function h2(n,e,t=!1){if(Wn(n.app))return Promise.reject(xr(n));const s=Ac(n),a=Pw(s,e),c=await new a2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=600*1e3;class d2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Lw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(wi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f2&&this.cachedEventUids.clear(),this.cachedEventUids.has(QT(e))}saveEventToCache(e){this.cachedEventUids.add(QT(e)),this.lastProcessedEventTime=Date.now()}}function QT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function m2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(n,e={}){return Sl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_2=/^https?/;async function y2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await p2(n);for(const t of e)try{if(v2(t))return}catch{}Zi(n,"unauthorized-domain")}function v2(n){const e=Dg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!_2.test(t))return!1;if(g2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const E2=new wc(3e4,6e4);function YT(){const n=Qi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function T2(n){return new Promise((e,t)=>{function s(){YT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{YT(),t(wi(n,"network-request-failed"))},timeout:E2.get()})}if(Qi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Qi().gapi?.load)s();else{const a=Sx("iframefcb");return Qi()[a]=()=>{gapi.load?s():t(wi(n,"network-request-failed"))},Tx(`${bx()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw bf=null,e})}let bf=null;function b2(n){return bf=bf||T2(n),bf}/**
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
 */const S2=new wc(5e3,15e3),w2="__/auth/iframe",A2="emulator/auth/iframe",C2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I2(n){const e=n.config;Ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?w_(e,A2):`https://${n.config.authDomain}/${w2}`,s={apiKey:e.apiKey,appName:n.name,v:Ka},a=R2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${bl(s).slice(1)}`}async function N2(n){const e=await b2(n),t=Qi().gapi;return Ae(t,n,"internal-error"),e.open({where:document.body,url:I2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=wi(n,"network-request-failed"),d=Qi().setTimeout(()=>{l(c)},S2.get());function p(){Qi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const x2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D2=500,O2=600,M2="_blank",k2="http://localhost";class KT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P2(n,e,t,s=D2,a=O2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...x2,width:s.toString(),height:a.toString(),top:l,left:c},g=An().toLowerCase();t&&(d=_w(g)?M2:t),pw(g)&&(e=e||k2,p.scrollbars="yes");const y=Object.entries(p).reduce((b,[x,U])=>`${b}${x}=${U},`,"");if(dx(g)&&d!=="_self")return V2(e||"",d),new KT(null);const T=window.open(e||"",d,y);Ae(T,n,"popup-blocked");try{T.focus()}catch{}return new KT(T)}function V2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const L2="__/auth/handler",U2="emulator/auth/handler",j2=encodeURIComponent("fac");async function $T(n,e,t,s,a,l){Ae(n.config.authDomain,n,"auth-domain-config-required"),Ae(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ka,eventId:a};if(e instanceof I_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Of(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof Cc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${j2}=${encodeURIComponent(p)}`:"";return`${z2(n)}?${bl(d).slice(1)}${g}`}function z2({config:n}){return n.emulator?w_(n,U2):`https://${n.authDomain}/${L2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="webStorageSupport";class q2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xw,this._completeRedirectFn=h2,this._overrideRedirectResult=l2}async _openPopup(e,t,s,a){zs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await $T(e,t,s,Dg(),a);return P2(e,l,N_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await $T(e,t,s,Dg(),a);return Hx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(zs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await N2(e),s=new d2(e);return t.register("authEvent",a=>(Ae(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ug,{type:ug},a=>{const l=a?.[0]?.[ug];l!==void 0&&t(!!l),Zi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=y2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bw()||gw()||C_()}}const B2=q2;var XT="@firebase/auth",WT="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G2(n){ja(new Pr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sw(n)},g=new vx(s,a,l,p);return Ax(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ja(new Pr("auth-internal",e=>{const t=Ac(e.getProvider("auth").getImmediate());return(s=>new F2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gi(XT,WT,H2(n)),Gi(XT,WT,"esm2020")}/**
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
 */const Q2=300,Y2=ZS("authIdTokenMaxAge")||Q2;let ZT=null;const K2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Y2)return;const a=t?.token;ZT!==a&&(ZT=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function $2(n=T_()){const e=yd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wx(n,{popupRedirectResolver:B2,persistence:[Jx,qx,xw]}),s=ZS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=K2(l.toString());Vx(t,c,()=>c(t.currentUser)),Px(t,d=>c(d))}}const a=$S("auth");return a&&Cx(t,`http://${a}`),t}function X2(){return document.getElementsByTagName("head")?.[0]??document}Ex({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=wi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",X2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G2("Browser");var JT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,Uw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,C){function N(){}N.prototype=C.prototype,P.D=C.prototype,P.prototype=new N,P.prototype.constructor=P,P.C=function(M,k,L){for(var R=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)R[Ft-2]=arguments[Ft];return C.prototype[k].apply(M,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,C,N){N||(N=0);var M=Array(16);if(typeof C=="string")for(var k=0;16>k;++k)M[k]=C.charCodeAt(N++)|C.charCodeAt(N++)<<8|C.charCodeAt(N++)<<16|C.charCodeAt(N++)<<24;else for(k=0;16>k;++k)M[k]=C[N++]|C[N++]<<8|C[N++]<<16|C[N++]<<24;C=P.g[0],N=P.g[1],k=P.g[2];var L=P.g[3],R=C+(L^N&(k^L))+M[0]+3614090360&4294967295;C=N+(R<<7&4294967295|R>>>25),R=L+(k^C&(N^k))+M[1]+3905402710&4294967295,L=C+(R<<12&4294967295|R>>>20),R=k+(N^L&(C^N))+M[2]+606105819&4294967295,k=L+(R<<17&4294967295|R>>>15),R=N+(C^k&(L^C))+M[3]+3250441966&4294967295,N=k+(R<<22&4294967295|R>>>10),R=C+(L^N&(k^L))+M[4]+4118548399&4294967295,C=N+(R<<7&4294967295|R>>>25),R=L+(k^C&(N^k))+M[5]+1200080426&4294967295,L=C+(R<<12&4294967295|R>>>20),R=k+(N^L&(C^N))+M[6]+2821735955&4294967295,k=L+(R<<17&4294967295|R>>>15),R=N+(C^k&(L^C))+M[7]+4249261313&4294967295,N=k+(R<<22&4294967295|R>>>10),R=C+(L^N&(k^L))+M[8]+1770035416&4294967295,C=N+(R<<7&4294967295|R>>>25),R=L+(k^C&(N^k))+M[9]+2336552879&4294967295,L=C+(R<<12&4294967295|R>>>20),R=k+(N^L&(C^N))+M[10]+4294925233&4294967295,k=L+(R<<17&4294967295|R>>>15),R=N+(C^k&(L^C))+M[11]+2304563134&4294967295,N=k+(R<<22&4294967295|R>>>10),R=C+(L^N&(k^L))+M[12]+1804603682&4294967295,C=N+(R<<7&4294967295|R>>>25),R=L+(k^C&(N^k))+M[13]+4254626195&4294967295,L=C+(R<<12&4294967295|R>>>20),R=k+(N^L&(C^N))+M[14]+2792965006&4294967295,k=L+(R<<17&4294967295|R>>>15),R=N+(C^k&(L^C))+M[15]+1236535329&4294967295,N=k+(R<<22&4294967295|R>>>10),R=C+(k^L&(N^k))+M[1]+4129170786&4294967295,C=N+(R<<5&4294967295|R>>>27),R=L+(N^k&(C^N))+M[6]+3225465664&4294967295,L=C+(R<<9&4294967295|R>>>23),R=k+(C^N&(L^C))+M[11]+643717713&4294967295,k=L+(R<<14&4294967295|R>>>18),R=N+(L^C&(k^L))+M[0]+3921069994&4294967295,N=k+(R<<20&4294967295|R>>>12),R=C+(k^L&(N^k))+M[5]+3593408605&4294967295,C=N+(R<<5&4294967295|R>>>27),R=L+(N^k&(C^N))+M[10]+38016083&4294967295,L=C+(R<<9&4294967295|R>>>23),R=k+(C^N&(L^C))+M[15]+3634488961&4294967295,k=L+(R<<14&4294967295|R>>>18),R=N+(L^C&(k^L))+M[4]+3889429448&4294967295,N=k+(R<<20&4294967295|R>>>12),R=C+(k^L&(N^k))+M[9]+568446438&4294967295,C=N+(R<<5&4294967295|R>>>27),R=L+(N^k&(C^N))+M[14]+3275163606&4294967295,L=C+(R<<9&4294967295|R>>>23),R=k+(C^N&(L^C))+M[3]+4107603335&4294967295,k=L+(R<<14&4294967295|R>>>18),R=N+(L^C&(k^L))+M[8]+1163531501&4294967295,N=k+(R<<20&4294967295|R>>>12),R=C+(k^L&(N^k))+M[13]+2850285829&4294967295,C=N+(R<<5&4294967295|R>>>27),R=L+(N^k&(C^N))+M[2]+4243563512&4294967295,L=C+(R<<9&4294967295|R>>>23),R=k+(C^N&(L^C))+M[7]+1735328473&4294967295,k=L+(R<<14&4294967295|R>>>18),R=N+(L^C&(k^L))+M[12]+2368359562&4294967295,N=k+(R<<20&4294967295|R>>>12),R=C+(N^k^L)+M[5]+4294588738&4294967295,C=N+(R<<4&4294967295|R>>>28),R=L+(C^N^k)+M[8]+2272392833&4294967295,L=C+(R<<11&4294967295|R>>>21),R=k+(L^C^N)+M[11]+1839030562&4294967295,k=L+(R<<16&4294967295|R>>>16),R=N+(k^L^C)+M[14]+4259657740&4294967295,N=k+(R<<23&4294967295|R>>>9),R=C+(N^k^L)+M[1]+2763975236&4294967295,C=N+(R<<4&4294967295|R>>>28),R=L+(C^N^k)+M[4]+1272893353&4294967295,L=C+(R<<11&4294967295|R>>>21),R=k+(L^C^N)+M[7]+4139469664&4294967295,k=L+(R<<16&4294967295|R>>>16),R=N+(k^L^C)+M[10]+3200236656&4294967295,N=k+(R<<23&4294967295|R>>>9),R=C+(N^k^L)+M[13]+681279174&4294967295,C=N+(R<<4&4294967295|R>>>28),R=L+(C^N^k)+M[0]+3936430074&4294967295,L=C+(R<<11&4294967295|R>>>21),R=k+(L^C^N)+M[3]+3572445317&4294967295,k=L+(R<<16&4294967295|R>>>16),R=N+(k^L^C)+M[6]+76029189&4294967295,N=k+(R<<23&4294967295|R>>>9),R=C+(N^k^L)+M[9]+3654602809&4294967295,C=N+(R<<4&4294967295|R>>>28),R=L+(C^N^k)+M[12]+3873151461&4294967295,L=C+(R<<11&4294967295|R>>>21),R=k+(L^C^N)+M[15]+530742520&4294967295,k=L+(R<<16&4294967295|R>>>16),R=N+(k^L^C)+M[2]+3299628645&4294967295,N=k+(R<<23&4294967295|R>>>9),R=C+(k^(N|~L))+M[0]+4096336452&4294967295,C=N+(R<<6&4294967295|R>>>26),R=L+(N^(C|~k))+M[7]+1126891415&4294967295,L=C+(R<<10&4294967295|R>>>22),R=k+(C^(L|~N))+M[14]+2878612391&4294967295,k=L+(R<<15&4294967295|R>>>17),R=N+(L^(k|~C))+M[5]+4237533241&4294967295,N=k+(R<<21&4294967295|R>>>11),R=C+(k^(N|~L))+M[12]+1700485571&4294967295,C=N+(R<<6&4294967295|R>>>26),R=L+(N^(C|~k))+M[3]+2399980690&4294967295,L=C+(R<<10&4294967295|R>>>22),R=k+(C^(L|~N))+M[10]+4293915773&4294967295,k=L+(R<<15&4294967295|R>>>17),R=N+(L^(k|~C))+M[1]+2240044497&4294967295,N=k+(R<<21&4294967295|R>>>11),R=C+(k^(N|~L))+M[8]+1873313359&4294967295,C=N+(R<<6&4294967295|R>>>26),R=L+(N^(C|~k))+M[15]+4264355552&4294967295,L=C+(R<<10&4294967295|R>>>22),R=k+(C^(L|~N))+M[6]+2734768916&4294967295,k=L+(R<<15&4294967295|R>>>17),R=N+(L^(k|~C))+M[13]+1309151649&4294967295,N=k+(R<<21&4294967295|R>>>11),R=C+(k^(N|~L))+M[4]+4149444226&4294967295,C=N+(R<<6&4294967295|R>>>26),R=L+(N^(C|~k))+M[11]+3174756917&4294967295,L=C+(R<<10&4294967295|R>>>22),R=k+(C^(L|~N))+M[2]+718787259&4294967295,k=L+(R<<15&4294967295|R>>>17),R=N+(L^(k|~C))+M[9]+3951481745&4294967295,P.g[0]=P.g[0]+C&4294967295,P.g[1]=P.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+L&4294967295}s.prototype.u=function(P,C){C===void 0&&(C=P.length);for(var N=C-this.blockSize,M=this.B,k=this.h,L=0;L<C;){if(k==0)for(;L<=N;)a(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<C;)if(M[k++]=P.charCodeAt(L++),k==this.blockSize){a(this,M),k=0;break}}else for(;L<C;)if(M[k++]=P[L++],k==this.blockSize){a(this,M),k=0;break}}this.h=k,this.o+=C},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var C=1;C<P.length-8;++C)P[C]=0;var N=8*this.o;for(C=P.length-8;C<P.length;++C)P[C]=N&255,N/=256;for(this.u(P),P=Array(16),C=N=0;4>C;++C)for(var M=0;32>M;M+=8)P[N++]=this.g[C]>>>M&255;return P};function l(P,C){var N=d;return Object.prototype.hasOwnProperty.call(N,P)?N[P]:N[P]=C(P)}function c(P,C){this.h=C;for(var N=[],M=!0,k=P.length-1;0<=k;k--){var L=P[k]|0;M&&L==C||(N[k]=L,M=!1)}this.g=N}var d={};function p(P){return-128<=P&&128>P?l(P,function(C){return new c([C|0],0>C?-1:0)}):new c([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return G(g(-P));for(var C=[],N=1,M=0;P>=N;M++)C[M]=P/N|0,N*=4294967296;return new c(C,0)}function y(P,C){if(P.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P.charAt(0)=="-")return G(y(P.substring(1),C));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=g(Math.pow(C,8)),M=T,k=0;k<P.length;k+=8){var L=Math.min(8,P.length-k),R=parseInt(P.substring(k,k+L),C);8>L?(L=g(Math.pow(C,L)),M=M.j(L).add(g(R))):(M=M.j(N),M=M.add(g(R)))}return M}var T=p(0),b=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(F(this))return-G(this).m();for(var P=0,C=1,N=0;N<this.g.length;N++){var M=this.i(N);P+=(0<=M?M:4294967296+M)*C,C*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(U(this))return"0";if(F(this))return"-"+G(this).toString(P);for(var C=g(Math.pow(P,6)),N=this,M="";;){var k=ge(N,C).g;N=ae(N,k.j(C));var L=((0<N.g.length?N.g[0]:N.h)>>>0).toString(P);if(N=k,U(N))return L+M;for(;6>L.length;)L="0"+L;M=L+M}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function U(P){if(P.h!=0)return!1;for(var C=0;C<P.g.length;C++)if(P.g[C]!=0)return!1;return!0}function F(P){return P.h==-1}n.l=function(P){return P=ae(this,P),F(P)?-1:U(P)?0:1};function G(P){for(var C=P.g.length,N=[],M=0;M<C;M++)N[M]=~P.g[M];return new c(N,~P.h).add(b)}n.abs=function(){return F(this)?G(this):this},n.add=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],M=0,k=0;k<=C;k++){var L=M+(this.i(k)&65535)+(P.i(k)&65535),R=(L>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);M=R>>>16,L&=65535,R&=65535,N[k]=R<<16|L}return new c(N,N[N.length-1]&-2147483648?-1:0)};function ae(P,C){return P.add(G(C))}n.j=function(P){if(U(this)||U(P))return T;if(F(this))return F(P)?G(this).j(G(P)):G(G(this).j(P));if(F(P))return G(this.j(G(P)));if(0>this.l(x)&&0>P.l(x))return g(this.m()*P.m());for(var C=this.g.length+P.g.length,N=[],M=0;M<2*C;M++)N[M]=0;for(M=0;M<this.g.length;M++)for(var k=0;k<P.g.length;k++){var L=this.i(M)>>>16,R=this.i(M)&65535,Ft=P.i(k)>>>16,pt=P.i(k)&65535;N[2*M+2*k]+=R*pt,ie(N,2*M+2*k),N[2*M+2*k+1]+=L*pt,ie(N,2*M+2*k+1),N[2*M+2*k+1]+=R*Ft,ie(N,2*M+2*k+1),N[2*M+2*k+2]+=L*Ft,ie(N,2*M+2*k+2)}for(M=0;M<C;M++)N[M]=N[2*M+1]<<16|N[2*M];for(M=C;M<2*C;M++)N[M]=0;return new c(N,0)};function ie(P,C){for(;(P[C]&65535)!=P[C];)P[C+1]+=P[C]>>>16,P[C]&=65535,C++}function le(P,C){this.g=P,this.h=C}function ge(P,C){if(U(C))throw Error("division by zero");if(U(P))return new le(T,T);if(F(P))return C=ge(G(P),C),new le(G(C.g),G(C.h));if(F(C))return C=ge(P,G(C)),new le(G(C.g),C.h);if(30<P.g.length){if(F(P)||F(C))throw Error("slowDivide_ only works with positive integers.");for(var N=b,M=C;0>=M.l(P);)N=me(N),M=me(M);var k=Me(N,1),L=Me(M,1);for(M=Me(M,2),N=Me(N,2);!U(M);){var R=L.add(M);0>=R.l(P)&&(k=k.add(N),L=R),M=Me(M,1),N=Me(N,1)}return C=ae(P,k.j(C)),new le(k,C)}for(k=T;0<=P.l(C);){for(N=Math.max(1,Math.floor(P.m()/C.m())),M=Math.ceil(Math.log(N)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),L=g(N),R=L.j(C);F(R)||0<R.l(P);)N-=M,L=g(N),R=L.j(C);U(L)&&(L=b),k=k.add(L),P=ae(P,R)}return new le(k,P)}n.A=function(P){return ge(this,P).h},n.and=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)&P.i(M);return new c(N,this.h&P.h)},n.or=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)|P.i(M);return new c(N,this.h|P.h)},n.xor=function(P){for(var C=Math.max(this.g.length,P.g.length),N=[],M=0;M<C;M++)N[M]=this.i(M)^P.i(M);return new c(N,this.h^P.h)};function me(P){for(var C=P.g.length+1,N=[],M=0;M<C;M++)N[M]=P.i(M)<<1|P.i(M-1)>>>31;return new c(N,P.h)}function Me(P,C){var N=C>>5;C%=32;for(var M=P.g.length-N,k=[],L=0;L<M;L++)k[L]=0<C?P.i(L+N)>>>C|P.i(L+N+1)<<32-C:P.i(L+N);return new c(k,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Uw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Dr=c}).apply(typeof JT<"u"?JT:typeof self<"u"?self:typeof window<"u"?window:{});var ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jw,Hu,zw,Sf,kg,qw,Bw,Fw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof ff=="object"&&ff];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var j=h[w];if(!(j in v))break e;v=v[j]}h=h[h.length-1],w=v[h],_=_(w),_!=w&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,w=!1,j={next:function(){if(!w&&v<h.length){var Q=v++;return{value:_(Q,h[Q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,w),h.apply(_,j)}}return function(){return h.apply(_,arguments)}}function b(h,_,v){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,b.apply(null,arguments)}function x(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function U(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(w,j,Q){for(var se=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)se[Qe-2]=arguments[Qe];return _.prototype[j].apply(w,se)}}function F(h){const _=h.length;if(0<_){const v=Array(_);for(let w=0;w<_;w++)v[w]=h[w];return v}return[]}function G(h,_){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(p(w)){const j=h.length||0,Q=w.length||0;h.length=j+Q;for(let se=0;se<Q;se++)h[j+se]=w[se]}else h.push(w)}}class ae{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ie(h){return/^[\s\xa0]*$/.test(h)}function le(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ge(h){return ge[" "](h),h}ge[" "]=function(){};var me=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function Me(h,_,v){for(const w in h)_.call(v,h[w],w,h)}function P(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let v,w;for(let j=1;j<arguments.length;j++){w=arguments[j];for(v in w)h[v]=w[v];for(let Q=0;Q<N.length;Q++)v=N[Q],Object.prototype.hasOwnProperty.call(w,v)&&(h[v]=w[v])}}function k(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function L(h){d.setTimeout(()=>{throw h},0)}function R(){var h=Ie;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Ft{constructor(){this.h=this.g=null}add(_,v){const w=pt.get();w.set(_,v),this.h?this.h.next=w:this.g=w,this.h=w}}var pt=new ae(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ce=!1,Ie=new Ft,D=()=>{const h=d.Promise.resolve(void 0);ee=()=>{h.then(X)}};var X=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(v){L(v)}var _=pt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ce=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var _e=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function ke(h,_){if(te.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(me){e:{try{ge(_.nodeName);var j=!0;break e}catch{}j=!1}j||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&ke.aa.h.call(this)}}U(ke,te);var be={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),st=0;function Jn(h,_,v,w,j){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!w,this.ha=j,this.key=++st,this.da=this.fa=!1}function Ri(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function mi(h){this.src=h,this.g={},this.h=0}mi.prototype.add=function(h,_,v,w,j){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var se=is(h,_,w,j);return-1<se?(_=h[se],v||(_.fa=!1)):(_=new Jn(_,this.src,Q,!!w,j),_.fa=v,h.push(_)),_};function ns(h,_){var v=_.type;if(v in h.g){var w=h.g[v],j=Array.prototype.indexOf.call(w,_,void 0),Q;(Q=0<=j)&&Array.prototype.splice.call(w,j,1),Q&&(Ri(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function is(h,_,v,w){for(var j=0;j<h.length;++j){var Q=h[j];if(!Q.da&&Q.listener==_&&Q.capture==!!v&&Q.ha==w)return j}return-1}var ss="closure_lm_"+(1e6*Math.random()|0),Kr={};function eo(h,_,v,w,j){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)eo(h,_[Q],v,w,j);return null}return v=Ks(v),h&&h[Ot]?h.K(_,v,g(w)?!!w.capture:!1,j):on(h,_,v,!1,w,j)}function on(h,_,v,w,j,Q){if(!_)throw Error("Invalid event type");var se=g(j)?!!j.capture:!!j,Qe=ze(h);if(Qe||(h[ss]=Qe=new mi(h)),v=Qe.add(_,v,w,se,Q),v.proxy)return v;if(w=$r(),v.proxy=w,w.src=h,w.listener=v,h.addEventListener)_e||(j=se),j===void 0&&(j=!1),h.addEventListener(_.toString(),w,j);else if(h.attachEvent)h.attachEvent(de(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function $r(){function h(v){return _.call(h.src,h.listener,v)}const _=Ne;return h}function rs(h,_,v,w,j){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)rs(h,_[Q],v,w,j);else w=g(w)?!!w.capture:!!w,v=Ks(v),h&&h[Ot]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],v=is(Q,v,w,j),-1<v&&(Ri(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=ze(h))&&(_=h.g[_.toString()],h=-1,_&&(h=is(_,v,w,j)),(v=-1<h?_[h]:null)&&Ys(v))}function Ys(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Ot])ns(_.i,h);else{var v=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(v,w,h.capture):_.detachEvent?_.detachEvent(de(v),w):_.addListener&&_.removeListener&&_.removeListener(w),(v=ze(_))?(ns(v,h),v.h==0&&(v.src=null,_[ss]=null)):Ri(h)}}}function de(h){return h in Kr?Kr[h]:Kr[h]="on"+h}function Ne(h,_){if(h.da)h=!0;else{_=new ke(_,this);var v=h.listener,w=h.ha||h.src;h.fa&&Ys(h),h=v.call(w,_)}return h}function ze(h){return h=h[ss],h instanceof mi?h:null}var yn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ks(h){return typeof h=="function"?h:(h[yn]||(h[yn]=function(_){return h.handleEvent(_)}),h[yn])}function ut(){oe.call(this),this.i=new mi(this),this.M=this,this.F=null}U(ut,oe),ut.prototype[Ot]=!0,ut.prototype.removeEventListener=function(h,_,v,w){rs(this,h,_,v,w)};function xe(h,_){var v,w=h.F;if(w)for(v=[];w;w=w.F)v.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new te(_,h);else if(_ instanceof te)_.target=_.target||h;else{var j=_;_=new te(w,h),M(_,j)}if(j=!0,v)for(var Q=v.length-1;0<=Q;Q--){var se=_.g=v[Q];j=Rn(se,w,!0,_)&&j}if(se=_.g=h,j=Rn(se,w,!0,_)&&j,j=Rn(se,w,!1,_)&&j,v)for(Q=0;Q<v.length;Q++)se=_.g=v[Q],j=Rn(se,w,!1,_)&&j}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],w=0;w<v.length;w++)Ri(v[w]);delete h.g[_],h.h--}}this.F=null},ut.prototype.K=function(h,_,v,w){return this.i.add(String(h),_,!1,v,w)},ut.prototype.L=function(h,_,v,w){return this.i.add(String(h),_,!0,v,w)};function Rn(h,_,v,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var j=!0,Q=0;Q<_.length;++Q){var se=_[Q];if(se&&!se.da&&se.capture==v){var Qe=se.listener,Gt=se.ha||se.src;se.fa&&ns(h.i,se),j=Qe.call(Gt,w)!==!1&&j}}return j&&!w.defaultPrevented}function ln(h,_,v){if(typeof h=="function")v&&(h=b(h,v));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Bc(h){h.g=ln(()=>{h.g=null,h.i&&(h.i=!1,Bc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Jd extends oe{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Bc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(h){oe.call(this),this.h=h,this.g={}}U(Xr,oe);var Wr=[];function Zr(h){Me(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ys(_)},h),h.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),Zr(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pi=d.JSON.stringify,to=d.JSON.parse,Jr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Ml(){}Ml.prototype.h=null;function kl(h){return h.h||(h.h=h.i())}function Pl(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function os(){te.call(this,"d")}U(os,te);function Vl(){te.call(this,"c")}U(Vl,te);var Ii={},Ll=null;function $s(){return Ll=Ll||new ut}Ii.La="serverreachability";function no(h){te.call(this,Ii.La,h)}U(no,te);function Xs(h){const _=$s();xe(_,new no(_))}Ii.STAT_EVENT="statevent";function Fc(h,_){te.call(this,Ii.STAT_EVENT,h),this.stat=_}U(Fc,te);function yt(h){const _=$s();xe(_,new Fc(_,h))}Ii.Ma="timingevent";function Ht(h,_){te.call(this,Ii.Ma,h),this.size=_}U(Ht,te);function Mt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function ei(){this.g=!0}ei.prototype.xa=function(){this.g=!1};function Ul(h,_,v,w,j,Q){h.info(function(){if(h.g)if(Q)for(var se="",Qe=Q.split("&"),Gt=0;Gt<Qe.length;Gt++){var Ye=Qe[Gt].split("=");if(1<Ye.length){var Zt=Ye[0];Ye=Ye[1];var Qt=Zt.split("_");se=2<=Qt.length&&Qt[1]=="type"?se+(Zt+"="+Ye+"&"):se+(Zt+"=redacted&")}}else se=null;else se=Q;return"XMLHTTP REQ ("+w+") [attempt "+j+"]: "+_+`
`+v+`
`+se})}function em(h,_,v,w,j,Q,se){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+j+"]: "+_+`
`+v+`
`+Q+" "+se})}function Ws(h,_,v,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ea(h,v)+(w?" "+w:"")})}function Hc(h,_){h.info(function(){return"TIMEOUT: "+_})}ei.prototype.info=function(){};function ea(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var w=v[h];if(!(2>w.length)){var j=w[1];if(Array.isArray(j)&&!(1>j.length)){var Q=j[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var se=1;se<j.length;se++)j[se]=""}}}}return pi(v)}catch{return _}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ls={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ni;function xi(){}U(xi,Ml),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},Ni=new xi;function In(h,_,v,w){this.j=h,this.i=_,this.l=v,this.R=w||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rt}function Rt(){this.i=null,this.g="",this.h=!1}var jl={},io={};function gi(h,_,v){h.L=1,h.v=ra(Fn(_)),h.m=v,h.P=!0,us(h,null)}function us(h,_){h.F=Date.now(),ta(h),h.A=Fn(h.v);var v=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Gl(v.i,"t",w),h.C=0,v=h.j.J,h.h=new Rt,h.g=ah(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Jd(b(h.Y,h,h.g),h.O)),_=h.U,v=h.g,w=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Wr[0]=j.toString()),j=Wr);for(var Q=0;Q<j.length;Q++){var se=eo(v,j[Q],w||_.handleEvent,!1,_.h||_);if(!se)break;_.g[se.key]=se}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Xs(),Ul(h.i,h.u,h.A,h.l,h.R,h.m)}In.prototype.ca=function(h){h=h.target;const _=this.M;_&&si(h)==3?_.j():this.Y(h)},In.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=si(this.g);var _=this.g.Ba();const _s=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Zc(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=_s?Xs(3):Xs(2)),Js(this);var v=this.g.Z();this.X=v;t:if(Gc(this)){var w=Zc(this.g);h="";var j=w.length,Q=si(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Di(this);var se="";break t}this.h.i=new d.TextDecoder}for(_=0;_<j;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(Q&&_==j-1)});w.length=0,this.h.g+=h,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,em(this.i,this.u,this.A,this.l,this.R,Qt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,Gt=this.g;if((Qe=Gt.g?Gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Qe)){var Ye=Qe;break t}}Ye=null}if(v=Ye)Ws(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,na(this,v);else{this.o=!1,this.s=3,yt(12),un(this),Di(this);break e}}if(this.P){v=!0;let cn;for(;!this.J&&this.C<se.length;)if(cn=Qc(this,se),cn==io){Qt==4&&(this.s=4,yt(14),v=!1),Ws(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==jl){this.s=4,yt(15),Ws(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else Ws(this.i,this.l,cn,null),na(this,cn);if(Gc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||se.length!=0||this.h.h||(this.s=1,yt(16),v=!1),this.o=this.o&&v,!v)Ws(this.i,this.l,se,"[Invalid Chunked Response]"),un(this),Di(this);else if(0<se.length&&!this.W){this.W=!0;var Zt=this.j;Zt.g==this&&Zt.ba&&!Zt.M&&(Zt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),da(Zt),Zt.M=!0,yt(11))}}else Ws(this.i,this.l,se,null),na(this,se);Qt==4&&un(this),this.o&&!this.J&&(Qt==4?ih(this.j,this):(this.o=!1,ta(this)))}else rm(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),un(this),Di(this)}}}catch{}finally{}};function Gc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Qc(h,_){var v=h.C,w=_.indexOf(`
`,v);return w==-1?io:(v=Number(_.substring(v,w)),isNaN(v)?jl:(w+=1,w+v>_.length?io:(_=_.slice(w,w+v),h.C=w+v,_)))}In.prototype.cancel=function(){this.J=!0,un(this)};function ta(h){h.S=Date.now()+h.I,Yc(h,h.I)}function Yc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Mt(b(h.ba,h),_)}function Js(h){h.B&&(d.clearTimeout(h.B),h.B=null)}In.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Hc(this.i,this.A),this.L!=2&&(Xs(),yt(17)),un(this),this.s=2,Di(this)):Yc(this,this.S-h)};function Di(h){h.j.G==0||h.J||ih(h.j,h)}function un(h){Js(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Zr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function na(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||zl(v.h,h))){if(!h.K&&zl(v.h,h)&&v.G==3){try{var w=v.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var j=w;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)go(v),mo(v);else break e;Xl(v),yt(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Mt(b(v.Za,v),6e3));if(1>=ro(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else gs(v,11)}else if((h.K||v.g==h)&&go(v),!ie(_))for(j=v.Da.g.parse(_),_=0;_<j.length;_++){let Ye=j[_];if(v.T=Ye[0],Ye=Ye[1],v.G==2)if(Ye[0]=="c"){v.K=Ye[1],v.ia=Ye[2];const Zt=Ye[3];Zt!=null&&(v.la=Zt,v.j.info("VER="+v.la));const Qt=Ye[4];Qt!=null&&(v.Aa=Qt,v.j.info("SVER="+v.Aa));const _s=Ye[5];_s!=null&&typeof _s=="number"&&0<_s&&(w=1.5*_s,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const cn=h.g;if(cn){const Ui=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var Q=w.h;Q.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ao(Q,Q.h),Q.h=null))}if(w.D){const Zl=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zl&&(w.ya=Zl,rt(w.I,w.D,Zl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var se=h;if(w.qa=rh(w,w.J?w.ia:null,w.W),se.K){Nn(w.h,se);var Qe=se,Gt=w.L;Gt&&(Qe.I=Gt),Qe.B&&(Js(Qe),ta(Qe)),w.g=se}else th(w);0<v.i.length&&po(v)}else Ye[0]!="stop"&&Ye[0]!="close"||gs(v,7);else v.G==3&&(Ye[0]=="stop"||Ye[0]=="close"?Ye[0]=="stop"?gs(v,7):Kl(v):Ye[0]!="noop"&&v.l&&v.l.ta(Ye),v.v=0)}}Xs(4)}catch{}}var Kc=class{constructor(h,_){this.g=h,this.map=_}};function cs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function so(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ro(h){return h.h?1:h.g?h.g.size:0}function zl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function ao(h,_){h.g?h.g.add(_):h.h=_}function Nn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}cs.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function ql(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return F(h.i)}function tm(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,w=0;w<v;w++)_.push(h[w]);return _}_=[],v=0;for(w in h)_[v++]=h[w];return _}function oo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const w in h)_[v++]=w;return _}}}function Bl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=oo(h),w=tm(h),j=w.length,Q=0;Q<j;Q++)_.call(void 0,w[Q],v&&v[Q],h)}var ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nm(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var w=h[v].indexOf("="),j=null;if(0<=w){var Q=h[v].substring(0,w);j=h[v].substring(w+1)}else Q=h[v];_(Q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function kt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof kt){this.h=h.h,sa(this,h.j),this.o=h.o,this.g=h.g,er(this,h.s),this.l=h.l;var _=h.i,v=new fs;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),hs(this,v),this.m=h.m}else h&&(_=String(h).match(ia))?(this.h=!1,sa(this,_[1]||"",!0),this.o=ti(_[2]||""),this.g=ti(_[3]||"",!0),er(this,_[4]),this.l=ti(_[5]||"",!0),hs(this,_[6]||"",!0),this.m=ti(_[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}kt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(aa(_,Fl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(aa(_,Fl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(aa(v,v.charAt(0)=="/"?im:Hl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",aa(v,lo)),h.join("")};function Fn(h){return new kt(h)}function sa(h,_,v){h.j=v?ti(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function er(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function hs(h,_,v){_ instanceof fs?(h.i=_,Xc(h.i,h.h)):(v||(_=aa(_,sm)),h.i=new fs(_,h.h))}function rt(h,_,v){h.i.set(_,v)}function ra(h){return rt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function ti(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function aa(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,$c),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function $c(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Fl=/[#\/\?@]/g,Hl=/[#\?:]/g,im=/[#\?]/g,sm=/[#\?@]/g,lo=/#/g;function fs(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ni(h){h.g||(h.g=new Map,h.h=0,h.i&&nm(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=fs.prototype,n.add=function(h,_){ni(this),this.i=null,h=Oi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ds(h,_){ni(h),_=Oi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ms(h,_){return ni(h),_=Oi(h,_),h.g.has(_)}n.forEach=function(h,_){ni(this),this.g.forEach(function(v,w){v.forEach(function(j){h.call(_,j,w,this)},this)},this)},n.na=function(){ni(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let w=0;w<_.length;w++){const j=h[w];for(let Q=0;Q<j.length;Q++)v.push(_[w])}return v},n.V=function(h){ni(this);let _=[];if(typeof h=="string")ms(this,h)&&(_=_.concat(this.g.get(Oi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return ni(this),this.i=null,h=Oi(this,h),ms(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Gl(h,_,v){ds(h,_),0<v.length&&(h.i=null,h.g.set(Oi(h,_),F(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var w=_[v];const Q=encodeURIComponent(String(w)),se=this.V(w);for(w=0;w<se.length;w++){var j=Q;se[w]!==""&&(j+="="+encodeURIComponent(String(se[w]))),h.push(j)}}return this.i=h.join("&")};function Oi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Xc(h,_){_&&!h.j&&(ni(h),h.i=null,h.g.forEach(function(v,w){var j=w.toLowerCase();w!=j&&(ds(this,w),Gl(this,j,v))},h)),h.j=_}function oa(h,_){const v=new ei;if(d.Image){const w=new Image;w.onload=x(ii,v,"TestLoadImage: loaded",!0,_,w),w.onerror=x(ii,v,"TestLoadImage: error",!1,_,w),w.onabort=x(ii,v,"TestLoadImage: abort",!1,_,w),w.ontimeout=x(ii,v,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function _i(h,_){const v=new ei,w=new AbortController,j=setTimeout(()=>{w.abort(),ii(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(Q=>{clearTimeout(j),Q.ok?ii(v,"TestPingServer: ok",!0,_):ii(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(j),ii(v,"TestPingServer: error",!1,_)})}function ii(h,_,v,w,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),w(v)}catch{}}function la(){this.g=new Jr}function Mi(h,_,v){const w=v||"";try{Bl(h,function(j,Q){let se=j;g(j)&&(se=pi(j)),_.push(w+Q+"="+encodeURIComponent(se))})}catch(j){throw _.push(w+"type="+encodeURIComponent("_badmap")),j}}function tr(h){this.l=h.Ub||null,this.j=h.eb||!1}U(tr,Ml),tr.prototype.g=function(){return new ps(this.l,this.j)},tr.prototype.i=(function(h){return function(){return h}})({});function ps(h,_){ut.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(ps,ut),n=ps.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Pi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?ki(this):Pi(this),this.readyState==3&&Ql(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,ki(this))},n.Qa=function(h){this.g&&(this.response=h,ki(this))},n.ga=function(){this.g&&ki(this)};function ki(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Pi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Pi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Yl(h){let _="";return Me(h,function(v,w){_+=w,_+=":",_+=v,_+=`\r
`}),_}function Wt(h,_,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=Yl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):rt(h,_,v))}function Je(h){ut.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Je,ut);var uo=/^https?$/i,ua=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ni.g(),this.v=this.o?kl(this.o):kl(Ni),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Wc(this,Q);return}if(h=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var j in w)v.set(j,w[j]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Q of w.keys())v.set(Q,w.get(Q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,_,void 0))||w||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,se]of v)this.g.setRequestHeader(Q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ca(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Wc(this,Q)}};function Wc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,co(h),Vi(h)}function co(h){h.A||(h.A=!0,xe(h,"complete"),xe(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,xe(this,"complete"),xe(this,"abort"),Vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vi(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ho(this):this.bb())},n.bb=function(){ho(this)};function ho(h){if(h.h&&typeof c<"u"&&(!h.v[1]||si(h)!=4||h.Z()!=2)){if(h.u&&si(h)==4)ln(h.Ea,0,h);else if(xe(h,"readystatechange"),si(h)==4){h.h=!1;try{const se=h.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var w;if(w=se===0){var j=String(h.D).match(ia)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),w=!uo.test(j?j.toLowerCase():"")}v=w}if(v)xe(h,"complete"),xe(h,"success");else{h.m=6;try{var Q=2<si(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",co(h)}}finally{Vi(h)}}}}function Vi(h,_){if(h.g){ca(h);const v=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||xe(h,"ready");try{v.onreadystatechange=w}catch{}}}function ca(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function si(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<si(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),to(_)}};function Zc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function rm(h){const _={};h=(h.g&&2<=si(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(ie(h[w]))continue;var v=k(h[w]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=_[j]||[];_[j]=Q,Q.push(v)}P(_,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ha(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function fo(h){this.Aa=0,this.i=[],this.j=new ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ha("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ha("baseRetryDelayMs",5e3,h),this.cb=ha("retryDelaySeedMs",1e4,h),this.Wa=ha("forwardChannelMaxRetries",2,h),this.wa=ha("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new cs(h&&h.concurrentRequestLimit),this.Da=new la,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fo.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,w){yt(0),this.W=h,this.H=_||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=rh(this,null,this.W),po(this)};function Kl(h){if(Jc(h),h.G==3){var _=h.U++,v=Fn(h.I);if(rt(v,"SID",h.K),rt(v,"RID",_),rt(v,"TYPE","terminate"),fa(h,v),_=new In(h,h.j,_),_.L=2,_.v=ra(Fn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=ah(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ta(_)}sh(h)}function mo(h){h.g&&(da(h),h.g.cancel(),h.g=null)}function Jc(h){mo(h),h.u&&(d.clearTimeout(h.u),h.u=null),go(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function po(h){if(!so(h.h)&&!h.s){h.s=!0;var _=h.Ga;ee||D(),ce||(ee(),ce=!0),Ie.add(_,h),h.B=0}}function am(h,_){return ro(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Mt(b(h.Ga,h,_),Wl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new In(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=C(Q),M(Q,this.S)):Q=this.S),this.m!==null||this.O||(j.H=Q,Q=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=eh(this,j,_),v=Fn(this.I),rt(v,"RID",h),rt(v,"CVER",22),this.D&&rt(v,"X-HTTP-Session-Id",this.D),fa(this,v),Q&&(this.O?_="headers="+encodeURIComponent(String(Yl(Q)))+"&"+_:this.m&&Wt(v,this.m,Q)),ao(this.h,j),this.Ua&&rt(v,"TYPE","init"),this.P?(rt(v,"$req",_),rt(v,"SID","null"),j.T=!0,gi(j,v,null)):gi(j,v,_),this.G=2}}else this.G==3&&(h?$l(this,h):this.i.length==0||so(this.h)||$l(this))};function $l(h,_){var v;_?v=_.l:v=h.U++;const w=Fn(h.I);rt(w,"SID",h.K),rt(w,"RID",v),rt(w,"AID",h.T),fa(h,w),h.m&&h.o&&Wt(w,h.m,h.o),v=new In(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=eh(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),ao(h.h,v),gi(v,w,_)}function fa(h,_){h.H&&Me(h.H,function(v,w){rt(_,w,v)}),h.l&&Bl({},function(v,w){rt(_,w,v)})}function eh(h,_,v){v=Math.min(h.i.length,v);var w=h.l?b(h.l.Na,h.l,h):null;e:{var j=h.i;let Q=-1;for(;;){const se=["count="+v];Q==-1?0<v?(Q=j[0].g,se.push("ofs="+Q)):Q=0:se.push("ofs="+Q);let Qe=!0;for(let Gt=0;Gt<v;Gt++){let Ye=j[Gt].g;const Zt=j[Gt].map;if(Ye-=Q,0>Ye)Q=Math.max(0,j[Gt].g-100),Qe=!1;else try{Mi(Zt,se,"req"+Ye+"_")}catch{w&&w(Zt)}}if(Qe){w=se.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,w}function th(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ee||D(),ce||(ee(),ce=!0),Ie.add(_,h),h.v=0}}function Xl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Mt(b(h.Fa,h),Wl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,nh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Mt(b(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),mo(this),nh(this))};function da(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function nh(h){h.g=new In(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Fn(h.qa);rt(_,"RID","rpc"),rt(_,"SID",h.K),rt(_,"AID",h.T),rt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&rt(_,"TO",h.ja),rt(_,"TYPE","xmlhttp"),fa(h,_),h.m&&h.o&&Wt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ra(Fn(_)),v.m=null,v.P=!0,us(v,h)}n.Za=function(){this.C!=null&&(this.C=null,mo(this),Xl(this),yt(19))};function go(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ih(h,_){var v=null;if(h.g==_){go(h),da(h),h.g=null;var w=2}else if(zl(h.h,_))v=_.D,Nn(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var j=h.B;w=$s(),xe(w,new Ht(w,v)),po(h)}else th(h);else if(j=_.s,j==3||j==0&&0<_.X||!(w==1&&am(h,_)||w==2&&Xl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),j){case 1:gs(h,5);break;case 4:gs(h,10);break;case 3:gs(h,6);break;default:gs(h,2)}}}function Wl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function gs(h,_){if(h.j.info("Error code "+_),_==2){var v=b(h.fb,h),w=h.Xa;const j=!w;w=new kt(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||sa(w,"https"),ra(w),j?oa(w.toString(),v):_i(w.toString(),v)}else yt(2);h.G=0,h.l&&h.l.sa(_),sh(h),Jc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function sh(h){if(h.G=0,h.ka=[],h.l){const _=ql(h.h);(_.length!=0||h.i.length!=0)&&(G(h.ka,_),G(h.ka,h.i),h.h.i.length=0,F(h.i),h.i.length=0),h.l.ra()}}function rh(h,_,v){var w=v instanceof kt?Fn(v):new kt(v);if(w.g!="")_&&(w.g=_+"."+w.g),er(w,w.s);else{var j=d.location;w=j.protocol,_=_?_+"."+j.hostname:j.hostname,j=+j.port;var Q=new kt(null);w&&sa(Q,w),_&&(Q.g=_),j&&er(Q,j),v&&(Q.l=v),w=Q}return v=h.D,_=h.ya,v&&_&&rt(w,v,_),rt(w,"VER",h.la),fa(h,w),w}function ah(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Je(new tr({eb:v})):new Je(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function oh(){}n=oh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _o(){}_o.prototype.g=function(h,_){return new xn(h,_)};function xn(h,_){ut.call(this),this.g=new fo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ie(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ie(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Li(this)}U(xn,ut),xn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){Kl(this.g)},xn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=pi(h),h=v);_.i.push(new Kc(_.Ya++,h)),_.G==3&&po(_)},xn.prototype.N=function(){this.g.l=null,delete this.j,Kl(this.g),delete this.g,xn.aa.N.call(this)};function lh(h){os.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}U(lh,os);function uh(){Vl.call(this),this.status=1}U(uh,Vl);function Li(h){this.g=h}U(Li,oh),Li.prototype.ua=function(){xe(this.g,"a")},Li.prototype.ta=function(h){xe(this.g,new lh(h))},Li.prototype.sa=function(h){xe(this.g,new uh)},Li.prototype.ra=function(){xe(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,Fw=function(){return new _o},Bw=function(){return $s()},qw=Ii,kg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,Sf=Zs,ls.COMPLETE="complete",zw=ls,Pl.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Hu=Pl,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,jw=Je}).apply(typeof ff<"u"?ff:typeof self<"u"?self:typeof window<"u"?window:{});const eb="@firebase/firestore",tb="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let wl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new _d("@firebase/firestore");function Yo(){return Ba.logLevel}function he(n,...e){if(Ba.logLevel<=Fe.DEBUG){const t=e.map(D_);Ba.debug(`Firestore (${wl}): ${n}`,...t)}}function qs(n,...e){if(Ba.logLevel<=Fe.ERROR){const t=e.map(D_);Ba.error(`Firestore (${wl}): ${n}`,...t)}}function ll(n,...e){if(Ba.logLevel<=Fe.WARN){const t=e.map(D_);Ba.warn(`Firestore (${wl}): ${n}`,...t)}}function D_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Hw(n,s,t)}function Hw(n,e,t){let s=`FIRESTORE (${wl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw qs(s),new Error(s)}function et(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Hw(e,a,s)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Gs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bn.UNAUTHENTICATED)))}shutdown(){}}class Z2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class J2{constructor(e){this.t=e,this.currentUser=bn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ls,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ls)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(et(typeof s.accessToken=="string",31837,{l:s}),new Gw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string",2055,{h:e}),new bn(e)}}class eD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new eD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class nb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){et(this.o===void 0,3512);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new nb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(et(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nb(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=iD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function He(n,e){return n<e?-1:n>e?1:0}function Pg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return cg(a)===cg(l)?He(a,l):cg(a)?1:-1}return He(n.length,e.length)}const sD=55296,rD=57343;function cg(n){const e=n.charCodeAt(0);return e>=sD&&e<=rD}function ul(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="__name__";class Hi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Hi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Hi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Hi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return He(e.length,t.length)}static compareSegments(e,t){const s=Hi.isNumericId(e),a=Hi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Hi.extractNumericId(e).compare(Hi.extractNumericId(t)):Pg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class dt extends Hi{construct(e,t,s){return new dt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new dt(t)}static emptyPath(){return new dt([])}}const aD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends Hi{construct(e,t,s){return new gn(e,t,s)}static isValidIdentifier(e){return aD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ib}static keyField(){return new gn([ib])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ue($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ue($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ue($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gn(t)}static emptyPath(){return new gn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Qw(n,e,t){if(!t)throw new ue($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oD(n,e,t,s){if(e===!0&&s===!0)throw new ue($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sb(n){if(!ye.isDocumentKey(n))throw new ue($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rb(n){if(ye.isDocumentKey(n))throw new ue($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function On(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bd(n);throw new ue($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function qt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ic(n,e){if(!Yw(n))throw new ue($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ue($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=-62135596800,ob=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ob);return new _t(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ab)throw new ue($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ob}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ic(e,_t._jsonSchema))return new _t(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ab;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_t._jsonSchemaVersion="firestore/timestamp/1.0",_t._jsonSchema={type:qt("string",_t._jsonSchemaVersion),seconds:qt("number"),nanoseconds:qt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new _t(0,0))}static max(){return new Ce(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const cc=-1;function lD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ce.fromTimestamp(s===1e9?new _t(t+1,0):new _t(t,s));return new Vr(a,ye.empty(),e)}function uD(n){return new Vr(n.readTime,n.key,cc)}class Vr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Vr(Ce.min(),ye.empty(),cc)}static max(){return new Vr(Ce.max(),ye.empty(),cc)}}function cD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:He(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==hD)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):J.reject(t)}static resolve(e){return new J(((t,s)=>{t(e)}))}static reject(e){return new J(((t,s)=>{s(e)}))}static waitFor(e){return new J(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next((a=>a?J.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new J(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((y=>{c[g]=y,++d,d===l&&s(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new J(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function dD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Cl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const M_=-1;function wd(n){return n==null}function qf(n){return n===0&&1/n==-1/0}function mD(n){return typeof n=="number"&&Number.isInteger(n)&&!qf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="";function pD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=lb(e)),e=gD(n.get(t),e);return lb(e)}function gD(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Kw:t+="";break;default:t+=l}}return t}function lb(n){return n+Kw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $w(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt=class Vg{constructor(e,t){this.comparator=e,this.root=t||Or.EMPTY}insert(e,t){return new Vg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Or.BLACK,null,null))}remove(e){return new Vg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Or.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new df(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new df(this.root,e,this.comparator,!1)}getReverseIterator(){return new df(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new df(this.root,e,this.comparator,!0)}},df=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Or=class Ds{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ds.RED,this.left=a??Ds.EMPTY,this.right=l??Ds.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ds(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ds.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ds.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ds.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ds.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}};Or.EMPTY=null,Or.RED=!0,Or.BLACK=!1;Or.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Or(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.comparator=e,this.data=new Bt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cb(this.data.getIterator())}getIteratorFrom(e){return new cb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xt(this.comparator);return t.data=e,t}}class cb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.fields=e,e.sort(gn.comparator)}static empty(){return new Zn([])}unionWith(e){let t=new Xt(gn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ul(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Xw("Invalid base64 string: "+l):l}})(e);return new _n(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new _n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_n.EMPTY_BYTE_STRING=new _n("");const _D=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(n){if(et(!!n,39018),typeof n=="string"){let e=0;const t=_D.exec(n);if(et(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xt(n.seconds),nanos:xt(n.nanos)}}function xt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ur(n){return typeof n=="string"?_n.fromBase64String(n):_n.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="server_timestamp",Zw="__type__",Jw="__previous_value__",eA="__local_write_time__";function k_(n){return(n?.mapValue?.fields||{})[Zw]?.stringValue===Ww}function Ad(n){const e=n.mapValue.fields[Jw];return k_(e)?Ad(e):e}function hc(n){const e=Lr(n.mapValue.fields[eA].timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Bf="(default)";class fc{constructor(e,t){this.projectId=e,this.database=t||Bf}static empty(){return new fc("","")}get isDefaultDatabase(){return this.database===Bf}isEqual(e){return e instanceof fc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="__type__",vD="__max__",mf={mapValue:{}},nA="__vector__",Ff="value";function jr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?k_(n)?4:TD(n)?9007199254740991:ED(n)?10:11:Te(28295,{value:n})}function Ji(n,e){if(n===e)return!0;const t=jr(n);if(t!==jr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hc(n).isEqual(hc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Lr(a.timestampValue),d=Lr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Ur(a.bytesValue).isEqual(Ur(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return xt(a.geoPointValue.latitude)===xt(l.geoPointValue.latitude)&&xt(a.geoPointValue.longitude)===xt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return xt(a.integerValue)===xt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=xt(a.doubleValue),d=xt(l.doubleValue);return c===d?qf(c)===qf(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return ul(n.arrayValue.values||[],e.arrayValue.values||[],Ji);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(ub(c)!==ub(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Ji(c[p],d[p])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function dc(n,e){return(n.values||[]).find((t=>Ji(t,e)))!==void 0}function cl(n,e){if(n===e)return 0;const t=jr(n),s=jr(e);if(t!==s)return He(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return He(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=xt(l.integerValue||l.doubleValue),p=xt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return hb(n.timestampValue,e.timestampValue);case 4:return hb(hc(n),hc(e));case 5:return Pg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=Ur(l),p=Ur(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=He(d[g],p[g]);if(y!==0)return y}return He(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=He(xt(l.latitude),xt(c.latitude));return d!==0?d:He(xt(l.longitude),xt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return fb(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Ff]?.arrayValue,y=p[Ff]?.arrayValue,T=He(g?.values?.length||0,y?.values?.length||0);return T!==0?T:fb(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===mf.mapValue&&c===mf.mapValue)return 0;if(l===mf.mapValue)return 1;if(c===mf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const b=Pg(p[T],y[T]);if(b!==0)return b;const x=cl(d[p[T]],g[y[T]]);if(x!==0)return x}return He(p.length,y.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{he:t})}}function hb(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return He(n,e);const t=Lr(n),s=Lr(e),a=He(t.seconds,s.seconds);return a!==0?a:He(t.nanos,s.nanos)}function fb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=cl(t[a],s[a]);if(l)return l}return He(t.length,s.length)}function hl(n){return Lg(n)}function Lg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Lr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ur(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ye.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Lg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Lg(t.fields[c])}`;return a+"}"})(n.mapValue):Te(61005,{value:n})}function wf(n){switch(jr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ad(n);return e?16+wf(e):16;case 5:return 2*n.stringValue.length;case 6:return Ur(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+wf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Gr(s.fields,((l,c)=>{a+=l.length+wf(c)})),a})(n.mapValue);default:throw Te(13486,{value:n})}}function db(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ug(n){return!!n&&"integerValue"in n}function P_(n){return!!n&&"arrayValue"in n}function mb(n){return!!n&&"nullValue"in n}function pb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Af(n){return!!n&&"mapValue"in n}function ED(n){return(n?.mapValue?.fields||{})[tA]?.stringValue===nA}function Xu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Xu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xu(n.arrayValue.values[t]);return e}return{...n}}function TD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Af(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xu(t)}setAll(e){let t=gn.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Xu(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Af(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Af(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Gr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new jn(Xu(this.value))}}function iA(n){const e=[];return Gr(n.fields,((t,s)=>{const a=new gn([t]);if(Af(s)){const l=iA(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Sn(e,0,Ce.min(),Ce.min(),Ce.min(),jn.empty(),0)}static newFoundDocument(e,t,s,a){return new Sn(e,1,t,Ce.min(),s,a,0)}static newNoDocument(e,t){return new Sn(e,2,t,Ce.min(),Ce.min(),jn.empty(),0)}static newUnknownDocument(e,t){return new Sn(e,3,t,Ce.min(),Ce.min(),jn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Sn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hf{constructor(e,t){this.position=e,this.inclusive=t}}function gb(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(c.referenceValue),t.key):s=cl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function _b(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ji(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class mc{constructor(e,t="asc"){this.field=e,this.dir=t}}function bD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class sA{}class zt extends sA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new wD(e,t,s):t==="array-contains"?new RD(e,s):t==="in"?new ID(e,s):t==="not-in"?new ND(e,s):t==="array-contains-any"?new xD(e,s):new zt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new AD(e,s):new CD(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cl(t,this.value)):t!==null&&jr(this.value)===jr(t)&&this.matchesComparison(cl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ci extends sA{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ci(e,t)}matches(e){return rA(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rA(n){return n.op==="and"}function aA(n){return SD(n)&&rA(n)}function SD(n){for(const e of n.filters)if(e instanceof Ci)return!1;return!0}function jg(n){if(n instanceof zt)return n.field.canonicalString()+n.op.toString()+hl(n.value);if(aA(n))return n.filters.map((e=>jg(e))).join(",");{const e=n.filters.map((t=>jg(t))).join(",");return`${n.op}(${e})`}}function oA(n,e){return n instanceof zt?(function(s,a){return a instanceof zt&&s.op===a.op&&s.field.isEqual(a.field)&&Ji(s.value,a.value)})(n,e):n instanceof Ci?(function(s,a){return a instanceof Ci&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&oA(c,a.filters[d])),!0):!1})(n,e):void Te(19439)}function lA(n){return n instanceof zt?(function(t){return`${t.field.canonicalString()} ${t.op} ${hl(t.value)}`})(n):n instanceof Ci?(function(t){return t.op.toString()+" {"+t.getFilters().map(lA).join(" ,")+"}"})(n):"Filter"}class wD extends zt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class AD extends zt{constructor(e,t){super(e,"in",t),this.keys=uA("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class CD extends zt{constructor(e,t){super(e,"not-in",t),this.keys=uA("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function uA(n,e){return(e.arrayValue?.values||[]).map((t=>ye.fromName(t.referenceValue)))}class RD extends zt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return P_(t)&&dc(t.arrayValue,this.value)}}class ID extends zt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dc(this.value.arrayValue,t)}}class ND extends zt{constructor(e,t){super(e,"not-in",t)}matches(e){if(dc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dc(this.value.arrayValue,t)}}class xD extends zt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!P_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>dc(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function yb(n,e=null,t=[],s=[],a=null,l=null,c=null){return new DD(n,e,t,s,a,l,c)}function V_(n){const e=Re(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>jg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),wd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>hl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>hl(s))).join(",")),e.Te=t}return e.Te}function L_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!bD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!oA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_b(n.startAt,e.startAt)&&_b(n.endAt,e.endAt)}function zg(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function OD(n,e,t,s,a,l,c,d){return new Rl(n,e,t,s,a,l,c,d)}function Cd(n){return new Rl(n)}function vb(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cA(n){return n.collectionGroup!==null}function Wu(n){const e=Re(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Xt(gn.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new mc(l,s))})),t.has(gn.keyField().canonicalString())||e.Ie.push(new mc(gn.keyField(),s))}return e.Ie}function Yi(n){const e=Re(n);return e.Ee||(e.Ee=MD(e,Wu(n))),e.Ee}function MD(n,e){if(n.limitType==="F")return yb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new mc(a.field,l)}));const t=n.endAt?new Hf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Hf(n.startAt.position,n.startAt.inclusive):null;return yb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function qg(n,e){const t=n.filters.concat([e]);return new Rl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Gf(n,e,t){return new Rl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Rd(n,e){return L_(Yi(n),Yi(e))&&n.limitType===e.limitType}function hA(n){return`${V_(Yi(n))}|lt:${n.limitType}`}function Ko(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>lA(a))).join(", ")}]`),wd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>hl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>hl(a))).join(",")),`Target(${s})`})(Yi(n))}; limitType=${n.limitType})`}function Id(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of Wu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=gb(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,Wu(s),a)||s.endAt&&!(function(c,d,p){const g=gb(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,Wu(s),a))})(n,e)}function kD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fA(n){return(e,t)=>{let s=!1;for(const a of Wu(n)){const l=PD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function PD(n,e,t){const s=n.field.isKeyField()?ye.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?cl(p,g):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return $w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new Bt(ye.comparator);function Bs(){return VD}const dA=new Bt(ye.comparator);function Gu(...n){let e=dA;for(const t of n)e=e.insert(t.key,t);return e}function mA(n){let e=dA;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Oa(){return Zu()}function pA(){return Zu()}function Zu(){return new $a((n=>n.toString()),((n,e)=>n.isEqual(e)))}const LD=new Bt(ye.comparator),UD=new Xt(ye.comparator);function Ge(...n){let e=UD;for(const t of n)e=e.add(t);return e}const jD=new Xt(He);function zD(){return jD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qf(e)?"-0":e}}function gA(n){return{integerValue:""+n}}function qD(n,e){return mD(e)?gA(e):U_(n,e)}/**
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
 */class Nd{constructor(){this._=void 0}}function BD(n,e,t){return n instanceof pc?(function(a,l){const c={fields:{[Zw]:{stringValue:Ww},[eA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&k_(l)&&(l=Ad(l)),l&&(c.fields[Jw]=l),{mapValue:c}})(t,e):n instanceof fl?yA(n,e):n instanceof dl?vA(n,e):(function(a,l){const c=_A(a,l),d=Eb(c)+Eb(a.Ae);return Ug(c)&&Ug(a.Ae)?gA(d):U_(a.serializer,d)})(n,e)}function FD(n,e,t){return n instanceof fl?yA(n,e):n instanceof dl?vA(n,e):t}function _A(n,e){return n instanceof Qf?(function(s){return Ug(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class pc extends Nd{}class fl extends Nd{constructor(e){super(),this.elements=e}}function yA(n,e){const t=EA(e);for(const s of n.elements)t.some((a=>Ji(a,s)))||t.push(s);return{arrayValue:{values:t}}}class dl extends Nd{constructor(e){super(),this.elements=e}}function vA(n,e){let t=EA(e);for(const s of n.elements)t=t.filter((a=>!Ji(a,s)));return{arrayValue:{values:t}}}class Qf extends Nd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Eb(n){return xt(n.integerValue||n.doubleValue)}function EA(n){return P_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.field=e,this.transform=t}}function HD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof fl&&a instanceof fl||s instanceof dl&&a instanceof dl?ul(s.elements,a.elements,Ji):s instanceof Qf&&a instanceof Qf?Ji(s.Ae,a.Ae):s instanceof pc&&a instanceof pc})(n.transform,e.transform)}class GD{constructor(e,t){this.version=e,this.transformResults=t}}class Mn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xd{}function TA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dd(n.key,Mn.none()):new Nc(n.key,n.data,Mn.none());{const t=n.data,s=jn.empty();let a=new Xt(gn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Qr(n.key,s,new Zn(a.toArray()),Mn.none())}}function QD(n,e,t){n instanceof Nc?(function(a,l,c){const d=a.value.clone(),p=bb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Qr?(function(a,l,c){if(!Cf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=bb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(bA(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Ju(n,e,t,s){return n instanceof Nc?(function(l,c,d,p){if(!Cf(l.precondition,c))return d;const g=l.value.clone(),y=Sb(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Qr?(function(l,c,d,p){if(!Cf(l.precondition,c))return d;const g=Sb(l.fieldTransforms,p,c),y=c.data;return y.setAll(bA(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return Cf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function YD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=_A(s.transform,a||null);l!=null&&(t===null&&(t=jn.empty()),t.set(s.field,l))}return t||null}function Tb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&ul(s,a,((l,c)=>HD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nc extends xd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Qr extends xd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function bA(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function bb(n,e,t){const s=new Map;et(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,FD(c,d,t[a]))}return s}function Sb(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,BD(l,c,e))}return s}class Dd extends xd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KD extends xd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&QD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ju(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ju(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=pA();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=TA(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ce.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ge())}isEqual(e){return this.batchId===e.batchId&&ul(this.mutations,e.mutations,((t,s)=>Tb(t,s)))&&ul(this.baseMutations,e.baseMutations,((t,s)=>Tb(t,s)))}}class z_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){et(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return LD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new z_(e,t,s,a)}}/**
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
 */class XD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt,$e;function ZD(n){switch(n){case $.OK:return Te(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function SA(n){if(n===void 0)return qs("GRPC error has no .code"),$.UNKNOWN;switch(n){case Lt.OK:return $.OK;case Lt.CANCELLED:return $.CANCELLED;case Lt.UNKNOWN:return $.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return $.INTERNAL;case Lt.UNAVAILABLE:return $.UNAVAILABLE;case Lt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Lt.NOT_FOUND:return $.NOT_FOUND;case Lt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Lt.ABORTED:return $.ABORTED;case Lt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Lt.DATA_LOSS:return $.DATA_LOSS;default:return Te(39323,{code:n})}}($e=Lt||(Lt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JD(){return new TextEncoder}/**
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
 */const eO=new Dr([4294967295,4294967295],0);function wb(n){const e=JD().encode(n),t=new Uw;return t.update(e),new Uint8Array(t.digest())}function Ab(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Dr([t,s],0),new Dr([a,l],0)]}class q_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Qu(`Invalid padding: ${t}`);if(s<0)throw new Qu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Qu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Qu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Dr.fromNumber(s)));return a.compare(eO)===1&&(a=new Dr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=wb(e),[s,a]=Ab(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new q_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=wb(e),[s,a]=Ab(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Qu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,xc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Od(Ce.min(),a,new Bt(He),Bs(),Ge())}}class xc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new xc(s,t,Ge(),Ge(),Ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class wA{constructor(e,t){this.targetId=e,this.Ce=t}}class AA{constructor(e,t,s=_n.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Cb{constructor(){this.ve=0,this.Fe=Rb(),this.Me=_n.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ge(),t=Ge(),s=Ge();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te(38017,{changeType:l})}})),new xc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Rb()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,et(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bs(),this.Je=pf(),this.He=pf(),this.Ye=new Bt(He)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(zg(l))if(s===0){const c=new ye(l.path);this.et(t,c,Sn.newNoDocument(c,Ce.min()))}else et(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Ur(s).toUint8Array()}catch(p){if(p instanceof Xw)return ll("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new q_(c,a,l)}catch(p){return ll(p instanceof Qu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&zg(d.target)){const p=new ye(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,Sn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=Ge();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Od(e,t,this.Ye,this.je,s);return this.je=Bs(),this.Je=pf(),this.He=pf(),this.Ye=new Bt(He),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Cb,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Xt(He),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Xt(He),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function pf(){return new Bt(ye.comparator)}function Rb(){return new Bt(ye.comparator)}const nO={asc:"ASCENDING",desc:"DESCENDING"},iO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sO={and:"AND",or:"OR"};class rO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bg(n,e){return n.useProto3Json||wd(e)?e:{value:e}}function Yf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function aO(n,e){return Yf(n,e.toTimestamp())}function Ki(n){return et(!!n,49232),Ce.fromTimestamp((function(t){const s=Lr(t);return new _t(s.seconds,s.nanos)})(n))}function B_(n,e){return Fg(n,e).canonicalString()}function Fg(n,e){const t=(function(a){return new dt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function RA(n){const e=dt.fromString(n);return et(OA(e),10190,{key:e.toString()}),e}function Hg(n,e){return B_(n.databaseId,e.path)}function hg(n,e){const t=RA(e);if(t.get(1)!==n.databaseId.projectId)throw new ue($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(NA(t))}function IA(n,e){return B_(n.databaseId,e)}function oO(n){const e=RA(n);return e.length===4?dt.emptyPath():NA(e)}function Gg(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function NA(n){return et(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ib(n,e,t){return{name:Hg(n,e),fields:t.value.mapValue.fields}}function lO(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(et(y===void 0||typeof y=="string",58123),_n.fromBase64String(y||"")):(et(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),_n.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const y=g.code===void 0?$.UNKNOWN:SA(g.code);return new ue(y,g.message||"")})(c);t=new AA(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=hg(n,s.document.name),l=Ki(s.document.updateTime),c=s.document.createTime?Ki(s.document.createTime):Ce.min(),d=new jn({mapValue:{fields:s.document.fields}}),p=Sn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new Rf(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=hg(n,s.document),l=s.readTime?Ki(s.readTime):Ce.min(),c=Sn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Rf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=hg(n,s.document),l=s.removedTargetIds||[];t=new Rf([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new WD(a,l),d=s.targetId;t=new wA(d,c)}}return t}function uO(n,e){let t;if(e instanceof Nc)t={update:Ib(n,e.key,e.value)};else if(e instanceof Dd)t={delete:Hg(n,e.key)};else if(e instanceof Qr)t={update:Ib(n,e.key,e.data),updateMask:yO(e.fieldMask)};else{if(!(e instanceof KD))return Te(16599,{Vt:e.type});t={verify:Hg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof pc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof fl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof dl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Qf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Te(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:aO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)})(n,e.precondition)),t}function cO(n,e){return n&&n.length>0?(et(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?Ki(a.updateTime):Ki(l);return c.isEqual(Ce.min())&&(c=Ki(l)),new GD(c,a.transformResults||[])})(t,e)))):[]}function hO(n,e){return{documents:[IA(n,e.path)]}}function fO(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=IA(n,a);const l=(function(g){if(g.length!==0)return DA(Ci.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(b){return{field:$o(b.field),direction:pO(b.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Bg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function dO(n){let e=oO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){et(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const b=xA(T);return b instanceof Ci&&aA(b)?b.getFilters():[b]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((b=>(function(U){return new mc(Xo(U.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(b)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let b;return b=typeof T=="object"?T.value:T,wd(b)?null:b})(t.limit));let p=null;t.startAt&&(p=(function(T){const b=!!T.before,x=T.values||[];return new Hf(x,b)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const b=!T.before,x=T.values||[];return new Hf(x,b)})(t.endAt)),OD(e,a,c,l,d,"F",p,g)}function mO(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xA(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Xo(t.unaryFilter.field);return zt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Xo(t.unaryFilter.field);return zt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Xo(t.unaryFilter.field);return zt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Xo(t.unaryFilter.field);return zt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return zt.create(Xo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ci.create(t.compositeFilter.filters.map((s=>xA(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function pO(n){return nO[n]}function gO(n){return iO[n]}function _O(n){return sO[n]}function $o(n){return{fieldPath:n.canonicalString()}}function Xo(n){return gn.fromServerFormat(n.fieldPath)}function DA(n){return n instanceof zt?(function(t){if(t.op==="=="){if(pb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NAN"}};if(mb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NAN"}};if(mb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$o(t.field),op:gO(t.op),value:t.value}}})(n):n instanceof Ci?(function(t){const s=t.getFilters().map((a=>DA(a)));return s.length===1?s[0]:{compositeFilter:{op:_O(t.op),filters:s}}})(n):Te(54877,{filter:n})}function yO(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function OA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,s,a,l=Ce.min(),c=Ce.min(),d=_n.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.yt=e}}function EO(n){const e=dO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.Cn=new bO}addToCollectionParentIndex(e,t){return this.Cn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Vr.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class bO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Xt(dt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Xt(dt.comparator)).toArray()}}/**
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
 */const Nb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},MA=41943040;class Un{static withCacheSize(e){return new Un(e,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un.DEFAULT_COLLECTION_PERCENTILE=10,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Un.DEFAULT=new Un(MA,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Un.DISABLED=new Un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const xb="LruGarbageCollector",SO=1048576;function Db([n,e],[t,s]){const a=He(n,t);return a===0?He(e,s):a}class wO{constructor(e){this.Ir=e,this.buffer=new Xt(Db),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Db(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(xb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Cl(t)?he(xb,"Ignoring IndexedDB error during garbage collection: ",t):await Al(t)}await this.Vr(3e5)}))}}class CO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return J.resolve(Sd.ce);const s=new wO(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Nb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nb):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),Yo()<=Fe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function RO(n,e){return new CO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.changes=new $a((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Sn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Ju(s.mutation,a,Zn.empty(),_t.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ge()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ge()){const a=Oa();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=Gu();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Oa();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ge())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Bs();const c=Zu(),d=(function(){return Zu()})();return t.forEach(((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Qr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Ju(y.mutation,g,y.mutation.getFieldMask(),_t.now())):c.set(g.key,Zn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>d.set(g,new NO(y,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=Zu();let a=new Bt(((c,d)=>c-d)),l=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Zn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||Ge()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=pA();y.forEach((b=>{if(!l.has(b)){const x=TA(t.get(b),s.get(b));x!==null&&T.set(b,x),l=l.add(b)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return J.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(Oa());let d=cc,p=l;return c.next((g=>J.forEach(g,((y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next((b=>{p=p.insert(y,b)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ge()))).next((y=>({batchId:d,changes:mA(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((s=>{let a=Gu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Gu();return this.indexManager.getCollectionParents(e,l).next((d=>J.forEach(d,(p=>{const g=(function(T,b){return new Rl(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((T,b)=>{c=c.insert(T,b)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,Sn.newInvalidDocument(y)))}));let d=Gu();return c.forEach(((p,g)=>{const y=l.get(p);y!==void 0&&Ju(y.mutation,g,Zn.empty(),_t.now()),Id(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return J.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Ki(a.createTime)}})(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:EO(a.bundledQuery),readTime:Ki(a.readTime)}})(t)),J.resolve()}}/**
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
 */class OO{constructor(){this.overlays=new Bt(ye.comparator),this.qr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Oa();return J.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=Oa(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Bt(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Oa(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Oa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return J.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new XD(t,s));let l=this.qr.get(t);l===void 0&&(l=Ge(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class MO{constructor(){this.sessionToken=_n.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.Qr=new Xt(sn.$r),this.Ur=new Xt(sn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new sn(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new sn(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ye(new dt([])),s=new sn(t,e),a=new sn(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ye(new dt([])),s=new sn(t,e),a=new sn(t,e+1);let l=Ge();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new sn(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class sn{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ye.comparator(e.key,t.key)||He(e.Yr,t.Yr)}static Kr(e,t){return He(e.Yr,t.Yr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Xt(sn.$r)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new $D(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new sn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?M_:this.tr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new sn(t,0),a=new sn(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Xt(He);return t.forEach((a=>{const l=new sn(a,0),c=new sn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),J.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const c=new sn(new ye(l),0);let d=new Xt(He);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),J.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){et(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return J.forEach(t.mutations,(a=>{const l=new sn(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new sn(t,0),a=this.Zr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.ri=e,this.docs=(function(){return new Bt(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():Sn.newInvalidDocument(t))}getEntries(e,t){let s=Bs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():Sn.newInvalidDocument(a))})),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Bs();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||cD(uD(y),s)<=0||(a.has(y.key)||Id(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Te(9500)}ii(e,t){return J.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new VO(this)}getSize(e){return J.resolve(this.size)}}class VO extends IO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),J.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.persistence=e,this.si=new $a((t=>V_(t)),L_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.oi=0,this._i=new F_,this.targetCount=0,this.ai=ml.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),J.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ml(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Pr(t),J.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),J.waitFor(l).next((()=>a))}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t){this.ui={},this.overlays={},this.ci=new Sd(0),this.li=!1,this.li=!0,this.hi=new MO,this.referenceDelegate=e(this),this.Pi=new LO(this),this.indexManager=new TO,this.remoteDocumentCache=(function(a){return new PO(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new vO(t),this.Ii=new DO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new kO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new UO(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return J.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class UO extends fD{constructor(e){super(),this.currentSequenceNumber=e}}class H_{constructor(e){this.persistence=e,this.Ri=new F_,this.Vi=null}static mi(e){return new H_(e)}get fi(){if(this.Vi)return this.Vi;throw Te(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.fi,(s=>{const a=ye.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ce.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return J.or([()=>J.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Kf{constructor(e,t){this.persistence=e,this.pi=new $a((s=>pD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=RO(this,t)}static mi(e,t){return new Kf(e,t)}Ei(){}di(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return J.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?J.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ce.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),J.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wf(e.data.value)),t}br(e,t,s){return J.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Ge(),a=Ge();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new G_(e,t.fromCache,s,a)}}/**
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
 */class jO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return CI()?8:dD(An())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new jO;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Yo()<=Fe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),J.resolve()):(Yo()<=Fe.DEBUG&&he("QueryEngine","Query:",Ko(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Yo()<=Fe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yi(t))):J.resolve())}ys(e,t){if(vb(t))return J.resolve(null);let s=Yi(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Gf(t,null,"F"),s=Yi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Ge(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Gf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return vb(t)||a.isEqual(Ce.min())?J.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?J.resolve(null):(Yo()<=Fe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Ko(t)),this.vs(e,c,t,lD(a,cc)).next((d=>d)))}))}Ds(e,t){let s=new Xt(fA(e));return t.forEach(((a,l)=>{Id(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Yo()<=Fe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Ko(t)),this.ps.getDocumentsMatchingQuery(e,t,Vr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="LocalStore",qO=3e8;class BO{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Bt(He),this.xs=new $a((l=>V_(l)),L_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function FO(n,e,t,s){return new BO(n,e,t,s)}async function PA(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=Ge();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function HO(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,y){const T=g.batch,b=T.keys();let x=J.resolve();return b.forEach((U=>{x=x.next((()=>y.getEntry(p,U))).next((F=>{const G=g.docVersions.get(U);et(G!==null,48541),F.version.compareTo(G)<0&&(T.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),y.addEntry(F)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Ge();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function VA(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function GO(n,e){const t=Re(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,T)=>{const b=a.get(T);if(!b)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let x=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(_n.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):y.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(y.resumeToken,s)),a=a.insert(T,x),(function(F,G,ae){return F.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=qO?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(b,x,y)&&d.push(t.Pi.updateTargetData(l,x))}));let p=Bs(),g=Ge();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push(QO(l,c,e.documentUpdates).next((y=>{p=y.ks,g=y.qs}))),!s.isEqual(Ce.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return J.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function QO(n,e,t){let s=Ge(),a=Ge();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Bs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ce.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):he(Q_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function YO(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=M_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function KO(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,J.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new Rr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Qg(n,e,t){const s=Re(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Cl(c))throw c;he(Q_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function Ob(n,e,t){const s=Re(n);let a=Ce.min(),l=Ge();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,y){const T=Re(p),b=T.xs.get(y);return b!==void 0?J.resolve(T.Ms.get(b)):T.Pi.getTargetData(g,y)})(s,c,Yi(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ce.min(),t?l:Ge()))).next((d=>($O(s,kD(e),d),{documents:d,Qs:l})))))}function $O(n,e,t){let s=n.Os.get(e)||Ce.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Mb{constructor(){this.activeTargetIds=zD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XO{constructor(){this.Mo=new Mb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Mb,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="ConnectivityMonitor";class Pb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(kb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(kb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gf=null;function Yg(){return gf===null?gf=(function(){return 268435456+Math.round(2147483648*Math.random())})():gf++,"0x"+gf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="RestConnection",ZO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Bf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Yg(),d=this.zo(e,t.toUriEncodedString());he(fg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),y=Hr(g);return this.Jo(e,d,p,s,y).then((T=>(he(fg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ll(fg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+wl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=ZO[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="WebChannelConnection";class tM extends JO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Yg();return new Promise(((d,p)=>{const g=new jw;g.setWithCredentials(!0),g.listenOnce(zw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Sf.NO_ERROR:const T=g.getResponseJson();he(Tn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Sf.TIMEOUT:he(Tn,`RPC '${e}' ${c} timed out`),p(new ue($.DEADLINE_EXCEEDED,"Request time out"));break;case Sf.HTTP_ERROR:const b=g.getStatus();if(he(Tn,`RPC '${e}' ${c} failed with status:`,b,"response text:",g.getResponseText()),b>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const U=x?.error;if(U&&U.status&&U.message){const F=(function(ae){const ie=ae.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ie)>=0?ie:$.UNKNOWN})(U.status);p(new ue(F,U.message))}else p(new ue($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ue($.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(Tn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);he(Tn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Yg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Fw(),d=Bw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");he(Tn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);this.I_(T);let b=!1,x=!1;const U=new eM({Yo:G=>{x?he(Tn,`Not sending because RPC '${e}' stream ${a} is closed:`,G):(b||(he(Tn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),b=!0),he(Tn,`RPC '${e}' stream ${a} sending:`,G),T.send(G))},Zo:()=>T.close()}),F=(G,ae,ie)=>{G.listen(ae,(le=>{try{ie(le)}catch(ge){setTimeout((()=>{throw ge}),0)}}))};return F(T,Hu.EventType.OPEN,(()=>{x||(he(Tn,`RPC '${e}' stream ${a} transport opened.`),U.o_())})),F(T,Hu.EventType.CLOSE,(()=>{x||(x=!0,he(Tn,`RPC '${e}' stream ${a} transport closed`),U.a_(),this.E_(T))})),F(T,Hu.EventType.ERROR,(G=>{x||(x=!0,ll(Tn,`RPC '${e}' stream ${a} transport errored. Name:`,G.name,"Message:",G.message),U.a_(new ue($.UNAVAILABLE,"The operation could not be completed")))})),F(T,Hu.EventType.MESSAGE,(G=>{if(!x){const ae=G.data[0];et(!!ae,16349);const ie=ae,le=ie?.error||ie[0]?.error;if(le){he(Tn,`RPC '${e}' stream ${a} received error:`,le);const ge=le.status;let me=(function(C){const N=Lt[C];if(N!==void 0)return SA(N)})(ge),Me=le.message;me===void 0&&(me=$.INTERNAL,Me="Unknown error status: "+ge+" with message "+le.message),x=!0,U.a_(new ue(me,Me)),T.close()}else he(Tn,`RPC '${e}' stream ${a} received:`,ae),U.u_(ae)}})),F(d,qw.STAT_EVENT,(G=>{G.stat===kg.PROXY?he(Tn,`RPC '${e}' stream ${a} detected buffering proxy`):G.stat===kg.NOPROXY&&he(Tn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function dg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){return new rO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="PersistentStream";class UA{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new LA(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(qs(t.toString()),qs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ue($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(Vb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(he(Vb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nM extends UA{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=lO(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ce.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ce.min():c.readTime?Ki(c.readTime):Ce.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Gg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=zg(p)?{documents:hO(l,p)}:{query:fO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=CA(l,c.resumeToken);const g=Bg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ce.min())>0){d.readTime=Yf(l,c.snapshotVersion.toTimestamp());const g=Bg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=mO(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Gg(this.serializer),t.removeTarget=e,this.q_(t)}}class iM extends UA{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return et(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,et(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){et(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=cO(e.writeResults,e.commitTime),s=Ki(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Gg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>uO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{}class rM extends sM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ue($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Fg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Fg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class aM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qs(t),this.aa=!1):he("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="RemoteStore";class oM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Xa(this)&&(he(Fa,"Restarting streams for network reachability change."),await(async function(p){const g=Re(p);g.Ea.add(4),await Dc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await kd(g)})(this))}))})),this.Ra=new aM(s,a)}}async function kd(n){if(Xa(n))for(const e of n.da)await e(!0)}async function Dc(n){for(const e of n.da)await e(!1)}function jA(n,e){const t=Re(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),X_(t)?$_(t):Il(t).O_()&&K_(t,e))}function Y_(n,e){const t=Re(n),s=Il(t);t.Ia.delete(e),s.O_()&&zA(t,e),t.Ia.size===0&&(s.O_()?s.L_():Xa(t)&&t.Ra.set("Unknown"))}function K_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Il(n).Y_(e)}function zA(n,e){n.Va.Ue(e),Il(n).Z_(e)}function $_(n){n.Va=new tO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Il(n).start(),n.Ra.ua()}function X_(n){return Xa(n)&&!Il(n).x_()&&n.Ia.size>0}function Xa(n){return Re(n).Ea.size===0}function qA(n){n.Va=void 0}async function lM(n){n.Ra.set("Online")}async function uM(n){n.Ia.forEach(((e,t)=>{K_(n,e)}))}async function cM(n,e){qA(n),X_(n)?(n.Ra.ha(e),$_(n)):n.Ra.set("Unknown")}async function hM(n,e,t){if(n.Ra.set("Online"),e instanceof AA&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){he(Fa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $f(n,s)}else if(e instanceof Rf?n.Va.Ze(e):e instanceof wA?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ce.min()))try{const s=await VA(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const y=l.Ia.get(p);if(!y)return;l.Ia.set(p,y.withResumeToken(_n.EMPTY_BYTE_STRING,y.snapshotVersion)),zA(l,p);const T=new Rr(y.target,p,g,y.sequenceNumber);K_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){he(Fa,"Failed to raise snapshot:",s),await $f(n,s)}}async function $f(n,e,t){if(!Cl(e))throw e;n.Ea.add(1),await Dc(n),n.Ra.set("Offline"),t||(t=()=>VA(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{he(Fa,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await kd(n)}))}function BA(n,e){return e().catch((t=>$f(n,t,e)))}async function Pd(n){const e=Re(n),t=zr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:M_;for(;fM(e);)try{const a=await YO(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,dM(e,a)}catch(a){await $f(e,a)}FA(e)&&HA(e)}function fM(n){return Xa(n)&&n.Ta.length<10}function dM(n,e){n.Ta.push(e);const t=zr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function FA(n){return Xa(n)&&!zr(n).x_()&&n.Ta.length>0}function HA(n){zr(n).start()}async function mM(n){zr(n).ra()}async function pM(n){const e=zr(n);for(const t of n.Ta)e.ea(t.mutations)}async function gM(n,e,t){const s=n.Ta.shift(),a=z_.from(s,e,t);await BA(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Pd(n)}async function _M(n,e){e&&zr(n).X_&&await(async function(s,a){if((function(c){return ZD(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();zr(s).B_(),await BA(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Pd(s)}})(n,e),FA(n)&&HA(n)}async function Lb(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),he(Fa,"RemoteStore received new credentials");const s=Xa(t);t.Ea.add(3),await Dc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await kd(t)}async function yM(n,e){const t=Re(n);e?(t.Ea.delete(2),await kd(t)):e||(t.Ea.add(2),await Dc(t),t.Ra.set("Unknown"))}function Il(n){return n.ma||(n.ma=(function(t,s,a){const l=Re(t);return l.sa(),new nM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:lM.bind(null,n),t_:uM.bind(null,n),r_:cM.bind(null,n),H_:hM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),X_(n)?$_(n):n.Ra.set("Unknown")):(await n.ma.stop(),qA(n))}))),n.ma}function zr(n){return n.fa||(n.fa=(function(t,s,a){const l=Re(t);return l.sa(),new iM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:mM.bind(null,n),r_:_M.bind(null,n),ta:pM.bind(null,n),na:gM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Pd(n)):(await n.fa.stop(),n.Ta.length>0&&(he(Fa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new W_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Z_(n,e){if(qs("AsyncQueue",`${e}: ${n}`),Cl(n))return new ue($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{static emptySet(e){return new nl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Gu(),this.sortedSet=new Bt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Ub{constructor(){this.ga=new Bt(ye.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Te(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class pl{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new pl(e,t,nl.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class EM{constructor(){this.queries=jb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Re(t),l=a.queries;a.queries=jb(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new ue($.ABORTED,"Firestore shutting down"))}}function jb(){return new $a((n=>hA(n)),Rd)}async function J_(n,e){const t=Re(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new vM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=Z_(c,`Initialization of query '${Ko(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ty(t)}async function ey(n,e){const t=Re(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function TM(n,e){const t=Re(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&ty(t)}function bM(n,e,t){const s=Re(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function ty(n){n.Ca.forEach((e=>{e.next()}))}var Kg,zb;(zb=Kg||(Kg={})).Ma="default",zb.Cache="cache";class ny{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new pl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=pl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Kg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.key=e}}class QA{constructor(e){this.key=e}}class SM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ge(),this.mutatedKeys=Ge(),this.eu=fA(e),this.tu=new nl(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Ub,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const b=a.get(y),x=Id(this.query,T)?T:null,U=!!b&&this.mutatedKeys.has(b.key),F=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let G=!1;b&&x?b.data.isEqual(x.data)?U!==F&&(s.track({type:3,doc:x}),G=!0):this.su(b,x)||(s.track({type:2,doc:x}),G=!0,(p&&this.eu(x,p)>0||g&&this.eu(x,g)<0)&&(d=!0)):!b&&x?(s.track({type:0,doc:x}),G=!0):b&&!x&&(s.track({type:1,doc:b}),G=!0,(p||g)&&(d=!0)),G&&(x?(c=c.add(x),l=F?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(x,U){const F=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Rt:G})}};return F(x)-F(U)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new pl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ub,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ge(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new QA(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new GA(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ge();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return pl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const iy="SyncEngine";class wM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class AM{constructor(e){this.key=e,this.hu=!1}}class CM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new $a((d=>hA(d)),Rd),this.Iu=new Map,this.Eu=new Set,this.du=new Bt(ye.comparator),this.Au=new Map,this.Ru=new F_,this.Vu={},this.mu=new Map,this.fu=ml.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function RM(n,e,t=!0){const s=ZA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await YA(s,e,t,!0),a}async function IM(n,e){const t=ZA(n);await YA(t,e,!0,!1)}async function YA(n,e,t,s){const a=await KO(n.localStore,Yi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await NM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&jA(n.remoteStore,a),d}async function NM(n,e,t,s,a){n.pu=(T,b,x)=>(async function(F,G,ae,ie){let le=G.view.ru(ae);le.Cs&&(le=await Ob(F.localStore,G.query,!1).then((({documents:P})=>G.view.ru(P,le))));const ge=ie&&ie.targetChanges.get(G.targetId),me=ie&&ie.targetMismatches.get(G.targetId)!=null,Me=G.view.applyChanges(le,F.isPrimaryClient,ge,me);return Bb(F,G.targetId,Me.au),Me.snapshot})(n,T,b,x);const l=await Ob(n.localStore,e,!0),c=new SM(e,l.Qs),d=c.ru(l.documents),p=xc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);Bb(n,t,g.au);const y=new wM(e,t,c);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function xM(n,e,t){const s=Re(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Rd(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Qg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Y_(s.remoteStore,a.targetId),$g(s,a.targetId)})).catch(Al)):($g(s,a.targetId),await Qg(s.localStore,a.targetId,!0))}async function DM(n,e){const t=Re(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Y_(t.remoteStore,s.targetId))}async function OM(n,e,t){const s=jM(n);try{const a=await(function(c,d){const p=Re(c),g=_t.now(),y=d.reduce(((x,U)=>x.add(U.key)),Ge());let T,b;return p.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let U=Bs(),F=Ge();return p.Ns.getEntries(x,y).next((G=>{U=G,U.forEach(((ae,ie)=>{ie.isValidDocument()||(F=F.add(ae))}))})).next((()=>p.localDocuments.getOverlayedDocuments(x,U))).next((G=>{T=G;const ae=[];for(const ie of d){const le=YD(ie,T.get(ie.key).overlayedDocument);le!=null&&ae.push(new Qr(ie.key,le,iA(le.value.mapValue),Mn.exists(!0)))}return p.mutationQueue.addMutationBatch(x,g,ae,d)})).next((G=>{b=G;const ae=G.applyToLocalDocumentSet(T,F);return p.documentOverlayCache.saveOverlays(x,G.batchId,ae)}))})).then((()=>({batchId:b.batchId,changes:mA(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Bt(He)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Oc(s,a.changes),await Pd(s.remoteStore)}catch(a){const l=Z_(a,"Failed to persist write");t.reject(l)}}async function KA(n,e){const t=Re(n);try{const s=await GO(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(et(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?et(c.hu,14607):a.removedDocuments.size>0&&(et(c.hu,42227),c.hu=!1))})),await Oc(t,s,e)}catch(s){await Al(s)}}function qb(n,e,t){const s=Re(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=Re(c);p.onlineState=d;let g=!1;p.queries.forEach(((y,T)=>{for(const b of T.Sa)b.va(d)&&(g=!0)})),g&&ty(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function MM(n,e,t){const s=Re(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Bt(ye.comparator);c=c.insert(l,Sn.newNoDocument(l,Ce.min()));const d=Ge().add(l),p=new Od(Ce.min(),new Map,new Bt(He),c,d);await KA(s,p),s.du=s.du.remove(l),s.Au.delete(e),sy(s)}else await Qg(s.localStore,e,!1).then((()=>$g(s,e,t))).catch(Al)}async function kM(n,e){const t=Re(n),s=e.batch.batchId;try{const a=await HO(t.localStore,e);XA(t,s,null),$A(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Oc(t,a)}catch(a){await Al(a)}}async function PM(n,e,t){const s=Re(n);try{const a=await(function(c,d){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(et(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>p.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);XA(s,e,t),$A(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Oc(s,a)}catch(a){await Al(a)}}function $A(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function XA(n,e,t){const s=Re(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function $g(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||WA(n,s)}))}function WA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Y_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),sy(n))}function Bb(n,e,t){for(const s of t)s instanceof GA?(n.Ru.addReference(s.key,e),VM(n,s)):s instanceof QA?(he(iy,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||WA(n,s.key)):Te(19791,{wu:s})}function VM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(he(iy,"New document in limbo: "+t),n.Eu.add(s),sy(n))}function sy(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ye(dt.fromString(e)),s=n.fu.next();n.Au.set(s,new AM(t)),n.du=n.du.insert(t,s),jA(n.remoteStore,new Rr(Yi(Cd(t.path)),s,"TargetPurposeLimboResolution",Sd.ce))}}async function Oc(n,e,t){const s=Re(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){a.push(g);const y=G_.As(p.targetId,g);l.push(y)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const y=Re(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>J.forEach(g,(b=>J.forEach(b.Es,(x=>y.persistence.referenceDelegate.addReference(T,b.targetId,x))).next((()=>J.forEach(b.ds,(x=>y.persistence.referenceDelegate.removeReference(T,b.targetId,x)))))))))}catch(T){if(!Cl(T))throw T;he(Q_,"Failed to update sequence numbers: "+T)}for(const T of g){const b=T.targetId;if(!T.fromCache){const x=y.Ms.get(b),U=x.snapshotVersion,F=x.withLastLimboFreeSnapshotVersion(U);y.Ms=y.Ms.insert(b,F)}}})(s.localStore,l))}async function LM(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){he(iy,"User change. New user:",e.toKey());const s=await PA(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new ue($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Oc(t,s.Ls)}}function UM(n,e){const t=Re(n),s=t.Au.get(e);if(s&&s.hu)return Ge().add(s.key);{let a=Ge();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function ZA(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=KA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MM.bind(null,e),e.Pu.H_=TM.bind(null,e.eventManager),e.Pu.yu=bM.bind(null,e.eventManager),e}function jM(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PM.bind(null,e),e}class Xf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Md(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return FO(this.persistence,new zO,e.initialUser,this.serializer)}Cu(e){return new kA(H_.mi,this.serializer)}Du(e){return new XO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xf.provider={build:()=>new Xf};class zM extends Xf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){et(this.persistence.referenceDelegate instanceof Kf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new AO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Un.withCacheSize(this.cacheSizeBytes):Un.DEFAULT;return new kA((s=>Kf.mi(s,t)),this.serializer)}}class Xg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>qb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LM.bind(null,this.syncEngine),await yM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new EM})()}createDatastore(e){const t=Md(e.databaseInfo.databaseId),s=(function(l){return new tM(l)})(e.databaseInfo);return(function(l,c,d,p){return new rM(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new oM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>qb(this.syncEngine,t,0)),(function(){return Pb.v()?new Pb:new WO})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,y){const T=new CM(a,l,c,d,p,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Re(t);he(Fa,"RemoteStore shutting down."),s.Ea.add(5),await Dc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Xg.provider={build:()=>new Xg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ry{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirestoreClient";class qM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=bn.UNAUTHENTICATED,this.clientId=O_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{he(qr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(he(qr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Z_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function mg(n,e){n.asyncQueue.verifyOperationInProgress(),he(qr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await PA(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Fb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await BM(n);he(qr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Lb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>Lb(e.remoteStore,a))),n._onlineComponents=e}async function BM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(qr,"Using user provided OfflineComponentProvider");try{await mg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ll("Error using user provided cache. Falling back to memory cache: "+t),await mg(n,new Xf)}}else he(qr,"Using default OfflineComponentProvider"),await mg(n,new zM(void 0));return n._offlineComponents}async function JA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(qr,"Using user provided OnlineComponentProvider"),await Fb(n,n._uninitializedComponentsProvider._online)):(he(qr,"Using default OnlineComponentProvider"),await Fb(n,new Xg))),n._onlineComponents}function FM(n){return JA(n).then((e=>e.syncEngine))}async function Wf(n){const e=await JA(n),t=e.eventManager;return t.onListen=RM.bind(null,e.syncEngine),t.onUnlisten=xM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=IM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=DM.bind(null,e.syncEngine),t}function HM(n,e,t={}){const s=new Ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new ry({next:b=>{y.Nu(),c.enqueueAndForget((()=>ey(l,T)));const x=b.docs.has(d);!x&&b.fromCache?g.reject(new ue($.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&b.fromCache&&p&&p.source==="server"?g.reject(new ue($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new ny(Cd(d.path),y,{includeMetadataChanges:!0,qa:!0});return J_(l,T)})(await Wf(n),n.asyncQueue,e,t,s))),s.promise}function GM(n,e,t={}){const s=new Ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new ry({next:b=>{y.Nu(),c.enqueueAndForget((()=>ey(l,T))),b.fromCache&&p.source==="server"?g.reject(new ue($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new ny(d,y,{includeMetadataChanges:!0,qa:!0});return J_(l,T)})(await Wf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function e1(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="firestore.googleapis.com",Gb=!0;class Qb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=t1,this.ssl=Gb}else this.host=e.host,this.ssl=e.ssl??Gb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=MA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SO)throw new ue($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=e1(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new W2;switch(s.type){case"firstParty":return new tD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Hb.get(t);s&&(he("ComponentProvider","Removing Datastore"),Hb.delete(t),s.terminate())})(this),Promise.resolve()}}function QM(n,e,t,s={}){n=On(n,Vd);const a=Hr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(__(`https://${d}`),y_("Firestore",!0)),l.host!==t1&&l.host!==d&&ll("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Wi(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=bn.MOCK_USER;else{g=JS(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new ue($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new bn(T)}n._authCredentials=new Z2(new Gw(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class At{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ic(t,At._jsonSchema))return new At(e,s||null,new ye(dt.fromString(t.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:qt("string",At._jsonSchemaVersion),referencePath:qt("string")};class Mr extends Qs{constructor(e,t,s){super(e,t,Cd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new ye(e))}withConverter(e){return new Mr(this.firestore,e,this._path)}}function $t(n,e,...t){if(n=mt(n),Qw("collection","path",e),n instanceof Vd){const s=dt.fromString(e,...t);return rb(s),new Mr(n,null,s)}{if(!(n instanceof At||n instanceof Mr))throw new ue($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(dt.fromString(e,...t));return rb(s),new Mr(n.firestore,null,s)}}function Ut(n,e,...t){if(n=mt(n),arguments.length===1&&(e=O_.newId()),Qw("doc","path",e),n instanceof Vd){const s=dt.fromString(e,...t);return sb(s),new At(n,null,new ye(s))}{if(!(n instanceof At||n instanceof Mr))throw new ue($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(dt.fromString(e,...t));return sb(s),new At(n.firestore,n instanceof Mr?n.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="AsyncQueue";class Kb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new LA(this,"async_queue_retry"),this._c=()=>{const s=dg();s&&he(Yb,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=dg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=dg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ls;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Cl(e))throw e;he(Yb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,qs("INTERNAL UNHANDLED ERROR: ",$b(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=W_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Te(47125,{Pc:$b(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function $b(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Xb(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class es extends Vd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new Kb,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kb(e),this._firestoreClient=void 0,await e}}}function YM(n,e){const t=typeof n=="object"?n:T_(),s=typeof n=="string"?n:Bf,a=yd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=XS("firestore");l&&QM(a,...l)}return a}function Mc(n){if(n._terminated)throw new ue($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KM(n),n._firestoreClient}function KM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new yD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,e1(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new qM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(_n.fromBase64String(e))}catch(t){throw new ue($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fi(_n.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ic(e,fi._jsonSchema))return fi.fromBase64String(e.bytes)}}fi._jsonSchemaVersion="firestore/bytes/1.0",fi._jsonSchema={type:qt("string",fi._jsonSchemaVersion),bytes:qt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $i{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$i._jsonSchemaVersion}}static fromJSON(e){if(Ic(e,$i._jsonSchema))return new $i(e.latitude,e.longitude)}}$i._jsonSchemaVersion="firestore/geoPoint/1.0",$i._jsonSchema={type:qt("string",$i._jsonSchemaVersion),latitude:qt("number"),longitude:qt("number")};/**
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
 */class Xi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ic(e,Xi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xi(e.vectorValues);throw new ue($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xi._jsonSchemaVersion="firestore/vectorValue/1.0",Xi._jsonSchema={type:qt("string",Xi._jsonSchemaVersion),vectorValues:qt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M=/^__.*__$/;class XM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nc(e,this.data,t,this.fieldTransforms)}}class n1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function i1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ac:n})}}class Ld{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ld({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Zf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(i1(this.Ac)&&$M.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class WM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Md(e)}Cc(e,t,s,a=!1){return new Ld({Ac:e,methodName:t,Dc:s,path:gn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pc(n){const e=n._freezeSettings(),t=Md(n._databaseId);return new WM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ay(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);cy("Data must be an object, but it was:",c,s);const d=o1(s,c);let p,g;if(l.merge)p=new Zn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const b=Wg(e,T,t);if(!c.contains(b))throw new ue($.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);u1(y,b)||y.push(b)}p=new Zn(y),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new XM(new jn(d),p,g)}class Ud extends Nl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ud}}function s1(n,e,t){return new Ld({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class oy extends Nl{_toFieldTransform(e){return new j_(e.path,new pc)}isEqual(e){return e instanceof oy}}class ly extends Nl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=s1(this,e,!0),s=this.vc.map((l=>Wa(l,t))),a=new fl(s);return new j_(e.path,a)}isEqual(e){return e instanceof ly&&Wi(this.vc,e.vc)}}class uy extends Nl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=s1(this,e,!0),s=this.vc.map((l=>Wa(l,t))),a=new dl(s);return new j_(e.path,a)}isEqual(e){return e instanceof uy&&Wi(this.vc,e.vc)}}function r1(n,e,t,s){const a=n.Cc(1,e,t);cy("Data must be an object, but it was:",a,s);const l=[],c=jn.empty();Gr(s,((p,g)=>{const y=hy(e,p,t);g=mt(g);const T=a.yc(y);if(g instanceof Ud)l.push(y);else{const b=Wa(g,T);b!=null&&(l.push(y),c.set(y,b))}}));const d=new Zn(l);return new n1(c,d,a.fieldTransforms)}function a1(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Wg(e,s,t)],p=[a];if(l.length%2!=0)throw new ue($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(Wg(e,l[b])),p.push(l[b+1]);const g=[],y=jn.empty();for(let b=d.length-1;b>=0;--b)if(!u1(g,d[b])){const x=d[b];let U=p[b];U=mt(U);const F=c.yc(x);if(U instanceof Ud)g.push(x);else{const G=Wa(U,F);G!=null&&(g.push(x),y.set(x,G))}}const T=new Zn(g);return new n1(y,T,c.fieldTransforms)}function ZM(n,e,t,s=!1){return Wa(t,n.Cc(s?4:3,e))}function Wa(n,e){if(l1(n=mt(n)))return cy("Unsupported field value:",e,n),o1(n,e);if(n instanceof Nl)return(function(s,a){if(!i1(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Wa(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=mt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return qD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=_t.fromDate(s);return{timestampValue:Yf(a.serializer,l)}}if(s instanceof _t){const l=new _t(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yf(a.serializer,l)}}if(s instanceof $i)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fi)return{bytesValue:CA(a.serializer,s._byteString)};if(s instanceof At){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:B_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Xi)return(function(c,d){return{mapValue:{fields:{[tA]:{stringValue:nA},[Ff]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return U_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${bd(s)}`)})(n,e)}function o1(n,e){const t={};return $w(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(n,((s,a)=>{const l=Wa(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function l1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof $i||n instanceof fi||n instanceof At||n instanceof Nl||n instanceof Xi)}function cy(n,e,t){if(!l1(t)||!Yw(t)){const s=bd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Wg(n,e,t){if((e=mt(e))instanceof kc)return e._internalPath;if(typeof e=="string")return hy(n,e);throw Zf("Field path arguments must be of type string or ",n,!1,void 0,t)}const JM=new RegExp("[~\\*/\\[\\]]");function hy(n,e,t){if(e.search(JM)>=0)throw Zf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new kc(...e.split("."))._internalPath}catch{throw Zf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ue($.INVALID_ARGUMENT,d+n+p)}function u1(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ek(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ek extends c1{data(){return super.data()}}function jd(n,e){return typeof e=="string"?hy(n,e):e instanceof kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fy{}class dy extends fy{}function wn(n,e,...t){let s=[];e instanceof fy&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof my)).length,d=l.filter((p=>p instanceof zd)).length;if(c>1||c>0&&d>0)throw new ue($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class zd extends dy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new zd(e,t,s)}_apply(e){const t=this._parse(e);return m1(e._query,t),new Qs(e.firestore,e.converter,qg(e._query,t))}_parse(e){const t=Pc(e.firestore);return(function(l,c,d,p,g,y,T){let b;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ue($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Zb(T,y);const U=[];for(const F of T)U.push(Wb(p,l,F));b={arrayValue:{values:U}}}else b=Wb(p,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Zb(T,y),b=ZM(d,c,T,y==="in"||y==="not-in");return zt.create(g,y,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ct(n,e,t){const s=e,a=jd("where",n);return zd._create(a,s,t)}class my extends fy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new my(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ci.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)m1(c,p),c=qg(c,p)})(e._query,t),new Qs(e.firestore,e.converter,qg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class py extends dy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new py(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new ue($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ue($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mc(l,c)})(e._query,this._field,this._direction);return new Qs(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Rl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function f1(n,e="asc"){const t=e,s=jd("orderBy",n);return py._create(s,t)}class gy extends dy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new gy(e,t,s)}_apply(e){return new Qs(e.firestore,e.converter,Gf(e._query,this._limit,this._limitType))}}function d1(n){return gy._create("limit",n,"F")}function Wb(n,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new ue($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cA(e)&&t.indexOf("/")!==-1)throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(dt.fromString(t));if(!ye.isDocumentKey(s))throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return db(n,new ye(s))}if(t instanceof At)return db(n,t._key);throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bd(t)}.`)}function Zb(n,e){if(!Array.isArray(n)||n.length===0)throw new ue($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function m1(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ue($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tk{convertValue(e,t="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Gr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Ff].arrayValue?.values?.map((s=>xt(s.doubleValue)));return new Xi(t)}convertGeoPoint(e){return new $i(xt(e.latitude),xt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ad(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(hc(e));default:return null}}convertTimestamp(e){const t=Lr(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=dt.fromString(e);et(OA(s),9688,{name:e});const a=new fc(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return a.isEqual(t)||qs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Yu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pa extends c1{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new If(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(jd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pa._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pa._jsonSchema={type:qt("string",Pa._jsonSchemaVersion),bundleSource:qt("string","DocumentSnapshot"),bundleName:qt("string"),bundle:qt("string")};class If extends Pa{data(e={}){return super.data(e)}}class Va{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Yu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new If(this._firestore,this._userDataWriter,s.key,s,new Yu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new If(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Yu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new If(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Yu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:nk(d.type),doc:p,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Va._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=O_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(n){n=On(n,At);const e=On(n.firestore,es);return HM(Mc(e),n._key).then((t=>g1(e,n,t)))}Va._jsonSchemaVersion="firestore/querySnapshot/1.0",Va._jsonSchema={type:qt("string",Va._jsonSchemaVersion),bundleSource:qt("string","QuerySnapshot"),bundleName:qt("string"),bundle:qt("string")};class yy extends tk{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function Jf(n){n=On(n,Qs);const e=On(n.firestore,es),t=Mc(e),s=new yy(e);return h1(n._query),GM(t,n._query).then((a=>new Va(e,s,n,a)))}function ik(n,e,t){n=On(n,At);const s=On(n.firestore,es),a=_y(n.converter,e,t);return Vc(s,[ay(Pc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Mn.none())])}function mn(n,e,t,...s){n=On(n,At);const a=On(n.firestore,es),l=Pc(a);let c;return c=typeof(e=mt(e))=="string"||e instanceof kc?a1(l,"updateDoc",n._key,e,t,s):r1(l,"updateDoc",n._key,e),Vc(a,[c.toMutation(n._key,Mn.exists(!0))])}function sk(n){return Vc(On(n.firestore,es),[new Dd(n._key,Mn.none())])}function vy(n,e){const t=On(n.firestore,es),s=Ut(n),a=_y(n.converter,e);return Vc(t,[ay(Pc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,Mn.exists(!1))]).then((()=>s))}function kn(n,...e){n=mt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Xb(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Xb(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof At)c=On(n.firestore,es),d=Cd(n._key.path),l={next:p=>{e[s]&&e[s](g1(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=On(n,Qs);c=On(p.firestore,es),d=p._query;const g=new yy(c);l={next:y=>{e[s]&&e[s](new Va(c,g,p,y))},error:e[s+1],complete:e[s+2]},h1(n._query)}return(function(g,y,T,b){const x=new ry(b),U=new ny(y,x,T);return g.asyncQueue.enqueueAndForget((async()=>J_(await Wf(g),U))),()=>{x.Nu(),g.asyncQueue.enqueueAndForget((async()=>ey(await Wf(g),U)))}})(Mc(c),d,a,l)}function Vc(n,e){return(function(s,a){const l=new Ls;return s.asyncQueue.enqueueAndForget((async()=>OM(await FM(s),a,l))),l.promise})(Mc(n),e)}function g1(n,e,t){const s=t.docs.get(e._key),a=new yy(n);return new Pa(n,a,e._key,s,new Yu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Pc(e)}set(e,t,s){this._verifyNotCommitted();const a=pg(e,this._firestore),l=_y(a.converter,t,s),c=ay(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,Mn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=pg(e,this._firestore);let c;return c=typeof(t=mt(t))=="string"||t instanceof kc?a1(this._dataReader,"WriteBatch.update",l._key,t,s,a):r1(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,Mn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=pg(e,this._firestore);return this._mutations=this._mutations.concat(new Dd(t._key,Mn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ue($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pg(n,e){if((n=mt(n)).firestore!==e)throw new ue($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function gl(){return new oy("serverTimestamp")}function ec(...n){return new ly("arrayUnion",n)}function _1(...n){return new uy("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n){return Mc(n=On(n,es)),new rk(n,(e=>Vc(n,e)))}(function(e,t=!0){(function(a){wl=a})(Ka),ja(new Pr("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new es(new J2(s.getProvider("auth-internal")),new nD(c,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ue($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fc(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Gi(eb,tb,e),Gi(eb,tb,"esm2020")})();var Jb={};const eS="@firebase/database",tS="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y1="";function ak(n){y1=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),an(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:oc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ts(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ok(e)}}catch{}return new lk},Ma=v1("localStorage"),uk=v1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new _d("@firebase/database"),ck=(function(){let n=1;return function(){return n++}})(),E1=function(n){const e=UI(n),t=new kI;t.update(e);const s=t.digest();return g_.encodeByteArray(s)},Lc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Lc.apply(null,s):typeof s=="object"?e+=an(s):e+=s,e+=" "}return e};let tc=null,nS=!0;const hk=function(n,e){re(!0,"Can't turn on custom loggers persistently."),il.logLevel=Fe.VERBOSE,tc=il.log.bind(il)},pn=function(...n){if(nS===!0&&(nS=!1,tc===null&&uk.get("logging_enabled")===!0&&hk()),tc){const e=Lc.apply(null,n);tc(e)}},Uc=function(n){return function(...e){pn(n,...e)}},Zg=function(...n){const e="FIREBASE INTERNAL ERROR: "+Lc(...n);il.error(e)},Fs=function(...n){const e=`FIREBASE FATAL ERROR: ${Lc(...n)}`;throw il.error(e),new Error(e)},Bn=function(...n){const e="FIREBASE WARNING: "+Lc(...n);il.warn(e)},fk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},dk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},_l="[MIN_NAME]",Ha="[MAX_NAME]",Za=function(n,e){if(n===e)return 0;if(n===_l||e===Ha)return-1;if(e===_l||n===Ha)return 1;{const t=iS(n),s=iS(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},mk=function(n,e){return n===e?0:n<e?-1:1},zu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+an(e))},Ey=function(n){if(typeof n!="object"||n===null)return an(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=an(e[s]),t+=":",t+=Ey(n[e[s]]);return t+="}",t},T1=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Cn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const b1=function(n){re(!qd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let b=parseInt(y.substr(p,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},pk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _k(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const yk=new RegExp("^-?(0*)\\d{1,10}$"),vk=-2147483648,Ek=2147483647,iS=function(n){if(yk.test(n)){const e=Number(n);if(e>=vk&&e<=Ek)return e}return null},xl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Bn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Tk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},nc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class bk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Bn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bn(e)}}class Nf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="5",S1="v",w1="s",A1="r",C1="f",R1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,I1="ls",N1="p",Jg="ac",x1="websocket",D1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function wk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function M1(n,e,t){re(typeof e=="string","typeof type must == string"),re(typeof t=="object","typeof params must == object");let s;if(e===x1)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===D1)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wk(n)&&(t.ns=n.namespace);const a=[];return Cn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.counters_={}}incrementCounter(e,t=1){ts(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return dI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g={},yg={};function by(n){const e=n.toString();return _g[e]||(_g[e]=new Ak),_g[e]}function Ck(n,e){const t=n.toString();return yg[t]||(yg[t]=e()),yg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const sS="start",Ik="close",Nk="pLPCommand",xk="pRTLPCB",k1="id",P1="pw",V1="ser",Dk="cb",Ok="seg",Mk="ts",kk="d",Pk="dframe",L1=1870,U1=30,Vk=L1-U1,Lk=25e3,Uk=3e4;class Wo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Uc(e),this.stats_=by(t),this.urlFn=p=>(this.appCheckToken&&(p[Jg]=this.appCheckToken),M1(t,D1,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Rk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Uk)),dk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sy((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===sS)this.id=d,this.password=p;else if(c===Ik)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[sS]="t",s[V1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Dk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[S1]=Ty,this.transportSessionId&&(s[w1]=this.transportSessionId),this.lastSessionId&&(s[I1]=this.lastSessionId),this.applicationId&&(s[N1]=this.applicationId),this.appCheckToken&&(s[Jg]=this.appCheckToken),typeof location<"u"&&location.hostname&&R1.test(location.hostname)&&(s[A1]=C1);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wo.forceAllow_=!0}static forceDisallow(){Wo.forceDisallow_=!0}static isAvailable(){return Wo.forceAllow_?!0:!Wo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pk()&&!gk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=an(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=YS(t),a=T1(s,Vk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Pk]="t",s[k1]=e,s[P1]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=an(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Sy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ck(),window[Nk+this.uniqueCallbackIdentifier]=e,window[xk+this.uniqueCallbackIdentifier]=t,this.myIFrame=Sy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){pn("frame writing exception"),d.stack&&pn(d.stack),pn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[k1]=this.myID,e[P1]=this.myPW,e[V1]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+U1+s.length<=L1;){const c=this.pendingSegs.shift();s=s+"&"+Ok+a+"="+c.seg+"&"+Mk+a+"="+c.ts+"&"+kk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(Lk)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{pn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=16384,zk=45e3;let ed=null;typeof MozWebSocket<"u"?ed=MozWebSocket:typeof WebSocket<"u"&&(ed=WebSocket);class Ti{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Uc(this.connId),this.stats_=by(t),this.connURL=Ti.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[S1]=Ty,typeof location<"u"&&location.hostname&&R1.test(location.hostname)&&(c[A1]=C1),t&&(c[w1]=t),s&&(c[I1]=s),a&&(c[Jg]=a),l&&(c[N1]=l),M1(e,x1,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ma.set("previous_websocket_failure",!0);try{let s;AI(),this.mySock=new ed(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ed!==null&&!Ti.forceDisallow_}static previouslyFailed(){return Ma.isInMemoryStorage||Ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=oc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=an(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=T1(t,jk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ti.responsesRequiredToBeHealthy=2;Ti.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{static get ALL_TRANSPORTS(){return[Wo,Ti]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ti&&Ti.isAvailable();let s=t&&!Ti.previouslyFailed();if(e.webSocketOnly&&(t||Bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ti];else{const a=this.transports_=[];for(const l of gc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);gc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=6e4,Bk=5e3,Fk=10*1024,Hk=100*1024,vg="t",rS="d",Gk="s",aS="r",Qk="e",oS="o",lS="a",uS="n",cS="p",Yk="h";class Kk{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Uc("c:"+this.id+":"),this.transportManager_=new gc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=nc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vg in e){const t=e[vg];t===lS?this.upgradeIfSecondaryHealthy_():t===aS?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===oS&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zu("t",e),s=zu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cS,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lS,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:uS,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zu("t",e),s=zu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zu(vg,e);if(rS in e){const s=e[rS];if(t===Yk){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===uS){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Gk?this.onConnectionShutdown_(s):t===aS?this.onReset_(s):t===Qk?Zg("Server Error: "+s):t===oS?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ty!==s&&Bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),nc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):nc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cS,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){re(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends z1{static getInstance(){return new td}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!v_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=32,fS=768;class it{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ze(){return new it("")}function Ve(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Br(n){return n.pieces_.length-n.pieceNum_}function ht(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new it(n.pieces_,e)}function wy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function $k(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _c(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function q1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new it(e,0)}function Dt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof it)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new it(t,0)}function Ue(n){return n.pieceNum_>=n.pieces_.length}function zn(n,e){const t=Ve(n),s=Ve(e);if(t===null)return e;if(t===s)return zn(ht(n),ht(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Xk(n,e){const t=_c(n,0),s=_c(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Za(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Ay(n,e){if(Br(n)!==Br(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function di(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Br(n)>Br(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Wk{constructor(e,t){this.errorPrefix_=t,this.parts_=_c(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=gd(this.parts_[s]);B1(this)}}function Zk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=gd(e),B1(n)}function Jk(n){const e=n.parts_.pop();n.byteLength_-=gd(e),n.parts_.length>0&&(n.byteLength_-=1)}function B1(n){if(n.byteLength_>fS)throw new Error(n.errorPrefix_+"has a key path longer than "+fS+" bytes ("+n.byteLength_+").");if(n.parts_.length>hS)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hS+") or object contains a cycle "+xa(n))}function xa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends z1{static getInstance(){return new Cy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=1e3,e4=300*1e3,dS=30*1e3,t4=1.3,n4=3e4,i4="server_kill",mS=3;class Us extends j1{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Us.nextPersistentConnectionId_++,this.log_=Uc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qu,this.maxReconnectDelay_=e4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&td.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(an(l)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Os,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Us.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ts(e,"w")){const s=al(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=OI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+an(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Zg("Unrecognized action received from server: "+an(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>n4&&(this.reconnectDelay_=qu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*t4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Us.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){re(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?pn("getToken() completed but was canceled"):(pn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,d=new Kk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,x=>{Bn(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(i4)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Bn(T),p())}}}interrupt(e){pn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Of(this.interruptReasons_)&&(this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Ey(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new it(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){pn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mS&&(this.reconnectDelay_=dS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mS&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+y1.replace(/\./g,"-")]=1,v_()?e["framework.cordova"]=1:ew()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=td.getInstance().currentlyOnline();return Of(this.interruptReasons_)&&e}}Us.nextPersistentConnectionId_=0;Us.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new je(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new je(_l,e),a=new je(_l,t);return this.compare(s,a)!==0}minPost(){return je.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f;class F1 extends Bd{static get __EMPTY_NODE(){return _f}static set __EMPTY_NODE(e){_f=e}compare(e,t){return Za(e.name,t.name)}isDefinedOn(e){throw Tl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(Ha,_f)}makePost(e,t){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,_f)}toString(){return".key"}}const sl=new F1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??rn.RED,this.left=a??qn.EMPTY_NODE,this.right=l??qn.EMPTY_NODE}copy(e,t,s,a,l){return new rn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return qn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return qn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rn.RED=!0;rn.BLACK=!1;class s4{copy(e,t,s,a,l){return this}insert(e,t,s){return new rn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qn{constructor(e,t=qn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new qn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,rn.BLACK,null,null))}remove(e){return new qn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new yf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new yf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new yf(this.root_,null,this.comparator_,!0,e)}}qn.EMPTY_NODE=new s4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(n,e){return Za(n.name,e.name)}function Ry(n,e){return Za(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_;function a4(n){e_=n}const H1=function(n){return typeof n=="number"?"number:"+b1(n):"string:"+n},G1=function(n){if(n.isLeafNode()){const e=n.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ts(e,".sv"),"Priority must be a string or number.")}else re(n===e_||n.isEmpty(),"priority of unexpected type.");re(n===e_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pS;class nn{static set __childrenNodeConstructor(e){pS=e}static get __childrenNodeConstructor(){return pS}constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),G1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:Ve(e)===".priority"?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ve(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(re(s!==".priority"||Br(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+H1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=b1(this.value_):e+=this.value_,this.lazyHash_=E1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=nn.VALUE_TYPE_ORDER.indexOf(t),l=nn.VALUE_TYPE_ORDER.indexOf(s);return re(a>=0,"Unknown leaf type: "+t),re(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q1,Y1;function o4(n){Q1=n}function l4(n){Y1=n}class u4 extends Bd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Za(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(Ha,new nn("[PRIORITY-POST]",Y1))}makePost(e,t){const s=Q1(e);return new je(t,new nn("[PRIORITY-POST]",s))}toString(){return".priority"}}const Tt=new u4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=Math.log(2);class h4{constructor(e){const t=l=>parseInt(Math.log(l)/c4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nd=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,b;if(y===0)return null;if(y===1)return T=n[p],b=t?t(T):T,new rn(b,T.node,rn.BLACK,null,null);{const x=parseInt(y/2,10)+p,U=a(p,x),F=a(x+1,g);return T=n[x],b=t?t(T):T,new rn(b,T.node,rn.BLACK,U,F)}},l=function(p){let g=null,y=null,T=n.length;const b=function(U,F){const G=T-U,ae=T;T-=U;const ie=a(G+1,ae),le=n[G],ge=t?t(le):le;x(new rn(ge,le.node,F,null,ie))},x=function(U){g?(g.left=U,g=U):(y=U,g=U)};for(let U=0;U<p.count;++U){const F=p.nextBitIsOne(),G=Math.pow(2,p.count-(U+1));F?b(G,rn.BLACK):(b(G,rn.BLACK),b(G,rn.RED))}return y},c=new h4(n.length),d=l(c);return new qn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eg;const Qo={};class Vs{static get Default(){return re(Qo&&Tt,"ChildrenNode.ts has not been loaded"),Eg=Eg||new Vs({".priority":Qo},{".priority":Tt}),Eg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=al(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof qn?t:null}hasIndex(e){return ts(this.indexSet_,e.toString())}addIndex(e,t){re(e!==sl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(je.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=nd(s,e.getCompare()):d=Qo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=d,new Vs(y,g)}addToIndexes(e,t){const s=Mf(this.indexes_,(a,l)=>{const c=al(this.indexSet_,l);if(re(c,"Missing index implementation for "+l),a===Qo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(je.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),nd(d,c.getCompare())}else return Qo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new je(e.name,d))),p.insert(e,e.node)}});return new Vs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Mf(this.indexes_,a=>{if(a===Qo)return a;{const l=t.get(e.name);return l?a.remove(new je(e.name,l)):a}});return new Vs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;class we{static get EMPTY_NODE(){return Bu||(Bu=new we(new qn(Ry),null,Vs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&G1(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bu}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Bu:t}}getChild(e){const t=Ve(e);return t===null?this:this.getImmediateChild(t).getChild(ht(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(re(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new je(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Bu:this.priorityNode_;return new we(a,c,l)}}updateChild(e,t){const s=Ve(e);if(s===null)return t;{re(Ve(e)!==".priority"||Br(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ht(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(Tt,(c,d)=>{t[c]=d.val(e),s++,l&&we.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+H1(this.getPriority().val())+":"),this.forEachChild(Tt,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":E1(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new je(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jc?-1:0}withIndex(e){if(e===sl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Tt),a=t.getIterator(Tt);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===sl?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class f4 extends we{constructor(){super(new qn(Ry),we.EMPTY_NODE,Vs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const jc=new f4;Object.defineProperties(je,{MIN:{value:new je(_l,we.EMPTY_NODE)},MAX:{value:new je(Ha,jc)}});F1.__EMPTY_NODE=we.EMPTY_NODE;nn.__childrenNodeConstructor=we;a4(jc);l4(jc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4=!0;function jt(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new nn(t,jt(e))}if(!(n instanceof Array)&&d4){const t=[];let s=!1;if(Cn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=jt(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new je(c,p)))}}),t.length===0)return we.EMPTY_NODE;const l=nd(t,r4,c=>c.name,Ry);if(s){const c=nd(t,Tt.getCompare());return new we(l,jt(e),new Vs({".priority":c},{".priority":Tt}))}else return new we(l,jt(e),Vs.Default)}else{let t=we.EMPTY_NODE;return Cn(n,(s,a)=>{if(ts(n,s)&&s.substring(0,1)!=="."){const l=jt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(jt(e))}}o4(jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4 extends Bd{constructor(e){super(),this.indexPath_=e,re(!Ue(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Za(e.name,t.name):l}makePost(e,t){const s=jt(e),a=we.EMPTY_NODE.updateChild(this.indexPath_,s);return new je(t,a)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,jc);return new je(Ha,e)}toString(){return _c(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4 extends Bd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Za(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const s=jt(e);return new je(t,s)}toString(){return".value"}}const g4=new p4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){return{type:"value",snapshotNode:n}}function yl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function yc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function vc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function _4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){re(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(yc(t,d)):re(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(yl(t,s)):c.trackChildChange(vc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Tt,(a,l)=>{t.hasChild(a)||s.trackChildChange(yc(a,l))}),t.isLeafNode()||t.forEachChild(Tt,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(vc(a,l,c))}else s.trackChildChange(yl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?we.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.indexedFilter_=new Iy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ec.getStartPost_(e),this.endPost_=Ec.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new je(t,s))||(s=we.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=we.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(we.EMPTY_NODE);const l=this;return t.forEachChild(Tt,(c,d)=>{l.matches(new je(c,d))||(a=a.updateImmediateChild(c,we.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ec(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new je(t,s))||(s=we.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=we.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=we.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(we.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,we.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(b,x)=>T(x,b)}else c=this.index_.getCompare();const d=e;re(d.numChildren()===this.limit_,"");const p=new je(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let b=a.getChildAfterChild(this.index_,g,this.reverse_);for(;b!=null&&(b.name===t||d.hasChild(b.name));)b=a.getChildAfterChild(this.index_,b,this.reverse_);const x=b==null?1:c(b,p);if(y&&!s.isEmpty()&&x>=0)return l?.trackChildChange(vc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(yc(t,T));const F=d.updateImmediateChild(t,we.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(l?.trackChildChange(yl(b.name,b.node)),F.updateImmediateChild(b.name,b.node)):F}}else return s.isEmpty()?e:y&&c(g,p)>=0?(l!=null&&(l.trackChildChange(yc(g.name,g.node)),l.trackChildChange(yl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,we.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_l}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ha}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tt}copy(){const e=new Ny;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function v4(n){return n.loadsAllData()?new Iy(n.getIndex()):n.hasLimit()?new y4(n):new Ec(n)}function gS(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Tt?t="$priority":n.index_===g4?t="$value":n.index_===sl?t="$key":(re(n.index_ instanceof m4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=an(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=an(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+an(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=an(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+an(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function _S(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Tt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends j1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Uc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=id.getListenId_(e,s),d={};this.listens_[c]=d;const p=gS(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),al(this.listens_,c)===d){let b;g?g===401?b="permission_denied":b="rest_error:"+g:b="ok",a(b,null)}})}unlisten(e,t){const s=id.getListenId_(e,t);delete this.listens_[s]}get(e){const t=gS(e._queryParams),s=e._path.toString(),a=new Os;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=oc(d.responseText)}catch{Bn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Bn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){return{value:null,children:new Map}}function Dl(n,e,t){if(Ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ve(e);n.children.has(s)||n.children.set(s,sd());const a=n.children.get(s);e=ht(e),Dl(a,e,t)}}function t_(n,e){if(Ue(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(Tt,(s,a)=>{Dl(n,new it(s),a)}),t_(n,e)}}else if(n.children.size>0){const t=Ve(e);return e=ht(e),n.children.has(t)&&t_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function n_(n,e,t){n.value!==null?t(e,n.value):T4(n,(s,a)=>{const l=new it(e.toString()+"/"+s);n_(a,l,t)})}function T4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yS=10*1e3,S4=30*1e3,w4=300*1e3;class A4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new b4(e);const s=yS+(S4-yS)*Math.random();nc(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Cn(e,(a,l)=>{l>0&&ts(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),nc(this.reportStats_.bind(this),Math.floor(Math.random()*2*w4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Si||(Si={}));function $1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Dy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Si.ACK_USER_WRITE,this.source=$1()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new it(e));return new rd(Ze(),t,this.revert)}}else return re(Ve(this.path)===e,"operationForChild called for unrelated child."),new rd(ht(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.source=e,this.path=t,this.type=Si.LISTEN_COMPLETE}operationForChild(e){return Ue(this.path)?new Tc(this.source,Ze()):new Tc(this.source,ht(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Si.OVERWRITE}operationForChild(e){return Ue(this.path)?new Ga(this.source,Ze(),this.snap.getImmediateChild(e)):new Ga(this.source,ht(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Si.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new it(e));return t.isEmpty()?null:t.value?new Ga(this.source,Ze(),t.value):new bc(this.source,Ze(),t)}else return re(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bc(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function R4(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(_4(c.childName,c.snapshotNode))}),Fu(n,a,"child_removed",e,s,t),Fu(n,a,"child_added",e,s,t),Fu(n,a,"child_moved",l,s,t),Fu(n,a,"child_changed",e,s,t),Fu(n,a,"value",e,s,t),a}function Fu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>N4(n,d,p)),c.forEach(d=>{const p=I4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function I4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function N4(n,e,t){if(e.childName==null||t.childName==null)throw Tl("Should only compare child_ events.");const s=new je(e.childName,e.snapshotNode),a=new je(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n,e){return{eventCache:n,serverCache:e}}function ic(n,e,t,s){return Fd(new Qa(e,t,s),n.serverCache)}function X1(n,e,t,s){return Fd(n.eventCache,new Qa(e,t,s))}function i_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ya(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tg;const x4=()=>(Tg||(Tg=new qn(mk)),Tg);class gt{static fromObject(e){let t=new gt(null);return Cn(e,(s,a)=>{t=t.set(new it(s),a)}),t}constructor(e,t=x4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ze(),value:this.value};if(Ue(e))return null;{const s=Ve(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ht(e),t);return l!=null?{path:Dt(new it(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=Ve(e),s=this.children.get(t);return s!==null?s.subtree(ht(e)):new gt(null)}}set(e,t){if(Ue(e))return new gt(t,this.children);{const s=Ve(e),l=(this.children.get(s)||new gt(null)).set(ht(e),t),c=this.children.insert(s,l);return new gt(this.value,c)}}remove(e){if(Ue(e))return this.children.isEmpty()?new gt(null):new gt(null,this.children);{const t=Ve(e),s=this.children.get(t);if(s){const a=s.remove(ht(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new gt(null):new gt(this.value,l)}else return this}}get(e){if(Ue(e))return this.value;{const t=Ve(e),s=this.children.get(t);return s?s.get(ht(e)):null}}setTree(e,t){if(Ue(e))return t;{const s=Ve(e),l=(this.children.get(s)||new gt(null)).setTree(ht(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new gt(this.value,c)}}fold(e){return this.fold_(Ze(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Dt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ze(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ue(e))return null;{const l=Ve(e),c=this.children.get(l);return c?c.findOnPath_(ht(e),Dt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ze(),t)}foreachOnPath_(e,t,s){if(Ue(e))return this;{this.value&&s(t,this.value);const a=Ve(e),l=this.children.get(a);return l?l.foreachOnPath_(ht(e),Dt(t,a),s):new gt(null)}}foreach(e){this.foreach_(Ze(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Dt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.writeTree_=e}static empty(){return new Ai(new gt(null))}}function sc(n,e,t){if(Ue(e))return new Ai(new gt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=zn(a,e);return l=l.updateChild(c,t),new Ai(n.writeTree_.set(a,l))}else{const a=new gt(t),l=n.writeTree_.setTree(e,a);return new Ai(l)}}}function vS(n,e,t){let s=n;return Cn(t,(a,l)=>{s=sc(s,Dt(e,a),l)}),s}function ES(n,e){if(Ue(e))return Ai.empty();{const t=n.writeTree_.setTree(e,new gt(null));return new Ai(t)}}function s_(n,e){return Ja(n,e)!=null}function Ja(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zn(t.path,e)):null}function TS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Tt,(s,a)=>{e.push(new je(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new je(s,a.value))}),e}function kr(n,e){if(Ue(e))return n;{const t=Ja(n,e);return t!=null?new Ai(new gt(t)):new Ai(n.writeTree_.subtree(e))}}function r_(n){return n.writeTree_.isEmpty()}function vl(n,e){return W1(Ze(),n.writeTree_,e)}function W1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(re(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=W1(Dt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Dt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n,e){return tC(e,n)}function D4(n,e,t,s,a){re(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=sc(n.visibleWrites,e,t)),n.lastWriteId=s}function O4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function M4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);re(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&k4(d,s.path)?a=!1:di(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return P4(n),!0;if(s.snap)n.visibleWrites=ES(n.visibleWrites,s.path);else{const d=s.children;Cn(d,p=>{n.visibleWrites=ES(n.visibleWrites,Dt(s.path,p))})}return!0}else return!1}function k4(n,e){if(n.snap)return di(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&di(Dt(n.path,t),e))return!0;return!1}function P4(n){n.visibleWrites=Z1(n.allWrites,V4,Ze()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function V4(n){return n.visible}function Z1(n,e,t){let s=Ai.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)di(t,c)?(d=zn(t,c),s=sc(s,d,l.snap)):di(c,t)&&(d=zn(c,t),s=sc(s,Ze(),l.snap.getChild(d)));else if(l.children){if(di(t,c))d=zn(t,c),s=vS(s,d,l.children);else if(di(c,t))if(d=zn(c,t),Ue(d))s=vS(s,Ze(),l.children);else{const p=al(l.children,Ve(d));if(p){const g=p.getChild(ht(d));s=sc(s,Ze(),g)}}}else throw Tl("WriteRecord should have .snap or .children")}}return s}function J1(n,e,t,s,a){if(!s&&!a){const l=Ja(n.visibleWrites,e);if(l!=null)return l;{const c=kr(n.visibleWrites,e);if(r_(c))return t;if(t==null&&!s_(c,Ze()))return null;{const d=t||we.EMPTY_NODE;return vl(c,d)}}}else{const l=kr(n.visibleWrites,e);if(!a&&r_(l))return t;if(!a&&t==null&&!s_(l,Ze()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(di(g.path,e)||di(e,g.path))},d=Z1(n.allWrites,c,e),p=t||we.EMPTY_NODE;return vl(d,p)}}}function L4(n,e,t){let s=we.EMPTY_NODE;const a=Ja(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Tt,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=kr(n.visibleWrites,e);return t.forEachChild(Tt,(c,d)=>{const p=vl(kr(l,new it(c)),d);s=s.updateImmediateChild(c,p)}),TS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=kr(n.visibleWrites,e);return TS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function U4(n,e,t,s,a){re(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Dt(e,t);if(s_(n.visibleWrites,l))return null;{const c=kr(n.visibleWrites,l);return r_(c)?a.getChild(t):vl(c,a.getChild(t))}}function j4(n,e,t,s){const a=Dt(e,t),l=Ja(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=kr(n.visibleWrites,a);return vl(c,s.getNode().getImmediateChild(t))}else return null}function z4(n,e){return Ja(n.visibleWrites,e)}function q4(n,e,t,s,a,l,c){let d;const p=kr(n.visibleWrites,e),g=Ja(p,Ze());if(g!=null)d=g;else if(t!=null)d=vl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),b=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let x=b.getNext();for(;x&&y.length<a;)T(x,s)!==0&&y.push(x),x=b.getNext();return y}else return[]}function B4(){return{visibleWrites:Ai.empty(),allWrites:[],lastWriteId:-1}}function ad(n,e,t,s){return J1(n.writeTree,n.treePath,e,t,s)}function My(n,e){return L4(n.writeTree,n.treePath,e)}function bS(n,e,t,s){return U4(n.writeTree,n.treePath,e,t,s)}function od(n,e){return z4(n.writeTree,Dt(n.treePath,e))}function F4(n,e,t,s,a,l){return q4(n.writeTree,n.treePath,e,t,s,a,l)}function ky(n,e,t){return j4(n.writeTree,n.treePath,e,t)}function eC(n,e){return tC(Dt(n.treePath,e),n.writeTree)}function tC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;re(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),re(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,vc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,yc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,yl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,vc(s,e.snapshotNode,a.oldSnap));else throw Tl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const nC=new G4;class Py{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ky(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ya(this.viewCache_),l=F4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q4(n){return{filter:n}}function Y4(n,e){re(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function K4(n,e,t,s,a){const l=new H4;let c,d;if(t.type===Si.OVERWRITE){const g=t;g.source.fromUser?c=a_(n,e,g.path,g.snap,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Ue(g.path),c=ld(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Si.MERGE){const g=t;g.source.fromUser?c=X4(n,e,g.path,g.children,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=o_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Si.ACK_USER_WRITE){const g=t;g.revert?c=J4(n,e,g.path,s,a,l):c=W4(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Si.LISTEN_COMPLETE)c=Z4(n,e,t.path,s,l);else throw Tl("Unknown operation type: "+t.type);const p=l.getChanges();return $4(e,c,p),{viewCache:c,changes:p}}function $4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=i_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(K1(i_(e)))}}function iC(n,e,t,s,a,l){const c=e.eventCache;if(od(s,t)!=null)return e;{let d,p;if(Ue(t))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ya(e),y=g instanceof we?g:we.EMPTY_NODE,T=My(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ad(s,Ya(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Ve(t);if(g===".priority"){re(Br(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=bS(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=ht(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const b=bS(s,t,c.getNode(),p);b!=null?T=c.getNode().getImmediateChild(g).updateChild(y,b):T=c.getNode().getImmediateChild(g)}else T=ky(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return ic(e,d,c.isFullyInitialized()||Ue(t),n.filter.filtersNodes())}}function ld(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Ue(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const x=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),x,null)}else{const x=Ve(t);if(!p.isCompleteForPath(t)&&Br(t)>1)return e;const U=ht(t),G=p.getNode().getImmediateChild(x).updateChild(U,s);x===".priority"?g=y.updatePriority(p.getNode(),G):g=y.updateChild(p.getNode(),x,G,U,nC,null)}const T=X1(e,g,p.isFullyInitialized()||Ue(t),y.filtersNodes()),b=new Py(a,T,l);return iC(n,T,t,a,b,d)}function a_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new Py(a,e,l);if(Ue(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=ic(e,g,!0,n.filter.filtersNodes());else{const T=Ve(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=ic(e,g,d.isFullyInitialized(),d.isFiltered());else{const b=ht(t),x=d.getNode().getImmediateChild(T);let U;if(Ue(b))U=s;else{const F=y.getCompleteChild(T);F!=null?wy(b)===".priority"&&F.getChild(q1(b)).isEmpty()?U=F:U=F.updateChild(b,s):U=we.EMPTY_NODE}if(x.equals(U))p=e;else{const F=n.filter.updateChild(d.getNode(),T,U,b,y,c);p=ic(e,F,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function SS(n,e){return n.eventCache.isCompleteForChild(e)}function X4(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Dt(t,p);SS(e,Ve(y))&&(d=a_(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Dt(t,p);SS(e,Ve(y))||(d=a_(n,d,y,g,a,l,c))}),d}function wS(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function o_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ue(t)?g=s:g=new gt(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,b)=>{if(y.hasChild(T)){const x=e.serverCache.getNode().getImmediateChild(T),U=wS(n,x,b);p=ld(n,p,new it(T),U,a,l,c,d)}}),g.children.inorderTraversal((T,b)=>{const x=!e.serverCache.isCompleteForChild(T)&&b.value===null;if(!y.hasChild(T)&&!x){const U=e.serverCache.getNode().getImmediateChild(T),F=wS(n,U,b);p=ld(n,p,new it(T),F,a,l,c,d)}}),p}function W4(n,e,t,s,a,l,c){if(od(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ue(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return ld(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Ue(t)){let g=new gt(null);return p.getNode().forEachChild(sl,(y,T)=>{g=g.set(new it(y),T)}),o_(n,e,t,g,a,l,d,c)}else return e}else{let g=new gt(null);return s.foreach((y,T)=>{const b=Dt(t,y);p.isCompleteForPath(b)&&(g=g.set(y,p.getNode().getChild(b)))}),o_(n,e,t,g,a,l,d,c)}}function Z4(n,e,t,s,a){const l=e.serverCache,c=X1(e,l.getNode(),l.isFullyInitialized()||Ue(t),l.isFiltered());return iC(n,c,t,s,nC,a)}function J4(n,e,t,s,a,l){let c;if(od(s,t)!=null)return e;{const d=new Py(s,e,a),p=e.eventCache.getNode();let g;if(Ue(t)||Ve(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ad(s,Ya(e));else{const T=e.serverCache.getNode();re(T instanceof we,"serverChildren would be complete if leaf node"),y=My(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=Ve(t);let T=ky(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,ht(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,we.EMPTY_NODE,ht(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ad(s,Ya(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||od(s,Ze())!=null,ic(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Iy(s.getIndex()),l=v4(s);this.processor_=Q4(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(we.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(we.EMPTY_NODE,d.getNode(),null),y=new Qa(p,c.isFullyInitialized(),a.filtersNodes()),T=new Qa(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Fd(T,y),this.eventGenerator_=new C4(this.query_)}get query(){return this.query_}}function tP(n){return n.viewCache_.serverCache.getNode()}function nP(n,e){const t=Ya(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(Ve(e)).isEmpty())?t.getChild(e):null}function AS(n){return n.eventRegistrations_.length===0}function iP(n,e){n.eventRegistrations_.push(e)}function CS(n,e,t){const s=[];if(t){re(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function RS(n,e,t,s){e.type===Si.MERGE&&e.source.queryId!==null&&(re(Ya(n.viewCache_),"We should always have a full cache before handling merges"),re(i_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=K4(n.processor_,a,e,t,s);return Y4(n.processor_,l.viewCache),re(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,sC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function sP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Tt,(l,c)=>{s.push(yl(l,c))}),t.isFullyInitialized()&&s.push(K1(t.getNode())),sC(n,s,t.getNode(),e)}function sC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return R4(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud;class rP{constructor(){this.views=new Map}}function aP(n){re(!ud,"__referenceConstructor has already been defined"),ud=n}function oP(){return re(ud,"Reference.ts has not been loaded"),ud}function lP(n){return n.views.size===0}function Vy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return re(l!=null,"SyncTree gave us an op for an invalid query."),RS(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(RS(c,e,t,s));return l}}function uP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=ad(t,a?s:null),p=!1;d?p=!0:s instanceof we?(d=My(t,s),p=!1):(d=we.EMPTY_NODE,p=!1);const g=Fd(new Qa(d,p,!1),new Qa(s,a,!1));return new eP(e,g)}return c}function cP(n,e,t,s,a,l){const c=uP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),iP(c,t),sP(c,t)}function hP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Fr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(CS(g,t,s)),AS(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(CS(p,t,s)),AS(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Fr(n)&&l.push(new(oP())(e._repo,e._path)),{removed:l,events:c}}function rC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function rl(n,e){let t=null;for(const s of n.views.values())t=t||nP(s,e);return t}function aC(n,e){if(e._queryParams.loadsAllData())return Hd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function oC(n,e){return aC(n,e)!=null}function Fr(n){return Hd(n)!=null}function Hd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd;function fP(n){re(!cd,"__referenceConstructor has already been defined"),cd=n}function dP(){return re(cd,"Reference.ts has not been loaded"),cd}let mP=1;class IS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new gt(null),this.pendingWriteTree_=B4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lC(n,e,t,s,a){return D4(n.pendingWriteTree_,e,t,s,a),a?zc(n,new Ga($1(),e,t)):[]}function ka(n,e,t=!1){const s=O4(n.pendingWriteTree_,e);if(M4(n.pendingWriteTree_,e)){let l=new gt(null);return s.snap!=null?l=l.set(Ze(),!0):Cn(s.children,c=>{l=l.set(new it(c),!0)}),zc(n,new rd(s.path,l,t))}else return[]}function Gd(n,e,t){return zc(n,new Ga(xy(),e,t))}function pP(n,e,t){const s=gt.fromObject(t);return zc(n,new bc(xy(),e,s))}function gP(n,e){return zc(n,new Tc(xy(),e))}function _P(n,e,t){const s=Uy(n,t);if(s){const a=jy(s),l=a.path,c=a.queryId,d=zn(l,e),p=new Tc(Dy(c),d);return zy(n,l,p)}else return[]}function l_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||oC(c,e))){const p=hP(c,e,t,s);lP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const y=g.findIndex(b=>b._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(b,x)=>Fr(x));if(y&&!T){const b=n.syncPointTree_.subtree(l);if(!b.isEmpty()){const x=EP(b);for(let U=0;U<x.length;++U){const F=x[U],G=F.query,ae=hC(n,F);n.listenProvider_.startListening(rc(G),hd(n,G),ae.hashFn,ae.onComplete)}}}!T&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(rc(e),null):g.forEach(b=>{const x=n.queryToTagMap.get(Qd(b));n.listenProvider_.stopListening(rc(b),x)}))}TP(n,g)}return d}function yP(n,e,t,s){const a=Uy(n,s);if(a!=null){const l=jy(a),c=l.path,d=l.queryId,p=zn(c,e),g=new Ga(Dy(d),p,t);return zy(n,c,g)}else return[]}function vP(n,e,t,s){const a=Uy(n,s);if(a){const l=jy(a),c=l.path,d=l.queryId,p=zn(c,e),g=gt.fromObject(t),y=new bc(Dy(d),p,g);return zy(n,c,y)}else return[]}function NS(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(b,x)=>{const U=zn(b,a);l=l||rl(x,U),c=c||Fr(x)});let d=n.syncPointTree_.get(a);d?(c=c||Fr(d),l=l||rl(d,Ze())):(d=new rP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=we.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((x,U)=>{const F=rl(U,Ze());F&&(l=l.updateImmediateChild(x,F))}));const g=oC(d,e);if(!g&&!e._queryParams.loadsAllData()){const b=Qd(e);re(!n.queryToTagMap.has(b),"View does not exist, but we have a tag");const x=bP();n.queryToTagMap.set(b,x),n.tagToQueryMap.set(x,b)}const y=Oy(n.pendingWriteTree_,a);let T=cP(d,e,t,y,l,p);if(!g&&!c&&!s){const b=aC(d,e);T=T.concat(SP(n,e,b))}return T}function Ly(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=zn(c,e),g=rl(d,p);if(g)return g});return J1(a,e,l,t,!0)}function zc(n,e){return uC(e,n.syncPointTree_,null,Oy(n.pendingWriteTree_,Ze()))}function uC(n,e,t,s){if(Ue(n.path))return cC(n,e,t,s);{const a=e.get(Ze());t==null&&a!=null&&(t=rl(a,Ze()));let l=[];const c=Ve(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=eC(s,c);l=l.concat(uC(d,p,g,y))}return a&&(l=l.concat(Vy(a,n,s,t))),l}}function cC(n,e,t,s){const a=e.get(Ze());t==null&&a!=null&&(t=rl(a,Ze()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=eC(s,c),y=n.operationForChild(c);y&&(l=l.concat(cC(y,d,p,g)))}),a&&(l=l.concat(Vy(a,n,s,t))),l}function hC(n,e){const t=e.query,s=hd(n,t);return{hashFn:()=>(tP(e)||we.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?_P(n,t._path,s):gP(n,t._path);{const l=_k(a,t);return l_(n,t,null,l)}}}}function hd(n,e){const t=Qd(e);return n.queryToTagMap.get(t)}function Qd(n){return n._path.toString()+"$"+n._queryIdentifier}function Uy(n,e){return n.tagToQueryMap.get(e)}function jy(n){const e=n.indexOf("$");return re(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new it(n.substr(0,e))}}function zy(n,e,t){const s=n.syncPointTree_.get(e);re(s,"Missing sync point for query tag that we're tracking");const a=Oy(n.pendingWriteTree_,e);return Vy(s,t,a,null)}function EP(n){return n.fold((e,t,s)=>{if(t&&Fr(t))return[Hd(t)];{let a=[];return t&&(a=rC(t)),Cn(s,(l,c)=>{a=a.concat(c)}),a}})}function rc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(dP())(n._repo,n._path):n}function TP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Qd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function bP(){return mP++}function SP(n,e,t){const s=e._path,a=hd(n,e),l=hC(n,t),c=n.listenProvider_.startListening(rc(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)re(!Fr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,y,T)=>{if(!Ue(g)&&y&&Fr(y))return[Hd(y).query];{let b=[];return y&&(b=b.concat(rC(y).map(x=>x.query))),Cn(T,(x,U)=>{b=b.concat(U)}),b}});for(let g=0;g<p.length;++g){const y=p[g];n.listenProvider_.stopListening(rc(y),hd(n,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qy(t)}node(){return this.node_}}class By{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Dt(this.path_,e);return new By(this.syncTree_,t)}node(){return Ly(this.syncTree_,this.path_)}}const wP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},xS=function(n,e,t){if(!n||typeof n!="object")return n;if(re(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return AP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return CP(n[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},AP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:re(!1,"Unexpected server value: "+n)}},CP=function(n,e,t){n.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&re(!1,"Unexpected increment value: "+s);const a=e.node();if(re(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},RP=function(n,e,t,s){return Fy(e,new By(t,n),s)},fC=function(n,e,t){return Fy(n,new qy(e),t)};function Fy(n,e,t){const s=n.getPriority().val(),a=xS(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=xS(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new nn(d,jt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new nn(a))),c.forEachChild(Tt,(d,p)=>{const g=Fy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Gy(n,e){let t=e instanceof it?e:new it(e),s=n,a=Ve(t);for(;a!==null;){const l=al(s.node.children,a)||{children:{},childCount:0};s=new Hy(a,s,l),t=ht(t),a=Ve(t)}return s}function Ol(n){return n.node.value}function dC(n,e){n.node.value=e,u_(n)}function mC(n){return n.node.childCount>0}function IP(n){return Ol(n)===void 0&&!mC(n)}function Yd(n,e){Cn(n.node.children,(t,s)=>{e(new Hy(t,n,s))})}function pC(n,e,t,s){t&&e(n),Yd(n,a=>{pC(a,e,!0)})}function NP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qc(n){return new it(n.parent===null?n.name:qc(n.parent)+"/"+n.name)}function u_(n){n.parent!==null&&xP(n.parent,n.name,n)}function xP(n,e,t){const s=IP(t),a=ts(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,u_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,u_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=/[\[\].#$\/\u0000-\u001F\u007F]/,OP=/[\[\].#$\u0000-\u001F\u007F]/,bg=10*1024*1024,Qy=function(n){return typeof n=="string"&&n.length!==0&&!DP.test(n)},gC=function(n){return typeof n=="string"&&n.length!==0&&!OP.test(n)},MP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gC(n)},_C=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!qd(n)||n&&typeof n=="object"&&ts(n,".sv")},c_=function(n,e,t,s){Kd(ol(n,"value"),e,t)},Kd=function(n,e,t){const s=t instanceof it?new Wk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+xa(s));if(typeof e=="function")throw new Error(n+"contains a function "+xa(s)+" with contents = "+e.toString());if(qd(e))throw new Error(n+"contains "+e.toString()+" "+xa(s));if(typeof e=="string"&&e.length>bg/3&&gd(e)>bg)throw new Error(n+"contains a string greater than "+bg+" utf8 bytes "+xa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Cn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Qy(c)))throw new Error(n+" contains an invalid key ("+c+") "+xa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Zk(s,c),Kd(n,d,s),Jk(s)}),a&&l)throw new Error(n+' contains ".value" child '+xa(s)+" in addition to actual children.")}},kP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=_c(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Qy(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Xk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&di(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},PP=function(n,e,t,s){const a=ol(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];Cn(e,(c,d)=>{const p=new it(c);if(Kd(a,d,Dt(t,p)),wy(p)===".priority"&&!_C(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),kP(a,l)},VP=function(n,e,t){if(qd(e))throw new Error(ol(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!_C(e))throw new Error(ol(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},yC=function(n,e,t,s){if(!gC(t))throw new Error(ol(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yC(n,e,t)},Zo=function(n,e){if(Ve(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},UP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!MP(t))throw new Error(ol(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Ay(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function vC(n,e,t){Yy(n,t),EC(n,s=>Ay(s,e))}function Hs(n,e,t){Yy(n,t),EC(n,s=>di(s,e)||di(e,s))}function EC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(zP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function zP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();tc&&pn("event: "+t.toString()),xl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="repo_interrupt",BP=25;class FP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sd(),this.transactionQueueTree_=new Hy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HP(n,e,t){if(n.stats_=by(n.repoInfo_),n.forceRestClient_||Tk())n.server_=new id(n.repoInfo_,(s,a,l,c)=>{DS(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>OS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{an(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Us(n.repoInfo_,e,(s,a,l,c)=>{DS(n,s,a,l,c)},s=>{OS(n,s)},s=>{QP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ck(n.repoInfo_,()=>new A4(n.stats_,n.server_)),n.infoData_=new E4,n.infoSyncTree_=new IS({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=Gd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),$y(n,"connected",!1),n.serverSyncTree_=new IS({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Hs(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function GP(n){const t=n.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ky(n){return wP({timestamp:GP(n)})}function DS(n,e,t,s,a){n.dataUpdateCount++;const l=new it(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Mf(t,g=>jt(g));c=vP(n.serverSyncTree_,l,p,a)}else{const p=jt(t);c=yP(n.serverSyncTree_,l,p,a)}else if(s){const p=Mf(t,g=>jt(g));c=pP(n.serverSyncTree_,l,p)}else{const p=jt(t);c=Gd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=$d(n,l)),Hs(n.eventQueue_,d,c)}function OS(n,e){$y(n,"connected",e),e===!1&&KP(n)}function QP(n,e){Cn(e,(t,s)=>{$y(n,t,s)})}function $y(n,e,t){const s=new it("/.info/"+e),a=jt(t);n.infoData_.updateSnapshot(s,a);const l=Gd(n.infoSyncTree_,s,a);Hs(n.eventQueue_,s,l)}function TC(n){return n.nextWriteId_++}function YP(n,e,t,s,a){Xy(n,"set",{path:e.toString(),value:t,priority:s});const l=Ky(n),c=jt(t,s),d=Ly(n.serverSyncTree_,e),p=fC(c,d,l),g=TC(n),y=lC(n.serverSyncTree_,e,p,g,!0);Yy(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(b,x)=>{const U=b==="ok";U||Bn("set at "+e+" failed: "+b);const F=ka(n.serverSyncTree_,g,!U);Hs(n.eventQueue_,e,F),El(n,a,b,x)});const T=CC(n,e);$d(n,T),Hs(n.eventQueue_,T,[])}function KP(n){Xy(n,"onDisconnectEvents");const e=Ky(n),t=sd();n_(n.onDisconnect_,Ze(),(a,l)=>{const c=RP(a,l,n.serverSyncTree_,e);Dl(t,a,c)});let s=[];n_(t,Ze(),(a,l)=>{s=s.concat(Gd(n.serverSyncTree_,a,l));const c=CC(n,a);$d(n,c)}),n.onDisconnect_=sd(),Hs(n.eventQueue_,Ze(),s)}function $P(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&t_(n.onDisconnect_,e),El(n,t,s,a)})}function MS(n,e,t,s){const a=jt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&Dl(n.onDisconnect_,e,a),El(n,s,l,c)})}function XP(n,e,t,s,a){const l=jt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&Dl(n.onDisconnect_,e,l),El(n,a,c,d)})}function WP(n,e,t,s){if(Of(t)){pn("onDisconnect().update() called with empty data.  Don't do anything."),El(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&Cn(t,(c,d)=>{const p=jt(d);Dl(n.onDisconnect_,Dt(e,c),p)}),El(n,s,a,l)})}function ZP(n,e,t){let s;Ve(e._path)===".info"?s=NS(n.infoSyncTree_,e,t):s=NS(n.serverSyncTree_,e,t),vC(n.eventQueue_,e._path,s)}function JP(n,e,t){let s;Ve(e._path)===".info"?s=l_(n.infoSyncTree_,e,t):s=l_(n.serverSyncTree_,e,t),vC(n.eventQueue_,e._path,s)}function eV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(qP)}function Xy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),pn(t,...e)}function El(n,e,t,s){e&&xl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function bC(n,e,t){return Ly(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function Wy(n,e=n.transactionQueueTree_){if(e||Xd(n,e),Ol(e)){const t=wC(n,e);re(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&tV(n,qc(e),t)}else mC(e)&&Yd(e,t=>{Wy(n,t)})}function tV(n,e,t){const s=t.map(g=>g.currentWriteId),a=bC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];re(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=zn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{Xy(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let b=0;b<t.length;b++)t[b].status=2,y=y.concat(ka(n.serverSyncTree_,t[b].currentWriteId)),t[b].onComplete&&T.push(()=>t[b].onComplete(null,!0,t[b].currentOutputSnapshotResolved)),t[b].unwatcher();Xd(n,Gy(n.transactionQueueTree_,e)),Wy(n,n.transactionQueueTree_),Hs(n.eventQueue_,e,y);for(let b=0;b<T.length;b++)xl(T[b])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Bn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}$d(n,e)}},c)}function $d(n,e){const t=SC(n,e),s=qc(t),a=wC(n,t);return nV(n,a,s),s}function nV(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=zn(t,p.path);let y=!1,T;if(re(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=BP)y=!0,T="maxretry",a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0));else{const b=bC(n,p.path,c);p.currentInputSnapshot=b;const x=e[d].update(b.val());if(x!==void 0){Kd("transaction failed: Data returned ",x,p.path);let U=jt(x);typeof x=="object"&&x!=null&&ts(x,".priority")||(U=U.updatePriority(b.getPriority()));const G=p.currentWriteId,ae=Ky(n),ie=fC(U,b,ae);p.currentOutputSnapshotRaw=U,p.currentOutputSnapshotResolved=ie,p.currentWriteId=TC(n),c.splice(c.indexOf(G),1),a=a.concat(lC(n.serverSyncTree_,p.path,ie,p.currentWriteId,p.applyLocally)),a=a.concat(ka(n.serverSyncTree_,G,!0))}else y=!0,T="nodata",a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0))}Hs(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(b){setTimeout(b,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Xd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)xl(s[d]);Wy(n,n.transactionQueueTree_)}function SC(n,e){let t,s=n.transactionQueueTree_;for(t=Ve(e);t!==null&&Ol(s)===void 0;)s=Gy(s,t),e=ht(e),t=Ve(e);return s}function wC(n,e){const t=[];return AC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function AC(n,e,t){const s=Ol(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Yd(e,a=>{AC(n,a,t)})}function Xd(n,e){const t=Ol(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,dC(e,t.length>0?t:void 0)}Yd(e,s=>{Xd(n,s)})}function CC(n,e){const t=qc(SC(n,e)),s=Gy(n.transactionQueueTree_,e);return NP(s,a=>{Sg(n,a)}),Sg(n,s),pC(s,a=>{Sg(n,a)}),t}function Sg(n,e){const t=Ol(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(re(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(re(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(ka(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?dC(e,void 0):t.length=l+1,Hs(n.eventQueue_,qc(e),a);for(let c=0;c<s.length;c++)xl(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function sV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Bn(`Invalid query segment '${t}' in query '${n}'`)}return e}const kS=function(n,e){const t=rV(n),s=t.namespace;t.domain==="firebase.com"&&Fs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new O1(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new it(t.pathString)}},rV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=iV(n.substring(y,T)));const b=sV(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const U=e.indexOf(".");s=e.substring(0,U).toLowerCase(),t=e.substring(U+1),l=s}"ns"in b&&(l=b.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+an(this.snapshot.exportVal())}}class oV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Os;return $P(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Zo("OnDisconnect.remove",this._path);const e=new Os;return MS(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Zo("OnDisconnect.set",this._path),c_("OnDisconnect.set",e,this._path);const t=new Os;return MS(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Zo("OnDisconnect.setWithPriority",this._path),c_("OnDisconnect.setWithPriority",e,this._path),VP("OnDisconnect.setWithPriority",t);const s=new Os;return XP(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Zo("OnDisconnect.update",this._path),PP("OnDisconnect.update",e,this._path);const t=new Os;return WP(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ue(this._path)?null:wy(this._path)}get ref(){return new Yr(this._repo,this._path)}get _queryIdentifier(){const e=_S(this._queryParams),t=Ey(e);return t==="{}"?"default":t}get _queryObject(){return _S(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Zy))return!1;const t=this._repo===e._repo,s=Ay(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+$k(this._path)}}class Yr extends Zy{constructor(e,t){super(e,t,new Ny,!1)}get parent(){const e=q1(this._path);return e===null?null:new Yr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fd{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new it(e),s=h_(this.ref,e);return new fd(this._node.getChild(t),s,Tt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new fd(a,h_(this.ref,s),Tt)))}hasChild(e){const t=new it(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function La(n,e){return n=mt(n),n._checkNotDeleted("ref"),e!==void 0?h_(n._root,e):n._root}function h_(n,e){return n=mt(n),Ve(n._path)===null?LP("child","path",e):yC("child","path",e),new Yr(n._repo,Dt(n._path,e))}function cV(n){return n=mt(n),new uV(n._repo,n._path)}function wg(n){return Zo("remove",n._path),Wd(n,null)}function Wd(n,e){n=mt(n),Zo("set",n._path),c_("set",e,n._path);const t=new Os;return YP(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Jy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new aV("value",this,new fd(e.snapshotNode,new Yr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new oV(this,e,t):null}matches(e){return e instanceof Jy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function hV(n,e,t,s,a){const l=new lV(t,void 0),c=new Jy(l);return ZP(n._repo,n,c),()=>JP(n._repo,n,c)}function ev(n,e,t,s){return hV(n,"value",e)}aP(Yr);fP(Yr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV="FIREBASE_DATABASE_EMULATOR_HOST",f_={};let dV=!1;function mV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Hr(l);n.repoInfo_=new O1(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function pV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=kS(l,a),d=c.repoInfo,p;typeof process<"u"&&Jb&&(p=Jb[fV]),p?(l=`http://${p}?ns=${d.namespace}`,c=kS(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new Sk(n.name,n.options,e);UP("Invalid Firebase Database URL",c),Ue(c.path)||Fs("Database URL must point to the root of a Firebase Database (not including a child path).");const y=_V(d,n,g,new bk(n,t));return new yV(y,n)}function gV(n,e){const t=f_[e];(!t||t[n.key]!==n)&&Fs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),eV(n),delete t[n.key]}function _V(n,e,t,s){let a=f_[e.name];a||(a={},f_[e.name]=a);let l=a[n.toURLString()];return l&&Fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new FP(n,dV,t,s),a[n.toURLString()]=l,l}class yV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yr(this._repo,Ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fs("Cannot call "+e+" on a deleted database.")}}function vV(n=T_(),e){const t=yd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=XS("database");s&&EV(t,...s)}return t}function EV(n,e,t,s={}){n=mt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Wi(s,l.repoInfo_.emulatorOptions))return;Fs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Fs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Nf(Nf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:JS(s.mockUserToken,n.app.options.projectId);c=new Nf(d)}Hr(e)&&(__(e),y_("Database",!0)),mV(l,a,s,c)}/**
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
 */function TV(n){ak(Ka),ja(new Pr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return pV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Gi(eS,tS,n),Gi(eS,tS,"esm2020")}Us.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Us.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};TV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),SV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),PS=n=>{const e=SV(n);return e.charAt(0).toUpperCase()+e.slice(1)},RC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),wV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=ne.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>ne.createElement("svg",{ref:p,...AV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:RC("lucide",a),...!l&&!wV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,y])=>ne.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(n,e)=>{const t=ne.forwardRef(({className:s,...a},l)=>ne.createElement(CV,{ref:l,iconNode:e,className:RC(`lucide-${bV(PS(n))}`,`lucide-${n}`,s),...a}));return t.displayName=PS(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],IV=bt("arrow-left",RV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],VS=bt("bell",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],DV=bt("check-check",xV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],tv=bt("check",OV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],kV=bt("circle-check-big",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Ag=bt("corner-up-left",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],LV=bt("ellipsis-vertical",VV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],jV=bt("eraser",UV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],IC=bt("loader-circle",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],LS=bt("log-out",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],US=bt("message-circle",BV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],nv=bt("message-square",FV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],GV=bt("palette",HV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],YV=bt("pin-off",QV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],iv=bt("pin",KV);/**
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
 */const JV=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],NC=bt("square-pen",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],d_=bt("trash-2",eL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],jS=bt("user-plus",tL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],iL=bt("user-x",nL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],dd=bt("users",sL);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],m_=bt("x",rL),aL=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},sv=sw(aL),ac=$2(sv),Oe=YM(sv),Ua=vV(sv),oL=n=>{ne.useEffect(()=>{if(!n)return;const e=La(Ua,`/status/${n.uid}`),t=Ut(Oe,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=La(Ua,".info/connected"),c=ev(l,d=>{if(d.val()===!1){mn(t,{state:"offline",last_changed:gl()});return}cV(e).set(s).then(()=>{Wd(e,a),mn(t,{state:"online",last_changed:gl()})})});return()=>c()},[n])},Zd=(n,e)=>{const[t,s]=ne.useState(null),a=ac.currentUser;return ne.useEffect(()=>{if(!n||!a){s(null);return}const l=kn(Ut(Oe,"users",n),p=>{if(p.exists()){const g=p.data(),y=e?.customNames?.[a.uid];s(T=>({...T||{},...g,displayName:y||g.displayName}))}else s(null)}),c=La(Ua,`/status/${n}`),d=ev(c,p=>{const g=p.val();s(y=>({...y||{},presence:g?.state,last_changed:g?.last_changed}))});return()=>{l(),d()}},[n,e,a]),t},lL=n=>{const[e,t]=ne.useState(0);return ne.useEffect(()=>{if(!n?.uid)return;const s=wn($t(Oe,"friendships"),Ct("users","array-contains",n.uid),Ct("status","==","pending")),a=kn(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},uL=n=>{const[e,t]=ne.useState(0),[s,a]=ne.useState([]);return ne.useEffect(()=>{if(!n?.uid)return;const l=wn($t(Oe,"friendships"),Ct("users","array-contains",n.uid),Ct("status","==","accepted")),c=kn(l,d=>{const p=d.docs.map(g=>g.data().users.find(y=>y!==n.uid));a(p)});return()=>c()},[n]),ne.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=wn($t(Oe,`conversations/${p}/messages`),Ct("receiverId","==",n.uid),Ct("status","in",["sent","delivered"]));return kn(g,y=>{l[p]=y.size;const T=Object.values(l).reduce((b,x)=>b+x,0);t(T)})});return()=>c.forEach(d=>d())},[s,n]),e},cL=n=>{const e=ne.useRef(n);ne.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),ne.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=SI"}),e.current=n},[n])},hL=(n,e)=>{const[t,s]=ne.useState(null);return ne.useEffect(()=>{if(!n||!e||e.isGroup){s(null);return}const a=wn($t(Oe,"friendships"),Ct("users","in",[[n.uid,e.uid],[e.uid,n.uid]])),l=kn(a,c=>{if(c.empty)s(null);else{const d=c.docs[0];s({id:d.id,...d.data()})}});return()=>l()},[n,e]),t},fL=({text:n="Preparando seu bate-papo..."})=>A.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:A.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[A.jsx(nv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),A.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),A.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[A.jsx(IC,{className:"animate-spin h-10 w-10 text-blue-400"}),A.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),dL=()=>{const n=async()=>{const e=new Ms;try{const s=(await s2(ac,e)).user,a=Ut(Oe,"users",s.uid);(await p1(a)).exists()||await ik(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL,recado:"Olá! Estou usando o ChatD."})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return A.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:A.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[A.jsx(nv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),A.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),A.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),A.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[A.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},mL=({user:n,onClose:e})=>n?A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[A.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),A.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),A.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),A.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),A.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,pL=({user:n,onClose:e})=>{const[t,s]=ne.useState(n.recado||""),a=async()=>{const l=Ut(Oe,"users",n.uid);await mn(l,{recado:t}),e()};return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[A.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),A.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),A.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),A.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[A.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),A.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},md=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[A.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),A.jsx("p",{className:"text-gray-400 mb-6",children:a}),A.jsxs("div",{className:"flex justify-center gap-4",children:[A.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),A.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,zS=({currentUser:n})=>{const[e,t]=ne.useState(""),[s,a]=ne.useState([]),[l,c]=ne.useState({}),[d,p]=ne.useState(!1),[g,y]=ne.useState(""),[T,b]=ne.useState(""),x=async F=>{if(F.preventDefault(),e.trim()!==""){p(!0),y(""),b(""),a([]);try{const G=wn($t(Oe,"users"),Ct("email","==",e.trim()),d1(1)),ie=(await Jf(G)).docs.map(le=>le.data())[0];if(ie&&ie.uid!==n.uid){a([ie]);const le=wn($t(Oe,"friendships"),Ct("users","array-contains",n.uid)),me=(await Jf(le)).docs.find(Me=>Me.data().users.includes(ie.uid));c({[ie.uid]:me?me.data().status:"not_friends"})}else ie&&ie.uid===n.uid?b("Você não pode adicionar a si mesmo."):b("Nenhum usuário encontrado com este e-mail.")}catch(G){y("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(G)}finally{p(!1)}}},U=async F=>{try{await vy($t(Oe,"friendships"),{users:[n.uid,F.uid],status:"pending",requestedBy:n.uid,createdAt:gl()}),c(G=>({...G,[F.uid]:"pending"}))}catch(G){y("Falha ao enviar pedido."),console.error(G)}};return A.jsxs("div",{className:"p-4",children:[A.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),A.jsxs("form",{onSubmit:x,className:"flex gap-2",children:[A.jsx("input",{type:"email",value:e,onChange:F=>t(F.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),A.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?A.jsx(IC,{className:"animate-spin"}):"Buscar"})]}),A.jsxs("div",{className:"mt-4 h-24",children:[g&&A.jsx("p",{className:"text-red-400",children:g}),T&&A.jsx("p",{className:"text-yellow-400",children:T}),s.map(F=>A.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("img",{src:F.photoURL,alt:F.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("span",{className:"text-white",children:F.displayName})]}),A.jsxs("div",{children:[l[F.uid]==="not_friends"&&A.jsx("button",{onClick:()=>U(F),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[F.uid]==="pending"&&A.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[F.uid]==="accepted"&&A.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[F.uid]==="declined"&&A.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},F.uid))]})]})},qS=({currentUser:n})=>{const[e,t]=ne.useState([]);ne.useEffect(()=>{if(!n?.uid)return;const a=wn($t(Oe,"friendships"),Ct("users","array-contains",n.uid),Ct("status","==","pending")),l=kn(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const y=g.users.find(b=>b!==n.uid),T=await p1(Ut(Oe,"users",y));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await mn(Ut(Oe,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return A.jsxs("div",{className:"p-4",children:[A.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?A.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):A.jsx("ul",{className:"space-y-2",children:e.map(a=>A.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("span",{className:"text-white",children:a.displayName})]}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:A.jsx(tv,{size:16})}),A.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:A.jsx(m_,{size:16})})]})]},a.id))})]})},gL=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=Zd(n.friendId,n);return s?A.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[A.jsxs("div",{className:"flex items-center gap-4 relative",children:[A.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),A.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),A.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:A.jsx(d_,{size:18,className:"text-red-500"})})]}):A.jsx("div",{className:"p-4 h-[69px] bg-gray-800 animate-pulse"})},BS=({currentUser:n,onSelectUser:e})=>{const[t,s]=ne.useState([]),[a,l]=ne.useState(null);ne.useEffect(()=>{if(!n?.uid)return;const d=wn($t(Oe,"friendships"),Ct("users","array-contains",n.uid),Ct("status","==","accepted")),p=kn(d,g=>{const y=g.docs.map(T=>({id:T.id,...T.data(),friendId:T.data().users.find(b=>b!==n.uid)}));s(y)});return()=>p()},[n.uid]);const c=async()=>{if(!a)return;const d=Ut(Oe,"friendships",a.id);try{await sk(d)}catch(p){console.error("Error deleting friendship: ",p)}l(null)};return A.jsxs("div",{className:"flex-grow overflow-y-auto",children:[A.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?A.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):A.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>A.jsx(gL,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),A.jsx(md,{isOpen:!!a,onClose:()=>l(null),onConfirm:c,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},FS=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=ne.useState([]),[l,c]=ne.useState([]),[d,p]=ne.useState(null);ne.useEffect(()=>{if(!n?.uid)return;const b=wn($t(Oe,"friendships"),Ct("users","array-contains",n.uid),Ct("status","==","accepted")),x=kn(b,G=>{let ae=G.docs.map(ie=>({id:ie.id,...ie.data(),friendId:ie.data().users.find(le=>le!==n.uid),isGroup:!1})).filter(ie=>!ie.chatDeletedFor?.includes(n.uid));ae.sort((ie,le)=>{const ge=ie.pinnedBy?.includes(n.uid),me=le.pinnedBy?.includes(n.uid);return ge&&!me?-1:!ge&&me?1:0}),a(ae)}),U=wn($t(Oe,"groups"),Ct("members","array-contains",n.uid)),F=kn(U,G=>{const ae=G.docs.map(ie=>{const le=ie.data();return{id:ie.id,...le,isGroup:!0,displayName:le.name,photoURL:le.photoColor?"":`https://placehold.co/96x96/${le.photoColor?.replace("#","")||"7c3aed"}/FFFFFF?text=${le.name.charAt(0).toUpperCase()}`}});c(ae)});return()=>{x(),F()}},[n.uid]);const g=async(b,x)=>{const U=Ut(Oe,"friendships",b);x?await mn(U,{pinnedBy:_1(n.uid)}):await mn(U,{pinnedBy:ec(n.uid)})},y=async()=>{if(!d)return;const b=Ut(Oe,"friendships",d.id);await mn(b,{chatDeletedFor:ec(n.uid)}),p(null)},T=[...s,...l];return A.jsxs("div",{className:"flex-grow overflow-y-auto",children:[A.jsxs("div",{className:"flex justify-between items-center p-4",children:[A.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),A.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",children:[A.jsx(dd,{size:16})," Criar Grupo"]})]}),T.length===0?A.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):A.jsx("ul",{className:"divide-y divide-gray-700/50",children:T.map(b=>A.jsx(_L,{chat:b,currentUser:n,onSelectUser:e,onTogglePin:g,onDeleteChat:()=>p(b)},b.id))}),A.jsx(md,{isOpen:!!d,onClose:()=>p(null),onConfirm:y,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},_L=({chat:n,currentUser:e,onSelectUser:t,onTogglePin:s,onDeleteChat:a})=>{const l=Zd(n.friendId,n),[c,d]=ne.useState(0),p=n.pinnedBy?.includes(e.uid),g=ne.useRef(null),[y,T]=ne.useState(null);ne.useEffect(()=>{if(!e)return;const G=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,ae=wn($t(Oe,G),Ct("receiverId","==",e.uid),Ct("status","in",["sent","delivered"])),ie=kn(ae,me=>d(me.size)),le=wn($t(Oe,G),f1("createdAt","desc"),d1(1)),ge=kn(le,me=>{me.empty?T(null):T(me.docs[0].data())});return()=>{ie(),ge()}},[n,e]);const b=n.isGroup?n:l;if(!b)return A.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const x=F=>{if(!F)return"Offline";const G=new Date(F.seconds?F.seconds*1e3:F),ae=new Date,ie=new Date(ae.getFullYear(),ae.getMonth(),ae.getDate()),le=new Date(ae.getFullYear(),ae.getMonth(),ae.getDate()-1),ge={hour:"2-digit",minute:"2-digit"},me=G.toLocaleTimeString("pt-BR",ge);if(G>=ie)return`Visto por último hoje às ${me}`;if(G>=le)return`Visto por último ontem às ${me}`;const Me={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${G.toLocaleDateString("pt-BR",Me)}`},U=({data:F})=>F.photoURL?A.jsx("img",{src:F.photoURL,alt:F.displayName,className:"w-12 h-12 rounded-full flex-shrink-0"}):A.jsx("div",{className:"w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold",style:{backgroundColor:F.photoColor||"#7c3aed"},children:F.displayName?.charAt(0).toUpperCase()});return A.jsxs("li",{ref:g,onClick:()=>t(b),onContextMenu:F=>{F.preventDefault(),n.isGroup||a()},className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${p?"bg-gray-700/30":""}`,children:[A.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[A.jsx(U,{data:b}),!n.isGroup&&A.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${l?.presence==="online"?"bg-green-500":"bg-gray-500"}`}),A.jsxs("div",{className:"flex-grow min-w-0",children:[A.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:b.displayName}),A.jsx("p",{className:"text-sm text-gray-400 truncate",children:y?y.isDeleted?"Mensagem apagada":y.text:n.isGroup?"Nenhuma mensagem ainda":l?.presence==="online"?"Online":x(l?.last_changed)})]})]}),A.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[c>0&&A.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:c}),!n.isGroup&&A.jsx("button",{onClick:F=>{F.stopPropagation(),s(n.id,p)},className:"p-2 rounded-full hover:bg-gray-600",children:p?A.jsx(YV,{size:18,className:"text-blue-400"}):A.jsx(iv,{size:18,className:"text-gray-500"})})]})]})},yL=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a,onPin:l})=>{const[c,d]=ne.useState(!1),p=ne.useRef(null),g=ne.useRef(),[y,T]=ne.useState("bottom");ne.useEffect(()=>{c&&p.current&&(p.current.getBoundingClientRect().top<150?T("top"):T("bottom"))},[c]),ne.useEffect(()=>{const ae=ie=>{p.current&&!p.current.contains(ie.target)&&d(!1)};return document.addEventListener("mousedown",ae),()=>document.removeEventListener("mousedown",ae)},[]);const b=ae=>{ae.preventDefault(),navigator.vibrate&&navigator.vibrate(50),d(!0)},x=ae=>{g.current=setTimeout(()=>b(ae),500)},U=()=>{clearTimeout(g.current)},F=()=>{clearTimeout(g.current)},G=({msg:ae})=>{if(!e||!ae.status)return null;const ie=ae.status==="read";return A.jsx(DV,{size:16,className:ie?"text-blue-400":"text-gray-400"})};return A.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&A.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:A.jsx(Ag,{size:16})}),A.jsxs("div",{className:"relative",ref:p,onTouchStart:x,onTouchEnd:U,onTouchMove:F,onContextMenu:ae=>{ae.preventDefault(),d(!0)},children:[A.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&A.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[A.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),A.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),A.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":n.text}),!n.isDeleted&&A.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&A.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),A.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),A.jsx(G,{msg:n})]})]}),c&&A.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${y==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10`,children:[A.jsxs("button",{onClick:()=>{l(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(iv,{size:14})," Fixar"]}),A.jsxs("button",{onClick:()=>{t(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(Ag,{size:14})," Responder"]}),e&&!n.isDeleted&&A.jsxs(A.Fragment,{children:[A.jsxs("button",{onClick:()=>{a(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(NC,{size:14})," Editar"]}),A.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(d_,{size:14})," Apagar para mim"]}),A.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[A.jsx(d_,{size:14})," Apagar para todos"]})]})]})]}),e&&A.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:A.jsx(Ag,{size:16})})]})},vL=({onEmojiSelect:n,onClose:e})=>{const t=ne.useRef(null);ne.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍🔥","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return A.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:A.jsx("div",{className:"p-2 overflow-y-auto",children:A.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>A.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},EL=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}}];return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg",onClick:a=>a.stopPropagation(),children:[A.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),A.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>A.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[A.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&A.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:A.jsx(kV,{className:"text-white"})})}),A.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},TL=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=ne.useState(t);return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[A.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),A.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),A.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[A.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),A.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},HS=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=ne.useState([]),[l,c]=ne.useState(""),[d,p]=ne.useState(!1),[g,y]=ne.useState(!1),[T,b]=ne.useState(!1),[x,U]=ne.useState(null),[F,G]=ne.useState(null),[ae,ie]=ne.useState(!1),[le,ge]=ne.useState(!1),[me,Me]=ne.useState(!1),[P,C]=ne.useState(!1),[N,M]=ne.useState(!1),[k,L]=ne.useState(null),[R,Ft]=ne.useState(e),pt=ne.useRef(null),Y=ne.useRef(null),ee=e.isGroup,ce=hL(n,e),Ie=Zd(e.uid,ce),D=ne.useRef(),X=ee?e.id:[n.uid,e.uid].sort().join("_"),oe=ce?.themes?.[n.uid]||"default",te={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}},_e=de=>{if(!de)return"";const Ne=new Date(de.seconds?de.seconds*1e3:de),ze=new Date,yn=new Date(ze.getFullYear(),ze.getMonth(),ze.getDate()),Ks=new Date(ze.getFullYear(),ze.getMonth(),ze.getDate()-1),ut={hour:"2-digit",minute:"2-digit"},xe=Ne.toLocaleTimeString("pt-BR",ut);if(Ne>=yn)return`Visto por último hoje às ${xe}`;if(Ne>=Ks)return`Visto por último ontem às ${xe}`;const Rn={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${Ne.toLocaleDateString("pt-BR",Rn)}`};ne.useEffect(()=>{if(ee){const de=Ut(Oe,"groups",e.id),Ne=kn(de,ze=>{ze.exists()&&Ft({...ze.data(),id:ze.id,isGroup:!0})});return()=>Ne()}},[ee,e.id]),ne.useEffect(()=>{D.current=Ie?.presence},[Ie?.presence]),ne.useEffect(()=>{if(ee||D.current==="online"||Ie?.presence!=="online")return;const de=wn($t(Oe,`conversations/${X}/messages`),Ct("receiverId","==",n.uid),Ct("status","==","sent"));Jf(de).then(Ne=>{const ze=gg(Oe);Ne.docs.forEach(yn=>ze.update(yn.ref,{status:"delivered"})),ze.commit()})},[Ie?.presence,X,n.uid,ee]),ne.useEffect(()=>{const de=`conversations/${X}/messages`,Ne=wn($t(Oe,de),f1("createdAt","asc")),ze=kn(Ne,yn=>{const Ks=yn.docs.map(xe=>({id:xe.id,...xe.data()})).filter(xe=>!xe.deletedFor?.includes(n.uid));if(a(Ks),ee)return;const ut=gg(Oe);yn.docs.forEach(xe=>{xe.data().receiverId===n.uid&&xe.data().status!=="read"&&ut.update(xe.ref,{status:"read"})}),ut.commit()});return()=>ze()},[X,n.uid,ee]),ne.useEffect(()=>{if(ee)return;const de=La(Ua,`typing/${X}/${e.uid}`),Ne=ev(de,ze=>p(ze.val()===!0));return()=>Ne()},[X,e.uid,ee]),ne.useEffect(()=>{pt.current?.scrollIntoView({behavior:"smooth"})},[s]);const ke=de=>{if(c(de.target.value),ee)return;const Ne=La(Ua,`typing/${X}/${n.uid}`);de.target.value.trim().length>0?(Wd(Ne,!0),Y.current&&clearTimeout(Y.current),Y.current=setTimeout(()=>wg(Ne),3e3)):wg(Ne)},be=async de=>{if(de.preventDefault(),l.trim()===""||!ee&&(ce?.blockedBy?.includes(e.uid)||ce?.blockedBy?.includes(n.uid)))return;const Ne=l;c(""),ee||(wg(La(Ua,`typing/${X}/${n.uid}`)),Y.current&&clearTimeout(Y.current));const ze={text:Ne,createdAt:gl(),senderId:n.uid,senderName:n.displayName};ee||(ze.receiverId=e.uid,ze.status=Ie?.presence==="online"?"delivered":"sent"),x&&(ze.replyTo={id:x.id,text:x.text,senderName:x.senderId===n.uid?"Você":ee?x.senderName:e.displayName});try{await vy($t(Oe,`conversations/${X}/messages`),ze),U(null)}catch(yn){console.error("Falha ao enviar mensagem:",yn),c(Ne)}},Ot=async de=>{if(de.preventDefault(),!F||l.trim()==="")return;const Ne=Ut(Oe,`conversations/${X}/messages`,F.id);await mn(Ne,{text:l,edited:!0}),G(null),c("")},st=async()=>{if(!k)return;const{id:de,type:Ne}=k,ze=Ut(Oe,`conversations/${X}/messages`,de);Ne==="self"?await mn(ze,{deletedFor:ec(n.uid)}):Ne==="all"&&await mn(ze,{text:"",isDeleted:!0,replyTo:null}),L(null)},Jn=async()=>{const de=wn($t(Oe,`conversations/${X}/messages`)),Ne=await Jf(de),ze=gg(Oe);Ne.docs.forEach(yn=>{ze.update(yn.ref,{deletedFor:ec(n.uid)})}),await ze.commit(),Me(!1)},Ri=async()=>{if(!ce)return;const de=Ut(Oe,"friendships",ce.id);ce.blockedBy?.includes(n.uid)?await mn(de,{blockedBy:_1(n.uid)}):await mn(de,{blockedBy:ec(n.uid)}),ge(!1)},mi=async de=>{if(!ce)return;const Ne=Ut(Oe,"friendships",ce.id);await mn(Ne,{[`themes.${n.uid}`]:de}),C(!1)},ns=async de=>{if(!ce||!de.trim())return;const Ne=Ut(Oe,"friendships",ce.id);await mn(Ne,{[`customNames.${n.uid}`]:de.trim()}),M(!1)},is=async de=>{if(!ee||!R.admins.includes(n.uid))return;const Ne=Ut(Oe,"groups",R.id),ze={id:de.id,text:de.text,senderName:de.senderName};await mn(Ne,{pinnedMessage:ze})},ss=async()=>{if(!ee||!R.admins.includes(n.uid))return;const de=Ut(Oe,"groups",R.id);await mn(de,{pinnedMessage:null})},Kr=de=>{G(de),c(de.text),U(null)},eo=()=>{G(null),c("")},on=!ee&&ce?.blockedBy?.includes(n.uid),$r=!ee&&ce?.blockedBy?.includes(e.uid),rs=ee?R.name:Ie?.displayName,Ys=ee?R.photoColor?"":R.photoURL:e.photoURL;return A.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[A.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[A.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:A.jsx(IV,{size:24})}),A.jsxs("div",{className:"flex items-center cursor-pointer flex-grow",onClick:()=>ee?b(!0):y(!0),children:[ee?A.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold mr-4",style:{backgroundColor:R.photoColor||"#7c3aed"},children:rs?.charAt(0).toUpperCase()}):A.jsx("img",{src:Ys,alt:rs,className:"w-10 h-10 rounded-full mr-4"}),A.jsxs("div",{children:[A.jsx("h2",{className:"text-xl font-bold text-white",children:rs}),A.jsx("p",{className:"text-sm text-blue-300 h-4",children:ee?`${R.members?.length||0} membros`:d?"Digitando...":Ie?.presence==="online"?"Online":_e(Ie?.last_changed)})]})]}),A.jsxs("div",{className:"relative",children:[A.jsx("button",{onClick:()=>ge(de=>!de),className:"p-2 text-gray-400 hover:text-white",children:A.jsx(LV,{})}),le&&A.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[ee?A.jsxs("button",{onClick:()=>{b(!0),ge(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(dd,{size:14})," Perfil do Grupo"]}):A.jsxs(A.Fragment,{children:[A.jsxs("button",{onClick:()=>{M(!0),ge(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(NC,{size:14})," Alterar nome do contato"]}),A.jsxs("button",{onClick:()=>{C(!0),ge(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(GV,{size:14})," Alterar tema da conversa"]})]}),A.jsxs("button",{onClick:()=>{Me(!0),ge(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[A.jsx(jV,{size:14})," Limpar conversa"]}),!ee&&A.jsxs("button",{onClick:Ri,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[A.jsx(iL,{size:14})," ",on?"Desbloquear":"Bloquear"]})]})]})]}),A.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500 flex flex-col",style:ee?te.default:te[oe],children:[ee&&R.pinnedMessage&&A.jsx("div",{className:"sticky top-0 bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg mb-4 border border-blue-500/50 animate-fade-in",children:A.jsxs("div",{className:"flex justify-between items-center",children:[A.jsxs("div",{children:[A.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold",children:[A.jsx(iv,{size:12})," MENSAGEM FIXADA"]}),A.jsx("p",{className:"text-sm text-white truncate",children:R.pinnedMessage.text})]}),R.admins.includes(n.uid)&&A.jsx("button",{onClick:ss,className:"p-1 text-gray-400 hover:text-white",children:A.jsx(m_,{size:16})})]})}),A.jsx("div",{className:"space-y-2 mt-auto",children:s.map(de=>A.jsx(yL,{msg:de,isCurrentUser:de.senderId===n.uid,onReply:()=>U(de),onDelete:Ne=>L({id:de.id,type:Ne}),onEdit:()=>Kr(de),onPin:()=>is(de)},de.id))}),A.jsx("div",{ref:pt})]}),A.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[(x||F)&&A.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[A.jsxs("div",{className:"flex justify-between items-center text-sm",children:[A.jsx("p",{className:"font-bold",children:F?"Editando mensagem":`Respondendo a ${x.senderId===n.uid?"Você":ee?x.senderName:Ie?.displayName}`}),A.jsx("button",{onClick:F?eo:()=>U(null),className:"p-1",children:A.jsx(m_,{size:16})})]}),A.jsx("p",{className:"text-xs text-gray-400 truncate",children:F?F.text:x.text})]}),A.jsxs("div",{className:"relative flex items-center gap-2",children:[ae&&A.jsx(vL,{onEmojiSelect:de=>c(Ne=>Ne+de),onClose:()=>ie(!1)}),A.jsx("button",{type:"button",onClick:()=>ie(de=>!de),className:"p-2 text-gray-400 hover:text-white",children:A.jsx(ZV,{})}),A.jsxs("form",{onSubmit:F?Ot:be,className:"flex-grow flex items-center gap-2",children:[A.jsx("input",{type:"text",value:l,onChange:ke,placeholder:on?"Você bloqueou este contato.":$r?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:$r||on,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),A.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||$r||on,children:F?A.jsx(tv,{size:20}):A.jsx(XV,{size:20})})]})]})]}),g&&A.jsx(mL,{user:e,onClose:()=>y(!1)}),T&&A.jsx(GroupProfileModal,{groupData:R,currentUser:n,onClose:()=>b(!1),onLeaveChat:t}),P&&A.jsx(EL,{onClose:()=>C(!1),onSelectTheme:mi,currentTheme:oe}),N&&A.jsx(TL,{onClose:()=>M(!1),onSave:ns,currentName:Ie?.displayName}),A.jsx(md,{isOpen:me,onClose:()=>Me(!1),onConfirm:Jn,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),A.jsx(md,{isOpen:!!k,onClose:()=>L(null),onConfirm:st,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${k?.type==="all"?"para todos":"para você"}?`})]})},bL=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=ne.useState(""),[l,c]=ne.useState([n.uid]),[d,p]=ne.useState(""),g=T=>{c(b=>b.includes(T)?b.filter(x=>x!==T):[...b,T])},y=async()=>{if(!s.trim()){p("O nome do grupo é obrigatório.");return}if(l.length<2){p("Selecione pelo menos um amigo para criar um grupo.");return}try{await vy($t(Oe,"groups"),{name:s.trim(),description:"",members:l,admins:[n.uid],createdAt:gl(),createdBy:n.uid,photoColor:"#7c3aed",pinnedMessage:null}),e()}catch(T){console.error("Erro ao criar grupo:",T),p(`Erro: ${T.message}`)}};return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:A.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col",onClick:T=>T.stopPropagation(),children:[A.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),A.jsx("input",{type:"text",value:s,onChange:T=>a(T.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),A.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),A.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(T=>A.jsx(SL,{friendship:T,onToggle:g,isSelected:l.includes(T.friendId)},T.id))}),d&&A.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),A.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[A.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),A.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Criar Grupo"})]})]})})},SL=({friendship:n,onToggle:e,isSelected:t})=>{const s=Zd(n.friendId,n);return s?A.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("span",{className:"text-white",children:s.displayName})]}),A.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&A.jsx(tv,{size:16,className:"text-white"})})]}):null},wL=({user:n,onLogout:e})=>{const[t,s]=ne.useState(null),[a,l]=ne.useState("chats"),[c,d]=ne.useState("list"),[p,g]=ne.useState(!1),[y,T]=ne.useState(!1),[b,x]=ne.useState([]),U=lL(n),F=uL(n);cL(F),ne.useEffect(()=>{if(!n?.uid)return;const ge=wn($t(Oe,"friendships"),Ct("users","array-contains",n.uid),Ct("status","==","accepted")),me=kn(ge,Me=>{const P=Me.docs.map(C=>({id:C.id,...C.data(),friendId:C.data().users.find(N=>N!==n.uid)}));x(P)});return()=>me()},[n.uid]),ne.useEffect(()=>{d(t?"chat":"list")},[t]);const G=ge=>{s(ge)},ae=()=>{s(null)},ie=({count:ge})=>ge===0?null:A.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:ge}),le=({count:ge})=>ge===0?null:A.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[A.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),A.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]});return A.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&A.jsx(pL,{user:n,onClose:()=>g(!1)}),y&&A.jsx(bL,{currentUser:n,onClose:()=>T(!1),friendships:b}),A.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[A.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[A.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[A.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),A.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:A.jsx(LS,{size:20})})]}),A.jsxs("div",{className:"flex border-b border-gray-700/50",children:[A.jsxs("button",{onClick:()=>l("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[A.jsx(US,{className:"mx-auto"}),A.jsx(le,{count:F})]}),A.jsx("button",{onClick:()=>l("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:A.jsx(dd,{className:"mx-auto"})}),A.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:A.jsx(jS,{className:"mx-auto"})}),A.jsxs("button",{onClick:()=>l("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[A.jsx(VS,{className:"mx-auto"}),A.jsx(ie,{count:U})]})]}),A.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&A.jsx(FS,{currentUser:n,onSelectUser:G,onCreateGroup:()=>T(!0)}),a==="contacts"&&A.jsx(BS,{currentUser:n,onSelectUser:G}),a==="add"&&A.jsx(zS,{currentUser:n}),a==="requests"&&A.jsx(qS,{currentUser:n})]})]}),A.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[A.jsxs("div",{className:`flex-col h-full ${c==="list"?"flex":"hidden"}`,children:[A.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[A.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[A.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),A.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),A.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:A.jsx(LS,{size:20})})]}),A.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&A.jsx(FS,{currentUser:n,onSelectUser:G,onCreateGroup:()=>T(!0)}),a==="contacts"&&A.jsx(BS,{currentUser:n,onSelectUser:G}),a==="add"&&A.jsx(zS,{currentUser:n}),a==="requests"&&A.jsx(qS,{currentUser:n})]}),A.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[A.jsxs("button",{onClick:()=>l("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[A.jsx(US,{}),A.jsx(le,{count:F})]}),A.jsx("button",{onClick:()=>l("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:A.jsx(dd,{})}),A.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:A.jsx(jS,{})}),A.jsxs("button",{onClick:()=>l("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[A.jsx(VS,{}),A.jsx(ie,{count:U})]})]})]}),c==="chat"&&t&&A.jsx(HS,{currentUser:n,otherUser:t,onLeave:ae})]}),A.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?A.jsx(HS,{currentUser:n,otherUser:t,onLeave:ae}):A.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[A.jsx(nv,{size:60,className:"mb-4"}),A.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),A.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function AL(){return A.jsxs(A.Fragment,{children:[A.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),A.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:A.jsx(CL,{})})]})}const CL=()=>{const[n,e]=ne.useState(null),[t,s]=ne.useState(!0),[a,l]=ne.useState(null);oL(n),ne.useEffect(()=>{const d=Lx(ac,async p=>{if(p)e(p);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await kx(ac,__initial_auth_token):e(null)}catch(g){console.error("Falha na autenticação automática, mostrando tela de login.",g),e(null)}s(!1)});return()=>d()},[]),ne.useEffect(()=>{if(!n){l(null);return}const d=Ut(Oe,"users",n.uid),p=kn(d,g=>{g.exists()&&l({...n,...g.data()})});return()=>p()},[n]);const c=async()=>{if(n)try{const d=La(Ua,`/status/${n.uid}`);await Wd(d,{state:"offline",last_changed:Date.now()}),await mn(Ut(Oe,`/users/${n.uid}`),{state:"offline",last_changed:gl()}),await Ux(ac),e(null)}catch(d){console.error("Erro ao fazer logout:",d)}};return t?A.jsx(fL,{}):a?A.jsx(wL,{user:a,onLogout:c}):A.jsx(dL,{})};uI.createRoot(document.getElementById("root")).render(A.jsx(ne.StrictMode,{children:A.jsx(AL,{})}));
