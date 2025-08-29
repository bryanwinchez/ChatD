(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var ig={exports:{}},Hc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function aR(){if(TT)return Hc;TT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:u,ref:a!==void 0?a:null,props:l}}return Hc.Fragment=e,Hc.jsx=t,Hc.jsxs=t,Hc}var bT;function oR(){return bT||(bT=1,ig.exports=aR()),ig.exports}var E=oR(),sg={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function lR(){if(wT)return Pe;wT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=b&&M[b]||M["@@iterator"],typeof M=="function"?M:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,L={};function z(M,X,oe){this.props=M,this.context=X,this.refs=L,this.updater=oe||R}z.prototype.isReactComponent={},z.prototype.setState=function(M,X){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,X,"setState")},z.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function re(){}re.prototype=z.prototype;function ne(M,X,oe){this.props=M,this.context=X,this.refs=L,this.updater=oe||R}var ie=ne.prototype=new re;ie.constructor=ne,N(ie,z.prototype),ie.isPureReactComponent=!0;var pe=Array.isArray,te={H:null,A:null,T:null,S:null,V:null},he=Object.prototype.hasOwnProperty;function k(M,X,oe,se,ye,Oe){return oe=Oe.ref,{$$typeof:n,type:M,key:X,ref:oe!==void 0?oe:null,props:Oe}}function C(M,X){return k(M.type,X,void 0,void 0,void 0,M.props)}function I(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function P(M){var X={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(oe){return X[oe]})}var V=/\/+/g;function j(M,X){return typeof M=="object"&&M!==null&&M.key!=null?P(""+M.key):X.toString(36)}function x(){}function de(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(x,x):(M.status="pending",M.then(function(X){M.status==="pending"&&(M.status="fulfilled",M.value=X)},function(X){M.status==="pending"&&(M.status="rejected",M.reason=X)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Me(M,X,oe,se,ye){var Oe=typeof M;(Oe==="undefined"||Oe==="boolean")&&(M=null);var Se=!1;if(M===null)Se=!0;else switch(Oe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(M.$$typeof){case n:case e:Se=!0;break;case y:return Se=M._init,Me(Se(M._payload),X,oe,se,ye)}}if(Se)return ye=ye(M),Se=se===""?"."+j(M,0):se,pe(ye)?(oe="",Se!=null&&(oe=Se.replace(V,"$&/")+"/"),Me(ye,X,oe,"",function($n){return $n})):ye!=null&&(I(ye)&&(ye=C(ye,oe+(ye.key==null||M&&M.key===ye.key?"":(""+ye.key).replace(V,"$&/")+"/")+Se)),X.push(ye)),1;Se=0;var Rt=se===""?".":se+":";if(pe(M))for(var st=0;st<M.length;st++)se=M[st],Oe=Rt+j(se,st),Se+=Me(se,X,oe,Oe,ye);else if(st=w(M),typeof st=="function")for(M=st.call(M),st=0;!(se=M.next()).done;)se=se.value,Oe=Rt+j(se,st++),Se+=Me(se,X,oe,Oe,ye);else if(Oe==="object"){if(typeof M.then=="function")return Me(de(M),X,oe,se,ye);throw X=String(M),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Se}function K(M,X,oe){if(M==null)return M;var se=[],ye=0;return Me(M,se,"","",function(Oe){return X.call(oe,Oe,ye++)}),se}function ae(M){if(M._status===-1){var X=M._result;X=X(),X.then(function(oe){(M._status===0||M._status===-1)&&(M._status=1,M._result=oe)},function(oe){(M._status===0||M._status===-1)&&(M._status=2,M._result=oe)}),M._status===-1&&(M._status=0,M._result=X)}if(M._status===1)return M._result.default;throw M._result}var ge=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function He(){}return Pe.Children={map:K,forEach:function(M,X,oe){K(M,function(){X.apply(this,arguments)},oe)},count:function(M){var X=0;return K(M,function(){X++}),X},toArray:function(M){return K(M,function(X){return X})||[]},only:function(M){if(!I(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Pe.Component=z,Pe.Fragment=t,Pe.Profiler=a,Pe.PureComponent=ne,Pe.StrictMode=s,Pe.Suspense=p,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(M){return te.H.useMemoCache(M)}},Pe.cache=function(M){return function(){return M.apply(null,arguments)}},Pe.cloneElement=function(M,X,oe){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var se=N({},M.props),ye=M.key,Oe=void 0;if(X!=null)for(Se in X.ref!==void 0&&(Oe=void 0),X.key!==void 0&&(ye=""+X.key),X)!he.call(X,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&X.ref===void 0||(se[Se]=X[Se]);var Se=arguments.length-2;if(Se===1)se.children=oe;else if(1<Se){for(var Rt=Array(Se),st=0;st<Se;st++)Rt[st]=arguments[st+2];se.children=Rt}return k(M.type,ye,void 0,void 0,Oe,se)},Pe.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:l,_context:M},M},Pe.createElement=function(M,X,oe){var se,ye={},Oe=null;if(X!=null)for(se in X.key!==void 0&&(Oe=""+X.key),X)he.call(X,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ye[se]=X[se]);var Se=arguments.length-2;if(Se===1)ye.children=oe;else if(1<Se){for(var Rt=Array(Se),st=0;st<Se;st++)Rt[st]=arguments[st+2];ye.children=Rt}if(M&&M.defaultProps)for(se in Se=M.defaultProps,Se)ye[se]===void 0&&(ye[se]=Se[se]);return k(M,Oe,void 0,void 0,null,ye)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(M){return{$$typeof:d,render:M}},Pe.isValidElement=I,Pe.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:ae}},Pe.memo=function(M,X){return{$$typeof:g,type:M,compare:X===void 0?null:X}},Pe.startTransition=function(M){var X=te.T,oe={};te.T=oe;try{var se=M(),ye=te.S;ye!==null&&ye(oe,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(He,ge)}catch(Oe){ge(Oe)}finally{te.T=X}},Pe.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},Pe.use=function(M){return te.H.use(M)},Pe.useActionState=function(M,X,oe){return te.H.useActionState(M,X,oe)},Pe.useCallback=function(M,X){return te.H.useCallback(M,X)},Pe.useContext=function(M){return te.H.useContext(M)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(M,X){return te.H.useDeferredValue(M,X)},Pe.useEffect=function(M,X,oe){var se=te.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(M,X)},Pe.useId=function(){return te.H.useId()},Pe.useImperativeHandle=function(M,X,oe){return te.H.useImperativeHandle(M,X,oe)},Pe.useInsertionEffect=function(M,X){return te.H.useInsertionEffect(M,X)},Pe.useLayoutEffect=function(M,X){return te.H.useLayoutEffect(M,X)},Pe.useMemo=function(M,X){return te.H.useMemo(M,X)},Pe.useOptimistic=function(M,X){return te.H.useOptimistic(M,X)},Pe.useReducer=function(M,X,oe){return te.H.useReducer(M,X,oe)},Pe.useRef=function(M){return te.H.useRef(M)},Pe.useState=function(M){return te.H.useState(M)},Pe.useSyncExternalStore=function(M,X,oe){return te.H.useSyncExternalStore(M,X,oe)},Pe.useTransition=function(){return te.H.useTransition()},Pe.version="19.1.1",Pe}var ST;function v_(){return ST||(ST=1,sg.exports=lR()),sg.exports}var Y=v_(),rg={exports:{}},Gc={},ag={exports:{}},og={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function cR(){return AT||(AT=1,(function(n){function e(K,ae){var ge=K.length;K.push(ae);e:for(;0<ge;){var He=ge-1>>>1,M=K[He];if(0<a(M,ae))K[He]=ae,K[ge]=M,ge=He;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var ae=K[0],ge=K.pop();if(ge!==ae){K[0]=ge;e:for(var He=0,M=K.length,X=M>>>1;He<X;){var oe=2*(He+1)-1,se=K[oe],ye=oe+1,Oe=K[ye];if(0>a(se,ge))ye<M&&0>a(Oe,se)?(K[He]=Oe,K[ye]=ge,He=ye):(K[He]=se,K[oe]=ge,He=oe);else if(ye<M&&0>a(Oe,ge))K[He]=Oe,K[ye]=ge,He=ye;else break e}}return ae}function a(K,ae){var ge=K.sortIndex-ae.sortIndex;return ge!==0?ge:K.id-ae.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],g=[],y=1,b=null,w=3,R=!1,N=!1,L=!1,z=!1,re=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function pe(K){for(var ae=t(g);ae!==null;){if(ae.callback===null)s(g);else if(ae.startTime<=K)s(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(g)}}function te(K){if(L=!1,pe(K),!N)if(t(p)!==null)N=!0,he||(he=!0,j());else{var ae=t(g);ae!==null&&Me(te,ae.startTime-K)}}var he=!1,k=-1,C=5,I=-1;function P(){return z?!0:!(n.unstable_now()-I<C)}function V(){if(z=!1,he){var K=n.unstable_now();I=K;var ae=!0;try{e:{N=!1,L&&(L=!1,ne(k),k=-1),R=!0;var ge=w;try{t:{for(pe(K),b=t(p);b!==null&&!(b.expirationTime>K&&P());){var He=b.callback;if(typeof He=="function"){b.callback=null,w=b.priorityLevel;var M=He(b.expirationTime<=K);if(K=n.unstable_now(),typeof M=="function"){b.callback=M,pe(K),ae=!0;break t}b===t(p)&&s(p),pe(K)}else s(p);b=t(p)}if(b!==null)ae=!0;else{var X=t(g);X!==null&&Me(te,X.startTime-K),ae=!1}}break e}finally{b=null,w=ge,R=!1}ae=void 0}}finally{ae?j():he=!1}}}var j;if(typeof ie=="function")j=function(){ie(V)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,de=x.port2;x.port1.onmessage=V,j=function(){de.postMessage(null)}}else j=function(){re(V,0)};function Me(K,ae){k=re(function(){K(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(K){switch(w){case 1:case 2:case 3:var ae=3;break;default:ae=w}var ge=w;w=ae;try{return K()}finally{w=ge}},n.unstable_requestPaint=function(){z=!0},n.unstable_runWithPriority=function(K,ae){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ge=w;w=K;try{return ae()}finally{w=ge}},n.unstable_scheduleCallback=function(K,ae,ge){var He=n.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?He+ge:He):ge=He,K){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=ge+M,K={id:y++,callback:ae,priorityLevel:K,startTime:ge,expirationTime:M,sortIndex:-1},ge>He?(K.sortIndex=ge,e(g,K),t(p)===null&&K===t(g)&&(L?(ne(k),k=-1):L=!0,Me(te,ge-He))):(K.sortIndex=M,e(p,K),N||R||(N=!0,he||(he=!0,j()))),K},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(K){var ae=w;return function(){var ge=w;w=ae;try{return K.apply(this,arguments)}finally{w=ge}}}})(og)),og}var CT;function uR(){return CT||(CT=1,ag.exports=cR()),ag.exports}var lg={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xT;function hR(){if(xT)return yn;xT=1;var n=v_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,yn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},yn.flushSync=function(p){var g=u.T,y=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=g,s.p=y,s.d.f()}},yn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},yn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},yn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=d(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:R}):y==="script"&&s.d.X(p,{crossOrigin:b,integrity:w,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},yn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},yn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},yn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},yn.requestFormReset=function(p){s.d.r(p)},yn.unstable_batchedUpdates=function(p,g){return p(g)},yn.useFormState=function(p,g,y){return u.H.useFormState(p,g,y)},yn.useFormStatus=function(){return u.H.useHostTransitionStatus()},yn.version="19.1.1",yn}var RT;function fR(){if(RT)return lg.exports;RT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),lg.exports=hR(),lg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT;function dR(){if(IT)return Gc;IT=1;var n=uR(),e=v_(),t=fR();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,c=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===c)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==c.return)o=f,c=m;else{for(var T=!1,S=f.child;S;){if(S===o){T=!0,o=f,c=m;break}if(S===c){T=!0,c=f,o=m;break}S=S.sibling}if(!T){for(S=m.child;S;){if(S===o){T=!0,o=m,c=f;break}if(S===c){T=!0,c=m,o=f;break}S=S.sibling}if(!T)throw Error(s(189))}}if(o.alternate!==c)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),ne=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var x=Symbol.for("react.client.reference");function de(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===x?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case z:return"Profiler";case L:return"StrictMode";case te:return"Suspense";case he:return"SuspenseList";case I:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case R:return"Portal";case ie:return(i.displayName||"Context")+".Provider";case ne:return(i._context.displayName||"Context")+".Consumer";case pe:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case k:return r=i.displayName||null,r!==null?r:de(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return de(i(r))}catch{}}return null}var Me=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},He=[],M=-1;function X(i){return{current:i}}function oe(i){0>M||(i.current=He[M],He[M]=null,M--)}function se(i,r){M++,He[M]=i.current,i.current=r}var ye=X(null),Oe=X(null),Se=X(null),Rt=X(null);function st(i,r){switch(se(Se,r),se(Oe,i),se(ye,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?XE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=XE(r),i=$E(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}oe(ye),se(ye,i)}function $n(){oe(ye),oe(Oe),oe(Se)}function Ai(i){i.memoizedState!==null&&se(Rt,i);var r=ye.current,o=$E(r,i.type);r!==o&&(se(Oe,i),se(ye,o))}function fi(i){Oe.current===i&&(oe(ye),oe(Oe)),Rt.current===i&&(oe(Rt),Uc._currentValue=ge)}var ns=Object.prototype.hasOwnProperty,is=n.unstable_scheduleCallback,ss=n.unstable_cancelCallback,$r=n.unstable_shouldYield,no=n.unstable_requestPaint,kn=n.unstable_now,jl=n.unstable_getCurrentPriorityLevel,Wr=n.unstable_ImmediatePriority,Xs=n.unstable_UserBlockingPriority,rs=n.unstable_NormalPriority,$s=n.unstable_LowPriority,Ci=n.unstable_IdlePriority,as=n.log,io=n.unstable_setDisableYieldValue,le=null,me=null;function Ne(i){if(typeof as=="function"&&io(i),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(le,i)}catch{}}var Je=Math.clz32?Math.clz32:xi,Sn=Math.log,gn=Math.LN2;function xi(i){return i>>>=0,i===0?32:31-(Sn(i)/gn|0)|0}var os=256,Ws=4194304;function di(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function so(i,r,o){var c=i.pendingLanes;if(c===0)return 0;var f=0,m=i.suspendedLanes,T=i.pingedLanes;i=i.warmLanes;var S=c&134217727;return S!==0?(c=S&~m,c!==0?f=di(c):(T&=S,T!==0?f=di(T):o||(o=S&~i,o!==0&&(f=di(o))))):(S=c&~m,S!==0?f=di(S):T!==0?f=di(T):o||(o=c&~i,o!==0&&(f=di(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Zr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Ul(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zl(){var i=os;return os<<=1,(os&4194048)===0&&(os=256),i}function Fl(){var i=Ws;return Ws<<=1,(Ws&62914560)===0&&(Ws=4194304),i}function ls(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function cs(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Bl(i,r,o,c,f,m){var T=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,D=i.expirationTimes,q=i.hiddenUpdates;for(o=T&~o;0<o;){var $=31-Je(o),J=1<<$;S[$]=0,D[$]=-1;var H=q[$];if(H!==null)for(q[$]=null,$=0;$<H.length;$++){var G=H[$];G!==null&&(G.lane&=-536870913)}o&=~J}c!==0&&Ri(i,c,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(T&~r))}function Ri(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-Je(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|o&4194090}function ql(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var c=31-Je(o),f=1<<c;f&r|i[c]&r&&(i[c]|=r),o&=~f}}function Zs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function ro(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Js(){var i=ae.p;return i!==0?i:(i=window.event,i===void 0?32:pT(i.type))}function Yu(i,r){var o=ae.p;try{return ae.p=i,r()}finally{ae.p=o}}var Tt=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Tt,Vt="__reactProps$"+Tt,Wn="__reactContainer$"+Tt,Hl="__reactEvents$"+Tt,am="__reactListeners$"+Tt,er="__reactHandles$"+Tt,Qu="__reactResources$"+Tt,Jr="__reactMarker$"+Tt;function tr(i){delete i[Gt],delete i[Vt],delete i[Hl],delete i[am],delete i[er]}function us(i){var r=i[Gt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Wn]||o[Gt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=eT(i);i!==null;){if(o=i[Gt])return o;i=eT(i)}return r}i=o,o=i.parentNode}return null}function Ii(i){if(i=i[Gt]||i[Wn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Ni(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function An(i){var r=i[Qu];return r||(r=i[Qu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function It(i){i[Jr]=!0}var Gl=new Set,ao={};function mi(i,r){hs(i,r),hs(i+"Capture",r)}function hs(i,r){for(ao[i]=r,i=0;i<r.length;i++)Gl.add(r[i])}var Ku=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xu={},ea={};function $u(i){return ns.call(ea,i)?!0:ns.call(Xu,i)?!1:Ku.test(i)?ea[i]=!0:(Xu[i]=!0,!1)}function nr(i,r,o){if($u(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Di(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function ln(i,r,o,c){if(c===null)i.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+c)}}var ta,Wu;function fs(i){if(ta===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ta=r&&r[1]||"",Wu=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ta+i+Wu}var oo=!1;function lo(i,r){if(!i||oo)return"";oo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var H=G}Reflect.construct(i,[],J)}else{try{J.call()}catch(G){H=G}i.call(J.prototype)}}else{try{throw Error()}catch(G){H=G}(J=i())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),T=m[0],S=m[1];if(T&&S){var D=T.split(`
`),q=S.split(`
`);for(f=c=0;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(c===D.length||f===q.length)for(c=D.length-1,f=q.length-1;1<=c&&0<=f&&D[c]!==q[f];)f--;for(;1<=c&&0<=f;c--,f--)if(D[c]!==q[f]){if(c!==1||f!==1)do if(c--,f--,0>f||D[c]!==q[f]){var $=`
`+D[c].replace(" at new "," at ");return i.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",i.displayName)),$}while(1<=c&&0<=f);break}}}finally{oo=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?fs(o):""}function Yl(i){switch(i.tag){case 26:case 27:case 5:return fs(i.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 15:return lo(i.type,!1);case 11:return lo(i.type.render,!1);case 1:return lo(i.type,!0);case 31:return fs("Activity");default:return""}}function co(i){try{var r="";do r+=Yl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ql(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function om(i){var r=Ql(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),c=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function uo(i){i._valueTracker||(i._valueTracker=om(i))}function Kl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return i&&(c=Ql(i)?i.checked?"true":"false":i.value),i=c,i!==o?(r.setValue(i),!0):!1}function na(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var lm=/[\n"\\]/g;function Lt(i){return i.replace(lm,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Fn(i,r,o,c,f,m,T,S){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),r!=null?T==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Cn(r)):i.value!==""+Cn(r)&&(i.value=""+Cn(r)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),r!=null?ir(i,T,Cn(r)):o!=null?ir(i,T,Cn(o)):c!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+Cn(S):i.removeAttribute("name")}function ia(i,r,o,c,f,m,T,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+Cn(o):"",r=r!=null?""+Cn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=S?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function ir(i,r,o){r==="number"&&na(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function ds(i,r,o,c){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&c&&(i[o].defaultSelected=!0)}else{for(o=""+Cn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function lt(i,r,o){if(r!=null&&(r=""+Cn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+Cn(o):""}function sa(i,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(s(92));if(Me(c)){if(1<c.length)throw Error(s(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=Cn(r),i.defaultValue=o,c=i.textContent,c===o&&c!==""&&c!==null&&(i.value=c)}function Zn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var ra=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zu(i,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,o):typeof o!="number"||o===0||ra.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Xl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in r)c=r[f],r.hasOwnProperty(f)&&o[f]!==c&&Zu(i,f,c)}else for(var m in r)r.hasOwnProperty(m)&&Zu(i,m,r[m])}function $l(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ho(i){return um.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var ms=null;function Jn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ps=null,gs=null;function Wl(i){var r=Ii(i);if(r&&(i=r.stateNode)){var o=i[Vt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Fn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Lt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==i&&c.form===i.form){var f=c[Vt]||null;if(!f)throw Error(s(90));Fn(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===i.form&&Kl(c)}break e;case"textarea":lt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ds(i,!!o.multiple,r,!1)}}}var ki=!1;function Ju(i,r,o){if(ki)return i(r,o);ki=!0;try{var c=i(r);return c}finally{if(ki=!1,(ps!==null||gs!==null)&&(Yh(),ps&&(r=ps,i=gs,gs=ps=null,Wl(r),i)))for(r=0;r<i.length;r++)Wl(i[r])}}function aa(i,r){var o=i.stateNode;if(o===null)return null;var c=o[Vt]||null;if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ei=!1;if(pi)try{var oa={};Object.defineProperty(oa,"passive",{get:function(){ei=!0}}),window.addEventListener("test",oa,oa),window.removeEventListener("test",oa,oa)}catch{ei=!1}var Mi=null,sr=null,_s=null;function Zl(){if(_s)return _s;var i,r=sr,o=r.length,c,f="value"in Mi?Mi.value:Mi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var T=o-i;for(c=1;c<=T&&r[o-c]===f[m-c];c++);return _s=f.slice(i,1<c?1-c:void 0)}function Oi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Pi(){return!0}function Jl(){return!1}function Wt(i){function r(o,c,f,m,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pi:Jl,this.isPropagationStopped=Jl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),r}var nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Wt(nt),la=y({},nt,{view:0,detail:0}),eh=Wt(la),mo,po,Vi,ca=y({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Vi&&(Vi&&i.type==="mousemove"?(mo=i.screenX-Vi.screenX,po=i.screenY-Vi.screenY):po=mo=0,Vi=i),mo)},movementY:function(i){return"movementY"in i?i.movementY:po}}),ti=Wt(ca),th=y({},ca,{dataTransfer:0}),hm=Wt(th),ua=y({},la,{relatedTarget:0}),go=Wt(ua),ec=y({},nt,{animationName:0,elapsedTime:0,pseudoElement:0}),_o=Wt(ec),nh=y({},nt,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),yo=Wt(nh),fm=y({},nt,{data:0}),tc=Wt(fm),ha={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nc(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=sh[i])?!!r[i]:!1}function fa(){return nc}var rh=y({},la,{key:function(i){if(i.key){var r=ha[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Oi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ih[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(i){return i.type==="keypress"?Oi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Oi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),vo=Wt(rh),ah=y({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=Wt(ah),ys=y({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),oh=Wt(ys),lh=y({},nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=Wt(lh),uh=y({},ca,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Eo=Wt(uh),xn=y({},nt,{newState:0,oldState:0}),hh=Wt(xn),fh=[9,13,27,32],Li=pi&&"CompositionEvent"in window,h=null;pi&&"documentMode"in document&&(h=document.documentMode);var _=pi&&"TextEvent"in window&&!h,v=pi&&(!Li||h&&8<h&&11>=h),A=" ",F=!1;function Q(i,r){switch(i){case"keyup":return fh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ce(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Qe=!1;function Yt(i,r){switch(i){case"compositionend":return ce(r);case"keypress":return r.which!==32?null:(F=!0,A);case"textInput":return i=r.data,i===A&&F?null:i;default:return null}}function Ke(i,r){if(Qe)return i==="compositionend"||!Li&&Q(i,r)?(i=Zl(),_s=sr=Mi=null,Qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Zt[i.type]:r==="textarea"}function vs(i,r,o,c){ps?gs?gs.push(c):gs=[c]:ps=c,r=Zh(r,"onChange"),0<r.length&&(o=new fo("onChange","change",null,o,c),i.push({event:o,listeners:r}))}var cn=null,ji=null;function sc(i){HE(i,0)}function dh(i){var r=Ni(i);if(Kl(r))return i}function hv(i,r){if(i==="change")return r}var fv=!1;if(pi){var dm;if(pi){var mm="oninput"in document;if(!mm){var dv=document.createElement("div");dv.setAttribute("oninput","return;"),mm=typeof dv.oninput=="function"}dm=mm}else dm=!1;fv=dm&&(!document.documentMode||9<document.documentMode)}function mv(){cn&&(cn.detachEvent("onpropertychange",pv),ji=cn=null)}function pv(i){if(i.propertyName==="value"&&dh(ji)){var r=[];vs(r,ji,i,Jn(i)),Ju(sc,r)}}function VC(i,r,o){i==="focusin"?(mv(),cn=r,ji=o,cn.attachEvent("onpropertychange",pv)):i==="focusout"&&mv()}function LC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return dh(ji)}function jC(i,r){if(i==="click")return dh(r)}function UC(i,r){if(i==="input"||i==="change")return dh(r)}function zC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Bn=typeof Object.is=="function"?Object.is:zC;function rc(i,r){if(Bn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!ns.call(r,f)||!Bn(i[f],r[f]))return!1}return!0}function gv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function _v(i,r){var o=gv(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=r&&c>=r)return{node:o,offset:r-i};i=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=gv(o)}}function yv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?yv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function vv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=na(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=na(i.document)}return r}function pm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var FC=pi&&"documentMode"in document&&11>=document.documentMode,To=null,gm=null,ac=null,_m=!1;function Ev(i,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_m||To==null||To!==na(c)||(c=To,"selectionStart"in c&&pm(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ac&&rc(ac,c)||(ac=c,c=Zh(gm,"onSelect"),0<c.length&&(r=new fo("onSelect","select",null,r,o),i.push({event:r,listeners:c}),r.target=To)))}function da(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var bo={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},ym={},Tv={};pi&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function ma(i){if(ym[i])return ym[i];if(!bo[i])return i;var r=bo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Tv)return ym[i]=r[o];return i}var bv=ma("animationend"),wv=ma("animationiteration"),Sv=ma("animationstart"),BC=ma("transitionrun"),qC=ma("transitionstart"),HC=ma("transitioncancel"),Av=ma("transitionend"),Cv=new Map,vm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vm.push("scrollEnd");function gi(i,r){Cv.set(i,r),mi(r,[i])}var xv=new WeakMap;function ni(i,r){if(typeof i=="object"&&i!==null){var o=xv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:co(r)},xv.set(i,r),r)}return{value:i,source:r,stack:co(r)}}var ii=[],wo=0,Em=0;function mh(){for(var i=wo,r=Em=wo=0;r<i;){var o=ii[r];ii[r++]=null;var c=ii[r];ii[r++]=null;var f=ii[r];ii[r++]=null;var m=ii[r];if(ii[r++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}m!==0&&Rv(o,f,m)}}function ph(i,r,o,c){ii[wo++]=i,ii[wo++]=r,ii[wo++]=o,ii[wo++]=c,Em|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function Tm(i,r,o,c){return ph(i,r,o,c),gh(i)}function So(i,r){return ph(i,null,null,r),gh(i)}function Rv(i,r,o){i.lanes|=o;var c=i.alternate;c!==null&&(c.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-Je(o),i=m.hiddenUpdates,c=i[f],c===null?i[f]=[r]:c.push(r),r.lane=o|536870912),m):null}function gh(i){if(50<Dc)throw Dc=0,xp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ao={};function GC(i,r,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(i,r,o,c){return new GC(i,r,o,c)}function bm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Es(i,r){var o=i.alternate;return o===null?(o=qn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Iv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function _h(i,r,o,c,f,m){var T=0;if(c=i,typeof i=="function")bm(i)&&(T=1);else if(typeof i=="string")T=Qx(i,o,ye.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case I:return i=qn(31,o,r,f),i.elementType=I,i.lanes=m,i;case N:return pa(o.children,f,m,r);case L:T=8,f|=24;break;case z:return i=qn(12,o,r,f|2),i.elementType=z,i.lanes=m,i;case te:return i=qn(13,o,r,f),i.elementType=te,i.lanes=m,i;case he:return i=qn(19,o,r,f),i.elementType=he,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case re:case ie:T=10;break e;case ne:T=9;break e;case pe:T=11;break e;case k:T=14;break e;case C:T=16,c=null;break e}T=29,o=Error(s(130,i===null?"null":typeof i,"")),c=null}return r=qn(T,o,r,f),r.elementType=i,r.type=c,r.lanes=m,r}function pa(i,r,o,c){return i=qn(7,i,c,r),i.lanes=o,i}function wm(i,r,o){return i=qn(6,i,null,r),i.lanes=o,i}function Sm(i,r,o){return r=qn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Co=[],xo=0,yh=null,vh=0,si=[],ri=0,ga=null,Ts=1,bs="";function _a(i,r){Co[xo++]=vh,Co[xo++]=yh,yh=i,vh=r}function Nv(i,r,o){si[ri++]=Ts,si[ri++]=bs,si[ri++]=ga,ga=i;var c=Ts;i=bs;var f=32-Je(c)-1;c&=~(1<<f),o+=1;var m=32-Je(r)+f;if(30<m){var T=f-f%5;m=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ts=1<<32-Je(r)+f|o<<f|c,bs=m+i}else Ts=1<<m|o<<f|c,bs=i}function Am(i){i.return!==null&&(_a(i,1),Nv(i,1,0))}function Cm(i){for(;i===yh;)yh=Co[--xo],Co[xo]=null,vh=Co[--xo],Co[xo]=null;for(;i===ga;)ga=si[--ri],si[ri]=null,bs=si[--ri],si[ri]=null,Ts=si[--ri],si[ri]=null}var Rn=null,At=null,et=!1,ya=null,Ui=!1,xm=Error(s(519));function va(i){var r=Error(s(418,""));throw cc(ni(r,i)),xm}function Dv(i){var r=i.stateNode,o=i.type,c=i.memoizedProps;switch(r[Gt]=i,r[Vt]=c,o){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(o=0;o<Mc.length;o++)Be(Mc[o],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Be("invalid",r),ia(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),uo(r);break;case"select":Be("invalid",r);break;case"textarea":Be("invalid",r),sa(r,c.value,c.defaultValue,c.children),uo(r)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||KE(r.textContent,o)?(c.popover!=null&&(Be("beforetoggle",r),Be("toggle",r)),c.onScroll!=null&&Be("scroll",r),c.onScrollEnd!=null&&Be("scrollend",r),c.onClick!=null&&(r.onclick=Jh),r=!0):r=!1,r||va(i)}function kv(i){for(Rn=i.return;Rn;)switch(Rn.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Rn=Rn.return}}function oc(i){if(i!==Rn)return!1;if(!et)return kv(i),et=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||qp(i.type,i.memoizedProps)),o=!o),o&&At&&va(i),kv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){At=yi(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}At=null}}else r===27?(r=At,Er(i.type)?(i=Qp,Qp=null,At=i):At=r):At=Rn?yi(i.stateNode.nextSibling):null;return!0}function lc(){At=Rn=null,et=!1}function Mv(){var i=ya;return i!==null&&(Pn===null?Pn=i:Pn.push.apply(Pn,i),ya=null),i}function cc(i){ya===null?ya=[i]:ya.push(i)}var Rm=X(null),Ea=null,ws=null;function rr(i,r,o){se(Rm,r._currentValue),r._currentValue=o}function Ss(i){i._currentValue=Rm.current,oe(Rm)}function Im(i,r,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===o)break;i=i.return}}function Nm(i,r,o,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var T=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var D=0;D<r.length;D++)if(S.context===r[D]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Im(m.return,o,i),c||(T=null);break e}m=S.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(s(341));T.lanes|=o,m=T.alternate,m!==null&&(m.lanes|=o),Im(T,o,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function uc(i,r,o,c){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(s(387));if(T=T.memoizedProps,T!==null){var S=f.type;Bn(f.pendingProps.value,T.value)||(i!==null?i.push(S):i=[S])}}else if(f===Rt.current){if(T=f.alternate,T===null)throw Error(s(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Uc):i=[Uc])}f=f.return}i!==null&&Nm(r,i,o,c),r.flags|=262144}function Eh(i){for(i=i.firstContext;i!==null;){if(!Bn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ta(i){Ea=i,ws=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function _n(i){return Ov(Ea,i)}function Th(i,r){return Ea===null&&Ta(i),Ov(i,r)}function Ov(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ws===null){if(i===null)throw Error(s(308));ws=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else ws=ws.next=r;return o}var YC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},QC=n.unstable_scheduleCallback,KC=n.unstable_NormalPriority,Kt={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dm(){return{controller:new YC,data:new Map,refCount:0}}function hc(i){i.refCount--,i.refCount===0&&QC(KC,function(){i.controller.abort()})}var fc=null,km=0,Ro=0,Io=null;function XC(i,r){if(fc===null){var o=fc=[];km=0,Ro=Op(),Io={status:"pending",value:void 0,then:function(c){o.push(c)}}}return km++,r.then(Pv,Pv),r}function Pv(){if(--km===0&&fc!==null){Io!==null&&(Io.status="fulfilled");var i=fc;fc=null,Ro=0,Io=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function $C(i,r){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var Vv=K.S;K.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&XC(i,r),Vv!==null&&Vv(i,r)};var ba=X(null);function Mm(){var i=ba.current;return i!==null?i:mt.pooledCache}function bh(i,r){r===null?se(ba,ba.current):se(ba,r.pool)}function Lv(){var i=Mm();return i===null?null:{parent:Kt._currentValue,pool:i}}var dc=Error(s(460)),jv=Error(s(474)),wh=Error(s(542)),Om={then:function(){}};function Uv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Sh(){}function zv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Sh,Sh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i;default:if(typeof r.status=="string")r.then(Sh,Sh);else{if(i=mt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=c}},function(c){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i}throw mc=r,dc}}var mc=null;function Fv(){if(mc===null)throw Error(s(459));var i=mc;return mc=null,i}function Bv(i){if(i===dc||i===wh)throw Error(s(483))}var ar=!1;function Pm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function or(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function lr(i,r,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(rt&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,r=gh(i),Rv(i,null,o),r}return ph(i,c,r,o),gh(i)}function pc(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,ql(i,o)}}function Lm(i,r){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var jm=!1;function gc(){if(jm){var i=Io;if(i!==null)throw i}}function _c(i,r,o,c){jm=!1;var f=i.updateQueue;ar=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var D=S,q=D.next;D.next=null,T===null?m=q:T.next=q,T=D;var $=i.alternate;$!==null&&($=$.updateQueue,S=$.lastBaseUpdate,S!==T&&(S===null?$.firstBaseUpdate=q:S.next=q,$.lastBaseUpdate=D))}if(m!==null){var J=f.baseState;T=0,$=q=D=null,S=m;do{var H=S.lane&-536870913,G=H!==S.lane;if(G?(Xe&H)===H:(c&H)===H){H!==0&&H===Ro&&(jm=!0),$!==null&&($=$.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ce=i,be=S;H=r;var ht=o;switch(be.tag){case 1:if(Ce=be.payload,typeof Ce=="function"){J=Ce.call(ht,J,H);break e}J=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=be.payload,H=typeof Ce=="function"?Ce.call(ht,J,H):Ce,H==null)break e;J=y({},J,H);break e;case 2:ar=!0}}H=S.callback,H!==null&&(i.flags|=64,G&&(i.flags|=8192),G=f.callbacks,G===null?f.callbacks=[H]:G.push(H))}else G={lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},$===null?(q=$=G,D=J):$=$.next=G,T|=H;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;G=S,S=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);$===null&&(D=J),f.baseState=D,f.firstBaseUpdate=q,f.lastBaseUpdate=$,m===null&&(f.shared.lanes=0),gr|=T,i.lanes=T,i.memoizedState=J}}function qv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Hv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)qv(o[i],r)}var No=X(null),Ah=X(0);function Gv(i,r){i=Ds,se(Ah,i),se(No,r),Ds=i|r.baseLanes}function Um(){se(Ah,Ds),se(No,No.current)}function zm(){Ds=Ah.current,oe(No),oe(Ah)}var cr=0,Ve=null,ct=null,jt=null,Ch=!1,Do=!1,wa=!1,xh=0,yc=0,ko=null,WC=0;function Nt(){throw Error(s(321))}function Fm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Bn(i[o],r[o]))return!1;return!0}function Bm(i,r,o,c,f,m){return cr=m,Ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,K.H=i===null||i.memoizedState===null?R0:I0,wa=!1,m=o(c,f),wa=!1,Do&&(m=Qv(r,o,c,f)),Yv(i),m}function Yv(i){K.H=Mh;var r=ct!==null&&ct.next!==null;if(cr=0,jt=ct=Ve=null,Ch=!1,yc=0,ko=null,r)throw Error(s(300));i===null||Jt||(i=i.dependencies,i!==null&&Eh(i)&&(Jt=!0))}function Qv(i,r,o,c){Ve=i;var f=0;do{if(Do&&(ko=null),yc=0,Do=!1,25<=f)throw Error(s(301));if(f+=1,jt=ct=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}K.H=sx,m=r(o,c)}while(Do);return m}function ZC(){var i=K.H,r=i.useState()[0];return r=typeof r.then=="function"?vc(r):r,i=i.useState()[0],(ct!==null?ct.memoizedState:null)!==i&&(Ve.flags|=1024),r}function qm(){var i=xh!==0;return xh=0,i}function Hm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Gm(i){if(Ch){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ch=!1}cr=0,jt=ct=Ve=null,Do=!1,yc=xh=0,ko=null}function Mn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ve.memoizedState=jt=i:jt=jt.next=i,jt}function Ut(){if(ct===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=ct.next;var r=jt===null?Ve.memoizedState:jt.next;if(r!==null)jt=r,ct=i;else{if(i===null)throw Ve.alternate===null?Error(s(467)):Error(s(310));ct=i,i={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},jt===null?Ve.memoizedState=jt=i:jt=jt.next=i}return jt}function Ym(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vc(i){var r=yc;return yc+=1,ko===null&&(ko=[]),i=zv(ko,i,r),r=Ve,(jt===null?r.memoizedState:jt.next)===null&&(r=r.alternate,K.H=r===null||r.memoizedState===null?R0:I0),i}function Rh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return vc(i);if(i.$$typeof===ie)return _n(i)}throw Error(s(438,String(i)))}function Qm(i){var r=null,o=Ve.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Ym(),Ve.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),c=0;c<i;c++)o[c]=P;return r.index++,o}function As(i,r){return typeof r=="function"?r(i):r}function Ih(i){var r=Ut();return Km(r,ct,i)}function Km(i,r,o){var c=i.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=o;var f=i.baseQueue,m=c.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}r.baseQueue=f=m,c.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var S=T=null,D=null,q=r,$=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(Xe&J)===J:(cr&J)===J){var H=q.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===Ro&&($=!0);else if((cr&H)===H){q=q.next,H===Ro&&($=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},D===null?(S=D=J,T=m):D=D.next=J,Ve.lanes|=H,gr|=H;J=q.action,wa&&o(m,J),m=q.hasEagerState?q.eagerState:o(m,J)}else H={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},D===null?(S=D=H,T=m):D=D.next=H,Ve.lanes|=J,gr|=J;q=q.next}while(q!==null&&q!==r);if(D===null?T=m:D.next=S,!Bn(m,i.memoizedState)&&(Jt=!0,$&&(o=Io,o!==null)))throw o;i.memoizedState=m,i.baseState=T,i.baseQueue=D,c.lastRenderedState=m}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Xm(i){var r=Ut(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var c=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do m=i(m,T.action),T=T.next;while(T!==f);Bn(m,r.memoizedState)||(Jt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,c]}function Kv(i,r,o){var c=Ve,f=Ut(),m=et;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var T=!Bn((ct||f).memoizedState,o);T&&(f.memoizedState=o,Jt=!0),f=f.queue;var S=Wv.bind(null,c,f,i);if(Ec(2048,8,S,[i]),f.getSnapshot!==r||T||jt!==null&&jt.memoizedState.tag&1){if(c.flags|=2048,Mo(9,Nh(),$v.bind(null,c,f,o,r),null),mt===null)throw Error(s(349));m||(cr&124)!==0||Xv(c,r,o)}return o}function Xv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ve.updateQueue,r===null?(r=Ym(),Ve.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function $v(i,r,o,c){r.value=o,r.getSnapshot=c,Zv(r)&&Jv(i)}function Wv(i,r,o){return o(function(){Zv(r)&&Jv(i)})}function Zv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Bn(i,o)}catch{return!0}}function Jv(i){var r=So(i,2);r!==null&&Kn(r,i,2)}function $m(i){var r=Mn();if(typeof i=="function"){var o=i;if(i=o(),wa){Ne(!0);try{o()}finally{Ne(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:i},r}function e0(i,r,o,c){return i.baseState=o,Km(i,ct,typeof c=="function"?c:As)}function JC(i,r,o,c,f){if(kh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};K.T!==null?o(!0):m.isTransition=!1,c(m),o=r.pending,o===null?(m.next=r.pending=m,t0(r,m)):(m.next=o.next,r.pending=o.next=m)}}function t0(i,r){var o=r.action,c=r.payload,f=i.state;if(r.isTransition){var m=K.T,T={};K.T=T;try{var S=o(f,c),D=K.S;D!==null&&D(T,S),n0(i,r,S)}catch(q){Wm(i,r,q)}finally{K.T=m}}else try{m=o(f,c),n0(i,r,m)}catch(q){Wm(i,r,q)}}function n0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){i0(i,r,c)},function(c){return Wm(i,r,c)}):i0(i,r,o)}function i0(i,r,o){r.status="fulfilled",r.value=o,s0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,t0(i,o)))}function Wm(i,r,o){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,s0(r),r=r.next;while(r!==c)}i.action=null}function s0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function r0(i,r){return r}function a0(i,r){if(et){var o=mt.formState;if(o!==null){e:{var c=Ve;if(et){if(At){t:{for(var f=At,m=Ui;f.nodeType!==8;){if(!m){f=null;break t}if(f=yi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){At=yi(f.nextSibling),c=f.data==="F!";break e}}va(c)}c=!1}c&&(r=o[0])}}return o=Mn(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:r},o.queue=c,o=A0.bind(null,Ve,c),c.dispatch=o,c=$m(!1),m=np.bind(null,Ve,!1,c.queue),c=Mn(),f={state:r,dispatch:null,action:i,pending:null},c.queue=f,o=JC.bind(null,Ve,f,m,o),f.dispatch=o,c.memoizedState=i,[r,o,!1]}function o0(i){var r=Ut();return l0(r,ct,i)}function l0(i,r,o){if(r=Km(i,r,r0)[0],i=Ih(As)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=vc(r)}catch(T){throw T===dc?wh:T}else c=r;r=Ut();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ve.flags|=2048,Mo(9,Nh(),ex.bind(null,f,o),null)),[c,m,i]}function ex(i,r){i.action=r}function c0(i){var r=Ut(),o=ct;if(o!==null)return l0(r,o,i);Ut(),r=r.memoizedState,o=Ut();var c=o.queue.dispatch;return o.memoizedState=i,[r,c,!1]}function Mo(i,r,o,c){return i={tag:i,create:o,deps:c,inst:r,next:null},r=Ve.updateQueue,r===null&&(r=Ym(),Ve.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,r.lastEffect=i),i}function Nh(){return{destroy:void 0,resource:void 0}}function u0(){return Ut().memoizedState}function Dh(i,r,o,c){var f=Mn();c=c===void 0?null:c,Ve.flags|=i,f.memoizedState=Mo(1|r,Nh(),o,c)}function Ec(i,r,o,c){var f=Ut();c=c===void 0?null:c;var m=f.memoizedState.inst;ct!==null&&c!==null&&Fm(c,ct.memoizedState.deps)?f.memoizedState=Mo(r,m,o,c):(Ve.flags|=i,f.memoizedState=Mo(1|r,m,o,c))}function h0(i,r){Dh(8390656,8,i,r)}function f0(i,r){Ec(2048,8,i,r)}function d0(i,r){return Ec(4,2,i,r)}function m0(i,r){return Ec(4,4,i,r)}function p0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function g0(i,r,o){o=o!=null?o.concat([i]):null,Ec(4,4,p0.bind(null,r,i),o)}function Zm(){}function _0(i,r){var o=Ut();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&Fm(r,c[1])?c[0]:(o.memoizedState=[i,r],i)}function y0(i,r){var o=Ut();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&Fm(r,c[1]))return c[0];if(c=i(),wa){Ne(!0);try{i()}finally{Ne(!1)}}return o.memoizedState=[c,r],c}function Jm(i,r,o){return o===void 0||(cr&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=TE(),Ve.lanes|=i,gr|=i,o)}function v0(i,r,o,c){return Bn(o,r)?o:No.current!==null?(i=Jm(i,o,c),Bn(i,r)||(Jt=!0),i):(cr&42)===0?(Jt=!0,i.memoizedState=o):(i=TE(),Ve.lanes|=i,gr|=i,r)}function E0(i,r,o,c,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var T=K.T,S={};K.T=S,np(i,!1,r,o);try{var D=f(),q=K.S;if(q!==null&&q(S,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var $=$C(D,c);Tc(i,r,$,Qn(i))}else Tc(i,r,c,Qn(i))}catch(J){Tc(i,r,{then:function(){},status:"rejected",reason:J},Qn())}finally{ae.p=m,K.T=T}}function tx(){}function ep(i,r,o,c){if(i.tag!==5)throw Error(s(476));var f=T0(i).queue;E0(i,f,r,ge,o===null?tx:function(){return b0(i),o(c)})}function T0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:ge},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function b0(i){var r=T0(i).next.queue;Tc(i,r,{},Qn())}function tp(){return _n(Uc)}function w0(){return Ut().memoizedState}function S0(){return Ut().memoizedState}function nx(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Qn();i=or(o);var c=lr(r,i,o);c!==null&&(Kn(c,r,o),pc(c,r,o)),r={cache:Dm()},i.payload=r;return}r=r.return}}function ix(i,r,o){var c=Qn();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},kh(i)?C0(r,o):(o=Tm(i,r,o,c),o!==null&&(Kn(o,i,c),x0(o,r,c)))}function A0(i,r,o){var c=Qn();Tc(i,r,o,c)}function Tc(i,r,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(kh(i))C0(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var T=r.lastRenderedState,S=m(T,o);if(f.hasEagerState=!0,f.eagerState=S,Bn(S,T))return ph(i,r,f,0),mt===null&&mh(),!1}catch{}finally{}if(o=Tm(i,r,f,c),o!==null)return Kn(o,i,c),x0(o,r,c),!0}return!1}function np(i,r,o,c){if(c={lane:2,revertLane:Op(),action:c,hasEagerState:!1,eagerState:null,next:null},kh(i)){if(r)throw Error(s(479))}else r=Tm(i,o,c,2),r!==null&&Kn(r,i,2)}function kh(i){var r=i.alternate;return i===Ve||r!==null&&r===Ve}function C0(i,r){Do=Ch=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function x0(i,r,o){if((o&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,ql(i,o)}}var Mh={readContext:_n,use:Rh,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt},R0={readContext:_n,use:Rh,useCallback:function(i,r){return Mn().memoizedState=[i,r===void 0?null:r],i},useContext:_n,useEffect:h0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Dh(4194308,4,p0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Dh(4194308,4,i,r)},useInsertionEffect:function(i,r){Dh(4,2,i,r)},useMemo:function(i,r){var o=Mn();r=r===void 0?null:r;var c=i();if(wa){Ne(!0);try{i()}finally{Ne(!1)}}return o.memoizedState=[c,r],c},useReducer:function(i,r,o){var c=Mn();if(o!==void 0){var f=o(r);if(wa){Ne(!0);try{o(r)}finally{Ne(!1)}}}else f=r;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=ix.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var r=Mn();return i={current:i},r.memoizedState=i},useState:function(i){i=$m(i);var r=i.queue,o=A0.bind(null,Ve,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Zm,useDeferredValue:function(i,r){var o=Mn();return Jm(o,i,r)},useTransition:function(){var i=$m(!1);return i=E0.bind(null,Ve,i.queue,!0,!1),Mn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var c=Ve,f=Mn();if(et){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),mt===null)throw Error(s(349));(Xe&124)!==0||Xv(c,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,h0(Wv.bind(null,c,m,i),[i]),c.flags|=2048,Mo(9,Nh(),$v.bind(null,c,m,o,r),null),o},useId:function(){var i=Mn(),r=mt.identifierPrefix;if(et){var o=bs,c=Ts;o=(c&~(1<<32-Je(c)-1)).toString(32)+o,r="«"+r+"R"+o,o=xh++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=WC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:tp,useFormState:a0,useActionState:a0,useOptimistic:function(i){var r=Mn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=np.bind(null,Ve,!0,o),o.dispatch=r,[i,r]},useMemoCache:Qm,useCacheRefresh:function(){return Mn().memoizedState=nx.bind(null,Ve)}},I0={readContext:_n,use:Rh,useCallback:_0,useContext:_n,useEffect:f0,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:m0,useMemo:y0,useReducer:Ih,useRef:u0,useState:function(){return Ih(As)},useDebugValue:Zm,useDeferredValue:function(i,r){var o=Ut();return v0(o,ct.memoizedState,i,r)},useTransition:function(){var i=Ih(As)[0],r=Ut().memoizedState;return[typeof i=="boolean"?i:vc(i),r]},useSyncExternalStore:Kv,useId:w0,useHostTransitionStatus:tp,useFormState:o0,useActionState:o0,useOptimistic:function(i,r){var o=Ut();return e0(o,ct,i,r)},useMemoCache:Qm,useCacheRefresh:S0},sx={readContext:_n,use:Rh,useCallback:_0,useContext:_n,useEffect:f0,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:m0,useMemo:y0,useReducer:Xm,useRef:u0,useState:function(){return Xm(As)},useDebugValue:Zm,useDeferredValue:function(i,r){var o=Ut();return ct===null?Jm(o,i,r):v0(o,ct.memoizedState,i,r)},useTransition:function(){var i=Xm(As)[0],r=Ut().memoizedState;return[typeof i=="boolean"?i:vc(i),r]},useSyncExternalStore:Kv,useId:w0,useHostTransitionStatus:tp,useFormState:c0,useActionState:c0,useOptimistic:function(i,r){var o=Ut();return ct!==null?e0(o,ct,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Qm,useCacheRefresh:S0},Oo=null,bc=0;function Oh(i){var r=bc;return bc+=1,Oo===null&&(Oo=[]),zv(Oo,i,r)}function wc(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Ph(i,r){throw r.$$typeof===b?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function N0(i){var r=i._init;return r(i._payload)}function D0(i){function r(U,O){if(i){var B=U.deletions;B===null?(U.deletions=[O],U.flags|=16):B.push(O)}}function o(U,O){if(!i)return null;for(;O!==null;)r(U,O),O=O.sibling;return null}function c(U){for(var O=new Map;U!==null;)U.key!==null?O.set(U.key,U):O.set(U.index,U),U=U.sibling;return O}function f(U,O){return U=Es(U,O),U.index=0,U.sibling=null,U}function m(U,O,B){return U.index=B,i?(B=U.alternate,B!==null?(B=B.index,B<O?(U.flags|=67108866,O):B):(U.flags|=67108866,O)):(U.flags|=1048576,O)}function T(U){return i&&U.alternate===null&&(U.flags|=67108866),U}function S(U,O,B,Z){return O===null||O.tag!==6?(O=wm(B,U.mode,Z),O.return=U,O):(O=f(O,B),O.return=U,O)}function D(U,O,B,Z){var ve=B.type;return ve===N?$(U,O,B.props.children,Z,B.key):O!==null&&(O.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===C&&N0(ve)===O.type)?(O=f(O,B.props),wc(O,B),O.return=U,O):(O=_h(B.type,B.key,B.props,null,U.mode,Z),wc(O,B),O.return=U,O)}function q(U,O,B,Z){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=Sm(B,U.mode,Z),O.return=U,O):(O=f(O,B.children||[]),O.return=U,O)}function $(U,O,B,Z,ve){return O===null||O.tag!==7?(O=pa(B,U.mode,Z,ve),O.return=U,O):(O=f(O,B),O.return=U,O)}function J(U,O,B){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=wm(""+O,U.mode,B),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return B=_h(O.type,O.key,O.props,null,U.mode,B),wc(B,O),B.return=U,B;case R:return O=Sm(O,U.mode,B),O.return=U,O;case C:var Z=O._init;return O=Z(O._payload),J(U,O,B)}if(Me(O)||j(O))return O=pa(O,U.mode,B,null),O.return=U,O;if(typeof O.then=="function")return J(U,Oh(O),B);if(O.$$typeof===ie)return J(U,Th(U,O),B);Ph(U,O)}return null}function H(U,O,B,Z){var ve=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ve!==null?null:S(U,O,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===ve?D(U,O,B,Z):null;case R:return B.key===ve?q(U,O,B,Z):null;case C:return ve=B._init,B=ve(B._payload),H(U,O,B,Z)}if(Me(B)||j(B))return ve!==null?null:$(U,O,B,Z,null);if(typeof B.then=="function")return H(U,O,Oh(B),Z);if(B.$$typeof===ie)return H(U,O,Th(U,B),Z);Ph(U,B)}return null}function G(U,O,B,Z,ve){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return U=U.get(B)||null,S(O,U,""+Z,ve);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return U=U.get(Z.key===null?B:Z.key)||null,D(O,U,Z,ve);case R:return U=U.get(Z.key===null?B:Z.key)||null,q(O,U,Z,ve);case C:var je=Z._init;return Z=je(Z._payload),G(U,O,B,Z,ve)}if(Me(Z)||j(Z))return U=U.get(B)||null,$(O,U,Z,ve,null);if(typeof Z.then=="function")return G(U,O,B,Oh(Z),ve);if(Z.$$typeof===ie)return G(U,O,B,Th(O,Z),ve);Ph(O,Z)}return null}function Ce(U,O,B,Z){for(var ve=null,je=null,Ee=O,we=O=0,tn=null;Ee!==null&&we<B.length;we++){Ee.index>we?(tn=Ee,Ee=null):tn=Ee.sibling;var Ze=H(U,Ee,B[we],Z);if(Ze===null){Ee===null&&(Ee=tn);break}i&&Ee&&Ze.alternate===null&&r(U,Ee),O=m(Ze,O,we),je===null?ve=Ze:je.sibling=Ze,je=Ze,Ee=tn}if(we===B.length)return o(U,Ee),et&&_a(U,we),ve;if(Ee===null){for(;we<B.length;we++)Ee=J(U,B[we],Z),Ee!==null&&(O=m(Ee,O,we),je===null?ve=Ee:je.sibling=Ee,je=Ee);return et&&_a(U,we),ve}for(Ee=c(Ee);we<B.length;we++)tn=G(Ee,U,we,B[we],Z),tn!==null&&(i&&tn.alternate!==null&&Ee.delete(tn.key===null?we:tn.key),O=m(tn,O,we),je===null?ve=tn:je.sibling=tn,je=tn);return i&&Ee.forEach(function(Ar){return r(U,Ar)}),et&&_a(U,we),ve}function be(U,O,B,Z){if(B==null)throw Error(s(151));for(var ve=null,je=null,Ee=O,we=O=0,tn=null,Ze=B.next();Ee!==null&&!Ze.done;we++,Ze=B.next()){Ee.index>we?(tn=Ee,Ee=null):tn=Ee.sibling;var Ar=H(U,Ee,Ze.value,Z);if(Ar===null){Ee===null&&(Ee=tn);break}i&&Ee&&Ar.alternate===null&&r(U,Ee),O=m(Ar,O,we),je===null?ve=Ar:je.sibling=Ar,je=Ar,Ee=tn}if(Ze.done)return o(U,Ee),et&&_a(U,we),ve;if(Ee===null){for(;!Ze.done;we++,Ze=B.next())Ze=J(U,Ze.value,Z),Ze!==null&&(O=m(Ze,O,we),je===null?ve=Ze:je.sibling=Ze,je=Ze);return et&&_a(U,we),ve}for(Ee=c(Ee);!Ze.done;we++,Ze=B.next())Ze=G(Ee,U,we,Ze.value,Z),Ze!==null&&(i&&Ze.alternate!==null&&Ee.delete(Ze.key===null?we:Ze.key),O=m(Ze,O,we),je===null?ve=Ze:je.sibling=Ze,je=Ze);return i&&Ee.forEach(function(rR){return r(U,rR)}),et&&_a(U,we),ve}function ht(U,O,B,Z){if(typeof B=="object"&&B!==null&&B.type===N&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var ve=B.key;O!==null;){if(O.key===ve){if(ve=B.type,ve===N){if(O.tag===7){o(U,O.sibling),Z=f(O,B.props.children),Z.return=U,U=Z;break e}}else if(O.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===C&&N0(ve)===O.type){o(U,O.sibling),Z=f(O,B.props),wc(Z,B),Z.return=U,U=Z;break e}o(U,O);break}else r(U,O);O=O.sibling}B.type===N?(Z=pa(B.props.children,U.mode,Z,B.key),Z.return=U,U=Z):(Z=_h(B.type,B.key,B.props,null,U.mode,Z),wc(Z,B),Z.return=U,U=Z)}return T(U);case R:e:{for(ve=B.key;O!==null;){if(O.key===ve)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){o(U,O.sibling),Z=f(O,B.children||[]),Z.return=U,U=Z;break e}else{o(U,O);break}else r(U,O);O=O.sibling}Z=Sm(B,U.mode,Z),Z.return=U,U=Z}return T(U);case C:return ve=B._init,B=ve(B._payload),ht(U,O,B,Z)}if(Me(B))return Ce(U,O,B,Z);if(j(B)){if(ve=j(B),typeof ve!="function")throw Error(s(150));return B=ve.call(B),be(U,O,B,Z)}if(typeof B.then=="function")return ht(U,O,Oh(B),Z);if(B.$$typeof===ie)return ht(U,O,Th(U,B),Z);Ph(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,O!==null&&O.tag===6?(o(U,O.sibling),Z=f(O,B),Z.return=U,U=Z):(o(U,O),Z=wm(B,U.mode,Z),Z.return=U,U=Z),T(U)):o(U,O)}return function(U,O,B,Z){try{bc=0;var ve=ht(U,O,B,Z);return Oo=null,ve}catch(Ee){if(Ee===dc||Ee===wh)throw Ee;var je=qn(29,Ee,null,U.mode);return je.lanes=Z,je.return=U,je}finally{}}}var Po=D0(!0),k0=D0(!1),ai=X(null),zi=null;function ur(i){var r=i.alternate;se(Xt,Xt.current&1),se(ai,i),zi===null&&(r===null||No.current!==null||r.memoizedState!==null)&&(zi=i)}function M0(i){if(i.tag===22){if(se(Xt,Xt.current),se(ai,i),zi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(zi=i)}}else hr()}function hr(){se(Xt,Xt.current),se(ai,ai.current)}function Cs(i){oe(ai),zi===i&&(zi=null),oe(Xt)}var Xt=X(0);function Vh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Yp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function ip(i,r,o,c){r=i.memoizedState,o=o(c,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var sp={enqueueSetState:function(i,r,o){i=i._reactInternals;var c=Qn(),f=or(c);f.payload=r,o!=null&&(f.callback=o),r=lr(i,f,c),r!==null&&(Kn(r,i,c),pc(r,i,c))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var c=Qn(),f=or(c);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=lr(i,f,c),r!==null&&(Kn(r,i,c),pc(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Qn(),c=or(o);c.tag=2,r!=null&&(c.callback=r),r=lr(i,c,o),r!==null&&(Kn(r,i,o),pc(r,i,o))}};function O0(i,r,o,c,f,m,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,m,T):r.prototype&&r.prototype.isPureReactComponent?!rc(o,c)||!rc(f,m):!0}function P0(i,r,o,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==i&&sp.enqueueReplaceState(r,r.state,null)}function Sa(i,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Lh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function V0(i){Lh(i)}function L0(i){console.error(i)}function j0(i){Lh(i)}function jh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function U0(i,r,o){try{var c=i.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function rp(i,r,o){return o=or(o),o.tag=3,o.payload={element:null},o.callback=function(){jh(i,r)},o}function z0(i){return i=or(i),i.tag=3,i}function F0(i,r,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=c.value;i.payload=function(){return f(m)},i.callback=function(){U0(r,o,c)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){U0(r,o,c),typeof f!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var S=c.stack;this.componentDidCatch(c.value,{componentStack:S!==null?S:""})})}function rx(i,r,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&uc(r,o,f,!0),o=ai.current,o!==null){switch(o.tag){case 13:return zi===null?Ip():o.alternate===null&&Ct===0&&(Ct=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===Om?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),Dp(i,c,f)),!1;case 22:return o.flags|=65536,c===Om?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),Dp(i,c,f)),!1}throw Error(s(435,o.tag))}return Dp(i,c,f),Ip(),!1}if(et)return r=ai.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,c!==xm&&(i=Error(s(422),{cause:c}),cc(ni(i,o)))):(c!==xm&&(r=Error(s(423),{cause:c}),cc(ni(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=ni(c,o),f=rp(i.stateNode,c,f),Lm(i,f),Ct!==4&&(Ct=2)),!1;var m=Error(s(520),{cause:c});if(m=ni(m,o),Nc===null?Nc=[m]:Nc.push(m),Ct!==4&&(Ct=2),r===null)return!0;c=ni(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=rp(o.stateNode,c,i),Lm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_r===null||!_r.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=z0(f),F0(f,i,o,c),Lm(o,f),!1}o=o.return}while(o!==null);return!1}var B0=Error(s(461)),Jt=!1;function un(i,r,o,c){r.child=i===null?k0(r,null,o,c):Po(r,i.child,o,c)}function q0(i,r,o,c,f){o=o.render;var m=r.ref;if("ref"in c){var T={};for(var S in c)S!=="ref"&&(T[S]=c[S])}else T=c;return Ta(r),c=Bm(i,r,o,T,m,f),S=qm(),i!==null&&!Jt?(Hm(i,r,f),xs(i,r,f)):(et&&S&&Am(r),r.flags|=1,un(i,r,c,f),r.child)}function H0(i,r,o,c,f){if(i===null){var m=o.type;return typeof m=="function"&&!bm(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,G0(i,r,m,c,f)):(i=_h(o.type,null,c,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!dp(i,f)){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:rc,o(T,c)&&i.ref===r.ref)return xs(i,r,f)}return r.flags|=1,i=Es(m,c),i.ref=r.ref,i.return=r,r.child=i}function G0(i,r,o,c,f){if(i!==null){var m=i.memoizedProps;if(rc(m,c)&&i.ref===r.ref)if(Jt=!1,r.pendingProps=c=m,dp(i,f))(i.flags&131072)!==0&&(Jt=!0);else return r.lanes=i.lanes,xs(i,r,f)}return ap(i,r,o,c,f)}function Y0(i,r,o){var c=r.pendingProps,f=c.children,m=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~c}else r.childLanes=0,r.child=null;return Q0(i,r,c,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&bh(r,m!==null?m.cachePool:null),m!==null?Gv(r,m):Um(),M0(r);else return r.lanes=r.childLanes=536870912,Q0(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(bh(r,m.cachePool),Gv(r,m),hr(),r.memoizedState=null):(i!==null&&bh(r,null),Um(),hr());return un(i,r,f,o),r.child}function Q0(i,r,o,c){var f=Mm();return f=f===null?null:{parent:Kt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&bh(r,null),Um(),M0(r),i!==null&&uc(i,r,c,!0),null}function Uh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function ap(i,r,o,c,f){return Ta(r),o=Bm(i,r,o,c,void 0,f),c=qm(),i!==null&&!Jt?(Hm(i,r,f),xs(i,r,f)):(et&&c&&Am(r),r.flags|=1,un(i,r,o,f),r.child)}function K0(i,r,o,c,f,m){return Ta(r),r.updateQueue=null,o=Qv(r,c,o,f),Yv(i),c=qm(),i!==null&&!Jt?(Hm(i,r,m),xs(i,r,m)):(et&&c&&Am(r),r.flags|=1,un(i,r,o,m),r.child)}function X0(i,r,o,c,f){if(Ta(r),r.stateNode===null){var m=Ao,T=o.contextType;typeof T=="object"&&T!==null&&(m=_n(T)),m=new o(c,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=sp,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=c,m.state=r.memoizedState,m.refs={},Pm(r),T=o.contextType,m.context=typeof T=="object"&&T!==null?_n(T):Ao,m.state=r.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(ip(r,o,T,c),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&sp.enqueueReplaceState(m,m.state,null),_c(r,c,m,f),gc(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){m=r.stateNode;var S=r.memoizedProps,D=Sa(o,S);m.props=D;var q=m.context,$=o.contextType;T=Ao,typeof $=="object"&&$!==null&&(T=_n($));var J=o.getDerivedStateFromProps;$=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,$||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||q!==T)&&P0(r,m,c,T),ar=!1;var H=r.memoizedState;m.state=H,_c(r,c,m,f),gc(),q=r.memoizedState,S||H!==q||ar?(typeof J=="function"&&(ip(r,o,J,c),q=r.memoizedState),(D=ar||O0(r,o,D,c,H,q,T))?($||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=q),m.props=c,m.state=q,m.context=T,c=D):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{m=r.stateNode,Vm(i,r),T=r.memoizedProps,$=Sa(o,T),m.props=$,J=r.pendingProps,H=m.context,q=o.contextType,D=Ao,typeof q=="object"&&q!==null&&(D=_n(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==J||H!==D)&&P0(r,m,c,D),ar=!1,H=r.memoizedState,m.state=H,_c(r,c,m,f),gc();var G=r.memoizedState;T!==J||H!==G||ar||i!==null&&i.dependencies!==null&&Eh(i.dependencies)?(typeof S=="function"&&(ip(r,o,S,c),G=r.memoizedState),($=ar||O0(r,o,$,c,H,G,D)||i!==null&&i.dependencies!==null&&Eh(i.dependencies))?(q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,G,D),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,G,D)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=G),m.props=c,m.state=G,m.context=D,c=$):(typeof m.componentDidUpdate!="function"||T===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),c=!1)}return m=c,Uh(i,r),c=(r.flags&128)!==0,m||c?(m=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&c?(r.child=Po(r,i.child,null,f),r.child=Po(r,null,o,f)):un(i,r,o,f),r.memoizedState=m.state,i=r.child):i=xs(i,r,f),i}function $0(i,r,o,c){return lc(),r.flags|=256,un(i,r,o,c),r.child}var op={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lp(i){return{baseLanes:i,cachePool:Lv()}}function cp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=oi),i}function W0(i,r,o){var c=r.pendingProps,f=!1,m=(r.flags&128)!==0,T;if((T=m)||(T=i!==null&&i.memoizedState===null?!1:(Xt.current&2)!==0),T&&(f=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,i===null){if(et){if(f?ur(r):hr(),et){var S=At,D;if(D=S){e:{for(D=S,S=Ui;D.nodeType!==8;){if(!S){S=null;break e}if(D=yi(D.nextSibling),D===null){S=null;break e}}S=D}S!==null?(r.memoizedState={dehydrated:S,treeContext:ga!==null?{id:Ts,overflow:bs}:null,retryLane:536870912,hydrationErrors:null},D=qn(18,null,null,0),D.stateNode=S,D.return=r,r.child=D,Rn=r,At=null,D=!0):D=!1}D||va(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Yp(S)?r.lanes=32:r.lanes=536870912,null;Cs(r)}return S=c.children,c=c.fallback,f?(hr(),f=r.mode,S=zh({mode:"hidden",children:S},f),c=pa(c,f,o,null),S.return=r,c.return=r,S.sibling=c,r.child=S,f=r.child,f.memoizedState=lp(o),f.childLanes=cp(i,T,o),r.memoizedState=op,c):(ur(r),up(r,S))}if(D=i.memoizedState,D!==null&&(S=D.dehydrated,S!==null)){if(m)r.flags&256?(ur(r),r.flags&=-257,r=hp(i,r,o)):r.memoizedState!==null?(hr(),r.child=i.child,r.flags|=128,r=null):(hr(),f=c.fallback,S=r.mode,c=zh({mode:"visible",children:c.children},S),f=pa(f,S,o,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,Po(r,i.child,null,o),c=r.child,c.memoizedState=lp(o),c.childLanes=cp(i,T,o),r.memoizedState=op,r=f);else if(ur(r),Yp(S)){if(T=S.nextSibling&&S.nextSibling.dataset,T)var q=T.dgst;T=q,c=Error(s(419)),c.stack="",c.digest=T,cc({value:c,source:null,stack:null}),r=hp(i,r,o)}else if(Jt||uc(i,r,o,!1),T=(o&i.childLanes)!==0,Jt||T){if(T=mt,T!==null&&(c=o&-o,c=(c&42)!==0?1:Zs(c),c=(c&(T.suspendedLanes|o))!==0?0:c,c!==0&&c!==D.retryLane))throw D.retryLane=c,So(i,c),Kn(T,i,c),B0;S.data==="$?"||Ip(),r=hp(i,r,o)}else S.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=D.treeContext,At=yi(S.nextSibling),Rn=r,et=!0,ya=null,Ui=!1,i!==null&&(si[ri++]=Ts,si[ri++]=bs,si[ri++]=ga,Ts=i.id,bs=i.overflow,ga=r),r=up(r,c.children),r.flags|=4096);return r}return f?(hr(),f=c.fallback,S=r.mode,D=i.child,q=D.sibling,c=Es(D,{mode:"hidden",children:c.children}),c.subtreeFlags=D.subtreeFlags&65011712,q!==null?f=Es(q,f):(f=pa(f,S,o,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,S=i.child.memoizedState,S===null?S=lp(o):(D=S.cachePool,D!==null?(q=Kt._currentValue,D=D.parent!==q?{parent:q,pool:q}:D):D=Lv(),S={baseLanes:S.baseLanes|o,cachePool:D}),f.memoizedState=S,f.childLanes=cp(i,T,o),r.memoizedState=op,c):(ur(r),o=i.child,i=o.sibling,o=Es(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,i!==null&&(T=r.deletions,T===null?(r.deletions=[i],r.flags|=16):T.push(i)),r.child=o,r.memoizedState=null,o)}function up(i,r){return r=zh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function zh(i,r){return i=qn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function hp(i,r,o){return Po(r,i.child,null,o),i=up(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Z0(i,r,o){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),Im(i.return,r,o)}function fp(i,r,o,c,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function J0(i,r,o){var c=r.pendingProps,f=c.revealOrder,m=c.tail;if(un(i,r,c.children,o),c=Xt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Z0(i,o,r);else if(i.tag===19)Z0(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(se(Xt,c),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Vh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),fp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Vh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}fp(r,!0,o,null,m);break;case"together":fp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function xs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),gr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(uc(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Es(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Es(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function dp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Eh(i)))}function ax(i,r,o){switch(r.tag){case 3:st(r,r.stateNode.containerInfo),rr(r,Kt,i.memoizedState.cache),lc();break;case 27:case 5:Ai(r);break;case 4:st(r,r.stateNode.containerInfo);break;case 10:rr(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(ur(r),r.flags|=128,null):(o&r.child.childLanes)!==0?W0(i,r,o):(ur(r),i=xs(i,r,o),i!==null?i.sibling:null);ur(r);break;case 19:var f=(i.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(uc(i,r,o,!1),c=(o&r.childLanes)!==0),f){if(c)return J0(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Xt,Xt.current),c)break;return null;case 22:case 23:return r.lanes=0,Y0(i,r,o);case 24:rr(r,Kt,i.memoizedState.cache)}return xs(i,r,o)}function eE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Jt=!0;else{if(!dp(i,o)&&(r.flags&128)===0)return Jt=!1,ax(i,r,o);Jt=(i.flags&131072)!==0}else Jt=!1,et&&(r.flags&1048576)!==0&&Nv(r,vh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var c=r.elementType,f=c._init;if(c=f(c._payload),r.type=c,typeof c=="function")bm(c)?(i=Sa(c,i),r.tag=1,r=X0(null,r,c,i,o)):(r.tag=0,r=ap(null,r,c,i,o));else{if(c!=null){if(f=c.$$typeof,f===pe){r.tag=11,r=q0(null,r,c,i,o);break e}else if(f===k){r.tag=14,r=H0(null,r,c,i,o);break e}}throw r=de(c)||c,Error(s(306,r,""))}}return r;case 0:return ap(i,r,r.type,r.pendingProps,o);case 1:return c=r.type,f=Sa(c,r.pendingProps),X0(i,r,c,f,o);case 3:e:{if(st(r,r.stateNode.containerInfo),i===null)throw Error(s(387));c=r.pendingProps;var m=r.memoizedState;f=m.element,Vm(i,r),_c(r,c,null,o);var T=r.memoizedState;if(c=T.cache,rr(r,Kt,c),c!==m.cache&&Nm(r,[Kt],o,!0),gc(),c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=$0(i,r,c,o);break e}else if(c!==f){f=ni(Error(s(424)),r),cc(f),r=$0(i,r,c,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(At=yi(i.firstChild),Rn=r,et=!0,ya=null,Ui=!0,o=k0(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(lc(),c===f){r=xs(i,r,o);break e}un(i,r,c,o)}r=r.child}return r;case 26:return Uh(i,r),i===null?(o=sT(r.type,null,r.pendingProps,null))?r.memoizedState=o:et||(o=r.type,i=r.pendingProps,c=ef(Se.current).createElement(o),c[Gt]=r,c[Vt]=i,fn(c,o,i),It(c),r.stateNode=c):r.memoizedState=sT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ai(r),i===null&&et&&(c=r.stateNode=tT(r.type,r.pendingProps,Se.current),Rn=r,Ui=!0,f=At,Er(r.type)?(Qp=f,At=yi(c.firstChild)):At=f),un(i,r,r.pendingProps.children,o),Uh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&et&&((f=c=At)&&(c=Ox(c,r.type,r.pendingProps,Ui),c!==null?(r.stateNode=c,Rn=r,At=yi(c.firstChild),Ui=!1,f=!0):f=!1),f||va(r)),Ai(r),f=r.type,m=r.pendingProps,T=i!==null?i.memoizedProps:null,c=m.children,qp(f,m)?c=null:T!==null&&qp(f,T)&&(r.flags|=32),r.memoizedState!==null&&(f=Bm(i,r,ZC,null,null,o),Uc._currentValue=f),Uh(i,r),un(i,r,c,o),r.child;case 6:return i===null&&et&&((i=o=At)&&(o=Px(o,r.pendingProps,Ui),o!==null?(r.stateNode=o,Rn=r,At=null,i=!0):i=!1),i||va(r)),null;case 13:return W0(i,r,o);case 4:return st(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=Po(r,null,c,o):un(i,r,c,o),r.child;case 11:return q0(i,r,r.type,r.pendingProps,o);case 7:return un(i,r,r.pendingProps,o),r.child;case 8:return un(i,r,r.pendingProps.children,o),r.child;case 12:return un(i,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,rr(r,r.type,c.value),un(i,r,c.children,o),r.child;case 9:return f=r.type._context,c=r.pendingProps.children,Ta(r),f=_n(f),c=c(f),r.flags|=1,un(i,r,c,o),r.child;case 14:return H0(i,r,r.type,r.pendingProps,o);case 15:return G0(i,r,r.type,r.pendingProps,o);case 19:return J0(i,r,o);case 31:return c=r.pendingProps,o=r.mode,c={mode:c.mode,children:c.children},i===null?(o=zh(c,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=Es(i.child,c),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return Y0(i,r,o);case 24:return Ta(r),c=_n(Kt),i===null?(f=Mm(),f===null&&(f=mt,m=Dm(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:c,cache:f},Pm(r),rr(r,Kt,f)):((i.lanes&o)!==0&&(Vm(i,r),_c(r,null,null,o),gc()),f=i.memoizedState,m=r.memoizedState,f.parent!==c?(f={parent:c,cache:c},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),rr(r,Kt,c)):(c=m.cache,rr(r,Kt,c),c!==f.cache&&Nm(r,[Kt],o,!0))),un(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Rs(i){i.flags|=4}function tE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!cT(r)){if(r=ai.current,r!==null&&((Xe&4194048)===Xe?zi!==null:(Xe&62914560)!==Xe&&(Xe&536870912)===0||r!==zi))throw mc=Om,jv;i.flags|=8192}}function Fh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Fl():536870912,i.lanes|=r,Uo|=r)}function Sc(i,r){if(!et)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function wt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=o,r}function ox(i,r,o){var c=r.pendingProps;switch(Cm(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(r),null;case 1:return wt(r),null;case 3:return o=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),Ss(Kt),$n(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(oc(r)?Rs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mv())),wt(r),null;case 26:return o=r.memoizedState,i===null?(Rs(r),o!==null?(wt(r),tE(r,o)):(wt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(Rs(r),wt(r),tE(r,o)):(wt(r),r.flags&=-16777217):(i.memoizedProps!==c&&Rs(r),wt(r),r.flags&=-16777217),null;case 27:fi(r),o=Se.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Rs(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return wt(r),null}i=ye.current,oc(r)?Dv(r):(i=tT(f,c,o),r.stateNode=i,Rs(r))}return wt(r),null;case 5:if(fi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Rs(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return wt(r),null}if(i=ye.current,oc(r))Dv(r);else{switch(f=ef(Se.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}i[Gt]=r,i[Vt]=c;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(fn(i,o,c),o){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Rs(r)}}return wt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&Rs(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(s(166));if(i=Se.current,oc(r)){if(i=r.stateNode,o=r.memoizedProps,c=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[Gt]=r,i=!!(i.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||KE(i.nodeValue,o)),i||va(r)}else i=ef(i).createTextNode(c),i[Gt]=r,r.stateNode=i}return wt(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=oc(r),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Gt]=r}else lc(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;wt(r),f=!1}else f=Mv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Cs(r),r):(Cs(r),null)}if(Cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=c!==null,i=i!==null&&i.memoizedState!==null,o){c=r.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==f&&(c.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Fh(r,r.updateQueue),wt(r),null;case 4:return $n(),i===null&&jp(r.stateNode.containerInfo),wt(r),null;case 10:return Ss(r.type),wt(r),null;case 19:if(oe(Xt),f=r.memoizedState,f===null)return wt(r),null;if(c=(r.flags&128)!==0,m=f.rendering,m===null)if(c)Sc(f,!1);else{if(Ct!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Vh(i),m!==null){for(r.flags|=128,Sc(f,!1),i=m.updateQueue,r.updateQueue=i,Fh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Iv(o,i),o=o.sibling;return se(Xt,Xt.current&1|2),r.child}i=i.sibling}f.tail!==null&&kn()>Hh&&(r.flags|=128,c=!0,Sc(f,!1),r.lanes=4194304)}else{if(!c)if(i=Vh(m),i!==null){if(r.flags|=128,c=!0,i=i.updateQueue,r.updateQueue=i,Fh(r,i),Sc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!et)return wt(r),null}else 2*kn()-f.renderingStartTime>Hh&&o!==536870912&&(r.flags|=128,c=!0,Sc(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=kn(),r.sibling=null,i=Xt.current,se(Xt,c?i&1|2:i&1),r):(wt(r),null);case 22:case 23:return Cs(r),zm(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(wt(r),r.subtreeFlags&6&&(r.flags|=8192)):wt(r),o=r.updateQueue,o!==null&&Fh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),i!==null&&oe(ba),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ss(Kt),wt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function lx(i,r){switch(Cm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Ss(Kt),$n(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return fi(r),null;case 13:if(Cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));lc()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return oe(Xt),null;case 4:return $n(),null;case 10:return Ss(r.type),null;case 22:case 23:return Cs(r),zm(),i!==null&&oe(ba),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Ss(Kt),null;case 25:return null;default:return null}}function nE(i,r){switch(Cm(r),r.tag){case 3:Ss(Kt),$n();break;case 26:case 27:case 5:fi(r);break;case 4:$n();break;case 13:Cs(r);break;case 19:oe(Xt);break;case 10:Ss(r.type);break;case 22:case 23:Cs(r),zm(),i!==null&&oe(ba);break;case 24:Ss(Kt)}}function Ac(i,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&i)===i){c=void 0;var m=o.create,T=o.inst;c=m(),T.destroy=c}o=o.next}while(o!==f)}}catch(S){ft(r,r.return,S)}}function fr(i,r,o){try{var c=r.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var m=f.next;c=m;do{if((c.tag&i)===i){var T=c.inst,S=T.destroy;if(S!==void 0){T.destroy=void 0,f=r;var D=o,q=S;try{q()}catch($){ft(f,D,$)}}}c=c.next}while(c!==m)}}catch($){ft(r,r.return,$)}}function iE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Hv(r,o)}catch(c){ft(i,i.return,c)}}}function sE(i,r,o){o.props=Sa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(c){ft(i,r,c)}}function Cc(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof o=="function"?i.refCleanup=o(c):o.current=c}}catch(f){ft(i,r,f)}}function Fi(i,r){var o=i.ref,c=i.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){ft(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ft(i,r,f)}else o.current=null}function rE(i){var r=i.type,o=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){ft(i,i.return,f)}}function mp(i,r,o){try{var c=i.stateNode;Ix(c,i.type,o,r),c[Vt]=r}catch(f){ft(i,i.return,f)}}function aE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Er(i.type)||i.tag===4}function pp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||aE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Er(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function gp(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Jh));else if(c!==4&&(c===27&&Er(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(gp(i,r,o),i=i.sibling;i!==null;)gp(i,r,o),i=i.sibling}function Bh(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(c!==4&&(c===27&&Er(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Bh(i,r,o),i=i.sibling;i!==null;)Bh(i,r,o),i=i.sibling}function oE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var c=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);fn(r,c,o),r[Gt]=i,r[Vt]=o}catch(m){ft(i,i.return,m)}}var Is=!1,Dt=!1,_p=!1,lE=typeof WeakSet=="function"?WeakSet:Set,en=null;function cx(i,r){if(i=i.containerInfo,Fp=of,i=vv(i),pm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,S=-1,D=-1,q=0,$=0,J=i,H=null;t:for(;;){for(var G;J!==o||f!==0&&J.nodeType!==3||(S=T+f),J!==m||c!==0&&J.nodeType!==3||(D=T+c),J.nodeType===3&&(T+=J.nodeValue.length),(G=J.firstChild)!==null;)H=J,J=G;for(;;){if(J===i)break t;if(H===o&&++q===f&&(S=T),H===m&&++$===c&&(D=T),(G=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=G}o=S===-1||D===-1?null:{start:S,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(Bp={focusedElem:i,selectionRange:o},of=!1,en=r;en!==null;)if(r=en,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,en=i;else for(;en!==null;){switch(r=en,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var Ce=Sa(o.type,f,o.elementType===o.type);i=c.getSnapshotBeforeUpdate(Ce,m),c.__reactInternalSnapshotBeforeUpdate=i}catch(be){ft(o,o.return,be)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Gp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Gp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,en=i;break}en=r.return}}function cE(i,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:dr(i,o),c&4&&Ac(5,o);break;case 1:if(dr(i,o),c&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(T){ft(o,o.return,T)}else{var f=Sa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(T){ft(o,o.return,T)}}c&64&&iE(o),c&512&&Cc(o,o.return);break;case 3:if(dr(i,o),c&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Hv(i,r)}catch(T){ft(o,o.return,T)}}break;case 27:r===null&&c&4&&oE(o);case 26:case 5:dr(i,o),r===null&&c&4&&rE(o),c&512&&Cc(o,o.return);break;case 12:dr(i,o);break;case 13:dr(i,o),c&4&&fE(i,o),c&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=yx.bind(null,o),Vx(i,o))));break;case 22:if(c=o.memoizedState!==null||Is,!c){r=r!==null&&r.memoizedState!==null||Dt,f=Is;var m=Dt;Is=c,(Dt=r)&&!m?mr(i,o,(o.subtreeFlags&8772)!==0):dr(i,o),Is=f,Dt=m}break;case 30:break;default:dr(i,o)}}function uE(i){var r=i.alternate;r!==null&&(i.alternate=null,uE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&tr(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var bt=null,On=!1;function Ns(i,r,o){for(o=o.child;o!==null;)hE(i,r,o),o=o.sibling}function hE(i,r,o){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(le,o)}catch{}switch(o.tag){case 26:Dt||Fi(o,r),Ns(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Dt||Fi(o,r);var c=bt,f=On;Er(o.type)&&(bt=o.stateNode,On=!1),Ns(i,r,o),Pc(o.stateNode),bt=c,On=f;break;case 5:Dt||Fi(o,r);case 6:if(c=bt,f=On,bt=null,Ns(i,r,o),bt=c,On=f,bt!==null)if(On)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(o.stateNode)}catch(m){ft(o,r,m)}else try{bt.removeChild(o.stateNode)}catch(m){ft(o,r,m)}break;case 18:bt!==null&&(On?(i=bt,JE(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),qc(i)):JE(bt,o.stateNode));break;case 4:c=bt,f=On,bt=o.stateNode.containerInfo,On=!0,Ns(i,r,o),bt=c,On=f;break;case 0:case 11:case 14:case 15:Dt||fr(2,o,r),Dt||fr(4,o,r),Ns(i,r,o);break;case 1:Dt||(Fi(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&sE(o,r,c)),Ns(i,r,o);break;case 21:Ns(i,r,o);break;case 22:Dt=(c=Dt)||o.memoizedState!==null,Ns(i,r,o),Dt=c;break;default:Ns(i,r,o)}}function fE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{qc(i)}catch(o){ft(r,r.return,o)}}function ux(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new lE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new lE),r;default:throw Error(s(435,i.tag))}}function yp(i,r){var o=ux(i);r.forEach(function(c){var f=vx.bind(null,i,c);o.has(c)||(o.add(c),c.then(f,f))})}function Hn(i,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],m=i,T=r,S=T;e:for(;S!==null;){switch(S.tag){case 27:if(Er(S.type)){bt=S.stateNode,On=!1;break e}break;case 5:bt=S.stateNode,On=!1;break e;case 3:case 4:bt=S.stateNode.containerInfo,On=!0;break e}S=S.return}if(bt===null)throw Error(s(160));hE(m,T,f),bt=null,On=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)dE(r,i),r=r.sibling}var _i=null;function dE(i,r){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Hn(r,i),Gn(i),c&4&&(fr(3,i,i.return),Ac(3,i),fr(5,i,i.return));break;case 1:Hn(r,i),Gn(i),c&512&&(Dt||o===null||Fi(o,o.return)),c&64&&Is&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=_i;if(Hn(r,i),Gn(i),c&512&&(Dt||o===null||Fi(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=i.memoizedState,o===null)if(c===null)if(i.stateNode===null){e:{c=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Jr]||m[Gt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(c),f.head.insertBefore(m,f.querySelector("head > title"))),fn(m,c,o),m[Gt]=i,It(m),c=m;break e;case"link":var T=oT("link","href",f).get(c+(o.href||""));if(T){for(var S=0;S<T.length;S++)if(m=T[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(S,1);break t}}m=f.createElement(c),fn(m,c,o),f.head.appendChild(m);break;case"meta":if(T=oT("meta","content",f).get(c+(o.content||""))){for(S=0;S<T.length;S++)if(m=T[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(S,1);break t}}m=f.createElement(c),fn(m,c,o),f.head.appendChild(m);break;default:throw Error(s(468,c))}m[Gt]=i,It(m),c=m}i.stateNode=c}else lT(f,i.type,i.stateNode);else i.stateNode=aT(f,c,i.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?lT(f,i.type,i.stateNode):aT(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&mp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Hn(r,i),Gn(i),c&512&&(Dt||o===null||Fi(o,o.return)),o!==null&&c&4&&mp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Hn(r,i),Gn(i),c&512&&(Dt||o===null||Fi(o,o.return)),i.flags&32){f=i.stateNode;try{Zn(f,"")}catch(G){ft(i,i.return,G)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,mp(i,f,o!==null?o.memoizedProps:f)),c&1024&&(_p=!0);break;case 6:if(Hn(r,i),Gn(i),c&4){if(i.stateNode===null)throw Error(s(162));c=i.memoizedProps,o=i.stateNode;try{o.nodeValue=c}catch(G){ft(i,i.return,G)}}break;case 3:if(sf=null,f=_i,_i=tf(r.containerInfo),Hn(r,i),_i=f,Gn(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{qc(r.containerInfo)}catch(G){ft(i,i.return,G)}_p&&(_p=!1,mE(i));break;case 4:c=_i,_i=tf(i.stateNode.containerInfo),Hn(r,i),Gn(i),_i=c;break;case 12:Hn(r,i),Gn(i);break;case 13:Hn(r,i),Gn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Sp=kn()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,yp(i,c)));break;case 22:f=i.memoizedState!==null;var D=o!==null&&o.memoizedState!==null,q=Is,$=Dt;if(Is=q||f,Dt=$||D,Hn(r,i),Dt=$,Is=q,Gn(i),c&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||D||Is||Dt||Aa(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){D=o=r;try{if(m=D.stateNode,f)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{S=D.stateNode;var J=D.memoizedProps.style,H=J!=null&&J.hasOwnProperty("display")?J.display:null;S.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){ft(D,D.return,G)}}}else if(r.tag===6){if(o===null){D=r;try{D.stateNode.nodeValue=f?"":D.memoizedProps}catch(G){ft(D,D.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,yp(i,o))));break;case 19:Hn(r,i),Gn(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,yp(i,c)));break;case 30:break;case 21:break;default:Hn(r,i),Gn(i)}}function Gn(i){var r=i.flags;if(r&2){try{for(var o,c=i.return;c!==null;){if(aE(c)){o=c;break}c=c.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=pp(i);Bh(i,m,f);break;case 5:var T=o.stateNode;o.flags&32&&(Zn(T,""),o.flags&=-33);var S=pp(i);Bh(i,S,T);break;case 3:case 4:var D=o.stateNode.containerInfo,q=pp(i);gp(i,q,D);break;default:throw Error(s(161))}}catch($){ft(i,i.return,$)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function mE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;mE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function dr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)cE(i,r.alternate,r),r=r.sibling}function Aa(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:fr(4,r,r.return),Aa(r);break;case 1:Fi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&sE(r,r.return,o),Aa(r);break;case 27:Pc(r.stateNode);case 26:case 5:Fi(r,r.return),Aa(r);break;case 22:r.memoizedState===null&&Aa(r);break;case 30:Aa(r);break;default:Aa(r)}i=i.sibling}}function mr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,f=i,m=r,T=m.flags;switch(m.tag){case 0:case 11:case 15:mr(f,m,o),Ac(4,m);break;case 1:if(mr(f,m,o),c=m,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){ft(c,c.return,q)}if(c=m,f=c.updateQueue,f!==null){var S=c.stateNode;try{var D=f.shared.hiddenCallbacks;if(D!==null)for(f.shared.hiddenCallbacks=null,f=0;f<D.length;f++)qv(D[f],S)}catch(q){ft(c,c.return,q)}}o&&T&64&&iE(m),Cc(m,m.return);break;case 27:oE(m);case 26:case 5:mr(f,m,o),o&&c===null&&T&4&&rE(m),Cc(m,m.return);break;case 12:mr(f,m,o);break;case 13:mr(f,m,o),o&&T&4&&fE(f,m);break;case 22:m.memoizedState===null&&mr(f,m,o),Cc(m,m.return);break;case 30:break;default:mr(f,m,o)}r=r.sibling}}function vp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&hc(o))}function Ep(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&hc(i))}function Bi(i,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)pE(i,r,o,c),r=r.sibling}function pE(i,r,o,c){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Bi(i,r,o,c),f&2048&&Ac(9,r);break;case 1:Bi(i,r,o,c);break;case 3:Bi(i,r,o,c),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&hc(i)));break;case 12:if(f&2048){Bi(i,r,o,c),i=r.stateNode;try{var m=r.memoizedProps,T=m.id,S=m.onPostCommit;typeof S=="function"&&S(T,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(D){ft(r,r.return,D)}}else Bi(i,r,o,c);break;case 13:Bi(i,r,o,c);break;case 23:break;case 22:m=r.stateNode,T=r.alternate,r.memoizedState!==null?m._visibility&2?Bi(i,r,o,c):xc(i,r):m._visibility&2?Bi(i,r,o,c):(m._visibility|=2,Vo(i,r,o,c,(r.subtreeFlags&10256)!==0)),f&2048&&vp(T,r);break;case 24:Bi(i,r,o,c),f&2048&&Ep(r.alternate,r);break;default:Bi(i,r,o,c)}}function Vo(i,r,o,c,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,T=r,S=o,D=c,q=T.flags;switch(T.tag){case 0:case 11:case 15:Vo(m,T,S,D,f),Ac(8,T);break;case 23:break;case 22:var $=T.stateNode;T.memoizedState!==null?$._visibility&2?Vo(m,T,S,D,f):xc(m,T):($._visibility|=2,Vo(m,T,S,D,f)),f&&q&2048&&vp(T.alternate,T);break;case 24:Vo(m,T,S,D,f),f&&q&2048&&Ep(T.alternate,T);break;default:Vo(m,T,S,D,f)}r=r.sibling}}function xc(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,c=r,f=c.flags;switch(c.tag){case 22:xc(o,c),f&2048&&vp(c.alternate,c);break;case 24:xc(o,c),f&2048&&Ep(c.alternate,c);break;default:xc(o,c)}r=r.sibling}}var Rc=8192;function Lo(i){if(i.subtreeFlags&Rc)for(i=i.child;i!==null;)gE(i),i=i.sibling}function gE(i){switch(i.tag){case 26:Lo(i),i.flags&Rc&&i.memoizedState!==null&&Xx(_i,i.memoizedState,i.memoizedProps);break;case 5:Lo(i);break;case 3:case 4:var r=_i;_i=tf(i.stateNode.containerInfo),Lo(i),_i=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Rc,Rc=16777216,Lo(i),Rc=r):Lo(i));break;default:Lo(i)}}function _E(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Ic(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];en=c,vE(c,i)}_E(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yE(i),i=i.sibling}function yE(i){switch(i.tag){case 0:case 11:case 15:Ic(i),i.flags&2048&&fr(9,i,i.return);break;case 3:Ic(i);break;case 12:Ic(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,qh(i)):Ic(i);break;default:Ic(i)}}function qh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];en=c,vE(c,i)}_E(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:fr(8,r,r.return),qh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,qh(r));break;default:qh(r)}i=i.sibling}}function vE(i,r){for(;en!==null;){var o=en;switch(o.tag){case 0:case 11:case 15:fr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:hc(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,en=c;else e:for(o=i;en!==null;){c=en;var f=c.sibling,m=c.return;if(uE(c),c===o){en=null;break e}if(f!==null){f.return=m,en=f;break e}en=m}}}var hx={getCacheForType:function(i){var r=_n(Kt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},fx=typeof WeakMap=="function"?WeakMap:Map,rt=0,mt=null,Fe=null,Xe=0,at=0,Yn=null,pr=!1,jo=!1,Tp=!1,Ds=0,Ct=0,gr=0,Ca=0,bp=0,oi=0,Uo=0,Nc=null,Pn=null,wp=!1,Sp=0,Hh=1/0,Gh=null,_r=null,hn=0,yr=null,zo=null,Fo=0,Ap=0,Cp=null,EE=null,Dc=0,xp=null;function Qn(){if((rt&2)!==0&&Xe!==0)return Xe&-Xe;if(K.T!==null){var i=Ro;return i!==0?i:Op()}return Js()}function TE(){oi===0&&(oi=(Xe&536870912)===0||et?zl():536870912);var i=ai.current;return i!==null&&(i.flags|=32),oi}function Kn(i,r,o){(i===mt&&(at===2||at===9)||i.cancelPendingCommit!==null)&&(Bo(i,0),vr(i,Xe,oi,!1)),cs(i,o),((rt&2)===0||i!==mt)&&(i===mt&&((rt&2)===0&&(Ca|=o),Ct===4&&vr(i,Xe,oi,!1)),qi(i))}function bE(i,r,o){if((rt&6)!==0)throw Error(s(327));var c=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Zr(i,r),f=c?px(i,r):Np(i,r,!0),m=c;do{if(f===0){jo&&!c&&vr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!dx(o)){f=Np(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;e:{var S=i;f=Nc;var D=S.current.memoizedState.isDehydrated;if(D&&(Bo(S,T).flags|=256),T=Np(S,T,!1),T!==2){if(Tp&&!D){S.errorRecoveryDisabledLanes|=m,Ca|=m,f=4;break e}m=Pn,Pn=f,m!==null&&(Pn===null?Pn=m:Pn.push.apply(Pn,m))}f=T}if(m=!1,f!==2)continue}}if(f===1){Bo(i,0),vr(i,r,0,!0);break}e:{switch(c=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:vr(c,r,oi,!pr);break e;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Sp+300-kn(),10<f)){if(vr(c,r,oi,!pr),so(c,0,!0)!==0)break e;c.timeoutHandle=WE(wE.bind(null,c,o,Pn,Gh,wp,r,oi,Ca,Uo,pr,m,2,-0,0),f);break e}wE(c,o,Pn,Gh,wp,r,oi,Ca,Uo,pr,m,0,-0,0)}}break}while(!0);qi(i)}function wE(i,r,o,c,f,m,T,S,D,q,$,J,H,G){if(i.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(jc={stylesheets:null,count:0,unsuspend:Kx},gE(r),J=$x(),J!==null)){i.cancelPendingCommit=J(NE.bind(null,i,r,m,o,c,f,T,S,D,$,1,H,G)),vr(i,m,T,!q);return}NE(i,r,m,o,c,f,T,S,D)}function dx(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!Bn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function vr(i,r,o,c){r&=~bp,r&=~Ca,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var f=r;0<f;){var m=31-Je(f),T=1<<m;c[m]=-1,f&=~T}o!==0&&Ri(i,o,r)}function Yh(){return(rt&6)===0?(kc(0),!1):!0}function Rp(){if(Fe!==null){if(at===0)var i=Fe.return;else i=Fe,ws=Ea=null,Gm(i),Oo=null,bc=0,i=Fe;for(;i!==null;)nE(i.alternate,i),i=i.return;Fe=null}}function Bo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,Dx(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Rp(),mt=i,Fe=o=Es(i.current,null),Xe=r,at=0,Yn=null,pr=!1,jo=Zr(i,r),Tp=!1,Uo=oi=bp=Ca=gr=Ct=0,Pn=Nc=null,wp=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var f=31-Je(c),m=1<<f;r|=i[f],c&=~m}return Ds=r,mh(),o}function SE(i,r){Ve=null,K.H=Mh,r===dc||r===wh?(r=Fv(),at=3):r===jv?(r=Fv(),at=4):at=r===B0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Yn=r,Fe===null&&(Ct=1,jh(i,ni(r,i.current)))}function AE(){var i=K.H;return K.H=Mh,i===null?Mh:i}function CE(){var i=K.A;return K.A=hx,i}function Ip(){Ct=4,pr||(Xe&4194048)!==Xe&&ai.current!==null||(jo=!0),(gr&134217727)===0&&(Ca&134217727)===0||mt===null||vr(mt,Xe,oi,!1)}function Np(i,r,o){var c=rt;rt|=2;var f=AE(),m=CE();(mt!==i||Xe!==r)&&(Gh=null,Bo(i,r)),r=!1;var T=Ct;e:do try{if(at!==0&&Fe!==null){var S=Fe,D=Yn;switch(at){case 8:Rp(),T=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(r=!0);var q=at;if(at=0,Yn=null,qo(i,S,D,q),o&&jo){T=0;break e}break;default:q=at,at=0,Yn=null,qo(i,S,D,q)}}mx(),T=Ct;break}catch($){SE(i,$)}while(!0);return r&&i.shellSuspendCounter++,ws=Ea=null,rt=c,K.H=f,K.A=m,Fe===null&&(mt=null,Xe=0,mh()),T}function mx(){for(;Fe!==null;)xE(Fe)}function px(i,r){var o=rt;rt|=2;var c=AE(),f=CE();mt!==i||Xe!==r?(Gh=null,Hh=kn()+500,Bo(i,r)):jo=Zr(i,r);e:do try{if(at!==0&&Fe!==null){r=Fe;var m=Yn;t:switch(at){case 1:at=0,Yn=null,qo(i,r,m,1);break;case 2:case 9:if(Uv(m)){at=0,Yn=null,RE(r);break}r=function(){at!==2&&at!==9||mt!==i||(at=7),qi(i)},m.then(r,r);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:Uv(m)?(at=0,Yn=null,RE(r)):(at=0,Yn=null,qo(i,r,m,7));break;case 5:var T=null;switch(Fe.tag){case 26:T=Fe.memoizedState;case 5:case 27:var S=Fe;if(!T||cT(T)){at=0,Yn=null;var D=S.sibling;if(D!==null)Fe=D;else{var q=S.return;q!==null?(Fe=q,Qh(q)):Fe=null}break t}}at=0,Yn=null,qo(i,r,m,5);break;case 6:at=0,Yn=null,qo(i,r,m,6);break;case 8:Rp(),Ct=6;break e;default:throw Error(s(462))}}gx();break}catch($){SE(i,$)}while(!0);return ws=Ea=null,K.H=c,K.A=f,rt=o,Fe!==null?0:(mt=null,Xe=0,mh(),Ct)}function gx(){for(;Fe!==null&&!$r();)xE(Fe)}function xE(i){var r=eE(i.alternate,i,Ds);i.memoizedProps=i.pendingProps,r===null?Qh(i):Fe=r}function RE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=K0(o,r,r.pendingProps,r.type,void 0,Xe);break;case 11:r=K0(o,r,r.pendingProps,r.type.render,r.ref,Xe);break;case 5:Gm(r);default:nE(o,r),r=Fe=Iv(r,Ds),r=eE(o,r,Ds)}i.memoizedProps=i.pendingProps,r===null?Qh(i):Fe=r}function qo(i,r,o,c){ws=Ea=null,Gm(r),Oo=null,bc=0;var f=r.return;try{if(rx(i,f,r,o,Xe)){Ct=1,jh(i,ni(o,i.current)),Fe=null;return}}catch(m){if(f!==null)throw Fe=f,m;Ct=1,jh(i,ni(o,i.current)),Fe=null;return}r.flags&32768?(et||c===1?i=!0:jo||(Xe&536870912)!==0?i=!1:(pr=i=!0,(c===2||c===9||c===3||c===6)&&(c=ai.current,c!==null&&c.tag===13&&(c.flags|=16384))),IE(r,i)):Qh(r)}function Qh(i){var r=i;do{if((r.flags&32768)!==0){IE(r,pr);return}i=r.return;var o=ox(r.alternate,r,Ds);if(o!==null){Fe=o;return}if(r=r.sibling,r!==null){Fe=r;return}Fe=r=i}while(r!==null);Ct===0&&(Ct=5)}function IE(i,r){do{var o=lx(i.alternate,i);if(o!==null){o.flags&=32767,Fe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Fe=i;return}Fe=i=o}while(i!==null);Ct=6,Fe=null}function NE(i,r,o,c,f,m,T,S,D){i.cancelPendingCommit=null;do Kh();while(hn!==0);if((rt&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=Em,Bl(i,o,m,T,S,D),i===mt&&(Fe=mt=null,Xe=0),zo=r,yr=i,Fo=o,Ap=m,Cp=f,EE=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,Ex(rs,function(){return PE(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=K.T,K.T=null,f=ae.p,ae.p=2,T=rt,rt|=4;try{cx(i,r,o)}finally{rt=T,ae.p=f,K.T=c}}hn=1,DE(),kE(),ME()}}function DE(){if(hn===1){hn=0;var i=yr,r=zo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var c=ae.p;ae.p=2;var f=rt;rt|=4;try{dE(r,i);var m=Bp,T=vv(i.containerInfo),S=m.focusedElem,D=m.selectionRange;if(T!==S&&S&&S.ownerDocument&&yv(S.ownerDocument.documentElement,S)){if(D!==null&&pm(S)){var q=D.start,$=D.end;if($===void 0&&($=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min($,S.value.length);else{var J=S.ownerDocument||document,H=J&&J.defaultView||window;if(H.getSelection){var G=H.getSelection(),Ce=S.textContent.length,be=Math.min(D.start,Ce),ht=D.end===void 0?be:Math.min(D.end,Ce);!G.extend&&be>ht&&(T=ht,ht=be,be=T);var U=_v(S,be),O=_v(S,ht);if(U&&O&&(G.rangeCount!==1||G.anchorNode!==U.node||G.anchorOffset!==U.offset||G.focusNode!==O.node||G.focusOffset!==O.offset)){var B=J.createRange();B.setStart(U.node,U.offset),G.removeAllRanges(),be>ht?(G.addRange(B),G.extend(O.node,O.offset)):(B.setEnd(O.node,O.offset),G.addRange(B))}}}}for(J=[],G=S;G=G.parentNode;)G.nodeType===1&&J.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<J.length;S++){var Z=J[S];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}of=!!Fp,Bp=Fp=null}finally{rt=f,ae.p=c,K.T=o}}i.current=r,hn=2}}function kE(){if(hn===2){hn=0;var i=yr,r=zo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var c=ae.p;ae.p=2;var f=rt;rt|=4;try{cE(i,r.alternate,r)}finally{rt=f,ae.p=c,K.T=o}}hn=3}}function ME(){if(hn===4||hn===3){hn=0,no();var i=yr,r=zo,o=Fo,c=EE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?hn=5:(hn=0,zo=yr=null,OE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(_r=null),ro(o),r=r.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(le,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=K.T,f=ae.p,ae.p=2,K.T=null;try{for(var m=i.onRecoverableError,T=0;T<c.length;T++){var S=c[T];m(S.value,{componentStack:S.stack})}}finally{K.T=r,ae.p=f}}(Fo&3)!==0&&Kh(),qi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===xp?Dc++:(Dc=0,xp=i):Dc=0,kc(0)}}function OE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,hc(r)))}function Kh(i){return DE(),kE(),ME(),PE()}function PE(){if(hn!==5)return!1;var i=yr,r=Ap;Ap=0;var o=ro(Fo),c=K.T,f=ae.p;try{ae.p=32>o?32:o,K.T=null,o=Cp,Cp=null;var m=yr,T=Fo;if(hn=0,zo=yr=null,Fo=0,(rt&6)!==0)throw Error(s(331));var S=rt;if(rt|=4,yE(m.current),pE(m,m.current,T,o),rt=S,kc(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(le,m)}catch{}return!0}finally{ae.p=f,K.T=c,OE(i,r)}}function VE(i,r,o){r=ni(o,r),r=rp(i.stateNode,r,2),i=lr(i,r,2),i!==null&&(cs(i,2),qi(i))}function ft(i,r,o){if(i.tag===3)VE(i,i,o);else for(;r!==null;){if(r.tag===3){VE(r,i,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){i=ni(o,i),o=z0(2),c=lr(r,o,2),c!==null&&(F0(o,c,r,i),cs(c,2),qi(c));break}}r=r.return}}function Dp(i,r,o){var c=i.pingCache;if(c===null){c=i.pingCache=new fx;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(Tp=!0,f.add(o),i=_x.bind(null,i,r,o),r.then(i,i))}function _x(i,r,o){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,mt===i&&(Xe&o)===o&&(Ct===4||Ct===3&&(Xe&62914560)===Xe&&300>kn()-Sp?(rt&2)===0&&Bo(i,0):bp|=o,Uo===Xe&&(Uo=0)),qi(i)}function LE(i,r){r===0&&(r=Fl()),i=So(i,r),i!==null&&(cs(i,r),qi(i))}function yx(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),LE(i,o)}function vx(i,r){var o=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(r),LE(i,o)}function Ex(i,r){return is(i,r)}var Xh=null,Ho=null,kp=!1,$h=!1,Mp=!1,xa=0;function qi(i){i!==Ho&&i.next===null&&(Ho===null?Xh=Ho=i:Ho=Ho.next=i),$h=!0,kp||(kp=!0,bx())}function kc(i,r){if(!Mp&&$h){Mp=!0;do for(var o=!1,c=Xh;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var m=0;else{var T=c.suspendedLanes,S=c.pingedLanes;m=(1<<31-Je(42|i)+1)-1,m&=f&~(T&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,FE(c,m))}else m=Xe,m=so(c,c===mt?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Zr(c,m)||(o=!0,FE(c,m));c=c.next}while(o);Mp=!1}}function Tx(){jE()}function jE(){$h=kp=!1;var i=0;xa!==0&&(Nx()&&(i=xa),xa=0);for(var r=kn(),o=null,c=Xh;c!==null;){var f=c.next,m=UE(c,r);m===0?(c.next=null,o===null?Xh=f:o.next=f,f===null&&(Ho=o)):(o=c,(i!==0||(m&3)!==0)&&($h=!0)),c=f}kc(i)}function UE(i,r){for(var o=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var T=31-Je(m),S=1<<T,D=f[T];D===-1?((S&o)===0||(S&c)!==0)&&(f[T]=Ul(S,r)):D<=r&&(i.expiredLanes|=S),m&=~S}if(r=mt,o=Xe,o=so(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,o===0||i===r&&(at===2||at===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&ss(c),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Zr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(c!==null&&ss(c),ro(o)){case 2:case 8:o=Xs;break;case 32:o=rs;break;case 268435456:o=Ci;break;default:o=rs}return c=zE.bind(null,i),o=is(o,c),i.callbackPriority=r,i.callbackNode=o,r}return c!==null&&c!==null&&ss(c),i.callbackPriority=2,i.callbackNode=null,2}function zE(i,r){if(hn!==0&&hn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Kh()&&i.callbackNode!==o)return null;var c=Xe;return c=so(i,i===mt?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(bE(i,c,r),UE(i,kn()),i.callbackNode!=null&&i.callbackNode===o?zE.bind(null,i):null)}function FE(i,r){if(Kh())return null;bE(i,r,!0)}function bx(){kx(function(){(rt&6)!==0?is(Wr,Tx):jE()})}function Op(){return xa===0&&(xa=zl()),xa}function BE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:ho(""+i)}function qE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function wx(i,r,o,c,f){if(r==="submit"&&o&&o.stateNode===f){var m=BE((f[Vt]||null).action),T=c.submitter;T&&(r=(r=T[Vt]||null)?BE(r.formAction):T.getAttribute("formAction"),r!==null&&(m=r,T=null));var S=new fo("action","action",null,c,f);i.push({event:S,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(xa!==0){var D=T?qE(f,T):new FormData(f);ep(o,{pending:!0,data:D,method:f.method,action:m},null,D)}}else typeof m=="function"&&(S.preventDefault(),D=T?qE(f,T):new FormData(f),ep(o,{pending:!0,data:D,method:f.method,action:m},m,D))},currentTarget:f}]})}}for(var Pp=0;Pp<vm.length;Pp++){var Vp=vm[Pp],Sx=Vp.toLowerCase(),Ax=Vp[0].toUpperCase()+Vp.slice(1);gi(Sx,"on"+Ax)}gi(bv,"onAnimationEnd"),gi(wv,"onAnimationIteration"),gi(Sv,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(BC,"onTransitionRun"),gi(qC,"onTransitionStart"),gi(HC,"onTransitionCancel"),gi(Av,"onTransitionEnd"),hs("onMouseEnter",["mouseout","mouseover"]),hs("onMouseLeave",["mouseout","mouseover"]),hs("onPointerEnter",["pointerout","pointerover"]),hs("onPointerLeave",["pointerout","pointerover"]),mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mc));function HE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],f=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var T=c.length-1;0<=T;T--){var S=c[T],D=S.instance,q=S.currentTarget;if(S=S.listener,D!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch($){Lh($)}f.currentTarget=null,m=D}else for(T=0;T<c.length;T++){if(S=c[T],D=S.instance,q=S.currentTarget,S=S.listener,D!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=q;try{m(f)}catch($){Lh($)}f.currentTarget=null,m=D}}}}function Be(i,r){var o=r[Hl];o===void 0&&(o=r[Hl]=new Set);var c=i+"__bubble";o.has(c)||(GE(r,i,2,!1),o.add(c))}function Lp(i,r,o){var c=0;r&&(c|=4),GE(o,i,c,r)}var Wh="_reactListening"+Math.random().toString(36).slice(2);function jp(i){if(!i[Wh]){i[Wh]=!0,Gl.forEach(function(o){o!=="selectionchange"&&(Cx.has(o)||Lp(o,!1,i),Lp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Wh]||(r[Wh]=!0,Lp("selectionchange",!1,r))}}function GE(i,r,o,c){switch(pT(r)){case 2:var f=Jx;break;case 8:f=eR;break;default:f=Zp}o=f.bind(null,r,o,i),f=void 0,!ei||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Up(i,r,o,c,f){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var S=c.stateNode.containerInfo;if(S===f)break;if(T===4)for(T=c.return;T!==null;){var D=T.tag;if((D===3||D===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;S!==null;){if(T=us(S),T===null)return;if(D=T.tag,D===5||D===6||D===26||D===27){c=m=T;continue e}S=S.parentNode}}c=c.return}Ju(function(){var q=m,$=Jn(o),J=[];e:{var H=Cv.get(i);if(H!==void 0){var G=fo,Ce=i;switch(i){case"keypress":if(Oi(o)===0)break e;case"keydown":case"keyup":G=vo;break;case"focusin":Ce="focus",G=go;break;case"focusout":Ce="blur",G=go;break;case"beforeblur":case"afterblur":G=go;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=oh;break;case bv:case wv:case Sv:G=_o;break;case Av:G=ch;break;case"scroll":case"scrollend":G=eh;break;case"wheel":G=Eo;break;case"copy":case"cut":case"paste":G=yo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=ic;break;case"toggle":case"beforetoggle":G=hh}var be=(r&4)!==0,ht=!be&&(i==="scroll"||i==="scrollend"),U=be?H!==null?H+"Capture":null:H;be=[];for(var O=q,B;O!==null;){var Z=O;if(B=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||B===null||U===null||(Z=aa(O,U),Z!=null&&be.push(Oc(O,Z,B))),ht)break;O=O.return}0<be.length&&(H=new G(H,Ce,null,o,$),J.push({event:H,listeners:be}))}}if((r&7)===0){e:{if(H=i==="mouseover"||i==="pointerover",G=i==="mouseout"||i==="pointerout",H&&o!==ms&&(Ce=o.relatedTarget||o.fromElement)&&(us(Ce)||Ce[Wn]))break e;if((G||H)&&(H=$.window===$?$:(H=$.ownerDocument)?H.defaultView||H.parentWindow:window,G?(Ce=o.relatedTarget||o.toElement,G=q,Ce=Ce?us(Ce):null,Ce!==null&&(ht=l(Ce),be=Ce.tag,Ce!==ht||be!==5&&be!==27&&be!==6)&&(Ce=null)):(G=null,Ce=q),G!==Ce)){if(be=ti,Z="onMouseLeave",U="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(be=ic,Z="onPointerLeave",U="onPointerEnter",O="pointer"),ht=G==null?H:Ni(G),B=Ce==null?H:Ni(Ce),H=new be(Z,O+"leave",G,o,$),H.target=ht,H.relatedTarget=B,Z=null,us($)===q&&(be=new be(U,O+"enter",Ce,o,$),be.target=B,be.relatedTarget=ht,Z=be),ht=Z,G&&Ce)t:{for(be=G,U=Ce,O=0,B=be;B;B=Go(B))O++;for(B=0,Z=U;Z;Z=Go(Z))B++;for(;0<O-B;)be=Go(be),O--;for(;0<B-O;)U=Go(U),B--;for(;O--;){if(be===U||U!==null&&be===U.alternate)break t;be=Go(be),U=Go(U)}be=null}else be=null;G!==null&&YE(J,H,G,be,!1),Ce!==null&&ht!==null&&YE(J,ht,Ce,be,!0)}}e:{if(H=q?Ni(q):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var ve=hv;else if(Qt(H))if(fv)ve=UC;else{ve=LC;var je=VC}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&$l(q.elementType)&&(ve=hv):ve=jC;if(ve&&(ve=ve(i,q))){vs(J,ve,o,$);break e}je&&je(i,H,q),i==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&ir(H,"number",H.value)}switch(je=q?Ni(q):window,i){case"focusin":(Qt(je)||je.contentEditable==="true")&&(To=je,gm=q,ac=null);break;case"focusout":ac=gm=To=null;break;case"mousedown":_m=!0;break;case"contextmenu":case"mouseup":case"dragend":_m=!1,Ev(J,o,$);break;case"selectionchange":if(FC)break;case"keydown":case"keyup":Ev(J,o,$)}var Ee;if(Li)e:{switch(i){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Qe?Q(i,o)&&(we="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(v&&o.locale!=="ko"&&(Qe||we!=="onCompositionStart"?we==="onCompositionEnd"&&Qe&&(Ee=Zl()):(Mi=$,sr="value"in Mi?Mi.value:Mi.textContent,Qe=!0)),je=Zh(q,we),0<je.length&&(we=new tc(we,i,null,o,$),J.push({event:we,listeners:je}),Ee?we.data=Ee:(Ee=ce(o),Ee!==null&&(we.data=Ee)))),(Ee=_?Yt(i,o):Ke(i,o))&&(we=Zh(q,"onBeforeInput"),0<we.length&&(je=new tc("onBeforeInput","beforeinput",null,o,$),J.push({event:je,listeners:we}),je.data=Ee)),wx(J,i,q,o,$)}HE(J,r)})}function Oc(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Zh(i,r){for(var o=r+"Capture",c=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=aa(i,o),f!=null&&c.unshift(Oc(i,f,m)),f=aa(i,r),f!=null&&c.push(Oc(i,f,m))),i.tag===3)return c;i=i.return}return[]}function Go(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function YE(i,r,o,c,f){for(var m=r._reactName,T=[];o!==null&&o!==c;){var S=o,D=S.alternate,q=S.stateNode;if(S=S.tag,D!==null&&D===c)break;S!==5&&S!==26&&S!==27||q===null||(D=q,f?(q=aa(o,m),q!=null&&T.unshift(Oc(o,q,D))):f||(q=aa(o,m),q!=null&&T.push(Oc(o,q,D)))),o=o.return}T.length!==0&&i.push({event:r,listeners:T})}var xx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function QE(i){return(typeof i=="string"?i:""+i).replace(xx,`
`).replace(Rx,"")}function KE(i,r){return r=QE(r),QE(i)===r}function Jh(){}function ut(i,r,o,c,f,m){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Zn(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Zn(i,""+c);break;case"className":Di(i,"class",c);break;case"tabIndex":Di(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(i,o,c);break;case"style":Xl(i,c,m);break;case"data":if(r!=="object"){Di(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=ho(""+c),i.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&ut(i,r,"name",f.name,f,null),ut(i,r,"formEncType",f.formEncType,f,null),ut(i,r,"formMethod",f.formMethod,f,null),ut(i,r,"formTarget",f.formTarget,f,null)):(ut(i,r,"encType",f.encType,f,null),ut(i,r,"method",f.method,f,null),ut(i,r,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=ho(""+c),i.setAttribute(o,c);break;case"onClick":c!=null&&(i.onclick=Jh);break;case"onScroll":c!=null&&Be("scroll",i);break;case"onScrollEnd":c!=null&&Be("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}o=ho(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""+c):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":c===!0?i.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,c):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(o,c):i.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(o):i.setAttribute(o,c);break;case"popover":Be("beforetoggle",i),Be("toggle",i),nr(i,"popover",c);break;case"xlinkActuate":ln(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":ln(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":ln(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":ln(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":ln(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":ln(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":ln(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":ln(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":ln(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":nr(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=cm.get(o)||o,nr(i,o,c))}}function zp(i,r,o,c,f,m){switch(o){case"style":Xl(i,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof c=="string"?Zn(i,c):(typeof c=="number"||typeof c=="bigint")&&Zn(i,""+c);break;case"onScroll":c!=null&&Be("scroll",i);break;case"onScrollEnd":c!=null&&Be("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Jh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ao.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Vt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof c=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,c,f);break e}o in i?i[o]=c:c===!0?i.setAttribute(o,""):nr(i,o,c)}}}function fn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",i),Be("load",i);var c=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var T=o[m];if(T!=null)switch(m){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ut(i,r,m,T,o,null)}}f&&ut(i,r,"srcSet",o.srcSet,o,null),c&&ut(i,r,"src",o.src,o,null);return;case"input":Be("invalid",i);var S=m=T=f=null,D=null,q=null;for(c in o)if(o.hasOwnProperty(c)){var $=o[c];if($!=null)switch(c){case"name":f=$;break;case"type":T=$;break;case"checked":D=$;break;case"defaultChecked":q=$;break;case"value":m=$;break;case"defaultValue":S=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,r));break;default:ut(i,r,c,$,o,null)}}ia(i,m,S,D,q,T,f,!1),uo(i);return;case"select":Be("invalid",i),c=T=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":T=S;break;case"multiple":c=S;default:ut(i,r,f,S,o,null)}r=m,o=T,i.multiple=!!c,r!=null?ds(i,!!c,r,!1):o!=null&&ds(i,!!c,o,!0);return;case"textarea":Be("invalid",i),m=f=c=null;for(T in o)if(o.hasOwnProperty(T)&&(S=o[T],S!=null))switch(T){case"value":c=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ut(i,r,T,S,o,null)}sa(i,c,f,m),uo(i);return;case"option":for(D in o)if(o.hasOwnProperty(D)&&(c=o[D],c!=null))switch(D){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ut(i,r,D,c,o,null)}return;case"dialog":Be("beforetoggle",i),Be("toggle",i),Be("cancel",i),Be("close",i);break;case"iframe":case"object":Be("load",i);break;case"video":case"audio":for(c=0;c<Mc.length;c++)Be(Mc[c],i);break;case"image":Be("error",i),Be("load",i);break;case"details":Be("toggle",i);break;case"embed":case"source":case"link":Be("error",i),Be("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(c=o[q],c!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ut(i,r,q,c,o,null)}return;default:if($l(r)){for($ in o)o.hasOwnProperty($)&&(c=o[$],c!==void 0&&zp(i,r,$,c,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(c=o[S],c!=null&&ut(i,r,S,c,o,null))}function Ix(i,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,T=null,S=null,D=null,q=null,$=null;for(G in o){var J=o[G];if(o.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":D=J;default:c.hasOwnProperty(G)||ut(i,r,G,null,c,J)}}for(var H in c){var G=c[H];if(J=o[H],c.hasOwnProperty(H)&&(G!=null||J!=null))switch(H){case"type":m=G;break;case"name":f=G;break;case"checked":q=G;break;case"defaultChecked":$=G;break;case"value":T=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==J&&ut(i,r,H,G,c,J)}}Fn(i,T,S,D,q,$,m,f);return;case"select":G=T=S=H=null;for(m in o)if(D=o[m],o.hasOwnProperty(m)&&D!=null)switch(m){case"value":break;case"multiple":G=D;default:c.hasOwnProperty(m)||ut(i,r,m,null,c,D)}for(f in c)if(m=c[f],D=o[f],c.hasOwnProperty(f)&&(m!=null||D!=null))switch(f){case"value":H=m;break;case"defaultValue":S=m;break;case"multiple":T=m;default:m!==D&&ut(i,r,f,m,c,D)}r=S,o=T,c=G,H!=null?ds(i,!!o,H,!1):!!c!=!!o&&(r!=null?ds(i,!!o,r,!0):ds(i,!!o,o?[]:"",!1));return;case"textarea":G=H=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!c.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ut(i,r,S,null,c,f)}for(T in c)if(f=c[T],m=o[T],c.hasOwnProperty(T)&&(f!=null||m!=null))switch(T){case"value":H=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ut(i,r,T,f,c,m)}lt(i,H,G);return;case"option":for(var Ce in o)if(H=o[Ce],o.hasOwnProperty(Ce)&&H!=null&&!c.hasOwnProperty(Ce))switch(Ce){case"selected":i.selected=!1;break;default:ut(i,r,Ce,null,c,H)}for(D in c)if(H=c[D],G=o[D],c.hasOwnProperty(D)&&H!==G&&(H!=null||G!=null))switch(D){case"selected":i.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:ut(i,r,D,H,c,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in o)H=o[be],o.hasOwnProperty(be)&&H!=null&&!c.hasOwnProperty(be)&&ut(i,r,be,null,c,H);for(q in c)if(H=c[q],G=o[q],c.hasOwnProperty(q)&&H!==G&&(H!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:ut(i,r,q,H,c,G)}return;default:if($l(r)){for(var ht in o)H=o[ht],o.hasOwnProperty(ht)&&H!==void 0&&!c.hasOwnProperty(ht)&&zp(i,r,ht,void 0,c,H);for($ in c)H=c[$],G=o[$],!c.hasOwnProperty($)||H===G||H===void 0&&G===void 0||zp(i,r,$,H,c,G);return}}for(var U in o)H=o[U],o.hasOwnProperty(U)&&H!=null&&!c.hasOwnProperty(U)&&ut(i,r,U,null,c,H);for(J in c)H=c[J],G=o[J],!c.hasOwnProperty(J)||H===G||H==null&&G==null||ut(i,r,J,H,c,G)}var Fp=null,Bp=null;function ef(i){return i.nodeType===9?i:i.ownerDocument}function XE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $E(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function qp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Hp=null;function Nx(){var i=window.event;return i&&i.type==="popstate"?i===Hp?!1:(Hp=i,!0):(Hp=null,!1)}var WE=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,ZE=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof ZE<"u"?function(i){return ZE.resolve(null).then(i).catch(Mx)}:WE;function Mx(i){setTimeout(function(){throw i})}function Er(i){return i==="head"}function JE(i,r){var o=r,c=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var T=i.ownerDocument;if(o&1&&Pc(T.documentElement),o&2&&Pc(T.body),o&4)for(o=T.head,Pc(o),T=o.firstChild;T;){var S=T.nextSibling,D=T.nodeName;T[Jr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=S}}if(f===0){i.removeChild(m),qc(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);qc(r)}function Gp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Gp(o),tr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function Ox(i,r,o,c){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Jr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=yi(i.nextSibling),i===null)break}return null}function Px(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=yi(i.nextSibling),i===null))return null;return i}function Yp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function Vx(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var c=function(){r(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function yi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Qp=null;function eT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function tT(i,r,o){switch(r=ef(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Pc(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);tr(i)}var li=new Map,nT=new Set;function tf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var ks=ae.d;ae.d={f:Lx,r:jx,D:Ux,C:zx,L:Fx,m:Bx,X:Hx,S:qx,M:Gx};function Lx(){var i=ks.f(),r=Yh();return i||r}function jx(i){var r=Ii(i);r!==null&&r.tag===5&&r.type==="form"?b0(r):ks.r(i)}var Yo=typeof document>"u"?null:document;function iT(i,r,o){var c=Yo;if(c&&typeof r=="string"&&r){var f=Lt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),nT.has(f)||(nT.add(f),i={rel:i,crossOrigin:o,href:r},c.querySelector(f)===null&&(r=c.createElement("link"),fn(r,"link",i),It(r),c.head.appendChild(r)))}}function Ux(i){ks.D(i),iT("dns-prefetch",i,null)}function zx(i,r){ks.C(i,r),iT("preconnect",i,r)}function Fx(i,r,o){ks.L(i,r,o);var c=Yo;if(c&&i&&r){var f='link[rel="preload"][as="'+Lt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Lt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Lt(o.imageSizes)+'"]')):f+='[href="'+Lt(i)+'"]';var m=f;switch(r){case"style":m=Qo(i);break;case"script":m=Ko(i)}li.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),li.set(m,i),c.querySelector(f)!==null||r==="style"&&c.querySelector(Vc(m))||r==="script"&&c.querySelector(Lc(m))||(r=c.createElement("link"),fn(r,"link",i),It(r),c.head.appendChild(r)))}}function Bx(i,r){ks.m(i,r);var o=Yo;if(o&&i){var c=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Lt(c)+'"][href="'+Lt(i)+'"]',m=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ko(i)}if(!li.has(m)&&(i=y({rel:"modulepreload",href:i},r),li.set(m,i),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Lc(m)))return}c=o.createElement("link"),fn(c,"link",i),It(c),o.head.appendChild(c)}}}function qx(i,r,o){ks.S(i,r,o);var c=Yo;if(c&&i){var f=An(c).hoistableStyles,m=Qo(i);r=r||"default";var T=f.get(m);if(!T){var S={loading:0,preload:null};if(T=c.querySelector(Vc(m)))S.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=li.get(m))&&Kp(i,o);var D=T=c.createElement("link");It(D),fn(D,"link",i),D._p=new Promise(function(q,$){D.onload=q,D.onerror=$}),D.addEventListener("load",function(){S.loading|=1}),D.addEventListener("error",function(){S.loading|=2}),S.loading|=4,nf(T,r,c)}T={type:"stylesheet",instance:T,count:1,state:S},f.set(m,T)}}}function Hx(i,r){ks.X(i,r);var o=Yo;if(o&&i){var c=An(o).hoistableScripts,f=Ko(i),m=c.get(f);m||(m=o.querySelector(Lc(f)),m||(i=y({src:i,async:!0},r),(r=li.get(f))&&Xp(i,r),m=o.createElement("script"),It(m),fn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function Gx(i,r){ks.M(i,r);var o=Yo;if(o&&i){var c=An(o).hoistableScripts,f=Ko(i),m=c.get(f);m||(m=o.querySelector(Lc(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=li.get(f))&&Xp(i,r),m=o.createElement("script"),It(m),fn(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function sT(i,r,o,c){var f=(f=Se.current)?tf(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Qo(o.href),o=An(f).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Qo(o.href);var m=An(f).hoistableStyles,T=m.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,T),(m=f.querySelector(Vc(i)))&&!m._p&&(T.instance=m,T.state.loading=5),li.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},li.set(i,o),m||Yx(f,i,o,T.state))),r&&c===null)throw Error(s(528,""));return T}if(r&&c!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ko(o),o=An(f).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Qo(i){return'href="'+Lt(i)+'"'}function Vc(i){return'link[rel="stylesheet"]['+i+"]"}function rT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function Yx(i,r,o,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),fn(r,"link",o),It(r),i.head.appendChild(r))}function Ko(i){return'[src="'+Lt(i)+'"]'}function Lc(i){return"script[async]"+i}function aT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+Lt(o.href)+'"]');if(c)return r.instance=c,It(c),c;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),It(c),fn(c,"style",f),nf(c,o.precedence,i),r.instance=c;case"stylesheet":f=Qo(o.href);var m=i.querySelector(Vc(f));if(m)return r.state.loading|=4,r.instance=m,It(m),m;c=rT(o),(f=li.get(f))&&Kp(c,f),m=(i.ownerDocument||i).createElement("link"),It(m);var T=m;return T._p=new Promise(function(S,D){T.onload=S,T.onerror=D}),fn(m,"link",c),r.state.loading|=4,nf(m,o.precedence,i),r.instance=m;case"script":return m=Ko(o.src),(f=i.querySelector(Lc(m)))?(r.instance=f,It(f),f):(c=o,(f=li.get(m))&&(c=y({},o),Xp(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),It(f),fn(f,"link",c),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,nf(c,o.precedence,i));return r.instance}function nf(i,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,m=f,T=0;T<c.length;T++){var S=c[T];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Kp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Xp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var sf=null;function oT(i,r,o){if(sf===null){var c=new Map,f=sf=new Map;f.set(o,c)}else f=sf,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(i))return c;for(c.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Jr]||m[Gt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(r)||"";T=i+T;var S=c.get(T);S?S.push(m):c.set(T,[m])}}return c}function lT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function Qx(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function cT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var jc=null;function Kx(){}function Xx(i,r,o){if(jc===null)throw Error(s(475));var c=jc;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Qo(o.href),m=i.querySelector(Vc(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=rf.bind(c),i.then(c,c)),r.state.loading|=4,r.instance=m,It(m);return}m=i.ownerDocument||i,o=rT(o),(f=li.get(f))&&Kp(o,f),m=m.createElement("link"),It(m);var T=m;T._p=new Promise(function(S,D){T.onload=S,T.onerror=D}),fn(m,"link",o),r.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=rf.bind(c),i.addEventListener("load",r),i.addEventListener("error",r))}}function $x(){if(jc===null)throw Error(s(475));var i=jc;return i.stylesheets&&i.count===0&&$p(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&$p(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function rf(){if(this.count--,this.count===0){if(this.stylesheets)$p(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var af=null;function $p(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,af=new Map,r.forEach(Wx,i),af=null,rf.call(i))}function Wx(i,r){if(!(r.state.loading&4)){var o=af.get(i);if(o)var c=o.get(null);else{o=new Map,af.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var T=f[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),c=T)}c&&o.set(null,c)}f=r.instance,T=f.getAttribute("data-precedence"),m=o.get(T)||c,m===c&&o.set(null,f),o.set(T,f),this.count++,c=rf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var Uc={$$typeof:ie,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function Zx(i,r,o,c,f,m,T,S){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function uT(i,r,o,c,f,m,T,S,D,q,$,J){return i=new Zx(i,r,o,T,S,D,q,J),r=1,m===!0&&(r|=24),m=qn(3,null,null,r),i.current=m,m.stateNode=i,r=Dm(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:r},Pm(m),i}function hT(i){return i?(i=Ao,i):Ao}function fT(i,r,o,c,f,m){f=hT(f),c.context===null?c.context=f:c.pendingContext=f,c=or(r),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=lr(i,c,r),o!==null&&(Kn(o,i,r),pc(o,i,r))}function dT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Wp(i,r){dT(i,r),(i=i.alternate)&&dT(i,r)}function mT(i){if(i.tag===13){var r=So(i,67108864);r!==null&&Kn(r,i,67108864),Wp(i,67108864)}}var of=!0;function Jx(i,r,o,c){var f=K.T;K.T=null;var m=ae.p;try{ae.p=2,Zp(i,r,o,c)}finally{ae.p=m,K.T=f}}function eR(i,r,o,c){var f=K.T;K.T=null;var m=ae.p;try{ae.p=8,Zp(i,r,o,c)}finally{ae.p=m,K.T=f}}function Zp(i,r,o,c){if(of){var f=Jp(c);if(f===null)Up(i,r,c,lf,o),gT(i,c);else if(nR(f,i,r,o,c))c.stopPropagation();else if(gT(i,c),r&4&&-1<tR.indexOf(i)){for(;f!==null;){var m=Ii(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=di(m.pendingLanes);if(T!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;T;){var D=1<<31-Je(T);S.entanglements[1]|=D,T&=~D}qi(m),(rt&6)===0&&(Hh=kn()+500,kc(0))}}break;case 13:S=So(m,2),S!==null&&Kn(S,m,2),Yh(),Wp(m,2)}if(m=Jp(c),m===null&&Up(i,r,c,lf,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else Up(i,r,c,null,o)}}function Jp(i){return i=Jn(i),eg(i)}var lf=null;function eg(i){if(lf=null,i=us(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=u(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return lf=i,null}function pT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jl()){case Wr:return 2;case Xs:return 8;case rs:case $s:return 32;case Ci:return 268435456;default:return 32}default:return 32}}var tg=!1,Tr=null,br=null,wr=null,zc=new Map,Fc=new Map,Sr=[],tR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gT(i,r){switch(i){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":zc.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fc.delete(r.pointerId)}}function Bc(i,r,o,c,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ii(r),r!==null&&mT(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function nR(i,r,o,c,f){switch(r){case"focusin":return Tr=Bc(Tr,i,r,o,c,f),!0;case"dragenter":return br=Bc(br,i,r,o,c,f),!0;case"mouseover":return wr=Bc(wr,i,r,o,c,f),!0;case"pointerover":var m=f.pointerId;return zc.set(m,Bc(zc.get(m)||null,i,r,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Fc.set(m,Bc(Fc.get(m)||null,i,r,o,c,f)),!0}return!1}function _T(i){var r=us(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=u(o),r!==null){i.blockedOn=r,Yu(i.priority,function(){if(o.tag===13){var c=Qn();c=Zs(c);var f=So(o,c);f!==null&&Kn(f,o,c),Wp(o,c)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function cf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Jp(i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);ms=c,o.target.dispatchEvent(c),ms=null}else return r=Ii(o),r!==null&&mT(r),i.blockedOn=o,!1;r.shift()}return!0}function yT(i,r,o){cf(i)&&o.delete(r)}function iR(){tg=!1,Tr!==null&&cf(Tr)&&(Tr=null),br!==null&&cf(br)&&(br=null),wr!==null&&cf(wr)&&(wr=null),zc.forEach(yT),Fc.forEach(yT)}function uf(i,r){i.blockedOn===r&&(i.blockedOn=null,tg||(tg=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,iR)))}var hf=null;function vT(i){hf!==i&&(hf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){hf===i&&(hf=null);for(var r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],f=i[r+2];if(typeof c!="function"){if(eg(c||o)===null)continue;break}var m=Ii(o);m!==null&&(i.splice(r,3),r-=3,ep(m,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function qc(i){function r(D){return uf(D,i)}Tr!==null&&uf(Tr,i),br!==null&&uf(br,i),wr!==null&&uf(wr,i),zc.forEach(r),Fc.forEach(r);for(var o=0;o<Sr.length;o++){var c=Sr[o];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Sr.length&&(o=Sr[0],o.blockedOn===null);)_T(o),o.blockedOn===null&&Sr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],m=o[c+1],T=f[Vt]||null;if(typeof m=="function")T||vT(o);else if(T){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,T=m[Vt]||null)S=T.formAction;else if(eg(f)!==null)continue}else S=T.action;typeof S=="function"?o[c+1]=S:(o.splice(c,3),c-=3),vT(o)}}}function ng(i){this._internalRoot=i}ff.prototype.render=ng.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,c=Qn();fT(o,c,i,r,null,null)},ff.prototype.unmount=ng.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;fT(i.current,2,null,i,null,null),Yh(),r[Wn]=null}};function ff(i){this._internalRoot=i}ff.prototype.unstable_scheduleHydration=function(i){if(i){var r=Js();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Sr.length&&r!==0&&r<Sr[o].priority;o++);Sr.splice(o,0,i),o===0&&_T(i)}};var ET=e.version;if(ET!=="19.1.1")throw Error(s(527,ET,"19.1.1"));ae.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var sR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var df=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!df.isDisabled&&df.supportsFiber)try{le=df.inject(sR),me=df}catch{}}return Gc.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,c="",f=V0,m=L0,T=j0,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=uT(i,1,!1,null,null,o,c,f,m,T,S,null),i[Wn]=r.current,jp(i),new ng(r)},Gc.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var c=!1,f="",m=V0,T=L0,S=j0,D=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(D=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),r=uT(i,1,!0,r,o??null,c,f,m,T,S,D,q),r.context=hT(null),o=r.current,c=Qn(),c=Zs(c),f=or(c),f.callback=null,lr(o,f,c),o=c,r.current.lanes=o,cs(r,o),qi(r),i[Wn]=r.current,jp(i),new ff(r)},Gc.version="19.1.1",Gc}var NT;function mR(){if(NT)return rg.exports;NT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),rg.exports=dR(),rg.exports}var pR=mR();const gR=()=>{};var DT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ue=function(n,e){if(!n)throw Al(e)},Al=function(n){return new Error("Firebase Database ("+K1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},_R=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(u&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,b=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,R=g&63;p||(R=64,u||(w=64)),s.push(t[y],t[b],t[w],t[R])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(X1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_R(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const b=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||b==null)throw new yR;const w=l<<2|d>>4;if(s.push(w),g!==64){const R=d<<4&240|g>>2;if(s.push(R),b!==64){const N=g<<6&192|b;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $1=function(n){const e=X1(n);return E_.encodeByteArray(e,!0)},Of=function(n){return $1(n).replace(/\./g,"")},Pf=function(n){try{return E_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(n){return W1(void 0,n)}function W1(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ER(t)||(n[t]=W1(n[t],e[t]));return n}function ER(n){return n!=="__proto__"}/**
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
 */function TR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bR=()=>TR().__FIREBASE_DEFAULTS__,wR=()=>{if(typeof process>"u"||typeof DT>"u")return;const n=DT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},SR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pf(n[1]);return e&&JSON.parse(e)},Td=()=>{try{return gR()||bR()||wR()||SR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Z1=n=>Td()?.emulatorHosts?.[n],J1=n=>{const e=Z1(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ew=()=>Td()?.config,tw=n=>Td()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Yr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function T_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function nw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Of(JSON.stringify(t)),Of(JSON.stringify(u)),""].join(".")}const eu={};function AR(){const n={prod:[],emulator:[]};for(const e of Object.keys(eu))eu[e]?n.emulator.push(e):n.prod.push(e);return n}function CR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let kT=!1;function b_(n,e){if(typeof window>"u"||typeof document>"u"||!Yr(window.location.host)||eu[n]===e||eu[n]||kT)return;eu[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=AR().prod.length>0;function u(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,R){w.setAttribute("width","24"),w.setAttribute("id",R),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{kT=!0,u()},w}function y(w,R){w.setAttribute("id",R),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function b(){const w=CR(s),R=t("text"),N=document.getElementById(R)||document.createElement("span"),L=t("learnmore"),z=document.getElementById(L)||document.createElement("a"),re=t("preprendIcon"),ne=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ie=w.element;d(ie),y(z,L);const pe=g();p(ne,re),ie.append(ne,N,z,pe),document.body.appendChild(ie)}l?(N.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bn())}function xR(){const n=Td()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NR(){const n=bn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function DR(){return K1.NODE_ADMIN===!0}function kR(){return!xR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MR(){try{return typeof indexedDB=="object"}catch{return!1}}function OR(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="FirebaseError";class Qs extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=PR,Object.setPrototypeOf(this,Qs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ru.prototype.create)}}class Ru{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?VR(l,s):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new Qs(a,d,s)}}function VR(n,e){return n.replace(LR,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const LR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n){return JSON.parse(n)}function an(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=fu(Pf(l[0])||""),t=fu(Pf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},jR=function(n){const e=sw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},UR=function(n){const e=sw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let b=0;b<16;b++)s[b]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let b=0;b<16;b++)s[b]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let b=16;b<80;b++){const w=s[b-3]^s[b-8]^s[b-14]^s[b-16];s[b]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let b=0;b<80;b++){b<40?b<20?(g=d^l&(u^d),y=1518500249):(g=l^u^d,y=1859775393):b<60?(g=l&u|d&(l|u),y=2400959708):(g=l^u^d,y=3395469782);const w=(a<<5|a>>>27)+g+p+y+s[b]&4294967295;p=d,d=u,u=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<t;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function FR(n,e){const t=new BR(n,e);return t.subscribe.bind(t)}class BR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");qR(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=cg),a.error===void 0&&(a.error=cg),a.complete===void 0&&(a.complete=cg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function cg(){}function ul(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ue(s<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(s)-56320;a=65536+(l<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},bd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function gt(n){return n&&n._delegate?n._delegate:n}class Lr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class GR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Os;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:Ra})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ra){return this.instances.has(e)}getOptions(e=Ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&u.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:YR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ra){return this.component?this.component.multipleInstances?e:Ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YR(n){return n===Ra?void 0:n}function QR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new GR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(qe||(qe={}));const XR={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},$R=qe.INFO,WR={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},ZR=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=WR[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wd{constructor(e){this.name=e,this._logLevel=$R,this._logHandler=ZR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const JR=(n,e)=>e.some(t=>n instanceof t);let OT,PT;function eI(){return OT||(OT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tI(){return PT||(PT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rw=new WeakMap,Dg=new WeakMap,aw=new WeakMap,ug=new WeakMap,S_=new WeakMap;function nI(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Dr(n.result)),a()},u=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&rw.set(t,n)}).catch(()=>{}),S_.set(e,n),e}function iI(n){if(Dg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Dg.set(n,e)}let kg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Dg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||aw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sI(n){kg=n(kg)}function rI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(hg(this),e,...t);return aw.set(s,e.sort?e.sort():[e]),Dr(s)}:tI().includes(n)?function(...e){return n.apply(hg(this),e),Dr(rw.get(this))}:function(...e){return Dr(n.apply(hg(this),e))}}function aI(n){return typeof n=="function"?rI(n):(n instanceof IDBTransaction&&iI(n),JR(n,eI())?new Proxy(n,kg):n)}function Dr(n){if(n instanceof IDBRequest)return nI(n);if(ug.has(n))return ug.get(n);const e=aI(n);return e!==n&&(ug.set(n,e),S_.set(e,n)),e}const hg=n=>S_.get(n);function oI(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),d=Dr(u);return s&&u.addEventListener("upgradeneeded",p=>{s(Dr(u.result),p.oldVersion,p.newVersion,Dr(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const lI=["get","getKey","getAll","getAllKeys","count"],cI=["put","add","delete","clear"],fg=new Map;function VT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fg.get(e))return fg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=cI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||lI.includes(t)))return;const l=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return fg.set(e,l),l}sI(n=>({...n,get:(e,t,s)=>VT(e,t)||n.get(e,t,s),has:(e,t)=>!!VT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function hI(n){return n.getComponent()?.type==="VERSION"}const Mg="@firebase/app",LT="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new wd("@firebase/app"),fI="@firebase/app-compat",dI="@firebase/analytics-compat",mI="@firebase/analytics",pI="@firebase/app-check-compat",gI="@firebase/app-check",_I="@firebase/auth",yI="@firebase/auth-compat",vI="@firebase/database",EI="@firebase/data-connect",TI="@firebase/database-compat",bI="@firebase/functions",wI="@firebase/functions-compat",SI="@firebase/installations",AI="@firebase/installations-compat",CI="@firebase/messaging",xI="@firebase/messaging-compat",RI="@firebase/performance",II="@firebase/performance-compat",NI="@firebase/remote-config",DI="@firebase/remote-config-compat",kI="@firebase/storage",MI="@firebase/storage-compat",OI="@firebase/firestore",PI="@firebase/ai",VI="@firebase/firestore-compat",LI="firebase",jI="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="[DEFAULT]",UI={[Mg]:"fire-core",[fI]:"fire-core-compat",[mI]:"fire-analytics",[dI]:"fire-analytics-compat",[gI]:"fire-app-check",[pI]:"fire-app-check-compat",[_I]:"fire-auth",[yI]:"fire-auth-compat",[vI]:"fire-rtdb",[EI]:"fire-data-connect",[TI]:"fire-rtdb-compat",[bI]:"fire-fn",[wI]:"fire-fn-compat",[SI]:"fire-iid",[AI]:"fire-iid-compat",[CI]:"fire-fcm",[xI]:"fire-fcm-compat",[RI]:"fire-perf",[II]:"fire-perf-compat",[NI]:"fire-rc",[DI]:"fire-rc-compat",[kI]:"fire-gcs",[MI]:"fire-gcs-compat",[OI]:"fire-fst",[VI]:"fire-fst-compat",[PI]:"fire-vertex","fire-js":"fire-js",[LI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map,zI=new Map,Pg=new Map;function jT(n,e){try{n.container.addComponent(e)}catch(t){Fs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fa(n){const e=n.name;if(Pg.has(e))return Fs.debug(`There were multiple attempts to register component ${e}.`),!1;Pg.set(e,n);for(const t of jf.values())jT(t,n);for(const t of zI.values())jT(t,n);return!0}function Sd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ci(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new Ru("app","Firebase",FI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=jI;function ow(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Og,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw kr.create("bad-app-name",{appName:String(a)});if(t||(t=ew()),!t)throw kr.create("no-options");const l=jf.get(a);if(l){if(Wi(t,l.options)&&Wi(s,l.config))return l;throw kr.create("duplicate-app",{appName:a})}const u=new KR(a);for(const p of Pg.values())u.addComponent(p);const d=new BI(t,s,u);return jf.set(a,d),d}function A_(n=Og){const e=jf.get(n);if(!e&&n===Og&&ew())return ow();if(!e)throw kr.create("no-app",{appName:n});return e}function Gi(n,e,t){let s=UI[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fs.warn(u.join(" "));return}Fa(new Lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const qI="firebase-heartbeat-database",HI=1,du="firebase-heartbeat-store";let dg=null;function lw(){return dg||(dg=oI(qI,HI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(du)}catch(t){console.warn(t)}}}}).catch(n=>{throw kr.create("idb-open",{originalErrorMessage:n.message})})),dg}async function GI(n){try{const t=(await lw()).transaction(du),s=await t.objectStore(du).get(cw(n));return await t.done,s}catch(e){if(e instanceof Qs)Fs.warn(e.message);else{const t=kr.create("idb-get",{originalErrorMessage:e?.message});Fs.warn(t.message)}}}async function UT(n,e){try{const s=(await lw()).transaction(du,"readwrite");await s.objectStore(du).put(e,cw(n)),await s.done}catch(t){if(t instanceof Qs)Fs.warn(t.message);else{const s=kr.create("idb-set",{originalErrorMessage:t?.message});Fs.warn(s.message)}}}function cw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const YI=1024,QI=30;class KI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $I(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zT();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>QI){const a=WI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Fs.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zT(),{heartbeatsToSend:t,unsentEntries:s}=XI(this._heartbeatsCache.heartbeats),a=Of(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Fs.warn(e),""}}}function zT(){return new Date().toISOString().substring(0,10)}function XI(n,e=YI){const t=[];let s=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),FT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),FT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MR()?OR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return UT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return UT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function FT(n){return Of(JSON.stringify({version:2,heartbeats:n})).length}function WI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n){Fa(new Lr("platform-logger",e=>new uI(e),"PRIVATE")),Fa(new Lr("heartbeat",e=>new KI(e),"PRIVATE")),Gi(Mg,LT,n),Gi(Mg,LT,"esm2020"),Gi("fire-js","")}ZI("");var JI="firebase",eN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gi(JI,eN,"app");function uw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tN=uw,hw=new Ru("auth","Firebase",uw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new wd("@firebase/auth");function nN(n,...e){Uf.logLevel<=qe.WARN&&Uf.warn(`Auth (${$a}): ${n}`,...e)}function bf(n,...e){Uf.logLevel<=qe.ERROR&&Uf.error(`Auth (${$a}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,...e){throw x_(n,...e)}function bi(n,...e){return x_(n,...e)}function C_(n,e,t){const s={...tN(),[e]:t};return new Ru("auth","Firebase",s).create(e,{appName:n.name})}function Pa(n){return C_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Zi(n,"argument-error"),C_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function x_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return hw.create(n,...e)}function Ie(n,e,...t){if(!n)throw x_(e,...t)}function Vs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bf(e),new Error(e)}function Bs(n,e){n||Vs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return typeof self<"u"&&self.location?.href||""}function sN(){return BT()==="http:"||BT()==="https:"}function BT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sN()||IR()||"connection"in navigator)?navigator.onLine:!0}function aN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bs(t>e,"Short delay should be less than long delay!"),this.isMobile=w_()||iw()}get(){return rN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n,e){Bs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cN=new Iu(3e4,6e4);function I_(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function xl(n,e,t,s,a={}){return dw(n,a,async()=>{let l={},u={};s&&(e==="GET"?u=s:l={body:JSON.stringify(s)});const d=Cl({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return RR()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Yr(n.emulatorConfig.host)&&(g.credentials="include"),fw.fetch()(await mw(n,n.config.apiHost,t,d),g)})}async function dw(n,e,t){n._canInitEmulator=!1;const s={...oN,...e};try{const a=new hN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw mf(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const d=l.ok?u.errorMessage:u.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw mf(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw mf(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw mf(n,"user-disabled",u);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw C_(n,y,g);Zi(n,y)}}catch(a){if(a instanceof Qs)throw a;Zi(n,"network-request-failed",{message:String(a)})}}async function uN(n,e,t,s,a={}){const l=await xl(n,e,t,s,a);return"mfaPendingCredential"in l&&Zi(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function mw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,u=l.config.emulator?R_(n.config,a):`${n.config.apiScheme}://${a}`;return lN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}class hN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(bi(this.auth,"network-request-failed")),cN.get())})}}function mf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=bi(n,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(n,e){return xl(n,"POST","/v1/accounts:delete",e)}async function zf(n,e){return xl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dN(n,e=!1){const t=gt(n),s=await t.getIdToken(e),a=N_(s);Ie(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l?.sign_in_provider;return{claims:a,token:s,authTime:tu(mg(a.auth_time)),issuedAtTime:tu(mg(a.iat)),expirationTime:tu(mg(a.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function mg(n){return Number(n)*1e3}function N_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return bf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Pf(t);return a?JSON.parse(a):(bf("Failed to decode base64 JWT payload"),null)}catch(a){return bf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function qT(n){const e=N_(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Qs&&mN(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function mN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Ff(n){const e=n.auth,t=await n.getIdToken(),s=await mu(n,zf(e,{idToken:t}));Ie(s?.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=a.providerUserInfo?.length?pw(a.providerUserInfo):[],u=_N(n.providerData,l),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!u?.length,g=d?p:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Lg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function gN(n){const e=gt(n);await Ff(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _N(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function pw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(n,e){const t=await dw(n,{},async()=>{const s=Cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await mw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Yr(n.emulatorConfig.host)&&(p.credentials="include"),fw.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vN(n,e){return xl(n,"POST","/v2/accounts:revokeToken",I_(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=qT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await yN(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,u=new nl;return s&&(Ie(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(Ie(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(Ie(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nl,this.toJSON())}_performRefresh(){return Vs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ei{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new pN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Lg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await mu(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dN(this,e)}reload(){return gN(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ei({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ff(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ci(this.auth.app))return Promise.reject(Pa(this.auth));const e=await this.getIdToken();return await mu(this,fN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,d=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:b,emailVerified:w,isAnonymous:R,providerData:N,stsTokenManager:L}=t;Ie(b&&L,e,"internal-error");const z=nl.fromJSON(this.name,L);Ie(typeof b=="string",e,"internal-error"),Cr(s,e.name),Cr(a,e.name),Ie(typeof w=="boolean",e,"internal-error"),Ie(typeof R=="boolean",e,"internal-error"),Cr(l,e.name),Cr(u,e.name),Cr(d,e.name),Cr(p,e.name),Cr(g,e.name),Cr(y,e.name);const re=new Ei({uid:b,auth:e,email:a,emailVerified:w,displayName:s,isAnonymous:R,photoURL:u,phoneNumber:l,tenantId:d,stsTokenManager:z,createdAt:g,lastLoginAt:y});return N&&Array.isArray(N)&&(re.providerData=N.map(ne=>({...ne}))),p&&(re._redirectEventId=p),re}static async _fromIdTokenResponse(e,t,s=!1){const a=new nl;a.updateFromServerResponse(t);const l=new Ei({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Ff(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ie(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?pw(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!l?.length,d=new nl;d.updateFromIdToken(s);const p=new Ei({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Lg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new Map;function Ls(n){Bs(n instanceof Function,"Expected a class definition");let e=HT.get(n);return e?(Bs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,HT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function wf(n,e,t){return`firebase:${n}:${e}:${t}`}class il{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=wf(this.userKey,a.apiKey,l),this.fullPersistenceKey=wf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zf(this.auth,{idToken:e}).catch(()=>{});return t?Ei._fromGetAccountInfoResponse(this.auth,t,e):null}return Ei._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new il(Ls(GT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ls(GT);const u=wf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(u);if(y){let b;if(typeof y=="string"){const w=await zf(e,{idToken:y}).catch(()=>{});if(!w)break;b=await Ei._fromGetAccountInfoResponse(e,w,y)}else b=Ei._fromJSON(e,y);g!==l&&(d=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new il(l,e,s):(l=p[0],d&&await l._set(u,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(u)}catch{}})),new il(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bw(e))return"Blackberry";if(ww(e))return"Webos";if(yw(e))return"Safari";if((e.includes("chrome/")||vw(e))&&!e.includes("edge/"))return"Chrome";if(Tw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function _w(n=bn()){return/firefox\//i.test(n)}function yw(n=bn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vw(n=bn()){return/crios\//i.test(n)}function Ew(n=bn()){return/iemobile/i.test(n)}function Tw(n=bn()){return/android/i.test(n)}function bw(n=bn()){return/blackberry/i.test(n)}function ww(n=bn()){return/webos/i.test(n)}function D_(n=bn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function EN(n=bn()){return D_(n)&&!!window.navigator?.standalone}function TN(){return NR()&&document.documentMode===10}function Sw(n=bn()){return D_(n)||Tw(n)||ww(n)||bw(n)||/windows phone/i.test(n)||Ew(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n,e=[]){let t;switch(n){case"Browser":t=YT(bn());break;case"Worker":t=`${YT(bn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$a}/${s}`}/**
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
 */class bN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((u,d)=>{try{const p=e(l);u(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function wN(n,e={}){return xl(n,"GET","/v2/passwordPolicy",I_(n,e))}/**
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
 */const SN=6;class AN{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??SN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new QT(this),this.idTokenSubscription=new QT(this),this.beforeStateQueue=new bN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ls(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await il.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zf(this,{idToken:e}),s=await Ei._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ci(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=s?._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===u)&&d?.user&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ff(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ci(this.app))return Promise.reject(Pa(this));const t=e?gt(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ci(this.app)?Promise.reject(Pa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ci(this.app)?Promise.reject(Pa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ls(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wN(this),t=new AN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ru("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await vN(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ls(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await il.create(this,[Ls(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(d,this,"internal-error"),d.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Aw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(ci(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&nN(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ad(n){return gt(n)}class QT{constructor(e){this.auth=e,this.observer=null,this.addObserver=FR(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k_={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xN(n){k_=n}function RN(n){return k_.loadJS(n)}function IN(){return k_.gapiScript}function NN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(n,e){const t=Sd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Wi(l,e??{}))return a;Zi(a,"already-initialized")}return t.initialize({options:e})}function kN(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ls);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function MN(n,e,t){const s=Ad(n);Ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=Cw(e),{host:u,port:d}=ON(e),p=d===null?"":`:${d}`,g={url:`${l}//${u}${p}/`},y=Object.freeze({host:u,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ie(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ie(Wi(g,s.config.emulator)&&Wi(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Yr(u)?(T_(`${l}//${u}${p}`),b_("Auth",!0)):PN()}function Cw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ON(n){const e=Cw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:KT(s.substr(l.length+1))}}else{const[l,u]=s.split(":");return{host:l,port:KT(u)}}}function KT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function PN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vs("not implemented")}_getIdTokenResponse(e){return Vs("not implemented")}_linkToIdToken(e,t){return Vs("not implemented")}_getReauthenticationResolver(e){return Vs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n,e){return uN(n,"POST","/v1/accounts:signInWithIdp",I_(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN="http://localhost";class Ba extends xw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ba(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const u=new Ba(s,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return sl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,sl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,sl(e,t)}buildRequest(){const e={requestUri:VN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xr extends Nu{constructor(){super("facebook.com")}static credential(e){return Ba._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ba._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ps.credential(t,s)}catch{return null}}}Ps.GOOGLE_SIGN_IN_METHOD="google.com";Ps.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Nu{constructor(){super("github.com")}static credential(e){return Ba._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Nu{constructor(){super("twitter.com")}static credential(e,t){return Ba._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ir.credential(t,s)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Ei._fromIdTokenResponse(e,s,a),u=XT(s);return new hl({user:l,providerId:u,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=XT(s);return new hl({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function XT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Qs{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Bf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Bf(e,t,s,a)}}function Rw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Bf._fromErrorAndOperation(n,l,e,s):l})}async function LN(n,e,t=!1){const s=await mu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hl._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(n,e,t=!1){const{auth:s}=n;if(ci(s.app))return Promise.reject(Pa(s));const a="reauthenticate";try{const l=await mu(n,Rw(s,a,e,n),t);Ie(l.idToken,s,"internal-error");const u=N_(l.idToken);Ie(u,s,"internal-error");const{sub:d}=u;return Ie(n.uid===d,s,"user-mismatch"),hl._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Zi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(n,e,t=!1){if(ci(n.app))return Promise.reject(Pa(n));const s="signIn",a=await Rw(n,s,e),l=await hl._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}function zN(n,e,t,s){return gt(n).onIdTokenChanged(e,t,s)}function FN(n,e,t){return gt(n).beforeAuthStateChanged(e,t)}function BN(n,e,t,s){return gt(n).onAuthStateChanged(e,t,s)}function qN(n){return gt(n).signOut()}const qf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const HN=1e3,GN=10;class Nw extends Iw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(s);!t&&this.localCache[s]===u||this.notifyListeners(s,u)},l=this.storage.getItem(s);TN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,GN):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},HN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const YN=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Cd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(u).map(async g=>g(t.origin,l)),p=await QN(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class KN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((d,p)=>{const g=O_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:a,onMessage(b){const w=b;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return window}function XN(n){Yi().location.href=n}/**
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
 */function Mw(){return typeof Yi().WorkerGlobalScope<"u"&&typeof Yi().importScripts=="function"}async function $N(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WN(){return navigator?.serviceWorker?.controller||null}function ZN(){return Mw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebaseLocalStorageDb",JN=1,Hf="firebaseLocalStorage",Pw="fbase_key";class Du{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xd(n,e){return n.transaction([Hf],e?"readwrite":"readonly").objectStore(Hf)}function e2(){const n=indexedDB.deleteDatabase(Ow);return new Du(n).toPromise()}function jg(){const n=indexedDB.open(Ow,JN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Hf,{keyPath:Pw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Hf)?e(s):(s.close(),await e2(),e(await jg()))})})}async function $T(n,e,t){const s=xd(n,!0).put({[Pw]:e,value:t});return new Du(s).toPromise()}async function t2(n,e){const t=xd(n,!1).get(e),s=await new Du(t).toPromise();return s===void 0?null:s.value}function WT(n,e){const t=xd(n,!0).delete(e);return new Du(t).toPromise()}const n2=800,i2=3;class Vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>i2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cd._getInstance(ZN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await $N(),!this.activeServiceWorker)return;this.sender=new KN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jg();return await $T(e,qf,"1"),await WT(e,qf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>$T(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>t2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>WT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=xd(a,!1).getAll();return new Du(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vw.type="LOCAL";const s2=Vw;new Iu(3e4,6e4);/**
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
 */function Lw(n,e){return e?Ls(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends xw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return sl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return sl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function r2(n){return UN(n.auth,new P_(n),n.bypassAuthState)}function a2(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),jN(t,new P_(n),n.bypassAuthState)}async function o2(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),LN(t,new P_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r2;case"linkViaPopup":case"linkViaRedirect":return o2;case"reauthViaPopup":case"reauthViaRedirect":return a2;default:Zi(this.auth,"internal-error")}}resolve(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=new Iu(2e3,1e4);async function c2(n,e,t){if(ci(n.app))return Promise.reject(bi(n,"operation-not-supported-in-this-environment"));const s=Ad(n);iN(n,e,M_);const a=Lw(s,t);return new Da(s,"signInViaPopup",e,a).executeNotNull()}class Da extends jw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Da.currentPopupAction&&Da.currentPopupAction.cancel(),Da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Bs(this.filter.length===1,"Popup operations only handle one event");const e=O_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(bi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(bi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Da.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,l2.get())};e()}}Da.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2="pendingRedirect",Sf=new Map;class h2 extends jw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Sf.get(this.auth._key());if(!e){try{const s=await f2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Sf.set(this.auth._key(),e)}return this.bypassAuthState||Sf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f2(n,e){const t=p2(e),s=m2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function d2(n,e){Sf.set(n._key(),e)}function m2(n){return Ls(n._redirectPersistence)}function p2(n){return wf(u2,n.config.apiKey,n.name)}async function g2(n,e,t=!1){if(ci(n.app))return Promise.reject(Pa(n));const s=Ad(n),a=Lw(s,e),u=await new h2(s,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=600*1e3;class y2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Uw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(bi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_2&&this.cachedEventUids.clear(),this.cachedEventUids.has(ZT(e))}saveEventToCache(e){this.cachedEventUids.add(ZT(e)),this.lastProcessedEventTime=Date.now()}}function ZT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function v2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(n,e={}){return xl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b2=/^https?/;async function w2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await E2(n);for(const t of e)try{if(S2(t))return}catch{}Zi(n,"unauthorized-domain")}function S2(n){const e=Vg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===s}if(!b2.test(t))return!1;if(T2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const A2=new Iu(3e4,6e4);function JT(){const n=Yi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function C2(n){return new Promise((e,t)=>{function s(){JT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{JT(),t(bi(n,"network-request-failed"))},timeout:A2.get()})}if(Yi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Yi().gapi?.load)s();else{const a=NN("iframefcb");return Yi()[a]=()=>{gapi.load?s():t(bi(n,"network-request-failed"))},RN(`${IN()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Af=null,e})}let Af=null;function x2(n){return Af=Af||C2(n),Af}/**
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
 */const R2=new Iu(5e3,15e3),I2="__/auth/iframe",N2="emulator/auth/iframe",D2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M2(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?R_(e,N2):`https://${n.config.authDomain}/${I2}`,s={apiKey:e.apiKey,appName:n.name,v:$a},a=k2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Cl(s).slice(1)}`}async function O2(n){const e=await x2(n),t=Yi().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:M2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const u=bi(n,"network-request-failed"),d=Yi().setTimeout(()=>{l(u)},R2.get());function p(){Yi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const P2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V2=500,L2=600,j2="_blank",U2="http://localhost";class eb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z2(n,e,t,s=V2,a=L2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p={...P2,width:s.toString(),height:a.toString(),top:l,left:u},g=bn().toLowerCase();t&&(d=vw(g)?j2:t),_w(g)&&(e=e||U2,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[R,N])=>`${w}${R}=${N},`,"");if(EN(g)&&d!=="_self")return F2(e||"",d),new eb(null);const b=window.open(e||"",d,y);Ie(b,n,"popup-blocked");try{b.focus()}catch{}return new eb(b)}function F2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const B2="__/auth/handler",q2="emulator/auth/handler",H2=encodeURIComponent("fac");async function tb(n,e,t,s,a,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:$a,eventId:a};if(e instanceof M_){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Vf(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries({}))u[y]=b}if(e instanceof Nu){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${H2}=${encodeURIComponent(p)}`:"";return`${G2(n)}?${Cl(d).slice(1)}${g}`}function G2({config:n}){return n.emulator?R_(n,q2):`https://${n.authDomain}/${B2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="webStorageSupport";class Y2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kw,this._completeRedirectFn=g2,this._overrideRedirectResult=d2}async _openPopup(e,t,s,a){Bs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await tb(e,t,s,Vg(),a);return z2(e,l,O_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await tb(e,t,s,Vg(),a);return XN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Bs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await O2(e),s=new y2(e);return t.register("authEvent",a=>(Ie(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pg,{type:pg},a=>{const l=a?.[0]?.[pg];l!==void 0&&t(!!l),Zi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=w2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sw()||yw()||D_()}}const Q2=Y2;var nb="@firebase/auth",ib="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $2(n){Fa(new Lr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=s.options;Ie(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Aw(n)},g=new CN(s,a,l,p);return kN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Fa(new Lr("auth-internal",e=>{const t=Ad(e.getProvider("auth").getImmediate());return(s=>new K2(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gi(nb,ib,X2(n)),Gi(nb,ib,"esm2020")}/**
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
 */const W2=300,Z2=tw("authIdTokenMaxAge")||W2;let sb=null;const J2=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Z2)return;const a=t?.token;sb!==a&&(sb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function eD(n=A_()){const e=Sd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=DN(n,{popupRedirectResolver:Q2,persistence:[s2,YN,kw]}),s=tw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const u=J2(l.toString());FN(t,u,()=>u(t.currentUser)),zN(t,d=>u(d))}}const a=Z1("auth");return a&&MN(t,`http://${a}`),t}function tD(){return document.getElementsByTagName("head")?.[0]??document}xN({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=bi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",tD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$2("Browser");var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,zw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,C){function I(){}I.prototype=C.prototype,k.D=C.prototype,k.prototype=new I,k.prototype.constructor=k,k.C=function(P,V,j){for(var x=Array(arguments.length-2),de=2;de<arguments.length;de++)x[de-2]=arguments[de];return C.prototype[V].apply(P,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,C,I){I||(I=0);var P=Array(16);if(typeof C=="string")for(var V=0;16>V;++V)P[V]=C.charCodeAt(I++)|C.charCodeAt(I++)<<8|C.charCodeAt(I++)<<16|C.charCodeAt(I++)<<24;else for(V=0;16>V;++V)P[V]=C[I++]|C[I++]<<8|C[I++]<<16|C[I++]<<24;C=k.g[0],I=k.g[1],V=k.g[2];var j=k.g[3],x=C+(j^I&(V^j))+P[0]+3614090360&4294967295;C=I+(x<<7&4294967295|x>>>25),x=j+(V^C&(I^V))+P[1]+3905402710&4294967295,j=C+(x<<12&4294967295|x>>>20),x=V+(I^j&(C^I))+P[2]+606105819&4294967295,V=j+(x<<17&4294967295|x>>>15),x=I+(C^V&(j^C))+P[3]+3250441966&4294967295,I=V+(x<<22&4294967295|x>>>10),x=C+(j^I&(V^j))+P[4]+4118548399&4294967295,C=I+(x<<7&4294967295|x>>>25),x=j+(V^C&(I^V))+P[5]+1200080426&4294967295,j=C+(x<<12&4294967295|x>>>20),x=V+(I^j&(C^I))+P[6]+2821735955&4294967295,V=j+(x<<17&4294967295|x>>>15),x=I+(C^V&(j^C))+P[7]+4249261313&4294967295,I=V+(x<<22&4294967295|x>>>10),x=C+(j^I&(V^j))+P[8]+1770035416&4294967295,C=I+(x<<7&4294967295|x>>>25),x=j+(V^C&(I^V))+P[9]+2336552879&4294967295,j=C+(x<<12&4294967295|x>>>20),x=V+(I^j&(C^I))+P[10]+4294925233&4294967295,V=j+(x<<17&4294967295|x>>>15),x=I+(C^V&(j^C))+P[11]+2304563134&4294967295,I=V+(x<<22&4294967295|x>>>10),x=C+(j^I&(V^j))+P[12]+1804603682&4294967295,C=I+(x<<7&4294967295|x>>>25),x=j+(V^C&(I^V))+P[13]+4254626195&4294967295,j=C+(x<<12&4294967295|x>>>20),x=V+(I^j&(C^I))+P[14]+2792965006&4294967295,V=j+(x<<17&4294967295|x>>>15),x=I+(C^V&(j^C))+P[15]+1236535329&4294967295,I=V+(x<<22&4294967295|x>>>10),x=C+(V^j&(I^V))+P[1]+4129170786&4294967295,C=I+(x<<5&4294967295|x>>>27),x=j+(I^V&(C^I))+P[6]+3225465664&4294967295,j=C+(x<<9&4294967295|x>>>23),x=V+(C^I&(j^C))+P[11]+643717713&4294967295,V=j+(x<<14&4294967295|x>>>18),x=I+(j^C&(V^j))+P[0]+3921069994&4294967295,I=V+(x<<20&4294967295|x>>>12),x=C+(V^j&(I^V))+P[5]+3593408605&4294967295,C=I+(x<<5&4294967295|x>>>27),x=j+(I^V&(C^I))+P[10]+38016083&4294967295,j=C+(x<<9&4294967295|x>>>23),x=V+(C^I&(j^C))+P[15]+3634488961&4294967295,V=j+(x<<14&4294967295|x>>>18),x=I+(j^C&(V^j))+P[4]+3889429448&4294967295,I=V+(x<<20&4294967295|x>>>12),x=C+(V^j&(I^V))+P[9]+568446438&4294967295,C=I+(x<<5&4294967295|x>>>27),x=j+(I^V&(C^I))+P[14]+3275163606&4294967295,j=C+(x<<9&4294967295|x>>>23),x=V+(C^I&(j^C))+P[3]+4107603335&4294967295,V=j+(x<<14&4294967295|x>>>18),x=I+(j^C&(V^j))+P[8]+1163531501&4294967295,I=V+(x<<20&4294967295|x>>>12),x=C+(V^j&(I^V))+P[13]+2850285829&4294967295,C=I+(x<<5&4294967295|x>>>27),x=j+(I^V&(C^I))+P[2]+4243563512&4294967295,j=C+(x<<9&4294967295|x>>>23),x=V+(C^I&(j^C))+P[7]+1735328473&4294967295,V=j+(x<<14&4294967295|x>>>18),x=I+(j^C&(V^j))+P[12]+2368359562&4294967295,I=V+(x<<20&4294967295|x>>>12),x=C+(I^V^j)+P[5]+4294588738&4294967295,C=I+(x<<4&4294967295|x>>>28),x=j+(C^I^V)+P[8]+2272392833&4294967295,j=C+(x<<11&4294967295|x>>>21),x=V+(j^C^I)+P[11]+1839030562&4294967295,V=j+(x<<16&4294967295|x>>>16),x=I+(V^j^C)+P[14]+4259657740&4294967295,I=V+(x<<23&4294967295|x>>>9),x=C+(I^V^j)+P[1]+2763975236&4294967295,C=I+(x<<4&4294967295|x>>>28),x=j+(C^I^V)+P[4]+1272893353&4294967295,j=C+(x<<11&4294967295|x>>>21),x=V+(j^C^I)+P[7]+4139469664&4294967295,V=j+(x<<16&4294967295|x>>>16),x=I+(V^j^C)+P[10]+3200236656&4294967295,I=V+(x<<23&4294967295|x>>>9),x=C+(I^V^j)+P[13]+681279174&4294967295,C=I+(x<<4&4294967295|x>>>28),x=j+(C^I^V)+P[0]+3936430074&4294967295,j=C+(x<<11&4294967295|x>>>21),x=V+(j^C^I)+P[3]+3572445317&4294967295,V=j+(x<<16&4294967295|x>>>16),x=I+(V^j^C)+P[6]+76029189&4294967295,I=V+(x<<23&4294967295|x>>>9),x=C+(I^V^j)+P[9]+3654602809&4294967295,C=I+(x<<4&4294967295|x>>>28),x=j+(C^I^V)+P[12]+3873151461&4294967295,j=C+(x<<11&4294967295|x>>>21),x=V+(j^C^I)+P[15]+530742520&4294967295,V=j+(x<<16&4294967295|x>>>16),x=I+(V^j^C)+P[2]+3299628645&4294967295,I=V+(x<<23&4294967295|x>>>9),x=C+(V^(I|~j))+P[0]+4096336452&4294967295,C=I+(x<<6&4294967295|x>>>26),x=j+(I^(C|~V))+P[7]+1126891415&4294967295,j=C+(x<<10&4294967295|x>>>22),x=V+(C^(j|~I))+P[14]+2878612391&4294967295,V=j+(x<<15&4294967295|x>>>17),x=I+(j^(V|~C))+P[5]+4237533241&4294967295,I=V+(x<<21&4294967295|x>>>11),x=C+(V^(I|~j))+P[12]+1700485571&4294967295,C=I+(x<<6&4294967295|x>>>26),x=j+(I^(C|~V))+P[3]+2399980690&4294967295,j=C+(x<<10&4294967295|x>>>22),x=V+(C^(j|~I))+P[10]+4293915773&4294967295,V=j+(x<<15&4294967295|x>>>17),x=I+(j^(V|~C))+P[1]+2240044497&4294967295,I=V+(x<<21&4294967295|x>>>11),x=C+(V^(I|~j))+P[8]+1873313359&4294967295,C=I+(x<<6&4294967295|x>>>26),x=j+(I^(C|~V))+P[15]+4264355552&4294967295,j=C+(x<<10&4294967295|x>>>22),x=V+(C^(j|~I))+P[6]+2734768916&4294967295,V=j+(x<<15&4294967295|x>>>17),x=I+(j^(V|~C))+P[13]+1309151649&4294967295,I=V+(x<<21&4294967295|x>>>11),x=C+(V^(I|~j))+P[4]+4149444226&4294967295,C=I+(x<<6&4294967295|x>>>26),x=j+(I^(C|~V))+P[11]+3174756917&4294967295,j=C+(x<<10&4294967295|x>>>22),x=V+(C^(j|~I))+P[2]+718787259&4294967295,V=j+(x<<15&4294967295|x>>>17),x=I+(j^(V|~C))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+C&4294967295,k.g[1]=k.g[1]+(V+(x<<21&4294967295|x>>>11))&4294967295,k.g[2]=k.g[2]+V&4294967295,k.g[3]=k.g[3]+j&4294967295}s.prototype.u=function(k,C){C===void 0&&(C=k.length);for(var I=C-this.blockSize,P=this.B,V=this.h,j=0;j<C;){if(V==0)for(;j<=I;)a(this,k,j),j+=this.blockSize;if(typeof k=="string"){for(;j<C;)if(P[V++]=k.charCodeAt(j++),V==this.blockSize){a(this,P),V=0;break}}else for(;j<C;)if(P[V++]=k[j++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=C},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var C=1;C<k.length-8;++C)k[C]=0;var I=8*this.o;for(C=k.length-8;C<k.length;++C)k[C]=I&255,I/=256;for(this.u(k),k=Array(16),C=I=0;4>C;++C)for(var P=0;32>P;P+=8)k[I++]=this.g[C]>>>P&255;return k};function l(k,C){var I=d;return Object.prototype.hasOwnProperty.call(I,k)?I[k]:I[k]=C(k)}function u(k,C){this.h=C;for(var I=[],P=!0,V=k.length-1;0<=V;V--){var j=k[V]|0;P&&j==C||(I[V]=j,P=!1)}this.g=I}var d={};function p(k){return-128<=k&&128>k?l(k,function(C){return new u([C|0],0>C?-1:0)}):new u([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return b;if(0>k)return z(g(-k));for(var C=[],I=1,P=0;k>=I;P++)C[P]=k/I|0,I*=4294967296;return new u(C,0)}function y(k,C){if(k.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(k.charAt(0)=="-")return z(y(k.substring(1),C));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(C,8)),P=b,V=0;V<k.length;V+=8){var j=Math.min(8,k.length-V),x=parseInt(k.substring(V,V+j),C);8>j?(j=g(Math.pow(C,j)),P=P.j(j).add(g(x))):(P=P.j(I),P=P.add(g(x)))}return P}var b=p(0),w=p(1),R=p(16777216);n=u.prototype,n.m=function(){if(L(this))return-z(this).m();for(var k=0,C=1,I=0;I<this.g.length;I++){var P=this.i(I);k+=(0<=P?P:4294967296+P)*C,C*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(N(this))return"0";if(L(this))return"-"+z(this).toString(k);for(var C=g(Math.pow(k,6)),I=this,P="";;){var V=pe(I,C).g;I=re(I,V.j(C));var j=((0<I.g.length?I.g[0]:I.h)>>>0).toString(k);if(I=V,N(I))return j+P;for(;6>j.length;)j="0"+j;P=j+P}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function N(k){if(k.h!=0)return!1;for(var C=0;C<k.g.length;C++)if(k.g[C]!=0)return!1;return!0}function L(k){return k.h==-1}n.l=function(k){return k=re(this,k),L(k)?-1:N(k)?0:1};function z(k){for(var C=k.g.length,I=[],P=0;P<C;P++)I[P]=~k.g[P];return new u(I,~k.h).add(w)}n.abs=function(){return L(this)?z(this):this},n.add=function(k){for(var C=Math.max(this.g.length,k.g.length),I=[],P=0,V=0;V<=C;V++){var j=P+(this.i(V)&65535)+(k.i(V)&65535),x=(j>>>16)+(this.i(V)>>>16)+(k.i(V)>>>16);P=x>>>16,j&=65535,x&=65535,I[V]=x<<16|j}return new u(I,I[I.length-1]&-2147483648?-1:0)};function re(k,C){return k.add(z(C))}n.j=function(k){if(N(this)||N(k))return b;if(L(this))return L(k)?z(this).j(z(k)):z(z(this).j(k));if(L(k))return z(this.j(z(k)));if(0>this.l(R)&&0>k.l(R))return g(this.m()*k.m());for(var C=this.g.length+k.g.length,I=[],P=0;P<2*C;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<k.g.length;V++){var j=this.i(P)>>>16,x=this.i(P)&65535,de=k.i(V)>>>16,Me=k.i(V)&65535;I[2*P+2*V]+=x*Me,ne(I,2*P+2*V),I[2*P+2*V+1]+=j*Me,ne(I,2*P+2*V+1),I[2*P+2*V+1]+=x*de,ne(I,2*P+2*V+1),I[2*P+2*V+2]+=j*de,ne(I,2*P+2*V+2)}for(P=0;P<C;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=C;P<2*C;P++)I[P]=0;return new u(I,0)};function ne(k,C){for(;(k[C]&65535)!=k[C];)k[C+1]+=k[C]>>>16,k[C]&=65535,C++}function ie(k,C){this.g=k,this.h=C}function pe(k,C){if(N(C))throw Error("division by zero");if(N(k))return new ie(b,b);if(L(k))return C=pe(z(k),C),new ie(z(C.g),z(C.h));if(L(C))return C=pe(k,z(C)),new ie(z(C.g),C.h);if(30<k.g.length){if(L(k)||L(C))throw Error("slowDivide_ only works with positive integers.");for(var I=w,P=C;0>=P.l(k);)I=te(I),P=te(P);var V=he(I,1),j=he(P,1);for(P=he(P,2),I=he(I,2);!N(P);){var x=j.add(P);0>=x.l(k)&&(V=V.add(I),j=x),P=he(P,1),I=he(I,1)}return C=re(k,V.j(C)),new ie(V,C)}for(V=b;0<=k.l(C);){for(I=Math.max(1,Math.floor(k.m()/C.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),j=g(I),x=j.j(C);L(x)||0<x.l(k);)I-=P,j=g(I),x=j.j(C);N(j)&&(j=w),V=V.add(j),k=re(k,x)}return new ie(V,k)}n.A=function(k){return pe(this,k).h},n.and=function(k){for(var C=Math.max(this.g.length,k.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)&k.i(P);return new u(I,this.h&k.h)},n.or=function(k){for(var C=Math.max(this.g.length,k.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)|k.i(P);return new u(I,this.h|k.h)},n.xor=function(k){for(var C=Math.max(this.g.length,k.g.length),I=[],P=0;P<C;P++)I[P]=this.i(P)^k.i(P);return new u(I,this.h^k.h)};function te(k){for(var C=k.g.length+1,I=[],P=0;P<C;P++)I[P]=k.i(P)<<1|k.i(P-1)>>>31;return new u(I,k.h)}function he(k,C){var I=C>>5;C%=32;for(var P=k.g.length-I,V=[],j=0;j<P;j++)V[j]=0<C?k.i(j+I)>>>C|k.i(j+I+1)<<32-C:k.i(j+I);return new u(V,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,zw=s,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,Mr=u}).apply(typeof rb<"u"?rb:typeof self<"u"?self:typeof window<"u"?window:{});var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fw,$c,Bw,Cf,Ug,qw,Hw,Gw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof pf=="object"&&pf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var F=h[A];if(!(F in v))break e;v=v[F]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,F={next:function(){if(!A&&v<h.length){var Q=v++;return{value:_(Q,h[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function b(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,A),h.apply(_,F)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:b,w.apply(null,arguments)}function R(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function N(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,F,Q){for(var ce=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)ce[Qe-2]=arguments[Qe];return _.prototype[F].apply(A,ce)}}function L(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function z(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const F=h.length||0,Q=A.length||0;h.length=F+Q;for(let ce=0;ce<Q;ce++)h[F+ce]=A[ce]}else h.push(A)}}class re{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ne(h){return/^[\s\xa0]*$/.test(h)}function ie(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function pe(h){return pe[" "](h),h}pe[" "]=function(){};var te=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function he(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function k(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let v,A;for(let F=1;F<arguments.length;F++){A=arguments[F];for(v in A)h[v]=A[v];for(let Q=0;Q<I.length;Q++)v=I[Q],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function V(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function j(h){d.setTimeout(()=>{throw h},0)}function x(){var h=He;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class de{constructor(){this.h=this.g=null}add(_,v){const A=Me.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Me=new re(()=>new K,h=>h.reset());class K{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ge=!1,He=new de,M=()=>{const h=d.Promise.resolve(void 0);ae=()=>{h.then(X)}};var X=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(v){j(v)}var _=Me;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ge=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ye=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h})();function Oe(h,_){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(te){e:{try{pe(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Oe.aa.h.call(this)}}N(Oe,se);var Se={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Rt="closure_listenable_"+(1e6*Math.random()|0),st=0;function $n(h,_,v,A,F){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=F,this.key=++st,this.da=this.fa=!1}function Ai(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function fi(h){this.src=h,this.g={},this.h=0}fi.prototype.add=function(h,_,v,A,F){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var ce=is(h,_,A,F);return-1<ce?(_=h[ce],v||(_.fa=!1)):(_=new $n(_,this.src,Q,!!A,F),_.fa=v,h.push(_)),_};function ns(h,_){var v=_.type;if(v in h.g){var A=h.g[v],F=Array.prototype.indexOf.call(A,_,void 0),Q;(Q=0<=F)&&Array.prototype.splice.call(A,F,1),Q&&(Ai(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function is(h,_,v,A){for(var F=0;F<h.length;++F){var Q=h[F];if(!Q.da&&Q.listener==_&&Q.capture==!!v&&Q.ha==A)return F}return-1}var ss="closure_lm_"+(1e6*Math.random()|0),$r={};function no(h,_,v,A,F){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)no(h,_[Q],v,A,F);return null}return v=io(v),h&&h[Rt]?h.K(_,v,g(A)?!!A.capture:!1,F):kn(h,_,v,!1,A,F)}function kn(h,_,v,A,F,Q){if(!_)throw Error("Invalid event type");var ce=g(F)?!!F.capture:!!F,Qe=Ci(h);if(Qe||(h[ss]=Qe=new fi(h)),v=Qe.add(_,v,A,ce,Q),v.proxy)return v;if(A=jl(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)ye||(F=ce),F===void 0&&(F=!1),h.addEventListener(_.toString(),A,F);else if(h.attachEvent)h.attachEvent(rs(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function jl(){function h(v){return _.call(h.src,h.listener,v)}const _=$s;return h}function Wr(h,_,v,A,F){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)Wr(h,_[Q],v,A,F);else A=g(A)?!!A.capture:!!A,v=io(v),h&&h[Rt]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],v=is(Q,v,A,F),-1<v&&(Ai(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ci(h))&&(_=h.g[_.toString()],h=-1,_&&(h=is(_,v,A,F)),(v=-1<h?_[h]:null)&&Xs(v))}function Xs(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Rt])ns(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(rs(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Ci(_))?(ns(v,h),v.h==0&&(v.src=null,_[ss]=null)):Ai(h)}}}function rs(h){return h in $r?$r[h]:$r[h]="on"+h}function $s(h,_){if(h.da)h=!0;else{_=new Oe(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Xs(h),h=v.call(A,_)}return h}function Ci(h){return h=h[ss],h instanceof fi?h:null}var as="__closure_events_fn_"+(1e9*Math.random()>>>0);function io(h){return typeof h=="function"?h:(h[as]||(h[as]=function(_){return h.handleEvent(_)}),h[as])}function le(){oe.call(this),this.i=new fi(this),this.M=this,this.F=null}N(le,oe),le.prototype[Rt]=!0,le.prototype.removeEventListener=function(h,_,v,A){Wr(this,h,_,v,A)};function me(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new se(_,h);else if(_ instanceof se)_.target=_.target||h;else{var F=_;_=new se(A,h),P(_,F)}if(F=!0,v)for(var Q=v.length-1;0<=Q;Q--){var ce=_.g=v[Q];F=Ne(ce,A,!0,_)&&F}if(ce=_.g=h,F=Ne(ce,A,!0,_)&&F,F=Ne(ce,A,!1,_)&&F,v)for(Q=0;Q<v.length;Q++)ce=_.g=v[Q],F=Ne(ce,A,!1,_)&&F}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Ai(v[A]);delete h.g[_],h.h--}}this.F=null},le.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},le.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function Ne(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,Q=0;Q<_.length;++Q){var ce=_[Q];if(ce&&!ce.da&&ce.capture==v){var Qe=ce.listener,Yt=ce.ha||ce.src;ce.fa&&ns(h.i,ce),F=Qe.call(Yt,A)!==!1&&F}}return F&&!A.defaultPrevented}function Je(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Sn(h){h.g=Je(()=>{h.g=null,h.i&&(h.i=!1,Sn(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class gn extends oe{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Sn(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(h){oe.call(this),this.h=h,this.g={}}N(xi,oe);var os=[];function Ws(h){he(h.g,function(_,v){this.g.hasOwnProperty(v)&&Xs(_)},h),h.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Ws(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var di=d.JSON.stringify,so=d.JSON.parse,Zr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Ul(){}Ul.prototype.h=null;function zl(h){return h.h||(h.h=h.i())}function Fl(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cs(){se.call(this,"d")}N(cs,se);function Bl(){se.call(this,"c")}N(Bl,se);var Ri={},ql=null;function Zs(){return ql=ql||new le}Ri.La="serverreachability";function ro(h){se.call(this,Ri.La,h)}N(ro,se);function Js(h){const _=Zs();me(_,new ro(_))}Ri.STAT_EVENT="statevent";function Yu(h,_){se.call(this,Ri.STAT_EVENT,h),this.stat=_}N(Yu,se);function Tt(h){const _=Zs();me(_,new Yu(_,h))}Ri.Ma="timingevent";function Gt(h,_){se.call(this,Ri.Ma,h),this.size=_}N(Gt,se);function Vt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Wn(){this.g=!0}Wn.prototype.xa=function(){this.g=!1};function Hl(h,_,v,A,F,Q){h.info(function(){if(h.g)if(Q)for(var ce="",Qe=Q.split("&"),Yt=0;Yt<Qe.length;Yt++){var Ke=Qe[Yt].split("=");if(1<Ke.length){var Zt=Ke[0];Ke=Ke[1];var Qt=Zt.split("_");ce=2<=Qt.length&&Qt[1]=="type"?ce+(Zt+"="+Ke+"&"):ce+(Zt+"=redacted&")}}else ce=null;else ce=Q;return"XMLHTTP REQ ("+A+") [attempt "+F+"]: "+_+`
`+v+`
`+ce})}function am(h,_,v,A,F,Q,ce){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+F+"]: "+_+`
`+v+`
`+Q+" "+ce})}function er(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Jr(h,v)+(A?" "+A:"")})}function Qu(h,_){h.info(function(){return"TIMEOUT: "+_})}Wn.prototype.info=function(){};function Jr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var F=A[1];if(Array.isArray(F)&&!(1>F.length)){var Q=F[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ce=1;ce<F.length;ce++)F[ce]=""}}}}return di(v)}catch{return _}}var tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},us={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ii;function Ni(){}N(Ni,Ul),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Ii=new Ni;function An(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}var Gl={},ao={};function mi(h,_,v){h.L=1,h.v=sa(Fn(_)),h.m=v,h.P=!0,hs(h,null)}function hs(h,_){h.F=Date.now(),ea(h),h.A=Fn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Wl(v.i,"t",A),h.C=0,v=h.j.J,h.h=new It,h.g=ch(h.j,v?_:null,!h.m),0<h.O&&(h.M=new gn(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(os[0]=F.toString()),F=os);for(var Q=0;Q<F.length;Q++){var ce=no(v,F[Q],A||_.handleEvent,!1,_.h||_);if(!ce)break;_.g[ce.key]=ce}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Js(),Hl(h.i,h.u,h.A,h.l,h.R,h.m)}An.prototype.ca=function(h){h=h.target;const _=this.M;_&&ti(h)==3?_.j():this.Y(h)},An.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ti(this.g);var _=this.g.Ba();const vs=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||th(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=vs?Js(3):Js(2)),nr(this);var v=this.g.Z();this.X=v;t:if(Ku(this)){var A=th(this.g);h="";var F=A.length,Q=ti(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Di(this);var ce="";break t}this.h.i=new d.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(Q&&_==F-1)});A.length=0,this.h.g+=h,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=v==200,am(this.i,this.u,this.A,this.l,this.R,Qt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,Yt=this.g;if((Qe=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Qe)){var Ke=Qe;break t}}Ke=null}if(v=Ke)er(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,v);else{this.o=!1,this.s=3,Tt(12),ln(this),Di(this);break e}}if(this.P){v=!0;let cn;for(;!this.J&&this.C<ce.length;)if(cn=Xu(this,ce),cn==ao){Qt==4&&(this.s=4,Tt(14),v=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Gl){this.s=4,Tt(15),er(this.i,this.l,ce,"[Invalid Chunk]"),v=!1;break}else er(this.i,this.l,cn,null),ta(this,cn);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ce.length!=0||this.h.h||(this.s=1,Tt(16),v=!1),this.o=this.o&&v,!v)er(this.i,this.l,ce,"[Invalid Chunked Response]"),ln(this),Di(this);else if(0<ce.length&&!this.W){this.W=!0;var Zt=this.j;Zt.g==this&&Zt.ba&&!Zt.M&&(Zt.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),fa(Zt),Zt.M=!0,Tt(11))}}else er(this.i,this.l,ce,null),ta(this,ce);Qt==4&&ln(this),this.o&&!this.J&&(Qt==4?ah(this.j,this):(this.o=!1,ea(this)))}else hm(this.g),v==400&&0<ce.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),ln(this),Di(this)}}}catch{}finally{}};function Ku(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Xu(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?ao:(v=Number(_.substring(v,A)),isNaN(v)?Gl:(A+=1,A+v>_.length?ao:(_=_.slice(A,A+v),h.C=A+v,_)))}An.prototype.cancel=function(){this.J=!0,ln(this)};function ea(h){h.S=Date.now()+h.I,$u(h,h.I)}function $u(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Vt(w(h.ba,h),_)}function nr(h){h.B&&(d.clearTimeout(h.B),h.B=null)}An.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Qu(this.i,this.A),this.L!=2&&(Js(),Tt(17)),ln(this),this.s=2,Di(this)):$u(this,this.S-h)};function Di(h){h.j.G==0||h.J||ah(h.j,h)}function ln(h){nr(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Ws(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function ta(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Yl(v.h,h))){if(!h.K&&Yl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var F=A;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)vo(v),_o(v);else break e;nc(v),Tt(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Vt(w(v.Za,v),6e3));if(1>=lo(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ys(v,11)}else if((h.K||v.g==h)&&vo(v),!ne(_))for(F=v.Da.g.parse(_),_=0;_<F.length;_++){let Ke=F[_];if(v.T=Ke[0],Ke=Ke[1],v.G==2)if(Ke[0]=="c"){v.K=Ke[1],v.ia=Ke[2];const Zt=Ke[3];Zt!=null&&(v.la=Zt,v.j.info("VER="+v.la));const Qt=Ke[4];Qt!=null&&(v.Aa=Qt,v.j.info("SVER="+v.Aa));const vs=Ke[5];vs!=null&&typeof vs=="number"&&0<vs&&(A=1.5*vs,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const cn=h.g;if(cn){const ji=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var Q=A.h;Q.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(co(Q,Q.h),Q.h=null))}if(A.D){const sc=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;sc&&(A.ya=sc,lt(A.I,A.D,sc))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ce=h;if(A.qa=lh(A,A.J?A.ia:null,A.W),ce.K){Cn(A.h,ce);var Qe=ce,Yt=A.L;Yt&&(Qe.I=Yt),Qe.B&&(nr(Qe),ea(Qe)),A.g=ce}else sh(A);0<v.i.length&&yo(v)}else Ke[0]!="stop"&&Ke[0]!="close"||ys(v,7);else v.G==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?ys(v,7):ec(v):Ke[0]!="noop"&&v.l&&v.l.ta(Ke),v.v=0)}}Js(4)}catch{}}var Wu=class{constructor(h,_){this.g=h,this.map=_}};function fs(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function lo(h){return h.h?1:h.g?h.g.size:0}function Yl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function co(h,_){h.g?h.g.add(_):h.h=_}function Cn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}fs.prototype.cancel=function(){if(this.i=Ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Ql(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return L(h.i)}function om(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function uo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Kl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=uo(h),A=om(h),F=A.length,Q=0;Q<F;Q++)_.call(void 0,A[Q],v&&v[Q],h)}var na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lm(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),F=null;if(0<=A){var Q=h[v].substring(0,A);F=h[v].substring(A+1)}else Q=h[v];_(Q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Lt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Lt){this.h=h.h,ia(this,h.j),this.o=h.o,this.g=h.g,ir(this,h.s),this.l=h.l;var _=h.i,v=new ms;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ds(this,v),this.m=h.m}else h&&(_=String(h).match(na))?(this.h=!1,ia(this,_[1]||"",!0),this.o=Zn(_[2]||""),this.g=Zn(_[3]||"",!0),ir(this,_[4]),this.l=Zn(_[5]||"",!0),ds(this,_[6]||"",!0),this.m=Zn(_[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Lt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ra(_,Xl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ra(_,Xl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(ra(v,v.charAt(0)=="/"?cm:$l,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",ra(v,ho)),h.join("")};function Fn(h){return new Lt(h)}function ia(h,_,v){h.j=v?Zn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function ir(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ds(h,_,v){_ instanceof ms?(h.i=_,Ju(h.i,h.h)):(v||(_=ra(_,um)),h.i=new ms(_,h.h))}function lt(h,_,v){h.i.set(_,v)}function sa(h){return lt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Zn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ra(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Zu),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Zu(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Xl=/[#\/\?@]/g,$l=/[#\?:]/g,cm=/[#\?]/g,um=/[#\?@]/g,ho=/#/g;function ms(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Jn(h){h.g||(h.g=new Map,h.h=0,h.i&&lm(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=ms.prototype,n.add=function(h,_){Jn(this),this.i=null,h=ki(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ps(h,_){Jn(h),_=ki(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function gs(h,_){return Jn(h),_=ki(h,_),h.g.has(_)}n.forEach=function(h,_){Jn(this),this.g.forEach(function(v,A){v.forEach(function(F){h.call(_,F,A,this)},this)},this)},n.na=function(){Jn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const F=h[A];for(let Q=0;Q<F.length;Q++)v.push(_[A])}return v},n.V=function(h){Jn(this);let _=[];if(typeof h=="string")gs(this,h)&&(_=_.concat(this.g.get(ki(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return Jn(this),this.i=null,h=ki(this,h),gs(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Wl(h,_,v){ps(h,_),0<v.length&&(h.i=null,h.g.set(ki(h,_),L(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const Q=encodeURIComponent(String(A)),ce=this.V(A);for(A=0;A<ce.length;A++){var F=Q;ce[A]!==""&&(F+="="+encodeURIComponent(String(ce[A]))),h.push(F)}}return this.i=h.join("&")};function ki(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Ju(h,_){_&&!h.j&&(Jn(h),h.i=null,h.g.forEach(function(v,A){var F=A.toLowerCase();A!=F&&(ps(this,A),Wl(this,F,v))},h)),h.j=_}function aa(h,_){const v=new Wn;if(d.Image){const A=new Image;A.onload=R(ei,v,"TestLoadImage: loaded",!0,_,A),A.onerror=R(ei,v,"TestLoadImage: error",!1,_,A),A.onabort=R(ei,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=R(ei,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function pi(h,_){const v=new Wn,A=new AbortController,F=setTimeout(()=>{A.abort(),ei(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(Q=>{clearTimeout(F),Q.ok?ei(v,"TestPingServer: ok",!0,_):ei(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),ei(v,"TestPingServer: error",!1,_)})}function ei(h,_,v,A,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),A(v)}catch{}}function oa(){this.g=new Zr}function Mi(h,_,v){const A=v||"";try{Kl(h,function(F,Q){let ce=F;g(F)&&(ce=di(F)),_.push(A+Q+"="+encodeURIComponent(ce))})}catch(F){throw _.push(A+"type="+encodeURIComponent("_badmap")),F}}function sr(h){this.l=h.Ub||null,this.j=h.eb||!1}N(sr,Ul),sr.prototype.g=function(){return new _s(this.l,this.j)},sr.prototype.i=(function(h){return function(){return h}})({});function _s(h,_){le.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(_s,le),n=_s.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Pi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Oi(this):Pi(this),this.readyState==3&&Zl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Oi(this))},n.Qa=function(h){this.g&&(this.response=h,Oi(this))},n.ga=function(){this.g&&Oi(this)};function Oi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Pi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Pi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Jl(h){let _="";return he(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function Wt(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Jl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):lt(h,_,v))}function nt(h){le.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(nt,le);var fo=/^https?$/i,la=["POST","PUT"];n=nt.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ii.g(),this.v=this.o?zl(this.o):zl(Ii),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){eh(this,Q);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var F in A)v.set(F,A[F]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())v.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(la,_,void 0))||A||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ce]of v)this.g.setRequestHeader(Q,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ca(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){eh(this,Q)}};function eh(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,mo(h),Vi(h)}function mo(h){h.A||(h.A=!0,me(h,"complete"),me(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,me(this,"complete"),me(this,"abort"),Vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vi(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?po(this):this.bb())},n.bb=function(){po(this)};function po(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ti(h)!=4||h.Z()!=2)){if(h.u&&ti(h)==4)Je(h.Ea,0,h);else if(me(h,"readystatechange"),ti(h)==4){h.h=!1;try{const ce=h.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=ce===0){var F=String(h.D).match(na)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),A=!fo.test(F?F.toLowerCase():"")}v=A}if(v)me(h,"complete"),me(h,"success");else{h.m=6;try{var Q=2<ti(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",mo(h)}}finally{Vi(h)}}}}function Vi(h,_){if(h.g){ca(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||me(h,"ready");try{v.onreadystatechange=A}catch{}}}function ca(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ti(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ti(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),so(_)}};function th(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function hm(h){const _={};h=(h.g&&2<=ti(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(ne(h[A]))continue;var v=V(h[A]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=_[F]||[];_[F]=Q,Q.push(v)}k(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ua(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function go(h){this.Aa=0,this.i=[],this.j=new Wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ua("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ua("baseRetryDelayMs",5e3,h),this.cb=ua("retryDelaySeedMs",1e4,h),this.Wa=ua("forwardChannelMaxRetries",2,h),this.wa=ua("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new fs(h&&h.concurrentRequestLimit),this.Da=new oa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=go.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){Tt(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=lh(this,null,this.W),yo(this)};function ec(h){if(nh(h),h.G==3){var _=h.U++,v=Fn(h.I);if(lt(v,"SID",h.K),lt(v,"RID",_),lt(v,"TYPE","terminate"),ha(h,v),_=new An(h,h.j,_),_.L=2,_.v=sa(Fn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=ch(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ea(_)}oh(h)}function _o(h){h.g&&(fa(h),h.g.cancel(),h.g=null)}function nh(h){_o(h),h.u&&(d.clearTimeout(h.u),h.u=null),vo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function yo(h){if(!oo(h.h)&&!h.s){h.s=!0;var _=h.Ga;ae||M(),ge||(ae(),ge=!0),He.add(_,h),h.B=0}}function fm(h,_){return lo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Vt(w(h.Ga,h,_),ic(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new An(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=C(Q),P(Q,this.S)):Q=this.S),this.m!==null||this.O||(F.H=Q,Q=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=ih(this,F,_),v=Fn(this.I),lt(v,"RID",h),lt(v,"CVER",22),this.D&&lt(v,"X-HTTP-Session-Id",this.D),ha(this,v),Q&&(this.O?_="headers="+encodeURIComponent(String(Jl(Q)))+"&"+_:this.m&&Wt(v,this.m,Q)),co(this.h,F),this.Ua&&lt(v,"TYPE","init"),this.P?(lt(v,"$req",_),lt(v,"SID","null"),F.T=!0,mi(F,v,null)):mi(F,v,_),this.G=2}}else this.G==3&&(h?tc(this,h):this.i.length==0||oo(this.h)||tc(this))};function tc(h,_){var v;_?v=_.l:v=h.U++;const A=Fn(h.I);lt(A,"SID",h.K),lt(A,"RID",v),lt(A,"AID",h.T),ha(h,A),h.m&&h.o&&Wt(A,h.m,h.o),v=new An(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=ih(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),co(h.h,v),mi(v,A,_)}function ha(h,_){h.H&&he(h.H,function(v,A){lt(_,A,v)}),h.l&&Kl({},function(v,A){lt(_,A,v)})}function ih(h,_,v){v=Math.min(h.i.length,v);var A=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let Q=-1;for(;;){const ce=["count="+v];Q==-1?0<v?(Q=F[0].g,ce.push("ofs="+Q)):Q=0:ce.push("ofs="+Q);let Qe=!0;for(let Yt=0;Yt<v;Yt++){let Ke=F[Yt].g;const Zt=F[Yt].map;if(Ke-=Q,0>Ke)Q=Math.max(0,F[Yt].g-100),Qe=!1;else try{Mi(Zt,ce,"req"+Ke+"_")}catch{A&&A(Zt)}}if(Qe){A=ce.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function sh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ae||M(),ge||(ae(),ge=!0),He.add(_,h),h.v=0}}function nc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Vt(w(h.Fa,h),ic(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Vt(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),_o(this),rh(this))};function fa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function rh(h){h.g=new An(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Fn(h.qa);lt(_,"RID","rpc"),lt(_,"SID",h.K),lt(_,"AID",h.T),lt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&lt(_,"TO",h.ja),lt(_,"TYPE","xmlhttp"),ha(h,_),h.m&&h.o&&Wt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=sa(Fn(_)),v.m=null,v.P=!0,hs(v,h)}n.Za=function(){this.C!=null&&(this.C=null,_o(this),nc(this),Tt(19))};function vo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function ah(h,_){var v=null;if(h.g==_){vo(h),fa(h),h.g=null;var A=2}else if(Yl(h.h,_))v=_.D,Cn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var F=h.B;A=Zs(),me(A,new Gt(A,v)),yo(h)}else sh(h);else if(F=_.s,F==3||F==0&&0<_.X||!(A==1&&fm(h,_)||A==2&&nc(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),F){case 1:ys(h,5);break;case 4:ys(h,10);break;case 3:ys(h,6);break;default:ys(h,2)}}}function ic(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ys(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),A=h.Xa;const F=!A;A=new Lt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ia(A,"https"),sa(A),F?aa(A.toString(),v):pi(A.toString(),v)}else Tt(2);h.G=0,h.l&&h.l.sa(_),oh(h),nh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function oh(h){if(h.G=0,h.ka=[],h.l){const _=Ql(h.h);(_.length!=0||h.i.length!=0)&&(z(h.ka,_),z(h.ka,h.i),h.h.i.length=0,L(h.i),h.i.length=0),h.l.ra()}}function lh(h,_,v){var A=v instanceof Lt?Fn(v):new Lt(v);if(A.g!="")_&&(A.g=_+"."+A.g),ir(A,A.s);else{var F=d.location;A=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var Q=new Lt(null);A&&ia(Q,A),_&&(Q.g=_),F&&ir(Q,F),v&&(Q.l=v),A=Q}return v=h.D,_=h.ya,v&&_&&lt(A,v,_),lt(A,"VER",h.la),ha(h,A),A}function ch(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new nt(new sr({eb:v})):new nt(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Eo(){}Eo.prototype.g=function(h,_){return new xn(h,_)};function xn(h,_){le.call(this),this.g=new go(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ne(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ne(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Li(this)}N(xn,le),xn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){ec(this.g)},xn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=di(h),h=v);_.i.push(new Wu(_.Ya++,h)),_.G==3&&yo(_)},xn.prototype.N=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,xn.aa.N.call(this)};function hh(h){cs.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}N(hh,cs);function fh(){Bl.call(this),this.status=1}N(fh,Bl);function Li(h){this.g=h}N(Li,uh),Li.prototype.ua=function(){me(this.g,"a")},Li.prototype.ta=function(h){me(this.g,new hh(h))},Li.prototype.sa=function(h){me(this.g,new fh)},Li.prototype.ra=function(){me(this.g,"b")},Eo.prototype.createWebChannel=Eo.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,Gw=function(){return new Eo},Hw=function(){return Zs()},qw=Ri,Ug={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tr.NO_ERROR=0,tr.TIMEOUT=8,tr.HTTP_ERROR=6,Cf=tr,us.COMPLETE="complete",Bw=us,Fl.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",le.prototype.listen=le.prototype.K,$c=Fl,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Fw=nt}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});const ab="@firebase/firestore",ob="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}En.UNAUTHENTICATED=new En(null),En.GOOGLE_CREDENTIALS=new En("google-credentials-uid"),En.FIRST_PARTY=new En("first-party-uid"),En.MOCK_USER=new En("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qa=new wd("@firebase/firestore");function $o(){return qa.logLevel}function _e(n,...e){if(qa.logLevel<=qe.DEBUG){const t=e.map(V_);qa.debug(`Firestore (${Rl}): ${n}`,...t)}}function qs(n,...e){if(qa.logLevel<=qe.ERROR){const t=e.map(V_);qa.error(`Firestore (${Rl}): ${n}`,...t)}}function fl(n,...e){if(qa.logLevel<=qe.WARN){const t=e.map(V_);qa.warn(`Firestore (${Rl}): ${n}`,...t)}}function V_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ae(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Yw(n,s,t)}function Yw(n,e,t){let s=`FIRESTORE (${Rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw qs(s),new Error(s)}function it(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Yw(e,a,s)}function ke(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Qs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(En.UNAUTHENTICATED)))}shutdown(){}}class iD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class sD{constructor(e){this.t=e,this.currentUser=En.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){it(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Us;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Us,e.enqueueRetryable((()=>a(this.currentUser)))};const u=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},d=p=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>d(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Us)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(it(typeof s.accessToken=="string",31837,{l:s}),new Qw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string",2055,{h:e}),new En(e)}}class rD{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=En.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aD{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new rD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(En.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ci(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){it(this.o===void 0,3512);const s=l=>{l.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,_e("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new lb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(it(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new lb(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=lD(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ge(n,e){return n<e?-1:n>e?1:0}function zg(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return gg(a)===gg(l)?Ge(a,l):gg(a)?1:-1}return Ge(n.length,e.length)}const cD=55296,uD=57343;function gg(n){const e=n.charCodeAt(0);return e>=cD&&e<=uD}function dl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="__name__";class Hi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ae(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Hi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Hi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Hi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ge(e.length,t.length)}static compareSegments(e,t){const s=Hi.isNumericId(e),a=Hi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Hi.extractNumericId(e).compare(Hi.extractNumericId(t)):zg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mr.fromString(e.substring(4,e.length-2))}}class pt extends Hi{construct(e,t,s){return new pt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new pt(t)}static emptyPath(){return new pt([])}}const hD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mn extends Hi{construct(e,t,s){return new mn(e,t,s)}static isValidIdentifier(e){return hD.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cb}static keyField(){return new mn([cb])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new fe(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new fe(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(s+=d,a++):(l(),a++)}if(l(),u)throw new fe(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mn(t)}static emptyPath(){return new mn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(pt.fromString(e))}static fromName(e){return new Te(pt.fromString(e).popFirst(5))}static empty(){return new Te(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new pt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(n,e,t){if(!t)throw new fe(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fD(n,e,t,s){if(e===!0&&s===!0)throw new fe(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ub(n){if(!Te.isDocumentKey(n))throw new fe(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hb(n){if(Te.isDocumentKey(n))throw new fe(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Rd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function In(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rd(n);throw new fe(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function qt(n,e){const t={typeString:n};return e&&(t.value=e),t}function ku(n,e){if(!Xw(n))throw new fe(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const u=n[s];if(a&&typeof u!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new fe(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=-62135596800,db=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*db);return new vt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fb)throw new fe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/db}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ku(e,vt._jsonSchema))return new vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:qt("string",vt._jsonSchemaVersion),seconds:qt("number"),nanoseconds:qt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static fromTimestamp(e){return new De(e)}static min(){return new De(new vt(0,0))}static max(){return new De(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pu=-1;function dD(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=De.fromTimestamp(s===1e9?new vt(t+1,0):new vt(t,s));return new jr(a,Te.empty(),e)}function mD(n){return new jr(n.readTime,n.key,pu)}class jr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new jr(De.min(),Te.empty(),pu)}static max(){return new jr(De.max(),Te.empty(),pu)}}function pD(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Ge(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _D{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==gD)throw n;_e("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.reject(t)}static resolve(e){return new ee(((t,s)=>{t(e)}))}static reject(e){return new ee(((t,s)=>{s(e)}))}static waitFor(e){return new ee(((t,s)=>{let a=0,l=0,u=!1;e.forEach((d=>{++a,d.next((()=>{++l,u&&l===a&&t()}),(p=>s(p)))})),u=!0,l===a&&t()}))}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next((a=>a?ee.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ee(((s,a)=>{const l=e.length,u=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((y=>{u[g]=y,++d,d===l&&s(u)}),(y=>a(y)))}}))}static doWhile(e,t){return new ee(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function yD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const j_=-1;function Nd(n){return n==null}function Gf(n){return n===0&&1/n==-1/0}function vD(n){return typeof n=="number"&&Number.isInteger(n)&&!Gf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="";function ED(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=mb(e)),e=TD(n.get(t),e);return mb(e)}function TD(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case $w:t+="";break;default:t+=l}}return t}function mb(n){return n+$w+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ww(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht=class Fg{constructor(e,t){this.comparator=e,this.root=t||Or.EMPTY}insert(e,t){return new Fg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Or.BLACK,null,null))}remove(e){return new Fg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Or.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gf(this.root,e,this.comparator,!1)}getReverseIterator(){return new gf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gf(this.root,e,this.comparator,!0)}},gf=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Or=class Ms{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ms.RED,this.left=a??Ms.EMPTY,this.right=l??Ms.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Ms(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ms.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Ms.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ms.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ms.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}};Or.EMPTY=null,Or.RED=!0,Or.BLACK=!1;Or.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Or(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.comparator=e,this.data=new Ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gb(this.data.getIterator())}getIteratorFrom(e){return new gb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $t(this.comparator);return t.data=e,t}}class gb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.fields=e,e.sort(mn.comparator)}static empty(){return new Xn([])}unionWith(e){let t=new $t(mn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class pn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Zw("Invalid base64 string: "+l):l}})(e);return new pn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l})(e);return new pn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pn.EMPTY_BYTE_STRING=new pn("");const bD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(n){if(it(!!n,39018),typeof n=="string"){let e=0;const t=bD.exec(n);if(it(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Mt(n.seconds),nanos:Mt(n.nanos)}}function Mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zr(n){return typeof n=="string"?pn.fromBase64String(n):pn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="server_timestamp",eS="__type__",tS="__previous_value__",nS="__local_write_time__";function U_(n){return(n?.mapValue?.fields||{})[eS]?.stringValue===Jw}function Dd(n){const e=n.mapValue.fields[tS];return U_(e)?Dd(e):e}function gu(n){const e=Ur(n.mapValue.fields[nS].timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,t,s,a,l,u,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Yf="(default)";class _u{constructor(e,t){this.projectId=e,this.database=t||Yf}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===Yf}isEqual(e){return e instanceof _u&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="__type__",SD="__max__",_f={mapValue:{}},sS="__vector__",Qf="value";function Fr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?U_(n)?4:CD(n)?9007199254740991:AD(n)?10:11:Ae(28295,{value:n})}function Ji(n,e){if(n===e)return!0;const t=Fr(n);if(t!==Fr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gu(n).isEqual(gu(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=Ur(a.timestampValue),d=Ur(l.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return zr(a.bytesValue).isEqual(zr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Mt(a.geoPointValue.latitude)===Mt(l.geoPointValue.latitude)&&Mt(a.geoPointValue.longitude)===Mt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Mt(a.integerValue)===Mt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=Mt(a.doubleValue),d=Mt(l.doubleValue);return u===d?Gf(u)===Gf(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return dl(n.arrayValue.values||[],e.arrayValue.values||[],Ji);case 10:case 11:return(function(a,l){const u=a.mapValue.fields||{},d=l.mapValue.fields||{};if(pb(u)!==pb(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!Ji(u[p],d[p])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function yu(n,e){return(n.values||[]).find((t=>Ji(t,e)))!==void 0}function ml(n,e){if(n===e)return 0;const t=Fr(n),s=Fr(e);if(t!==s)return Ge(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ge(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const d=Mt(l.integerValue||l.doubleValue),p=Mt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1})(n,e);case 3:return _b(n.timestampValue,e.timestampValue);case 4:return _b(gu(n),gu(e));case 5:return zg(n.stringValue,e.stringValue);case 6:return(function(l,u){const d=zr(l),p=zr(u);return d.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const d=l.split("/"),p=u.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Ge(d[g],p[g]);if(y!==0)return y}return Ge(d.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const d=Ge(Mt(l.latitude),Mt(u.latitude));return d!==0?d:Ge(Mt(l.longitude),Mt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return yb(n.arrayValue,e.arrayValue);case 10:return(function(l,u){const d=l.fields||{},p=u.fields||{},g=d[Qf]?.arrayValue,y=p[Qf]?.arrayValue,b=Ge(g?.values?.length||0,y?.values?.length||0);return b!==0?b:yb(g,y)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===_f.mapValue&&u===_f.mapValue)return 0;if(l===_f.mapValue)return 1;if(u===_f.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=u.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let b=0;b<p.length&&b<y.length;++b){const w=zg(p[b],y[b]);if(w!==0)return w;const R=ml(d[p[b]],g[y[b]]);if(R!==0)return R}return Ge(p.length,y.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{he:t})}}function _b(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ge(n,e);const t=Ur(n),s=Ur(e),a=Ge(t.seconds,s.seconds);return a!==0?a:Ge(t.nanos,s.nanos)}function yb(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=ml(t[a],s[a]);if(l)return l}return Ge(t.length,s.length)}function pl(n){return Bg(n)}function Bg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Ur(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return zr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Te.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Bg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of s)l?l=!1:a+=",",a+=`${u}:${Bg(t.fields[u])}`;return a+"}"})(n.mapValue):Ae(61005,{value:n})}function xf(n){switch(Fr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dd(n);return e?16+xf(e):16;case 5:return 2*n.stringValue.length;case 6:return zr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+xf(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Qr(s.fields,((l,u)=>{a+=l.length+xf(u)})),a})(n.mapValue);default:throw Ae(13486,{value:n})}}function vb(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function qg(n){return!!n&&"integerValue"in n}function z_(n){return!!n&&"arrayValue"in n}function Eb(n){return!!n&&"nullValue"in n}function Tb(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rf(n){return!!n&&"mapValue"in n}function AD(n){return(n?.mapValue?.fields||{})[iS]?.stringValue===sS}function nu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Qr(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=nu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=nu(n.arrayValue.values[t]);return e}return{...n}}function CD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===SD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Rf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nu(t)}setAll(e){let t=mn.emptyPath(),s={},a=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}u?s[d.lastSegment()]=nu(u):a.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Rf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Rf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Qr(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Ln(nu(this.value))}}function rS(n){const e=[];return Qr(n.fields,((t,s)=>{const a=new mn([t]);if(Rf(s)){const l=rS(s.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)})),new Xn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t,s,a,l,u,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Tn(e,0,De.min(),De.min(),De.min(),Ln.empty(),0)}static newFoundDocument(e,t,s,a){return new Tn(e,1,t,De.min(),s,a,0)}static newNoDocument(e,t){return new Tn(e,2,t,De.min(),De.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new Tn(e,3,t,De.min(),De.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kf{constructor(e,t){this.position=e,this.inclusive=t}}function bb(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?s=Te.comparator(Te.fromName(u.referenceValue),t.key):s=ml(u,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function wb(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ji(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class vu{constructor(e,t="asc"){this.field=e,this.dir=t}}function xD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class aS{}class Bt extends aS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new ID(e,t,s):t==="array-contains"?new kD(e,s):t==="in"?new MD(e,s):t==="not-in"?new OD(e,s):t==="array-contains-any"?new PD(e,s):new Bt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new ND(e,s):new DD(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ml(t,this.value)):t!==null&&Fr(this.value)===Fr(t)&&this.matchesComparison(ml(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Si extends aS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Si(e,t)}matches(e){return oS(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oS(n){return n.op==="and"}function lS(n){return RD(n)&&oS(n)}function RD(n){for(const e of n.filters)if(e instanceof Si)return!1;return!0}function Hg(n){if(n instanceof Bt)return n.field.canonicalString()+n.op.toString()+pl(n.value);if(lS(n))return n.filters.map((e=>Hg(e))).join(",");{const e=n.filters.map((t=>Hg(t))).join(",");return`${n.op}(${e})`}}function cS(n,e){return n instanceof Bt?(function(s,a){return a instanceof Bt&&s.op===a.op&&s.field.isEqual(a.field)&&Ji(s.value,a.value)})(n,e):n instanceof Si?(function(s,a){return a instanceof Si&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,u,d)=>l&&cS(u,a.filters[d])),!0):!1})(n,e):void Ae(19439)}function uS(n){return n instanceof Bt?(function(t){return`${t.field.canonicalString()} ${t.op} ${pl(t.value)}`})(n):n instanceof Si?(function(t){return t.op.toString()+" {"+t.getFilters().map(uS).join(" ,")+"}"})(n):"Filter"}class ID extends Bt{constructor(e,t,s){super(e,t,s),this.key=Te.fromName(s.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class ND extends Bt{constructor(e,t){super(e,"in",t),this.keys=hS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class DD extends Bt{constructor(e,t){super(e,"not-in",t),this.keys=hS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hS(n,e){return(e.arrayValue?.values||[]).map((t=>Te.fromName(t.referenceValue)))}class kD extends Bt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return z_(t)&&yu(t.arrayValue,this.value)}}class MD extends Bt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yu(this.value.arrayValue,t)}}class OD extends Bt{constructor(e,t){super(e,"not-in",t)}matches(e){if(yu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yu(this.value.arrayValue,t)}}class PD extends Bt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!z_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>yu(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,t=null,s=[],a=[],l=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=u,this.endAt=d,this.Te=null}}function Sb(n,e=null,t=[],s=[],a=null,l=null,u=null){return new VD(n,e,t,s,a,l,u)}function F_(n){const e=ke(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Hg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Nd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>pl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>pl(s))).join(",")),e.Te=t}return e.Te}function B_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wb(n.startAt,e.startAt)&&wb(n.endAt,e.endAt)}function Gg(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t=null,s=[],a=[],l=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=u,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function LD(n,e,t,s,a,l,u,d){return new Dl(n,e,t,s,a,l,u,d)}function kd(n){return new Dl(n)}function Ab(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fS(n){return n.collectionGroup!==null}function iu(n){const e=ke(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new $t(mn.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new vu(l,s))})),t.has(mn.keyField().canonicalString())||e.Ie.push(new vu(mn.keyField(),s))}return e.Ie}function Qi(n){const e=ke(n);return e.Ee||(e.Ee=jD(e,iu(n))),e.Ee}function jD(n,e){if(n.limitType==="F")return Sb(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new vu(a.field,l)}));const t=n.endAt?new Kf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Kf(n.startAt.position,n.startAt.inclusive):null;return Sb(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Yg(n,e){const t=n.filters.concat([e]);return new Dl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xf(n,e,t){return new Dl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Md(n,e){return B_(Qi(n),Qi(e))&&n.limitType===e.limitType}function dS(n){return`${F_(Qi(n))}|lt:${n.limitType}`}function Wo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>uS(a))).join(", ")}]`),Nd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>pl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>pl(a))).join(",")),`Target(${s})`})(Qi(n))}; limitType=${n.limitType})`}function Od(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Te.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of iu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(u,d,p){const g=bb(u,d,p);return u.inclusive?g<=0:g<0})(s.startAt,iu(s),a)||s.endAt&&!(function(u,d,p){const g=bb(u,d,p);return u.inclusive?g>=0:g>0})(s.endAt,iu(s),a))})(n,e)}function UD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mS(n){return(e,t)=>{let s=!1;for(const a of iu(n)){const l=zD(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function zD(n,e,t){const s=n.field.isKeyField()?Te.comparator(e.key,t.key):(function(l,u,d){const p=u.data.field(l),g=d.data.field(l);return p!==null&&g!==null?ml(p,g):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=new Ht(Te.comparator);function Hs(){return FD}const pS=new Ht(Te.comparator);function Wc(...n){let e=pS;for(const t of n)e=e.insert(t.key,t);return e}function gS(n){let e=pS;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ka(){return su()}function _S(){return su()}function su(){return new Wa((n=>n.toString()),((n,e)=>n.isEqual(e)))}const BD=new Ht(Te.comparator),qD=new $t(Te.comparator);function Ye(...n){let e=qD;for(const t of n)e=e.add(t);return e}const HD=new $t(Ge);function GD(){return HD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gf(e)?"-0":e}}function yS(n){return{integerValue:""+n}}function YD(n,e){return vD(e)?yS(e):q_(n,e)}/**
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
 */class Pd{constructor(){this._=void 0}}function QD(n,e,t){return n instanceof Eu?(function(a,l){const u={fields:{[eS]:{stringValue:Jw},[nS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&U_(l)&&(l=Dd(l)),l&&(u.fields[tS]=l),{mapValue:u}})(t,e):n instanceof gl?ES(n,e):n instanceof _l?TS(n,e):(function(a,l){const u=vS(a,l),d=Cb(u)+Cb(a.Ae);return qg(u)&&qg(a.Ae)?yS(d):q_(a.serializer,d)})(n,e)}function KD(n,e,t){return n instanceof gl?ES(n,e):n instanceof _l?TS(n,e):t}function vS(n,e){return n instanceof $f?(function(s){return qg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Eu extends Pd{}class gl extends Pd{constructor(e){super(),this.elements=e}}function ES(n,e){const t=bS(e);for(const s of n.elements)t.some((a=>Ji(a,s)))||t.push(s);return{arrayValue:{values:t}}}class _l extends Pd{constructor(e){super(),this.elements=e}}function TS(n,e){let t=bS(e);for(const s of n.elements)t=t.filter((a=>!Ji(a,s)));return{arrayValue:{values:t}}}class $f extends Pd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cb(n){return Mt(n.integerValue||n.doubleValue)}function bS(n){return z_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t){this.field=e,this.transform=t}}function XD(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof gl&&a instanceof gl||s instanceof _l&&a instanceof _l?dl(s.elements,a.elements,Ji):s instanceof $f&&a instanceof $f?Ji(s.Ae,a.Ae):s instanceof Eu&&a instanceof Eu})(n.transform,e.transform)}class $D{constructor(e,t){this.version=e,this.transformResults=t}}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function If(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vd{}function wS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ld(n.key,Nn.none()):new Mu(n.key,n.data,Nn.none());{const t=n.data,s=Ln.empty();let a=new $t(mn.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?s.delete(l):s.set(l,u),a=a.add(l)}return new Kr(n.key,s,new Xn(a.toArray()),Nn.none())}}function WD(n,e,t){n instanceof Mu?(function(a,l,u){const d=a.value.clone(),p=Rb(a.fieldTransforms,l,u.transformResults);d.setAll(p),l.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Kr?(function(a,l,u){if(!If(a.precondition,l))return void l.convertToUnknownDocument(u.version);const d=Rb(a.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(SS(a)),p.setAll(d),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function ru(n,e,t,s){return n instanceof Mu?(function(l,u,d,p){if(!If(l.precondition,u))return d;const g=l.value.clone(),y=Ib(l.fieldTransforms,p,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Kr?(function(l,u,d,p){if(!If(l.precondition,u))return d;const g=Ib(l.fieldTransforms,p,u),y=u.data;return y.setAll(SS(l)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((b=>b.field)))})(n,e,t,s):(function(l,u,d){return If(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function ZD(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=vS(s.transform,a||null);l!=null&&(t===null&&(t=Ln.empty()),t.set(s.field,l))}return t||null}function xb(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&dl(s,a,((l,u)=>XD(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mu extends Vd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Kr extends Vd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function SS(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Rb(n,e,t){const s=new Map;it(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,d=e.data.field(l.field);s.set(l.field,KD(u,d,t[a]))}return s}function Ib(n,e,t){const s=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);s.set(a.field,QD(l,u,e))}return s}class Ld extends Vd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JD extends Vd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&WD(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ru(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ru(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=_S();return this.mutations.forEach((a=>{const l=e.get(a.key),u=l.overlayedDocument;let d=this.applyToLocalView(u,l.mutatedFields);d=t.has(a.key)?null:d;const p=wS(u,d);p!==null&&s.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(De.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ye())}isEqual(e){return this.batchId===e.batchId&&dl(this.mutations,e.mutations,((t,s)=>xb(t,s)))&&dl(this.baseMutations,e.baseMutations,((t,s)=>xb(t,s)))}}class G_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){it(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return BD})();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,s[u].version);return new G_(e,t,s,a)}}/**
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
 */class tk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,$e;function ik(n){switch(n){case W.OK:return Ae(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function AS(n){if(n===void 0)return qs("GRPC error has no .code"),W.UNKNOWN;switch(n){case zt.OK:return W.OK;case zt.CANCELLED:return W.CANCELLED;case zt.UNKNOWN:return W.UNKNOWN;case zt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case zt.INTERNAL:return W.INTERNAL;case zt.UNAVAILABLE:return W.UNAVAILABLE;case zt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case zt.NOT_FOUND:return W.NOT_FOUND;case zt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case zt.ABORTED:return W.ABORTED;case zt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case zt.DATA_LOSS:return W.DATA_LOSS;default:return Ae(39323,{code:n})}}($e=zt||(zt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sk(){return new TextEncoder}/**
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
 */const rk=new Mr([4294967295,4294967295],0);function Nb(n){const e=sk().encode(n),t=new zw;return t.update(e),new Uint8Array(t.digest())}function Db(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Mr([t,s],0),new Mr([a,l],0)]}class Y_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Zc(`Invalid padding: ${t}`);if(s<0)throw new Zc(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Zc(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Zc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(Mr.fromNumber(s)));return a.compare(rk)===1&&(a=new Mr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nb(e),[s,a]=Db(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);if(!this.we(u))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new Y_(l,a,t);return s.forEach((d=>u.insert(d))),u}insert(e){if(this.ge===0)return;const t=Nb(e),[s,a]=Db(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Zc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Ou.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new jd(De.min(),a,new Ht(Ge),Hs(),Ye())}}class Ou{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ou(s,t,Ye(),Ye(),Ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class CS{constructor(e,t){this.targetId=e,this.Ce=t}}class xS{constructor(e,t,s=pn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class kb{constructor(){this.ve=0,this.Fe=Mb(),this.Me=pn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ye(),t=Ye(),s=Ye();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ae(38017,{changeType:l})}})),new Ou(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Mb()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,it(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ak{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hs(),this.Je=yf(),this.He=yf(),this.Ye=new Ht(Ge)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(Gg(l))if(s===0){const u=new Te(l.path);this.et(t,u,Tn.newNoDocument(u,De.min()))}else it(s===1,20013,{expectedCount:s});else{const u=this._t(t);if(u!==s){const d=this.ut(e),p=d?this.ct(d,e,u):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let u,d;try{u=zr(s).toUint8Array()}catch(p){if(p instanceof Zw)return fl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Y_(u,a,l)}catch(p){return fl(p instanceof Zc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const d=this.ot(u);if(d){if(l.current&&Gg(d.target)){const p=new Te(d.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,Tn.newNoDocument(p,e))}l.Be&&(t.set(u,l.ke()),l.qe())}}));let s=Ye();this.He.forEach(((l,u)=>{let d=!0;u.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const a=new jd(e,t,this.Ye,this.je,s);return this.je=Hs(),this.Je=yf(),this.He=yf(),this.Ye=new Ht(Ge),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new kb,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new $t(Ge),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new $t(Ge),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||_e("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kb),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function yf(){return new Ht(Te.comparator)}function Mb(){return new Ht(Te.comparator)}const ok={asc:"ASCENDING",desc:"DESCENDING"},lk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ck={and:"AND",or:"OR"};class uk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qg(n,e){return n.useProto3Json||Nd(e)?e:{value:e}}function Wf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hk(n,e){return Wf(n,e.toTimestamp())}function Ki(n){return it(!!n,49232),De.fromTimestamp((function(t){const s=Ur(t);return new vt(s.seconds,s.nanos)})(n))}function Q_(n,e){return Kg(n,e).canonicalString()}function Kg(n,e){const t=(function(a){return new pt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function IS(n){const e=pt.fromString(n);return it(OS(e),10190,{key:e.toString()}),e}function Xg(n,e){return Q_(n.databaseId,e.path)}function _g(n,e){const t=IS(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(DS(t))}function NS(n,e){return Q_(n.databaseId,e)}function fk(n){const e=IS(n);return e.length===4?pt.emptyPath():DS(e)}function $g(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DS(n){return it(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ob(n,e,t){return{name:Xg(n,e),fields:t.value.mapValue.fields}}function dk(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,y){return g.useProto3Json?(it(y===void 0||typeof y=="string",58123),pn.fromBase64String(y||"")):(it(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),pn.fromUint8Array(y||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(g){const y=g.code===void 0?W.UNKNOWN:AS(g.code);return new fe(y,g.message||"")})(u);t=new xS(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=_g(n,s.document.name),l=Ki(s.document.updateTime),u=s.document.createTime?Ki(s.document.createTime):De.min(),d=new Ln({mapValue:{fields:s.document.fields}}),p=Tn.newFoundDocument(a,l,u,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new Nf(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=_g(n,s.document),l=s.readTime?Ki(s.readTime):De.min(),u=Tn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Nf([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=_g(n,s.document),l=s.removedTargetIds||[];t=new Nf([],l,a,null)}else{if(!("filter"in e))return Ae(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,u=new nk(a,l),d=s.targetId;t=new CS(d,u)}}return t}function mk(n,e){let t;if(e instanceof Mu)t={update:Ob(n,e.key,e.value)};else if(e instanceof Ld)t={delete:Xg(n,e.key)};else if(e instanceof Kr)t={update:Ob(n,e.key,e.data),updateMask:wk(e.fieldMask)};else{if(!(e instanceof JD))return Ae(16599,{Vt:e.type});t={verify:Xg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,u){const d=u.transform;if(d instanceof Eu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof gl)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof _l)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof $f)return{fieldPath:u.field.canonicalString(),increment:d.Ae};throw Ae(20930,{transform:u.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:hk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ae(27497)})(n,e.precondition)),t}function pk(n,e){return n&&n.length>0?(it(e!==void 0,14353),n.map((t=>(function(a,l){let u=a.updateTime?Ki(a.updateTime):Ki(l);return u.isEqual(De.min())&&(u=Ki(l)),new $D(u,a.transformResults||[])})(t,e)))):[]}function gk(n,e){return{documents:[NS(n,e.path)]}}function _k(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=NS(n,a);const l=(function(g){if(g.length!==0)return MS(Si.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(g){if(g.length!==0)return g.map((y=>(function(w){return{field:Zo(w.field),direction:Ek(w.dir)}})(y)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Qg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function yk(n){let e=fk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){it(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=(function(b){const w=kS(b);return w instanceof Si&&lS(w)?w.getFilters():[w]})(t.where));let u=[];t.orderBy&&(u=(function(b){return b.map((w=>(function(N){return new vu(Jo(N.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(w)))})(t.orderBy));let d=null;t.limit&&(d=(function(b){let w;return w=typeof b=="object"?b.value:b,Nd(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(b){const w=!!b.before,R=b.values||[];return new Kf(R,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(b){const w=!b.before,R=b.values||[];return new Kf(R,w)})(t.endAt)),LD(e,a,u,l,d,"F",p,g)}function vk(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kS(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Jo(t.unaryFilter.field);return Bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Jo(t.unaryFilter.field);return Bt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Jo(t.unaryFilter.field);return Bt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Jo(t.unaryFilter.field);return Bt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Bt.create(Jo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Si.create(t.compositeFilter.filters.map((s=>kS(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function Ek(n){return ok[n]}function Tk(n){return lk[n]}function bk(n){return ck[n]}function Zo(n){return{fieldPath:n.canonicalString()}}function Jo(n){return mn.fromServerFormat(n.fieldPath)}function MS(n){return n instanceof Bt?(function(t){if(t.op==="=="){if(Tb(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NAN"}};if(Eb(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tb(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NOT_NAN"}};if(Eb(t.value))return{unaryFilter:{field:Zo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zo(t.field),op:Tk(t.op),value:t.value}}})(n):n instanceof Si?(function(t){const s=t.getFilters().map((a=>MS(a)));return s.length===1?s[0]:{compositeFilter:{op:bk(t.op),filters:s}}})(n):Ae(54877,{filter:n})}function wk(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function OS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t,s,a,l=De.min(),u=De.min(),d=pn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.yt=e}}function Ak(n){const e=yk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.Cn=new xk}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(jr.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class xk{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new $t(pt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new $t(pt.comparator)).toArray()}}/**
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
 */const Vb="LruGarbageCollector",Rk=1048576;function Lb([n,e],[t,s]){const a=Ge(n,t);return a===0?Ge(e,s):a}class Ik{constructor(e){this.Ir=e,this.buffer=new $t(Lb),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Lb(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Nk{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){_e(Vb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nl(t)?_e(Vb,"Ignoring IndexedDB error during garbage collection: ",t):await Il(t)}await this.Vr(3e5)}))}}class Dk{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Id.ce);const s=new Ik(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Pb)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pb):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,u,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,u=Date.now(),this.nthSequenceNumber(e,a)))).next((b=>(s=b,d=Date.now(),this.removeTargets(e,s,t)))).next((b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((b=>(g=Date.now(),$o()<=qe.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b}))))}}function kk(n,e){return new Dk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.changes=new Wa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Tn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ok{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&ru(s.mutation,a,Xn.empty(),vt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ye()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ye()){const a=ka();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let u=Wc();return l.forEach(((d,p)=>{u=u.insert(d,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const s=ka();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ye())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,s,a){let l=Hs();const u=su(),d=(function(){return su()})();return t.forEach(((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Kr)?l=l.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),ru(y.mutation,g,y.mutation.getFieldMask(),vt.now())):u.set(g.key,Xn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,y)=>u.set(g,y))),t.forEach(((g,y)=>d.set(g,new Ok(y,u.get(g)??null)))),d)))}recalculateAndSaveOverlays(e,t){const s=su();let a=new Ht(((u,d)=>u-d)),l=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Xn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const b=(a.get(d.batchId)||Ye()).add(p);a=a.insert(d.batchId,b)}))})).next((()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,b=_S();y.forEach((w=>{if(!l.has(w)){const R=wS(t.get(w),s.get(w));R!==null&&b.set(w,R),l=l.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(e,g,b))}return ee.waitFor(u)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(u){return Te.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(ka());let d=pu,p=l;return u.next((g=>ee.forEach(g,((y,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next((w=>{p=p.insert(y,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ye()))).next((y=>({batchId:d,changes:gS(y)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next((s=>{let a=Wc();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let u=Wc();return this.indexManager.getCollectionParents(e,l).next((d=>ee.forEach(d,(p=>{const g=(function(b,w){return new Dl(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((y=>{y.forEach(((b,w)=>{u=u.insert(b,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((u=>{l.forEach(((p,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,Tn.newInvalidDocument(y)))}));let d=Wc();return u.forEach(((p,g)=>{const y=l.get(p);y!==void 0&&ru(y.mutation,g,Xn.empty(),vt.now()),Od(t,g)&&(d=d.insert(p,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Ki(a.createTime)}})(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:Ak(a.bundledQuery),readTime:Ki(a.readTime)}})(t)),ee.resolve()}}/**
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
 */class Lk{constructor(){this.overlays=new Ht(Te.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ka();return ee.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=ka(),l=t.length+1,u=new Te(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Ht(((g,y)=>g-y));const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=ka(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=ka(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,y)=>d.set(g,y))),!(d.size()>=a)););return ee.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const u=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(s.key,new tk(t,s));let l=this.qr.get(t);l===void 0&&(l=Ye(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class jk{constructor(){this.sessionToken=pn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.Qr=new $t(sn.$r),this.Ur=new $t(sn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new sn(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new sn(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new Te(new pt([])),s=new sn(t,e),a=new sn(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(u=>{this.Gr(u),l.push(u.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Te(new pt([])),s=new sn(t,e),a=new sn(t,e+1);let l=Ye();return this.Ur.forEachInRange([s,a],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new sn(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class sn{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Te.comparator(e.key,t.key)||Ge(e.Yr,t.Yr)}static Kr(e,t){return Ge(e.Yr,t.Yr)||Te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new $t(sn.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new ek(l,t,s,a);this.mutationQueue.push(u);for(const d of a)this.Zr=this.Zr.add(new sn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(u)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?j_:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new sn(t,0),a=new sn(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(u=>{const d=this.Xr(u.Yr);l.push(d)})),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new $t(Ge);return t.forEach((a=>{const l=new sn(a,0),u=new sn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,u],(d=>{s=s.add(d.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;Te.isDocumentKey(l)||(l=l.child(""));const u=new sn(new Te(l),0);let d=new $t(Ge);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Yr)),!0)}),u),ee.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){it(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,(a=>{const l=new sn(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new sn(t,0),a=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.ri=e,this.docs=(function(){return new Ht(Te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,u=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():Tn.newInvalidDocument(t))}getEntries(e,t){let s=Hs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():Tn.newInvalidDocument(a))})),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Hs();const u=t.path,d=new Te(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||pD(mD(y),s)<=0||(a.has(y.key)||Od(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ae(9500)}ii(e,t){return ee.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Fk(this)}getSize(e){return ee.resolve(this.size)}}class Fk extends Mk{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.persistence=e,this.si=new Wa((t=>F_(t)),B_),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.oi=0,this._i=new K_,this.targetCount=0,this.ai=yl.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new yl(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((u,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.si.delete(u),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)})),ee.waitFor(l).next((()=>a))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((u=>{l.push(a.markPotentiallyOrphaned(e,u))})),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t){this.ui={},this.overlays={},this.ci=new Id(0),this.li=!1,this.li=!0,this.hi=new jk,this.referenceDelegate=e(this),this.Pi=new Bk(this),this.indexManager=new Ck,this.remoteDocumentCache=(function(a){return new zk(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Sk(t),this.Ii=new Vk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new Uk(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){_e("MemoryPersistence","Starting transaction:",e);const a=new qk(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class qk extends _D{constructor(e){super(),this.currentSequenceNumber=e}}class X_{constructor(e){this.persistence=e,this.Ri=new K_,this.Vi=null}static mi(e){return new X_(e)}get fi(){if(this.Vi)return this.Vi;throw Ae(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const a=Te.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,De.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Zf{constructor(e,t){this.persistence=e,this.pi=new Wa((s=>ED(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=kk(this,t)}static mi(e,t){return new Zf(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return ee.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?ee.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(u=>this.br(e,u,t).next((d=>{d||(s++,l.removeEntry(u,De.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xf(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Ye(),a=Ye();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new $_(e,t.fromCache,s,a)}}/**
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
 */class Hk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return kR()?8:yD(bn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new Hk;return this.Ss(e,t,u).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,u,d.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?($o()<=qe.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",Wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):($o()<=qe.DEBUG&&_e("QueryEngine","Query:",Wo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?($o()<=qe.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",Wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qi(t))):ee.resolve())}ys(e,t){if(Ab(t))return ee.resolve(null);let s=Qi(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Xf(t,null,"F"),s=Qi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const u=Ye(...l);return this.ps.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,d);return this.Cs(t,g,u,p.readTime)?this.ys(e,Xf(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return Ab(t)||a.isEqual(De.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((l=>{const u=this.Ds(t,l);return this.Cs(t,u,s,a)?ee.resolve(null):($o()<=qe.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Wo(t)),this.vs(e,u,t,dD(a,pu)).next((d=>d)))}))}Ds(e,t){let s=new $t(mS(e));return t.forEach(((a,l)=>{Od(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return $o()<=qe.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",Wo(t)),this.ps.getDocumentsMatchingQuery(e,t,jr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="LocalStore",Yk=3e8;class Qk{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Ht(Ge),this.xs=new Wa((l=>F_(l)),B_),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pk(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Kk(n,e,t,s){return new Qk(n,e,t,s)}async function LS(n,e){const t=ke(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const u=[],d=[];let p=Ye();for(const g of a){u.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:u,addedBatchIds:d})))}))}))}function Xk(n,e){const t=ke(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,p,g,y){const b=g.batch,w=b.keys();let R=ee.resolve();return w.forEach((N=>{R=R.next((()=>y.getEntry(p,N))).next((L=>{const z=g.docVersions.get(N);it(z!==null,48541),L.version.compareTo(z)<0&&(b.applyToRemoteDocument(L,g),L.isValidDocument()&&(L.setReadTime(g.commitVersion),y.addEntry(L)))}))})),R.next((()=>d.mutationQueue.removeMutationBatch(p,b)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(d){let p=Ye();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function jS(n){const e=ke(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function $k(n,e){const t=ke(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const d=[];e.targetChanges.forEach(((y,b)=>{const w=a.get(b);if(!w)return;d.push(t.Pi.removeMatchingKeys(l,y.removedDocuments,b).next((()=>t.Pi.addMatchingKeys(l,y.addedDocuments,b))));let R=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?R=R.withResumeToken(pn.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,s)),a=a.insert(b,R),(function(L,z,re){return L.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=Yk?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(w,R,y)&&d.push(t.Pi.updateTargetData(l,R))}));let p=Hs(),g=Ye();if(e.documentUpdates.forEach((y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))})),d.push(Wk(l,u,e.documentUpdates).next((y=>{p=y.ks,g=y.qs}))),!s.isEqual(De.min())){const y=t.Pi.getLastRemoteSnapshotVersion(l).next((b=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(y)}return ee.waitFor(d).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function Wk(n,e,t){let s=Ye(),a=Ye();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let u=Hs();return t.forEach(((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(De.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):_e(W_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)})),{ks:u,qs:a}}))}function Zk(n,e){const t=ke(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=j_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Jk(n,e){const t=ke(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,ee.resolve(a)):t.Pi.allocateTargetId(s).next((u=>(a=new Nr(e,u,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Wg(n,e,t){const s=ke(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(u=>s.persistence.referenceDelegate.removeTarget(u,a)))}catch(u){if(!Nl(u))throw u;_e(W_,`Failed to update sequence numbers for target ${e}: ${u}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function jb(n,e,t){const s=ke(n);let a=De.min(),l=Ye();return s.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,g,y){const b=ke(p),w=b.xs.get(y);return w!==void 0?ee.resolve(b.Ms.get(w)):b.Pi.getTargetData(g,y)})(s,u,Qi(e)).next((d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(u,d.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(u,e,t?a:De.min(),t?l:Ye()))).next((d=>(eM(s,UD(e),d),{documents:d,Qs:l})))))}function eM(n,e,t){let s=n.Os.get(e)||De.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class Ub{constructor(){this.activeTargetIds=GD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tM{constructor(){this.Mo=new Ub,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ub,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="ConnectivityMonitor";class Fb{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){_e(zb,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){_e(zb,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const yg="RestConnection",iM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Yf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const u=Zg(),d=this.zo(e,t.toUriEncodedString());_e(yg,`Sending RPC '${e}' ${u}:`,d,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(d),y=Yr(g);return this.Jo(e,d,p,s,y).then((b=>(_e(yg,`Received RPC '${e}' ${u}: `,b),b)),(b=>{throw fl(yg,`RPC '${e}' ${u} failed with error: `,b,"url: ",d,"request:",s),b}))}Ho(e,t,s,a,l,u){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=iM[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="WebChannelConnection";class aM extends sM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const u=Zg();return new Promise(((d,p)=>{const g=new Fw;g.setWithCredentials(!0),g.listenOnce(Bw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Cf.NO_ERROR:const b=g.getResponseJson();_e(vn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(b)),d(b);break;case Cf.TIMEOUT:_e(vn,`RPC '${e}' ${u} timed out`),p(new fe(W.DEADLINE_EXCEEDED,"Request time out"));break;case Cf.HTTP_ERROR:const w=g.getStatus();if(_e(vn,`RPC '${e}' ${u} failed with status:`,w,"response text:",g.getResponseText()),w>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R?.error;if(N&&N.status&&N.message){const L=(function(re){const ne=re.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ne)>=0?ne:W.UNKNOWN})(N.status);p(new fe(L,N.message))}else p(new fe(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new fe(W.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{_e(vn,`RPC '${e}' ${u} completed.`)}}));const y=JSON.stringify(a);_e(vn,`RPC '${e}' ${u} sending request:`,a),g.send(t,"POST",y,s,15)}))}T_(e,t,s){const a=Zg(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=Gw(),d=Hw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");_e(vn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const b=u.createWebChannel(y,p);this.I_(b);let w=!1,R=!1;const N=new rM({Yo:z=>{R?_e(vn,`Not sending because RPC '${e}' stream ${a} is closed:`,z):(w||(_e(vn,`Opening RPC '${e}' stream ${a} transport.`),b.open(),w=!0),_e(vn,`RPC '${e}' stream ${a} sending:`,z),b.send(z))},Zo:()=>b.close()}),L=(z,re,ne)=>{z.listen(re,(ie=>{try{ne(ie)}catch(pe){setTimeout((()=>{throw pe}),0)}}))};return L(b,$c.EventType.OPEN,(()=>{R||(_e(vn,`RPC '${e}' stream ${a} transport opened.`),N.o_())})),L(b,$c.EventType.CLOSE,(()=>{R||(R=!0,_e(vn,`RPC '${e}' stream ${a} transport closed`),N.a_(),this.E_(b))})),L(b,$c.EventType.ERROR,(z=>{R||(R=!0,fl(vn,`RPC '${e}' stream ${a} transport errored. Name:`,z.name,"Message:",z.message),N.a_(new fe(W.UNAVAILABLE,"The operation could not be completed")))})),L(b,$c.EventType.MESSAGE,(z=>{if(!R){const re=z.data[0];it(!!re,16349);const ne=re,ie=ne?.error||ne[0]?.error;if(ie){_e(vn,`RPC '${e}' stream ${a} received error:`,ie);const pe=ie.status;let te=(function(C){const I=zt[C];if(I!==void 0)return AS(I)})(pe),he=ie.message;te===void 0&&(te=W.INTERNAL,he="Unknown error status: "+pe+" with message "+ie.message),R=!0,N.a_(new fe(te,he)),b.close()}else _e(vn,`RPC '${e}' stream ${a} received:`,re),N.u_(re)}})),L(d,qw.STAT_EVENT,(z=>{z.stat===Ug.PROXY?_e(vn,`RPC '${e}' stream ${a} detected buffering proxy`):z.stat===Ug.NOPROXY&&_e(vn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function vg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){return new uk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&_e("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="PersistentStream";class zS{constructor(e,t,s,a,l,u,d,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new US(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(qs(t.toString()),qs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new fe(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return _e(Bb,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(_e(Bb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oM extends zS{constructor(e,t,s,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=dk(this.serializer,e),s=(function(l){if(!("targetChange"in l))return De.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?De.min():u.readTime?Ki(u.readTime):De.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=$g(this.serializer),t.addTarget=(function(l,u){let d;const p=u.target;if(d=Gg(p)?{documents:gk(l,p)}:{query:_k(l,p).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=RS(l,u.resumeToken);const g=Qg(l,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(De.min())>0){d.readTime=Wf(l,u.snapshotVersion.toTimestamp());const g=Qg(l,u.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const s=vk(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=$g(this.serializer),t.removeTarget=e,this.q_(t)}}class lM extends zS{constructor(e,t,s,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return it(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,it(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){it(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=pk(e.writeResults,e.commitTime),s=Ki(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=$g(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>mk(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{}class uM extends cM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new fe(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Go(e,Kg(t,s),a,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(W.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Ho(e,Kg(t,s),a,u,d,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(W.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class hM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qs(t),this.aa=!1):_e("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="RemoteStore";class fM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((u=>{s.enqueueAndForget((async()=>{Za(this)&&(_e(Ha,"Restarting streams for network reachability change."),await(async function(p){const g=ke(p);g.Ea.add(4),await Pu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await zd(g)})(this))}))})),this.Ra=new hM(s,a)}}async function zd(n){if(Za(n))for(const e of n.da)await e(!0)}async function Pu(n){for(const e of n.da)await e(!1)}function FS(n,e){const t=ke(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ty(t)?ey(t):kl(t).O_()&&J_(t,e))}function Z_(n,e){const t=ke(n),s=kl(t);t.Ia.delete(e),s.O_()&&BS(t,e),t.Ia.size===0&&(s.O_()?s.L_():Za(t)&&t.Ra.set("Unknown"))}function J_(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}kl(n).Y_(e)}function BS(n,e){n.Va.Ue(e),kl(n).Z_(e)}function ey(n){n.Va=new ak({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),kl(n).start(),n.Ra.ua()}function ty(n){return Za(n)&&!kl(n).x_()&&n.Ia.size>0}function Za(n){return ke(n).Ea.size===0}function qS(n){n.Va=void 0}async function dM(n){n.Ra.set("Online")}async function mM(n){n.Ia.forEach(((e,t)=>{J_(n,e)}))}async function pM(n,e){qS(n),ty(n)?(n.Ra.ha(e),ey(n)):n.Ra.set("Unknown")}async function gM(n,e,t){if(n.Ra.set("Online"),e instanceof xS&&e.state===2&&e.cause)try{await(async function(a,l){const u=l.cause;for(const d of l.targetIds)a.Ia.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.Ia.delete(d),a.Va.removeTarget(d))})(n,e)}catch(s){_e(Ha,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Jf(n,s)}else if(e instanceof Nf?n.Va.Ze(e):e instanceof CS?n.Va.st(e):n.Va.tt(e),!t.isEqual(De.min()))try{const s=await jS(n.localStore);t.compareTo(s)>=0&&await(function(l,u){const d=l.Va.Tt(u);return d.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ia.get(g);y&&l.Ia.set(g,y.withResumeToken(p.resumeToken,u))}})),d.targetMismatches.forEach(((p,g)=>{const y=l.Ia.get(p);if(!y)return;l.Ia.set(p,y.withResumeToken(pn.EMPTY_BYTE_STRING,y.snapshotVersion)),BS(l,p);const b=new Nr(y.target,p,g,y.sequenceNumber);J_(l,b)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){_e(Ha,"Failed to raise snapshot:",s),await Jf(n,s)}}async function Jf(n,e,t){if(!Nl(e))throw e;n.Ea.add(1),await Pu(n),n.Ra.set("Offline"),t||(t=()=>jS(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{_e(Ha,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await zd(n)}))}function HS(n,e){return e().catch((t=>Jf(n,t,e)))}async function Fd(n){const e=ke(n),t=Br(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:j_;for(;_M(e);)try{const a=await Zk(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,yM(e,a)}catch(a){await Jf(e,a)}GS(e)&&YS(e)}function _M(n){return Za(n)&&n.Ta.length<10}function yM(n,e){n.Ta.push(e);const t=Br(n);t.O_()&&t.X_&&t.ea(e.mutations)}function GS(n){return Za(n)&&!Br(n).x_()&&n.Ta.length>0}function YS(n){Br(n).start()}async function vM(n){Br(n).ra()}async function EM(n){const e=Br(n);for(const t of n.Ta)e.ea(t.mutations)}async function TM(n,e,t){const s=n.Ta.shift(),a=G_.from(s,e,t);await HS(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Fd(n)}async function bM(n,e){e&&Br(n).X_&&await(async function(s,a){if((function(u){return ik(u)&&u!==W.ABORTED})(a.code)){const l=s.Ta.shift();Br(s).B_(),await HS(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Fd(s)}})(n,e),GS(n)&&YS(n)}async function qb(n,e){const t=ke(n);t.asyncQueue.verifyOperationInProgress(),_e(Ha,"RemoteStore received new credentials");const s=Za(t);t.Ea.add(3),await Pu(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zd(t)}async function wM(n,e){const t=ke(n);e?(t.Ea.delete(2),await zd(t)):e||(t.Ea.add(2),await Pu(t),t.Ra.set("Unknown"))}function kl(n){return n.ma||(n.ma=(function(t,s,a){const l=ke(t);return l.sa(),new oM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:dM.bind(null,n),t_:mM.bind(null,n),r_:pM.bind(null,n),H_:gM.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),ty(n)?ey(n):n.Ra.set("Unknown")):(await n.ma.stop(),qS(n))}))),n.ma}function Br(n){return n.fa||(n.fa=(function(t,s,a){const l=ke(t);return l.sa(),new lM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:vM.bind(null,n),r_:bM.bind(null,n),ta:EM.bind(null,n),na:TM.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Fd(n)):(await n.fa.stop(),n.Ta.length>0&&(_e(Ha,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const u=Date.now()+s,d=new ny(e,t,u,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iy(n,e){if(qs("AsyncQueue",`${e}: ${n}`),Nl(n))return new fe(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{static emptySet(e){return new rl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Te.comparator(t.key,s.key):(t,s)=>Te.comparator(t.key,s.key),this.keyedMap=Wc(),this.sortedSet=new Ht(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Hb{constructor(){this.ga=new Ht(Te.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ae(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class vl{constructor(e,t,s,a,l,u,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new vl(e,t,rl.emptySet(t),u,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class AM{constructor(){this.queries=Gb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=ke(t),l=a.queries;a.queries=Gb(),l.forEach(((u,d)=>{for(const p of d.Sa)p.onError(s)}))})(this,new fe(W.ABORTED,"Firestore shutting down"))}}function Gb(){return new Wa((n=>dS(n)),Md)}async function sy(n,e){const t=ke(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new SM,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=iy(u,`Initialization of query '${Wo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ay(t)}async function ry(n,e){const t=ke(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function CM(n,e){const t=ke(n);let s=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const d of u.Sa)d.Fa(a)&&(s=!0);u.wa=a}}s&&ay(t)}function xM(n,e,t){const s=ke(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function ay(n){n.Ca.forEach((e=>{e.next()}))}var Jg,Yb;(Yb=Jg||(Jg={})).Ma="default",Yb.Cache="cache";class oy{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new vl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Jg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.key=e}}class KS{constructor(e){this.key=e}}class RM{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ye(),this.mutatedKeys=Ye(),this.eu=mS(e),this.tu=new rl(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Hb,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((y,b)=>{const w=a.get(y),R=Od(this.query,b)?b:null,N=!!w&&this.mutatedKeys.has(w.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let z=!1;w&&R?w.data.isEqual(R.data)?N!==L&&(s.track({type:3,doc:R}),z=!0):this.su(w,R)||(s.track({type:2,doc:R}),z=!0,(p&&this.eu(R,p)>0||g&&this.eu(R,g)<0)&&(d=!0)):!w&&R?(s.track({type:0,doc:R}),z=!0):w&&!R&&(s.track({type:1,doc:w}),z=!0,(p||g)&&(d=!0)),z&&(R?(u=u.add(R),l=L?l.add(y):l.delete(y)):(u=u.delete(y),l=l.delete(y)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{tu:u,iu:s,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((y,b)=>(function(R,N){const L=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Rt:z})}};return L(R)-L(N)})(y.type,b.type)||this.eu(y.doc,b.doc))),this.ou(s),a=a??!1;const d=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,u.length!==0||g?{snapshot:new vl(this.query,e.tu,l,u,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hb,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ye(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new KS(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new QS(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ye();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ly="SyncEngine";class IM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class NM{constructor(e){this.key=e,this.hu=!1}}class DM{constructor(e,t,s,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Wa((d=>dS(d)),Md),this.Iu=new Map,this.Eu=new Set,this.du=new Ht(Te.comparator),this.Au=new Map,this.Ru=new K_,this.Vu={},this.mu=new Map,this.fu=yl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kM(n,e,t=!0){const s=eA(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await XS(s,e,t,!0),a}async function MM(n,e){const t=eA(n);await XS(t,e,!0,!1)}async function XS(n,e,t,s){const a=await Jk(n.localStore,Qi(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await OM(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&FS(n.remoteStore,a),d}async function OM(n,e,t,s,a){n.pu=(b,w,R)=>(async function(L,z,re,ne){let ie=z.view.ru(re);ie.Cs&&(ie=await jb(L.localStore,z.query,!1).then((({documents:k})=>z.view.ru(k,ie))));const pe=ne&&ne.targetChanges.get(z.targetId),te=ne&&ne.targetMismatches.get(z.targetId)!=null,he=z.view.applyChanges(ie,L.isPrimaryClient,pe,te);return Kb(L,z.targetId,he.au),he.snapshot})(n,b,w,R);const l=await jb(n.localStore,e,!0),u=new RM(e,l.Qs),d=u.ru(l.documents),p=Ou.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=u.applyChanges(d,n.isPrimaryClient,p);Kb(n,t,g.au);const y=new IM(e,t,u);return n.Tu.set(e,y),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function PM(n,e,t){const s=ke(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((u=>!Md(u,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Wg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Z_(s.remoteStore,a.targetId),e_(s,a.targetId)})).catch(Il)):(e_(s,a.targetId),await Wg(s.localStore,a.targetId,!0))}async function VM(n,e){const t=ke(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Z_(t.remoteStore,s.targetId))}async function LM(n,e,t){const s=HM(n);try{const a=await(function(u,d){const p=ke(u),g=vt.now(),y=d.reduce(((R,N)=>R.add(N.key)),Ye());let b,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let N=Hs(),L=Ye();return p.Ns.getEntries(R,y).next((z=>{N=z,N.forEach(((re,ne)=>{ne.isValidDocument()||(L=L.add(re))}))})).next((()=>p.localDocuments.getOverlayedDocuments(R,N))).next((z=>{b=z;const re=[];for(const ne of d){const ie=ZD(ne,b.get(ne.key).overlayedDocument);ie!=null&&re.push(new Kr(ne.key,ie,rS(ie.value.mapValue),Nn.exists(!0)))}return p.mutationQueue.addMutationBatch(R,g,re,d)})).next((z=>{w=z;const re=z.applyToLocalDocumentSet(b,L);return p.documentOverlayCache.saveOverlays(R,z.batchId,re)}))})).then((()=>({batchId:w.batchId,changes:gS(b)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(u,d,p){let g=u.Vu[u.currentUser.toKey()];g||(g=new Ht(Ge)),g=g.insert(d,p),u.Vu[u.currentUser.toKey()]=g})(s,a.batchId,t),await Vu(s,a.changes),await Fd(s.remoteStore)}catch(a){const l=iy(a,"Failed to persist write");t.reject(l)}}async function $S(n,e){const t=ke(n);try{const s=await $k(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const u=t.Au.get(l);u&&(it(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.hu=!0:a.modifiedDocuments.size>0?it(u.hu,14607):a.removedDocuments.size>0&&(it(u.hu,42227),u.hu=!1))})),await Vu(t,s,e)}catch(s){await Il(s)}}function Qb(n,e,t){const s=ke(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,u)=>{const d=u.view.va(e);d.snapshot&&a.push(d.snapshot)})),(function(u,d){const p=ke(u);p.onlineState=d;let g=!1;p.queries.forEach(((y,b)=>{for(const w of b.Sa)w.va(d)&&(g=!0)})),g&&ay(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jM(n,e,t){const s=ke(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let u=new Ht(Te.comparator);u=u.insert(l,Tn.newNoDocument(l,De.min()));const d=Ye().add(l),p=new jd(De.min(),new Map,new Ht(Ge),u,d);await $S(s,p),s.du=s.du.remove(l),s.Au.delete(e),cy(s)}else await Wg(s.localStore,e,!1).then((()=>e_(s,e,t))).catch(Il)}async function UM(n,e){const t=ke(n),s=e.batch.batchId;try{const a=await Xk(t.localStore,e);ZS(t,s,null),WS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Vu(t,a)}catch(a){await Il(a)}}async function zM(n,e,t){const s=ke(n);try{const a=await(function(u,d){const p=ke(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next((b=>(it(b!==null,37113),y=b.keys(),p.mutationQueue.removeMutationBatch(g,b)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y))).next((()=>p.localDocuments.getDocuments(g,y)))}))})(s.localStore,e);ZS(s,e,t),WS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Vu(s,a)}catch(a){await Il(a)}}function WS(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function ZS(n,e,t){const s=ke(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function e_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||JS(n,s)}))}function JS(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Z_(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),cy(n))}function Kb(n,e,t){for(const s of t)s instanceof QS?(n.Ru.addReference(s.key,e),FM(n,s)):s instanceof KS?(_e(ly,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||JS(n,s.key)):Ae(19791,{wu:s})}function FM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(_e(ly,"New document in limbo: "+t),n.Eu.add(s),cy(n))}function cy(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Te(pt.fromString(e)),s=n.fu.next();n.Au.set(s,new NM(t)),n.du=n.du.insert(t,s),FS(n.remoteStore,new Nr(Qi(kd(t.path)),s,"TargetPurposeLimboResolution",Id.ce))}}async function Vu(n,e,t){const s=ke(n),a=[],l=[],u=[];s.Tu.isEmpty()||(s.Tu.forEach(((d,p)=>{u.push(s.pu(p,e,t).then((g=>{if((g||t)&&s.isPrimaryClient){const y=g?!g.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){a.push(g);const y=$_.As(p.targetId,g);l.push(y)}})))})),await Promise.all(u),s.Pu.H_(a),await(async function(p,g){const y=ke(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>ee.forEach(g,(w=>ee.forEach(w.Es,(R=>y.persistence.referenceDelegate.addReference(b,w.targetId,R))).next((()=>ee.forEach(w.ds,(R=>y.persistence.referenceDelegate.removeReference(b,w.targetId,R)))))))))}catch(b){if(!Nl(b))throw b;_e(W_,"Failed to update sequence numbers: "+b)}for(const b of g){const w=b.targetId;if(!b.fromCache){const R=y.Ms.get(w),N=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(N);y.Ms=y.Ms.insert(w,L)}}})(s.localStore,l))}async function BM(n,e){const t=ke(n);if(!t.currentUser.isEqual(e)){_e(ly,"User change. New user:",e.toKey());const s=await LS(t.localStore,e);t.currentUser=e,(function(l,u){l.mu.forEach((d=>{d.forEach((p=>{p.reject(new fe(W.CANCELLED,u))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vu(t,s.Ls)}}function qM(n,e){const t=ke(n),s=t.Au.get(e);if(s&&s.hu)return Ye().add(s.key);{let a=Ye();const l=t.Iu.get(e);if(!l)return a;for(const u of l){const d=t.Tu.get(u);a=a.unionWith(d.view.nu)}return a}}function eA(n){const e=ke(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$S.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jM.bind(null,e),e.Pu.H_=CM.bind(null,e.eventManager),e.Pu.yu=xM.bind(null,e.eventManager),e}function HM(n){const e=ke(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zM.bind(null,e),e}class ed{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ud(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Kk(this.persistence,new Gk,e.initialUser,this.serializer)}Cu(e){return new VS(X_.mi,this.serializer)}Du(e){return new tM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ed.provider={build:()=>new ed};class GM extends ed{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){it(this.persistence.referenceDelegate instanceof Zf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Nk(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Vn.withCacheSize(this.cacheSizeBytes):Vn.DEFAULT;return new VS((s=>Zf.mi(s,t)),this.serializer)}}class t_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BM.bind(null,this.syncEngine),await wM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new AM})()}createDatastore(e){const t=Ud(e.databaseInfo.databaseId),s=(function(l){return new aM(l)})(e.databaseInfo);return(function(l,u,d,p){return new uM(l,u,d,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,u,d){return new fM(s,a,l,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Qb(this.syncEngine,t,0)),(function(){return Fb.v()?new Fb:new nM})())}createSyncEngine(e,t){return(function(a,l,u,d,p,g,y){const b=new DM(a,l,u,d,p,g);return y&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=ke(t);_e(Ha,"RemoteStore shutting down."),s.Ea.add(5),await Pu(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}t_.provider={build:()=>new t_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirestoreClient";class YM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=En.UNAUTHENTICATED,this.clientId=L_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async u=>{_e(qr,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(s,(u=>(_e(qr,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=iy(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Eg(n,e){n.asyncQueue.verifyOperationInProgress(),_e(qr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await LS(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Xb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QM(n);_e(qr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>qb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>qb(e.remoteStore,a))),n._onlineComponents=e}async function QM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_e(qr,"Using user provided OfflineComponentProvider");try{await Eg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===W.FAILED_PRECONDITION||a.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;fl("Error using user provided cache. Falling back to memory cache: "+t),await Eg(n,new ed)}}else _e(qr,"Using default OfflineComponentProvider"),await Eg(n,new GM(void 0));return n._offlineComponents}async function tA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_e(qr,"Using user provided OnlineComponentProvider"),await Xb(n,n._uninitializedComponentsProvider._online)):(_e(qr,"Using default OnlineComponentProvider"),await Xb(n,new t_))),n._onlineComponents}function KM(n){return tA(n).then((e=>e.syncEngine))}async function td(n){const e=await tA(n),t=e.eventManager;return t.onListen=kM.bind(null,e.syncEngine),t.onUnlisten=PM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VM.bind(null,e.syncEngine),t}function XM(n,e,t={}){const s=new Us;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,d,p,g){const y=new uy({next:w=>{y.Nu(),u.enqueueAndForget((()=>ry(l,b)));const R=w.docs.has(d);!R&&w.fromCache?g.reject(new fe(W.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&w.fromCache&&p&&p.source==="server"?g.reject(new fe(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new oy(kd(d.path),y,{includeMetadataChanges:!0,qa:!0});return sy(l,b)})(await td(n),n.asyncQueue,e,t,s))),s.promise}function $M(n,e,t={}){const s=new Us;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,d,p,g){const y=new uy({next:w=>{y.Nu(),u.enqueueAndForget((()=>ry(l,b))),w.fromCache&&p.source==="server"?g.reject(new fe(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new oy(d,y,{includeMetadataChanges:!0,qa:!0});return sy(l,b)})(await td(n),n.asyncQueue,e,t,s))),s.promise}/**
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
 */const iA="firestore.googleapis.com",Wb=!0;class Zb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iA,this.ssl=Wb}else this.host=e.host,this.ssl=e.ssl??Wb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=PS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rk)throw new fe(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new nD;switch(s.type){case"firstParty":return new aD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=$b.get(t);s&&(_e("ComponentProvider","Removing Datastore"),$b.delete(t),s.terminate())})(this),Promise.resolve()}}function WM(n,e,t,s={}){n=In(n,Bd);const a=Yr(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;a&&(T_(`https://${d}`),b_("Firestore",!0)),l.host!==iA&&l.host!==d&&fl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:d,ssl:a,emulatorOptions:s};if(!Wi(p,u)&&(n._setSettings(p),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=En.MOCK_USER;else{g=nw(s.mockUserToken,n._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new fe(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new En(b)}n._authCredentials=new iD(new Qw(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ks(this.firestore,e,this._query)}}class xt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}toJSON(){return{type:xt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ku(t,xt._jsonSchema))return new xt(e,s||null,new Te(pt.fromString(t.referencePath)))}}xt._jsonSchemaVersion="firestore/documentReference/1.0",xt._jsonSchema={type:qt("string",xt._jsonSchemaVersion),referencePath:qt("string")};class Pr extends Ks{constructor(e,t,s){super(e,t,kd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new Te(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function Ot(n,e,...t){if(n=gt(n),Kw("collection","path",e),n instanceof Bd){const s=pt.fromString(e,...t);return hb(s),new Pr(n,null,s)}{if(!(n instanceof xt||n instanceof Pr))throw new fe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(e,...t));return hb(s),new Pr(n.firestore,null,s)}}function yt(n,e,...t){if(n=gt(n),arguments.length===1&&(e=L_.newId()),Kw("doc","path",e),n instanceof Bd){const s=pt.fromString(e,...t);return ub(s),new xt(n,null,new Te(s))}{if(!(n instanceof xt||n instanceof Pr))throw new fe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(e,...t));return ub(s),new xt(n.firestore,n instanceof Pr?n.converter:null,new Te(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="AsyncQueue";class e1{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new US(this,"async_queue_retry"),this._c=()=>{const s=vg();s&&_e(Jb,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=vg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=vg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Us;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Nl(e))throw e;_e(Jb,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,qs("INTERNAL UNHANDLED ERROR: ",t1(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=ny.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Ae(47125,{Pc:t1(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function t1(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function n1(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class es extends Bd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new e1,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new e1(e),this._firestoreClient=void 0,await e}}}function ZM(n,e){const t=typeof n=="object"?n:A_(),s=typeof n=="string"?n:Yf,a=Sd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=J1("firestore");l&&WM(a,...l)}return a}function Lu(n){if(n._terminated)throw new fe(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||JM(n),n._firestoreClient}function JM(n){const e=n._freezeSettings(),t=(function(a,l,u,d){return new wD(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nA(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new YM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ui(pn.fromBase64String(e))}catch(t){throw new fe(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ui(pn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ui._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ku(e,ui._jsonSchema))return ui.fromBase64String(e.bytes)}}ui._jsonSchemaVersion="firestore/bytes/1.0",ui._jsonSchema={type:qt("string",ui._jsonSchemaVersion),bytes:qt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xi._jsonSchemaVersion}}static fromJSON(e){if(ku(e,Xi._jsonSchema))return new Xi(e.latitude,e.longitude)}}Xi._jsonSchemaVersion="firestore/geoPoint/1.0",Xi._jsonSchema={type:qt("string",Xi._jsonSchemaVersion),latitude:qt("number"),longitude:qt("number")};/**
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
 */class $i{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$i._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ku(e,$i._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $i(e.vectorValues);throw new fe(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$i._jsonSchemaVersion="firestore/vectorValue/1.0",$i._jsonSchema={type:qt("string",$i._jsonSchemaVersion),vectorValues:qt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=/^__.*__$/;class tO{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mu(e,this.data,t,this.fieldTransforms)}}class sA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Kr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ac:n})}}class qd{constructor(e,t,s,a,l,u){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new qd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return nd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(rA(this.Ac)&&eO.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class nO{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ud(e)}Cc(e,t,s,a=!1){return new qd({Ac:e,methodName:t,Dc:s,path:mn.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uu(n){const e=n._freezeSettings(),t=Ud(n._databaseId);return new nO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hy(n,e,t,s,a,l={}){const u=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);py("Data must be an object, but it was:",u,s);const d=cA(s,u);let p,g;if(l.merge)p=new Xn(u.fieldMask),g=u.fieldTransforms;else if(l.mergeFields){const y=[];for(const b of l.mergeFields){const w=n_(e,b,t);if(!u.contains(w))throw new fe(W.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);hA(y,w)||y.push(w)}p=new Xn(y),g=u.fieldTransforms.filter((b=>p.covers(b.field)))}else p=null,g=u.fieldTransforms;return new tO(new Ln(d),p,g)}class Hd extends Ml{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hd}}function aA(n,e,t){return new qd({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fy extends Ml{_toFieldTransform(e){return new H_(e.path,new Eu)}isEqual(e){return e instanceof fy}}class dy extends Ml{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=aA(this,e,!0),s=this.vc.map((l=>Ja(l,t))),a=new gl(s);return new H_(e.path,a)}isEqual(e){return e instanceof dy&&Wi(this.vc,e.vc)}}class my extends Ml{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=aA(this,e,!0),s=this.vc.map((l=>Ja(l,t))),a=new _l(s);return new H_(e.path,a)}isEqual(e){return e instanceof my&&Wi(this.vc,e.vc)}}function oA(n,e,t,s){const a=n.Cc(1,e,t);py("Data must be an object, but it was:",a,s);const l=[],u=Ln.empty();Qr(s,((p,g)=>{const y=gy(e,p,t);g=gt(g);const b=a.yc(y);if(g instanceof Hd)l.push(y);else{const w=Ja(g,b);w!=null&&(l.push(y),u.set(y,w))}}));const d=new Xn(l);return new sA(u,d,a.fieldTransforms)}function lA(n,e,t,s,a,l){const u=n.Cc(1,e,t),d=[n_(e,s,t)],p=[a];if(l.length%2!=0)throw new fe(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(n_(e,l[w])),p.push(l[w+1]);const g=[],y=Ln.empty();for(let w=d.length-1;w>=0;--w)if(!hA(g,d[w])){const R=d[w];let N=p[w];N=gt(N);const L=u.yc(R);if(N instanceof Hd)g.push(R);else{const z=Ja(N,L);z!=null&&(g.push(R),y.set(R,z))}}const b=new Xn(g);return new sA(y,b,u.fieldTransforms)}function iO(n,e,t,s=!1){return Ja(t,n.Cc(s?4:3,e))}function Ja(n,e){if(uA(n=gt(n)))return py("Unsupported field value:",e,n),cA(n,e);if(n instanceof Ml)return(function(s,a){if(!rA(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let u=0;for(const d of s){let p=Ja(d,a.wc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return YD(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=vt.fromDate(s);return{timestampValue:Wf(a.serializer,l)}}if(s instanceof vt){const l=new vt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wf(a.serializer,l)}}if(s instanceof Xi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ui)return{bytesValue:RS(a.serializer,s._byteString)};if(s instanceof xt){const l=a.databaseId,u=s.firestore._databaseId;if(!u.isEqual(l))throw a.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Q_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof $i)return(function(u,d){return{mapValue:{fields:{[iS]:{stringValue:sS},[Qf]:{arrayValue:{values:u.toArray().map((g=>{if(typeof g!="number")throw d.Sc("VectorValues must only contain numeric values.");return q_(d.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Rd(s)}`)})(n,e)}function cA(n,e){const t={};return Ww(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(n,((s,a)=>{const l=Ja(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function uA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Xi||n instanceof ui||n instanceof xt||n instanceof Ml||n instanceof $i)}function py(n,e,t){if(!uA(t)||!Xw(t)){const s=Rd(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function n_(n,e,t){if((e=gt(e))instanceof ju)return e._internalPath;if(typeof e=="string")return gy(n,e);throw nd("Field path arguments must be of type string or ",n,!1,void 0,t)}const sO=new RegExp("[~\\*/\\[\\]]");function gy(n,e,t){if(e.search(sO)>=0)throw nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ju(...e.split("."))._internalPath}catch{throw nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function nd(n,e,t,s,a){const l=s&&!s.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${s}`),u&&(p+=` in document ${a}`),p+=")"),new fe(W.INVALID_ARGUMENT,d+n+p)}function hA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rO extends fA{data(){return super.data()}}function Gd(n,e){return typeof e=="string"?gy(n,e):e instanceof ju?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _y{}class yy extends _y{}function on(n,e,...t){let s=[];e instanceof _y&&s.push(e),s=s.concat(t),(function(l){const u=l.filter((p=>p instanceof vy)).length,d=l.filter((p=>p instanceof Yd)).length;if(u>1||u>0&&d>0)throw new fe(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Yd extends yy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Yd(e,t,s)}_apply(e){const t=this._parse(e);return gA(e._query,t),new Ks(e.firestore,e.converter,Yg(e._query,t))}_parse(e){const t=Uu(e.firestore);return(function(l,u,d,p,g,y,b){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new fe(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){s1(b,y);const N=[];for(const L of b)N.push(i1(p,l,L));w={arrayValue:{values:N}}}else w=i1(p,l,b)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||s1(b,y),w=iO(d,u,b,y==="in"||y==="not-in");return Bt.create(g,y,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Et(n,e,t){const s=e,a=Gd("where",n);return Yd._create(a,s,t)}class vy extends _y{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Si.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let u=a;const d=l.getFlattenedFilters();for(const p of d)gA(u,p),u=Yg(u,p)})(e._query,t),new Ks(e.firestore,e.converter,Yg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ey extends yy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ey(e,t)}_apply(e){const t=(function(a,l,u){if(a.startAt!==null)throw new fe(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new fe(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vu(l,u)})(e._query,this._field,this._direction);return new Ks(e.firestore,e.converter,(function(a,l){const u=a.explicitOrderBy.concat([l]);return new Dl(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function mA(n,e="asc"){const t=e,s=Gd("orderBy",n);return Ey._create(s,t)}class Ty extends yy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Ty(e,t,s)}_apply(e){return new Ks(e.firestore,e.converter,Xf(e._query,this._limit,this._limitType))}}function pA(n){return Ty._create("limit",n,"F")}function i1(n,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new fe(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fS(e)&&t.indexOf("/")!==-1)throw new fe(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(pt.fromString(t));if(!Te.isDocumentKey(s))throw new fe(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vb(n,new Te(s))}if(t instanceof xt)return vb(n,t._key);throw new fe(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rd(t)}.`)}function s1(n,e){if(!Array.isArray(n)||n.length===0)throw new fe(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gA(n,e){const t=(function(a,l){for(const u of a)for(const d of u.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new fe(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class aO{convertValue(e,t="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Qr(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Qf].arrayValue?.values?.map((s=>Mt(s.doubleValue)));return new $i(t)}convertGeoPoint(e){return new Xi(Mt(e.latitude),Mt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Dd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const t=Ur(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=pt.fromString(e);it(OS(s),9688,{name:e});const a=new _u(s.get(1),s.get(3)),l=new Te(s.popFirst(5));return a.isEqual(t)||qs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Jc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Va extends fA{constructor(e,t,s,a,l,u){super(e,t,s,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Df(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Gd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Va._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Va._jsonSchemaVersion="firestore/documentSnapshot/1.0",Va._jsonSchema={type:qt("string",Va._jsonSchemaVersion),bundleSource:qt("string","DocumentSnapshot"),bundleName:qt("string"),bundle:qt("string")};class Df extends Va{data(e={}){return super.data(e)}}class La{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Jc(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Df(this._firestore,this._userDataWriter,s.key,s,new Jc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map((d=>{const p=new Df(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Jc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const p=new Df(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Jc(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:oO(d.type),doc:p,oldIndex:g,newIndex:y}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=La._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=L_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n){n=In(n,xt);const e=In(n.firestore,es);return XM(Lu(e),n._key).then((t=>_A(e,n,t)))}La._jsonSchemaVersion="firestore/querySnapshot/1.0",La._jsonSchema={type:qt("string",La._jsonSchemaVersion),bundleSource:qt("string","QuerySnapshot"),bundleName:qt("string"),bundle:qt("string")};class wy extends aO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ui(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,t)}}function au(n){n=In(n,Ks);const e=In(n.firestore,es),t=Lu(e),s=new wy(e);return dA(n._query),$M(t,n._query).then((a=>new La(e,s,n,a)))}function lO(n,e,t){n=In(n,xt);const s=In(n.firestore,es),a=by(n.converter,e,t);return zu(s,[hy(Uu(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Nn.none())])}function kt(n,e,t,...s){n=In(n,xt);const a=In(n.firestore,es),l=Uu(a);let u;return u=typeof(e=gt(e))=="string"||e instanceof ju?lA(l,"updateDoc",n._key,e,t,s):oA(l,"updateDoc",n._key,e),zu(a,[u.toMutation(n._key,Nn.exists(!0))])}function sd(n){return zu(In(n.firestore,es),[new Ld(n._key,Nn.none())])}function Sy(n,e){const t=In(n.firestore,es),s=yt(n),a=by(n.converter,e);return zu(t,[hy(Uu(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,Nn.exists(!1))]).then((()=>s))}function Dn(n,...e){n=gt(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||n1(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(n1(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,u,d;if(n instanceof xt)u=In(n.firestore,es),d=kd(n._key.path),l={next:p=>{e[s]&&e[s](_A(u,n,p))},error:e[s+1],complete:e[s+2]};else{const p=In(n,Ks);u=In(p.firestore,es),d=p._query;const g=new wy(u);l={next:y=>{e[s]&&e[s](new La(u,g,p,y))},error:e[s+1],complete:e[s+2]},dA(n._query)}return(function(g,y,b,w){const R=new uy(w),N=new oy(y,R,b);return g.asyncQueue.enqueueAndForget((async()=>sy(await td(g),N))),()=>{R.Nu(),g.asyncQueue.enqueueAndForget((async()=>ry(await td(g),N)))}})(Lu(u),d,a,l)}function zu(n,e){return(function(s,a){const l=new Us;return s.asyncQueue.enqueueAndForget((async()=>LM(await KM(s),a,l))),l.promise})(Lu(n),e)}function _A(n,e,t){const s=t.docs.get(e._key),a=new wy(n);return new Va(n,a,e._key,s,new Jc(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Uu(e)}set(e,t,s){this._verifyNotCommitted();const a=Tg(e,this._firestore),l=by(a.converter,t,s),u=hy(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(u.toMutation(a._key,Nn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=Tg(e,this._firestore);let u;return u=typeof(t=gt(t))=="string"||t instanceof ju?lA(this._dataReader,"WriteBatch.update",l._key,t,s,a):oA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(u.toMutation(l._key,Nn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Tg(e,this._firestore);return this._mutations=this._mutations.concat(new Ld(t._key,Nn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new fe(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tg(n,e){if((n=gt(n)).firestore!==e)throw new fe(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Ga(){return new fy("serverTimestamp")}function ja(...n){return new dy("arrayUnion",n)}function Na(...n){return new my("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(n){return Lu(n=In(n,es)),new cO(n,(e=>zu(n,e)))}(function(e,t=!0){(function(a){Rl=a})($a),Fa(new Lr("firestore",((s,{instanceIdentifier:a,options:l})=>{const u=s.getProvider("app").getImmediate(),d=new es(new sD(s.getProvider("auth-internal")),new oD(u,s.getProvider("app-check-internal")),(function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new fe(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(g.options.projectId,y)})(u,a),u);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),Gi(ab,ob,e),Gi(ab,ob,"esm2020")})();var a1={};const o1="@firebase/database",l1="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yA="";function uO(n){yA=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),an(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ts(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hO(e)}}catch{}return new fO},Ma=vA("localStorage"),dO=vA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new wd("@firebase/database"),mO=(function(){let n=1;return function(){return n++}})(),EA=function(n){const e=HR(n),t=new zR;t.update(e);const s=t.digest();return E_.encodeByteArray(s)},Fu=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fu.apply(null,s):typeof s=="object"?e+=an(s):e+=s,e+=" "}return e};let ou=null,c1=!0;const pO=function(n,e){ue(!0,"Can't turn on custom loggers persistently."),al.logLevel=qe.VERBOSE,ou=al.log.bind(al)},dn=function(...n){if(c1===!0&&(c1=!1,ou===null&&dO.get("logging_enabled")===!0&&pO()),ou){const e=Fu.apply(null,n);ou(e)}},Bu=function(n){return function(...e){dn(n,...e)}},i_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Fu(...n);al.error(e)},Gs=function(...n){const e=`FIREBASE FATAL ERROR: ${Fu(...n)}`;throw al.error(e),new Error(e)},zn=function(...n){const e="FIREBASE WARNING: "+Fu(...n);al.warn(e)},gO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_O=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},El="[MIN_NAME]",Ya="[MAX_NAME]",eo=function(n,e){if(n===e)return 0;if(n===El||e===Ya)return-1;if(e===El||n===Ya)return 1;{const t=u1(n),s=u1(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},yO=function(n,e){return n===e?0:n<e?-1:1},Yc=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+an(e))},Ay=function(n){if(typeof n!="object"||n===null)return an(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=an(e[s]),t+=":",t+=Ay(n[e[s]]);return t+="}",t},TA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function wn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const bA=function(n){ue(!Qd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,u,d,p;n===0?(l=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,u=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let b="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),b=b+w}return b.toLowerCase()},vO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function TO(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const bO=new RegExp("^-?(0*)\\d{1,10}$"),wO=-2147483648,SO=2147483647,u1=function(n){if(bO.test(n)){const e=Number(n);if(e>=wO&&e<=SO)return e}return null},Ol=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw zn("Exception was thrown by user callback.",t),e},Math.floor(0))}},AO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class CO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ci(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){zn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(dn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zn(e)}}class kf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kA{constructor(e,t,s,a,l=!1,u="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ma.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ma.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function RO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function MA(n,e,t){ue(typeof e=="string","typeof type must == string"),ue(typeof t=="object","typeof params must == object");let s;if(e===NA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===DA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RO(n)&&(t.ns=n.namespace);const a=[];return wn(t,(l,u)=>{a.push(l+"="+u)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.counters_={}}incrementCounter(e,t=1){ts(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return vR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={},wg={};function xy(n){const e=n.toString();return bg[e]||(bg[e]=new IO),bg[e]}function NO(n,e){const t=n.toString();return wg[t]||(wg[t]=e()),wg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ol(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="start",kO="close",MO="pLPCommand",OO="pRTLPCB",OA="id",PA="pw",VA="ser",PO="cb",VO="seg",LO="ts",jO="d",UO="dframe",LA=1870,jA=30,zO=LA-jA,FO=25e3,BO=3e4;class el{constructor(e,t,s,a,l,u,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bu(e),this.stats_=xy(t),this.urlFn=p=>(this.appCheckToken&&(p[s_]=this.appCheckToken),MA(t,DA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new DO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BO)),_O(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ry((...l)=>{const[u,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===h1)this.id=d,this.password=p;else if(u===kO)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[h1]="t",s[VA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[PO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wA]=Cy,this.transportSessionId&&(s[SA]=this.transportSessionId),this.lastSessionId&&(s[RA]=this.lastSessionId),this.applicationId&&(s[IA]=this.applicationId),this.appCheckToken&&(s[s_]=this.appCheckToken),typeof location<"u"&&location.hostname&&xA.test(location.hostname)&&(s[AA]=CA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){el.forceAllow_=!0}static forceDisallow(){el.forceDisallow_=!0}static isAvailable(){return el.forceAllow_?!0:!el.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vO()&&!EO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=an(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$1(t),a=TA(s,zO);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[UO]="t",s[OA]=e,s[PA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=an(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ry{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mO(),window[MO+this.uniqueCallbackIdentifier]=e,window[OO+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ry.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){dn("frame writing exception"),d.stack&&dn(d.stack),dn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OA]=this.myID,e[PA]=this.myPW,e[VA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jA+s.length<=LA;){const u=this.pendingSegs.shift();s=s+"&"+VO+a+"="+u.seg+"&"+LO+a+"="+u.ts+"&"+jO+a+"="+u.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(FO)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{dn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=16384,HO=45e3;let rd=null;typeof MozWebSocket<"u"?rd=MozWebSocket:typeof WebSocket<"u"&&(rd=WebSocket);class vi{constructor(e,t,s,a,l,u,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bu(this.connId),this.stats_=xy(t),this.connURL=vi.connectionURL_(t,u,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const u={};return u[wA]=Cy,typeof location<"u"&&location.hostname&&xA.test(location.hostname)&&(u[AA]=CA),t&&(u[SA]=t),s&&(u[RA]=s),a&&(u[s_]=a),l&&(u[IA]=l),MA(e,NA,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ma.set("previous_websocket_failure",!0);try{let s;DR(),this.mySock=new rd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&rd!==null&&!vi.forceDisallow_}static previouslyFailed(){return Ma.isInMemoryStorage||Ma.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ma.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=fu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ue(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=an(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=TA(t,qO);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vi.responsesRequiredToBeHealthy=2;vi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{static get ALL_TRANSPORTS(){return[el,vi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=vi&&vi.isAvailable();let s=t&&!vi.previouslyFailed();if(e.webSocketOnly&&(t||zn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[vi];else{const a=this.transports_=[];for(const l of Tu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Tu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=6e4,YO=5e3,QO=10*1024,KO=100*1024,Sg="t",f1="d",XO="s",d1="r",$O="e",m1="o",p1="a",g1="n",_1="p",WO="h";class ZO{constructor(e,t,s,a,l,u,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bu("c:"+this.id+":"),this.transportManager_=new Tu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=lu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sg in e){const t=e[Sg];t===p1?this.upgradeIfSecondaryHealthy_():t===d1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===m1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Yc("t",e),s=Yc("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_1,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:p1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Yc("t",e),s=Yc("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Yc(Sg,e);if(f1 in e){const s=e[f1];if(t===WO){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===g1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===XO?this.onConnectionShutdown_(s):t===d1?this.onReset_(s):t===$O?i_("Server Error: "+s):t===m1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):i_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cy!==s&&zn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),lu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_1,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ma.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zA{constructor(e){this.allowedEvents_=e,this.listeners_={},ue(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ue(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends zA{static getInstance(){return new ad}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!w_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ue(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=32,v1=768;class ot{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function tt(){return new ot("")}function Le(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Hr(n){return n.pieces_.length-n.pieceNum_}function dt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ot(n.pieces_,e)}function Iy(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function JO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function bu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function FA(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ot(e,0)}function Pt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ot)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ot(t,0)}function Ue(n){return n.pieceNum_>=n.pieces_.length}function jn(n,e){const t=Le(n),s=Le(e);if(t===null)return e;if(t===s)return jn(dt(n),dt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function e4(n,e){const t=bu(n,0),s=bu(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=eo(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Ny(n,e){if(Hr(n)!==Hr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function hi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Hr(n)>Hr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class t4{constructor(e,t){this.errorPrefix_=t,this.parts_=bu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=bd(this.parts_[s]);BA(this)}}function n4(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=bd(e),BA(n)}function i4(n){const e=n.parts_.pop();n.byteLength_-=bd(e),n.parts_.length>0&&(n.byteLength_-=1)}function BA(n){if(n.byteLength_>v1)throw new Error(n.errorPrefix_+"has a key path longer than "+v1+" bytes ("+n.byteLength_+").");if(n.parts_.length>y1)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+y1+") or object contains a cycle "+Ia(n))}function Ia(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy extends zA{static getInstance(){return new Dy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ue(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=1e3,s4=300*1e3,E1=30*1e3,r4=1.3,a4=3e4,o4="server_kill",T1=3;class zs extends UA{constructor(e,t,s,a,l,u,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=zs.nextPersistentConnectionId_++,this.log_=Bu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qc,this.maxReconnectDelay_=s4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ad.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(an(l)),ue(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Os,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ue(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(u).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},u="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,d=>{const p=d.d,g=d.s;zs.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ts(e,"w")){const s=cl(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();zn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=E1)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=jR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},u="n";a&&(l.q=s,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const u={p:t,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+an(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):i_("Unrecognized action received from server: "+an(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ue(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a4&&(this.reconnectDelay_=Qc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*r4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+zs.nextConnectionId_++,l=this.lastSessionId;let u=!1,d=null;const p=function(){d?d.close():(u=!0,s())},g=function(b){ue(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(b)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?dn("getToken() completed but was canceled"):(dn("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=w&&w.token,d=new ZO(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,R=>{zn(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(o4)},l))}catch(b){this.log_("Failed to get token: "+b),u||(this.repoInfo_.nodeAdmin&&zn(b),p())}}}interrupt(e){dn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vf(this.interruptReasons_)&&(this.reconnectDelay_=Qc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Ay(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ot(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){dn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=T1&&(this.reconnectDelay_=E1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){dn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=T1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+yA.replace(/\./g,"-")]=1,w_()?e["framework.cordova"]=1:iw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ad.getInstance().currentlyOnline();return Vf(this.interruptReasons_)&&e}}zs.nextPersistentConnectionId_=0;zs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ef;class qA extends Kd{static get __EMPTY_NODE(){return Ef}static set __EMPTY_NODE(e){Ef=e}compare(e,t){return eo(e.name,t.name)}isDefinedOn(e){throw Al("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ze.MIN}maxPost(){return new ze(Ya,Ef)}makePost(e,t){return ue(typeof e=="string","KeyIndex indexValue must always be a string."),new ze(e,Ef)}toString(){return".key"}}const ol=new qA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?s(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??rn.RED,this.left=a??Un.EMPTY_NODE,this.right=l??Un.EMPTY_NODE}copy(e,t,s,a,l){return new rn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Un.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Un.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rn.RED=!0;rn.BLACK=!1;class l4{copy(e,t,s,a,l){return this}insert(e,t,s){return new rn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Un{constructor(e,t=Un.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Un(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,rn.BLACK,null,null))}remove(e){return new Un(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Tf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Tf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Tf(this.root_,null,this.comparator_,!0,e)}}Un.EMPTY_NODE=new l4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(n,e){return eo(n.name,e.name)}function ky(n,e){return eo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r_;function u4(n){r_=n}const HA=function(n){return typeof n=="number"?"number:"+bA(n):"string:"+n},GA=function(n){if(n.isLeafNode()){const e=n.val();ue(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ts(e,".sv"),"Priority must be a string or number.")}else ue(n===r_||n.isEmpty(),"priority of unexpected type.");ue(n===r_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b1;class nn{static set __childrenNodeConstructor(e){b1=e}static get __childrenNodeConstructor(){return b1}constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ue(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:Le(e)===".priority"?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Le(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ue(s!==".priority"||Hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+HA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=bA(this.value_):e+=this.value_,this.lazyHash_=EA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(ue(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=nn.VALUE_TYPE_ORDER.indexOf(t),l=nn.VALUE_TYPE_ORDER.indexOf(s);return ue(a>=0,"Unknown leaf type: "+t),ue(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YA,QA;function h4(n){YA=n}function f4(n){QA=n}class d4 extends Kd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?eo(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ze.MIN}maxPost(){return new ze(Ya,new nn("[PRIORITY-POST]",QA))}makePost(e,t){const s=YA(e);return new ze(t,new nn("[PRIORITY-POST]",s))}toString(){return".priority"}}const St=new d4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4=Math.log(2);class p4{constructor(e){const t=l=>parseInt(Math.log(l)/m4,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const od=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let b,w;if(y===0)return null;if(y===1)return b=n[p],w=t?t(b):b,new rn(w,b.node,rn.BLACK,null,null);{const R=parseInt(y/2,10)+p,N=a(p,R),L=a(R+1,g);return b=n[R],w=t?t(b):b,new rn(w,b.node,rn.BLACK,N,L)}},l=function(p){let g=null,y=null,b=n.length;const w=function(N,L){const z=b-N,re=b;b-=N;const ne=a(z+1,re),ie=n[z],pe=t?t(ie):ie;R(new rn(pe,ie.node,L,null,ne))},R=function(N){g?(g.left=N,g=N):(y=N,g=N)};for(let N=0;N<p.count;++N){const L=p.nextBitIsOne(),z=Math.pow(2,p.count-(N+1));L?w(z,rn.BLACK):(w(z,rn.BLACK),w(z,rn.RED))}return y},u=new p4(n.length),d=l(u);return new Un(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ag;const Xo={};class js{static get Default(){return ue(Xo&&St,"ChildrenNode.ts has not been loaded"),Ag=Ag||new js({".priority":Xo},{".priority":St}),Ag}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=cl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Un?t:null}hasIndex(e){return ts(this.indexSet_,e.toString())}addIndex(e,t){ue(e!==ol,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(ze.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let d;a?d=od(s,e.getCompare()):d=Xo;const p=e.toString(),g={...this.indexSet_};g[p]=e;const y={...this.indexes_};return y[p]=d,new js(y,g)}addToIndexes(e,t){const s=Lf(this.indexes_,(a,l)=>{const u=cl(this.indexSet_,l);if(ue(u,"Missing index implementation for "+l),a===Xo)if(u.isDefinedOn(e.node)){const d=[],p=t.getIterator(ze.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),od(d,u.getCompare())}else return Xo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new ze(e.name,d))),p.insert(e,e.node)}});return new js(s,this.indexSet_)}removeFromIndexes(e,t){const s=Lf(this.indexes_,a=>{if(a===Xo)return a;{const l=t.get(e.name);return l?a.remove(new ze(e.name,l)):a}});return new js(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc;class xe{static get EMPTY_NODE(){return Kc||(Kc=new xe(new Un(ky),null,js.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&GA(this.priorityNode_),this.children_.isEmpty()&&ue(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kc}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Kc:t}}getChild(e){const t=Le(e);return t===null?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ue(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ze(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?Kc:this.priorityNode_;return new xe(a,u,l)}}updateChild(e,t){const s=Le(e);if(s===null)return t;{ue(Le(e)!==".priority"||Hr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(dt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(St,(u,d)=>{t[u]=d.val(e),s++,l&&xe.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*s){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+HA(this.getPriority().val())+":"),this.forEachChild(St,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":EA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new ze(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ze(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ze(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,ze.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,ze.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qu?-1:0}withIndex(e){if(e===ol||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ol||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(St),a=t.getIterator(St);let l=s.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ol?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class g4 extends xe{constructor(){super(new Un(ky),xe.EMPTY_NODE,js.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const qu=new g4;Object.defineProperties(ze,{MIN:{value:new ze(El,xe.EMPTY_NODE)},MAX:{value:new ze(Ya,qu)}});qA.__EMPTY_NODE=xe.EMPTY_NODE;nn.__childrenNodeConstructor=xe;u4(qu);f4(qu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=!0;function Ft(n,e=null){if(n===null)return xe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ue(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new nn(t,Ft(e))}if(!(n instanceof Array)&&_4){const t=[];let s=!1;if(wn(n,(u,d)=>{if(u.substring(0,1)!=="."){const p=Ft(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new ze(u,p)))}}),t.length===0)return xe.EMPTY_NODE;const l=od(t,c4,u=>u.name,ky);if(s){const u=od(t,St.getCompare());return new xe(l,Ft(e),new js({".priority":u},{".priority":St}))}else return new xe(l,Ft(e),js.Default)}else{let t=xe.EMPTY_NODE;return wn(n,(s,a)=>{if(ts(n,s)&&s.substring(0,1)!=="."){const l=Ft(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Ft(e))}}h4(Ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4 extends Kd{constructor(e){super(),this.indexPath_=e,ue(!Ue(e)&&Le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?eo(e.name,t.name):l}makePost(e,t){const s=Ft(e),a=xe.EMPTY_NODE.updateChild(this.indexPath_,s);return new ze(t,a)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,qu);return new ze(Ya,e)}toString(){return bu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4 extends Kd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?eo(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ze.MIN}maxPost(){return ze.MAX}makePost(e,t){const s=Ft(e);return new ze(t,s)}toString(){return".value"}}const E4=new v4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n){return{type:"value",snapshotNode:n}}function Tl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function wu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Su(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function T4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.index_=e}updateChild(e,t,s,a,l,u){ue(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(s.getChild(a))&&d.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(t)?u.trackChildChange(wu(t,d)):ue(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(Tl(t,s)):u.trackChildChange(Su(t,s,d))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(St,(a,l)=>{t.hasChild(a)||s.trackChildChange(wu(a,l))}),t.isLeafNode()||t.forEachChild(St,(a,l)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(l)||s.trackChildChange(Su(a,l,u))}else s.trackChildChange(Tl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?xe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.indexedFilter_=new My(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Au.getStartPost_(e),this.endPost_=Au.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,u){return this.matches(new ze(t,s))||(s=xe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,u)}updateFullNode(e,t,s){t.isLeafNode()&&(t=xe.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(xe.EMPTY_NODE);const l=this;return t.forEachChild(St,(u,d)=>{l.matches(new ze(u,d))||(a=a.updateImmediateChild(u,xe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Au(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,u){return this.rangedFilter_.matches(new ze(t,s))||(s=xe.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,u):this.fullLimitUpdateChild_(e,t,s,l,u)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=xe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=xe.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(xe.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const d=l.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:a=a.updateImmediateChild(d.name,xe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let u;if(this.reverse_){const b=this.index_.getCompare();u=(w,R)=>b(R,w)}else u=this.index_.getCompare();const d=e;ue(d.numChildren()===this.limit_,"");const p=new ze(t,s),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const b=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const R=w==null?1:u(w,p);if(y&&!s.isEmpty()&&R>=0)return l?.trackChildChange(Su(t,s,b)),d.updateImmediateChild(t,s);{l?.trackChildChange(wu(t,b));const L=d.updateImmediateChild(t,xe.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l?.trackChildChange(Tl(w.name,w.node)),L.updateImmediateChild(w.name,w.node)):L}}else return s.isEmpty()?e:y&&u(g,p)>=0?(l!=null&&(l.trackChildChange(wu(g.name,g.node)),l.trackChildChange(Tl(t,s))),d.updateImmediateChild(t,s).updateImmediateChild(g.name,xe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=St}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ue(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ue(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:El}hasEnd(){return this.endSet_}getIndexEndValue(){return ue(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ue(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ya}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ue(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===St}copy(){const e=new Oy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function w4(n){return n.loadsAllData()?new My(n.getIndex()):n.hasLimit()?new b4(n):new Au(n)}function w1(n){const e={};if(n.isDefault())return e;let t;if(n.index_===St?t="$priority":n.index_===E4?t="$value":n.index_===ol?t="$key":(ue(n.index_ instanceof y4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=an(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=an(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+an(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=an(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+an(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function S1(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==St&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends UA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ue(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Bu("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=ld.getListenId_(e,s),d={};this.listens_[u]=d;const p=w1(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let b=y;if(g===404&&(b=null,g=null),g===null&&this.onDataUpdate_(l,b,!1,s),cl(this.listens_,u)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=ld.getListenId_(e,t);delete this.listens_[s]}get(e){const t=w1(e._queryParams),s=e._path.toString(),a=new Os;return this.restRequest_(s+".json",t,(l,u)=>{let d=u;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=fu(d.responseText)}catch{zn("Failed to parse JSON response for "+u+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&zn("Got unsuccessful REST response for "+u+" Status: "+d.status),s(d.status);s=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){return{value:null,children:new Map}}function Pl(n,e,t){if(Ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Le(e);n.children.has(s)||n.children.set(s,cd());const a=n.children.get(s);e=dt(e),Pl(a,e,t)}}function a_(n,e){if(Ue(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(St,(s,a)=>{Pl(n,new ot(s),a)}),a_(n,e)}}else if(n.children.size>0){const t=Le(e);return e=dt(e),n.children.has(t)&&a_(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function o_(n,e,t){n.value!==null?t(e,n.value):A4(n,(s,a)=>{const l=new ot(e.toString()+"/"+s);o_(a,l,t)})}function A4(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&wn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=10*1e3,x4=30*1e3,R4=300*1e3;class I4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new C4(e);const s=A1+(x4-A1)*Math.random();lu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;wn(e,(a,l)=>{l>0&&ts(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),lu(this.reportStats_.bind(this),Math.floor(Math.random()*2*R4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ti;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ti||(Ti={}));function XA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Py(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ti.ACK_USER_WRITE,this.source=XA()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return ue(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ot(e));return new ud(tt(),t,this.revert)}}else return ue(Le(this.path)===e,"operationForChild called for unrelated child."),new ud(dt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.source=e,this.path=t,this.type=Ti.LISTEN_COMPLETE}operationForChild(e){return Ue(this.path)?new Cu(this.source,tt()):new Cu(this.source,dt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ti.OVERWRITE}operationForChild(e){return Ue(this.path)?new Qa(this.source,tt(),this.snap.getImmediateChild(e)):new Qa(this.source,dt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ti.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new ot(e));return t.isEmpty()?null:t.value?new Qa(this.source,tt(),t.value):new xu(this.source,tt(),t)}else return ue(Le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xu(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class N4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function D4(n,e,t,s){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(T4(u.childName,u.snapshotNode))}),Xc(n,a,"child_removed",e,s,t),Xc(n,a,"child_added",e,s,t),Xc(n,a,"child_moved",l,s,t),Xc(n,a,"child_changed",e,s,t),Xc(n,a,"value",e,s,t),a}function Xc(n,e,t,s,a,l){const u=s.filter(d=>d.type===t);u.sort((d,p)=>M4(n,d,p)),u.forEach(d=>{const p=k4(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function k4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function M4(n,e,t){if(e.childName==null||t.childName==null)throw Al("Should only compare child_ events.");const s=new ze(e.childName,e.snapshotNode),a=new ze(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Cg;const O4=()=>(Cg||(Cg=new Un(yO)),Cg);class _t{static fromObject(e){let t=new _t(null);return wn(e,(s,a)=>{t=t.set(new ot(s),a)}),t}constructor(e,t=O4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:tt(),value:this.value};if(Ue(e))return null;{const s=Le(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(dt(e),t);return l!=null?{path:Pt(new ot(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=Le(e),s=this.children.get(t);return s!==null?s.subtree(dt(e)):new _t(null)}}set(e,t){if(Ue(e))return new _t(t,this.children);{const s=Le(e),l=(this.children.get(s)||new _t(null)).set(dt(e),t),u=this.children.insert(s,l);return new _t(this.value,u)}}remove(e){if(Ue(e))return this.children.isEmpty()?new _t(null):new _t(null,this.children);{const t=Le(e),s=this.children.get(t);if(s){const a=s.remove(dt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new _t(null):new _t(this.value,l)}else return this}}get(e){if(Ue(e))return this.value;{const t=Le(e),s=this.children.get(t);return s?s.get(dt(e)):null}}setTree(e,t){if(Ue(e))return t;{const s=Le(e),l=(this.children.get(s)||new _t(null)).setTree(dt(e),t);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new _t(this.value,u)}}fold(e){return this.fold_(tt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Pt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,tt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ue(e))return null;{const l=Le(e),u=this.children.get(l);return u?u.findOnPath_(dt(e),Pt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,tt(),t)}foreachOnPath_(e,t,s){if(Ue(e))return this;{this.value&&s(t,this.value);const a=Le(e),l=this.children.get(a);return l?l.foreachOnPath_(dt(e),Pt(t,a),s):new _t(null)}}foreach(e){this.foreach_(tt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Pt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.writeTree_=e}static empty(){return new wi(new _t(null))}}function uu(n,e,t){if(Ue(e))return new wi(new _t(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const u=jn(a,e);return l=l.updateChild(u,t),new wi(n.writeTree_.set(a,l))}else{const a=new _t(t),l=n.writeTree_.setTree(e,a);return new wi(l)}}}function C1(n,e,t){let s=n;return wn(t,(a,l)=>{s=uu(s,Pt(e,a),l)}),s}function x1(n,e){if(Ue(e))return wi.empty();{const t=n.writeTree_.setTree(e,new _t(null));return new wi(t)}}function c_(n,e){return to(n,e)!=null}function to(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(jn(t.path,e)):null}function R1(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(St,(s,a)=>{e.push(new ze(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new ze(s,a.value))}),e}function Vr(n,e){if(Ue(e))return n;{const t=to(n,e);return t!=null?new wi(new _t(t)):new wi(n.writeTree_.subtree(e))}}function u_(n){return n.writeTree_.isEmpty()}function bl(n,e){return WA(tt(),n.writeTree_,e)}function WA(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ue(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=WA(Pt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Pt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(n,e){return tC(e,n)}function P4(n,e,t,s,a){ue(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=uu(n.visibleWrites,e,t)),n.lastWriteId=s}function V4(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function L4(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ue(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&j4(d,s.path)?a=!1:hi(s.path,d.path)&&(l=!0)),u--}if(a){if(l)return U4(n),!0;if(s.snap)n.visibleWrites=x1(n.visibleWrites,s.path);else{const d=s.children;wn(d,p=>{n.visibleWrites=x1(n.visibleWrites,Pt(s.path,p))})}return!0}else return!1}function j4(n,e){if(n.snap)return hi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&hi(Pt(n.path,t),e))return!0;return!1}function U4(n){n.visibleWrites=ZA(n.allWrites,z4,tt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function z4(n){return n.visible}function ZA(n,e,t){let s=wi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const u=l.path;let d;if(l.snap)hi(t,u)?(d=jn(t,u),s=uu(s,d,l.snap)):hi(u,t)&&(d=jn(u,t),s=uu(s,tt(),l.snap.getChild(d)));else if(l.children){if(hi(t,u))d=jn(t,u),s=C1(s,d,l.children);else if(hi(u,t))if(d=jn(u,t),Ue(d))s=C1(s,tt(),l.children);else{const p=cl(l.children,Le(d));if(p){const g=p.getChild(dt(d));s=uu(s,tt(),g)}}}else throw Al("WriteRecord should have .snap or .children")}}return s}function JA(n,e,t,s,a){if(!s&&!a){const l=to(n.visibleWrites,e);if(l!=null)return l;{const u=Vr(n.visibleWrites,e);if(u_(u))return t;if(t==null&&!c_(u,tt()))return null;{const d=t||xe.EMPTY_NODE;return bl(u,d)}}}else{const l=Vr(n.visibleWrites,e);if(!a&&u_(l))return t;if(!a&&t==null&&!c_(l,tt()))return null;{const u=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(hi(g.path,e)||hi(e,g.path))},d=ZA(n.allWrites,u,e),p=t||xe.EMPTY_NODE;return bl(d,p)}}}function F4(n,e,t){let s=xe.EMPTY_NODE;const a=to(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(St,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(t){const l=Vr(n.visibleWrites,e);return t.forEachChild(St,(u,d)=>{const p=bl(Vr(l,new ot(u)),d);s=s.updateImmediateChild(u,p)}),R1(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=Vr(n.visibleWrites,e);return R1(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function B4(n,e,t,s,a){ue(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Pt(e,t);if(c_(n.visibleWrites,l))return null;{const u=Vr(n.visibleWrites,l);return u_(u)?a.getChild(t):bl(u,a.getChild(t))}}function q4(n,e,t,s){const a=Pt(e,t),l=to(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const u=Vr(n.visibleWrites,a);return bl(u,s.getNode().getImmediateChild(t))}else return null}function H4(n,e){return to(n.visibleWrites,e)}function G4(n,e,t,s,a,l,u){let d;const p=Vr(n.visibleWrites,e),g=to(p,tt());if(g!=null)d=g;else if(t!=null)d=bl(p,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],b=u.getCompare(),w=l?d.getReverseIteratorFrom(s,u):d.getIteratorFrom(s,u);let R=w.getNext();for(;R&&y.length<a;)b(R,s)!==0&&y.push(R),R=w.getNext();return y}else return[]}function Y4(){return{visibleWrites:wi.empty(),allWrites:[],lastWriteId:-1}}function hd(n,e,t,s){return JA(n.writeTree,n.treePath,e,t,s)}function jy(n,e){return F4(n.writeTree,n.treePath,e)}function I1(n,e,t,s){return B4(n.writeTree,n.treePath,e,t,s)}function fd(n,e){return H4(n.writeTree,Pt(n.treePath,e))}function Q4(n,e,t,s,a,l){return G4(n.writeTree,n.treePath,e,t,s,a,l)}function Uy(n,e,t){return q4(n.writeTree,n.treePath,e,t)}function eC(n,e){return tC(Pt(n.treePath,e),n.writeTree)}function tC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ue(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ue(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,Su(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,wu(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Tl(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,Su(s,e.snapshotNode,a.oldSnap));else throw Al("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const nC=new X4;class zy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ka(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xa(this.viewCache_),l=Q4(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(n){return{filter:n}}function W4(n,e){ue(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ue(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Z4(n,e,t,s,a){const l=new K4;let u,d;if(t.type===Ti.OVERWRITE){const g=t;g.source.fromUser?u=h_(n,e,g.path,g.snap,s,a,l):(ue(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Ue(g.path),u=dd(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Ti.MERGE){const g=t;g.source.fromUser?u=eP(n,e,g.path,g.children,s,a,l):(ue(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),u=f_(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Ti.ACK_USER_WRITE){const g=t;g.revert?u=iP(n,e,g.path,s,a,l):u=tP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Ti.LISTEN_COMPLETE)u=nP(n,e,t.path,s,l);else throw Al("Unknown operation type: "+t.type);const p=l.getChanges();return J4(e,u,p),{viewCache:u,changes:p}}function J4(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=l_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(KA(l_(e)))}}function iC(n,e,t,s,a,l){const u=e.eventCache;if(fd(s,t)!=null)return e;{let d,p;if(Ue(t))if(ue(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Xa(e),y=g instanceof xe?g:xe.EMPTY_NODE,b=jy(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),b,l)}else{const g=hd(s,Xa(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Le(t);if(g===".priority"){ue(Hr(t)===1,"Can't have a priority with additional path components");const y=u.getNode();p=e.serverCache.getNode();const b=I1(s,t,y,p);b!=null?d=n.filter.updatePriority(y,b):d=u.getNode()}else{const y=dt(t);let b;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const w=I1(s,t,u.getNode(),p);w!=null?b=u.getNode().getImmediateChild(g).updateChild(y,w):b=u.getNode().getImmediateChild(g)}else b=Uy(s,g,e.serverCache);b!=null?d=n.filter.updateChild(u.getNode(),g,b,y,a,l):d=u.getNode()}}return cu(e,d,u.isFullyInitialized()||Ue(t),n.filter.filtersNodes())}}function dd(n,e,t,s,a,l,u,d){const p=e.serverCache;let g;const y=u?n.filter:n.filter.getIndexedFilter();if(Ue(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),R,null)}else{const R=Le(t);if(!p.isCompleteForPath(t)&&Hr(t)>1)return e;const N=dt(t),z=p.getNode().getImmediateChild(R).updateChild(N,s);R===".priority"?g=y.updatePriority(p.getNode(),z):g=y.updateChild(p.getNode(),R,z,N,nC,null)}const b=$A(e,g,p.isFullyInitialized()||Ue(t),y.filtersNodes()),w=new zy(a,b,l);return iC(n,b,t,a,w,d)}function h_(n,e,t,s,a,l,u){const d=e.eventCache;let p,g;const y=new zy(a,e,l);if(Ue(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,u),p=cu(e,g,!0,n.filter.filtersNodes());else{const b=Le(t);if(b===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=cu(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=dt(t),R=d.getNode().getImmediateChild(b);let N;if(Ue(w))N=s;else{const L=y.getCompleteChild(b);L!=null?Iy(w)===".priority"&&L.getChild(FA(w)).isEmpty()?N=L:N=L.updateChild(w,s):N=xe.EMPTY_NODE}if(R.equals(N))p=e;else{const L=n.filter.updateChild(d.getNode(),b,N,w,y,u);p=cu(e,L,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function N1(n,e){return n.eventCache.isCompleteForChild(e)}function eP(n,e,t,s,a,l,u){let d=e;return s.foreach((p,g)=>{const y=Pt(t,p);N1(e,Le(y))&&(d=h_(n,d,y,g,a,l,u))}),s.foreach((p,g)=>{const y=Pt(t,p);N1(e,Le(y))||(d=h_(n,d,y,g,a,l,u))}),d}function D1(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function f_(n,e,t,s,a,l,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ue(t)?g=s:g=new _t(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((b,w)=>{if(y.hasChild(b)){const R=e.serverCache.getNode().getImmediateChild(b),N=D1(n,R,w);p=dd(n,p,new ot(b),N,a,l,u,d)}}),g.children.inorderTraversal((b,w)=>{const R=!e.serverCache.isCompleteForChild(b)&&w.value===null;if(!y.hasChild(b)&&!R){const N=e.serverCache.getNode().getImmediateChild(b),L=D1(n,N,w);p=dd(n,p,new ot(b),L,a,l,u,d)}}),p}function tP(n,e,t,s,a,l,u){if(fd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ue(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return dd(n,e,t,p.getNode().getChild(t),a,l,d,u);if(Ue(t)){let g=new _t(null);return p.getNode().forEachChild(ol,(y,b)=>{g=g.set(new ot(y),b)}),f_(n,e,t,g,a,l,d,u)}else return e}else{let g=new _t(null);return s.foreach((y,b)=>{const w=Pt(t,y);p.isCompleteForPath(w)&&(g=g.set(y,p.getNode().getChild(w)))}),f_(n,e,t,g,a,l,d,u)}}function nP(n,e,t,s,a){const l=e.serverCache,u=$A(e,l.getNode(),l.isFullyInitialized()||Ue(t),l.isFiltered());return iC(n,u,t,s,nC,a)}function iP(n,e,t,s,a,l){let u;if(fd(s,t)!=null)return e;{const d=new zy(s,e,a),p=e.eventCache.getNode();let g;if(Ue(t)||Le(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=hd(s,Xa(e));else{const b=e.serverCache.getNode();ue(b instanceof xe,"serverChildren would be complete if leaf node"),y=jy(s,b)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=Le(t);let b=Uy(s,y,e.serverCache);b==null&&e.serverCache.isCompleteForChild(y)&&(b=p.getImmediateChild(y)),b!=null?g=n.filter.updateChild(p,y,b,dt(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,xe.EMPTY_NODE,dt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=hd(s,Xa(e)),u.isLeafNode()&&(g=n.filter.updateFullNode(g,u,l)))}return u=e.serverCache.isFullyInitialized()||fd(s,tt())!=null,cu(e,g,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new My(s.getIndex()),l=w4(s);this.processor_=$4(l);const u=t.serverCache,d=t.eventCache,p=a.updateFullNode(xe.EMPTY_NODE,u.getNode(),null),g=l.updateFullNode(xe.EMPTY_NODE,d.getNode(),null),y=new Ka(p,u.isFullyInitialized(),a.filtersNodes()),b=new Ka(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Xd(b,y),this.eventGenerator_=new N4(this.query_)}get query(){return this.query_}}function rP(n){return n.viewCache_.serverCache.getNode()}function aP(n,e){const t=Xa(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(Le(e)).isEmpty())?t.getChild(e):null}function k1(n){return n.eventRegistrations_.length===0}function oP(n,e){n.eventRegistrations_.push(e)}function M1(n,e,t){const s=[];if(t){ue(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(t,a);u&&s.push(u)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const u=n.eventRegistrations_[l];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function O1(n,e,t,s){e.type===Ti.MERGE&&e.source.queryId!==null&&(ue(Xa(n.viewCache_),"We should always have a full cache before handling merges"),ue(l_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=Z4(n.processor_,a,e,t,s);return W4(n.processor_,l.viewCache),ue(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,sC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function lP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(St,(l,u)=>{s.push(Tl(l,u))}),t.isFullyInitialized()&&s.push(KA(t.getNode())),sC(n,s,t.getNode(),e)}function sC(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return D4(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md;class cP{constructor(){this.views=new Map}}function uP(n){ue(!md,"__referenceConstructor has already been defined"),md=n}function hP(){return ue(md,"Reference.ts has not been loaded"),md}function fP(n){return n.views.size===0}function Fy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ue(l!=null,"SyncTree gave us an op for an invalid query."),O1(l,e,t,s)}else{let l=[];for(const u of n.views.values())l=l.concat(O1(u,e,t,s));return l}}function dP(n,e,t,s,a){const l=e._queryIdentifier,u=n.views.get(l);if(!u){let d=hd(t,a?s:null),p=!1;d?p=!0:s instanceof xe?(d=jy(t,s),p=!1):(d=xe.EMPTY_NODE,p=!1);const g=Xd(new Ka(d,p,!1),new Ka(s,a,!1));return new sP(e,g)}return u}function mP(n,e,t,s,a,l){const u=dP(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),oP(u,t),lP(u,t)}function pP(n,e,t,s){const a=e._queryIdentifier,l=[];let u=[];const d=Gr(n);if(a==="default")for(const[p,g]of n.views.entries())u=u.concat(M1(g,t,s)),k1(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(u=u.concat(M1(p,t,s)),k1(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Gr(n)&&l.push(new(hP())(e._repo,e._path)),{removed:l,events:u}}function rC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ll(n,e){let t=null;for(const s of n.views.values())t=t||aP(s,e);return t}function aC(n,e){if(e._queryParams.loadsAllData())return $d(n);{const s=e._queryIdentifier;return n.views.get(s)}}function oC(n,e){return aC(n,e)!=null}function Gr(n){return $d(n)!=null}function $d(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd;function gP(n){ue(!pd,"__referenceConstructor has already been defined"),pd=n}function _P(){return ue(pd,"Reference.ts has not been loaded"),pd}let yP=1;class P1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _t(null),this.pendingWriteTree_=Y4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lC(n,e,t,s,a){return P4(n.pendingWriteTree_,e,t,s,a),a?Hu(n,new Qa(XA(),e,t)):[]}function Oa(n,e,t=!1){const s=V4(n.pendingWriteTree_,e);if(L4(n.pendingWriteTree_,e)){let l=new _t(null);return s.snap!=null?l=l.set(tt(),!0):wn(s.children,u=>{l=l.set(new ot(u),!0)}),Hu(n,new ud(s.path,l,t))}else return[]}function Wd(n,e,t){return Hu(n,new Qa(Py(),e,t))}function vP(n,e,t){const s=_t.fromObject(t);return Hu(n,new xu(Py(),e,s))}function EP(n,e){return Hu(n,new Cu(Py(),e))}function TP(n,e,t){const s=qy(n,t);if(s){const a=Hy(s),l=a.path,u=a.queryId,d=jn(l,e),p=new Cu(Vy(u),d);return Gy(n,l,p)}else return[]}function d_(n,e,t,s,a=!1){const l=e._path,u=n.syncPointTree_.get(l);let d=[];if(u&&(e._queryIdentifier==="default"||oC(u,e))){const p=pP(u,e,t,s);fP(u)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(d=p.events,!a){const y=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,b=n.syncPointTree_.findOnPath(l,(w,R)=>Gr(R));if(y&&!b){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const R=SP(w);for(let N=0;N<R.length;++N){const L=R[N],z=L.query,re=hC(n,L);n.listenProvider_.startListening(hu(z),gd(n,z),re.hashFn,re.onComplete)}}}!b&&g.length>0&&!s&&(y?n.listenProvider_.stopListening(hu(e),null):g.forEach(w=>{const R=n.queryToTagMap.get(Zd(w));n.listenProvider_.stopListening(hu(w),R)}))}AP(n,g)}return d}function bP(n,e,t,s){const a=qy(n,s);if(a!=null){const l=Hy(a),u=l.path,d=l.queryId,p=jn(u,e),g=new Qa(Vy(d),p,t);return Gy(n,u,g)}else return[]}function wP(n,e,t,s){const a=qy(n,s);if(a){const l=Hy(a),u=l.path,d=l.queryId,p=jn(u,e),g=_t.fromObject(t),y=new xu(Vy(d),p,g);return Gy(n,u,y)}else return[]}function V1(n,e,t,s=!1){const a=e._path;let l=null,u=!1;n.syncPointTree_.foreachOnPath(a,(w,R)=>{const N=jn(w,a);l=l||ll(R,N),u=u||Gr(R)});let d=n.syncPointTree_.get(a);d?(u=u||Gr(d),l=l||ll(d,tt())):(d=new cP,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=xe.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((R,N)=>{const L=ll(N,tt());L&&(l=l.updateImmediateChild(R,L))}));const g=oC(d,e);if(!g&&!e._queryParams.loadsAllData()){const w=Zd(e);ue(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const R=CP();n.queryToTagMap.set(w,R),n.tagToQueryMap.set(R,w)}const y=Ly(n.pendingWriteTree_,a);let b=mP(d,e,t,y,l,p);if(!g&&!u&&!s){const w=aC(d,e);b=b.concat(xP(n,e,w))}return b}function By(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,d)=>{const p=jn(u,e),g=ll(d,p);if(g)return g});return JA(a,e,l,t,!0)}function Hu(n,e){return cC(e,n.syncPointTree_,null,Ly(n.pendingWriteTree_,tt()))}function cC(n,e,t,s){if(Ue(n.path))return uC(n,e,t,s);{const a=e.get(tt());t==null&&a!=null&&(t=ll(a,tt()));let l=[];const u=Le(n.path),d=n.operationForChild(u),p=e.children.get(u);if(p&&d){const g=t?t.getImmediateChild(u):null,y=eC(s,u);l=l.concat(cC(d,p,g,y))}return a&&(l=l.concat(Fy(a,n,s,t))),l}}function uC(n,e,t,s){const a=e.get(tt());t==null&&a!=null&&(t=ll(a,tt()));let l=[];return e.children.inorderTraversal((u,d)=>{const p=t?t.getImmediateChild(u):null,g=eC(s,u),y=n.operationForChild(u);y&&(l=l.concat(uC(y,d,p,g)))}),a&&(l=l.concat(Fy(a,n,s,t))),l}function hC(n,e){const t=e.query,s=gd(n,t);return{hashFn:()=>(rP(e)||xe.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?TP(n,t._path,s):EP(n,t._path);{const l=TO(a,t);return d_(n,t,null,l)}}}}function gd(n,e){const t=Zd(e);return n.queryToTagMap.get(t)}function Zd(n){return n._path.toString()+"$"+n._queryIdentifier}function qy(n,e){return n.tagToQueryMap.get(e)}function Hy(n){const e=n.indexOf("$");return ue(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ot(n.substr(0,e))}}function Gy(n,e,t){const s=n.syncPointTree_.get(e);ue(s,"Missing sync point for query tag that we're tracking");const a=Ly(n.pendingWriteTree_,e);return Fy(s,t,a,null)}function SP(n){return n.fold((e,t,s)=>{if(t&&Gr(t))return[$d(t)];{let a=[];return t&&(a=rC(t)),wn(s,(l,u)=>{a=a.concat(u)}),a}})}function hu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(_P())(n._repo,n._path):n}function AP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Zd(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function CP(){return yP++}function xP(n,e,t){const s=e._path,a=gd(n,e),l=hC(n,t),u=n.listenProvider_.startListening(hu(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(s);if(a)ue(!Gr(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,y,b)=>{if(!Ue(g)&&y&&Gr(y))return[$d(y).query];{let w=[];return y&&(w=w.concat(rC(y).map(R=>R.query))),wn(b,(R,N)=>{w=w.concat(N)}),w}});for(let g=0;g<p.length;++g){const y=p[g];n.listenProvider_.stopListening(hu(y),gd(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Yy(t)}node(){return this.node_}}class Qy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pt(this.path_,e);return new Qy(this.syncTree_,t)}node(){return By(this.syncTree_,this.path_)}}const RP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},L1=function(n,e,t){if(!n||typeof n!="object")return n;if(ue(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return IP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return NP(n[".sv"],e);ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},IP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ue(!1,"Unexpected server value: "+n)}},NP=function(n,e,t){n.hasOwnProperty("increment")||ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ue(!1,"Unexpected increment value: "+s);const a=e.node();if(ue(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},DP=function(n,e,t,s){return Ky(e,new Qy(t,n),s)},fC=function(n,e,t){return Ky(n,new Yy(e),t)};function Ky(n,e,t){const s=n.getPriority().val(),a=L1(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const u=n,d=L1(u.getValue(),e,t);return d!==u.getValue()||a!==u.getPriority().val()?new nn(d,Ft(a)):n}else{const u=n;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new nn(a))),u.forEachChild(St,(d,p)=>{const g=Ky(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function $y(n,e){let t=e instanceof ot?e:new ot(e),s=n,a=Le(t);for(;a!==null;){const l=cl(s.node.children,a)||{children:{},childCount:0};s=new Xy(a,s,l),t=dt(t),a=Le(t)}return s}function Vl(n){return n.node.value}function dC(n,e){n.node.value=e,m_(n)}function mC(n){return n.node.childCount>0}function kP(n){return Vl(n)===void 0&&!mC(n)}function Jd(n,e){wn(n.node.children,(t,s)=>{e(new Xy(t,n,s))})}function pC(n,e,t,s){t&&e(n),Jd(n,a=>{pC(a,e,!0)})}function MP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Gu(n){return new ot(n.parent===null?n.name:Gu(n.parent)+"/"+n.name)}function m_(n){n.parent!==null&&OP(n.parent,n.name,n)}function OP(n,e,t){const s=kP(t),a=ts(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,m_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,m_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/[\[\].#$\/\u0000-\u001F\u007F]/,VP=/[\[\].#$\u0000-\u001F\u007F]/,xg=10*1024*1024,Wy=function(n){return typeof n=="string"&&n.length!==0&&!PP.test(n)},gC=function(n){return typeof n=="string"&&n.length!==0&&!VP.test(n)},LP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gC(n)},_C=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Qd(n)||n&&typeof n=="object"&&ts(n,".sv")},p_=function(n,e,t,s){em(ul(n,"value"),e,t)},em=function(n,e,t){const s=t instanceof ot?new t4(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ia(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ia(s)+" with contents = "+e.toString());if(Qd(e))throw new Error(n+"contains "+e.toString()+" "+Ia(s));if(typeof e=="string"&&e.length>xg/3&&bd(e)>xg)throw new Error(n+"contains a string greater than "+xg+" utf8 bytes "+Ia(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(wn(e,(u,d)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!Wy(u)))throw new Error(n+" contains an invalid key ("+u+") "+Ia(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);n4(s,u),em(n,d,s),i4(s)}),a&&l)throw new Error(n+' contains ".value" child '+Ia(s)+" in addition to actual children.")}},jP=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=bu(s);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!Wy(l[u]))throw new Error(n+"contains an invalid key ("+l[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(e4);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&hi(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},UP=function(n,e,t,s){const a=ul(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];wn(e,(u,d)=>{const p=new ot(u);if(em(a,d,Pt(t,p)),Iy(p)===".priority"&&!_C(d))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),jP(a,l)},zP=function(n,e,t){if(Qd(e))throw new Error(ul(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!_C(e))throw new Error(ul(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},yC=function(n,e,t,s){if(!gC(t))throw new Error(ul(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FP=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yC(n,e,t)},tl=function(n,e){if(Le(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},BP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!LP(t))throw new Error(ul(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zy(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!Ny(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function vC(n,e,t){Zy(n,t),EC(n,s=>Ny(s,e))}function Ys(n,e,t){Zy(n,t),EC(n,s=>hi(s,e)||hi(e,s))}function EC(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(HP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function HP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ou&&dn("event: "+t.toString()),Ol(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="repo_interrupt",YP=25;class QP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cd(),this.transactionQueueTree_=new Xy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KP(n,e,t){if(n.stats_=xy(n.repoInfo_),n.forceRestClient_||AO())n.server_=new ld(n.repoInfo_,(s,a,l,u)=>{j1(n,s,a,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>U1(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{an(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new zs(n.repoInfo_,e,(s,a,l,u)=>{j1(n,s,a,l,u)},s=>{U1(n,s)},s=>{$P(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=NO(n.repoInfo_,()=>new I4(n.stats_,n.server_)),n.infoData_=new S4,n.infoSyncTree_=new P1({startListening:(s,a,l,u)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=Wd(n.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),ev(n,"connected",!1),n.serverSyncTree_=new P1({startListening:(s,a,l,u)=>(n.server_.listen(s,l,a,(d,p)=>{const g=u(d,p);Ys(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function XP(n){const t=n.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jy(n){return RP({timestamp:XP(n)})}function j1(n,e,t,s,a){n.dataUpdateCount++;const l=new ot(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(s){const p=Lf(t,g=>Ft(g));u=wP(n.serverSyncTree_,l,p,a)}else{const p=Ft(t);u=bP(n.serverSyncTree_,l,p,a)}else if(s){const p=Lf(t,g=>Ft(g));u=vP(n.serverSyncTree_,l,p)}else{const p=Ft(t);u=Wd(n.serverSyncTree_,l,p)}let d=l;u.length>0&&(d=tm(n,l)),Ys(n.eventQueue_,d,u)}function U1(n,e){ev(n,"connected",e),e===!1&&ZP(n)}function $P(n,e){wn(e,(t,s)=>{ev(n,t,s)})}function ev(n,e,t){const s=new ot("/.info/"+e),a=Ft(t);n.infoData_.updateSnapshot(s,a);const l=Wd(n.infoSyncTree_,s,a);Ys(n.eventQueue_,s,l)}function TC(n){return n.nextWriteId_++}function WP(n,e,t,s,a){tv(n,"set",{path:e.toString(),value:t,priority:s});const l=Jy(n),u=Ft(t,s),d=By(n.serverSyncTree_,e),p=fC(u,d,l),g=TC(n),y=lC(n.serverSyncTree_,e,p,g,!0);Zy(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(w,R)=>{const N=w==="ok";N||zn("set at "+e+" failed: "+w);const L=Oa(n.serverSyncTree_,g,!N);Ys(n.eventQueue_,e,L),wl(n,a,w,R)});const b=CC(n,e);tm(n,b),Ys(n.eventQueue_,b,[])}function ZP(n){tv(n,"onDisconnectEvents");const e=Jy(n),t=cd();o_(n.onDisconnect_,tt(),(a,l)=>{const u=DP(a,l,n.serverSyncTree_,e);Pl(t,a,u)});let s=[];o_(t,tt(),(a,l)=>{s=s.concat(Wd(n.serverSyncTree_,a,l));const u=CC(n,a);tm(n,u)}),n.onDisconnect_=cd(),Ys(n.eventQueue_,tt(),s)}function JP(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,a)=>{s==="ok"&&a_(n.onDisconnect_,e),wl(n,t,s,a)})}function z1(n,e,t,s){const a=Ft(t);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,u)=>{l==="ok"&&Pl(n.onDisconnect_,e,a),wl(n,s,l,u)})}function eV(n,e,t,s,a){const l=Ft(t,s);n.server_.onDisconnectPut(e.toString(),l.val(!0),(u,d)=>{u==="ok"&&Pl(n.onDisconnect_,e,l),wl(n,a,u,d)})}function tV(n,e,t,s){if(Vf(t)){dn("onDisconnect().update() called with empty data.  Don't do anything."),wl(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(a,l)=>{a==="ok"&&wn(t,(u,d)=>{const p=Ft(d);Pl(n.onDisconnect_,Pt(e,u),p)}),wl(n,s,a,l)})}function nV(n,e,t){let s;Le(e._path)===".info"?s=V1(n.infoSyncTree_,e,t):s=V1(n.serverSyncTree_,e,t),vC(n.eventQueue_,e._path,s)}function iV(n,e,t){let s;Le(e._path)===".info"?s=d_(n.infoSyncTree_,e,t):s=d_(n.serverSyncTree_,e,t),vC(n.eventQueue_,e._path,s)}function sV(n){n.persistentConnection_&&n.persistentConnection_.interrupt(GP)}function tv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),dn(t,...e)}function wl(n,e,t,s){e&&Ol(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const u=new Error(l);u.code=a,e(u)}})}function bC(n,e,t){return By(n.serverSyncTree_,e,t)||xe.EMPTY_NODE}function nv(n,e=n.transactionQueueTree_){if(e||nm(n,e),Vl(e)){const t=SC(n,e);ue(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&rV(n,Gu(e),t)}else mC(e)&&Jd(e,t=>{nv(n,t)})}function rV(n,e,t){const s=t.map(g=>g.currentWriteId),a=bC(n,e,s);let l=a;const u=a.hash();for(let g=0;g<t.length;g++){const y=t[g];ue(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const b=jn(e,y.path);l=l.updateChild(b,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{tv(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const b=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Oa(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&b.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();nm(n,$y(n.transactionQueueTree_,e)),nv(n,n.transactionQueueTree_),Ys(n.eventQueue_,e,y);for(let w=0;w<b.length;w++)Ol(b[w])}else{if(g==="datastale")for(let b=0;b<t.length;b++)t[b].status===3?t[b].status=4:t[b].status=0;else{zn("transaction at "+p.toString()+" failed: "+g);for(let b=0;b<t.length;b++)t[b].status=4,t[b].abortReason=g}tm(n,e)}},u)}function tm(n,e){const t=wC(n,e),s=Gu(t),a=SC(n,t);return aV(n,a,s),s}function aV(n,e,t){if(e.length===0)return;const s=[];let a=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=jn(t,p.path);let y=!1,b;if(ue(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,b=p.abortReason,a=a.concat(Oa(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=YP)y=!0,b="maxretry",a=a.concat(Oa(n.serverSyncTree_,p.currentWriteId,!0));else{const w=bC(n,p.path,u);p.currentInputSnapshot=w;const R=e[d].update(w.val());if(R!==void 0){em("transaction failed: Data returned ",R,p.path);let N=Ft(R);typeof R=="object"&&R!=null&&ts(R,".priority")||(N=N.updatePriority(w.getPriority()));const z=p.currentWriteId,re=Jy(n),ne=fC(N,w,re);p.currentOutputSnapshotRaw=N,p.currentOutputSnapshotResolved=ne,p.currentWriteId=TC(n),u.splice(u.indexOf(z),1),a=a.concat(lC(n.serverSyncTree_,p.path,ne,p.currentWriteId,p.applyLocally)),a=a.concat(Oa(n.serverSyncTree_,z,!0))}else y=!0,b="nodata",a=a.concat(Oa(n.serverSyncTree_,p.currentWriteId,!0))}Ys(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(b==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(b),!1,null))))}nm(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Ol(s[d]);nv(n,n.transactionQueueTree_)}function wC(n,e){let t,s=n.transactionQueueTree_;for(t=Le(e);t!==null&&Vl(s)===void 0;)s=$y(s,t),e=dt(e),t=Le(e);return s}function SC(n,e){const t=[];return AC(n,e,t),t.sort((s,a)=>s.order-a.order),t}function AC(n,e,t){const s=Vl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Jd(e,a=>{AC(n,a,t)})}function nm(n,e){const t=Vl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,dC(e,t.length>0?t:void 0)}Jd(e,s=>{nm(n,s)})}function CC(n,e){const t=Gu(wC(n,e)),s=$y(n.transactionQueueTree_,e);return MP(s,a=>{Rg(n,a)}),Rg(n,s),pC(s,a=>{Rg(n,a)}),t}function Rg(n,e){const t=Vl(e);if(t){const s=[];let a=[],l=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ue(l===u-1,"All SENT items should be at beginning of queue."),l=u,t[u].status=3,t[u].abortReason="set"):(ue(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Oa(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&s.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?dC(e,void 0):t.length=l+1,Ys(n.eventQueue_,Gu(e),a);for(let u=0;u<s.length;u++)Ol(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function lV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):zn(`Invalid query segment '${t}' in query '${n}'`)}return e}const F1=function(n,e){const t=cV(n),s=t.namespace;t.domain==="firebase.com"&&Gs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Gs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||gO();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new kA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ot(t.pathString)}},cV=function(n){let e="",t="",s="",a="",l="",u=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let b=n.indexOf("?");b===-1&&(b=n.length),e=n.substring(0,Math.min(y,b)),y<b&&(a=oV(n.substring(y,b)));const w=lV(n.substring(Math.min(n.length,b)));g=e.indexOf(":"),g>=0?(u=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const N=e.indexOf(".");s=e.substring(0,N).toLowerCase(),t=e.substring(N+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:u,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+an(this.snapshot.exportVal())}}class hV{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ue(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class dV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Os;return JP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){tl("OnDisconnect.remove",this._path);const e=new Os;return z1(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){tl("OnDisconnect.set",this._path),p_("OnDisconnect.set",e,this._path);const t=new Os;return z1(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){tl("OnDisconnect.setWithPriority",this._path),p_("OnDisconnect.setWithPriority",e,this._path),zP("OnDisconnect.setWithPriority",t);const s=new Os;return eV(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){tl("OnDisconnect.update",this._path),UP("OnDisconnect.update",e,this._path);const t=new Os;return tV(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ue(this._path)?null:Iy(this._path)}get ref(){return new Xr(this._repo,this._path)}get _queryIdentifier(){const e=S1(this._queryParams),t=Ay(e);return t==="{}"?"default":t}get _queryObject(){return S1(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof iv))return!1;const t=this._repo===e._repo,s=Ny(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+JO(this._path)}}class Xr extends iv{constructor(e,t){super(e,t,new Oy,!1)}get parent(){const e=FA(this._path);return e===null?null:new Xr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _d{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ot(e),s=g_(this.ref,e);return new _d(this._node.getChild(t),s,St)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new _d(a,g_(this.ref,s),St)))}hasChild(e){const t=new ot(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ua(n,e){return n=gt(n),n._checkNotDeleted("ref"),e!==void 0?g_(n._root,e):n._root}function g_(n,e){return n=gt(n),Le(n._path)===null?FP("child","path",e):yC("child","path",e),new Xr(n._repo,Pt(n._path,e))}function mV(n){return n=gt(n),new dV(n._repo,n._path)}function Ig(n){return tl("remove",n._path),im(n,null)}function im(n,e){n=gt(n),tl("set",n._path),p_("set",e,n._path);const t=new Os;return WP(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class sv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new uV("value",this,new _d(e.snapshotNode,new Xr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new hV(this,e,t):null}matches(e){return e instanceof sv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pV(n,e,t,s,a){const l=new fV(t,void 0),u=new sv(l);return nV(n._repo,n,u),()=>iV(n._repo,n,u)}function rv(n,e,t,s){return pV(n,"value",e)}uP(Xr);gP(Xr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV="FIREBASE_DATABASE_EMULATOR_HOST",__={};let _V=!1;function yV(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),u=Yr(l);n.repoInfo_=new kA(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function vV(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Gs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=F1(l,a),d=u.repoInfo,p;typeof process<"u"&&a1&&(p=a1[gV]),p?(l=`http://${p}?ns=${d.namespace}`,u=F1(l,a),d=u.repoInfo):u.repoInfo.secure;const g=new xO(n.name,n.options,e);BP("Invalid Firebase Database URL",u),Ue(u.path)||Gs("Database URL must point to the root of a Firebase Database (not including a child path).");const y=TV(d,n,g,new CO(n,t));return new bV(y,n)}function EV(n,e){const t=__[e];(!t||t[n.key]!==n)&&Gs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sV(n),delete t[n.key]}function TV(n,e,t,s){let a=__[e.name];a||(a={},__[e.name]=a);let l=a[n.toURLString()];return l&&Gs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new QP(n,_V,t,s),a[n.toURLString()]=l,l}class bV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xr(this._repo,tt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gs("Cannot call "+e+" on a deleted database.")}}function wV(n=A_(),e){const t=Sd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=J1("database");s&&SV(t,...s)}return t}function SV(n,e,t,s={}){n=gt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Wi(s,l.repoInfo_.emulatorOptions))return;Gs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Gs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new kf(kf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:nw(s.mockUserToken,n.app.options.projectId);u=new kf(d)}Yr(e)&&(T_(e),b_("Database",!0)),yV(l,a,s,u)}/**
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
 */function AV(n){uO($a),Fa(new Lr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return vV(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Gi(o1,l1,n),Gi(o1,l1,"esm2020")}zs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};zs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};AV();/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),B1=n=>{const e=xV(n);return e.charAt(0).toUpperCase()+e.slice(1)},xC=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),RV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=Y.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:u,...d},p)=>Y.createElement("svg",{ref:p,...IV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:xC("lucide",a),...!l&&!RV(d)&&{"aria-hidden":"true"},...d},[...u.map(([g,y])=>Y.createElement(g,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=(n,e)=>{const t=Y.forwardRef(({className:s,...a},l)=>Y.createElement(NV,{ref:l,iconNode:e,className:xC(`lucide-${CV(B1(n))}`,`lucide-${n}`,s),...a}));return t.displayName=B1(n),t};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],RC=We("arrow-left",DV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],MV=We("ban",kV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],q1=We("bell",OV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],VV=We("check-check",PV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],av=We("check",LV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],UV=We("circle-check-big",jV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],FV=We("copy",zV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]],Ng=We("corner-up-left",BV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],HV=We("crown",qV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],IC=We("ellipsis-vertical",GV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],QV=We("eraser",YV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Mf=We("gamepad-2",KV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],$V=We("hand",XV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ov=We("loader-circle",WV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],H1=We("log-out",ZV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],G1=We("message-circle",JV);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],NC=We("message-square",e6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],n6=We("newspaper",t6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],s6=We("palette",i6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],a6=We("pin-off",r6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],sm=We("pin",o6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Ll=We("rotate-cw",l6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],u6=We("save",c6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],f6=We("scissors",h6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],m6=We("send",d6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],g6=We("shield-check",p6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],y6=We("shield",_6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],E6=We("smile",v6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],lv=We("square-pen",T6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],yd=We("trash-2",b6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],y_=We("user-plus",w6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],DC=We("user-x",S6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vd=We("users",A6);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ed=We("x",C6),x6=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID",measurementId:"YOUR_MEASUREMENT_ID"},cv=ow(x6),uv=eD(cv),Re=ZM(cv),za=wV(cv),kC=Y.createContext(),R6=({children:n})=>{const[e,t]=Y.useState(null),[s,a]=Y.useState(!0);Y.useEffect(()=>{const u=BN(uv,async d=>{if(d){const p=yt(Re,"users",d.uid),g=await id(p);if(g.exists())t({...d,...g.data()});else{const y={uid:d.uid,displayName:d.displayName,email:d.email,photoURL:d.photoURL,recado:"Olá! Estou usando o ChatD.",createdAt:Ga()};await lO(p,y),t({...d,...y})}}else t(null);a(!1)});return()=>u()},[]);const l=Y.useMemo(()=>({user:e,loading:s}),[e,s]);return E.jsx(kC.Provider,{value:l,children:n})},MC=()=>Y.useContext(kC),I6=n=>{Y.useEffect(()=>{if(!n)return;const e=Ua(za,`/status/${n.uid}`),t=yt(Re,`/users/${n.uid}`),s={state:"offline",last_changed:Date.now()},a={state:"online",last_changed:Date.now()},l=Ua(za,".info/connected"),u=rv(l,d=>{if(d.val()===!1){kt(t,{state:"offline",last_changed:Ga()});return}mV(e).set(s).then(()=>{im(e,a),kt(t,{state:"online",last_changed:Ga()})})});return()=>u()},[n])},rm=(n,e)=>{const[t,s]=Y.useState(null),{user:a}=MC();return Y.useEffect(()=>{if(!n||!a){s(null);return}const l=Dn(yt(Re,"users",n),p=>{if(p.exists()){const g=p.data(),y=e?.customNames?.[a.uid];s(b=>({...b||{},...g,displayName:y||g.displayName}))}else s(null)}),u=Ua(za,`/status/${n}`),d=rv(u,p=>{const g=p.val();s(y=>({...y||{},presence:g?.state,last_changed:g?.last_changed}))});return()=>{l(),d()}},[n,e,a]),t},N6=n=>{const[e,t]=Y.useState(0);return Y.useEffect(()=>{if(!n?.uid)return;const s=on(Ot(Re,"friendships"),Et("users","array-contains",n.uid),Et("status","==","pending")),a=Dn(s,l=>{const u=l.docs.filter(d=>d.data().requestedBy!==n.uid);t(u.length)});return()=>a()},[n]),e},D6=n=>{const[e,t]=Y.useState(0);return Y.useEffect(()=>{if(!n?.uid)return;const s=on(Ot(Re,"friendships"),Et("users","array-contains",n.uid),Et("status","==","accepted")),a=Dn(s,l=>{const u=l.docs.filter(g=>!g.data().chatDeletedFor?.includes(n.uid)).map(g=>g.data().users.find(y=>y!==n.uid));if(u.length===0){t(0);return}const d={},p=u.map(g=>{const y=[n.uid,g].sort().join("_"),b=on(Ot(Re,`conversations/${y}/messages`),Et("receiverId","==",n.uid),Et("status","!=","read"));return Dn(b,w=>{d[y]=w.size;const R=Object.values(d).reduce((N,L)=>N+L,0);t(R)})});return()=>p.forEach(g=>g())});return()=>a()},[n]),e},k6=n=>{const e=Y.useRef(n);Y.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]),Y.useEffect(()=>{document.hidden&&Notification.permission==="granted"&&n>0&&n>e.current&&new Notification("Nova Mensagem no ChatD",{body:`Você tem ${n} mensagens não lidas.`,icon:"https://placehold.co/96x96/1D4ED8/FFFFFF?text=CD"}),e.current=n},[n])},M6=(n,e)=>{const[t,s]=Y.useState(null);return Y.useEffect(()=>{if(!n||!e||e.isGroup){s(null);return}const a=on(Ot(Re,"friendships"),Et("users","in",[[n.uid,e.uid],[e.uid,n.uid]])),l=Dn(a,u=>{if(u.empty)s(null);else{const d=u.docs[0];s({id:d.id,...d.data()})}});return()=>l()},[n,e]),t},O6=({text:n="Carregando aplicativo..."})=>E.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full bg-gray-900 p-4 text-white text-center",children:[E.jsx(ov,{className:"animate-spin h-12 w-12 text-blue-400"}),E.jsx("p",{className:"text-lg text-gray-300 mt-4",children:n})]}),P6=()=>{const[n,e]=Y.useState(!1),[t,s]=Y.useState(!1),a=async()=>{if(n)return;e(!0);const u=new Ps;try{await c2(uv,u)}catch(d){console.error("Erro ao fazer login com Google:",d)}finally{e(!1)}},l=()=>{s(!0),setTimeout(()=>s(!1),2e3)};return E.jsxs("div",{className:"flex flex-col h-full w-full bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/50 text-white overflow-hidden",children:[E.jsxs("nav",{className:"flex justify-between items-center p-4 backdrop-blur-sm bg-black/20 border-b border-white/10 z-20",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(NC,{className:"text-blue-400"}),E.jsx("h1",{className:"text-2xl font-bold",children:"ChatD"})]}),E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("button",{onClick:a,className:"px-4 py-2 text-sm font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Entrar no Chat"}),E.jsxs("div",{className:"relative",children:[E.jsx("button",{onClick:l,className:"px-4 py-2 text-sm font-semibold bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed",children:"SocialiD"}),t&&E.jsx("span",{className:"absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded animate-fade-in",children:"Em Breve!"})]})]})]}),E.jsx("main",{className:"flex-grow flex items-center justify-center p-4",children:E.jsxs("div",{className:"text-center flex flex-col items-center",children:[E.jsx("h2",{style:{animationDelay:"0.2s"},className:"text-5xl font-extrabold mb-4 animate-fade-in-up",children:"Conecte-se. Converse. Jogue."}),E.jsx("p",{style:{animationDelay:"0.4s"},className:"text-lg text-gray-300 max-w-2xl mb-8 animate-fade-in-up",children:"Bem-vindo ao ChatD, sua nova plataforma para conversas seguras e diversão. Faça login para começar a se conectar com seus amigos."}),E.jsxs("button",{style:{animationDelay:"0.6s"},onClick:a,disabled:n,className:"flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 font-bold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-wait animate-fade-in-up",children:[n?E.jsx(ov,{className:"animate-spin w-6 h-6"}):E.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google icon",className:"w-6 h-6"}),n?"Entrando...":"Fazer Login com Google"]})]})})]})},V6=({user:n,onClose:e})=>n?E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg transform transition-all animate-zoom-in",onClick:t=>t.stopPropagation(),children:[E.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),E.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),E.jsx("p",{className:"text-gray-400 mb-4",children:n.email}),E.jsxs("p",{className:"text-gray-300 italic",children:['"',n.recado||"Sem recado.",'"']}),E.jsx("button",{onClick:e,className:"mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Fechar"})]})}):null,L6=({user:n,onClose:e})=>{const[t,s]=Y.useState(n.recado||""),a=async()=>{const l=yt(Re,"users",n.uid);await kt(l,{recado:t}),e()};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-blue-500/50 shadow-lg transform transition-all animate-zoom-in",onClick:l=>l.stopPropagation(),children:[E.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"}),E.jsx("h2",{className:"text-2xl font-bold text-white",children:n.displayName}),E.jsx("textarea",{value:t,onChange:l=>s(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Escreva seu recado...",rows:"3"}),E.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[E.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:a,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Salvar"})]})]})})},Sl=({isOpen:n,onClose:e,onConfirm:t,title:s,message:a})=>n?E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center border border-red-500/50 shadow-lg transform transition-all animate-zoom-in",onClick:l=>l.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:s}),E.jsx("p",{className:"text-gray-400 mb-6",children:a}),E.jsxs("div",{className:"flex justify-center gap-4",children:[E.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:t,className:"bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Confirmar"})]})]})}):null,j6=({currentUser:n})=>{const[e,t]=Y.useState(""),[s,a]=Y.useState([]),[l,u]=Y.useState({}),[d,p]=Y.useState(!1),[g,y]=Y.useState(""),[b,w]=Y.useState(""),R=async L=>{if(L.preventDefault(),e.trim()!==""){p(!0),y(""),w(""),a([]);try{const z=on(Ot(Re,"users"),Et("email","==",e.trim()),pA(1)),ne=(await au(z)).docs.map(ie=>ie.data())[0];if(ne&&ne.uid!==n.uid){a([ne]);const ie=on(Ot(Re,"friendships"),Et("users","in",[[n.uid,ne.uid],[ne.uid,n.uid]])),te=(await au(ie)).docs[0];u({[ne.uid]:te?te.data().status:"not_friends"})}else ne&&ne.uid===n.uid?w("Você não pode adicionar a si mesmo."):w("Nenhum usuário encontrado com este e-mail.")}catch(z){y("Erro ao buscar. Tente novamente."),console.error(z)}finally{p(!1)}}},N=async L=>{try{const z=on(Ot(Re,"friendships"),Et("users","in",[[n.uid,L.uid],[L.uid,n.uid]])),re=await au(z);if(!re.empty){const ne=re.docs[0];ne.data().status==="declined"&&await sd(yt(Re,"friendships",ne.id))}await Sy(Ot(Re,"friendships"),{users:[n.uid,L.uid],status:"pending",requestedBy:n.uid,createdAt:Ga()}),u(ne=>({...ne,[L.uid]:"pending"}))}catch(z){y("Falha ao enviar pedido."),console.error(z)}};return E.jsxs("div",{className:"p-4",children:[E.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Adicionar Contato"}),E.jsxs("form",{onSubmit:R,className:"flex gap-2",children:[E.jsx("input",{type:"email",value:e,onChange:L=>t(L.target.value),placeholder:"Email do usuário",className:"flex-grow bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}),E.jsx("button",{type:"submit",disabled:d,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center w-24",children:d?E.jsx(ov,{className:"animate-spin"}):"Buscar"})]}),E.jsxs("div",{className:"mt-4 h-24",children:[g&&E.jsx("p",{className:"text-red-400",children:g}),b&&E.jsx("p",{className:"text-yellow-400",children:b}),s.map(L=>E.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:L.photoURL,alt:L.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("span",{className:"text-white",children:L.displayName})]}),E.jsxs("div",{children:[(l[L.uid]==="not_friends"||l[L.uid]==="declined")&&E.jsx("button",{onClick:()=>N(L),className:"bg-green-600 px-3 py-1 rounded-lg text-sm text-white hover:bg-green-700 transition-colors",children:"Adicionar"}),l[L.uid]==="pending"&&E.jsx("span",{className:"text-yellow-400 text-sm",children:"Pendente"}),l[L.uid]==="accepted"&&E.jsx("span",{className:"text-green-400 text-sm",children:"Amigos"})]})]},L.uid))]})]})},U6=({currentUser:n})=>{const[e,t]=Y.useState([]);Y.useEffect(()=>{if(!n?.uid)return;const a=on(Ot(Re,"friendships"),Et("users","array-contains",n.uid),Et("status","==","pending")),l=Dn(a,async u=>{const d=[];for(const p of u.docs){const g=p.data();if(g.requestedBy!==n.uid){const y=g.users.find(w=>w!==n.uid),b=await id(yt(Re,"users",y));b.exists()&&d.push({id:p.id,...b.data()})}}t(d)});return()=>l()},[n.uid]);const s=async(a,l)=>{try{await kt(yt(Re,"friendships",a),{status:l?"accepted":"declined"})}catch(u){console.error("Falha ao responder ao pedido:",u)}};return E.jsxs("div",{className:"p-4",children:[E.jsx("h3",{className:"text-lg font-bold mb-4 text-white",children:"Pedidos de Amizade"}),e.length===0?E.jsx("p",{className:"text-gray-400",children:"Nenhum pedido pendente."}):E.jsx("ul",{className:"space-y-2",children:e.map(a=>E.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700 rounded-lg animate-fade-in",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("span",{className:"text-white",children:a.displayName})]}),E.jsxs("div",{className:"flex gap-2",children:[E.jsx("button",{onClick:()=>s(a.id,!0),className:"p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-transform hover:scale-110 active:scale-95",children:E.jsx(av,{size:16})}),E.jsx("button",{onClick:()=>s(a.id,!1),className:"p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-transform hover:scale-110 active:scale-95",children:E.jsx(Ed,{size:16})})]})]},a.id))})]})},z6=({friendship:n,onSelectUser:e,onDeleteContact:t})=>{const s=rm(n.friendId,n);return s?E.jsxs("li",{onClick:()=>e(s),onContextMenu:a=>{a.preventDefault(),t()},className:"p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 group",children:[E.jsxs("div",{className:"flex items-center gap-4 relative",children:[E.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-12 h-12 rounded-full"}),E.jsx("span",{className:"font-semibold text-white text-lg",children:s.displayName})]}),E.jsx("button",{onClick:a=>{a.stopPropagation(),t()},className:"p-2 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity",children:E.jsx(yd,{size:18,className:"text-red-500"})})]}):E.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse rounded-lg"})},F6=({currentUser:n,onSelectUser:e})=>{const[t,s]=Y.useState([]),[a,l]=Y.useState(null);Y.useEffect(()=>{if(!n?.uid)return;const d=on(Ot(Re,"friendships"),Et("users","array-contains",n.uid),Et("status","==","accepted")),p=Dn(d,g=>{const y=g.docs.map(b=>({id:b.id,...b.data(),friendId:b.data().users.find(w=>w!==n.uid)}));s(y)});return()=>p()},[n.uid]);const u=async()=>{if(!a)return;const d=yt(Re,"friendships",a.id);try{await sd(d)}catch(p){console.error("Error deleting friendship: ",p)}l(null)};return E.jsxs("div",{className:"flex-grow overflow-y-auto",children:[E.jsx("h3",{className:"text-lg font-bold p-4 text-white",children:"Todos os Contatos"}),t.length===0?E.jsx("p",{className:"text-gray-400 text-center px-4",children:"Adicione contatos para começar a conversar."}):E.jsx("ul",{className:"divide-y divide-gray-700/50",children:t.map(d=>E.jsx(z6,{friendship:d,onSelectUser:e,onDeleteContact:()=>l(d)},d.id))}),E.jsx(Sl,{isOpen:!!a,onClose:()=>l(null),onConfirm:u,title:"Remover Contato?",message:"Você tem certeza que quer remover este contato? A amizade será desfeita para ambos."})]})},Y1=({currentUser:n,onSelectUser:e,onCreateGroup:t})=>{const[s,a]=Y.useState([]),[l,u]=Y.useState([]),[d,p]=Y.useState(null),[g,y]=Y.useState({show:!1,x:0,y:0,chat:null});Y.useEffect(()=>{if(!n?.uid)return;const z=on(Ot(Re,"friendships"),Et("users","array-contains",n.uid),Et("status","==","accepted")),re=Dn(z,pe=>{let te=pe.docs.map(he=>({id:he.id,...he.data(),friendId:he.data().users.find(k=>k!==n.uid),isGroup:!1})).filter(he=>!he.chatDeletedFor?.includes(n.uid));te.sort((he,k)=>{const C=he.pinnedBy?.includes(n.uid),I=k.pinnedBy?.includes(n.uid);return C&&!I?-1:!C&&I?1:0}),a(te)}),ne=on(Ot(Re,"groups"),Et("members","array-contains",n.uid)),ie=Dn(ne,pe=>{const te=pe.docs.map(he=>{const k=he.data();return{id:he.id,...k,isGroup:!0,displayName:k.name,photoURL:`https://placehold.co/96x96/${k.photoColor?.replace("#","")||"7c3aed"}/FFFFFF?text=${k.name.charAt(0).toUpperCase()}`}});u(te)});return()=>{re(),ie()}},[n.uid]);const b=async z=>{if(!z||z.isGroup)return;const re=z.pinnedBy?.includes(n.uid),ne=yt(Re,"friendships",z.id);await kt(ne,{pinnedBy:re?Na(n.uid):ja(n.uid)})},w=async()=>{if(!d)return;const z=yt(Re,"friendships",d.id);await kt(z,{chatDeletedFor:ja(n.uid)}),p(null)},R=(z,re)=>{z.preventDefault(),y({show:!0,x:z.pageX,y:z.pageY,chat:re})},N=()=>y({...g,show:!1}),L=[...s,...l];return E.jsxs("div",{className:"flex-grow overflow-y-auto",onClick:N,children:[E.jsxs("div",{className:"flex justify-between items-center p-4",children:[E.jsx("h3",{className:"text-lg font-bold text-white",children:"Conversas"}),E.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm",children:[E.jsx(vd,{size:16})," Criar Grupo"]})]}),L.length===0?E.jsx("p",{className:"text-gray-400 text-center px-4",children:"Nenhuma conversa encontrada."}):E.jsx("ul",{className:"divide-y divide-gray-700/50",children:L.map(z=>E.jsx(q6,{chat:z,currentUser:n,onSelectUser:e,onContextMenu:re=>R(re,z)},z.id))}),g.show&&E.jsx(B6,{x:g.x,y:g.y,onClose:N,chat:g.chat,currentUser:n,onTogglePin:()=>{b(g.chat),N()},onDeleteChat:()=>{p(g.chat),N()}}),E.jsx(Sl,{isOpen:!!d,onClose:()=>p(null),onConfirm:w,title:"Deletar Conversa?",message:"Esta conversa será removida da sua lista, mas as mensagens não serão apagadas para o seu contato."})]})},B6=({x:n,y:e,onClose:t,chat:s,currentUser:a,onTogglePin:l,onDeleteChat:u})=>{const d=Y.useRef(null),p=!s.isGroup&&s.pinnedBy?.includes(a.uid);return Y.useEffect(()=>{const g=y=>{d.current&&!d.current.contains(y.target)&&t()};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[t]),E.jsxs("div",{ref:d,style:{top:e,left:n},className:"absolute w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20 animate-zoom-in-fast",children:[!s.isGroup&&E.jsxs("button",{onClick:l,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700 rounded-t-lg",children:[p?E.jsx(a6,{size:14}):E.jsx(sm,{size:14})," ",p?"Desafixar":"Fixar Conversa"]}),E.jsxs("button",{onClick:u,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700 rounded-b-lg",children:[E.jsx(yd,{size:14})," Apagar Conversa"]})]})},q6=({chat:n,currentUser:e,onSelectUser:t,onContextMenu:s})=>{const a=rm(n.friendId,n),[l,u]=Y.useState(0),d=!n.isGroup&&n.pinnedBy?.includes(e.uid),[p,g]=Y.useState(null),y=n.blockedBy?.includes(e.uid)||n.blockedBy?.includes(n.friendId);Y.useEffect(()=>{if(!e||!n.friendId&&!n.isGroup)return;const L=`conversations/${n.isGroup?n.id:[e.uid,n.friendId].sort().join("_")}/messages`,z=on(Ot(Re,L),Et("receiverId","==",e.uid),Et("status","!=","read")),re=Dn(z,pe=>u(pe.size)),ne=on(Ot(Re,L),mA("createdAt","desc"),pA(1)),ie=Dn(ne,pe=>{g(pe.empty?null:pe.docs[0].data())});return()=>{re(),ie()}},[n,e]);const b=n.isGroup?n:a;if(!b)return E.jsx("div",{className:"p-4 h-[81px] bg-gray-800 animate-pulse rounded-lg"});const w=N=>{if(!N)return"Offline";const L=new Date(N.seconds?N.seconds*1e3:N),z=new Date,re=new Date(z.getFullYear(),z.getMonth(),z.getDate()),ne=new Date(z.getFullYear(),z.getMonth(),z.getDate()-1),ie={hour:"2-digit",minute:"2-digit"},pe=L.toLocaleTimeString("pt-BR",ie);if(L>=re)return`Visto por último hoje às ${pe}`;if(L>=ne)return`Visto por último ontem às ${pe}`;const te={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${L.toLocaleDateString("pt-BR",te)}`},R=({data:N})=>E.jsxs("div",{className:"relative flex-shrink-0",children:[N.photoURL?E.jsx("img",{src:N.photoURL,alt:N.displayName,className:"w-12 h-12 rounded-full"}):E.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold",style:{backgroundColor:N.photoColor||"#7c3aed"},children:N.displayName?.charAt(0).toUpperCase()}),y&&E.jsx("div",{className:"absolute inset-0 bg-black/50 rounded-full flex items-center justify-center",children:E.jsx(MV,{size:20,className:"text-white"})})]});return E.jsxs("li",{onClick:()=>t(b),onContextMenu:s,className:`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-700/50 transition-colors duration-200 ${d?"bg-blue-900/20":""}`,children:[E.jsxs("div",{className:"flex items-center gap-4 relative flex-grow min-w-0",children:[E.jsx(R,{data:b}),!n.isGroup&&E.jsx("div",{className:`absolute left-9 top-9 w-3.5 h-3.5 border-2 border-gray-800 rounded-full ${a?.presence==="online"?"bg-green-500":"bg-gray-500"}`}),E.jsxs("div",{className:"flex-grow min-w-0",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[d&&E.jsx(sm,{size:14,className:"text-blue-400 flex-shrink-0"}),E.jsx("span",{className:"font-semibold text-white text-lg truncate block",children:b.displayName})]}),E.jsx("p",{className:"text-sm text-gray-400 truncate",children:p?p.isDeleted?"Mensagem apagada":p.text:n.isGroup?"Nenhuma mensagem ainda":a?.presence==="online"?"Online":w(a?.last_changed)})]})]}),E.jsx("div",{className:"flex items-center gap-2 flex-shrink-0 ml-2",children:l>0&&E.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold",children:l})})]})},H6=({msg:n,isCurrentUser:e,onReply:t,onDelete:s,onEdit:a,onPin:l})=>{const[u,d]=Y.useState(!1),p=Y.useRef(null),g=Y.useRef(),[y,b]=Y.useState("bottom"),[w,R]=Y.useState("Copiar"),N=te=>{const he=/(https?:\/\/[^\s]+)/g;return te.split(he).map((k,C)=>k.match(he)?E.jsx("a",{href:k,target:"_blank",rel:"noopener noreferrer",className:"text-blue-300 underline hover:text-blue-200",children:k},C):k)},L=()=>{navigator.clipboard.writeText(n.text).then(()=>{R("Copiado!"),setTimeout(()=>{R("Copiar"),d(!1)},1e3)}).catch(te=>{console.error("Falha ao copiar texto: ",te),R("Falhou!"),setTimeout(()=>{R("Copiar"),d(!1)},1e3)})};Y.useEffect(()=>{u&&p.current&&(p.current.getBoundingClientRect().top<150?b("top"):b("bottom"))},[u]),Y.useEffect(()=>{const te=he=>{p.current&&!p.current.contains(he.target)&&d(!1)};return document.addEventListener("mousedown",te),()=>document.removeEventListener("mousedown",te)},[]);const z=te=>{te.preventDefault(),navigator.vibrate&&navigator.vibrate(50),d(!0)},re=te=>{g.current=setTimeout(()=>z(te),500)},ne=()=>{clearTimeout(g.current)},ie=()=>{clearTimeout(g.current)},pe=({msg:te})=>{if(!e||!te.status)return null;const he=te.status==="read";return E.jsx(VV,{size:16,className:he?"text-blue-300":"text-gray-400"})};return E.jsxs("div",{className:`w-full flex items-end gap-2 group ${e?"justify-end":"justify-start"}`,children:[!e&&E.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:E.jsx(Ng,{size:16})}),E.jsxs("div",{className:"relative",ref:p,onTouchStart:re,onTouchEnd:ne,onTouchMove:ie,onContextMenu:te=>{te.preventDefault(),d(!0)},children:[E.jsxs("div",{className:`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${n.isDeleted?"bg-gray-700/50 italic text-gray-400":e?"bg-blue-600 text-white":"bg-gray-700 text-white"} ${e?"rounded-br-lg":"rounded-bl-lg"}`,children:[n.replyTo&&!n.isDeleted&&E.jsxs("div",{className:"p-2 mb-1 border-l-2 border-blue-300/50 bg-black/20 rounded-md cursor-pointer",children:[E.jsx("p",{className:"text-xs font-bold text-blue-300",children:n.replyTo.senderName}),E.jsx("p",{className:"text-sm text-gray-300 truncate",children:n.replyTo.text})]}),E.jsx("p",{className:"break-words",style:{userSelect:"text"},children:n.isDeleted?"Esta mensagem foi apagada":N(n.text)}),!n.isDeleted&&E.jsxs("div",{className:"flex justify-end items-center gap-1.5 mt-1",children:[n.edited&&E.jsx("span",{className:"text-xs opacity-60 mr-1",children:"(editado)"}),E.jsx("p",{className:"text-xs opacity-60",children:n.createdAt?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),E.jsx(pe,{msg:n})]})]}),u&&E.jsxs("div",{className:`absolute left-1/2 -translate-x-1/2 ${y==="bottom"?"bottom-full mb-1":"top-full mt-1"} w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10 animate-zoom-in-fast`,children:[E.jsxs("button",{onClick:L,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(FV,{size:14})," ",w]}),E.jsxs("button",{onClick:()=>{l(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(sm,{size:14})," Fixar"]}),E.jsxs("button",{onClick:()=>{t(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(Ng,{size:14})," Responder"]}),e&&!n.isDeleted&&E.jsxs(E.Fragment,{children:[E.jsxs("button",{onClick:()=>{a(),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(lv,{size:14})," Editar"]}),E.jsxs("button",{onClick:()=>{s("self"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(yd,{size:14})," Apagar para mim"]}),E.jsxs("button",{onClick:()=>{s("all"),d(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[E.jsx(yd,{size:14})," Apagar para todos"]})]})]})]}),e&&E.jsx("button",{onClick:t,className:"p-1.5 rounded-full hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:E.jsx(Ng,{size:16})})]})},G6=({onEmojiSelect:n,onClose:e})=>{const t=Y.useRef(null);Y.useEffect(()=>{const a=l=>{t.current&&!t.current.contains(l.target)&&e()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e]);const s=["😂","❤️","🤣","👍","😭","🙏","😘","🥰","😍","😊","🎉","😅","😎","💕","😋","😏","😜","🤔","😆","💪","👏","💖","😢","😇","😍‍�","🥳","🌹","✨","🔥","💯","🤗","😚","🥺","👀","💔","💜","😴","😈","🤩","😒"];return E.jsx("div",{ref:t,className:"absolute bottom-full mb-2 w-72 h-auto max-h-60 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex flex-col emoji-picker animate-zoom-in-fast",children:E.jsx("div",{className:"p-2 overflow-y-auto",children:E.jsx("div",{className:"grid grid-cols-8 gap-1",children:s.map(a=>E.jsx("button",{onClick:()=>n(a),className:"text-2xl p-1 rounded hover:bg-gray-700 transition-colors",children:a},a))})})})},Y6=({onClose:n,onSelectTheme:e,currentTheme:t})=>{const s=[{id:"default",name:"Padrão",style:{backgroundColor:"#1f2937"}},{id:"ocean",name:"Oceano",style:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"}},{id:"sunset",name:"Pôr do Sol",style:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"}},{id:"forest",name:"Floresta",style:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"}},{id:"galaxy",name:"Galáxia",style:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"}},{id:"rose",name:"Rosa",style:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"}},{id:"night",name:"Noite",style:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}}];return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg animate-zoom-in",onClick:a=>a.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Escolha um Tema"}),E.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:s.map(a=>E.jsxs("div",{onClick:()=>e(a.id),className:"cursor-pointer group",children:[E.jsx("div",{style:a.style,className:"h-24 rounded-lg flex items-center justify-center border-2 border-transparent group-hover:border-blue-500 transition-all relative",children:t===a.id&&E.jsx("div",{className:"absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg",children:E.jsx(UV,{className:"text-white"})})}),E.jsx("p",{className:"text-center text-sm mt-2 text-gray-300",children:a.name})]},a.id))})]})})},Q6=({onClose:n,onSave:e,currentName:t})=>{const[s,a]=Y.useState(t);return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:n,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-sm w-full border border-blue-500/50 shadow-lg animate-zoom-in",onClick:l=>l.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Alterar Nome do Contato"}),E.jsx("input",{type:"text",value:s,onChange:l=>a(l.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Digite o novo nome"}),E.jsxs("div",{className:"flex justify-end gap-4 mt-6",children:[E.jsx("button",{onClick:n,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:()=>e(s),className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Salvar"})]})]})})},K6=({groupData:n,friendships:e,onClose:t})=>{const[s,a]=Y.useState([]),[l,u]=Y.useState([]);Y.useEffect(()=>{const g=e.filter(y=>!n.members.includes(y.friendId));u(g)},[e,n.members]);const d=g=>{a(y=>y.includes(g)?y.filter(b=>b!==g):[...y,g])},p=async()=>{if(s.length===0)return;const g=yt(Re,"groups",n.id);await kt(g,{members:ja(...s)}),t()};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col h-4/5 animate-zoom-in",onClick:g=>g.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Adicionar Membros"}),E.jsx("div",{className:"flex-grow overflow-y-auto pr-2 mb-4",children:l.length>0?l.map(g=>E.jsx(OC,{friendship:g,onToggle:d,isSelected:s.includes(g.friendId)},g.id)):E.jsx("p",{className:"text-gray-400 text-center",children:"Todos os seus amigos já estão neste grupo."})}),E.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[E.jsx("button",{onClick:t,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:p,disabled:s.length===0,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:bg-gray-500",children:"Adicionar"})]})]})})},X6=({groupData:n,currentUser:e,onClose:t,onLeaveChat:s,friendships:a})=>{const[l,u]=Y.useState([]),[d,p]=Y.useState(!1),[g,y]=Y.useState(!1),[b,w]=Y.useState(!1),[R,N]=Y.useState(!1),[L,z]=Y.useState(n.name),[re,ne]=Y.useState(n.description||""),[ie,pe]=Y.useState(n.photoColor),te=n.admins?.includes(e.uid),he=yt(Re,"groups",n.id),k=["#7c3aed","#db2777","#0284c7","#16a34a","#f97316","#ca8a04"];Y.useEffect(()=>{(async()=>{const Me=n.members.map(ge=>id(yt(Re,"users",ge))),ae=(await Promise.all(Me)).filter(ge=>ge.exists()).map(ge=>ge.data());u(ae)})()},[n.members]);const C=async()=>{if(L.trim())try{await kt(he,{name:L,description:re,photoColor:ie}),N(!1)}catch(de){console.error("Erro ao salvar alterações do grupo:",de)}},I=async()=>{const de={members:Na(e.uid)};if(te)if(n.admins.filter(ae=>ae!==e.uid).length===0&&n.members.length-1>0){const ae=n.members.find(ge=>ge!==e.uid);ae&&(de.admins=[ae])}else de.admins=Na(e.uid);await kt(he,de);const Me=await id(he);Me.exists()&&Me.data().members.length===0&&await sd(he),s(),t()},P=async()=>{await sd(he),s(),t()},V=async de=>{await kt(he,{members:Na(de),admins:Na(de)})},j=async de=>{const Me=n.admins.includes(de);await kt(he,{admins:Me?Na(de):ja(de)})},x=({member:de})=>{const[Me,K]=Y.useState(!1),ae=n.admins?.includes(de.uid),ge=te&&de.uid!==e.uid;return E.jsxs("li",{className:"flex items-center justify-between p-2 bg-gray-700/50 rounded-lg",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:de.photoURL,alt:de.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("span",{className:"text-white",children:de.displayName})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[ae&&E.jsx(HV,{size:16,className:"text-yellow-400"}),ge&&E.jsxs("div",{className:"relative",children:[E.jsx("button",{onClick:()=>K(He=>!He),children:E.jsx(IC,{size:20})}),Me&&E.jsxs("div",{className:"absolute top-full right-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-20 animate-zoom-in-fast",children:[E.jsxs("button",{onClick:()=>{j(de.uid),K(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[ae?E.jsx(y6,{size:14}):E.jsx(g6,{size:14})," ",ae?"Rebaixar":"Promover a Admin"]}),E.jsxs("button",{onClick:()=>{V(de.uid),K(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[E.jsx(DC,{size:14})," Remover do Grupo"]})]})]})]})]})};return E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:t,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-lg w-full border border-blue-500/50 shadow-lg flex flex-col h-5/6 animate-zoom-in",onClick:de=>de.stopPropagation(),children:[E.jsxs("div",{className:"flex flex-col items-center mb-4 relative",children:[te&&!R&&E.jsx("button",{onClick:()=>N(!0),className:"absolute top-0 right-0 p-2 text-gray-400 hover:text-white",children:E.jsx(lv,{size:18})}),E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4",style:{backgroundColor:ie},children:L?.charAt(0).toUpperCase()}),R&&E.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 p-1 rounded-full flex gap-1",children:k.map(de=>E.jsx("button",{onClick:()=>pe(de),className:`w-5 h-5 rounded-full transition-transform hover:scale-110 ${ie===de?"ring-2 ring-white":""}`,style:{backgroundColor:de}},de))})]}),R?E.jsxs(E.Fragment,{children:[E.jsx("input",{type:"text",value:L,onChange:de=>z(de.target.value),className:"w-full bg-gray-700 text-white text-center text-2xl font-bold rounded-lg p-1 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}),E.jsx("textarea",{value:re,onChange:de=>ne(de.target.value),placeholder:"Descrição do grupo...",className:"w-full bg-gray-700 text-white text-center text-sm rounded-lg p-1 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:2})]}):E.jsxs(E.Fragment,{children:[E.jsx("h2",{className:"text-2xl font-bold text-white mt-4",children:n.name}),E.jsx("p",{className:"text-gray-400 text-sm",children:n.description||`${n.members?.length} membros`})]})]}),E.jsxs("div",{className:"flex-grow overflow-y-auto pr-2",children:[E.jsxs("div",{className:"flex justify-between items-center mb-2",children:[E.jsx("h3",{className:"text-lg font-semibold text-white",children:"Membros"}),te&&E.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300",children:[E.jsx(y_,{size:16})," Adicionar"]})]}),E.jsx("ul",{className:"space-y-2",children:l.map(de=>E.jsx(x,{member:de},de.uid))})]}),E.jsx("div",{className:"mt-6 flex flex-col gap-2",children:R?E.jsxs("div",{className:"flex gap-2",children:[E.jsx("button",{onClick:()=>N(!1),className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsxs("button",{onClick:C,className:"w-full flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(u6,{size:16})," Salvar"]})]}):E.jsxs(E.Fragment,{children:[te&&E.jsx("button",{onClick:()=>y(!0),className:"w-full bg-gray-700/50 px-4 py-2 rounded-lg text-red-500 font-semibold hover:bg-red-900/50 transition-colors",children:"Deletar Grupo"}),E.jsx("button",{onClick:()=>p(!0),className:"w-full bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Sair do Grupo"}),E.jsx("button",{onClick:t,className:"w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Fechar"})]})})]})}),b&&E.jsx(K6,{groupData:n,friendships:a,onClose:()=>w(!1)}),E.jsx(Sl,{isOpen:d,onClose:()=>p(!1),onConfirm:I,title:"Sair do Grupo?",message:"Você tem certeza que quer sair deste grupo?"}),E.jsx(Sl,{isOpen:g,onClose:()=>y(!1),onConfirm:P,title:"Deletar Grupo?",message:"Esta ação é irreversível e deletará o grupo para todos os membros."})]})},Q1=({currentUser:n,otherUser:e,onLeave:t})=>{const[s,a]=Y.useState([]),[l,u]=Y.useState(""),[d,p]=Y.useState(!1),[g,y]=Y.useState(!1),[b,w]=Y.useState(!1),[R,N]=Y.useState(null),[L,z]=Y.useState(null),[re,ne]=Y.useState(!1),[ie,pe]=Y.useState(!1),[te,he]=Y.useState(!1),[k,C]=Y.useState(!1),[I,P]=Y.useState(!1),[V,j]=Y.useState(null),[x,de]=Y.useState(e),[Me,K]=Y.useState([]),ae=Y.useRef(null),ge=Y.useRef(null),He=Y.useRef(null),M=Y.useRef(!0),X=e.isGroup,oe=M6(n,e),se=rm(e.uid,oe),ye=X?e.id:[n.uid,e.uid].sort().join("_"),Oe=oe?.themes?.[n.uid]||"default",Se=X?x.pinnedMessage:oe?.pinnedMessage,Rt={default:{backgroundColor:"#1f2937"},ocean:{backgroundImage:"linear-gradient(to top, #0284c7, #38bdf8)"},sunset:{backgroundImage:"linear-gradient(to top, #f97316, #fbbf24)"},forest:{backgroundImage:"linear-gradient(to top, #166534, #22c55e)"},galaxy:{backgroundImage:"linear-gradient(to top, #4338ca, #a78bfa)"},rose:{backgroundImage:"linear-gradient(to top, #be185d, #f9a8d4)"},night:{backgroundImage:"linear-gradient(to top, #1e1b4b, #4c1d95)"}},st=(le="smooth")=>{ge.current?.scrollIntoView({behavior:le})};Y.useEffect(()=>{M.current=!0},[ye]),Y.useEffect(()=>{const le=He.current;!le||s.length===0||(M.current?(st("auto"),M.current=!1):le.scrollHeight-le.clientHeight<=le.scrollTop+100&&st("smooth"))},[s]),Y.useEffect(()=>{if(!n?.uid)return;const le=on(Ot(Re,"friendships"),Et("users","array-contains",n.uid),Et("status","==","accepted")),me=Dn(le,Ne=>{const Je=Ne.docs.map(Sn=>({id:Sn.id,...Sn.data(),friendId:Sn.data().users.find(gn=>gn!==n.uid)}));K(Je)});return()=>me()},[n.uid]);const $n=le=>{if(!le)return"";const me=new Date(le.seconds?le.seconds*1e3:le),Ne=new Date,Je=new Date(Ne.getFullYear(),Ne.getMonth(),Ne.getDate()),Sn=new Date(Ne.getFullYear(),Ne.getMonth(),Ne.getDate()-1),gn={hour:"2-digit",minute:"2-digit"},xi=me.toLocaleTimeString("pt-BR",gn);if(me>=Je)return`Visto por último hoje às ${xi}`;if(me>=Sn)return`Visto por último ontem às ${xi}`;const os={day:"2-digit",month:"2-digit",year:"numeric"};return`Visto por último em ${me.toLocaleDateString("pt-BR",os)}`};Y.useEffect(()=>{if(X){const le=yt(Re,"groups",e.id),me=Dn(le,Ne=>{Ne.exists()?de({...Ne.data(),id:Ne.id,isGroup:!0}):t()});return()=>me()}},[X,e.id,t]),Y.useEffect(()=>{const le=`conversations/${ye}/messages`,me=on(Ot(Re,le),mA("createdAt","asc")),Ne=Dn(me,Je=>{const Sn=Je.docs.map(gn=>({id:gn.id,...gn.data()})).filter(gn=>!gn.deletedFor?.includes(n.uid));a(Sn)});return()=>Ne()},[ye,n.uid]),Y.useEffect(()=>{if(X||!document.hasFocus())return;const le=async()=>{const me=Ot(Re,`conversations/${ye}/messages`),Ne=on(me,Et("receiverId","==",n.uid),Et("status","!=","read")),Je=await au(Ne);if(!Je.empty){const Sn=r1(Re);Je.docs.forEach(gn=>{Sn.update(gn.ref,{status:"read"})}),await Sn.commit().catch(gn=>console.error("Erro ao marcar mensagens como lidas:",gn))}};return le(),window.addEventListener("focus",le),()=>{window.removeEventListener("focus",le)}},[ye,n.uid,X,s]),Y.useEffect(()=>{if(X)return;const le=Ua(za,`typing/${ye}/${e.uid}`),me=rv(le,Ne=>p(Ne.val()===!0));return()=>me()},[ye,e.uid,X]);const Ai=le=>{if(u(le.target.value),X)return;const me=Ua(za,`typing/${ye}/${n.uid}`);le.target.value.trim().length>0?(im(me,!0),ae.current&&clearTimeout(ae.current),ae.current=setTimeout(()=>Ig(me),3e3)):Ig(me)},fi=async le=>{if(le.preventDefault(),l.trim()===""||!X&&(oe?.blockedBy?.includes(e.uid)||oe?.blockedBy?.includes(n.uid)))return;const me=l;u(""),X||(Ig(Ua(za,`typing/${ye}/${n.uid}`)),ae.current&&clearTimeout(ae.current));const Ne={text:me,createdAt:Ga(),senderId:n.uid,senderName:n.displayName};X||(Ne.receiverId=e.uid,Ne.status=se?.presence==="online"?"delivered":"sent"),R&&(Ne.replyTo={id:R.id,text:R.text,senderName:R.senderId===n.uid?"Você":X?R.senderName:e.displayName});try{await Sy(Ot(Re,`conversations/${ye}/messages`),Ne),N(null)}catch(Je){console.error("Falha ao enviar mensagem:",Je),u(me)}},ns=async le=>{if(le.preventDefault(),!L||l.trim()==="")return;const me=yt(Re,`conversations/${ye}/messages`,L.id);await kt(me,{text:l,edited:!0}),z(null),u("")},is=async()=>{if(!V)return;const{id:le,type:me}=V,Ne=yt(Re,`conversations/${ye}/messages`,le);me==="self"?await kt(Ne,{deletedFor:ja(n.uid)}):me==="all"&&await kt(Ne,{text:"",isDeleted:!0,replyTo:null}),j(null)},ss=async()=>{const le=on(Ot(Re,`conversations/${ye}/messages`)),me=await au(le),Ne=r1(Re);me.docs.forEach(Je=>{Ne.update(Je.ref,{deletedFor:ja(n.uid)})}),await Ne.commit(),he(!1)},$r=async()=>{if(!oe)return;const le=yt(Re,"friendships",oe.id);oe.blockedBy?.includes(n.uid)?await kt(le,{blockedBy:Na(n.uid)}):await kt(le,{blockedBy:ja(n.uid)}),pe(!1)},no=async le=>{if(!oe)return;const me=yt(Re,"friendships",oe.id);await kt(me,{[`themes.${n.uid}`]:le}),C(!1)},kn=async le=>{if(!oe||!le.trim())return;const me=yt(Re,"friendships",oe.id);await kt(me,{[`customNames.${n.uid}`]:le.trim()}),P(!1)},jl=async le=>{const me=X&&x.admins.includes(n.uid);if(X&&!me)return;const Ne=X?yt(Re,"groups",x.id):yt(Re,"friendships",oe.id),Je={id:le.id,text:le.text,senderName:le.senderName};await kt(Ne,{pinnedMessage:Je})},Wr=async()=>{const le=X&&x.admins.includes(n.uid);if(X&&!le)return;const me=X?yt(Re,"groups",x.id):yt(Re,"friendships",oe.id);await kt(me,{pinnedMessage:null})},Xs=le=>{z(le),u(le.text),N(null)},rs=()=>{z(null),u("")},$s=!X&&oe?.blockedBy?.includes(n.uid),Ci=!X&&oe?.blockedBy?.includes(e.uid),as=X?x.name:se?.displayName,io=X?x.photoColor?"":x.photoURL:e.photoURL;return E.jsxs("div",{className:"flex flex-col h-full bg-gray-800 w-full",children:[E.jsxs("header",{className:"flex items-center p-4 bg-gray-900/80 backdrop-blur-sm shadow-md flex-shrink-0 z-20",children:[E.jsx("button",{onClick:t,className:"p-2 mr-3 text-white hover:bg-gray-700 rounded-full transition-colors md:hidden",children:E.jsx(RC,{size:24})}),E.jsxs("div",{className:"flex items-center cursor-pointer flex-grow min-w-0",onClick:()=>X?w(!0):y(!0),children:[X?E.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold mr-4",style:{backgroundColor:x.photoColor||"#7c3aed"},children:as?.charAt(0).toUpperCase()}):E.jsx("img",{src:io,alt:as,className:"w-10 h-10 rounded-full mr-4 flex-shrink-0"}),E.jsxs("div",{className:"min-w-0",children:[E.jsx("h2",{className:"text-xl font-bold text-white truncate",children:as}),E.jsx("p",{className:"text-sm text-blue-300 h-4",children:X?`${x.members?.length||0} membros`:d?"Digitando...":se?.presence==="online"?"Online":$n(se?.last_changed)})]})]}),E.jsxs("div",{className:"relative",children:[E.jsx("button",{onClick:()=>pe(le=>!le),className:"p-2 text-gray-400 hover:text-white",children:E.jsx(IC,{})}),ie&&E.jsxs("div",{className:"absolute top-full right-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10 animate-zoom-in-fast",children:[X?E.jsxs("button",{onClick:()=>{w(!0),pe(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(vd,{size:14})," Perfil do Grupo"]}):E.jsxs(E.Fragment,{children:[E.jsxs("button",{onClick:()=>{P(!0),pe(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(lv,{size:14})," Alterar nome do contato"]}),E.jsxs("button",{onClick:()=>{C(!0),pe(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(s6,{size:14})," Alterar tema da conversa"]})]}),E.jsxs("button",{onClick:()=>{he(!0),pe(!1)},className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700",children:[E.jsx(QV,{size:14})," Limpar conversa"]}),!X&&E.jsxs("button",{onClick:$r,className:"flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-700",children:[E.jsx(DC,{size:14})," ",$s?"Desbloquear":"Bloquear"]})]})]})]}),E.jsxs("main",{ref:He,className:"flex-grow p-4 overflow-y-auto chat-main transition-all duration-500 flex flex-col",style:X?Rt.default:Rt[Oe],children:[Se&&E.jsx("div",{className:"bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg mb-4 border border-blue-500/50 animate-fade-in w-full sticky top-0 z-10",children:E.jsxs("div",{className:"flex justify-between items-center",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center gap-2 text-blue-400 text-xs font-bold",children:[E.jsx(sm,{size:12})," MENSAGEM FIXADA"]}),E.jsx("p",{className:"text-sm text-white truncate",children:Se.text})]}),(X?x.admins.includes(n.uid):!0)&&E.jsx("button",{onClick:Wr,className:"p-1 text-gray-400 hover:text-white",children:E.jsx(Ed,{size:16})})]})}),E.jsxs("div",{className:"space-y-2 mt-auto",children:[s.map(le=>E.jsx(H6,{msg:le,isCurrentUser:le.senderId===n.uid,onReply:()=>N(le),onDelete:me=>j({id:le.id,type:me}),onEdit:()=>Xs(le),onPin:()=>jl(le)},le.id)),E.jsx("div",{ref:ge})]})]}),E.jsxs("footer",{className:"p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0 z-20",children:[(R||L)&&E.jsxs("div",{className:"p-2 bg-gray-700/50 rounded-t-lg relative animate-fade-in-fast",children:[E.jsxs("div",{className:"flex justify-between items-center text-sm",children:[E.jsx("p",{className:"font-bold",children:L?"Editando mensagem":`Respondendo a ${R.senderId===n.uid?"Você":X?R.senderName:se?.displayName}`}),E.jsx("button",{onClick:L?rs:()=>N(null),className:"p-1",children:E.jsx(Ed,{size:16})})]}),E.jsx("p",{className:"text-xs text-gray-400 truncate",children:L?L.text:R.text})]}),E.jsxs("div",{className:"relative flex items-center gap-2",children:[re&&E.jsx(G6,{onEmojiSelect:le=>u(me=>me+le),onClose:()=>ne(!1)}),E.jsx("button",{type:"button",onClick:()=>ne(le=>!le),className:"p-2 text-gray-400 hover:text-white",children:E.jsx(E6,{})}),E.jsxs("form",{onSubmit:L?ns:fi,className:"flex-grow flex items-center gap-2",children:[E.jsx("input",{type:"text",value:l,onChange:Ai,placeholder:$s?"Você bloqueou este contato.":Ci?"Você não pode responder a esta conversa":"Digite sua mensagem...",disabled:Ci||$s,className:"flex-grow px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"}),E.jsx("button",{type:"submit",className:"p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-110 active:scale-95 disabled:bg-gray-500",disabled:!l.trim()||Ci||$s,children:L?E.jsx(av,{size:20}):E.jsx(m6,{size:20})})]})]})]}),g&&E.jsx(V6,{user:e,onClose:()=>y(!1)}),b&&E.jsx(X6,{groupData:x,currentUser:n,onClose:()=>w(!1),onLeaveChat:t,friendships:Me}),k&&E.jsx(Y6,{onClose:()=>C(!1),onSelectTheme:no,currentTheme:Oe}),I&&E.jsx(Q6,{onClose:()=>P(!1),onSave:kn,currentName:se?.displayName}),E.jsx(Sl,{isOpen:te,onClose:()=>he(!1),onConfirm:ss,title:"Limpar Conversa?",message:"Isso irá apagar todas as mensagens desta conversa apenas para você. Esta ação não pode ser desfeita."}),E.jsx(Sl,{isOpen:!!V,onClose:()=>j(null),onConfirm:is,title:"Apagar Mensagem?",message:`Você tem certeza que quer apagar esta mensagem ${V?.type==="all"?"para todos":"para você"}?`})]})},$6=({currentUser:n,onClose:e,friendships:t})=>{const[s,a]=Y.useState(""),[l,u]=Y.useState([n.uid]),[d,p]=Y.useState(""),g=b=>{u(w=>w.includes(b)?w.filter(R=>R!==b):[...w,b])},y=async()=>{if(!s.trim()){p("O nome do grupo é obrigatório.");return}if(l.length<2){p("Selecione pelo menos um amigo para criar um grupo.");return}try{await Sy(Ot(Re,"groups"),{name:s.trim(),description:"",members:l,admins:[n.uid],createdAt:Ga(),createdBy:n.uid,photoColor:"#7c3aed",pinnedMessage:null}),e()}catch(b){console.error("Erro ao criar grupo:",b),p(`Erro: ${b.message}`)}};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in",onClick:e,children:E.jsxs("div",{className:"bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-blue-500/50 shadow-lg flex flex-col animate-zoom-in",onClick:b=>b.stopPropagation(),children:[E.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Criar Novo Grupo"}),E.jsx("input",{type:"text",value:s,onChange:b=>a(b.target.value),className:"w-full bg-gray-700 text-white rounded-lg p-2 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Nome do Grupo"}),E.jsx("h3",{className:"text-md font-semibold text-white mb-2",children:"Selecionar Membros"}),E.jsx("div",{className:"overflow-y-auto max-h-60 mb-4 pr-2",children:t.map(b=>E.jsx(OC,{friendship:b,onToggle:g,isSelected:l.includes(b.friendId)},b.id))}),d&&E.jsx("p",{className:"text-red-400 text-sm mb-4",children:d}),E.jsxs("div",{className:"flex justify-end gap-4 mt-auto",children:[E.jsx("button",{onClick:e,className:"px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-700 transition-colors",children:"Cancelar"}),E.jsx("button",{onClick:y,className:"bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:"Criar Grupo"})]})]})})},OC=({friendship:n,onToggle:e,isSelected:t})=>{const s=rm(n.friendId,n);return s?E.jsxs("div",{onClick:()=>e(s.uid),className:`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${t?"bg-blue-900/50":"hover:bg-gray-700"}`,children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("span",{className:"text-white",children:s.displayName})]}),E.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${t?"bg-blue-500 border-blue-400":"border-gray-500"}`,children:t&&E.jsx(av,{size:16,className:"text-white"})})]}):null},W6=({user:n,onLogout:e})=>{const[t,s]=Y.useState(null),[a,l]=Y.useState("chats"),[u,d]=Y.useState("list"),[p,g]=Y.useState(!1),[y,b]=Y.useState(!1),[w,R]=Y.useState([]),[N,L]=Y.useState(null),z=N6(n),re=D6(n);k6(re),Y.useEffect(()=>{if(!n?.uid)return;const I=on(Ot(Re,"friendships"),Et("users","array-contains",n.uid),Et("status","==","accepted")),P=Dn(I,V=>{const j=V.docs.map(x=>({id:x.id,...x.data(),friendId:x.data().users.find(de=>de!==n.uid)}));R(j)});return()=>P()},[n.uid]),Y.useEffect(()=>{t?(d("chat"),l("chats")):d("list")},[t]);const ne=I=>{l(I),s(null),I!=="game"&&L(null)},ie=I=>{s(I)},pe=()=>{s(null)},te=({count:I})=>I===0?null:E.jsx("span",{className:"absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white",children:I}),he=({count:I})=>I===0?null:E.jsxs("span",{className:"absolute top-2 right-2 flex h-3 w-3",children:[E.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"}),E.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-blue-500"})]}),k=()=>{switch(a){case"chats":return E.jsx(Y1,{currentUser:n,onSelectUser:ie,onCreateGroup:()=>b(!0)});case"contacts":return E.jsx(F6,{currentUser:n,onSelectUser:ie});case"add":return E.jsx(j6,{currentUser:n});case"requests":return E.jsx(U6,{currentUser:n});case"game":return E.jsx(Z6,{onSelectGame:L});default:return E.jsx(Y1,{currentUser:n,onSelectUser:ie,onCreateGroup:()=>b(!0)})}},C=()=>{if(t)return E.jsx(Q1,{currentUser:n,otherUser:t,onLeave:pe});if(a==="game"){if(N){const I=PC.find(P=>P.id===N);return E.jsxs("div",{className:"w-full h-full flex flex-col bg-gray-800",children:[E.jsx("header",{className:"p-2 bg-gray-900 flex items-center flex-shrink-0",children:E.jsxs("button",{onClick:()=>L(null),className:"flex items-center gap-2 px-3 py-1.5 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm",children:[E.jsx(RC,{size:16})," Voltar para os Jogos"]})}),E.jsx("div",{className:"flex-grow flex items-center justify-center overflow-hidden p-2",children:I.component})]})}return E.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[E.jsx(Mf,{size:60,className:"mb-4"}),E.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione um jogo"}),E.jsx("p",{children:"Escolha um jogo na barra lateral para começar a diversão!"})]})}return E.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full text-gray-400 text-center p-8",children:[E.jsx(NC,{size:60,className:"mb-4"}),E.jsx("h2",{className:"text-2xl font-bold text-white",children:"Selecione uma conversa"}),E.jsx("p",{children:"Ou adicione um novo contato para começar a conversar."})]})};return E.jsxs("div",{className:"h-full w-full flex flex-col md:flex-row bg-gray-900",children:[p&&E.jsx(L6,{user:n,onClose:()=>g(!1)}),y&&E.jsx($6,{currentUser:n,onClose:()=>b(!1),friendships:w}),E.jsxs("aside",{className:"hidden md:flex md:flex-col w-full max-w-sm bg-gray-800 border-r border-gray-700/50",children:[E.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50",children:[E.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[E.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),E.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:E.jsx(H1,{size:20})})]}),E.jsxs("div",{className:"flex border-b border-gray-700/50",children:[E.jsxs("button",{onClick:()=>ne("chats"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="chats"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[E.jsx(G1,{className:"mx-auto"}),E.jsx(he,{count:re})]}),E.jsx("button",{onClick:()=>ne("contacts"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="contacts"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:E.jsx(vd,{className:"mx-auto"})}),E.jsx("button",{onClick:()=>ne("add"),className:`flex-1 p-3 text-sm font-semibold ${a==="add"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:E.jsx(y_,{className:"mx-auto"})}),E.jsxs("button",{onClick:()=>ne("requests"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="requests"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:[E.jsx(q1,{className:"mx-auto"}),E.jsx(te,{count:z})]}),E.jsx("button",{onClick:()=>ne("game"),className:`relative flex-1 p-3 text-sm font-semibold ${a==="game"?"text-white border-b-2 border-blue-500":"text-gray-400"}`,children:E.jsx(Mf,{className:"mx-auto"})})]}),E.jsx("div",{className:"flex-grow overflow-y-auto",children:k()})]}),E.jsxs("main",{className:"flex-grow bg-gray-800 md:hidden flex flex-col h-full overflow-hidden",children:[E.jsxs("div",{className:`flex-col h-full ${u==="list"?"flex":"hidden"}`,children:[E.jsxs("header",{className:"p-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 flex-shrink-0",children:[E.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>g(!0),children:[E.jsx("img",{src:n.photoURL,alt:n.displayName,className:"w-10 h-10 rounded-full"}),E.jsx("p",{className:"font-bold text-lg text-white",children:n.displayName})]}),E.jsx("button",{onClick:e,title:"Sair",className:"p-2 text-gray-400 hover:text-white hover:bg-red-600 rounded-full transition-colors",children:E.jsx(H1,{size:20})})]}),E.jsx("div",{className:"flex-grow overflow-y-auto",children:k()}),E.jsxs("nav",{className:"flex justify-around p-2 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 flex-shrink-0",children:[E.jsxs("button",{onClick:()=>ne("chats"),className:`relative p-3 rounded-lg ${a==="chats"?"text-blue-500":"text-gray-400"}`,children:[E.jsx(G1,{}),E.jsx(he,{count:re})]}),E.jsx("button",{onClick:()=>ne("contacts"),className:`relative p-3 rounded-lg ${a==="contacts"?"text-blue-500":"text-gray-400"}`,children:E.jsx(vd,{})}),E.jsx("button",{onClick:()=>ne("add"),className:`p-3 rounded-lg ${a==="add"?"text-blue-500":"text-gray-400"}`,children:E.jsx(y_,{})}),E.jsxs("button",{onClick:()=>ne("requests"),className:`relative p-3 rounded-lg ${a==="requests"?"text-blue-500":"text-gray-400"}`,children:[E.jsx(q1,{}),E.jsx(te,{count:z})]}),E.jsx("button",{onClick:()=>ne("game"),className:`relative p-3 rounded-lg ${a==="game"?"text-blue-500":"text-gray-400"}`,children:E.jsx(Mf,{})})]})]}),u==="chat"&&t&&E.jsx(Q1,{currentUser:n,otherUser:t,onLeave:pe})]}),E.jsx("section",{className:"hidden md:flex flex-grow bg-gray-800",children:C()})]})},Z6=({onSelectGame:n})=>E.jsxs("div",{className:"w-full h-full flex flex-col p-4 sm:p-8 bg-gray-800",children:[E.jsx("h2",{className:"text-3xl sm:text-4xl font-bold mb-8 text-white",children:"Jogos"}),E.jsx("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 w-full",children:PC.map(e=>E.jsxs("button",{onClick:()=>n(e.id),className:"p-4 bg-gray-700 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center aspect-square",children:[E.jsx(Mf,{size:32,className:"mb-2 text-blue-400"}),E.jsx("span",{className:"text-md font-semibold text-white text-center",children:e.name})]},e.id))})]}),J6=()=>{const[n,e]=Y.useState(Array(9).fill(null)),[t,s]=Y.useState(!0),l=(w=>{const R=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let N=0;N<R.length;N++){const[L,z,re]=R[N];if(w[L]&&w[L]===w[z]&&w[L]===w[re])return w[L]}return null})(n),u=!l&&n.every(w=>w!==null),d=w=>{if(l||n[w])return;const R=n.slice();R[w]=t?"X":"O",e(R),s(!t)},p=()=>{e(Array(9).fill(null)),s(!0)},g=({className:w})=>E.jsx("div",{className:`w-12 h-12 rounded-full border-8 ${w}`}),y=w=>E.jsx("button",{onClick:()=>d(w),className:"w-20 h-20 sm:w-24 sm:h-24 bg-gray-700 rounded-lg text-4xl sm:text-5xl font-bold flex items-center justify-center transition-colors hover:bg-gray-600",children:n[w]==="X"?E.jsx(Ed,{className:"text-blue-400",size:48}):n[w]==="O"?E.jsx(g,{className:"text-pink-400 border-pink-400"}):null});let b;return l?b=`Vencedor: ${l}`:u?b="Empate!":b=`Próximo jogador: ${t?"X":"O"}`,E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsx("h3",{className:"text-2xl font-bold mb-4",children:b}),E.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:Array(9).fill(null).map((w,R)=>y(R))}),E.jsxs("button",{onClick:p,className:"flex items-center gap-2 mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Reiniciar"]})]})},e3=()=>{const[n,e]=Y.useState(null),[t,s]=Y.useState(null),[a,l]=Y.useState(""),u=["rock","paper","scissors"],d={rock:E.jsx($V,{size:48}),paper:E.jsx(n6,{size:48}),scissors:E.jsx(f6,{size:48})},p=y=>{const b=u[Math.floor(Math.random()*u.length)];e(y),s(b),l(y===b?"Empate!":y==="rock"&&b==="scissors"||y==="scissors"&&b==="paper"||y==="paper"&&b==="rock"?"Você Venceu!":"Você Perdeu!")},g=()=>{e(null),s(null),l("")};return E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Jokempô"}),E.jsx("div",{className:"flex gap-4 sm:gap-8 mb-6",children:u.map(y=>E.jsx("button",{onClick:()=>p(y),className:"p-4 bg-gray-700 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110 active:scale-95",children:d[y]},y))}),n&&E.jsxs("div",{className:"text-center animate-fade-in",children:[E.jsxs("div",{className:"flex items-center justify-center gap-8 text-lg mb-4",children:[E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("span",{children:"Você"}),d[n]]}),E.jsx("span",{className:"text-2xl",children:"vs"}),E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("span",{children:"PC"}),d[t]]})]}),E.jsx("h3",{className:"text-2xl font-bold",children:a})]}),E.jsxs("button",{onClick:g,className:"flex items-center gap-2 mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]})},t3=()=>{const n=Y.useRef(null),[e,t]=Y.useState({score:0,lives:3,isOver:!1,message:""}),s=Y.useRef(null),a=Y.useCallback(()=>{const u=n.current;if(!u)return;const d=u.getContext("2d");if(!d)return;s.current&&s.current.animationFrameId&&cancelAnimationFrame(s.current.animationFrameId);const p=u.parentElement;u.width=p.clientWidth,u.height=p.clientHeight;let g=0,y=3;const b=Math.min(u.width,u.height)*.02;let w=u.width/2,R=u.height-30,N=4,L=-4;const z=10,re=u.width*.2,ne=5,ie=7,pe=10,te=30,he=30,k=(u.width-2*he-(ie-1)*pe)/ie,C=20,I=[],P=["#0284c7","#f97316","#16a34a","#db2777","#ca8a04"];for(let x=0;x<ie;x++){I[x]=[];for(let de=0;de<ne;de++)I[x][de]={x:0,y:0,status:1,color:P[de%P.length]}}s.current={rightPressed:!1,leftPressed:!1,paddleX:(u.width-re)/2,animationFrameId:null};const V=()=>{w=u.width/2,R=u.height-30,N=4*(Math.random()>.5?1:-1),L=-4,s.current.paddleX=(u.width-re)/2},j=()=>{d.clearRect(0,0,u.width,u.height);for(let x=0;x<ie;x++)for(let de=0;de<ne;de++)if(I[x][de].status===1){const Me=x*(k+pe)+he,K=de*(C+pe)+te;I[x][de].x=Me,I[x][de].y=K,d.beginPath(),d.rect(Me,K,k,C),d.fillStyle=I[x][de].color,d.fill(),d.closePath()}d.beginPath(),d.arc(w,R,b,0,Math.PI*2),d.fillStyle="#FFFFFF",d.fill(),d.closePath(),d.beginPath(),d.rect(s.current.paddleX,u.height-z,re,z),d.fillStyle="#38bdf8",d.fill(),d.closePath(),d.font="16px Arial",d.fillStyle="#FFFFFF",d.fillText("Pontos: "+g,8,20),d.fillText("Vidas: "+y,u.width-65,20);for(let x=0;x<ie;x++)for(let de=0;de<ne;de++){const Me=I[x][de];if(Me.status===1&&w>Me.x&&w<Me.x+k&&R>Me.y&&R<Me.y+C&&(L=-L,Me.status=0,g++,t(K=>({...K,score:g})),g===ne*ie)){t(K=>({...K,isOver:!0,message:"VOCÊ VENCEU!"})),cancelAnimationFrame(s.current.animationFrameId);return}}if((w+N>u.width-b||w+N<b)&&(N=-N),R+L<b)L=-L;else if(R+L>u.height-b)if(w>s.current.paddleX&&w<s.current.paddleX+re)L=-L;else if(y--,t(x=>({...x,lives:y})),y)V();else{t(x=>({...x,isOver:!0,message:"GAME OVER"})),cancelAnimationFrame(s.current.animationFrameId);return}s.current.rightPressed&&s.current.paddleX<u.width-re?s.current.paddleX+=7:s.current.leftPressed&&s.current.paddleX>0&&(s.current.paddleX-=7),w+=N,R+=L,s.current.animationFrameId=requestAnimationFrame(j)};j()},[]),l=()=>{t({score:0,lives:3,isOver:!1,message:""})};return Y.useEffect(()=>{e.isOver||a();const u=n.current;if(!u)return;const d=u.width*.2,p=R=>{s.current&&(R.key==="Right"||R.key==="ArrowRight"?s.current.rightPressed=!0:(R.key==="Left"||R.key==="ArrowLeft")&&(s.current.leftPressed=!0))},g=R=>{s.current&&(R.key==="Right"||R.key==="ArrowRight"?s.current.rightPressed=!1:(R.key==="Left"||R.key==="ArrowLeft")&&(s.current.leftPressed=!1))},y=R=>{if(s.current){const N=u.getBoundingClientRect();let L=R-N.left;L>0&&L<u.width&&(s.current.paddleX=Math.max(0,Math.min(L-d/2,u.width-d)))}},b=R=>y(R.clientX),w=R=>{R.preventDefault(),y(R.touches[0].clientX)};return document.addEventListener("keydown",p),document.addEventListener("keyup",g),u.addEventListener("mousemove",b),u.addEventListener("touchmove",w,{passive:!1}),()=>{document.removeEventListener("keydown",p),document.removeEventListener("keyup",g),u.removeEventListener("mousemove",b),u.removeEventListener("touchmove",w),s.current&&s.current.animationFrameId&&cancelAnimationFrame(s.current.animationFrameId)}},[a,e.isOver]),E.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center relative",children:[e.isOver&&E.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 animate-fade-in",children:[E.jsx("h2",{className:"text-4xl font-bold mb-4",children:e.message}),E.jsxs("p",{className:"text-xl mb-6",children:["Pontuação Final: ",e.score]}),E.jsxs("button",{onClick:l,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]}),E.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg w-full h-full"}),E.jsx("p",{className:"mt-2 text-sm text-gray-400",children:"Use as setas ou o mouse/toque para mover."})]})},n3=()=>{const n=Y.useRef(null),[e,t]=Y.useState(0),[s,a]=Y.useState(!1),l=Y.useRef(null),u=Y.useRef({x:0,y:0}),d=Y.useCallback(()=>{a(!1),t(0)},[]);return Y.useEffect(()=>{if(s){l.current&&clearInterval(l.current);return}const p=n.current,g=p.getContext("2d"),y=p.parentElement;p.width=Math.min(y.clientWidth,500),p.height=Math.min(y.clientHeight,500);const b=20;let w=[{x:10,y:10}],R={},N={x:0,y:0};function L(){R={x:Math.floor(Math.random()*(p.width/b)),y:Math.floor(Math.random()*(p.height/b))}}function z(){if(N.x===0&&N.y===0){re();return}const te={x:w[0].x+N.x,y:w[0].y+N.y};if(te.x<0||te.x*b>=p.width||te.y<0||te.y*b>=p.height||w.some(he=>he.x===te.x&&he.y===te.y)){a(!0);return}w.unshift(te),te.x===R.x&&te.y===R.y?(t(he=>he+1),L()):w.pop(),re()}function re(){g.fillStyle="#111827",g.fillRect(0,0,p.width,p.height),g.fillStyle="#4ade80",w.forEach(te=>g.fillRect(te.x*b,te.y*b,b-1,b-1)),g.fillStyle="#f87171",g.fillRect(R.x*b,R.y*b,b,b)}const ne=te=>{switch(te.key){case"ArrowUp":N.y===0&&(N={x:0,y:-1});break;case"ArrowDown":N.y===0&&(N={x:0,y:1});break;case"ArrowLeft":N.x===0&&(N={x:-1,y:0});break;case"ArrowRight":N.x===0&&(N={x:1,y:0});break}},ie=te=>{u.current={x:te.touches[0].clientX,y:te.touches[0].clientY}},pe=te=>{const he={x:te.changedTouches[0].clientX,y:te.changedTouches[0].clientY},k=he.x-u.current.x,C=he.y-u.current.y;Math.abs(k)>Math.abs(C)?k>0&&N.x===0?N={x:1,y:0}:k<0&&N.x===0&&(N={x:-1,y:0}):C>0&&N.y===0?N={x:0,y:1}:C<0&&N.y===0&&(N={x:0,y:-1})};return document.addEventListener("keydown",ne),p.addEventListener("touchstart",ie),p.addEventListener("touchend",pe),L(),re(),l.current=setInterval(z,120),()=>{clearInterval(l.current),document.removeEventListener("keydown",ne),p.removeEventListener("touchstart",ie),p.removeEventListener("touchend",pe)}},[s]),E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsxs("h3",{className:"text-2xl font-bold mb-2",children:["Pontuação: ",e]}),E.jsxs("div",{className:"relative",children:[s&&E.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 animate-fade-in",children:[E.jsx("h2",{className:"text-4xl font-bold mb-4",children:"GAME OVER"}),E.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]}),E.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg"})]}),E.jsx("p",{className:"mt-2 text-sm text-gray-400",children:"Use as setas ou deslize na tela para mover."})]})},i3=()=>{const n=Y.useRef(null),[e,t]=Y.useState({player:0,computer:0}),[s,a]=Y.useState(!1),l=Y.useRef(null),u=Y.useCallback(()=>{a(!1),t({player:0,computer:0})},[]);return Y.useEffect(()=>{if(s){cancelAnimationFrame(l.current);return}const d=n.current,p=d.getContext("2d"),g=d.parentElement;d.width=Math.min(g.clientWidth,600),d.height=Math.min(g.clientHeight,400);let y={x:d.width/2,y:d.height/2,radius:10,speedX:5,speedY:5},b={x:10,y:d.height/2-50,width:10,height:100},w={x:d.width-20,y:d.height/2-50,width:10,height:100};function R(){y.x=d.width/2,y.y=d.height/2,y.speedX=-y.speedX}function N(){y.x+=y.speedX,y.y+=y.speedY,w.y+=(y.y-(w.y+w.height/2))*.1,(y.y+y.radius>d.height||y.y-y.radius<0)&&(y.speedY=-y.speedY),y.x-y.radius<0?(t(ie=>({...ie,computer:ie.computer+1})),R()):y.x+y.radius>d.width&&(t(ie=>({...ie,player:ie.player+1})),R()),(y.x-y.radius<b.x+b.width&&y.y>b.y&&y.y<b.y+b.height||y.x+y.radius>w.x&&y.y>w.y&&y.y<w.y+w.height)&&(y.speedX=-y.speedX),L(),l.current=requestAnimationFrame(N)}function L(){p.fillStyle="#111827",p.fillRect(0,0,d.width,d.height),p.fillStyle="white",p.fillRect(b.x,b.y,b.width,b.height),p.fillRect(w.x,w.y,w.width,w.height),p.beginPath(),p.arc(y.x,y.y,y.radius,0,Math.PI*2),p.fill()}const z=ie=>{const pe=d.getBoundingClientRect();b.y=ie-pe.top-b.height/2},re=ie=>z(ie.clientY),ne=ie=>{ie.preventDefault(),z(ie.touches[0].clientY)};return d.addEventListener("mousemove",re),d.addEventListener("touchmove",ne,{passive:!1}),N(),()=>{cancelAnimationFrame(l.current),d.removeEventListener("mousemove",re),d.removeEventListener("touchmove",ne)}},[s]),Y.useEffect(()=>{(e.player>=5||e.computer>=5)&&a(!0)},[e]),E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsxs("h3",{className:"text-2xl font-bold mb-2",children:["Você ",e.player," - ",e.computer," PC"]}),E.jsxs("div",{className:"relative",children:[s&&E.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 animate-fade-in",children:[E.jsx("h2",{className:"text-4xl font-bold mb-4",children:e.player>e.computer?"VOCÊ VENCEU!":"GAME OVER"}),E.jsxs("button",{onClick:u,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]}),E.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg cursor-none"})]}),E.jsx("p",{className:"mt-2 text-sm text-gray-400",children:"Mova o mouse ou toque para controlar."})]})},s3=()=>{const n=Y.useRef(null),[e,t]=Y.useState(0),[s,a]=Y.useState(!1),l=Y.useRef(null),u=Y.useCallback(()=>{a(!1),t(0)},[]);return Y.useEffect(()=>{if(s){cancelAnimationFrame(l.current);return}const d=n.current,p=d.getContext("2d"),g=d.parentElement;d.width=Math.min(g.clientWidth,320),d.height=Math.min(g.clientHeight,480);let y={x:50,y:150,width:20,height:20},b=.5,w=0,R=-8,N=[],L=40,z=120,re=0;function ne(){w=R}function ie(){a(!0)}function pe(){if(w+=b,y.y+=w,y.y+y.height>d.height||y.y<0){ie();return}if(re%90===0){const C=Math.random()*(d.height-z-100)+50;N.push({x:d.width,y:C})}for(let C=N.length-1;C>=0;C--){if(N[C].x-=3,y.x<N[C].x+L&&y.x+y.width>N[C].x&&(y.y<N[C].y||y.y+y.height>N[C].y+z)){ie();return}N[C].x+L<y.x&&!N[C].passed&&(N[C].passed=!0,t(I=>I+1)),N[C].x+L<0&&N.splice(C,1)}te(),re++,l.current=requestAnimationFrame(pe)}function te(){p.fillStyle="#87CEEB",p.fillRect(0,0,d.width,d.height),p.fillStyle="#FBBF24",p.fillRect(y.x,y.y,y.width,y.height),p.fillStyle="#22C55E",N.forEach(C=>{p.fillRect(C.x,0,L,C.y),p.fillRect(C.x,C.y+z,L,d.height-(C.y+z))})}const he=()=>{s||ne()},k=C=>{C.code==="Space"&&he()};return d.addEventListener("click",he),document.addEventListener("keydown",k),pe(),()=>{cancelAnimationFrame(l.current),d.removeEventListener("click",he),document.removeEventListener("keydown",k)}},[s]),E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-white p-4",children:[E.jsxs("h3",{className:"text-2xl font-bold mb-2",children:["Pontuação: ",e]}),E.jsxs("div",{className:"relative",children:[s&&E.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 animate-fade-in",children:[E.jsx("h2",{className:"text-4xl font-bold mb-4",children:"GAME OVER"}),E.jsxs("button",{onClick:u,className:"flex items-center gap-2 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95",children:[E.jsx(Ll,{size:18})," Jogar Novamente"]})]}),E.jsx("canvas",{ref:n,className:"bg-gray-900 rounded-lg"})]}),E.jsx("p",{className:"mt-4 text-sm text-gray-400",children:"Clique ou aperte Espaço para pular"})]})},PC=[{id:"tictactoe",name:"Jogo da Velha",component:E.jsx(J6,{})},{id:"rps",name:"Jokempô",component:E.jsx(e3,{})},{id:"breakout",name:"Break Bricks",component:E.jsx(t3,{})},{id:"snake",name:"Snake",component:E.jsx(n3,{})},{id:"pong",name:"Pong",component:E.jsx(i3,{})},{id:"flappy",name:"Flappy Bird",component:E.jsx(s3,{})}];function r3(){return E.jsxs(R6,{children:[E.jsx("style",{children:`
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
            `}),E.jsx("div",{className:"font-sans bg-gray-900 text-white h-screen w-screen overflow-hidden",children:E.jsx(a3,{})})]})}const a3=()=>{const{user:n,loading:e}=MC();I6(n);const t=async()=>{if(n)try{const s=Ua(za,`/status/${n.uid}`);await im(s,{state:"offline",last_changed:Date.now()}),await kt(yt(Re,`/users/${n.uid}`),{state:"offline",last_changed:Ga()}),await qN(uv)}catch(s){console.error("Erro ao fazer logout:",s)}};return e?E.jsx(O6,{}):n?E.jsx(W6,{user:n,onLogout:t}):E.jsx(P6,{})};pR.createRoot(document.getElementById("root")).render(E.jsx(Y.StrictMode,{children:E.jsx(r3,{})}));
