(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var ig={exports:{}},Hc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function rR(){if(TT)return Hc;TT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:u,ref:a!==void 0?a:null,props:l}}return Hc.Fragment=e,Hc.jsx=t,Hc.jsxs=t,Hc}var bT;function aR(){return bT||(bT=1,ig.exports=rR()),ig.exports}var E=aR(),sg={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function oR(){if(wT)return Pe;wT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,j={};function z(D,$,ce){this.props=D,this.context=$,this.refs=j,this.updater=ce||C}z.prototype.isReactComponent={},z.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ie(){}ie.prototype=z.prototype;function te(D,$,ce){this.props=D,this.context=$,this.refs=j,this.updater=ce||C}var re=te.prototype=new ie;re.constructor=te,M(re,z.prototype),re.isPureReactComponent=!0;var _e=Array.isArray,ae={H:null,A:null,T:null,S:null,V:null},fe=Object.prototype.hasOwnProperty;function N(D,$,ce,ne,Te,Oe){return ce=Oe.ref,{$$typeof:n,type:D,key:$,ref:ce!==void 0?ce:null,props:Oe}}function x(D,$){return N(D.type,$,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function P(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ce){return $[ce]})}var V=/\/+/g;function L(D,$){return typeof D=="object"&&D!==null&&D.key!=null?P(""+D.key):$.toString(36)}function R(){}function he(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function($){D.status==="pending"&&(D.status="fulfilled",D.value=$)},function($){D.status==="pending"&&(D.status="rejected",D.reason=$)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Me(D,$,ce,ne,Te){var Oe=typeof D;(Oe==="undefined"||Oe==="boolean")&&(D=null);var Ae=!1;if(D===null)Ae=!0;else switch(Oe){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(D.$$typeof){case n:case e:Ae=!0;break;case y:return Ae=D._init,Me(Ae(D._payload),$,ce,ne,Te)}}if(Ae)return Te=Te(D),Ae=ne===""?"."+L(D,0):ne,_e(Te)?(ce="",Ae!=null&&(ce=Ae.replace(V,"$&/")+"/"),Me(Te,$,ce,"",function($n){return $n})):Te!=null&&(I(Te)&&(Te=x(Te,ce+(Te.key==null||D&&D.key===Te.key?"":(""+Te.key).replace(V,"$&/")+"/")+Ae)),$.push(Te)),1;Ae=0;var It=ne===""?".":ne+":";if(_e(D))for(var at=0;at<D.length;at++)ne=D[at],Oe=It+L(ne,at),Ae+=Me(ne,$,ce,Oe,Te);else if(at=w(D),typeof at=="function")for(D=at.call(D),at=0;!(ne=D.next()).done;)ne=ne.value,Oe=It+L(ne,at++),Ae+=Me(ne,$,ce,Oe,Te);else if(Oe==="object"){if(typeof D.then=="function")return Me(he(D),$,ce,ne,Te);throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function Y(D,$,ce){if(D==null)return D;var ne=[],Te=0;return Me(D,ne,"","",function(Oe){return $.call(ce,Oe,Te++)}),ne}function se(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(ce){(D._status===0||D._status===-1)&&(D._status=1,D._result=ce)},function(ce){(D._status===0||D._status===-1)&&(D._status=2,D._result=ce)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function He(){}return Pe.Children={map:Y,forEach:function(D,$,ce){Y(D,function(){$.apply(this,arguments)},ce)},count:function(D){var $=0;return Y(D,function(){$++}),$},toArray:function(D){return Y(D,function($){return $})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Pe.Component=z,Pe.Fragment=t,Pe.Profiler=a,Pe.PureComponent=te,Pe.StrictMode=s,Pe.Suspense=g,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ae.H.useMemoCache(D)}},Pe.cache=function(D){return function(){return D.apply(null,arguments)}},Pe.cloneElement=function(D,$,ce){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ne=M({},D.props),Te=D.key,Oe=void 0;if($!=null)for(Ae in $.ref!==void 0&&(Oe=void 0),$.key!==void 0&&(Te=""+$.key),$)!fe.call($,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&$.ref===void 0||(ne[Ae]=$[Ae]);var Ae=arguments.length-2;if(Ae===1)ne.children=ce;else if(1<Ae){for(var It=Array(Ae),at=0;at<Ae;at++)It[at]=arguments[at+2];ne.children=It}return N(D.type,Te,void 0,void 0,Oe,ne)},Pe.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Pe.createElement=function(D,$,ce){var ne,Te={},Oe=null;if($!=null)for(ne in $.key!==void 0&&(Oe=""+$.key),$)fe.call($,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(Te[ne]=$[ne]);var Ae=arguments.length-2;if(Ae===1)Te.children=ce;else if(1<Ae){for(var It=Array(Ae),at=0;at<Ae;at++)It[at]=arguments[at+2];Te.children=It}if(D&&D.defaultProps)for(ne in Ae=D.defaultProps,Ae)Te[ne]===void 0&&(Te[ne]=Ae[ne]);return N(D,Oe,void 0,void 0,null,Te)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(D){return{$$typeof:d,render:D}},Pe.isValidElement=I,Pe.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:se}},Pe.memo=function(D,$){return{$$typeof:m,type:D,compare:$===void 0?null:$}},Pe.startTransition=function(D){var $=ae.T,ce={};ae.T=ce;try{var ne=D(),Te=ae.S;Te!==null&&Te(ce,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(He,me)}catch(Oe){me(Oe)}finally{ae.T=$}},Pe.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Pe.use=function(D){return ae.H.use(D)},Pe.useActionState=function(D,$,ce){return ae.H.useActionState(D,$,ce)},Pe.useCallback=function(D,$){return ae.H.useCallback(D,$)},Pe.useContext=function(D){return ae.H.useContext(D)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(D,$){return ae.H.useDeferredValue(D,$)},Pe.useEffect=function(D,$,ce){var ne=ae.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(D,$)},Pe.useId=function(){return ae.H.useId()},Pe.useImperativeHandle=function(D,$,ce){return ae.H.useImperativeHandle(D,$,ce)},Pe.useInsertionEffect=function(D,$){return ae.H.useInsertionEffect(D,$)},Pe.useLayoutEffect=function(D,$){return ae.H.useLayoutEffect(D,$)},Pe.useMemo=function(D,$){return ae.H.useMemo(D,$)},Pe.useOptimistic=function(D,$){return ae.H.useOptimistic(D,$)},Pe.useReducer=function(D,$,ce){return ae.H.useReducer(D,$,ce)},Pe.useRef=function(D){return ae.H.useRef(D)},Pe.useState=function(D){return ae.H.useState(D)},Pe.useSyncExternalStore=function(D,$,ce){return ae.H.useSyncExternalStore(D,$,ce)},Pe.useTransition=function(){return ae.H.useTransition()},Pe.version="19.1.1",Pe}var ST;function v_(){return ST||(ST=1,sg.exports=oR()),sg.exports}var K=v_(),rg={exports:{}},Gc={},ag={exports:{}},og={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function lR(){return AT||(AT=1,(function(n){function e(Y,se){var me=Y.length;Y.push(se);e:for(;0<me;){var He=me-1>>>1,D=Y[He];if(0<a(D,se))Y[He]=se,Y[me]=D,me=He;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var se=Y[0],me=Y.pop();if(me!==se){Y[0]=me;e:for(var He=0,D=Y.length,$=D>>>1;He<$;){var ce=2*(He+1)-1,ne=Y[ce],Te=ce+1,Oe=Y[Te];if(0>a(ne,me))Te<D&&0>a(Oe,ne)?(Y[He]=Oe,Y[Te]=me,He=Te):(Y[He]=ne,Y[ce]=me,He=ce);else if(Te<D&&0>a(Oe,me))Y[He]=Oe,Y[Te]=me,He=Te;else break e}}return se}function a(Y,se){var me=Y.sortIndex-se.sortIndex;return me!==0?me:Y.id-se.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var g=[],m=[],y=1,b=null,w=3,C=!1,M=!1,j=!1,z=!1,ie=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function _e(Y){for(var se=t(m);se!==null;){if(se.callback===null)s(m);else if(se.startTime<=Y)s(m),se.sortIndex=se.expirationTime,e(g,se);else break;se=t(m)}}function ae(Y){if(j=!1,_e(Y),!M)if(t(g)!==null)M=!0,fe||(fe=!0,L());else{var se=t(m);se!==null&&Me(ae,se.startTime-Y)}}var fe=!1,N=-1,x=5,I=-1;function P(){return z?!0:!(n.unstable_now()-I<x)}function V(){if(z=!1,fe){var Y=n.unstable_now();I=Y;var se=!0;try{e:{M=!1,j&&(j=!1,te(N),N=-1),C=!0;var me=w;try{t:{for(_e(Y),b=t(g);b!==null&&!(b.expirationTime>Y&&P());){var He=b.callback;if(typeof He=="function"){b.callback=null,w=b.priorityLevel;var D=He(b.expirationTime<=Y);if(Y=n.unstable_now(),typeof D=="function"){b.callback=D,_e(Y),se=!0;break t}b===t(g)&&s(g),_e(Y)}else s(g);b=t(g)}if(b!==null)se=!0;else{var $=t(m);$!==null&&Me(ae,$.startTime-Y),se=!1}}break e}finally{b=null,w=me,C=!1}se=void 0}}finally{se?L():fe=!1}}}var L;if(typeof re=="function")L=function(){re(V)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,he=R.port2;R.port1.onmessage=V,L=function(){he.postMessage(null)}}else L=function(){ie(V,0)};function Me(Y,se){N=ie(function(){Y(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var se=3;break;default:se=w}var me=w;w=se;try{return Y()}finally{w=me}},n.unstable_requestPaint=function(){z=!0},n.unstable_runWithPriority=function(Y,se){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var me=w;w=Y;try{return se()}finally{w=me}},n.unstable_scheduleCallback=function(Y,se,me){var He=n.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?He+me:He):me=He,Y){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=me+D,Y={id:y++,callback:se,priorityLevel:Y,startTime:me,expirationTime:D,sortIndex:-1},me>He?(Y.sortIndex=me,e(m,Y),t(g)===null&&Y===t(m)&&(j?(te(N),N=-1):j=!0,Me(ae,me-He))):(Y.sortIndex=D,e(g,Y),M||C||(M=!0,fe||(fe=!0,L()))),Y},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(Y){var se=w;return function(){var me=w;w=se;try{return Y.apply(this,arguments)}finally{w=me}}}})(og)),og}var CT;function cR(){return CT||(CT=1,ag.exports=lR()),ag.exports}var lg={exports:{}},vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xT;function uR(){if(xT)return vn;xT=1;var n=v_();function e(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(g,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:g,containerInfo:m,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,vn.createPortal=function(g,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(g,m,null,y)},vn.flushSync=function(g){var m=u.T,y=s.p;try{if(u.T=null,s.p=2,g)return g()}finally{u.T=m,s.p=y,s.d.f()}},vn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},vn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},vn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var y=m.as,b=d(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:C}):y==="script"&&s.d.X(g,{crossOrigin:b,integrity:w,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},vn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},vn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=d(y,m.crossOrigin);s.d.L(g,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},vn.preloadModule=function(g,m){if(typeof g=="string")if(m){var y=d(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},vn.requestFormReset=function(g){s.d.r(g)},vn.unstable_batchedUpdates=function(g,m){return g(m)},vn.useFormState=function(g,m,y){return u.H.useFormState(g,m,y)},vn.useFormStatus=function(){return u.H.useHostTransitionStatus()},vn.version="19.1.1",vn}var RT;function hR(){if(RT)return lg.exports;RT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),lg.exports=uR(),lg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT;function fR(){if(IT)return Gc;IT=1;var n=cR(),e=v_(),t=hR();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function g(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,c=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return d(f),i;if(p===c)return d(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==c.return)o=f,c=p;else{for(var T=!1,S=f.child;S;){if(S===o){T=!0,o=f,c=p;break}if(S===c){T=!0,c=f,o=p;break}S=S.sibling}if(!T){for(S=p.child;S;){if(S===o){T=!0,o=p,c=f;break}if(S===c){T=!0,c=p,o=f;break}S=S.sibling}if(!T)throw Error(s(189))}}if(o.alternate!==c)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function m(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=m(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),te=Symbol.for("react.consumer"),re=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function he(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case M:return"Fragment";case z:return"Profiler";case j:return"StrictMode";case ae:return"Suspense";case fe:return"SuspenseList";case I:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case C:return"Portal";case re:return(i.displayName||"Context")+".Provider";case te:return(i._context.displayName||"Context")+".Consumer";case _e:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case N:return r=i.displayName||null,r!==null?r:he(i.type)||"Memo";case x:r=i._payload,i=i._init;try{return he(i(r))}catch{}}return null}var Me=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},He=[],D=-1;function $(i){return{current:i}}function ce(i){0>D||(i.current=He[D],He[D]=null,D--)}function ne(i,r){D++,He[D]=i.current,i.current=r}var Te=$(null),Oe=$(null),Ae=$(null),It=$(null);function at(i,r){switch(ne(Ae,r),ne(Oe,i),ne(Te,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?XE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=XE(r),i=$E(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ce(Te),ne(Te,i)}function $n(){ce(Te),ce(Oe),ce(Ae)}function Ci(i){i.memoizedState!==null&&ne(It,i);var r=Te.current,o=$E(r,i.type);r!==o&&(ne(Oe,i),ne(Te,o))}function di(i){Oe.current===i&&(ce(Te),ce(Oe)),It.current===i&&(ce(It),Uc._currentValue=me)}var ns=Object.prototype.hasOwnProperty,is=n.unstable_scheduleCallback,ss=n.unstable_cancelCallback,Yr=n.unstable_shouldYield,no=n.unstable_requestPaint,kn=n.unstable_now,jl=n.unstable_getCurrentPriorityLevel,Kr=n.unstable_ImmediatePriority,Ys=n.unstable_UserBlockingPriority,Wn=n.unstable_NormalPriority,Xr=n.unstable_LowPriority,xi=n.unstable_IdlePriority,$r=n.log,de=n.unstable_setDisableYieldValue,ge=null,ve=null;function ot(i){if(typeof $r=="function"&&de(i),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(ge,i)}catch{}}var ft=Math.clz32?Math.clz32:rs,cn=Math.log,io=Math.LN2;function rs(i){return i>>>=0,i===0?32:31-(cn(i)/io|0)|0}var Ks=256,Wr=4194304;function mi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function so(i,r,o){var c=i.pendingLanes;if(c===0)return 0;var f=0,p=i.suspendedLanes,T=i.pingedLanes;i=i.warmLanes;var S=c&134217727;return S!==0?(c=S&~p,c!==0?f=mi(c):(T&=S,T!==0?f=mi(T):o||(o=S&~i,o!==0&&(f=mi(o))))):(S=c&~p,S!==0?f=mi(S):T!==0?f=mi(T):o||(o=c&~i,o!==0&&(f=mi(o)))),f===0?0:r!==0&&r!==f&&(r&p)===0&&(p=f&-f,o=r&-r,p>=o||p===32&&(o&4194048)!==0)?r:f}function Zr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Ul(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zl(){var i=Ks;return Ks<<=1,(Ks&4194048)===0&&(Ks=256),i}function Fl(){var i=Wr;return Wr<<=1,(Wr&62914560)===0&&(Wr=4194304),i}function as(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function os(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Bl(i,r,o,c,f,p){var T=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,k=i.expirationTimes,q=i.hiddenUpdates;for(o=T&~o;0<o;){var X=31-ft(o),J=1<<X;S[X]=0,k[X]=-1;var H=q[X];if(H!==null)for(q[X]=null,X=0;X<H.length;X++){var G=H[X];G!==null&&(G.lane&=-536870913)}o&=~J}c!==0&&Ri(i,c,0),p!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=p&~(T&~r))}function Ri(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-ft(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|o&4194090}function ql(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var c=31-ft(o),f=1<<c;f&r|i[c]&r&&(i[c]|=r),o&=~f}}function Xs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function ro(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function $s(){var i=se.p;return i!==0?i:(i=window.event,i===void 0?32:pT(i.type))}function Qu(i,r){var o=se.p;try{return se.p=i,r()}finally{se.p=o}}var bt=Math.random().toString(36).slice(2),Qt="__reactFiber$"+bt,Lt="__reactProps$"+bt,Zn="__reactContainer$"+bt,Hl="__reactEvents$"+bt,am="__reactListeners$"+bt,Ws="__reactHandles$"+bt,Yu="__reactResources$"+bt,Jr="__reactMarker$"+bt;function Zs(i){delete i[Qt],delete i[Lt],delete i[Hl],delete i[am],delete i[Ws]}function ls(i){var r=i[Qt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Zn]||o[Qt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=eT(i);i!==null;){if(o=i[Qt])return o;i=eT(i)}return r}i=o,o=i.parentNode}return null}function Ii(i){if(i=i[Qt]||i[Zn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Ni(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function An(i){var r=i[Yu];return r||(r=i[Yu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nt(i){i[Jr]=!0}var Gl=new Set,ao={};function pi(i,r){cs(i,r),cs(i+"Capture",r)}function cs(i,r){for(ao[i]=r,i=0;i<r.length;i++)Gl.add(r[i])}var Ku=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xu={},ea={};function $u(i){return ns.call(ea,i)?!0:ns.call(Xu,i)?!1:Ku.test(i)?ea[i]=!0:(Xu[i]=!0,!1)}function Js(i,r,o){if($u(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Di(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function un(i,r,o,c){if(c===null)i.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+c)}}var ta,Wu;function us(i){if(ta===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ta=r&&r[1]||"",Wu=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ta+i+Wu}var oo=!1;function lo(i,r){if(!i||oo)return"";oo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var H=G}Reflect.construct(i,[],J)}else{try{J.call()}catch(G){H=G}i.call(J.prototype)}}else{try{throw Error()}catch(G){H=G}(J=i())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=c.DetermineComponentFrameRoot(),T=p[0],S=p[1];if(T&&S){var k=T.split(`
`),q=S.split(`
`);for(f=c=0;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(c===k.length||f===q.length)for(c=k.length-1,f=q.length-1;1<=c&&0<=f&&k[c]!==q[f];)f--;for(;1<=c&&0<=f;c--,f--)if(k[c]!==q[f]){if(c!==1||f!==1)do if(c--,f--,0>f||k[c]!==q[f]){var X=`
`+k[c].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=c&&0<=f);break}}}finally{oo=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?us(o):""}function Ql(i){switch(i.tag){case 26:case 27:case 5:return us(i.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 15:return lo(i.type,!1);case 11:return lo(i.type.render,!1);case 1:return lo(i.type,!0);case 31:return us("Activity");default:return""}}function co(i){try{var r="";do r+=Ql(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Yl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function om(i){var r=Yl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),c=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function uo(i){i._valueTracker||(i._valueTracker=om(i))}function Kl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return i&&(c=Yl(i)?i.checked?"true":"false":i.value),i=c,i!==o?(r.setValue(i),!0):!1}function na(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var lm=/[\n"\\]/g;function jt(i){return i.replace(lm,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Fn(i,r,o,c,f,p,T,S){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),r!=null?T==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Cn(r)):i.value!==""+Cn(r)&&(i.value=""+Cn(r)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),r!=null?er(i,T,Cn(r)):o!=null?er(i,T,Cn(o)):c!=null&&i.removeAttribute("value"),f==null&&p!=null&&(i.defaultChecked=!!p),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+Cn(S):i.removeAttribute("name")}function ia(i,r,o,c,f,p,T,S){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(i.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+Cn(o):"",r=r!=null?""+Cn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=S?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function er(i,r,o){r==="number"&&na(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function hs(i,r,o,c){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&c&&(i[o].defaultSelected=!0)}else{for(o=""+Cn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function lt(i,r,o){if(r!=null&&(r=""+Cn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+Cn(o):""}function sa(i,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(s(92));if(Me(c)){if(1<c.length)throw Error(s(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=Cn(r),i.defaultValue=o,c=i.textContent,c===o&&c!==""&&c!==null&&(i.value=c)}function Jn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var ra=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zu(i,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,o):typeof o!="number"||o===0||ra.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Xl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in r)c=r[f],r.hasOwnProperty(f)&&o[f]!==c&&Zu(i,f,c)}else for(var p in r)r.hasOwnProperty(p)&&Zu(i,p,r[p])}function $l(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ho(i){return um.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var fs=null;function ei(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ds=null,ms=null;function Wl(i){var r=Ii(i);if(r&&(i=r.stateNode)){var o=i[Lt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Fn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+jt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==i&&c.form===i.form){var f=c[Lt]||null;if(!f)throw Error(s(90));Fn(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===i.form&&Kl(c)}break e;case"textarea":lt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&hs(i,!!o.multiple,r,!1)}}}var ki=!1;function Ju(i,r,o){if(ki)return i(r,o);ki=!0;try{var c=i(r);return c}finally{if(ki=!1,(ds!==null||ms!==null)&&(Qh(),ds&&(r=ds,i=ms,ms=ds=null,Wl(r),i)))for(r=0;r<i.length;r++)Wl(i[r])}}function aa(i,r){var o=i.stateNode;if(o===null)return null;var c=o[Lt]||null;if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=!1;if(gi)try{var oa={};Object.defineProperty(oa,"passive",{get:function(){ti=!0}}),window.addEventListener("test",oa,oa),window.removeEventListener("test",oa,oa)}catch{ti=!1}var Mi=null,tr=null,ps=null;function Zl(){if(ps)return ps;var i,r=tr,o=r.length,c,f="value"in Mi?Mi.value:Mi.textContent,p=f.length;for(i=0;i<o&&r[i]===f[i];i++);var T=o-i;for(c=1;c<=T&&r[o-c]===f[p-c];c++);return ps=f.slice(i,1<c?1-c:void 0)}function Oi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Pi(){return!0}function Jl(){return!1}function Zt(i){function r(o,c,f,p,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Pi:Jl,this.isPropagationStopped=Jl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),r}var tt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Zt(tt),la=y({},tt,{view:0,detail:0}),eh=Zt(la),mo,po,Vi,ca=y({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Vi&&(Vi&&i.type==="mousemove"?(mo=i.screenX-Vi.screenX,po=i.screenY-Vi.screenY):po=mo=0,Vi=i),mo)},movementY:function(i){return"movementY"in i?i.movementY:po}}),ni=Zt(ca),th=y({},ca,{dataTransfer:0}),hm=Zt(th),ua=y({},la,{relatedTarget:0}),go=Zt(ua),ec=y({},tt,{animationName:0,elapsedTime:0,pseudoElement:0}),_o=Zt(ec),nh=y({},tt,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),yo=Zt(nh),fm=y({},tt,{data:0}),tc=Zt(fm),ha={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nc(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=sh[i])?!!r[i]:!1}function fa(){return nc}var rh=y({},la,{key:function(i){if(i.key){var r=ha[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Oi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ih[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(i){return i.type==="keypress"?Oi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Oi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),vo=Zt(rh),ah=y({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=Zt(ah),gs=y({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),oh=Zt(gs),lh=y({},tt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=Zt(lh),uh=y({},ca,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Eo=Zt(uh),xn=y({},tt,{newState:0,oldState:0}),hh=Zt(xn),fh=[9,13,27,32],Li=gi&&"CompositionEvent"in window,h=null;gi&&"documentMode"in document&&(h=document.documentMode);var _=gi&&"TextEvent"in window&&!h,v=gi&&(!Li||h&&8<h&&11>=h),A=" ",F=!1;function Q(i,r){switch(i){case"keyup":return fh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ye=!1;function Yt(i,r){switch(i){case"compositionend":return oe(r);case"keypress":return r.which!==32?null:(F=!0,A);case"textInput":return i=r.data,i===A&&F?null:i;default:return null}}function Ke(i,r){if(Ye)return i==="compositionend"||!Li&&Q(i,r)?(i=Zl(),ps=tr=Mi=null,Ye=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Jt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Jt[i.type]:r==="textarea"}function _s(i,r,o,c){ds?ms?ms.push(c):ms=[c]:ds=c,r=Zh(r,"onChange"),0<r.length&&(o=new fo("onChange","change",null,o,c),i.push({event:o,listeners:r}))}var hn=null,ji=null;function sc(i){HE(i,0)}function dh(i){var r=Ni(i);if(Kl(r))return i}function hv(i,r){if(i==="change")return r}var fv=!1;if(gi){var dm;if(gi){var mm="oninput"in document;if(!mm){var dv=document.createElement("div");dv.setAttribute("oninput","return;"),mm=typeof dv.oninput=="function"}dm=mm}else dm=!1;fv=dm&&(!document.documentMode||9<document.documentMode)}function mv(){hn&&(hn.detachEvent("onpropertychange",pv),ji=hn=null)}function pv(i){if(i.propertyName==="value"&&dh(ji)){var r=[];_s(r,ji,i,ei(i)),Ju(sc,r)}}function PC(i,r,o){i==="focusin"?(mv(),hn=r,ji=o,hn.attachEvent("onpropertychange",pv)):i==="focusout"&&mv()}function VC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return dh(ji)}function LC(i,r){if(i==="click")return dh(r)}function jC(i,r){if(i==="input"||i==="change")return dh(r)}function UC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Bn=typeof Object.is=="function"?Object.is:UC;function rc(i,r){if(Bn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!ns.call(r,f)||!Bn(i[f],r[f]))return!1}return!0}function gv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function _v(i,r){var o=gv(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=r&&c>=r)return{node:o,offset:r-i};i=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=gv(o)}}function yv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?yv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function vv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=na(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=na(i.document)}return r}function pm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var zC=gi&&"documentMode"in document&&11>=document.documentMode,To=null,gm=null,ac=null,_m=!1;function Ev(i,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_m||To==null||To!==na(c)||(c=To,"selectionStart"in c&&pm(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ac&&rc(ac,c)||(ac=c,c=Zh(gm,"onSelect"),0<c.length&&(r=new fo("onSelect","select",null,r,o),i.push({event:r,listeners:c}),r.target=To)))}function da(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var bo={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},ym={},Tv={};gi&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function ma(i){if(ym[i])return ym[i];if(!bo[i])return i;var r=bo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Tv)return ym[i]=r[o];return i}var bv=ma("animationend"),wv=ma("animationiteration"),Sv=ma("animationstart"),FC=ma("transitionrun"),BC=ma("transitionstart"),qC=ma("transitioncancel"),Av=ma("transitionend"),Cv=new Map,vm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vm.push("scrollEnd");function _i(i,r){Cv.set(i,r),pi(r,[i])}var xv=new WeakMap;function ii(i,r){if(typeof i=="object"&&i!==null){var o=xv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:co(r)},xv.set(i,r),r)}return{value:i,source:r,stack:co(r)}}var si=[],wo=0,Em=0;function mh(){for(var i=wo,r=Em=wo=0;r<i;){var o=si[r];si[r++]=null;var c=si[r];si[r++]=null;var f=si[r];si[r++]=null;var p=si[r];if(si[r++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}p!==0&&Rv(o,f,p)}}function ph(i,r,o,c){si[wo++]=i,si[wo++]=r,si[wo++]=o,si[wo++]=c,Em|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function Tm(i,r,o,c){return ph(i,r,o,c),gh(i)}function So(i,r){return ph(i,null,null,r),gh(i)}function Rv(i,r,o){i.lanes|=o;var c=i.alternate;c!==null&&(c.lanes|=o);for(var f=!1,p=i.return;p!==null;)p.childLanes|=o,c=p.alternate,c!==null&&(c.childLanes|=o),p.tag===22&&(i=p.stateNode,i===null||i._visibility&1||(f=!0)),i=p,p=p.return;return i.tag===3?(p=i.stateNode,f&&r!==null&&(f=31-ft(o),i=p.hiddenUpdates,c=i[f],c===null?i[f]=[r]:c.push(r),r.lane=o|536870912),p):null}function gh(i){if(50<Dc)throw Dc=0,xp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ao={};function HC(i,r,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(i,r,o,c){return new HC(i,r,o,c)}function bm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ys(i,r){var o=i.alternate;return o===null?(o=qn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Iv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function _h(i,r,o,c,f,p){var T=0;if(c=i,typeof i=="function")bm(i)&&(T=1);else if(typeof i=="string")T=Qx(i,o,Te.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case I:return i=qn(31,o,r,f),i.elementType=I,i.lanes=p,i;case M:return pa(o.children,f,p,r);case j:T=8,f|=24;break;case z:return i=qn(12,o,r,f|2),i.elementType=z,i.lanes=p,i;case ae:return i=qn(13,o,r,f),i.elementType=ae,i.lanes=p,i;case fe:return i=qn(19,o,r,f),i.elementType=fe,i.lanes=p,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ie:case re:T=10;break e;case te:T=9;break e;case _e:T=11;break e;case N:T=14;break e;case x:T=16,c=null;break e}T=29,o=Error(s(130,i===null?"null":typeof i,"")),c=null}return r=qn(T,o,r,f),r.elementType=i,r.type=c,r.lanes=p,r}function pa(i,r,o,c){return i=qn(7,i,c,r),i.lanes=o,i}function wm(i,r,o){return i=qn(6,i,null,r),i.lanes=o,i}function Sm(i,r,o){return r=qn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Co=[],xo=0,yh=null,vh=0,ri=[],ai=0,ga=null,vs=1,Es="";function _a(i,r){Co[xo++]=vh,Co[xo++]=yh,yh=i,vh=r}function Nv(i,r,o){ri[ai++]=vs,ri[ai++]=Es,ri[ai++]=ga,ga=i;var c=vs;i=Es;var f=32-ft(c)-1;c&=~(1<<f),o+=1;var p=32-ft(r)+f;if(30<p){var T=f-f%5;p=(c&(1<<T)-1).toString(32),c>>=T,f-=T,vs=1<<32-ft(r)+f|o<<f|c,Es=p+i}else vs=1<<p|o<<f|c,Es=i}function Am(i){i.return!==null&&(_a(i,1),Nv(i,1,0))}function Cm(i){for(;i===yh;)yh=Co[--xo],Co[xo]=null,vh=Co[--xo],Co[xo]=null;for(;i===ga;)ga=ri[--ai],ri[ai]=null,Es=ri[--ai],ri[ai]=null,vs=ri[--ai],ri[ai]=null}var Rn=null,Ct=null,Je=!1,ya=null,Ui=!1,xm=Error(s(519));function va(i){var r=Error(s(418,""));throw cc(ii(r,i)),xm}function Dv(i){var r=i.stateNode,o=i.type,c=i.memoizedProps;switch(r[Qt]=i,r[Lt]=c,o){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(o=0;o<Mc.length;o++)Be(Mc[o],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Be("invalid",r),ia(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),uo(r);break;case"select":Be("invalid",r);break;case"textarea":Be("invalid",r),sa(r,c.value,c.defaultValue,c.children),uo(r)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||KE(r.textContent,o)?(c.popover!=null&&(Be("beforetoggle",r),Be("toggle",r)),c.onScroll!=null&&Be("scroll",r),c.onScrollEnd!=null&&Be("scrollend",r),c.onClick!=null&&(r.onclick=Jh),r=!0):r=!1,r||va(i)}function kv(i){for(Rn=i.return;Rn;)switch(Rn.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Rn=Rn.return}}function oc(i){if(i!==Rn)return!1;if(!Je)return kv(i),Je=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||qp(i.type,i.memoizedProps)),o=!o),o&&Ct&&va(i),kv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){Ct=vi(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}Ct=null}}else r===27?(r=Ct,_r(i.type)?(i=Yp,Yp=null,Ct=i):Ct=r):Ct=Rn?vi(i.stateNode.nextSibling):null;return!0}function lc(){Ct=Rn=null,Je=!1}function Mv(){var i=ya;return i!==null&&(Pn===null?Pn=i:Pn.push.apply(Pn,i),ya=null),i}function cc(i){ya===null?ya=[i]:ya.push(i)}var Rm=$(null),Ea=null,Ts=null;function nr(i,r,o){ne(Rm,r._currentValue),r._currentValue=o}function bs(i){i._currentValue=Rm.current,ce(Rm)}function Im(i,r,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===o)break;i=i.return}}function Nm(i,r,o,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var p=f.dependencies;if(p!==null){var T=f.child;p=p.firstContext;e:for(;p!==null;){var S=p;p=f;for(var k=0;k<r.length;k++)if(S.context===r[k]){p.lanes|=o,S=p.alternate,S!==null&&(S.lanes|=o),Im(p.return,o,i),c||(T=null);break e}p=S.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(s(341));T.lanes|=o,p=T.alternate,p!==null&&(p.lanes|=o),Im(T,o,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function uc(i,r,o,c){i=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(s(387));if(T=T.memoizedProps,T!==null){var S=f.type;Bn(f.pendingProps.value,T.value)||(i!==null?i.push(S):i=[S])}}else if(f===It.current){if(T=f.alternate,T===null)throw Error(s(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Uc):i=[Uc])}f=f.return}i!==null&&Nm(r,i,o,c),r.flags|=262144}function Eh(i){for(i=i.firstContext;i!==null;){if(!Bn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ta(i){Ea=i,Ts=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function yn(i){return Ov(Ea,i)}function Th(i,r){return Ea===null&&Ta(i),Ov(i,r)}function Ov(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ts===null){if(i===null)throw Error(s(308));Ts=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Ts=Ts.next=r;return o}var GC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},QC=n.unstable_scheduleCallback,YC=n.unstable_NormalPriority,Xt={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dm(){return{controller:new GC,data:new Map,refCount:0}}function hc(i){i.refCount--,i.refCount===0&&QC(YC,function(){i.controller.abort()})}var fc=null,km=0,Ro=0,Io=null;function KC(i,r){if(fc===null){var o=fc=[];km=0,Ro=Op(),Io={status:"pending",value:void 0,then:function(c){o.push(c)}}}return km++,r.then(Pv,Pv),r}function Pv(){if(--km===0&&fc!==null){Io!==null&&(Io.status="fulfilled");var i=fc;fc=null,Ro=0,Io=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function XC(i,r){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var Vv=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&KC(i,r),Vv!==null&&Vv(i,r)};var ba=$(null);function Mm(){var i=ba.current;return i!==null?i:pt.pooledCache}function bh(i,r){r===null?ne(ba,ba.current):ne(ba,r.pool)}function Lv(){var i=Mm();return i===null?null:{parent:Xt._currentValue,pool:i}}var dc=Error(s(460)),jv=Error(s(474)),wh=Error(s(542)),Om={then:function(){}};function Uv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Sh(){}function zv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Sh,Sh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i;default:if(typeof r.status=="string")r.then(Sh,Sh);else{if(i=pt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=c}},function(c){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i}throw mc=r,dc}}var mc=null;function Fv(){if(mc===null)throw Error(s(459));var i=mc;return mc=null,i}function Bv(i){if(i===dc||i===wh)throw Error(s(483))}var ir=!1;function Pm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function sr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function rr(i,r,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(it&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,r=gh(i),Rv(i,null,o),r}return ph(i,c,r,o),gh(i)}function pc(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,ql(i,o)}}function Lm(i,r){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=T:p=p.next=T,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,callbacks:c.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var jm=!1;function gc(){if(jm){var i=Io;if(i!==null)throw i}}function _c(i,r,o,c){jm=!1;var f=i.updateQueue;ir=!1;var p=f.firstBaseUpdate,T=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var k=S,q=k.next;k.next=null,T===null?p=q:T.next=q,T=k;var X=i.alternate;X!==null&&(X=X.updateQueue,S=X.lastBaseUpdate,S!==T&&(S===null?X.firstBaseUpdate=q:S.next=q,X.lastBaseUpdate=k))}if(p!==null){var J=f.baseState;T=0,X=q=k=null,S=p;do{var H=S.lane&-536870913,G=H!==S.lane;if(G?(Xe&H)===H:(c&H)===H){H!==0&&H===Ro&&(jm=!0),X!==null&&(X=X.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var xe=i,we=S;H=r;var ht=o;switch(we.tag){case 1:if(xe=we.payload,typeof xe=="function"){J=xe.call(ht,J,H);break e}J=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=we.payload,H=typeof xe=="function"?xe.call(ht,J,H):xe,H==null)break e;J=y({},J,H);break e;case 2:ir=!0}}H=S.callback,H!==null&&(i.flags|=64,G&&(i.flags|=8192),G=f.callbacks,G===null?f.callbacks=[H]:G.push(H))}else G={lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},X===null?(q=X=G,k=J):X=X.next=G,T|=H;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;G=S,S=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);X===null&&(k=J),f.baseState=k,f.firstBaseUpdate=q,f.lastBaseUpdate=X,p===null&&(f.shared.lanes=0),dr|=T,i.lanes=T,i.memoizedState=J}}function qv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Hv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)qv(o[i],r)}var No=$(null),Ah=$(0);function Gv(i,r){i=Is,ne(Ah,i),ne(No,r),Is=i|r.baseLanes}function Um(){ne(Ah,Is),ne(No,No.current)}function zm(){Is=Ah.current,ce(No),ce(Ah)}var ar=0,Ve=null,ct=null,Ut=null,Ch=!1,Do=!1,wa=!1,xh=0,yc=0,ko=null,$C=0;function Dt(){throw Error(s(321))}function Fm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Bn(i[o],r[o]))return!1;return!0}function Bm(i,r,o,c,f,p){return ar=p,Ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?R0:I0,wa=!1,p=o(c,f),wa=!1,Do&&(p=Yv(r,o,c,f)),Qv(i),p}function Qv(i){Y.H=Mh;var r=ct!==null&&ct.next!==null;if(ar=0,Ut=ct=Ve=null,Ch=!1,yc=0,ko=null,r)throw Error(s(300));i===null||en||(i=i.dependencies,i!==null&&Eh(i)&&(en=!0))}function Yv(i,r,o,c){Ve=i;var f=0;do{if(Do&&(ko=null),yc=0,Do=!1,25<=f)throw Error(s(301));if(f+=1,Ut=ct=null,i.updateQueue!=null){var p=i.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Y.H=ix,p=r(o,c)}while(Do);return p}function WC(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?vc(r):r,i=i.useState()[0],(ct!==null?ct.memoizedState:null)!==i&&(Ve.flags|=1024),r}function qm(){var i=xh!==0;return xh=0,i}function Hm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Gm(i){if(Ch){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ch=!1}ar=0,Ut=ct=Ve=null,Do=!1,yc=xh=0,ko=null}function Mn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?Ve.memoizedState=Ut=i:Ut=Ut.next=i,Ut}function zt(){if(ct===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=ct.next;var r=Ut===null?Ve.memoizedState:Ut.next;if(r!==null)Ut=r,ct=i;else{if(i===null)throw Ve.alternate===null?Error(s(467)):Error(s(310));ct=i,i={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Ut===null?Ve.memoizedState=Ut=i:Ut=Ut.next=i}return Ut}function Qm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vc(i){var r=yc;return yc+=1,ko===null&&(ko=[]),i=zv(ko,i,r),r=Ve,(Ut===null?r.memoizedState:Ut.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?R0:I0),i}function Rh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return vc(i);if(i.$$typeof===re)return yn(i)}throw Error(s(438,String(i)))}function Ym(i){var r=null,o=Ve.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Qm(),Ve.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),c=0;c<i;c++)o[c]=P;return r.index++,o}function ws(i,r){return typeof r=="function"?r(i):r}function Ih(i){var r=zt();return Km(r,ct,i)}function Km(i,r,o){var c=i.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=o;var f=i.baseQueue,p=c.pending;if(p!==null){if(f!==null){var T=f.next;f.next=p.next,p.next=T}r.baseQueue=f=p,c.pending=null}if(p=i.baseState,f===null)i.memoizedState=p;else{r=f.next;var S=T=null,k=null,q=r,X=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(Xe&J)===J:(ar&J)===J){var H=q.revertLane;if(H===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===Ro&&(X=!0);else if((ar&H)===H){q=q.next,H===Ro&&(X=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},k===null?(S=k=J,T=p):k=k.next=J,Ve.lanes|=H,dr|=H;J=q.action,wa&&o(p,J),p=q.hasEagerState?q.eagerState:o(p,J)}else H={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},k===null?(S=k=H,T=p):k=k.next=H,Ve.lanes|=J,dr|=J;q=q.next}while(q!==null&&q!==r);if(k===null?T=p:k.next=S,!Bn(p,i.memoizedState)&&(en=!0,X&&(o=Io,o!==null)))throw o;i.memoizedState=p,i.baseState=T,i.baseQueue=k,c.lastRenderedState=p}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Xm(i){var r=zt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var c=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do p=i(p,T.action),T=T.next;while(T!==f);Bn(p,r.memoizedState)||(en=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,c]}function Kv(i,r,o){var c=Ve,f=zt(),p=Je;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var T=!Bn((ct||f).memoizedState,o);T&&(f.memoizedState=o,en=!0),f=f.queue;var S=Wv.bind(null,c,f,i);if(Ec(2048,8,S,[i]),f.getSnapshot!==r||T||Ut!==null&&Ut.memoizedState.tag&1){if(c.flags|=2048,Mo(9,Nh(),$v.bind(null,c,f,o,r),null),pt===null)throw Error(s(349));p||(ar&124)!==0||Xv(c,r,o)}return o}function Xv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ve.updateQueue,r===null?(r=Qm(),Ve.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function $v(i,r,o,c){r.value=o,r.getSnapshot=c,Zv(r)&&Jv(i)}function Wv(i,r,o){return o(function(){Zv(r)&&Jv(i)})}function Zv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Bn(i,o)}catch{return!0}}function Jv(i){var r=So(i,2);r!==null&&Kn(r,i,2)}function $m(i){var r=Mn();if(typeof i=="function"){var o=i;if(i=o(),wa){ot(!0);try{o()}finally{ot(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:i},r}function e0(i,r,o,c){return i.baseState=o,Km(i,ct,typeof c=="function"?c:ws)}function ZC(i,r,o,c,f){if(kh(i))throw Error(s(485));if(i=r.action,i!==null){var p={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){p.listeners.push(T)}};Y.T!==null?o(!0):p.isTransition=!1,c(p),o=r.pending,o===null?(p.next=r.pending=p,t0(r,p)):(p.next=o.next,r.pending=o.next=p)}}function t0(i,r){var o=r.action,c=r.payload,f=i.state;if(r.isTransition){var p=Y.T,T={};Y.T=T;try{var S=o(f,c),k=Y.S;k!==null&&k(T,S),n0(i,r,S)}catch(q){Wm(i,r,q)}finally{Y.T=p}}else try{p=o(f,c),n0(i,r,p)}catch(q){Wm(i,r,q)}}function n0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){i0(i,r,c)},function(c){return Wm(i,r,c)}):i0(i,r,o)}function i0(i,r,o){r.status="fulfilled",r.value=o,s0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,t0(i,o)))}function Wm(i,r,o){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,s0(r),r=r.next;while(r!==c)}i.action=null}function s0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function r0(i,r){return r}function a0(i,r){if(Je){var o=pt.formState;if(o!==null){e:{var c=Ve;if(Je){if(Ct){t:{for(var f=Ct,p=Ui;f.nodeType!==8;){if(!p){f=null;break t}if(f=vi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Ct=vi(f.nextSibling),c=f.data==="F!";break e}}va(c)}c=!1}c&&(r=o[0])}}return o=Mn(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:r},o.queue=c,o=A0.bind(null,Ve,c),c.dispatch=o,c=$m(!1),p=np.bind(null,Ve,!1,c.queue),c=Mn(),f={state:r,dispatch:null,action:i,pending:null},c.queue=f,o=ZC.bind(null,Ve,f,p,o),f.dispatch=o,c.memoizedState=i,[r,o,!1]}function o0(i){var r=zt();return l0(r,ct,i)}function l0(i,r,o){if(r=Km(i,r,r0)[0],i=Ih(ws)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=vc(r)}catch(T){throw T===dc?wh:T}else c=r;r=zt();var f=r.queue,p=f.dispatch;return o!==r.memoizedState&&(Ve.flags|=2048,Mo(9,Nh(),JC.bind(null,f,o),null)),[c,p,i]}function JC(i,r){i.action=r}function c0(i){var r=zt(),o=ct;if(o!==null)return l0(r,o,i);zt(),r=r.memoizedState,o=zt();var c=o.queue.dispatch;return o.memoizedState=i,[r,c,!1]}function Mo(i,r,o,c){return i={tag:i,create:o,deps:c,inst:r,next:null},r=Ve.updateQueue,r===null&&(r=Qm(),Ve.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,r.lastEffect=i),i}function Nh(){return{destroy:void 0,resource:void 0}}function u0(){return zt().memoizedState}function Dh(i,r,o,c){var f=Mn();c=c===void 0?null:c,Ve.flags|=i,f.memoizedState=Mo(1|r,Nh(),o,c)}function Ec(i,r,o,c){var f=zt();c=c===void 0?null:c;var p=f.memoizedState.inst;ct!==null&&c!==null&&Fm(c,ct.memoizedState.deps)?f.memoizedState=Mo(r,p,o,c):(Ve.flags|=i,f.memoizedState=Mo(1|r,p,o,c))}function h0(i,r){Dh(8390656,8,i,r)}function f0(i,r){Ec(2048,8,i,r)}function d0(i,r){return Ec(4,2,i,r)}function m0(i,r){return Ec(4,4,i,r)}function p0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function g0(i,r,o){o=o!=null?o.concat([i]):null,Ec(4,4,p0.bind(null,r,i),o)}function Zm(){}function _0(i,r){var o=zt();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&Fm(r,c[1])?c[0]:(o.memoizedState=[i,r],i)}function y0(i,r){var o=zt();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&Fm(r,c[1]))return c[0];if(c=i(),wa){ot(!0);try{i()}finally{ot(!1)}}return o.memoizedState=[c,r],c}function Jm(i,r,o){return o===void 0||(ar&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=TE(),Ve.lanes|=i,dr|=i,o)}function v0(i,r,o,c){return Bn(o,r)?o:No.current!==null?(i=Jm(i,o,c),Bn(i,r)||(en=!0),i):(ar&42)===0?(en=!0,i.memoizedState=o):(i=TE(),Ve.lanes|=i,dr|=i,r)}function E0(i,r,o,c,f){var p=se.p;se.p=p!==0&&8>p?p:8;var T=Y.T,S={};Y.T=S,np(i,!1,r,o);try{var k=f(),q=Y.S;if(q!==null&&q(S,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var X=XC(k,c);Tc(i,r,X,Yn(i))}else Tc(i,r,c,Yn(i))}catch(J){Tc(i,r,{then:function(){},status:"rejected",reason:J},Yn())}finally{se.p=p,Y.T=T}}function ex(){}function ep(i,r,o,c){if(i.tag!==5)throw Error(s(476));var f=T0(i).queue;E0(i,f,r,me,o===null?ex:function(){return b0(i),o(c)})}function T0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:me},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function b0(i){var r=T0(i).next.queue;Tc(i,r,{},Yn())}function tp(){return yn(Uc)}function w0(){return zt().memoizedState}function S0(){return zt().memoizedState}function tx(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Yn();i=sr(o);var c=rr(r,i,o);c!==null&&(Kn(c,r,o),pc(c,r,o)),r={cache:Dm()},i.payload=r;return}r=r.return}}function nx(i,r,o){var c=Yn();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},kh(i)?C0(r,o):(o=Tm(i,r,o,c),o!==null&&(Kn(o,i,c),x0(o,r,c)))}function A0(i,r,o){var c=Yn();Tc(i,r,o,c)}function Tc(i,r,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(kh(i))C0(r,f);else{var p=i.alternate;if(i.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var T=r.lastRenderedState,S=p(T,o);if(f.hasEagerState=!0,f.eagerState=S,Bn(S,T))return ph(i,r,f,0),pt===null&&mh(),!1}catch{}finally{}if(o=Tm(i,r,f,c),o!==null)return Kn(o,i,c),x0(o,r,c),!0}return!1}function np(i,r,o,c){if(c={lane:2,revertLane:Op(),action:c,hasEagerState:!1,eagerState:null,next:null},kh(i)){if(r)throw Error(s(479))}else r=Tm(i,o,c,2),r!==null&&Kn(r,i,2)}function kh(i){var r=i.alternate;return i===Ve||r!==null&&r===Ve}function C0(i,r){Do=Ch=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function x0(i,r,o){if((o&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,ql(i,o)}}var Mh={readContext:yn,use:Rh,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},R0={readContext:yn,use:Rh,useCallback:function(i,r){return Mn().memoizedState=[i,r===void 0?null:r],i},useContext:yn,useEffect:h0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Dh(4194308,4,p0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Dh(4194308,4,i,r)},useInsertionEffect:function(i,r){Dh(4,2,i,r)},useMemo:function(i,r){var o=Mn();r=r===void 0?null:r;var c=i();if(wa){ot(!0);try{i()}finally{ot(!1)}}return o.memoizedState=[c,r],c},useReducer:function(i,r,o){var c=Mn();if(o!==void 0){var f=o(r);if(wa){ot(!0);try{o(r)}finally{ot(!1)}}}else f=r;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=nx.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var r=Mn();return i={current:i},r.memoizedState=i},useState:function(i){i=$m(i);var r=i.queue,o=A0.bind(null,Ve,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Zm,useDeferredValue:function(i,r){var o=Mn();return Jm(o,i,r)},useTransition:function(){var i=$m(!1);return i=E0.bind(null,Ve,i.queue,!0,!1),Mn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var c=Ve,f=Mn();if(Je){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),pt===null)throw Error(s(349));(Xe&124)!==0||Xv(c,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,h0(Wv.bind(null,c,p,i),[i]),c.flags|=2048,Mo(9,Nh(),$v.bind(null,c,p,o,r),null),o},useId:function(){var i=Mn(),r=pt.identifierPrefix;if(Je){var o=Es,c=vs;o=(c&~(1<<32-ft(c)-1)).toString(32)+o,r="«"+r+"R"+o,o=xh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=$C++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:tp,useFormState:a0,useActionState:a0,useOptimistic:function(i){var r=Mn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=np.bind(null,Ve,!0,o),o.dispatch=r,[i,r]},useMemoCache:Ym,useCacheRefresh:function(){return Mn().memoizedState=tx.bind(null,Ve)}},I0={readContext:yn,use:Rh,useCallback:_0,useContext:yn,useEffect:f0,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:m0,useMemo:y0,useReducer:Ih,useRef:u0,useState:function(){return Ih(ws)},useDebugValue:Zm,useDeferredValue:function(i,r){var o=zt();return v0(o,ct.memoizedState,i,r)},useTransition:function(){var i=Ih(ws)[0],r=zt().memoizedState;return[typeof i=="boolean"?i:vc(i),r]},useSyncExternalStore:Kv,useId:w0,useHostTransitionStatus:tp,useFormState:o0,useActionState:o0,useOptimistic:function(i,r){var o=zt();return e0(o,ct,i,r)},useMemoCache:Ym,useCacheRefresh:S0},ix={readContext:yn,use:Rh,useCallback:_0,useContext:yn,useEffect:f0,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:m0,useMemo:y0,useReducer:Xm,useRef:u0,useState:function(){return Xm(ws)},useDebugValue:Zm,useDeferredValue:function(i,r){var o=zt();return ct===null?Jm(o,i,r):v0(o,ct.memoizedState,i,r)},useTransition:function(){var i=Xm(ws)[0],r=zt().memoizedState;return[typeof i=="boolean"?i:vc(i),r]},useSyncExternalStore:Kv,useId:w0,useHostTransitionStatus:tp,useFormState:c0,useActionState:c0,useOptimistic:function(i,r){var o=zt();return ct!==null?e0(o,ct,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Ym,useCacheRefresh:S0},Oo=null,bc=0;function Oh(i){var r=bc;return bc+=1,Oo===null&&(Oo=[]),zv(Oo,i,r)}function wc(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Ph(i,r){throw r.$$typeof===b?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function N0(i){var r=i._init;return r(i._payload)}function D0(i){function r(U,O){if(i){var B=U.deletions;B===null?(U.deletions=[O],U.flags|=16):B.push(O)}}function o(U,O){if(!i)return null;for(;O!==null;)r(U,O),O=O.sibling;return null}function c(U){for(var O=new Map;U!==null;)U.key!==null?O.set(U.key,U):O.set(U.index,U),U=U.sibling;return O}function f(U,O){return U=ys(U,O),U.index=0,U.sibling=null,U}function p(U,O,B){return U.index=B,i?(B=U.alternate,B!==null?(B=B.index,B<O?(U.flags|=67108866,O):B):(U.flags|=67108866,O)):(U.flags|=1048576,O)}function T(U){return i&&U.alternate===null&&(U.flags|=67108866),U}function S(U,O,B,Z){return O===null||O.tag!==6?(O=wm(B,U.mode,Z),O.return=U,O):(O=f(O,B),O.return=U,O)}function k(U,O,B,Z){var ye=B.type;return ye===M?X(U,O,B.props.children,Z,B.key):O!==null&&(O.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===x&&N0(ye)===O.type)?(O=f(O,B.props),wc(O,B),O.return=U,O):(O=_h(B.type,B.key,B.props,null,U.mode,Z),wc(O,B),O.return=U,O)}function q(U,O,B,Z){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=Sm(B,U.mode,Z),O.return=U,O):(O=f(O,B.children||[]),O.return=U,O)}function X(U,O,B,Z,ye){return O===null||O.tag!==7?(O=pa(B,U.mode,Z,ye),O.return=U,O):(O=f(O,B),O.return=U,O)}function J(U,O,B){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=wm(""+O,U.mode,B),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return B=_h(O.type,O.key,O.props,null,U.mode,B),wc(B,O),B.return=U,B;case C:return O=Sm(O,U.mode,B),O.return=U,O;case x:var Z=O._init;return O=Z(O._payload),J(U,O,B)}if(Me(O)||L(O))return O=pa(O,U.mode,B,null),O.return=U,O;if(typeof O.then=="function")return J(U,Oh(O),B);if(O.$$typeof===re)return J(U,Th(U,O),B);Ph(U,O)}return null}function H(U,O,B,Z){var ye=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ye!==null?null:S(U,O,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===ye?k(U,O,B,Z):null;case C:return B.key===ye?q(U,O,B,Z):null;case x:return ye=B._init,B=ye(B._payload),H(U,O,B,Z)}if(Me(B)||L(B))return ye!==null?null:X(U,O,B,Z,null);if(typeof B.then=="function")return H(U,O,Oh(B),Z);if(B.$$typeof===re)return H(U,O,Th(U,B),Z);Ph(U,B)}return null}function G(U,O,B,Z,ye){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return U=U.get(B)||null,S(O,U,""+Z,ye);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return U=U.get(Z.key===null?B:Z.key)||null,k(O,U,Z,ye);case C:return U=U.get(Z.key===null?B:Z.key)||null,q(O,U,Z,ye);case x:var je=Z._init;return Z=je(Z._payload),G(U,O,B,Z,ye)}if(Me(Z)||L(Z))return U=U.get(B)||null,X(O,U,Z,ye,null);if(typeof Z.then=="function")return G(U,O,B,Oh(Z),ye);if(Z.$$typeof===re)return G(U,O,B,Th(O,Z),ye);Ph(O,Z)}return null}function xe(U,O,B,Z){for(var ye=null,je=null,Ee=O,Se=O=0,nn=null;Ee!==null&&Se<B.length;Se++){Ee.index>Se?(nn=Ee,Ee=null):nn=Ee.sibling;var Ze=H(U,Ee,B[Se],Z);if(Ze===null){Ee===null&&(Ee=nn);break}i&&Ee&&Ze.alternate===null&&r(U,Ee),O=p(Ze,O,Se),je===null?ye=Ze:je.sibling=Ze,je=Ze,Ee=nn}if(Se===B.length)return o(U,Ee),Je&&_a(U,Se),ye;if(Ee===null){for(;Se<B.length;Se++)Ee=J(U,B[Se],Z),Ee!==null&&(O=p(Ee,O,Se),je===null?ye=Ee:je.sibling=Ee,je=Ee);return Je&&_a(U,Se),ye}for(Ee=c(Ee);Se<B.length;Se++)nn=G(Ee,U,Se,B[Se],Z),nn!==null&&(i&&nn.alternate!==null&&Ee.delete(nn.key===null?Se:nn.key),O=p(nn,O,Se),je===null?ye=nn:je.sibling=nn,je=nn);return i&&Ee.forEach(function(br){return r(U,br)}),Je&&_a(U,Se),ye}function we(U,O,B,Z){if(B==null)throw Error(s(151));for(var ye=null,je=null,Ee=O,Se=O=0,nn=null,Ze=B.next();Ee!==null&&!Ze.done;Se++,Ze=B.next()){Ee.index>Se?(nn=Ee,Ee=null):nn=Ee.sibling;var br=H(U,Ee,Ze.value,Z);if(br===null){Ee===null&&(Ee=nn);break}i&&Ee&&br.alternate===null&&r(U,Ee),O=p(br,O,Se),je===null?ye=br:je.sibling=br,je=br,Ee=nn}if(Ze.done)return o(U,Ee),Je&&_a(U,Se),ye;if(Ee===null){for(;!Ze.done;Se++,Ze=B.next())Ze=J(U,Ze.value,Z),Ze!==null&&(O=p(Ze,O,Se),je===null?ye=Ze:je.sibling=Ze,je=Ze);return Je&&_a(U,Se),ye}for(Ee=c(Ee);!Ze.done;Se++,Ze=B.next())Ze=G(Ee,U,Se,Ze.value,Z),Ze!==null&&(i&&Ze.alternate!==null&&Ee.delete(Ze.key===null?Se:Ze.key),O=p(Ze,O,Se),je===null?ye=Ze:je.sibling=Ze,je=Ze);return i&&Ee.forEach(function(sR){return r(U,sR)}),Je&&_a(U,Se),ye}function ht(U,O,B,Z){if(typeof B=="object"&&B!==null&&B.type===M&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var ye=B.key;O!==null;){if(O.key===ye){if(ye=B.type,ye===M){if(O.tag===7){o(U,O.sibling),Z=f(O,B.props.children),Z.return=U,U=Z;break e}}else if(O.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===x&&N0(ye)===O.type){o(U,O.sibling),Z=f(O,B.props),wc(Z,B),Z.return=U,U=Z;break e}o(U,O);break}else r(U,O);O=O.sibling}B.type===M?(Z=pa(B.props.children,U.mode,Z,B.key),Z.return=U,U=Z):(Z=_h(B.type,B.key,B.props,null,U.mode,Z),wc(Z,B),Z.return=U,U=Z)}return T(U);case C:e:{for(ye=B.key;O!==null;){if(O.key===ye)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){o(U,O.sibling),Z=f(O,B.children||[]),Z.return=U,U=Z;break e}else{o(U,O);break}else r(U,O);O=O.sibling}Z=Sm(B,U.mode,Z),Z.return=U,U=Z}return T(U);case x:return ye=B._init,B=ye(B._payload),ht(U,O,B,Z)}if(Me(B))return xe(U,O,B,Z);if(L(B)){if(ye=L(B),typeof ye!="function")throw Error(s(150));return B=ye.call(B),we(U,O,B,Z)}if(typeof B.then=="function")return ht(U,O,Oh(B),Z);if(B.$$typeof===re)return ht(U,O,Th(U,B),Z);Ph(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,O!==null&&O.tag===6?(o(U,O.sibling),Z=f(O,B),Z.return=U,U=Z):(o(U,O),Z=wm(B,U.mode,Z),Z.return=U,U=Z),T(U)):o(U,O)}return function(U,O,B,Z){try{bc=0;var ye=ht(U,O,B,Z);return Oo=null,ye}catch(Ee){if(Ee===dc||Ee===wh)throw Ee;var je=qn(29,Ee,null,U.mode);return je.lanes=Z,je.return=U,je}finally{}}}var Po=D0(!0),k0=D0(!1),oi=$(null),zi=null;function or(i){var r=i.alternate;ne($t,$t.current&1),ne(oi,i),zi===null&&(r===null||No.current!==null||r.memoizedState!==null)&&(zi=i)}function M0(i){if(i.tag===22){if(ne($t,$t.current),ne(oi,i),zi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(zi=i)}}else lr()}function lr(){ne($t,$t.current),ne(oi,oi.current)}function Ss(i){ce(oi),zi===i&&(zi=null),ce($t)}var $t=$(0);function Vh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Qp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function ip(i,r,o,c){r=i.memoizedState,o=o(c,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var sp={enqueueSetState:function(i,r,o){i=i._reactInternals;var c=Yn(),f=sr(c);f.payload=r,o!=null&&(f.callback=o),r=rr(i,f,c),r!==null&&(Kn(r,i,c),pc(r,i,c))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var c=Yn(),f=sr(c);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=rr(i,f,c),r!==null&&(Kn(r,i,c),pc(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Yn(),c=sr(o);c.tag=2,r!=null&&(c.callback=r),r=rr(i,c,o),r!==null&&(Kn(r,i,o),pc(r,i,o))}};function O0(i,r,o,c,f,p,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,p,T):r.prototype&&r.prototype.isPureReactComponent?!rc(o,c)||!rc(f,p):!0}function P0(i,r,o,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==i&&sp.enqueueReplaceState(r,r.state,null)}function Sa(i,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Lh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function V0(i){Lh(i)}function L0(i){console.error(i)}function j0(i){Lh(i)}function jh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function U0(i,r,o){try{var c=i.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function rp(i,r,o){return o=sr(o),o.tag=3,o.payload={element:null},o.callback=function(){jh(i,r)},o}function z0(i){return i=sr(i),i.tag=3,i}function F0(i,r,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=c.value;i.payload=function(){return f(p)},i.callback=function(){U0(r,o,c)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){U0(r,o,c),typeof f!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var S=c.stack;this.componentDidCatch(c.value,{componentStack:S!==null?S:""})})}function sx(i,r,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&uc(r,o,f,!0),o=oi.current,o!==null){switch(o.tag){case 13:return zi===null?Ip():o.alternate===null&&xt===0&&(xt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===Om?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),Dp(i,c,f)),!1;case 22:return o.flags|=65536,c===Om?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),Dp(i,c,f)),!1}throw Error(s(435,o.tag))}return Dp(i,c,f),Ip(),!1}if(Je)return r=oi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,c!==xm&&(i=Error(s(422),{cause:c}),cc(ii(i,o)))):(c!==xm&&(r=Error(s(423),{cause:c}),cc(ii(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=ii(c,o),f=rp(i.stateNode,c,f),Lm(i,f),xt!==4&&(xt=2)),!1;var p=Error(s(520),{cause:c});if(p=ii(p,o),Nc===null?Nc=[p]:Nc.push(p),xt!==4&&(xt=2),r===null)return!0;c=ii(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=rp(o.stateNode,c,i),Lm(o,i),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mr===null||!mr.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=z0(f),F0(f,i,o,c),Lm(o,f),!1}o=o.return}while(o!==null);return!1}var B0=Error(s(461)),en=!1;function fn(i,r,o,c){r.child=i===null?k0(r,null,o,c):Po(r,i.child,o,c)}function q0(i,r,o,c,f){o=o.render;var p=r.ref;if("ref"in c){var T={};for(var S in c)S!=="ref"&&(T[S]=c[S])}else T=c;return Ta(r),c=Bm(i,r,o,T,p,f),S=qm(),i!==null&&!en?(Hm(i,r,f),As(i,r,f)):(Je&&S&&Am(r),r.flags|=1,fn(i,r,c,f),r.child)}function H0(i,r,o,c,f){if(i===null){var p=o.type;return typeof p=="function"&&!bm(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,G0(i,r,p,c,f)):(i=_h(o.type,null,c,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(p=i.child,!dp(i,f)){var T=p.memoizedProps;if(o=o.compare,o=o!==null?o:rc,o(T,c)&&i.ref===r.ref)return As(i,r,f)}return r.flags|=1,i=ys(p,c),i.ref=r.ref,i.return=r,r.child=i}function G0(i,r,o,c,f){if(i!==null){var p=i.memoizedProps;if(rc(p,c)&&i.ref===r.ref)if(en=!1,r.pendingProps=c=p,dp(i,f))(i.flags&131072)!==0&&(en=!0);else return r.lanes=i.lanes,As(i,r,f)}return ap(i,r,o,c,f)}function Q0(i,r,o){var c=r.pendingProps,f=c.children,p=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=p!==null?p.baseLanes|o:o,i!==null){for(f=r.child=i.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~c}else r.childLanes=0,r.child=null;return Y0(i,r,c,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&bh(r,p!==null?p.cachePool:null),p!==null?Gv(r,p):Um(),M0(r);else return r.lanes=r.childLanes=536870912,Y0(i,r,p!==null?p.baseLanes|o:o,o)}else p!==null?(bh(r,p.cachePool),Gv(r,p),lr(),r.memoizedState=null):(i!==null&&bh(r,null),Um(),lr());return fn(i,r,f,o),r.child}function Y0(i,r,o,c){var f=Mm();return f=f===null?null:{parent:Xt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&bh(r,null),Um(),M0(r),i!==null&&uc(i,r,c,!0),null}function Uh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function ap(i,r,o,c,f){return Ta(r),o=Bm(i,r,o,c,void 0,f),c=qm(),i!==null&&!en?(Hm(i,r,f),As(i,r,f)):(Je&&c&&Am(r),r.flags|=1,fn(i,r,o,f),r.child)}function K0(i,r,o,c,f,p){return Ta(r),r.updateQueue=null,o=Yv(r,c,o,f),Qv(i),c=qm(),i!==null&&!en?(Hm(i,r,p),As(i,r,p)):(Je&&c&&Am(r),r.flags|=1,fn(i,r,o,p),r.child)}function X0(i,r,o,c,f){if(Ta(r),r.stateNode===null){var p=Ao,T=o.contextType;typeof T=="object"&&T!==null&&(p=yn(T)),p=new o(c,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=sp,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=c,p.state=r.memoizedState,p.refs={},Pm(r),T=o.contextType,p.context=typeof T=="object"&&T!==null?yn(T):Ao,p.state=r.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(ip(r,o,T,c),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(T=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),T!==p.state&&sp.enqueueReplaceState(p,p.state,null),_c(r,c,p,f),gc(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){p=r.stateNode;var S=r.memoizedProps,k=Sa(o,S);p.props=k;var q=p.context,X=o.contextType;T=Ao,typeof X=="object"&&X!==null&&(T=yn(X));var J=o.getDerivedStateFromProps;X=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,X||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S||q!==T)&&P0(r,p,c,T),ir=!1;var H=r.memoizedState;p.state=H,_c(r,c,p,f),gc(),q=r.memoizedState,S||H!==q||ir?(typeof J=="function"&&(ip(r,o,J,c),q=r.memoizedState),(k=ir||O0(r,o,k,c,H,q,T))?(X||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=q),p.props=c,p.state=q,p.context=T,c=k):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{p=r.stateNode,Vm(i,r),T=r.memoizedProps,X=Sa(o,T),p.props=X,J=r.pendingProps,H=p.context,q=o.contextType,k=Ao,typeof q=="object"&&q!==null&&(k=yn(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(T!==J||H!==k)&&P0(r,p,c,k),ir=!1,H=r.memoizedState,p.state=H,_c(r,c,p,f),gc();var G=r.memoizedState;T!==J||H!==G||ir||i!==null&&i.dependencies!==null&&Eh(i.dependencies)?(typeof S=="function"&&(ip(r,o,S,c),G=r.memoizedState),(X=ir||O0(r,o,X,c,H,G,k)||i!==null&&i.dependencies!==null&&Eh(i.dependencies))?(q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(c,G,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(c,G,k)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||T===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=G),p.props=c,p.state=G,p.context=k,c=X):(typeof p.componentDidUpdate!="function"||T===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),c=!1)}return p=c,Uh(i,r),c=(r.flags&128)!==0,p||c?(p=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,i!==null&&c?(r.child=Po(r,i.child,null,f),r.child=Po(r,null,o,f)):fn(i,r,o,f),r.memoizedState=p.state,i=r.child):i=As(i,r,f),i}function $0(i,r,o,c){return lc(),r.flags|=256,fn(i,r,o,c),r.child}var op={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lp(i){return{baseLanes:i,cachePool:Lv()}}function cp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=li),i}function W0(i,r,o){var c=r.pendingProps,f=!1,p=(r.flags&128)!==0,T;if((T=p)||(T=i!==null&&i.memoizedState===null?!1:($t.current&2)!==0),T&&(f=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,i===null){if(Je){if(f?or(r):lr(),Je){var S=Ct,k;if(k=S){e:{for(k=S,S=Ui;k.nodeType!==8;){if(!S){S=null;break e}if(k=vi(k.nextSibling),k===null){S=null;break e}}S=k}S!==null?(r.memoizedState={dehydrated:S,treeContext:ga!==null?{id:vs,overflow:Es}:null,retryLane:536870912,hydrationErrors:null},k=qn(18,null,null,0),k.stateNode=S,k.return=r,r.child=k,Rn=r,Ct=null,k=!0):k=!1}k||va(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Qp(S)?r.lanes=32:r.lanes=536870912,null;Ss(r)}return S=c.children,c=c.fallback,f?(lr(),f=r.mode,S=zh({mode:"hidden",children:S},f),c=pa(c,f,o,null),S.return=r,c.return=r,S.sibling=c,r.child=S,f=r.child,f.memoizedState=lp(o),f.childLanes=cp(i,T,o),r.memoizedState=op,c):(or(r),up(r,S))}if(k=i.memoizedState,k!==null&&(S=k.dehydrated,S!==null)){if(p)r.flags&256?(or(r),r.flags&=-257,r=hp(i,r,o)):r.memoizedState!==null?(lr(),r.child=i.child,r.flags|=128,r=null):(lr(),f=c.fallback,S=r.mode,c=zh({mode:"visible",children:c.children},S),f=pa(f,S,o,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,Po(r,i.child,null,o),c=r.child,c.memoizedState=lp(o),c.childLanes=cp(i,T,o),r.memoizedState=op,r=f);else if(or(r),Qp(S)){if(T=S.nextSibling&&S.nextSibling.dataset,T)var q=T.dgst;T=q,c=Error(s(419)),c.stack="",c.digest=T,cc({value:c,source:null,stack:null}),r=hp(i,r,o)}else if(en||uc(i,r,o,!1),T=(o&i.childLanes)!==0,en||T){if(T=pt,T!==null&&(c=o&-o,c=(c&42)!==0?1:Xs(c),c=(c&(T.suspendedLanes|o))!==0?0:c,c!==0&&c!==k.retryLane))throw k.retryLane=c,So(i,c),Kn(T,i,c),B0;S.data==="$?"||Ip(),r=hp(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=k.treeContext,Ct=vi(S.nextSibling),Rn=r,Je=!0,ya=null,Ui=!1,i!==null&&(ri[ai++]=vs,ri[ai++]=Es,ri[ai++]=ga,vs=i.id,Es=i.overflow,ga=r),r=up(r,c.children),r.flags|=4096);return r}return f?(lr(),f=c.fallback,S=r.mode,k=i.child,q=k.sibling,c=ys(k,{mode:"hidden",children:c.children}),c.subtreeFlags=k.subtreeFlags&65011712,q!==null?f=ys(q,f):(f=pa(f,S,o,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,S=i.child.memoizedState,S===null?S=lp(o):(k=S.cachePool,k!==null?(q=Xt._currentValue,k=k.parent!==q?{parent:q,pool:q}:k):k=Lv(),S={baseLanes:S.baseLanes|o,cachePool:k}),f.memoizedState=S,f.childLanes=cp(i,T,o),r.memoizedState=op,c):(or(r),o=i.child,i=o.sibling,o=ys(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,i!==null&&(T=r.deletions,T===null?(r.deletions=[i],r.flags|=16):T.push(i)),r.child=o,r.memoizedState=null,o)}function up(i,r){return r=zh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function zh(i,r){return i=qn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function hp(i,r,o){return Po(r,i.child,null,o),i=up(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Z0(i,r,o){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),Im(i.return,r,o)}function fp(i,r,o,c,f){var p=i.memoizedState;p===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=f)}function J0(i,r,o){var c=r.pendingProps,f=c.revealOrder,p=c.tail;if(fn(i,r,c.children,o),c=$t.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Z0(i,o,r);else if(i.tag===19)Z0(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(ne($t,c),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Vh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),fp(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Vh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}fp(r,!0,o,null,p);break;case"together":fp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function As(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),dr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(uc(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ys(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ys(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function dp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Eh(i)))}function rx(i,r,o){switch(r.tag){case 3:at(r,r.stateNode.containerInfo),nr(r,Xt,i.memoizedState.cache),lc();break;case 27:case 5:Ci(r);break;case 4:at(r,r.stateNode.containerInfo);break;case 10:nr(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(or(r),r.flags|=128,null):(o&r.child.childLanes)!==0?W0(i,r,o):(or(r),i=As(i,r,o),i!==null?i.sibling:null);or(r);break;case 19:var f=(i.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(uc(i,r,o,!1),c=(o&r.childLanes)!==0),f){if(c)return J0(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ne($t,$t.current),c)break;return null;case 22:case 23:return r.lanes=0,Q0(i,r,o);case 24:nr(r,Xt,i.memoizedState.cache)}return As(i,r,o)}function eE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)en=!0;else{if(!dp(i,o)&&(r.flags&128)===0)return en=!1,rx(i,r,o);en=(i.flags&131072)!==0}else en=!1,Je&&(r.flags&1048576)!==0&&Nv(r,vh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var c=r.elementType,f=c._init;if(c=f(c._payload),r.type=c,typeof c=="function")bm(c)?(i=Sa(c,i),r.tag=1,r=X0(null,r,c,i,o)):(r.tag=0,r=ap(null,r,c,i,o));else{if(c!=null){if(f=c.$$typeof,f===_e){r.tag=11,r=q0(null,r,c,i,o);break e}else if(f===N){r.tag=14,r=H0(null,r,c,i,o);break e}}throw r=he(c)||c,Error(s(306,r,""))}}return r;case 0:return ap(i,r,r.type,r.pendingProps,o);case 1:return c=r.type,f=Sa(c,r.pendingProps),X0(i,r,c,f,o);case 3:e:{if(at(r,r.stateNode.containerInfo),i===null)throw Error(s(387));c=r.pendingProps;var p=r.memoizedState;f=p.element,Vm(i,r),_c(r,c,null,o);var T=r.memoizedState;if(c=T.cache,nr(r,Xt,c),c!==p.cache&&Nm(r,[Xt],o,!0),gc(),c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=$0(i,r,c,o);break e}else if(c!==f){f=ii(Error(s(424)),r),cc(f),r=$0(i,r,c,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ct=vi(i.firstChild),Rn=r,Je=!0,ya=null,Ui=!0,o=k0(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(lc(),c===f){r=As(i,r,o);break e}fn(i,r,c,o)}r=r.child}return r;case 26:return Uh(i,r),i===null?(o=sT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Je||(o=r.type,i=r.pendingProps,c=ef(Ae.current).createElement(o),c[Qt]=r,c[Lt]=i,mn(c,o,i),Nt(c),r.stateNode=c):r.memoizedState=sT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ci(r),i===null&&Je&&(c=r.stateNode=tT(r.type,r.pendingProps,Ae.current),Rn=r,Ui=!0,f=Ct,_r(r.type)?(Yp=f,Ct=vi(c.firstChild)):Ct=f),fn(i,r,r.pendingProps.children,o),Uh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Je&&((f=c=Ct)&&(c=Mx(c,r.type,r.pendingProps,Ui),c!==null?(r.stateNode=c,Rn=r,Ct=vi(c.firstChild),Ui=!1,f=!0):f=!1),f||va(r)),Ci(r),f=r.type,p=r.pendingProps,T=i!==null?i.memoizedProps:null,c=p.children,qp(f,p)?c=null:T!==null&&qp(f,T)&&(r.flags|=32),r.memoizedState!==null&&(f=Bm(i,r,WC,null,null,o),Uc._currentValue=f),Uh(i,r),fn(i,r,c,o),r.child;case 6:return i===null&&Je&&((i=o=Ct)&&(o=Ox(o,r.pendingProps,Ui),o!==null?(r.stateNode=o,Rn=r,Ct=null,i=!0):i=!1),i||va(r)),null;case 13:return W0(i,r,o);case 4:return at(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=Po(r,null,c,o):fn(i,r,c,o),r.child;case 11:return q0(i,r,r.type,r.pendingProps,o);case 7:return fn(i,r,r.pendingProps,o),r.child;case 8:return fn(i,r,r.pendingProps.children,o),r.child;case 12:return fn(i,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,nr(r,r.type,c.value),fn(i,r,c.children,o),r.child;case 9:return f=r.type._context,c=r.pendingProps.children,Ta(r),f=yn(f),c=c(f),r.flags|=1,fn(i,r,c,o),r.child;case 14:return H0(i,r,r.type,r.pendingProps,o);case 15:return G0(i,r,r.type,r.pendingProps,o);case 19:return J0(i,r,o);case 31:return c=r.pendingProps,o=r.mode,c={mode:c.mode,children:c.children},i===null?(o=zh(c,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ys(i.child,c),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return Q0(i,r,o);case 24:return Ta(r),c=yn(Xt),i===null?(f=Mm(),f===null&&(f=pt,p=Dm(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:c,cache:f},Pm(r),nr(r,Xt,f)):((i.lanes&o)!==0&&(Vm(i,r),_c(r,null,null,o),gc()),f=i.memoizedState,p=r.memoizedState,f.parent!==c?(f={parent:c,cache:c},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),nr(r,Xt,c)):(c=p.cache,nr(r,Xt,c),c!==f.cache&&Nm(r,[Xt],o,!0))),fn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Cs(i){i.flags|=4}function tE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!cT(r)){if(r=oi.current,r!==null&&((Xe&4194048)===Xe?zi!==null:(Xe&62914560)!==Xe&&(Xe&536870912)===0||r!==zi))throw mc=Om,jv;i.flags|=8192}}function Fh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Fl():536870912,i.lanes|=r,Uo|=r)}function Sc(i,r){if(!Je)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function St(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=o,r}function ax(i,r,o){var c=r.pendingProps;switch(Cm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(r),null;case 1:return St(r),null;case 3:return o=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),bs(Xt),$n(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(oc(r)?Cs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mv())),St(r),null;case 26:return o=r.memoizedState,i===null?(Cs(r),o!==null?(St(r),tE(r,o)):(St(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Cs(r),St(r),tE(r,o)):(St(r),r.flags&=-16777217):(i.memoizedProps!==c&&Cs(r),St(r),r.flags&=-16777217),null;case 27:di(r),o=Ae.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Cs(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return St(r),null}i=Te.current,oc(r)?Dv(r):(i=tT(f,c,o),r.stateNode=i,Cs(r))}return St(r),null;case 5:if(di(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Cs(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return St(r),null}if(i=Te.current,oc(r))Dv(r);else{switch(f=ef(Ae.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}i[Qt]=r,i[Lt]=c;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(mn(i,o,c),o){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Cs(r)}}return St(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&Cs(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(s(166));if(i=Ae.current,oc(r)){if(i=r.stateNode,o=r.memoizedProps,c=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[Qt]=r,i=!!(i.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||KE(i.nodeValue,o)),i||va(r)}else i=ef(i).createTextNode(c),i[Qt]=r,r.stateNode=i}return St(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=oc(r),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Qt]=r}else lc(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;St(r),f=!1}else f=Mv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Ss(r),r):(Ss(r),null)}if(Ss(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=c!==null,i=i!==null&&i.memoizedState!==null,o){c=r.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var p=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(p=c.memoizedState.cachePool.pool),p!==f&&(c.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Fh(r,r.updateQueue),St(r),null;case 4:return $n(),i===null&&jp(r.stateNode.containerInfo),St(r),null;case 10:return bs(r.type),St(r),null;case 19:if(ce($t),f=r.memoizedState,f===null)return St(r),null;if(c=(r.flags&128)!==0,p=f.rendering,p===null)if(c)Sc(f,!1);else{if(xt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(p=Vh(i),p!==null){for(r.flags|=128,Sc(f,!1),i=p.updateQueue,r.updateQueue=i,Fh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Iv(o,i),o=o.sibling;return ne($t,$t.current&1|2),r.child}i=i.sibling}f.tail!==null&&kn()>Hh&&(r.flags|=128,c=!0,Sc(f,!1),r.lanes=4194304)}else{if(!c)if(i=Vh(p),i!==null){if(r.flags|=128,c=!0,i=i.updateQueue,r.updateQueue=i,Fh(r,i),Sc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Je)return St(r),null}else 2*kn()-f.renderingStartTime>Hh&&o!==536870912&&(r.flags|=128,c=!0,Sc(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(i=f.last,i!==null?i.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=kn(),r.sibling=null,i=$t.current,ne($t,c?i&1|2:i&1),r):(St(r),null);case 22:case 23:return Ss(r),zm(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(St(r),r.subtreeFlags&6&&(r.flags|=8192)):St(r),o=r.updateQueue,o!==null&&Fh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),i!==null&&ce(ba),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),bs(Xt),St(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function ox(i,r){switch(Cm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return bs(Xt),$n(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return di(r),null;case 13:if(Ss(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));lc()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ce($t),null;case 4:return $n(),null;case 10:return bs(r.type),null;case 22:case 23:return Ss(r),zm(),i!==null&&ce(ba),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return bs(Xt),null;case 25:return null;default:return null}}function nE(i,r){switch(Cm(r),r.tag){case 3:bs(Xt),$n();break;case 26:case 27:case 5:di(r);break;case 4:$n();break;case 13:Ss(r);break;case 19:ce($t);break;case 10:bs(r.type);break;case 22:case 23:Ss(r),zm(),i!==null&&ce(ba);break;case 24:bs(Xt)}}function Ac(i,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&i)===i){c=void 0;var p=o.create,T=o.inst;c=p(),T.destroy=c}o=o.next}while(o!==f)}}catch(S){dt(r,r.return,S)}}function cr(i,r,o){try{var c=r.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var p=f.next;c=p;do{if((c.tag&i)===i){var T=c.inst,S=T.destroy;if(S!==void 0){T.destroy=void 0,f=r;var k=o,q=S;try{q()}catch(X){dt(f,k,X)}}}c=c.next}while(c!==p)}}catch(X){dt(r,r.return,X)}}function iE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Hv(r,o)}catch(c){dt(i,i.return,c)}}}function sE(i,r,o){o.props=Sa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(c){dt(i,r,c)}}function Cc(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof o=="function"?i.refCleanup=o(c):o.current=c}}catch(f){dt(i,r,f)}}function Fi(i,r){var o=i.ref,c=i.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){dt(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){dt(i,r,f)}else o.current=null}function rE(i){var r=i.type,o=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){dt(i,i.return,f)}}function mp(i,r,o){try{var c=i.stateNode;Rx(c,i.type,o,r),c[Lt]=r}catch(f){dt(i,i.return,f)}}function aE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&_r(i.type)||i.tag===4}function pp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||aE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&_r(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function gp(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Jh));else if(c!==4&&(c===27&&_r(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(gp(i,r,o),i=i.sibling;i!==null;)gp(i,r,o),i=i.sibling}function Bh(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(c!==4&&(c===27&&_r(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Bh(i,r,o),i=i.sibling;i!==null;)Bh(i,r,o),i=i.sibling}function oE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var c=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);mn(r,c,o),r[Qt]=i,r[Lt]=o}catch(p){dt(i,i.return,p)}}var xs=!1,kt=!1,_p=!1,lE=typeof WeakSet=="function"?WeakSet:Set,tn=null;function lx(i,r){if(i=i.containerInfo,Fp=of,i=vv(i),pm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var T=0,S=-1,k=-1,q=0,X=0,J=i,H=null;t:for(;;){for(var G;J!==o||f!==0&&J.nodeType!==3||(S=T+f),J!==p||c!==0&&J.nodeType!==3||(k=T+c),J.nodeType===3&&(T+=J.nodeValue.length),(G=J.firstChild)!==null;)H=J,J=G;for(;;){if(J===i)break t;if(H===o&&++q===f&&(S=T),H===p&&++X===c&&(k=T),(G=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=G}o=S===-1||k===-1?null:{start:S,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Bp={focusedElem:i,selectionRange:o},of=!1,tn=r;tn!==null;)if(r=tn,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,tn=i;else for(;tn!==null;){switch(r=tn,p=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&p!==null){i=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,c=o.stateNode;try{var xe=Sa(o.type,f,o.elementType===o.type);i=c.getSnapshotBeforeUpdate(xe,p),c.__reactInternalSnapshotBeforeUpdate=i}catch(we){dt(o,o.return,we)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Gp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Gp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,tn=i;break}tn=r.return}}function cE(i,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:ur(i,o),c&4&&Ac(5,o);break;case 1:if(ur(i,o),c&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(T){dt(o,o.return,T)}else{var f=Sa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(T){dt(o,o.return,T)}}c&64&&iE(o),c&512&&Cc(o,o.return);break;case 3:if(ur(i,o),c&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Hv(i,r)}catch(T){dt(o,o.return,T)}}break;case 27:r===null&&c&4&&oE(o);case 26:case 5:ur(i,o),r===null&&c&4&&rE(o),c&512&&Cc(o,o.return);break;case 12:ur(i,o);break;case 13:ur(i,o),c&4&&fE(i,o),c&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=_x.bind(null,o),Px(i,o))));break;case 22:if(c=o.memoizedState!==null||xs,!c){r=r!==null&&r.memoizedState!==null||kt,f=xs;var p=kt;xs=c,(kt=r)&&!p?hr(i,o,(o.subtreeFlags&8772)!==0):ur(i,o),xs=f,kt=p}break;case 30:break;default:ur(i,o)}}function uE(i){var r=i.alternate;r!==null&&(i.alternate=null,uE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Zs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var wt=null,On=!1;function Rs(i,r,o){for(o=o.child;o!==null;)hE(i,r,o),o=o.sibling}function hE(i,r,o){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(ge,o)}catch{}switch(o.tag){case 26:kt||Fi(o,r),Rs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:kt||Fi(o,r);var c=wt,f=On;_r(o.type)&&(wt=o.stateNode,On=!1),Rs(i,r,o),Pc(o.stateNode),wt=c,On=f;break;case 5:kt||Fi(o,r);case 6:if(c=wt,f=On,wt=null,Rs(i,r,o),wt=c,On=f,wt!==null)if(On)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(o.stateNode)}catch(p){dt(o,r,p)}else try{wt.removeChild(o.stateNode)}catch(p){dt(o,r,p)}break;case 18:wt!==null&&(On?(i=wt,JE(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),qc(i)):JE(wt,o.stateNode));break;case 4:c=wt,f=On,wt=o.stateNode.containerInfo,On=!0,Rs(i,r,o),wt=c,On=f;break;case 0:case 11:case 14:case 15:kt||cr(2,o,r),kt||cr(4,o,r),Rs(i,r,o);break;case 1:kt||(Fi(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&sE(o,r,c)),Rs(i,r,o);break;case 21:Rs(i,r,o);break;case 22:kt=(c=kt)||o.memoizedState!==null,Rs(i,r,o),kt=c;break;default:Rs(i,r,o)}}function fE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{qc(i)}catch(o){dt(r,r.return,o)}}function cx(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new lE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new lE),r;default:throw Error(s(435,i.tag))}}function yp(i,r){var o=cx(i);r.forEach(function(c){var f=yx.bind(null,i,c);o.has(c)||(o.add(c),c.then(f,f))})}function Hn(i,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],p=i,T=r,S=T;e:for(;S!==null;){switch(S.tag){case 27:if(_r(S.type)){wt=S.stateNode,On=!1;break e}break;case 5:wt=S.stateNode,On=!1;break e;case 3:case 4:wt=S.stateNode.containerInfo,On=!0;break e}S=S.return}if(wt===null)throw Error(s(160));hE(p,T,f),wt=null,On=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)dE(r,i),r=r.sibling}var yi=null;function dE(i,r){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Hn(r,i),Gn(i),c&4&&(cr(3,i,i.return),Ac(3,i),cr(5,i,i.return));break;case 1:Hn(r,i),Gn(i),c&512&&(kt||o===null||Fi(o,o.return)),c&64&&xs&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=yi;if(Hn(r,i),Gn(i),c&512&&(kt||o===null||Fi(o,o.return)),c&4){var p=o!==null?o.memoizedState:null;if(c=i.memoizedState,o===null)if(c===null)if(i.stateNode===null){e:{c=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Jr]||p[Qt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(c),f.head.insertBefore(p,f.querySelector("head > title"))),mn(p,c,o),p[Qt]=i,Nt(p),c=p;break e;case"link":var T=oT("link","href",f).get(c+(o.href||""));if(T){for(var S=0;S<T.length;S++)if(p=T[S],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(S,1);break t}}p=f.createElement(c),mn(p,c,o),f.head.appendChild(p);break;case"meta":if(T=oT("meta","content",f).get(c+(o.content||""))){for(S=0;S<T.length;S++)if(p=T[S],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(S,1);break t}}p=f.createElement(c),mn(p,c,o),f.head.appendChild(p);break;default:throw Error(s(468,c))}p[Qt]=i,Nt(p),c=p}i.stateNode=c}else lT(f,i.type,i.stateNode);else i.stateNode=aT(f,c,i.memoizedProps);else p!==c?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,c===null?lT(f,i.type,i.stateNode):aT(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&mp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Hn(r,i),Gn(i),c&512&&(kt||o===null||Fi(o,o.return)),o!==null&&c&4&&mp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Hn(r,i),Gn(i),c&512&&(kt||o===null||Fi(o,o.return)),i.flags&32){f=i.stateNode;try{Jn(f,"")}catch(G){dt(i,i.return,G)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,mp(i,f,o!==null?o.memoizedProps:f)),c&1024&&(_p=!0);break;case 6:if(Hn(r,i),Gn(i),c&4){if(i.stateNode===null)throw Error(s(162));c=i.memoizedProps,o=i.stateNode;try{o.nodeValue=c}catch(G){dt(i,i.return,G)}}break;case 3:if(sf=null,f=yi,yi=tf(r.containerInfo),Hn(r,i),yi=f,Gn(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{qc(r.containerInfo)}catch(G){dt(i,i.return,G)}_p&&(_p=!1,mE(i));break;case 4:c=yi,yi=tf(i.stateNode.containerInfo),Hn(r,i),Gn(i),yi=c;break;case 12:Hn(r,i),Gn(i);break;case 13:Hn(r,i),Gn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Sp=kn()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,yp(i,c)));break;case 22:f=i.memoizedState!==null;var k=o!==null&&o.memoizedState!==null,q=xs,X=kt;if(xs=q||f,kt=X||k,Hn(r,i),kt=X,xs=q,Gn(i),c&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||k||xs||kt||Aa(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){k=o=r;try{if(p=k.stateNode,f)T=p.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{S=k.stateNode;var J=k.memoizedProps.style,H=J!=null&&J.hasOwnProperty("display")?J.display:null;S.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){dt(k,k.return,G)}}}else if(r.tag===6){if(o===null){k=r;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(G){dt(k,k.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,yp(i,o))));break;case 19:Hn(r,i),Gn(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,yp(i,c)));break;case 30:break;case 21:break;default:Hn(r,i),Gn(i)}}function Gn(i){var r=i.flags;if(r&2){try{for(var o,c=i.return;c!==null;){if(aE(c)){o=c;break}c=c.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,p=pp(i);Bh(i,p,f);break;case 5:var T=o.stateNode;o.flags&32&&(Jn(T,""),o.flags&=-33);var S=pp(i);Bh(i,S,T);break;case 3:case 4:var k=o.stateNode.containerInfo,q=pp(i);gp(i,q,k);break;default:throw Error(s(161))}}catch(X){dt(i,i.return,X)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function mE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;mE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function ur(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)cE(i,r.alternate,r),r=r.sibling}function Aa(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:cr(4,r,r.return),Aa(r);break;case 1:Fi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&sE(r,r.return,o),Aa(r);break;case 27:Pc(r.stateNode);case 26:case 5:Fi(r,r.return),Aa(r);break;case 22:r.memoizedState===null&&Aa(r);break;case 30:Aa(r);break;default:Aa(r)}i=i.sibling}}function hr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,f=i,p=r,T=p.flags;switch(p.tag){case 0:case 11:case 15:hr(f,p,o),Ac(4,p);break;case 1:if(hr(f,p,o),c=p,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){dt(c,c.return,q)}if(c=p,f=c.updateQueue,f!==null){var S=c.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)qv(k[f],S)}catch(q){dt(c,c.return,q)}}o&&T&64&&iE(p),Cc(p,p.return);break;case 27:oE(p);case 26:case 5:hr(f,p,o),o&&c===null&&T&4&&rE(p),Cc(p,p.return);break;case 12:hr(f,p,o);break;case 13:hr(f,p,o),o&&T&4&&fE(f,p);break;case 22:p.memoizedState===null&&hr(f,p,o),Cc(p,p.return);break;case 30:break;default:hr(f,p,o)}r=r.sibling}}function vp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&hc(o))}function Ep(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&hc(i))}function Bi(i,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)pE(i,r,o,c),r=r.sibling}function pE(i,r,o,c){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Bi(i,r,o,c),f&2048&&Ac(9,r);break;case 1:Bi(i,r,o,c);break;case 3:Bi(i,r,o,c),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&hc(i)));break;case 12:if(f&2048){Bi(i,r,o,c),i=r.stateNode;try{var p=r.memoizedProps,T=p.id,S=p.onPostCommit;typeof S=="function"&&S(T,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(k){dt(r,r.return,k)}}else Bi(i,r,o,c);break;case 13:Bi(i,r,o,c);break;case 23:break;case 22:p=r.stateNode,T=r.alternate,r.memoizedState!==null?p._visibility&2?Bi(i,r,o,c):xc(i,r):p._visibility&2?Bi(i,r,o,c):(p._visibility|=2,Vo(i,r,o,c,(r.subtreeFlags&10256)!==0)),f&2048&&vp(T,r);break;case 24:Bi(i,r,o,c),f&2048&&Ep(r.alternate,r);break;default:Bi(i,r,o,c)}}function Vo(i,r,o,c,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=i,T=r,S=o,k=c,q=T.flags;switch(T.tag){case 0:case 11:case 15:Vo(p,T,S,k,f),Ac(8,T);break;case 23:break;case 22:var X=T.stateNode;T.memoizedState!==null?X._visibility&2?Vo(p,T,S,k,f):xc(p,T):(X._visibility|=2,Vo(p,T,S,k,f)),f&&q&2048&&vp(T.alternate,T);break;case 24:Vo(p,T,S,k,f),f&&q&2048&&Ep(T.alternate,T);break;default:Vo(p,T,S,k,f)}r=r.sibling}}function xc(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,c=r,f=c.flags;switch(c.tag){case 22:xc(o,c),f&2048&&vp(c.alternate,c);break;case 24:xc(o,c),f&2048&&Ep(c.alternate,c);break;default:xc(o,c)}r=r.sibling}}var Rc=8192;function Lo(i){if(i.subtreeFlags&Rc)for(i=i.child;i!==null;)gE(i),i=i.sibling}function gE(i){switch(i.tag){case 26:Lo(i),i.flags&Rc&&i.memoizedState!==null&&Kx(yi,i.memoizedState,i.memoizedProps);break;case 5:Lo(i);break;case 3:case 4:var r=yi;yi=tf(i.stateNode.containerInfo),Lo(i),yi=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Rc,Rc=16777216,Lo(i),Rc=r):Lo(i));break;default:Lo(i)}}function _E(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Ic(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];tn=c,vE(c,i)}_E(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yE(i),i=i.sibling}function yE(i){switch(i.tag){case 0:case 11:case 15:Ic(i),i.flags&2048&&cr(9,i,i.return);break;case 3:Ic(i);break;case 12:Ic(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,qh(i)):Ic(i);break;default:Ic(i)}}function qh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];tn=c,vE(c,i)}_E(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:cr(8,r,r.return),qh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,qh(r));break;default:qh(r)}i=i.sibling}}function vE(i,r){for(;tn!==null;){var o=tn;switch(o.tag){case 0:case 11:case 15:cr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:hc(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,tn=c;else e:for(o=i;tn!==null;){c=tn;var f=c.sibling,p=c.return;if(uE(c),c===o){tn=null;break e}if(f!==null){f.return=p,tn=f;break e}tn=p}}}var ux={getCacheForType:function(i){var r=yn(Xt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},hx=typeof WeakMap=="function"?WeakMap:Map,it=0,pt=null,Fe=null,Xe=0,st=0,Qn=null,fr=!1,jo=!1,Tp=!1,Is=0,xt=0,dr=0,Ca=0,bp=0,li=0,Uo=0,Nc=null,Pn=null,wp=!1,Sp=0,Hh=1/0,Gh=null,mr=null,dn=0,pr=null,zo=null,Fo=0,Ap=0,Cp=null,EE=null,Dc=0,xp=null;function Yn(){if((it&2)!==0&&Xe!==0)return Xe&-Xe;if(Y.T!==null){var i=Ro;return i!==0?i:Op()}return $s()}function TE(){li===0&&(li=(Xe&536870912)===0||Je?zl():536870912);var i=oi.current;return i!==null&&(i.flags|=32),li}function Kn(i,r,o){(i===pt&&(st===2||st===9)||i.cancelPendingCommit!==null)&&(Bo(i,0),gr(i,Xe,li,!1)),os(i,o),((it&2)===0||i!==pt)&&(i===pt&&((it&2)===0&&(Ca|=o),xt===4&&gr(i,Xe,li,!1)),qi(i))}function bE(i,r,o){if((it&6)!==0)throw Error(s(327));var c=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Zr(i,r),f=c?mx(i,r):Np(i,r,!0),p=c;do{if(f===0){jo&&!c&&gr(i,r,0,!1);break}else{if(o=i.current.alternate,p&&!fx(o)){f=Np(i,r,!1),p=!1;continue}if(f===2){if(p=r,i.errorRecoveryDisabledLanes&p)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;e:{var S=i;f=Nc;var k=S.current.memoizedState.isDehydrated;if(k&&(Bo(S,T).flags|=256),T=Np(S,T,!1),T!==2){if(Tp&&!k){S.errorRecoveryDisabledLanes|=p,Ca|=p,f=4;break e}p=Pn,Pn=f,p!==null&&(Pn===null?Pn=p:Pn.push.apply(Pn,p))}f=T}if(p=!1,f!==2)continue}}if(f===1){Bo(i,0),gr(i,r,0,!0);break}e:{switch(c=i,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:gr(c,r,li,!fr);break e;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Sp+300-kn(),10<f)){if(gr(c,r,li,!fr),so(c,0,!0)!==0)break e;c.timeoutHandle=WE(wE.bind(null,c,o,Pn,Gh,wp,r,li,Ca,Uo,fr,p,2,-0,0),f);break e}wE(c,o,Pn,Gh,wp,r,li,Ca,Uo,fr,p,0,-0,0)}}break}while(!0);qi(i)}function wE(i,r,o,c,f,p,T,S,k,q,X,J,H,G){if(i.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(jc={stylesheets:null,count:0,unsuspend:Yx},gE(r),J=Xx(),J!==null)){i.cancelPendingCommit=J(NE.bind(null,i,r,p,o,c,f,T,S,k,X,1,H,G)),gr(i,p,T,!q);return}NE(i,r,p,o,c,f,T,S,k)}function fx(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],p=f.getSnapshot;f=f.value;try{if(!Bn(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gr(i,r,o,c){r&=~bp,r&=~Ca,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var f=r;0<f;){var p=31-ft(f),T=1<<p;c[p]=-1,f&=~T}o!==0&&Ri(i,o,r)}function Qh(){return(it&6)===0?(kc(0),!1):!0}function Rp(){if(Fe!==null){if(st===0)var i=Fe.return;else i=Fe,Ts=Ea=null,Gm(i),Oo=null,bc=0,i=Fe;for(;i!==null;)nE(i.alternate,i),i=i.return;Fe=null}}function Bo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,Nx(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Rp(),pt=i,Fe=o=ys(i.current,null),Xe=r,st=0,Qn=null,fr=!1,jo=Zr(i,r),Tp=!1,Uo=li=bp=Ca=dr=xt=0,Pn=Nc=null,wp=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var f=31-ft(c),p=1<<f;r|=i[f],c&=~p}return Is=r,mh(),o}function SE(i,r){Ve=null,Y.H=Mh,r===dc||r===wh?(r=Fv(),st=3):r===jv?(r=Fv(),st=4):st=r===B0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Qn=r,Fe===null&&(xt=1,jh(i,ii(r,i.current)))}function AE(){var i=Y.H;return Y.H=Mh,i===null?Mh:i}function CE(){var i=Y.A;return Y.A=ux,i}function Ip(){xt=4,fr||(Xe&4194048)!==Xe&&oi.current!==null||(jo=!0),(dr&134217727)===0&&(Ca&134217727)===0||pt===null||gr(pt,Xe,li,!1)}function Np(i,r,o){var c=it;it|=2;var f=AE(),p=CE();(pt!==i||Xe!==r)&&(Gh=null,Bo(i,r)),r=!1;var T=xt;e:do try{if(st!==0&&Fe!==null){var S=Fe,k=Qn;switch(st){case 8:Rp(),T=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(r=!0);var q=st;if(st=0,Qn=null,qo(i,S,k,q),o&&jo){T=0;break e}break;default:q=st,st=0,Qn=null,qo(i,S,k,q)}}dx(),T=xt;break}catch(X){SE(i,X)}while(!0);return r&&i.shellSuspendCounter++,Ts=Ea=null,it=c,Y.H=f,Y.A=p,Fe===null&&(pt=null,Xe=0,mh()),T}function dx(){for(;Fe!==null;)xE(Fe)}function mx(i,r){var o=it;it|=2;var c=AE(),f=CE();pt!==i||Xe!==r?(Gh=null,Hh=kn()+500,Bo(i,r)):jo=Zr(i,r);e:do try{if(st!==0&&Fe!==null){r=Fe;var p=Qn;t:switch(st){case 1:st=0,Qn=null,qo(i,r,p,1);break;case 2:case 9:if(Uv(p)){st=0,Qn=null,RE(r);break}r=function(){st!==2&&st!==9||pt!==i||(st=7),qi(i)},p.then(r,r);break e;case 3:st=7;break e;case 4:st=5;break e;case 7:Uv(p)?(st=0,Qn=null,RE(r)):(st=0,Qn=null,qo(i,r,p,7));break;case 5:var T=null;switch(Fe.tag){case 26:T=Fe.memoizedState;case 5:case 27:var S=Fe;if(!T||cT(T)){st=0,Qn=null;var k=S.sibling;if(k!==null)Fe=k;else{var q=S.return;q!==null?(Fe=q,Yh(q)):Fe=null}break t}}st=0,Qn=null,qo(i,r,p,5);break;case 6:st=0,Qn=null,qo(i,r,p,6);break;case 8:Rp(),xt=6;break e;default:throw Error(s(462))}}px();break}catch(X){SE(i,X)}while(!0);return Ts=Ea=null,Y.H=c,Y.A=f,it=o,Fe!==null?0:(pt=null,Xe=0,mh(),xt)}function px(){for(;Fe!==null&&!Yr();)xE(Fe)}function xE(i){var r=eE(i.alternate,i,Is);i.memoizedProps=i.pendingProps,r===null?Yh(i):Fe=r}function RE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=K0(o,r,r.pendingProps,r.type,void 0,Xe);break;case 11:r=K0(o,r,r.pendingProps,r.type.render,r.ref,Xe);break;case 5:Gm(r);default:nE(o,r),r=Fe=Iv(r,Is),r=eE(o,r,Is)}i.memoizedProps=i.pendingProps,r===null?Yh(i):Fe=r}function qo(i,r,o,c){Ts=Ea=null,Gm(r),Oo=null,bc=0;var f=r.return;try{if(sx(i,f,r,o,Xe)){xt=1,jh(i,ii(o,i.current)),Fe=null;return}}catch(p){if(f!==null)throw Fe=f,p;xt=1,jh(i,ii(o,i.current)),Fe=null;return}r.flags&32768?(Je||c===1?i=!0:jo||(Xe&536870912)!==0?i=!1:(fr=i=!0,(c===2||c===9||c===3||c===6)&&(c=oi.current,c!==null&&c.tag===13&&(c.flags|=16384))),IE(r,i)):Yh(r)}function Yh(i){var r=i;do{if((r.flags&32768)!==0){IE(r,fr);return}i=r.return;var o=ax(r.alternate,r,Is);if(o!==null){Fe=o;return}if(r=r.sibling,r!==null){Fe=r;return}Fe=r=i}while(r!==null);xt===0&&(xt=5)}function IE(i,r){do{var o=ox(i.alternate,i);if(o!==null){o.flags&=32767,Fe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Fe=i;return}Fe=i=o}while(i!==null);xt=6,Fe=null}function NE(i,r,o,c,f,p,T,S,k){i.cancelPendingCommit=null;do Kh();while(dn!==0);if((it&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(p=r.lanes|r.childLanes,p|=Em,Bl(i,o,p,T,S,k),i===pt&&(Fe=pt=null,Xe=0),zo=r,pr=i,Fo=o,Ap=p,Cp=f,EE=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,vx(Wn,function(){return PE(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=Y.T,Y.T=null,f=se.p,se.p=2,T=it,it|=4;try{lx(i,r,o)}finally{it=T,se.p=f,Y.T=c}}dn=1,DE(),kE(),ME()}}function DE(){if(dn===1){dn=0;var i=pr,r=zo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Y.T,Y.T=null;var c=se.p;se.p=2;var f=it;it|=4;try{dE(r,i);var p=Bp,T=vv(i.containerInfo),S=p.focusedElem,k=p.selectionRange;if(T!==S&&S&&S.ownerDocument&&yv(S.ownerDocument.documentElement,S)){if(k!==null&&pm(S)){var q=k.start,X=k.end;if(X===void 0&&(X=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(X,S.value.length);else{var J=S.ownerDocument||document,H=J&&J.defaultView||window;if(H.getSelection){var G=H.getSelection(),xe=S.textContent.length,we=Math.min(k.start,xe),ht=k.end===void 0?we:Math.min(k.end,xe);!G.extend&&we>ht&&(T=ht,ht=we,we=T);var U=_v(S,we),O=_v(S,ht);if(U&&O&&(G.rangeCount!==1||G.anchorNode!==U.node||G.anchorOffset!==U.offset||G.focusNode!==O.node||G.focusOffset!==O.offset)){var B=J.createRange();B.setStart(U.node,U.offset),G.removeAllRanges(),we>ht?(G.addRange(B),G.extend(O.node,O.offset)):(B.setEnd(O.node,O.offset),G.addRange(B))}}}}for(J=[],G=S;G=G.parentNode;)G.nodeType===1&&J.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<J.length;S++){var Z=J[S];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}of=!!Fp,Bp=Fp=null}finally{it=f,se.p=c,Y.T=o}}i.current=r,dn=2}}function kE(){if(dn===2){dn=0;var i=pr,r=zo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Y.T,Y.T=null;var c=se.p;se.p=2;var f=it;it|=4;try{cE(i,r.alternate,r)}finally{it=f,se.p=c,Y.T=o}}dn=3}}function ME(){if(dn===4||dn===3){dn=0,no();var i=pr,r=zo,o=Fo,c=EE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?dn=5:(dn=0,zo=pr=null,OE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(mr=null),ro(o),r=r.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(ge,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=Y.T,f=se.p,se.p=2,Y.T=null;try{for(var p=i.onRecoverableError,T=0;T<c.length;T++){var S=c[T];p(S.value,{componentStack:S.stack})}}finally{Y.T=r,se.p=f}}(Fo&3)!==0&&Kh(),qi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===xp?Dc++:(Dc=0,xp=i):Dc=0,kc(0)}}function OE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,hc(r)))}function Kh(i){return DE(),kE(),ME(),PE()}function PE(){if(dn!==5)return!1;var i=pr,r=Ap;Ap=0;var o=ro(Fo),c=Y.T,f=se.p;try{se.p=32>o?32:o,Y.T=null,o=Cp,Cp=null;var p=pr,T=Fo;if(dn=0,zo=pr=null,Fo=0,(it&6)!==0)throw Error(s(331));var S=it;if(it|=4,yE(p.current),pE(p,p.current,T,o),it=S,kc(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(ge,p)}catch{}return!0}finally{se.p=f,Y.T=c,OE(i,r)}}function VE(i,r,o){r=ii(o,r),r=rp(i.stateNode,r,2),i=rr(i,r,2),i!==null&&(os(i,2),qi(i))}function dt(i,r,o){if(i.tag===3)VE(i,i,o);else for(;r!==null;){if(r.tag===3){VE(r,i,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){i=ii(o,i),o=z0(2),c=rr(r,o,2),c!==null&&(F0(o,c,r,i),os(c,2),qi(c));break}}r=r.return}}function Dp(i,r,o){var c=i.pingCache;if(c===null){c=i.pingCache=new hx;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(Tp=!0,f.add(o),i=gx.bind(null,i,r,o),r.then(i,i))}function gx(i,r,o){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,pt===i&&(Xe&o)===o&&(xt===4||xt===3&&(Xe&62914560)===Xe&&300>kn()-Sp?(it&2)===0&&Bo(i,0):bp|=o,Uo===Xe&&(Uo=0)),qi(i)}function LE(i,r){r===0&&(r=Fl()),i=So(i,r),i!==null&&(os(i,r),qi(i))}function _x(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),LE(i,o)}function yx(i,r){var o=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(r),LE(i,o)}function vx(i,r){return is(i,r)}var Xh=null,Ho=null,kp=!1,$h=!1,Mp=!1,xa=0;function qi(i){i!==Ho&&i.next===null&&(Ho===null?Xh=Ho=i:Ho=Ho.next=i),$h=!0,kp||(kp=!0,Tx())}function kc(i,r){if(!Mp&&$h){Mp=!0;do for(var o=!1,c=Xh;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var p=0;else{var T=c.suspendedLanes,S=c.pingedLanes;p=(1<<31-ft(42|i)+1)-1,p&=f&~(T&~S),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,FE(c,p))}else p=Xe,p=so(c,c===pt?p:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(p&3)===0||Zr(c,p)||(o=!0,FE(c,p));c=c.next}while(o);Mp=!1}}function Ex(){jE()}function jE(){$h=kp=!1;var i=0;xa!==0&&(Ix()&&(i=xa),xa=0);for(var r=kn(),o=null,c=Xh;c!==null;){var f=c.next,p=UE(c,r);p===0?(c.next=null,o===null?Xh=f:o.next=f,f===null&&(Ho=o)):(o=c,(i!==0||(p&3)!==0)&&($h=!0)),c=f}kc(i)}function UE(i,r){for(var o=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,p=i.pendingLanes&-62914561;0<p;){var T=31-ft(p),S=1<<T,k=f[T];k===-1?((S&o)===0||(S&c)!==0)&&(f[T]=Ul(S,r)):k<=r&&(i.expiredLanes|=S),p&=~S}if(r=pt,o=Xe,o=so(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,o===0||i===r&&(st===2||st===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&ss(c),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Zr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(c!==null&&ss(c),ro(o)){case 2:case 8:o=Ys;break;case 32:o=Wn;break;case 268435456:o=xi;break;default:o=Wn}return c=zE.bind(null,i),o=is(o,c),i.callbackPriority=r,i.callbackNode=o,r}return c!==null&&c!==null&&ss(c),i.callbackPriority=2,i.callbackNode=null,2}function zE(i,r){if(dn!==0&&dn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Kh()&&i.callbackNode!==o)return null;var c=Xe;return c=so(i,i===pt?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(bE(i,c,r),UE(i,kn()),i.callbackNode!=null&&i.callbackNode===o?zE.bind(null,i):null)}function FE(i,r){if(Kh())return null;bE(i,r,!0)}function Tx(){Dx(function(){(it&6)!==0?is(Kr,Ex):jE()})}function Op(){return xa===0&&(xa=zl()),xa}function BE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:ho(""+i)}function qE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function bx(i,r,o,c,f){if(r==="submit"&&o&&o.stateNode===f){var p=BE((f[Lt]||null).action),T=c.submitter;T&&(r=(r=T[Lt]||null)?BE(r.formAction):T.getAttribute("formAction"),r!==null&&(p=r,T=null));var S=new fo("action","action",null,c,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(xa!==0){var k=T?qE(f,T):new FormData(f);ep(o,{pending:!0,data:k,method:f.method,action:p},null,k)}}else typeof p=="function"&&(S.preventDefault(),k=T?qE(f,T):new FormData(f),ep(o,{pending:!0,data:k,method:f.method,action:p},p,k))},currentTarget:f}]})}}for(var Pp=0;Pp<vm.length;Pp++){var Vp=vm[Pp],wx=Vp.toLowerCase(),Sx=Vp[0].toUpperCase()+Vp.slice(1);_i(wx,"on"+Sx)}_i(bv,"onAnimationEnd"),_i(wv,"onAnimationIteration"),_i(Sv,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(FC,"onTransitionRun"),_i(BC,"onTransitionStart"),_i(qC,"onTransitionCancel"),_i(Av,"onTransitionEnd"),cs("onMouseEnter",["mouseout","mouseover"]),cs("onMouseLeave",["mouseout","mouseover"]),cs("onPointerEnter",["pointerout","pointerover"]),cs("onPointerLeave",["pointerout","pointerover"]),pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mc));function HE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],f=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var T=c.length-1;0<=T;T--){var S=c[T],k=S.instance,q=S.currentTarget;if(S=S.listener,k!==p&&f.isPropagationStopped())break e;p=S,f.currentTarget=q;try{p(f)}catch(X){Lh(X)}f.currentTarget=null,p=k}else for(T=0;T<c.length;T++){if(S=c[T],k=S.instance,q=S.currentTarget,S=S.listener,k!==p&&f.isPropagationStopped())break e;p=S,f.currentTarget=q;try{p(f)}catch(X){Lh(X)}f.currentTarget=null,p=k}}}}function Be(i,r){var o=r[Hl];o===void 0&&(o=r[Hl]=new Set);var c=i+"__bubble";o.has(c)||(GE(r,i,2,!1),o.add(c))}function Lp(i,r,o){var c=0;r&&(c|=4),GE(o,i,c,r)}var Wh="_reactListening"+Math.random().toString(36).slice(2);function jp(i){if(!i[Wh]){i[Wh]=!0,Gl.forEach(function(o){o!=="selectionchange"&&(Ax.has(o)||Lp(o,!1,i),Lp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Wh]||(r[Wh]=!0,Lp("selectionchange",!1,r))}}function GE(i,r,o,c){switch(pT(r)){case 2:var f=Zx;break;case 8:f=Jx;break;default:f=Zp}o=f.bind(null,r,o,i),f=void 0,!ti||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Up(i,r,o,c,f){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var S=c.stateNode.containerInfo;if(S===f)break;if(T===4)for(T=c.return;T!==null;){var k=T.tag;if((k===3||k===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;S!==null;){if(T=ls(S),T===null)return;if(k=T.tag,k===5||k===6||k===26||k===27){c=p=T;continue e}S=S.parentNode}}c=c.return}Ju(function(){var q=p,X=ei(o),J=[];e:{var H=Cv.get(i);if(H!==void 0){var G=fo,xe=i;switch(i){case"keypress":if(Oi(o)===0)break e;case"keydown":case"keyup":G=vo;break;case"focusin":xe="focus",G=go;break;case"focusout":xe="blur",G=go;break;case"beforeblur":case"afterblur":G=go;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=oh;break;case bv:case wv:case Sv:G=_o;break;case Av:G=ch;break;case"scroll":case"scrollend":G=eh;break;case"wheel":G=Eo;break;case"copy":case"cut":case"paste":G=yo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=ic;break;case"toggle":case"beforetoggle":G=hh}var we=(r&4)!==0,ht=!we&&(i==="scroll"||i==="scrollend"),U=we?H!==null?H+"Capture":null:H;we=[];for(var O=q,B;O!==null;){var Z=O;if(B=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||B===null||U===null||(Z=aa(O,U),Z!=null&&we.push(Oc(O,Z,B))),ht)break;O=O.return}0<we.length&&(H=new G(H,xe,null,o,X),J.push({event:H,listeners:we}))}}if((r&7)===0){e:{if(H=i==="mouseover"||i==="pointerover",G=i==="mouseout"||i==="pointerout",H&&o!==fs&&(xe=o.relatedTarget||o.fromElement)&&(ls(xe)||xe[Zn]))break e;if((G||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,G?(xe=o.relatedTarget||o.toElement,G=q,xe=xe?ls(xe):null,xe!==null&&(ht=l(xe),we=xe.tag,xe!==ht||we!==5&&we!==27&&we!==6)&&(xe=null)):(G=null,xe=q),G!==xe)){if(we=ni,Z="onMouseLeave",U="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(we=ic,Z="onPointerLeave",U="onPointerEnter",O="pointer"),ht=G==null?H:Ni(G),B=xe==null?H:Ni(xe),H=new we(Z,O+"leave",G,o,X),H.target=ht,H.relatedTarget=B,Z=null,ls(X)===q&&(we=new we(U,O+"enter",xe,o,X),we.target=B,we.relatedTarget=ht,Z=we),ht=Z,G&&xe)t:{for(we=G,U=xe,O=0,B=we;B;B=Go(B))O++;for(B=0,Z=U;Z;Z=Go(Z))B++;for(;0<O-B;)we=Go(we),O--;for(;0<B-O;)U=Go(U),B--;for(;O--;){if(we===U||U!==null&&we===U.alternate)break t;we=Go(we),U=Go(U)}we=null}else we=null;G!==null&&QE(J,H,G,we,!1),xe!==null&&ht!==null&&QE(J,ht,xe,we,!0)}}e:{if(H=q?Ni(q):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var ye=hv;else if(Kt(H))if(fv)ye=jC;else{ye=VC;var je=PC}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&$l(q.elementType)&&(ye=hv):ye=LC;if(ye&&(ye=ye(i,q))){_s(J,ye,o,X);break e}je&&je(i,H,q),i==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&er(H,"number",H.value)}switch(je=q?Ni(q):window,i){case"focusin":(Kt(je)||je.contentEditable==="true")&&(To=je,gm=q,ac=null);break;case"focusout":ac=gm=To=null;break;case"mousedown":_m=!0;break;case"contextmenu":case"mouseup":case"dragend":_m=!1,Ev(J,o,X);break;case"selectionchange":if(zC)break;case"keydown":case"keyup":Ev(J,o,X)}var Ee;if(Li)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ye?Q(i,o)&&(Se="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Se="onCompositionStart");Se&&(v&&o.locale!=="ko"&&(Ye||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ye&&(Ee=Zl()):(Mi=X,tr="value"in Mi?Mi.value:Mi.textContent,Ye=!0)),je=Zh(q,Se),0<je.length&&(Se=new tc(Se,i,null,o,X),J.push({event:Se,listeners:je}),Ee?Se.data=Ee:(Ee=oe(o),Ee!==null&&(Se.data=Ee)))),(Ee=_?Yt(i,o):Ke(i,o))&&(Se=Zh(q,"onBeforeInput"),0<Se.length&&(je=new tc("onBeforeInput","beforeinput",null,o,X),J.push({event:je,listeners:Se}),je.data=Ee)),bx(J,i,q,o,X)}HE(J,r)})}function Oc(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Zh(i,r){for(var o=r+"Capture",c=[];i!==null;){var f=i,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=aa(i,o),f!=null&&c.unshift(Oc(i,f,p)),f=aa(i,r),f!=null&&c.push(Oc(i,f,p))),i.tag===3)return c;i=i.return}return[]}function Go(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function QE(i,r,o,c,f){for(var p=r._reactName,T=[];o!==null&&o!==c;){var S=o,k=S.alternate,q=S.stateNode;if(S=S.tag,k!==null&&k===c)break;S!==5&&S!==26&&S!==27||q===null||(k=q,f?(q=aa(o,p),q!=null&&T.unshift(Oc(o,q,k))):f||(q=aa(o,p),q!=null&&T.push(Oc(o,q,k)))),o=o.return}T.length!==0&&i.push({event:r,listeners:T})}var Cx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function YE(i){return(typeof i=="string"?i:""+i).replace(Cx,`
`).replace(xx,"")}function KE(i,r){return r=YE(r),YE(i)===r}function Jh(){}function ut(i,r,o,c,f,p){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Jn(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Jn(i,""+c);break;case"className":Di(i,"class",c);break;case"tabIndex":Di(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(i,o,c);break;case"style":Xl(i,c,p);break;case"data":if(r!=="object"){Di(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=ho(""+c),i.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&ut(i,r,"name",f.name,f,null),ut(i,r,"formEncType",f.formEncType,f,null),ut(i,r,"formMethod",f.formMethod,f,null),ut(i,r,"formTarget",f.formTarget,f,null)):(ut(i,r,"encType",f.encType,f,null),ut(i,r,"method",f.method,f,null),ut(i,r,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=ho(""+c),i.setAttribute(o,c);break;case"onClick":c!=null&&(i.onclick=Jh);break;case"onScroll":c!=null&&Be("scroll",i);break;case"onScrollEnd":c!=null&&Be("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}o=ho(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""+c):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":c===!0?i.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,c):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(o,c):i.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(o):i.setAttribute(o,c);break;case"popover":Be("beforetoggle",i),Be("toggle",i),Js(i,"popover",c);break;case"xlinkActuate":un(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":un(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":un(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":un(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":un(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":un(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":un(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":un(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":un(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Js(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=cm.get(o)||o,Js(i,o,c))}}function zp(i,r,o,c,f,p){switch(o){case"style":Xl(i,c,p);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof c=="string"?Jn(i,c):(typeof c=="number"||typeof c=="bigint")&&Jn(i,""+c);break;case"onScroll":c!=null&&Be("scroll",i);break;case"onScrollEnd":c!=null&&Be("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Jh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ao.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=i[Lt]||null,p=p!=null?p[o]:null,typeof p=="function"&&i.removeEventListener(r,p,f),typeof c=="function")){typeof p!="function"&&p!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,c,f);break e}o in i?i[o]=c:c===!0?i.setAttribute(o,""):Js(i,o,c)}}}function mn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",i),Be("load",i);var c=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var T=o[p];if(T!=null)switch(p){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ut(i,r,p,T,o,null)}}f&&ut(i,r,"srcSet",o.srcSet,o,null),c&&ut(i,r,"src",o.src,o,null);return;case"input":Be("invalid",i);var S=p=T=f=null,k=null,q=null;for(c in o)if(o.hasOwnProperty(c)){var X=o[c];if(X!=null)switch(c){case"name":f=X;break;case"type":T=X;break;case"checked":k=X;break;case"defaultChecked":q=X;break;case"value":p=X;break;case"defaultValue":S=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,r));break;default:ut(i,r,c,X,o,null)}}ia(i,p,S,k,q,T,f,!1),uo(i);return;case"select":Be("invalid",i),c=T=p=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":p=S;break;case"defaultValue":T=S;break;case"multiple":c=S;default:ut(i,r,f,S,o,null)}r=p,o=T,i.multiple=!!c,r!=null?hs(i,!!c,r,!1):o!=null&&hs(i,!!c,o,!0);return;case"textarea":Be("invalid",i),p=f=c=null;for(T in o)if(o.hasOwnProperty(T)&&(S=o[T],S!=null))switch(T){case"value":c=S;break;case"defaultValue":f=S;break;case"children":p=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ut(i,r,T,S,o,null)}sa(i,c,f,p),uo(i);return;case"option":for(k in o)if(o.hasOwnProperty(k)&&(c=o[k],c!=null))switch(k){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ut(i,r,k,c,o,null)}return;case"dialog":Be("beforetoggle",i),Be("toggle",i),Be("cancel",i),Be("close",i);break;case"iframe":case"object":Be("load",i);break;case"video":case"audio":for(c=0;c<Mc.length;c++)Be(Mc[c],i);break;case"image":Be("error",i),Be("load",i);break;case"details":Be("toggle",i);break;case"embed":case"source":case"link":Be("error",i),Be("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(c=o[q],c!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ut(i,r,q,c,o,null)}return;default:if($l(r)){for(X in o)o.hasOwnProperty(X)&&(c=o[X],c!==void 0&&zp(i,r,X,c,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(c=o[S],c!=null&&ut(i,r,S,c,o,null))}function Rx(i,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,T=null,S=null,k=null,q=null,X=null;for(G in o){var J=o[G];if(o.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":k=J;default:c.hasOwnProperty(G)||ut(i,r,G,null,c,J)}}for(var H in c){var G=c[H];if(J=o[H],c.hasOwnProperty(H)&&(G!=null||J!=null))switch(H){case"type":p=G;break;case"name":f=G;break;case"checked":q=G;break;case"defaultChecked":X=G;break;case"value":T=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==J&&ut(i,r,H,G,c,J)}}Fn(i,T,S,k,q,X,p,f);return;case"select":G=T=S=H=null;for(p in o)if(k=o[p],o.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":G=k;default:c.hasOwnProperty(p)||ut(i,r,p,null,c,k)}for(f in c)if(p=c[f],k=o[f],c.hasOwnProperty(f)&&(p!=null||k!=null))switch(f){case"value":H=p;break;case"defaultValue":S=p;break;case"multiple":T=p;default:p!==k&&ut(i,r,f,p,c,k)}r=S,o=T,c=G,H!=null?hs(i,!!o,H,!1):!!c!=!!o&&(r!=null?hs(i,!!o,r,!0):hs(i,!!o,o?[]:"",!1));return;case"textarea":G=H=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!c.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ut(i,r,S,null,c,f)}for(T in c)if(f=c[T],p=o[T],c.hasOwnProperty(T)&&(f!=null||p!=null))switch(T){case"value":H=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&ut(i,r,T,f,c,p)}lt(i,H,G);return;case"option":for(var xe in o)if(H=o[xe],o.hasOwnProperty(xe)&&H!=null&&!c.hasOwnProperty(xe))switch(xe){case"selected":i.selected=!1;break;default:ut(i,r,xe,null,c,H)}for(k in c)if(H=c[k],G=o[k],c.hasOwnProperty(k)&&H!==G&&(H!=null||G!=null))switch(k){case"selected":i.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:ut(i,r,k,H,c,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)H=o[we],o.hasOwnProperty(we)&&H!=null&&!c.hasOwnProperty(we)&&ut(i,r,we,null,c,H);for(q in c)if(H=c[q],G=o[q],c.hasOwnProperty(q)&&H!==G&&(H!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:ut(i,r,q,H,c,G)}return;default:if($l(r)){for(var ht in o)H=o[ht],o.hasOwnProperty(ht)&&H!==void 0&&!c.hasOwnProperty(ht)&&zp(i,r,ht,void 0,c,H);for(X in c)H=c[X],G=o[X],!c.hasOwnProperty(X)||H===G||H===void 0&&G===void 0||zp(i,r,X,H,c,G);return}}for(var U in o)H=o[U],o.hasOwnProperty(U)&&H!=null&&!c.hasOwnProperty(U)&&ut(i,r,U,null,c,H);for(J in c)H=c[J],G=o[J],!c.hasOwnProperty(J)||H===G||H==null&&G==null||ut(i,r,J,H,c,G)}var Fp=null,Bp=null;function ef(i){return i.nodeType===9?i:i.ownerDocument}function XE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $E(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function qp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Hp=null;function Ix(){var i=window.event;return i&&i.type==="popstate"?i===Hp?!1:(Hp=i,!0):(Hp=null,!1)}var WE=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,ZE=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof ZE<"u"?function(i){return ZE.resolve(null).then(i).catch(kx)}:WE;function kx(i){setTimeout(function(){throw i})}function _r(i){return i==="head"}function JE(i,r){var o=r,c=0,f=0;do{var p=o.nextSibling;if(i.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<c&&8>c){o=c;var T=i.ownerDocument;if(o&1&&Pc(T.documentElement),o&2&&Pc(T.body),o&4)for(o=T.head,Pc(o),T=o.firstChild;T;){var S=T.nextSibling,k=T.nodeName;T[Jr]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=S}}if(f===0){i.removeChild(p),qc(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:c=o.charCodeAt(0)-48;else c=0;o=p}while(o);qc(r)}function Gp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Gp(o),Zs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function Mx(i,r,o,c){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Jr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(p=i.getAttribute("rel"),p==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(p!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(p=i.getAttribute("src"),(p!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===p)return i}else return i;if(i=vi(i.nextSibling),i===null)break}return null}function Ox(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=vi(i.nextSibling),i===null))return null;return i}function Qp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function Px(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var c=function(){r(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function vi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Yp=null;function eT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function tT(i,r,o){switch(r=ef(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Pc(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Zs(i)}var ci=new Map,nT=new Set;function tf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Ns=se.d;se.d={f:Vx,r:Lx,D:jx,C:Ux,L:zx,m:Fx,X:qx,S:Bx,M:Hx};function Vx(){var i=Ns.f(),r=Qh();return i||r}function Lx(i){var r=Ii(i);r!==null&&r.tag===5&&r.type==="form"?b0(r):Ns.r(i)}var Qo=typeof document>"u"?null:document;function iT(i,r,o){var c=Qo;if(c&&typeof r=="string"&&r){var f=jt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),nT.has(f)||(nT.add(f),i={rel:i,crossOrigin:o,href:r},c.querySelector(f)===null&&(r=c.createElement("link"),mn(r,"link",i),Nt(r),c.head.appendChild(r)))}}function jx(i){Ns.D(i),iT("dns-prefetch",i,null)}function Ux(i,r){Ns.C(i,r),iT("preconnect",i,r)}function zx(i,r,o){Ns.L(i,r,o);var c=Qo;if(c&&i&&r){var f='link[rel="preload"][as="'+jt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+jt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+jt(o.imageSizes)+'"]')):f+='[href="'+jt(i)+'"]';var p=f;switch(r){case"style":p=Yo(i);break;case"script":p=Ko(i)}ci.has(p)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ci.set(p,i),c.querySelector(f)!==null||r==="style"&&c.querySelector(Vc(p))||r==="script"&&c.querySelector(Lc(p))||(r=c.createElement("link"),mn(r,"link",i),Nt(r),c.head.appendChild(r)))}}function Fx(i,r){Ns.m(i,r);var o=Qo;if(o&&i){var c=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+jt(c)+'"][href="'+jt(i)+'"]',p=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ko(i)}if(!ci.has(p)&&(i=y({rel:"modulepreload",href:i},r),ci.set(p,i),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Lc(p)))return}c=o.createElement("link"),mn(c,"link",i),Nt(c),o.head.appendChild(c)}}}function Bx(i,r,o){Ns.S(i,r,o);var c=Qo;if(c&&i){var f=An(c).hoistableStyles,p=Yo(i);r=r||"default";var T=f.get(p);if(!T){var S={loading:0,preload:null};if(T=c.querySelector(Vc(p)))S.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ci.get(p))&&Kp(i,o);var k=T=c.createElement("link");Nt(k),mn(k,"link",i),k._p=new Promise(function(q,X){k.onload=q,k.onerror=X}),k.addEventListener("load",function(){S.loading|=1}),k.addEventListener("error",function(){S.loading|=2}),S.loading|=4,nf(T,r,c)}T={type:"stylesheet",instance:T,count:1,state:S},f.set(p,T)}}}function qx(i,r){Ns.X(i,r);var o=Qo;if(o&&i){var c=An(o).hoistableScripts,f=Ko(i),p=c.get(f);p||(p=o.querySelector(Lc(f)),p||(i=y({src:i,async:!0},r),(r=ci.get(f))&&Xp(i,r),p=o.createElement("script"),Nt(p),mn(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},c.set(f,p))}}function Hx(i,r){Ns.M(i,r);var o=Qo;if(o&&i){var c=An(o).hoistableScripts,f=Ko(i),p=c.get(f);p||(p=o.querySelector(Lc(f)),p||(i=y({src:i,async:!0,type:"module"},r),(r=ci.get(f))&&Xp(i,r),p=o.createElement("script"),Nt(p),mn(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},c.set(f,p))}}function sT(i,r,o,c){var f=(f=Ae.current)?tf(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Yo(o.href),o=An(f).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Yo(o.href);var p=An(f).hoistableStyles,T=p.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(i,T),(p=f.querySelector(Vc(i)))&&!p._p&&(T.instance=p,T.state.loading=5),ci.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ci.set(i,o),p||Gx(f,i,o,T.state))),r&&c===null)throw Error(s(528,""));return T}if(r&&c!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ko(o),o=An(f).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Yo(i){return'href="'+jt(i)+'"'}function Vc(i){return'link[rel="stylesheet"]['+i+"]"}function rT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function Gx(i,r,o,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),mn(r,"link",o),Nt(r),i.head.appendChild(r))}function Ko(i){return'[src="'+jt(i)+'"]'}function Lc(i){return"script[async]"+i}function aT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+jt(o.href)+'"]');if(c)return r.instance=c,Nt(c),c;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),Nt(c),mn(c,"style",f),nf(c,o.precedence,i),r.instance=c;case"stylesheet":f=Yo(o.href);var p=i.querySelector(Vc(f));if(p)return r.state.loading|=4,r.instance=p,Nt(p),p;c=rT(o),(f=ci.get(f))&&Kp(c,f),p=(i.ownerDocument||i).createElement("link"),Nt(p);var T=p;return T._p=new Promise(function(S,k){T.onload=S,T.onerror=k}),mn(p,"link",c),r.state.loading|=4,nf(p,o.precedence,i),r.instance=p;case"script":return p=Ko(o.src),(f=i.querySelector(Lc(p)))?(r.instance=f,Nt(f),f):(c=o,(f=ci.get(p))&&(c=y({},o),Xp(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),Nt(f),mn(f,"link",c),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,nf(c,o.precedence,i));return r.instance}function nf(i,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,p=f,T=0;T<c.length;T++){var S=c[T];if(S.dataset.precedence===r)p=S;else if(p!==f)break}p?p.parentNode.insertBefore(i,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Kp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Xp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var sf=null;function oT(i,r,o){if(sf===null){var c=new Map,f=sf=new Map;f.set(o,c)}else f=sf,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(i))return c;for(c.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var p=o[f];if(!(p[Jr]||p[Qt]||i==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var T=p.getAttribute(r)||"";T=i+T;var S=c.get(T);S?S.push(p):c.set(T,[p])}}return c}function lT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function Qx(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function cT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var jc=null;function Yx(){}function Kx(i,r,o){if(jc===null)throw Error(s(475));var c=jc;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Yo(o.href),p=i.querySelector(Vc(f));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=rf.bind(c),i.then(c,c)),r.state.loading|=4,r.instance=p,Nt(p);return}p=i.ownerDocument||i,o=rT(o),(f=ci.get(f))&&Kp(o,f),p=p.createElement("link"),Nt(p);var T=p;T._p=new Promise(function(S,k){T.onload=S,T.onerror=k}),mn(p,"link",o),r.instance=p}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=rf.bind(c),i.addEventListener("load",r),i.addEventListener("error",r))}}function Xx(){if(jc===null)throw Error(s(475));var i=jc;return i.stylesheets&&i.count===0&&$p(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&$p(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function rf(){if(this.count--,this.count===0){if(this.stylesheets)$p(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var af=null;function $p(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,af=new Map,r.forEach($x,i),af=null,rf.call(i))}function $x(i,r){if(!(r.state.loading&4)){var o=af.get(i);if(o)var c=o.get(null);else{o=new Map,af.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var T=f[p];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),c=T)}c&&o.set(null,c)}f=r.instance,T=f.getAttribute("data-precedence"),p=o.get(T)||c,p===c&&o.set(null,f),o.set(T,f),this.count++,c=rf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),p?p.parentNode.insertBefore(f,p.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Uc={$$typeof:re,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function Wx(i,r,o,c,f,p,T,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=as(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.hiddenUpdates=as(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function uT(i,r,o,c,f,p,T,S,k,q,X,J){return i=new Wx(i,r,o,T,S,k,q,J),r=1,p===!0&&(r|=24),p=qn(3,null,null,r),i.current=p,p.stateNode=i,r=Dm(),r.refCount++,i.pooledCache=r,r.refCount++,p.memoizedState={element:c,isDehydrated:o,cache:r},Pm(p),i}function hT(i){return i?(i=Ao,i):Ao}function fT(i,r,o,c,f,p){f=hT(f),c.context===null?c.context=f:c.pendingContext=f,c=sr(r),c.payload={element:o},p=p===void 0?null:p,p!==null&&(c.callback=p),o=rr(i,c,r),o!==null&&(Kn(o,i,r),pc(o,i,r))}function dT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Wp(i,r){dT(i,r),(i=i.alternate)&&dT(i,r)}function mT(i){if(i.tag===13){var r=So(i,67108864);r!==null&&Kn(r,i,67108864),Wp(i,67108864)}}var of=!0;function Zx(i,r,o,c){var f=Y.T;Y.T=null;var p=se.p;try{se.p=2,Zp(i,r,o,c)}finally{se.p=p,Y.T=f}}function Jx(i,r,o,c){var f=Y.T;Y.T=null;var p=se.p;try{se.p=8,Zp(i,r,o,c)}finally{se.p=p,Y.T=f}}function Zp(i,r,o,c){if(of){var f=Jp(c);if(f===null)Up(i,r,c,lf,o),gT(i,c);else if(tR(f,i,r,o,c))c.stopPropagation();else if(gT(i,c),r&4&&-1<eR.indexOf(i)){for(;f!==null;){var p=Ii(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var T=mi(p.pendingLanes);if(T!==0){var S=p;for(S.pendingLanes|=2,S.entangledLanes|=2;T;){var k=1<<31-ft(T);S.entanglements[1]|=k,T&=~k}qi(p),(it&6)===0&&(Hh=kn()+500,kc(0))}}break;case 13:S=So(p,2),S!==null&&Kn(S,p,2),Qh(),Wp(p,2)}if(p=Jp(c),p===null&&Up(i,r,c,lf,o),p===f)break;f=p}f!==null&&c.stopPropagation()}else Up(i,r,c,null,o)}}function Jp(i){return i=ei(i),eg(i)}var lf=null;function eg(i){if(lf=null,i=ls(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=u(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return lf=i,null}function pT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jl()){case Kr:return 2;case Ys:return 8;case Wn:case Xr:return 32;case xi:return 268435456;default:return 32}default:return 32}}var tg=!1,yr=null,vr=null,Er=null,zc=new Map,Fc=new Map,Tr=[],eR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gT(i,r){switch(i){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":zc.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fc.delete(r.pointerId)}}function Bc(i,r,o,c,f,p){return i===null||i.nativeEvent!==p?(i={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},r!==null&&(r=Ii(r),r!==null&&mT(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function tR(i,r,o,c,f){switch(r){case"focusin":return yr=Bc(yr,i,r,o,c,f),!0;case"dragenter":return vr=Bc(vr,i,r,o,c,f),!0;case"mouseover":return Er=Bc(Er,i,r,o,c,f),!0;case"pointerover":var p=f.pointerId;return zc.set(p,Bc(zc.get(p)||null,i,r,o,c,f)),!0;case"gotpointercapture":return p=f.pointerId,Fc.set(p,Bc(Fc.get(p)||null,i,r,o,c,f)),!0}return!1}function _T(i){var r=ls(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=u(o),r!==null){i.blockedOn=r,Qu(i.priority,function(){if(o.tag===13){var c=Yn();c=Xs(c);var f=So(o,c);f!==null&&Kn(f,o,c),Wp(o,c)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function cf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Jp(i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);fs=c,o.target.dispatchEvent(c),fs=null}else return r=Ii(o),r!==null&&mT(r),i.blockedOn=o,!1;r.shift()}return!0}function yT(i,r,o){cf(i)&&o.delete(r)}function nR(){tg=!1,yr!==null&&cf(yr)&&(yr=null),vr!==null&&cf(vr)&&(vr=null),Er!==null&&cf(Er)&&(Er=null),zc.forEach(yT),Fc.forEach(yT)}function uf(i,r){i.blockedOn===r&&(i.blockedOn=null,tg||(tg=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nR)))}var hf=null;function vT(i){hf!==i&&(hf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){hf===i&&(hf=null);for(var r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],f=i[r+2];if(typeof c!="function"){if(eg(c||o)===null)continue;break}var p=Ii(o);p!==null&&(i.splice(r,3),r-=3,ep(p,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function qc(i){function r(k){return uf(k,i)}yr!==null&&uf(yr,i),vr!==null&&uf(vr,i),Er!==null&&uf(Er,i),zc.forEach(r),Fc.forEach(r);for(var o=0;o<Tr.length;o++){var c=Tr[o];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Tr.length&&(o=Tr[0],o.blockedOn===null);)_T(o),o.blockedOn===null&&Tr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],p=o[c+1],T=f[Lt]||null;if(typeof p=="function")T||vT(o);else if(T){var S=null;if(p&&p.hasAttribute("formAction")){if(f=p,T=p[Lt]||null)S=T.formAction;else if(eg(f)!==null)continue}else S=T.action;typeof S=="function"?o[c+1]=S:(o.splice(c,3),c-=3),vT(o)}}}function ng(i){this._internalRoot=i}ff.prototype.render=ng.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,c=Yn();fT(o,c,i,r,null,null)},ff.prototype.unmount=ng.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;fT(i.current,2,null,i,null,null),Qh(),r[Zn]=null}};function ff(i){this._internalRoot=i}ff.prototype.unstable_scheduleHydration=function(i){if(i){var r=$s();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Tr.length&&r!==0&&r<Tr[o].priority;o++);Tr.splice(o,0,i),o===0&&_T(i)}};var ET=e.version;if(ET!=="19.1.1")throw Error(s(527,ET,"19.1.1"));se.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=g(r),i=i!==null?m(i):null,i=i===null?null:i.stateNode,i};var iR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var df=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!df.isDisabled&&df.supportsFiber)try{ge=df.inject(iR),ve=df}catch{}}return Gc.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,c="",f=V0,p=L0,T=j0,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=uT(i,1,!1,null,null,o,c,f,p,T,S,null),i[Zn]=r.current,jp(i),new ng(r)},Gc.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var c=!1,f="",p=V0,T=L0,S=j0,k=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(k=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=uT(i,1,!0,r,o??null,c,f,p,T,S,k,q),r.context=hT(null),o=r.current,c=Yn(),c=Xs(c),f=sr(c),f.callback=null,rr(o,f,c),o=c,r.current.lanes=o,os(r,o),qi(r),i[Zn]=r.current,jp(i),new ff(r)},Gc.version="19.1.1",Gc}var NT;function dR(){if(NT)return rg.exports;NT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),rg.exports=fR(),rg.exports}var mR=dR();const pR=()=>{};var DT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=function(n,e){if(!n)throw Al(e)},Al=function(n){return new Error("Firebase Database ("+K1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},gR=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],d=n[t++],g=((a&7)<<18|(l&63)<<12|(u&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],u=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,d=u?n[a+1]:0,g=a+2<n.length,m=g?n[a+2]:0,y=l>>2,b=(l&3)<<4|d>>4;let w=(d&15)<<2|m>>6,C=m&63;g||(C=64,u||(w=64)),s.push(t[y],t[b],t[w],t[C])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(X1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const b=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||m==null||b==null)throw new _R;const w=l<<2|d>>4;if(s.push(w),m!==64){const C=d<<4&240|m>>2;if(s.push(C),b!==64){const M=m<<6&192|b;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $1=function(n){const e=X1(n);return E_.encodeByteArray(e,!0)},Of=function(n){return $1(n).replace(/\./g,"")},Pf=function(n){try{return E_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(n){return W1(void 0,n)}function W1(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vR(t)||(n[t]=W1(n[t],e[t]));return n}function vR(n){return n!=="__proto__"}/**
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
 */function ER(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TR=()=>ER().__FIREBASE_DEFAULTS__,bR=()=>{if(typeof process>"u"||typeof DT>"u")return;const n=DT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pf(n[1]);return e&&JSON.parse(e)},Td=()=>{try{return pR()||TR()||bR()||wR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Z1=n=>Td()?.emulatorHosts?.[n],J1=n=>{const e=Z1(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ew=()=>Td()?.config,tw=n=>Td()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function qr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function T_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function nw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Of(JSON.stringify(t)),Of(JSON.stringify(u)),""].join(".")}const eu={};function SR(){const n={prod:[],emulator:[]};for(const e of Object.keys(eu))eu[e]?n.emulator.push(e):n.prod.push(e);return n}function AR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let kT=!1;function b_(n,e){if(typeof window>"u"||typeof document>"u"||!qr(window.location.host)||eu[n]===e||eu[n]||kT)return;eu[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=SR().prod.length>0;function u(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function g(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function m(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{kT=!0,u()},w}function y(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function b(){const w=AR(s),C=t("text"),M=document.getElementById(C)||document.createElement("span"),j=t("learnmore"),z=document.getElementById(j)||document.createElement("a"),ie=t("preprendIcon"),te=document.getElementById(ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const re=w.element;d(re),y(z,j);const _e=m();g(te,ie),re.append(te,M,z,_e),document.body.appendChild(re)}l?(M.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wn())}function CR(){const n=Td()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IR(){const n=wn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function NR(){return K1.NODE_ADMIN===!0}function DR(){return!CR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kR(){try{return typeof indexedDB=="object"}catch{return!1}}function MR(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="FirebaseError";class Gs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=OR,Object.setPrototypeOf(this,Gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ru.prototype.create)}}class Ru{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?PR(l,s):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new Gs(a,d,s)}}function PR(n,e){return n.replace(VR,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const VR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n){return JSON.parse(n)}function on(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=fu(Pf(l[0])||""),t=fu(Pf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},LR=function(n){const e=sw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},jR=function(n){const e=sw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function cl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Lf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Wi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],u=e[a];if(MT(l)&&MT(u)){if(!Wi(l,u))return!1}else if(l!==u)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function MT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let b=0;b<16;b++)s[b]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let b=0;b<16;b++)s[b]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let b=16;b<80;b++){const w=s[b-3]^s[b-8]^s[b-14]^s[b-16];s[b]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],d=this.chain_[3],g=this.chain_[4],m,y;for(let b=0;b<80;b++){b<40?b<20?(m=d^l&(u^d),y=1518500249):(m=l^u^d,y=1859775393):b<60?(m=l&u|d&(l|u),y=2400959708):(m=l^u^d,y=3395469782);const w=(a<<5|a>>>27)+m+g+y+s[b]&4294967295;g=d,d=u,u=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<t;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function zR(n,e){const t=new FR(n,e);return t.subscribe.bind(t)}class FR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");BR(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=cg),a.error===void 0&&(a.error=cg),a.complete===void 0&&(a.complete=cg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function cg(){}function ul(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,le(s<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(s)-56320;a=65536+(l<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},bd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function _t(n){return n&&n._delegate?n._delegate:n}class Or{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ks;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:Ra})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ra){return this.instances.has(e)}getOptions(e=Ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&u.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:GR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ra){return this.component?this.component.multipleInstances?e:Ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GR(n){return n===Ra?void 0:n}function QR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(qe||(qe={}));const KR={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},XR=qe.INFO,$R={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},WR=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=$R[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wd{constructor(e){this.name=e,this._logLevel=XR,this._logHandler=WR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const ZR=(n,e)=>e.some(t=>n instanceof t);let OT,PT;function JR(){return OT||(OT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eI(){return PT||(PT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rw=new WeakMap,Dg=new WeakMap,aw=new WeakMap,ug=new WeakMap,S_=new WeakMap;function tI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Rr(n.result)),a()},u=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&rw.set(t,n)}).catch(()=>{}),S_.set(e,n),e}function nI(n){if(Dg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Dg.set(n,e)}let kg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Dg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||aw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function iI(n){kg=n(kg)}function sI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(hg(this),e,...t);return aw.set(s,e.sort?e.sort():[e]),Rr(s)}:eI().includes(n)?function(...e){return n.apply(hg(this),e),Rr(rw.get(this))}:function(...e){return Rr(n.apply(hg(this),e))}}function rI(n){return typeof n=="function"?sI(n):(n instanceof IDBTransaction&&nI(n),ZR(n,JR())?new Proxy(n,kg):n)}function Rr(n){if(n instanceof IDBRequest)return tI(n);if(ug.has(n))return ug.get(n);const e=rI(n);return e!==n&&(ug.set(n,e),S_.set(e,n)),e}const hg=n=>S_.get(n);function aI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),d=Rr(u);return s&&u.addEventListener("upgradeneeded",g=>{s(Rr(u.result),g.oldVersion,g.newVersion,Rr(u.transaction),g)}),t&&u.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),d.then(g=>{l&&g.addEventListener("close",()=>l()),a&&g.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const oI=["get","getKey","getAll","getAllKeys","count"],lI=["put","add","delete","clear"],fg=new Map;function VT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fg.get(e))return fg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=lI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||oI.includes(t)))return;const l=async function(u,...d){const g=this.transaction(u,a?"readwrite":"readonly");let m=g.store;return s&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&g.done]))[0]};return fg.set(e,l),l}iI(n=>({...n,get:(e,t,s)=>VT(e,t)||n.get(e,t,s),has:(e,t)=>!!VT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uI(n){return n.getComponent()?.type==="VERSION"}const Mg="@firebase/app",LT="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new wd("@firebase/app"),hI="@firebase/app-compat",fI="@firebase/analytics-compat",dI="@firebase/analytics",mI="@firebase/app-check-compat",pI="@firebase/app-check",gI="@firebase/auth",_I="@firebase/auth-compat",yI="@firebase/database",vI="@firebase/data-connect",EI="@firebase/database-compat",TI="@firebase/functions",bI="@firebase/functions-compat",wI="@firebase/installations",SI="@firebase/installations-compat",AI="@firebase/messaging",CI="@firebase/messaging-compat",xI="@firebase/performance",RI="@firebase/performance-compat",II="@firebase/remote-config",NI="@firebase/remote-config-compat",DI="@firebase/storage",kI="@firebase/storage-compat",MI="@firebase/firestore",OI="@firebase/ai",PI="@firebase/firestore-compat",VI="firebase",LI="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="[DEFAULT]",jI={[Mg]:"fire-core",[hI]:"fire-core-compat",[dI]:"fire-analytics",[fI]:"fire-analytics-compat",[pI]:"fire-app-check",[mI]:"fire-app-check-compat",[gI]:"fire-auth",[_I]:"fire-auth-compat",[yI]:"fire-rtdb",[vI]:"fire-data-connect",[EI]:"fire-rtdb-compat",[TI]:"fire-fn",[bI]:"fire-fn-compat",[wI]:"fire-iid",[SI]:"fire-iid-compat",[AI]:"fire-fcm",[CI]:"fire-fcm-compat",[xI]:"fire-perf",[RI]:"fire-perf-compat",[II]:"fire-rc",[NI]:"fire-rc-compat",[DI]:"fire-gcs",[kI]:"fire-gcs-compat",[MI]:"fire-fst",[PI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[VI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map,UI=new Map,Pg=new Map;function jT(n,e){try{n.container.addComponent(e)}catch(t){Us.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fa(n){const e=n.name;if(Pg.has(e))return Us.debug(`There were multiple attempts to register component ${e}.`),!1;Pg.set(e,n);for(const t of jf.values())jT(t,n);for(const t of UI.values())jT(t,n);return!0}function Sd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ui(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Ru("app","Firebase",zI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=LI;function ow(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Og,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Ir.create("bad-app-name",{appName:String(a)});if(t||(t=ew()),!t)throw Ir.create("no-options");const l=jf.get(a);if(l){if(Wi(t,l.options)&&Wi(s,l.config))return l;throw Ir.create("duplicate-app",{appName:a})}const u=new YR(a);for(const g of Pg.values())u.addComponent(g);const d=new FI(t,s,u);return jf.set(a,d),d}function A_(n=Og){const e=jf.get(n);if(!e&&n===Og&&ew())return ow();if(!e)throw Ir.create("no-app",{appName:n});return e}function Gi(n,e,t){let s=jI[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Us.warn(u.join(" "));return}Fa(new Or(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const BI="firebase-heartbeat-database",qI=1,du="firebase-heartbeat-store";let dg=null;function lw(){return dg||(dg=aI(BI,qI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(du)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ir.create("idb-open",{originalErrorMessage:n.message})})),dg}async function HI(n){try{const t=(await lw()).transaction(du),s=await t.objectStore(du).get(cw(n));return await t.done,s}catch(e){if(e instanceof Gs)Us.warn(e.message);else{const t=Ir.create("idb-get",{originalErrorMessage:e?.message});Us.warn(t.message)}}}async function UT(n,e){try{const s=(await lw()).transaction(du,"readwrite");await s.objectStore(du).put(e,cw(n)),await s.done}catch(t){if(t instanceof Gs)Us.warn(t.message);else{const s=Ir.create("idb-set",{originalErrorMessage:t?.message});Us.warn(s.message)}}}function cw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const GI=1024,QI=30;class YI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>QI){const a=$I(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Us.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zT(),{heartbeatsToSend:t,unsentEntries:s}=KI(this._heartbeatsCache.heartbeats),a=Of(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Us.warn(e),""}}}function zT(){return new Date().toISOString().substring(0,10)}function KI(n,e=GI){const t=[];let s=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),FT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),FT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class XI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kR()?MR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return UT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return UT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function FT(n){return Of(JSON.stringify({version:2,heartbeats:n})).length}function $I(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(n){Fa(new Or("platform-logger",e=>new cI(e),"PRIVATE")),Fa(new Or("heartbeat",e=>new YI(e),"PRIVATE")),Gi(Mg,LT,n),Gi(Mg,LT,"esm2020"),Gi("fire-js","")}WI("");var ZI="firebase",JI="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gi(ZI,JI,"app");function uw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eN=uw,hw=new Ru("auth","Firebase",uw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new wd("@firebase/auth");function tN(n,...e){Uf.logLevel<=qe.WARN&&Uf.warn(`Auth (${$a}): ${n}`,...e)}function bf(n,...e){Uf.logLevel<=qe.ERROR&&Uf.error(`Auth (${$a}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,...e){throw x_(n,...e)}function wi(n,...e){return x_(n,...e)}function C_(n,e,t){const s={...eN(),[e]:t};return new Ru("auth","Firebase",s).create(e,{appName:n.name})}function Pa(n){return C_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Zi(n,"argument-error"),C_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function x_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return hw.create(n,...e)}function Ne(n,e,...t){if(!n)throw x_(e,...t)}function Os(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bf(e),new Error(e)}function zs(n,e){n||Os(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return typeof self<"u"&&self.location?.href||""}function iN(){return BT()==="http:"||BT()==="https:"}function BT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iN()||RR()||"connection"in navigator)?navigator.onLine:!0}function rN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t){this.shortDelay=e,this.longDelay=t,zs(t>e,"Short delay should be less than long delay!"),this.isMobile=w_()||iw()}get(){return sN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n,e){zs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Os("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Os("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Os("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lN=new Iu(3e4,6e4);function I_(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function xl(n,e,t,s,a={}){return dw(n,a,async()=>{let l={},u={};s&&(e==="GET"?u=s:l={body:JSON.stringify(s)});const d=Cl({key:n.config.apiKey,...u}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const m={method:e,headers:g,...l};return xR()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&qr(n.emulatorConfig.host)&&(m.credentials="include"),fw.fetch()(await mw(n,n.config.apiHost,t,d),m)})}async function dw(n,e,t){n._canInitEmulator=!1;const s={...aN,...e};try{const a=new uN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw mf(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const d=l.ok?u.errorMessage:u.error.message,[g,m]=d.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw mf(n,"credential-already-in-use",u);if(g==="EMAIL_EXISTS")throw mf(n,"email-already-in-use",u);if(g==="USER_DISABLED")throw mf(n,"user-disabled",u);const y=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw C_(n,y,m);Zi(n,y)}}catch(a){if(a instanceof Gs)throw a;Zi(n,"network-request-failed",{message:String(a)})}}async function cN(n,e,t,s,a={}){const l=await xl(n,e,t,s,a);return"mfaPendingCredential"in l&&Zi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function mw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,u=l.config.emulator?R_(n.config,a):`${n.config.apiScheme}://${a}`;return oN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}class uN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(wi(this.auth,"network-request-failed")),lN.get())})}}function mf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=wi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(n,e){return xl(n,"POST","/v1/accounts:delete",e)}async function zf(n,e){return xl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fN(n,e=!1){const t=_t(n),s=await t.getIdToken(e),a=N_(s);Ne(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l?.sign_in_provider;return{claims:a,token:s,authTime:tu(mg(a.auth_time)),issuedAtTime:tu(mg(a.iat)),expirationTime:tu(mg(a.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function mg(n){return Number(n)*1e3}function N_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return bf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Pf(t);return a?JSON.parse(a):(bf("Failed to decode base64 JWT payload"),null)}catch(a){return bf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function qT(n){const e=N_(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Gs&&dN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function dN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tu(this.lastLoginAt),this.creationTime=tu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(n){const e=n.auth,t=await n.getIdToken(),s=await mu(n,zf(e,{idToken:t}));Ne(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?pw(a.providerUserInfo):[],u=gN(n.providerData,l),d=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!u?.length,m=d?g:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Lg(a.createdAt,a.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function pN(n){const e=_t(n);await Ff(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gN(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function pw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(n,e){const t=await dw(n,{},async()=>{const s=Cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await mw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:d,body:s};return n.emulatorConfig&&qr(n.emulatorConfig.host)&&(g.credentials="include"),fw.fetch()(u,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yN(n,e){return xl(n,"POST","/v2/accounts:revokeToken",I_(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=qT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await _N(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,u=new nl;return s&&(Ne(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(Ne(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(Ne(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nl,this.toJSON())}_performRefresh(){return Os("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ti{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new mN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Lg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await mu(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ti({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ff(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ui(this.auth.app))return Promise.reject(Pa(this.auth));const e=await this.getIdToken();return await mu(this,hN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,d=t.tenantId??void 0,g=t._redirectEventId??void 0,m=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:b,emailVerified:w,isAnonymous:C,providerData:M,stsTokenManager:j}=t;Ne(b&&j,e,"internal-error");const z=nl.fromJSON(this.name,j);Ne(typeof b=="string",e,"internal-error"),wr(s,e.name),wr(a,e.name),Ne(typeof w=="boolean",e,"internal-error"),Ne(typeof C=="boolean",e,"internal-error"),wr(l,e.name),wr(u,e.name),wr(d,e.name),wr(g,e.name),wr(m,e.name),wr(y,e.name);const ie=new Ti({uid:b,auth:e,email:a,emailVerified:w,displayName:s,isAnonymous:C,photoURL:u,phoneNumber:l,tenantId:d,stsTokenManager:z,createdAt:m,lastLoginAt:y});return M&&Array.isArray(M)&&(ie.providerData=M.map(te=>({...te}))),g&&(ie._redirectEventId=g),ie}static async _fromIdTokenResponse(e,t,s=!1){const a=new nl;a.updateFromServerResponse(t);const l=new Ti({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Ff(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ne(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?pw(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!l?.length,d=new nl;d.updateFromIdToken(s);const g=new Ti({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Lg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(g,m),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new Map;function Ps(n){zs(n instanceof Function,"Expected a class definition");let e=HT.get(n);return e?(zs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,HT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gw.type="NONE";const GT=gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n,e,t){return`firebase:${n}:${e}:${t}`}class il{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=wf(this.userKey,a.apiKey,l),this.fullPersistenceKey=wf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zf(this.auth,{idToken:e}).catch(()=>{});return t?Ti._fromGetAccountInfoResponse(this.auth,t,e):null}return Ti._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new il(Ps(GT),e,s);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=a[0]||Ps(GT);const u=wf(s,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let b;if(typeof y=="string"){const w=await zf(e,{idToken:y}).catch(()=>{});if(!w)break;b=await Ti._fromGetAccountInfoResponse(e,w,y)}else b=Ti._fromJSON(e,y);m!==l&&(d=b),l=m;break}}catch{}const g=a.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new il(l,e,s):(l=g[0],d&&await l._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(u)}catch{}})),new il(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bw(e))return"Blackberry";if(ww(e))return"Webos";if(yw(e))return"Safari";if((e.includes("chrome/")||vw(e))&&!e.includes("edge/"))return"Chrome";if(Tw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function _w(n=wn()){return/firefox\//i.test(n)}function yw(n=wn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vw(n=wn()){return/crios\//i.test(n)}function Ew(n=wn()){return/iemobile/i.test(n)}function Tw(n=wn()){return/android/i.test(n)}function bw(n=wn()){return/blackberry/i.test(n)}function ww(n=wn()){return/webos/i.test(n)}function D_(n=wn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vN(n=wn()){return D_(n)&&!!window.navigator?.standalone}function EN(){return IR()&&document.documentMode===10}function Sw(n=wn()){return D_(n)||Tw(n)||ww(n)||bw(n)||/windows phone/i.test(n)||Ew(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n,e=[]){let t;switch(n){case"Browser":t=QT(wn());break;case"Worker":t=`${QT(wn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$a}/${s}`}/**
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
 */class TN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((u,d)=>{try{const g=e(l);u(g)}catch(g){d(g)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function bN(n,e={}){return xl(n,"GET","/v2/passwordPolicy",I_(n,e))}/**
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
 */const wN=6;class SN{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new YT(this),this.idTokenSubscription=new YT(this),this.beforeStateQueue=new TN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ps(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await il.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zf(this,{idToken:e}),s=await Ti._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ui(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===u)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ff(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ui(this.app))return Promise.reject(Pa(this));const t=e?_t(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ui(this.app)?Promise.reject(Pa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ui(this.app)?Promise.reject(Pa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ps(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bN(this),t=new SN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ru("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ps(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await il.create(this,[Ps(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(d,this,"internal-error"),d.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,a);return()=>{u=!0,g()}}else{const g=e.addObserver(t);return()=>{u=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Aw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(ui(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&tN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ad(n){return _t(n)}class YT{constructor(e){this.auth=e,this.observer=null,this.addObserver=zR(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CN(n){k_=n}function xN(n){return k_.loadJS(n)}function RN(){return k_.gapiScript}function IN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(n,e){const t=Sd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Wi(l,e??{}))return a;Zi(a,"already-initialized")}return t.initialize({options:e})}function DN(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ps);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function kN(n,e,t){const s=Ad(n);Ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=Cw(e),{host:u,port:d}=MN(e),g=d===null?"":`:${d}`,m={url:`${l}//${u}${g}/`},y=Object.freeze({host:u,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ne(Wi(m,s.config.emulator)&&Wi(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,qr(u)?(T_(`${l}//${u}${g}`),b_("Auth",!0)):ON()}function Cw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function MN(n){const e=Cw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:KT(s.substr(l.length+1))}}else{const[l,u]=s.split(":");return{host:l,port:KT(u)}}}function KT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ON(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Os("not implemented")}_getIdTokenResponse(e){return Os("not implemented")}_linkToIdToken(e,t){return Os("not implemented")}_getReauthenticationResolver(e){return Os("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n,e){return cN(n,"POST","/v1/accounts:signInWithIdp",I_(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="http://localhost";class Ba extends xw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ba(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const u=new Ba(s,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return sl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,sl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,sl(e,t)}buildRequest(){const e={requestUri:PN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nu extends M_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Nu{constructor(){super("facebook.com")}static credential(e){return Ba._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ba._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ms.credential(t,s)}catch{return null}}}Ms.GOOGLE_SIGN_IN_METHOD="google.com";Ms.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Nu{constructor(){super("github.com")}static credential(e){return Ba._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Nu{constructor(){super("twitter.com")}static credential(e,t){return Ba._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Cr.credential(t,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Ti._fromIdTokenResponse(e,s,a),u=XT(s);return new hl({user:l,providerId:u,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=XT(s);return new hl({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function XT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Gs{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Bf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Bf(e,t,s,a)}}function Rw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Bf._fromErrorAndOperation(n,l,e,s):l})}async function VN(n,e,t=!1){const s=await mu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hl._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(n,e,t=!1){const{auth:s}=n;if(ui(s.app))return Promise.reject(Pa(s));const a="reauthenticate";try{const l=await mu(n,Rw(s,a,e,n),t);Ne(l.idToken,s,"internal-error");const u=N_(l.idToken);Ne(u,s,"internal-error");const{sub:d}=u;return Ne(n.uid===d,s,"user-mismatch"),hl._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Zi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(n,e,t=!1){if(ui(n.app))return Promise.reject(Pa(n));const s="signIn",a=await Rw(n,s,e),l=await hl._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}function UN(n,e,t,s){return _t(n).onIdTokenChanged(e,t,s)}function zN(n,e,t){return _t(n).beforeAuthStateChanged(e,t)}function FN(n,e,t,s){return _t(n).onAuthStateChanged(e,t,s)}function BN(n){return _t(n).signOut()}const qf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qf,"1"),this.storage.removeItem(qf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=1e3,HN=10;class Nw extends Iw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,g)=>{this.notifyListeners(u,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(s);!t&&this.localCache[s]===u||this.notifyListeners(s,u)},l=this.storage.getItem(s);EN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,HN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const GN=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends Iw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dw.type="SESSION";const kw=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Cd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,l)),g=await QN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((d,g)=>{const m=O_("",20);a.port1.start();const y=setTimeout(()=>{g(new Error("unsupported_event"))},s);u={messageChannel:a,onMessage(b){const w=b;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(){return window}function KN(n){Qi().location.href=n}/**
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
 */function Mw(){return typeof Qi().WorkerGlobalScope<"u"&&typeof Qi().importScripts=="function"}async function XN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $N(){return navigator?.serviceWorker?.controller||null}function WN(){return Mw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebaseLocalStorageDb",ZN=1,Hf="firebaseLocalStorage",Pw="fbase_key";class Du{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xd(n,e){return n.transaction([Hf],e?"readwrite":"readonly").objectStore(Hf)}function JN(){const n=indexedDB.deleteDatabase(Ow);return new Du(n).toPromise()}function jg(){const n=indexedDB.open(Ow,ZN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Hf,{keyPath:Pw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Hf)?e(s):(s.close(),await JN(),e(await jg()))})})}async function $T(n,e,t){const s=xd(n,!0).put({[Pw]:e,value:t});return new Du(s).toPromise()}async function e2(n,e){const t=xd(n,!1).get(e),s=await new Du(t).toPromise();return s===void 0?null:s.value}function WT(n,e){const t=xd(n,!0).delete(e);return new Du(t).toPromise()}const t2=800,n2=3;class Vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>n2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cd._getInstance(WN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await XN(),!this.activeServiceWorker)return;this.sender=new YN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$N()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jg();return await $T(e,qf,"1"),await WT(e,qf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>$T(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>e2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>WT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=xd(a,!1).getAll();return new Du(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vw.type="LOCAL";const i2=Vw;new Iu(3e4,6e4);/**
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
 */function Lw(n,e){return e?Ps(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends xw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return sl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return sl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function s2(n){return jN(n.auth,new P_(n),n.bypassAuthState)}function r2(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),LN(t,new P_(n),n.bypassAuthState)}async function a2(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),VN(t,new P_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:u,type:d}=e;if(u){this.reject(u);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(g))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s2;case"linkViaPopup":case"linkViaRedirect":return a2;case"reauthViaPopup":case"reauthViaRedirect":return r2;default:Zi(this.auth,"internal-error")}}resolve(e){zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=new Iu(2e3,1e4);async function l2(n,e,t){if(ui(n.app))return Promise.reject(wi(n,"operation-not-supported-in-this-environment"));const s=Ad(n);nN(n,e,M_);const a=Lw(s,t);return new Da(s,"signInViaPopup",e,a).executeNotNull()}class Da extends jw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Da.currentPopupAction&&Da.currentPopupAction.cancel(),Da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){zs(this.filter.length===1,"Popup operations only handle one event");const e=O_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(wi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Da.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o2.get())};e()}}Da.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="pendingRedirect",Sf=new Map;class u2 extends jw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Sf.get(this.auth._key());if(!e){try{const s=await h2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Sf.set(this.auth._key(),e)}return this.bypassAuthState||Sf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h2(n,e){const t=m2(e),s=d2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function f2(n,e){Sf.set(n._key(),e)}function d2(n){return Ps(n._redirectPersistence)}function m2(n){return wf(c2,n.config.apiKey,n.name)}async function p2(n,e,t=!1){if(ui(n.app))return Promise.reject(Pa(n));const s=Ad(n),a=Lw(s,e),u=await new u2(s,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=600*1e3;class _2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Uw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(wi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g2&&this.cachedEventUids.clear(),this.cachedEventUids.has(ZT(e))}saveEventToCache(e){this.cachedEventUids.add(ZT(e)),this.lastProcessedEventTime=Date.now()}}function ZT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function y2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(n,e={}){return xl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T2=/^https?/;async function b2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await v2(n);for(const t of e)try{if(w2(t))return}catch{}Zi(n,"unauthorized-domain")}function w2(n){const e=Vg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===s}if(!T2.test(t))return!1;if(E2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const S2=new Iu(3e4,6e4);function JT(){const n=Qi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function A2(n){return new Promise((e,t)=>{function s(){JT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{JT(),t(wi(n,"network-request-failed"))},timeout:S2.get()})}if(Qi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Qi().gapi?.load)s();else{const a=IN("iframefcb");return Qi()[a]=()=>{gapi.load?s():t(wi(n,"network-request-failed"))},xN(`${RN()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Af=null,e})}let Af=null;function C2(n){return Af=Af||A2(n),Af}/**
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
 */const x2=new Iu(5e3,15e3),R2="__/auth/iframe",I2="emulator/auth/iframe",N2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k2(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?R_(e,I2):`https://${n.config.authDomain}/${R2}`,s={apiKey:e.apiKey,appName:n.name,v:$a},a=D2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Cl(s).slice(1)}`}async function M2(n){const e=await C2(n),t=Qi().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:k2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const u=wi(n,"network-request-failed"),d=Qi().setTimeout(()=>{l(u)},x2.get());function g(){Qi().clearTimeout(d),a(s)}s.ping(g).then(g,()=>{l(u)})}))}/**
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
 */const O2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P2=500,V2=600,L2="_blank",j2="http://localhost";class eb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U2(n,e,t,s=P2,a=V2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const g={...O2,width:s.toString(),height:a.toString(),top:l,left:u},m=wn().toLowerCase();t&&(d=vw(m)?L2:t),_w(m)&&(e=e||j2,g.scrollbars="yes");const y=Object.entries(g).reduce((w,[C,M])=>`${w}${C}=${M},`,"");if(vN(m)&&d!=="_self")return z2(e||"",d),new eb(null);const b=window.open(e||"",d,y);Ne(b,n,"popup-blocked");try{b.focus()}catch{}return new eb(b)}function z2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const F2="__/auth/handler",B2="emulator/auth/handler",q2=encodeURIComponent("fac");async function tb(n,e,t,s,a,l){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:$a,eventId:a};if(e instanceof M_){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Vf(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries({}))u[y]=b}if(e instanceof Nu){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const g=await n._getAppCheckToken(),m=g?`#${q2}=${encodeURIComponent(g)}`:"";return`${H2(n)}?${Cl(d).slice(1)}${m}`}function H2({config:n}){return n.emulator?R_(n,B2):`https://${n.authDomain}/${F2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="webStorageSupport";class G2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kw,this._completeRedirectFn=p2,this._overrideRedirectResult=f2}async _openPopup(e,t,s,a){zs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await tb(e,t,s,Vg(),a);return U2(e,l,O_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await tb(e,t,s,Vg(),a);return KN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(zs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await M2(e),s=new _2(e);return t.register("authEvent",a=>(Ne(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pg,{type:pg},a=>{const l=a?.[0]?.[pg];l!==void 0&&t(!!l),Zi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=b2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sw()||yw()||D_()}}const Q2=G2;var nb="@firebase/auth",ib="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function X2(n){Fa(new Or("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=s.options;Ne(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Aw(n)},m=new AN(s,a,l,g);return DN(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Fa(new Or("auth-internal",e=>{const t=Ad(e.getProvider("auth").getImmediate());return(s=>new Y2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gi(nb,ib,K2(n)),Gi(nb,ib,"esm2020")}/**
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
 */const $2=300,W2=tw("authIdTokenMaxAge")||$2;let sb=null;const Z2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>W2)return;const a=t?.token;sb!==a&&(sb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function J2(n=A_()){const e=Sd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NN(n,{popupRedirectResolver:Q2,persistence:[i2,GN,kw]}),s=tw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const u=Z2(l.toString());zN(t,u,()=>u(t.currentUser)),UN(t,d=>u(d))}}const a=Z1("auth");return a&&kN(t,`http://${a}`),t}function eD(){return document.getElementsByTagName("head")?.[0]??document}CN({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=wi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",eD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});X2("Browser");var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr,zw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,x){function I(){}I.prototype=x.prototype,N.D=x.prototype,N.prototype=new I,N.prototype.constructor=N,N.C=function(P,V,L){for(var R=Array(arguments.length-2),he=2;he<arguments.length;he++)R[he-2]=arguments[he];return x.prototype[V].apply(P,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,x,I){I||(I=0);var P=Array(16);if(typeof x=="string")for(var V=0;16>V;++V)P[V]=x.charCodeAt(I++)|x.charCodeAt(I++)<<8|x.charCodeAt(I++)<<16|x.charCodeAt(I++)<<24;else for(V=0;16>V;++V)P[V]=x[I++]|x[I++]<<8|x[I++]<<16|x[I++]<<24;x=N.g[0],I=N.g[1],V=N.g[2];var L=N.g[3],R=x+(L^I&(V^L))+P[0]+3614090360&4294967295;x=I+(R<<7&4294967295|R>>>25),R=L+(V^x&(I^V))+P[1]+3905402710&4294967295,L=x+(R<<12&4294967295|R>>>20),R=V+(I^L&(x^I))+P[2]+606105819&4294967295,V=L+(R<<17&4294967295|R>>>15),R=I+(x^V&(L^x))+P[3]+3250441966&4294967295,I=V+(R<<22&4294967295|R>>>10),R=x+(L^I&(V^L))+P[4]+4118548399&4294967295,x=I+(R<<7&4294967295|R>>>25),R=L+(V^x&(I^V))+P[5]+1200080426&4294967295,L=x+(R<<12&4294967295|R>>>20),R=V+(I^L&(x^I))+P[6]+2821735955&4294967295,V=L+(R<<17&4294967295|R>>>15),R=I+(x^V&(L^x))+P[7]+4249261313&4294967295,I=V+(R<<22&4294967295|R>>>10),R=x+(L^I&(V^L))+P[8]+1770035416&4294967295,x=I+(R<<7&4294967295|R>>>25),R=L+(V^x&(I^V))+P[9]+2336552879&4294967295,L=x+(R<<12&4294967295|R>>>20),R=V+(I^L&(x^I))+P[10]+4294925233&4294967295,V=L+(R<<17&4294967295|R>>>15),R=I+(x^V&(L^x))+P[11]+2304563134&4294967295,I=V+(R<<22&4294967295|R>>>10),R=x+(L^I&(V^L))+P[12]+1804603682&4294967295,x=I+(R<<7&4294967295|R>>>25),R=L+(V^x&(I^V))+P[13]+4254626195&4294967295,L=x+(R<<12&4294967295|R>>>20),R=V+(I^L&(x^I))+P[14]+2792965006&4294967295,V=L+(R<<17&4294967295|R>>>15),R=I+(x^V&(L^x))+P[15]+1236535329&4294967295,I=V+(R<<22&4294967295|R>>>10),R=x+(V^L&(I^V))+P[1]+4129170786&4294967295,x=I+(R<<5&4294967295|R>>>27),R=L+(I^V&(x^I))+P[6]+3225465664&4294967295,L=x+(R<<9&4294967295|R>>>23),R=V+(x^I&(L^x))+P[11]+643717713&4294967295,V=L+(R<<14&4294967295|R>>>18),R=I+(L^x&(V^L))+P[0]+3921069994&4294967295,I=V+(R<<20&4294967295|R>>>12),R=x+(V^L&(I^V))+P[5]+3593408605&4294967295,x=I+(R<<5&4294967295|R>>>27),R=L+(I^V&(x^I))+P[10]+38016083&4294967295,L=x+(R<<9&4294967295|R>>>23),R=V+(x^I&(L^x))+P[15]+3634488961&4294967295,V=L+(R<<14&4294967295|R>>>18),R=I+(L^x&(V^L))+P[4]+3889429448&4294967295,I=V+(R<<20&4294967295|R>>>12),R=x+(V^L&(I^V))+P[9]+568446438&4294967295,x=I+(R<<5&4294967295|R>>>27),R=L+(I^V&(x^I))+P[14]+3275163606&4294967295,L=x+(R<<9&4294967295|R>>>23),R=V+(x^I&(L^x))+P[3]+4107603335&4294967295,V=L+(R<<14&4294967295|R>>>18),R=I+(L^x&(V^L))+P[8]+1163531501&4294967295,I=V+(R<<20&4294967295|R>>>12),R=x+(V^L&(I^V))+P[13]+2850285829&4294967295,x=I+(R<<5&4294967295|R>>>27),R=L+(I^V&(x^I))+P[2]+4243563512&4294967295,L=x+(R<<9&4294967295|R>>>23),R=V+(x^I&(L^x))+P[7]+1735328473&4294967295,V=L+(R<<14&4294967295|R>>>18),R=I+(L^x&(V^L))+P[12]+2368359562&4294967295,I=V+(R<<20&4294967295|R>>>12),R=x+(I^V^L)+P[5]+4294588738&4294967295,x=I+(R<<4&4294967295|R>>>28),R=L+(x^I^V)+P[8]+2272392833&4294967295,L=x+(R<<11&4294967295|R>>>21),R=V+(L^x^I)+P[11]+1839030562&4294967295,V=L+(R<<16&4294967295|R>>>16),R=I+(V^L^x)+P[14]+4259657740&4294967295,I=V+(R<<23&4294967295|R>>>9),R=x+(I^V^L)+P[1]+2763975236&4294967295,x=I+(R<<4&4294967295|R>>>28),R=L+(x^I^V)+P[4]+1272893353&4294967295,L=x+(R<<11&4294967295|R>>>21),R=V+(L^x^I)+P[7]+4139469664&4294967295,V=L+(R<<16&4294967295|R>>>16),R=I+(V^L^x)+P[10]+3200236656&4294967295,I=V+(R<<23&4294967295|R>>>9),R=x+(I^V^L)+P[13]+681279174&4294967295,x=I+(R<<4&4294967295|R>>>28),R=L+(x^I^V)+P[0]+3936430074&4294967295,L=x+(R<<11&4294967295|R>>>21),R=V+(L^x^I)+P[3]+3572445317&4294967295,V=L+(R<<16&4294967295|R>>>16),R=I+(V^L^x)+P[6]+76029189&4294967295,I=V+(R<<23&4294967295|R>>>9),R=x+(I^V^L)+P[9]+3654602809&4294967295,x=I+(R<<4&4294967295|R>>>28),R=L+(x^I^V)+P[12]+3873151461&4294967295,L=x+(R<<11&4294967295|R>>>21),R=V+(L^x^I)+P[15]+530742520&4294967295,V=L+(R<<16&4294967295|R>>>16),R=I+(V^L^x)+P[2]+3299628645&4294967295,I=V+(R<<23&4294967295|R>>>9),R=x+(V^(I|~L))+P[0]+4096336452&4294967295,x=I+(R<<6&4294967295|R>>>26),R=L+(I^(x|~V))+P[7]+1126891415&4294967295,L=x+(R<<10&4294967295|R>>>22),R=V+(x^(L|~I))+P[14]+2878612391&4294967295,V=L+(R<<15&4294967295|R>>>17),R=I+(L^(V|~x))+P[5]+4237533241&4294967295,I=V+(R<<21&4294967295|R>>>11),R=x+(V^(I|~L))+P[12]+1700485571&4294967295,x=I+(R<<6&4294967295|R>>>26),R=L+(I^(x|~V))+P[3]+2399980690&4294967295,L=x+(R<<10&4294967295|R>>>22),R=V+(x^(L|~I))+P[10]+4293915773&4294967295,V=L+(R<<15&4294967295|R>>>17),R=I+(L^(V|~x))+P[1]+2240044497&4294967295,I=V+(R<<21&4294967295|R>>>11),R=x+(V^(I|~L))+P[8]+1873313359&4294967295,x=I+(R<<6&4294967295|R>>>26),R=L+(I^(x|~V))+P[15]+4264355552&4294967295,L=x+(R<<10&4294967295|R>>>22),R=V+(x^(L|~I))+P[6]+2734768916&4294967295,V=L+(R<<15&4294967295|R>>>17),R=I+(L^(V|~x))+P[13]+1309151649&4294967295,I=V+(R<<21&4294967295|R>>>11),R=x+(V^(I|~L))+P[4]+4149444226&4294967295,x=I+(R<<6&4294967295|R>>>26),R=L+(I^(x|~V))+P[11]+3174756917&4294967295,L=x+(R<<10&4294967295|R>>>22),R=V+(x^(L|~I))+P[2]+718787259&4294967295,V=L+(R<<15&4294967295|R>>>17),R=I+(L^(V|~x))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+x&4294967295,N.g[1]=N.g[1]+(V+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.u=function(N,x){x===void 0&&(x=N.length);for(var I=x-this.blockSize,P=this.B,V=this.h,L=0;L<x;){if(V==0)for(;L<=I;)a(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<x;)if(P[V++]=N.charCodeAt(L++),V==this.blockSize){a(this,P),V=0;break}}else for(;L<x;)if(P[V++]=N[L++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=x},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var x=1;x<N.length-8;++x)N[x]=0;var I=8*this.o;for(x=N.length-8;x<N.length;++x)N[x]=I&255,I/=256;for(this.u(N),N=Array(16),x=I=0;4>x;++x)for(var P=0;32>P;P+=8)N[I++]=this.g[x]>>>P&255;return N};function l(N,x){var I=d;return Object.prototype.hasOwnProperty.call(I,N)?I[N]:I[N]=x(N)}function u(N,x){this.h=x;for(var I=[],P=!0,V=N.length-1;0<=V;V--){var L=N[V]|0;P&&L==x||(I[V]=L,P=!1)}this.g=I}var d={};function g(N){return-128<=N&&128>N?l(N,function(x){return new u([x|0],0>x?-1:0)}):new u([N|0],0>N?-1:0)}function m(N){if(isNaN(N)||!isFinite(N))return b;if(0>N)return z(m(-N));for(var x=[],I=1,P=0;N>=I;P++)x[P]=N/I|0,I*=4294967296;return new u(x,0)}function y(N,x){if(N.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(N.charAt(0)=="-")return z(y(N.substring(1),x));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=m(Math.pow(x,8)),P=b,V=0;V<N.length;V+=8){var L=Math.min(8,N.length-V),R=parseInt(N.substring(V,V+L),x);8>L?(L=m(Math.pow(x,L)),P=P.j(L).add(m(R))):(P=P.j(I),P=P.add(m(R)))}return P}var b=g(0),w=g(1),C=g(16777216);n=u.prototype,n.m=function(){if(j(this))return-z(this).m();for(var N=0,x=1,I=0;I<this.g.length;I++){var P=this.i(I);N+=(0<=P?P:4294967296+P)*x,x*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(M(this))return"0";if(j(this))return"-"+z(this).toString(N);for(var x=m(Math.pow(N,6)),I=this,P="";;){var V=_e(I,x).g;I=ie(I,V.j(x));var L=((0<I.g.length?I.g[0]:I.h)>>>0).toString(N);if(I=V,M(I))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function M(N){if(N.h!=0)return!1;for(var x=0;x<N.g.length;x++)if(N.g[x]!=0)return!1;return!0}function j(N){return N.h==-1}n.l=function(N){return N=ie(this,N),j(N)?-1:M(N)?0:1};function z(N){for(var x=N.g.length,I=[],P=0;P<x;P++)I[P]=~N.g[P];return new u(I,~N.h).add(w)}n.abs=function(){return j(this)?z(this):this},n.add=function(N){for(var x=Math.max(this.g.length,N.g.length),I=[],P=0,V=0;V<=x;V++){var L=P+(this.i(V)&65535)+(N.i(V)&65535),R=(L>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);P=R>>>16,L&=65535,R&=65535,I[V]=R<<16|L}return new u(I,I[I.length-1]&-2147483648?-1:0)};function ie(N,x){return N.add(z(x))}n.j=function(N){if(M(this)||M(N))return b;if(j(this))return j(N)?z(this).j(z(N)):z(z(this).j(N));if(j(N))return z(this.j(z(N)));if(0>this.l(C)&&0>N.l(C))return m(this.m()*N.m());for(var x=this.g.length+N.g.length,I=[],P=0;P<2*x;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<N.g.length;V++){var L=this.i(P)>>>16,R=this.i(P)&65535,he=N.i(V)>>>16,Me=N.i(V)&65535;I[2*P+2*V]+=R*Me,te(I,2*P+2*V),I[2*P+2*V+1]+=L*Me,te(I,2*P+2*V+1),I[2*P+2*V+1]+=R*he,te(I,2*P+2*V+1),I[2*P+2*V+2]+=L*he,te(I,2*P+2*V+2)}for(P=0;P<x;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=x;P<2*x;P++)I[P]=0;return new u(I,0)};function te(N,x){for(;(N[x]&65535)!=N[x];)N[x+1]+=N[x]>>>16,N[x]&=65535,x++}function re(N,x){this.g=N,this.h=x}function _e(N,x){if(M(x))throw Error("division by zero");if(M(N))return new re(b,b);if(j(N))return x=_e(z(N),x),new re(z(x.g),z(x.h));if(j(x))return x=_e(N,z(x)),new re(z(x.g),x.h);if(30<N.g.length){if(j(N)||j(x))throw Error("slowDivide_ only works with positive integers.");for(var I=w,P=x;0>=P.l(N);)I=ae(I),P=ae(P);var V=fe(I,1),L=fe(P,1);for(P=fe(P,2),I=fe(I,2);!M(P);){var R=L.add(P);0>=R.l(N)&&(V=V.add(I),L=R),P=fe(P,1),I=fe(I,1)}return x=ie(N,V.j(x)),new re(V,x)}for(V=b;0<=N.l(x);){for(I=Math.max(1,Math.floor(N.m()/x.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=m(I),R=L.j(x);j(R)||0<R.l(N);)I-=P,L=m(I),R=L.j(x);M(L)&&(L=w),V=V.add(L),N=ie(N,R)}return new re(V,N)}n.A=function(N){return _e(this,N).h},n.and=function(N){for(var x=Math.max(this.g.length,N.g.length),I=[],P=0;P<x;P++)I[P]=this.i(P)&N.i(P);return new u(I,this.h&N.h)},n.or=function(N){for(var x=Math.max(this.g.length,N.g.length),I=[],P=0;P<x;P++)I[P]=this.i(P)|N.i(P);return new u(I,this.h|N.h)},n.xor=function(N){for(var x=Math.max(this.g.length,N.g.length),I=[],P=0;P<x;P++)I[P]=this.i(P)^N.i(P);return new u(I,this.h^N.h)};function ae(N){for(var x=N.g.length+1,I=[],P=0;P<x;P++)I[P]=N.i(P)<<1|N.i(P-1)>>>31;return new u(I,N.h)}function fe(N,x){var I=x>>5;x%=32;for(var P=N.g.length-I,V=[],L=0;L<P;L++)V[L]=0<x?N.i(L+I)>>>x|N.i(L+I+1)<<32-x:N.i(L+I);return new u(V,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,zw=s,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Nr=u}).apply(typeof rb<"u"?rb:typeof self<"u"?self:typeof window<"u"?window:{});var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fw,$c,Bw,Cf,Ug,qw,Hw,Gw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof pf=="object"&&pf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var F=h[A];if(!(F in v))break e;v=v[F]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,F={next:function(){if(!A&&v<h.length){var Q=v++;return{value:_(Q,h[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function g(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function b(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,A),h.apply(_,F)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:b,w.apply(null,arguments)}function C(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function M(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,F,Q){for(var oe=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)oe[Ye-2]=arguments[Ye];return _.prototype[F].apply(A,oe)}}function j(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function z(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(g(A)){const F=h.length||0,Q=A.length||0;h.length=F+Q;for(let oe=0;oe<Q;oe++)h[F+oe]=A[oe]}else h.push(A)}}class ie{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function te(h){return/^[\s\xa0]*$/.test(h)}function re(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function _e(h){return _e[" "](h),h}_e[" "]=function(){};var ae=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function fe(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function N(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function x(h){const _={};for(const v in h)_[v]=h[v];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let v,A;for(let F=1;F<arguments.length;F++){A=arguments[F];for(v in A)h[v]=A[v];for(let Q=0;Q<I.length;Q++)v=I[Q],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function V(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function L(h){d.setTimeout(()=>{throw h},0)}function R(){var h=He;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class he{constructor(){this.h=this.g=null}add(_,v){const A=Me.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Me=new ie(()=>new Y,h=>h.reset());class Y{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let se,me=!1,He=new he,D=()=>{const h=d.Promise.resolve(void 0);se=()=>{h.then($)}};var $=()=>{for(var h;h=R();){try{h.h.call(h.g)}catch(v){L(v)}var _=Me;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}me=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var Te=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Oe(h,_){if(ne.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ae){e:{try{_e(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Oe.aa.h.call(this)}}M(Oe,ne);var Ae={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var It="closure_listenable_"+(1e6*Math.random()|0),at=0;function $n(h,_,v,A,F){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=F,this.key=++at,this.da=this.fa=!1}function Ci(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function di(h){this.src=h,this.g={},this.h=0}di.prototype.add=function(h,_,v,A,F){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var oe=is(h,_,A,F);return-1<oe?(_=h[oe],v||(_.fa=!1)):(_=new $n(_,this.src,Q,!!A,F),_.fa=v,h.push(_)),_};function ns(h,_){var v=_.type;if(v in h.g){var A=h.g[v],F=Array.prototype.indexOf.call(A,_,void 0),Q;(Q=0<=F)&&Array.prototype.splice.call(A,F,1),Q&&(Ci(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function is(h,_,v,A){for(var F=0;F<h.length;++F){var Q=h[F];if(!Q.da&&Q.listener==_&&Q.capture==!!v&&Q.ha==A)return F}return-1}var ss="closure_lm_"+(1e6*Math.random()|0),Yr={};function no(h,_,v,A,F){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)no(h,_[Q],v,A,F);return null}return v=de(v),h&&h[It]?h.K(_,v,m(A)?!!A.capture:!1,F):kn(h,_,v,!1,A,F)}function kn(h,_,v,A,F,Q){if(!_)throw Error("Invalid event type");var oe=m(F)?!!F.capture:!!F,Ye=xi(h);if(Ye||(h[ss]=Ye=new di(h)),v=Ye.add(_,v,A,oe,Q),v.proxy)return v;if(A=jl(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)Te||(F=oe),F===void 0&&(F=!1),h.addEventListener(_.toString(),A,F);else if(h.attachEvent)h.attachEvent(Wn(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function jl(){function h(v){return _.call(h.src,h.listener,v)}const _=Xr;return h}function Kr(h,_,v,A,F){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)Kr(h,_[Q],v,A,F);else A=m(A)?!!A.capture:!!A,v=de(v),h&&h[It]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],v=is(Q,v,A,F),-1<v&&(Ci(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=xi(h))&&(_=h.g[_.toString()],h=-1,_&&(h=is(_,v,A,F)),(v=-1<h?_[h]:null)&&Ys(v))}function Ys(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[It])ns(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(Wn(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=xi(_))?(ns(v,h),v.h==0&&(v.src=null,_[ss]=null)):Ci(h)}}}function Wn(h){return h in Yr?Yr[h]:Yr[h]="on"+h}function Xr(h,_){if(h.da)h=!0;else{_=new Oe(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Ys(h),h=v.call(A,_)}return h}function xi(h){return h=h[ss],h instanceof di?h:null}var $r="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(h){return typeof h=="function"?h:(h[$r]||(h[$r]=function(_){return h.handleEvent(_)}),h[$r])}function ge(){ce.call(this),this.i=new di(this),this.M=this,this.F=null}M(ge,ce),ge.prototype[It]=!0,ge.prototype.removeEventListener=function(h,_,v,A){Kr(this,h,_,v,A)};function ve(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new ne(_,h);else if(_ instanceof ne)_.target=_.target||h;else{var F=_;_=new ne(A,h),P(_,F)}if(F=!0,v)for(var Q=v.length-1;0<=Q;Q--){var oe=_.g=v[Q];F=ot(oe,A,!0,_)&&F}if(oe=_.g=h,F=ot(oe,A,!0,_)&&F,F=ot(oe,A,!1,_)&&F,v)for(Q=0;Q<v.length;Q++)oe=_.g=v[Q],F=ot(oe,A,!1,_)&&F}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Ci(v[A]);delete h.g[_],h.h--}}this.F=null},ge.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},ge.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function ot(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,Q=0;Q<_.length;++Q){var oe=_[Q];if(oe&&!oe.da&&oe.capture==v){var Ye=oe.listener,Yt=oe.ha||oe.src;oe.fa&&ns(h.i,oe),F=Ye.call(Yt,A)!==!1&&F}}return F&&!A.defaultPrevented}function ft(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function cn(h){h.g=ft(()=>{h.g=null,h.i&&(h.i=!1,cn(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class io extends ce{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:cn(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(h){ce.call(this),this.h=h,this.g={}}M(rs,ce);var Ks=[];function Wr(h){fe(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ys(_)},h),h.g={}}rs.prototype.N=function(){rs.aa.N.call(this),Wr(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mi=d.JSON.stringify,so=d.JSON.parse,Zr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Ul(){}Ul.prototype.h=null;function zl(h){return h.h||(h.h=h.i())}function Fl(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function os(){ne.call(this,"d")}M(os,ne);function Bl(){ne.call(this,"c")}M(Bl,ne);var Ri={},ql=null;function Xs(){return ql=ql||new ge}Ri.La="serverreachability";function ro(h){ne.call(this,Ri.La,h)}M(ro,ne);function $s(h){const _=Xs();ve(_,new ro(_))}Ri.STAT_EVENT="statevent";function Qu(h,_){ne.call(this,Ri.STAT_EVENT,h),this.stat=_}M(Qu,ne);function bt(h){const _=Xs();ve(_,new Qu(_,h))}Ri.Ma="timingevent";function Qt(h,_){ne.call(this,Ri.Ma,h),this.size=_}M(Qt,ne);function Lt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Zn(){this.g=!0}Zn.prototype.xa=function(){this.g=!1};function Hl(h,_,v,A,F,Q){h.info(function(){if(h.g)if(Q)for(var oe="",Ye=Q.split("&"),Yt=0;Yt<Ye.length;Yt++){var Ke=Ye[Yt].split("=");if(1<Ke.length){var Jt=Ke[0];Ke=Ke[1];var Kt=Jt.split("_");oe=2<=Kt.length&&Kt[1]=="type"?oe+(Jt+"="+Ke+"&"):oe+(Jt+"=redacted&")}}else oe=null;else oe=Q;return"XMLHTTP REQ ("+A+") [attempt "+F+"]: "+_+`
`+v+`
`+oe})}function am(h,_,v,A,F,Q,oe){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+F+"]: "+_+`
`+v+`
`+Q+" "+oe})}function Ws(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Jr(h,v)+(A?" "+A:"")})}function Yu(h,_){h.info(function(){return"TIMEOUT: "+_})}Zn.prototype.info=function(){};function Jr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var F=A[1];if(Array.isArray(F)&&!(1>F.length)){var Q=F[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var oe=1;oe<F.length;oe++)F[oe]=""}}}}return mi(v)}catch{return _}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ls={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ii;function Ni(){}M(Ni,Ul),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Ii=new Ni;function An(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new rs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var Gl={},ao={};function pi(h,_,v){h.L=1,h.v=sa(Fn(_)),h.m=v,h.P=!0,cs(h,null)}function cs(h,_){h.F=Date.now(),ea(h),h.A=Fn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Wl(v.i,"t",A),h.C=0,v=h.j.J,h.h=new Nt,h.g=ch(h.j,v?_:null,!h.m),0<h.O&&(h.M=new io(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(Ks[0]=F.toString()),F=Ks);for(var Q=0;Q<F.length;Q++){var oe=no(v,F[Q],A||_.handleEvent,!1,_.h||_);if(!oe)break;_.g[oe.key]=oe}_=h.H?x(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),$s(),Hl(h.i,h.u,h.A,h.l,h.R,h.m)}An.prototype.ca=function(h){h=h.target;const _=this.M;_&&ni(h)==3?_.j():this.Y(h)},An.prototype.Y=function(h){try{if(h==this.g)e:{const Kt=ni(this.g);var _=this.g.Ba();const _s=this.g.Z();if(!(3>Kt)&&(Kt!=3||this.g&&(this.h.h||this.g.oa()||th(this.g)))){this.J||Kt!=4||_==7||(_==8||0>=_s?$s(3):$s(2)),Js(this);var v=this.g.Z();this.X=v;t:if(Ku(this)){var A=th(this.g);h="";var F=A.length,Q=ni(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Di(this);var oe="";break t}this.h.i=new d.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(Q&&_==F-1)});A.length=0,this.h.g+=h,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,am(this.i,this.u,this.A,this.l,this.R,Kt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,Yt=this.g;if((Ye=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Ye)){var Ke=Ye;break t}}Ke=null}if(v=Ke)Ws(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,v);else{this.o=!1,this.s=3,bt(12),un(this),Di(this);break e}}if(this.P){v=!0;let hn;for(;!this.J&&this.C<oe.length;)if(hn=Xu(this,oe),hn==ao){Kt==4&&(this.s=4,bt(14),v=!1),Ws(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==Gl){this.s=4,bt(15),Ws(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Ws(this.i,this.l,hn,null),ta(this,hn);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Kt!=4||oe.length!=0||this.h.h||(this.s=1,bt(16),v=!1),this.o=this.o&&v,!v)Ws(this.i,this.l,oe,"[Invalid Chunked Response]"),un(this),Di(this);else if(0<oe.length&&!this.W){this.W=!0;var Jt=this.j;Jt.g==this&&Jt.ba&&!Jt.M&&(Jt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),fa(Jt),Jt.M=!0,bt(11))}}else Ws(this.i,this.l,oe,null),ta(this,oe);Kt==4&&un(this),this.o&&!this.J&&(Kt==4?ah(this.j,this):(this.o=!1,ea(this)))}else hm(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),un(this),Di(this)}}}catch{}finally{}};function Ku(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Xu(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?ao:(v=Number(_.substring(v,A)),isNaN(v)?Gl:(A+=1,A+v>_.length?ao:(_=_.slice(A,A+v),h.C=A+v,_)))}An.prototype.cancel=function(){this.J=!0,un(this)};function ea(h){h.S=Date.now()+h.I,$u(h,h.I)}function $u(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Lt(w(h.ba,h),_)}function Js(h){h.B&&(d.clearTimeout(h.B),h.B=null)}An.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Yu(this.i,this.A),this.L!=2&&($s(),bt(17)),un(this),this.s=2,Di(this)):$u(this,this.S-h)};function Di(h){h.j.G==0||h.J||ah(h.j,h)}function un(h){Js(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Wr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function ta(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Ql(v.h,h))){if(!h.K&&Ql(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var F=A;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)vo(v),_o(v);else break e;nc(v),bt(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Lt(w(v.Za,v),6e3));if(1>=lo(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else gs(v,11)}else if((h.K||v.g==h)&&vo(v),!te(_))for(F=v.Da.g.parse(_),_=0;_<F.length;_++){let Ke=F[_];if(v.T=Ke[0],Ke=Ke[1],v.G==2)if(Ke[0]=="c"){v.K=Ke[1],v.ia=Ke[2];const Jt=Ke[3];Jt!=null&&(v.la=Jt,v.j.info("VER="+v.la));const Kt=Ke[4];Kt!=null&&(v.Aa=Kt,v.j.info("SVER="+v.Aa));const _s=Ke[5];_s!=null&&typeof _s=="number"&&0<_s&&(A=1.5*_s,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const hn=h.g;if(hn){const ji=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var Q=A.h;Q.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(co(Q,Q.h),Q.h=null))}if(A.D){const sc=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;sc&&(A.ya=sc,lt(A.I,A.D,sc))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var oe=h;if(A.qa=lh(A,A.J?A.ia:null,A.W),oe.K){Cn(A.h,oe);var Ye=oe,Yt=A.L;Yt&&(Ye.I=Yt),Ye.B&&(Js(Ye),ea(Ye)),A.g=oe}else sh(A);0<v.i.length&&yo(v)}else Ke[0]!="stop"&&Ke[0]!="close"||gs(v,7);else v.G==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?gs(v,7):ec(v):Ke[0]!="noop"&&v.l&&v.l.ta(Ke),v.v=0)}}$s(4)}catch{}}var Wu=class{constructor(h,_){this.g=h,this.map=_}};function us(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function lo(h){return h.h?1:h.g?h.g.size:0}function Ql(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function co(h,_){h.g?h.g.add(_):h.h=_}function Cn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}us.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Yl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return j(h.i)}function om(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(g(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function uo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(g(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Kl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(g(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=uo(h),A=om(h),F=A.length,Q=0;Q<F;Q++)_.call(void 0,A[Q],v&&v[Q],h)}var na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lm(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),F=null;if(0<=A){var Q=h[v].substring(0,A);F=h[v].substring(A+1)}else Q=h[v];_(Q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function jt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof jt){this.h=h.h,ia(this,h.j),this.o=h.o,this.g=h.g,er(this,h.s),this.l=h.l;var _=h.i,v=new fs;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),hs(this,v),this.m=h.m}else h&&(_=String(h).match(na))?(this.h=!1,ia(this,_[1]||"",!0),this.o=Jn(_[2]||""),this.g=Jn(_[3]||"",!0),er(this,_[4]),this.l=Jn(_[5]||"",!0),hs(this,_[6]||"",!0),this.m=Jn(_[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}jt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ra(_,Xl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ra(_,Xl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(ra(v,v.charAt(0)=="/"?cm:$l,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",ra(v,ho)),h.join("")};function Fn(h){return new jt(h)}function ia(h,_,v){h.j=v?Jn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function er(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function hs(h,_,v){_ instanceof fs?(h.i=_,Ju(h.i,h.h)):(v||(_=ra(_,um)),h.i=new fs(_,h.h))}function lt(h,_,v){h.i.set(_,v)}function sa(h){return lt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Jn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ra(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Zu),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Zu(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Xl=/[#\/\?@]/g,$l=/[#\?:]/g,cm=/[#\?]/g,um=/[#\?@]/g,ho=/#/g;function fs(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ei(h){h.g||(h.g=new Map,h.h=0,h.i&&lm(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=fs.prototype,n.add=function(h,_){ei(this),this.i=null,h=ki(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ds(h,_){ei(h),_=ki(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ms(h,_){return ei(h),_=ki(h,_),h.g.has(_)}n.forEach=function(h,_){ei(this),this.g.forEach(function(v,A){v.forEach(function(F){h.call(_,F,A,this)},this)},this)},n.na=function(){ei(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const F=h[A];for(let Q=0;Q<F.length;Q++)v.push(_[A])}return v},n.V=function(h){ei(this);let _=[];if(typeof h=="string")ms(this,h)&&(_=_.concat(this.g.get(ki(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return ei(this),this.i=null,h=ki(this,h),ms(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Wl(h,_,v){ds(h,_),0<v.length&&(h.i=null,h.g.set(ki(h,_),j(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const Q=encodeURIComponent(String(A)),oe=this.V(A);for(A=0;A<oe.length;A++){var F=Q;oe[A]!==""&&(F+="="+encodeURIComponent(String(oe[A]))),h.push(F)}}return this.i=h.join("&")};function ki(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Ju(h,_){_&&!h.j&&(ei(h),h.i=null,h.g.forEach(function(v,A){var F=A.toLowerCase();A!=F&&(ds(this,A),Wl(this,F,v))},h)),h.j=_}function aa(h,_){const v=new Zn;if(d.Image){const A=new Image;A.onload=C(ti,v,"TestLoadImage: loaded",!0,_,A),A.onerror=C(ti,v,"TestLoadImage: error",!1,_,A),A.onabort=C(ti,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=C(ti,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function gi(h,_){const v=new Zn,A=new AbortController,F=setTimeout(()=>{A.abort(),ti(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(Q=>{clearTimeout(F),Q.ok?ti(v,"TestPingServer: ok",!0,_):ti(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),ti(v,"TestPingServer: error",!1,_)})}function ti(h,_,v,A,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),A(v)}catch{}}function oa(){this.g=new Zr}function Mi(h,_,v){const A=v||"";try{Kl(h,function(F,Q){let oe=F;m(F)&&(oe=mi(F)),_.push(A+Q+"="+encodeURIComponent(oe))})}catch(F){throw _.push(A+"type="+encodeURIComponent("_badmap")),F}}function tr(h){this.l=h.Ub||null,this.j=h.eb||!1}M(tr,Ul),tr.prototype.g=function(){return new ps(this.l,this.j)},tr.prototype.i=(function(h){return function(){return h}})({});function ps(h,_){ge.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(ps,ge),n=ps.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Pi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Oi(this):Pi(this),this.readyState==3&&Zl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Oi(this))},n.Qa=function(h){this.g&&(this.response=h,Oi(this))},n.ga=function(){this.g&&Oi(this)};function Oi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Pi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Pi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Jl(h){let _="";return fe(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function Zt(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Jl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):lt(h,_,v))}function tt(h){ge.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(tt,ge);var fo=/^https?$/i,la=["POST","PUT"];n=tt.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ii.g(),this.v=this.o?zl(this.o):zl(Ii),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){eh(this,Q);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var F in A)v.set(F,A[F]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())v.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(la,_,void 0))||A||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,oe]of v)this.g.setRequestHeader(Q,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ca(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){eh(this,Q)}};function eh(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,mo(h),Vi(h)}function mo(h){h.A||(h.A=!0,ve(h,"complete"),ve(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,ve(this,"complete"),ve(this,"abort"),Vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vi(this,!0)),tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?po(this):this.bb())},n.bb=function(){po(this)};function po(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ni(h)!=4||h.Z()!=2)){if(h.u&&ni(h)==4)ft(h.Ea,0,h);else if(ve(h,"readystatechange"),ni(h)==4){h.h=!1;try{const oe=h.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=oe===0){var F=String(h.D).match(na)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),A=!fo.test(F?F.toLowerCase():"")}v=A}if(v)ve(h,"complete"),ve(h,"success");else{h.m=6;try{var Q=2<ni(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",mo(h)}}finally{Vi(h)}}}}function Vi(h,_){if(h.g){ca(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||ve(h,"ready");try{v.onreadystatechange=A}catch{}}}function ca(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ni(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ni(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),so(_)}};function th(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function hm(h){const _={};h=(h.g&&2<=ni(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(te(h[A]))continue;var v=V(h[A]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=_[F]||[];_[F]=Q,Q.push(v)}N(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ua(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function go(h){this.Aa=0,this.i=[],this.j=new Zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ua("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ua("baseRetryDelayMs",5e3,h),this.cb=ua("retryDelaySeedMs",1e4,h),this.Wa=ua("forwardChannelMaxRetries",2,h),this.wa=ua("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new us(h&&h.concurrentRequestLimit),this.Da=new oa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=go.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){bt(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=lh(this,null,this.W),yo(this)};function ec(h){if(nh(h),h.G==3){var _=h.U++,v=Fn(h.I);if(lt(v,"SID",h.K),lt(v,"RID",_),lt(v,"TYPE","terminate"),ha(h,v),_=new An(h,h.j,_),_.L=2,_.v=sa(Fn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=ch(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ea(_)}oh(h)}function _o(h){h.g&&(fa(h),h.g.cancel(),h.g=null)}function nh(h){_o(h),h.u&&(d.clearTimeout(h.u),h.u=null),vo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function yo(h){if(!oo(h.h)&&!h.s){h.s=!0;var _=h.Ga;se||D(),me||(se(),me=!0),He.add(_,h),h.B=0}}function fm(h,_){return lo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Lt(w(h.Ga,h,_),ic(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new An(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=x(Q),P(Q,this.S)):Q=this.S),this.m!==null||this.O||(F.H=Q,Q=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=ih(this,F,_),v=Fn(this.I),lt(v,"RID",h),lt(v,"CVER",22),this.D&&lt(v,"X-HTTP-Session-Id",this.D),ha(this,v),Q&&(this.O?_="headers="+encodeURIComponent(String(Jl(Q)))+"&"+_:this.m&&Zt(v,this.m,Q)),co(this.h,F),this.Ua&&lt(v,"TYPE","init"),this.P?(lt(v,"$req",_),lt(v,"SID","null"),F.T=!0,pi(F,v,null)):pi(F,v,_),this.G=2}}else this.G==3&&(h?tc(this,h):this.i.length==0||oo(this.h)||tc(this))};function tc(h,_){var v;_?v=_.l:v=h.U++;const A=Fn(h.I);lt(A,"SID",h.K),lt(A,"RID",v),lt(A,"AID",h.T),ha(h,A),h.m&&h.o&&Zt(A,h.m,h.o),v=new An(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=ih(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),co(h.h,v),pi(v,A,_)}function ha(h,_){h.H&&fe(h.H,function(v,A){lt(_,A,v)}),h.l&&Kl({},function(v,A){lt(_,A,v)})}function ih(h,_,v){v=Math.min(h.i.length,v);var A=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let Q=-1;for(;;){const oe=["count="+v];Q==-1?0<v?(Q=F[0].g,oe.push("ofs="+Q)):Q=0:oe.push("ofs="+Q);let Ye=!0;for(let Yt=0;Yt<v;Yt++){let Ke=F[Yt].g;const Jt=F[Yt].map;if(Ke-=Q,0>Ke)Q=Math.max(0,F[Yt].g-100),Ye=!1;else try{Mi(Jt,oe,"req"+Ke+"_")}catch{A&&A(Jt)}}if(Ye){A=oe.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function sh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;se||D(),me||(se(),me=!0),He.add(_,h),h.v=0}}function nc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Lt(w(h.Fa,h),ic(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Lt(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),_o(this),rh(this))};function fa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function rh(h){h.g=new An(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Fn(h.qa);lt(_,"RID","rpc"),lt(_,"SID",h.K),lt(_,"AID",h.T),lt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&lt(_,"TO",h.ja),lt(_,"TYPE","xmlhttp"),ha(h,_),h.m&&h.o&&Zt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=sa(Fn(_)),v.m=null,v.P=!0,cs(v,h)}n.Za=function(){this.C!=null&&(this.C=null,_o(this),nc(this),bt(19))};function vo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ah(h,_){var v=null;if(h.g==_){vo(h),fa(h),h.g=null;var A=2}else if(Ql(h.h,_))v=_.D,Cn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var F=h.B;A=Xs(),ve(A,new Qt(A,v)),yo(h)}else sh(h);else if(F=_.s,F==3||F==0&&0<_.X||!(A==1&&fm(h,_)||A==2&&nc(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),F){case 1:gs(h,5);break;case 4:gs(h,10);break;case 3:gs(h,6);break;default:gs(h,2)}}}function ic(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function gs(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),A=h.Xa;const F=!A;A=new jt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ia(A,"https"),sa(A),F?aa(A.toString(),v):gi(A.toString(),v)}else bt(2);h.G=0,h.l&&h.l.sa(_),oh(h),nh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function oh(h){if(h.G=0,h.ka=[],h.l){const _=Yl(h.h);(_.length!=0||h.i.length!=0)&&(z(h.ka,_),z(h.ka,h.i),h.h.i.length=0,j(h.i),h.i.length=0),h.l.ra()}}function lh(h,_,v){var A=v instanceof jt?Fn(v):new jt(v);if(A.g!="")_&&(A.g=_+"."+A.g),er(A,A.s);else{var F=d.location;A=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var Q=new jt(null);A&&ia(Q,A),_&&(Q.g=_),F&&er(Q,F),v&&(Q.l=v),A=Q}return v=h.D,_=h.ya,v&&_&&lt(A,v,_),lt(A,"VER",h.la),ha(h,A),A}function ch(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new tt(new tr({eb:v})):new tt(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Eo(){}Eo.prototype.g=function(h,_){return new xn(h,_)};function xn(h,_){ge.call(this),this.g=new go(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!te(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!te(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Li(this)}M(xn,ge),xn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){ec(this.g)},xn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=mi(h),h=v);_.i.push(new Wu(_.Ya++,h)),_.G==3&&yo(_)},xn.prototype.N=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,xn.aa.N.call(this)};function hh(h){os.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}M(hh,os);function fh(){Bl.call(this),this.status=1}M(fh,Bl);function Li(h){this.g=h}M(Li,uh),Li.prototype.ua=function(){ve(this.g,"a")},Li.prototype.ta=function(h){ve(this.g,new hh(h))},Li.prototype.sa=function(h){ve(this.g,new fh)},Li.prototype.ra=function(){ve(this.g,"b")},Eo.prototype.createWebChannel=Eo.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,Gw=function(){return new Eo},Hw=function(){return Xs()},qw=Ri,Ug={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,Cf=Zs,ls.COMPLETE="complete",Bw=ls,Fl.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",ge.prototype.listen=ge.prototype.K,$c=Fl,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,Fw=tt}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});const ab="@firebase/firestore",ob="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qa=new wd("@firebase/firestore");function $o(){return qa.logLevel}function pe(n,...e){if(qa.logLevel<=qe.DEBUG){const t=e.map(V_);qa.debug(`Firestore (${Rl}): ${n}`,...t)}}function Fs(n,...e){if(qa.logLevel<=qe.ERROR){const t=e.map(V_);qa.error(`Firestore (${Rl}): ${n}`,...t)}}function fl(n,...e){if(qa.logLevel<=qe.WARN){const t=e.map(V_);qa.warn(`Firestore (${Rl}): ${n}`,...t)}}function V_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ce(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Qw(n,s,t)}function Qw(n,e,t){let s=`FIRESTORE (${Rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fs(s),new Error(s)}function nt(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Qw(e,a,s)}function ke(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Gs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Tn.UNAUTHENTICATED)))}shutdown(){}}class nD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class iD{constructor(e){this.t=e,this.currentUser=Tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){nt(this.o===void 0,42304);let s=this.i;const a=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ls,e.enqueueRetryable((()=>a(this.currentUser)))};const u=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await a(this.currentUser)}))},d=g=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((g=>d(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?d(g):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ls)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(nt(typeof s.accessToken=="string",31837,{l:s}),new Yw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string",2055,{h:e}),new Tn(e)}}class sD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Tn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ui(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){nt(this.o===void 0,3512);const s=l=>{l.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,pe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new lb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(nt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new lb(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=oD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ge(n,e){return n<e?-1:n>e?1:0}function zg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return gg(a)===gg(l)?Ge(a,l):gg(a)?1:-1}return Ge(n.length,e.length)}const lD=55296,cD=57343;function gg(n){const e=n.charCodeAt(0);return e>=lD&&e<=cD}function dl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="__name__";class Hi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ce(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ce(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Hi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Hi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Hi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ge(e.length,t.length)}static compareSegments(e,t){const s=Hi.isNumericId(e),a=Hi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Hi.extractNumericId(e).compare(Hi.extractNumericId(t)):zg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nr.fromString(e.substring(4,e.length-2))}}class gt extends Hi{construct(e,t,s){return new gt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new gt(t)}static emptyPath(){return new gt([])}}const uD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends Hi{construct(e,t,s){return new gn(e,t,s)}static isValidIdentifier(e){return uD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cb}static keyField(){return new gn([cb])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ue(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ue(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[a+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ue(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(s+=d,a++):(l(),a++)}if(l(),u)throw new ue(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gn(t)}static emptyPath(){return new gn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(gt.fromString(e))}static fromName(e){return new be(gt.fromString(e).popFirst(5))}static empty(){return new be(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&gt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return gt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new gt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(n,e,t){if(!t)throw new ue(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hD(n,e,t,s){if(e===!0&&s===!0)throw new ue(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ub(n){if(!be.isDocumentKey(n))throw new ue(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hb(n){if(be.isDocumentKey(n))throw new ue(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Rd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ce(12329,{type:typeof n})}function In(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rd(n);throw new ue(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ht(n,e){const t={typeString:n};return e&&(t.value=e),t}function ku(n,e){if(!Xw(n))throw new ue(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const u=n[s];if(a&&typeof u!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ue(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=-62135596800,db=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*db);return new Et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fb)throw new ue(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/db}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ku(e,Et._jsonSchema))return new Et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Et._jsonSchemaVersion="firestore/timestamp/1.0",Et._jsonSchema={type:Ht("string",Et._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static fromTimestamp(e){return new De(e)}static min(){return new De(new Et(0,0))}static max(){return new De(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pu=-1;function fD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=De.fromTimestamp(s===1e9?new Et(t+1,0):new Et(t,s));return new Pr(a,be.empty(),e)}function dD(n){return new Pr(n.readTime,n.key,pu)}class Pr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Pr(De.min(),be.empty(),pu)}static max(){return new Pr(De.max(),be.empty(),pu)}}function mD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(n.documentKey,e.documentKey),t!==0?t:Ge(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==pD)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.reject(t)}static resolve(e){return new ee(((t,s)=>{t(e)}))}static reject(e){return new ee(((t,s)=>{s(e)}))}static waitFor(e){return new ee(((t,s)=>{let a=0,l=0,u=!1;e.forEach((d=>{++a,d.next((()=>{++l,u&&l===a&&t()}),(g=>s(g)))})),u=!0,l===a&&t()}))}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next((a=>a?ee.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ee(((s,a)=>{const l=e.length,u=new Array(l);let d=0;for(let g=0;g<l;g++){const m=g;t(e[m]).next((y=>{u[m]=y,++d,d===l&&s(u)}),(y=>a(y)))}}))}static doWhile(e,t){return new ee(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function _D(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Id{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Id.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=-1;function Nd(n){return n==null}function Gf(n){return n===0&&1/n==-1/0}function yD(n){return typeof n=="number"&&Number.isInteger(n)&&!Gf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="";function vD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=mb(e)),e=ED(n.get(t),e);return mb(e)}function ED(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case $w:t+="";break;default:t+=l}}return t}function mb(n){return n+$w+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ww(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt=class Fg{constructor(e,t){this.comparator=e,this.root=t||Dr.EMPTY}insert(e,t){return new Fg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dr.BLACK,null,null))}remove(e){return new Fg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gf(this.root,e,this.comparator,!1)}getReverseIterator(){return new gf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gf(this.root,e,this.comparator,!0)}},gf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Dr=class Ds{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ds.RED,this.left=a??Ds.EMPTY,this.right=l??Ds.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ds(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ds.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ds.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ds.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ds.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}};Dr.EMPTY=null,Dr.RED=!0,Dr.BLACK=!1;Dr.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Dr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new Gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gb(this.data.getIterator())}getIteratorFrom(e){return new gb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wt(this.comparator);return t.data=e,t}}class gb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.fields=e,e.sort(gn.comparator)}static empty(){return new Xn([])}unionWith(e){let t=new Wt(gn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Zw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Zw("Invalid base64 string: "+l):l}})(e);return new _n(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l})(e);return new _n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_n.EMPTY_BYTE_STRING=new _n("");const TD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(n){if(nt(!!n,39018),typeof n=="string"){let e=0;const t=TD.exec(n);if(nt(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ot(n.seconds),nanos:Ot(n.nanos)}}function Ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lr(n){return typeof n=="string"?_n.fromBase64String(n):_n.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="server_timestamp",eS="__type__",tS="__previous_value__",nS="__local_write_time__";function U_(n){return(n?.mapValue?.fields||{})[eS]?.stringValue===Jw}function Dd(n){const e=n.mapValue.fields[tS];return U_(e)?Dd(e):e}function gu(n){const e=Vr(n.mapValue.fields[nS].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,t,s,a,l,u,d,g,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=g,this.useFetchStreams=m,this.isUsingEmulator=y}}const Qf="(default)";class _u{constructor(e,t){this.projectId=e,this.database=t||Qf}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===Qf}isEqual(e){return e instanceof _u&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="__type__",wD="__max__",_f={mapValue:{}},sS="__vector__",Yf="value";function jr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?U_(n)?4:AD(n)?9007199254740991:SD(n)?10:11:Ce(28295,{value:n})}function Ji(n,e){if(n===e)return!0;const t=jr(n);if(t!==jr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gu(n).isEqual(gu(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=Vr(a.timestampValue),d=Vr(l.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Lr(a.bytesValue).isEqual(Lr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Ot(a.geoPointValue.latitude)===Ot(l.geoPointValue.latitude)&&Ot(a.geoPointValue.longitude)===Ot(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Ot(a.integerValue)===Ot(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=Ot(a.doubleValue),d=Ot(l.doubleValue);return u===d?Gf(u)===Gf(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return dl(n.arrayValue.values||[],e.arrayValue.values||[],Ji);case 10:case 11:return(function(a,l){const u=a.mapValue.fields||{},d=l.mapValue.fields||{};if(pb(u)!==pb(d))return!1;for(const g in u)if(u.hasOwnProperty(g)&&(d[g]===void 0||!Ji(u[g],d[g])))return!1;return!0})(n,e);default:return Ce(52216,{left:n})}}function yu(n,e){return(n.values||[]).find((t=>Ji(t,e)))!==void 0}function ml(n,e){if(n===e)return 0;const t=jr(n),s=jr(e);if(t!==s)return Ge(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ge(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const d=Ot(l.integerValue||l.doubleValue),g=Ot(u.integerValue||u.doubleValue);return d<g?-1:d>g?1:d===g?0:isNaN(d)?isNaN(g)?0:-1:1})(n,e);case 3:return _b(n.timestampValue,e.timestampValue);case 4:return _b(gu(n),gu(e));case 5:return zg(n.stringValue,e.stringValue);case 6:return(function(l,u){const d=Lr(l),g=Lr(u);return d.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const d=l.split("/"),g=u.split("/");for(let m=0;m<d.length&&m<g.length;m++){const y=Ge(d[m],g[m]);if(y!==0)return y}return Ge(d.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const d=Ge(Ot(l.latitude),Ot(u.latitude));return d!==0?d:Ge(Ot(l.longitude),Ot(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return yb(n.arrayValue,e.arrayValue);case 10:return(function(l,u){const d=l.fields||{},g=u.fields||{},m=d[Yf]?.arrayValue,y=g[Yf]?.arrayValue,b=Ge(m?.values?.length||0,y?.values?.length||0);return b!==0?b:yb(m,y)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===_f.mapValue&&u===_f.mapValue)return 0;if(l===_f.mapValue)return 1;if(u===_f.mapValue)return-1;const d=l.fields||{},g=Object.keys(d),m=u.fields||{},y=Object.keys(m);g.sort(),y.sort();for(let b=0;b<g.length&&b<y.length;++b){const w=zg(g[b],y[b]);if(w!==0)return w;const C=ml(d[g[b]],m[y[b]]);if(C!==0)return C}return Ge(g.length,y.length)})(n.mapValue,e.mapValue);default:throw Ce(23264,{he:t})}}function _b(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ge(n,e);const t=Vr(n),s=Vr(e),a=Ge(t.seconds,s.seconds);return a!==0?a:Ge(t.nanos,s.nanos)}function yb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=ml(t[a],s[a]);if(l)return l}return Ge(t.length,s.length)}function pl(n){return Bg(n)}function Bg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Vr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Lr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return be.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Bg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of s)l?l=!1:a+=",",a+=`${u}:${Bg(t.fields[u])}`;return a+"}"})(n.mapValue):Ce(61005,{value:n})}function xf(n){switch(jr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dd(n);return e?16+xf(e):16;case 5:return 2*n.stringValue.length;case 6:return Lr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+xf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Hr(s.fields,((l,u)=>{a+=l.length+xf(u)})),a})(n.mapValue);default:throw Ce(13486,{value:n})}}function vb(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qg(n){return!!n&&"integerValue"in n}function z_(n){return!!n&&"arrayValue"in n}function Eb(n){return!!n&&"nullValue"in n}function Tb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rf(n){return!!n&&"mapValue"in n}function SD(n){return(n?.mapValue?.fields||{})[iS]?.stringValue===sS}function nu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Hr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=nu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=nu(n.arrayValue.values[t]);return e}return{...n}}function AD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nu(t)}setAll(e){let t=gn.emptyPath(),s={},a=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const g=this.getFieldsMap(t);this.applyChanges(g,s,a),s={},a=[],t=d.popLast()}u?s[d.lastSegment()]=nu(u):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Rf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Hr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Ln(nu(this.value))}}function rS(n){const e=[];return Hr(n.fields,((t,s)=>{const a=new gn([t]);if(Rf(s)){const l=rS(s.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)})),new Xn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,s,a,l,u,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=u,this.documentState=d}static newInvalidDocument(e){return new bn(e,0,De.min(),De.min(),De.min(),Ln.empty(),0)}static newFoundDocument(e,t,s,a){return new bn(e,1,t,De.min(),s,a,0)}static newNoDocument(e,t){return new bn(e,2,t,De.min(),De.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new bn(e,3,t,De.min(),De.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kf{constructor(e,t){this.position=e,this.inclusive=t}}function bb(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?s=be.comparator(be.fromName(u.referenceValue),t.key):s=ml(u,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function wb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ji(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class vu{constructor(e,t="asc"){this.field=e,this.dir=t}}function CD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class aS{}class qt extends aS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new RD(e,t,s):t==="array-contains"?new DD(e,s):t==="in"?new kD(e,s):t==="not-in"?new MD(e,s):t==="array-contains-any"?new OD(e,s):new qt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new ID(e,s):new ND(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ml(t,this.value)):t!==null&&jr(this.value)===jr(t)&&this.matchesComparison(ml(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ai extends aS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ai(e,t)}matches(e){return oS(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oS(n){return n.op==="and"}function lS(n){return xD(n)&&oS(n)}function xD(n){for(const e of n.filters)if(e instanceof Ai)return!1;return!0}function Hg(n){if(n instanceof qt)return n.field.canonicalString()+n.op.toString()+pl(n.value);if(lS(n))return n.filters.map((e=>Hg(e))).join(",");{const e=n.filters.map((t=>Hg(t))).join(",");return`${n.op}(${e})`}}function cS(n,e){return n instanceof qt?(function(s,a){return a instanceof qt&&s.op===a.op&&s.field.isEqual(a.field)&&Ji(s.value,a.value)})(n,e):n instanceof Ai?(function(s,a){return a instanceof Ai&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,u,d)=>l&&cS(u,a.filters[d])),!0):!1})(n,e):void Ce(19439)}function uS(n){return n instanceof qt?(function(t){return`${t.field.canonicalString()} ${t.op} ${pl(t.value)}`})(n):n instanceof Ai?(function(t){return t.op.toString()+" {"+t.getFilters().map(uS).join(" ,")+"}"})(n):"Filter"}class RD extends qt{constructor(e,t,s){super(e,t,s),this.key=be.fromName(s.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class ID extends qt{constructor(e,t){super(e,"in",t),this.keys=hS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ND extends qt{constructor(e,t){super(e,"not-in",t),this.keys=hS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hS(n,e){return(e.arrayValue?.values||[]).map((t=>be.fromName(t.referenceValue)))}class DD extends qt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return z_(t)&&yu(t.arrayValue,this.value)}}class kD extends qt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yu(this.value.arrayValue,t)}}class MD extends qt{constructor(e,t){super(e,"not-in",t)}matches(e){if(yu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yu(this.value.arrayValue,t)}}class OD extends qt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!z_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>yu(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,t=null,s=[],a=[],l=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=u,this.endAt=d,this.Te=null}}function Sb(n,e=null,t=[],s=[],a=null,l=null,u=null){return new PD(n,e,t,s,a,l,u)}function F_(n){const e=ke(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Hg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Nd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>pl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>pl(s))).join(",")),e.Te=t}return e.Te}function B_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wb(n.startAt,e.startAt)&&wb(n.endAt,e.endAt)}function Gg(n){return be.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t=null,s=[],a=[],l=null,u="F",d=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=u,this.startAt=d,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function VD(n,e,t,s,a,l,u,d){return new Dl(n,e,t,s,a,l,u,d)}function kd(n){return new Dl(n)}function Ab(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fS(n){return n.collectionGroup!==null}function iu(n){const e=ke(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Wt(gn.comparator);return u.filters.forEach((g=>{g.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new vu(l,s))})),t.has(gn.keyField().canonicalString())||e.Ie.push(new vu(gn.keyField(),s))}return e.Ie}function Yi(n){const e=ke(n);return e.Ee||(e.Ee=LD(e,iu(n))),e.Ee}function LD(n,e){if(n.limitType==="F")return Sb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new vu(a.field,l)}));const t=n.endAt?new Kf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Kf(n.startAt.position,n.startAt.inclusive):null;return Sb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Qg(n,e){const t=n.filters.concat([e]);return new Dl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xf(n,e,t){return new Dl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Md(n,e){return B_(Yi(n),Yi(e))&&n.limitType===e.limitType}function dS(n){return`${F_(Yi(n))}|lt:${n.limitType}`}function Wo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>uS(a))).join(", ")}]`),Nd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>pl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>pl(a))).join(",")),`Target(${s})`})(Yi(n))}; limitType=${n.limitType})`}function Od(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):be.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of iu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(u,d,g){const m=bb(u,d,g);return u.inclusive?m<=0:m<0})(s.startAt,iu(s),a)||s.endAt&&!(function(u,d,g){const m=bb(u,d,g);return u.inclusive?m>=0:m>0})(s.endAt,iu(s),a))})(n,e)}function jD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mS(n){return(e,t)=>{let s=!1;for(const a of iu(n)){const l=UD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function UD(n,e,t){const s=n.field.isKeyField()?be.comparator(e.key,t.key):(function(l,u,d){const g=u.data.field(l),m=d.data.field(l);return g!==null&&m!==null?ml(g,m):Ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ce(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=new Gt(be.comparator);function Bs(){return zD}const pS=new Gt(be.comparator);function Wc(...n){let e=pS;for(const t of n)e=e.insert(t.key,t);return e}function gS(n){let e=pS;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ka(){return su()}function _S(){return su()}function su(){return new Wa((n=>n.toString()),((n,e)=>n.isEqual(e)))}const FD=new Gt(be.comparator),BD=new Wt(be.comparator);function Qe(...n){let e=BD;for(const t of n)e=e.add(t);return e}const qD=new Wt(Ge);function HD(){return qD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gf(e)?"-0":e}}function yS(n){return{integerValue:""+n}}function GD(n,e){return yD(e)?yS(e):q_(n,e)}/**
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
 */class Pd{constructor(){this._=void 0}}function QD(n,e,t){return n instanceof Eu?(function(a,l){const u={fields:{[eS]:{stringValue:Jw},[nS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&U_(l)&&(l=Dd(l)),l&&(u.fields[tS]=l),{mapValue:u}})(t,e):n instanceof gl?ES(n,e):n instanceof _l?TS(n,e):(function(a,l){const u=vS(a,l),d=Cb(u)+Cb(a.Ae);return qg(u)&&qg(a.Ae)?yS(d):q_(a.serializer,d)})(n,e)}function YD(n,e,t){return n instanceof gl?ES(n,e):n instanceof _l?TS(n,e):t}function vS(n,e){return n instanceof $f?(function(s){return qg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Eu extends Pd{}class gl extends Pd{constructor(e){super(),this.elements=e}}function ES(n,e){const t=bS(e);for(const s of n.elements)t.some((a=>Ji(a,s)))||t.push(s);return{arrayValue:{values:t}}}class _l extends Pd{constructor(e){super(),this.elements=e}}function TS(n,e){let t=bS(e);for(const s of n.elements)t=t.filter((a=>!Ji(a,s)));return{arrayValue:{values:t}}}class $f extends Pd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cb(n){return Ot(n.integerValue||n.doubleValue)}function bS(n){return z_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t){this.field=e,this.transform=t}}function KD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof gl&&a instanceof gl||s instanceof _l&&a instanceof _l?dl(s.elements,a.elements,Ji):s instanceof $f&&a instanceof $f?Ji(s.Ae,a.Ae):s instanceof Eu&&a instanceof Eu})(n.transform,e.transform)}class XD{constructor(e,t){this.version=e,this.transformResults=t}}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function If(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vd{}function wS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ld(n.key,Nn.none()):new Mu(n.key,n.data,Nn.none());{const t=n.data,s=Ln.empty();let a=new Wt(gn.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?s.delete(l):s.set(l,u),a=a.add(l)}return new Gr(n.key,s,new Xn(a.toArray()),Nn.none())}}function $D(n,e,t){n instanceof Mu?(function(a,l,u){const d=a.value.clone(),g=Rb(a.fieldTransforms,l,u.transformResults);d.setAll(g),l.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Gr?(function(a,l,u){if(!If(a.precondition,l))return void l.convertToUnknownDocument(u.version);const d=Rb(a.fieldTransforms,l,u.transformResults),g=l.data;g.setAll(SS(a)),g.setAll(d),l.convertToFoundDocument(u.version,g).setHasCommittedMutations()})(n,e,t):(function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function ru(n,e,t,s){return n instanceof Mu?(function(l,u,d,g){if(!If(l.precondition,u))return d;const m=l.value.clone(),y=Ib(l.fieldTransforms,g,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,s):n instanceof Gr?(function(l,u,d,g){if(!If(l.precondition,u))return d;const m=Ib(l.fieldTransforms,g,u),y=u.data;return y.setAll(SS(l)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((b=>b.field)))})(n,e,t,s):(function(l,u,d){return If(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function WD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=vS(s.transform,a||null);l!=null&&(t===null&&(t=Ln.empty()),t.set(s.field,l))}return t||null}function xb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&dl(s,a,((l,u)=>KD(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mu extends Vd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Gr extends Vd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function SS(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Rb(n,e,t){const s=new Map;nt(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,d=e.data.field(l.field);s.set(l.field,YD(u,d,t[a]))}return s}function Ib(n,e,t){const s=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);s.set(a.field,QD(l,u,e))}return s}class Ld extends Vd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZD extends Vd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&$D(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ru(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ru(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=_S();return this.mutations.forEach((a=>{const l=e.get(a.key),u=l.overlayedDocument;let d=this.applyToLocalView(u,l.mutatedFields);d=t.has(a.key)?null:d;const g=wS(u,d);g!==null&&s.set(a.key,g),u.isValidDocument()||u.convertToNoDocument(De.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Qe())}isEqual(e){return this.batchId===e.batchId&&dl(this.mutations,e.mutations,((t,s)=>xb(t,s)))&&dl(this.baseMutations,e.baseMutations,((t,s)=>xb(t,s)))}}class G_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){nt(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return FD})();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,s[u].version);return new G_(e,t,s,a)}}/**
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
 */class ek{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft,$e;function nk(n){switch(n){case W.OK:return Ce(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ce(15467,{code:n})}}function AS(n){if(n===void 0)return Fs("GRPC error has no .code"),W.UNKNOWN;switch(n){case Ft.OK:return W.OK;case Ft.CANCELLED:return W.CANCELLED;case Ft.UNKNOWN:return W.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return W.INTERNAL;case Ft.UNAVAILABLE:return W.UNAVAILABLE;case Ft.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ft.NOT_FOUND:return W.NOT_FOUND;case Ft.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ft.ABORTED:return W.ABORTED;case Ft.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ft.DATA_LOSS:return W.DATA_LOSS;default:return Ce(39323,{code:n})}}($e=Ft||(Ft={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ik(){return new TextEncoder}/**
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
 */const sk=new Nr([4294967295,4294967295],0);function Nb(n){const e=ik().encode(n),t=new zw;return t.update(e),new Uint8Array(t.digest())}function Db(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Nr([t,s],0),new Nr([a,l],0)]}class Q_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Zc(`Invalid padding: ${t}`);if(s<0)throw new Zc(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Zc(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Zc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Nr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Nr.fromNumber(s)));return a.compare(sk)===1&&(a=new Nr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nb(e),[s,a]=Db(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);if(!this.we(u))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new Q_(l,a,t);return s.forEach((d=>u.insert(d))),u}insert(e){if(this.ge===0)return;const t=Nb(e),[s,a]=Db(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Zc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Ou.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new jd(De.min(),a,new Gt(Ge),Bs(),Qe())}}class Ou{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ou(s,t,Qe(),Qe(),Qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class CS{constructor(e,t){this.targetId=e,this.Ce=t}}class xS{constructor(e,t,s=_n.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class kb{constructor(){this.ve=0,this.Fe=Mb(),this.Me=_n.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Qe(),t=Qe(),s=Qe();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ce(38017,{changeType:l})}})),new Ou(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Mb()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class rk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bs(),this.Je=yf(),this.He=yf(),this.Ye=new Gt(Ge)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Gg(l))if(s===0){const u=new be(l.path);this.et(t,u,bn.newNoDocument(u,De.min()))}else nt(s===1,20013,{expectedCount:s});else{const u=this._t(t);if(u!==s){const d=this.ut(e),g=d?this.ct(d,e,u):1;if(g!==0){this.it(t);const m=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,m)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let u,d;try{u=Lr(s).toUint8Array()}catch(g){if(g instanceof Zw)return fl("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{d=new Q_(u,a,l)}catch(g){return fl(g instanceof Zc?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const d=this.ot(u);if(d){if(l.current&&Gg(d.target)){const g=new be(d.target.path);this.It(g).has(u)||this.Et(u,g)||this.et(u,g,bn.newNoDocument(g,e))}l.Be&&(t.set(u,l.ke()),l.qe())}}));let s=Qe();this.He.forEach(((l,u)=>{let d=!0;u.forEachWhile((g=>{const m=this.ot(g);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const a=new jd(e,t,this.Ye,this.je,s);return this.je=Bs(),this.Je=yf(),this.He=yf(),this.Ye=new Gt(Ge),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new kb,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Wt(Ge),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Wt(Ge),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function yf(){return new Gt(be.comparator)}function Mb(){return new Gt(be.comparator)}const ak={asc:"ASCENDING",desc:"DESCENDING"},ok={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lk={and:"AND",or:"OR"};class ck{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yg(n,e){return n.useProto3Json||Nd(e)?e:{value:e}}function Wf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uk(n,e){return Wf(n,e.toTimestamp())}function Ki(n){return nt(!!n,49232),De.fromTimestamp((function(t){const s=Vr(t);return new Et(s.seconds,s.nanos)})(n))}function Y_(n,e){return Kg(n,e).canonicalString()}function Kg(n,e){const t=(function(a){return new gt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function IS(n){const e=gt.fromString(n);return nt(OS(e),10190,{key:e.toString()}),e}function Xg(n,e){return Y_(n.databaseId,e.path)}function _g(n,e){const t=IS(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new be(DS(t))}function NS(n,e){return Y_(n.databaseId,e)}function hk(n){const e=IS(n);return e.length===4?gt.emptyPath():DS(e)}function $g(n){return new gt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DS(n){return nt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ob(n,e,t){return{name:Xg(n,e),fields:t.value.mapValue.fields}}function fk(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ce(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(m,y){return m.useProto3Json?(nt(y===void 0||typeof y=="string",58123),_n.fromBase64String(y||"")):(nt(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),_n.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const y=m.code===void 0?W.UNKNOWN:AS(m.code);return new ue(y,m.message||"")})(u);t=new xS(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=_g(n,s.document.name),l=Ki(s.document.updateTime),u=s.document.createTime?Ki(s.document.createTime):De.min(),d=new Ln({mapValue:{fields:s.document.fields}}),g=bn.newFoundDocument(a,l,u,d),m=s.targetIds||[],y=s.removedTargetIds||[];t=new Nf(m,y,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=_g(n,s.document),l=s.readTime?Ki(s.readTime):De.min(),u=bn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Nf([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=_g(n,s.document),l=s.removedTargetIds||[];t=new Nf([],l,a,null)}else{if(!("filter"in e))return Ce(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,u=new tk(a,l),d=s.targetId;t=new CS(d,u)}}return t}function dk(n,e){let t;if(e instanceof Mu)t={update:Ob(n,e.key,e.value)};else if(e instanceof Ld)t={delete:Xg(n,e.key)};else if(e instanceof Gr)t={update:Ob(n,e.key,e.data),updateMask:bk(e.fieldMask)};else{if(!(e instanceof ZD))return Ce(16599,{Vt:e.type});t={verify:Xg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,u){const d=u.transform;if(d instanceof Eu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof gl)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof _l)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof $f)return{fieldPath:u.field.canonicalString(),increment:d.Ae};throw Ce(20930,{transform:u.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:uk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ce(27497)})(n,e.precondition)),t}function mk(n,e){return n&&n.length>0?(nt(e!==void 0,14353),n.map((t=>(function(a,l){let u=a.updateTime?Ki(a.updateTime):Ki(l);return u.isEqual(De.min())&&(u=Ki(l)),new XD(u,a.transformResults||[])})(t,e)))):[]}function pk(n,e){return{documents:[NS(n,e.path)]}}function gk(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=NS(n,a);const l=(function(m){if(m.length!==0)return MS(Ai.create(m,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(m){if(m.length!==0)return m.map((y=>(function(w){return{field:Zo(w.field),direction:vk(w.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Yg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{ft:t,parent:a}}function _k(n){let e=hk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){nt(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(b){const w=kS(b);return w instanceof Ai&&lS(w)?w.getFilters():[w]})(t.where));let u=[];t.orderBy&&(u=(function(b){return b.map((w=>(function(M){return new vu(Jo(M.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(b){let w;return w=typeof b=="object"?b.value:b,Nd(w)?null:w})(t.limit));let g=null;t.startAt&&(g=(function(b){const w=!!b.before,C=b.values||[];return new Kf(C,w)})(t.startAt));let m=null;return t.endAt&&(m=(function(b){const w=!b.before,C=b.values||[];return new Kf(C,w)})(t.endAt)),VD(e,a,u,l,d,"F",g,m)}function yk(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kS(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Jo(t.unaryFilter.field);return qt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Jo(t.unaryFilter.field);return qt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Jo(t.unaryFilter.field);return qt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Jo(t.unaryFilter.field);return qt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return qt.create(Jo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ai.create(t.compositeFilter.filters.map((s=>kS(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}})(t.compositeFilter.op))})(n):Ce(30097,{filter:n})}function vk(n){return ak[n]}function Ek(n){return ok[n]}function Tk(n){return lk[n]}function Zo(n){return{fieldPath:n.canonicalString()}}function Jo(n){return gn.fromServerFormat(n.fieldPath)}function MS(n){return n instanceof qt?(function(t){if(t.op==="=="){if(Tb(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NAN"}};if(Eb(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tb(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NOT_NAN"}};if(Eb(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zo(t.field),op:Ek(t.op),value:t.value}}})(n):n instanceof Ai?(function(t){const s=t.getFilters().map((a=>MS(a)));return s.length===1?s[0]:{compositeFilter:{op:Tk(t.op),filters:s}}})(n):Ce(54877,{filter:n})}function bk(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function OS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,s,a,l=De.min(),u=De.min(),d=_n.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=g}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.yt=e}}function Sk(n){const e=_k({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.Cn=new Ck}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(Pr.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class Ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Wt(gt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Wt(gt.comparator)).toArray()}}/**
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
 */const Pb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},PS=41943040;class Vn{static withCacheSize(e){return new Vn(e,Vn.DEFAULT_COLLECTION_PERCENTILE,Vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn.DEFAULT_COLLECTION_PERCENTILE=10,Vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vn.DEFAULT=new Vn(PS,Vn.DEFAULT_COLLECTION_PERCENTILE,Vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vn.DISABLED=new Vn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yl(0)}static cr(){return new yl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="LruGarbageCollector",xk=1048576;function Lb([n,e],[t,s]){const a=Ge(n,t);return a===0?Ge(e,s):a}class Rk{constructor(e){this.Ir=e,this.buffer=new Wt(Lb),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Lb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ik{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){pe(Vb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nl(t)?pe(Vb,"Ignoring IndexedDB error during garbage collection: ",t):await Il(t)}await this.Vr(3e5)}))}}class Nk{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Id.ce);const s=new Rk(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Pb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pb):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,u,d,g,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,u=Date.now(),this.nthSequenceNumber(e,a)))).next((b=>(s=b,d=Date.now(),this.removeTargets(e,s,t)))).next((b=>(l=b,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((b=>(m=Date.now(),$o()<=qe.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${l} targets in `+(g-d)+`ms
	Removed ${b} documents in `+(m-g)+`ms
Total Duration: ${m-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b}))))}}function Dk(n,e){return new Nk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.changes=new Wa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&ru(s.mutation,a,Xn.empty(),Et.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Qe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Qe()){const a=ka();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let u=Wc();return l.forEach(((d,g)=>{u=u.insert(d,g.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const s=ka();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Qe())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,s,a){let l=Bs();const u=su(),d=(function(){return su()})();return t.forEach(((g,m)=>{const y=s.get(m.key);a.has(m.key)&&(y===void 0||y.mutation instanceof Gr)?l=l.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),ru(y.mutation,m,y.mutation.getFieldMask(),Et.now())):u.set(m.key,Xn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((m,y)=>u.set(m,y))),t.forEach(((m,y)=>d.set(m,new Mk(y,u.get(m)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=su();let a=new Gt(((u,d)=>u-d)),l=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((g=>{const m=t.get(g);if(m===null)return;let y=s.get(g)||Xn.empty();y=d.applyToLocalView(m,y),s.set(g,y);const b=(a.get(d.batchId)||Qe()).add(g);a=a.insert(d.batchId,b)}))})).next((()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const g=d.getNext(),m=g.key,y=g.value,b=_S();y.forEach((w=>{if(!l.has(w)){const C=wS(t.get(w),s.get(w));C!==null&&b.set(w,C),l=l.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,b))}return ee.waitFor(u)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(u){return be.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(ka());let d=pu,g=l;return u.next((m=>ee.forEach(m,((y,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next((w=>{g=g.insert(y,w)}))))).next((()=>this.populateOverlays(e,m,l))).next((()=>this.computeViews(e,g,m,Qe()))).next((y=>({batchId:d,changes:gS(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next((s=>{let a=Wc();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let u=Wc();return this.indexManager.getCollectionParents(e,l).next((d=>ee.forEach(d,(g=>{const m=(function(b,w){return new Dl(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,s,a).next((y=>{y.forEach(((b,w)=>{u=u.insert(b,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((u=>{l.forEach(((g,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,bn.newInvalidDocument(y)))}));let d=Wc();return u.forEach(((g,m)=>{const y=l.get(g);y!==void 0&&ru(y.mutation,m,Xn.empty(),Et.now()),Od(t,m)&&(d=d.insert(g,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Ki(a.createTime)}})(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:Sk(a.bundledQuery),readTime:Ki(a.readTime)}})(t)),ee.resolve()}}/**
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
 */class Vk{constructor(){this.overlays=new Gt(be.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ka();return ee.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=ka(),l=t.length+1,u=new be(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const g=d.getNext().value,m=g.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&g.largestBatchId>s&&a.set(g.getKey(),g)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Gt(((m,y)=>m-y));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>s){let y=l.get(m.largestBatchId);y===null&&(y=ka(),l=l.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=ka(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((m,y)=>d.set(m,y))),!(d.size()>=a)););return ee.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const u=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(s.key,new ek(t,s));let l=this.qr.get(t);l===void 0&&(l=Qe(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class Lk{constructor(){this.sessionToken=_n.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.Qr=new Wt(rn.$r),this.Ur=new Wt(rn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new rn(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new rn(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new be(new gt([])),s=new rn(t,e),a=new rn(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(u=>{this.Gr(u),l.push(u.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new be(new gt([])),s=new rn(t,e),a=new rn(t,e+1);let l=Qe();return this.Ur.forEachInRange([s,a],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new rn(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class rn{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return be.comparator(e.key,t.key)||Ge(e.Yr,t.Yr)}static Kr(e,t){return Ge(e.Yr,t.Yr)||be.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Wt(rn.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new JD(l,t,s,a);this.mutationQueue.push(u);for(const d of a)this.Zr=this.Zr.add(new rn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(u)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?j_:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new rn(t,0),a=new rn(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(u=>{const d=this.Xr(u.Yr);l.push(d)})),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Wt(Ge);return t.forEach((a=>{const l=new rn(a,0),u=new rn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,u],(d=>{s=s.add(d.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;be.isDocumentKey(l)||(l=l.child(""));const u=new rn(new be(l),0);let d=new Wt(Ge);return this.Zr.forEachWhile((g=>{const m=g.key.path;return!!s.isPrefixOf(m)&&(m.length===a&&(d=d.add(g.Yr)),!0)}),u),ee.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){nt(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,(a=>{const l=new rn(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new rn(t,0),a=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.ri=e,this.docs=(function(){return new Gt(be.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,u=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():bn.newInvalidDocument(t))}getEntries(e,t){let s=Bs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():bn.newInvalidDocument(a))})),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Bs();const u=t.path,d=new be(u.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(d);for(;g.hasNext();){const{key:m,value:{document:y}}=g.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||mD(dD(y),s)<=0||(a.has(y.key)||Od(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ce(9500)}ii(e,t){return ee.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new zk(this)}getSize(e){return ee.resolve(this.size)}}class zk extends kk{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.persistence=e,this.si=new Wa((t=>F_(t)),B_),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.oi=0,this._i=new K_,this.targetCount=0,this.ai=yl.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new yl(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((u,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(u),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),ee.waitFor(l).next((()=>a))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((u=>{l.push(a.markPotentiallyOrphaned(e,u))})),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t){this.ui={},this.overlays={},this.ci=new Id(0),this.li=!1,this.li=!0,this.hi=new Lk,this.referenceDelegate=e(this),this.Pi=new Fk(this),this.indexManager=new Ak,this.remoteDocumentCache=(function(a){return new Uk(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new wk(t),this.Ii=new Pk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new jk(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){pe("MemoryPersistence","Starting transaction:",e);const a=new Bk(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class Bk extends gD{constructor(e){super(),this.currentSequenceNumber=e}}class X_{constructor(e){this.persistence=e,this.Ri=new K_,this.Vi=null}static mi(e){return new X_(e)}get fi(){if(this.Vi)return this.Vi;throw Ce(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const a=be.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,De.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Zf{constructor(e,t){this.persistence=e,this.pi=new Wa((s=>vD(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=Dk(this,t)}static mi(e,t){return new Zf(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return ee.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?ee.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(u=>this.br(e,u,t).next((d=>{d||(s++,l.removeEntry(u,De.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xf(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Qe(),a=Qe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new $_(e,t.fromCache,s,a)}}/**
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
 */class qk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return DR()?8:_D(wn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new qk;return this.Ss(e,t,u).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,u,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?($o()<=qe.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",Wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):($o()<=qe.DEBUG&&pe("QueryEngine","Query:",Wo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?($o()<=qe.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",Wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yi(t))):ee.resolve())}ys(e,t){if(Ab(t))return ee.resolve(null);let s=Yi(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Xf(t,null,"F"),s=Yi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const u=Qe(...l);return this.ps.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,s).next((g=>{const m=this.Ds(t,d);return this.Cs(t,m,u,g.readTime)?this.ys(e,Xf(t,null,"F")):this.vs(e,m,t,g)}))))})))))}ws(e,t,s,a){return Ab(t)||a.isEqual(De.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((l=>{const u=this.Ds(t,l);return this.Cs(t,u,s,a)?ee.resolve(null):($o()<=qe.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Wo(t)),this.vs(e,u,t,fD(a,pu)).next((d=>d)))}))}Ds(e,t){let s=new Wt(mS(e));return t.forEach(((a,l)=>{Od(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return $o()<=qe.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Wo(t)),this.ps.getDocumentsMatchingQuery(e,t,Pr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="LocalStore",Gk=3e8;class Qk{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Gt(Ge),this.xs=new Wa((l=>F_(l)),B_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ok(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Yk(n,e,t,s){return new Qk(n,e,t,s)}async function LS(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const u=[],d=[];let g=Qe();for(const m of a){u.push(m.batchId);for(const y of m.mutations)g=g.add(y.key)}for(const m of l){d.push(m.batchId);for(const y of m.mutations)g=g.add(y.key)}return t.localDocuments.getDocuments(s,g).next((m=>({Ls:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function Kk(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,g,m,y){const b=m.batch,w=b.keys();let C=ee.resolve();return w.forEach((M=>{C=C.next((()=>y.getEntry(g,M))).next((j=>{const z=m.docVersions.get(M);nt(z!==null,48541),j.version.compareTo(z)<0&&(b.applyToRemoteDocument(j,m),j.isValidDocument()&&(j.setReadTime(m.commitVersion),y.addEntry(j)))}))})),C.next((()=>d.mutationQueue.removeMutationBatch(g,b)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let g=Qe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(g=g.add(d.batch.mutations[m].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function jS(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Xk(n,e){const t=ke(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,b)=>{const w=a.get(b);if(!w)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,b).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,b))));let C=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?C=C.withResumeToken(_n.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):y.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(y.resumeToken,s)),a=a.insert(b,C),(function(j,z,ie){return j.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=Gk?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0})(w,C,y)&&d.push(t.Pi.updateTargetData(l,C))}));let g=Bs(),m=Qe();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push($k(l,u,e.documentUpdates).next((y=>{g=y.ks,m=y.qs}))),!s.isEqual(De.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((b=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return ee.waitFor(d).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,m))).next((()=>g))})).then((l=>(t.Ms=a,l)))}function $k(n,e,t){let s=Qe(),a=Qe();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let u=Bs();return t.forEach(((d,g)=>{const m=l.get(d);g.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),g.isNoDocument()&&g.version.isEqual(De.min())?(e.removeEntry(d,g.readTime),u=u.insert(d,g)):!m.isValidDocument()||g.version.compareTo(m.version)>0||g.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(g),u=u.insert(d,g)):pe(W_,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",g.version)})),{ks:u,qs:a}}))}function Wk(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=j_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Zk(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,ee.resolve(a)):t.Pi.allocateTargetId(s).next((u=>(a=new xr(e,u,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Wg(n,e,t){const s=ke(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(u=>s.persistence.referenceDelegate.removeTarget(u,a)))}catch(u){if(!Nl(u))throw u;pe(W_,`Failed to update sequence numbers for target ${e}: ${u}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function jb(n,e,t){const s=ke(n);let a=De.min(),l=Qe();return s.persistence.runTransaction("Execute query","readwrite",(u=>(function(g,m,y){const b=ke(g),w=b.xs.get(y);return w!==void 0?ee.resolve(b.Ms.get(w)):b.Pi.getTargetData(m,y)})(s,u,Yi(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(u,d.targetId).next((g=>{l=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(u,e,t?a:De.min(),t?l:Qe()))).next((d=>(Jk(s,jD(e),d),{documents:d,Qs:l})))))}function Jk(n,e,t){let s=n.Os.get(e)||De.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Ub{constructor(){this.activeTargetIds=HD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eM{constructor(){this.Mo=new Ub,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ub,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="ConnectivityMonitor";class Fb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pe(zb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){pe(zb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vf=null;function Zg(){return vf===null?vf=(function(){return 268435456+Math.round(2147483648*Math.random())})():vf++,"0x"+vf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="RestConnection",nM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Qf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const u=Zg(),d=this.zo(e,t.toUriEncodedString());pe(yg,`Sending RPC '${e}' ${u}:`,d,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,a,l);const{host:m}=new URL(d),y=qr(m);return this.Jo(e,d,g,s,y).then((b=>(pe(yg,`Received RPC '${e}' ${u}: `,b),b)),(b=>{throw fl(yg,`RPC '${e}' ${u} failed with error: `,b,"url: ",d,"request:",s),b}))}Ho(e,t,s,a,l,u){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=nM[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="WebChannelConnection";class rM extends iM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const u=Zg();return new Promise(((d,g)=>{const m=new Fw;m.setWithCredentials(!0),m.listenOnce(Bw.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Cf.NO_ERROR:const b=m.getResponseJson();pe(En,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(b)),d(b);break;case Cf.TIMEOUT:pe(En,`RPC '${e}' ${u} timed out`),g(new ue(W.DEADLINE_EXCEEDED,"Request time out"));break;case Cf.HTTP_ERROR:const w=m.getStatus();if(pe(En,`RPC '${e}' ${u} failed with status:`,w,"response text:",m.getResponseText()),w>0){let C=m.getResponseJson();Array.isArray(C)&&(C=C[0]);const M=C?.error;if(M&&M.status&&M.message){const j=(function(ie){const te=ie.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(te)>=0?te:W.UNKNOWN})(M.status);g(new ue(j,M.message))}else g(new ue(W.UNKNOWN,"Server responded with status "+m.getStatus()))}else g(new ue(W.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{l_:e,streamId:u,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{pe(En,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(a);pe(En,`RPC '${e}' ${u} sending request:`,a),m.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Zg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=Gw(),d=Hw(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(g.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const y=l.join("");pe(En,`Creating RPC '${e}' stream ${a}: ${y}`,g);const b=u.createWebChannel(y,g);this.I_(b);let w=!1,C=!1;const M=new sM({Yo:z=>{C?pe(En,`Not sending because RPC '${e}' stream ${a} is closed:`,z):(w||(pe(En,`Opening RPC '${e}' stream ${a} transport.`),b.open(),w=!0),pe(En,`RPC '${e}' stream ${a} sending:`,z),b.send(z))},Zo:()=>b.close()}),j=(z,ie,te)=>{z.listen(ie,(re=>{try{te(re)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return j(b,$c.EventType.OPEN,(()=>{C||(pe(En,`RPC '${e}' stream ${a} transport opened.`),M.o_())})),j(b,$c.EventType.CLOSE,(()=>{C||(C=!0,pe(En,`RPC '${e}' stream ${a} transport closed`),M.a_(),this.E_(b))})),j(b,$c.EventType.ERROR,(z=>{C||(C=!0,fl(En,`RPC '${e}' stream ${a} transport errored. Name:`,z.name,"Message:",z.message),M.a_(new ue(W.UNAVAILABLE,"The operation could not be completed")))})),j(b,$c.EventType.MESSAGE,(z=>{if(!C){const ie=z.data[0];nt(!!ie,16349);const te=ie,re=te?.error||te[0]?.error;if(re){pe(En,`RPC '${e}' stream ${a} received error:`,re);const _e=re.status;let ae=(function(x){const I=Ft[x];if(I!==void 0)return AS(I)})(_e),fe=re.message;ae===void 0&&(ae=W.INTERNAL,fe="Unknown error status: "+_e+" with message "+re.message),C=!0,M.a_(new ue(ae,fe)),b.close()}else pe(En,`RPC '${e}' stream ${a} received:`,ie),M.u_(ie)}})),j(d,qw.STAT_EVENT,(z=>{z.stat===Ug.PROXY?pe(En,`RPC '${e}' stream ${a} detected buffering proxy`):z.stat===Ug.NOPROXY&&pe(En,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{M.__()}),0),M}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function vg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){return new ck(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&pe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="PersistentStream";class zS{constructor(e,t,s,a,l,u,d,g){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new US(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Fs(t.toString()),Fs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ue(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return pe(Bb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(pe(Bb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class aM extends zS{constructor(e,t,s,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=fk(this.serializer,e),s=(function(l){if(!("targetChange"in l))return De.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?De.min():u.readTime?Ki(u.readTime):De.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=$g(this.serializer),t.addTarget=(function(l,u){let d;const g=u.target;if(d=Gg(g)?{documents:pk(l,g)}:{query:gk(l,g).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=RS(l,u.resumeToken);const m=Yg(l,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(De.min())>0){d.readTime=Wf(l,u.snapshotVersion.toTimestamp());const m=Yg(l,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const s=yk(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=$g(this.serializer),t.removeTarget=e,this.q_(t)}}class oM extends zS{constructor(e,t,s,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return nt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,nt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){nt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=mk(e.writeResults,e.commitTime),s=Ki(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=$g(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>dk(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{}class cM extends lM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ue(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Go(e,Kg(t,s),a,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(W.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Ho(e,Kg(t,s),a,u,d,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(W.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class uM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fs(t),this.aa=!1):pe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="RemoteStore";class hM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((u=>{s.enqueueAndForget((async()=>{Za(this)&&(pe(Ha,"Restarting streams for network reachability change."),await(async function(g){const m=ke(g);m.Ea.add(4),await Pu(m),m.Ra.set("Unknown"),m.Ea.delete(4),await zd(m)})(this))}))})),this.Ra=new uM(s,a)}}async function zd(n){if(Za(n))for(const e of n.da)await e(!0)}async function Pu(n){for(const e of n.da)await e(!1)}function FS(n,e){const t=ke(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ty(t)?ey(t):kl(t).O_()&&J_(t,e))}function Z_(n,e){const t=ke(n),s=kl(t);t.Ia.delete(e),s.O_()&&BS(t,e),t.Ia.size===0&&(s.O_()?s.L_():Za(t)&&t.Ra.set("Unknown"))}function J_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}kl(n).Y_(e)}function BS(n,e){n.Va.Ue(e),kl(n).Z_(e)}function ey(n){n.Va=new rk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),kl(n).start(),n.Ra.ua()}function ty(n){return Za(n)&&!kl(n).x_()&&n.Ia.size>0}function Za(n){return ke(n).Ea.size===0}function qS(n){n.Va=void 0}async function fM(n){n.Ra.set("Online")}async function dM(n){n.Ia.forEach(((e,t)=>{J_(n,e)}))}async function mM(n,e){qS(n),ty(n)?(n.Ra.ha(e),ey(n)):n.Ra.set("Unknown")}async function pM(n,e,t){if(n.Ra.set("Online"),e instanceof xS&&e.state===2&&e.cause)try{await(async function(a,l){const u=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){pe(Ha,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Jf(n,s)}else if(e instanceof Nf?n.Va.Ze(e):e instanceof CS?n.Va.st(e):n.Va.tt(e),!t.isEqual(De.min()))try{const s=await jS(n.localStore);t.compareTo(s)>=0&&await(function(l,u){const d=l.Va.Tt(u);return d.targetChanges.forEach(((g,m)=>{if(g.resumeToken.approximateByteSize()>0){const y=l.Ia.get(m);y&&l.Ia.set(m,y.withResumeToken(g.resumeToken,u))}})),d.targetMismatches.forEach(((g,m)=>{const y=l.Ia.get(g);if(!y)return;l.Ia.set(g,y.withResumeToken(_n.EMPTY_BYTE_STRING,y.snapshotVersion)),BS(l,g);const b=new xr(y.target,g,m,y.sequenceNumber);J_(l,b)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){pe(Ha,"Failed to raise snapshot:",s),await Jf(n,s)}}async function Jf(n,e,t){if(!Nl(e))throw e;n.Ea.add(1),await Pu(n),n.Ra.set("Offline"),t||(t=()=>jS(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{pe(Ha,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await zd(n)}))}function HS(n,e){return e().catch((t=>Jf(n,t,e)))}async function Fd(n){const e=ke(n),t=Ur(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:j_;for(;gM(e);)try{const a=await Wk(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,_M(e,a)}catch(a){await Jf(e,a)}GS(e)&&QS(e)}function gM(n){return Za(n)&&n.Ta.length<10}function _M(n,e){n.Ta.push(e);const t=Ur(n);t.O_()&&t.X_&&t.ea(e.mutations)}function GS(n){return Za(n)&&!Ur(n).x_()&&n.Ta.length>0}function QS(n){Ur(n).start()}async function yM(n){Ur(n).ra()}async function vM(n){const e=Ur(n);for(const t of n.Ta)e.ea(t.mutations)}async function EM(n,e,t){const s=n.Ta.shift(),a=G_.from(s,e,t);await HS(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Fd(n)}async function TM(n,e){e&&Ur(n).X_&&await(async function(s,a){if((function(u){return nk(u)&&u!==W.ABORTED})(a.code)){const l=s.Ta.shift();Ur(s).B_(),await HS(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Fd(s)}})(n,e),GS(n)&&QS(n)}async function qb(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),pe(Ha,"RemoteStore received new credentials");const s=Za(t);t.Ea.add(3),await Pu(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zd(t)}async function bM(n,e){const t=ke(n);e?(t.Ea.delete(2),await zd(t)):e||(t.Ea.add(2),await Pu(t),t.Ra.set("Unknown"))}function kl(n){return n.ma||(n.ma=(function(t,s,a){const l=ke(t);return l.sa(),new aM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:fM.bind(null,n),t_:dM.bind(null,n),r_:mM.bind(null,n),H_:pM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),ty(n)?ey(n):n.Ra.set("Unknown")):(await n.ma.stop(),qS(n))}))),n.ma}function Ur(n){return n.fa||(n.fa=(function(t,s,a){const l=ke(t);return l.sa(),new oM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:yM.bind(null,n),r_:TM.bind(null,n),ta:vM.bind(null,n),na:EM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Fd(n)):(await n.fa.stop(),n.Ta.length>0&&(pe(Ha,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const u=Date.now()+s,d=new ny(e,t,u,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iy(n,e){if(Fs("AsyncQueue",`${e}: ${n}`),Nl(n))return new ue(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{static emptySet(e){return new rl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||be.comparator(t.key,s.key):(t,s)=>be.comparator(t.key,s.key),this.keyedMap=Wc(),this.sortedSet=new Gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new rl;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(){this.ga=new Gt(be.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ce(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class vl{constructor(e,t,s,a,l,u,d,g,m){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=g,this.hasCachedResults=m}static fromInitialDocuments(e,t,s,a,l){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new vl(e,t,rl.emptySet(t),u,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class SM{constructor(){this.queries=Gb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=ke(t),l=a.queries;a.queries=Gb(),l.forEach(((u,d)=>{for(const g of d.Sa)g.onError(s)}))})(this,new ue(W.ABORTED,"Firestore shutting down"))}}function Gb(){return new Wa((n=>dS(n)),Md)}async function sy(n,e){const t=ke(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new wM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=iy(u,`Initialization of query '${Wo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ay(t)}async function ry(n,e){const t=ke(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function AM(n,e){const t=ke(n);let s=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const d of u.Sa)d.Fa(a)&&(s=!0);u.wa=a}}s&&ay(t)}function CM(n,e,t){const s=ke(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function ay(n){n.Ca.forEach((e=>{e.next()}))}var Jg,Qb;(Qb=Jg||(Jg={})).Ma="default",Qb.Cache="cache";class oy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new vl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Jg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.key=e}}class KS{constructor(e){this.key=e}}class xM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Qe(),this.mutatedKeys=Qe(),this.eu=mS(e),this.tu=new rl(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Hb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const g=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,b)=>{const w=a.get(y),C=Od(this.query,b)?b:null,M=!!w&&this.mutatedKeys.has(w.key),j=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let z=!1;w&&C?w.data.isEqual(C.data)?M!==j&&(s.track({type:3,doc:C}),z=!0):this.su(w,C)||(s.track({type:2,doc:C}),z=!0,(g&&this.eu(C,g)>0||m&&this.eu(C,m)<0)&&(d=!0)):!w&&C?(s.track({type:0,doc:C}),z=!0):w&&!C&&(s.track({type:1,doc:w}),z=!0,(g||m)&&(d=!0)),z&&(C?(u=u.add(C),l=j?l.add(y):l.delete(y)):(u=u.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:u,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((y,b)=>(function(C,M){const j=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{Rt:z})}};return j(C)-j(M)})(y.type,b.type)||this.eu(y.doc,b.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],g=this.Xa.size===0&&this.current&&!a?1:0,m=g!==this.Za;return this.Za=g,u.length!==0||m?{snapshot:new vl(this.query,e.tu,l,u,e.mutatedKeys,g===0,m,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Qe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new KS(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new YS(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Qe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ly="SyncEngine";class RM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class IM{constructor(e){this.key=e,this.hu=!1}}class NM{constructor(e,t,s,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Wa((d=>dS(d)),Md),this.Iu=new Map,this.Eu=new Set,this.du=new Gt(be.comparator),this.Au=new Map,this.Ru=new K_,this.Vu={},this.mu=new Map,this.fu=yl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function DM(n,e,t=!0){const s=eA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await XS(s,e,t,!0),a}async function kM(n,e){const t=eA(n);await XS(t,e,!0,!1)}async function XS(n,e,t,s){const a=await Zk(n.localStore,Yi(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await MM(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&FS(n.remoteStore,a),d}async function MM(n,e,t,s,a){n.pu=(b,w,C)=>(async function(j,z,ie,te){let re=z.view.ru(ie);re.Cs&&(re=await jb(j.localStore,z.query,!1).then((({documents:N})=>z.view.ru(N,re))));const _e=te&&te.targetChanges.get(z.targetId),ae=te&&te.targetMismatches.get(z.targetId)!=null,fe=z.view.applyChanges(re,j.isPrimaryClient,_e,ae);return Kb(j,z.targetId,fe.au),fe.snapshot})(n,b,w,C);const l=await jb(n.localStore,e,!0),u=new xM(e,l.Qs),d=u.ru(l.documents),g=Ou.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,g);Kb(n,t,m.au);const y=new RM(e,t,u);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),m.snapshot}async function OM(n,e,t){const s=ke(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((u=>!Md(u,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Wg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Z_(s.remoteStore,a.targetId),e_(s,a.targetId)})).catch(Il)):(e_(s,a.targetId),await Wg(s.localStore,a.targetId,!0))}async function PM(n,e){const t=ke(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Z_(t.remoteStore,s.targetId))}async function VM(n,e,t){const s=qM(n);try{const a=await(function(u,d){const g=ke(u),m=Et.now(),y=d.reduce(((C,M)=>C.add(M.key)),Qe());let b,w;return g.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let M=Bs(),j=Qe();return g.Ns.getEntries(C,y).next((z=>{M=z,M.forEach(((ie,te)=>{te.isValidDocument()||(j=j.add(ie))}))})).next((()=>g.localDocuments.getOverlayedDocuments(C,M))).next((z=>{b=z;const ie=[];for(const te of d){const re=WD(te,b.get(te.key).overlayedDocument);re!=null&&ie.push(new Gr(te.key,re,rS(re.value.mapValue),Nn.exists(!0)))}return g.mutationQueue.addMutationBatch(C,m,ie,d)})).next((z=>{w=z;const ie=z.applyToLocalDocumentSet(b,j);return g.documentOverlayCache.saveOverlays(C,z.batchId,ie)}))})).then((()=>({batchId:w.batchId,changes:gS(b)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(u,d,g){let m=u.Vu[u.currentUser.toKey()];m||(m=new Gt(Ge)),m=m.insert(d,g),u.Vu[u.currentUser.toKey()]=m})(s,a.batchId,t),await Vu(s,a.changes),await Fd(s.remoteStore)}catch(a){const l=iy(a,"Failed to persist write");t.reject(l)}}async function $S(n,e){const t=ke(n);try{const s=await Xk(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const u=t.Au.get(l);u&&(nt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.hu=!0:a.modifiedDocuments.size>0?nt(u.hu,14607):a.removedDocuments.size>0&&(nt(u.hu,42227),u.hu=!1))})),await Vu(t,s,e)}catch(s){await Il(s)}}function Yb(n,e,t){const s=ke(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,u)=>{const d=u.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(u,d){const g=ke(u);g.onlineState=d;let m=!1;g.queries.forEach(((y,b)=>{for(const w of b.Sa)w.va(d)&&(m=!0)})),m&&ay(g)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LM(n,e,t){const s=ke(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let u=new Gt(be.comparator);u=u.insert(l,bn.newNoDocument(l,De.min()));const d=Qe().add(l),g=new jd(De.min(),new Map,new Gt(Ge),u,d);await $S(s,g),s.du=s.du.remove(l),s.Au.delete(e),cy(s)}else await Wg(s.localStore,e,!1).then((()=>e_(s,e,t))).catch(Il)}async function jM(n,e){const t=ke(n),s=e.batch.batchId;try{const a=await Kk(t.localStore,e);ZS(t,s,null),WS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Vu(t,a)}catch(a){await Il(a)}}async function UM(n,e,t){const s=ke(n);try{const a=await(function(u,d){const g=ke(u);return g.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let y;return g.mutationQueue.lookupMutationBatch(m,d).next((b=>(nt(b!==null,37113),y=b.keys(),g.mutationQueue.removeMutationBatch(m,b)))).next((()=>g.mutationQueue.performConsistencyCheck(m))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(m,y,d))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y))).next((()=>g.localDocuments.getDocuments(m,y)))}))})(s.localStore,e);ZS(s,e,t),WS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Vu(s,a)}catch(a){await Il(a)}}function WS(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function ZS(n,e,t){const s=ke(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function e_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||JS(n,s)}))}function JS(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Z_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),cy(n))}function Kb(n,e,t){for(const s of t)s instanceof YS?(n.Ru.addReference(s.key,e),zM(n,s)):s instanceof KS?(pe(ly,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||JS(n,s.key)):Ce(19791,{wu:s})}function zM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(pe(ly,"New document in limbo: "+t),n.Eu.add(s),cy(n))}function cy(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new be(gt.fromString(e)),s=n.fu.next();n.Au.set(s,new IM(t)),n.du=n.du.insert(t,s),FS(n.remoteStore,new xr(Yi(kd(t.path)),s,"TargetPurposeLimboResolution",Id.ce))}}async function Vu(n,e,t){const s=ke(n),a=[],l=[],u=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,g)=>{u.push(s.pu(g,e,t).then((m=>{if((m||t)&&s.isPrimaryClient){const y=m?!m.fromCache:t?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,y?"current":"not-current")}if(m){a.push(m);const y=$_.As(g.targetId,m);l.push(y)}})))})),await Promise.all(u),s.Pu.H_(a),await(async function(g,m){const y=ke(g);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>ee.forEach(m,(w=>ee.forEach(w.Es,(C=>y.persistence.referenceDelegate.addReference(b,w.targetId,C))).next((()=>ee.forEach(w.ds,(C=>y.persistence.referenceDelegate.removeReference(b,w.targetId,C)))))))))}catch(b){if(!Nl(b))throw b;pe(W_,"Failed to update sequence numbers: "+b)}for(const b of m){const w=b.targetId;if(!b.fromCache){const C=y.Ms.get(w),M=C.snapshotVersion,j=C.withLastLimboFreeSnapshotVersion(M);y.Ms=y.Ms.insert(w,j)}}})(s.localStore,l))}async function FM(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){pe(ly,"User change. New user:",e.toKey());const s=await LS(t.localStore,e);t.currentUser=e,(function(l,u){l.mu.forEach((d=>{d.forEach((g=>{g.reject(new ue(W.CANCELLED,u))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vu(t,s.Ls)}}function BM(n,e){const t=ke(n),s=t.Au.get(e);if(s&&s.hu)return Qe().add(s.key);{let a=Qe();const l=t.Iu.get(e);if(!l)return a;for(const u of l){const d=t.Tu.get(u);a=a.unionWith(d.view.nu)}return a}}function eA(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$S.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LM.bind(null,e),e.Pu.H_=AM.bind(null,e.eventManager),e.Pu.yu=CM.bind(null,e.eventManager),e}function qM(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UM.bind(null,e),e}class ed{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ud(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Yk(this.persistence,new Hk,e.initialUser,this.serializer)}Cu(e){return new VS(X_.mi,this.serializer)}Du(e){return new eM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ed.provider={build:()=>new ed};class HM extends ed{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){nt(this.persistence.referenceDelegate instanceof Zf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ik(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Vn.withCacheSize(this.cacheSizeBytes):Vn.DEFAULT;return new VS((s=>Zf.mi(s,t)),this.serializer)}}class t_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=FM.bind(null,this.syncEngine),await bM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new SM})()}createDatastore(e){const t=Ud(e.databaseInfo.databaseId),s=(function(l){return new rM(l)})(e.databaseInfo);return(function(l,u,d,g){return new cM(l,u,d,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,u,d){return new hM(s,a,l,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Yb(this.syncEngine,t,0)),(function(){return Fb.v()?new Fb:new tM})())}createSyncEngine(e,t){return(function(a,l,u,d,g,m,y){const b=new NM(a,l,u,d,g,m);return y&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=ke(t);pe(Ha,"RemoteStore shutting down."),s.Ea.add(5),await Pu(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}t_.provider={build:()=>new t_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="FirestoreClient";class GM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Tn.UNAUTHENTICATED,this.clientId=L_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async u=>{pe(zr,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(s,(u=>(pe(zr,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=iy(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Eg(n,e){n.asyncQueue.verifyOperationInProgress(),pe(zr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await LS(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Xb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QM(n);pe(zr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>qb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>qb(e.remoteStore,a))),n._onlineComponents=e}async function QM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe(zr,"Using user provided OfflineComponentProvider");try{await Eg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===W.FAILED_PRECONDITION||a.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;fl("Error using user provided cache. Falling back to memory cache: "+t),await Eg(n,new ed)}}else pe(zr,"Using default OfflineComponentProvider"),await Eg(n,new HM(void 0));return n._offlineComponents}async function tA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe(zr,"Using user provided OnlineComponentProvider"),await Xb(n,n._uninitializedComponentsProvider._online)):(pe(zr,"Using default OnlineComponentProvider"),await Xb(n,new t_))),n._onlineComponents}function YM(n){return tA(n).then((e=>e.syncEngine))}async function td(n){const e=await tA(n),t=e.eventManager;return t.onListen=DM.bind(null,e.syncEngine),t.onUnlisten=OM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PM.bind(null,e.syncEngine),t}function KM(n,e,t={}){const s=new Ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,d,g,m){const y=new uy({next:w=>{y.Nu(),u.enqueueAndForget((()=>ry(l,b)));const C=w.docs.has(d);!C&&w.fromCache?m.reject(new ue(W.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&g&&g.source==="server"?m.reject(new ue(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),b=new oy(kd(d.path),y,{includeMetadataChanges:!0,qa:!0});return sy(l,b)})(await td(n),n.asyncQueue,e,t,s))),s.promise}function XM(n,e,t={}){const s=new Ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,d,g,m){const y=new uy({next:w=>{y.Nu(),u.enqueueAndForget((()=>ry(l,b))),w.fromCache&&g.source==="server"?m.reject(new ue(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),b=new oy(d,y,{includeMetadataChanges:!0,qa:!0});return sy(l,b)})(await td(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */const $b=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="firestore.googleapis.com",Wb=!0;class Zb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iA,this.ssl=Wb}else this.host=e.host,this.ssl=e.ssl??Wb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=PS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xk)throw new ue(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new tD;switch(s.type){case"firstParty":return new rD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=$b.get(t);s&&(pe("ComponentProvider","Removing Datastore"),$b.delete(t),s.terminate())})(this),Promise.resolve()}}function $M(n,e,t,s={}){n=In(n,Bd);const a=qr(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(T_(`https://${d}`),b_("Firestore",!0)),l.host!==iA&&l.host!==d&&fl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:d,ssl:a,emulatorOptions:s};if(!Wi(g,u)&&(n._setSettings(g),s.mockUserToken)){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Tn.MOCK_USER;else{m=nw(s.mockUserToken,n._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ue(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Tn(b)}n._authCredentials=new nD(new Yw(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class Rt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ku(t,Rt._jsonSchema))return new Rt(e,s||null,new be(gt.fromString(t.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:Ht("string",Rt._jsonSchemaVersion),referencePath:Ht("string")};class kr extends Qs{constructor(e,t,s){super(e,t,kd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new be(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function Pt(n,e,...t){if(n=_t(n),Kw("collection","path",e),n instanceof Bd){const s=gt.fromString(e,...t);return hb(s),new kr(n,null,s)}{if(!(n instanceof Rt||n instanceof kr))throw new ue(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(gt.fromString(e,...t));return hb(s),new kr(n.firestore,null,s)}}function vt(n,e,...t){if(n=_t(n),arguments.length===1&&(e=L_.newId()),Kw("doc","path",e),n instanceof Bd){const s=gt.fromString(e,...t);return ub(s),new Rt(n,null,new be(s))}{if(!(n instanceof Rt||n instanceof kr))throw new ue(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(gt.fromString(e,...t));return ub(s),new Rt(n.firestore,n instanceof kr?n.converter:null,new be(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="AsyncQueue";class e1{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new US(this,"async_queue_retry"),this._c=()=>{const s=vg();s&&pe(Jb,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=vg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=vg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ls;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Nl(e))throw e;pe(Jb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Fs("INTERNAL UNHANDLED ERROR: ",t1(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=ny.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Ce(47125,{Pc:t1(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function t1(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function n1(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class es extends Bd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new e1,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new e1(e),this._firestoreClient=void 0,await e}}}function WM(n,e){const t=typeof n=="object"?n:A_(),s=typeof n=="string"?n:Qf,a=Sd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=J1("firestore");l&&$M(a,...l)}return a}function Lu(n){if(n._terminated)throw new ue(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ZM(n),n._firestoreClient}function ZM(n){const e=n._freezeSettings(),t=(function(a,l,u,d){return new bD(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new GM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hi(_n.fromBase64String(e))}catch(t){throw new ue(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hi(_n.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ku(e,hi._jsonSchema))return hi.fromBase64String(e.bytes)}}hi._jsonSchemaVersion="firestore/bytes/1.0",hi._jsonSchema={type:Ht("string",hi._jsonSchemaVersion),bytes:Ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xi._jsonSchemaVersion}}static fromJSON(e){if(ku(e,Xi._jsonSchema))return new Xi(e.latitude,e.longitude)}}Xi._jsonSchemaVersion="firestore/geoPoint/1.0",Xi._jsonSchema={type:Ht("string",Xi._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class $i{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$i._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ku(e,$i._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $i(e.vectorValues);throw new ue(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$i._jsonSchemaVersion="firestore/vectorValue/1.0",$i._jsonSchema={type:Ht("string",$i._jsonSchemaVersion),vectorValues:Ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=/^__.*__$/;class eO{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mu(e,this.data,t,this.fieldTransforms)}}class sA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Gr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce(40011,{Ac:n})}}class qd{constructor(e,t,s,a,l,u){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new qd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return nd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(rA(this.Ac)&&JM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tO{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ud(e)}Cc(e,t,s,a=!1){return new qd({Ac:e,methodName:t,Dc:s,path:gn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uu(n){const e=n._freezeSettings(),t=Ud(n._databaseId);return new tO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hy(n,e,t,s,a,l={}){const u=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);py("Data must be an object, but it was:",u,s);const d=cA(s,u);let g,m;if(l.merge)g=new Xn(u.fieldMask),m=u.fieldTransforms;else if(l.mergeFields){const y=[];for(const b of l.mergeFields){const w=n_(e,b,t);if(!u.contains(w))throw new ue(W.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);hA(y,w)||y.push(w)}g=new Xn(y),m=u.fieldTransforms.filter((b=>g.covers(b.field)))}else g=null,m=u.fieldTransforms;return new eO(new Ln(d),g,m)}class Hd extends Ml{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hd}}function aA(n,e,t){return new qd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fy extends Ml{_toFieldTransform(e){return new H_(e.path,new Eu)}isEqual(e){return e instanceof fy}}class dy extends Ml{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=aA(this,e,!0),s=this.vc.map((l=>Ja(l,t))),a=new gl(s);return new H_(e.path,a)}isEqual(e){return e instanceof dy&&Wi(this.vc,e.vc)}}class my extends Ml{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=aA(this,e,!0),s=this.vc.map((l=>Ja(l,t))),a=new _l(s);return new H_(e.path,a)}isEqual(e){return e instanceof my&&Wi(this.vc,e.vc)}}function oA(n,e,t,s){const a=n.Cc(1,e,t);py("Data must be an object, but it was:",a,s);const l=[],u=Ln.empty();Hr(s,((g,m)=>{const y=gy(e,g,t);m=_t(m);const b=a.yc(y);if(m instanceof Hd)l.push(y);else{const w=Ja(m,b);w!=null&&(l.push(y),u.set(y,w))}}));const d=new Xn(l);return new sA(u,d,a.fieldTransforms)}function lA(n,e,t,s,a,l){const u=n.Cc(1,e,t),d=[n_(e,s,t)],g=[a];if(l.length%2!=0)throw new ue(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(n_(e,l[w])),g.push(l[w+1]);const m=[],y=Ln.empty();for(let w=d.length-1;w>=0;--w)if(!hA(m,d[w])){const C=d[w];let M=g[w];M=_t(M);const j=u.yc(C);if(M instanceof Hd)m.push(C);else{const z=Ja(M,j);z!=null&&(m.push(C),y.set(C,z))}}const b=new Xn(m);return new sA(y,b,u.fieldTransforms)}function nO(n,e,t,s=!1){return Ja(t,n.Cc(s?4:3,e))}function Ja(n,e){if(uA(n=_t(n)))return py("Unsupported field value:",e,n),cA(n,e);if(n instanceof Ml)return(function(s,a){if(!rA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let u=0;for(const d of s){let g=Ja(d,a.wc(u));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),u++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return GD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Et.fromDate(s);return{timestampValue:Wf(a.serializer,l)}}if(s instanceof Et){const l=new Et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wf(a.serializer,l)}}if(s instanceof Xi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof hi)return{bytesValue:RS(a.serializer,s._byteString)};if(s instanceof Rt){const l=a.databaseId,u=s.firestore._databaseId;if(!u.isEqual(l))throw a.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Y_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof $i)return(function(u,d){return{mapValue:{fields:{[iS]:{stringValue:sS},[Yf]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.Sc("VectorValues must only contain numeric values.");return q_(d.serializer,m)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Rd(s)}`)})(n,e)}function cA(n,e){const t={};return Ww(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(n,((s,a)=>{const l=Ja(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function uA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Et||n instanceof Xi||n instanceof hi||n instanceof Rt||n instanceof Ml||n instanceof $i)}function py(n,e,t){if(!uA(t)||!Xw(t)){const s=Rd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function n_(n,e,t){if((e=_t(e))instanceof ju)return e._internalPath;if(typeof e=="string")return gy(n,e);throw nd("Field path arguments must be of type string or ",n,!1,void 0,t)}const iO=new RegExp("[~\\*/\\[\\]]");function gy(n,e,t){if(e.search(iO)>=0)throw nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ju(...e.split("."))._internalPath}catch{throw nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function nd(n,e,t,s,a){const l=s&&!s.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let g="";return(l||u)&&(g+=" (found",l&&(g+=` in field ${s}`),u&&(g+=` in document ${a}`),g+=")"),new ue(W.INVALID_ARGUMENT,d+n+g)}function hA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sO extends fA{data(){return super.data()}}function Gd(n,e){return typeof e=="string"?gy(n,e):e instanceof ju?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _y{}class yy extends _y{}function ln(n,e,...t){let s=[];e instanceof _y&&s.push(e),s=s.concat(t),(function(l){const u=l.filter((g=>g instanceof vy)).length,d=l.filter((g=>g instanceof Qd)).length;if(u>1||u>0&&d>0)throw new ue(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Qd extends yy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Qd(e,t,s)}_apply(e){const t=this._parse(e);return gA(e._query,t),new Qs(e.firestore,e.converter,Qg(e._query,t))}_parse(e){const t=Uu(e.firestore);return(function(l,u,d,g,m,y,b){let w;if(m.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ue(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){s1(b,y);const M=[];for(const j of b)M.push(i1(g,l,j));w={arrayValue:{values:M}}}else w=i1(g,l,b)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||s1(b,y),w=nO(d,u,b,y==="in"||y==="not-in");return qt.create(m,y,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tt(n,e,t){const s=e,a=Gd("where",n);return Qd._create(a,s,t)}class vy extends _y{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ai.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let u=a;const d=l.getFlattenedFilters();for(const g of d)gA(u,g),u=Qg(u,g)})(e._query,t),new Qs(e.firestore,e.converter,Qg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ey extends yy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ey(e,t)}_apply(e){const t=(function(a,l,u){if(a.startAt!==null)throw new ue(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ue(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vu(l,u)})(e._query,this._field,this._direction);return new Qs(e.firestore,e.converter,(function(a,l){const u=a.explicitOrderBy.concat([l]);return new Dl(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function mA(n,e="asc"){const t=e,s=Gd("orderBy",n);return Ey._create(s,t)}class Ty extends yy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Ty(e,t,s)}_apply(e){return new Qs(e.firestore,e.converter,Xf(e._query,this._limit,this._limitType))}}function pA(n){return Ty._create("limit",n,"F")}function i1(n,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new ue(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fS(e)&&t.indexOf("/")!==-1)throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(gt.fromString(t));if(!be.isDocumentKey(s))throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vb(n,new be(s))}if(t instanceof Rt)return vb(n,t._key);throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rd(t)}.`)}function s1(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gA(n,e){const t=(function(a,l){for(const u of a)for(const d of u.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ue(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rO{convertValue(e,t="none"){switch(jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Hr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Yf].arrayValue?.values?.map((s=>Ot(s.doubleValue)));return new $i(t)}convertGeoPoint(e){return new Xi(Ot(e.latitude),Ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Dd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const t=Vr(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=gt.fromString(e);nt(OS(s),9688,{name:e});const a=new _u(s.get(1),s.get(3)),l=new be(s.popFirst(5));return a.isEqual(t)||Fs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Jc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Va extends fA{constructor(e,t,s,a,l,u){super(e,t,s,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Df(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Gd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Va._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Va._jsonSchemaVersion="firestore/documentSnapshot/1.0",Va._jsonSchema={type:Ht("string",Va._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Df extends Va{data(e={}){return super.data(e)}}class La{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Jc(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Df(this._firestore,this._userDataWriter,s.key,s,new Jc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map((d=>{const g=new Df(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Jc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:g,oldIndex:-1,newIndex:u++}}))}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const g=new Df(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Jc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:aO(d.type),doc:g,oldIndex:m,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=La._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=L_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n){n=In(n,Rt);const e=In(n.firestore,es);return KM(Lu(e),n._key).then((t=>_A(e,n,t)))}La._jsonSchemaVersion="firestore/querySnapshot/1.0",La._jsonSchema={type:Ht("string",La._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class wy extends rO{constructor(e){super(),this.firestore=e}convertBytes(e){return new hi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,t)}}function au(n){n=In(n,Qs);const e=In(n.firestore,es),t=Lu(e),s=new wy(e);return dA(n._query),XM(t,n._query).then((a=>new La(e,s,n,a)))}function oO(n,e,t){n=In(n,Rt);const s=In(n.firestore,es),a=by(n.converter,e,t);return zu(s,[hy(Uu(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Nn.none())])}function Mt(n,e,t,...s){n=In(n,Rt);const a=In(n.firestore,es),l=Uu(a);let u;return u=typeof(e=_t(e))=="string"||e instanceof ju?lA(l,"updateDoc",n._key,e,t,s):oA(l,"updateDoc",n._key,e),zu(a,[u.toMutation(n._key,Nn.exists(!0))])}function sd(n){return zu(In(n.firestore,es),[new Ld(n._key,Nn.none())])}function Sy(n,e){const t=In(n.firestore,es),s=vt(n),a=by(n.converter,e);return zu(t,[hy(Uu(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,Nn.exists(!1))]).then((()=>s))}function Dn(n,...e){n=_t(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||n1(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(n1(e[s])){const g=e[s];e[s]=g.next?.bind(g),e[s+1]=g.error?.bind(g),e[s+2]=g.complete?.bind(g)}let l,u,d;if(n instanceof Rt)u=In(n.firestore,es),d=kd(n._key.path),l={next:g=>{e[s]&&e[s](_A(u,n,g))},error:e[s+1],complete:e[s+2]};else{const g=In(n,Qs);u=In(g.firestore,es),d=g._query;const m=new wy(u);l={next:y=>{e[s]&&e[s](new La(u,m,g,y))},error:e[s+1],complete:e[s+2]},dA(n._query)}return(function(m,y,b,w){const C=new uy(w),M=new oy(y,C,b);return m.asyncQueue.enqueueAndForget((async()=>sy(await td(m),M))),()=>{C.Nu(),m.asyncQueue.enqueueAndForget((async()=>ry(await td(m),M)))}})(Lu(u),d,a,l)}function zu(n,e){return(function(s,a){const l=new Ls;return s.asyncQueue.enqueueAndForget((async()=>VM(await YM(s),a,l))),l.promise})(Lu(n),e)}function _A(n,e,t){const s=t.docs.get(e._key),a=new wy(n);return new Va(n,a,e._key,s,new Jc(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Uu(e)}set(e,t,s){this._verifyNotCommitted();const a=Tg(e,this._firestore),l=by(a.converter,t,s),u=hy(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(u.toMutation(a._key,Nn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=Tg(e,this._firestore);let u;return u=typeof(t=_t(t))=="string"||t instanceof ju?lA(this._dataReader,"WriteBatch.update",l._key,t,s,a):oA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(u.toMutation(l._key,Nn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Tg(e,this._firestore);return this._mutations=this._mutations.concat(new Ld(t._key,Nn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ue(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tg(n,e){if((n=_t(n)).firestore!==e)throw new ue(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Ga(){return new fy("serverTimestamp")}function ja(...n){return new dy("arrayUnion",n)}function Na(...n){return new my("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(n){return Lu(n=In(n,es)),new lO(n,(e=>zu(n,e)))}(function(e,t=!0){(function(a){Rl=a})($a),Fa(new Or("firestore",((s,{instanceIdentifier:a,options:l})=>{const u=s.getProvider("app").getImmediate(),d=new es(new iD(s.getProvider("auth-internal")),new aD(u,s.getProvider("app-check-internal")),(function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ue(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(m.options.projectId,y)})(u,a),u);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Gi(ab,ob,e),Gi(ab,ob,"esm2020")})();var a1={};const o1="@firebase/database",l1="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yA="";function cO(n){yA=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),on(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ts(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uO(e)}}catch{}return new hO},Ma=vA("localStorage"),fO=vA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new wd("@firebase/database"),dO=(function(){let n=1;return function(){return n++}})(),EA=function(n){const e=qR(n),t=new UR;t.update(e);const s=t.digest();return E_.encodeByteArray(s)},Fu=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fu.apply(null,s):typeof s=="object"?e+=on(s):e+=s,e+=" "}return e};let ou=null,c1=!0;const mO=function(n,e){le(!0,"Can't turn on custom loggers persistently."),al.logLevel=qe.VERBOSE,ou=al.log.bind(al)},pn=function(...n){if(c1===!0&&(c1=!1,ou===null&&fO.get("logging_enabled")===!0&&mO()),ou){const e=Fu.apply(null,n);ou(e)}},Bu=function(n){return function(...e){pn(n,...e)}},i_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Fu(...n);al.error(e)},qs=function(...n){const e=`FIREBASE FATAL ERROR: ${Fu(...n)}`;throw al.error(e),new Error(e)},zn=function(...n){const e="FIREBASE WARNING: "+Fu(...n);al.warn(e)},pO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},gO=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},El="[MIN_NAME]",Qa="[MAX_NAME]",eo=function(n,e){if(n===e)return 0;if(n===El||e===Qa)return-1;if(e===El||n===Qa)return 1;{const t=u1(n),s=u1(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},_O=function(n,e){return n===e?0:n<e?-1:1},Qc=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+on(e))},Ay=function(n){if(typeof n!="object"||n===null)return on(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=on(e[s]),t+=":",t+=Ay(n[e[s]]);return t+="}",t},TA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Sn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const bA=function(n){le(!Yd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,u,d,g;n===0?(l=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,u=Math.round(n/Math.pow(2,1-s-t))));const m=[];for(g=t;g;g-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(g=e;g;g-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(a?1:0),m.reverse();const y=m.join("");let b="";for(g=0;g<64;g+=8){let w=parseInt(y.substr(g,8),2).toString(16);w.length===1&&(w="0"+w),b=b+w}return b.toLowerCase()},yO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function EO(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const TO=new RegExp("^-?(0*)\\d{1,10}$"),bO=-2147483648,wO=2147483647,u1=function(n){if(TO.test(n)){const e=Number(n);if(e>=bO&&e<=wO)return e}return null},Ol=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw zn("Exception was thrown by user callback.",t),e},Math.floor(0))}},SO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class AO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ui(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){zn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zn(e)}}class kf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="5",wA="v",SA="s",AA="r",CA="f",xA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,RA="ls",IA="p",s_="ac",NA="websocket",DA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t,s,a,l=!1,u="",d=!1,g=!1,m=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=g,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function xO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function MA(n,e,t){le(typeof e=="string","typeof type must == string"),le(typeof t=="object","typeof params must == object");let s;if(e===NA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===DA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xO(n)&&(t.ns=n.namespace);const a=[];return Sn(t,(l,u)=>{a.push(l+"="+u)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.counters_={}}incrementCounter(e,t=1){ts(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={},wg={};function xy(n){const e=n.toString();return bg[e]||(bg[e]=new RO),bg[e]}function IO(n,e){const t=n.toString();return wg[t]||(wg[t]=e()),wg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ol(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="start",DO="close",kO="pLPCommand",MO="pRTLPCB",OA="id",PA="pw",VA="ser",OO="cb",PO="seg",VO="ts",LO="d",jO="dframe",LA=1870,jA=30,UO=LA-jA,zO=25e3,FO=3e4;class el{constructor(e,t,s,a,l,u,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bu(e),this.stats_=xy(t),this.urlFn=g=>(this.appCheckToken&&(g[s_]=this.appCheckToken),MA(t,DA,g))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new NO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FO)),gO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ry((...l)=>{const[u,d,g,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===h1)this.id=d,this.password=g;else if(u===DO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[h1]="t",s[VA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[OO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wA]=Cy,this.transportSessionId&&(s[SA]=this.transportSessionId),this.lastSessionId&&(s[RA]=this.lastSessionId),this.applicationId&&(s[IA]=this.applicationId),this.appCheckToken&&(s[s_]=this.appCheckToken),typeof location<"u"&&location.hostname&&xA.test(location.hostname)&&(s[AA]=CA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){el.forceAllow_=!0}static forceDisallow(){el.forceDisallow_=!0}static isAvailable(){return el.forceAllow_?!0:!el.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yO()&&!vO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=on(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$1(t),a=TA(s,UO);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[jO]="t",s[OA]=e,s[PA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=on(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ry{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dO(),window[kO+this.uniqueCallbackIdentifier]=e,window[MO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ry.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){pn("frame writing exception"),d.stack&&pn(d.stack),pn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OA]=this.myID,e[PA]=this.myPW,e[VA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jA+s.length<=LA;){const u=this.pendingSegs.shift();s=s+"&"+PO+a+"="+u.seg+"&"+VO+a+"="+u.ts+"&"+LO+a+"="+u.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(zO)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{pn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=16384,qO=45e3;let rd=null;typeof MozWebSocket<"u"?rd=MozWebSocket:typeof WebSocket<"u"&&(rd=WebSocket);class Ei{constructor(e,t,s,a,l,u,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bu(this.connId),this.stats_=xy(t),this.connURL=Ei.connectionURL_(t,u,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const u={};return u[wA]=Cy,typeof location<"u"&&location.hostname&&xA.test(location.hostname)&&(u[AA]=CA),t&&(u[SA]=t),s&&(u[RA]=s),a&&(u[s_]=a),l&&(u[IA]=l),MA(e,NA,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ma.set("previous_websocket_failure",!0);try{let s;NR(),this.mySock=new rd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ei.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&rd!==null&&!Ei.forceDisallow_}static previouslyFailed(){return Ma.isInMemoryStorage||Ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=fu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=on(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=TA(t,BO);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ei.responsesRequiredToBeHealthy=2;Ei.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{static get ALL_TRANSPORTS(){return[el,Ei]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ei&&Ei.isAvailable();let s=t&&!Ei.previouslyFailed();if(e.webSocketOnly&&(t||zn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ei];else{const a=this.transports_=[];for(const l of Tu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Tu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=6e4,GO=5e3,QO=10*1024,YO=100*1024,Sg="t",f1="d",KO="s",d1="r",XO="e",m1="o",p1="a",g1="n",_1="p",$O="h";class WO{constructor(e,t,s,a,l,u,d,g,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=g,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bu("c:"+this.id+":"),this.transportManager_=new Tu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=lu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sg in e){const t=e[Sg];t===p1?this.upgradeIfSecondaryHealthy_():t===d1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===m1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Qc("t",e),s=Qc("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_1,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:p1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Qc("t",e),s=Qc("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Qc(Sg,e);if(f1 in e){const s=e[f1];if(t===$O){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===g1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===KO?this.onConnectionShutdown_(s):t===d1?this.onReset_(s):t===XO?i_("Server Error: "+s):t===m1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):i_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cy!==s&&zn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),lu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_1,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){le(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends zA{static getInstance(){return new ad}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!w_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=32,v1=768;class rt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function et(){return new rt("")}function Le(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fr(n){return n.pieces_.length-n.pieceNum_}function mt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new rt(n.pieces_,e)}function Iy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ZO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function bu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function FA(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new rt(e,0)}function Vt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof rt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new rt(t,0)}function Ue(n){return n.pieceNum_>=n.pieces_.length}function jn(n,e){const t=Le(n),s=Le(e);if(t===null)return e;if(t===s)return jn(mt(n),mt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function JO(n,e){const t=bu(n,0),s=bu(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=eo(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Ny(n,e){if(Fr(n)!==Fr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function fi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Fr(n)>Fr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class e4{constructor(e,t){this.errorPrefix_=t,this.parts_=bu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=bd(this.parts_[s]);BA(this)}}function t4(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=bd(e),BA(n)}function n4(n){const e=n.parts_.pop();n.byteLength_-=bd(e),n.parts_.length>0&&(n.byteLength_-=1)}function BA(n){if(n.byteLength_>v1)throw new Error(n.errorPrefix_+"has a key path longer than "+v1+" bytes ("+n.byteLength_+").");if(n.parts_.length>y1)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+y1+") or object contains a cycle "+Ia(n))}function Ia(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy extends zA{static getInstance(){return new Dy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=1e3,i4=300*1e3,E1=30*1e3,s4=1.3,r4=3e4,a4="server_kill",T1=3;class js extends UA{constructor(e,t,s,a,l,u,d,g){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=g,this.id=js.nextPersistentConnectionId_++,this.log_=Bu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yc,this.maxReconnectDelay_=i4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,g)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ad.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(on(l)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new ks,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(u).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},u="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,d=>{const g=d.d,m=d.s;js.warnOnListenWarnings_(g,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(m,g))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ts(e,"w")){const s=cl(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();zn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=E1)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=LR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},u="n";a&&(l.q=s,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const u={p:t,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+on(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):i_("Unrecognized action received from server: "+on(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>r4&&(this.reconnectDelay_=Yc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*s4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+js.nextConnectionId_++,l=this.lastSessionId;let u=!1,d=null;const g=function(){d?d.close():(u=!0,s())},m=function(b){le(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(b)};this.realtime_={close:g,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?pn("getToken() completed but was canceled"):(pn("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=w&&w.token,d=new WO(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,C=>{zn(C+" ("+this.repoInfo_.toString()+")"),this.interrupt(a4)},l))}catch(b){this.log_("Failed to get token: "+b),u||(this.repoInfo_.nodeAdmin&&zn(b),g())}}}interrupt(e){pn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vf(this.interruptReasons_)&&(this.reconnectDelay_=Yc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Ay(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new rt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){pn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=T1&&(this.reconnectDelay_=E1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=T1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+yA.replace(/\./g,"-")]=1,w_()?e["framework.cordova"]=1:iw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ad.getInstance().currentlyOnline();return Vf(this.interruptReasons_)&&e}}js.nextPersistentConnectionId_=0;js.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ze(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ze(El,e),a=new ze(El,t);return this.compare(s,a)!==0}minPost(){return ze.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ef;class qA extends Kd{static get __EMPTY_NODE(){return Ef}static set __EMPTY_NODE(e){Ef=e}compare(e,t){return eo(e.name,t.name)}isDefinedOn(e){throw Al("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ze.MIN}maxPost(){return new ze(Qa,Ef)}makePost(e,t){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new ze(e,Ef)}toString(){return".key"}}const ol=new qA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?s(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class an{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??an.RED,this.left=a??Un.EMPTY_NODE,this.right=l??Un.EMPTY_NODE}copy(e,t,s,a,l){return new an(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Un.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Un.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,an.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,an.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}an.RED=!0;an.BLACK=!1;class o4{copy(e,t,s,a,l){return this}insert(e,t,s){return new an(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Un{constructor(e,t=Un.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Un(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,an.BLACK,null,null))}remove(e){return new Un(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,an.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Tf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Tf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Tf(this.root_,null,this.comparator_,!0,e)}}Un.EMPTY_NODE=new o4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(n,e){return eo(n.name,e.name)}function ky(n,e){return eo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r_;function c4(n){r_=n}const HA=function(n){return typeof n=="number"?"number:"+bA(n):"string:"+n},GA=function(n){if(n.isLeafNode()){const e=n.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ts(e,".sv"),"Priority must be a string or number.")}else le(n===r_||n.isEmpty(),"priority of unexpected type.");le(n===r_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b1;class sn{static set __childrenNodeConstructor(e){b1=e}static get __childrenNodeConstructor(){return b1}constructor(e,t=sn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new sn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:sn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:Le(e)===".priority"?this.priorityNode_:sn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:sn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Le(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(le(s!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,sn.__childrenNodeConstructor.EMPTY_NODE.updateChild(mt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+HA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=bA(this.value_):e+=this.value_,this.lazyHash_=EA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===sn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof sn.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=sn.VALUE_TYPE_ORDER.indexOf(t),l=sn.VALUE_TYPE_ORDER.indexOf(s);return le(a>=0,"Unknown leaf type: "+t),le(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}sn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QA,YA;function u4(n){QA=n}function h4(n){YA=n}class f4 extends Kd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?eo(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ze.MIN}maxPost(){return new ze(Qa,new sn("[PRIORITY-POST]",YA))}makePost(e,t){const s=QA(e);return new ze(t,new sn("[PRIORITY-POST]",s))}toString(){return".priority"}}const At=new f4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4=Math.log(2);class m4{constructor(e){const t=l=>parseInt(Math.log(l)/d4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const od=function(n,e,t,s){n.sort(e);const a=function(g,m){const y=m-g;let b,w;if(y===0)return null;if(y===1)return b=n[g],w=t?t(b):b,new an(w,b.node,an.BLACK,null,null);{const C=parseInt(y/2,10)+g,M=a(g,C),j=a(C+1,m);return b=n[C],w=t?t(b):b,new an(w,b.node,an.BLACK,M,j)}},l=function(g){let m=null,y=null,b=n.length;const w=function(M,j){const z=b-M,ie=b;b-=M;const te=a(z+1,ie),re=n[z],_e=t?t(re):re;C(new an(_e,re.node,j,null,te))},C=function(M){m?(m.left=M,m=M):(y=M,m=M)};for(let M=0;M<g.count;++M){const j=g.nextBitIsOne(),z=Math.pow(2,g.count-(M+1));j?w(z,an.BLACK):(w(z,an.BLACK),w(z,an.RED))}return y},u=new m4(n.length),d=l(u);return new Un(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ag;const Xo={};class Vs{static get Default(){return le(Xo&&At,"ChildrenNode.ts has not been loaded"),Ag=Ag||new Vs({".priority":Xo},{".priority":At}),Ag}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=cl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Un?t:null}hasIndex(e){return ts(this.indexSet_,e.toString())}addIndex(e,t){le(e!==ol,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(ze.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let d;a?d=od(s,e.getCompare()):d=Xo;const g=e.toString(),m={...this.indexSet_};m[g]=e;const y={...this.indexes_};return y[g]=d,new Vs(y,m)}addToIndexes(e,t){const s=Lf(this.indexes_,(a,l)=>{const u=cl(this.indexSet_,l);if(le(u,"Missing index implementation for "+l),a===Xo)if(u.isDefinedOn(e.node)){const d=[],g=t.getIterator(ze.Wrap);let m=g.getNext();for(;m;)m.name!==e.name&&d.push(m),m=g.getNext();return d.push(e),od(d,u.getCompare())}else return Xo;else{const d=t.get(e.name);let g=a;return d&&(g=g.remove(new ze(e.name,d))),g.insert(e,e.node)}});return new Vs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Lf(this.indexes_,a=>{if(a===Xo)return a;{const l=t.get(e.name);return l?a.remove(new ze(e.name,l)):a}});return new Vs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc;class Re{static get EMPTY_NODE(){return Kc||(Kc=new Re(new Un(ky),null,Vs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&GA(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kc}updatePriority(e){return this.children_.isEmpty()?this:new Re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Kc:t}}getChild(e){const t=Le(e);return t===null?this:this.getImmediateChild(t).getChild(mt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(le(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ze(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?Kc:this.priorityNode_;return new Re(a,u,l)}}updateChild(e,t){const s=Le(e);if(s===null)return t;{le(Le(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(mt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(At,(u,d)=>{t[u]=d.val(e),s++,l&&Re.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*s){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+HA(this.getPriority().val())+":"),this.forEachChild(At,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":EA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new ze(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ze(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ze(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,ze.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,ze.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qu?-1:0}withIndex(e){if(e===ol||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Re(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ol||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(At),a=t.getIterator(At);let l=s.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ol?null:this.indexMap_.get(e.toString())}}Re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class p4 extends Re{constructor(){super(new Un(ky),Re.EMPTY_NODE,Vs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Re.EMPTY_NODE}isEmpty(){return!1}}const qu=new p4;Object.defineProperties(ze,{MIN:{value:new ze(El,Re.EMPTY_NODE)},MAX:{value:new ze(Qa,qu)}});qA.__EMPTY_NODE=Re.EMPTY_NODE;sn.__childrenNodeConstructor=Re;c4(qu);h4(qu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=!0;function Bt(n,e=null){if(n===null)return Re.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new sn(t,Bt(e))}if(!(n instanceof Array)&&g4){const t=[];let s=!1;if(Sn(n,(u,d)=>{if(u.substring(0,1)!=="."){const g=Bt(d);g.isEmpty()||(s=s||!g.getPriority().isEmpty(),t.push(new ze(u,g)))}}),t.length===0)return Re.EMPTY_NODE;const l=od(t,l4,u=>u.name,ky);if(s){const u=od(t,At.getCompare());return new Re(l,Bt(e),new Vs({".priority":u},{".priority":At}))}else return new Re(l,Bt(e),Vs.Default)}else{let t=Re.EMPTY_NODE;return Sn(n,(s,a)=>{if(ts(n,s)&&s.substring(0,1)!=="."){const l=Bt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Bt(e))}}u4(Bt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4 extends Kd{constructor(e){super(),this.indexPath_=e,le(!Ue(e)&&Le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?eo(e.name,t.name):l}makePost(e,t){const s=Bt(e),a=Re.EMPTY_NODE.updateChild(this.indexPath_,s);return new ze(t,a)}maxPost(){const e=Re.EMPTY_NODE.updateChild(this.indexPath_,qu);return new ze(Qa,e)}toString(){return bu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4 extends Kd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?eo(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ze.MIN}maxPost(){return ze.MAX}makePost(e,t){const s=Bt(e);return new ze(t,s)}toString(){return".value"}}const v4=new y4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n){return{type:"value",snapshotNode:n}}function Tl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function wu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Su(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function E4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.index_=e}updateChild(e,t,s,a,l,u){le(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(t)?u.trackChildChange(wu(t,d)):le(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(Tl(t,s)):u.trackChildChange(Su(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(At,(a,l)=>{t.hasChild(a)||s.trackChildChange(wu(a,l))}),t.isLeafNode()||t.forEachChild(At,(a,l)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(l)||s.trackChildChange(Su(a,l,u))}else s.trackChildChange(Tl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Re.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.indexedFilter_=new My(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Au.getStartPost_(e),this.endPost_=Au.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,u){return this.matches(new ze(t,s))||(s=Re.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,u)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Re.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Re.EMPTY_NODE);const l=this;return t.forEachChild(At,(u,d)=>{l.matches(new ze(u,d))||(a=a.updateImmediateChild(u,Re.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Au(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,u){return this.rangedFilter_.matches(new ze(t,s))||(s=Re.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,u):this.fullLimitUpdateChild_(e,t,s,l,u)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Re.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Re.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Re.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const d=l.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:a=a.updateImmediateChild(d.name,Re.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let u;if(this.reverse_){const b=this.index_.getCompare();u=(w,C)=>b(C,w)}else u=this.index_.getCompare();const d=e;le(d.numChildren()===this.limit_,"");const g=new ze(t,s),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(g);if(d.hasChild(t)){const b=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const C=w==null?1:u(w,g);if(y&&!s.isEmpty()&&C>=0)return l?.trackChildChange(Su(t,s,b)),d.updateImmediateChild(t,s);{l?.trackChildChange(wu(t,b));const j=d.updateImmediateChild(t,Re.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l?.trackChildChange(Tl(w.name,w.node)),j.updateImmediateChild(w.name,w.node)):j}}else return s.isEmpty()?e:y&&u(m,g)>=0?(l!=null&&(l.trackChildChange(wu(m.name,m.node)),l.trackChildChange(Tl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(m.name,Re.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:El}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new Oy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function b4(n){return n.loadsAllData()?new My(n.getIndex()):n.hasLimit()?new T4(n):new Au(n)}function w1(n){const e={};if(n.isDefault())return e;let t;if(n.index_===At?t="$priority":n.index_===v4?t="$value":n.index_===ol?t="$key":(le(n.index_ instanceof _4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=on(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=on(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+on(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=on(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+on(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function S1(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==At&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends UA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Bu("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=ld.getListenId_(e,s),d={};this.listens_[u]=d;const g=w1(e._queryParams);this.restRequest_(l+".json",g,(m,y)=>{let b=y;if(m===404&&(b=null,m=null),m===null&&this.onDataUpdate_(l,b,!1,s),cl(this.listens_,u)===d){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",a(w,null)}})}unlisten(e,t){const s=ld.getListenId_(e,t);delete this.listens_[s]}get(e){const t=w1(e._queryParams),s=e._path.toString(),a=new ks;return this.restRequest_(s+".json",t,(l,u)=>{let d=u;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let g=null;if(d.status>=200&&d.status<300){try{g=fu(d.responseText)}catch{zn("Failed to parse JSON response for "+u+": "+d.responseText)}s(null,g)}else d.status!==401&&d.status!==404&&zn("Got unsuccessful REST response for "+u+" Status: "+d.status),s(d.status);s=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(){this.rootNode_=Re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){return{value:null,children:new Map}}function Pl(n,e,t){if(Ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Le(e);n.children.has(s)||n.children.set(s,cd());const a=n.children.get(s);e=mt(e),Pl(a,e,t)}}function a_(n,e){if(Ue(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(At,(s,a)=>{Pl(n,new rt(s),a)}),a_(n,e)}}else if(n.children.size>0){const t=Le(e);return e=mt(e),n.children.has(t)&&a_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function o_(n,e,t){n.value!==null?t(e,n.value):S4(n,(s,a)=>{const l=new rt(e.toString()+"/"+s);o_(a,l,t)})}function S4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Sn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=10*1e3,C4=30*1e3,x4=300*1e3;class R4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new A4(e);const s=A1+(C4-A1)*Math.random();lu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Sn(e,(a,l)=>{l>0&&ts(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),lu(this.reportStats_.bind(this),Math.floor(Math.random()*2*x4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bi||(bi={}));function XA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Py(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=bi.ACK_USER_WRITE,this.source=XA()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new rt(e));return new ud(et(),t,this.revert)}}else return le(Le(this.path)===e,"operationForChild called for unrelated child."),new ud(mt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.source=e,this.path=t,this.type=bi.LISTEN_COMPLETE}operationForChild(e){return Ue(this.path)?new Cu(this.source,et()):new Cu(this.source,mt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=bi.OVERWRITE}operationForChild(e){return Ue(this.path)?new Ya(this.source,et(),this.snap.getImmediateChild(e)):new Ya(this.source,mt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=bi.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new rt(e));return t.isEmpty()?null:t.value?new Ya(this.source,et(),t.value):new xu(this.source,et(),t)}else return le(Le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xu(this.source,mt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=Le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function N4(n,e,t,s){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(E4(u.childName,u.snapshotNode))}),Xc(n,a,"child_removed",e,s,t),Xc(n,a,"child_added",e,s,t),Xc(n,a,"child_moved",l,s,t),Xc(n,a,"child_changed",e,s,t),Xc(n,a,"value",e,s,t),a}function Xc(n,e,t,s,a,l){const u=s.filter(d=>d.type===t);u.sort((d,g)=>k4(n,d,g)),u.forEach(d=>{const g=D4(n,d,l);a.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(g,n.query_))})})}function D4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function k4(n,e,t){if(e.childName==null||t.childName==null)throw Al("Should only compare child_ events.");const s=new ze(e.childName,e.snapshotNode),a=new ze(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,e){return{eventCache:n,serverCache:e}}function cu(n,e,t,s){return Xd(new Ka(e,t,s),n.serverCache)}function $A(n,e,t,s){return Xd(n.eventCache,new Ka(e,t,s))}function l_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Xa(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg;const M4=()=>(Cg||(Cg=new Un(_O)),Cg);class yt{static fromObject(e){let t=new yt(null);return Sn(e,(s,a)=>{t=t.set(new rt(s),a)}),t}constructor(e,t=M4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:et(),value:this.value};if(Ue(e))return null;{const s=Le(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(mt(e),t);return l!=null?{path:Vt(new rt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=Le(e),s=this.children.get(t);return s!==null?s.subtree(mt(e)):new yt(null)}}set(e,t){if(Ue(e))return new yt(t,this.children);{const s=Le(e),l=(this.children.get(s)||new yt(null)).set(mt(e),t),u=this.children.insert(s,l);return new yt(this.value,u)}}remove(e){if(Ue(e))return this.children.isEmpty()?new yt(null):new yt(null,this.children);{const t=Le(e),s=this.children.get(t);if(s){const a=s.remove(mt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new yt(null):new yt(this.value,l)}else return this}}get(e){if(Ue(e))return this.value;{const t=Le(e),s=this.children.get(t);return s?s.get(mt(e)):null}}setTree(e,t){if(Ue(e))return t;{const s=Le(e),l=(this.children.get(s)||new yt(null)).setTree(mt(e),t);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new yt(this.value,u)}}fold(e){return this.fold_(et(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Vt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,et(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ue(e))return null;{const l=Le(e),u=this.children.get(l);return u?u.findOnPath_(mt(e),Vt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,et(),t)}foreachOnPath_(e,t,s){if(Ue(e))return this;{this.value&&s(t,this.value);const a=Le(e),l=this.children.get(a);return l?l.foreachOnPath_(mt(e),Vt(t,a),s):new yt(null)}}foreach(e){this.foreach_(et(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Vt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.writeTree_=e}static empty(){return new Si(new yt(null))}}function uu(n,e,t){if(Ue(e))return new Si(new yt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const u=jn(a,e);return l=l.updateChild(u,t),new Si(n.writeTree_.set(a,l))}else{const a=new yt(t),l=n.writeTree_.setTree(e,a);return new Si(l)}}}function C1(n,e,t){let s=n;return Sn(t,(a,l)=>{s=uu(s,Vt(e,a),l)}),s}function x1(n,e){if(Ue(e))return Si.empty();{const t=n.writeTree_.setTree(e,new yt(null));return new Si(t)}}function c_(n,e){return to(n,e)!=null}function to(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(jn(t.path,e)):null}function R1(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(At,(s,a)=>{e.push(new ze(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new ze(s,a.value))}),e}function Mr(n,e){if(Ue(e))return n;{const t=to(n,e);return t!=null?new Si(new yt(t)):new Si(n.writeTree_.subtree(e))}}function u_(n){return n.writeTree_.isEmpty()}function bl(n,e){return WA(et(),n.writeTree_,e)}function WA(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(le(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=WA(Vt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Vt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(n,e){return tC(e,n)}function O4(n,e,t,s,a){le(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=uu(n.visibleWrites,e,t)),n.lastWriteId=s}function P4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function V4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);le(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&L4(d,s.path)?a=!1:fi(s.path,d.path)&&(l=!0)),u--}if(a){if(l)return j4(n),!0;if(s.snap)n.visibleWrites=x1(n.visibleWrites,s.path);else{const d=s.children;Sn(d,g=>{n.visibleWrites=x1(n.visibleWrites,Vt(s.path,g))})}return!0}else return!1}function L4(n,e){if(n.snap)return fi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fi(Vt(n.path,t),e))return!0;return!1}function j4(n){n.visibleWrites=ZA(n.allWrites,U4,et()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function U4(n){return n.visible}function ZA(n,e,t){let s=Si.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const u=l.path;let d;if(l.snap)fi(t,u)?(d=jn(t,u),s=uu(s,d,l.snap)):fi(u,t)&&(d=jn(u,t),s=uu(s,et(),l.snap.getChild(d)));else if(l.children){if(fi(t,u))d=jn(t,u),s=C1(s,d,l.children);else if(fi(u,t))if(d=jn(u,t),Ue(d))s=C1(s,et(),l.children);else{const g=cl(l.children,Le(d));if(g){const m=g.getChild(mt(d));s=uu(s,et(),m)}}}else throw Al("WriteRecord should have .snap or .children")}}return s}function JA(n,e,t,s,a){if(!s&&!a){const l=to(n.visibleWrites,e);if(l!=null)return l;{const u=Mr(n.visibleWrites,e);if(u_(u))return t;if(t==null&&!c_(u,et()))return null;{const d=t||Re.EMPTY_NODE;return bl(u,d)}}}else{const l=Mr(n.visibleWrites,e);if(!a&&u_(l))return t;if(!a&&t==null&&!c_(l,et()))return null;{const u=function(m){return(m.visible||a)&&(!s||!~s.indexOf(m.writeId))&&(fi(m.path,e)||fi(e,m.path))},d=ZA(n.allWrites,u,e),g=t||Re.EMPTY_NODE;return bl(d,g)}}}function z4(n,e,t){let s=Re.EMPTY_NODE;const a=to(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(At,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(t){const l=Mr(n.visibleWrites,e);return t.forEachChild(At,(u,d)=>{const g=bl(Mr(l,new rt(u)),d);s=s.updateImmediateChild(u,g)}),R1(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=Mr(n.visibleWrites,e);return R1(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function F4(n,e,t,s,a){le(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Vt(e,t);if(c_(n.visibleWrites,l))return null;{const u=Mr(n.visibleWrites,l);return u_(u)?a.getChild(t):bl(u,a.getChild(t))}}function B4(n,e,t,s){const a=Vt(e,t),l=to(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const u=Mr(n.visibleWrites,a);return bl(u,s.getNode().getImmediateChild(t))}else return null}function q4(n,e){return to(n.visibleWrites,e)}function H4(n,e,t,s,a,l,u){let d;const g=Mr(n.visibleWrites,e),m=to(g,et());if(m!=null)d=m;else if(t!=null)d=bl(g,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],b=u.getCompare(),w=l?d.getReverseIteratorFrom(s,u):d.getIteratorFrom(s,u);let C=w.getNext();for(;C&&y.length<a;)b(C,s)!==0&&y.push(C),C=w.getNext();return y}else return[]}function G4(){return{visibleWrites:Si.empty(),allWrites:[],lastWriteId:-1}}function hd(n,e,t,s){return JA(n.writeTree,n.treePath,e,t,s)}function jy(n,e){return z4(n.writeTree,n.treePath,e)}function I1(n,e,t,s){return F4(n.writeTree,n.treePath,e,t,s)}function fd(n,e){return q4(n.writeTree,Vt(n.treePath,e))}function Q4(n,e,t,s,a,l){return H4(n.writeTree,n.treePath,e,t,s,a,l)}function Uy(n,e,t){return B4(n.writeTree,n.treePath,e,t)}function eC(n,e){return tC(Vt(n.treePath,e),n.writeTree)}function tC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;le(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),le(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,Su(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,wu(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Tl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,Su(s,e.snapshotNode,a.oldSnap));else throw Al("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const nC=new K4;class zy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ka(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xa(this.viewCache_),l=Q4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(n){return{filter:n}}function $4(n,e){le(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function W4(n,e,t,s,a){const l=new Y4;let u,d;if(t.type===bi.OVERWRITE){const m=t;m.source.fromUser?u=h_(n,e,m.path,m.snap,s,a,l):(le(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Ue(m.path),u=dd(n,e,m.path,m.snap,s,a,d,l))}else if(t.type===bi.MERGE){const m=t;m.source.fromUser?u=J4(n,e,m.path,m.children,s,a,l):(le(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=f_(n,e,m.path,m.children,s,a,d,l))}else if(t.type===bi.ACK_USER_WRITE){const m=t;m.revert?u=nP(n,e,m.path,s,a,l):u=eP(n,e,m.path,m.affectedTree,s,a,l)}else if(t.type===bi.LISTEN_COMPLETE)u=tP(n,e,t.path,s,l);else throw Al("Unknown operation type: "+t.type);const g=l.getChanges();return Z4(e,u,g),{viewCache:u,changes:g}}function Z4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=l_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(KA(l_(e)))}}function iC(n,e,t,s,a,l){const u=e.eventCache;if(fd(s,t)!=null)return e;{let d,g;if(Ue(t))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Xa(e),y=m instanceof Re?m:Re.EMPTY_NODE,b=jy(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),b,l)}else{const m=hd(s,Xa(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=Le(t);if(m===".priority"){le(Fr(t)===1,"Can't have a priority with additional path components");const y=u.getNode();g=e.serverCache.getNode();const b=I1(s,t,y,g);b!=null?d=n.filter.updatePriority(y,b):d=u.getNode()}else{const y=mt(t);let b;if(u.isCompleteForChild(m)){g=e.serverCache.getNode();const w=I1(s,t,u.getNode(),g);w!=null?b=u.getNode().getImmediateChild(m).updateChild(y,w):b=u.getNode().getImmediateChild(m)}else b=Uy(s,m,e.serverCache);b!=null?d=n.filter.updateChild(u.getNode(),m,b,y,a,l):d=u.getNode()}}return cu(e,d,u.isFullyInitialized()||Ue(t),n.filter.filtersNodes())}}function dd(n,e,t,s,a,l,u,d){const g=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Ue(t))m=y.updateFullNode(g.getNode(),s,null);else if(y.filtersNodes()&&!g.isFiltered()){const C=g.getNode().updateChild(t,s);m=y.updateFullNode(g.getNode(),C,null)}else{const C=Le(t);if(!g.isCompleteForPath(t)&&Fr(t)>1)return e;const M=mt(t),z=g.getNode().getImmediateChild(C).updateChild(M,s);C===".priority"?m=y.updatePriority(g.getNode(),z):m=y.updateChild(g.getNode(),C,z,M,nC,null)}const b=$A(e,m,g.isFullyInitialized()||Ue(t),y.filtersNodes()),w=new zy(a,b,l);return iC(n,b,t,a,w,d)}function h_(n,e,t,s,a,l,u){const d=e.eventCache;let g,m;const y=new zy(a,e,l);if(Ue(t))m=n.filter.updateFullNode(e.eventCache.getNode(),s,u),g=cu(e,m,!0,n.filter.filtersNodes());else{const b=Le(t);if(b===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),s),g=cu(e,m,d.isFullyInitialized(),d.isFiltered());else{const w=mt(t),C=d.getNode().getImmediateChild(b);let M;if(Ue(w))M=s;else{const j=y.getCompleteChild(b);j!=null?Iy(w)===".priority"&&j.getChild(FA(w)).isEmpty()?M=j:M=j.updateChild(w,s):M=Re.EMPTY_NODE}if(C.equals(M))g=e;else{const j=n.filter.updateChild(d.getNode(),b,M,w,y,u);g=cu(e,j,d.isFullyInitialized(),n.filter.filtersNodes())}}}return g}function N1(n,e){return n.eventCache.isCompleteForChild(e)}function J4(n,e,t,s,a,l,u){let d=e;return s.foreach((g,m)=>{const y=Vt(t,g);N1(e,Le(y))&&(d=h_(n,d,y,m,a,l,u))}),s.foreach((g,m)=>{const y=Vt(t,g);N1(e,Le(y))||(d=h_(n,d,y,m,a,l,u))}),d}function D1(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function f_(n,e,t,s,a,l,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let g=e,m;Ue(t)?m=s:m=new yt(null).setTree(t,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((b,w)=>{if(y.hasChild(b)){const C=e.serverCache.getNode().getImmediateChild(b),M=D1(n,C,w);g=dd(n,g,new rt(b),M,a,l,u,d)}}),m.children.inorderTraversal((b,w)=>{const C=!e.serverCache.isCompleteForChild(b)&&w.value===null;if(!y.hasChild(b)&&!C){const M=e.serverCache.getNode().getImmediateChild(b),j=D1(n,M,w);g=dd(n,g,new rt(b),j,a,l,u,d)}}),g}function eP(n,e,t,s,a,l,u){if(fd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),g=e.serverCache;if(s.value!=null){if(Ue(t)&&g.isFullyInitialized()||g.isCompleteForPath(t))return dd(n,e,t,g.getNode().getChild(t),a,l,d,u);if(Ue(t)){let m=new yt(null);return g.getNode().forEachChild(ol,(y,b)=>{m=m.set(new rt(y),b)}),f_(n,e,t,m,a,l,d,u)}else return e}else{let m=new yt(null);return s.foreach((y,b)=>{const w=Vt(t,y);g.isCompleteForPath(w)&&(m=m.set(y,g.getNode().getChild(w)))}),f_(n,e,t,m,a,l,d,u)}}function tP(n,e,t,s,a){const l=e.serverCache,u=$A(e,l.getNode(),l.isFullyInitialized()||Ue(t),l.isFiltered());return iC(n,u,t,s,nC,a)}function nP(n,e,t,s,a,l){let u;if(fd(s,t)!=null)return e;{const d=new zy(s,e,a),g=e.eventCache.getNode();let m;if(Ue(t)||Le(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=hd(s,Xa(e));else{const b=e.serverCache.getNode();le(b instanceof Re,"serverChildren would be complete if leaf node"),y=jy(s,b)}y=y,m=n.filter.updateFullNode(g,y,l)}else{const y=Le(t);let b=Uy(s,y,e.serverCache);b==null&&e.serverCache.isCompleteForChild(y)&&(b=g.getImmediateChild(y)),b!=null?m=n.filter.updateChild(g,y,b,mt(t),d,l):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(g,y,Re.EMPTY_NODE,mt(t),d,l):m=g,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=hd(s,Xa(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,l)))}return u=e.serverCache.isFullyInitialized()||fd(s,et())!=null,cu(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new My(s.getIndex()),l=b4(s);this.processor_=X4(l);const u=t.serverCache,d=t.eventCache,g=a.updateFullNode(Re.EMPTY_NODE,u.getNode(),null),m=l.updateFullNode(Re.EMPTY_NODE,d.getNode(),null),y=new Ka(g,u.isFullyInitialized(),a.filtersNodes()),b=new Ka(m,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Xd(b,y),this.eventGenerator_=new I4(this.query_)}get query(){return this.query_}}function sP(n){return n.viewCache_.serverCache.getNode()}function rP(n,e){const t=Xa(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(Le(e)).isEmpty())?t.getChild(e):null}function k1(n){return n.eventRegistrations_.length===0}function aP(n,e){n.eventRegistrations_.push(e)}function M1(n,e,t){const s=[];if(t){le(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(t,a);u&&s.push(u)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const u=n.eventRegistrations_[l];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function O1(n,e,t,s){e.type===bi.MERGE&&e.source.queryId!==null&&(le(Xa(n.viewCache_),"We should always have a full cache before handling merges"),le(l_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=W4(n.processor_,a,e,t,s);return $4(n.processor_,l.viewCache),le(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,sC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function oP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(At,(l,u)=>{s.push(Tl(l,u))}),t.isFullyInitialized()&&s.push(KA(t.getNode())),sC(n,s,t.getNode(),e)}function sC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return N4(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md;class lP{constructor(){this.views=new Map}}function cP(n){le(!md,"__referenceConstructor has already been defined"),md=n}function uP(){return le(md,"Reference.ts has not been loaded"),md}function hP(n){return n.views.size===0}function Fy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return le(l!=null,"SyncTree gave us an op for an invalid query."),O1(l,e,t,s)}else{let l=[];for(const u of n.views.values())l=l.concat(O1(u,e,t,s));return l}}function fP(n,e,t,s,a){const l=e._queryIdentifier,u=n.views.get(l);if(!u){let d=hd(t,a?s:null),g=!1;d?g=!0:s instanceof Re?(d=jy(t,s),g=!1):(d=Re.EMPTY_NODE,g=!1);const m=Xd(new Ka(d,g,!1),new Ka(s,a,!1));return new iP(e,m)}return u}function dP(n,e,t,s,a,l){const u=fP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),aP(u,t),oP(u,t)}function mP(n,e,t,s){const a=e._queryIdentifier,l=[];let u=[];const d=Br(n);if(a==="default")for(const[g,m]of n.views.entries())u=u.concat(M1(m,t,s)),k1(m)&&(n.views.delete(g),m.query._queryParams.loadsAllData()||l.push(m.query));else{const g=n.views.get(a);g&&(u=u.concat(M1(g,t,s)),k1(g)&&(n.views.delete(a),g.query._queryParams.loadsAllData()||l.push(g.query)))}return d&&!Br(n)&&l.push(new(uP())(e._repo,e._path)),{removed:l,events:u}}function rC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ll(n,e){let t=null;for(const s of n.views.values())t=t||rP(s,e);return t}function aC(n,e){if(e._queryParams.loadsAllData())return $d(n);{const s=e._queryIdentifier;return n.views.get(s)}}function oC(n,e){return aC(n,e)!=null}function Br(n){return $d(n)!=null}function $d(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd;function pP(n){le(!pd,"__referenceConstructor has already been defined"),pd=n}function gP(){return le(pd,"Reference.ts has not been loaded"),pd}let _P=1;class P1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new yt(null),this.pendingWriteTree_=G4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lC(n,e,t,s,a){return O4(n.pendingWriteTree_,e,t,s,a),a?Hu(n,new Ya(XA(),e,t)):[]}function Oa(n,e,t=!1){const s=P4(n.pendingWriteTree_,e);if(V4(n.pendingWriteTree_,e)){let l=new yt(null);return s.snap!=null?l=l.set(et(),!0):Sn(s.children,u=>{l=l.set(new rt(u),!0)}),Hu(n,new ud(s.path,l,t))}else return[]}function Wd(n,e,t){return Hu(n,new Ya(Py(),e,t))}function yP(n,e,t){const s=yt.fromObject(t);return Hu(n,new xu(Py(),e,s))}function vP(n,e){return Hu(n,new Cu(Py(),e))}function EP(n,e,t){const s=qy(n,t);if(s){const a=Hy(s),l=a.path,u=a.queryId,d=jn(l,e),g=new Cu(Vy(u),d);return Gy(n,l,g)}else return[]}function d_(n,e,t,s,a=!1){const l=e._path,u=n.syncPointTree_.get(l);let d=[];if(u&&(e._queryIdentifier==="default"||oC(u,e))){const g=mP(u,e,t,s);hP(u)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const m=g.removed;if(d=g.events,!a){const y=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,b=n.syncPointTree_.findOnPath(l,(w,C)=>Br(C));if(y&&!b){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const C=wP(w);for(let M=0;M<C.length;++M){const j=C[M],z=j.query,ie=hC(n,j);n.listenProvider_.startListening(hu(z),gd(n,z),ie.hashFn,ie.onComplete)}}}!b&&m.length>0&&!s&&(y?n.listenProvider_.stopListening(hu(e),null):m.forEach(w=>{const C=n.queryToTagMap.get(Zd(w));n.listenProvider_.stopListening(hu(w),C)}))}SP(n,m)}return d}function TP(n,e,t,s){const a=qy(n,s);if(a!=null){const l=Hy(a),u=l.path,d=l.queryId,g=jn(u,e),m=new Ya(Vy(d),g,t);return Gy(n,u,m)}else return[]}function bP(n,e,t,s){const a=qy(n,s);if(a){const l=Hy(a),u=l.path,d=l.queryId,g=jn(u,e),m=yt.fromObject(t),y=new xu(Vy(d),g,m);return Gy(n,u,y)}else return[]}function V1(n,e,t,s=!1){const a=e._path;let l=null,u=!1;n.syncPointTree_.foreachOnPath(a,(w,C)=>{const M=jn(w,a);l=l||ll(C,M),u=u||Br(C)});let d=n.syncPointTree_.get(a);d?(u=u||Br(d),l=l||ll(d,et())):(d=new lP,n.syncPointTree_=n.syncPointTree_.set(a,d));let g;l!=null?g=!0:(g=!1,l=Re.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((C,M)=>{const j=ll(M,et());j&&(l=l.updateImmediateChild(C,j))}));const m=oC(d,e);if(!m&&!e._queryParams.loadsAllData()){const w=Zd(e);le(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const C=AP();n.queryToTagMap.set(w,C),n.tagToQueryMap.set(C,w)}const y=Ly(n.pendingWriteTree_,a);let b=dP(d,e,t,y,l,g);if(!m&&!u&&!s){const w=aC(d,e);b=b.concat(CP(n,e,w))}return b}function By(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,d)=>{const g=jn(u,e),m=ll(d,g);if(m)return m});return JA(a,e,l,t,!0)}function Hu(n,e){return cC(e,n.syncPointTree_,null,Ly(n.pendingWriteTree_,et()))}function cC(n,e,t,s){if(Ue(n.path))return uC(n,e,t,s);{const a=e.get(et());t==null&&a!=null&&(t=ll(a,et()));let l=[];const u=Le(n.path),d=n.operationForChild(u),g=e.children.get(u);if(g&&d){const m=t?t.getImmediateChild(u):null,y=eC(s,u);l=l.concat(cC(d,g,m,y))}return a&&(l=l.concat(Fy(a,n,s,t))),l}}function uC(n,e,t,s){const a=e.get(et());t==null&&a!=null&&(t=ll(a,et()));let l=[];return e.children.inorderTraversal((u,d)=>{const g=t?t.getImmediateChild(u):null,m=eC(s,u),y=n.operationForChild(u);y&&(l=l.concat(uC(y,d,g,m)))}),a&&(l=l.concat(Fy(a,n,s,t))),l}function hC(n,e){const t=e.query,s=gd(n,t);return{hashFn:()=>(sP(e)||Re.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?EP(n,t._path,s):vP(n,t._path);{const l=EO(a,t);return d_(n,t,null,l)}}}}function gd(n,e){const t=Zd(e);return n.queryToTagMap.get(t)}function Zd(n){return n._path.toString()+"$"+n._queryIdentifier}function qy(n,e){return n.tagToQueryMap.get(e)}function Hy(n){const e=n.indexOf("$");return le(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new rt(n.substr(0,e))}}function Gy(n,e,t){const s=n.syncPointTree_.get(e);le(s,"Missing sync point for query tag that we're tracking");const a=Ly(n.pendingWriteTree_,e);return Fy(s,t,a,null)}function wP(n){return n.fold((e,t,s)=>{if(t&&Br(t))return[$d(t)];{let a=[];return t&&(a=rC(t)),Sn(s,(l,u)=>{a=a.concat(u)}),a}})}function hu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(gP())(n._repo,n._path):n}function SP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Zd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function AP(){return _P++}function CP(n,e,t){const s=e._path,a=gd(n,e),l=hC(n,t),u=n.listenProvider_.startListening(hu(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)le(!Br(d.value),"If we're adding a query, it shouldn't be shadowed");else{const g=d.fold((m,y,b)=>{if(!Ue(m)&&y&&Br(y))return[$d(y).query];{let w=[];return y&&(w=w.concat(rC(y).map(C=>C.query))),Sn(b,(C,M)=>{w=w.concat(M)}),w}});for(let m=0;m<g.length;++m){const y=g[m];n.listenProvider_.stopListening(hu(y),gd(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qy(t)}node(){return this.node_}}class Yy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Vt(this.path_,e);return new Yy(this.syncTree_,t)}node(){return By(this.syncTree_,this.path_)}}const xP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},L1=function(n,e,t){if(!n||typeof n!="object")return n;if(le(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return RP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return IP(n[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},RP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:le(!1,"Unexpected server value: "+n)}},IP=function(n,e,t){n.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&le(!1,"Unexpected increment value: "+s);const a=e.node();if(le(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},NP=function(n,e,t,s){return Ky(e,new Yy(t,n),s)},fC=function(n,e,t){return Ky(n,new Qy(e),t)};function Ky(n,e,t){const s=n.getPriority().val(),a=L1(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const u=n,d=L1(u.getValue(),e,t);return d!==u.getValue()||a!==u.getPriority().val()?new sn(d,Bt(a)):n}else{const u=n;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new sn(a))),u.forEachChild(At,(d,g)=>{const m=Ky(g,e.getImmediateChild(d),t);m!==g&&(l=l.updateImmediateChild(d,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function $y(n,e){let t=e instanceof rt?e:new rt(e),s=n,a=Le(t);for(;a!==null;){const l=cl(s.node.children,a)||{children:{},childCount:0};s=new Xy(a,s,l),t=mt(t),a=Le(t)}return s}function Vl(n){return n.node.value}function dC(n,e){n.node.value=e,m_(n)}function mC(n){return n.node.childCount>0}function DP(n){return Vl(n)===void 0&&!mC(n)}function Jd(n,e){Sn(n.node.children,(t,s)=>{e(new Xy(t,n,s))})}function pC(n,e,t,s){t&&e(n),Jd(n,a=>{pC(a,e,!0)})}function kP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Gu(n){return new rt(n.parent===null?n.name:Gu(n.parent)+"/"+n.name)}function m_(n){n.parent!==null&&MP(n.parent,n.name,n)}function MP(n,e,t){const s=DP(t),a=ts(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,m_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,m_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=/[\[\].#$\/\u0000-\u001F\u007F]/,PP=/[\[\].#$\u0000-\u001F\u007F]/,xg=10*1024*1024,Wy=function(n){return typeof n=="string"&&n.length!==0&&!OP.test(n)},gC=function(n){return typeof n=="string"&&n.length!==0&&!PP.test(n)},VP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gC(n)},_C=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Yd(n)||n&&typeof n=="object"&&ts(n,".sv")},p_=function(n,e,t,s){em(ul(n,"value"),e,t)},em=function(n,e,t){const s=t instanceof rt?new e4(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ia(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ia(s)+" with contents = "+e.toString());if(Yd(e))throw new Error(n+"contains "+e.toString()+" "+Ia(s));if(typeof e=="string"&&e.length>xg/3&&bd(e)>xg)throw new Error(n+"contains a string greater than "+xg+" utf8 bytes "+Ia(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Sn(e,(u,d)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!Wy(u)))throw new Error(n+" contains an invalid key ("+u+") "+Ia(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);t4(s,u),em(n,d,s),n4(s)}),a&&l)throw new Error(n+' contains ".value" child '+Ia(s)+" in addition to actual children.")}},LP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=bu(s);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!Wy(l[u]))throw new Error(n+"contains an invalid key ("+l[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JO);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&fi(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},jP=function(n,e,t,s){const a=ul(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];Sn(e,(u,d)=>{const g=new rt(u);if(em(a,d,Vt(t,g)),Iy(g)===".priority"&&!_C(d))throw new Error(a+"contains an invalid value for '"+g.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(g)}),LP(a,l)},UP=function(n,e,t){if(Yd(e))throw new Error(ul(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!_C(e))throw new Error(ul(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},yC=function(n,e,t,s){if(!gC(t))throw new Error(ul(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yC(n,e,t)},tl=function(n,e){if(Le(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},FP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!VP(t))throw new Error(ul(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Ny(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function vC(n,e,t){Zy(n,t),EC(n,s=>Ny(s,e))}function Hs(n,e,t){Zy(n,t),EC(n,s=>fi(s,e)||fi(e,s))}function EC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(qP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ou&&pn("event: "+t.toString()),Ol(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="repo_interrupt",GP=25;class QP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cd(),this.transactionQueueTree_=new Xy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YP(n,e,t){if(n.stats_=xy(n.repoInfo_),n.forceRestClient_||SO())n.server_=new ld(n.repoInfo_,(s,a,l,u)=>{j1(n,s,a,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>U1(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{on(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new js(n.repoInfo_,e,(s,a,l,u)=>{j1(n,s,a,l,u)},s=>{U1(n,s)},s=>{XP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=IO(n.repoInfo_,()=>new R4(n.stats_,n.server_)),n.infoData_=new w4,n.infoSyncTree_=new P1({startListening:(s,a,l,u)=>{let d=[];const g=n.infoData_.getNode(s._path);return g.isEmpty()||(d=Wd(n.infoSyncTree_,s._path,g),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),ev(n,"connected",!1),n.serverSyncTree_=new P1({startListening:(s,a,l,u)=>(n.server_.listen(s,l,a,(d,g)=>{const m=u(d,g);Hs(n.eventQueue_,s._path,m)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function KP(n){const t=n.infoData_.getNode(new rt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jy(n){return xP({timestamp:KP(n)})}function j1(n,e,t,s,a){n.dataUpdateCount++;const l=new rt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(s){const g=Lf(t,m=>Bt(m));u=bP(n.serverSyncTree_,l,g,a)}else{const g=Bt(t);u=TP(n.serverSyncTree_,l,g,a)}else if(s){const g=Lf(t,m=>Bt(m));u=yP(n.serverSyncTree_,l,g)}else{const g=Bt(t);u=Wd(n.serverSyncTree_,l,g)}let d=l;u.length>0&&(d=tm(n,l)),Hs(n.eventQueue_,d,u)}function U1(n,e){ev(n,"connected",e),e===!1&&WP(n)}function XP(n,e){Sn(e,(t,s)=>{ev(n,t,s)})}function ev(n,e,t){const s=new rt("/.info/"+e),a=Bt(t);n.infoData_.updateSnapshot(s,a);const l=Wd(n.infoSyncTree_,s,a);Hs(n.eventQueue_,s,l)}function TC(n){return n.nextWriteId_++}function $P(n,e,t,s,a){tv(n,"set",{path:e.toString(),value:t,priority:s});const l=Jy(n),u=Bt(t,s),d=By(n.serverSyncTree_,e),g=fC(u,d,l),m=TC(n),y=lC(n.serverSyncTree_,e,g,m,!0);Zy(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(w,C)=>{const M=w==="ok";M||zn("set at "+e+" failed: "+w);const j=Oa(n.serverSyncTree_,m,!M);Hs(n.eventQueue_,e,j),wl(n,a,w,C)});const b=CC(n,e);tm(n,b),Hs(n.eventQueue_,b,[])}function WP(n){tv(n,"onDisconnectEvents");const e=Jy(n),t=cd();o_(n.onDisconnect_,et(),(a,l)=>{const u=NP(a,l,n.serverSyncTree_,e);Pl(t,a,u)});let s=[];o_(t,et(),(a,l)=>{s=s.concat(Wd(n.serverSyncTree_,a,l));const u=CC(n,a);tm(n,u)}),n.onDisconnect_=cd(),Hs(n.eventQueue_,et(),s)}function ZP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&a_(n.onDisconnect_,e),wl(n,t,s,a)})}function z1(n,e,t,s){const a=Bt(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,u)=>{l==="ok"&&Pl(n.onDisconnect_,e,a),wl(n,s,l,u)})}function JP(n,e,t,s,a){const l=Bt(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(u,d)=>{u==="ok"&&Pl(n.onDisconnect_,e,l),wl(n,a,u,d)})}function eV(n,e,t,s){if(Vf(t)){pn("onDisconnect().update() called with empty data.  Don't do anything."),wl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&Sn(t,(u,d)=>{const g=Bt(d);Pl(n.onDisconnect_,Vt(e,u),g)}),wl(n,s,a,l)})}function tV(n,e,t){let s;Le(e._path)===".info"?s=V1(n.infoSyncTree_,e,t):s=V1(n.serverSyncTree_,e,t),vC(n.eventQueue_,e._path,s)}function nV(n,e,t){let s;Le(e._path)===".info"?s=d_(n.infoSyncTree_,e,t):s=d_(n.serverSyncTree_,e,t),vC(n.eventQueue_,e._path,s)}function iV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(HP)}function tv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),pn(t,...e)}function wl(n,e,t,s){e&&Ol(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const u=new Error(l);u.code=a,e(u)}})}function bC(n,e,t){return By(n.serverSyncTree_,e,t)||Re.EMPTY_NODE}function nv(n,e=n.transactionQueueTree_){if(e||nm(n,e),Vl(e)){const t=SC(n,e);le(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&sV(n,Gu(e),t)}else mC(e)&&Jd(e,t=>{nv(n,t)})}function sV(n,e,t){const s=t.map(m=>m.currentWriteId),a=bC(n,e,s);let l=a;const u=a.hash();for(let m=0;m<t.length;m++){const y=t[m];le(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const b=jn(e,y.path);l=l.updateChild(b,y.currentOutputSnapshotRaw)}const d=l.val(!0),g=e;n.server_.put(g.toString(),d,m=>{tv(n,"transaction put response",{path:g.toString(),status:m});let y=[];if(m==="ok"){const b=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Oa(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&b.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();nm(n,$y(n.transactionQueueTree_,e)),nv(n,n.transactionQueueTree_),Hs(n.eventQueue_,e,y);for(let w=0;w<b.length;w++)Ol(b[w])}else{if(m==="datastale")for(let b=0;b<t.length;b++)t[b].status===3?t[b].status=4:t[b].status=0;else{zn("transaction at "+g.toString()+" failed: "+m);for(let b=0;b<t.length;b++)t[b].status=4,t[b].abortReason=m}tm(n,e)}},u)}function tm(n,e){const t=wC(n,e),s=Gu(t),a=SC(n,t);return rV(n,a,s),s}function rV(n,e,t){if(e.length===0)return;const s=[];let a=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const g=e[d],m=jn(t,g.path);let y=!1,b;if(le(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),g.status===4)y=!0,b=g.abortReason,a=a.concat(Oa(n.serverSyncTree_,g.currentWriteId,!0));else if(g.status===0)if(g.retryCount>=GP)y=!0,b="maxretry",a=a.concat(Oa(n.serverSyncTree_,g.currentWriteId,!0));else{const w=bC(n,g.path,u);g.currentInputSnapshot=w;const C=e[d].update(w.val());if(C!==void 0){em("transaction failed: Data returned ",C,g.path);let M=Bt(C);typeof C=="object"&&C!=null&&ts(C,".priority")||(M=M.updatePriority(w.getPriority()));const z=g.currentWriteId,ie=Jy(n),te=fC(M,w,ie);g.currentOutputSnapshotRaw=M,g.currentOutputSnapshotResolved=te,g.currentWriteId=TC(n),u.splice(u.indexOf(z),1),a=a.concat(lC(n.serverSyncTree_,g.path,te,g.currentWriteId,g.applyLocally)),a=a.concat(Oa(n.serverSyncTree_,z,!0))}else y=!0,b="nodata",a=a.concat(Oa(n.serverSyncTree_,g.currentWriteId,!0))}Hs(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(b==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(b),!1,null))))}nm(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Ol(s[d]);nv(n,n.transactionQueueTree_)}function wC(n,e){let t,s=n.transactionQueueTree_;for(t=Le(e);t!==null&&Vl(s)===void 0;)s=$y(s,t),e=mt(e),t=Le(e);return s}function SC(n,e){const t=[];return AC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function AC(n,e,t){const s=Vl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Jd(e,a=>{AC(n,a,t)})}function nm(n,e){const t=Vl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,dC(e,t.length>0?t:void 0)}Jd(e,s=>{nm(n,s)})}function CC(n,e){const t=Gu(wC(n,e)),s=$y(n.transactionQueueTree_,e);return kP(s,a=>{Rg(n,a)}),Rg(n,s),pC(s,a=>{Rg(n,a)}),t}function Rg(n,e){const t=Vl(e);if(t){const s=[];let a=[],l=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(le(l===u-1,"All SENT items should be at beginning of queue."),l=u,t[u].status=3,t[u].abortReason="set"):(le(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Oa(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&s.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?dC(e,void 0):t.length=l+1,Hs(n.eventQueue_,Gu(e),a);for(let u=0;u<s.length;u++)Ol(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function oV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):zn(`Invalid query segment '${t}' in query '${n}'`)}return e}const F1=function(n,e){const t=lV(n),s=t.namespace;t.domain==="firebase.com"&&qs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&qs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||pO();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new kA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new rt(t.pathString)}},lV=function(n){let e="",t="",s="",a="",l="",u=!0,d="https",g=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let b=n.indexOf("?");b===-1&&(b=n.length),e=n.substring(0,Math.min(y,b)),y<b&&(a=aV(n.substring(y,b)));const w=oV(n.substring(Math.min(n.length,b)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",g=parseInt(e.substring(m+1),10)):m=e.length;const C=e.slice(0,m);if(C.toLowerCase()==="localhost")t="localhost";else if(C.split(".").length<=2)t=C;else{const M=e.indexOf(".");s=e.substring(0,M).toLowerCase(),t=e.substring(M+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:g,domain:t,subdomain:s,secure:u,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+on(this.snapshot.exportVal())}}class uV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return le(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ks;return ZP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){tl("OnDisconnect.remove",this._path);const e=new ks;return z1(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){tl("OnDisconnect.set",this._path),p_("OnDisconnect.set",e,this._path);const t=new ks;return z1(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){tl("OnDisconnect.setWithPriority",this._path),p_("OnDisconnect.setWithPriority",e,this._path),UP("OnDisconnect.setWithPriority",t);const s=new ks;return JP(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){tl("OnDisconnect.update",this._path),jP("OnDisconnect.update",e,this._path);const t=new ks;return eV(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ue(this._path)?null:Iy(this._path)}get ref(){return new Qr(this._repo,this._path)}get _queryIdentifier(){const e=S1(this._queryParams),t=Ay(e);return t==="{}"?"default":t}get _queryObject(){return S1(this._queryParams)}isEqual(e){if(e=_t(e),!(e instanceof iv))return!1;const t=this._repo===e._repo,s=Ny(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZO(this._path)}}class Qr extends iv{constructor(e,t){super(e,t,new Oy,!1)}get parent(){const e=FA(this._path);return e===null?null:new Qr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _d{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new rt(e),s=g_(this.ref,e);return new _d(this._node.getChild(t),s,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new _d(a,g_(this.ref,s),At)))}hasChild(e){const t=new rt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ua(n,e){return n=_t(n),n._checkNotDeleted("ref"),e!==void 0?g_(n._root,e):n._root}function g_(n,e){return n=_t(n),Le(n._path)===null?zP("child","path",e):yC("child","path",e),new Qr(n._repo,Vt(n._path,e))}function dV(n){return n=_t(n),new fV(n._repo,n._path)}function Ig(n){return tl("remove",n._path),im(n,null)}function im(n,e){n=_t(n),tl("set",n._path),p_("set",e,n._path);const t=new ks;return $P(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class sv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new cV("value",this,new _d(e.snapshotNode,new Qr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new uV(this,e,t):null}matches(e){return e instanceof sv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mV(n,e,t,s,a){const l=new hV(t,void 0),u=new sv(l);return tV(n._repo,n,u),()=>nV(n._repo,n,u)}function rv(n,e,t,s){return mV(n,"value",e)}cP(Qr);pP(Qr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV="FIREBASE_DATABASE_EMULATOR_HOST",__={};let gV=!1;function _V(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),u=qr(l);n.repoInfo_=new kA(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function yV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||qs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=F1(l,a),d=u.repoInfo,g;typeof process<"u"&&a1&&(g=a1[pV]),g?(l=`http://${g}?ns=${d.namespace}`,u=F1(l,a),d=u.repoInfo):u.repoInfo.secure;const m=new CO(n.name,n.options,e);FP("Invalid Firebase Database URL",u),Ue(u.path)||qs("Database URL must point to the root of a Firebase Database (not including a child path).");const y=EV(d,n,m,new AO(n,t));return new TV(y,n)}function vV(n,e){const t=__[e];(!t||t[n.key]!==n)&&qs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),iV(n),delete t[n.key]}function EV(n,e,t,s){let a=__[e.name];a||(a={},__[e.name]=a);let l=a[n.toURLString()];return l&&qs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new QP(n,gV,t,s),a[n.toURLString()]=l,l}class TV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qr(this._repo,et())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qs("Cannot call "+e+" on a deleted database.")}}function bV(n=A_(),e){const t=Sd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=J1("database");s&&wV(t,...s)}return t}function wV(n,e,t,s={}){n=_t(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Wi(s,l.repoInfo_.emulatorOptions))return;qs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&qs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new kf(kf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:nw(s.mockUserToken,n.app.options.projectId);u=new kf(d)}qr(e)&&(T_(e),b_("Database",!0)),_V(l,a,s,u)}/**
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
 */function SV(n){cO($a),Fa(new Or("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return yV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Gi(o1,l1,n),Gi(o1,l1,"esm2020")}js.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};js.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};SV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),B1=n=>{const e=CV(n);return e.charAt(0).toUpperCase()+e.slice(1)},xC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),xV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=K.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:u,...d},g)=>K.createElement("svg",{ref:g,...RV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:xC("lucide",a),...!l&&!xV(d)&&{"aria-hidden":"true"},...d},[...u.map(([m,y])=>K.createElement(m,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=(n,e)=>{const t=K.forwardRef(({className:s,...a},l)=>K.createElement(IV,{ref:l,iconNode:e,className:xC(`lucide-${AV(B1(n))}`,`lucide-${n}`,s),...a}));return t.displayName=B1(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],RC=We("arrow-left",NV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],kV=We("ban",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],q1=We("bell",MV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],PV=We("check-check",OV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],av=We("check",VV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],jV=We("circle-check-big",LV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],zV=We("copy",UV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Ng=We("corner-up-left",FV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],qV=We("crown",BV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],IC=We("ellipsis-vertical",HV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],QV=We("eraser",GV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Mf=We("gamepad-2",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],XV=We("hand",KV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ov=We("loader-circle",$V);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],H1=We("log-out",WV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],G1=We("message-circle",ZV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],NC=We("message-square",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],t6=We("newspaper",e6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],i6=We("palette",n6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],r6=We("pin-off",s6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],sm=We("pin",a6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Ll=We("rotate-cw",o6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],c6=We("save",l6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],h6=We("scissors",u6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],d6=We("send",f6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],p6=We("shield-check",m6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],_6=We("shield",g6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],v6=We("smile",y6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],lv=We("square-pen",E6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],yd=We("trash-2",T6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],y_=We("user-plus",b6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],DC=We("user-x",w6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vd=We("users",S6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ed=We("x",A6),C6=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyB_My_YilDOcQ7sFtlCXIVPFCqXInx5iMI",authDomain:"chatdmensagens.firebaseapp.com",projectId:"chatdmensagens",storageBucket:"chatdmensagens.firebasestorage.app",messagingSenderId:"247264688276",appId:"1:247264688276:web:4a54453ca17d8cf0945c81",measurementId:"G-0MSQBFP1PJ"},cv=ow(C6),uv=J2(cv),Ie=WM(cv),za=bV(cv),kC=K.createContext(),x6=({children:n})=>{const[e,t]=K.useState(null),[s,a]=K.useState(!0);K.useEffect(()=>{const u=FN(uv,async d=>{if(d){const g=vt(Ie,"users",d.uid),m=await id(g);if(m.exists())t({...d,...m.data()});else{const y={uid:d.uid,displayName:d.displayName,email:d.email,photoURL:d.photoURL,recado:"Olá! Estou usando o ChatD.",createdAt:Ga()};await oO(g,y),t({...d,...y})}}else t(null);a(!1)});return()=>u()},[]);const l=K.useMemo(()=>({user:e,loading:s}),[e,s]);return E.jsx(kC.Provider,{value:l,children:n})},MC=()=>K.useContext(kC),R6=n=>{K.useEffect(()=>{if(!n)return;const e=Ua(za,`/status/${n.uid}`),t=vt(Ie,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Ua(za,".info/connected"),u=rv(l,d=>{if(d.val()===!1){Mt(t,{state:"offline",last_changed:Ga()});return}dV(e).set(s).then(()=>{im(e,a),Mt(t,{state:"online",last_changed:Ga()})})});return()=>u()},[n])},rm=(n,e)=>{const[t,s]=K.useState(null),{user:a}=MC();return K.useEffect(()=>{if(!n||!a){s(null);return}const l=Dn(vt(Ie,"users",n),g=>{if(g.exists()){const m=g.data(),y=e?.customNames?.[a.uid];s(b=>({...b||{},...m,displayName:y||m.displayName}))}else s(null)}),u=Ua(za,`/status/${n}`),d=rv(u,g=>{const m=g.val();s(y=>({...y||{},presence:m?.state,last_changed:m?.last_changed}))});return()=>{l(),d()}},[n,e,a]),t},I6=n=>{const[e,t]=K.useState(0);return K.useEffect(()=>{if(!n?.uid)return;const s=ln(Pt(Ie,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","pending")),a=Dn(s,l=>{const u=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(u.length)});return()=>a()},[n]),e},N6=n=>{const[e,t]=K.useState(0);return K.useEffect(()=>{if(!n?.uid)return;const s=ln(Pt(Ie,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),a=Dn(s,l=>{const u=l.docs.filter(m=>!m.data().chatDeletedFor?.includes(n.uid)).map(m=>m.data().users.find(y=>y!==n.uid));if(u.length===0){t(0);return}const d={},g=u.map(m=>{const y=[n.uid,m].sort().join("_"),b=ln(Pt(Ie,`conversations/${y}/messages`),Tt("receiverId","==",n.uid),Tt("status","!=","read"));return Dn(b,w=>{d[y]=w.size;const C=Object.values(d).reduce((M,j)=>M+j,0);t(C)})});return()=>g.forEach(m=>m())});return()=>a()},[n]),e},D6=n=>{const e=K.useRef(n);K.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),K.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>0&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=CD"}),e.current=n},[n])},k6=(n,e)=>{const[t,s]=K.useState(null);return K.useEffect(()=>{if(!n||!e||e.isGroup){s(null);return}const a=ln(Pt(Ie,"friendships"),Tt("users","in",[[n.uid,e.uid],[e.uid,n.uid]])),l=Dn(a,u=>{if(u.empty)s(null);else{const d=u.docs[0];s({id:d.id,...d.data()})}});return()=>l()},[n,e]),t},M6=({text:n="Carregando aplicativo..."})=>E.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gray-900 p-4 text-white text-center",children:[E.jsx(ov,{className:"animate-spin h-12 w-12 text-blue-400"}),E.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]}),O6=()=>{const[n,e]=K.useState(!1),[t,s]=K.useState(!1),a=async()=>{if(n)return;e(!0);const u=new Ms;try{await l2(uv,u)}catch(d){console.error("Erro ao fazer login com Google:",d)}finally{e(!1)}},l=()=>{s(!0),setTimeout(()=>s(!1),2e3)};return E.jsxs("div",{className:"flex flex-col h-full w-full bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/50 text-white overflow-hidden",children:[E.jsxs("nav",{className:"flex justify-between items-center p-4 backdrop-blur-sm bg-black/20 border-b border-white/10 z-20",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(NC,{className:"text-blue-400"}),E.jsx("h1",{className:"text-2xl font-bold",children:"ChatD"})]}),E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("button",{onClick:a,className:"px-4 py-2 text-sm font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Entrar no Chat"}),E.jsxs("div",{className:"relative",children:[E.jsx("button",{onClick:l,className:"px-4 py-2 text-sm font-semibold bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed",children:"SocialiD"}),t&&E.jsx("span",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded animate-fade-in",children:"Em Breve!"})]})]})]}),E.jsx("main",{className:"flex-grow flex items-center justify-center p-4",children:E.jsxs("div",{className:"text-center flex flex-col items-center",children:[E.jsx("h2",{style:{animationDelay:"0.2s"},className:"text-5xl font-extrabold mb-4 animate-fade-in-up",children:"Conecte-se. Converse. Jogue."}),E.jsx("p",{style:{animationDelay:"0.4s"},className:"text-lg text-gray-300 max-w-2xl mb-8 animate-fade-in-up",children:"Bem-vindo ao ChatD, sua nova plataforma para conversas seguras e diversão. Faça login para começar a se conectar com seus amigos."}),E.jsxs("button",{style:{animationDelay:"0.6s"},onClick:a,disabled:n,className:"flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 font-bold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-wait animate-fade-in-up",children:[n?E.jsx(ov,{className:"animate-spin w-6 h-6"}):E.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),n?"Entrando...":"Fazer Login com Google"]})]})})]})},P6=({user:n,onClose:e})=>n?E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg transform transition-all animate-zoom-in",onClick:t=>t.stopPropagation(),children:[E.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),E.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),E.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),E.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),E.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Fechar"})]})}):null,V6=({user:n,onClose:e})=>{const[t,s]=K.useState(n.recado||""),a=async()=>{const l=vt(Ie,"users",n.uid);await Mt(l,{recado:t}),e()};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg transform transition-all animate-zoom-in",onClick:l=>l.stopPropagation(),children:[E.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),E.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),E.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),E.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[E.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Salvar"})]})]})})},Sl=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg transform transition-all animate-zoom-in",onClick:l=>l.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),E.jsx("p",{className:"text-gray-400 mb-6",children:a}),E.jsxs("div",{className:"flex justify-center gap-4",children:[E.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Confirmar"})]})]})}):null,L6=({currentUser:n})=>{const[e,t]=K.useState(""),[s,a]=K.useState([]),[l,u]=K.useState({}),[d,g]=K.useState(!1),[m,y]=K.useState(""),[b,w]=K.useState(""),C=async j=>{if(j.preventDefault(),e.trim()!==""){g(!0),y(""),w(""),a([]);try{const z=ln(Pt(Ie,"users"),Tt("email","==",e.trim()),pA(1)),te=(await au(z)).docs.map(re=>re.data())[0];if(te&&te.uid!==n.uid){a([te]);const re=ln(Pt(Ie,"friendships"),Tt("users","in",[[n.uid,te.uid],[te.uid,n.uid]])),ae=(await au(re)).docs[0];u({[te.uid]:ae?ae.data().status:"not_friends"})}else te&&te.uid===n.uid?w("Você não pode adicionar a si mesmo."):w("Nenhum usuário encontrado com este e-mail.")}catch(z){y("Erro ao buscar. Tente novamente."),console.error(z)}finally{g(!1)}}},M=async j=>{try{const z=ln(Pt(Ie,"friendships"),Tt("users","in",[[n.uid,j.uid],[j.uid,n.uid]])),ie=await au(z);if(!ie.empty){const te=ie.docs[0];te.data().status==="declined"&&await sd(vt(Ie,"friendships",te.id))}await Sy(Pt(Ie,"friendships"),{users:[n.uid,j.uid],status:"pending",requestedBy:n.uid,createdAt:Ga()}),u(te=>({...te,[j.uid]:"pending"}))}catch(z){y("Falha ao enviar pedido."),console.error(z)}};return E.jsxs("div",{className:"p-4",children:[E.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),E.jsxs("form",{onSubmit:C,className:"flex gap-2",children:[E.jsx("input",{type:"email",value:e,onChange:j=>t(j.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),E.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center w-24",children:d?E.jsx(ov,{className:"animate-spin"}):"Buscar"})]}),E.jsxs("div",{className:"mt-4 h-24",children:[m&&E.jsx("p",{className:"text-red-400",children:m}),b&&E.jsx("p",{className:"text-yellow-400",children:b}),s.map(j=>E.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:j.photoURL,alt:j.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("span",{className:"text-white",children:j.displayName})]}),E.jsxs("div",{children:[(l[j.uid]==="not_friends"||l[j.uid]==="declined")&&E.jsx("button",{onClick:()=>M(j),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[j.uid]==="pending"&&E.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[j.uid]==="accepted"&&E.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"})]})]},j.uid))]})]})},j6=({currentUser:n})=>{const[e,t]=K.useState([]);K.useEffect(()=>{if(!n?.uid)return;const a=ln(Pt(Ie,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","pending")),l=Dn(a,async u=>{const d=[];for(const g of u.docs){const m=g.data();if(m.requestedBy!==n.uid){const y=m.users.find(w=>w!==n.uid),b=await id(vt(Ie,"users",y));b.exists()&&d.push({id:g.id,...b.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await Mt(vt(Ie,"friendships",a),{status:l?"accepted":"declined"})}catch(u){console.error("Falha ao responder ao pedido:",u)}};return E.jsxs("div",{className:"p-4",children:[E.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?E.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):E.jsx("ul",{className:"space-y-2",children:e.map(a=>E.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("span",{className:"text-white",children:a.displayName})]}),E.jsxs("div",{className:"flex gap-2",children:[E.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110 active:scale-95",children:E.jsx(av,{size:16})}),E.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110 active:scale-95",children:E.jsx(Ed,{size:16})})]})]},a.id))})]})},U6=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=rm(n.friendId,n);return s?E.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[E.jsxs("div",{className:"flex items-center gap-4 relative",children:[E.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),E.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),E.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:E.jsx(yd,{size:18,className:"text-red-500"})})]}):E.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse rounded-lg"})},z6=({currentUser:n,onSelectUser:e})=>{const[t,s]=K.useState([]),[a,l]=K.useState(null);K.useEffect(()=>{if(!n?.uid)return;const d=ln(Pt(Ie,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),g=Dn(d,m=>{const y=m.docs.map(b=>({id:b.id,...b.data(),friendId:b.data().users.find(w=>w!==n.uid)}));s(y)});return()=>g()},[n.uid]);const u=async()=>{if(!a)return;const d=vt(Ie,"friendships",a.id);try{await sd(d)}catch(g){console.error("Error deleting friendship: ",g)}l(null)};return E.jsxs("div",{className:"flex-grow overflow-y-auto",children:[E.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?E.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):E.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>E.jsx(U6,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),E.jsx(Sl,{isOpen:!!a,onClose:()=>l(null),onConfirm:u,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},Q1=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=K.useState([]),[l,u]=K.useState([]),[d,g]=K.useState(null),[m,y]=K.useState({show:!1,x:0,y:0,chat:null});K.useEffect(()=>{if(!n?.uid)return;const z=ln(Pt(Ie,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),ie=Dn(z,_e=>{let ae=_e.docs.map(fe=>({id:fe.id,...fe.data(),friendId:fe.data().users.find(N=>N!==n.uid),isGroup:!1})).filter(fe=>!fe.chatDeletedFor?.includes(n.uid));ae.sort((fe,N)=>{const x=fe.pinnedBy?.includes(n.uid),I=N.pinnedBy?.includes(n.uid);return x&&!I?-1:!x&&I?1:0}),a(ae)}),te=ln(Pt(Ie,"groups"),Tt("members","array-contains",n.uid)),re=Dn(te,_e=>{const ae=_e.docs.map(fe=>{const N=fe.data();return{id:fe.id,...N,isGroup:!0,displayName:N.name,photoURL:`https://placehold.co/96x96/${N.photoColor?.replace("#","")||"7c3aed"}/FFFFFF?text=${N.name.charAt(0).toUpperCase()}`}});u(ae)});return()=>{ie(),re()}},[n.uid]);const b=async z=>{if(!z||z.isGroup)return;const ie=z.pinnedBy?.includes(n.uid),te=vt(Ie,"friendships",z.id);await Mt(te,{pinnedBy:ie?Na(n.uid):ja(n.uid)})},w=async()=>{if(!d)return;const z=vt(Ie,"friendships",d.id);await Mt(z,{chatDeletedFor:ja(n.uid)}),g(null)},C=(z,ie)=>{z.preventDefault(),y({show:!0,x:z.pageX,y:z.pageY,chat:ie})},M=()=>y({...m,show:!1}),j=[...s,...l];return E.jsxs("div",{className:"flex-grow overflow-y-auto",onClick:M,children:[E.jsxs("div",{className:"flex justify-between items-center p-4",children:[E.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),E.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm",children:[E.jsx(vd,{size:16})," Criar Grupo"]})]}),j.length===0?E.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):E.jsx("ul",{className:"divide-y divide-gray-700/50",children:j.map(z=>E.jsx(B6,{chat:z,currentUser:n,onSelectUser:e,onContextMenu:ie=>C(ie,z)},z.id))}),m.show&&E.jsx(F6,{x:m.x,y:m.y,onClose:M,chat:m.chat,currentUser:n,onTogglePin:()=>{b(m.chat),M()},onDeleteChat:()=>{g(m.chat),M()}}),E.jsx(Sl,{isOpen:!!d,onClose:()=>g(null),onConfirm:w,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},F6=({x:n,y:e,onClose:t,chat:s,currentUser:a,onTogglePin:l,onDeleteChat:u})=>{const d=K.useRef(null),g=!s.isGroup&&s.pinnedBy?.includes(a.uid);return K.useEffect(()=>{const m=y=>{d.current&&!d.current.contains(y.target)&&t()};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[t]),E.jsxs("div",{ref:d,style:{top:e,left:n},className:"absolute w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20 animate-zoom-in-fast",children:[!s.isGroup&&E.jsxs("button",{onClick:l,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700 rounded-t-lg",children:[g?E.jsx(r6,{size:14}):E.jsx(sm,{size:14})," ",g?"Desafixar":"Fixar Conversa"]}),E.jsxs("button",{onClick:u,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700 rounded-b-lg",children:[E.jsx(yd,{size:14})," Apagar Conversa"]})]})},B6=({chat:n,currentUser:e,onSelectUser:t,onContextMenu:s})=>{const a=rm(n.friendId,n),[l,u]=K.useState(0),d=!n.isGroup&&n.pinnedBy?.includes(e.uid),[g,m]=K.useState(null),y=n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId);K.useEffect(()=>{if(!e||!n.friendId&&!n.isGroup)return;const j=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,z=ln(Pt(Ie,j),Tt("receiverId","==",e.uid),Tt("status","!=","read")),ie=Dn(z,_e=>u(_e.size)),te=ln(Pt(Ie,j),mA("createdAt","desc"),pA(1)),re=Dn(te,_e=>{m(_e.empty?null:_e.docs[0].data())});return()=>{ie(),re()}},[n,e]);const b=n.isGroup?n:a;if(!b)return E.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse rounded-lg"});const w=M=>{if(!M)return"Offline";const j=new Date(M.seconds?M.seconds*1e3:M),z=new Date,ie=new Date(z.getFullYear(),z.getMonth(),z.getDate()),te=new Date(z.getFullYear(),z.getMonth(),z.getDate()-1),re={hour:"2-digit",minute:"2-digit"},_e=j.toLocaleTimeString("pt-BR",re);if(j>=ie)return`Visto por último hoje às ${_e}`;if(j>=te)return`Visto por último ontem às ${_e}`;const ae={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${j.toLocaleDateString("pt-BR",ae)}`},C=({data:M})=>E.jsxs("div",{className:"relative flex-shrink-0",children:[M.photoURL?E.jsx("img",{src:M.photoURL,alt:M.displayName,className:"w-12 h-12 rounded-full"}):E.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold",style:{backgroundColor:M.photoColor||"#7c3aed"},children:M.displayName?.charAt(0).toUpperCase()}),y&&E.jsx("div",{className:"absolute inset-0 bg-black/50 rounded-full flex items-center justify-center",children:E.jsx(kV,{size:20,className:"text-white"})})]});return E.jsxs("li",{onClick:()=>t(b),onContextMenu:s,className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${d?"bg-blue-900/20":""}`,children:[E.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[E.jsx(C,{data:b}),!n.isGroup&&E.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${a?.presence==="online"?"bg-green-500":"bg-gray-500"}`}),E.jsxs("div",{className:"flex-grow min-w-0",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[d&&E.jsx(sm,{size:14,className:"text-blue-400 flex-shrink-0"}),E.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:b.displayName})]}),E.jsx("p",{className:"text-sm text-gray-400 truncate",children:g?g.isDeleted?"Mensagem apagada":g.text:n.isGroup?"Nenhuma mensagem ainda":a?.presence==="online"?"Online":w(a?.last_changed)})]})]}),E.jsx("div",{className:"flex items-center gap-2 flex-shrink-0 ml-2",children:l>0&&E.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:l})})]})},q6=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a,onPin:l})=>{const[u,d]=K.useState(!1),g=K.useRef(null),m=K.useRef(),[y,b]=K.useState("bottom"),[w,C]=K.useState("Copiar"),M=ae=>{const fe=/(https?:\/\/[^\s]+)/g;return ae.split(fe).map((N,x)=>N.match(fe)?E.jsx("a",{href:N,target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 underline hover:text-blue-200",children:N},x):N)},j=()=>{navigator.clipboard.writeText(n.text).then(()=>{C("Copiado!"),setTimeout(()=>{C("Copiar"),d(!1)},1e3)}).catch(ae=>{console.error("Falha ao copiar texto: ",ae),C("Falhou!"),setTimeout(()=>{C("Copiar"),d(!1)},1e3)})};K.useEffect(()=>{u&&g.current&&(g.current.getBoundingClientRect().top<150?b("top"):b("bottom"))},[u]),K.useEffect(()=>{const ae=fe=>{g.current&&!g.current.contains(fe.target)&&d(!1)};return document.addEventListener("mousedown",ae),()=>document.removeEventListener("mousedown",ae)},[]);const z=ae=>{ae.preventDefault(),navigator.vibrate&&navigator.vibrate(50),d(!0)},ie=ae=>{m.current=setTimeout(()=>z(ae),500)},te=()=>{clearTimeout(m.current)},re=()=>{clearTimeout(m.current)},_e=({msg:ae})=>{if(!e||!ae.status)return null;const fe=ae.status==="read";return E.jsx(PV,{size:16,className:fe?"text-blue-300":"text-gray-400"})};return E.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&E.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:E.jsx(Ng,{size:16})}),E.jsxs("div",{className:"relative",ref:g,onTouchStart:ie,onTouchEnd:te,onTouchMove:re,onContextMenu:ae=>{ae.preventDefault(),d(!0)},children:[E.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&E.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[E.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),E.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),E.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":M(n.text)}),!n.isDeleted&&E.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&E.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),E.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),E.jsx(_e,{msg:n})]})]}),u&&E.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${y==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10 animate-zoom-in-fast`,children:[E.jsxs("button",{onClick:j,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(zV,{size:14})," ",w]}),E.jsxs("button",{onClick:()=>{l(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(sm,{size:14})," Fixar"]}),E.jsxs("button",{onClick:()=>{t(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(Ng,{size:14})," Responder"]}),e&&!n.isDeleted&&E.jsxs(E.Fragment,{children:[E.jsxs("button",{onClick:()=>{a(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(lv,{size:14})," Editar"]}),E.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(yd,{size:14})," Apagar para mim"]}),E.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[E.jsx(yd,{size:14})," Apagar para todos"]})]})]})]}),e&&E.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:E.jsx(Ng,{size:16})})]})},H6=({onEmojiSelect:n,onClose:e})=>{const t=K.useRef(null);K.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍🔥","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return E.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker animate-zoom-in-fast",children:E.jsx("div",{className:"p-2 overflow-y-auto",children:E.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>E.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},G6=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}},{id:"rose",name:"Rosa",style:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"}},{id:"night",name:"Noite",style:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}}];return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg animate-zoom-in",onClick:a=>a.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),E.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>E.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[E.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&E.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:E.jsx(jV,{className:"text-white"})})}),E.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},Q6=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=K.useState(t);return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg animate-zoom-in",onClick:l=>l.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),E.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),E.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[E.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Salvar"})]})]})})},Y6=({groupData:n,friendships:e,onClose:t})=>{const[s,a]=K.useState([]),[l,u]=K.useState([]);K.useEffect(()=>{const m=e.filter(y=>!n.members.includes(y.friendId));u(m)},[e,n.members]);const d=m=>{a(y=>y.includes(m)?y.filter(b=>b!==m):[...y,m])},g=async()=>{if(s.length===0)return;const m=vt(Ie,"groups",n.id);await Mt(m,{members:ja(...s)}),t()};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col h-4/5 animate-zoom-in",onClick:m=>m.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Adicionar Membros"}),E.jsx("div",{className:"flex-grow overflow-y-auto pr-2 mb-4",children:l.length>0?l.map(m=>E.jsx(OC,{friendship:m,onToggle:d,isSelected:s.includes(m.friendId)},m.id)):E.jsx("p",{className:"text-gray-400 text-center",children:"Todos os seus amigos já estão neste grupo."})}),E.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[E.jsx("button",{onClick:t,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:g,disabled:s.length===0,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:bg-gray-500",children:"Adicionar"})]})]})})},K6=({groupData:n,currentUser:e,onClose:t,onLeaveChat:s,friendships:a})=>{const[l,u]=K.useState([]),[d,g]=K.useState(!1),[m,y]=K.useState(!1),[b,w]=K.useState(!1),[C,M]=K.useState(!1),[j,z]=K.useState(n.name),[ie,te]=K.useState(n.description||""),[re,_e]=K.useState(n.photoColor),ae=n.admins?.includes(e.uid),fe=vt(Ie,"groups",n.id),N=["#7c3aed","#db2777","#0284c7","#16a34a","#f97316","#ca8a04"];K.useEffect(()=>{(async()=>{const Me=n.members.map(me=>id(vt(Ie,"users",me))),se=(await Promise.all(Me)).filter(me=>me.exists()).map(me=>me.data());u(se)})()},[n.members]);const x=async()=>{if(j.trim())try{await Mt(fe,{name:j,description:ie,photoColor:re}),M(!1)}catch(he){console.error("Erro ao salvar alterações do grupo:",he)}},I=async()=>{const he={members:Na(e.uid)};if(ae)if(n.admins.filter(se=>se!==e.uid).length===0&&n.members.length-1>0){const se=n.members.find(me=>me!==e.uid);se&&(he.admins=[se])}else he.admins=Na(e.uid);await Mt(fe,he);const Me=await id(fe);Me.exists()&&Me.data().members.length===0&&await sd(fe),s(),t()},P=async()=>{await sd(fe),s(),t()},V=async he=>{await Mt(fe,{members:Na(he),admins:Na(he)})},L=async he=>{const Me=n.admins.includes(he);await Mt(fe,{admins:Me?Na(he):ja(he)})},R=({member:he})=>{const[Me,Y]=K.useState(!1),se=n.admins?.includes(he.uid),me=ae&&he.uid!==e.uid;return E.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700/50 rounded-lg",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:he.photoURL,alt:he.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("span",{className:"text-white",children:he.displayName})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[se&&E.jsx(qV,{size:16,className:"text-yellow-400"}),me&&E.jsxs("div",{className:"relative",children:[E.jsx("button",{onClick:()=>Y(He=>!He),children:E.jsx(IC,{size:20})}),Me&&E.jsxs("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20 animate-zoom-in-fast",children:[E.jsxs("button",{onClick:()=>{L(he.uid),Y(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[se?E.jsx(_6,{size:14}):E.jsx(p6,{size:14})," ",se?"Rebaixar":"Promover a Admin"]}),E.jsxs("button",{onClick:()=>{V(he.uid),Y(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[E.jsx(DC,{size:14})," Remover do Grupo"]})]})]})]})]})};return E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-lg w-full border border-blue-500/50 shadow-lg flex flex-col h-5/6 animate-zoom-in",onClick:he=>he.stopPropagation(),children:[E.jsxs("div",{className:"flex flex-col items-center mb-4 relative",children:[ae&&!C&&E.jsx("button",{onClick:()=>M(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-white",children:E.jsx(lv,{size:18})}),E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4",style:{backgroundColor:re},children:j?.charAt(0).toUpperCase()}),C&&E.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 p-1 rounded-full flex gap-1",children:N.map(he=>E.jsx("button",{onClick:()=>_e(he),className:`w-5 h-5 rounded-full transition-transform hover:scale-110 ${re===he?"ring-2 ring-white":""}`,style:{backgroundColor:he}},he))})]}),C?E.jsxs(E.Fragment,{children:[E.jsx("input",{type:"text",value:j,onChange:he=>z(he.target.value),className:"w-full bg-gray-700 text-white text-center text-2xl font-bold rounded-lg p-1 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),E.jsx("textarea",{value:ie,onChange:he=>te(he.target.value),placeholder:"Descrição do grupo...",className:"w-full bg-gray-700 text-white text-center text-sm rounded-lg p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:2})]}):E.jsxs(E.Fragment,{children:[E.jsx("h2",{className:"text-2xl font-bold text-white mt-4",children:n.name}),E.jsx("p",{className:"text-gray-400 text-sm",children:n.description||`${n.members?.length} membros`})]})]}),E.jsxs("div",{className:"flex-grow overflow-y-auto pr-2",children:[E.jsxs("div",{className:"flex justify-between items-center mb-2",children:[E.jsx("h3",{className:"text-lg font-semibold text-white",children:"Membros"}),ae&&E.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300",children:[E.jsx(y_,{size:16})," Adicionar"]})]}),E.jsx("ul",{className:"space-y-2",children:l.map(he=>E.jsx(R,{member:he},he.uid))})]}),E.jsx("div",{className:"mt-6 flex flex-col gap-2",children:C?E.jsxs("div",{className:"flex gap-2",children:[E.jsx("button",{onClick:()=>M(!1),className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsxs("button",{onClick:x,className:"w-full flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(c6,{size:16})," Salvar"]})]}):E.jsxs(E.Fragment,{children:[ae&&E.jsx("button",{onClick:()=>y(!0),className:"w-full bg-gray-700/50 px-4 py-2 rounded-lg text-red-500 font-semibold hover:bg-red-900/50 transition-colors",children:"Deletar Grupo"}),E.jsx("button",{onClick:()=>g(!0),className:"w-full bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Sair do Grupo"}),E.jsx("button",{onClick:t,className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Fechar"})]})})]})}),b&&E.jsx(Y6,{groupData:n,friendships:a,onClose:()=>w(!1)}),E.jsx(Sl,{isOpen:d,onClose:()=>g(!1),onConfirm:I,title:"Sair do Grupo?",message:"Você tem certeza que quer sair deste grupo?"}),E.jsx(Sl,{isOpen:m,onClose:()=>y(!1),onConfirm:P,title:"Deletar Grupo?",message:"Esta ação é irreversível e deletará o grupo para todos os membros."})]})},Y1=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=K.useState([]),[l,u]=K.useState(""),[d,g]=K.useState(!1),[m,y]=K.useState(!1),[b,w]=K.useState(!1),[C,M]=K.useState(null),[j,z]=K.useState(null),[ie,te]=K.useState(!1),[re,_e]=K.useState(!1),[ae,fe]=K.useState(!1),[N,x]=K.useState(!1),[I,P]=K.useState(!1),[V,L]=K.useState(null),[R,he]=K.useState(e),[Me,Y]=K.useState([]),se=K.useRef(null),me=K.useRef(null),He=K.useRef(null),D=e.isGroup,$=k6(n,e),ce=rm(e.uid,$),ne=D?e.id:[n.uid,e.uid].sort().join("_"),Te=$?.themes?.[n.uid]||"default",Oe=D?R.pinnedMessage:$?.pinnedMessage,Ae={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"},rose:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"},night:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}},It=(de="smooth")=>{me.current?.scrollIntoView({behavior:de})};K.useEffect(()=>{It("auto")},[ne]),K.useEffect(()=>{const de=He.current;de&&de.scrollHeight-de.clientHeight<=de.scrollTop+1&&It("smooth")},[s]),K.useEffect(()=>{if(!n?.uid)return;const de=ln(Pt(Ie,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),ge=Dn(de,ve=>{const ot=ve.docs.map(ft=>({id:ft.id,...ft.data(),friendId:ft.data().users.find(cn=>cn!==n.uid)}));Y(ot)});return()=>ge()},[n.uid]);const at=de=>{if(!de)return"";const ge=new Date(de.seconds?de.seconds*1e3:de),ve=new Date,ot=new Date(ve.getFullYear(),ve.getMonth(),ve.getDate()),ft=new Date(ve.getFullYear(),ve.getMonth(),ve.getDate()-1),cn={hour:"2-digit",minute:"2-digit"},io=ge.toLocaleTimeString("pt-BR",cn);if(ge>=ot)return`Visto por último hoje às ${io}`;if(ge>=ft)return`Visto por último ontem às ${io}`;const rs={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${ge.toLocaleDateString("pt-BR",rs)}`};K.useEffect(()=>{if(D){const de=vt(Ie,"groups",e.id),ge=Dn(de,ve=>{ve.exists()?he({...ve.data(),id:ve.id,isGroup:!0}):t()});return()=>ge()}},[D,e.id,t]),K.useEffect(()=>{const de=`conversations/${ne}/messages`,ge=ln(Pt(Ie,de),mA("createdAt","asc")),ve=Dn(ge,ot=>{const ft=ot.docs.map(cn=>({id:cn.id,...cn.data()})).filter(cn=>!cn.deletedFor?.includes(n.uid));a(ft)});return()=>ve()},[ne,n.uid]),K.useEffect(()=>{if(D||!document.hasFocus())return;const de=async()=>{const ge=Pt(Ie,`conversations/${ne}/messages`),ve=ln(ge,Tt("receiverId","==",n.uid),Tt("status","!=","read")),ot=await au(ve);if(!ot.empty){const ft=r1(Ie);ot.docs.forEach(cn=>{ft.update(cn.ref,{status:"read"})}),await ft.commit().catch(cn=>console.error("Erro ao marcar mensagens como lidas:",cn))}};return de(),window.addEventListener("focus",de),()=>{window.removeEventListener("focus",de)}},[ne,n.uid,D,s]),K.useEffect(()=>{if(D)return;const de=Ua(za,`typing/${ne}/${e.uid}`),ge=rv(de,ve=>g(ve.val()===!0));return()=>ge()},[ne,e.uid,D]);const $n=de=>{if(u(de.target.value),D)return;const ge=Ua(za,`typing/${ne}/${n.uid}`);de.target.value.trim().length>0?(im(ge,!0),se.current&&clearTimeout(se.current),se.current=setTimeout(()=>Ig(ge),3e3)):Ig(ge)},Ci=async de=>{if(de.preventDefault(),l.trim()===""||!D&&($?.blockedBy?.includes(e.uid)||$?.blockedBy?.includes(n.uid)))return;const ge=l;u(""),D||(Ig(Ua(za,`typing/${ne}/${n.uid}`)),se.current&&clearTimeout(se.current));const ve={text:ge,createdAt:Ga(),senderId:n.uid,senderName:n.displayName};D||(ve.receiverId=e.uid,ve.status=ce?.presence==="online"?"delivered":"sent"),C&&(ve.replyTo={id:C.id,text:C.text,senderName:C.senderId===n.uid?"Você":D?C.senderName:e.displayName});try{await Sy(Pt(Ie,`conversations/${ne}/messages`),ve),M(null)}catch(ot){console.error("Falha ao enviar mensagem:",ot),u(ge)}},di=async de=>{if(de.preventDefault(),!j||l.trim()==="")return;const ge=vt(Ie,`conversations/${ne}/messages`,j.id);await Mt(ge,{text:l,edited:!0}),z(null),u("")},ns=async()=>{if(!V)return;const{id:de,type:ge}=V,ve=vt(Ie,`conversations/${ne}/messages`,de);ge==="self"?await Mt(ve,{deletedFor:ja(n.uid)}):ge==="all"&&await Mt(ve,{text:"",isDeleted:!0,replyTo:null}),L(null)},is=async()=>{const de=ln(Pt(Ie,`conversations/${ne}/messages`)),ge=await au(de),ve=r1(Ie);ge.docs.forEach(ot=>{ve.update(ot.ref,{deletedFor:ja(n.uid)})}),await ve.commit(),fe(!1)},ss=async()=>{if(!$)return;const de=vt(Ie,"friendships",$.id);$.blockedBy?.includes(n.uid)?await Mt(de,{blockedBy:Na(n.uid)}):await Mt(de,{blockedBy:ja(n.uid)}),_e(!1)},Yr=async de=>{if(!$)return;const ge=vt(Ie,"friendships",$.id);await Mt(ge,{[`themes.${n.uid}`]:de}),x(!1)},no=async de=>{if(!$||!de.trim())return;const ge=vt(Ie,"friendships",$.id);await Mt(ge,{[`customNames.${n.uid}`]:de.trim()}),P(!1)},kn=async de=>{const ge=D&&R.admins.includes(n.uid);if(D&&!ge)return;const ve=D?vt(Ie,"groups",R.id):vt(Ie,"friendships",$.id),ot={id:de.id,text:de.text,senderName:de.senderName};await Mt(ve,{pinnedMessage:ot})},jl=async()=>{const de=D&&R.admins.includes(n.uid);if(D&&!de)return;const ge=D?vt(Ie,"groups",R.id):vt(Ie,"friendships",$.id);await Mt(ge,{pinnedMessage:null})},Kr=de=>{z(de),u(de.text),M(null)},Ys=()=>{z(null),u("")},Wn=!D&&$?.blockedBy?.includes(n.uid),Xr=!D&&$?.blockedBy?.includes(e.uid),xi=D?R.name:ce?.displayName,$r=D?R.photoColor?"":R.photoURL:e.photoURL;return E.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[E.jsxs("header",{className:"flex items-center p-4 bg-gray-900/80 backdrop-blur-sm shadow-md flex-shrink-0 z-20",children:[E.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:E.jsx(RC,{size:24})}),E.jsxs("div",{className:"flex items-center cursor-pointer flex-grow min-w-0",onClick:()=>D?w(!0):y(!0),children:[D?E.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold mr-4",style:{backgroundColor:R.photoColor||"#7c3aed"},children:xi?.charAt(0).toUpperCase()}):E.jsx("img",{src:$r,alt:xi,className:"w-10 h-10 rounded-full mr-4 flex-shrink-0"}),E.jsxs("div",{className:"min-w-0",children:[E.jsx("h2",{className:"text-xl font-bold text-white truncate",children:xi}),E.jsx("p",{className:"text-sm text-blue-300 h-4",children:D?`${R.members?.length||0} membros`:d?"Digitando...":ce?.presence==="online"?"Online":at(ce?.last_changed)})]})]}),E.jsxs("div",{className:"relative",children:[E.jsx("button",{onClick:()=>_e(de=>!de),className:"p-2 text-gray-400 hover:text-white",children:E.jsx(IC,{})}),re&&E.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10 animate-zoom-in-fast",children:[D?E.jsxs("button",{onClick:()=>{w(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(vd,{size:14})," Perfil do Grupo"]}):E.jsxs(E.Fragment,{children:[E.jsxs("button",{onClick:()=>{P(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(lv,{size:14})," Alterar nome do contato"]}),E.jsxs("button",{onClick:()=>{x(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(i6,{size:14})," Alterar tema da conversa"]})]}),E.jsxs("button",{onClick:()=>{fe(!0),_e(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(QV,{size:14})," Limpar conversa"]}),!D&&E.jsxs("button",{onClick:ss,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[E.jsx(DC,{size:14})," ",Wn?"Desbloquear":"Bloquear"]})]})]})]}),E.jsxs("main",{ref:He,className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500 flex flex-col",style:D?Ae.default:Ae[Te],children:[Oe&&E.jsx("div",{className:"bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg mb-4 border border-blue-500/50 animate-fade-in w-full sticky top-0 z-10",children:E.jsxs("div",{className:"flex justify-between items-center",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold",children:[E.jsx(sm,{size:12})," MENSAGEM FIXADA"]}),E.jsx("p",{className:"text-sm text-white truncate",children:Oe.text})]}),(D?R.admins.includes(n.uid):!0)&&E.jsx("button",{onClick:jl,className:"p-1 text-gray-400 hover:text-white",children:E.jsx(Ed,{size:16})})]})}),E.jsxs("div",{className:"space-y-2 mt-auto",children:[s.map(de=>E.jsx(q6,{msg:de,isCurrentUser:de.senderId===n.uid,onReply:()=>M(de),onDelete:ge=>L({id:de.id,type:ge}),onEdit:()=>Kr(de),onPin:()=>kn(de)},de.id)),E.jsx("div",{ref:me})]})]}),E.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0 z-20",children:[(C||j)&&E.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative animate-fade-in-fast",children:[E.jsxs("div",{className:"flex justify-between items-center text-sm",children:[E.jsx("p",{className:"font-bold",children:j?"Editando mensagem":`Respondendo a ${C.senderId===n.uid?"Você":D?C.senderName:ce?.displayName}`}),E.jsx("button",{onClick:j?Ys:()=>M(null),className:"p-1",children:E.jsx(Ed,{size:16})})]}),E.jsx("p",{className:"text-xs text-gray-400 truncate",children:j?j.text:C.text})]}),E.jsxs("div",{className:"relative flex items-center gap-2",children:[ie&&E.jsx(H6,{onEmojiSelect:de=>u(ge=>ge+de),onClose:()=>te(!1)}),E.jsx("button",{type:"button",onClick:()=>te(de=>!de),className:"p-2 text-gray-400 hover:text-white",children:E.jsx(v6,{})}),E.jsxs("form",{onSubmit:j?di:Ci,className:"flex-grow flex items-center gap-2",children:[E.jsx("input",{type:"text",value:l,onChange:$n,placeholder:Wn?"Você bloqueou este contato.":Xr?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:Xr||Wn,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),E.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 active:scale-95 disabled:bg-gray-500",disabled:!l.trim()||Xr||Wn,children:j?E.jsx(av,{size:20}):E.jsx(d6,{size:20})})]})]})]}),m&&E.jsx(P6,{user:e,onClose:()=>y(!1)}),b&&E.jsx(K6,{groupData:R,currentUser:n,onClose:()=>w(!1),onLeaveChat:t,friendships:Me}),N&&E.jsx(G6,{onClose:()=>x(!1),onSelectTheme:Yr,currentTheme:Te}),I&&E.jsx(Q6,{onClose:()=>P(!1),onSave:no,currentName:ce?.displayName}),E.jsx(Sl,{isOpen:ae,onClose:()=>fe(!1),onConfirm:is,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),E.jsx(Sl,{isOpen:!!V,onClose:()=>L(null),onConfirm:ns,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${V?.type==="all"?"para todos":"para você"}?`})]})},X6=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=K.useState(""),[l,u]=K.useState([n.uid]),[d,g]=K.useState(""),m=b=>{u(w=>w.includes(b)?w.filter(C=>C!==b):[...w,b])},y=async()=>{if(!s.trim()){g("O nome do grupo é obrigatório.");return}if(l.length<2){g("Selecione pelo menos um amigo para criar um grupo.");return}try{await Sy(Pt(Ie,"groups"),{name:s.trim(),description:"",members:l,admins:[n.uid],createdAt:Ga(),createdBy:n.uid,photoColor:"#7c3aed",pinnedMessage:null}),e()}catch(b){console.error("Erro ao criar grupo:",b),g(`Erro: ${b.message}`)}};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col animate-zoom-in",onClick:b=>b.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),E.jsx("input",{type:"text",value:s,onChange:b=>a(b.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),E.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),E.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(b=>E.jsx(OC,{friendship:b,onToggle:m,isSelected:l.includes(b.friendId)},b.id))}),d&&E.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),E.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[E.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Criar Grupo"})]})]})})},OC=({friendship:n,onToggle:e,isSelected:t})=>{const s=rm(n.friendId,n);return s?E.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("span",{className:"text-white",children:s.displayName})]}),E.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&E.jsx(av,{size:16,className:"text-white"})})]}):null},$6=({user:n,onLogout:e})=>{const[t,s]=K.useState(null),[a,l]=K.useState("chats"),[u,d]=K.useState("list"),[g,m]=K.useState(!1),[y,b]=K.useState(!1),[w,C]=K.useState([]),M=I6(n),j=N6(n);D6(j),K.useEffect(()=>{if(!n?.uid)return;const N=ln(Pt(Ie,"friendships"),Tt("users","array-contains",n.uid),Tt("status","==","accepted")),x=Dn(N,I=>{const P=I.docs.map(V=>({id:V.id,...V.data(),friendId:V.data().users.find(L=>L!==n.uid)}));C(P)});return()=>x()},[n.uid]),K.useEffect(()=>{t?(d("chat"),l("chats")):d("list")},[t]);const z=N=>{l(N),s(null)},ie=N=>{s(N)},te=()=>{s(null)},re=({count:N})=>N===0?null:E.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:N}),_e=({count:N})=>N===0?null:E.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[E.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),E.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]}),ae=()=>{switch(a){case"chats":return E.jsx(Q1,{currentUser:n,onSelectUser:ie,onCreateGroup:()=>b(!0)});case"contacts":return E.jsx(z6,{currentUser:n,onSelectUser:ie});case"add":return E.jsx(L6,{currentUser:n});case"requests":return E.jsx(j6,{currentUser:n});case"game":return E.jsx(W6,{});default:return E.jsx(Q1,{currentUser:n,onSelectUser:ie,onCreateGroup:()=>b(!0)})}},fe=()=>t?E.jsx(Y1,{currentUser:n,otherUser:t,onLeave:te}):a==="game"?E.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[E.jsx(Mf,{size:60,className:"mb-4"}),E.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione um jogo"}),E.jsx("p",{children:"Escolha um jogo na barra lateral para começar a diversão!"})]}):E.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[E.jsx(NC,{size:60,className:"mb-4"}),E.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),E.jsx("p",{children:"Ou adicione um novo contato para começar a conversar."})]});return E.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[g&&E.jsx(V6,{user:n,onClose:()=>m(!1)}),y&&E.jsx(X6,{currentUser:n,onClose:()=>b(!1),friendships:w}),E.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[E.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[E.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>m(!0),children:[E.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),E.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:E.jsx(H1,{size:20})})]}),E.jsxs("div",{className:"flex border-b border-gray-700/50",children:[E.jsxs("button",{onClick:()=>z("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[E.jsx(G1,{className:"mx-auto"}),E.jsx(_e,{count:j})]}),E.jsx("button",{onClick:()=>z("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:E.jsx(vd,{className:"mx-auto"})}),E.jsx("button",{onClick:()=>z("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:E.jsx(y_,{className:"mx-auto"})}),E.jsxs("button",{onClick:()=>z("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[E.jsx(q1,{className:"mx-auto"}),E.jsx(re,{count:M})]}),E.jsx("button",{onClick:()=>z("game"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="game"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:E.jsx(Mf,{className:"mx-auto"})})]}),E.jsx("div",{className:"flex-grow overflow-y-auto",children:ae()})]}),E.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[E.jsxs("div",{className:`flex-col h-full ${u==="list"?"flex":"hidden"}`,children:[E.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[E.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>m(!0),children:[E.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),E.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:E.jsx(H1,{size:20})})]}),E.jsx("div",{className:"flex-grow overflow-y-auto",children:ae()}),E.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[E.jsxs("button",{onClick:()=>z("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[E.jsx(G1,{}),E.jsx(_e,{count:j})]}),E.jsx("button",{onClick:()=>z("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:E.jsx(vd,{})}),E.jsx("button",{onClick:()=>z("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:E.jsx(y_,{})}),E.jsxs("button",{onClick:()=>z("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[E.jsx(q1,{}),E.jsx(re,{count:M})]}),E.jsx("button",{onClick:()=>z("game"),className:`relative p-3 rounded-lg ${a==="game"?"text-blue-500":"text-gray-400"}`,children:E.jsx(Mf,{})})]})]}),u==="chat"&&t&&E.jsx(Y1,{currentUser:n,otherUser:t,onLeave:te})]}),E.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:fe()})]})},W6=()=>{const[n,e]=K.useState(null),t=[{id:"tictactoe",name:"Jogo da Velha",component:E.jsx(Z6,{})},{id:"rps",name:"Jokempô",component:E.jsx(J6,{})},{id:"breakout",name:"Break Bricks",component:E.jsx(e3,{})},{id:"snake",name:"Snake",component:E.jsx(t3,{})},{id:"pong",name:"Pong",component:E.jsx(n3,{})},{id:"flappy",name:"Flappy Bird",component:E.jsx(i3,{})}];if(n){const s=t.find(a=>a.id===n);return E.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-800",children:[E.jsx("header",{className:"p-2 bg-gray-900 flex items-center flex-shrink-0",children:E.jsxs("button",{onClick:()=>e(null),className:"flex items-center gap-2 px-3 py-1.5 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm",children:[E.jsx(RC,{size:16})," Voltar para os Jogos"]})}),E.jsx("div",{className:"flex-grow flex items-center justify-center overflow-hidden p-2",children:s.component})]})}return E.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-800",children:[E.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-white",children:"Jogos"}),E.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl",children:t.map(s=>E.jsxs("button",{onClick:()=>e(s.id),className:"p-6 bg-gray-700 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center aspect-square",children:[E.jsx(Mf,{size:48,className:"mb-4 text-blue-400"}),E.jsx("span",{className:"text-lg font-semibold text-white text-center",children:s.name})]},s.id))})]})},Z6=()=>{const[n,e]=K.useState(Array(9).fill(null)),[t,s]=K.useState(!0),l=(w=>{const C=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let M=0;M<C.length;M++){const[j,z,ie]=C[M];if(w[j]&&w[j]===w[z]&&w[j]===w[ie])return w[j]}return null})(n),u=!l&&n.every(w=>w!==null),d=w=>{if(l||n[w])return;const C=n.slice();C[w]=t?"X":"O",e(C),s(!t)},g=()=>{e(Array(9).fill(null)),s(!0)},m=({className:w})=>E.jsx("div",{className:`w-12 h-12 rounded-full border-8 ${w}`}),y=w=>E.jsx("button",{onClick:()=>d(w),className:"w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-lg text-4xl sm:text-5xl font-bold flex items-center justify-center transition-colors hover:bg-gray-600",children:n[w]==="X"?E.jsx(Ed,{className:"text-blue-400",size:48}):n[w]==="O"?E.jsx(m,{className:"text-pink-400 border-pink-400"}):null});let b;return l?b=`Vencedor: ${l}`:u?b="Empate!":b=`Próximo jogador: ${t?"X":"O"}`,E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsx("h3",{className:"text-2xl font-bold mb-4",children:b}),E.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:Array(9).fill(null).map((w,C)=>y(C))}),E.jsxs("button",{onClick:g,className:"flex items-center gap-2 mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Reiniciar"]})]})},J6=()=>{const[n,e]=K.useState(null),[t,s]=K.useState(null),[a,l]=K.useState(""),u=["rock","paper","scissors"],d={rock:E.jsx(XV,{size:48}),paper:E.jsx(t6,{size:48}),scissors:E.jsx(h6,{size:48})},g=y=>{const b=u[Math.floor(Math.random()*u.length)];e(y),s(b),l(y===b?"Empate!":y==="rock"&&b==="scissors"||y==="scissors"&&b==="paper"||y==="paper"&&b==="rock"?"Você Venceu!":"Você Perdeu!")},m=()=>{e(null),s(null),l("")};return E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Jokempô"}),E.jsx("div",{className:"flex gap-4 sm:gap-8 mb-6",children:u.map(y=>E.jsx("button",{onClick:()=>g(y),className:"p-4 bg-gray-700 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110 active:scale-95",children:d[y]},y))}),n&&E.jsxs("div",{className:"text-center animate-fade-in",children:[E.jsxs("div",{className:"flex items-center justify-center gap-8 text-lg mb-4",children:[E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("span",{children:"Você"}),d[n]]}),E.jsx("span",{className:"text-2xl",children:"vs"}),E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("span",{children:"PC"}),d[t]]})]}),E.jsx("h3",{className:"text-2xl font-bold",children:a})]}),E.jsxs("button",{onClick:m,className:"flex items-center gap-2 mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]})},e3=()=>{const n=K.useRef(null),[e,t]=K.useState({score:0,lives:3,isOver:!1,message:""}),s=K.useRef(null),a=K.useCallback(()=>{const u=n.current;if(!u)return;const d=u.getContext("2d");if(!d)return;s.current&&s.current.animationFrameId&&cancelAnimationFrame(s.current.animationFrameId);const g=u.parentElement;u.width=g.clientWidth,u.height=g.clientHeight;let m=0,y=3;const b=Math.min(u.width,u.height)*.02;let w=u.width/2,C=u.height-30,M=4,j=-4;const z=10,ie=u.width*.2,te=5,re=7,_e=10,ae=30,fe=30,N=(u.width-2*fe-(re-1)*_e)/re,x=20,I=[],P=["#0284c7","#f97316","#16a34a","#db2777","#ca8a04"];for(let R=0;R<re;R++){I[R]=[];for(let he=0;he<te;he++)I[R][he]={x:0,y:0,status:1,color:P[he%P.length]}}s.current={rightPressed:!1,leftPressed:!1,paddleX:(u.width-ie)/2,animationFrameId:null};const V=()=>{w=u.width/2,C=u.height-30,M=4*(Math.random()>.5?1:-1),j=-4,s.current.paddleX=(u.width-ie)/2},L=()=>{d.clearRect(0,0,u.width,u.height);for(let R=0;R<re;R++)for(let he=0;he<te;he++)if(I[R][he].status===1){const Me=R*(N+_e)+fe,Y=he*(x+_e)+ae;I[R][he].x=Me,I[R][he].y=Y,d.beginPath(),d.rect(Me,Y,N,x),d.fillStyle=I[R][he].color,d.fill(),d.closePath()}d.beginPath(),d.arc(w,C,b,0,Math.PI*2),d.fillStyle="#FFFFFF",d.fill(),d.closePath(),d.beginPath(),d.rect(s.current.paddleX,u.height-z,ie,z),d.fillStyle="#38bdf8",d.fill(),d.closePath(),d.font="16px Arial",d.fillStyle="#FFFFFF",d.fillText("Pontos: "+m,8,20),d.fillText("Vidas: "+y,u.width-65,20);for(let R=0;R<re;R++)for(let he=0;he<te;he++){const Me=I[R][he];if(Me.status===1&&w>Me.x&&w<Me.x+N&&C>Me.y&&C<Me.y+x&&(j=-j,Me.status=0,m++,t(Y=>({...Y,score:m})),m===te*re)){t(Y=>({...Y,isOver:!0,message:"VOCÊ VENCEU!"})),cancelAnimationFrame(s.current.animationFrameId);return}}if((w+M>u.width-b||w+M<b)&&(M=-M),C+j<b)j=-j;else if(C+j>u.height-b)if(w>s.current.paddleX&&w<s.current.paddleX+ie)j=-j;else if(y--,t(R=>({...R,lives:y})),y)V();else{t(R=>({...R,isOver:!0,message:"GAME OVER"})),cancelAnimationFrame(s.current.animationFrameId);return}s.current.rightPressed&&s.current.paddleX<u.width-ie?s.current.paddleX+=7:s.current.leftPressed&&s.current.paddleX>0&&(s.current.paddleX-=7),w+=M,C+=j,s.current.animationFrameId=requestAnimationFrame(L)};L()},[]),l=()=>{t({score:0,lives:3,isOver:!1,message:""})};return K.useEffect(()=>{e.isOver||a();const u=n.current;if(!u)return;const d=u.width*.2,g=C=>{s.current&&(C.key==="Right"||C.key==="ArrowRight"?s.current.rightPressed=!0:(C.key==="Left"||C.key==="ArrowLeft")&&(s.current.leftPressed=!0))},m=C=>{s.current&&(C.key==="Right"||C.key==="ArrowRight"?s.current.rightPressed=!1:(C.key==="Left"||C.key==="ArrowLeft")&&(s.current.leftPressed=!1))},y=C=>{if(s.current){const M=u.getBoundingClientRect();let j=C-M.left;j>0&&j<u.width&&(s.current.paddleX=Math.max(0,Math.min(j-d/2,u.width-d)))}},b=C=>y(C.clientX),w=C=>{C.preventDefault(),y(C.touches[0].clientX)};return document.addEventListener("keydown",g),document.addEventListener("keyup",m),u.addEventListener("mousemove",b),u.addEventListener("touchmove",w,{passive:!1}),()=>{document.removeEventListener("keydown",g),document.removeEventListener("keyup",m),u.removeEventListener("mousemove",b),u.removeEventListener("touchmove",w),s.current&&s.current.animationFrameId&&cancelAnimationFrame(s.current.animationFrameId)}},[a,e.isOver]),E.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center relative",children:[e.isOver&&E.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 animate-fade-in",children:[E.jsx("h2",{className:"text-4xl font-bold mb-4",children:e.message}),E.jsxs("p",{className:"text-xl mb-6",children:["Pontuação Final: ",e.score]}),E.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]}),E.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg w-full h-full"}),E.jsx("p",{className:"mt-2 text-sm text-gray-400",children:"Use as setas ou o mouse/toque para mover."})]})},t3=()=>{const n=K.useRef(null),[e,t]=K.useState(0),[s,a]=K.useState(!1),l=K.useCallback(()=>{a(!1),t(0)},[]);return K.useEffect(()=>{const u=n.current,d=u.getContext("2d"),g=u.parentElement;u.width=Math.min(g.clientWidth,500),u.height=Math.min(g.clientHeight,500);const m=20;let y=[{x:10,y:10}],b={},w={x:0,y:0},C;function M(){b={x:Math.floor(Math.random()*(u.width/m)),y:Math.floor(Math.random()*(u.height/m))}}function j(){const te={x:y[0].x+w.x,y:y[0].y+w.y};if(te.x<0||te.x*m>=u.width||te.y<0||te.y*m>=u.height||y.some(re=>re.x===te.x&&re.y===te.y)){a(!0),clearInterval(C);return}y.unshift(te),te.x===b.x&&te.y===b.y?(t(re=>re+1),M()):y.pop(),z()}function z(){d.fillStyle="#111827",d.fillRect(0,0,u.width,u.height),d.fillStyle="#4ade80",y.forEach(te=>d.fillRect(te.x*m,te.y*m,m-1,m-1)),d.fillStyle="#f87171",d.fillRect(b.x*m,b.y*m,m,m)}function ie(te){switch(te.key){case"ArrowUp":w.y===0&&(w={x:0,y:-1});break;case"ArrowDown":w.y===0&&(w={x:0,y:1});break;case"ArrowLeft":w.x===0&&(w={x:-1,y:0});break;case"ArrowRight":w.x===0&&(w={x:1,y:0});break}}return document.addEventListener("keydown",ie),M(),C=setInterval(j,100),()=>{clearInterval(C),document.removeEventListener("keydown",ie)}},[s]),E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsxs("h3",{className:"text-2xl font-bold mb-2",children:["Pontuação: ",e]}),E.jsxs("div",{className:"relative",children:[s&&E.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 animate-fade-in",children:[E.jsx("h2",{className:"text-4xl font-bold mb-4",children:"GAME OVER"}),E.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]}),E.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg"})]}),E.jsx("p",{className:"mt-2 text-sm text-gray-400",children:"Use as setas para mover."})]})},n3=()=>{const n=K.useRef(null),[e,t]=K.useState({player:0,computer:0}),[s,a]=K.useState(!1),l=K.useCallback(()=>{a(!1),t({player:0,computer:0})},[]);return K.useEffect(()=>{const u=n.current,d=u.getContext("2d"),g=u.parentElement;u.width=Math.min(g.clientWidth,600),u.height=Math.min(g.clientHeight,400);let m={x:u.width/2,y:u.height/2,radius:10,speedX:5,speedY:5},y={x:10,y:u.height/2-50,width:10,height:100},b={x:u.width-20,y:u.height/2-50,width:10,height:100},w;function C(){m.x=u.width/2,m.y=u.height/2,m.speedX=-m.speedX}function M(){m.x+=m.speedX,m.y+=m.speedY,b.y+=(m.y-(b.y+b.height/2))*.1,(m.y+m.radius>u.height||m.y-m.radius<0)&&(m.speedY=-m.speedY),m.x-m.radius<0?(t(ie=>({...ie,computer:ie.computer+1})),C()):m.x+m.radius>u.width&&(t(ie=>({...ie,player:ie.player+1})),C()),(m.x-m.radius<y.x+y.width&&m.y>y.y&&m.y<y.y+y.height||m.x+m.radius>b.x&&m.y>b.y&&m.y<b.y+b.height)&&(m.speedX=-m.speedX),j(),w=requestAnimationFrame(M)}function j(){d.fillStyle="#111827",d.fillRect(0,0,u.width,u.height),d.fillStyle="white",d.fillRect(y.x,y.y,y.width,y.height),d.fillRect(b.x,b.y,b.width,b.height),d.beginPath(),d.arc(m.x,m.y,m.radius,0,Math.PI*2),d.fill()}function z(ie){const te=u.getBoundingClientRect();y.y=ie.clientY-te.top-y.height/2}return u.addEventListener("mousemove",z),M(),()=>{cancelAnimationFrame(w),u.removeEventListener("mousemove",z)}},[s]),K.useEffect(()=>{(e.player>=5||e.computer>=5)&&a(!0)},[e]),E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsxs("h3",{className:"text-2xl font-bold mb-2",children:["Você ",e.player," - ",e.computer," PC"]}),E.jsxs("div",{className:"relative",children:[s&&E.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 animate-fade-in",children:[E.jsx("h2",{className:"text-4xl font-bold mb-4",children:e.player>e.computer?"VOCÊ VENCEU!":"GAME OVER"}),E.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]}),E.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg cursor-none"})]}),E.jsx("p",{className:"mt-2 text-sm text-gray-400",children:"Mova o mouse para controlar."})]})},i3=()=>{const n=K.useRef(null),[e,t]=K.useState(0),[s,a]=K.useState(!1),l=K.useCallback(()=>{a(!1),t(0)},[]);return K.useEffect(()=>{const u=n.current,d=u.getContext("2d"),g=u.parentElement;u.width=Math.min(g.clientWidth,320),u.height=Math.min(g.clientHeight,480);let m={x:50,y:150,width:20,height:20},y=.5,b=0,w=-10,C=[],M=40,j=120,z=0,ie;function te(){b=w}function re(){if(b+=y,m.y+=b,(m.y+m.height>u.height||m.y<0)&&ae(),z%90===0){const N=Math.random()*(u.height-j-100)+50;C.push({x:u.width,y:N})}for(let N=C.length-1;N>=0;N--)C[N].x-=3,m.x<C[N].x+M&&m.x+m.width>C[N].x&&(m.y<C[N].y||m.y+m.height>C[N].y+j)&&ae(),C[N].x+M<0&&(C.splice(N,1),t(x=>x+1));_e(),z++,s||(ie=requestAnimationFrame(re))}function _e(){d.fillStyle="#87CEEB",d.fillRect(0,0,u.width,u.height),d.fillStyle="#FBBF24",d.fillRect(m.x,m.y,m.width,m.height),d.fillStyle="#22C55E",C.forEach(N=>{d.fillRect(N.x,0,M,N.y),d.fillRect(N.x,N.y+j,M,u.height-(N.y+j))})}function ae(){a(!0),cancelAnimationFrame(ie)}const fe=()=>{s||te()};return u.addEventListener("click",fe),document.addEventListener("keydown",N=>{N.code==="Space"&&fe()}),re(),()=>{cancelAnimationFrame(ie),u.removeEventListener("click",fe),document.removeEventListener("keydown",N=>{N.code==="Space"&&fe()})}},[s]),E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsxs("h3",{className:"text-2xl font-bold mb-2",children:["Pontuação: ",e]}),E.jsxs("div",{className:"relative",children:[s&&E.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 animate-fade-in",children:[E.jsx("h2",{className:"text-4xl font-bold mb-4",children:"GAME OVER"}),E.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]}),E.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg"})]}),E.jsx("p",{className:"mt-4 text-sm text-gray-400",children:"Clique ou aperte Espaço para pular"})]})};function s3(){return E.jsxs(x6,{children:[E.jsx("style",{children:`
                /* Esconde a barra de rolagem para uma aparência mais limpa */
                .chat-main::-webkit-scrollbar, .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                }
                .chat-main, .overflow-y-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                /* Animações customizadas */
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0; /* Começa invisível */
                }
                 @keyframes zoomIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-zoom-in {
                    animation: zoomIn 0.3s ease-out forwards;
                }
                 .animate-zoom-in-fast {
                    animation: zoomIn 0.15s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                 .animate-fade-in-fast {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}),E.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:E.jsx(r3,{})})]})}const r3=()=>{const{user:n,loading:e}=MC();R6(n);const t=async()=>{if(n)try{const s=Ua(za,`/status/${n.uid}`);await im(s,{state:"offline",last_changed:Date.now()}),await Mt(vt(Ie,`/users/${n.uid}`),{state:"offline",last_changed:Ga()}),await BN(uv)}catch(s){console.error("Erro ao fazer logout:",s)}};return e?E.jsx(M6,{}):n?E.jsx($6,{user:n,onLogout:t}):E.jsx(O6,{})};mR.createRoot(document.getElementById("root")).render(E.jsx(K.StrictMode,{children:E.jsx(s3,{})}));
