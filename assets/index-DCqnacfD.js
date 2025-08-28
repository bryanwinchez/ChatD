(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Zp={exports:{}},qu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT;function iI(){if(vT)return qu;vT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return qu.Fragment=e,qu.jsx=t,qu.jsxs=t,qu}var ET;function sI(){return ET||(ET=1,Zp.exports=iI()),Zp.exports}var w=sI(),Jp={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function rI(){if(TT)return Oe;TT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,q={};function G(O,X,le){this.props=O,this.context=X,this.refs=q,this.updater=le||D}G.prototype.isReactComponent={},G.prototype.setState=function(O,X){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,X,"setState")},G.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function se(){}se.prototype=G.prototype;function ie(O,X,le){this.props=O,this.context=X,this.refs=q,this.updater=le||D}var re=ie.prototype=new se;re.constructor=ie,U(re,G.prototype),re.isPureReactComponent=!0;var pe=Array.isArray,de={H:null,A:null,T:null,S:null,V:null},Ne=Object.prototype.hasOwnProperty;function P(O,X,le,ne,_e,Me){return le=Me.ref,{$$typeof:n,type:O,key:X,ref:le!==void 0?le:null,props:Me}}function C(O,X){return P(O.type,X,void 0,void 0,void 0,O.props)}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function k(O){var X={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return X[le]})}var N=/\/+/g;function V(O,X){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):X.toString(36)}function R(){}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(R,R):(O.status="pending",O.then(function(X){O.status==="pending"&&(O.status="fulfilled",O.value=X)},function(X){O.status==="pending"&&(O.status="rejected",O.reason=X)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Xe(O,X,le,ne,_e){var Me=typeof O;(Me==="undefined"||Me==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(Me){case"bigint":case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case n:case e:be=!0;break;case y:return be=O._init,Xe(be(O._payload),X,le,ne,_e)}}if(be)return _e=_e(O),be=ne===""?"."+V(O,0):ne,pe(_e)?(le="",be!=null&&(le=be.replace(N,"$&/")+"/"),Xe(_e,X,le,"",function(Jn){return Jn})):_e!=null&&(x(_e)&&(_e=C(_e,le+(_e.key==null||O&&O.key===_e.key?"":(""+_e.key).replace(N,"$&/")+"/")+be)),X.push(_e)),1;be=0;var Vt=ne===""?".":ne+":";if(pe(O))for(var rt=0;rt<O.length;rt++)ne=O[rt],Me=Vt+V(ne,rt),be+=Xe(ne,X,le,Me,_e);else if(rt=b(O),typeof rt=="function")for(O=rt.call(O),rt=0;!(ne=O.next()).done;)ne=ne.value,Me=Vt+V(ne,rt++),be+=Xe(ne,X,le,Me,_e);else if(Me==="object"){if(typeof O.then=="function")return Xe(_t(O),X,le,ne,_e);throw X=String(O),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return be}function Y(O,X,le){if(O==null)return O;var ne=[],_e=0;return Xe(O,ne,"","",function(Me){return X.call(le,Me,_e++)}),ne}function J(O){if(O._status===-1){var X=O._result;X=X(),X.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=X)}if(O._status===1)return O._result.default;throw O._result}var ce=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function De(){}return Oe.Children={map:Y,forEach:function(O,X,le){Y(O,function(){X.apply(this,arguments)},le)},count:function(O){var X=0;return Y(O,function(){X++}),X},toArray:function(O){return Y(O,function(X){return X})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Oe.Component=G,Oe.Fragment=t,Oe.Profiler=a,Oe.PureComponent=ie,Oe.StrictMode=s,Oe.Suspense=p,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return de.H.useMemoCache(O)}},Oe.cache=function(O){return function(){return O.apply(null,arguments)}},Oe.cloneElement=function(O,X,le){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ne=U({},O.props),_e=O.key,Me=void 0;if(X!=null)for(be in X.ref!==void 0&&(Me=void 0),X.key!==void 0&&(_e=""+X.key),X)!Ne.call(X,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&X.ref===void 0||(ne[be]=X[be]);var be=arguments.length-2;if(be===1)ne.children=le;else if(1<be){for(var Vt=Array(be),rt=0;rt<be;rt++)Vt[rt]=arguments[rt+2];ne.children=Vt}return P(O.type,_e,void 0,void 0,Me,ne)},Oe.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Oe.createElement=function(O,X,le){var ne,_e={},Me=null;if(X!=null)for(ne in X.key!==void 0&&(Me=""+X.key),X)Ne.call(X,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(_e[ne]=X[ne]);var be=arguments.length-2;if(be===1)_e.children=le;else if(1<be){for(var Vt=Array(be),rt=0;rt<be;rt++)Vt[rt]=arguments[rt+2];_e.children=Vt}if(O&&O.defaultProps)for(ne in be=O.defaultProps,be)_e[ne]===void 0&&(_e[ne]=be[ne]);return P(O,Me,void 0,void 0,null,_e)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(O){return{$$typeof:d,render:O}},Oe.isValidElement=x,Oe.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:J}},Oe.memo=function(O,X){return{$$typeof:g,type:O,compare:X===void 0?null:X}},Oe.startTransition=function(O){var X=de.T,le={};de.T=le;try{var ne=O(),_e=de.S;_e!==null&&_e(le,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(De,ce)}catch(Me){ce(Me)}finally{de.T=X}},Oe.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()},Oe.use=function(O){return de.H.use(O)},Oe.useActionState=function(O,X,le){return de.H.useActionState(O,X,le)},Oe.useCallback=function(O,X){return de.H.useCallback(O,X)},Oe.useContext=function(O){return de.H.useContext(O)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(O,X){return de.H.useDeferredValue(O,X)},Oe.useEffect=function(O,X,le){var ne=de.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(O,X)},Oe.useId=function(){return de.H.useId()},Oe.useImperativeHandle=function(O,X,le){return de.H.useImperativeHandle(O,X,le)},Oe.useInsertionEffect=function(O,X){return de.H.useInsertionEffect(O,X)},Oe.useLayoutEffect=function(O,X){return de.H.useLayoutEffect(O,X)},Oe.useMemo=function(O,X){return de.H.useMemo(O,X)},Oe.useOptimistic=function(O,X){return de.H.useOptimistic(O,X)},Oe.useReducer=function(O,X,le){return de.H.useReducer(O,X,le)},Oe.useRef=function(O){return de.H.useRef(O)},Oe.useState=function(O){return de.H.useState(O)},Oe.useSyncExternalStore=function(O,X,le){return de.H.useSyncExternalStore(O,X,le)},Oe.useTransition=function(){return de.H.useTransition()},Oe.version="19.1.1",Oe}var bT;function __(){return bT||(bT=1,Jp.exports=rI()),Jp.exports}var te=__(),eg={exports:{}},Fu={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function aI(){return wT||(wT=1,(function(n){function e(Y,J){var ce=Y.length;Y.push(J);e:for(;0<ce;){var De=ce-1>>>1,O=Y[De];if(0<a(O,J))Y[De]=J,Y[ce]=O,ce=De;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var J=Y[0],ce=Y.pop();if(ce!==J){Y[0]=ce;e:for(var De=0,O=Y.length,X=O>>>1;De<X;){var le=2*(De+1)-1,ne=Y[le],_e=le+1,Me=Y[_e];if(0>a(ne,ce))_e<O&&0>a(Me,ne)?(Y[De]=Me,Y[_e]=ce,De=_e):(Y[De]=ne,Y[le]=ce,De=le);else if(_e<O&&0>a(Me,ce))Y[De]=Me,Y[_e]=ce,De=_e;else break e}}return J}function a(Y,J){var ce=Y.sortIndex-J.sortIndex;return ce!==0?ce:Y.id-J.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,b=3,D=!1,U=!1,q=!1,G=!1,se=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function pe(Y){for(var J=t(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=Y)s(g),J.sortIndex=J.expirationTime,e(p,J);else break;J=t(g)}}function de(Y){if(q=!1,pe(Y),!U)if(t(p)!==null)U=!0,Ne||(Ne=!0,V());else{var J=t(g);J!==null&&Xe(de,J.startTime-Y)}}var Ne=!1,P=-1,C=5,x=-1;function k(){return G?!0:!(n.unstable_now()-x<C)}function N(){if(G=!1,Ne){var Y=n.unstable_now();x=Y;var J=!0;try{e:{U=!1,q&&(q=!1,ie(P),P=-1),D=!0;var ce=b;try{t:{for(pe(Y),T=t(p);T!==null&&!(T.expirationTime>Y&&k());){var De=T.callback;if(typeof De=="function"){T.callback=null,b=T.priorityLevel;var O=De(T.expirationTime<=Y);if(Y=n.unstable_now(),typeof O=="function"){T.callback=O,pe(Y),J=!0;break t}T===t(p)&&s(p),pe(Y)}else s(p);T=t(p)}if(T!==null)J=!0;else{var X=t(g);X!==null&&Xe(de,X.startTime-Y),J=!1}}break e}finally{T=null,b=ce,D=!1}J=void 0}}finally{J?V():Ne=!1}}}var V;if(typeof re=="function")V=function(){re(N)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,_t=R.port2;R.port1.onmessage=N,V=function(){_t.postMessage(null)}}else V=function(){se(N,0)};function Xe(Y,J){P=se(function(){Y(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_next=function(Y){switch(b){case 1:case 2:case 3:var J=3;break;default:J=b}var ce=b;b=J;try{return Y()}finally{b=ce}},n.unstable_requestPaint=function(){G=!0},n.unstable_runWithPriority=function(Y,J){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ce=b;b=Y;try{return J()}finally{b=ce}},n.unstable_scheduleCallback=function(Y,J,ce){var De=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?De+ce:De):ce=De,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ce+O,Y={id:y++,callback:J,priorityLevel:Y,startTime:ce,expirationTime:O,sortIndex:-1},ce>De?(Y.sortIndex=ce,e(g,Y),t(p)===null&&Y===t(g)&&(q?(ie(P),P=-1):q=!0,Xe(de,ce-De))):(Y.sortIndex=O,e(p,Y),U||D||(U=!0,Ne||(Ne=!0,V()))),Y},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(Y){var J=b;return function(){var ce=b;b=J;try{return Y.apply(this,arguments)}finally{b=ce}}}})(ng)),ng}var ST;function oI(){return ST||(ST=1,tg.exports=aI()),tg.exports}var ig={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function lI(){if(AT)return En;AT=1;var n=__();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},En.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},En.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},En.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},En.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:D}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:b,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},En.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},En.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},En.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},En.requestFormReset=function(p){s.d.r(p)},En.unstable_batchedUpdates=function(p,g){return p(g)},En.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},En.useFormStatus=function(){return c.H.useHostTransitionStatus()},En.version="19.1.1",En}var CT;function uI(){if(CT)return ig.exports;CT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ig.exports=lI(),ig.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT;function cI(){if(RT)return Fu;RT=1;var n=oI(),e=__(),t=uI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),se=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),re=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function V(i){return i===null||typeof i!="object"?null:(i=N&&i[N]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function _t(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case G:return"Profiler";case q:return"StrictMode";case de:return"Suspense";case Ne:return"SuspenseList";case x:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case D:return"Portal";case re:return(i.displayName||"Context")+".Provider";case ie:return(i._context.displayName||"Context")+".Consumer";case pe:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:_t(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return _t(i(r))}catch{}}return null}var Xe=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},De=[],O=-1;function X(i){return{current:i}}function le(i){0>O||(i.current=De[O],De[O]=null,O--)}function ne(i,r){O++,De[O]=i.current,i.current=r}var _e=X(null),Me=X(null),be=X(null),Vt=X(null);function rt(i,r){switch(ne(be,r),ne(Me,i),ne(_e,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?YE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=YE(r),i=KE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}le(_e),ne(_e,i)}function Jn(){le(_e),le(Me),le(be)}function Ri(i){i.memoizedState!==null&&ne(Vt,i);var r=_e.current,o=KE(r,i.type);r!==o&&(ne(Me,i),ne(_e,o))}function mi(i){Me.current===i&&(le(_e),le(Me)),Vt.current===i&&(le(Vt),Lu._currentValue=ce)}var is=Object.prototype.hasOwnProperty,ss=n.unstable_scheduleCallback,rs=n.unstable_cancelCallback,$r=n.unstable_shouldYield,eo=n.unstable_requestPaint,kn=n.unstable_now,$s=n.unstable_getCurrentPriorityLevel,as=n.unstable_ImmediatePriority,Ii=n.unstable_UserBlockingPriority,os=n.unstable_NormalPriority,me=n.unstable_LowPriority,Ce=n.unstable_IdlePriority,qe=n.log,cn=n.unstable_setDisableYieldValue,dt=null,Ge=null;function yt(i){if(typeof qe=="function"&&cn(i),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(dt,i)}catch{}}var Jt=Math.clz32?Math.clz32:Xr,Vl=Math.log,em=Math.LN2;function Xr(i){return i>>>=0,i===0?32:31-(Vl(i)/em|0)|0}var Wr=256,Zr=4194304;function pi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function to(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=pi(u):(E&=S,E!==0?f=pi(E):o||(o=S&~i,o!==0&&(f=pi(o))))):(S=u&~m,S!==0?f=pi(S):E!==0?f=pi(E):o||(o=u&~i,o!==0&&(f=pi(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Jr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Ll(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(){var i=Wr;return Wr<<=1,(Wr&4194048)===0&&(Wr=256),i}function jl(){var i=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),i}function ls(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function us(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function zl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,I=i.expirationTimes,B=i.hiddenUpdates;for(o=E&~o;0<o;){var K=31-Jt(o),Z=1<<K;S[K]=0,I[K]=-1;var F=B[K];if(F!==null)for(B[K]=null,K=0;K<F.length;K++){var H=F[K];H!==null&&(H.lane&=-536870913)}o&=~Z}u!==0&&xi(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function xi(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-Jt(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Bl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-Jt(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Xs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function no(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ws(){var i=J.p;return i!==0?i:(i=window.event,i===void 0?32:dT(i.type))}function Gc(i,r){var o=J.p;try{return J.p=i,r()}finally{J.p=o}}var Tt=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Tt,Lt="__reactProps$"+Tt,ei="__reactContainer$"+Tt,ql="__reactEvents$"+Tt,tm="__reactListeners$"+Tt,Zs="__reactHandles$"+Tt,Qc="__reactResources$"+Tt,ea="__reactMarker$"+Tt;function Js(i){delete i[Qt],delete i[Lt],delete i[ql],delete i[tm],delete i[Zs]}function cs(i){var r=i[Qt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[ei]||o[Qt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=ZE(i);i!==null;){if(o=i[Qt])return o;i=ZE(i)}return r}i=o,o=i.parentNode}return null}function Ni(i){if(i=i[Qt]||i[ei]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Di(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function Rn(i){var r=i[Qc];return r||(r=i[Qc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nt(i){i[ea]=!0}var Fl=new Set,io={};function gi(i,r){hs(i,r),hs(i+"Capture",r)}function hs(i,r){for(io[i]=r,i=0;i<r.length;i++)Fl.add(r[i])}var Yc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kc={},ta={};function $c(i){return is.call(ta,i)?!0:is.call(Kc,i)?!1:Yc.test(i)?ta[i]=!0:(Kc[i]=!0,!1)}function er(i,r,o){if($c(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Oi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function hn(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var na,Xc;function fs(i){if(na===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);na=r&&r[1]||"",Xc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+na+i+Xc}var so=!1;function ro(i,r){if(!i||so)return"";so=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(H){var F=H}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(H){F=H}i.call(Z.prototype)}}else{try{throw Error()}catch(H){F=H}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(H){if(H&&F&&typeof H.stack=="string")return[H.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var I=E.split(`
`),B=S.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===B.length)for(u=I.length-1,f=B.length-1;1<=u&&0<=f&&I[u]!==B[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==B[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==B[f]){var K=`
`+I[u].replace(" at new "," at ");return i.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",i.displayName)),K}while(1<=u&&0<=f);break}}}finally{so=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?fs(o):""}function Hl(i){switch(i.tag){case 26:case 27:case 5:return fs(i.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 15:return ro(i.type,!1);case 11:return ro(i.type.render,!1);case 1:return ro(i.type,!0);case 31:return fs("Activity");default:return""}}function ao(i){try{var r="";do r+=Hl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function In(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Gl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function nm(i){var r=Gl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function oo(i){i._valueTracker||(i._valueTracker=nm(i))}function Ql(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Gl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function ia(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var im=/[\n"\\]/g;function Ut(i){return i.replace(im,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Fn(i,r,o,u,f,m,E,S){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+In(r)):i.value!==""+In(r)&&(i.value=""+In(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?tr(i,E,In(r)):o!=null?tr(i,E,In(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+In(S):i.removeAttribute("name")}function sa(i,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+In(o):"",r=r!=null?""+In(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function tr(i,r,o){r==="number"&&ia(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function ds(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+In(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function at(i,r,o){if(r!=null&&(r=""+In(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+In(o):""}function ra(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(Xe(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=In(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function ti(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var aa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||aa.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Yl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Wc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Wc(i,m,r[m])}function Kl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lo(i){return rm.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ms=null;function ni(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ps=null,gs=null;function $l(i){var r=Ni(i);if(r&&(i=r.stateNode)){var o=i[Lt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Fn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ut(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Lt]||null;if(!f)throw Error(s(90));Fn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Ql(u)}break e;case"textarea":at(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ds(i,!!o.multiple,r,!1)}}}var Mi=!1;function Zc(i,r,o){if(Mi)return i(r,o);Mi=!0;try{var u=i(r);return u}finally{if(Mi=!1,(ps!==null||gs!==null)&&(Gh(),ps&&(r=ps,i=gs,gs=ps=null,$l(r),i)))for(r=0;r<i.length;r++)$l(i[r])}}function oa(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Lt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=!1;if(_i)try{var la={};Object.defineProperty(la,"passive",{get:function(){ii=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{ii=!1}var ki=null,nr=null,_s=null;function Xl(){if(_s)return _s;var i,r=nr,o=r.length,u,f="value"in ki?ki.value:ki.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return _s=f.slice(i,1<u?1-u:void 0)}function Pi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Vi(){return!0}function Wl(){return!1}function en(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vi:Wl,this.isPropagationStopped=Wl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),r}var et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=en(et),ua=y({},et,{view:0,detail:0}),Jc=en(ua),co,ho,Li,ca=y({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Li&&(Li&&i.type==="mousemove"?(co=i.screenX-Li.screenX,ho=i.screenY-Li.screenY):ho=co=0,Li=i),co)},movementY:function(i){return"movementY"in i?i.movementY:ho}}),si=en(ca),eh=y({},ca,{dataTransfer:0}),am=en(eh),ha=y({},ua,{relatedTarget:0}),fo=en(ha),Zl=y({},et,{animationName:0,elapsedTime:0,pseudoElement:0}),mo=en(Zl),th=y({},et,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),po=en(th),om=y({},et,{data:0}),Jl=en(om),fa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ih={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eu(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=ih[i])?!!r[i]:!1}function da(){return eu}var sh=y({},ua,{key:function(i){if(i.key){var r=fa[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Pi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?nh[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(i){return i.type==="keypress"?Pi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Pi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),go=en(sh),rh=y({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=en(rh),ys=y({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),ah=en(ys),oh=y({},et,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=en(oh),uh=y({},ca,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),_o=en(uh),xn=y({},et,{newState:0,oldState:0}),ch=en(xn),hh=[9,13,27,32],Ui=_i&&"CompositionEvent"in window,h=null;_i&&"documentMode"in document&&(h=document.documentMode);var _=_i&&"TextEvent"in window&&!h,v=_i&&(!Ui||h&&8<h&&11>=h),A=" ",j=!1;function Q(i,r){switch(i){case"keyup":return hh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Qe=!1;function Yt(i,r){switch(i){case"compositionend":return ae(r);case"keypress":return r.which!==32?null:(j=!0,A);case"textInput":return i=r.data,i===A&&j?null:i;default:return null}}function Ye(i,r){if(Qe)return i==="compositionend"||!Ui&&Q(i,r)?(i=Xl(),_s=nr=ki=null,Qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!tn[i.type]:r==="textarea"}function vs(i,r,o,u){ps?gs?gs.push(u):gs=[u]:ps=u,r=Wh(r,"onChange"),0<r.length&&(o=new uo("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var fn=null,ji=null;function nu(i){qE(i,0)}function fh(i){var r=Di(i);if(Ql(r))return i}function uv(i,r){if(i==="change")return r}var cv=!1;if(_i){var lm;if(_i){var um="oninput"in document;if(!um){var hv=document.createElement("div");hv.setAttribute("oninput","return;"),um=typeof hv.oninput=="function"}lm=um}else lm=!1;cv=lm&&(!document.documentMode||9<document.documentMode)}function fv(){fn&&(fn.detachEvent("onpropertychange",dv),ji=fn=null)}function dv(i){if(i.propertyName==="value"&&fh(ji)){var r=[];vs(r,ji,i,ni(i)),Zc(nu,r)}}function MC(i,r,o){i==="focusin"?(fv(),fn=r,ji=o,fn.attachEvent("onpropertychange",dv)):i==="focusout"&&fv()}function kC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return fh(ji)}function PC(i,r){if(i==="click")return fh(r)}function VC(i,r){if(i==="input"||i==="change")return fh(r)}function LC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Hn=typeof Object.is=="function"?Object.is:LC;function iu(i,r){if(Hn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!is.call(r,f)||!Hn(i[f],r[f]))return!1}return!0}function mv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function pv(i,r){var o=mv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=mv(o)}}function gv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?gv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function _v(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=ia(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=ia(i.document)}return r}function cm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var UC=_i&&"documentMode"in document&&11>=document.documentMode,yo=null,hm=null,su=null,fm=!1;function yv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fm||yo==null||yo!==ia(u)||(u=yo,"selectionStart"in u&&cm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),su&&iu(su,u)||(su=u,u=Wh(hm,"onSelect"),0<u.length&&(r=new uo("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=yo)))}function ma(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var vo={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},dm={},vv={};_i&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function pa(i){if(dm[i])return dm[i];if(!vo[i])return i;var r=vo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in vv)return dm[i]=r[o];return i}var Ev=pa("animationend"),Tv=pa("animationiteration"),bv=pa("animationstart"),jC=pa("transitionrun"),zC=pa("transitionstart"),BC=pa("transitioncancel"),wv=pa("transitionend"),Sv=new Map,mm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mm.push("scrollEnd");function yi(i,r){Sv.set(i,r),gi(r,[i])}var Av=new WeakMap;function ri(i,r){if(typeof i=="object"&&i!==null){var o=Av.get(i);return o!==void 0?o:(r={value:i,source:r,stack:ao(r)},Av.set(i,r),r)}return{value:i,source:r,stack:ao(r)}}var ai=[],Eo=0,pm=0;function dh(){for(var i=Eo,r=pm=Eo=0;r<i;){var o=ai[r];ai[r++]=null;var u=ai[r];ai[r++]=null;var f=ai[r];ai[r++]=null;var m=ai[r];if(ai[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Cv(o,f,m)}}function mh(i,r,o,u){ai[Eo++]=i,ai[Eo++]=r,ai[Eo++]=o,ai[Eo++]=u,pm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function gm(i,r,o,u){return mh(i,r,o,u),ph(i)}function To(i,r){return mh(i,null,null,r),ph(i)}function Cv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-Jt(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function ph(i){if(50<xu)throw xu=0,bp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var bo={};function qC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(i,r,o,u){return new qC(i,r,o,u)}function _m(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Es(i,r){var o=i.alternate;return o===null?(o=Gn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Rv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function gh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")_m(i)&&(E=1);else if(typeof i=="string")E=HR(i,o,_e.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case x:return i=Gn(31,o,r,f),i.elementType=x,i.lanes=m,i;case U:return ga(o.children,f,m,r);case q:E=8,f|=24;break;case G:return i=Gn(12,o,r,f|2),i.elementType=G,i.lanes=m,i;case de:return i=Gn(13,o,r,f),i.elementType=de,i.lanes=m,i;case Ne:return i=Gn(19,o,r,f),i.elementType=Ne,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case se:case re:E=10;break e;case ie:E=9;break e;case pe:E=11;break e;case P:E=14;break e;case C:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Gn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ga(i,r,o,u){return i=Gn(7,i,u,r),i.lanes=o,i}function ym(i,r,o){return i=Gn(6,i,null,r),i.lanes=o,i}function vm(i,r,o){return r=Gn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var wo=[],So=0,_h=null,yh=0,oi=[],li=0,_a=null,Ts=1,bs="";function ya(i,r){wo[So++]=yh,wo[So++]=_h,_h=i,yh=r}function Iv(i,r,o){oi[li++]=Ts,oi[li++]=bs,oi[li++]=_a,_a=i;var u=Ts;i=bs;var f=32-Jt(u)-1;u&=~(1<<f),o+=1;var m=32-Jt(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Ts=1<<32-Jt(r)+f|o<<f|u,bs=m+i}else Ts=1<<m|o<<f|u,bs=i}function Em(i){i.return!==null&&(ya(i,1),Iv(i,1,0))}function Tm(i){for(;i===_h;)_h=wo[--So],wo[So]=null,yh=wo[--So],wo[So]=null;for(;i===_a;)_a=oi[--li],oi[li]=null,bs=oi[--li],oi[li]=null,Ts=oi[--li],oi[li]=null}var Nn=null,Ct=null,Ze=!1,va=null,zi=!1,bm=Error(s(519));function Ea(i){var r=Error(s(418,""));throw ou(ri(r,i)),bm}function xv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Qt]=i,r[Lt]=u,o){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<Du.length;o++)ze(Du[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":ze("invalid",r),sa(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),oo(r);break;case"select":ze("invalid",r);break;case"textarea":ze("invalid",r),ra(r,u.value,u.defaultValue,u.children),oo(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||QE(r.textContent,o)?(u.popover!=null&&(ze("beforetoggle",r),ze("toggle",r)),u.onScroll!=null&&ze("scroll",r),u.onScrollEnd!=null&&ze("scrollend",r),u.onClick!=null&&(r.onclick=Zh),r=!0):r=!1,r||Ea(i)}function Nv(i){for(Nn=i.return;Nn;)switch(Nn.tag){case 5:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Nn=Nn.return}}function ru(i){if(i!==Nn)return!1;if(!Ze)return Nv(i),Ze=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Up(i.type,i.memoizedProps)),o=!o),o&&Ct&&Ea(i),Nv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){Ct=Ei(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}Ct=null}}else r===27?(r=Ct,yr(i.type)?(i=qp,qp=null,Ct=i):Ct=r):Ct=Nn?Ei(i.stateNode.nextSibling):null;return!0}function au(){Ct=Nn=null,Ze=!1}function Dv(){var i=va;return i!==null&&(Ln===null?Ln=i:Ln.push.apply(Ln,i),va=null),i}function ou(i){va===null?va=[i]:va.push(i)}var wm=X(null),Ta=null,ws=null;function ir(i,r,o){ne(wm,r._currentValue),r._currentValue=o}function Ss(i){i._currentValue=wm.current,le(wm)}function Sm(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Am(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var I=0;I<r.length;I++)if(S.context===r[I]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Sm(m.return,o,i),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Sm(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function lu(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;Hn(f.pendingProps.value,E.value)||(i!==null?i.push(S):i=[S])}}else if(f===Vt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Lu):i=[Lu])}f=f.return}i!==null&&Am(r,i,o,u),r.flags|=262144}function vh(i){for(i=i.firstContext;i!==null;){if(!Hn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ba(i){Ta=i,ws=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function vn(i){return Ov(Ta,i)}function Eh(i,r){return Ta===null&&ba(i),Ov(i,r)}function Ov(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ws===null){if(i===null)throw Error(s(308));ws=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else ws=ws.next=r;return o}var FC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},HC=n.unstable_scheduleCallback,GC=n.unstable_NormalPriority,$t={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cm(){return{controller:new FC,data:new Map,refCount:0}}function uu(i){i.refCount--,i.refCount===0&&HC(GC,function(){i.controller.abort()})}var cu=null,Rm=0,Ao=0,Co=null;function QC(i,r){if(cu===null){var o=cu=[];Rm=0,Ao=xp(),Co={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Rm++,r.then(Mv,Mv),r}function Mv(){if(--Rm===0&&cu!==null){Co!==null&&(Co.status="fulfilled");var i=cu;cu=null,Ao=0,Co=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function YC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var kv=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&QC(i,r),kv!==null&&kv(i,r)};var wa=X(null);function Im(){var i=wa.current;return i!==null?i:mt.pooledCache}function Th(i,r){r===null?ne(wa,wa.current):ne(wa,r.pool)}function Pv(){var i=Im();return i===null?null:{parent:$t._currentValue,pool:i}}var hu=Error(s(460)),Vv=Error(s(474)),bh=Error(s(542)),xm={then:function(){}};function Lv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function wh(){}function Uv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(wh,wh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,zv(i),i;default:if(typeof r.status=="string")r.then(wh,wh);else{if(i=mt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,zv(i),i}throw fu=r,hu}}var fu=null;function jv(){if(fu===null)throw Error(s(459));var i=fu;return fu=null,i}function zv(i){if(i===hu||i===bh)throw Error(s(483))}var sr=!1;function Nm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function rr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function ar(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(nt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=ph(i),Cv(i,null,o),r}return mh(i,u,r,o),ph(i)}function du(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Bl(i,o)}}function Om(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Mm=!1;function mu(){if(Mm){var i=Co;if(i!==null)throw i}}function pu(i,r,o,u){Mm=!1;var f=i.updateQueue;sr=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var I=S,B=I.next;I.next=null,E===null?m=B:E.next=B,E=I;var K=i.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=B:S.next=B,K.lastBaseUpdate=I))}if(m!==null){var Z=f.baseState;E=0,K=B=I=null,S=m;do{var F=S.lane&-536870913,H=F!==S.lane;if(H?(Ke&F)===F:(u&F)===F){F!==0&&F===Ao&&(Mm=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var we=i,ve=S;F=r;var ut=o;switch(ve.tag){case 1:if(we=ve.payload,typeof we=="function"){Z=we.call(ut,Z,F);break e}Z=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=ve.payload,F=typeof we=="function"?we.call(ut,Z,F):we,F==null)break e;Z=y({},Z,F);break e;case 2:sr=!0}}F=S.callback,F!==null&&(i.flags|=64,H&&(i.flags|=8192),H=f.callbacks,H===null?f.callbacks=[F]:H.push(F))}else H={lane:F,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(B=K=H,I=Z):K=K.next=H,E|=F;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;H=S,S=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);K===null&&(I=Z),f.baseState=I,f.firstBaseUpdate=B,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),mr|=E,i.lanes=E,i.memoizedState=Z}}function Bv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function qv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Bv(o[i],r)}var Ro=X(null),Sh=X(0);function Fv(i,r){i=Ds,ne(Sh,i),ne(Ro,r),Ds=i|r.baseLanes}function km(){ne(Sh,Ds),ne(Ro,Ro.current)}function Pm(){Ds=Sh.current,le(Ro),le(Sh)}var or=0,ke=null,ot=null,jt=null,Ah=!1,Io=!1,Sa=!1,Ch=0,gu=0,xo=null,KC=0;function Dt(){throw Error(s(321))}function Vm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Hn(i[o],r[o]))return!1;return!0}function Lm(i,r,o,u,f,m){return or=m,ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?C0:R0,Sa=!1,m=o(u,f),Sa=!1,Io&&(m=Gv(r,o,u,f)),Hv(i),m}function Hv(i){Y.H=Oh;var r=ot!==null&&ot.next!==null;if(or=0,jt=ot=ke=null,Ah=!1,gu=0,xo=null,r)throw Error(s(300));i===null||nn||(i=i.dependencies,i!==null&&vh(i)&&(nn=!0))}function Gv(i,r,o,u){ke=i;var f=0;do{if(Io&&(xo=null),gu=0,Io=!1,25<=f)throw Error(s(301));if(f+=1,jt=ot=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Y.H=tR,m=r(o,u)}while(Io);return m}function $C(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?_u(r):r,i=i.useState()[0],(ot!==null?ot.memoizedState:null)!==i&&(ke.flags|=1024),r}function Um(){var i=Ch!==0;return Ch=0,i}function jm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function zm(i){if(Ah){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ah=!1}or=0,jt=ot=ke=null,Io=!1,gu=Ch=0,xo=null}function Pn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?ke.memoizedState=jt=i:jt=jt.next=i,jt}function zt(){if(ot===null){var i=ke.alternate;i=i!==null?i.memoizedState:null}else i=ot.next;var r=jt===null?ke.memoizedState:jt.next;if(r!==null)jt=r,ot=i;else{if(i===null)throw ke.alternate===null?Error(s(467)):Error(s(310));ot=i,i={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},jt===null?ke.memoizedState=jt=i:jt=jt.next=i}return jt}function Bm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _u(i){var r=gu;return gu+=1,xo===null&&(xo=[]),i=Uv(xo,i,r),r=ke,(jt===null?r.memoizedState:jt.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?C0:R0),i}function Rh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return _u(i);if(i.$$typeof===re)return vn(i)}throw Error(s(438,String(i)))}function qm(i){var r=null,o=ke.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=ke.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Bm(),ke.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=k;return r.index++,o}function As(i,r){return typeof r=="function"?r(i):r}function Ih(i){var r=zt();return Fm(r,ot,i)}function Fm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=E=null,I=null,B=r,K=!1;do{var Z=B.lane&-536870913;if(Z!==B.lane?(Ke&Z)===Z:(or&Z)===Z){var F=B.revertLane;if(F===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Z===Ao&&(K=!0);else if((or&F)===F){B=B.next,F===Ao&&(K=!0);continue}else Z={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(S=I=Z,E=m):I=I.next=Z,ke.lanes|=F,mr|=F;Z=B.action,Sa&&o(m,Z),m=B.hasEagerState?B.eagerState:o(m,Z)}else F={lane:Z,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(S=I=F,E=m):I=I.next=F,ke.lanes|=Z,mr|=Z;B=B.next}while(B!==null&&B!==r);if(I===null?E=m:I.next=S,!Hn(m,i.memoizedState)&&(nn=!0,K&&(o=Co,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=I,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Hm(i){var r=zt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Hn(m,r.memoizedState)||(nn=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Qv(i,r,o){var u=ke,f=zt(),m=Ze;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Hn((ot||f).memoizedState,o);E&&(f.memoizedState=o,nn=!0),f=f.queue;var S=$v.bind(null,u,f,i);if(yu(2048,8,S,[i]),f.getSnapshot!==r||E||jt!==null&&jt.memoizedState.tag&1){if(u.flags|=2048,No(9,xh(),Kv.bind(null,u,f,o,r),null),mt===null)throw Error(s(349));m||(or&124)!==0||Yv(u,r,o)}return o}function Yv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=ke.updateQueue,r===null?(r=Bm(),ke.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Kv(i,r,o,u){r.value=o,r.getSnapshot=u,Xv(r)&&Wv(i)}function $v(i,r,o){return o(function(){Xv(r)&&Wv(i)})}function Xv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Hn(i,o)}catch{return!0}}function Wv(i){var r=To(i,2);r!==null&&Xn(r,i,2)}function Gm(i){var r=Pn();if(typeof i=="function"){var o=i;if(i=o(),Sa){yt(!0);try{o()}finally{yt(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:i},r}function Zv(i,r,o,u){return i.baseState=o,Fm(i,ot,typeof u=="function"?u:As)}function XC(i,r,o,u,f){if(Dh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Y.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Jv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Jv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Y.T,E={};Y.T=E;try{var S=o(f,u),I=Y.S;I!==null&&I(E,S),e0(i,r,S)}catch(B){Qm(i,r,B)}finally{Y.T=m}}else try{m=o(f,u),e0(i,r,m)}catch(B){Qm(i,r,B)}}function e0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){t0(i,r,u)},function(u){return Qm(i,r,u)}):t0(i,r,o)}function t0(i,r,o){r.status="fulfilled",r.value=o,n0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Jv(i,o)))}function Qm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,n0(r),r=r.next;while(r!==u)}i.action=null}function n0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function i0(i,r){return r}function s0(i,r){if(Ze){var o=mt.formState;if(o!==null){e:{var u=ke;if(Ze){if(Ct){t:{for(var f=Ct,m=zi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ct=Ei(f.nextSibling),u=f.data==="F!";break e}}Ea(u)}u=!1}u&&(r=o[0])}}return o=Pn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:r},o.queue=u,o=w0.bind(null,ke,u),u.dispatch=o,u=Gm(!1),m=Wm.bind(null,ke,!1,u.queue),u=Pn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=XC.bind(null,ke,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function r0(i){var r=zt();return a0(r,ot,i)}function a0(i,r,o){if(r=Fm(i,r,i0)[0],i=Ih(As)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=_u(r)}catch(E){throw E===hu?bh:E}else u=r;r=zt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(ke.flags|=2048,No(9,xh(),WC.bind(null,f,o),null)),[u,m,i]}function WC(i,r){i.action=r}function o0(i){var r=zt(),o=ot;if(o!==null)return a0(r,o,i);zt(),r=r.memoizedState,o=zt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function No(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=ke.updateQueue,r===null&&(r=Bm(),ke.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function xh(){return{destroy:void 0,resource:void 0}}function l0(){return zt().memoizedState}function Nh(i,r,o,u){var f=Pn();u=u===void 0?null:u,ke.flags|=i,f.memoizedState=No(1|r,xh(),o,u)}function yu(i,r,o,u){var f=zt();u=u===void 0?null:u;var m=f.memoizedState.inst;ot!==null&&u!==null&&Vm(u,ot.memoizedState.deps)?f.memoizedState=No(r,m,o,u):(ke.flags|=i,f.memoizedState=No(1|r,m,o,u))}function u0(i,r){Nh(8390656,8,i,r)}function c0(i,r){yu(2048,8,i,r)}function h0(i,r){return yu(4,2,i,r)}function f0(i,r){return yu(4,4,i,r)}function d0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function m0(i,r,o){o=o!=null?o.concat([i]):null,yu(4,4,d0.bind(null,r,i),o)}function Ym(){}function p0(i,r){var o=zt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Vm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function g0(i,r){var o=zt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Vm(r,u[1]))return u[0];if(u=i(),Sa){yt(!0);try{i()}finally{yt(!1)}}return o.memoizedState=[u,r],u}function Km(i,r,o){return o===void 0||(or&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=vE(),ke.lanes|=i,mr|=i,o)}function _0(i,r,o,u){return Hn(o,r)?o:Ro.current!==null?(i=Km(i,o,u),Hn(i,r)||(nn=!0),i):(or&42)===0?(nn=!0,i.memoizedState=o):(i=vE(),ke.lanes|=i,mr|=i,r)}function y0(i,r,o,u,f){var m=J.p;J.p=m!==0&&8>m?m:8;var E=Y.T,S={};Y.T=S,Wm(i,!1,r,o);try{var I=f(),B=Y.S;if(B!==null&&B(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=YC(I,u);vu(i,r,K,$n(i))}else vu(i,r,u,$n(i))}catch(Z){vu(i,r,{then:function(){},status:"rejected",reason:Z},$n())}finally{J.p=m,Y.T=E}}function ZC(){}function $m(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=v0(i).queue;y0(i,f,r,ce,o===null?ZC:function(){return E0(i),o(u)})}function v0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:ce},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function E0(i){var r=v0(i).next.queue;vu(i,r,{},$n())}function Xm(){return vn(Lu)}function T0(){return zt().memoizedState}function b0(){return zt().memoizedState}function JC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=$n();i=rr(o);var u=ar(r,i,o);u!==null&&(Xn(u,r,o),du(u,r,o)),r={cache:Cm()},i.payload=r;return}r=r.return}}function eR(i,r,o){var u=$n();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Dh(i)?S0(r,o):(o=gm(i,r,o,u),o!==null&&(Xn(o,i,u),A0(o,r,u)))}function w0(i,r,o){var u=$n();vu(i,r,o,u)}function vu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Dh(i))S0(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,Hn(S,E))return mh(i,r,f,0),mt===null&&dh(),!1}catch{}finally{}if(o=gm(i,r,f,u),o!==null)return Xn(o,i,u),A0(o,r,u),!0}return!1}function Wm(i,r,o,u){if(u={lane:2,revertLane:xp(),action:u,hasEagerState:!1,eagerState:null,next:null},Dh(i)){if(r)throw Error(s(479))}else r=gm(i,o,u,2),r!==null&&Xn(r,i,2)}function Dh(i){var r=i.alternate;return i===ke||r!==null&&r===ke}function S0(i,r){Io=Ah=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function A0(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Bl(i,o)}}var Oh={readContext:vn,use:Rh,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},C0={readContext:vn,use:Rh,useCallback:function(i,r){return Pn().memoizedState=[i,r===void 0?null:r],i},useContext:vn,useEffect:u0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Nh(4194308,4,d0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Nh(4194308,4,i,r)},useInsertionEffect:function(i,r){Nh(4,2,i,r)},useMemo:function(i,r){var o=Pn();r=r===void 0?null:r;var u=i();if(Sa){yt(!0);try{i()}finally{yt(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Pn();if(o!==void 0){var f=o(r);if(Sa){yt(!0);try{o(r)}finally{yt(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=eR.bind(null,ke,i),[u.memoizedState,i]},useRef:function(i){var r=Pn();return i={current:i},r.memoizedState=i},useState:function(i){i=Gm(i);var r=i.queue,o=w0.bind(null,ke,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Ym,useDeferredValue:function(i,r){var o=Pn();return Km(o,i,r)},useTransition:function(){var i=Gm(!1);return i=y0.bind(null,ke,i.queue,!0,!1),Pn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=ke,f=Pn();if(Ze){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),mt===null)throw Error(s(349));(Ke&124)!==0||Yv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,u0($v.bind(null,u,m,i),[i]),u.flags|=2048,No(9,xh(),Kv.bind(null,u,m,o,r),null),o},useId:function(){var i=Pn(),r=mt.identifierPrefix;if(Ze){var o=bs,u=Ts;o=(u&~(1<<32-Jt(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=Ch++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=KC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Xm,useFormState:s0,useActionState:s0,useOptimistic:function(i){var r=Pn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Wm.bind(null,ke,!0,o),o.dispatch=r,[i,r]},useMemoCache:qm,useCacheRefresh:function(){return Pn().memoizedState=JC.bind(null,ke)}},R0={readContext:vn,use:Rh,useCallback:p0,useContext:vn,useEffect:c0,useImperativeHandle:m0,useInsertionEffect:h0,useLayoutEffect:f0,useMemo:g0,useReducer:Ih,useRef:l0,useState:function(){return Ih(As)},useDebugValue:Ym,useDeferredValue:function(i,r){var o=zt();return _0(o,ot.memoizedState,i,r)},useTransition:function(){var i=Ih(As)[0],r=zt().memoizedState;return[typeof i=="boolean"?i:_u(i),r]},useSyncExternalStore:Qv,useId:T0,useHostTransitionStatus:Xm,useFormState:r0,useActionState:r0,useOptimistic:function(i,r){var o=zt();return Zv(o,ot,i,r)},useMemoCache:qm,useCacheRefresh:b0},tR={readContext:vn,use:Rh,useCallback:p0,useContext:vn,useEffect:c0,useImperativeHandle:m0,useInsertionEffect:h0,useLayoutEffect:f0,useMemo:g0,useReducer:Hm,useRef:l0,useState:function(){return Hm(As)},useDebugValue:Ym,useDeferredValue:function(i,r){var o=zt();return ot===null?Km(o,i,r):_0(o,ot.memoizedState,i,r)},useTransition:function(){var i=Hm(As)[0],r=zt().memoizedState;return[typeof i=="boolean"?i:_u(i),r]},useSyncExternalStore:Qv,useId:T0,useHostTransitionStatus:Xm,useFormState:o0,useActionState:o0,useOptimistic:function(i,r){var o=zt();return ot!==null?Zv(o,ot,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:qm,useCacheRefresh:b0},Do=null,Eu=0;function Mh(i){var r=Eu;return Eu+=1,Do===null&&(Do=[]),Uv(Do,i,r)}function Tu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function kh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function I0(i){var r=i._init;return r(i._payload)}function x0(i){function r(L,M){if(i){var z=L.deletions;z===null?(L.deletions=[M],L.flags|=16):z.push(M)}}function o(L,M){if(!i)return null;for(;M!==null;)r(L,M),M=M.sibling;return null}function u(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function f(L,M){return L=Es(L,M),L.index=0,L.sibling=null,L}function m(L,M,z){return L.index=z,i?(z=L.alternate,z!==null?(z=z.index,z<M?(L.flags|=67108866,M):z):(L.flags|=67108866,M)):(L.flags|=1048576,M)}function E(L){return i&&L.alternate===null&&(L.flags|=67108866),L}function S(L,M,z,W){return M===null||M.tag!==6?(M=ym(z,L.mode,W),M.return=L,M):(M=f(M,z),M.return=L,M)}function I(L,M,z,W){var fe=z.type;return fe===U?K(L,M,z.props.children,W,z.key):M!==null&&(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===C&&I0(fe)===M.type)?(M=f(M,z.props),Tu(M,z),M.return=L,M):(M=gh(z.type,z.key,z.props,null,L.mode,W),Tu(M,z),M.return=L,M)}function B(L,M,z,W){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=vm(z,L.mode,W),M.return=L,M):(M=f(M,z.children||[]),M.return=L,M)}function K(L,M,z,W,fe){return M===null||M.tag!==7?(M=ga(z,L.mode,W,fe),M.return=L,M):(M=f(M,z),M.return=L,M)}function Z(L,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=ym(""+M,L.mode,z),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case b:return z=gh(M.type,M.key,M.props,null,L.mode,z),Tu(z,M),z.return=L,z;case D:return M=vm(M,L.mode,z),M.return=L,M;case C:var W=M._init;return M=W(M._payload),Z(L,M,z)}if(Xe(M)||V(M))return M=ga(M,L.mode,z,null),M.return=L,M;if(typeof M.then=="function")return Z(L,Mh(M),z);if(M.$$typeof===re)return Z(L,Eh(L,M),z);kh(L,M)}return null}function F(L,M,z,W){var fe=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:S(L,M,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case b:return z.key===fe?I(L,M,z,W):null;case D:return z.key===fe?B(L,M,z,W):null;case C:return fe=z._init,z=fe(z._payload),F(L,M,z,W)}if(Xe(z)||V(z))return fe!==null?null:K(L,M,z,W,null);if(typeof z.then=="function")return F(L,M,Mh(z),W);if(z.$$typeof===re)return F(L,M,Eh(L,z),W);kh(L,z)}return null}function H(L,M,z,W,fe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(z)||null,S(M,L,""+W,fe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return L=L.get(W.key===null?z:W.key)||null,I(M,L,W,fe);case D:return L=L.get(W.key===null?z:W.key)||null,B(M,L,W,fe);case C:var Ve=W._init;return W=Ve(W._payload),H(L,M,z,W,fe)}if(Xe(W)||V(W))return L=L.get(z)||null,K(M,L,W,fe,null);if(typeof W.then=="function")return H(L,M,z,Mh(W),fe);if(W.$$typeof===re)return H(L,M,z,Eh(M,W),fe);kh(M,W)}return null}function we(L,M,z,W){for(var fe=null,Ve=null,ge=M,Ee=M=0,rn=null;ge!==null&&Ee<z.length;Ee++){ge.index>Ee?(rn=ge,ge=null):rn=ge.sibling;var We=F(L,ge,z[Ee],W);if(We===null){ge===null&&(ge=rn);break}i&&ge&&We.alternate===null&&r(L,ge),M=m(We,M,Ee),Ve===null?fe=We:Ve.sibling=We,Ve=We,ge=rn}if(Ee===z.length)return o(L,ge),Ze&&ya(L,Ee),fe;if(ge===null){for(;Ee<z.length;Ee++)ge=Z(L,z[Ee],W),ge!==null&&(M=m(ge,M,Ee),Ve===null?fe=ge:Ve.sibling=ge,Ve=ge);return Ze&&ya(L,Ee),fe}for(ge=u(ge);Ee<z.length;Ee++)rn=H(ge,L,Ee,z[Ee],W),rn!==null&&(i&&rn.alternate!==null&&ge.delete(rn.key===null?Ee:rn.key),M=m(rn,M,Ee),Ve===null?fe=rn:Ve.sibling=rn,Ve=rn);return i&&ge.forEach(function(wr){return r(L,wr)}),Ze&&ya(L,Ee),fe}function ve(L,M,z,W){if(z==null)throw Error(s(151));for(var fe=null,Ve=null,ge=M,Ee=M=0,rn=null,We=z.next();ge!==null&&!We.done;Ee++,We=z.next()){ge.index>Ee?(rn=ge,ge=null):rn=ge.sibling;var wr=F(L,ge,We.value,W);if(wr===null){ge===null&&(ge=rn);break}i&&ge&&wr.alternate===null&&r(L,ge),M=m(wr,M,Ee),Ve===null?fe=wr:Ve.sibling=wr,Ve=wr,ge=rn}if(We.done)return o(L,ge),Ze&&ya(L,Ee),fe;if(ge===null){for(;!We.done;Ee++,We=z.next())We=Z(L,We.value,W),We!==null&&(M=m(We,M,Ee),Ve===null?fe=We:Ve.sibling=We,Ve=We);return Ze&&ya(L,Ee),fe}for(ge=u(ge);!We.done;Ee++,We=z.next())We=H(ge,L,Ee,We.value,W),We!==null&&(i&&We.alternate!==null&&ge.delete(We.key===null?Ee:We.key),M=m(We,M,Ee),Ve===null?fe=We:Ve.sibling=We,Ve=We);return i&&ge.forEach(function(nI){return r(L,nI)}),Ze&&ya(L,Ee),fe}function ut(L,M,z,W){if(typeof z=="object"&&z!==null&&z.type===U&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case b:e:{for(var fe=z.key;M!==null;){if(M.key===fe){if(fe=z.type,fe===U){if(M.tag===7){o(L,M.sibling),W=f(M,z.props.children),W.return=L,L=W;break e}}else if(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===C&&I0(fe)===M.type){o(L,M.sibling),W=f(M,z.props),Tu(W,z),W.return=L,L=W;break e}o(L,M);break}else r(L,M);M=M.sibling}z.type===U?(W=ga(z.props.children,L.mode,W,z.key),W.return=L,L=W):(W=gh(z.type,z.key,z.props,null,L.mode,W),Tu(W,z),W.return=L,L=W)}return E(L);case D:e:{for(fe=z.key;M!==null;){if(M.key===fe)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){o(L,M.sibling),W=f(M,z.children||[]),W.return=L,L=W;break e}else{o(L,M);break}else r(L,M);M=M.sibling}W=vm(z,L.mode,W),W.return=L,L=W}return E(L);case C:return fe=z._init,z=fe(z._payload),ut(L,M,z,W)}if(Xe(z))return we(L,M,z,W);if(V(z)){if(fe=V(z),typeof fe!="function")throw Error(s(150));return z=fe.call(z),ve(L,M,z,W)}if(typeof z.then=="function")return ut(L,M,Mh(z),W);if(z.$$typeof===re)return ut(L,M,Eh(L,z),W);kh(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(o(L,M.sibling),W=f(M,z),W.return=L,L=W):(o(L,M),W=ym(z,L.mode,W),W.return=L,L=W),E(L)):o(L,M)}return function(L,M,z,W){try{Eu=0;var fe=ut(L,M,z,W);return Do=null,fe}catch(ge){if(ge===hu||ge===bh)throw ge;var Ve=Gn(29,ge,null,L.mode);return Ve.lanes=W,Ve.return=L,Ve}finally{}}}var Oo=x0(!0),N0=x0(!1),ui=X(null),Bi=null;function lr(i){var r=i.alternate;ne(Xt,Xt.current&1),ne(ui,i),Bi===null&&(r===null||Ro.current!==null||r.memoizedState!==null)&&(Bi=i)}function D0(i){if(i.tag===22){if(ne(Xt,Xt.current),ne(ui,i),Bi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Bi=i)}}else ur()}function ur(){ne(Xt,Xt.current),ne(ui,ui.current)}function Cs(i){le(ui),Bi===i&&(Bi=null),le(Xt)}var Xt=X(0);function Ph(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Bp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Zm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Jm={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=$n(),f=rr(u);f.payload=r,o!=null&&(f.callback=o),r=ar(i,f,u),r!==null&&(Xn(r,i,u),du(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=$n(),f=rr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=ar(i,f,u),r!==null&&(Xn(r,i,u),du(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=$n(),u=rr(o);u.tag=2,r!=null&&(u.callback=r),r=ar(i,u,o),r!==null&&(Xn(r,i,o),du(r,i,o))}};function O0(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!iu(o,u)||!iu(f,m):!0}function M0(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Jm.enqueueReplaceState(r,r.state,null)}function Aa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Vh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function k0(i){Vh(i)}function P0(i){console.error(i)}function V0(i){Vh(i)}function Lh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function L0(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ep(i,r,o){return o=rr(o),o.tag=3,o.payload={element:null},o.callback=function(){Lh(i,r)},o}function U0(i){return i=rr(i),i.tag=3,i}function j0(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){L0(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){L0(r,o,u),typeof f!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function nR(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&lu(r,o,f,!0),o=ui.current,o!==null){switch(o.tag){case 13:return Bi===null?Sp():o.alternate===null&&Rt===0&&(Rt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===xm?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Cp(i,u,f)),!1;case 22:return o.flags|=65536,u===xm?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Cp(i,u,f)),!1}throw Error(s(435,o.tag))}return Cp(i,u,f),Sp(),!1}if(Ze)return r=ui.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==bm&&(i=Error(s(422),{cause:u}),ou(ri(i,o)))):(u!==bm&&(r=Error(s(423),{cause:u}),ou(ri(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=ri(u,o),f=ep(i.stateNode,u,f),Om(i,f),Rt!==4&&(Rt=2)),!1;var m=Error(s(520),{cause:u});if(m=ri(m,o),Iu===null?Iu=[m]:Iu.push(m),Rt!==4&&(Rt=2),r===null)return!0;u=ri(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=ep(o.stateNode,u,i),Om(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pr===null||!pr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=U0(f),j0(f,i,o,u),Om(o,f),!1}o=o.return}while(o!==null);return!1}var z0=Error(s(461)),nn=!1;function dn(i,r,o,u){r.child=i===null?N0(r,null,o,u):Oo(r,i.child,o,u)}function B0(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return ba(r),u=Lm(i,r,o,E,m,f),S=Um(),i!==null&&!nn?(jm(i,r,f),Rs(i,r,f)):(Ze&&S&&Em(r),r.flags|=1,dn(i,r,u,f),r.child)}function q0(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!_m(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,F0(i,r,m,u,f)):(i=gh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!lp(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:iu,o(E,u)&&i.ref===r.ref)return Rs(i,r,f)}return r.flags|=1,i=Es(m,u),i.ref=r.ref,i.return=r,r.child=i}function F0(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(iu(m,u)&&i.ref===r.ref)if(nn=!1,r.pendingProps=u=m,lp(i,f))(i.flags&131072)!==0&&(nn=!0);else return r.lanes=i.lanes,Rs(i,r,f)}return tp(i,r,o,u,f)}function H0(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return G0(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Th(r,m!==null?m.cachePool:null),m!==null?Fv(r,m):km(),D0(r);else return r.lanes=r.childLanes=536870912,G0(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(Th(r,m.cachePool),Fv(r,m),ur(),r.memoizedState=null):(i!==null&&Th(r,null),km(),ur());return dn(i,r,f,o),r.child}function G0(i,r,o,u){var f=Im();return f=f===null?null:{parent:$t._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&Th(r,null),km(),D0(r),i!==null&&lu(i,r,u,!0),null}function Uh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function tp(i,r,o,u,f){return ba(r),o=Lm(i,r,o,u,void 0,f),u=Um(),i!==null&&!nn?(jm(i,r,f),Rs(i,r,f)):(Ze&&u&&Em(r),r.flags|=1,dn(i,r,o,f),r.child)}function Q0(i,r,o,u,f,m){return ba(r),r.updateQueue=null,o=Gv(r,u,o,f),Hv(i),u=Um(),i!==null&&!nn?(jm(i,r,m),Rs(i,r,m)):(Ze&&u&&Em(r),r.flags|=1,dn(i,r,o,m),r.child)}function Y0(i,r,o,u,f){if(ba(r),r.stateNode===null){var m=bo,E=o.contextType;typeof E=="object"&&E!==null&&(m=vn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Jm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Nm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?vn(E):bo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Zm(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Jm.enqueueReplaceState(m,m.state,null),pu(r,u,m,f),mu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,I=Aa(o,S);m.props=I;var B=m.context,K=o.contextType;E=bo,typeof K=="object"&&K!==null&&(E=vn(K));var Z=o.getDerivedStateFromProps;K=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||B!==E)&&M0(r,m,u,E),sr=!1;var F=r.memoizedState;m.state=F,pu(r,u,m,f),mu(),B=r.memoizedState,S||F!==B||sr?(typeof Z=="function"&&(Zm(r,o,Z,u),B=r.memoizedState),(I=sr||O0(r,o,I,u,F,B,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),m.props=u,m.state=B,m.context=E,u=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Dm(i,r),E=r.memoizedProps,K=Aa(o,E),m.props=K,Z=r.pendingProps,F=m.context,B=o.contextType,I=bo,typeof B=="object"&&B!==null&&(I=vn(B)),S=o.getDerivedStateFromProps,(B=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||F!==I)&&M0(r,m,u,I),sr=!1,F=r.memoizedState,m.state=F,pu(r,u,m,f),mu();var H=r.memoizedState;E!==Z||F!==H||sr||i!==null&&i.dependencies!==null&&vh(i.dependencies)?(typeof S=="function"&&(Zm(r,o,S,u),H=r.memoizedState),(K=sr||O0(r,o,K,u,F,H,I)||i!==null&&i.dependencies!==null&&vh(i.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,H,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,H,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=H),m.props=u,m.state=H,m.context=I,u=K):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Uh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Oo(r,i.child,null,f),r.child=Oo(r,null,o,f)):dn(i,r,o,f),r.memoizedState=m.state,i=r.child):i=Rs(i,r,f),i}function K0(i,r,o,u){return au(),r.flags|=256,dn(i,r,o,u),r.child}var np={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ip(i){return{baseLanes:i,cachePool:Pv()}}function sp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ci),i}function $0(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Xt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ze){if(f?lr(r):ur(),Ze){var S=Ct,I;if(I=S){e:{for(I=S,S=zi;I.nodeType!==8;){if(!S){S=null;break e}if(I=Ei(I.nextSibling),I===null){S=null;break e}}S=I}S!==null?(r.memoizedState={dehydrated:S,treeContext:_a!==null?{id:Ts,overflow:bs}:null,retryLane:536870912,hydrationErrors:null},I=Gn(18,null,null,0),I.stateNode=S,I.return=r,r.child=I,Nn=r,Ct=null,I=!0):I=!1}I||Ea(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Bp(S)?r.lanes=32:r.lanes=536870912,null;Cs(r)}return S=u.children,u=u.fallback,f?(ur(),f=r.mode,S=jh({mode:"hidden",children:S},f),u=ga(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=ip(o),f.childLanes=sp(i,E,o),r.memoizedState=np,u):(lr(r),rp(r,S))}if(I=i.memoizedState,I!==null&&(S=I.dehydrated,S!==null)){if(m)r.flags&256?(lr(r),r.flags&=-257,r=ap(i,r,o)):r.memoizedState!==null?(ur(),r.child=i.child,r.flags|=128,r=null):(ur(),f=u.fallback,S=r.mode,u=jh({mode:"visible",children:u.children},S),f=ga(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Oo(r,i.child,null,o),u=r.child,u.memoizedState=ip(o),u.childLanes=sp(i,E,o),r.memoizedState=np,r=f);else if(lr(r),Bp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var B=E.dgst;E=B,u=Error(s(419)),u.stack="",u.digest=E,ou({value:u,source:null,stack:null}),r=ap(i,r,o)}else if(nn||lu(i,r,o,!1),E=(o&i.childLanes)!==0,nn||E){if(E=mt,E!==null&&(u=o&-o,u=(u&42)!==0?1:Xs(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,To(i,u),Xn(E,i,u),z0;S.data==="$?"||Sp(),r=ap(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=I.treeContext,Ct=Ei(S.nextSibling),Nn=r,Ze=!0,va=null,zi=!1,i!==null&&(oi[li++]=Ts,oi[li++]=bs,oi[li++]=_a,Ts=i.id,bs=i.overflow,_a=r),r=rp(r,u.children),r.flags|=4096);return r}return f?(ur(),f=u.fallback,S=r.mode,I=i.child,B=I.sibling,u=Es(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,B!==null?f=Es(B,f):(f=ga(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=i.child.memoizedState,S===null?S=ip(o):(I=S.cachePool,I!==null?(B=$t._currentValue,I=I.parent!==B?{parent:B,pool:B}:I):I=Pv(),S={baseLanes:S.baseLanes|o,cachePool:I}),f.memoizedState=S,f.childLanes=sp(i,E,o),r.memoizedState=np,u):(lr(r),o=i.child,i=o.sibling,o=Es(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function rp(i,r){return r=jh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function jh(i,r){return i=Gn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function ap(i,r,o){return Oo(r,i.child,null,o),i=rp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function X0(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Sm(i.return,r,o)}function op(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function W0(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(dn(i,r,u.children,o),u=Xt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&X0(i,o,r);else if(i.tag===19)X0(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ne(Xt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Ph(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),op(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Ph(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}op(r,!0,o,null,m);break;case"together":op(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Rs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),mr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(lu(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Es(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Es(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function lp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&vh(i)))}function iR(i,r,o){switch(r.tag){case 3:rt(r,r.stateNode.containerInfo),ir(r,$t,i.memoizedState.cache),au();break;case 27:case 5:Ri(r);break;case 4:rt(r,r.stateNode.containerInfo);break;case 10:ir(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(lr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?$0(i,r,o):(lr(r),i=Rs(i,r,o),i!==null?i.sibling:null);lr(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(lu(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return W0(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ne(Xt,Xt.current),u)break;return null;case 22:case 23:return r.lanes=0,H0(i,r,o);case 24:ir(r,$t,i.memoizedState.cache)}return Rs(i,r,o)}function Z0(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)nn=!0;else{if(!lp(i,o)&&(r.flags&128)===0)return nn=!1,iR(i,r,o);nn=(i.flags&131072)!==0}else nn=!1,Ze&&(r.flags&1048576)!==0&&Iv(r,yh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")_m(u)?(i=Aa(u,i),r.tag=1,r=Y0(null,r,u,i,o)):(r.tag=0,r=tp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===pe){r.tag=11,r=B0(null,r,u,i,o);break e}else if(f===P){r.tag=14,r=q0(null,r,u,i,o);break e}}throw r=_t(u)||u,Error(s(306,r,""))}}return r;case 0:return tp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=Aa(u,r.pendingProps),Y0(i,r,u,f,o);case 3:e:{if(rt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Dm(i,r),pu(r,u,null,o);var E=r.memoizedState;if(u=E.cache,ir(r,$t,u),u!==m.cache&&Am(r,[$t],o,!0),mu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=K0(i,r,u,o);break e}else if(u!==f){f=ri(Error(s(424)),r),ou(f),r=K0(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ct=Ei(i.firstChild),Nn=r,Ze=!0,va=null,zi=!0,o=N0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(au(),u===f){r=Rs(i,r,o);break e}dn(i,r,u,o)}r=r.child}return r;case 26:return Uh(i,r),i===null?(o=nT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ze||(o=r.type,i=r.pendingProps,u=Jh(be.current).createElement(o),u[Qt]=r,u[Lt]=i,pn(u,o,i),Nt(u),r.stateNode=u):r.memoizedState=nT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ri(r),i===null&&Ze&&(u=r.stateNode=JE(r.type,r.pendingProps,be.current),Nn=r,zi=!0,f=Ct,yr(r.type)?(qp=f,Ct=Ei(u.firstChild)):Ct=f),dn(i,r,r.pendingProps.children,o),Uh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ze&&((f=u=Ct)&&(u=DR(u,r.type,r.pendingProps,zi),u!==null?(r.stateNode=u,Nn=r,Ct=Ei(u.firstChild),zi=!1,f=!0):f=!1),f||Ea(r)),Ri(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Up(f,m)?u=null:E!==null&&Up(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Lm(i,r,$C,null,null,o),Lu._currentValue=f),Uh(i,r),dn(i,r,u,o),r.child;case 6:return i===null&&Ze&&((i=o=Ct)&&(o=OR(o,r.pendingProps,zi),o!==null?(r.stateNode=o,Nn=r,Ct=null,i=!0):i=!1),i||Ea(r)),null;case 13:return $0(i,r,o);case 4:return rt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Oo(r,null,u,o):dn(i,r,u,o),r.child;case 11:return B0(i,r,r.type,r.pendingProps,o);case 7:return dn(i,r,r.pendingProps,o),r.child;case 8:return dn(i,r,r.pendingProps.children,o),r.child;case 12:return dn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,ir(r,r.type,u.value),dn(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ba(r),f=vn(f),u=u(f),r.flags|=1,dn(i,r,u,o),r.child;case 14:return q0(i,r,r.type,r.pendingProps,o);case 15:return F0(i,r,r.type,r.pendingProps,o);case 19:return W0(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=jh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=Es(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return H0(i,r,o);case 24:return ba(r),u=vn($t),i===null?(f=Im(),f===null&&(f=mt,m=Cm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Nm(r),ir(r,$t,f)):((i.lanes&o)!==0&&(Dm(i,r),pu(r,null,null,o),mu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),ir(r,$t,u)):(u=m.cache,ir(r,$t,u),u!==f.cache&&Am(r,[$t],o,!0))),dn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Is(i){i.flags|=4}function J0(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!oT(r)){if(r=ui.current,r!==null&&((Ke&4194048)===Ke?Bi!==null:(Ke&62914560)!==Ke&&(Ke&536870912)===0||r!==Bi))throw fu=xm,Vv;i.flags|=8192}}function zh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?jl():536870912,i.lanes|=r,Vo|=r)}function bu(i,r){if(!Ze)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function St(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function sR(i,r,o){var u=r.pendingProps;switch(Tm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(r),null;case 1:return St(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ss($t),Jn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(ru(r)?Is(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dv())),St(r),null;case 26:return o=r.memoizedState,i===null?(Is(r),o!==null?(St(r),J0(r,o)):(St(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Is(r),St(r),J0(r,o)):(St(r),r.flags&=-16777217):(i.memoizedProps!==u&&Is(r),St(r),r.flags&=-16777217),null;case 27:mi(r),o=be.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Is(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return St(r),null}i=_e.current,ru(r)?xv(r):(i=JE(f,u,o),r.stateNode=i,Is(r))}return St(r),null;case 5:if(mi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Is(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return St(r),null}if(i=_e.current,ru(r))xv(r);else{switch(f=Jh(be.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Qt]=r,i[Lt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(pn(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Is(r)}}return St(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Is(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=be.current,ru(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Qt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||QE(i.nodeValue,o)),i||Ea(r)}else i=Jh(i).createTextNode(u),i[Qt]=r,r.stateNode=i}return St(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=ru(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Qt]=r}else au(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;St(r),f=!1}else f=Dv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Cs(r),r):(Cs(r),null)}if(Cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),zh(r,r.updateQueue),St(r),null;case 4:return Jn(),i===null&&Mp(r.stateNode.containerInfo),St(r),null;case 10:return Ss(r.type),St(r),null;case 19:if(le(Xt),f=r.memoizedState,f===null)return St(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)bu(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Ph(i),m!==null){for(r.flags|=128,bu(f,!1),i=m.updateQueue,r.updateQueue=i,zh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Rv(o,i),o=o.sibling;return ne(Xt,Xt.current&1|2),r.child}i=i.sibling}f.tail!==null&&kn()>Fh&&(r.flags|=128,u=!0,bu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Ph(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,zh(r,i),bu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ze)return St(r),null}else 2*kn()-f.renderingStartTime>Fh&&o!==536870912&&(r.flags|=128,u=!0,bu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=kn(),r.sibling=null,i=Xt.current,ne(Xt,u?i&1|2:i&1),r):(St(r),null);case 22:case 23:return Cs(r),Pm(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(St(r),r.subtreeFlags&6&&(r.flags|=8192)):St(r),o=r.updateQueue,o!==null&&zh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&le(wa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ss($t),St(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function rR(i,r){switch(Tm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Ss($t),Jn(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return mi(r),null;case 13:if(Cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));au()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return le(Xt),null;case 4:return Jn(),null;case 10:return Ss(r.type),null;case 22:case 23:return Cs(r),Pm(),i!==null&&le(wa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Ss($t),null;case 25:return null;default:return null}}function eE(i,r){switch(Tm(r),r.tag){case 3:Ss($t),Jn();break;case 26:case 27:case 5:mi(r);break;case 4:Jn();break;case 13:Cs(r);break;case 19:le(Xt);break;case 10:Ss(r.type);break;case 22:case 23:Cs(r),Pm(),i!==null&&le(wa);break;case 24:Ss($t)}}function wu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){ht(r,r.return,S)}}function cr(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var I=o,B=S;try{B()}catch(K){ht(f,I,K)}}}u=u.next}while(u!==m)}}catch(K){ht(r,r.return,K)}}function tE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{qv(r,o)}catch(u){ht(i,i.return,u)}}}function nE(i,r,o){o.props=Aa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ht(i,r,u)}}function Su(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){ht(i,r,f)}}function qi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){ht(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ht(i,r,f)}else o.current=null}function iE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){ht(i,i.return,f)}}function up(i,r,o){try{var u=i.stateNode;CR(u,i.type,o,r),u[Lt]=r}catch(f){ht(i,i.return,f)}}function sE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&yr(i.type)||i.tag===4}function cp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||sE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&yr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function hp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Zh));else if(u!==4&&(u===27&&yr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(hp(i,r,o),i=i.sibling;i!==null;)hp(i,r,o),i=i.sibling}function Bh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&yr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Bh(i,r,o),i=i.sibling;i!==null;)Bh(i,r,o),i=i.sibling}function rE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);pn(r,u,o),r[Qt]=i,r[Lt]=o}catch(m){ht(i,i.return,m)}}var xs=!1,Ot=!1,fp=!1,aE=typeof WeakSet=="function"?WeakSet:Set,sn=null;function aR(i,r){if(i=i.containerInfo,Vp=af,i=_v(i),cm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,I=-1,B=0,K=0,Z=i,F=null;t:for(;;){for(var H;Z!==o||f!==0&&Z.nodeType!==3||(S=E+f),Z!==m||u!==0&&Z.nodeType!==3||(I=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(H=Z.firstChild)!==null;)F=Z,Z=H;for(;;){if(Z===i)break t;if(F===o&&++B===f&&(S=E),F===m&&++K===u&&(I=E),(H=Z.nextSibling)!==null)break;Z=F,F=Z.parentNode}Z=H}o=S===-1||I===-1?null:{start:S,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(Lp={focusedElem:i,selectionRange:o},af=!1,sn=r;sn!==null;)if(r=sn,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,sn=i;else for(;sn!==null;){switch(r=sn,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var we=Aa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(we,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ve){ht(o,o.return,ve)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)zp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":zp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,sn=i;break}sn=r.return}}function oE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:hr(i,o),u&4&&wu(5,o);break;case 1:if(hr(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){ht(o,o.return,E)}else{var f=Aa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){ht(o,o.return,E)}}u&64&&tE(o),u&512&&Su(o,o.return);break;case 3:if(hr(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{qv(i,r)}catch(E){ht(o,o.return,E)}}break;case 27:r===null&&u&4&&rE(o);case 26:case 5:hr(i,o),r===null&&u&4&&iE(o),u&512&&Su(o,o.return);break;case 12:hr(i,o);break;case 13:hr(i,o),u&4&&cE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=pR.bind(null,o),MR(i,o))));break;case 22:if(u=o.memoizedState!==null||xs,!u){r=r!==null&&r.memoizedState!==null||Ot,f=xs;var m=Ot;xs=u,(Ot=r)&&!m?fr(i,o,(o.subtreeFlags&8772)!==0):hr(i,o),xs=f,Ot=m}break;case 30:break;default:hr(i,o)}}function lE(i){var r=i.alternate;r!==null&&(i.alternate=null,lE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Js(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var bt=null,Vn=!1;function Ns(i,r,o){for(o=o.child;o!==null;)uE(i,r,o),o=o.sibling}function uE(i,r,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(dt,o)}catch{}switch(o.tag){case 26:Ot||qi(o,r),Ns(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ot||qi(o,r);var u=bt,f=Vn;yr(o.type)&&(bt=o.stateNode,Vn=!1),Ns(i,r,o),Mu(o.stateNode),bt=u,Vn=f;break;case 5:Ot||qi(o,r);case 6:if(u=bt,f=Vn,bt=null,Ns(i,r,o),bt=u,Vn=f,bt!==null)if(Vn)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(o.stateNode)}catch(m){ht(o,r,m)}else try{bt.removeChild(o.stateNode)}catch(m){ht(o,r,m)}break;case 18:bt!==null&&(Vn?(i=bt,WE(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Bu(i)):WE(bt,o.stateNode));break;case 4:u=bt,f=Vn,bt=o.stateNode.containerInfo,Vn=!0,Ns(i,r,o),bt=u,Vn=f;break;case 0:case 11:case 14:case 15:Ot||cr(2,o,r),Ot||cr(4,o,r),Ns(i,r,o);break;case 1:Ot||(qi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&nE(o,r,u)),Ns(i,r,o);break;case 21:Ns(i,r,o);break;case 22:Ot=(u=Ot)||o.memoizedState!==null,Ns(i,r,o),Ot=u;break;default:Ns(i,r,o)}}function cE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Bu(i)}catch(o){ht(r,r.return,o)}}function oR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new aE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new aE),r;default:throw Error(s(435,i.tag))}}function dp(i,r){var o=oR(i);r.forEach(function(u){var f=gR.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Qn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(yr(S.type)){bt=S.stateNode,Vn=!1;break e}break;case 5:bt=S.stateNode,Vn=!1;break e;case 3:case 4:bt=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(bt===null)throw Error(s(160));uE(m,E,f),bt=null,Vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)hE(r,i),r=r.sibling}var vi=null;function hE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Qn(r,i),Yn(i),u&4&&(cr(3,i,i.return),wu(3,i),cr(5,i,i.return));break;case 1:Qn(r,i),Yn(i),u&512&&(Ot||o===null||qi(o,o.return)),u&64&&xs&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=vi;if(Qn(r,i),Yn(i),u&512&&(Ot||o===null||qi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ea]||m[Qt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),pn(m,u,o),m[Qt]=i,Nt(m),u=m;break e;case"link":var E=rT("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;case"meta":if(E=rT("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),pn(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Qt]=i,Nt(m),u=m}i.stateNode=u}else aT(f,i.type,i.stateNode);else i.stateNode=sT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?aT(f,i.type,i.stateNode):sT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&up(i,i.memoizedProps,o.memoizedProps)}break;case 27:Qn(r,i),Yn(i),u&512&&(Ot||o===null||qi(o,o.return)),o!==null&&u&4&&up(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Qn(r,i),Yn(i),u&512&&(Ot||o===null||qi(o,o.return)),i.flags&32){f=i.stateNode;try{ti(f,"")}catch(H){ht(i,i.return,H)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,up(i,f,o!==null?o.memoizedProps:f)),u&1024&&(fp=!0);break;case 6:if(Qn(r,i),Yn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(H){ht(i,i.return,H)}}break;case 3:if(nf=null,f=vi,vi=ef(r.containerInfo),Qn(r,i),vi=f,Yn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Bu(r.containerInfo)}catch(H){ht(i,i.return,H)}fp&&(fp=!1,fE(i));break;case 4:u=vi,vi=ef(i.stateNode.containerInfo),Qn(r,i),Yn(i),vi=u;break;case 12:Qn(r,i),Yn(i);break;case 13:Qn(r,i),Yn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(vp=kn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,dp(i,u)));break;case 22:f=i.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,B=xs,K=Ot;if(xs=B||f,Ot=K||I,Qn(r,i),Ot=K,xs=B,Yn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||I||xs||Ot||Ca(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){I=o=r;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=I.stateNode;var Z=I.memoizedProps.style,F=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;S.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(H){ht(I,I.return,H)}}}else if(r.tag===6){if(o===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(H){ht(I,I.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,dp(i,o))));break;case 19:Qn(r,i),Yn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,dp(i,u)));break;case 30:break;case 21:break;default:Qn(r,i),Yn(i)}}function Yn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(sE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=cp(i);Bh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(ti(E,""),o.flags&=-33);var S=cp(i);Bh(i,S,E);break;case 3:case 4:var I=o.stateNode.containerInfo,B=cp(i);hp(i,B,I);break;default:throw Error(s(161))}}catch(K){ht(i,i.return,K)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function fE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;fE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function hr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)oE(i,r.alternate,r),r=r.sibling}function Ca(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:cr(4,r,r.return),Ca(r);break;case 1:qi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&nE(r,r.return,o),Ca(r);break;case 27:Mu(r.stateNode);case 26:case 5:qi(r,r.return),Ca(r);break;case 22:r.memoizedState===null&&Ca(r);break;case 30:Ca(r);break;default:Ca(r)}i=i.sibling}}function fr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:fr(f,m,o),wu(4,m);break;case 1:if(fr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){ht(u,u.return,B)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Bv(I[f],S)}catch(B){ht(u,u.return,B)}}o&&E&64&&tE(m),Su(m,m.return);break;case 27:rE(m);case 26:case 5:fr(f,m,o),o&&u===null&&E&4&&iE(m),Su(m,m.return);break;case 12:fr(f,m,o);break;case 13:fr(f,m,o),o&&E&4&&cE(f,m);break;case 22:m.memoizedState===null&&fr(f,m,o),Su(m,m.return);break;case 30:break;default:fr(f,m,o)}r=r.sibling}}function mp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&uu(o))}function pp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&uu(i))}function Fi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)dE(i,r,o,u),r=r.sibling}function dE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Fi(i,r,o,u),f&2048&&wu(9,r);break;case 1:Fi(i,r,o,u);break;case 3:Fi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&uu(i)));break;case 12:if(f&2048){Fi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(I){ht(r,r.return,I)}}else Fi(i,r,o,u);break;case 13:Fi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Fi(i,r,o,u):Au(i,r):m._visibility&2?Fi(i,r,o,u):(m._visibility|=2,Mo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&mp(E,r);break;case 24:Fi(i,r,o,u),f&2048&&pp(r.alternate,r);break;default:Fi(i,r,o,u)}}function Mo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,S=o,I=u,B=E.flags;switch(E.tag){case 0:case 11:case 15:Mo(m,E,S,I,f),wu(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?Mo(m,E,S,I,f):Au(m,E):(K._visibility|=2,Mo(m,E,S,I,f)),f&&B&2048&&mp(E.alternate,E);break;case 24:Mo(m,E,S,I,f),f&&B&2048&&pp(E.alternate,E);break;default:Mo(m,E,S,I,f)}r=r.sibling}}function Au(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:Au(o,u),f&2048&&mp(u.alternate,u);break;case 24:Au(o,u),f&2048&&pp(u.alternate,u);break;default:Au(o,u)}r=r.sibling}}var Cu=8192;function ko(i){if(i.subtreeFlags&Cu)for(i=i.child;i!==null;)mE(i),i=i.sibling}function mE(i){switch(i.tag){case 26:ko(i),i.flags&Cu&&i.memoizedState!==null&&QR(vi,i.memoizedState,i.memoizedProps);break;case 5:ko(i);break;case 3:case 4:var r=vi;vi=ef(i.stateNode.containerInfo),ko(i),vi=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Cu,Cu=16777216,ko(i),Cu=r):ko(i));break;default:ko(i)}}function pE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Ru(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,_E(u,i)}pE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)gE(i),i=i.sibling}function gE(i){switch(i.tag){case 0:case 11:case 15:Ru(i),i.flags&2048&&cr(9,i,i.return);break;case 3:Ru(i);break;case 12:Ru(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,qh(i)):Ru(i);break;default:Ru(i)}}function qh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,_E(u,i)}pE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:cr(8,r,r.return),qh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,qh(r));break;default:qh(r)}i=i.sibling}}function _E(i,r){for(;sn!==null;){var o=sn;switch(o.tag){case 0:case 11:case 15:cr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:uu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,sn=u;else e:for(o=i;sn!==null;){u=sn;var f=u.sibling,m=u.return;if(lE(u),u===o){sn=null;break e}if(f!==null){f.return=m,sn=f;break e}sn=m}}}var lR={getCacheForType:function(i){var r=vn($t),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},uR=typeof WeakMap=="function"?WeakMap:Map,nt=0,mt=null,je=null,Ke=0,it=0,Kn=null,dr=!1,Po=!1,gp=!1,Ds=0,Rt=0,mr=0,Ra=0,_p=0,ci=0,Vo=0,Iu=null,Ln=null,yp=!1,vp=0,Fh=1/0,Hh=null,pr=null,mn=0,gr=null,Lo=null,Uo=0,Ep=0,Tp=null,yE=null,xu=0,bp=null;function $n(){if((nt&2)!==0&&Ke!==0)return Ke&-Ke;if(Y.T!==null){var i=Ao;return i!==0?i:xp()}return Ws()}function vE(){ci===0&&(ci=(Ke&536870912)===0||Ze?Ul():536870912);var i=ui.current;return i!==null&&(i.flags|=32),ci}function Xn(i,r,o){(i===mt&&(it===2||it===9)||i.cancelPendingCommit!==null)&&(jo(i,0),_r(i,Ke,ci,!1)),us(i,o),((nt&2)===0||i!==mt)&&(i===mt&&((nt&2)===0&&(Ra|=o),Rt===4&&_r(i,Ke,ci,!1)),Hi(i))}function EE(i,r,o){if((nt&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Jr(i,r),f=u?fR(i,r):Ap(i,r,!0),m=u;do{if(f===0){Po&&!u&&_r(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!cR(o)){f=Ap(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=i;f=Iu;var I=S.current.memoizedState.isDehydrated;if(I&&(jo(S,E).flags|=256),E=Ap(S,E,!1),E!==2){if(gp&&!I){S.errorRecoveryDisabledLanes|=m,Ra|=m,f=4;break e}m=Ln,Ln=f,m!==null&&(Ln===null?Ln=m:Ln.push.apply(Ln,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){jo(i,0),_r(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:_r(u,r,ci,!dr);break e;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=vp+300-kn(),10<f)){if(_r(u,r,ci,!dr),to(u,0,!0)!==0)break e;u.timeoutHandle=$E(TE.bind(null,u,o,Ln,Hh,yp,r,ci,Ra,Vo,dr,m,2,-0,0),f);break e}TE(u,o,Ln,Hh,yp,r,ci,Ra,Vo,dr,m,0,-0,0)}}break}while(!0);Hi(i)}function TE(i,r,o,u,f,m,E,S,I,B,K,Z,F,H){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(Vu={stylesheets:null,count:0,unsuspend:GR},mE(r),Z=YR(),Z!==null)){i.cancelPendingCommit=Z(IE.bind(null,i,r,m,o,u,f,E,S,I,K,1,F,H)),_r(i,m,E,!B);return}IE(i,r,m,o,u,f,E,S,I)}function cR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Hn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _r(i,r,o,u){r&=~_p,r&=~Ra,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-Jt(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&xi(i,o,r)}function Gh(){return(nt&6)===0?(Nu(0),!1):!0}function wp(){if(je!==null){if(it===0)var i=je.return;else i=je,ws=Ta=null,zm(i),Do=null,Eu=0,i=je;for(;i!==null;)eE(i.alternate,i),i=i.return;je=null}}function jo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,IR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),wp(),mt=i,je=o=Es(i.current,null),Ke=r,it=0,Kn=null,dr=!1,Po=Jr(i,r),gp=!1,Vo=ci=_p=Ra=mr=Rt=0,Ln=Iu=null,yp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-Jt(u),m=1<<f;r|=i[f],u&=~m}return Ds=r,dh(),o}function bE(i,r){ke=null,Y.H=Oh,r===hu||r===bh?(r=jv(),it=3):r===Vv?(r=jv(),it=4):it=r===z0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Kn=r,je===null&&(Rt=1,Lh(i,ri(r,i.current)))}function wE(){var i=Y.H;return Y.H=Oh,i===null?Oh:i}function SE(){var i=Y.A;return Y.A=lR,i}function Sp(){Rt=4,dr||(Ke&4194048)!==Ke&&ui.current!==null||(Po=!0),(mr&134217727)===0&&(Ra&134217727)===0||mt===null||_r(mt,Ke,ci,!1)}function Ap(i,r,o){var u=nt;nt|=2;var f=wE(),m=SE();(mt!==i||Ke!==r)&&(Hh=null,jo(i,r)),r=!1;var E=Rt;e:do try{if(it!==0&&je!==null){var S=je,I=Kn;switch(it){case 8:wp(),E=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(r=!0);var B=it;if(it=0,Kn=null,zo(i,S,I,B),o&&Po){E=0;break e}break;default:B=it,it=0,Kn=null,zo(i,S,I,B)}}hR(),E=Rt;break}catch(K){bE(i,K)}while(!0);return r&&i.shellSuspendCounter++,ws=Ta=null,nt=u,Y.H=f,Y.A=m,je===null&&(mt=null,Ke=0,dh()),E}function hR(){for(;je!==null;)AE(je)}function fR(i,r){var o=nt;nt|=2;var u=wE(),f=SE();mt!==i||Ke!==r?(Hh=null,Fh=kn()+500,jo(i,r)):Po=Jr(i,r);e:do try{if(it!==0&&je!==null){r=je;var m=Kn;t:switch(it){case 1:it=0,Kn=null,zo(i,r,m,1);break;case 2:case 9:if(Lv(m)){it=0,Kn=null,CE(r);break}r=function(){it!==2&&it!==9||mt!==i||(it=7),Hi(i)},m.then(r,r);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:Lv(m)?(it=0,Kn=null,CE(r)):(it=0,Kn=null,zo(i,r,m,7));break;case 5:var E=null;switch(je.tag){case 26:E=je.memoizedState;case 5:case 27:var S=je;if(!E||oT(E)){it=0,Kn=null;var I=S.sibling;if(I!==null)je=I;else{var B=S.return;B!==null?(je=B,Qh(B)):je=null}break t}}it=0,Kn=null,zo(i,r,m,5);break;case 6:it=0,Kn=null,zo(i,r,m,6);break;case 8:wp(),Rt=6;break e;default:throw Error(s(462))}}dR();break}catch(K){bE(i,K)}while(!0);return ws=Ta=null,Y.H=u,Y.A=f,nt=o,je!==null?0:(mt=null,Ke=0,dh(),Rt)}function dR(){for(;je!==null&&!$r();)AE(je)}function AE(i){var r=Z0(i.alternate,i,Ds);i.memoizedProps=i.pendingProps,r===null?Qh(i):je=r}function CE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=Q0(o,r,r.pendingProps,r.type,void 0,Ke);break;case 11:r=Q0(o,r,r.pendingProps,r.type.render,r.ref,Ke);break;case 5:zm(r);default:eE(o,r),r=je=Rv(r,Ds),r=Z0(o,r,Ds)}i.memoizedProps=i.pendingProps,r===null?Qh(i):je=r}function zo(i,r,o,u){ws=Ta=null,zm(r),Do=null,Eu=0;var f=r.return;try{if(nR(i,f,r,o,Ke)){Rt=1,Lh(i,ri(o,i.current)),je=null;return}}catch(m){if(f!==null)throw je=f,m;Rt=1,Lh(i,ri(o,i.current)),je=null;return}r.flags&32768?(Ze||u===1?i=!0:Po||(Ke&536870912)!==0?i=!1:(dr=i=!0,(u===2||u===9||u===3||u===6)&&(u=ui.current,u!==null&&u.tag===13&&(u.flags|=16384))),RE(r,i)):Qh(r)}function Qh(i){var r=i;do{if((r.flags&32768)!==0){RE(r,dr);return}i=r.return;var o=sR(r.alternate,r,Ds);if(o!==null){je=o;return}if(r=r.sibling,r!==null){je=r;return}je=r=i}while(r!==null);Rt===0&&(Rt=5)}function RE(i,r){do{var o=rR(i.alternate,i);if(o!==null){o.flags&=32767,je=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){je=i;return}je=i=o}while(i!==null);Rt=6,je=null}function IE(i,r,o,u,f,m,E,S,I){i.cancelPendingCommit=null;do Yh();while(mn!==0);if((nt&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=pm,zl(i,o,m,E,S,I),i===mt&&(je=mt=null,Ke=0),Lo=r,gr=i,Uo=o,Ep=m,Tp=f,yE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,_R(os,function(){return ME(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Y.T,Y.T=null,f=J.p,J.p=2,E=nt,nt|=4;try{aR(i,r,o)}finally{nt=E,J.p=f,Y.T=u}}mn=1,xE(),NE(),DE()}}function xE(){if(mn===1){mn=0;var i=gr,r=Lo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var u=J.p;J.p=2;var f=nt;nt|=4;try{hE(r,i);var m=Lp,E=_v(i.containerInfo),S=m.focusedElem,I=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&gv(S.ownerDocument.documentElement,S)){if(I!==null&&cm(S)){var B=I.start,K=I.end;if(K===void 0&&(K=B),"selectionStart"in S)S.selectionStart=B,S.selectionEnd=Math.min(K,S.value.length);else{var Z=S.ownerDocument||document,F=Z&&Z.defaultView||window;if(F.getSelection){var H=F.getSelection(),we=S.textContent.length,ve=Math.min(I.start,we),ut=I.end===void 0?ve:Math.min(I.end,we);!H.extend&&ve>ut&&(E=ut,ut=ve,ve=E);var L=pv(S,ve),M=pv(S,ut);if(L&&M&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==M.node||H.focusOffset!==M.offset)){var z=Z.createRange();z.setStart(L.node,L.offset),H.removeAllRanges(),ve>ut?(H.addRange(z),H.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),H.addRange(z))}}}}for(Z=[],H=S;H=H.parentNode;)H.nodeType===1&&Z.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Z.length;S++){var W=Z[S];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}af=!!Vp,Lp=Vp=null}finally{nt=f,J.p=u,Y.T=o}}i.current=r,mn=2}}function NE(){if(mn===2){mn=0;var i=gr,r=Lo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var u=J.p;J.p=2;var f=nt;nt|=4;try{oE(i,r.alternate,r)}finally{nt=f,J.p=u,Y.T=o}}mn=3}}function DE(){if(mn===4||mn===3){mn=0,eo();var i=gr,r=Lo,o=Uo,u=yE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?mn=5:(mn=0,Lo=gr=null,OE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(pr=null),no(o),r=r.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(dt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Y.T,f=J.p,J.p=2,Y.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{Y.T=r,J.p=f}}(Uo&3)!==0&&Yh(),Hi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===bp?xu++:(xu=0,bp=i):xu=0,Nu(0)}}function OE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,uu(r)))}function Yh(i){return xE(),NE(),DE(),ME()}function ME(){if(mn!==5)return!1;var i=gr,r=Ep;Ep=0;var o=no(Uo),u=Y.T,f=J.p;try{J.p=32>o?32:o,Y.T=null,o=Tp,Tp=null;var m=gr,E=Uo;if(mn=0,Lo=gr=null,Uo=0,(nt&6)!==0)throw Error(s(331));var S=nt;if(nt|=4,gE(m.current),dE(m,m.current,E,o),nt=S,Nu(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(dt,m)}catch{}return!0}finally{J.p=f,Y.T=u,OE(i,r)}}function kE(i,r,o){r=ri(o,r),r=ep(i.stateNode,r,2),i=ar(i,r,2),i!==null&&(us(i,2),Hi(i))}function ht(i,r,o){if(i.tag===3)kE(i,i,o);else for(;r!==null;){if(r.tag===3){kE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pr===null||!pr.has(u))){i=ri(o,i),o=U0(2),u=ar(r,o,2),u!==null&&(j0(o,u,r,i),us(u,2),Hi(u));break}}r=r.return}}function Cp(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new uR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(gp=!0,f.add(o),i=mR.bind(null,i,r,o),r.then(i,i))}function mR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,mt===i&&(Ke&o)===o&&(Rt===4||Rt===3&&(Ke&62914560)===Ke&&300>kn()-vp?(nt&2)===0&&jo(i,0):_p|=o,Vo===Ke&&(Vo=0)),Hi(i)}function PE(i,r){r===0&&(r=jl()),i=To(i,r),i!==null&&(us(i,r),Hi(i))}function pR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),PE(i,o)}function gR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),PE(i,o)}function _R(i,r){return ss(i,r)}var Kh=null,Bo=null,Rp=!1,$h=!1,Ip=!1,Ia=0;function Hi(i){i!==Bo&&i.next===null&&(Bo===null?Kh=Bo=i:Bo=Bo.next=i),$h=!0,Rp||(Rp=!0,vR())}function Nu(i,r){if(!Ip&&$h){Ip=!0;do for(var o=!1,u=Kh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-Jt(42|i)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,jE(u,m))}else m=Ke,m=to(u,u===mt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Jr(u,m)||(o=!0,jE(u,m));u=u.next}while(o);Ip=!1}}function yR(){VE()}function VE(){$h=Rp=!1;var i=0;Ia!==0&&(RR()&&(i=Ia),Ia=0);for(var r=kn(),o=null,u=Kh;u!==null;){var f=u.next,m=LE(u,r);m===0?(u.next=null,o===null?Kh=f:o.next=f,f===null&&(Bo=o)):(o=u,(i!==0||(m&3)!==0)&&($h=!0)),u=f}Nu(i)}function LE(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-Jt(m),S=1<<E,I=f[E];I===-1?((S&o)===0||(S&u)!==0)&&(f[E]=Ll(S,r)):I<=r&&(i.expiredLanes|=S),m&=~S}if(r=mt,o=Ke,o=to(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(it===2||it===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&rs(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Jr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&rs(u),no(o)){case 2:case 8:o=Ii;break;case 32:o=os;break;case 268435456:o=Ce;break;default:o=os}return u=UE.bind(null,i),o=ss(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&rs(u),i.callbackPriority=2,i.callbackNode=null,2}function UE(i,r){if(mn!==0&&mn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Yh()&&i.callbackNode!==o)return null;var u=Ke;return u=to(i,i===mt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(EE(i,u,r),LE(i,kn()),i.callbackNode!=null&&i.callbackNode===o?UE.bind(null,i):null)}function jE(i,r){if(Yh())return null;EE(i,r,!0)}function vR(){xR(function(){(nt&6)!==0?ss(as,yR):VE()})}function xp(){return Ia===0&&(Ia=Ul()),Ia}function zE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:lo(""+i)}function BE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function ER(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=zE((f[Lt]||null).action),E=u.submitter;E&&(r=(r=E[Lt]||null)?zE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new uo("action","action",null,u,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ia!==0){var I=E?BE(f,E):new FormData(f);$m(o,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(S.preventDefault(),I=E?BE(f,E):new FormData(f),$m(o,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Np=0;Np<mm.length;Np++){var Dp=mm[Np],TR=Dp.toLowerCase(),bR=Dp[0].toUpperCase()+Dp.slice(1);yi(TR,"on"+bR)}yi(Ev,"onAnimationEnd"),yi(Tv,"onAnimationIteration"),yi(bv,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(jC,"onTransitionRun"),yi(zC,"onTransitionStart"),yi(BC,"onTransitionCancel"),yi(wv,"onTransitionEnd"),hs("onMouseEnter",["mouseout","mouseover"]),hs("onMouseLeave",["mouseout","mouseover"]),hs("onPointerEnter",["pointerout","pointerover"]),hs("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du));function qE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],I=S.instance,B=S.currentTarget;if(S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=B;try{m(f)}catch(K){Vh(K)}f.currentTarget=null,m=I}else for(E=0;E<u.length;E++){if(S=u[E],I=S.instance,B=S.currentTarget,S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=B;try{m(f)}catch(K){Vh(K)}f.currentTarget=null,m=I}}}}function ze(i,r){var o=r[ql];o===void 0&&(o=r[ql]=new Set);var u=i+"__bubble";o.has(u)||(FE(r,i,2,!1),o.add(u))}function Op(i,r,o){var u=0;r&&(u|=4),FE(o,i,u,r)}var Xh="_reactListening"+Math.random().toString(36).slice(2);function Mp(i){if(!i[Xh]){i[Xh]=!0,Fl.forEach(function(o){o!=="selectionchange"&&(wR.has(o)||Op(o,!1,i),Op(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Xh]||(r[Xh]=!0,Op("selectionchange",!1,r))}}function FE(i,r,o,u){switch(dT(r)){case 2:var f=XR;break;case 8:f=WR;break;default:f=Yp}o=f.bind(null,r,o,i),f=void 0,!ii||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function kp(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=cs(S),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Zc(function(){var B=m,K=ni(o),Z=[];e:{var F=Sv.get(i);if(F!==void 0){var H=uo,we=i;switch(i){case"keypress":if(Pi(o)===0)break e;case"keydown":case"keyup":H=go;break;case"focusin":we="focus",H=fo;break;case"focusout":we="blur",H=fo;break;case"beforeblur":case"afterblur":H=fo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=si;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=ah;break;case Ev:case Tv:case bv:H=mo;break;case wv:H=lh;break;case"scroll":case"scrollend":H=Jc;break;case"wheel":H=_o;break;case"copy":case"cut":case"paste":H=po;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=tu;break;case"toggle":case"beforetoggle":H=ch}var ve=(r&4)!==0,ut=!ve&&(i==="scroll"||i==="scrollend"),L=ve?F!==null?F+"Capture":null:F;ve=[];for(var M=B,z;M!==null;){var W=M;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||L===null||(W=oa(M,L),W!=null&&ve.push(Ou(M,W,z))),ut)break;M=M.return}0<ve.length&&(F=new H(F,we,null,o,K),Z.push({event:F,listeners:ve}))}}if((r&7)===0){e:{if(F=i==="mouseover"||i==="pointerover",H=i==="mouseout"||i==="pointerout",F&&o!==ms&&(we=o.relatedTarget||o.fromElement)&&(cs(we)||we[ei]))break e;if((H||F)&&(F=K.window===K?K:(F=K.ownerDocument)?F.defaultView||F.parentWindow:window,H?(we=o.relatedTarget||o.toElement,H=B,we=we?cs(we):null,we!==null&&(ut=l(we),ve=we.tag,we!==ut||ve!==5&&ve!==27&&ve!==6)&&(we=null)):(H=null,we=B),H!==we)){if(ve=si,W="onMouseLeave",L="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(ve=tu,W="onPointerLeave",L="onPointerEnter",M="pointer"),ut=H==null?F:Di(H),z=we==null?F:Di(we),F=new ve(W,M+"leave",H,o,K),F.target=ut,F.relatedTarget=z,W=null,cs(K)===B&&(ve=new ve(L,M+"enter",we,o,K),ve.target=z,ve.relatedTarget=ut,W=ve),ut=W,H&&we)t:{for(ve=H,L=we,M=0,z=ve;z;z=qo(z))M++;for(z=0,W=L;W;W=qo(W))z++;for(;0<M-z;)ve=qo(ve),M--;for(;0<z-M;)L=qo(L),z--;for(;M--;){if(ve===L||L!==null&&ve===L.alternate)break t;ve=qo(ve),L=qo(L)}ve=null}else ve=null;H!==null&&HE(Z,F,H,ve,!1),we!==null&&ut!==null&&HE(Z,ut,we,ve,!0)}}e:{if(F=B?Di(B):window,H=F.nodeName&&F.nodeName.toLowerCase(),H==="select"||H==="input"&&F.type==="file")var fe=uv;else if(Kt(F))if(cv)fe=VC;else{fe=kC;var Ve=MC}else H=F.nodeName,!H||H.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?B&&Kl(B.elementType)&&(fe=uv):fe=PC;if(fe&&(fe=fe(i,B))){vs(Z,fe,o,K);break e}Ve&&Ve(i,F,B),i==="focusout"&&B&&F.type==="number"&&B.memoizedProps.value!=null&&tr(F,"number",F.value)}switch(Ve=B?Di(B):window,i){case"focusin":(Kt(Ve)||Ve.contentEditable==="true")&&(yo=Ve,hm=B,su=null);break;case"focusout":su=hm=yo=null;break;case"mousedown":fm=!0;break;case"contextmenu":case"mouseup":case"dragend":fm=!1,yv(Z,o,K);break;case"selectionchange":if(UC)break;case"keydown":case"keyup":yv(Z,o,K)}var ge;if(Ui)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Qe?Q(i,o)&&(Ee="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(Qe||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Qe&&(ge=Xl()):(ki=K,nr="value"in ki?ki.value:ki.textContent,Qe=!0)),Ve=Wh(B,Ee),0<Ve.length&&(Ee=new Jl(Ee,i,null,o,K),Z.push({event:Ee,listeners:Ve}),ge?Ee.data=ge:(ge=ae(o),ge!==null&&(Ee.data=ge)))),(ge=_?Yt(i,o):Ye(i,o))&&(Ee=Wh(B,"onBeforeInput"),0<Ee.length&&(Ve=new Jl("onBeforeInput","beforeinput",null,o,K),Z.push({event:Ve,listeners:Ee}),Ve.data=ge)),ER(Z,i,B,o,K)}qE(Z,r)})}function Ou(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Wh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=oa(i,o),f!=null&&u.unshift(Ou(i,f,m)),f=oa(i,r),f!=null&&u.push(Ou(i,f,m))),i.tag===3)return u;i=i.return}return[]}function qo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function HE(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,I=S.alternate,B=S.stateNode;if(S=S.tag,I!==null&&I===u)break;S!==5&&S!==26&&S!==27||B===null||(I=B,f?(B=oa(o,m),B!=null&&E.unshift(Ou(o,B,I))):f||(B=oa(o,m),B!=null&&E.push(Ou(o,B,I)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var SR=/\r\n?/g,AR=/\u0000|\uFFFD/g;function GE(i){return(typeof i=="string"?i:""+i).replace(SR,`
`).replace(AR,"")}function QE(i,r){return r=GE(r),GE(i)===r}function Zh(){}function lt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||ti(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&ti(i,""+u);break;case"className":Oi(i,"class",u);break;case"tabIndex":Oi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(i,o,u);break;case"style":Yl(i,u,m);break;case"data":if(r!=="object"){Oi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=lo(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&lt(i,r,"name",f.name,f,null),lt(i,r,"formEncType",f.formEncType,f,null),lt(i,r,"formMethod",f.formMethod,f,null),lt(i,r,"formTarget",f.formTarget,f,null)):(lt(i,r,"encType",f.encType,f,null),lt(i,r,"method",f.method,f,null),lt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=lo(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Zh);break;case"onScroll":u!=null&&ze("scroll",i);break;case"onScrollEnd":u!=null&&ze("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=lo(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":ze("beforetoggle",i),ze("toggle",i),er(i,"popover",u);break;case"xlinkActuate":hn(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":hn(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":hn(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":hn(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":hn(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":hn(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":hn(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":hn(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":hn(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":er(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=sm.get(o)||o,er(i,o,u))}}function Pp(i,r,o,u,f,m){switch(o){case"style":Yl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?ti(i,u):(typeof u=="number"||typeof u=="bigint")&&ti(i,""+u);break;case"onScroll":u!=null&&ze("scroll",i);break;case"onScrollEnd":u!=null&&ze("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Zh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!io.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Lt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):er(i,o,u)}}}function pn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",i),ze("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:lt(i,r,m,E,o,null)}}f&&lt(i,r,"srcSet",o.srcSet,o,null),u&&lt(i,r,"src",o.src,o,null);return;case"input":ze("invalid",i);var S=m=E=f=null,I=null,B=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":I=K;break;case"defaultChecked":B=K;break;case"value":m=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:lt(i,r,u,K,o,null)}}sa(i,m,S,I,B,E,f,!1),oo(i);return;case"select":ze("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:lt(i,r,f,S,o,null)}r=m,o=E,i.multiple=!!u,r!=null?ds(i,!!u,r,!1):o!=null&&ds(i,!!u,o,!0);return;case"textarea":ze("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:lt(i,r,E,S,o,null)}ra(i,u,f,m),oo(i);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:lt(i,r,I,u,o,null)}return;case"dialog":ze("beforetoggle",i),ze("toggle",i),ze("cancel",i),ze("close",i);break;case"iframe":case"object":ze("load",i);break;case"video":case"audio":for(u=0;u<Du.length;u++)ze(Du[u],i);break;case"image":ze("error",i),ze("load",i);break;case"details":ze("toggle",i);break;case"embed":case"source":case"link":ze("error",i),ze("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(u=o[B],u!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:lt(i,r,B,u,o,null)}return;default:if(Kl(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&Pp(i,r,K,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&lt(i,r,S,u,o,null))}function CR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,I=null,B=null,K=null;for(H in o){var Z=o[H];if(o.hasOwnProperty(H)&&Z!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=Z;default:u.hasOwnProperty(H)||lt(i,r,H,null,u,Z)}}for(var F in u){var H=u[F];if(Z=o[F],u.hasOwnProperty(F)&&(H!=null||Z!=null))switch(F){case"type":m=H;break;case"name":f=H;break;case"checked":B=H;break;case"defaultChecked":K=H;break;case"value":E=H;break;case"defaultValue":S=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==Z&&lt(i,r,F,H,u,Z)}}Fn(i,E,S,I,B,K,m,f);return;case"select":H=E=S=F=null;for(m in o)if(I=o[m],o.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":H=I;default:u.hasOwnProperty(m)||lt(i,r,m,null,u,I)}for(f in u)if(m=u[f],I=o[f],u.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":F=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==I&&lt(i,r,f,m,u,I)}r=S,o=E,u=H,F!=null?ds(i,!!o,F,!1):!!u!=!!o&&(r!=null?ds(i,!!o,r,!0):ds(i,!!o,o?[]:"",!1));return;case"textarea":H=F=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:lt(i,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":F=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&lt(i,r,E,f,u,m)}at(i,F,H);return;case"option":for(var we in o)if(F=o[we],o.hasOwnProperty(we)&&F!=null&&!u.hasOwnProperty(we))switch(we){case"selected":i.selected=!1;break;default:lt(i,r,we,null,u,F)}for(I in u)if(F=u[I],H=o[I],u.hasOwnProperty(I)&&F!==H&&(F!=null||H!=null))switch(I){case"selected":i.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:lt(i,r,I,F,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in o)F=o[ve],o.hasOwnProperty(ve)&&F!=null&&!u.hasOwnProperty(ve)&&lt(i,r,ve,null,u,F);for(B in u)if(F=u[B],H=o[B],u.hasOwnProperty(B)&&F!==H&&(F!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:lt(i,r,B,F,u,H)}return;default:if(Kl(r)){for(var ut in o)F=o[ut],o.hasOwnProperty(ut)&&F!==void 0&&!u.hasOwnProperty(ut)&&Pp(i,r,ut,void 0,u,F);for(K in u)F=u[K],H=o[K],!u.hasOwnProperty(K)||F===H||F===void 0&&H===void 0||Pp(i,r,K,F,u,H);return}}for(var L in o)F=o[L],o.hasOwnProperty(L)&&F!=null&&!u.hasOwnProperty(L)&&lt(i,r,L,null,u,F);for(Z in u)F=u[Z],H=o[Z],!u.hasOwnProperty(Z)||F===H||F==null&&H==null||lt(i,r,Z,F,u,H)}var Vp=null,Lp=null;function Jh(i){return i.nodeType===9?i:i.ownerDocument}function YE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function KE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Up(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jp=null;function RR(){var i=window.event;return i&&i.type==="popstate"?i===jp?!1:(jp=i,!0):(jp=null,!1)}var $E=typeof setTimeout=="function"?setTimeout:void 0,IR=typeof clearTimeout=="function"?clearTimeout:void 0,XE=typeof Promise=="function"?Promise:void 0,xR=typeof queueMicrotask=="function"?queueMicrotask:typeof XE<"u"?function(i){return XE.resolve(null).then(i).catch(NR)}:$E;function NR(i){setTimeout(function(){throw i})}function yr(i){return i==="head"}function WE(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Mu(E.documentElement),o&2&&Mu(E.body),o&4)for(o=E.head,Mu(o),E=o.firstChild;E;){var S=E.nextSibling,I=E.nodeName;E[ea]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){i.removeChild(m),Bu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Bu(r)}function zp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":zp(o),Js(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function DR(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[ea])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=Ei(i.nextSibling),i===null)break}return null}function OR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ei(i.nextSibling),i===null))return null;return i}function Bp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function MR(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var qp=null;function ZE(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function JE(i,r,o){switch(r=Jh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Mu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Js(i)}var hi=new Map,eT=new Set;function ef(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Os=J.d;J.d={f:kR,r:PR,D:VR,C:LR,L:UR,m:jR,X:BR,S:zR,M:qR};function kR(){var i=Os.f(),r=Gh();return i||r}function PR(i){var r=Ni(i);r!==null&&r.tag===5&&r.type==="form"?E0(r):Os.r(i)}var Fo=typeof document>"u"?null:document;function tT(i,r,o){var u=Fo;if(u&&typeof r=="string"&&r){var f=Ut(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),eT.has(f)||(eT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),pn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function VR(i){Os.D(i),tT("dns-prefetch",i,null)}function LR(i,r){Os.C(i,r),tT("preconnect",i,r)}function UR(i,r,o){Os.L(i,r,o);var u=Fo;if(u&&i&&r){var f='link[rel="preload"][as="'+Ut(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ut(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ut(o.imageSizes)+'"]')):f+='[href="'+Ut(i)+'"]';var m=f;switch(r){case"style":m=Ho(i);break;case"script":m=Go(i)}hi.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),hi.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(ku(m))||r==="script"&&u.querySelector(Pu(m))||(r=u.createElement("link"),pn(r,"link",i),Nt(r),u.head.appendChild(r)))}}function jR(i,r){Os.m(i,r);var o=Fo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Ut(u)+'"][href="'+Ut(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Go(i)}if(!hi.has(m)&&(i=y({rel:"modulepreload",href:i},r),hi.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Pu(m)))return}u=o.createElement("link"),pn(u,"link",i),Nt(u),o.head.appendChild(u)}}}function zR(i,r,o){Os.S(i,r,o);var u=Fo;if(u&&i){var f=Rn(u).hoistableStyles,m=Ho(i);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(ku(m)))S.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=hi.get(m))&&Fp(i,o);var I=E=u.createElement("link");Nt(I),pn(I,"link",i),I._p=new Promise(function(B,K){I.onload=B,I.onerror=K}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,tf(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function BR(i,r){Os.X(i,r);var o=Fo;if(o&&i){var u=Rn(o).hoistableScripts,f=Go(i),m=u.get(f);m||(m=o.querySelector(Pu(f)),m||(i=y({src:i,async:!0},r),(r=hi.get(f))&&Hp(i,r),m=o.createElement("script"),Nt(m),pn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function qR(i,r){Os.M(i,r);var o=Fo;if(o&&i){var u=Rn(o).hoistableScripts,f=Go(i),m=u.get(f);m||(m=o.querySelector(Pu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=hi.get(f))&&Hp(i,r),m=o.createElement("script"),Nt(m),pn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function nT(i,r,o,u){var f=(f=be.current)?ef(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Ho(o.href),o=Rn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Ho(o.href);var m=Rn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(ku(i)))&&!m._p&&(E.instance=m,E.state.loading=5),hi.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},hi.set(i,o),m||FR(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Go(o),o=Rn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Ho(i){return'href="'+Ut(i)+'"'}function ku(i){return'link[rel="stylesheet"]['+i+"]"}function iT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function FR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),pn(r,"link",o),Nt(r),i.head.appendChild(r))}function Go(i){return'[src="'+Ut(i)+'"]'}function Pu(i){return"script[async]"+i}function sT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Ut(o.href)+'"]');if(u)return r.instance=u,Nt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Nt(u),pn(u,"style",f),tf(u,o.precedence,i),r.instance=u;case"stylesheet":f=Ho(o.href);var m=i.querySelector(ku(f));if(m)return r.state.loading|=4,r.instance=m,Nt(m),m;u=iT(o),(f=hi.get(f))&&Fp(u,f),m=(i.ownerDocument||i).createElement("link"),Nt(m);var E=m;return E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),pn(m,"link",u),r.state.loading|=4,tf(m,o.precedence,i),r.instance=m;case"script":return m=Go(o.src),(f=i.querySelector(Pu(m)))?(r.instance=f,Nt(f),f):(u=o,(f=hi.get(m))&&(u=y({},o),Hp(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Nt(f),pn(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,tf(u,o.precedence,i));return r.instance}function tf(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Fp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Hp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var nf=null;function rT(i,r,o){if(nf===null){var u=new Map,f=nf=new Map;f.set(o,u)}else f=nf,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[ea]||m[Qt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function aT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function HR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function oT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Vu=null;function GR(){}function QR(i,r,o){if(Vu===null)throw Error(s(475));var u=Vu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ho(o.href),m=i.querySelector(ku(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=sf.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Nt(m);return}m=i.ownerDocument||i,o=iT(o),(f=hi.get(f))&&Fp(o,f),m=m.createElement("link"),Nt(m);var E=m;E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),pn(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=sf.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function YR(){if(Vu===null)throw Error(s(475));var i=Vu;return i.stylesheets&&i.count===0&&Gp(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Gp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function sf(){if(this.count--,this.count===0){if(this.stylesheets)Gp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var rf=null;function Gp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,rf=new Map,r.forEach(KR,i),rf=null,sf.call(i))}function KR(i,r){if(!(r.state.loading&4)){var o=rf.get(i);if(o)var u=o.get(null);else{o=new Map,rf.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=sf.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Lu={$$typeof:re,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $R(i,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function lT(i,r,o,u,f,m,E,S,I,B,K,Z){return i=new $R(i,r,o,E,S,I,B,Z),r=1,m===!0&&(r|=24),m=Gn(3,null,null,r),i.current=m,m.stateNode=i,r=Cm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Nm(m),i}function uT(i){return i?(i=bo,i):bo}function cT(i,r,o,u,f,m){f=uT(f),u.context===null?u.context=f:u.pendingContext=f,u=rr(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ar(i,u,r),o!==null&&(Xn(o,i,r),du(o,i,r))}function hT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Qp(i,r){hT(i,r),(i=i.alternate)&&hT(i,r)}function fT(i){if(i.tag===13){var r=To(i,67108864);r!==null&&Xn(r,i,67108864),Qp(i,67108864)}}var af=!0;function XR(i,r,o,u){var f=Y.T;Y.T=null;var m=J.p;try{J.p=2,Yp(i,r,o,u)}finally{J.p=m,Y.T=f}}function WR(i,r,o,u){var f=Y.T;Y.T=null;var m=J.p;try{J.p=8,Yp(i,r,o,u)}finally{J.p=m,Y.T=f}}function Yp(i,r,o,u){if(af){var f=Kp(u);if(f===null)kp(i,r,u,of,o),mT(i,u);else if(JR(f,i,r,o,u))u.stopPropagation();else if(mT(i,u),r&4&&-1<ZR.indexOf(i)){for(;f!==null;){var m=Ni(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=pi(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var I=1<<31-Jt(E);S.entanglements[1]|=I,E&=~I}Hi(m),(nt&6)===0&&(Fh=kn()+500,Nu(0))}}break;case 13:S=To(m,2),S!==null&&Xn(S,m,2),Gh(),Qp(m,2)}if(m=Kp(u),m===null&&kp(i,r,u,of,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else kp(i,r,u,null,o)}}function Kp(i){return i=ni(i),$p(i)}var of=null;function $p(i){if(of=null,i=cs(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return of=i,null}function dT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($s()){case as:return 2;case Ii:return 8;case os:case me:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Xp=!1,vr=null,Er=null,Tr=null,Uu=new Map,ju=new Map,br=[],ZR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mT(i,r){switch(i){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Uu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ju.delete(r.pointerId)}}function zu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ni(r),r!==null&&fT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function JR(i,r,o,u,f){switch(r){case"focusin":return vr=zu(vr,i,r,o,u,f),!0;case"dragenter":return Er=zu(Er,i,r,o,u,f),!0;case"mouseover":return Tr=zu(Tr,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Uu.set(m,zu(Uu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,ju.set(m,zu(ju.get(m)||null,i,r,o,u,f)),!0}return!1}function pT(i){var r=cs(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Gc(i.priority,function(){if(o.tag===13){var u=$n();u=Xs(u);var f=To(o,u);f!==null&&Xn(f,o,u),Qp(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function lf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Kp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);ms=u,o.target.dispatchEvent(u),ms=null}else return r=Ni(o),r!==null&&fT(r),i.blockedOn=o,!1;r.shift()}return!0}function gT(i,r,o){lf(i)&&o.delete(r)}function eI(){Xp=!1,vr!==null&&lf(vr)&&(vr=null),Er!==null&&lf(Er)&&(Er=null),Tr!==null&&lf(Tr)&&(Tr=null),Uu.forEach(gT),ju.forEach(gT)}function uf(i,r){i.blockedOn===r&&(i.blockedOn=null,Xp||(Xp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,eI)))}var cf=null;function _T(i){cf!==i&&(cf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){cf===i&&(cf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if($p(u||o)===null)continue;break}var m=Ni(o);m!==null&&(i.splice(r,3),r-=3,$m(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Bu(i){function r(I){return uf(I,i)}vr!==null&&uf(vr,i),Er!==null&&uf(Er,i),Tr!==null&&uf(Tr,i),Uu.forEach(r),ju.forEach(r);for(var o=0;o<br.length;o++){var u=br[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<br.length&&(o=br[0],o.blockedOn===null);)pT(o),o.blockedOn===null&&br.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Lt]||null;if(typeof m=="function")E||_T(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Lt]||null)S=E.formAction;else if($p(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),_T(o)}}}function Wp(i){this._internalRoot=i}hf.prototype.render=Wp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=$n();cT(o,u,i,r,null,null)},hf.prototype.unmount=Wp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;cT(i.current,2,null,i,null,null),Gh(),r[ei]=null}};function hf(i){this._internalRoot=i}hf.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ws();i={blockedOn:null,target:i,priority:r};for(var o=0;o<br.length&&r!==0&&r<br[o].priority;o++);br.splice(o,0,i),o===0&&pT(i)}};var yT=e.version;if(yT!=="19.1.1")throw Error(s(527,yT,"19.1.1"));J.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var tI={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ff=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ff.isDisabled&&ff.supportsFiber)try{dt=ff.inject(tI),Ge=ff}catch{}}return Fu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=k0,m=P0,E=V0,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=lT(i,1,!1,null,null,o,u,f,m,E,S,null),i[ei]=r.current,Mp(i),new Wp(r)},Fu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=k0,E=P0,S=V0,I=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),r=lT(i,1,!0,r,o??null,u,f,m,E,S,I,B),r.context=uT(null),o=r.current,u=$n(),u=Xs(u),f=rr(u),f.callback=null,ar(o,f,u),o=u,r.current.lanes=o,us(r,o),Hi(r),i[ei]=r.current,Mp(i),new hf(r)},Fu.version="19.1.1",Fu}var IT;function hI(){if(IT)return eg.exports;IT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),eg.exports=cI(),eg.exports}var fI=hI();const dI=()=>{};var xT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=function(n,e){if(!n)throw Sl(e)},Sl=function(n){return new Error("Firebase Database ("+$w.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},mI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let b=(d&15)<<2|g>>6,D=g&63;p||(D=64,c||(b=64)),s.push(t[y],t[T],t[b],t[D])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new pI;const b=l<<2|d>>4;if(s.push(b),g!==64){const D=d<<4&240|g>>2;if(s.push(D),T!==64){const U=g<<6&192|T;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ww=function(n){const e=Xw(n);return y_.encodeByteArray(e,!0)},Of=function(n){return Ww(n).replace(/\./g,"")},Mf=function(n){try{return y_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n){return Zw(void 0,n)}function Zw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!_I(t)||(n[t]=Zw(n[t],e[t]));return n}function _I(n){return n!=="__proto__"}/**
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
 */function yI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vI=()=>yI().__FIREBASE_DEFAULTS__,EI=()=>{if(typeof process>"u"||typeof xT>"u")return;const n=xT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},TI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mf(n[1]);return e&&JSON.parse(e)},gd=()=>{try{return dI()||vI()||EI()||TI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jw=n=>gd()?.emulatorHosts?.[n],eS=n=>{const e=Jw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},tS=()=>gd()?.config,nS=n=>gd()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Gr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function v_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function iS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Of(JSON.stringify(t)),Of(JSON.stringify(c)),""].join(".")}const Zu={};function bI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zu))Zu[e]?n.emulator.push(e):n.prod.push(e);return n}function wI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let NT=!1;function E_(n,e){if(typeof window>"u"||typeof document>"u"||!Gr(window.location.host)||Zu[n]===e||Zu[n]||NT)return;Zu[n]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",l=bI().prod.length>0;function c(){const b=document.getElementById(s);b&&b.remove()}function d(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function p(b,D){b.setAttribute("width","24"),b.setAttribute("id",D),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function g(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{NT=!0,c()},b}function y(b,D){b.setAttribute("id",D),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=wI(s),D=t("text"),U=document.getElementById(D)||document.createElement("span"),q=t("learnmore"),G=document.getElementById(q)||document.createElement("a"),se=t("preprendIcon"),ie=document.getElementById(se)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const re=b.element;d(re),y(G,q);const pe=g();p(ie,se),re.append(ie,U,G,pe),document.body.appendChild(re)}l?(U.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function SI(){const n=gd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RI(){const n=An();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function II(){return $w.NODE_ADMIN===!0}function xI(){return!SI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NI(){try{return typeof indexedDB=="object"}catch{return!1}}function DI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="FirebaseError";class Ys extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=OI,Object.setPrototypeOf(this,Ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cc.prototype.create)}}class Cc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?MI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ys(a,d,s)}}function MI(n,e){return n.replace(kI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const kI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const rS=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=cc(Mf(l[0])||""),t=cc(Mf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},PI=function(n){const e=rS(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},VI=function(n){const e=rS(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ll(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Zi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(DT(l)&&DT(c)){if(!Zi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function DT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const b=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(b<<1|b>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const b=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=b}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function UI(n,e){const t=new jI(n,e);return t.subscribe.bind(t)}class jI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");zI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=sg),a.error===void 0&&(a.error=sg),a.complete===void 0&&(a.complete=sg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sg(){}function ul(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,oe(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},_d=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function gt(n){return n&&n._delegate?n._delegate:n}class Vr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ks;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HI(e))try{this.getOrInitializeService({instanceIdentifier:xa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=xa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xa){return this.instances.has(e)}getOptions(e=xa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:FI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xa){return this.component?this.component.multipleInstances?e:xa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FI(n){return n===xa?void 0:n}function HI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const QI={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},YI=Be.INFO,KI={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},$I=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=KI[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=YI,this._logHandler=$I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const XI=(n,e)=>e.some(t=>n instanceof t);let OT,MT;function WI(){return OT||(OT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZI(){return MT||(MT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aS=new WeakMap,Rg=new WeakMap,oS=new WeakMap,rg=new WeakMap,b_=new WeakMap;function JI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(xr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&aS.set(t,n)}).catch(()=>{}),b_.set(e,n),e}function ex(n){if(Rg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Rg.set(n,e)}let Ig={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Rg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||oS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tx(n){Ig=n(Ig)}function nx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ag(this),e,...t);return oS.set(s,e.sort?e.sort():[e]),xr(s)}:ZI().includes(n)?function(...e){return n.apply(ag(this),e),xr(aS.get(this))}:function(...e){return xr(n.apply(ag(this),e))}}function ix(n){return typeof n=="function"?nx(n):(n instanceof IDBTransaction&&ex(n),XI(n,WI())?new Proxy(n,Ig):n)}function xr(n){if(n instanceof IDBRequest)return JI(n);if(rg.has(n))return rg.get(n);const e=ix(n);return e!==n&&(rg.set(n,e),b_.set(e,n)),e}const ag=n=>b_.get(n);function sx(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=xr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(xr(c.result),p.oldVersion,p.newVersion,xr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const rx=["get","getKey","getAll","getAllKeys","count"],ax=["put","add","delete","clear"],og=new Map;function kT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(og.get(e))return og.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=ax.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||rx.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return og.set(e,l),l}tx(n=>({...n,get:(e,t,s)=>kT(e,t)||n.get(e,t,s),has:(e,t)=>!!kT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lx(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lx(n){return n.getComponent()?.type==="VERSION"}const xg="@firebase/app",PT="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new yd("@firebase/app"),ux="@firebase/app-compat",cx="@firebase/analytics-compat",hx="@firebase/analytics",fx="@firebase/app-check-compat",dx="@firebase/app-check",mx="@firebase/auth",px="@firebase/auth-compat",gx="@firebase/database",_x="@firebase/data-connect",yx="@firebase/database-compat",vx="@firebase/functions",Ex="@firebase/functions-compat",Tx="@firebase/installations",bx="@firebase/installations-compat",wx="@firebase/messaging",Sx="@firebase/messaging-compat",Ax="@firebase/performance",Cx="@firebase/performance-compat",Rx="@firebase/remote-config",Ix="@firebase/remote-config-compat",xx="@firebase/storage",Nx="@firebase/storage-compat",Dx="@firebase/firestore",Ox="@firebase/ai",Mx="@firebase/firestore-compat",kx="firebase",Px="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="[DEFAULT]",Vx={[xg]:"fire-core",[ux]:"fire-core-compat",[hx]:"fire-analytics",[cx]:"fire-analytics-compat",[dx]:"fire-app-check",[fx]:"fire-app-check-compat",[mx]:"fire-auth",[px]:"fire-auth-compat",[gx]:"fire-rtdb",[_x]:"fire-data-connect",[yx]:"fire-rtdb-compat",[vx]:"fire-fn",[Ex]:"fire-fn-compat",[Tx]:"fire-iid",[bx]:"fire-iid-compat",[wx]:"fire-fcm",[Sx]:"fire-fcm-compat",[Ax]:"fire-perf",[Cx]:"fire-perf-compat",[Rx]:"fire-rc",[Ix]:"fire-rc-compat",[xx]:"fire-gcs",[Nx]:"fire-gcs-compat",[Dx]:"fire-fst",[Mx]:"fire-fst-compat",[Ox]:"fire-vertex","fire-js":"fire-js",[kx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Map,Lx=new Map,Dg=new Map;function VT(n,e){try{n.container.addComponent(e)}catch(t){Bs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ja(n){const e=n.name;if(Dg.has(e))return Bs.debug(`There were multiple attempts to register component ${e}.`),!1;Dg.set(e,n);for(const t of Vf.values())VT(t,n);for(const t of Lx.values())VT(t,n);return!0}function vd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Cc("app","Firebase",Ux);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=Px;function lS(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ng,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Nr.create("bad-app-name",{appName:String(a)});if(t||(t=tS()),!t)throw Nr.create("no-options");const l=Vf.get(a);if(l){if(Zi(t,l.options)&&Zi(s,l.config))return l;throw Nr.create("duplicate-app",{appName:a})}const c=new GI(a);for(const p of Dg.values())c.addComponent(p);const d=new jx(t,s,c);return Vf.set(a,d),d}function w_(n=Ng){const e=Vf.get(n);if(!e&&n===Ng&&tS())return lS();if(!e)throw Nr.create("no-app",{appName:n});return e}function Qi(n,e,t){let s=Vx[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bs.warn(c.join(" "));return}ja(new Vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zx="firebase-heartbeat-database",Bx=1,hc="firebase-heartbeat-store";let lg=null;function uS(){return lg||(lg=sx(zx,Bx,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nr.create("idb-open",{originalErrorMessage:n.message})})),lg}async function qx(n){try{const t=(await uS()).transaction(hc),s=await t.objectStore(hc).get(cS(n));return await t.done,s}catch(e){if(e instanceof Ys)Bs.warn(e.message);else{const t=Nr.create("idb-get",{originalErrorMessage:e?.message});Bs.warn(t.message)}}}async function LT(n,e){try{const s=(await uS()).transaction(hc,"readwrite");await s.objectStore(hc).put(e,cS(n)),await s.done}catch(t){if(t instanceof Ys)Bs.warn(t.message);else{const s=Nr.create("idb-set",{originalErrorMessage:t?.message});Bs.warn(s.message)}}}function cS(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Fx=1024,Hx=30;class Gx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=UT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>Hx){const a=Kx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Bs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=UT(),{heartbeatsToSend:t,unsentEntries:s}=Qx(this._heartbeatsCache.heartbeats),a=Of(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Bs.warn(e),""}}}function UT(){return new Date().toISOString().substring(0,10)}function Qx(n,e=Fx){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),jT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),jT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NI()?DI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qx(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return LT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return LT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jT(n){return Of(JSON.stringify({version:2,heartbeats:n})).length}function Kx(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(n){ja(new Vr("platform-logger",e=>new ox(e),"PRIVATE")),ja(new Vr("heartbeat",e=>new Gx(e),"PRIVATE")),Qi(xg,PT,n),Qi(xg,PT,"esm2020"),Qi("fire-js","")}$x("");var Xx="firebase",Wx="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi(Xx,Wx,"app");function hS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zx=hS,fS=new Cc("auth","Firebase",hS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new yd("@firebase/auth");function Jx(n,...e){Lf.logLevel<=Be.WARN&&Lf.warn(`Auth (${Ka}): ${n}`,...e)}function Tf(n,...e){Lf.logLevel<=Be.ERROR&&Lf.error(`Auth (${Ka}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,...e){throw A_(n,...e)}function Si(n,...e){return A_(n,...e)}function S_(n,e,t){const s={...Zx(),[e]:t};return new Cc("auth","Firebase",s).create(e,{appName:n.name})}function Dr(n){return S_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ji(n,"argument-error"),S_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function A_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return fS.create(n,...e)}function Ae(n,e,...t){if(!n)throw A_(e,...t)}function Vs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tf(e),new Error(e)}function qs(n,e){n||Vs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){return typeof self<"u"&&self.location?.href||""}function tN(){return zT()==="http:"||zT()==="https:"}function zT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tN()||CI()||"connection"in navigator)?navigator.onLine:!0}function iN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.shortDelay=e,this.longDelay=t,qs(t>e,"Short delay should be less than long delay!"),this.isMobile=T_()||sS()}get(){return nN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(n,e){qs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aN=new Rc(3e4,6e4);function Ed(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Cl(n,e,t,s,a={}){return mS(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=Al({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return AI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Gr(n.emulatorConfig.host)&&(g.credentials="include"),dS.fetch()(await gS(n,n.config.apiHost,t,d),g)})}async function mS(n,e,t){n._canInitEmulator=!1;const s={...sN,...e};try{const a=new oN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw df(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw df(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw df(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw df(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw S_(n,y,g);Ji(n,y)}}catch(a){if(a instanceof Ys)throw a;Ji(n,"network-request-failed",{message:String(a)})}}async function pS(n,e,t,s,a={}){const l=await Cl(n,e,t,s,a);return"mfaPendingCredential"in l&&Ji(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function gS(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?C_(n.config,a):`${n.config.apiScheme}://${a}`;return rN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class oN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Si(this.auth,"network-request-failed")),aN.get())})}}function df(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Si(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(n,e){return Cl(n,"POST","/v1/accounts:delete",e)}async function Uf(n,e){return Cl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uN(n,e=!1){const t=gt(n),s=await t.getIdToken(e),a=R_(s);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Ju(ug(a.auth_time)),issuedAtTime:Ju(ug(a.iat)),expirationTime:Ju(ug(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ug(n){return Number(n)*1e3}function R_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Tf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Mf(t);return a?JSON.parse(a):(Tf("Failed to decode base64 JWT payload"),null)}catch(a){return Tf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function BT(n){const e=R_(n);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ys&&cN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function cN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ju(this.lastLoginAt),this.creationTime=Ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(n){const e=n.auth,t=await n.getIdToken(),s=await fc(n,Uf(e,{idToken:t}));Ae(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?_S(a.providerUserInfo):[],c=dN(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!c?.length,g=d?p:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Mg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function fN(n){const e=gt(n);await jf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dN(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function _S(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(n,e){const t=await mS(n,{},async()=>{const s=Al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await gS(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Gr(n.emulatorConfig.host)&&(p.credentials="include"),dS.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pN(n,e){return Cl(n,"POST","/v2/accounts:revokeToken",Ed(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):BT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=BT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await mN(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new el;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new el,this.toJSON())}_performRefresh(){return Vs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n,e){Ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bi{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new hN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Mg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await fc(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uN(this,e)}reload(){return fN(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await jf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(Dr(this.auth));const e=await this.getIdToken();return await fc(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:T,emailVerified:b,isAnonymous:D,providerData:U,stsTokenManager:q}=t;Ae(T&&q,e,"internal-error");const G=el.fromJSON(this.name,q);Ae(typeof T=="string",e,"internal-error"),Sr(s,e.name),Sr(a,e.name),Ae(typeof b=="boolean",e,"internal-error"),Ae(typeof D=="boolean",e,"internal-error"),Sr(l,e.name),Sr(c,e.name),Sr(d,e.name),Sr(p,e.name),Sr(g,e.name),Sr(y,e.name);const se=new bi({uid:T,auth:e,email:a,emailVerified:b,displayName:s,isAnonymous:D,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:G,createdAt:g,lastLoginAt:y});return U&&Array.isArray(U)&&(se.providerData=U.map(ie=>({...ie}))),p&&(se._redirectEventId=p),se}static async _fromIdTokenResponse(e,t,s=!1){const a=new el;a.updateFromServerResponse(t);const l=new bi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await jf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?_S(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new el;d.updateFromIdToken(s);const p=new bi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Mg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new Map;function Ls(n){qs(n instanceof Function,"Expected a class definition");let e=qT.get(n);return e?(qs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yS.type="NONE";const FT=yS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n,e,t){return`firebase:${n}:${e}:${t}`}class tl{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=bf(this.userKey,a.apiKey,l),this.fullPersistenceKey=bf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uf(this.auth,{idToken:e}).catch(()=>{});return t?bi._fromGetAccountInfoResponse(this.auth,t,e):null}return bi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new tl(Ls(FT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ls(FT);const c=bf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const b=await Uf(e,{idToken:y}).catch(()=>{});if(!b)break;T=await bi._fromGetAccountInfoResponse(e,b,y)}else T=bi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new tl(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new tl(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SS(e))return"Blackberry";if(AS(e))return"Webos";if(ES(e))return"Safari";if((e.includes("chrome/")||TS(e))&&!e.includes("edge/"))return"Chrome";if(wS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function vS(n=An()){return/firefox\//i.test(n)}function ES(n=An()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TS(n=An()){return/crios\//i.test(n)}function bS(n=An()){return/iemobile/i.test(n)}function wS(n=An()){return/android/i.test(n)}function SS(n=An()){return/blackberry/i.test(n)}function AS(n=An()){return/webos/i.test(n)}function I_(n=An()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gN(n=An()){return I_(n)&&!!window.navigator?.standalone}function _N(){return RI()&&document.documentMode===10}function CS(n=An()){return I_(n)||wS(n)||AS(n)||SS(n)||/windows phone/i.test(n)||bS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n,e=[]){let t;switch(n){case"Browser":t=HT(An());break;case"Worker":t=`${HT(An())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ka}/${s}`}/**
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
 */class yN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function vN(n,e={}){return Cl(n,"GET","/v2/passwordPolicy",Ed(n,e))}/**
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
 */const EN=6;class TN{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??EN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new GT(this),this.idTokenSubscription=new GT(this),this.beforeStateQueue=new yN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ls(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await tl.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uf(this,{idToken:e}),s=await bi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Wn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===c)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(Dr(this));const t=e?gt(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(Dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(Dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ls(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vN(this),t=new TN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await pN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ls(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await tl.create(this,[Ls(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=RS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Jx(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ic(n){return gt(n)}class GT{constructor(e){this.auth=e,this.observer=null,this.addObserver=UI(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wN(n){x_=n}function SN(n){return x_.loadJS(n)}function AN(){return x_.gapiScript}function CN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(n,e){const t=vd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Zi(l,e??{}))return a;Ji(a,"already-initialized")}return t.initialize({options:e})}function IN(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ls);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function xN(n,e,t){const s=Ic(n);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=IS(e),{host:c,port:d}=NN(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(Zi(g,s.config.emulator)&&Zi(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Gr(c)?(v_(`${l}//${c}${p}`),E_("Auth",!0)):DN()}function IS(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NN(n){const e=IS(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:QT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:QT(c)}}}function QT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function DN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vs("not implemented")}_getIdTokenResponse(e){return Vs("not implemented")}_linkToIdToken(e,t){return Vs("not implemented")}_getReauthenticationResolver(e){return Vs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e){return pS(n,"POST","/v1/accounts:signInWithIdp",Ed(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="http://localhost";class za extends xS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new za(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ji("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const c=new za(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return nl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,nl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nl(e,t)}buildRequest(){const e={requestUri:ON,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Al(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xc extends N_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends xc{constructor(){super("facebook.com")}static credential(e){return za._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends xc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return za._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ps.credential(t,s)}catch{return null}}}Ps.GOOGLE_SIGN_IN_METHOD="google.com";Ps.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends xc{constructor(){super("github.com")}static credential(e){return za._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends xc{constructor(){super("twitter.com")}static credential(e,t){return za._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Rr.credential(t,s)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await bi._fromIdTokenResponse(e,s,a),c=YT(s);return new Ba({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=YT(s);return new Ba({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function YT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends Ys{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,zf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new zf(e,t,s,a)}}function NS(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?zf._fromErrorAndOperation(n,l,e,s):l})}async function MN(n,e,t=!1){const s=await fc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ba._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(n,e,t=!1){const{auth:s}=n;if(Wn(s.app))return Promise.reject(Dr(s));const a="reauthenticate";try{const l=await fc(n,NS(s,a,e,n),t);Ae(l.idToken,s,"internal-error");const c=R_(l.idToken);Ae(c,s,"internal-error");const{sub:d}=c;return Ae(n.uid===d,s,"user-mismatch"),Ba._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ji(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(n,e,t=!1){if(Wn(n.app))return Promise.reject(Dr(n));const s="signIn",a=await NS(n,s,e),l=await Ba._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(n,e){return pS(n,"POST","/v1/accounts:signInWithCustomToken",Ed(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(n,e){if(Wn(n.app))return Promise.reject(Dr(n));const t=Ic(n),s=await VN(t,{token:e,returnSecureToken:!0}),a=await Ba._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function UN(n,e,t,s){return gt(n).onIdTokenChanged(e,t,s)}function jN(n,e,t){return gt(n).beforeAuthStateChanged(e,t)}function zN(n,e,t,s){return gt(n).onAuthStateChanged(e,t,s)}function BN(n){return gt(n).signOut()}const Bf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bf,"1"),this.storage.removeItem(Bf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=1e3,FN=10;class OS extends DS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);_N()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,FN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}OS.type="LOCAL";const HN=OS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS extends DS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}MS.type="SESSION";const kS=MS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Td(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await GN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Td.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=D_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const b=T;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(b.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return window}function YN(n){Yi().location.href=n}/**
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
 */function PS(){return typeof Yi().WorkerGlobalScope<"u"&&typeof Yi().importScripts=="function"}async function KN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $N(){return navigator?.serviceWorker?.controller||null}function XN(){return PS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="firebaseLocalStorageDb",WN=1,qf="firebaseLocalStorage",LS="fbase_key";class Nc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bd(n,e){return n.transaction([qf],e?"readwrite":"readonly").objectStore(qf)}function ZN(){const n=indexedDB.deleteDatabase(VS);return new Nc(n).toPromise()}function kg(){const n=indexedDB.open(VS,WN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(qf,{keyPath:LS})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(qf)?e(s):(s.close(),await ZN(),e(await kg()))})})}async function KT(n,e,t){const s=bd(n,!0).put({[LS]:e,value:t});return new Nc(s).toPromise()}async function JN(n,e){const t=bd(n,!1).get(e),s=await new Nc(t).toPromise();return s===void 0?null:s.value}function $T(n,e){const t=bd(n,!0).delete(e);return new Nc(t).toPromise()}const e2=800,t2=3;class US{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>t2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Td._getInstance(XN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await KN(),!this.activeServiceWorker)return;this.sender=new QN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$N()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kg();return await KT(e,Bf,"1"),await $T(e,Bf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>KT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>JN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$T(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=bd(a,!1).getAll();return new Nc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}US.type="LOCAL";const n2=US;new Rc(3e4,6e4);/**
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
 */function jS(n,e){return e?Ls(e):(Ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_ extends xS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function i2(n){return PN(n.auth,new O_(n),n.bypassAuthState)}function s2(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),kN(t,new O_(n),n.bypassAuthState)}async function r2(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),MN(t,new O_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i2;case"linkViaPopup":case"linkViaRedirect":return r2;case"reauthViaPopup":case"reauthViaRedirect":return s2;default:Ji(this.auth,"internal-error")}}resolve(e){qs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=new Rc(2e3,1e4);async function o2(n,e,t){if(Wn(n.app))return Promise.reject(Si(n,"operation-not-supported-in-this-environment"));const s=Ic(n);eN(n,e,N_);const a=jS(s,t);return new Da(s,"signInViaPopup",e,a).executeNotNull()}class Da extends zS{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Da.currentPopupAction&&Da.currentPopupAction.cancel(),Da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){qs(this.filter.length===1,"Popup operations only handle one event");const e=D_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Si(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Si(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Da.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Si(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,a2.get())};e()}}Da.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2="pendingRedirect",wf=new Map;class u2 extends zS{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=wf.get(this.auth._key());if(!e){try{const s=await c2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}wf.set(this.auth._key(),e)}return this.bypassAuthState||wf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c2(n,e){const t=d2(e),s=f2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function h2(n,e){wf.set(n._key(),e)}function f2(n){return Ls(n._redirectPersistence)}function d2(n){return bf(l2,n.config.apiKey,n.name)}async function m2(n,e,t=!1){if(Wn(n.app))return Promise.reject(Dr(n));const s=Ic(n),a=jS(s,e),c=await new u2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=600*1e3;class g2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!BS(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Si(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p2&&this.cachedEventUids.clear(),this.cachedEventUids.has(XT(e))}saveEventToCache(e){this.cachedEventUids.add(XT(e)),this.lastProcessedEventTime=Date.now()}}function XT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function BS({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function _2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BS(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y2(n,e={}){return Cl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E2=/^https?/;async function T2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await y2(n);for(const t of e)try{if(b2(t))return}catch{}Ji(n,"unauthorized-domain")}function b2(n){const e=Og(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!E2.test(t))return!1;if(v2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const w2=new Rc(3e4,6e4);function WT(){const n=Yi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function S2(n){return new Promise((e,t)=>{function s(){WT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{WT(),t(Si(n,"network-request-failed"))},timeout:w2.get()})}if(Yi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Yi().gapi?.load)s();else{const a=CN("iframefcb");return Yi()[a]=()=>{gapi.load?s():t(Si(n,"network-request-failed"))},SN(`${AN()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Sf=null,e})}let Sf=null;function A2(n){return Sf=Sf||S2(n),Sf}/**
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
 */const C2=new Rc(5e3,15e3),R2="__/auth/iframe",I2="emulator/auth/iframe",x2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D2(n){const e=n.config;Ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?C_(e,I2):`https://${n.config.authDomain}/${R2}`,s={apiKey:e.apiKey,appName:n.name,v:Ka},a=N2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Al(s).slice(1)}`}async function O2(n){const e=await A2(n),t=Yi().gapi;return Ae(t,n,"internal-error"),e.open({where:document.body,url:D2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Si(n,"network-request-failed"),d=Yi().setTimeout(()=>{l(c)},C2.get());function p(){Yi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const M2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k2=500,P2=600,V2="_blank",L2="http://localhost";class ZT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U2(n,e,t,s=k2,a=P2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...M2,width:s.toString(),height:a.toString(),top:l,left:c},g=An().toLowerCase();t&&(d=TS(g)?V2:t),vS(g)&&(e=e||L2,p.scrollbars="yes");const y=Object.entries(p).reduce((b,[D,U])=>`${b}${D}=${U},`,"");if(gN(g)&&d!=="_self")return j2(e||"",d),new ZT(null);const T=window.open(e||"",d,y);Ae(T,n,"popup-blocked");try{T.focus()}catch{}return new ZT(T)}function j2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const z2="__/auth/handler",B2="emulator/auth/handler",q2=encodeURIComponent("fac");async function JT(n,e,t,s,a,l){Ae(n.config.authDomain,n,"auth-domain-config-required"),Ae(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ka,eventId:a};if(e instanceof N_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",kf(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof xc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${q2}=${encodeURIComponent(p)}`:"";return`${F2(n)}?${Al(d).slice(1)}${g}`}function F2({config:n}){return n.emulator?C_(n,B2):`https://${n.authDomain}/${z2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="webStorageSupport";class H2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kS,this._completeRedirectFn=m2,this._overrideRedirectResult=h2}async _openPopup(e,t,s,a){qs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await JT(e,t,s,Og(),a);return U2(e,l,D_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await JT(e,t,s,Og(),a);return YN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(qs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await O2(e),s=new g2(e);return t.register("authEvent",a=>(Ae(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cg,{type:cg},a=>{const l=a?.[0]?.[cg];l!==void 0&&t(!!l),Ji(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=T2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return CS()||ES()||I_()}}const G2=H2;var eb="@firebase/auth",tb="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K2(n){ja(new Vr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RS(n)},g=new bN(s,a,l,p);return IN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ja(new Vr("auth-internal",e=>{const t=Ic(e.getProvider("auth").getImmediate());return(s=>new Q2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qi(eb,tb,Y2(n)),Qi(eb,tb,"esm2020")}/**
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
 */const $2=300,X2=nS("authIdTokenMaxAge")||$2;let nb=null;const W2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>X2)return;const a=t?.token;nb!==a&&(nb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Z2(n=w_()){const e=vd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=RN(n,{popupRedirectResolver:G2,persistence:[n2,HN,kS]}),s=nS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=W2(l.toString());jN(t,c,()=>c(t.currentUser)),UN(t,d=>c(d))}}const a=Jw("auth");return a&&xN(t,`http://${a}`),t}function J2(){return document.getElementsByTagName("head")?.[0]??document}wN({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=Si("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",J2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K2("Browser");var ib=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,qS;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,C){function x(){}x.prototype=C.prototype,P.D=C.prototype,P.prototype=new x,P.prototype.constructor=P,P.C=function(k,N,V){for(var R=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)R[_t-2]=arguments[_t];return C.prototype[N].apply(k,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,C,x){x||(x=0);var k=Array(16);if(typeof C=="string")for(var N=0;16>N;++N)k[N]=C.charCodeAt(x++)|C.charCodeAt(x++)<<8|C.charCodeAt(x++)<<16|C.charCodeAt(x++)<<24;else for(N=0;16>N;++N)k[N]=C[x++]|C[x++]<<8|C[x++]<<16|C[x++]<<24;C=P.g[0],x=P.g[1],N=P.g[2];var V=P.g[3],R=C+(V^x&(N^V))+k[0]+3614090360&4294967295;C=x+(R<<7&4294967295|R>>>25),R=V+(N^C&(x^N))+k[1]+3905402710&4294967295,V=C+(R<<12&4294967295|R>>>20),R=N+(x^V&(C^x))+k[2]+606105819&4294967295,N=V+(R<<17&4294967295|R>>>15),R=x+(C^N&(V^C))+k[3]+3250441966&4294967295,x=N+(R<<22&4294967295|R>>>10),R=C+(V^x&(N^V))+k[4]+4118548399&4294967295,C=x+(R<<7&4294967295|R>>>25),R=V+(N^C&(x^N))+k[5]+1200080426&4294967295,V=C+(R<<12&4294967295|R>>>20),R=N+(x^V&(C^x))+k[6]+2821735955&4294967295,N=V+(R<<17&4294967295|R>>>15),R=x+(C^N&(V^C))+k[7]+4249261313&4294967295,x=N+(R<<22&4294967295|R>>>10),R=C+(V^x&(N^V))+k[8]+1770035416&4294967295,C=x+(R<<7&4294967295|R>>>25),R=V+(N^C&(x^N))+k[9]+2336552879&4294967295,V=C+(R<<12&4294967295|R>>>20),R=N+(x^V&(C^x))+k[10]+4294925233&4294967295,N=V+(R<<17&4294967295|R>>>15),R=x+(C^N&(V^C))+k[11]+2304563134&4294967295,x=N+(R<<22&4294967295|R>>>10),R=C+(V^x&(N^V))+k[12]+1804603682&4294967295,C=x+(R<<7&4294967295|R>>>25),R=V+(N^C&(x^N))+k[13]+4254626195&4294967295,V=C+(R<<12&4294967295|R>>>20),R=N+(x^V&(C^x))+k[14]+2792965006&4294967295,N=V+(R<<17&4294967295|R>>>15),R=x+(C^N&(V^C))+k[15]+1236535329&4294967295,x=N+(R<<22&4294967295|R>>>10),R=C+(N^V&(x^N))+k[1]+4129170786&4294967295,C=x+(R<<5&4294967295|R>>>27),R=V+(x^N&(C^x))+k[6]+3225465664&4294967295,V=C+(R<<9&4294967295|R>>>23),R=N+(C^x&(V^C))+k[11]+643717713&4294967295,N=V+(R<<14&4294967295|R>>>18),R=x+(V^C&(N^V))+k[0]+3921069994&4294967295,x=N+(R<<20&4294967295|R>>>12),R=C+(N^V&(x^N))+k[5]+3593408605&4294967295,C=x+(R<<5&4294967295|R>>>27),R=V+(x^N&(C^x))+k[10]+38016083&4294967295,V=C+(R<<9&4294967295|R>>>23),R=N+(C^x&(V^C))+k[15]+3634488961&4294967295,N=V+(R<<14&4294967295|R>>>18),R=x+(V^C&(N^V))+k[4]+3889429448&4294967295,x=N+(R<<20&4294967295|R>>>12),R=C+(N^V&(x^N))+k[9]+568446438&4294967295,C=x+(R<<5&4294967295|R>>>27),R=V+(x^N&(C^x))+k[14]+3275163606&4294967295,V=C+(R<<9&4294967295|R>>>23),R=N+(C^x&(V^C))+k[3]+4107603335&4294967295,N=V+(R<<14&4294967295|R>>>18),R=x+(V^C&(N^V))+k[8]+1163531501&4294967295,x=N+(R<<20&4294967295|R>>>12),R=C+(N^V&(x^N))+k[13]+2850285829&4294967295,C=x+(R<<5&4294967295|R>>>27),R=V+(x^N&(C^x))+k[2]+4243563512&4294967295,V=C+(R<<9&4294967295|R>>>23),R=N+(C^x&(V^C))+k[7]+1735328473&4294967295,N=V+(R<<14&4294967295|R>>>18),R=x+(V^C&(N^V))+k[12]+2368359562&4294967295,x=N+(R<<20&4294967295|R>>>12),R=C+(x^N^V)+k[5]+4294588738&4294967295,C=x+(R<<4&4294967295|R>>>28),R=V+(C^x^N)+k[8]+2272392833&4294967295,V=C+(R<<11&4294967295|R>>>21),R=N+(V^C^x)+k[11]+1839030562&4294967295,N=V+(R<<16&4294967295|R>>>16),R=x+(N^V^C)+k[14]+4259657740&4294967295,x=N+(R<<23&4294967295|R>>>9),R=C+(x^N^V)+k[1]+2763975236&4294967295,C=x+(R<<4&4294967295|R>>>28),R=V+(C^x^N)+k[4]+1272893353&4294967295,V=C+(R<<11&4294967295|R>>>21),R=N+(V^C^x)+k[7]+4139469664&4294967295,N=V+(R<<16&4294967295|R>>>16),R=x+(N^V^C)+k[10]+3200236656&4294967295,x=N+(R<<23&4294967295|R>>>9),R=C+(x^N^V)+k[13]+681279174&4294967295,C=x+(R<<4&4294967295|R>>>28),R=V+(C^x^N)+k[0]+3936430074&4294967295,V=C+(R<<11&4294967295|R>>>21),R=N+(V^C^x)+k[3]+3572445317&4294967295,N=V+(R<<16&4294967295|R>>>16),R=x+(N^V^C)+k[6]+76029189&4294967295,x=N+(R<<23&4294967295|R>>>9),R=C+(x^N^V)+k[9]+3654602809&4294967295,C=x+(R<<4&4294967295|R>>>28),R=V+(C^x^N)+k[12]+3873151461&4294967295,V=C+(R<<11&4294967295|R>>>21),R=N+(V^C^x)+k[15]+530742520&4294967295,N=V+(R<<16&4294967295|R>>>16),R=x+(N^V^C)+k[2]+3299628645&4294967295,x=N+(R<<23&4294967295|R>>>9),R=C+(N^(x|~V))+k[0]+4096336452&4294967295,C=x+(R<<6&4294967295|R>>>26),R=V+(x^(C|~N))+k[7]+1126891415&4294967295,V=C+(R<<10&4294967295|R>>>22),R=N+(C^(V|~x))+k[14]+2878612391&4294967295,N=V+(R<<15&4294967295|R>>>17),R=x+(V^(N|~C))+k[5]+4237533241&4294967295,x=N+(R<<21&4294967295|R>>>11),R=C+(N^(x|~V))+k[12]+1700485571&4294967295,C=x+(R<<6&4294967295|R>>>26),R=V+(x^(C|~N))+k[3]+2399980690&4294967295,V=C+(R<<10&4294967295|R>>>22),R=N+(C^(V|~x))+k[10]+4293915773&4294967295,N=V+(R<<15&4294967295|R>>>17),R=x+(V^(N|~C))+k[1]+2240044497&4294967295,x=N+(R<<21&4294967295|R>>>11),R=C+(N^(x|~V))+k[8]+1873313359&4294967295,C=x+(R<<6&4294967295|R>>>26),R=V+(x^(C|~N))+k[15]+4264355552&4294967295,V=C+(R<<10&4294967295|R>>>22),R=N+(C^(V|~x))+k[6]+2734768916&4294967295,N=V+(R<<15&4294967295|R>>>17),R=x+(V^(N|~C))+k[13]+1309151649&4294967295,x=N+(R<<21&4294967295|R>>>11),R=C+(N^(x|~V))+k[4]+4149444226&4294967295,C=x+(R<<6&4294967295|R>>>26),R=V+(x^(C|~N))+k[11]+3174756917&4294967295,V=C+(R<<10&4294967295|R>>>22),R=N+(C^(V|~x))+k[2]+718787259&4294967295,N=V+(R<<15&4294967295|R>>>17),R=x+(V^(N|~C))+k[9]+3951481745&4294967295,P.g[0]=P.g[0]+C&4294967295,P.g[1]=P.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+V&4294967295}s.prototype.u=function(P,C){C===void 0&&(C=P.length);for(var x=C-this.blockSize,k=this.B,N=this.h,V=0;V<C;){if(N==0)for(;V<=x;)a(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<C;)if(k[N++]=P.charCodeAt(V++),N==this.blockSize){a(this,k),N=0;break}}else for(;V<C;)if(k[N++]=P[V++],N==this.blockSize){a(this,k),N=0;break}}this.h=N,this.o+=C},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var C=1;C<P.length-8;++C)P[C]=0;var x=8*this.o;for(C=P.length-8;C<P.length;++C)P[C]=x&255,x/=256;for(this.u(P),P=Array(16),C=x=0;4>C;++C)for(var k=0;32>k;k+=8)P[x++]=this.g[C]>>>k&255;return P};function l(P,C){var x=d;return Object.prototype.hasOwnProperty.call(x,P)?x[P]:x[P]=C(P)}function c(P,C){this.h=C;for(var x=[],k=!0,N=P.length-1;0<=N;N--){var V=P[N]|0;k&&V==C||(x[N]=V,k=!1)}this.g=x}var d={};function p(P){return-128<=P&&128>P?l(P,function(C){return new c([C|0],0>C?-1:0)}):new c([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return G(g(-P));for(var C=[],x=1,k=0;P>=x;k++)C[k]=P/x|0,x*=4294967296;return new c(C,0)}function y(P,C){if(P.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P.charAt(0)=="-")return G(y(P.substring(1),C));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=g(Math.pow(C,8)),k=T,N=0;N<P.length;N+=8){var V=Math.min(8,P.length-N),R=parseInt(P.substring(N,N+V),C);8>V?(V=g(Math.pow(C,V)),k=k.j(V).add(g(R))):(k=k.j(x),k=k.add(g(R)))}return k}var T=p(0),b=p(1),D=p(16777216);n=c.prototype,n.m=function(){if(q(this))return-G(this).m();for(var P=0,C=1,x=0;x<this.g.length;x++){var k=this.i(x);P+=(0<=k?k:4294967296+k)*C,C*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(U(this))return"0";if(q(this))return"-"+G(this).toString(P);for(var C=g(Math.pow(P,6)),x=this,k="";;){var N=pe(x,C).g;x=se(x,N.j(C));var V=((0<x.g.length?x.g[0]:x.h)>>>0).toString(P);if(x=N,U(x))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function U(P){if(P.h!=0)return!1;for(var C=0;C<P.g.length;C++)if(P.g[C]!=0)return!1;return!0}function q(P){return P.h==-1}n.l=function(P){return P=se(this,P),q(P)?-1:U(P)?0:1};function G(P){for(var C=P.g.length,x=[],k=0;k<C;k++)x[k]=~P.g[k];return new c(x,~P.h).add(b)}n.abs=function(){return q(this)?G(this):this},n.add=function(P){for(var C=Math.max(this.g.length,P.g.length),x=[],k=0,N=0;N<=C;N++){var V=k+(this.i(N)&65535)+(P.i(N)&65535),R=(V>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);k=R>>>16,V&=65535,R&=65535,x[N]=R<<16|V}return new c(x,x[x.length-1]&-2147483648?-1:0)};function se(P,C){return P.add(G(C))}n.j=function(P){if(U(this)||U(P))return T;if(q(this))return q(P)?G(this).j(G(P)):G(G(this).j(P));if(q(P))return G(this.j(G(P)));if(0>this.l(D)&&0>P.l(D))return g(this.m()*P.m());for(var C=this.g.length+P.g.length,x=[],k=0;k<2*C;k++)x[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<P.g.length;N++){var V=this.i(k)>>>16,R=this.i(k)&65535,_t=P.i(N)>>>16,Xe=P.i(N)&65535;x[2*k+2*N]+=R*Xe,ie(x,2*k+2*N),x[2*k+2*N+1]+=V*Xe,ie(x,2*k+2*N+1),x[2*k+2*N+1]+=R*_t,ie(x,2*k+2*N+1),x[2*k+2*N+2]+=V*_t,ie(x,2*k+2*N+2)}for(k=0;k<C;k++)x[k]=x[2*k+1]<<16|x[2*k];for(k=C;k<2*C;k++)x[k]=0;return new c(x,0)};function ie(P,C){for(;(P[C]&65535)!=P[C];)P[C+1]+=P[C]>>>16,P[C]&=65535,C++}function re(P,C){this.g=P,this.h=C}function pe(P,C){if(U(C))throw Error("division by zero");if(U(P))return new re(T,T);if(q(P))return C=pe(G(P),C),new re(G(C.g),G(C.h));if(q(C))return C=pe(P,G(C)),new re(G(C.g),C.h);if(30<P.g.length){if(q(P)||q(C))throw Error("slowDivide_ only works with positive integers.");for(var x=b,k=C;0>=k.l(P);)x=de(x),k=de(k);var N=Ne(x,1),V=Ne(k,1);for(k=Ne(k,2),x=Ne(x,2);!U(k);){var R=V.add(k);0>=R.l(P)&&(N=N.add(x),V=R),k=Ne(k,1),x=Ne(x,1)}return C=se(P,N.j(C)),new re(N,C)}for(N=T;0<=P.l(C);){for(x=Math.max(1,Math.floor(P.m()/C.m())),k=Math.ceil(Math.log(x)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=g(x),R=V.j(C);q(R)||0<R.l(P);)x-=k,V=g(x),R=V.j(C);U(V)&&(V=b),N=N.add(V),P=se(P,R)}return new re(N,P)}n.A=function(P){return pe(this,P).h},n.and=function(P){for(var C=Math.max(this.g.length,P.g.length),x=[],k=0;k<C;k++)x[k]=this.i(k)&P.i(k);return new c(x,this.h&P.h)},n.or=function(P){for(var C=Math.max(this.g.length,P.g.length),x=[],k=0;k<C;k++)x[k]=this.i(k)|P.i(k);return new c(x,this.h|P.h)},n.xor=function(P){for(var C=Math.max(this.g.length,P.g.length),x=[],k=0;k<C;k++)x[k]=this.i(k)^P.i(k);return new c(x,this.h^P.h)};function de(P){for(var C=P.g.length+1,x=[],k=0;k<C;k++)x[k]=P.i(k)<<1|P.i(k-1)>>>31;return new c(x,P.h)}function Ne(P,C){var x=C>>5;C%=32;for(var k=P.g.length-x,N=[],V=0;V<k;V++)N[V]=0<C?P.i(V+x)>>>C|P.i(V+x+1)<<32-C:P.i(V+x);return new c(N,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,qS=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Or=c}).apply(typeof ib<"u"?ib:typeof self<"u"?self:typeof window<"u"?window:{});var mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FS,Ku,HS,Af,Pg,GS,QS,YS;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof mf=="object"&&mf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var j=h[A];if(!(j in v))break e;v=v[j]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,j={next:function(){if(!A&&v<h.length){var Q=v++;return{value:_(Q,h[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,A),h.apply(_,j)}}return function(){return h.apply(_,arguments)}}function b(h,_,v){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,b.apply(null,arguments)}function D(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function U(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,j,Q){for(var ae=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)ae[Qe-2]=arguments[Qe];return _.prototype[j].apply(A,ae)}}function q(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function G(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const j=h.length||0,Q=A.length||0;h.length=j+Q;for(let ae=0;ae<Q;ae++)h[j+ae]=A[ae]}else h.push(A)}}class se{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ie(h){return/^[\s\xa0]*$/.test(h)}function re(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function pe(h){return pe[" "](h),h}pe[" "]=function(){};var de=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function Ne(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function P(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(h,_){let v,A;for(let j=1;j<arguments.length;j++){A=arguments[j];for(v in A)h[v]=A[v];for(let Q=0;Q<x.length;Q++)v=x[Q],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function N(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function V(h){d.setTimeout(()=>{throw h},0)}function R(){var h=De;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class _t{constructor(){this.h=this.g=null}add(_,v){const A=Xe.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Xe=new se(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let J,ce=!1,De=new _t,O=()=>{const h=d.Promise.resolve(void 0);J=()=>{h.then(X)}};var X=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(v){V(v)}var _=Xe;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ce=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var _e=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Me(h,_){if(ne.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(de){e:{try{pe(_.nodeName);var j=!0;break e}catch{}j=!1}j||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Me.aa.h.call(this)}}U(Me,ne);var be={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function Jn(h,_,v,A,j){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=j,this.key=++rt,this.da=this.fa=!1}function Ri(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function mi(h){this.src=h,this.g={},this.h=0}mi.prototype.add=function(h,_,v,A,j){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var ae=ss(h,_,A,j);return-1<ae?(_=h[ae],v||(_.fa=!1)):(_=new Jn(_,this.src,Q,!!A,j),_.fa=v,h.push(_)),_};function is(h,_){var v=_.type;if(v in h.g){var A=h.g[v],j=Array.prototype.indexOf.call(A,_,void 0),Q;(Q=0<=j)&&Array.prototype.splice.call(A,j,1),Q&&(Ri(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function ss(h,_,v,A){for(var j=0;j<h.length;++j){var Q=h[j];if(!Q.da&&Q.listener==_&&Q.capture==!!v&&Q.ha==A)return j}return-1}var rs="closure_lm_"+(1e6*Math.random()|0),$r={};function eo(h,_,v,A,j){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)eo(h,_[Q],v,A,j);return null}return v=cn(v),h&&h[Vt]?h.K(_,v,g(A)?!!A.capture:!1,j):kn(h,_,v,!1,A,j)}function kn(h,_,v,A,j,Q){if(!_)throw Error("Invalid event type");var ae=g(j)?!!j.capture:!!j,Qe=Ce(h);if(Qe||(h[rs]=Qe=new mi(h)),v=Qe.add(_,v,A,ae,Q),v.proxy)return v;if(A=$s(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)_e||(j=ae),j===void 0&&(j=!1),h.addEventListener(_.toString(),A,j);else if(h.attachEvent)h.attachEvent(os(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function $s(){function h(v){return _.call(h.src,h.listener,v)}const _=me;return h}function as(h,_,v,A,j){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)as(h,_[Q],v,A,j);else A=g(A)?!!A.capture:!!A,v=cn(v),h&&h[Vt]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],v=ss(Q,v,A,j),-1<v&&(Ri(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ce(h))&&(_=h.g[_.toString()],h=-1,_&&(h=ss(_,v,A,j)),(v=-1<h?_[h]:null)&&Ii(v))}function Ii(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Vt])is(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(os(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Ce(_))?(is(v,h),v.h==0&&(v.src=null,_[rs]=null)):Ri(h)}}}function os(h){return h in $r?$r[h]:$r[h]="on"+h}function me(h,_){if(h.da)h=!0;else{_=new Me(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Ii(h),h=v.call(A,_)}return h}function Ce(h){return h=h[rs],h instanceof mi?h:null}var qe="__closure_events_fn_"+(1e9*Math.random()>>>0);function cn(h){return typeof h=="function"?h:(h[qe]||(h[qe]=function(_){return h.handleEvent(_)}),h[qe])}function dt(){le.call(this),this.i=new mi(this),this.M=this,this.F=null}U(dt,le),dt.prototype[Vt]=!0,dt.prototype.removeEventListener=function(h,_,v,A){as(this,h,_,v,A)};function Ge(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new ne(_,h);else if(_ instanceof ne)_.target=_.target||h;else{var j=_;_=new ne(A,h),k(_,j)}if(j=!0,v)for(var Q=v.length-1;0<=Q;Q--){var ae=_.g=v[Q];j=yt(ae,A,!0,_)&&j}if(ae=_.g=h,j=yt(ae,A,!0,_)&&j,j=yt(ae,A,!1,_)&&j,v)for(Q=0;Q<v.length;Q++)ae=_.g=v[Q],j=yt(ae,A,!1,_)&&j}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Ri(v[A]);delete h.g[_],h.h--}}this.F=null},dt.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},dt.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function yt(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var j=!0,Q=0;Q<_.length;++Q){var ae=_[Q];if(ae&&!ae.da&&ae.capture==v){var Qe=ae.listener,Yt=ae.ha||ae.src;ae.fa&&is(h.i,ae),j=Qe.call(Yt,A)!==!1&&j}}return j&&!A.defaultPrevented}function Jt(h,_,v){if(typeof h=="function")v&&(h=b(h,v));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Vl(h){h.g=Jt(()=>{h.g=null,h.i&&(h.i=!1,Vl(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class em extends le{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Vl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(h){le.call(this),this.h=h,this.g={}}U(Xr,le);var Wr=[];function Zr(h){Ne(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ii(_)},h),h.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),Zr(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pi=d.JSON.stringify,to=d.JSON.parse,Jr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Ll(){}Ll.prototype.h=null;function Ul(h){return h.h||(h.h=h.i())}function jl(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){ne.call(this,"d")}U(us,ne);function zl(){ne.call(this,"c")}U(zl,ne);var xi={},Bl=null;function Xs(){return Bl=Bl||new dt}xi.La="serverreachability";function no(h){ne.call(this,xi.La,h)}U(no,ne);function Ws(h){const _=Xs();Ge(_,new no(_))}xi.STAT_EVENT="statevent";function Gc(h,_){ne.call(this,xi.STAT_EVENT,h),this.stat=_}U(Gc,ne);function Tt(h){const _=Xs();Ge(_,new Gc(_,h))}xi.Ma="timingevent";function Qt(h,_){ne.call(this,xi.Ma,h),this.size=_}U(Qt,ne);function Lt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function ei(){this.g=!0}ei.prototype.xa=function(){this.g=!1};function ql(h,_,v,A,j,Q){h.info(function(){if(h.g)if(Q)for(var ae="",Qe=Q.split("&"),Yt=0;Yt<Qe.length;Yt++){var Ye=Qe[Yt].split("=");if(1<Ye.length){var tn=Ye[0];Ye=Ye[1];var Kt=tn.split("_");ae=2<=Kt.length&&Kt[1]=="type"?ae+(tn+"="+Ye+"&"):ae+(tn+"=redacted&")}}else ae=null;else ae=Q;return"XMLHTTP REQ ("+A+") [attempt "+j+"]: "+_+`
`+v+`
`+ae})}function tm(h,_,v,A,j,Q,ae){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+j+"]: "+_+`
`+v+`
`+Q+" "+ae})}function Zs(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ea(h,v)+(A?" "+A:"")})}function Qc(h,_){h.info(function(){return"TIMEOUT: "+_})}ei.prototype.info=function(){};function ea(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var j=A[1];if(Array.isArray(j)&&!(1>j.length)){var Q=j[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ae=1;ae<j.length;ae++)j[ae]=""}}}}return pi(v)}catch{return _}}var Js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ni;function Di(){}U(Di,Ll),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Ni=new Di;function Rn(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var Fl={},io={};function gi(h,_,v){h.L=1,h.v=ra(Fn(_)),h.m=v,h.P=!0,hs(h,null)}function hs(h,_){h.F=Date.now(),ta(h),h.A=Fn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),$l(v.i,"t",A),h.C=0,v=h.j.J,h.h=new Nt,h.g=lh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new em(b(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(Wr[0]=j.toString()),j=Wr);for(var Q=0;Q<j.length;Q++){var ae=eo(v,j[Q],A||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ws(),ql(h.i,h.u,h.A,h.l,h.R,h.m)}Rn.prototype.ca=function(h){h=h.target;const _=this.M;_&&si(h)==3?_.j():this.Y(h)},Rn.prototype.Y=function(h){try{if(h==this.g)e:{const Kt=si(this.g);var _=this.g.Ba();const vs=this.g.Z();if(!(3>Kt)&&(Kt!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||Kt!=4||_==7||(_==8||0>=vs?Ws(3):Ws(2)),er(this);var v=this.g.Z();this.X=v;t:if(Yc(this)){var A=eh(this.g);h="";var j=A.length,Q=si(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Oi(this);var ae="";break t}this.h.i=new d.TextDecoder}for(_=0;_<j;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(Q&&_==j-1)});A.length=0,this.h.g+=h,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,tm(this.i,this.u,this.A,this.l,this.R,Kt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,Yt=this.g;if((Qe=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Qe)){var Ye=Qe;break t}}Ye=null}if(v=Ye)Zs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,na(this,v);else{this.o=!1,this.s=3,Tt(12),hn(this),Oi(this);break e}}if(this.P){v=!0;let fn;for(;!this.J&&this.C<ae.length;)if(fn=Kc(this,ae),fn==io){Kt==4&&(this.s=4,Tt(14),v=!1),Zs(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==Fl){this.s=4,Tt(15),Zs(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else Zs(this.i,this.l,fn,null),na(this,fn);if(Yc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Kt!=4||ae.length!=0||this.h.h||(this.s=1,Tt(16),v=!1),this.o=this.o&&v,!v)Zs(this.i,this.l,ae,"[Invalid Chunked Response]"),hn(this),Oi(this);else if(0<ae.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),da(tn),tn.M=!0,Tt(11))}}else Zs(this.i,this.l,ae,null),na(this,ae);Kt==4&&hn(this),this.o&&!this.J&&(Kt==4?rh(this.j,this):(this.o=!1,ta(this)))}else am(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),hn(this),Oi(this)}}}catch{}finally{}};function Yc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Kc(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?io:(v=Number(_.substring(v,A)),isNaN(v)?Fl:(A+=1,A+v>_.length?io:(_=_.slice(A,A+v),h.C=A+v,_)))}Rn.prototype.cancel=function(){this.J=!0,hn(this)};function ta(h){h.S=Date.now()+h.I,$c(h,h.I)}function $c(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Lt(b(h.ba,h),_)}function er(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Rn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Qc(this.i,this.A),this.L!=2&&(Ws(),Tt(17)),hn(this),this.s=2,Oi(this)):$c(this,this.S-h)};function Oi(h){h.j.G==0||h.J||rh(h.j,h)}function hn(h){er(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Zr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function na(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Hl(v.h,h))){if(!h.K&&Hl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var j=A;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)go(v),mo(v);else break e;eu(v),Tt(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Lt(b(v.Za,v),6e3));if(1>=ro(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ys(v,11)}else if((h.K||v.g==h)&&go(v),!ie(_))for(j=v.Da.g.parse(_),_=0;_<j.length;_++){let Ye=j[_];if(v.T=Ye[0],Ye=Ye[1],v.G==2)if(Ye[0]=="c"){v.K=Ye[1],v.ia=Ye[2];const tn=Ye[3];tn!=null&&(v.la=tn,v.j.info("VER="+v.la));const Kt=Ye[4];Kt!=null&&(v.Aa=Kt,v.j.info("SVER="+v.Aa));const vs=Ye[5];vs!=null&&typeof vs=="number"&&0<vs&&(A=1.5*vs,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const fn=h.g;if(fn){const ji=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var Q=A.h;Q.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ao(Q,Q.h),Q.h=null))}if(A.D){const nu=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;nu&&(A.ya=nu,at(A.I,A.D,nu))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ae=h;if(A.qa=oh(A,A.J?A.ia:null,A.W),ae.K){In(A.h,ae);var Qe=ae,Yt=A.L;Yt&&(Qe.I=Yt),Qe.B&&(er(Qe),ta(Qe)),A.g=ae}else ih(A);0<v.i.length&&po(v)}else Ye[0]!="stop"&&Ye[0]!="close"||ys(v,7);else v.G==3&&(Ye[0]=="stop"||Ye[0]=="close"?Ye[0]=="stop"?ys(v,7):Zl(v):Ye[0]!="noop"&&v.l&&v.l.ta(Ye),v.v=0)}}Ws(4)}catch{}}var Xc=class{constructor(h,_){this.g=h,this.map=_}};function fs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function so(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ro(h){return h.h?1:h.g?h.g.size:0}function Hl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function ao(h,_){h.g?h.g.add(_):h.h=_}function In(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}fs.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Gl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return q(h.i)}function nm(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function oo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Ql(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=oo(h),A=nm(h),j=A.length,Q=0;Q<j;Q++)_.call(void 0,A[Q],v&&v[Q],h)}var ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function im(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),j=null;if(0<=A){var Q=h[v].substring(0,A);j=h[v].substring(A+1)}else Q=h[v];_(Q,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ut(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ut){this.h=h.h,sa(this,h.j),this.o=h.o,this.g=h.g,tr(this,h.s),this.l=h.l;var _=h.i,v=new ms;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ds(this,v),this.m=h.m}else h&&(_=String(h).match(ia))?(this.h=!1,sa(this,_[1]||"",!0),this.o=ti(_[2]||""),this.g=ti(_[3]||"",!0),tr(this,_[4]),this.l=ti(_[5]||"",!0),ds(this,_[6]||"",!0),this.m=ti(_[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Ut.prototype.toString=function(){var h=[],_=this.j;_&&h.push(aa(_,Yl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(aa(_,Yl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(aa(v,v.charAt(0)=="/"?sm:Kl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",aa(v,lo)),h.join("")};function Fn(h){return new Ut(h)}function sa(h,_,v){h.j=v?ti(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function tr(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ds(h,_,v){_ instanceof ms?(h.i=_,Zc(h.i,h.h)):(v||(_=aa(_,rm)),h.i=new ms(_,h.h))}function at(h,_,v){h.i.set(_,v)}function ra(h){return at(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function ti(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function aa(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Wc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Wc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Yl=/[#\/\?@]/g,Kl=/[#\?:]/g,sm=/[#\?]/g,rm=/[#\?@]/g,lo=/#/g;function ms(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ni(h){h.g||(h.g=new Map,h.h=0,h.i&&im(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=ms.prototype,n.add=function(h,_){ni(this),this.i=null,h=Mi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ps(h,_){ni(h),_=Mi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function gs(h,_){return ni(h),_=Mi(h,_),h.g.has(_)}n.forEach=function(h,_){ni(this),this.g.forEach(function(v,A){v.forEach(function(j){h.call(_,j,A,this)},this)},this)},n.na=function(){ni(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const j=h[A];for(let Q=0;Q<j.length;Q++)v.push(_[A])}return v},n.V=function(h){ni(this);let _=[];if(typeof h=="string")gs(this,h)&&(_=_.concat(this.g.get(Mi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return ni(this),this.i=null,h=Mi(this,h),gs(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function $l(h,_,v){ps(h,_),0<v.length&&(h.i=null,h.g.set(Mi(h,_),q(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const Q=encodeURIComponent(String(A)),ae=this.V(A);for(A=0;A<ae.length;A++){var j=Q;ae[A]!==""&&(j+="="+encodeURIComponent(String(ae[A]))),h.push(j)}}return this.i=h.join("&")};function Mi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Zc(h,_){_&&!h.j&&(ni(h),h.i=null,h.g.forEach(function(v,A){var j=A.toLowerCase();A!=j&&(ps(this,A),$l(this,j,v))},h)),h.j=_}function oa(h,_){const v=new ei;if(d.Image){const A=new Image;A.onload=D(ii,v,"TestLoadImage: loaded",!0,_,A),A.onerror=D(ii,v,"TestLoadImage: error",!1,_,A),A.onabort=D(ii,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=D(ii,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function _i(h,_){const v=new ei,A=new AbortController,j=setTimeout(()=>{A.abort(),ii(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(Q=>{clearTimeout(j),Q.ok?ii(v,"TestPingServer: ok",!0,_):ii(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(j),ii(v,"TestPingServer: error",!1,_)})}function ii(h,_,v,A,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),A(v)}catch{}}function la(){this.g=new Jr}function ki(h,_,v){const A=v||"";try{Ql(h,function(j,Q){let ae=j;g(j)&&(ae=pi(j)),_.push(A+Q+"="+encodeURIComponent(ae))})}catch(j){throw _.push(A+"type="+encodeURIComponent("_badmap")),j}}function nr(h){this.l=h.Ub||null,this.j=h.eb||!1}U(nr,Ll),nr.prototype.g=function(){return new _s(this.l,this.j)},nr.prototype.i=(function(h){return function(){return h}})({});function _s(h,_){dt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(_s,dt),n=_s.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Vi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Pi(this):Vi(this),this.readyState==3&&Xl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Pi(this))},n.Qa=function(h){this.g&&(this.response=h,Pi(this))},n.ga=function(){this.g&&Pi(this)};function Pi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Vi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Vi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Wl(h){let _="";return Ne(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function en(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Wl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):at(h,_,v))}function et(h){dt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(et,dt);var uo=/^https?$/i,ua=["POST","PUT"];n=et.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ni.g(),this.v=this.o?Ul(this.o):Ul(Ni),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Jc(this,Q);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var j in A)v.set(j,A[j]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())v.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,_,void 0))||A||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ae]of v)this.g.setRequestHeader(Q,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ca(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Jc(this,Q)}};function Jc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,co(h),Li(h)}function co(h){h.A||(h.A=!0,Ge(h,"complete"),Ge(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ge(this,"complete"),Ge(this,"abort"),Li(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ho(this):this.bb())},n.bb=function(){ho(this)};function ho(h){if(h.h&&typeof c<"u"&&(!h.v[1]||si(h)!=4||h.Z()!=2)){if(h.u&&si(h)==4)Jt(h.Ea,0,h);else if(Ge(h,"readystatechange"),si(h)==4){h.h=!1;try{const ae=h.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=ae===0){var j=String(h.D).match(ia)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),A=!uo.test(j?j.toLowerCase():"")}v=A}if(v)Ge(h,"complete"),Ge(h,"success");else{h.m=6;try{var Q=2<si(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",co(h)}}finally{Li(h)}}}}function Li(h,_){if(h.g){ca(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ge(h,"ready");try{v.onreadystatechange=A}catch{}}}function ca(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function si(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<si(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),to(_)}};function eh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function am(h){const _={};h=(h.g&&2<=si(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(ie(h[A]))continue;var v=N(h[A]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=_[j]||[];_[j]=Q,Q.push(v)}P(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ha(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function fo(h){this.Aa=0,this.i=[],this.j=new ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ha("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ha("baseRetryDelayMs",5e3,h),this.cb=ha("retryDelaySeedMs",1e4,h),this.Wa=ha("forwardChannelMaxRetries",2,h),this.wa=ha("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new fs(h&&h.concurrentRequestLimit),this.Da=new la,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fo.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){Tt(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=oh(this,null,this.W),po(this)};function Zl(h){if(th(h),h.G==3){var _=h.U++,v=Fn(h.I);if(at(v,"SID",h.K),at(v,"RID",_),at(v,"TYPE","terminate"),fa(h,v),_=new Rn(h,h.j,_),_.L=2,_.v=ra(Fn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=lh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ta(_)}ah(h)}function mo(h){h.g&&(da(h),h.g.cancel(),h.g=null)}function th(h){mo(h),h.u&&(d.clearTimeout(h.u),h.u=null),go(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function po(h){if(!so(h.h)&&!h.s){h.s=!0;var _=h.Ga;J||O(),ce||(J(),ce=!0),De.add(_,h),h.B=0}}function om(h,_){return ro(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Lt(b(h.Ga,h,_),tu(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new Rn(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=C(Q),k(Q,this.S)):Q=this.S),this.m!==null||this.O||(j.H=Q,Q=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=nh(this,j,_),v=Fn(this.I),at(v,"RID",h),at(v,"CVER",22),this.D&&at(v,"X-HTTP-Session-Id",this.D),fa(this,v),Q&&(this.O?_="headers="+encodeURIComponent(String(Wl(Q)))+"&"+_:this.m&&en(v,this.m,Q)),ao(this.h,j),this.Ua&&at(v,"TYPE","init"),this.P?(at(v,"$req",_),at(v,"SID","null"),j.T=!0,gi(j,v,null)):gi(j,v,_),this.G=2}}else this.G==3&&(h?Jl(this,h):this.i.length==0||so(this.h)||Jl(this))};function Jl(h,_){var v;_?v=_.l:v=h.U++;const A=Fn(h.I);at(A,"SID",h.K),at(A,"RID",v),at(A,"AID",h.T),fa(h,A),h.m&&h.o&&en(A,h.m,h.o),v=new Rn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=nh(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),ao(h.h,v),gi(v,A,_)}function fa(h,_){h.H&&Ne(h.H,function(v,A){at(_,A,v)}),h.l&&Ql({},function(v,A){at(_,A,v)})}function nh(h,_,v){v=Math.min(h.i.length,v);var A=h.l?b(h.l.Na,h.l,h):null;e:{var j=h.i;let Q=-1;for(;;){const ae=["count="+v];Q==-1?0<v?(Q=j[0].g,ae.push("ofs="+Q)):Q=0:ae.push("ofs="+Q);let Qe=!0;for(let Yt=0;Yt<v;Yt++){let Ye=j[Yt].g;const tn=j[Yt].map;if(Ye-=Q,0>Ye)Q=Math.max(0,j[Yt].g-100),Qe=!1;else try{ki(tn,ae,"req"+Ye+"_")}catch{A&&A(tn)}}if(Qe){A=ae.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function ih(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;J||O(),ce||(J(),ce=!0),De.add(_,h),h.v=0}}function eu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Lt(b(h.Fa,h),tu(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Lt(b(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),mo(this),sh(this))};function da(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function sh(h){h.g=new Rn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Fn(h.qa);at(_,"RID","rpc"),at(_,"SID",h.K),at(_,"AID",h.T),at(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&at(_,"TO",h.ja),at(_,"TYPE","xmlhttp"),fa(h,_),h.m&&h.o&&en(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ra(Fn(_)),v.m=null,v.P=!0,hs(v,h)}n.Za=function(){this.C!=null&&(this.C=null,mo(this),eu(this),Tt(19))};function go(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function rh(h,_){var v=null;if(h.g==_){go(h),da(h),h.g=null;var A=2}else if(Hl(h.h,_))v=_.D,In(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var j=h.B;A=Xs(),Ge(A,new Qt(A,v)),po(h)}else ih(h);else if(j=_.s,j==3||j==0&&0<_.X||!(A==1&&om(h,_)||A==2&&eu(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),j){case 1:ys(h,5);break;case 4:ys(h,10);break;case 3:ys(h,6);break;default:ys(h,2)}}}function tu(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ys(h,_){if(h.j.info("Error code "+_),_==2){var v=b(h.fb,h),A=h.Xa;const j=!A;A=new Ut(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||sa(A,"https"),ra(A),j?oa(A.toString(),v):_i(A.toString(),v)}else Tt(2);h.G=0,h.l&&h.l.sa(_),ah(h),th(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function ah(h){if(h.G=0,h.ka=[],h.l){const _=Gl(h.h);(_.length!=0||h.i.length!=0)&&(G(h.ka,_),G(h.ka,h.i),h.h.i.length=0,q(h.i),h.i.length=0),h.l.ra()}}function oh(h,_,v){var A=v instanceof Ut?Fn(v):new Ut(v);if(A.g!="")_&&(A.g=_+"."+A.g),tr(A,A.s);else{var j=d.location;A=j.protocol,_=_?_+"."+j.hostname:j.hostname,j=+j.port;var Q=new Ut(null);A&&sa(Q,A),_&&(Q.g=_),j&&tr(Q,j),v&&(Q.l=v),A=Q}return v=h.D,_=h.ya,v&&_&&at(A,v,_),at(A,"VER",h.la),fa(h,A),A}function lh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new et(new nr({eb:v})):new et(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _o(){}_o.prototype.g=function(h,_){return new xn(h,_)};function xn(h,_){dt.call(this),this.g=new fo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ie(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ie(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ui(this)}U(xn,dt),xn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){Zl(this.g)},xn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=pi(h),h=v);_.i.push(new Xc(_.Ya++,h)),_.G==3&&po(_)},xn.prototype.N=function(){this.g.l=null,delete this.j,Zl(this.g),delete this.g,xn.aa.N.call(this)};function ch(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}U(ch,us);function hh(){zl.call(this),this.status=1}U(hh,zl);function Ui(h){this.g=h}U(Ui,uh),Ui.prototype.ua=function(){Ge(this.g,"a")},Ui.prototype.ta=function(h){Ge(this.g,new ch(h))},Ui.prototype.sa=function(h){Ge(this.g,new hh)},Ui.prototype.ra=function(){Ge(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,YS=function(){return new _o},QS=function(){return Xs()},GS=xi,Pg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Js.NO_ERROR=0,Js.TIMEOUT=8,Js.HTTP_ERROR=6,Af=Js,cs.COMPLETE="complete",HS=cs,jl.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ku=jl,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,FS=et}).apply(typeof mf<"u"?mf:typeof self<"u"?self:typeof window<"u"?window:{});const sb="@firebase/firestore",rb="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Rl="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new yd("@firebase/firestore");function Yo(){return qa.logLevel}function he(n,...e){if(qa.logLevel<=Be.DEBUG){const t=e.map(M_);qa.debug(`Firestore (${Rl}): ${n}`,...t)}}function Fs(n,...e){if(qa.logLevel<=Be.ERROR){const t=e.map(M_);qa.error(`Firestore (${Rl}): ${n}`,...t)}}function cl(n,...e){if(qa.logLevel<=Be.WARN){const t=e.map(M_);qa.warn(`Firestore (${Rl}): ${n}`,...t)}}function M_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,KS(n,s,t)}function KS(n,e,t){let s=`FIRESTORE (${Rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fs(s),new Error(s)}function tt(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||KS(e,a,s)}function xe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bn.UNAUTHENTICATED)))}shutdown(){}}class tD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class nD{constructor(e){this.t=e,this.currentUser=bn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){tt(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new js;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new js,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new js)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string",31837,{l:s}),new $S(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string",2055,{h:e}),new bn(e)}}class iD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new iD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ab{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){tt(this.o===void 0,3512);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ab(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(tt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ab(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=aD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Fe(n,e){return n<e?-1:n>e?1:0}function Vg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return hg(a)===hg(l)?Fe(a,l):hg(a)?1:-1}return Fe(n.length,e.length)}const oD=55296,lD=57343;function hg(n){const e=n.charCodeAt(0);return e>=oD&&e<=lD}function hl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="__name__";class Gi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Gi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Fe(e.length,t.length)}static compareSegments(e,t){const s=Gi.isNumericId(e),a=Gi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Gi.extractNumericId(e).compare(Gi.extractNumericId(t)):Vg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Or.fromString(e.substring(4,e.length-2))}}class pt extends Gi{construct(e,t,s){return new pt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new pt(t)}static emptyPath(){return new pt([])}}const uD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _n extends Gi{construct(e,t,s){return new _n(e,t,s)}static isValidIdentifier(e){return uD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_n.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ob}static keyField(){return new _n([ob])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ue($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ue($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ue($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _n(t)}static emptyPath(){return new _n([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(pt.fromString(e))}static fromName(e){return new ye(pt.fromString(e).popFirst(5))}static empty(){return new ye(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new pt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(n,e,t){if(!t)throw new ue($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function cD(n,e,t,s){if(e===!0&&s===!0)throw new ue($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lb(n){if(!ye.isDocumentKey(n))throw new ue($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ub(n){if(ye.isDocumentKey(n))throw new ue($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function WS(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function Dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wd(n);throw new ue($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ht(n,e){const t={typeString:n};return e&&(t.value=e),t}function Dc(n,e){if(!WS(n))throw new ue($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ue($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=-62135596800,hb=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*hb);return new Et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cb)throw new ue($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hb}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dc(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:Ht("string",Et._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Et(0,0))}static max(){return new Ie(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const dc=-1;function hD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ie.fromTimestamp(s===1e9?new Et(t+1,0):new Et(t,s));return new Lr(a,ye.empty(),e)}function fD(n){return new Lr(n.readTime,n.key,dc)}class Lr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Lr(Ie.min(),ye.empty(),dc)}static max(){return new Lr(Ie.max(),ye.empty(),dc)}}function dD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==mD)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.reject(t)}static resolve(e){return new ee(((t,s)=>{t(e)}))}static reject(e){return new ee(((t,s)=>{s(e)}))}static waitFor(e){return new ee(((t,s)=>{let a=0,l=0,c=!1;e.forEach((d=>{++a,d.next((()=>{++l,c&&l===a&&t()}),(p=>s(p)))})),c=!0,l===a&&t()}))}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next((a=>a?ee.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ee(((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((y=>{c[g]=y,++d,d===l&&s(c)}),(y=>a(y)))}}))}static doWhile(e,t){return new ee(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function gD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const P_=-1;function Ad(n){return n==null}function Ff(n){return n===0&&1/n==-1/0}function _D(n){return typeof n=="number"&&Number.isInteger(n)&&!Ff(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="";function yD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fb(e)),e=vD(n.get(t),e);return fb(e)}function vD(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case ZS:t+="";break;default:t+=l}}return t}function fb(n){return n+ZS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function JS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt=class Lg{constructor(e,t){this.comparator=e,this.root=t||Mr.EMPTY}insert(e,t){return new Lg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mr.BLACK,null,null))}remove(e){return new Lg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pf(this.root,e,this.comparator,!1)}getReverseIterator(){return new pf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pf(this.root,e,this.comparator,!0)}},pf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Mr=class Ms{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ms.RED,this.left=a??Ms.EMPTY,this.right=l??Ms.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ms(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ms.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ms.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ms.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ms.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}};Mr.EMPTY=null,Mr.RED=!0,Mr.BLACK=!1;Mr.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Mr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.comparator=e,this.data=new Gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mb(this.data.getIterator())}getIteratorFrom(e){return new mb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Zt(this.comparator);return t.data=e,t}}class mb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.fields=e,e.sort(_n.comparator)}static empty(){return new Zn([])}unionWith(e){let t=new Zt(_n.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class e1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new e1("Invalid base64 string: "+l):l}})(e);return new yn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new yn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yn.EMPTY_BYTE_STRING=new yn("");const ED=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(n){if(tt(!!n,39018),typeof n=="string"){let e=0;const t=ED.exec(n);if(tt(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:kt(n.seconds),nanos:kt(n.nanos)}}function kt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jr(n){return typeof n=="string"?yn.fromBase64String(n):yn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="server_timestamp",n1="__type__",i1="__previous_value__",s1="__local_write_time__";function V_(n){return(n?.mapValue?.fields||{})[n1]?.stringValue===t1}function Cd(n){const e=n.mapValue.fields[i1];return V_(e)?Cd(e):e}function mc(n){const e=Ur(n.mapValue.fields[s1].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Hf="(default)";class pc{constructor(e,t){this.projectId=e,this.database=t||Hf}static empty(){return new pc("","")}get isDefaultDatabase(){return this.database===Hf}isEqual(e){return e instanceof pc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="__type__",bD="__max__",gf={mapValue:{}},a1="__vector__",Gf="value";function zr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?V_(n)?4:SD(n)?9007199254740991:wD(n)?10:11:Te(28295,{value:n})}function es(n,e){if(n===e)return!0;const t=zr(n);if(t!==zr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mc(n).isEqual(mc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Ur(a.timestampValue),d=Ur(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return jr(a.bytesValue).isEqual(jr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return kt(a.geoPointValue.latitude)===kt(l.geoPointValue.latitude)&&kt(a.geoPointValue.longitude)===kt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return kt(a.integerValue)===kt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=kt(a.doubleValue),d=kt(l.doubleValue);return c===d?Ff(c)===Ff(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return hl(n.arrayValue.values||[],e.arrayValue.values||[],es);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(db(c)!==db(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!es(c[p],d[p])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function gc(n,e){return(n.values||[]).find((t=>es(t,e)))!==void 0}function fl(n,e){if(n===e)return 0;const t=zr(n),s=zr(e);if(t!==s)return Fe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Fe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const d=kt(l.integerValue||l.doubleValue),p=kt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return pb(n.timestampValue,e.timestampValue);case 4:return pb(mc(n),mc(e));case 5:return Vg(n.stringValue,e.stringValue);case 6:return(function(l,c){const d=jr(l),p=jr(c);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Fe(d[g],p[g]);if(y!==0)return y}return Fe(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const d=Fe(kt(l.latitude),kt(c.latitude));return d!==0?d:Fe(kt(l.longitude),kt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return gb(n.arrayValue,e.arrayValue);case 10:return(function(l,c){const d=l.fields||{},p=c.fields||{},g=d[Gf]?.arrayValue,y=p[Gf]?.arrayValue,T=Fe(g?.values?.length||0,y?.values?.length||0);return T!==0?T:gb(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===gf.mapValue&&c===gf.mapValue)return 0;if(l===gf.mapValue)return 1;if(c===gf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const b=Vg(p[T],y[T]);if(b!==0)return b;const D=fl(d[p[T]],g[y[T]]);if(D!==0)return D}return Fe(p.length,y.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{he:t})}}function pb(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Fe(n,e);const t=Ur(n),s=Ur(e),a=Fe(t.seconds,s.seconds);return a!==0?a:Fe(t.nanos,s.nanos)}function gb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=fl(t[a],s[a]);if(l)return l}return Fe(t.length,s.length)}function dl(n){return Ug(n)}function Ug(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Ur(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return jr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ye.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Ug(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Ug(t.fields[c])}`;return a+"}"})(n.mapValue):Te(61005,{value:n})}function Cf(n){switch(zr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cd(n);return e?16+Cf(e):16;case 5:return 2*n.stringValue.length;case 6:return jr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+Cf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Qr(s.fields,((l,c)=>{a+=l.length+Cf(c)})),a})(n.mapValue);default:throw Te(13486,{value:n})}}function _b(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jg(n){return!!n&&"integerValue"in n}function L_(n){return!!n&&"arrayValue"in n}function yb(n){return!!n&&"nullValue"in n}function vb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rf(n){return!!n&&"mapValue"in n}function wD(n){return(n?.mapValue?.fields||{})[r1]?.stringValue===a1}function ec(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Qr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ec(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ec(n.arrayValue.values[t]);return e}return{...n}}function SD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ec(t)}setAll(e){let t=_n.emptyPath(),s={},a=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=ec(c):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return es(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Rf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Qr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new jn(ec(this.value))}}function o1(n){const e=[];return Qr(n.fields,((t,s)=>{const a=new _n([t]);if(Rf(s)){const l=o1(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qf{constructor(e,t){this.position=e,this.inclusive=t}}function Eb(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(c.referenceValue),t.key):s=fl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!es(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _c{constructor(e,t="asc"){this.field=e,this.dir=t}}function AD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class l1{}class Ft extends l1{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new RD(e,t,s):t==="array-contains"?new ND(e,s):t==="in"?new DD(e,s):t==="not-in"?new OD(e,s):t==="array-contains-any"?new MD(e,s):new Ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new ID(e,s):new xD(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fl(t,this.value)):t!==null&&zr(this.value)===zr(t)&&this.matchesComparison(fl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ci extends l1{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ci(e,t)}matches(e){return u1(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function u1(n){return n.op==="and"}function c1(n){return CD(n)&&u1(n)}function CD(n){for(const e of n.filters)if(e instanceof Ci)return!1;return!0}function zg(n){if(n instanceof Ft)return n.field.canonicalString()+n.op.toString()+dl(n.value);if(c1(n))return n.filters.map((e=>zg(e))).join(",");{const e=n.filters.map((t=>zg(t))).join(",");return`${n.op}(${e})`}}function h1(n,e){return n instanceof Ft?(function(s,a){return a instanceof Ft&&s.op===a.op&&s.field.isEqual(a.field)&&es(s.value,a.value)})(n,e):n instanceof Ci?(function(s,a){return a instanceof Ci&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,d)=>l&&h1(c,a.filters[d])),!0):!1})(n,e):void Te(19439)}function f1(n){return n instanceof Ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${dl(t.value)}`})(n):n instanceof Ci?(function(t){return t.op.toString()+" {"+t.getFilters().map(f1).join(" ,")+"}"})(n):"Filter"}class RD extends Ft{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class ID extends Ft{constructor(e,t){super(e,"in",t),this.keys=d1("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xD extends Ft{constructor(e,t){super(e,"not-in",t),this.keys=d1("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function d1(n,e){return(e.arrayValue?.values||[]).map((t=>ye.fromName(t.referenceValue)))}class ND extends Ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return L_(t)&&gc(t.arrayValue,this.value)}}class DD extends Ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gc(this.value.arrayValue,t)}}class OD extends Ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(gc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gc(this.value.arrayValue,t)}}class MD extends Ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!L_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>gc(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Te=null}}function bb(n,e=null,t=[],s=[],a=null,l=null,c=null){return new kD(n,e,t,s,a,l,c)}function U_(n){const e=xe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>zg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Ad(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>dl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>dl(s))).join(",")),e.Te=t}return e.Te}function j_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!AD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!h1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Tb(n.startAt,e.startAt)&&Tb(n.endAt,e.endAt)}function Bg(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PD(n,e,t,s,a,l,c,d){return new Nl(n,e,t,s,a,l,c,d)}function Rd(n){return new Nl(n)}function wb(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function m1(n){return n.collectionGroup!==null}function tc(n){const e=xe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Zt(_n.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new _c(l,s))})),t.has(_n.keyField().canonicalString())||e.Ie.push(new _c(_n.keyField(),s))}return e.Ie}function Ki(n){const e=xe(n);return e.Ee||(e.Ee=VD(e,tc(n))),e.Ee}function VD(n,e){if(n.limitType==="F")return bb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new _c(a.field,l)}));const t=n.endAt?new Qf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Qf(n.startAt.position,n.startAt.inclusive):null;return bb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function qg(n,e){const t=n.filters.concat([e]);return new Nl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Yf(n,e,t){return new Nl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Id(n,e){return j_(Ki(n),Ki(e))&&n.limitType===e.limitType}function p1(n){return`${U_(Ki(n))}|lt:${n.limitType}`}function Ko(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>f1(a))).join(", ")}]`),Ad(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>dl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>dl(a))).join(",")),`Target(${s})`})(Ki(n))}; limitType=${n.limitType})`}function xd(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of tc(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,d,p){const g=Eb(c,d,p);return c.inclusive?g<=0:g<0})(s.startAt,tc(s),a)||s.endAt&&!(function(c,d,p){const g=Eb(c,d,p);return c.inclusive?g>=0:g>0})(s.endAt,tc(s),a))})(n,e)}function LD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function g1(n){return(e,t)=>{let s=!1;for(const a of tc(n)){const l=UD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function UD(n,e,t){const s=n.field.isKeyField()?ye.comparator(e.key,t.key):(function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?fl(p,g):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return JS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=new Gt(ye.comparator);function Hs(){return jD}const _1=new Gt(ye.comparator);function $u(...n){let e=_1;for(const t of n)e=e.insert(t.key,t);return e}function y1(n){let e=_1;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Oa(){return nc()}function v1(){return nc()}function nc(){return new $a((n=>n.toString()),((n,e)=>n.isEqual(e)))}const zD=new Gt(ye.comparator),BD=new Zt(ye.comparator);function He(...n){let e=BD;for(const t of n)e=e.add(t);return e}const qD=new Zt(Fe);function FD(){return qD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ff(e)?"-0":e}}function E1(n){return{integerValue:""+n}}function HD(n,e){return _D(e)?E1(e):z_(n,e)}/**
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
 */class Nd{constructor(){this._=void 0}}function GD(n,e,t){return n instanceof yc?(function(a,l){const c={fields:{[n1]:{stringValue:t1},[s1]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&V_(l)&&(l=Cd(l)),l&&(c.fields[i1]=l),{mapValue:c}})(t,e):n instanceof ml?b1(n,e):n instanceof pl?w1(n,e):(function(a,l){const c=T1(a,l),d=Sb(c)+Sb(a.Ae);return jg(c)&&jg(a.Ae)?E1(d):z_(a.serializer,d)})(n,e)}function QD(n,e,t){return n instanceof ml?b1(n,e):n instanceof pl?w1(n,e):t}function T1(n,e){return n instanceof Kf?(function(s){return jg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class yc extends Nd{}class ml extends Nd{constructor(e){super(),this.elements=e}}function b1(n,e){const t=S1(e);for(const s of n.elements)t.some((a=>es(a,s)))||t.push(s);return{arrayValue:{values:t}}}class pl extends Nd{constructor(e){super(),this.elements=e}}function w1(n,e){let t=S1(e);for(const s of n.elements)t=t.filter((a=>!es(a,s)));return{arrayValue:{values:t}}}class Kf extends Nd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Sb(n){return kt(n.integerValue||n.doubleValue)}function S1(n){return L_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t){this.field=e,this.transform=t}}function YD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof ml&&a instanceof ml||s instanceof pl&&a instanceof pl?hl(s.elements,a.elements,es):s instanceof Kf&&a instanceof Kf?es(s.Ae,a.Ae):s instanceof yc&&a instanceof yc})(n.transform,e.transform)}class KD{constructor(e,t){this.version=e,this.transformResults=t}}class On{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function If(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Dd{}function A1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Od(n.key,On.none()):new Oc(n.key,n.data,On.none());{const t=n.data,s=jn.empty();let a=new Zt(_n.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Yr(n.key,s,new Zn(a.toArray()),On.none())}}function $D(n,e,t){n instanceof Oc?(function(a,l,c){const d=a.value.clone(),p=Cb(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Yr?(function(a,l,c){if(!If(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Cb(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(C1(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ic(n,e,t,s){return n instanceof Oc?(function(l,c,d,p){if(!If(l.precondition,c))return d;const g=l.value.clone(),y=Rb(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Yr?(function(l,c,d,p){if(!If(l.precondition,c))return d;const g=Rb(l.fieldTransforms,p,c),y=c.data;return y.setAll(C1(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,d){return If(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function XD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=T1(s.transform,a||null);l!=null&&(t===null&&(t=jn.empty()),t.set(s.field,l))}return t||null}function Ab(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&hl(s,a,((l,c)=>YD(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Oc extends Dd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Yr extends Dd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function C1(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Cb(n,e,t){const s=new Map;tt(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,QD(c,d,t[a]))}return s}function Rb(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,GD(l,c,e))}return s}class Od extends Dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WD extends Dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&$D(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ic(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ic(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=v1();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=A1(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),He())}isEqual(e){return this.batchId===e.batchId&&hl(this.mutations,e.mutations,((t,s)=>Ab(t,s)))&&hl(this.baseMutations,e.baseMutations,((t,s)=>Ab(t,s)))}}class q_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){tt(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return zD})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new q_(e,t,s,a)}}/**
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
 */class JD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt,$e;function tO(n){switch(n){case $.OK:return Te(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function R1(n){if(n===void 0)return Fs("GRPC error has no .code"),$.UNKNOWN;switch(n){case Bt.OK:return $.OK;case Bt.CANCELLED:return $.CANCELLED;case Bt.UNKNOWN:return $.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return $.INTERNAL;case Bt.UNAVAILABLE:return $.UNAVAILABLE;case Bt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Bt.NOT_FOUND:return $.NOT_FOUND;case Bt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Bt.ABORTED:return $.ABORTED;case Bt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Bt.DATA_LOSS:return $.DATA_LOSS;default:return Te(39323,{code:n})}}($e=Bt||(Bt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nO(){return new TextEncoder}/**
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
 */const iO=new Or([4294967295,4294967295],0);function Ib(n){const e=nO().encode(n),t=new qS;return t.update(e),new Uint8Array(t.digest())}function xb(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Or([t,s],0),new Or([a,l],0)]}class F_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Xu(`Invalid padding: ${t}`);if(s<0)throw new Xu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Xu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Xu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Or.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Or.fromNumber(s)));return a.compare(iO)===1&&(a=new Or([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ib(e),[s,a]=xb(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);if(!this.we(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new F_(l,a,t);return s.forEach((d=>c.insert(d))),c}insert(e){if(this.ge===0)return;const t=Ib(e),[s,a]=xb(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Xu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Mc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Md(Ie.min(),a,new Gt(Fe),Hs(),He())}}class Mc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Mc(s,t,He(),He(),He())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class I1{constructor(e,t){this.targetId=e,this.Ce=t}}class x1{constructor(e,t,s=yn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Nb{constructor(){this.ve=0,this.Fe=Db(),this.Me=yn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=He(),t=He(),s=He();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te(38017,{changeType:l})}})),new Mc(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Db()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,tt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class sO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hs(),this.Je=_f(),this.He=_f(),this.Ye=new Gt(Fe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Bg(l))if(s===0){const c=new ye(l.path);this.et(t,c,wn.newNoDocument(c,Ie.min()))}else tt(s===1,20013,{expectedCount:s});else{const c=this._t(t);if(c!==s){const d=this.ut(e),p=d?this.ct(d,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=jr(s).toUint8Array()}catch(p){if(p instanceof e1)return cl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new F_(c,a,l)}catch(p){return cl(p instanceof Xu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.Ge.ht(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const d=this.ot(c);if(d){if(l.current&&Bg(d.target)){const p=new ye(d.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,wn.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let s=He();this.He.forEach(((l,c)=>{let d=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Md(e,t,this.Ye,this.je,s);return this.je=Hs(),this.Je=_f(),this.He=_f(),this.Ye=new Gt(Fe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Nb,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Zt(Fe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Zt(Fe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Nb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _f(){return new Gt(ye.comparator)}function Db(){return new Gt(ye.comparator)}const rO={asc:"ASCENDING",desc:"DESCENDING"},aO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oO={and:"AND",or:"OR"};class lO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fg(n,e){return n.useProto3Json||Ad(e)?e:{value:e}}function $f(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uO(n,e){return $f(n,e.toTimestamp())}function $i(n){return tt(!!n,49232),Ie.fromTimestamp((function(t){const s=Ur(t);return new Et(s.seconds,s.nanos)})(n))}function H_(n,e){return Hg(n,e).canonicalString()}function Hg(n,e){const t=(function(a){return new pt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function D1(n){const e=pt.fromString(n);return tt(V1(e),10190,{key:e.toString()}),e}function Gg(n,e){return H_(n.databaseId,e.path)}function fg(n,e){const t=D1(e);if(t.get(1)!==n.databaseId.projectId)throw new ue($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(M1(t))}function O1(n,e){return H_(n.databaseId,e)}function cO(n){const e=D1(n);return e.length===4?pt.emptyPath():M1(e)}function Qg(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function M1(n){return tt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ob(n,e,t){return{name:Gg(n,e),fields:t.value.mapValue.fields}}function hO(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(tt(y===void 0||typeof y=="string",58123),yn.fromBase64String(y||"")):(tt(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),yn.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const y=g.code===void 0?$.UNKNOWN:R1(g.code);return new ue(y,g.message||"")})(c);t=new x1(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=fg(n,s.document.name),l=$i(s.document.updateTime),c=s.document.createTime?$i(s.document.createTime):Ie.min(),d=new jn({mapValue:{fields:s.document.fields}}),p=wn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new xf(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=fg(n,s.document),l=s.readTime?$i(s.readTime):Ie.min(),c=wn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new xf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=fg(n,s.document),l=s.removedTargetIds||[];t=new xf([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new eO(a,l),d=s.targetId;t=new I1(d,c)}}return t}function fO(n,e){let t;if(e instanceof Oc)t={update:Ob(n,e.key,e.value)};else if(e instanceof Od)t={delete:Gg(n,e.key)};else if(e instanceof Yr)t={update:Ob(n,e.key,e.data),updateMask:TO(e.fieldMask)};else{if(!(e instanceof WD))return Te(16599,{Vt:e.type});t={verify:Gg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const d=c.transform;if(d instanceof yc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ml)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof pl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Kf)return{fieldPath:c.field.canonicalString(),increment:d.Ae};throw Te(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:uO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)})(n,e.precondition)),t}function dO(n,e){return n&&n.length>0?(tt(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?$i(a.updateTime):$i(l);return c.isEqual(Ie.min())&&(c=$i(l)),new KD(c,a.transformResults||[])})(t,e)))):[]}function mO(n,e){return{documents:[O1(n,e.path)]}}function pO(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=O1(n,a);const l=(function(g){if(g.length!==0)return P1(Ci.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((y=>(function(b){return{field:$o(b.field),direction:yO(b.dir)}})(y)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Fg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function gO(n){let e=cO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){tt(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(T){const b=k1(T);return b instanceof Ci&&c1(b)?b.getFilters():[b]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((b=>(function(U){return new _c(Xo(U.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(b)))})(t.orderBy));let d=null;t.limit&&(d=(function(T){let b;return b=typeof T=="object"?T.value:T,Ad(b)?null:b})(t.limit));let p=null;t.startAt&&(p=(function(T){const b=!!T.before,D=T.values||[];return new Qf(D,b)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const b=!T.before,D=T.values||[];return new Qf(D,b)})(t.endAt)),PD(e,a,c,l,d,"F",p,g)}function _O(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function k1(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Xo(t.unaryFilter.field);return Ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Xo(t.unaryFilter.field);return Ft.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Xo(t.unaryFilter.field);return Ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Xo(t.unaryFilter.field);return Ft.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ft.create(Xo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ci.create(t.compositeFilter.filters.map((s=>k1(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function yO(n){return rO[n]}function vO(n){return aO[n]}function EO(n){return oO[n]}function $o(n){return{fieldPath:n.canonicalString()}}function Xo(n){return _n.fromServerFormat(n.fieldPath)}function P1(n){return n instanceof Ft?(function(t){if(t.op==="=="){if(vb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NAN"}};if(yb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NAN"}};if(yb(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$o(t.field),op:vO(t.op),value:t.value}}})(n):n instanceof Ci?(function(t){const s=t.getFilters().map((a=>P1(a)));return s.length===1?s[0]:{compositeFilter:{op:EO(t.op),filters:s}}})(n):Te(54877,{filter:n})}function TO(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function V1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bO{constructor(e){this.yt=e}}function wO(n){const e=gO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.Cn=new AO}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(Lr.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class AO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Zt(pt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Zt(pt.comparator)).toArray()}}/**
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
 */const Mb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},L1=41943040;class Un{static withCacheSize(e){return new Un(e,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un.DEFAULT_COLLECTION_PERCENTILE=10,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Un.DEFAULT=new Un(L1,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Un.DISABLED=new Un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const kb="LruGarbageCollector",CO=1048576;function Pb([n,e],[t,s]){const a=Fe(n,t);return a===0?Fe(e,s):a}class RO{constructor(e){this.Ir=e,this.buffer=new Zt(Pb),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Pb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class IO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(kb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xl(t)?he(kb,"Ignoring IndexedDB error during garbage collection: ",t):await Il(t)}await this.Vr(3e5)}))}}class xO{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Sd.ce);const s=new RO(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Mb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mb):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,d=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),Yo()<=Be.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function NO(n,e){return new xO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.changes=new $a((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,wn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&ic(s.mutation,a,Zn.empty(),Et.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,He()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=He()){const a=Oa();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=$u();return l.forEach(((d,p)=>{c=c.insert(d,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Oa();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,He())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,s,a){let l=Hs();const c=nc(),d=(function(){return nc()})();return t.forEach(((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Yr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),ic(y.mutation,g,y.mutation.getFieldMask(),Et.now())):c.set(g.key,Zn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,y)=>c.set(g,y))),t.forEach(((g,y)=>d.set(g,new OO(y,c.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=nc();let a=new Gt(((c,d)=>c-d)),l=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Zn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||He()).add(p);a=a.insert(d.batchId,T)}))})).next((()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=v1();y.forEach((b=>{if(!l.has(b)){const D=A1(t.get(b),s.get(b));D!==null&&T.set(b,D),l=l.add(b)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return ee.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):m1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(Oa());let d=dc,p=l;return c.next((g=>ee.forEach(g,((y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next((b=>{p=p.insert(y,b)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,He()))).next((y=>({batchId:d,changes:y1(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((s=>{let a=$u();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=$u();return this.indexManager.getCollectionParents(e,l).next((d=>ee.forEach(d,(p=>{const g=(function(T,b){return new Nl(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((T,b)=>{c=c.insert(T,b)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,wn.newInvalidDocument(y)))}));let d=$u();return c.forEach(((p,g)=>{const y=l.get(p);y!==void 0&&ic(y.mutation,g,Zn.empty(),Et.now()),xd(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:$i(a.createTime)}})(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:wO(a.bundledQuery),readTime:$i(a.readTime)}})(t)),ee.resolve()}}/**
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
 */class PO{constructor(){this.overlays=new Gt(ye.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Oa();return ee.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=Oa(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Gt(((g,y)=>g-y));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Oa(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Oa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return ee.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new JD(t,s));let l=this.qr.get(t);l===void 0&&(l=He(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class VO{constructor(){this.sessionToken=yn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.Qr=new Zt(on.$r),this.Ur=new Zt(on.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new on(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new on(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ye(new pt([])),s=new on(t,e),a=new on(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ye(new pt([])),s=new on(t,e),a=new on(t,e+1);let l=He();return this.Ur.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new on(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class on{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ye.comparator(e.key,t.key)||Fe(e.Yr,t.Yr)}static Kr(e,t){return Fe(e.Yr,t.Yr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Zt(on.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new ZD(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Zr=this.Zr.add(new on(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(c)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?P_:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new on(t,0),a=new on(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(c=>{const d=this.Xr(c.Yr);l.push(d)})),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Zt(Fe);return t.forEach((a=>{const l=new on(a,0),c=new on(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(d=>{s=s.add(d.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const c=new on(new ye(l),0);let d=new Zt(Fe);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),c),ee.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){tt(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,(a=>{const l=new on(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new on(t,0),a=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.ri=e,this.docs=(function(){return new Gt(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():wn.newInvalidDocument(t))}getEntries(e,t){let s=Hs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():wn.newInvalidDocument(a))})),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Hs();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||dD(fD(y),s)<=0||(a.has(y.key)||xd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Te(9500)}ii(e,t){return ee.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new jO(this)}getSize(e){return ee.resolve(this.size)}}class jO extends DO{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.persistence=e,this.si=new $a((t=>U_(t)),j_),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.oi=0,this._i=new G_,this.targetCount=0,this.ai=gl.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new gl(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),ee.waitFor(l).next((()=>a))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t){this.ui={},this.overlays={},this.ci=new Sd(0),this.li=!1,this.li=!0,this.hi=new VO,this.referenceDelegate=e(this),this.Pi=new zO(this),this.indexManager=new SO,this.remoteDocumentCache=(function(a){return new UO(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new bO(t),this.Ii=new kO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new PO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new LO(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new BO(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class BO extends pD{constructor(e){super(),this.currentSequenceNumber=e}}class Q_{constructor(e){this.persistence=e,this.Ri=new G_,this.Vi=null}static mi(e){return new Q_(e)}get fi(){if(this.Vi)return this.Vi;throw Te(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const a=ye.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ie.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Xf{constructor(e,t){this.persistence=e,this.pi=new $a((s=>yD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=NO(this,t)}static mi(e,t){return new Xf(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return ee.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?ee.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((d=>{d||(s++,l.removeEntry(c,Ie.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cf(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=He(),a=He();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Y_(e,t.fromCache,s,a)}}/**
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
 */class qO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return xI()?8:gD(An())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new qO;return this.Ss(e,t,c).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,c,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Yo()<=Be.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Yo()<=Be.DEBUG&&he("QueryEngine","Query:",Ko(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Yo()<=Be.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ki(t))):ee.resolve())}ys(e,t){if(wb(t))return ee.resolve(null);let s=Ki(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Yf(t,null,"F"),s=Ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=He(...l);return this.ps.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,c,p.readTime)?this.ys(e,Yf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return wb(t)||a.isEqual(Ie.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,s,a)?ee.resolve(null):(Yo()<=Be.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Ko(t)),this.vs(e,c,t,hD(a,dc)).next((d=>d)))}))}Ds(e,t){let s=new Zt(g1(e));return t.forEach(((a,l)=>{xd(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Yo()<=Be.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Ko(t)),this.ps.getDocumentsMatchingQuery(e,t,Lr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="LocalStore",HO=3e8;class GO{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Gt(Fe),this.xs=new $a((l=>U_(l)),j_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function QO(n,e,t,s){return new GO(n,e,t,s)}async function j1(n,e){const t=xe(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],d=[];let p=He();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function YO(n,e){const t=xe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,y){const T=g.batch,b=T.keys();let D=ee.resolve();return b.forEach((U=>{D=D.next((()=>y.getEntry(p,U))).next((q=>{const G=g.docVersions.get(U);tt(G!==null,48541),q.version.compareTo(G)<0&&(T.applyToRemoteDocument(q,g),q.isValidDocument()&&(q.setReadTime(g.commitVersion),y.addEntry(q)))}))})),D.next((()=>d.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=He();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function z1(n){const e=xe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function KO(n,e){const t=xe(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,T)=>{const b=a.get(T);if(!b)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,T))));let D=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?D=D.withResumeToken(yn.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):y.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(y.resumeToken,s)),a=a.insert(T,D),(function(q,G,se){return q.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=HO?!0:se.addedDocuments.size+se.modifiedDocuments.size+se.removedDocuments.size>0})(b,D,y)&&d.push(t.Pi.updateTargetData(l,D))}));let p=Hs(),g=He();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push($O(l,c,e.documentUpdates).next((y=>{p=y.ks,g=y.qs}))),!s.isEqual(Ie.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return ee.waitFor(d).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function $O(n,e,t){let s=He(),a=He();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Hs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):he(K_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function XO(n,e){const t=xe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=P_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function WO(n,e){const t=xe(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,ee.resolve(a)):t.Pi.allocateTargetId(s).next((c=>(a=new Ir(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Yg(n,e,t){const s=xe(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!xl(c))throw c;he(K_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function Vb(n,e,t){const s=xe(n);let a=Ie.min(),l=He();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,y){const T=xe(p),b=T.xs.get(y);return b!==void 0?ee.resolve(T.Ms.get(b)):T.Pi.getTargetData(g,y)})(s,c,Ki(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(c,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(c,e,t?a:Ie.min(),t?l:He()))).next((d=>(ZO(s,LD(e),d),{documents:d,Qs:l})))))}function ZO(n,e,t){let s=n.Os.get(e)||Ie.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Lb{constructor(){this.activeTargetIds=FD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JO{constructor(){this.Mo=new Lb,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Lb,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="ConnectivityMonitor";class jb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(Ub,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(Ub,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yf=null;function Kg(){return yf===null?yf=(function(){return 268435456+Math.round(2147483648*Math.random())})():yf++,"0x"+yf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="RestConnection",tM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Hf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const c=Kg(),d=this.zo(e,t.toUriEncodedString());he(dg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),y=Gr(g);return this.Jo(e,d,p,s,y).then((T=>(he(dg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw cl(dg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T}))}Ho(e,t,s,a,l,c){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=tM[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="WebChannelConnection";class sM extends nM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Kg();return new Promise(((d,p)=>{const g=new FS;g.setWithCredentials(!0),g.listenOnce(HS.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Af.NO_ERROR:const T=g.getResponseJson();he(Tn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Af.TIMEOUT:he(Tn,`RPC '${e}' ${c} timed out`),p(new ue($.DEADLINE_EXCEEDED,"Request time out"));break;case Af.HTTP_ERROR:const b=g.getStatus();if(he(Tn,`RPC '${e}' ${c} failed with status:`,b,"response text:",g.getResponseText()),b>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const U=D?.error;if(U&&U.status&&U.message){const q=(function(se){const ie=se.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ie)>=0?ie:$.UNKNOWN})(U.status);p(new ue(q,U.message))}else p(new ue($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ue($.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(Tn,`RPC '${e}' ${c} completed.`)}}));const y=JSON.stringify(a);he(Tn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Kg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=YS(),d=QS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");he(Tn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);this.I_(T);let b=!1,D=!1;const U=new iM({Yo:G=>{D?he(Tn,`Not sending because RPC '${e}' stream ${a} is closed:`,G):(b||(he(Tn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),b=!0),he(Tn,`RPC '${e}' stream ${a} sending:`,G),T.send(G))},Zo:()=>T.close()}),q=(G,se,ie)=>{G.listen(se,(re=>{try{ie(re)}catch(pe){setTimeout((()=>{throw pe}),0)}}))};return q(T,Ku.EventType.OPEN,(()=>{D||(he(Tn,`RPC '${e}' stream ${a} transport opened.`),U.o_())})),q(T,Ku.EventType.CLOSE,(()=>{D||(D=!0,he(Tn,`RPC '${e}' stream ${a} transport closed`),U.a_(),this.E_(T))})),q(T,Ku.EventType.ERROR,(G=>{D||(D=!0,cl(Tn,`RPC '${e}' stream ${a} transport errored. Name:`,G.name,"Message:",G.message),U.a_(new ue($.UNAVAILABLE,"The operation could not be completed")))})),q(T,Ku.EventType.MESSAGE,(G=>{if(!D){const se=G.data[0];tt(!!se,16349);const ie=se,re=ie?.error||ie[0]?.error;if(re){he(Tn,`RPC '${e}' stream ${a} received error:`,re);const pe=re.status;let de=(function(C){const x=Bt[C];if(x!==void 0)return R1(x)})(pe),Ne=re.message;de===void 0&&(de=$.INTERNAL,Ne="Unknown error status: "+pe+" with message "+re.message),D=!0,U.a_(new ue(de,Ne)),T.close()}else he(Tn,`RPC '${e}' stream ${a} received:`,se),U.u_(se)}})),q(d,GS.STAT_EVENT,(G=>{G.stat===Pg.PROXY?he(Tn,`RPC '${e}' stream ${a} detected buffering proxy`):G.stat===Pg.NOPROXY&&he(Tn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function mg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){return new lO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="PersistentStream";class q1{constructor(e,t,s,a,l,c,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new B1(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Fs(t.toString()),Fs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ue($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(zb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(he(zb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rM extends q1{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=hO(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?$i(c.readTime):Ie.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Qg(this.serializer),t.addTarget=(function(l,c){let d;const p=c.target;if(d=Bg(p)?{documents:mO(l,p)}:{query:pO(l,p).ft},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=N1(l,c.resumeToken);const g=Fg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=$f(l,c.snapshotVersion.toTimestamp());const g=Fg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=_O(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Qg(this.serializer),t.removeTarget=e,this.q_(t)}}class aM extends q1{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return tt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,tt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){tt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=dO(e.writeResults,e.commitTime),s=$i(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Qg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>fO(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{}class lM extends oM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ue($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,Hg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue($.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Ho(e,Hg(t,s),a,c,d,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue($.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class uM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Fa="RemoteStore";class cM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{s.enqueueAndForget((async()=>{Xa(this)&&(he(Fa,"Restarting streams for network reachability change."),await(async function(p){const g=xe(p);g.Ea.add(4),await kc(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Pd(g)})(this))}))})),this.Ra=new uM(s,a)}}async function Pd(n){if(Xa(n))for(const e of n.da)await e(!0)}async function kc(n){for(const e of n.da)await e(!1)}function F1(n,e){const t=xe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Z_(t)?W_(t):Dl(t).O_()&&X_(t,e))}function $_(n,e){const t=xe(n),s=Dl(t);t.Ia.delete(e),s.O_()&&H1(t,e),t.Ia.size===0&&(s.O_()?s.L_():Xa(t)&&t.Ra.set("Unknown"))}function X_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Dl(n).Y_(e)}function H1(n,e){n.Va.Ue(e),Dl(n).Z_(e)}function W_(n){n.Va=new sO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Dl(n).start(),n.Ra.ua()}function Z_(n){return Xa(n)&&!Dl(n).x_()&&n.Ia.size>0}function Xa(n){return xe(n).Ea.size===0}function G1(n){n.Va=void 0}async function hM(n){n.Ra.set("Online")}async function fM(n){n.Ia.forEach(((e,t)=>{X_(n,e)}))}async function dM(n,e){G1(n),Z_(n)?(n.Ra.ha(e),W_(n)):n.Ra.set("Unknown")}async function mM(n,e,t){if(n.Ra.set("Online"),e instanceof x1&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){he(Fa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wf(n,s)}else if(e instanceof xf?n.Va.Ze(e):e instanceof I1?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ie.min()))try{const s=await z1(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const d=l.Va.Tt(c);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(p.resumeToken,c))}})),d.targetMismatches.forEach(((p,g)=>{const y=l.Ia.get(p);if(!y)return;l.Ia.set(p,y.withResumeToken(yn.EMPTY_BYTE_STRING,y.snapshotVersion)),H1(l,p);const T=new Ir(y.target,p,g,y.sequenceNumber);X_(l,T)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){he(Fa,"Failed to raise snapshot:",s),await Wf(n,s)}}async function Wf(n,e,t){if(!xl(e))throw e;n.Ea.add(1),await kc(n),n.Ra.set("Offline"),t||(t=()=>z1(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{he(Fa,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Pd(n)}))}function Q1(n,e){return e().catch((t=>Wf(n,t,e)))}async function Vd(n){const e=xe(n),t=Br(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:P_;for(;pM(e);)try{const a=await XO(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,gM(e,a)}catch(a){await Wf(e,a)}Y1(e)&&K1(e)}function pM(n){return Xa(n)&&n.Ta.length<10}function gM(n,e){n.Ta.push(e);const t=Br(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Y1(n){return Xa(n)&&!Br(n).x_()&&n.Ta.length>0}function K1(n){Br(n).start()}async function _M(n){Br(n).ra()}async function yM(n){const e=Br(n);for(const t of n.Ta)e.ea(t.mutations)}async function vM(n,e,t){const s=n.Ta.shift(),a=q_.from(s,e,t);await Q1(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Vd(n)}async function EM(n,e){e&&Br(n).X_&&await(async function(s,a){if((function(c){return tO(c)&&c!==$.ABORTED})(a.code)){const l=s.Ta.shift();Br(s).B_(),await Q1(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Vd(s)}})(n,e),Y1(n)&&K1(n)}async function Bb(n,e){const t=xe(n);t.asyncQueue.verifyOperationInProgress(),he(Fa,"RemoteStore received new credentials");const s=Xa(t);t.Ea.add(3),await kc(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Pd(t)}async function TM(n,e){const t=xe(n);e?(t.Ea.delete(2),await Pd(t)):e||(t.Ea.add(2),await kc(t),t.Ra.set("Unknown"))}function Dl(n){return n.ma||(n.ma=(function(t,s,a){const l=xe(t);return l.sa(),new rM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:hM.bind(null,n),t_:fM.bind(null,n),r_:dM.bind(null,n),H_:mM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Z_(n)?W_(n):n.Ra.set("Unknown")):(await n.ma.stop(),G1(n))}))),n.ma}function Br(n){return n.fa||(n.fa=(function(t,s,a){const l=xe(t);return l.sa(),new aM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:_M.bind(null,n),r_:EM.bind(null,n),ta:yM.bind(null,n),na:vM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Vd(n)):(await n.fa.stop(),n.Ta.length>0&&(he(Fa,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new js,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new J_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ey(n,e){if(Fs("AsyncQueue",`${e}: ${n}`),xl(n))return new ue($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{static emptySet(e){return new il(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=$u(),this.sortedSet=new Gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof il)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class qb{constructor(){this.ga=new Gt(ye.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Te(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class _l{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new _l(e,t,il.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Id(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class wM{constructor(){this.queries=Fb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=xe(t),l=a.queries;a.queries=Fb(),l.forEach(((c,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new ue($.ABORTED,"Firestore shutting down"))}}function Fb(){return new $a((n=>p1(n)),Id)}async function ty(n,e){const t=xe(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new bM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=ey(c,`Initialization of query '${Ko(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&iy(t)}async function ny(n,e){const t=xe(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function SM(n,e){const t=xe(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Fa(a)&&(s=!0);c.wa=a}}s&&iy(t)}function AM(n,e,t){const s=xe(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function iy(n){n.Ca.forEach((e=>{e.next()}))}var $g,Hb;(Hb=$g||($g={})).Ma="default",Hb.Cache="cache";class sy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new _l(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=_l.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$g.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.key=e}}class X1{constructor(e){this.key=e}}class CM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=He(),this.mutatedKeys=He(),this.eu=g1(e),this.tu=new il(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new qb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,T)=>{const b=a.get(y),D=xd(this.query,T)?T:null,U=!!b&&this.mutatedKeys.has(b.key),q=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let G=!1;b&&D?b.data.isEqual(D.data)?U!==q&&(s.track({type:3,doc:D}),G=!0):this.su(b,D)||(s.track({type:2,doc:D}),G=!0,(p&&this.eu(D,p)>0||g&&this.eu(D,g)<0)&&(d=!0)):!b&&D?(s.track({type:0,doc:D}),G=!0):b&&!D&&(s.track({type:1,doc:b}),G=!0,(p||g)&&(d=!0)),G&&(D?(c=c.add(D),l=q?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:c,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((y,T)=>(function(D,U){const q=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Rt:G})}};return q(D)-q(U)})(y.type,T.type)||this.eu(y.doc,T.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new _l(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=He(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new X1(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new $1(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=He();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return _l.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ry="SyncEngine";class RM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class IM{constructor(e){this.key=e,this.hu=!1}}class xM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new $a((d=>p1(d)),Id),this.Iu=new Map,this.Eu=new Set,this.du=new Gt(ye.comparator),this.Au=new Map,this.Ru=new G_,this.Vu={},this.mu=new Map,this.fu=gl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function NM(n,e,t=!0){const s=nA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await W1(s,e,t,!0),a}async function DM(n,e){const t=nA(n);await W1(t,e,!0,!1)}async function W1(n,e,t,s){const a=await WO(n.localStore,Ki(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await OM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&F1(n.remoteStore,a),d}async function OM(n,e,t,s,a){n.pu=(T,b,D)=>(async function(q,G,se,ie){let re=G.view.ru(se);re.Cs&&(re=await Vb(q.localStore,G.query,!1).then((({documents:P})=>G.view.ru(P,re))));const pe=ie&&ie.targetChanges.get(G.targetId),de=ie&&ie.targetMismatches.get(G.targetId)!=null,Ne=G.view.applyChanges(re,q.isPrimaryClient,pe,de);return Qb(q,G.targetId,Ne.au),Ne.snapshot})(n,T,b,D);const l=await Vb(n.localStore,e,!0),c=new CM(e,l.Qs),d=c.ru(l.documents),p=Mc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);Qb(n,t,g.au);const y=new RM(e,t,c);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function MM(n,e,t){const s=xe(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((c=>!Id(c,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Yg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&$_(s.remoteStore,a.targetId),Xg(s,a.targetId)})).catch(Il)):(Xg(s,a.targetId),await Yg(s.localStore,a.targetId,!0))}async function kM(n,e){const t=xe(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),$_(t.remoteStore,s.targetId))}async function PM(n,e,t){const s=qM(n);try{const a=await(function(c,d){const p=xe(c),g=Et.now(),y=d.reduce(((D,U)=>D.add(U.key)),He());let T,b;return p.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let U=Hs(),q=He();return p.Ns.getEntries(D,y).next((G=>{U=G,U.forEach(((se,ie)=>{ie.isValidDocument()||(q=q.add(se))}))})).next((()=>p.localDocuments.getOverlayedDocuments(D,U))).next((G=>{T=G;const se=[];for(const ie of d){const re=XD(ie,T.get(ie.key).overlayedDocument);re!=null&&se.push(new Yr(ie.key,re,o1(re.value.mapValue),On.exists(!0)))}return p.mutationQueue.addMutationBatch(D,g,se,d)})).next((G=>{b=G;const se=G.applyToLocalDocumentSet(T,q);return p.documentOverlayCache.saveOverlays(D,G.batchId,se)}))})).then((()=>({batchId:b.batchId,changes:y1(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,d,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new Gt(Fe)),g=g.insert(d,p),c.Vu[c.currentUser.toKey()]=g})(s,a.batchId,t),await Pc(s,a.changes),await Vd(s.remoteStore)}catch(a){const l=ey(a,"Failed to persist write");t.reject(l)}}async function Z1(n,e){const t=xe(n);try{const s=await KO(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(tt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?tt(c.hu,14607):a.removedDocuments.size>0&&(tt(c.hu,42227),c.hu=!1))})),await Pc(t,s,e)}catch(s){await Il(s)}}function Gb(n,e,t){const s=xe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(c,d){const p=xe(c);p.onlineState=d;let g=!1;p.queries.forEach(((y,T)=>{for(const b of T.Sa)b.va(d)&&(g=!0)})),g&&iy(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function VM(n,e,t){const s=xe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let c=new Gt(ye.comparator);c=c.insert(l,wn.newNoDocument(l,Ie.min()));const d=He().add(l),p=new Md(Ie.min(),new Map,new Gt(Fe),c,d);await Z1(s,p),s.du=s.du.remove(l),s.Au.delete(e),ay(s)}else await Yg(s.localStore,e,!1).then((()=>Xg(s,e,t))).catch(Il)}async function LM(n,e){const t=xe(n),s=e.batch.batchId;try{const a=await YO(t.localStore,e);eA(t,s,null),J1(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Pc(t,a)}catch(a){await Il(a)}}async function UM(n,e,t){const s=xe(n);try{const a=await(function(c,d){const p=xe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next((T=>(tt(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>p.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);eA(s,e,t),J1(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Pc(s,a)}catch(a){await Il(a)}}function J1(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function eA(n,e,t){const s=xe(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Xg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||tA(n,s)}))}function tA(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&($_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ay(n))}function Qb(n,e,t){for(const s of t)s instanceof $1?(n.Ru.addReference(s.key,e),jM(n,s)):s instanceof X1?(he(ry,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||tA(n,s.key)):Te(19791,{wu:s})}function jM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(he(ry,"New document in limbo: "+t),n.Eu.add(s),ay(n))}function ay(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ye(pt.fromString(e)),s=n.fu.next();n.Au.set(s,new IM(t)),n.du=n.du.insert(t,s),F1(n.remoteStore,new Ir(Ki(Rd(t.path)),s,"TargetPurposeLimboResolution",Sd.ce))}}async function Pc(n,e,t){const s=xe(n),a=[],l=[],c=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{c.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){a.push(g);const y=Y_.As(p.targetId,g);l.push(y)}})))})),await Promise.all(c),s.Pu.H_(a),await(async function(p,g){const y=xe(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>ee.forEach(g,(b=>ee.forEach(b.Es,(D=>y.persistence.referenceDelegate.addReference(T,b.targetId,D))).next((()=>ee.forEach(b.ds,(D=>y.persistence.referenceDelegate.removeReference(T,b.targetId,D)))))))))}catch(T){if(!xl(T))throw T;he(K_,"Failed to update sequence numbers: "+T)}for(const T of g){const b=T.targetId;if(!T.fromCache){const D=y.Ms.get(b),U=D.snapshotVersion,q=D.withLastLimboFreeSnapshotVersion(U);y.Ms=y.Ms.insert(b,q)}}})(s.localStore,l))}async function zM(n,e){const t=xe(n);if(!t.currentUser.isEqual(e)){he(ry,"User change. New user:",e.toKey());const s=await j1(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new ue($.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Pc(t,s.Ls)}}function BM(n,e){const t=xe(n),s=t.Au.get(e);if(s&&s.hu)return He().add(s.key);{let a=He();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const d=t.Tu.get(c);a=a.unionWith(d.view.nu)}return a}}function nA(n){const e=xe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VM.bind(null,e),e.Pu.H_=SM.bind(null,e.eventManager),e.Pu.yu=AM.bind(null,e.eventManager),e}function qM(n){const e=xe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UM.bind(null,e),e}class Zf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return QO(this.persistence,new FO,e.initialUser,this.serializer)}Cu(e){return new U1(Q_.mi,this.serializer)}Du(e){return new JO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zf.provider={build:()=>new Zf};class FM extends Zf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){tt(this.persistence.referenceDelegate instanceof Xf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new IO(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Un.withCacheSize(this.cacheSizeBytes):Un.DEFAULT;return new U1((s=>Xf.mi(s,t)),this.serializer)}}class Wg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zM.bind(null,this.syncEngine),await TM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wM})()}createDatastore(e){const t=kd(e.databaseInfo.databaseId),s=(function(l){return new sM(l)})(e.databaseInfo);return(function(l,c,d,p){return new lM(l,c,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,d){return new cM(s,a,l,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gb(this.syncEngine,t,0)),(function(){return jb.v()?new jb:new eM})())}createSyncEngine(e,t){return(function(a,l,c,d,p,g,y){const T=new xM(a,l,c,d,p,g);return y&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=xe(t);he(Fa,"RemoteStore shutting down."),s.Ea.add(5),await kc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Wg.provider={build:()=>new Wg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirestoreClient";class HM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=bn.UNAUTHENTICATED,this.clientId=k_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{he(qr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(he(qr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new js;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ey(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function pg(n,e){n.asyncQueue.verifyOperationInProgress(),he(qr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await j1(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Yb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await GM(n);he(qr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Bb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>Bb(e.remoteStore,a))),n._onlineComponents=e}async function GM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(qr,"Using user provided OfflineComponentProvider");try{await pg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;cl("Error using user provided cache. Falling back to memory cache: "+t),await pg(n,new Zf)}}else he(qr,"Using default OfflineComponentProvider"),await pg(n,new FM(void 0));return n._offlineComponents}async function iA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(qr,"Using user provided OnlineComponentProvider"),await Yb(n,n._uninitializedComponentsProvider._online)):(he(qr,"Using default OnlineComponentProvider"),await Yb(n,new Wg))),n._onlineComponents}function QM(n){return iA(n).then((e=>e.syncEngine))}async function Jf(n){const e=await iA(n),t=e.eventManager;return t.onListen=NM.bind(null,e.syncEngine),t.onUnlisten=MM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=DM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kM.bind(null,e.syncEngine),t}function YM(n,e,t={}){const s=new js;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new oy({next:b=>{y.Nu(),c.enqueueAndForget((()=>ny(l,T)));const D=b.docs.has(d);!D&&b.fromCache?g.reject(new ue($.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&b.fromCache&&p&&p.source==="server"?g.reject(new ue($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new sy(Rd(d.path),y,{includeMetadataChanges:!0,qa:!0});return ty(l,T)})(await Jf(n),n.asyncQueue,e,t,s))),s.promise}function KM(n,e,t={}){const s=new js;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,d,p,g){const y=new oy({next:b=>{y.Nu(),c.enqueueAndForget((()=>ny(l,T))),b.fromCache&&p.source==="server"?g.reject(new ue($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new sy(d,y,{includeMetadataChanges:!0,qa:!0});return ty(l,T)})(await Jf(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */function sA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="firestore.googleapis.com",$b=!0;class Xb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rA,this.ssl=$b}else this.host=e.host,this.ssl=e.ssl??$b;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=L1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CO)throw new ue($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ld{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new eD;switch(s.type){case"firstParty":return new sD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Kb.get(t);s&&(he("ComponentProvider","Removing Datastore"),Kb.delete(t),s.terminate())})(this),Promise.resolve()}}function $M(n,e,t,s={}){n=Dn(n,Ld);const a=Gr(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(v_(`https://${d}`),E_("Firestore",!0)),l.host!==rA&&l.host!==d&&cl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Zi(p,c)&&(n._setSettings(p),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=bn.MOCK_USER;else{g=iS(s.mockUserToken,n._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new ue($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new bn(T)}n._authCredentials=new tD(new $S(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class It{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Dc(t,It._jsonSchema))return new It(e,s||null,new ye(pt.fromString(t.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:Ht("string",It._jsonSchemaVersion),referencePath:Ht("string")};class kr extends Ks{constructor(e,t,s){super(e,t,Rd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new ye(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function Wt(n,e,...t){if(n=gt(n),XS("collection","path",e),n instanceof Ld){const s=pt.fromString(e,...t);return ub(s),new kr(n,null,s)}{if(!(n instanceof It||n instanceof kr))throw new ue($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(e,...t));return ub(s),new kr(n.firestore,null,s)}}function wt(n,e,...t){if(n=gt(n),arguments.length===1&&(e=k_.newId()),XS("doc","path",e),n instanceof Ld){const s=pt.fromString(e,...t);return lb(s),new It(n,null,new ye(s))}{if(!(n instanceof It||n instanceof kr))throw new ue($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(e,...t));return lb(s),new It(n.firestore,n instanceof kr?n.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="AsyncQueue";class Zb{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new B1(this,"async_queue_retry"),this._c=()=>{const s=mg();s&&he(Wb,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=mg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=mg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new js;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!xl(e))throw e;he(Wb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Fs("INTERNAL UNHANDLED ERROR: ",Jb(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=J_.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Te(47125,{Pc:Jb(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Jb(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function ew(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class ts extends Ld{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new Zb,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zb(e),this._firestoreClient=void 0,await e}}}function XM(n,e){const t=typeof n=="object"?n:w_(),s=typeof n=="string"?n:Hf,a=vd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=eS("firestore");l&&$M(a,...l)}return a}function Vc(n){if(n._terminated)throw new ue($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||WM(n),n._firestoreClient}function WM(n){const e=n._freezeSettings(),t=(function(a,l,c,d){return new TD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,sA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new HM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(yn.fromBase64String(e))}catch(t){throw new ue($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fi(yn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dc(e,fi._jsonSchema))return fi.fromBase64String(e.bytes)}}fi._jsonSchemaVersion="firestore/bytes/1.0",fi._jsonSchema={type:Ht("string",fi._jsonSchemaVersion),bytes:Ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xi._jsonSchemaVersion}}static fromJSON(e){if(Dc(e,Xi._jsonSchema))return new Xi(e.latitude,e.longitude)}}Xi._jsonSchemaVersion="firestore/geoPoint/1.0",Xi._jsonSchema={type:Ht("string",Xi._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class Wi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dc(e,Wi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wi(e.vectorValues);throw new ue($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wi._jsonSchemaVersion="firestore/vectorValue/1.0",Wi._jsonSchema={type:Ht("string",Wi._jsonSchemaVersion),vectorValues:Ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=/^__.*__$/;class JM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oc(e,this.data,t,this.fieldTransforms)}}class aA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Yr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ac:n})}}class Ud{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ud({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ed(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(oA(this.Ac)&&ZM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ek{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||kd(e)}Cc(e,t,s,a=!1){return new Ud({Ac:e,methodName:t,Dc:s,path:_n.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uc(n){const e=n._freezeSettings(),t=kd(n._databaseId);return new ek(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ly(n,e,t,s,a,l={}){const c=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);fy("Data must be an object, but it was:",c,s);const d=hA(s,c);let p,g;if(l.merge)p=new Zn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const b=Zg(e,T,t);if(!c.contains(b))throw new ue($.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);dA(y,b)||y.push(b)}p=new Zn(y),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new JM(new jn(d),p,g)}class jd extends Ol{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jd}}function lA(n,e,t){return new Ud({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class uy extends Ol{_toFieldTransform(e){return new B_(e.path,new yc)}isEqual(e){return e instanceof uy}}class cy extends Ol{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=lA(this,e,!0),s=this.vc.map((l=>Wa(l,t))),a=new ml(s);return new B_(e.path,a)}isEqual(e){return e instanceof cy&&Zi(this.vc,e.vc)}}class hy extends Ol{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=lA(this,e,!0),s=this.vc.map((l=>Wa(l,t))),a=new pl(s);return new B_(e.path,a)}isEqual(e){return e instanceof hy&&Zi(this.vc,e.vc)}}function uA(n,e,t,s){const a=n.Cc(1,e,t);fy("Data must be an object, but it was:",a,s);const l=[],c=jn.empty();Qr(s,((p,g)=>{const y=dy(e,p,t);g=gt(g);const T=a.yc(y);if(g instanceof jd)l.push(y);else{const b=Wa(g,T);b!=null&&(l.push(y),c.set(y,b))}}));const d=new Zn(l);return new aA(c,d,a.fieldTransforms)}function cA(n,e,t,s,a,l){const c=n.Cc(1,e,t),d=[Zg(e,s,t)],p=[a];if(l.length%2!=0)throw new ue($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(Zg(e,l[b])),p.push(l[b+1]);const g=[],y=jn.empty();for(let b=d.length-1;b>=0;--b)if(!dA(g,d[b])){const D=d[b];let U=p[b];U=gt(U);const q=c.yc(D);if(U instanceof jd)g.push(D);else{const G=Wa(U,q);G!=null&&(g.push(D),y.set(D,G))}}const T=new Zn(g);return new aA(y,T,c.fieldTransforms)}function tk(n,e,t,s=!1){return Wa(t,n.Cc(s?4:3,e))}function Wa(n,e){if(fA(n=gt(n)))return fy("Unsupported field value:",e,n),hA(n,e);if(n instanceof Ol)return(function(s,a){if(!oA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const d of s){let p=Wa(d,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return HD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Et.fromDate(s);return{timestampValue:$f(a.serializer,l)}}if(s instanceof Et){const l=new Et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:$f(a.serializer,l)}}if(s instanceof Xi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fi)return{bytesValue:N1(a.serializer,s._byteString)};if(s instanceof It){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:H_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Wi)return(function(c,d){return{mapValue:{fields:{[r1]:{stringValue:a1},[Gf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return z_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${wd(s)}`)})(n,e)}function hA(n,e){const t={};return JS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(n,((s,a)=>{const l=Wa(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function fA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Et||n instanceof Xi||n instanceof fi||n instanceof It||n instanceof Ol||n instanceof Wi)}function fy(n,e,t){if(!fA(t)||!WS(t)){const s=wd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Zg(n,e,t){if((e=gt(e))instanceof Lc)return e._internalPath;if(typeof e=="string")return dy(n,e);throw ed("Field path arguments must be of type string or ",n,!1,void 0,t)}const nk=new RegExp("[~\\*/\\[\\]]");function dy(n,e,t){if(e.search(nk)>=0)throw ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Lc(...e.split("."))._internalPath}catch{throw ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ed(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ue($.INVALID_ARGUMENT,d+n+p)}function dA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ik(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ik extends mA{data(){return super.data()}}function zd(n,e){return typeof e=="string"?dy(n,e):e instanceof Lc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class my{}class py extends my{}function Sn(n,e,...t){let s=[];e instanceof my&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((p=>p instanceof gy)).length,d=l.filter((p=>p instanceof Bd)).length;if(c>1||c>0&&d>0)throw new ue($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Bd extends py{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Bd(e,t,s)}_apply(e){const t=this._parse(e);return yA(e._query,t),new Ks(e.firestore,e.converter,qg(e._query,t))}_parse(e){const t=Uc(e.firestore);return(function(l,c,d,p,g,y,T){let b;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ue($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){nw(T,y);const U=[];for(const q of T)U.push(tw(p,l,q));b={arrayValue:{values:U}}}else b=tw(p,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||nw(T,y),b=tk(d,c,T,y==="in"||y==="not-in");return Ft.create(g,y,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xt(n,e,t){const s=e,a=zd("where",n);return Bd._create(a,s,t)}class gy extends my{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ci.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)yA(c,p),c=qg(c,p)})(e._query,t),new Ks(e.firestore,e.converter,qg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _y extends py{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _y(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new ue($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ue($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _c(l,c)})(e._query,this._field,this._direction);return new Ks(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Nl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function gA(n,e="asc"){const t=e,s=zd("orderBy",n);return _y._create(s,t)}class yy extends py{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new yy(e,t,s)}_apply(e){return new Ks(e.firestore,e.converter,Yf(e._query,this._limit,this._limitType))}}function _A(n){return yy._create("limit",n,"F")}function tw(n,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new ue($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!m1(e)&&t.indexOf("/")!==-1)throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(pt.fromString(t));if(!ye.isDocumentKey(s))throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _b(n,new ye(s))}if(t instanceof It)return _b(n,t._key);throw new ue($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wd(t)}.`)}function nw(n,e){if(!Array.isArray(n)||n.length===0)throw new ue($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yA(n,e){const t=(function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ue($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class sk{convertValue(e,t="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return kt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Qr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Gf].arrayValue?.values?.map((s=>kt(s.doubleValue)));return new Wi(t)}convertGeoPoint(e){return new Xi(kt(e.latitude),kt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Cd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(mc(e));default:return null}}convertTimestamp(e){const t=Ur(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=pt.fromString(e);tt(V1(s),9688,{name:e});const a=new pc(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return a.isEqual(t)||Fs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pa extends mA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(zd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pa._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pa._jsonSchema={type:Ht("string",Pa._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Nf extends Pa{data(e={}){return super.data(e)}}class Va{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Wu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Nf(this._firestore,this._userDataWriter,s.key,s,new Wu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((d=>{const p=new Nf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Wu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Nf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Wu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:rk(d.type),doc:p,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Va._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=k_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n){n=Dn(n,It);const e=Dn(n.firestore,ts);return YM(Vc(e),n._key).then((t=>vA(e,n,t)))}Va._jsonSchemaVersion="firestore/querySnapshot/1.0",Va._jsonSchema={type:Ht("string",Va._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Ty extends sk{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function td(n){n=Dn(n,Ks);const e=Dn(n.firestore,ts),t=Vc(e),s=new Ty(e);return pA(n._query),KM(t,n._query).then((a=>new Va(e,s,n,a)))}function ak(n,e,t){n=Dn(n,It);const s=Dn(n.firestore,ts),a=vy(n.converter,e,t);return jc(s,[ly(Uc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,On.none())])}function Mt(n,e,t,...s){n=Dn(n,It);const a=Dn(n.firestore,ts),l=Uc(a);let c;return c=typeof(e=gt(e))=="string"||e instanceof Lc?cA(l,"updateDoc",n._key,e,t,s):uA(l,"updateDoc",n._key,e),jc(a,[c.toMutation(n._key,On.exists(!0))])}function Jg(n){return jc(Dn(n.firestore,ts),[new Od(n._key,On.none())])}function by(n,e){const t=Dn(n.firestore,ts),s=wt(n),a=vy(n.converter,e);return jc(t,[ly(Uc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,On.exists(!1))]).then((()=>s))}function Mn(n,...e){n=gt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||ew(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ew(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,c,d;if(n instanceof It)c=Dn(n.firestore,ts),d=Rd(n._key.path),l={next:p=>{e[s]&&e[s](vA(c,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Dn(n,Ks);c=Dn(p.firestore,ts),d=p._query;const g=new Ty(c);l={next:y=>{e[s]&&e[s](new Va(c,g,p,y))},error:e[s+1],complete:e[s+2]},pA(n._query)}return(function(g,y,T,b){const D=new oy(b),U=new sy(y,D,T);return g.asyncQueue.enqueueAndForget((async()=>ty(await Jf(g),U))),()=>{D.Nu(),g.asyncQueue.enqueueAndForget((async()=>ny(await Jf(g),U)))}})(Vc(c),d,a,l)}function jc(n,e){return(function(s,a){const l=new js;return s.asyncQueue.enqueueAndForget((async()=>PM(await QM(s),a,l))),l.promise})(Vc(n),e)}function vA(n,e,t){const s=t.docs.get(e._key),a=new Ty(n);return new Pa(n,a,e._key,s,new Wu(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Uc(e)}set(e,t,s){this._verifyNotCommitted();const a=gg(e,this._firestore),l=vy(a.converter,t,s),c=ly(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,On.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=gg(e,this._firestore);let c;return c=typeof(t=gt(t))=="string"||t instanceof Lc?cA(this._dataReader,"WriteBatch.update",l._key,t,s,a):uA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,On.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=gg(e,this._firestore);return this._mutations=this._mutations.concat(new Od(t._key,On.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ue($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gg(n,e){if((n=gt(n)).firestore!==e)throw new ue($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function yl(){return new uy("serverTimestamp")}function sl(...n){return new cy("arrayUnion",n)}function Wo(...n){return new hy("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(n){return Vc(n=Dn(n,ts)),new ok(n,(e=>jc(n,e)))}(function(e,t=!0){(function(a){Rl=a})(Ka),ja(new Vr("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ts(new nD(s.getProvider("auth-internal")),new rD(c,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ue($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pc(g.options.projectId,y)})(c,a),c);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Qi(sb,rb,e),Qi(sb,rb,"esm2020")})();var iw={};const sw="@firebase/database",rw="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EA="";function lk(n){EA=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),un(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:cc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ns(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uk(e)}}catch{}return new ck},Ma=TA("localStorage"),hk=TA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new yd("@firebase/database"),fk=(function(){let n=1;return function(){return n++}})(),bA=function(n){const e=BI(n),t=new LI;t.update(e);const s=t.digest();return y_.encodeByteArray(s)},zc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=zc.apply(null,s):typeof s=="object"?e+=un(s):e+=s,e+=" "}return e};let sc=null,aw=!0;const dk=function(n,e){oe(!0,"Can't turn on custom loggers persistently."),rl.logLevel=Be.VERBOSE,sc=rl.log.bind(rl)},gn=function(...n){if(aw===!0&&(aw=!1,sc===null&&hk.get("logging_enabled")===!0&&dk()),sc){const e=zc.apply(null,n);sc(e)}},Bc=function(n){return function(...e){gn(n,...e)}},e_=function(...n){const e="FIREBASE INTERNAL ERROR: "+zc(...n);rl.error(e)},Gs=function(...n){const e=`FIREBASE FATAL ERROR: ${zc(...n)}`;throw rl.error(e),new Error(e)},qn=function(...n){const e="FIREBASE WARNING: "+zc(...n);rl.warn(e)},mk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},pk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vl="[MIN_NAME]",Ha="[MAX_NAME]",Za=function(n,e){if(n===e)return 0;if(n===vl||e===Ha)return-1;if(e===vl||n===Ha)return 1;{const t=ow(n),s=ow(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},gk=function(n,e){return n===e?0:n<e?-1:1},Hu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+un(e))},wy=function(n){if(typeof n!="object"||n===null)return un(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=un(e[s]),t+=":",t+=wy(n[e[s]]);return t+="}",t},wA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Cn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const SA=function(n){oe(!qd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let b=parseInt(y.substr(p,8),2).toString(16);b.length===1&&(b="0"+b),T=T+b}return T.toLowerCase()},_k=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ek=new RegExp("^-?(0*)\\d{1,10}$"),Tk=-2147483648,bk=2147483647,ow=function(n){if(Ek.test(n)){const e=Number(n);if(e>=Tk&&e<=bk)return e}return null},Ml=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw qn("Exception was thrown by user callback.",t),e},Math.floor(0))}},wk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Sk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){qn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(gn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qn(e)}}class Df{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Df.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="5",AA="v",CA="s",RA="r",IA="f",xA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,NA="ls",DA="p",t_="ac",OA="websocket",MA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ck(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function PA(n,e,t){oe(typeof e=="string","typeof type must == string"),oe(typeof t=="object","typeof params must == object");let s;if(e===OA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===MA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ck(n)&&(t.ns=n.namespace);const a=[];return Cn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.counters_={}}incrementCounter(e,t=1){ns(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return gI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={},vg={};function Ay(n){const e=n.toString();return yg[e]||(yg[e]=new Rk),yg[e]}function Ik(n,e){const t=n.toString();return vg[t]||(vg[t]=e()),vg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ml(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="start",Nk="close",Dk="pLPCommand",Ok="pRTLPCB",VA="id",LA="pw",UA="ser",Mk="cb",kk="seg",Pk="ts",Vk="d",Lk="dframe",jA=1870,zA=30,Uk=jA-zA,jk=25e3,zk=3e4;class Zo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bc(e),this.stats_=Ay(t),this.urlFn=p=>(this.appCheckToken&&(p[t_]=this.appCheckToken),PA(t,MA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zk)),pk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cy((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===lw)this.id=d,this.password=p;else if(c===Nk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[lw]="t",s[UA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Mk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[AA]=Sy,this.transportSessionId&&(s[CA]=this.transportSessionId),this.lastSessionId&&(s[NA]=this.lastSessionId),this.applicationId&&(s[DA]=this.applicationId),this.appCheckToken&&(s[t_]=this.appCheckToken),typeof location<"u"&&location.hostname&&xA.test(location.hostname)&&(s[RA]=IA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zo.forceAllow_=!0}static forceDisallow(){Zo.forceDisallow_=!0}static isAvailable(){return Zo.forceAllow_?!0:!Zo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_k()&&!yk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ww(t),a=wA(s,Uk);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Lk]="t",s[VA]=e,s[LA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=un(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Cy{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fk(),window[Dk+this.uniqueCallbackIdentifier]=e,window[Ok+this.uniqueCallbackIdentifier]=t,this.myIFrame=Cy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){gn("frame writing exception"),d.stack&&gn(d.stack),gn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[VA]=this.myID,e[LA]=this.myPW,e[UA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zA+s.length<=jA;){const c=this.pendingSegs.shift();s=s+"&"+kk+a+"="+c.seg+"&"+Pk+a+"="+c.ts+"&"+Vk+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(jk)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{gn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=16384,qk=45e3;let nd=null;typeof MozWebSocket<"u"?nd=MozWebSocket:typeof WebSocket<"u"&&(nd=WebSocket);class Ti{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bc(this.connId),this.stats_=Ay(t),this.connURL=Ti.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[AA]=Sy,typeof location<"u"&&location.hostname&&xA.test(location.hostname)&&(c[RA]=IA),t&&(c[CA]=t),s&&(c[NA]=s),a&&(c[t_]=a),l&&(c[DA]=l),PA(e,OA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ma.set("previous_websocket_failure",!0);try{let s;II(),this.mySock=new nd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&nd!==null&&!Ti.forceDisallow_}static previouslyFailed(){return Ma.isInMemoryStorage||Ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=cc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=wA(t,Bk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ti.responsesRequiredToBeHealthy=2;Ti.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{static get ALL_TRANSPORTS(){return[Zo,Ti]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ti&&Ti.isAvailable();let s=t&&!Ti.previouslyFailed();if(e.webSocketOnly&&(t||qn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ti];else{const a=this.transports_=[];for(const l of vc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);vc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=6e4,Hk=5e3,Gk=10*1024,Qk=100*1024,Eg="t",uw="d",Yk="s",cw="r",Kk="e",hw="o",fw="a",dw="n",mw="p",$k="h";class Xk{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bc("c:"+this.id+":"),this.transportManager_=new vc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=rc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Eg in e){const t=e[Eg];t===fw?this.upgradeIfSecondaryHealthy_():t===cw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===hw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Hu("t",e),s=Hu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Hu("t",e),s=Hu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Hu(Eg,e);if(uw in e){const s=e[uw];if(t===$k){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===dw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Yk?this.onConnectionShutdown_(s):t===cw?this.onReset_(s):t===Kk?e_("Server Error: "+s):t===hw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):e_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Sy!==s&&qn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),rc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Fk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){oe(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends qA{static getInstance(){return new id}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!T_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return oe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=32,gw=768;class st{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Je(){return new st("")}function Pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fr(n){return n.pieces_.length-n.pieceNum_}function ft(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new st(n.pieces_,e)}function Ry(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Wk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ec(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function FA(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new st(e,0)}function Pt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof st)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new st(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function zn(n,e){const t=Pe(n),s=Pe(e);if(t===null)return e;if(t===s)return zn(ft(n),ft(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Zk(n,e){const t=Ec(n,0),s=Ec(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Za(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Iy(n,e){if(Fr(n)!==Fr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function di(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Fr(n)>Fr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Jk{constructor(e,t){this.errorPrefix_=t,this.parts_=Ec(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_d(this.parts_[s]);HA(this)}}function e4(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=_d(e),HA(n)}function t4(n){const e=n.parts_.pop();n.byteLength_-=_d(e),n.parts_.length>0&&(n.byteLength_-=1)}function HA(n){if(n.byteLength_>gw)throw new Error(n.errorPrefix_+"has a key path longer than "+gw+" bytes ("+n.byteLength_+").");if(n.parts_.length>pw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pw+") or object contains a cycle "+Na(n))}function Na(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy extends qA{static getInstance(){return new xy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return oe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=1e3,n4=300*1e3,_w=30*1e3,i4=1.3,s4=3e4,r4="server_kill",yw=3;class zs extends BA{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=zs.nextPersistentConnectionId_++,this.log_=Bc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gu,this.maxReconnectDelay_=n4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&id.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(un(l)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ks,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;zs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ns(e,"w")){const s=ll(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();qn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||VI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_w)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=PI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+un(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):e_("Unrecognized action received from server: "+un(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>s4&&(this.reconnectDelay_=Gu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*i4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+zs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){oe(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,b]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?gn("getToken() completed but was canceled"):(gn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=b&&b.token,d=new Xk(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,D=>{qn(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(r4)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&qn(T),p())}}}interrupt(e){gn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kf(this.interruptReasons_)&&(this.reconnectDelay_=Gu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>wy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new st(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){gn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=yw&&(this.reconnectDelay_=_w,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){gn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=yw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+EA.replace(/\./g,"-")]=1,T_()?e["framework.cordova"]=1:sS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=id.getInstance().currentlyOnline();return kf(this.interruptReasons_)&&e}}zs.nextPersistentConnectionId_=0;zs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ue(vl,e),a=new Ue(vl,t);return this.compare(s,a)!==0}minPost(){return Ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf;class GA extends Fd{static get __EMPTY_NODE(){return vf}static set __EMPTY_NODE(e){vf=e}compare(e,t){return Za(e.name,t.name)}isDefinedOn(e){throw Sl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ue.MIN}maxPost(){return new Ue(Ha,vf)}makePost(e,t){return oe(typeof e=="string","KeyIndex indexValue must always be a string."),new Ue(e,vf)}toString(){return".key"}}const al=new GA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ln{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ln.RED,this.left=a??Bn.EMPTY_NODE,this.right=l??Bn.EMPTY_NODE}copy(e,t,s,a,l){return new ln(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Bn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ln.RED=!0;ln.BLACK=!1;class a4{copy(e,t,s,a,l){return this}insert(e,t,s){return new ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bn{constructor(e,t=Bn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Bn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ln.BLACK,null,null))}remove(e){return new Bn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ln.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ef(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ef(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ef(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ef(this.root_,null,this.comparator_,!0,e)}}Bn.EMPTY_NODE=new a4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(n,e){return Za(n.name,e.name)}function Ny(n,e){return Za(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n_;function l4(n){n_=n}const QA=function(n){return typeof n=="number"?"number:"+SA(n):"string:"+n},YA=function(n){if(n.isLeafNode()){const e=n.val();oe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ns(e,".sv"),"Priority must be a string or number.")}else oe(n===n_||n.isEmpty(),"priority of unexpected type.");oe(n===n_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vw;class an{static set __childrenNodeConstructor(e){vw=e}static get __childrenNodeConstructor(){return vw}constructor(e,t=an.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,oe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),YA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new an(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:Pe(e)===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:an.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Pe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(oe(s!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,an.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+QA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=SA(this.value_):e+=this.value_,this.lazyHash_=bA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===an.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof an.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=an.VALUE_TYPE_ORDER.indexOf(t),l=an.VALUE_TYPE_ORDER.indexOf(s);return oe(a>=0,"Unknown leaf type: "+t),oe(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}an.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KA,$A;function u4(n){KA=n}function c4(n){$A=n}class h4 extends Fd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Za(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ue.MIN}maxPost(){return new Ue(Ha,new an("[PRIORITY-POST]",$A))}makePost(e,t){const s=KA(e);return new Ue(t,new an("[PRIORITY-POST]",s))}toString(){return".priority"}}const At=new h4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=Math.log(2);class d4{constructor(e){const t=l=>parseInt(Math.log(l)/f4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sd=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,b;if(y===0)return null;if(y===1)return T=n[p],b=t?t(T):T,new ln(b,T.node,ln.BLACK,null,null);{const D=parseInt(y/2,10)+p,U=a(p,D),q=a(D+1,g);return T=n[D],b=t?t(T):T,new ln(b,T.node,ln.BLACK,U,q)}},l=function(p){let g=null,y=null,T=n.length;const b=function(U,q){const G=T-U,se=T;T-=U;const ie=a(G+1,se),re=n[G],pe=t?t(re):re;D(new ln(pe,re.node,q,null,ie))},D=function(U){g?(g.left=U,g=U):(y=U,g=U)};for(let U=0;U<p.count;++U){const q=p.nextBitIsOne(),G=Math.pow(2,p.count-(U+1));q?b(G,ln.BLACK):(b(G,ln.BLACK),b(G,ln.RED))}return y},c=new d4(n.length),d=l(c);return new Bn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tg;const Qo={};class Us{static get Default(){return oe(Qo&&At,"ChildrenNode.ts has not been loaded"),Tg=Tg||new Us({".priority":Qo},{".priority":At}),Tg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ll(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bn?t:null}hasIndex(e){return ns(this.indexSet_,e.toString())}addIndex(e,t){oe(e!==al,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ue.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=sd(s,e.getCompare()):d=Qo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=d,new Us(y,g)}addToIndexes(e,t){const s=Pf(this.indexes_,(a,l)=>{const c=ll(this.indexSet_,l);if(oe(c,"Missing index implementation for "+l),a===Qo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(Ue.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),sd(d,c.getCompare())}else return Qo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Ue(e.name,d))),p.insert(e,e.node)}});return new Us(s,this.indexSet_)}removeFromIndexes(e,t){const s=Pf(this.indexes_,a=>{if(a===Qo)return a;{const l=t.get(e.name);return l?a.remove(new Ue(e.name,l)):a}});return new Us(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;class Se{static get EMPTY_NODE(){return Qu||(Qu=new Se(new Bn(Ny),null,Us.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&YA(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qu}updatePriority(e){return this.children_.isEmpty()?this:new Se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Qu:t}}getChild(e){const t=Pe(e);return t===null?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(oe(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ue(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Qu:this.priorityNode_;return new Se(a,c,l)}}updateChild(e,t){const s=Pe(e);if(s===null)return t;{oe(Pe(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ft(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(At,(c,d)=>{t[c]=d.val(e),s++,l&&Se.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+QA(this.getPriority().val())+":"),this.forEachChild(At,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":bA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ue(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ue(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ue.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ue.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qc?-1:0}withIndex(e){if(e===al||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Se(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===al||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(At),a=t.getIterator(At);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===al?null:this.indexMap_.get(e.toString())}}Se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class m4 extends Se{constructor(){super(new Bn(Ny),Se.EMPTY_NODE,Us.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Se.EMPTY_NODE}isEmpty(){return!1}}const qc=new m4;Object.defineProperties(Ue,{MIN:{value:new Ue(vl,Se.EMPTY_NODE)},MAX:{value:new Ue(Ha,qc)}});GA.__EMPTY_NODE=Se.EMPTY_NODE;an.__childrenNodeConstructor=Se;l4(qc);c4(qc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4=!0;function qt(n,e=null){if(n===null)return Se.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),oe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new an(t,qt(e))}if(!(n instanceof Array)&&p4){const t=[];let s=!1;if(Cn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=qt(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new Ue(c,p)))}}),t.length===0)return Se.EMPTY_NODE;const l=sd(t,o4,c=>c.name,Ny);if(s){const c=sd(t,At.getCompare());return new Se(l,qt(e),new Us({".priority":c},{".priority":At}))}else return new Se(l,qt(e),Us.Default)}else{let t=Se.EMPTY_NODE;return Cn(n,(s,a)=>{if(ns(n,s)&&s.substring(0,1)!=="."){const l=qt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(qt(e))}}u4(qt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4 extends Fd{constructor(e){super(),this.indexPath_=e,oe(!Le(e)&&Pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Za(e.name,t.name):l}makePost(e,t){const s=qt(e),a=Se.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ue(t,a)}maxPost(){const e=Se.EMPTY_NODE.updateChild(this.indexPath_,qc);return new Ue(Ha,e)}toString(){return Ec(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4 extends Fd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Za(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ue.MIN}maxPost(){return Ue.MAX}makePost(e,t){const s=qt(e);return new Ue(t,s)}toString(){return".value"}}const y4=new _4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(n){return{type:"value",snapshotNode:n}}function El(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Tc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function bc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function v4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){oe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(Tc(t,d)):oe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(El(t,s)):c.trackChildChange(bc(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(At,(a,l)=>{t.hasChild(a)||s.trackChildChange(Tc(a,l))}),t.isLeafNode()||t.forEachChild(At,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(bc(a,l,c))}else s.trackChildChange(El(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Se.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.indexedFilter_=new Dy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wc.getStartPost_(e),this.endPost_=wc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new Ue(t,s))||(s=Se.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Se.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Se.EMPTY_NODE);const l=this;return t.forEachChild(At,(c,d)=>{l.matches(new Ue(c,d))||(a=a.updateImmediateChild(c,Se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new wc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new Ue(t,s))||(s=Se.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Se.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Se.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(b,D)=>T(D,b)}else c=this.index_.getCompare();const d=e;oe(d.numChildren()===this.limit_,"");const p=new Ue(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const T=d.getImmediateChild(t);let b=a.getChildAfterChild(this.index_,g,this.reverse_);for(;b!=null&&(b.name===t||d.hasChild(b.name));)b=a.getChildAfterChild(this.index_,b,this.reverse_);const D=b==null?1:c(b,p);if(y&&!s.isEmpty()&&D>=0)return l?.trackChildChange(bc(t,s,T)),d.updateImmediateChild(t,s);{l?.trackChildChange(Tc(t,T));const q=d.updateImmediateChild(t,Se.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(l?.trackChildChange(El(b.name,b.node)),q.updateImmediateChild(b.name,b.node)):q}}else return s.isEmpty()?e:y&&c(g,p)>=0?(l!=null&&(l.trackChildChange(Tc(g.name,g.node)),l.trackChildChange(El(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,Se.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vl}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ha}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new Oy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function T4(n){return n.loadsAllData()?new Dy(n.getIndex()):n.hasLimit()?new E4(n):new wc(n)}function Ew(n){const e={};if(n.isDefault())return e;let t;if(n.index_===At?t="$priority":n.index_===y4?t="$value":n.index_===al?t="$key":(oe(n.index_ instanceof g4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=un(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=un(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+un(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=un(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+un(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Tw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==At&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends BA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Bc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=rd.getListenId_(e,s),d={};this.listens_[c]=d;const p=Ew(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),ll(this.listens_,c)===d){let b;g?g===401?b="permission_denied":b="rest_error:"+g:b="ok",a(b,null)}})}unlisten(e,t){const s=rd.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ew(e._queryParams),s=e._path.toString(),a=new ks;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Al(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=cc(d.responseText)}catch{qn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&qn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this.rootNode_=Se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){return{value:null,children:new Map}}function kl(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Pe(e);n.children.has(s)||n.children.set(s,ad());const a=n.children.get(s);e=ft(e),kl(a,e,t)}}function i_(n,e){if(Le(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(At,(s,a)=>{kl(n,new st(s),a)}),i_(n,e)}}else if(n.children.size>0){const t=Pe(e);return e=ft(e),n.children.has(t)&&i_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function s_(n,e,t){n.value!==null?t(e,n.value):w4(n,(s,a)=>{const l=new st(e.toString()+"/"+s);s_(a,l,t)})}function w4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const bw=10*1e3,A4=30*1e3,C4=300*1e3;class R4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new S4(e);const s=bw+(A4-bw)*Math.random();rc(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Cn(e,(a,l)=>{l>0&&ns(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),rc(this.reportStats_.bind(this),Math.floor(Math.random()*2*C4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wi||(wi={}));function WA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function My(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ky(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=wi.ACK_USER_WRITE,this.source=WA()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new st(e));return new od(Je(),t,this.revert)}}else return oe(Pe(this.path)===e,"operationForChild called for unrelated child."),new od(ft(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.source=e,this.path=t,this.type=wi.LISTEN_COMPLETE}operationForChild(e){return Le(this.path)?new Sc(this.source,Je()):new Sc(this.source,ft(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=wi.OVERWRITE}operationForChild(e){return Le(this.path)?new Ga(this.source,Je(),this.snap.getImmediateChild(e)):new Ga(this.source,ft(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=wi.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new Ga(this.source,Je(),t.value):new Ac(this.source,Je(),t)}else return oe(Pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ac(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class I4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function x4(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(v4(c.childName,c.snapshotNode))}),Yu(n,a,"child_removed",e,s,t),Yu(n,a,"child_added",e,s,t),Yu(n,a,"child_moved",l,s,t),Yu(n,a,"child_changed",e,s,t),Yu(n,a,"value",e,s,t),a}function Yu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>D4(n,d,p)),c.forEach(d=>{const p=N4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function N4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function D4(n,e,t){if(e.childName==null||t.childName==null)throw Sl("Should only compare child_ events.");const s=new Ue(e.childName,e.snapshotNode),a=new Ue(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n,e){return{eventCache:n,serverCache:e}}function ac(n,e,t,s){return Hd(new Qa(e,t,s),n.serverCache)}function ZA(n,e,t,s){return Hd(n.eventCache,new Qa(e,t,s))}function r_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ya(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bg;const O4=()=>(bg||(bg=new Bn(gk)),bg);class vt{static fromObject(e){let t=new vt(null);return Cn(e,(s,a)=>{t=t.set(new st(s),a)}),t}constructor(e,t=O4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Je(),value:this.value};if(Le(e))return null;{const s=Pe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ft(e),t);return l!=null?{path:Pt(new st(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=Pe(e),s=this.children.get(t);return s!==null?s.subtree(ft(e)):new vt(null)}}set(e,t){if(Le(e))return new vt(t,this.children);{const s=Pe(e),l=(this.children.get(s)||new vt(null)).set(ft(e),t),c=this.children.insert(s,l);return new vt(this.value,c)}}remove(e){if(Le(e))return this.children.isEmpty()?new vt(null):new vt(null,this.children);{const t=Pe(e),s=this.children.get(t);if(s){const a=s.remove(ft(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new vt(null):new vt(this.value,l)}else return this}}get(e){if(Le(e))return this.value;{const t=Pe(e),s=this.children.get(t);return s?s.get(ft(e)):null}}setTree(e,t){if(Le(e))return t;{const s=Pe(e),l=(this.children.get(s)||new vt(null)).setTree(ft(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new vt(this.value,c)}}fold(e){return this.fold_(Je(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Pt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Je(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Le(e))return null;{const l=Pe(e),c=this.children.get(l);return c?c.findOnPath_(ft(e),Pt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Je(),t)}foreachOnPath_(e,t,s){if(Le(e))return this;{this.value&&s(t,this.value);const a=Pe(e),l=this.children.get(a);return l?l.foreachOnPath_(ft(e),Pt(t,a),s):new vt(null)}}foreach(e){this.foreach_(Je(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Pt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.writeTree_=e}static empty(){return new Ai(new vt(null))}}function oc(n,e,t){if(Le(e))return new Ai(new vt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=zn(a,e);return l=l.updateChild(c,t),new Ai(n.writeTree_.set(a,l))}else{const a=new vt(t),l=n.writeTree_.setTree(e,a);return new Ai(l)}}}function ww(n,e,t){let s=n;return Cn(t,(a,l)=>{s=oc(s,Pt(e,a),l)}),s}function Sw(n,e){if(Le(e))return Ai.empty();{const t=n.writeTree_.setTree(e,new vt(null));return new Ai(t)}}function a_(n,e){return Ja(n,e)!=null}function Ja(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zn(t.path,e)):null}function Aw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(At,(s,a)=>{e.push(new Ue(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ue(s,a.value))}),e}function Pr(n,e){if(Le(e))return n;{const t=Ja(n,e);return t!=null?new Ai(new vt(t)):new Ai(n.writeTree_.subtree(e))}}function o_(n){return n.writeTree_.isEmpty()}function Tl(n,e){return JA(Je(),n.writeTree_,e)}function JA(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(oe(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=JA(Pt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Pt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n,e){return iC(e,n)}function M4(n,e,t,s,a){oe(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=oc(n.visibleWrites,e,t)),n.lastWriteId=s}function k4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function P4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);oe(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&V4(d,s.path)?a=!1:di(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return L4(n),!0;if(s.snap)n.visibleWrites=Sw(n.visibleWrites,s.path);else{const d=s.children;Cn(d,p=>{n.visibleWrites=Sw(n.visibleWrites,Pt(s.path,p))})}return!0}else return!1}function V4(n,e){if(n.snap)return di(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&di(Pt(n.path,t),e))return!0;return!1}function L4(n){n.visibleWrites=eC(n.allWrites,U4,Je()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function U4(n){return n.visible}function eC(n,e,t){let s=Ai.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)di(t,c)?(d=zn(t,c),s=oc(s,d,l.snap)):di(c,t)&&(d=zn(c,t),s=oc(s,Je(),l.snap.getChild(d)));else if(l.children){if(di(t,c))d=zn(t,c),s=ww(s,d,l.children);else if(di(c,t))if(d=zn(c,t),Le(d))s=ww(s,Je(),l.children);else{const p=ll(l.children,Pe(d));if(p){const g=p.getChild(ft(d));s=oc(s,Je(),g)}}}else throw Sl("WriteRecord should have .snap or .children")}}return s}function tC(n,e,t,s,a){if(!s&&!a){const l=Ja(n.visibleWrites,e);if(l!=null)return l;{const c=Pr(n.visibleWrites,e);if(o_(c))return t;if(t==null&&!a_(c,Je()))return null;{const d=t||Se.EMPTY_NODE;return Tl(c,d)}}}else{const l=Pr(n.visibleWrites,e);if(!a&&o_(l))return t;if(!a&&t==null&&!a_(l,Je()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(di(g.path,e)||di(e,g.path))},d=eC(n.allWrites,c,e),p=t||Se.EMPTY_NODE;return Tl(d,p)}}}function j4(n,e,t){let s=Se.EMPTY_NODE;const a=Ja(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(At,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Pr(n.visibleWrites,e);return t.forEachChild(At,(c,d)=>{const p=Tl(Pr(l,new st(c)),d);s=s.updateImmediateChild(c,p)}),Aw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Pr(n.visibleWrites,e);return Aw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function z4(n,e,t,s,a){oe(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Pt(e,t);if(a_(n.visibleWrites,l))return null;{const c=Pr(n.visibleWrites,l);return o_(c)?a.getChild(t):Tl(c,a.getChild(t))}}function B4(n,e,t,s){const a=Pt(e,t),l=Ja(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Pr(n.visibleWrites,a);return Tl(c,s.getNode().getImmediateChild(t))}else return null}function q4(n,e){return Ja(n.visibleWrites,e)}function F4(n,e,t,s,a,l,c){let d;const p=Pr(n.visibleWrites,e),g=Ja(p,Je());if(g!=null)d=g;else if(t!=null)d=Tl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),b=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let D=b.getNext();for(;D&&y.length<a;)T(D,s)!==0&&y.push(D),D=b.getNext();return y}else return[]}function H4(){return{visibleWrites:Ai.empty(),allWrites:[],lastWriteId:-1}}function ld(n,e,t,s){return tC(n.writeTree,n.treePath,e,t,s)}function Vy(n,e){return j4(n.writeTree,n.treePath,e)}function Cw(n,e,t,s){return z4(n.writeTree,n.treePath,e,t,s)}function ud(n,e){return q4(n.writeTree,Pt(n.treePath,e))}function G4(n,e,t,s,a,l){return F4(n.writeTree,n.treePath,e,t,s,a,l)}function Ly(n,e,t){return B4(n.writeTree,n.treePath,e,t)}function nC(n,e){return iC(Pt(n.treePath,e),n.writeTree)}function iC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;oe(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),oe(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,bc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,Tc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,El(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,bc(s,e.snapshotNode,a.oldSnap));else throw Sl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const sC=new Y4;class Uy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ly(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ya(this.viewCache_),l=G4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(n){return{filter:n}}function $4(n,e){oe(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),oe(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function X4(n,e,t,s,a){const l=new Q4;let c,d;if(t.type===wi.OVERWRITE){const g=t;g.source.fromUser?c=l_(n,e,g.path,g.snap,s,a,l):(oe(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Le(g.path),c=cd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===wi.MERGE){const g=t;g.source.fromUser?c=Z4(n,e,g.path,g.children,s,a,l):(oe(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=u_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===wi.ACK_USER_WRITE){const g=t;g.revert?c=tP(n,e,g.path,s,a,l):c=J4(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===wi.LISTEN_COMPLETE)c=eP(n,e,t.path,s,l);else throw Sl("Unknown operation type: "+t.type);const p=l.getChanges();return W4(e,c,p),{viewCache:c,changes:p}}function W4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=r_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(XA(r_(e)))}}function rC(n,e,t,s,a,l){const c=e.eventCache;if(ud(s,t)!=null)return e;{let d,p;if(Le(t))if(oe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ya(e),y=g instanceof Se?g:Se.EMPTY_NODE,T=Vy(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ld(s,Ya(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Pe(t);if(g===".priority"){oe(Fr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=Cw(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=ft(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const b=Cw(s,t,c.getNode(),p);b!=null?T=c.getNode().getImmediateChild(g).updateChild(y,b):T=c.getNode().getImmediateChild(g)}else T=Ly(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return ac(e,d,c.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function cd(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Le(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const D=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),D,null)}else{const D=Pe(t);if(!p.isCompleteForPath(t)&&Fr(t)>1)return e;const U=ft(t),G=p.getNode().getImmediateChild(D).updateChild(U,s);D===".priority"?g=y.updatePriority(p.getNode(),G):g=y.updateChild(p.getNode(),D,G,U,sC,null)}const T=ZA(e,g,p.isFullyInitialized()||Le(t),y.filtersNodes()),b=new Uy(a,T,l);return rC(n,T,t,a,b,d)}function l_(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new Uy(a,e,l);if(Le(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=ac(e,g,!0,n.filter.filtersNodes());else{const T=Pe(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=ac(e,g,d.isFullyInitialized(),d.isFiltered());else{const b=ft(t),D=d.getNode().getImmediateChild(T);let U;if(Le(b))U=s;else{const q=y.getCompleteChild(T);q!=null?Ry(b)===".priority"&&q.getChild(FA(b)).isEmpty()?U=q:U=q.updateChild(b,s):U=Se.EMPTY_NODE}if(D.equals(U))p=e;else{const q=n.filter.updateChild(d.getNode(),T,U,b,y,c);p=ac(e,q,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Rw(n,e){return n.eventCache.isCompleteForChild(e)}function Z4(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Pt(t,p);Rw(e,Pe(y))&&(d=l_(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Pt(t,p);Rw(e,Pe(y))||(d=l_(n,d,y,g,a,l,c))}),d}function Iw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function u_(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Le(t)?g=s:g=new vt(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,b)=>{if(y.hasChild(T)){const D=e.serverCache.getNode().getImmediateChild(T),U=Iw(n,D,b);p=cd(n,p,new st(T),U,a,l,c,d)}}),g.children.inorderTraversal((T,b)=>{const D=!e.serverCache.isCompleteForChild(T)&&b.value===null;if(!y.hasChild(T)&&!D){const U=e.serverCache.getNode().getImmediateChild(T),q=Iw(n,U,b);p=cd(n,p,new st(T),q,a,l,c,d)}}),p}function J4(n,e,t,s,a,l,c){if(ud(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Le(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return cd(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Le(t)){let g=new vt(null);return p.getNode().forEachChild(al,(y,T)=>{g=g.set(new st(y),T)}),u_(n,e,t,g,a,l,d,c)}else return e}else{let g=new vt(null);return s.foreach((y,T)=>{const b=Pt(t,y);p.isCompleteForPath(b)&&(g=g.set(y,p.getNode().getChild(b)))}),u_(n,e,t,g,a,l,d,c)}}function eP(n,e,t,s,a){const l=e.serverCache,c=ZA(e,l.getNode(),l.isFullyInitialized()||Le(t),l.isFiltered());return rC(n,c,t,s,sC,a)}function tP(n,e,t,s,a,l){let c;if(ud(s,t)!=null)return e;{const d=new Uy(s,e,a),p=e.eventCache.getNode();let g;if(Le(t)||Pe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ld(s,Ya(e));else{const T=e.serverCache.getNode();oe(T instanceof Se,"serverChildren would be complete if leaf node"),y=Vy(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=Pe(t);let T=Ly(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,ft(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,Se.EMPTY_NODE,ft(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ld(s,Ya(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||ud(s,Je())!=null,ac(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new Dy(s.getIndex()),l=T4(s);this.processor_=K4(l);const c=t.serverCache,d=t.eventCache,p=a.updateFullNode(Se.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Se.EMPTY_NODE,d.getNode(),null),y=new Qa(p,c.isFullyInitialized(),a.filtersNodes()),T=new Qa(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Hd(T,y),this.eventGenerator_=new I4(this.query_)}get query(){return this.query_}}function iP(n){return n.viewCache_.serverCache.getNode()}function sP(n,e){const t=Ya(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(Pe(e)).isEmpty())?t.getChild(e):null}function xw(n){return n.eventRegistrations_.length===0}function rP(n,e){n.eventRegistrations_.push(e)}function Nw(n,e,t){const s=[];if(t){oe(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function Dw(n,e,t,s){e.type===wi.MERGE&&e.source.queryId!==null&&(oe(Ya(n.viewCache_),"We should always have a full cache before handling merges"),oe(r_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=X4(n.processor_,a,e,t,s);return $4(n.processor_,l.viewCache),oe(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,aC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function aP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(At,(l,c)=>{s.push(El(l,c))}),t.isFullyInitialized()&&s.push(XA(t.getNode())),aC(n,s,t.getNode(),e)}function aC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return x4(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd;class oP{constructor(){this.views=new Map}}function lP(n){oe(!hd,"__referenceConstructor has already been defined"),hd=n}function uP(){return oe(hd,"Reference.ts has not been loaded"),hd}function cP(n){return n.views.size===0}function jy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return oe(l!=null,"SyncTree gave us an op for an invalid query."),Dw(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(Dw(c,e,t,s));return l}}function hP(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=ld(t,a?s:null),p=!1;d?p=!0:s instanceof Se?(d=Vy(t,s),p=!1):(d=Se.EMPTY_NODE,p=!1);const g=Hd(new Qa(d,p,!1),new Qa(s,a,!1));return new nP(e,g)}return c}function fP(n,e,t,s,a,l){const c=hP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),rP(c,t),aP(c,t)}function dP(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const d=Hr(n);if(a==="default")for(const[p,g]of n.views.entries())c=c.concat(Nw(g,t,s)),xw(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(c=c.concat(Nw(p,t,s)),xw(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Hr(n)&&l.push(new(uP())(e._repo,e._path)),{removed:l,events:c}}function oC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ol(n,e){let t=null;for(const s of n.views.values())t=t||sP(s,e);return t}function lC(n,e){if(e._queryParams.loadsAllData())return Gd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function uC(n,e){return lC(n,e)!=null}function Hr(n){return Gd(n)!=null}function Gd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;function mP(n){oe(!fd,"__referenceConstructor has already been defined"),fd=n}function pP(){return oe(fd,"Reference.ts has not been loaded"),fd}let gP=1;class Ow{constructor(e){this.listenProvider_=e,this.syncPointTree_=new vt(null),this.pendingWriteTree_=H4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cC(n,e,t,s,a){return M4(n.pendingWriteTree_,e,t,s,a),a?Fc(n,new Ga(WA(),e,t)):[]}function ka(n,e,t=!1){const s=k4(n.pendingWriteTree_,e);if(P4(n.pendingWriteTree_,e)){let l=new vt(null);return s.snap!=null?l=l.set(Je(),!0):Cn(s.children,c=>{l=l.set(new st(c),!0)}),Fc(n,new od(s.path,l,t))}else return[]}function Qd(n,e,t){return Fc(n,new Ga(My(),e,t))}function _P(n,e,t){const s=vt.fromObject(t);return Fc(n,new Ac(My(),e,s))}function yP(n,e){return Fc(n,new Sc(My(),e))}function vP(n,e,t){const s=By(n,t);if(s){const a=qy(s),l=a.path,c=a.queryId,d=zn(l,e),p=new Sc(ky(c),d);return Fy(n,l,p)}else return[]}function c_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||uC(c,e))){const p=dP(c,e,t,s);cP(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const y=g.findIndex(b=>b._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(b,D)=>Hr(D));if(y&&!T){const b=n.syncPointTree_.subtree(l);if(!b.isEmpty()){const D=bP(b);for(let U=0;U<D.length;++U){const q=D[U],G=q.query,se=dC(n,q);n.listenProvider_.startListening(lc(G),dd(n,G),se.hashFn,se.onComplete)}}}!T&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(lc(e),null):g.forEach(b=>{const D=n.queryToTagMap.get(Yd(b));n.listenProvider_.stopListening(lc(b),D)}))}wP(n,g)}return d}function EP(n,e,t,s){const a=By(n,s);if(a!=null){const l=qy(a),c=l.path,d=l.queryId,p=zn(c,e),g=new Ga(ky(d),p,t);return Fy(n,c,g)}else return[]}function TP(n,e,t,s){const a=By(n,s);if(a){const l=qy(a),c=l.path,d=l.queryId,p=zn(c,e),g=vt.fromObject(t),y=new Ac(ky(d),p,g);return Fy(n,c,y)}else return[]}function Mw(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(b,D)=>{const U=zn(b,a);l=l||ol(D,U),c=c||Hr(D)});let d=n.syncPointTree_.get(a);d?(c=c||Hr(d),l=l||ol(d,Je())):(d=new oP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=Se.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((D,U)=>{const q=ol(U,Je());q&&(l=l.updateImmediateChild(D,q))}));const g=uC(d,e);if(!g&&!e._queryParams.loadsAllData()){const b=Yd(e);oe(!n.queryToTagMap.has(b),"View does not exist, but we have a tag");const D=SP();n.queryToTagMap.set(b,D),n.tagToQueryMap.set(D,b)}const y=Py(n.pendingWriteTree_,a);let T=fP(d,e,t,y,l,p);if(!g&&!c&&!s){const b=lC(d,e);T=T.concat(AP(n,e,b))}return T}function zy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=zn(c,e),g=ol(d,p);if(g)return g});return tC(a,e,l,t,!0)}function Fc(n,e){return hC(e,n.syncPointTree_,null,Py(n.pendingWriteTree_,Je()))}function hC(n,e,t,s){if(Le(n.path))return fC(n,e,t,s);{const a=e.get(Je());t==null&&a!=null&&(t=ol(a,Je()));let l=[];const c=Pe(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=nC(s,c);l=l.concat(hC(d,p,g,y))}return a&&(l=l.concat(jy(a,n,s,t))),l}}function fC(n,e,t,s){const a=e.get(Je());t==null&&a!=null&&(t=ol(a,Je()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=nC(s,c),y=n.operationForChild(c);y&&(l=l.concat(fC(y,d,p,g)))}),a&&(l=l.concat(jy(a,n,s,t))),l}function dC(n,e){const t=e.query,s=dd(n,t);return{hashFn:()=>(iP(e)||Se.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?vP(n,t._path,s):yP(n,t._path);{const l=vk(a,t);return c_(n,t,null,l)}}}}function dd(n,e){const t=Yd(e);return n.queryToTagMap.get(t)}function Yd(n){return n._path.toString()+"$"+n._queryIdentifier}function By(n,e){return n.tagToQueryMap.get(e)}function qy(n){const e=n.indexOf("$");return oe(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new st(n.substr(0,e))}}function Fy(n,e,t){const s=n.syncPointTree_.get(e);oe(s,"Missing sync point for query tag that we're tracking");const a=Py(n.pendingWriteTree_,e);return jy(s,t,a,null)}function bP(n){return n.fold((e,t,s)=>{if(t&&Hr(t))return[Gd(t)];{let a=[];return t&&(a=oC(t)),Cn(s,(l,c)=>{a=a.concat(c)}),a}})}function lc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(pP())(n._repo,n._path):n}function wP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Yd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function SP(){return gP++}function AP(n,e,t){const s=e._path,a=dd(n,e),l=dC(n,t),c=n.listenProvider_.startListening(lc(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)oe(!Hr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,y,T)=>{if(!Le(g)&&y&&Hr(y))return[Gd(y).query];{let b=[];return y&&(b=b.concat(oC(y).map(D=>D.query))),Cn(T,(D,U)=>{b=b.concat(U)}),b}});for(let g=0;g<p.length;++g){const y=p[g];n.listenProvider_.stopListening(lc(y),dd(n,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hy(t)}node(){return this.node_}}class Gy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pt(this.path_,e);return new Gy(this.syncTree_,t)}node(){return zy(this.syncTree_,this.path_)}}const CP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},kw=function(n,e,t){if(!n||typeof n!="object")return n;if(oe(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return RP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return IP(n[".sv"],e);oe(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},RP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:oe(!1,"Unexpected server value: "+n)}},IP=function(n,e,t){n.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&oe(!1,"Unexpected increment value: "+s);const a=e.node();if(oe(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},xP=function(n,e,t,s){return Qy(e,new Gy(t,n),s)},mC=function(n,e,t){return Qy(n,new Hy(e),t)};function Qy(n,e,t){const s=n.getPriority().val(),a=kw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=kw(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new an(d,qt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new an(a))),c.forEachChild(At,(d,p)=>{const g=Qy(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ky(n,e){let t=e instanceof st?e:new st(e),s=n,a=Pe(t);for(;a!==null;){const l=ll(s.node.children,a)||{children:{},childCount:0};s=new Yy(a,s,l),t=ft(t),a=Pe(t)}return s}function Pl(n){return n.node.value}function pC(n,e){n.node.value=e,h_(n)}function gC(n){return n.node.childCount>0}function NP(n){return Pl(n)===void 0&&!gC(n)}function Kd(n,e){Cn(n.node.children,(t,s)=>{e(new Yy(t,n,s))})}function _C(n,e,t,s){t&&e(n),Kd(n,a=>{_C(a,e,!0)})}function DP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hc(n){return new st(n.parent===null?n.name:Hc(n.parent)+"/"+n.name)}function h_(n){n.parent!==null&&OP(n.parent,n.name,n)}function OP(n,e,t){const s=NP(t),a=ns(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,h_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,h_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=/[\[\].#$\/\u0000-\u001F\u007F]/,kP=/[\[\].#$\u0000-\u001F\u007F]/,wg=10*1024*1024,$y=function(n){return typeof n=="string"&&n.length!==0&&!MP.test(n)},yC=function(n){return typeof n=="string"&&n.length!==0&&!kP.test(n)},PP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yC(n)},vC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!qd(n)||n&&typeof n=="object"&&ns(n,".sv")},f_=function(n,e,t,s){$d(ul(n,"value"),e,t)},$d=function(n,e,t){const s=t instanceof st?new Jk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Na(s));if(typeof e=="function")throw new Error(n+"contains a function "+Na(s)+" with contents = "+e.toString());if(qd(e))throw new Error(n+"contains "+e.toString()+" "+Na(s));if(typeof e=="string"&&e.length>wg/3&&_d(e)>wg)throw new Error(n+"contains a string greater than "+wg+" utf8 bytes "+Na(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Cn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!$y(c)))throw new Error(n+" contains an invalid key ("+c+") "+Na(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);e4(s,c),$d(n,d,s),t4(s)}),a&&l)throw new Error(n+' contains ".value" child '+Na(s)+" in addition to actual children.")}},VP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=Ec(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!$y(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Zk);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&di(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},LP=function(n,e,t,s){const a=ul(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];Cn(e,(c,d)=>{const p=new st(c);if($d(a,d,Pt(t,p)),Ry(p)===".priority"&&!vC(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),VP(a,l)},UP=function(n,e,t){if(qd(e))throw new Error(ul(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!vC(e))throw new Error(ul(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},EC=function(n,e,t,s){if(!yC(t))throw new Error(ul(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),EC(n,e,t)},Jo=function(n,e){if(Pe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},zP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$y(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!PP(t))throw new Error(ul(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Iy(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function TC(n,e,t){Xy(n,t),bC(n,s=>Iy(s,e))}function Qs(n,e,t){Xy(n,t),bC(n,s=>di(s,e)||di(e,s))}function bC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(qP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();sc&&gn("event: "+t.toString()),Ml(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="repo_interrupt",HP=25;class GP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ad(),this.transactionQueueTree_=new Yy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QP(n,e,t){if(n.stats_=Ay(n.repoInfo_),n.forceRestClient_||wk())n.server_=new rd(n.repoInfo_,(s,a,l,c)=>{Pw(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Vw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{un(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new zs(n.repoInfo_,e,(s,a,l,c)=>{Pw(n,s,a,l,c)},s=>{Vw(n,s)},s=>{KP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ik(n.repoInfo_,()=>new R4(n.stats_,n.server_)),n.infoData_=new b4,n.infoSyncTree_=new Ow({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=Qd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Zy(n,"connected",!1),n.serverSyncTree_=new Ow({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Qs(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function YP(n){const t=n.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Wy(n){return CP({timestamp:YP(n)})}function Pw(n,e,t,s,a){n.dataUpdateCount++;const l=new st(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Pf(t,g=>qt(g));c=TP(n.serverSyncTree_,l,p,a)}else{const p=qt(t);c=EP(n.serverSyncTree_,l,p,a)}else if(s){const p=Pf(t,g=>qt(g));c=_P(n.serverSyncTree_,l,p)}else{const p=qt(t);c=Qd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=Xd(n,l)),Qs(n.eventQueue_,d,c)}function Vw(n,e){Zy(n,"connected",e),e===!1&&XP(n)}function KP(n,e){Cn(e,(t,s)=>{Zy(n,t,s)})}function Zy(n,e,t){const s=new st("/.info/"+e),a=qt(t);n.infoData_.updateSnapshot(s,a);const l=Qd(n.infoSyncTree_,s,a);Qs(n.eventQueue_,s,l)}function wC(n){return n.nextWriteId_++}function $P(n,e,t,s,a){Jy(n,"set",{path:e.toString(),value:t,priority:s});const l=Wy(n),c=qt(t,s),d=zy(n.serverSyncTree_,e),p=mC(c,d,l),g=wC(n),y=cC(n.serverSyncTree_,e,p,g,!0);Xy(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(b,D)=>{const U=b==="ok";U||qn("set at "+e+" failed: "+b);const q=ka(n.serverSyncTree_,g,!U);Qs(n.eventQueue_,e,q),bl(n,a,b,D)});const T=IC(n,e);Xd(n,T),Qs(n.eventQueue_,T,[])}function XP(n){Jy(n,"onDisconnectEvents");const e=Wy(n),t=ad();s_(n.onDisconnect_,Je(),(a,l)=>{const c=xP(a,l,n.serverSyncTree_,e);kl(t,a,c)});let s=[];s_(t,Je(),(a,l)=>{s=s.concat(Qd(n.serverSyncTree_,a,l));const c=IC(n,a);Xd(n,c)}),n.onDisconnect_=ad(),Qs(n.eventQueue_,Je(),s)}function WP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&i_(n.onDisconnect_,e),bl(n,t,s,a)})}function Lw(n,e,t,s){const a=qt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&kl(n.onDisconnect_,e,a),bl(n,s,l,c)})}function ZP(n,e,t,s,a){const l=qt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(c,d)=>{c==="ok"&&kl(n.onDisconnect_,e,l),bl(n,a,c,d)})}function JP(n,e,t,s){if(kf(t)){gn("onDisconnect().update() called with empty data.  Don't do anything."),bl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&Cn(t,(c,d)=>{const p=qt(d);kl(n.onDisconnect_,Pt(e,c),p)}),bl(n,s,a,l)})}function eV(n,e,t){let s;Pe(e._path)===".info"?s=Mw(n.infoSyncTree_,e,t):s=Mw(n.serverSyncTree_,e,t),TC(n.eventQueue_,e._path,s)}function tV(n,e,t){let s;Pe(e._path)===".info"?s=c_(n.infoSyncTree_,e,t):s=c_(n.serverSyncTree_,e,t),TC(n.eventQueue_,e._path,s)}function nV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(FP)}function Jy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),gn(t,...e)}function bl(n,e,t,s){e&&Ml(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function SC(n,e,t){return zy(n.serverSyncTree_,e,t)||Se.EMPTY_NODE}function ev(n,e=n.transactionQueueTree_){if(e||Wd(n,e),Pl(e)){const t=CC(n,e);oe(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&iV(n,Hc(e),t)}else gC(e)&&Kd(e,t=>{ev(n,t)})}function iV(n,e,t){const s=t.map(g=>g.currentWriteId),a=SC(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];oe(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=zn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{Jy(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let b=0;b<t.length;b++)t[b].status=2,y=y.concat(ka(n.serverSyncTree_,t[b].currentWriteId)),t[b].onComplete&&T.push(()=>t[b].onComplete(null,!0,t[b].currentOutputSnapshotResolved)),t[b].unwatcher();Wd(n,Ky(n.transactionQueueTree_,e)),ev(n,n.transactionQueueTree_),Qs(n.eventQueue_,e,y);for(let b=0;b<T.length;b++)Ml(T[b])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{qn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Xd(n,e)}},c)}function Xd(n,e){const t=AC(n,e),s=Hc(t),a=CC(n,t);return sV(n,a,s),s}function sV(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=zn(t,p.path);let y=!1,T;if(oe(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=HP)y=!0,T="maxretry",a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0));else{const b=SC(n,p.path,c);p.currentInputSnapshot=b;const D=e[d].update(b.val());if(D!==void 0){$d("transaction failed: Data returned ",D,p.path);let U=qt(D);typeof D=="object"&&D!=null&&ns(D,".priority")||(U=U.updatePriority(b.getPriority()));const G=p.currentWriteId,se=Wy(n),ie=mC(U,b,se);p.currentOutputSnapshotRaw=U,p.currentOutputSnapshotResolved=ie,p.currentWriteId=wC(n),c.splice(c.indexOf(G),1),a=a.concat(cC(n.serverSyncTree_,p.path,ie,p.currentWriteId,p.applyLocally)),a=a.concat(ka(n.serverSyncTree_,G,!0))}else y=!0,T="nodata",a=a.concat(ka(n.serverSyncTree_,p.currentWriteId,!0))}Qs(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(b){setTimeout(b,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Wd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Ml(s[d]);ev(n,n.transactionQueueTree_)}function AC(n,e){let t,s=n.transactionQueueTree_;for(t=Pe(e);t!==null&&Pl(s)===void 0;)s=Ky(s,t),e=ft(e),t=Pe(e);return s}function CC(n,e){const t=[];return RC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function RC(n,e,t){const s=Pl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Kd(e,a=>{RC(n,a,t)})}function Wd(n,e){const t=Pl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,pC(e,t.length>0?t:void 0)}Kd(e,s=>{Wd(n,s)})}function IC(n,e){const t=Hc(AC(n,e)),s=Ky(n.transactionQueueTree_,e);return DP(s,a=>{Sg(n,a)}),Sg(n,s),_C(s,a=>{Sg(n,a)}),t}function Sg(n,e){const t=Pl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(oe(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(oe(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(ka(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?pC(e,void 0):t.length=l+1,Qs(n.eventQueue_,Hc(e),a);for(let c=0;c<s.length;c++)Ml(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function aV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Uw=function(n,e){const t=oV(n),s=t.namespace;t.domain==="firebase.com"&&Gs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||mk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new kA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new st(t.pathString)}},oV=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=rV(n.substring(y,T)));const b=aV(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const D=e.slice(0,g);if(D.toLowerCase()==="localhost")t="localhost";else if(D.split(".").length<=2)t=D;else{const U=e.indexOf(".");s=e.substring(0,U).toLowerCase(),t=e.substring(U+1),l=s}"ns"in b&&(l=b.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ks;return WP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Jo("OnDisconnect.remove",this._path);const e=new ks;return Lw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Jo("OnDisconnect.set",this._path),f_("OnDisconnect.set",e,this._path);const t=new ks;return Lw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Jo("OnDisconnect.setWithPriority",this._path),f_("OnDisconnect.setWithPriority",e,this._path),UP("OnDisconnect.setWithPriority",t);const s=new ks;return ZP(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){Jo("OnDisconnect.update",this._path),LP("OnDisconnect.update",e,this._path);const t=new ks;return JP(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Le(this._path)?null:Ry(this._path)}get ref(){return new Kr(this._repo,this._path)}get _queryIdentifier(){const e=Tw(this._queryParams),t=wy(e);return t==="{}"?"default":t}get _queryObject(){return Tw(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof tv))return!1;const t=this._repo===e._repo,s=Iy(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wk(this._path)}}class Kr extends tv{constructor(e,t){super(e,t,new Oy,!1)}get parent(){const e=FA(this._path);return e===null?null:new Kr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class md{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new st(e),s=d_(this.ref,e);return new md(this._node.getChild(t),s,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new md(a,d_(this.ref,s),At)))}hasChild(e){const t=new st(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function La(n,e){return n=gt(n),n._checkNotDeleted("ref"),e!==void 0?d_(n._root,e):n._root}function d_(n,e){return n=gt(n),Pe(n._path)===null?jP("child","path",e):EC("child","path",e),new Kr(n._repo,Pt(n._path,e))}function fV(n){return n=gt(n),new hV(n._repo,n._path)}function Ag(n){return Jo("remove",n._path),Zd(n,null)}function Zd(n,e){n=gt(n),Jo("set",n._path),f_("set",e,n._path);const t=new ks;return $P(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class nv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new lV("value",this,new md(e.snapshotNode,new Kr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new uV(this,e,t):null}matches(e){return e instanceof nv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dV(n,e,t,s,a){const l=new cV(t,void 0),c=new nv(l);return eV(n._repo,n,c),()=>tV(n._repo,n,c)}function iv(n,e,t,s){return dV(n,"value",e)}lP(Kr);mP(Kr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV="FIREBASE_DATABASE_EMULATOR_HOST",m_={};let pV=!1;function gV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Gr(l);n.repoInfo_=new kA(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function _V(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Uw(l,a),d=c.repoInfo,p;typeof process<"u"&&iw&&(p=iw[mV]),p?(l=`http://${p}?ns=${d.namespace}`,c=Uw(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new Ak(n.name,n.options,e);zP("Invalid Firebase Database URL",c),Le(c.path)||Gs("Database URL must point to the root of a Firebase Database (not including a child path).");const y=vV(d,n,g,new Sk(n,t));return new EV(y,n)}function yV(n,e){const t=m_[e];(!t||t[n.key]!==n)&&Gs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),nV(n),delete t[n.key]}function vV(n,e,t,s){let a=m_[e.name];a||(a={},m_[e.name]=a);let l=a[n.toURLString()];return l&&Gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new GP(n,pV,t,s),a[n.toURLString()]=l,l}class EV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kr(this._repo,Je())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gs("Cannot call "+e+" on a deleted database.")}}function TV(n=w_(),e){const t=vd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=eS("database");s&&bV(t,...s)}return t}function bV(n,e,t,s={}){n=gt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Zi(s,l.repoInfo_.emulatorOptions))return;Gs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Gs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Df(Df.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:iS(s.mockUserToken,n.app.options.projectId);c=new Df(d)}Gr(e)&&(v_(e),E_("Database",!0)),gV(l,a,s,c)}/**
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
 */function wV(n){lk(Ka),ja(new Vr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return _V(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Qi(sw,rw,n),Qi(sw,rw,"esm2020")}zs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};zs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};wV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),jw=n=>{const e=AV(n);return e.charAt(0).toUpperCase()+e.slice(1)},xC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),CV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=te.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},p)=>te.createElement("svg",{ref:p,...RV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:xC("lucide",a),...!l&&!CV(d)&&{"aria-hidden":"true"},...d},[...c.map(([g,y])=>te.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(n,e)=>{const t=te.forwardRef(({className:s,...a},l)=>te.createElement(IV,{ref:l,iconNode:e,className:xC(`lucide-${SV(jw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=jw(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],NV=ct("arrow-left",xV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],OV=ct("ban",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],zw=ct("bell",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],PV=ct("check-check",kV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],sv=ct("check",VV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],UV=ct("circle-check-big",LV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Cg=ct("corner-up-left",jV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],BV=ct("crown",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],NC=ct("ellipsis-vertical",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],HV=ct("eraser",FV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],DC=ct("loader-circle",GV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Bw=ct("log-out",QV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],qw=ct("message-circle",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],rv=ct("message-square",KV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],XV=ct("palette",$V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],ZV=ct("pin-off",WV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],av=ct("pin",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],t6=ct("save",e6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],i6=ct("send",n6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],r6=ct("shield-check",s6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],o6=ct("shield",a6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],u6=ct("smile",l6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],ov=ct("square-pen",c6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],p_=ct("trash-2",h6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Fw=ct("user-plus",f6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],OC=ct("user-x",d6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],pd=ct("users",m6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],g_=ct("x",p6),g6=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},lv=lS(g6),uc=Z2(lv),Re=XM(lv),Ua=TV(lv),_6=n=>{te.useEffect(()=>{if(!n)return;const e=La(Ua,`/status/${n.uid}`),t=wt(Re,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=La(Ua,".info/connected"),c=iv(l,d=>{if(d.val()===!1){Mt(t,{state:"offline",last_changed:yl()});return}fV(e).set(s).then(()=>{Zd(e,a),Mt(t,{state:"online",last_changed:yl()})})});return()=>c()},[n])},Jd=(n,e)=>{const[t,s]=te.useState(null),a=uc.currentUser;return te.useEffect(()=>{if(!n||!a){s(null);return}const l=Mn(wt(Re,"users",n),p=>{if(p.exists()){const g=p.data(),y=e?.customNames?.[a.uid];s(T=>({...T||{},...g,displayName:y||g.displayName}))}else s(null)}),c=La(Ua,`/status/${n}`),d=iv(c,p=>{const g=p.val();s(y=>({...y||{},presence:g?.state,last_changed:g?.last_changed}))});return()=>{l(),d()}},[n,e,a]),t},y6=n=>{const[e,t]=te.useState(0);return te.useEffect(()=>{if(!n?.uid)return;const s=Sn(Wt(Re,"friendships"),xt("users","array-contains",n.uid),xt("status","==","pending")),a=Mn(s,l=>{const c=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(c.length)});return()=>a()},[n]),e},v6=n=>{const[e,t]=te.useState(0),[s,a]=te.useState([]);return te.useEffect(()=>{if(!n?.uid)return;const l=Sn(Wt(Re,"friendships"),xt("users","array-contains",n.uid),xt("status","==","accepted")),c=Mn(l,d=>{const p=d.docs.map(g=>g.data().users.find(y=>y!==n.uid));a(p)});return()=>c()},[n]),te.useEffect(()=>{if(s.length===0){t(0);return}const l={},c=s.map(d=>{const p=[n.uid,d].sort().join("_"),g=Sn(Wt(Re,`conversations/${p}/messages`),xt("receiverId","==",n.uid),xt("status","in",["sent","delivered"]));return Mn(g,y=>{l[p]=y.size;const T=Object.values(l).reduce((b,D)=>b+D,0);t(T)})});return()=>c.forEach(d=>d())},[s,n]),e},E6=n=>{const e=te.useRef(n);te.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),te.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=CD"}),e.current=n},[n])},T6=(n,e)=>{const[t,s]=te.useState(null);return te.useEffect(()=>{if(!n||!e||e.isGroup){s(null);return}const a=Sn(Wt(Re,"friendships"),xt("users","in",[[n.uid,e.uid],[e.uid,n.uid]])),l=Mn(a,c=>{if(c.empty)s(null);else{const d=c.docs[0];s({id:d.id,...d.data()})}});return()=>l()},[n,e]),t},b6=({text:n="Preparando seu bate-papo..."})=>w.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:w.jsxs("div",{className:"p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[w.jsx(rv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),w.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),w.jsxs("div",{className:"mt-8 flex flex-col items-center justify-center",children:[w.jsx(DC,{className:"animate-spin h-10 w-10 text-blue-400"}),w.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]})]})}),w6=()=>{const n=async()=>{const e=new Ps;try{const s=(await o2(uc,e)).user,a=wt(Re,"users",s.uid);(await Ey(a)).exists()||await ak(a,{uid:s.uid,displayName:s.displayName,email:s.email,photoURL:s.photoURL,recado:"Olá! Estou usando o ChatD."})}catch(t){console.error("Erro ao fazer login com Google:",t)}};return w.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-gray-900 to-blue-900/50 p-4 text-white text-center animate-fade-in",children:w.jsxs("div",{className:"flex flex-col items-center p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10",children:[w.jsx(rv,{size:80,className:"text-blue-400 mb-6 mx-auto"}),w.jsx("h1",{className:"text-4xl font-bold mb-2",children:"ChatD"}),w.jsx("p",{className:"text-gray-300 mb-8 max-w-sm",children:"Uma experiência de mensagens segura e minimalista. Conecte-se para começar."}),w.jsxs("button",{onClick:n,className:"flex items-center gap-3 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",children:[w.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),"Fazer Login com Google"]})]})})},S6=({user:n,onClose:e})=>n?w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:w.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:t=>t.stopPropagation(),children:[w.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),w.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),w.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),w.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),w.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Fechar"})]})}):null,A6=({user:n,onClose:e})=>{const[t,s]=te.useState(n.recado||""),a=async()=>{const l=wt(Re,"users",n.uid);await Mt(l,{recado:t}),e()};return w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:w.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[w.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),w.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),w.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),w.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[w.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),w.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},wl=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:w.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[w.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),w.jsx("p",{className:"text-gray-400 mb-6",children:a}),w.jsxs("div",{className:"flex justify-center gap-4",children:[w.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),w.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Confirmar"})]})]})}):null,Hw=({currentUser:n})=>{const[e,t]=te.useState(""),[s,a]=te.useState([]),[l,c]=te.useState({}),[d,p]=te.useState(!1),[g,y]=te.useState(""),[T,b]=te.useState(""),D=async q=>{if(q.preventDefault(),e.trim()!==""){p(!0),y(""),b(""),a([]);try{const G=Sn(Wt(Re,"users"),xt("email","==",e.trim()),_A(1)),ie=(await td(G)).docs.map(re=>re.data())[0];if(ie&&ie.uid!==n.uid){a([ie]);const re=Sn(Wt(Re,"friendships"),xt("users","array-contains",n.uid)),de=(await td(re)).docs.find(Ne=>Ne.data().users.includes(ie.uid));c({[ie.uid]:de?de.data().status:"not_friends"})}else ie&&ie.uid===n.uid?b("Você não pode adicionar a si mesmo."):b("Nenhum usuário encontrado com este e-mail.")}catch(G){y("Erro ao buscar. Verifique os seus índices do Firestore e tente novamente."),console.error(G)}finally{p(!1)}}},U=async q=>{try{await by(Wt(Re,"friendships"),{users:[n.uid,q.uid],status:"pending",requestedBy:n.uid,createdAt:yl()}),c(G=>({...G,[q.uid]:"pending"}))}catch(G){y("Falha ao enviar pedido."),console.error(G)}};return w.jsxs("div",{className:"p-4",children:[w.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),w.jsxs("form",{onSubmit:D,className:"flex gap-2",children:[w.jsx("input",{type:"email",value:e,onChange:q=>t(q.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),w.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors flex items-center justify-center w-24",children:d?w.jsx(DC,{className:"animate-spin"}):"Buscar"})]}),w.jsxs("div",{className:"mt-4 h-24",children:[g&&w.jsx("p",{className:"text-red-400",children:g}),T&&w.jsx("p",{className:"text-yellow-400",children:T}),s.map(q=>w.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("img",{src:q.photoURL,alt:q.displayName,className:"w-10 h-10 rounded-full"}),w.jsx("span",{className:"text-white",children:q.displayName})]}),w.jsxs("div",{children:[l[q.uid]==="not_friends"&&w.jsx("button",{onClick:()=>U(q),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[q.uid]==="pending"&&w.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[q.uid]==="accepted"&&w.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"}),l[q.uid]==="declined"&&w.jsx("span",{className:"text-red-400 text-sm",children:"Recusado"})]})]},q.uid))]})]})},Gw=({currentUser:n})=>{const[e,t]=te.useState([]);te.useEffect(()=>{if(!n?.uid)return;const a=Sn(Wt(Re,"friendships"),xt("users","array-contains",n.uid),xt("status","==","pending")),l=Mn(a,async c=>{const d=[];for(const p of c.docs){const g=p.data();if(g.requestedBy!==n.uid){const y=g.users.find(b=>b!==n.uid),T=await Ey(wt(Re,"users",y));T.exists()&&d.push({id:p.id,...T.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await Mt(wt(Re,"friendships",a),{status:l?"accepted":"declined"})}catch(c){console.error("Falha ao responder ao pedido:",c)}};return w.jsxs("div",{className:"p-4",children:[w.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?w.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):w.jsx("ul",{className:"space-y-2",children:e.map(a=>w.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),w.jsx("span",{className:"text-white",children:a.displayName})]}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110",children:w.jsx(sv,{size:16})}),w.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110",children:w.jsx(g_,{size:16})})]})]},a.id))})]})},C6=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=Jd(n.friendId,n);return s?w.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[w.jsxs("div",{className:"flex items-center gap-4 relative",children:[w.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),w.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),w.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:w.jsx(p_,{size:18,className:"text-red-500"})})]}):w.jsx("div",{className:"p-4 h-[69px] bg-gray-800 animate-pulse"})},Qw=({currentUser:n,onSelectUser:e})=>{const[t,s]=te.useState([]),[a,l]=te.useState(null);te.useEffect(()=>{if(!n?.uid)return;const d=Sn(Wt(Re,"friendships"),xt("users","array-contains",n.uid),xt("status","==","accepted")),p=Mn(d,g=>{const y=g.docs.map(T=>({id:T.id,...T.data(),friendId:T.data().users.find(b=>b!==n.uid)}));s(y)});return()=>p()},[n.uid]);const c=async()=>{if(!a)return;const d=wt(Re,"friendships",a.id);try{await Jg(d)}catch(p){console.error("Error deleting friendship: ",p)}l(null)};return w.jsxs("div",{className:"flex-grow overflow-y-auto",children:[w.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?w.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):w.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>w.jsx(C6,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),w.jsx(wl,{isOpen:!!a,onClose:()=>l(null),onConfirm:c,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},Yw=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=te.useState([]),[l,c]=te.useState([]),[d,p]=te.useState(null);te.useEffect(()=>{if(!n?.uid)return;const b=Sn(Wt(Re,"friendships"),xt("users","array-contains",n.uid),xt("status","==","accepted")),D=Mn(b,G=>{let se=G.docs.map(ie=>({id:ie.id,...ie.data(),friendId:ie.data().users.find(re=>re!==n.uid),isGroup:!1})).filter(ie=>!ie.chatDeletedFor?.includes(n.uid));se.sort((ie,re)=>{const pe=ie.pinnedBy?.includes(n.uid),de=re.pinnedBy?.includes(n.uid);return pe&&!de?-1:!pe&&de?1:0}),a(se)}),U=Sn(Wt(Re,"groups"),xt("members","array-contains",n.uid)),q=Mn(U,G=>{const se=G.docs.map(ie=>{const re=ie.data();return{id:ie.id,...re,isGroup:!0,displayName:re.name,photoURL:`https://placehold.co/96x96/${re.photoColor?.replace("#","")||"7c3aed"}/FFFFFF?text=${re.name.charAt(0).toUpperCase()}`}});c(se)});return()=>{D(),q()}},[n.uid]);const g=async(b,D)=>{const U=wt(Re,"friendships",b);D?await Mt(U,{pinnedBy:Wo(n.uid)}):await Mt(U,{pinnedBy:sl(n.uid)})},y=async()=>{if(!d)return;const b=wt(Re,"friendships",d.id);await Mt(b,{chatDeletedFor:sl(n.uid)}),p(null)},T=[...s,...l];return w.jsxs("div",{className:"flex-grow overflow-y-auto",children:[w.jsxs("div",{className:"flex justify-between items-center p-4",children:[w.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),w.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",children:[w.jsx(pd,{size:16})," Criar Grupo"]})]}),T.length===0?w.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):w.jsx("ul",{className:"divide-y divide-gray-700/50",children:T.map(b=>w.jsx(R6,{chat:b,currentUser:n,onSelectUser:e,onTogglePin:g,onDeleteChat:()=>p(b)},b.id))}),w.jsx(wl,{isOpen:!!d,onClose:()=>p(null),onConfirm:y,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},R6=({chat:n,currentUser:e,onSelectUser:t,onTogglePin:s,onDeleteChat:a})=>{const l=Jd(n.friendId,n),[c,d]=te.useState(0),p=n.pinnedBy?.includes(e.uid),g=te.useRef(null),[y,T]=te.useState(null);n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId),te.useEffect(()=>{if(!e)return;const G=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,se=Sn(Wt(Re,G),xt("receiverId","==",e.uid),xt("status","in",["sent","delivered"])),ie=Mn(se,de=>d(de.size)),re=Sn(Wt(Re,G),gA("createdAt","desc"),_A(1)),pe=Mn(re,de=>{de.empty?T(null):T(de.docs[0].data())});return()=>{ie(),pe()}},[n,e]);const b=n.isGroup?n:l;if(!b)return w.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse"});const D=q=>{if(!q)return"Offline";const G=new Date(q.seconds?q.seconds*1e3:q),se=new Date,ie=new Date(se.getFullYear(),se.getMonth(),se.getDate()),re=new Date(se.getFullYear(),se.getMonth(),se.getDate()-1),pe={hour:"2-digit",minute:"2-digit"},de=G.toLocaleTimeString("pt-BR",pe);if(G>=ie)return`Visto por último hoje às ${de}`;if(G>=re)return`Visto por último ontem às ${de}`;const Ne={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${G.toLocaleDateString("pt-BR",Ne)}`},U=({data:q})=>{const G=n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId);return w.jsxs("div",{className:"relative",children:[q.photoURL?w.jsx("img",{src:q.photoURL,alt:q.displayName,className:"w-12 h-12 rounded-full flex-shrink-0"}):w.jsx("div",{className:"w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold",style:{backgroundColor:q.photoColor||"#7c3aed"},children:q.displayName?.charAt(0).toUpperCase()}),G&&w.jsx("div",{className:"absolute inset-0 bg-black/50 rounded-full flex items-center justify-center",children:w.jsx(OV,{size:20,className:"text-white"})})]})};return w.jsxs("li",{ref:g,onClick:()=>t(b),onContextMenu:q=>{q.preventDefault(),n.isGroup||a()},className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${p?"bg-gray-700/30":""}`,children:[w.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[w.jsx(U,{data:b}),!n.isGroup&&w.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${l?.presence==="online"?"bg-green-500":"bg-gray-500"}`}),w.jsxs("div",{className:"flex-grow min-w-0",children:[w.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:b.displayName}),w.jsx("p",{className:"text-sm text-gray-400 truncate",children:y?y.isDeleted?"Mensagem apagada":y.text:n.isGroup?"Nenhuma mensagem ainda":l?.presence==="online"?"Online":D(l?.last_changed)})]})]}),w.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[c>0&&w.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:c}),!n.isGroup&&w.jsx("button",{onClick:q=>{q.stopPropagation(),s(n.id,p)},className:"p-2 rounded-full hover:bg-gray-600",children:p?w.jsx(ZV,{size:18,className:"text-blue-400"}):w.jsx(av,{size:18,className:"text-gray-500"})})]})]})},I6=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a,onPin:l})=>{const[c,d]=te.useState(!1),p=te.useRef(null),g=te.useRef(),[y,T]=te.useState("bottom");te.useEffect(()=>{c&&p.current&&(p.current.getBoundingClientRect().top<150?T("top"):T("bottom"))},[c]),te.useEffect(()=>{const se=ie=>{p.current&&!p.current.contains(ie.target)&&d(!1)};return document.addEventListener("mousedown",se),()=>document.removeEventListener("mousedown",se)},[]);const b=se=>{se.preventDefault(),navigator.vibrate&&navigator.vibrate(50),d(!0)},D=se=>{g.current=setTimeout(()=>b(se),500)},U=()=>{clearTimeout(g.current)},q=()=>{clearTimeout(g.current)},G=({msg:se})=>{if(!e||!se.status)return null;const ie=se.status==="read";return w.jsx(PV,{size:16,className:ie?"text-blue-400":"text-gray-400"})};return w.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&w.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:w.jsx(Cg,{size:16})}),w.jsxs("div",{className:"relative",ref:p,onTouchStart:D,onTouchEnd:U,onTouchMove:q,onContextMenu:se=>{se.preventDefault(),d(!0)},children:[w.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&w.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[w.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),w.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),w.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":n.text}),!n.isDeleted&&w.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&w.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),w.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),w.jsx(G,{msg:n})]})]}),c&&w.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${y==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10`,children:[w.jsxs("button",{onClick:()=>{l(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[w.jsx(av,{size:14})," Fixar"]}),w.jsxs("button",{onClick:()=>{t(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[w.jsx(Cg,{size:14})," Responder"]}),e&&!n.isDeleted&&w.jsxs(w.Fragment,{children:[w.jsxs("button",{onClick:()=>{a(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[w.jsx(ov,{size:14})," Editar"]}),w.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[w.jsx(p_,{size:14})," Apagar para mim"]}),w.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[w.jsx(p_,{size:14})," Apagar para todos"]})]})]})]}),e&&w.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:w.jsx(Cg,{size:16})})]})},x6=({onEmojiSelect:n,onClose:e})=>{const t=te.useRef(null);te.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍�","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return w.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker",children:w.jsx("div",{className:"p-2 overflow-y-auto",children:w.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>w.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},N6=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}},{id:"rose",name:"Rosa",style:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"}},{id:"night",name:"Noite",style:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}}];return w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:w.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg",onClick:a=>a.stopPropagation(),children:[w.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),w.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>w.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[w.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&w.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:w.jsx(UV,{className:"text-white"})})}),w.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},D6=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=te.useState(t);return w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:w.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg",onClick:l=>l.stopPropagation(),children:[w.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),w.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),w.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[w.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),w.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Salvar"})]})]})})},O6=({groupData:n,currentUser:e,onClose:t,onLeaveChat:s})=>{const[a,l]=te.useState([]),[c,d]=te.useState(!1),[p,g]=te.useState(!1),[y,T]=te.useState(!1),[b,D]=te.useState(n.name),[U,q]=te.useState(n.description||""),[G,se]=te.useState(n.photoColor),ie=n.admins?.includes(e.uid),re=wt(Re,"groups",n.id),pe=["#7c3aed","#db2777","#0284c7","#16a34a","#f97316","#ca8a04"];te.useEffect(()=>{(async()=>{const V=n.members.map(Xe=>Ey(wt(Re,"users",Xe))),_t=(await Promise.all(V)).filter(Xe=>Xe.exists()).map(Xe=>Xe.data());l(_t)})()},[n.members]);const de=async()=>{if(b.trim())try{await Mt(re,{name:b,description:U,photoColor:G}),T(!1)}catch(N){console.error("Erro ao salvar alterações do grupo:",N)}},Ne=async()=>{let N=[...n.admins];if(ie&&n.admins.length===1&&n.members.length>1){const V=n.members.find(R=>R!==e.uid);V?N=[V]:N=[]}else N=N.filter(V=>V!==e.uid);await Mt(re,{members:Wo(e.uid),admins:N}),n.members.length===1&&await Jg(re),s(),t()},P=async()=>{await Jg(re),s(),t()},C=async N=>{await Mt(re,{members:Wo(N),admins:Wo(N)})},x=async N=>{const V=n.admins.includes(N);await Mt(re,{admins:V?Wo(N):sl(N)})},k=({member:N})=>{const[V,R]=te.useState(!1),_t=n.admins?.includes(N.uid),Xe=ie&&N.uid!==e.uid;return w.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700/50 rounded-lg",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("img",{src:N.photoURL,alt:N.displayName,className:"w-10 h-10 rounded-full"}),w.jsx("span",{className:"text-white",children:N.displayName})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[_t&&w.jsx(BV,{size:16,className:"text-yellow-400"}),Xe&&w.jsxs("div",{className:"relative",children:[w.jsx("button",{onClick:()=>R(Y=>!Y),children:w.jsx(NC,{size:20})}),V&&w.jsxs("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20",children:[w.jsxs("button",{onClick:()=>{x(N.uid),R(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[_t?w.jsx(o6,{size:14}):w.jsx(r6,{size:14})," ",_t?"Rebaixar":"Promover a Admin"]}),w.jsxs("button",{onClick:()=>{C(N.uid),R(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[w.jsx(OC,{size:14})," Remover do Grupo"]})]})]})]})]})};return w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:w.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col h-4/5",onClick:N=>N.stopPropagation(),children:[w.jsxs("div",{className:"flex flex-col items-center mb-4 relative",children:[ie&&!y&&w.jsx("button",{onClick:()=>T(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-white",children:w.jsx(ov,{size:18})}),w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:"w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4",style:{backgroundColor:G},children:b?.charAt(0).toUpperCase()}),y&&w.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 p-1 rounded-full flex gap-1",children:pe.map(N=>w.jsx("button",{onClick:()=>se(N),className:`w-5 h-5 rounded-full transition-transform hover:scale-110 ${G===N?"ring-2 ring-white":""}`,style:{backgroundColor:N}},N))})]}),y?w.jsxs(w.Fragment,{children:[w.jsx("input",{type:"text",value:b,onChange:N=>D(N.target.value),className:"w-full bg-gray-700 text-white text-center text-2xl font-bold rounded-lg p-1 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),w.jsx("textarea",{value:U,onChange:N=>q(N.target.value),placeholder:"Descrição do grupo...",className:"w-full bg-gray-700 text-white text-center text-sm rounded-lg p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:2})]}):w.jsxs(w.Fragment,{children:[w.jsx("h2",{className:"text-2xl font-bold text-white mt-4",children:n.name}),w.jsx("p",{className:"text-gray-400 text-sm",children:n.description||`${n.members?.length} membros`})]})]}),w.jsxs("div",{className:"flex-grow overflow-y-auto pr-2",children:[w.jsx("h3",{className:"text-lg font-semibold text-white mb-2",children:"Membros"}),w.jsx("ul",{className:"space-y-2",children:a.map(N=>w.jsx(k,{member:N},N.uid))})]}),w.jsx("div",{className:"mt-6 flex flex-col gap-2",children:y?w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{onClick:()=>T(!1),className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),w.jsxs("button",{onClick:de,className:"w-full flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:[w.jsx(t6,{size:16})," Salvar"]})]}):w.jsxs(w.Fragment,{children:[ie&&w.jsx("button",{onClick:()=>g(!0),className:"w-full bg-gray-700/50 px-4 py-2 rounded-lg text-red-500 font-semibold hover:bg-red-900/50 transition-colors",children:"Deletar Grupo"}),w.jsx("button",{onClick:()=>d(!0),className:"w-full bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors",children:"Sair do Grupo"}),w.jsx("button",{onClick:t,className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Fechar"})]})})]})}),w.jsx(wl,{isOpen:c,onClose:()=>d(!1),onConfirm:Ne,title:"Sair do Grupo?",message:"Você tem certeza que quer sair deste grupo?"}),w.jsx(wl,{isOpen:p,onClose:()=>g(!1),onConfirm:P,title:"Deletar Grupo?",message:"Esta ação é irreversível e deletará o grupo para todos os membros."})]})},Kw=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=te.useState([]),[l,c]=te.useState(""),[d,p]=te.useState(!1),[g,y]=te.useState(!1),[T,b]=te.useState(!1),[D,U]=te.useState(null),[q,G]=te.useState(null),[se,ie]=te.useState(!1),[re,pe]=te.useState(!1),[de,Ne]=te.useState(!1),[P,C]=te.useState(!1),[x,k]=te.useState(!1),[N,V]=te.useState(null),[R,_t]=te.useState(e),Xe=te.useRef(null),Y=te.useRef(null),J=e.isGroup,ce=T6(n,e),De=Jd(e.uid,ce),O=te.useRef(),X=J?e.id:[n.uid,e.uid].sort().join("_"),le=ce?.themes?.[n.uid]||"default",ne=J?R.pinnedMessage:ce?.pinnedMessage,_e={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"},rose:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"},night:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}},Me=me=>{if(!me)return"";const Ce=new Date(me.seconds?me.seconds*1e3:me),qe=new Date,cn=new Date(qe.getFullYear(),qe.getMonth(),qe.getDate()),dt=new Date(qe.getFullYear(),qe.getMonth(),qe.getDate()-1),Ge={hour:"2-digit",minute:"2-digit"},yt=Ce.toLocaleTimeString("pt-BR",Ge);if(Ce>=cn)return`Visto por último hoje às ${yt}`;if(Ce>=dt)return`Visto por último ontem às ${yt}`;const Jt={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${Ce.toLocaleDateString("pt-BR",Jt)}`};te.useEffect(()=>{if(J){const me=wt(Re,"groups",e.id),Ce=Mn(me,qe=>{qe.exists()?_t({...qe.data(),id:qe.id,isGroup:!0}):t()});return()=>Ce()}},[J,e.id,t]),te.useEffect(()=>{O.current=De?.presence},[De?.presence]),te.useEffect(()=>{if(J||O.current==="online"||De?.presence!=="online")return;const me=Sn(Wt(Re,`conversations/${X}/messages`),xt("receiverId","==",n.uid),xt("status","==","sent"));td(me).then(Ce=>{const qe=_g(Re);Ce.docs.forEach(cn=>qe.update(cn.ref,{status:"delivered"})),qe.commit()})},[De?.presence,X,n.uid,J]),te.useEffect(()=>{const me=`conversations/${X}/messages`,Ce=Sn(Wt(Re,me),gA("createdAt","asc")),qe=Mn(Ce,cn=>{const dt=cn.docs.map(yt=>({id:yt.id,...yt.data()})).filter(yt=>!yt.deletedFor?.includes(n.uid));if(a(dt),J)return;const Ge=_g(Re);cn.docs.forEach(yt=>{yt.data().receiverId===n.uid&&yt.data().status!=="read"&&Ge.update(yt.ref,{status:"read"})}),Ge.commit()});return()=>qe()},[X,n.uid,J]),te.useEffect(()=>{if(J)return;const me=La(Ua,`typing/${X}/${e.uid}`),Ce=iv(me,qe=>p(qe.val()===!0));return()=>Ce()},[X,e.uid,J]),te.useEffect(()=>{Xe.current?.scrollIntoView({behavior:"smooth"})},[s]);const be=me=>{if(c(me.target.value),J)return;const Ce=La(Ua,`typing/${X}/${n.uid}`);me.target.value.trim().length>0?(Zd(Ce,!0),Y.current&&clearTimeout(Y.current),Y.current=setTimeout(()=>Ag(Ce),3e3)):Ag(Ce)},Vt=async me=>{if(me.preventDefault(),l.trim()===""||!J&&(ce?.blockedBy?.includes(e.uid)||ce?.blockedBy?.includes(n.uid)))return;const Ce=l;c(""),J||(Ag(La(Ua,`typing/${X}/${n.uid}`)),Y.current&&clearTimeout(Y.current));const qe={text:Ce,createdAt:yl(),senderId:n.uid,senderName:n.displayName};J||(qe.receiverId=e.uid,qe.status=De?.presence==="online"?"delivered":"sent"),D&&(qe.replyTo={id:D.id,text:D.text,senderName:D.senderId===n.uid?"Você":J?D.senderName:e.displayName});try{await by(Wt(Re,`conversations/${X}/messages`),qe),U(null)}catch(cn){console.error("Falha ao enviar mensagem:",cn),c(Ce)}},rt=async me=>{if(me.preventDefault(),!q||l.trim()==="")return;const Ce=wt(Re,`conversations/${X}/messages`,q.id);await Mt(Ce,{text:l,edited:!0}),G(null),c("")},Jn=async()=>{if(!N)return;const{id:me,type:Ce}=N,qe=wt(Re,`conversations/${X}/messages`,me);Ce==="self"?await Mt(qe,{deletedFor:sl(n.uid)}):Ce==="all"&&await Mt(qe,{text:"",isDeleted:!0,replyTo:null}),V(null)},Ri=async()=>{const me=Sn(Wt(Re,`conversations/${X}/messages`)),Ce=await td(me),qe=_g(Re);Ce.docs.forEach(cn=>{qe.update(cn.ref,{deletedFor:sl(n.uid)})}),await qe.commit(),Ne(!1)},mi=async()=>{if(!ce)return;const me=wt(Re,"friendships",ce.id);ce.blockedBy?.includes(n.uid)?await Mt(me,{blockedBy:Wo(n.uid)}):await Mt(me,{blockedBy:sl(n.uid)}),pe(!1)},is=async me=>{if(!ce)return;const Ce=wt(Re,"friendships",ce.id);await Mt(Ce,{[`themes.${n.uid}`]:me}),C(!1)},ss=async me=>{if(!ce||!me.trim())return;const Ce=wt(Re,"friendships",ce.id);await Mt(Ce,{[`customNames.${n.uid}`]:me.trim()}),k(!1)},rs=async me=>{const Ce=J&&R.admins.includes(n.uid);if(J&&!Ce)return;const qe=J?wt(Re,"groups",R.id):wt(Re,"friendships",ce.id),cn={id:me.id,text:me.text,senderName:me.senderName};await Mt(qe,{pinnedMessage:cn})},$r=async()=>{const me=J&&R.admins.includes(n.uid);if(J&&!me)return;const Ce=J?wt(Re,"groups",R.id):wt(Re,"friendships",ce.id);await Mt(Ce,{pinnedMessage:null})},eo=me=>{G(me),c(me.text),U(null)},kn=()=>{G(null),c("")},$s=!J&&ce?.blockedBy?.includes(n.uid),as=!J&&ce?.blockedBy?.includes(e.uid),Ii=J?R.name:De?.displayName,os=J?R.photoColor?"":R.photoURL:e.photoURL;return w.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[w.jsxs("header",{className:"flex items-center p-4 bg-gray-900 shadow-md",children:[w.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:w.jsx(NV,{size:24})}),w.jsxs("div",{className:"flex items-center cursor-pointer flex-grow",onClick:()=>J?b(!0):y(!0),children:[J?w.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold mr-4",style:{backgroundColor:R.photoColor||"#7c3aed"},children:Ii?.charAt(0).toUpperCase()}):w.jsx("img",{src:os,alt:Ii,className:"w-10 h-10 rounded-full mr-4"}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-xl font-bold text-white",children:Ii}),w.jsx("p",{className:"text-sm text-blue-300 h-4",children:J?`${R.members?.length||0} membros`:d?"Digitando...":De?.presence==="online"?"Online":Me(De?.last_changed)})]})]}),w.jsxs("div",{className:"relative",children:[w.jsx("button",{onClick:()=>pe(me=>!me),className:"p-2 text-gray-400 hover:text-white",children:w.jsx(NC,{})}),re&&w.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10",children:[J?w.jsxs("button",{onClick:()=>{b(!0),pe(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[w.jsx(pd,{size:14})," Perfil do Grupo"]}):w.jsxs(w.Fragment,{children:[w.jsxs("button",{onClick:()=>{k(!0),pe(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[w.jsx(ov,{size:14})," Alterar nome do contato"]}),w.jsxs("button",{onClick:()=>{C(!0),pe(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[w.jsx(XV,{size:14})," Alterar tema da conversa"]})]}),w.jsxs("button",{onClick:()=>{Ne(!0),pe(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[w.jsx(HV,{size:14})," Limpar conversa"]}),!J&&w.jsxs("button",{onClick:mi,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[w.jsx(OC,{size:14})," ",$s?"Desbloquear":"Bloquear"]})]})]})]}),w.jsxs("main",{className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500 flex flex-col",style:J?_e.default:_e[le],children:[ne&&w.jsx("div",{className:"sticky top-0 bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg mb-4 border border-blue-500/50 animate-fade-in",children:w.jsxs("div",{className:"flex justify-between items-center",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold",children:[w.jsx(av,{size:12})," MENSAGEM FIXADA"]}),w.jsx("p",{className:"text-sm text-white truncate",children:ne.text})]}),(J?R.admins.includes(n.uid):!0)&&w.jsx("button",{onClick:$r,className:"p-1 text-gray-400 hover:text-white",children:w.jsx(g_,{size:16})})]})}),w.jsx("div",{className:"space-y-2 mt-auto",children:s.map(me=>w.jsx(I6,{msg:me,isCurrentUser:me.senderId===n.uid,onReply:()=>U(me),onDelete:Ce=>V({id:me.id,type:Ce}),onEdit:()=>eo(me),onPin:()=>rs(me)},me.id))}),w.jsx("div",{ref:Xe})]}),w.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50",children:[(D||q)&&w.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative",children:[w.jsxs("div",{className:"flex justify-between items-center text-sm",children:[w.jsx("p",{className:"font-bold",children:q?"Editando mensagem":`Respondendo a ${D.senderId===n.uid?"Você":J?D.senderName:De?.displayName}`}),w.jsx("button",{onClick:q?kn:()=>U(null),className:"p-1",children:w.jsx(g_,{size:16})})]}),w.jsx("p",{className:"text-xs text-gray-400 truncate",children:q?q.text:D.text})]}),w.jsxs("div",{className:"relative flex items-center gap-2",children:[se&&w.jsx(x6,{onEmojiSelect:me=>c(Ce=>Ce+me),onClose:()=>ie(!1)}),w.jsx("button",{type:"button",onClick:()=>ie(me=>!me),className:"p-2 text-gray-400 hover:text-white",children:w.jsx(u6,{})}),w.jsxs("form",{onSubmit:q?rt:Vt,className:"flex-grow flex items-center gap-2",children:[w.jsx("input",{type:"text",value:l,onChange:be,placeholder:$s?"Você bloqueou este contato.":as?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:as||$s,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),w.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 disabled:bg-gray-500",disabled:!l.trim()||as||$s,children:q?w.jsx(sv,{size:20}):w.jsx(i6,{size:20})})]})]})]}),g&&w.jsx(S6,{user:e,onClose:()=>y(!1)}),T&&w.jsx(O6,{groupData:R,currentUser:n,onClose:()=>b(!1),onLeaveChat:t}),P&&w.jsx(N6,{onClose:()=>C(!1),onSelectTheme:is,currentTheme:le}),x&&w.jsx(D6,{onClose:()=>k(!1),onSave:ss,currentName:De?.displayName}),w.jsx(wl,{isOpen:de,onClose:()=>Ne(!1),onConfirm:Ri,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),w.jsx(wl,{isOpen:!!N,onClose:()=>V(null),onConfirm:Jn,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${N?.type==="all"?"para todos":"para você"}?`})]})},M6=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=te.useState(""),[l,c]=te.useState([n.uid]),[d,p]=te.useState(""),g=T=>{c(b=>b.includes(T)?b.filter(D=>D!==T):[...b,T])},y=async()=>{if(!s.trim()){p("O nome do grupo é obrigatório.");return}if(l.length<2){p("Selecione pelo menos um amigo para criar um grupo.");return}try{await by(Wt(Re,"groups"),{name:s.trim(),description:"",members:l,admins:[n.uid],createdAt:yl(),createdBy:n.uid,photoColor:"#7c3aed",pinnedMessage:null}),e()}catch(T){console.error("Erro ao criar grupo:",T),p(`Erro: ${T.message}`)}};return w.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:w.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col",onClick:T=>T.stopPropagation(),children:[w.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),w.jsx("input",{type:"text",value:s,onChange:T=>a(T.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),w.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),w.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(T=>w.jsx(k6,{friendship:T,onToggle:g,isSelected:l.includes(T.friendId)},T.id))}),d&&w.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),w.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[w.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),w.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors",children:"Criar Grupo"})]})]})})},k6=({friendship:n,onToggle:e,isSelected:t})=>{const s=Jd(n.friendId,n);return s?w.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),w.jsx("span",{className:"text-white",children:s.displayName})]}),w.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&w.jsx(sv,{size:16,className:"text-white"})})]}):null},P6=({user:n,onLogout:e})=>{const[t,s]=te.useState(null),[a,l]=te.useState("chats"),[c,d]=te.useState("list"),[p,g]=te.useState(!1),[y,T]=te.useState(!1),[b,D]=te.useState([]),U=y6(n),q=v6(n);E6(q),te.useEffect(()=>{if(!n?.uid)return;const pe=Sn(Wt(Re,"friendships"),xt("users","array-contains",n.uid),xt("status","==","accepted")),de=Mn(pe,Ne=>{const P=Ne.docs.map(C=>({id:C.id,...C.data(),friendId:C.data().users.find(x=>x!==n.uid)}));D(P)});return()=>de()},[n.uid]),te.useEffect(()=>{d(t?"chat":"list")},[t]);const G=pe=>{s(pe)},se=()=>{s(null)},ie=({count:pe})=>pe===0?null:w.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:pe}),re=({count:pe})=>pe===0?null:w.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[w.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),w.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]});return w.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&w.jsx(A6,{user:n,onClose:()=>g(!1)}),y&&w.jsx(M6,{currentUser:n,onClose:()=>T(!1),friendships:b}),w.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[w.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[w.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[w.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),w.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),w.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:w.jsx(Bw,{size:20})})]}),w.jsxs("div",{className:"flex border-b border-gray-700/50",children:[w.jsxs("button",{onClick:()=>l("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[w.jsx(qw,{className:"mx-auto"}),w.jsx(re,{count:q})]}),w.jsx("button",{onClick:()=>l("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:w.jsx(pd,{className:"mx-auto"})}),w.jsx("button",{onClick:()=>l("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:w.jsx(Fw,{className:"mx-auto"})}),w.jsxs("button",{onClick:()=>l("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[w.jsx(zw,{className:"mx-auto"}),w.jsx(ie,{count:U})]})]}),w.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&w.jsx(Yw,{currentUser:n,onSelectUser:G,onCreateGroup:()=>T(!0)}),a==="contacts"&&w.jsx(Qw,{currentUser:n,onSelectUser:G}),a==="add"&&w.jsx(Hw,{currentUser:n}),a==="requests"&&w.jsx(Gw,{currentUser:n})]})]}),w.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[w.jsxs("div",{className:`flex-col h-full ${c==="list"?"flex":"hidden"}`,children:[w.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[w.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[w.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),w.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),w.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:w.jsx(Bw,{size:20})})]}),w.jsxs("div",{className:"flex-grow overflow-y-auto",children:[a==="chats"&&w.jsx(Yw,{currentUser:n,onSelectUser:G,onCreateGroup:()=>T(!0)}),a==="contacts"&&w.jsx(Qw,{currentUser:n,onSelectUser:G}),a==="add"&&w.jsx(Hw,{currentUser:n}),a==="requests"&&w.jsx(Gw,{currentUser:n})]}),w.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[w.jsxs("button",{onClick:()=>l("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[w.jsx(qw,{}),w.jsx(re,{count:q})]}),w.jsx("button",{onClick:()=>l("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:w.jsx(pd,{})}),w.jsx("button",{onClick:()=>l("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:w.jsx(Fw,{})}),w.jsxs("button",{onClick:()=>l("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[w.jsx(zw,{}),w.jsx(ie,{count:U})]})]})]}),c==="chat"&&t&&w.jsx(Kw,{currentUser:n,otherUser:t,onLeave:se})]}),w.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:t?w.jsx(Kw,{currentUser:n,otherUser:t,onLeave:se}):w.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[w.jsx(rv,{size:60,className:"mb-4"}),w.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),w.jsx("p",{children:"Escolha alguém da sua lista para iniciar uma conversa."})]})})]})};function V6(){return w.jsxs(w.Fragment,{children:[w.jsx("style",{children:`
                .emoji-picker-header::-webkit-scrollbar, .chat-main::-webkit-scrollbar, .emoji-picker .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .emoji-picker-header, .chat-main, .emoji-picker .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}),w.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:w.jsx(L6,{})})]})}const L6=()=>{const[n,e]=te.useState(null),[t,s]=te.useState(!0),[a,l]=te.useState(null);_6(n),te.useEffect(()=>{const d=zN(uc,async p=>{if(p)e(p);else try{typeof __initial_auth_token<"u"&&__initial_auth_token?await LN(uc,__initial_auth_token):e(null)}catch(g){console.error("Falha na autenticação automática, mostrando tela de login.",g),e(null)}s(!1)});return()=>d()},[]),te.useEffect(()=>{if(!n){l(null);return}const d=wt(Re,"users",n.uid),p=Mn(d,g=>{g.exists()&&l({...n,...g.data()})});return()=>p()},[n]);const c=async()=>{if(n)try{const d=La(Ua,`/status/${n.uid}`);await Zd(d,{state:"offline",last_changed:Date.now()}),await Mt(wt(Re,`/users/${n.uid}`),{state:"offline",last_changed:yl()}),await BN(uc),e(null)}catch(d){console.error("Erro ao fazer logout:",d)}};return t?w.jsx(b6,{}):a?w.jsx(P6,{user:a,onLogout:c}):w.jsx(w6,{})};fI.createRoot(document.getElementById("root")).render(w.jsx(te.StrictMode,{children:w.jsx(V6,{})}));
